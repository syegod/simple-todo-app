'use client';

import { useState } from "react";
import AuthInput from "./AuthInput";

const AuthForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    if (isSignIn) {
        return (
            <form className="flex flex-col items-center gap-10 bg-gray-100 sm:p-5 sm:shadow-md sm:mt-20 rounded">
                <span className="text-xl font-semibold text-gray-500">
                    Sign in
                </span>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <span className="text-lg font-normal text-gray-500">Username:</span>
                        <AuthInput type={"text"} name={"username"} placeholder="Enter username..." />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-lg font-normal text-gray-500">Password:</span>
                        <AuthInput type={"password"} name={"password"} placeholder="Enter password..." />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <button type="submit" className="bg-fuchsia-800 hover:bg-fuchsia-700 transition rounded w-full p-2 text-white shadow-md">Sign in</button>
                    <button type="button" onClick={() => setIsSignIn(false)} className="border hover:bg-gray-200 text-gray-500 transition rounded w-full p-2 shadow-md">or sign up here</button>
                </div>
            </form>
        )
    } else {
        return (
            <div>
                
            </div>
        )
    }
}

export default AuthForm