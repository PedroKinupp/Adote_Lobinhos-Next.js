import { HttpAdapter, HttpResponse } from "@/types/http";
import { baseService } from "./baseService";
import { apiRoutes } from "@/lib/config";
import { loboRequest } from "@/types/lobo";
import loboType from "@/types/loboType";

class LoboService extends baseService {
    constructor(httpAdapter: HttpAdapter) {
        super(httpAdapter);
    }

    public async getLobos(data: loboRequest): Promise<HttpResponse<loboType[]>> {
        return this.execute<null, loboType[]>({
            method: "GET",
            url: apiRoutes.Lobos,
            params: {
                _limit: String(data.perPage),
                _page: String(data.page)
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
}

export default LoboService;