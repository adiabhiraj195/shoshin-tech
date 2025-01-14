import React from 'react'
import logo from "@/assets/logo.png"
import Image from 'next/image'
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserPlus, FaUsers, FaHeadphones } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import { IoIosHelpBuoy } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";

export default function Navbar() {
    return (
        <div className="xl:w-[242px] w-[90px] min-h-screen py-5 xl:py-5 flex-col justify-start items-center gap-[39px] hidden sm:flex bg-[#f1f1f1] border-r">

            <div className="p-2.5 justify-center items-center gap-2.5 flex">
                <Image src={logo} alt='logo' className='text-center' />
                <p className="text-[#0A337A] font-bold text-xl hidden xl:flex">Vasitum</p>
            </div>

            <div className="w-full flex-col justify-center xl:justify-start items-start flex">
                <div className="w-full xl:pl-[30px] py-2.5 justify-center xl:justify-start items-center flex text-[#686868] text-xs font-bold opacity-50 ">
                    MAIN MENU
                </div>

                <div className="w-full xl:pl-[30px] py-4 justify-center xl:justify-start items-center gap-6 flex text-[#686868] cursor-pointer hover:text-[#ff5151]">
                    <MdSpaceDashboard />
                    <p className=" text-base font-medium hidden xl:flex">Dashboard</p>
                </div>
                <div className="w-full xl:pl-[30px] py-4 justify-center xl:justify-start items-center gap-6 inline-flex overflow-hidden text-[#686868] cursor-pointer hover:text-[#ff5151]">
                    <FaUserPlus />
                    <p className=" text-base font-medium justify-center hidden xl:flex">Recruitment</p>
                </div>
                <div className="w-full xl:pl-[30px] py-4 justify-center xl:justify-start items-center gap-6 inline-flex overflow-hidden text-[#686868] cursor-pointer hover:text-[#ff5151]">
                    <FaCalendarDay />
                    <p className=" text-base font-medium hidden xl:flex">Schedule</p>
                </div>
                <div className="w-full xl:pl-[30px] py-4 justify-center xl:justify-start items-center gap-6 inline-flex overflow-hidden text-[#686868] cursor-pointer hover:text-[#ff5151]">
                    <FaUsers />
                    <p className=" text-base font-medium hidden xl:flex">Employee</p>
                </div>
                <div className="w-full xl:pl-[30px] py-4 justify-center xl:justify-start items-center gap-6 inline-flex overflow-hidden text-[#686868] cursor-pointer hover:text-[#ff5151]">
                    <IoIosHelpBuoy />
                    <p className=" text-base font-medium hidden xl:flex">Department</p>
                </div>


            </div>
            <div className="flex-col justify-center xl:justify-start items-center flex w-full">
                <div className="w-full xl:pl-[30px] py-2.5 justify-center xl:justify-start items-center flex text-[#686868] text-xs font-bold opacity-50 ">
                    OTHER
                </div>
                <div className="w-full xl:pl-[30px] py-4 justify-center xl:justify-start items-center gap-6 inline-flex overflow-hidden text-[#686868] cursor-pointer hover:text-[#ff5151]">
                    <FaHeadphones />
                    <p className=" text-base font-medium hidden xl:flex">Support</p>
                </div>
                <div className="w-full xl:pl-[30px] py-4 justify-center xl:justify-start items-center gap-6 inline-flex overflow-hidden text-[#686868] cursor-pointer hover:text-[#ff5151]">
                    <IoSettingsSharp />
                    <p className=" text-base font-medium hidden xl:flex">Settings</p>
                </div>
            </div>
        </div>
    )
}
