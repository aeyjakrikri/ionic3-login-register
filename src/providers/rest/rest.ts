import { Resource, ResourceActionBase } from 'ngx-resource';
import { Request } from '@angular/http';
import { Observable, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthServiceHelper } from '../../helpers/authService.helper';

/**
 Generated class for the RestProvider.
 */

@Injectable()
export class RestProvider extends Resource {

    public static BASE_URL = 'http://localhost/insulinapp-api/api/web';

    $getHeaders(methodOptions: any): any {
        let headers = super.$getHeaders();

        // Extending our headers with Authorization
        if (!methodOptions.skipAuthorization) {
            headers = AuthServiceHelper.extendHeaders(headers);
        }

        return headers;
    }

    $responseInterceptor(observable: Observable<any>, request: Request, methodOptions?: ResourceActionBase): Observable<any> {

        return Observable.create((subscriber: Subscriber<any>) => {

            observable.subscribe(
                (res: Response) => {
                    if (res.headers) {
                        let newToken: string = res.headers.get('X-AUTH-TOKEN');
                        if (newToken) {
                            AuthServiceHelper.token = newToken;
                        }
                    }
                    subscriber.next((<any>res)._body ? res.json() : null);
                },
                (error: Response) => {
                    if (error.status === 401) {
                        AuthServiceHelper.token = null;
                    }
                    //console.warn('BaseResource request error', error, request);
                    subscriber.error(error);
                },
                () => subscriber.complete()
            );

        });
    }
}
