import Image from 'next/image'
import styles from './styles.module.css'

export default async function ShowLobinho( {
    params
}: {
    params : Promise<{ id : string }>
} ){
    const { id } = await params
    return(
        <div>
            <h1 className={styles.title}>
                Nome do lobo
            </h1>
            <div className={styles.container}>
                <div className={styles.main_box}>
                    <div className="relative w-120 h-80">
                        <div className={styles.decorative_frame}></div>
                        <Image
                            src=""
                            alt="Foto do lobo"
                            width={480}
                            height={320}
                            className="
                            absolute
                            top-6 left-8
                            object-cover
                            z-10
                            "
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
                        Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas. Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.
                    </p>
                    <p className={styles.description}>
                        Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas. Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.
                    </p>
                </div>
            </div>
        </div>
    )
}