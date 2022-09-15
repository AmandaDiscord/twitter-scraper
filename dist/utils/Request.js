"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
class Request {
    static async get(url, customHeaders) {
        let requestHeaders = this.defaultHeaders;
        if (customHeaders)
            requestHeaders = { ...this.defaultHeaders, ...customHeaders };
        return fetch(url, { headers: requestHeaders });
    }
    static async post(url, customHeaders) {
        let requestHeaders = this.defaultHeaders;
        if (customHeaders)
            requestHeaders = { ...this.defaultHeaders, ...customHeaders };
        return fetch(url, { method: "POST", headers: requestHeaders });
    }
}
exports.Request = Request;
Request.defaultHeaders = { authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA' };
//# sourceMappingURL=Request.js.map