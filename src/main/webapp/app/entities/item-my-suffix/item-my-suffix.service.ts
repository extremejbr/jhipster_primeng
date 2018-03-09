import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { ItemMySuffix } from './item-my-suffix.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<ItemMySuffix>;

@Injectable()
export class ItemMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'api/items';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(item: ItemMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(item);
        return this.http.post<ItemMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(item: ItemMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(item);
        return this.http.put<ItemMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ItemMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<ItemMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<ItemMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<ItemMySuffix[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: ItemMySuffix = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<ItemMySuffix[]>): HttpResponse<ItemMySuffix[]> {
        const jsonResponse: ItemMySuffix[] = res.body;
        const body: ItemMySuffix[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to ItemMySuffix.
     */
    private convertItemFromServer(item: ItemMySuffix): ItemMySuffix {
        const copy: ItemMySuffix = Object.assign({}, item);
        copy.dataAquisicao = this.dateUtils
            .convertLocalDateFromServer(item.dataAquisicao);
        return copy;
    }

    /**
     * Convert a ItemMySuffix to a JSON which can be sent to the server.
     */
    private convert(item: ItemMySuffix): ItemMySuffix {
        const copy: ItemMySuffix = Object.assign({}, item);
        copy.dataAquisicao = this.dateUtils
            .convertLocalDateToServer(item.dataAquisicao);
        return copy;
    }
}
