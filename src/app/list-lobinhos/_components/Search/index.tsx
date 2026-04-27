'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useState } from "react";
import styles from './styles.module.css'

export default function Search(){
    const [term, setTerm] = useState<string>("");
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(){
        const params = new URLSearchParams(searchParams);

        params.set("page", "1");

        if(term){
            params.set("query", term);
        }else{
            params.delete("query");
        }

        replace(`${pathname}?${params.toString()}`)
    }

    return(
        <input
            placeholder="Pesquisar lobinho..."
            defaultValue={searchParams.get("query")?.toString()}
            onChange={(e) => setTerm(e.target.value)}
            className={styles.input}
            onKeyDown={(e) => {
                if(e.key === "Enter"){
                    handleSearch();
                }
            }}
        >
        </input>
    )
}