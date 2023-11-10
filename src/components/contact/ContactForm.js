import React, { useState, useEffect } from 'react';
import { Core } from '..';
import checkWhiteCheck from '../../assets/images/icon/check-white-circle.svg';

function ContactForm() {
    const [fullName, setFullName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [toggleThankyouModal, setToggleThankyouModal] = useState(false);
    // console.log("fullName", fullName)
    // console.log("lastName", lastName)
    // console.log("email", email)
    // console.log("phoneNumber", phoneNumber)
    // console.log("message", message)







    // Validation state for each input field
    const [fullNameError, setFullNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [messageError, setMessageError] = useState("");

    // Function to validate email format
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Function to validate phone number format
    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\d{4}-\d{7}$/;
        return phoneRegex.test(phoneNumber);
    };

    // Function to handle form submission
    const handleSubmit = () => {
        // Perform validation
        let isValid = true;

        if (!fullName) {
            setFullNameError("Please enter your full name");
            isValid = false;
        } else {
            setFullNameError("");
        }

        if (!lastName) {
            setLastNameError("Please enter your last name");
            isValid = false;
        } else {
            setLastNameError("");
        }

        if (!email || !validateEmail(email)) {
            setEmailError("Please enter a valid email address");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!phoneNumber || !validatePhoneNumber(phoneNumber)) {
            setPhoneNumberError("Please enter a valid phone number");
            isValid = false;
        } else {
            setPhoneNumberError("");
        }

        if (!message) {
            setMessageError("Please enter your message");
            isValid = false;
        } else {
            setMessageError("");
        }

        // If all inputs are valid, submit the form
        if (isValid) {
            // Perform form submission logic
            setToggleThankyouModal(true);
        }
    };









    useEffect(() => {
        // After 4 seconds (4000 milliseconds), set toggleThankyouModal to false
        const timeoutId = setTimeout(() => {
            setToggleThankyouModal(false);
        }, 4000);

        // Clear the timeout to prevent memory leaks when the component unmounts
        return () => clearTimeout(timeoutId);
    }, [toggleThankyouModal]); // The empty dependency array ensures this effect runs once on component mount



    const Overlay = ({ children }) => {
        return (
            <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
                {children}
            </div>
        );
    };

    const isFormValid = () => {
        return (
            !fullNameError &&
            !lastNameError &&
            !emailError &&
            !phoneNumberError &&
            !messageError &&
            fullName.trim() !== "" &&
            lastName.trim() !== "" &&
            email.trim() !== "" &&
            phoneNumber.trim() !== "" &&
            message.trim() !== ""
        );
    };
     
    return (
        <section className='w-full relative'>
            {toggleThankyouModal &&
                <Overlay>
                    <div className="flex flex-col justify-center items-center bg-green -3 rounded-lg shadow-lg p-16">
                        <img className="w-[80px]" src={checkWhiteCheck} alt="big image" />
                        <h1 className="text-white text-[35px] font-bold">Thank you for contacting us!</h1>
                        <p className='text-white '>Lorem Ipsum is simply dummy text the printing and typesetting industry   text the printing</p>
                    </div>
                </Overlay>
            }
            <Core.Container>
                <form className='pt-3 sm:pt-5 md:pt-10 pb-8 sm:pb-24 md:pb-52'>
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 gap-x-16 gap-y-3 sm:gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <Core.InputWithLabel2
                                    setState={setFullName}
                                    setErrorMessage={setFullNameError}
                                    errorMessage={fullNameError}

                                    name="fullName"
                                />
                                {/* <label for="first-name" className="text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-medium">First name</label>
                                <div className="mt-2">
                                    <input type="text" name="first-name" id="first-name" placeholder='First name' autocomplete="given-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[15px]" />
                                </div> */}
                            </div>
                            <div className="sm:col-span-3">
                                <Core.InputWithLabel2
                                    setState={setLastName}
                                    setErrorMessage={setLastNameError}
                                    errorMessage={lastNameError}

                                    name="lastName"
                                />
                                {/* <label for="last-name" className="text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-medium">Last name</label>
                                <div className="mt-2">
                                    <input type="text" name="last-name" id="last-name" placeholder='Last name' autocomplete="family-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[15px]" />
                                </div> */}
                            </div>
                            <div className="sm:col-span-3">
                                <Core.InputWithLabel2
                                    setState={setEmail}
                                    setErrorMessage={setEmailError}
                                    errorMessage={emailError}

                                    name="email"
                                />
                                {/* <label for="email" className="text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-medium">Email</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" placeholder='Email' autocomplete="email" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[15px]" />
                                </div> */}
                            </div>
                            <div className="sm:col-span-3">
                                <Core.InputWithLabel2
                                    setState={setPhoneNumber}
                                    setErrorMessage={setPhoneNumberError}
                                    errorMessage={phoneNumberError}

                                    name="phoneNumber"
                                />
                                {/* <label for="phone" className="text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-medium">Phone Number</label>
                                <div className="mt-2">
                                    <input id="phone" name="phone" type="text" placeholder='Phone Number' autocomplete="phone" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[15px]" />
                                </div> */}
                            </div>
                            <div className="col-span-full">
                                <Core.InputWithLabel2
                                    setState={setMessage}
                                    setErrorMessage={setMessageError}
                                    errorMessage={messageError}

                                    name="message"
                                />
                                {/* <label for="about" className="text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-medium">Message</label> */}
                                {/* <div className="mt-2"> */}
                                {/* <textarea id="message" name="message" rows="4" placeholder='Message' className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[15px]"></textarea> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 sm:mt-6 flex items-center justify-start gap-x-6">
                        <Core.Button greenIconicMd onclick={handleSubmit} disabled={!isFormValid()}>Submit</Core.Button>
                    </div>
                </form>
            </Core.Container>
        </section>
    )
}

export default ContactForm