import styles from './styles.module.css'
import Image from 'next/image'

export default function Header(){
  return (
    <header className={styles.header}>
      <div className={styles.linkcontainer}>
        <a href="#" className={styles.hyperlink}>
          Nossos Lobinhos
        </a>
      </div>

      <a href="/">
        <Image
          src="/homeButton.png"
          alt="Botão para Home page"
          width={95}
          height={110}
        />
      </a>

      <div className={styles.linkcontainer}>
        <a href="#" className={styles.hyperlink}>
          Quem Somos
        </a>
      </div>
    </header>
  )
}