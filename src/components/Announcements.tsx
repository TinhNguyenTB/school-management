

const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Announcements</h1>
                <span className="text-xs text-gray-400">
                    View All
                </span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-mySky rounded-md p-2">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-03-08</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consecte, adipisicing elit. Iusto temporibus officiis error maxime vel</p>
                </div>
                <div className="bg-myPurpleLight rounded-md p-2">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-03-08</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consecte, adipisicing elit. Iusto temporibus officiis error maxime vel</p>
                </div>
                <div className="bg-myYellowLight rounded-md p-2">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-03-08</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consecte, adipisicing elit. Iusto temporibus officiis error maxime vel</p>
                </div>
            </div>
        </div>
    )
}

export default Announcements