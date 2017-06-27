import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { ResourceAction, ResourceMethod, ResourceParams } from 'ngx-resource';
import { RestProvider } from '../rest/rest';


/*
 Generated class for the AuthProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
@ResourceParams({
    url: RestProvider.BASE_URL + 'v1/auth'
})
export class AuthProvider extends RestProvider {
    @ResourceAction({
        method: RequestMethod.Post,
        path: '/login',
        noAuth: true
    })
    login: ResourceMethod<{ login: string, password: string }, any>;

    @ResourceAction({
        method: RequestMethod.Get,
        path: '/logout'
    })
    logout: ResourceMethod<void, any>;
}
