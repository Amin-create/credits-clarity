import React from 'react';

function InputWithLabel({ name, setState }) {

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

    return (
        <div className="col-span-full">
            <label for={name} className="text-dark-blue text-[12px] sm:text-[14px] md:text-[18px] leading-[18px] sm:leading-[20px] md:leading-[30px] font-medium">{label(name)}</label>
            <div className="mt-1 sm:mt-2">
                {name !== "message" &&
                    <input
                        onChange={(e) => setState(e.target.value)}
                        type={type(name)}
                        name={name}
                        id={name}
                        placeholder={placeholder(name)}
                        autocomplete="off"
                        className="w-full text-dark-blue text-[12px] md:text-[16px] leading-[18px] md:leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[12px] md:py-[15px]"
                    />
                }
                {name === "message" &&
                    <textarea id={name} name={name} rows="4" placeholder={placeholder(name)} className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[15px]"></textarea>
                }
            </div>
        </div>
    )
}

export default InputWithLabel


