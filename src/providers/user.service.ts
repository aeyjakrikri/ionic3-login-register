import {Injectable} from '@angular/core';
import {Resource, ResourceParams, ResourceAction, ResourceMethod, ResourceCRUD} from 'ngx-resource';
import {RequestMethod} from '@angular/http';

interface IQueryInput {
  page?: number;
  perPage?: number;
  dateFrom?: string;
  dateTo?: string;
  isRead?: string;
}

interface INewsShort {
  id: number;
  date: string;
  title: string;
  text: string;
}

interface INews extends INewsShort {
  image?: string;
  fullText: string;
}

@Injectable()
@ResourceParams({
  url: 'https://localhost/agendo-sistema/api'
})

export class UserService extends ResourceCRUD<IQueryInput, INewsShort, INews> {

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/users/{!id}'
  })
  update: ResourceMethod<INews, INews>;

}