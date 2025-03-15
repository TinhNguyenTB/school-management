'use client'

import { ITEM_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/navigation";

type PaginationProps = {
    page: number;
    count: number;
    totalPages: number;
}

const Pagination = ({ page, count, totalPages }: PaginationProps) => {
    const router = useRouter();


    // const totalPages = Math.ceil(count / ITEM_PER_PAGE); // lam tron len

    const changePage = (newPage: number) => {
        const params = new URLSearchParams(window.location.search);
        params.set("page", newPage.toString());
        router.push(`${window.location.pathname}?${params}`)
    }

    return (
        <div className="p-4 flex items-center justify-between text-gray-500">
            <button
                disabled={page === 1}
                onClick={() => changePage(page - 1)}
                className="py-2 px-4 rounded-md text-xs bg-slate-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                Prev
            </button>
            <div className="flex items-center gap-2 text-sm">
                {Array.from({ length: totalPages }, (_, index) => {
                    const pageIndex = index + 1;
                    return (
                        <button key={pageIndex}
                            onClick={() => changePage(pageIndex)}
                            className={`px-2 rounded-sm ${page === pageIndex ? "bg-mySky" : ""} `}>
                            {pageIndex}
                        </button>
                    )
                })}
            </div>
            <button
                disabled={page === totalPages}
                onClick={() => changePage(page + 1)}
                className="py-2 px-4 rounded-md text-xs bg-slate-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                Next
            </button>
        </div>
    )
}

export default Pagination