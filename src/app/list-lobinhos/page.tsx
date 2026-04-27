import LoboCard from "@/components/Lobo-Card";
import loboType from "@/types/loboType";
import Search from "./_components/Search";
import Pagination from "./_components/Pagination";
import Link from "next/link";
import styles from './styles.module.css'

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
    

    const data = await fetch(`http://localhost:3001/lobinhos?_page=${page}&_limit=${limit}&nome_like=${query}`);
    const response = await data.json();

    const totalCount = Number(data.headers.get("X-Total-Count") || 0);
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
            {response.map((element: loboType, i: number) => (
                <LoboCard
                    key={element.id}
                    nome={element.nome}
                    descricao={element.descricao}
                    idade={element.idade}
                    imagem={element.imagem}
                    adotado={element.adotado}
                    adotadoPor={element?.nomeDono}
                    direction={i % 2 === 0 ? "left" : "right"}
                />
            ))}
            <Pagination
                currentPage={Number(page)}
                totalPage={totalPages}
            />
        </div>
    );
}