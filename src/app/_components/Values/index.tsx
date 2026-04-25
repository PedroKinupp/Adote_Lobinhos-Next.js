import Image from 'next/image'
import styles from './styles.module.css'

export default function Values() {
  return (
    <section className={styles.values}>
        <h1 className={styles.header}>Valores</h1>
        <div className={styles.list}>
            <ul className={styles.listItem}>
                <div className={styles.frame}>
                    <Image
                    src={'/homePage/protecao.png'}
                    alt='proteção icone'
                    width={150}
                    height={150}
                    />
                </div>
                <h1 className={styles.title}>Proteção</h1>
                <p className={styles.text}>
                    Assim mesmo, o desenvolvimento contínuo de distintas formas de 
                    atuação facilita a criação do sistema de participação geral.
                </p>
            </ul>
            <ul className={styles.listItem}>
                <div className={styles.frame}>
                    <Image
                    src={'/homePage/carinho.png'}
                    alt='proteção icone'
                    width={150}
                    height={150}
                    />
                </div>
                <h1 className={styles.title}>Carinho</h1>
                <p className={styles.text}>
                    Assim mesmo, o desenvolvimento contínuo de distintas formas de 
                    atuação facilita a criação do sistema de participação geral.
                </p>
            </ul>
            <ul className={styles.listItem}>
                <div className={styles.frame}>
                    <Image
                    src={'/homePage/companheirismo.png'}
                    alt='companheirismo icone'
                    width={150}
                    height={150}
                    />
                </div>
                <h1 className={styles.title}>Companheirismo</h1>
                <p className={styles.text}>
                    Assim mesmo, o desenvolvimento contínuo de distintas formas de 
                    atuação facilita a criação do sistema de participação geral.
                </p>
            </ul>
            <ul className={styles.listItem}>
                <div className={styles.frame}>
                    <Image
                    src={'/homePage/resgate.png'}
                    alt='resgate icone'
                    width={150}
                    height={150}
                    />
                </div>
                <h1 className={styles.title}>Resgate</h1>
                <p className={styles.text}>
                    Assim mesmo, o desenvolvimento contínuo de distintas formas de 
                    atuação facilita a criação do sistema de participação geral.
                </p>
            </ul>
        </div>
    </section>
  );
}