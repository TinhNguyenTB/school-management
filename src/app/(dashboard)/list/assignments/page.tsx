import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, assignmentsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Assignment = {
    id: number,
    subject: string,
    class: string,
    teacher: string,
    dueDate: string
}

const columns = [
    {
        header: "Subject Name",
        accessor: "name",
        className: "pl-2"
    },
    {
        header: "Class",
        accessor: "class"
    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "hidden md:table-cell"
    },
    {
        header: "Due date",
        accessor: "dueDate",
        className: "hidden md:table-cell"
    },
    {
        header: "Actions",
        accessor: "action",
        className: "pl-2"
    }
]
const AssignmentListPage = () => {
    const renderRow = (item: Assignment) => {
        return (
            <tr key={item.id}
                className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-myPurpleLight"
            >
                <td className="table-cell p-2">
                    <h4>{item.subject}</h4>
                </td>
                <td>
                    <p className="text-xs text-gray-500">{item.class}</p>
                </td>
                <td className="hidden md:table-cell">
                    <p className="text-xs text-gray-500">{item.teacher}</p>
                </td>
                <td className="hidden md:table-cell">
                    <p className="text-xs text-gray-500">{item.dueDate}</p>
                </td>
                <td className="flex items-center gap-2 pt-1">
                    <Link href={`/list/subjects/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-mySky">
                            <Image src={"/edit.png"} alt="" width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && (
                        <FormModal table="assignment" type="delete" id={item.id} />
                    )}
                </td>
            </tr>
        )
    }
    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* top */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Assignments</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-myYellow">
                            <Image src={"/filter.png"} alt="" width={14} height={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-myYellow">
                            <Image src={"/sort.png"} alt="" width={14} height={14} />
                        </button>
                        {role === "admin" && (
                            <FormModal table="assignment" type="create" />
                        )}
                    </div>
                </div>
            </div>
            {/* list */}
            <Table
                columns={columns}
                renderRow={renderRow}
                data={assignmentsData}
            />
            {/* pagination */}
            <Pagination />
        </div>
    )
}

export default AssignmentListPage