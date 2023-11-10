import React, { useState } from 'react';

function InputWithLabel({ name, setState, errorMessage, setErrorMessage }) {

    const label = (name) => {
        switch (name) {
            case "fullName":
                return "Full Name";
            case "lastName":
                return "Last Name";
            case "email":
                return "Email";
            case "message":
                return "Message";
            case "phoneNumber":
                return "Phone Number";
            default:
                return "Label";
        }
    }

    const type = (name) => {
        switch (name) {
            case "email":
            case "fullName":
            case "lastName":
            case "message":
            case "phoneNumber":
                return "text";
            default:
                return "text";
        }
    }

    const placeholder = (name) => {
        switch (name) {
            case "email":
                return "name@gmail.com";
            case "fullName":
                return "Full Name";
            case "lastName":
                return "Last Name";
            case "message":
                return "Message";
            case "phoneNumber":
                return "0000-0000000";
            default:
                return "";
        }
    }

    const validateInput = (name, value) => {
        switch (name) {
            case "fullName":
                return value.trim() === "" ? "Please enter your full name" : !/\w+/.test(value) ? "Please enter at least one word" : "";
            case "lastName":
                return value.trim() === "" ? "Please enter your last name" : !/\w+/.test(value) ? "Please enter at least one word" : "";
            case "email":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return !emailRegex.test(value) ? "Please enter a valid email address" : "";
            case "phoneNumber":
                // const phoneRegex = /^\d{4}-\d{7}$/;
                const phoneRegex = /^[\d-]{1,18}$/;
                return !phoneRegex.test(value) ? "Please enter a valid phone number" : "";
            case "message":
                return value.trim() === "" ? "Please enter your message" : "";
            default:
                return "";
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState(value);
        const validationError = validateInput(name, value);
        setErrorMessage(validationError);
    };

    return (
        <div className="col-span-full">
            <label for={name} className="text-dark-blue text-[12px] sm:text-[14px] md:text-[18px] leading-[18px] sm:leading-[20px] md:leading-[30px] font-medium">{label(name)}</label>
            <div className="mt-1 sm:mt-2">
                {name !== "message" &&
                    <>
                        <input
                            onChange={handleInputChange}
                            type={type(name)}
                            name={name}
                            id={name}
                            placeholder={placeholder(name)}
                            autocomplete="off"
                            className="w-full text-dark-blue text-[12px] md:text-[16px] leading-[18px] md:leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[12px] md:py-[15px]"
                        />
                        {errorMessage && <p className='text-[red] text-[12px] leading-[14px] pt-2 pl-1'>{errorMessage}</p>}
                    </>
                }
                {name === "message" &&
                    <>
                        <textarea
                            onChange={handleInputChange}
                            id={name}
                            name={name}
                            rows="4"
                            placeholder={placeholder(name)}
                            className="w-full text-dark-blue last:text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[15px]"
                        ></textarea>
                        {errorMessage && <p className='text-[red] text-[12px] leading-[14px] pt-2 pl-1'>{errorMessage}</p>}
                    </>
                }
            </div>
        </div>
    )
}

export default InputWithLabel


