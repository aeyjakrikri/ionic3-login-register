export class AuthServiceHelper {
    static token = 'teste';

    static extendHeaders(headers) {
        headers.Authorization = this.token;
        return headers;
    }
}