import React from "react";

const Navbar = ({onClick}) => {
    return (
        <>
    	<div className="w-[100vw] h-[80px] px-32 flex items-center justify-between fixed top-0 left-0">
        	<div className="h-[50px] w-[100px] cursor-pointer">
            	<img className="w-full h-full object-fit" src={require(`../assets/logo.jpeg`)}/>
            </div>
            
            <div
                onClick={onClick}
                className="text-black border-2 border-white text-xl font-bold w-40 h-[50px] flex justify-center items-center rounded-[5px] cursor-pointer">
           		<span className="text-white">connect wallet</span>
            </div>
        </div>
     </>
    )
}

export default Navbar
