interface loboType{
    id: number
    nome: string
    idade: number
    descricao: string
    imagem: string
    adotado: boolean
    nomeDono?: string | null
    idadeDono?: number | null
    emailDono?: string | null
}

export default loboType