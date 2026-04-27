import LoboCard from '@/components/Lobo-Card'
import styles from './styles.module.css'
import loboType from '@/types/loboType';
import { unstable_cache } from 'next/cache';

function sortearDois(total : number) {

    const indicePrimeiroLobo = Math.floor(Math.random() * total);

    let indiceSegundoLobo = Math.floor(Math.random() * total);

    while (indicePrimeiroLobo === indiceSegundoLobo) {
        indiceSegundoLobo =
            Math.floor(Math.random() * total);
    }
    return [indicePrimeiroLobo,indiceSegundoLobo];
}

const getRandomIndexes = unstable_cache(
    async () => {
        return sortearDois(1000);
    },
    ["random-wolves"],
    {
        revalidate: 300
    }
);

export default async function Wolves(){
    const [ind1, ind2] = await getRandomIndexes();

    const data1 = await fetch(`http://localhost:3001/lobinhos?id=${ind1}`);
    const [lobo1]: loboType[] = await data1.json();

    const data2 = await fetch(`http://localhost:3001/lobinhos?id=${ind2}`);
    const [lobo2]: loboType[] = await data2.json();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lobos exemplo</h1>
            <LoboCard
                nome={lobo1.nome}
                descricao={lobo1.descricao}
                idade={lobo1.idade}
                imagem={lobo1.imagem}
                adotado={lobo1.adotado}
                adotadoPor={lobo1?.nomeDono}
                direction="right"
            />
            <LoboCard
                nome={lobo2.nome}
                descricao={lobo2.descricao}
                idade={lobo2.idade}
                imagem={lobo2.imagem}
                adotado={lobo2.adotado}
                adotadoPor={lobo2?.nomeDono}
                direction="left"
            />
        </div>
    )
}