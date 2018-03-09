import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from '../../shared';
import { ItemMySuffixComponent } from './item-my-suffix.component';
import { ItemMySuffixDetailComponent } from './item-my-suffix-detail.component';
import { ItemMySuffixPopupComponent } from './item-my-suffix-dialog.component';
import { ItemMySuffixDeletePopupComponent } from './item-my-suffix-delete-dialog.component';

@Injectable()
export class ItemMySuffixResolvePagingParams implements Resolve<any> {

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

export const itemRoute: Routes = [
    {
        path: 'item-my-suffix',
        component: ItemMySuffixComponent,
        resolve: {
            'pagingParams': ItemMySuffixResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testeApp.item.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'item-my-suffix/:id',
        component: ItemMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testeApp.item.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const itemPopupRoute: Routes = [
    {
        path: 'item-my-suffix-new',
        component: ItemMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testeApp.item.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'item-my-suffix/:id/edit',
        component: ItemMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testeApp.item.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'item-my-suffix/:id/delete',
        component: ItemMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testeApp.item.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
