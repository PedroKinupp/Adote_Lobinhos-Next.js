import LoboCard from "@/components/Lobo-Card";
import loboType from "@/types/loboType";
import Search from "./_components/Search";
import Pagination from "./_components/Pagination";
import Link from "next/link";
import styles from './styles.module.css'
import { axiosAdapter } from "@/lib/axios";
import LoboService from "@/services/loboService";

type Props ={
    searchParams: Promise<{
        query?: string;
        page?: string;
    }>
}
export default async function ListLobinhos({ searchParams } : Props){
    const params = await searchParams;

    const limit = 8;
    const page = Number(params.page) || 1;
    const query = params.query || "";
    
    const loboService = new LoboService(axiosAdapter);

    const response = await loboService.getLobos({
        page,
        perPage: limit,
        query
    });

    const lobos = response.data;

    const totalCount = Number(response.headers?.["x-total-count"] || 0);
    const totalPages = Math.ceil(totalCount / limit);

    return (
        <div className="flex flex-col items-center">
            <div className={styles.searchBar}>
                <Search/>
                <Link href='/add-lobinho'>
                    <button className={styles.button}>
                        + Lobo
                    </button>
                </Link>
            </div>
            {lobos.map((element: loboType, i: number) => (
                <Link href={`show-lobinho/${element.id}`} key={element.id}>
                    <LoboCard
                        nome={element.nome}
                        descricao={element.descricao}
                        idade={element.idade}
                        imagem={element.imagem}
                        adotado={element.adotado}
                        adotadoPor={element?.nomeDono}
                        direction={i % 2 === 0 ? "left" : "right"}
                    />
                </Link>
            ))}
            <Pagination
                currentPage={Number(page)}
                totalPage={totalPages}
            />
        </div>
    );
}