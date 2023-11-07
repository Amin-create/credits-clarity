import React, { useState } from 'react';
import envelope from '../../assets/images/icon/envelope.svg';
import key from '../../assets/images/icon/key.svg';
import user from '../../assets/images/icon/user.svg';
import card from '../../assets/images/icon/card.svg';
import mobile from '../../assets/images/icon/mobile.svg';
import calender from '../../assets/images/icon/calender.svg';
import eye_close from '../../assets/images/icon/eye-close.svg';
import eye_open from '../../assets/images/icon/eye-open.svg';

function InputWithLabel({ name, setState
}) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [inputType, setInputType] = useState('text');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        setInputType(passwordVisible ? 'password' : 'text');
    };

    const label = (name) => {
        switch (name) {
            case "fullName":
                return "Full Name";
            case "email":
                return "Email";
            case "password":
                return "Password";
            case "confirmPassword":
                return "Confirm Password";
            case "calender":
                return "DOB";
            case "ssn":
                return "SSN";
            case "mobileNumber":
                return "Mobile Number";
            default:
                return "Label";
        }
    }

    const icon = (name) => {
        switch (name) {
            case "email":
                return envelope;
            case "password":
            case "confirmPassword":
                return key;
            case "fullName":
                return user;
            case "calender":
                return calender;
            case "ssn":
                return card;
            case "mobileNumber":
                return mobile;
            default:
                return mobile;
        }
    }

    const type = (name) => {
        switch (name) {
            case "email":
            case "fullName":
            case "ssn":
            case "mobileNumber":
                return "text";
            case "password":
            case "confirmPassword":
                return "password";
            case "calender":
                return "date";
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
            case "password":
            case "confirmPassword":
                return "********";
            case "ssn":
                return "AAA-GG-SSSS";
            case "mobileNumber":
                return "0000-0000000";
            default:
                return "";
        }
    }

    const isPasswordInput = name === "password" || name === "confirmPassword" ? true : false;

    return (
        <div className="col-span-full">
            <label for={name} className="text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-medium">{label(name)}</label>
            <div className="relative mt-1 md:mt-2">
                <img className="absolute w-[16px] md:w-[auto] left-3 md:left-5 top-[12px] md:top-[18px]" src={icon(name)} alt="big image" />
                <input
                    onChange={(e) => setState(e.target.value)}
                    type={isPasswordInput ? inputType : type(name)}
                    name={name}
                    id={name}
                    placeholder={placeholder(name)}
                    autocomplete="off"
                    className="w-full text-dark-blue text-[12px] md:text-[16px] leading-[18px] md:leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[35px] md:pl-[60px] pr-[8px] md:pr-[15px] py-[12px] md:py-[15px]" />
                {isPasswordInput &&
                    <img
                        className="absolute w-[16px] md:w-[auto] right-3 md:right-5 top-[12px] md:top-[18px] cursor-pointer"
                        src={passwordVisible ? eye_open : eye_close}
                        onClick={togglePasswordVisibility}
                        alt="eye icon"
                    />}
            </div>
        </div>
    )
}

export default InputWithLabel


