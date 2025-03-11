import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, parentsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Parent = {
    id: number,
    name: string,
    students: string[],
    email?: string,
    phone?: string,
    address: string
}

const columns = [
    {
        header: "Info",
        accessor: "info",
        className: "pl-2"
    },
    {
        header: "Student Names",
        accessor: "students",
        className: "hidden md:table-cell"
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden lg:table-cell"
    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden lg:table-cell"
    },
    {
        header: "Actions",
        accessor: "action",
        className: "pl-2"
    }
]
const ParentListPage = () => {
    const renderRow = (item: Parent) => {
        return (
            <tr key={item.id}
                className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-myPurpleLight"
            >
                <td className="flex flex-col items-start p-2">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item?.email}</p>
                </td>
                <td className="hidden md:table-cell">{item.students.join(",")}</td>
                <td className="hidden lg:table-cell">{item.phone}</td>
                <td className="hidden lg:table-cell">{item.address}</td>
                <td className="flex items-center gap-2 pt-5">
                    {role === "admin" && (
                        <>
                            <FormModal table="parent" type="update" data={item} />
                            <FormModal table="parent" type="delete" id={item.id} />
                        </>
                    )}
                </td>
            </tr>
        )
    }
    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* top */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
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
                            <FormModal table="parent" type="create" />
                        )}
                    </div>
                </div>
            </div>
            {/* list */}
            <Table
                columns={columns}
                renderRow={renderRow}
                data={parentsData}
            />
            {/* pagination */}
            <Pagination />
        </div>
    )
}

export default ParentListPage