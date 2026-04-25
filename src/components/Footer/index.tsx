import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'

export default function Footer(){
  return (
    <footer >
        <div className={styles.faixa_gradiente}>
        </div>

        <div className={styles.gray_box}>
            
            <div className={styles.main_box}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1871896190382!2d-43.133260199999995!3d-22.9064655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99817e444e692b%3A0xfd5e35fb577af2f5!2sUFF%20-%20Instituto%20de%20Computa%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1770157687495!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy" className={styles.iframe}/>
    
                <div className={styles.infos_btn_box}>
                    <div className={styles.infos_box}>
                        <ul className={styles.list}>
                            <Image src="/footer/pin.png" alt='Icone pin' width={20} height={20}/>
                            <p className={styles.text}>
                                Av. Milton Tavares de Souza, s/n - Sala 115 B - Boa Viagem, Niterói - RJ, 24210-315
                            </p>
                        </ul>
                        <ul className={styles.list}>
                            <Image src="/footer/telefone.png" alt='Icone telefone' width={20} height={20}/>
                            <p className={styles.text}>
                                (99) 99999-9999
                            </p>
                        </ul>
                        <ul className={styles.list}>
                            <Image src="/footer/envelope.png" alt='Icone envelope' width={20} height={20}/>
                            <p className={styles.text}>
                                salve-lobos@lobINhos.com
                            </p>
                        </ul>
                    </div>
                    <Link href="/quem-somos" className={styles.btn}>
                        Quem Somos
                    </Link>
                </div>
            </div>
            
            <div>
                <p className={styles.desenvolvidoCom_box}>Desenvolvido com</p>
                <Image src="/footer/pata.png" alt='Icone envelope' width={119} height={24}/>
            </div>
        </div>
    </footer>
  )
}