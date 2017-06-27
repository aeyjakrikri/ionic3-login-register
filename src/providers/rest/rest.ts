import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';

/*
 Generated class for the RestProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class RestProvider {

    static BASE_URL = 'http://example.com/rest/api';

    constructor(public restAngular: Restangular) {
    }
}
