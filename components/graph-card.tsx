import React from 'react'
import graph1 from "@/assets/Vector 2.png"
import graph2 from "@/assets/Vector 3.png"
import Image from 'next/image'

export default function GraphCard({
    title,
    value,
    numberOfMen,
    numberOfWomen,
    incrementPercentage
}: {
    title: string
    value: string
    numberOfMen: string
    numberOfWomen: string
    incrementPercentage: string
}) {
    return (

        <div className="w-full h-[190px] p-5 bg-white rounded-[10px] border border-[#e0e0e0] justify-between items-center  inline-flex overflow-hidden">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                <div className="text-[#161E54] flex-col justify-start items-start gap-[22px] flex">
                    <h1 className="w-[150px] text-lg font-medium">{title}</h1>
                    <p className="self-stretch text-5xl font-medium">{value}</p>
                </div>
                <div className=" flex-col justify-start items-start gap-1 flex">
                    <p className="self-stretch text-[#686868] text-xs ">{numberOfMen} Men</p>
                    <p className="self-stretch text-[#686868] text-xs">{numberOfWomen} Women</p>
                </div>
            </div>

            <div className="flex-col justify-between items-center gap-5 inline-flex w-full">
                <div className="w-full h-[78px] relative flex flex-col items-center justify-between">
                    <div className="w-6 h-3 left-[42.50px] top-0 absolute text-[#ff5151] text-[12px]">+{incrementPercentage}%</div>
                    {/* <div className="w-6 h-3 left-[42.50px] top-0 absolute text-[#ff5151] text-[10px] font-medium font-['Rubik'] leading-normal">|</div> */}

                    <Image src={graph1} alt="" className="w-full  left-0 top-[10px] absolute  overflow-hidden" />
                    <Image src={graph2} alt="" className="w-full left-0 top-[10px] absolute  overflow-hidden" />
                </div>
                <div className="px-2.5 py-1 bg-[#ffefe7] rounded justify-center items-center gap-2.5 flex text-[#2f2f2f] text-xs font-normal">
                    +{incrementPercentage}% Past month
                </div>
            </div>
        </div>
    )
}
