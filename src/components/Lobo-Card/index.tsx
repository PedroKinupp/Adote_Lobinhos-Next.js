import Image from "next/image";
import styles from "./styles.module.css";

type LoboCardProps = {
    nome: string;
    idade: number;
    descricao: string;
    imagem: string;
    adotadoPor?: string;
    adotado: boolean;
    direction?: "left" | "right";
};

export default function LoboCard({
    nome,
    idade,
    descricao,
    imagem,
    adotadoPor,
    adotado,
    direction = "left",
}: LoboCardProps) {
    const reversed = direction === "right";

    return (
        <section
            className={`${styles.card} ${reversed ? styles.cardReverse : ""}`}
        >
            <div className={styles.imageBlock}>
                <div className={styles.decorativeFrame}></div>
                    {imagem !== "" && (
                        <Image
                            src={imagem}
                            alt={nome}
                            width={380}
                            height={280}
                            className={styles.wolfImage}
                        />
                    )}
            </div>

            <div className={styles.info}>
                <div className="flex flex-col gap-5">
                <div className={`${styles.header} ${reversed ? styles.headerReverse : ""}`}>
                    <div>
                        <h2 className={styles.name}>{nome}</h2>

                        <span className={styles.age}>Idade: {idade}</span>
                    </div>

                    <span
                        className={
                            adotado
                                ? styles.badgeAdopted
                                : styles.badgeAvailable
                        }
                    >
                        {adotado ? "Adotado" : "Disponível"}
                    </span>
                </div>

                <p className={styles.description}>{descricao}</p>
                </div>
                {adotado && adotadoPor && (
                    <strong className={styles.owner}>
                        Adotado por: {adotadoPor}
                    </strong>
                )}
            </div>
        </section>
    );
}
