export declare class Request {
    static defaultHeaders: {
        authorization: string;
    };
    static get(url: string, customHeaders?: Object): Promise<Response>;
    static post(url: string, customHeaders?: Object): Promise<Response>;
}
