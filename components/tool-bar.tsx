"use client"
import React, { useState } from 'react'
import sIcon from "@/assets/search-icon.svg"
import Image from 'next/image'
import profileImage from "@/assets/profile-img.png"
import { AiFillNotification } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";

export default function Toolbar() {
    const [searchValue, setSearchValue] = useState("")
    return (
        <div className=" mx-[50px] max-w-auto flex justify-between items-center border-b">
            <div className="md:w-[343px] w-auto h-11 px-4 py-2.5 md:bg-[#f9f9f9] bg-transparent rounded md:border border-[#e0e0e0] hover:border-[#161E54] justify-between items-center flex overflow-hidden">
                <input className="hidden md:flex text-base font-normal outline-none w-full text-[#161E54] bg-transparent" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Search' />
                <div className="w-6 h-6 overflow-hidden">
                    <Image src={sIcon} alt='Search' />
                </div>
            </div>

            <div className="w-auto h-[90px] px-[50px] py-6 justify-center items-center gap-[30px] flex">
                <div className="w-6 h-6 flex justify-center items-center ">
                    <AiFillNotification className='text-[#c4c4c4] h-full w-full hover:text-[#161E54] cursor-pointer' />
                </div>
                <div className="w-6 h-6 flex justify-center items-center">
                    <RiMessage2Fill className='text-[#c4c4c4] h-full w-full hover:text-[#161E54] cursor-pointer' />
                </div>
                <div className="h-[42px] justify-start items-center gap-3 inline-flex cursor-pointer">
                    <div className="w-[42px] h-[42px] bg-[#c4c4c4] rounded-full overflow-hidden" >
                        <Image src={profileImage} alt='' />
                    </div>
                    <div className="justify-start items-center gap-1 lg:flex hidden">
                        <div className="text-[#161E54] text-base hover:underline cursor-pointer">
                            Admirra John {">"}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
