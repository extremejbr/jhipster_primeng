import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { LocalMySuffixComponent } from './local-my-suffix.component';
import { LocalMySuffixDetailComponent } from './local-my-suffix-detail.component';
import { LocalMySuffixPopupComponent } from './local-my-suffix-dialog.component';
import { LocalMySuffixDeletePopupComponent } from './local-my-suffix-delete-dialog.component';

export const localRoute: Routes = [
    {
        path: 'local-my-suffix',
        component: LocalMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testeApp.local.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'local-my-suffix/:id',
        component: LocalMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testeApp.local.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const localPopupRoute: Routes = [
    {
        path: 'local-my-suffix-new',
        component: LocalMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testeApp.local.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'local-my-suffix/:id/edit',
        component: LocalMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testeApp.local.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'local-my-suffix/:id/delete',
        component: LocalMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testeApp.local.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
