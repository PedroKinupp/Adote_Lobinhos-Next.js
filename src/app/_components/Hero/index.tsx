import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <section className="relative w-screen h-[65vh]">

      <Image
        src="/homePage/banner.png"
        alt="Banner"
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40 z-1"></div>

      <div className={styles.adoptLobinho}>
            <Link href="/list-lobinhos">
            <p className={styles.title}>Adote um Lobinho</p>
            </Link>

            <p className={styles.text}>
            É claro que o consenso sobre a necessidade de qualificação
            apresenta tendências no sentido de aprovar a manutenção
            das regras de conduta normativas.
            </p>
      </div>

    </section>
  );
}