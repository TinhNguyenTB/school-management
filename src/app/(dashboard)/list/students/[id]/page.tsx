import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";


export default function SingleStudentPage() {
    return (
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
            {/* left */}
            <div className="w-full xl:w-2/3">
                {/* top */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* user info card */}
                    <div className="bg-mySky py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3">
                            <Image src={"https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"}
                                alt="" width={140} height={140}
                                className="w-36 h-36 rounded-full object-cover"
                            />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <h1 className="text-xl font-semibold">Leonard Snyder</h1>
                            <p className="text-sm text-gray-500">
                                Ex porro, doloribus suscipit ipsam ullam, facere cumque maxime expedita asperiores
                            </p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                                    <Image src={"/blood.png"} alt="" width={14} height={14} />
                                    <span>A+</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                                    <Image src={"/date.png"} alt="" width={14} height={14} />
                                    <span>January 2025</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                                    <Image src={"/mail.png"} alt="" width={14} height={14} />
                                    <span>user@gmail.com</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                                    <Image src={"/phone.png"} alt="" width={14} height={14} />
                                    <span>+1 234 567</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* small cards */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {/* card */}
                        <div className="w-full p-4 bg-white rounded-md flex gap-4 md:w-[48%] lg:w-[47%]">
                            <Image src={"/singleAttendance.png"} alt="" height={24} width={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        {/* card */}
                        <div className="w-full p-4 bg-white rounded-md flex gap-4 md:w-[48%] lg:w-[47%]">
                            <Image src={"/singleBranch.png"} alt="" height={24} width={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">6th</h1>
                                <span className="text-sm text-gray-400">Grade</span>
                            </div>
                        </div>
                        {/* card */}
                        <div className="w-full p-4 bg-white rounded-md flex gap-4 md:w-[48%] lg:w-[47%]">
                            <Image src={"/singleLesson.png"} alt="" height={24} width={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">18</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>
                        {/* card */}
                        <div className="w-full p-4 bg-white rounded-md flex gap-4 md:w-[48%] lg:w-[47%]">
                            <Image src={"/singleClass.png"} alt="" height={24} width={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">6A</h1>
                                <span className="text-sm text-gray-400">Class</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* bottom */}
                <div className="mt-4 rounded-md bg-white p-4 h-[800px]">
                    <h1 className="text-xl font-semibold">Student's Schedule</h1>
                    <BigCalendar />
                </div>
            </div>
            {/* right */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-md">
                    <h1 className="text-xl font-semibold">Shortcuts</h1>
                    <div className="flex flex-wrap mt-4 gap-4 text-xs text-gray-500">
                        <Link href={`/list/lessons?classId=${2}`} className="p-3 rounded-md bg-mySkyLight">
                            Student's Lessons
                        </Link>
                        <Link href={`/list/teachers?classId=${2}`} className="p-3 rounded-md bg-myPurpleLight">
                            Student's Teachers
                        </Link>
                    </div>
                </div>
                <Performance />
                <Announcements />
            </div>
        </div>
    )
}
