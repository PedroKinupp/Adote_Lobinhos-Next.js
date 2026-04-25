import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'

export default function Header(){
  return (
    <header className={styles.header}>
      <div className={styles.linkcontainer}>
        <Link href="/list-lobinhos" className={styles.hyperlink}>
          Nossos Lobinhos
        </Link>
      </div>

      <Link href="/">
          <Image
          src="/homeButton.png"
          alt="Botão para Home page"
          width={95}
          height={110}
          />
      </Link>
        

      <div className={styles.linkcontainer}>
        <Link href="/quem-somos" className={styles.hyperlink}>
          Quem Somos
        </Link>
      </div>
    </header>
  )
}