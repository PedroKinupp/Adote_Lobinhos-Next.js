import styles from './styles.module.css'

export default async function AdoptLobinho( {
    params
}: {
    params : Promise<{ id : string }>
} ){

    const { id } = await params
  return(
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.frame}>
            </div>
            <div>
                <h1 className={styles.title}>Adote o(a) NomedoLobo</h1>
                <h4 className={styles.id}>ID: {id}</h4>
            </div>
        </div>
        <form className='flex flex-col items-center gap-20'>
            <div className={styles.name_age_box}>
                <div className={styles.name_text_box}>
                    <label className={styles.label}>Seu nome:</label>
                    <input type="text" className={styles.input} required/>
                </div>
                <div className={styles.age_text_box}>
                    <label className={styles.label}>Idade:</label>
                    <input type="number" className={styles.input} required/>
                </div>
            </div>
            <div className={styles.email_text_box}>
                <label className={styles.label}>E-mail:</label>
                <input type="text" className={styles.input} required/>
            </div>
            <button className={styles.button} type="submit">Adotar</button>
        </form>
    </div>
  )
}