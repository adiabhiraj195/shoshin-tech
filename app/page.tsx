import InfoCard from "@/components/info-card";
import GraphCard from "@/components/graph-card";
import { FaChevronDown } from "react-icons/fa";
import NotificationCard from "@/components/notification-card";



export default function Home() {
  return (
    <div className="">

      <div className=" h-[62px] pr-2.5 py-2.5 justify-start items-center gap-2.5 flex px-10">
        <h1 className="grow shrink basis-0 text-[#161E54] text-2xl">Dashboard</h1>
      </div>

      <div className="w-full h-auto flex flex-col xl:flex-row justify-center items-center px-10 gap-[30px]">

        {/* left column */}
        <div className="w-full gap-5 flex flex-col items-center justify-between">
          <div className="w-full gap-3 flex flex-col items-center">

            {/* card secion */}
            <div className="flex gap-3 items-center justify-between w-full">
              <InfoCard title="Available Position" value={"24"} subTitle={"4 Urgently needed"} color={"red"} />
              <InfoCard title="Job Open" value={"10"} subTitle={"4 Active hiring"} color={"blue"} />
              <InfoCard title="New Employees" value={"24"} subTitle={"4 Department"} color={"pink"} />
            </div>

            <div className="flex gap-4 w-full ">
              <GraphCard
                title={"Total Employees"}
                value={"216"}
                numberOfMen={"120"}
                numberOfWomen={"96"}
                incrementPercentage={"2"}
              />
              <GraphCard
                title={"Talent Request"}
                value={"16"}
                numberOfMen={"6"}
                numberOfWomen={"10"}
                incrementPercentage={"5"}
              />
            </div>

          </div>

          {/* announcement section */}
          <Announcements />
        </div>

        {/* right column */}
        <div className="flex xl:flex-col md:flex-row flex-col gap-5 w-full ">

          {/*resentaly active blue boxs */}
          <div className="xl:w-full md:w-[427px] w-full h-[258px] bg-[#161E54] rounded-[10px] flex flex-col justify-between pb-[26px]" >
            <div className="w-full h-12 pl-6 pr-2.5 py-2.5 bg-[#1b204a] rounded-tl-[10px] rounded-tr-[10px] justify-start items-center flex overflow-hidden">
              <p className=" text-white text-lg font-medium ">Recently Activity</p>
            </div>

            <div className="w-full px-6">
              <p className="opacity-60 text-white text-[10px] font-medium ">10.40 AM, Fri 10 Sept 2021</p>

              <p className="text-white text-lg font-medium">You Posted a New Job</p>

              <p className="opacity-80 text-white text-sm ">
                Kindly check the requirements and terms of work and make sure everything is right.
              </p>
            </div>

            <div className="w-full justify-between items-center flex px-6">
              <div className="text-white text-sm">Today you makes 12 Activity</div>
              <button className="px-4 py-2.5 bg-[#ff5151] text-white text-sm rounded justify-center items-center gap-2.5 flex overflow-hidden">
                See All Activity
              </button>
            </div>
          </div>

          {/* upcomming schedules prior others */}
          <UpcomingSchedules />

        </div>
      </div>
    </div>

  );
}

const UpcomingSchedules = () => {
  const schedules = [
    {
      title: "Interview with candidates",
      time: "Today - 10.30 AM",
      hidePin: true
    },
    {
      title: "Short meeting with product designer from IT Departement",
      time: "Today - 09.15 AM",
      hidePin: true
    },
    {
      title: "Interview with candidates",
      time: "Today - 10.30 AM",
      hidePin: true
    },
    {
      title: "Interview with candidates",
      time: "Today - 10.30 AM",
      hidePin: true
    },
  ]

  return (
    <div className="w-auto h-[424px] bg-white rounded-xl border border-[#e0e0e0] pt-[21px] px-[21px] relative overflow-hidden" >

      <div className="flex justify-between items-center">
        <p className="text-[#161E54] text-lg font-semibold">Upcoming Schedule</p>

        <div className="px-1.5 py-1 gap-2 bg-white rounded border border-[#efefef] justify-between items-center inline-flex">
          <div className="text-[#686868] text-xs font-normal">Today, 13 Sep 2021</div>

          <FaChevronDown className="text-[#686868] relative overflow-hidden" />
        </div>
      </div>

      <div className="scroll-smooth overflow-y-scroll no-scrollbar w-full h-full overflow-hidden flex flex-col gap-3">

        <div className=" text-[#686868] text-xs font-normal ">Priority</div>
        <div className="flex flex-col gap-2">
          <NotificationCard annoucemnet={"Review candidate applications"} time={"Today - 11.30 AM"} hidePin={true} />

        </div>

        <div className=" text-[#686868] text-xs font-normal ">Other</div>
        <div className="flex flex-col gap-2">
          {schedules.map((schedule, idx) => (
            <NotificationCard annoucemnet={schedule.title} time={schedule.time} hidePin={schedule.hidePin} key={idx} />
          ))}
        </div>
      </div>


      <div className="w-full p-2.5 bg-white absolute text-[#ff5151] bottom-0 left-0 border-t border-[#e0e0e0] justify-center items-center gap-2.5 flex hover:underline cursor-pointer">
        Creat a New Schedule
      </div>
    </div>
  )
}

const Announcements = () => {
  const annoucemnets = [
    {
      title: "Outing schedule for every departement",
      time: "5 Minutes ago",
      hidePin: false
    },
    {
      title: "Meeting HR Department",
      time: "Yesterday, 12:30 PM",
      hidePin: false
    },
    {
      title: "IT Department need two more talents for UX/UI Designer position",
      time: "Yesterday, 09:15 AM",
      hidePin: false
    },
    {
      title: "Outing schedule for every departement",
      time: "5 Minutes ago",
      hidePin: false
    },
  ]
  return (
    <div className="w-full h-[334px] bg-white rounded-xl border border-[#e0e0e0] pt-4 px-[22px] flex flex-col gap-4 overflow-hidden  relative" >
      <div className="flex justify-between items-center ">
        <p className=" text-[#161E54] text-lg font-semibold">Announcement</p>

        <div className="px-1.5 py-1 gap-2 bg-white rounded border border-[#efefef] justify-between items-center inline-flex">
          <div className="text-[#686868] text-xs font-normal">Today, 13 Sep 2021</div>

          <FaChevronDown className="relative  overflow-hidden text-[#686868]" />
        </div>
      </div>

      <div className="gap-2 flex flex-col scroll-smooth overflow-y-scroll no-scrollbar">

        {annoucemnets.map((annoucemnet, idx) => (
          <NotificationCard annoucemnet={annoucemnet.title} time={annoucemnet.time} hidePin={annoucemnet.hidePin} key={idx} />
        ))}

      </div>

      <div className="w-full p-2.5 bg-white absolute text-[#ff5151] bottom-0 left-0 border-t border-[#e0e0e0] justify-center items-center gap-2.5 flex hover:underline cursor-pointer">
        See All Announcement
      </div>
    </div>
  )
}