import LoboCard from '@/components/Lobo-Card'
import styles from './styles.module.css'
import loboType from '@/types/loboType';
import { unstable_cache } from 'next/cache';
import LoboService from '@/services/loboService';
import { axiosAdapter } from '@/lib/axios';

const loboService = new LoboService(axiosAdapter);

function sortearDois(total : number) {

    const indicePrimeiroLobo = Math.floor(Math.random() * total + 1);

    let indiceSegundoLobo = Math.floor(Math.random() * total + 1);

    while (indicePrimeiroLobo === indiceSegundoLobo) {
        indiceSegundoLobo =
            Math.floor(Math.random() * total + 1);
    }
    return [indicePrimeiroLobo,indiceSegundoLobo];
}

const getRandomWolves = unstable_cache(
    async () => {
        const [ind1, ind2] = sortearDois(1000);
        const [lobo1] = await loboService.getLoboById(String(ind1))
        const [lobo2] = await loboService.getLoboById(String(ind2))

        return [lobo1, lobo2]
    },
    ["random-wolves"],
    {
        revalidate: 10
    }
);

export default async function Wolves(){
    const [lobo1, lobo2] = await getRandomWolves();

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