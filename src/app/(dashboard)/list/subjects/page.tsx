import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, subjectsData } from "@/lib/data"
import Image from "next/image"

type Subject = {
    id: number,
    name: string,
    teachers: string[]
}

const columns = [
    {
        header: "Subject Name",
        accessor: "name",
        className: "pl-2"
    },
    {
        header: "Teachers",
        accessor: "teachers",
        className: "hidden md:table-cell"
    },
    {
        header: "Actions",
        accessor: "action",
        className: "pl-2"
    }
]
const SubjectListPage = () => {
    const renderRow = (item: Subject) => {
        return (
            <tr key={item.id}
                className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-myPurpleLight"
            >
                <td className="table-cell p-2">
                    <h4>{item.name}</h4>
                </td>
                <td className="hidden md:table-cell">
                    <p className="text-xs text-gray-500">{item.teachers.join(",")}</p>
                </td>
                <td className="flex items-center gap-2 pt-1">
                    <FormModal table="subject" type="update" data={item} />
                    {role === "admin" && (
                        <FormModal table="subject" type="delete" id={item.id} />
                    )}
                </td>
            </tr>
        )
    }
    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* top */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
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
                            <FormModal table="subject" type="create" />
                        )}
                    </div>
                </div>
            </div>
            {/* list */}
            <Table
                columns={columns}
                renderRow={renderRow}
                data={subjectsData}
            />
            {/* pagination */}
            <Pagination />
        </div>
    )
}

export default SubjectListPage