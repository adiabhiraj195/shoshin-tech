import React from 'react'
import { BsPinAngleFill, BsThreeDots } from "react-icons/bs";

export default function NotificationCard({
    annoucemnet,
    time,
    hidePin
}: {
    annoucemnet: string
    time: string
    hidePin?: boolean
}) {
    return (
        <div className="w-full px-4 py-3 bg-[#f9f9f9] rounded-md border border-[#e0e0e0] justify-between items-center flex cursor-pointer hover:shadow-md hover:bg-[#ececec] hover:border-[#FF5151]">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-[#2f2f2f] text-base font-normal ">{annoucemnet}</div>
                <div className="self-stretch text-[#686868] text-[10px] font-normal ">{time}</div>
            </div>
            <div className="h-6 justify-end items-center gap-5 flex">
                {!hidePin && <BsPinAngleFill className="w-6 h-6 relative text-[#686868] overflow-hidden" />}
                <BsThreeDots className="w-6 h-6 relative text-[#686868] overflow-hidden" />
            </div>
        </div>
    )
}
