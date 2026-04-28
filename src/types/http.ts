export interface HttpRequest<Tdata> {
    data?: Tdata;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
    url: string;
    headers?: Record<string, string>;
    params?: Record<string, string>
}

export interface HttpResponse<Tdata>{
    data: Tdata;
    status: number;
    headers?: Record<string, string>;
    raw?: unknown; 
}

export interface HttpAdapter{
    request<TRequest, TResponse>(
        config: HttpRequest<TRequest>
    ) : Promise<HttpResponse<TResponse>>

    getError(error : unknown) : Error
}