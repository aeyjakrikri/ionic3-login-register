import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { ResourceAction, ResourceMethod, ResourceParams } from 'ngx-resource';
import { RestProvider } from '../rest/rest';


/**
 Class for the AuthProvider.
 */

@Injectable()
@ResourceParams({
    url: RestProvider.BASE_URL + '/v1/users'
})
export class AuthProvider extends RestProvider {
    @ResourceAction({
        method: RequestMethod.Post,
        path: '/login',
        skipAuthorization: true
    })
    login: ResourceMethod<{ login: string, password: string }, any>;

    @ResourceAction({
        method: RequestMethod.Get,
        path: '/logout'
    })
    logout: ResourceMethod<void, any>;
}
