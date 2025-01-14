import React from 'react'

export default function InfoCard({
    title,
    value,
    subTitle,
    color
}: {
    title: string
    value: string
    subTitle: string
    color: "red" | "blue" | "pink"
}) {
    let bgColor;
    let textColor;
    if (color === "red") {
        bgColor = "bg-[#ffefe7]"
        textColor = "text-[#ff5151]"
    } else if (color == "blue") {
        bgColor = "bg-[#e8f0fb]"
        textColor = "text-[#3785f1]"
    } else {
        bgColor = "bg-[#fdebf9]"
        textColor = "text-[#ee61cf]"
    }
    return (
        <div className={`w-full h-[136px] pl-5 pr-3 py-3 ${bgColor} text-[#161E54] rounded-[10px] border flex-col justify-center items-start gap-4 inline-flex overflow-hidden`}>
            <div className="self-stretch  text-lg font-medium">{title}</div>
            <div className="self-stretch text-4xl font-medium">{value}</div>
            <div className={`self-stretch text-base font-normal ${textColor}`}>{subTitle}</div>
        </div>
    )
}
