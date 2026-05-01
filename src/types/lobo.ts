export interface loboRequest {
    page: number,
    perPage: number,
    query: string
}

export interface adoptPayload{
    id: number,
    nomeDono: string,
    idadeDono: number,
    emailDono: string
}

export interface addPayload{
    nome: string,
    idade: number,
    descricao: string,
    imagem: string
}