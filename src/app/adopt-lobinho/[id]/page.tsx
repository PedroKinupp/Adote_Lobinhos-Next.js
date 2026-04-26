import loboType from '@/types/loboType';
import Form from './_components'
import styles from './styles.module.css'
import Image from 'next/image';

export default async function AdoptLobinho({ params } : { params : Promise<{ id : string }> }){
    const { id } = await params
    const data = await fetch(`http://localhost:3001/lobinhos?id=${id}`);
    const [lobo]: loboType[] = await data.json();

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                    <div className={styles.decorativeFrame}>
                        <Image
                            src={lobo.imagem}
                            alt="foto do lobo"
                            width={150}
                            height={150}
                            className={styles.wolfImage}
                        />
                    </div> 
                <div>
                    <h1 className={styles.title}>Adote o(a) {lobo.nome}</h1>
                    <h4 className={styles.id}>ID: {id}</h4>
                </div>
            </div>
            <Form/>
        </div>
    )
}