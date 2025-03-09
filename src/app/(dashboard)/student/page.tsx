import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import EventCalendar from '@/components/EventCalendar'

const StudentPage = () => {
    return (
        <div className='flex-1 p-4 flex gap-4 flex-col xl:flex-row'>
            {/* left */}
            <div className='w-full xl:w-2/3'>
                <div className='h-[800px] bg-white p-4 rounded-md'>
                    <h1 className='text-xl font-semibold'>Schedule (4A)</h1>
                    <BigCalendar />
                </div>
            </div>

            {/* right */}
            <div className='w-full xl:w-1/3 flex flex-col gap-4'>
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    )
}

export default StudentPage