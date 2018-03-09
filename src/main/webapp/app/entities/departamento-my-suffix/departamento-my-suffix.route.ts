import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from '../../shared';
import { DepartamentoMySuffixComponent } from './departamento-my-suffix.component';
import { DepartamentoMySuffixDetailComponent } from './departamento-my-suffix-detail.component';
import { DepartamentoMySuffixPopupComponent } from './departamento-my-suffix-dialog.component';
import { DepartamentoMySuffixDeletePopupComponent } from './departamento-my-suffix-delete-dialog.component';

@Injectable()
export class DepartamentoMySuffixResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const departamentoRoute: Routes = [
    {
        path: 'departamento-my-suffix',
        component: DepartamentoMySuffixComponent,
        resolve: {
            'pagingParams': DepartamentoMySuffixResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testeApp.departamento.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'departamento-my-suffix/:id',
        component: DepartamentoMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testeApp.departamento.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const departamentoPopupRoute: Routes = [
    {
        path: 'departamento-my-suffix-new',
        component: DepartamentoMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testeApp.departamento.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'departamento-my-suffix/:id/edit',
        component: DepartamentoMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testeApp.departamento.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'departamento-my-suffix/:id/delete',
        component: DepartamentoMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testeApp.departamento.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
