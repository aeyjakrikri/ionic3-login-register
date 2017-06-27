import { Injectable } from '@angular/core';
import { RestProvider } from '../rest/rest';

/*
 Generated class for the AuthProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class AuthProvider extends RestProvider {

    private endpoint: string = '/v1/auth';

    login(payload) {
        return this.restAngular.all(this.endpoint).post(payload);
    }
}
