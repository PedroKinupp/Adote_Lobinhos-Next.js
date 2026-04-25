import styles from './styles.module.css'

export default async function AddLobinho( {
    params
}: {
    params : Promise<{ id : string }>
} ){

  const { id } = await params
  return(
    <div className={styles.container}>
      <h1 className={styles.title}>Coloque um Lobinho para Adoção</h1>
      <form className={styles.form}>
        <div className={styles.name_age_box}>
          <div className={styles.name_text_box}>
            <label className={styles.label}>Nome do Lobinho:</label>
            <input type="text" className={styles.input} required/>
          </div>
          <div className={styles.age_text_box}>
              <label className={styles.label}>Anos:</label>
              <input type="number" className={styles.input} required/>
          </div>
        </div>
        <div className={styles.text_box}>
            <label className={styles.label}>Link da foto:</label>
            <input type="text" className={styles.input} required/>
        </div>
        <div className={styles.text_box}>
            <label className={styles.label}>Link da foto:</label>
            <textarea className={styles.input} required/>
        </div>
        <button className={styles.button} type="submit">Salvar</button>
      </form>
    </div>
  )
}