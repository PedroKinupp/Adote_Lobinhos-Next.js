'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation"
import styles from './styles.module.css'

type Props = {
    currentPage: number
    totalPage: number
}

export default function Pagination({ currentPage, totalPage}: Props){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handlePagination(page: number){
        const params = new URLSearchParams(searchParams);

        params.set("page", `${page}`);

        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className={styles.pagination}>
            <button
                disabled={currentPage <= 1}
                onClick={() => handlePagination(currentPage - 1)}
            >
                {"<<"}
            </button>
            <span>
            {currentPage} / {totalPage}
            </span>
            <button
                disabled={currentPage >= totalPage}
                onClick={() => handlePagination(currentPage + 1)}
            >
                {">>"}
            </button>
        </div>
    )
}