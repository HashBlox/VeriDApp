import React from "react";


const Button = ({placeholder, onClick) => {
    return (
    	<div
           onClick={onClick}; 
            className="text-black border-2 border-white text-xl font-bold w-40 h-[50px] flex justify-		center items-center rounded-[5px] cursor-pointer">
         <span className="text-white">{placeholder}</span>
        </div>
    )
}