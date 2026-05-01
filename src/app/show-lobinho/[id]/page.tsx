import Image from 'next/image'
import styles from './styles.module.css'
import loboType from '@/types/loboType';
import LoboService from '@/services/loboService';
import { axiosAdapter } from '@/lib/axios';
import Link from 'next/link';
import ExcludeButton from './_components';

export default async function ShowLobinho( {
    params
}: {
    params : Promise<{ id : string }>
} ){
    const { id } = await params
    const loboService = new LoboService(axiosAdapter);

    const [lobo] = await loboService.getLoboById(id);

    return(
        <div>
            <h1 className={styles.title}>
                {lobo.nome}
            </h1>
            <div className={styles.container}>
                <div className={styles.main_box}>
                    <div className="relative w-120 h-80">
                        <div className={styles.decorative_frame}></div>
                        <Image
                            src={lobo.imagem}
                            alt="Foto do lobo"
                            width={480}
                            height={320}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.buttons}>
                        <Link 
                            href={`/adopt-lobinho/${Number(id)}`} 
                            className={`${styles.adopt} ${lobo.adotado ? styles.disabled : ''}`}
                        >
                            Adotar
                        </Link>
                        <ExcludeButton id={`${id}`}/>
                    </div>
                </div>
                <div className={styles.text_box}>
                    <p className={styles.description}>
                        {lobo.descricao}
                    </p>
                </div>
            </div>
        </div>
    )
}