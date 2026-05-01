import Form from './_components'
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
      <Form/>
    </div>
  )
}