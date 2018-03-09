import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { DepartamentoMySuffix } from './departamento-my-suffix.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<DepartamentoMySuffix>;

@Injectable()
export class DepartamentoMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'api/departamentos';

    constructor(private http: HttpClient) { }

    create(departamento: DepartamentoMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(departamento);
        return this.http.post<DepartamentoMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(departamento: DepartamentoMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(departamento);
        return this.http.put<DepartamentoMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<DepartamentoMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<DepartamentoMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<DepartamentoMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<DepartamentoMySuffix[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: DepartamentoMySuffix = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<DepartamentoMySuffix[]>): HttpResponse<DepartamentoMySuffix[]> {
        const jsonResponse: DepartamentoMySuffix[] = res.body;
        const body: DepartamentoMySuffix[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to DepartamentoMySuffix.
     */
    private convertItemFromServer(departamento: DepartamentoMySuffix): DepartamentoMySuffix {
        const copy: DepartamentoMySuffix = Object.assign({}, departamento);
        return copy;
    }

    /**
     * Convert a DepartamentoMySuffix to a JSON which can be sent to the server.
     */
    private convert(departamento: DepartamentoMySuffix): DepartamentoMySuffix {
        const copy: DepartamentoMySuffix = Object.assign({}, departamento);
        return copy;
    }
}
