'use client'

import { useState } from 'react'
import styles from './styles.module.css'
import LoboService from '@/services/loboService';
import { axiosAdapter } from '@/lib/axios';

interface props{
    id: string
}
export default function Form({ id }: props){
    const [ nomeDono, setNomeDono ] = useState<string>('');
    const [ idadeDono, setIdadeDono ] = useState<string>('');
    const [ emailDono, setEmailDono ] = useState<string>('');

    const loboService = new LoboService(axiosAdapter);

    async function handleAdopt(){

        const payload = {
            id: Number(id),
            nomeDono: nomeDono,
            idadeDono: Number(idadeDono),
            emailDono: emailDono
        }
        if(nomeDono!='' && idadeDono!='' && emailDono!=''){
            loboService.adoptLobo(payload)
        }
    }
    return (
        <form className='flex flex-col items-center gap-20'>
            <div className={styles.name_age_box}>
                <div className={styles.name_text_box}>
                    <label className={styles.label}>Seu nome:</label>
                    <input type="text" className={styles.input} onChange={(e) => setNomeDono(e.target.value)} required/>
                </div>
                <div className={styles.age_text_box}>
                    <label className={styles.label}>Idade:</label>
                    <input type="number" className={styles.input} onChange={(e) => setIdadeDono(e.target.value)} required/>
                </div>
            </div>
            <div className={styles.email_text_box}>
                <label className={styles.label}>E-mail:</label>
                <input type="text" className={styles.input} onChange={(e) => setEmailDono(e.target.value)} required/>
            </div>
            <button className={styles.button} onClick={handleAdopt} type="submit">Adotar</button>
        </form>
    )
}