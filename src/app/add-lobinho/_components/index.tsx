'use client'

import { useState } from 'react'
import styles from './styles.module.css'
import LoboService from '@/services/loboService';
import { axiosAdapter } from '@/lib/axios';

export default function Form(){
    const [ nome, setNome ] = useState<string>("");
    const [ idade, setIdade ] = useState<string>("");
    const [ descricao, setDescricao ] = useState<string>("");
    const [ imagem, setImagem ] = useState<string>("")

    const loboService = new LoboService(axiosAdapter);

    async function handleSave(){
        const id = await loboService.getTotalLobos() + 1;

        const payload = {
            id: id,
            nome: nome,
            idade: Number(idade),
            descricao: descricao,
            imagem: imagem
        }
        if(nome!='' && idade!='' && descricao!='' && imagem!=''){
            loboService.addLobo(payload)
        }
    }
    return(
        <form className={styles.form}>
            <div className={styles.name_age_box}>
                <div className={styles.name_text_box}>
                    <label className={styles.label}>Nome do Lobinho:</label>
                    <input type="text" className={styles.input} required onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div className={styles.age_text_box}>
                    <label className={styles.label}>Anos:</label>
                    <input type="number" className={styles.input} onChange={(e) => setIdade(e.target.value)} required/>
                </div>
            </div>
            <div className={styles.text_box}>
                <label className={styles.label}>Descrição:</label>
                <input type="text" className={styles.input} onChange={(e) => setDescricao(e.target.value)} required/>
            </div>
            <div className={styles.text_box}>
                <label className={styles.label}>Link da foto:</label>
                <textarea className={styles.input} onChange={(e) => setImagem(e.target.value)} required/>
            </div>
            <button className={styles.button} type="submit" onClick={handleSave}>Salvar</button>
        </form>
    )
}