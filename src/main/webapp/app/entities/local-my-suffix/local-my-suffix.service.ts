import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { LocalMySuffix } from './local-my-suffix.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<LocalMySuffix>;

@Injectable()
export class LocalMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'api/locals';

    constructor(private http: HttpClient) { }

    create(local: LocalMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(local);
        return this.http.post<LocalMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(local: LocalMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(local);
        return this.http.put<LocalMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<LocalMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<LocalMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<LocalMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<LocalMySuffix[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: LocalMySuffix = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<LocalMySuffix[]>): HttpResponse<LocalMySuffix[]> {
        const jsonResponse: LocalMySuffix[] = res.body;
        const body: LocalMySuffix[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to LocalMySuffix.
     */
    private convertItemFromServer(local: LocalMySuffix): LocalMySuffix {
        const copy: LocalMySuffix = Object.assign({}, local);
        return copy;
    }

    /**
     * Convert a LocalMySuffix to a JSON which can be sent to the server.
     */
    private convert(local: LocalMySuffix): LocalMySuffix {
        const copy: LocalMySuffix = Object.assign({}, local);
        return copy;
    }
}
