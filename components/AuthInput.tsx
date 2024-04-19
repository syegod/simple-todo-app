import React from 'react'

interface AuthInputProps {
    type: "text" | "password";
    name: string;
    placeholder?: string | undefined;
}

const AuthInput: React.FC<AuthInputProps> = ({type, placeholder, name}) => {
  return (
    <input type={type} placeholder={placeholder} name={name} className='p-3 border shadow-sm rounded focus-within:ring outline-none transition text-sm sm:w-[30ch]'/>
)
}

export default AuthInput