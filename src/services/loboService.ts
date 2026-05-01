import { HttpAdapter, HttpResponse } from "@/types/http";
import { baseService } from "./baseService";
import { apiRoutes } from "@/lib/config";
import { addPayload, adoptPayload, loboRequest } from "@/types/lobo";
import loboType from "@/types/loboType";

class LoboService extends baseService {
    constructor(httpAdapter: HttpAdapter) {
        super(httpAdapter);
    }

    public async getTotalLobos(): Promise<number> {
        const response = await fetch("http://localhost:3001/lobinhos?_page=1&_per_page=1");
        const data = await response.json();

        return data.items;
    }

    public async getLobos(data: loboRequest): Promise<HttpResponse<loboType[]>> {
        return this.execute<null, loboType[]>({
            method: "GET",
            url: apiRoutes.Lobos,
            params: {
                _limit: String(data.perPage),
                _page: String(data.page),
                nome_like: data.query
            }
        });
    }

    public async getLoboById(id: string): Promise<loboType[]> {
        const response = await this.execute<null, loboType[]>({
            method: "GET",
            url: apiRoutes.Lobos,
            params: {
                id
            }
        });

        return response.data;
    }

    public async adoptLobo({ id, nomeDono, idadeDono, emailDono }: adoptPayload): Promise<HttpResponse<loboType>> {
        return this.execute<Partial<loboType>, loboType>({
            method: "PATCH",
            url: `${apiRoutes.Lobos}/${id}`,
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                adotado: true,
                nomeDono,
                idadeDono,
                emailDono
            }
        });
    }

    public async addLobo({ nome, idade, descricao, imagem }: addPayload): Promise<HttpResponse<loboType>> {
        return this.execute<Partial<loboType>, loboType>({
            method: "POST",
            url: apiRoutes.Lobos,
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                nome,
                idade,
                imagem,
                descricao,
                nomeDono: null,
                emailDono: null,
                idadeDono: null,
                adotado: false,
            }
        });
    }

    public async deleteLobo(id: string): Promise<void> {
        await this.execute<null, loboType>({
            method: "DELETE",
            url: `${apiRoutes.Lobos}/${id}`
        });
    }
}

export default LoboService;