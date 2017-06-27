import {Injectable} from '@angular/core';
import {RequestMethod} from '@angular/http';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {RestService} from './rest.service';


@Injectable()
@ResourceParams({
    url: RestService.BASE_URL + 'v1/auth'
})
export class AuthResource extends RestService {

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
