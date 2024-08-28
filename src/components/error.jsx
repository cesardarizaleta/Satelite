import React from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

export default function Error({message}) {
    return (
        <div id='error-msg' className="absolute p-4 rounded-md bg-opacity-75 m-2 bg-red-400 -top-1/2 transition-all
        duration-500 flex items-center gap-2">
            <MdOutlineReportGmailerrorred className="w-6 h-6" />    
            <p className="">{message}</p>
        </div>
    )
}