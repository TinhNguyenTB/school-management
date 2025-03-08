import { ReactNode } from "react";

type ColumnProps = {
    header: string,
    accessor: string,
    className?: string
}

const Table = ({
    columns, renderRow, data
}: {
    columns: ColumnProps[];
    renderRow: (item: any) => ReactNode;
    data: any[];
}) => {
    return (
        <table className="w-full mt-4">
            <thead>
                <tr className="text-left text-gray-500 text-sm">
                    {columns.map(col => (
                        <th key={col.accessor} className={col.className}>
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(item => renderRow(item))}
            </tbody>
        </table>
    )
}

export default Table