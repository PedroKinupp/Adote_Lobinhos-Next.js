import Image from 'next/image'
import styles from './styles.module.css'
import loboType from '@/types/loboType';

export default async function ShowLobinho( {
    params
}: {
    params : Promise<{ id : string }>
} ){
    const { id } = await params
    const data = await fetch(`http://localhost:3001/lobinhos?id=${id}`);

    const [lobo]: loboType[] = await data.json();

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
                        <button className={styles.adopt}>
                            Adotar
                        </button>
                        <button className={styles.delete}>
                            Excluir
                        </button>
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