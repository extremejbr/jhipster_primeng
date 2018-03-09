import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TesteSharedModule } from '../../shared';
import {
    DepartamentoMySuffixService,
    DepartamentoMySuffixPopupService,
    DepartamentoMySuffixComponent,
    DepartamentoMySuffixDetailComponent,
    DepartamentoMySuffixDialogComponent,
    DepartamentoMySuffixPopupComponent,
    DepartamentoMySuffixDeletePopupComponent,
    DepartamentoMySuffixDeleteDialogComponent,
    departamentoRoute,
    departamentoPopupRoute,
    DepartamentoMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...departamentoRoute,
    ...departamentoPopupRoute,
];

@NgModule({
    imports: [
        TesteSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        DepartamentoMySuffixComponent,
        DepartamentoMySuffixDetailComponent,
        DepartamentoMySuffixDialogComponent,
        DepartamentoMySuffixDeleteDialogComponent,
        DepartamentoMySuffixPopupComponent,
        DepartamentoMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        DepartamentoMySuffixComponent,
        DepartamentoMySuffixDialogComponent,
        DepartamentoMySuffixPopupComponent,
        DepartamentoMySuffixDeleteDialogComponent,
        DepartamentoMySuffixDeletePopupComponent,
    ],
    providers: [
        DepartamentoMySuffixService,
        DepartamentoMySuffixPopupService,
        DepartamentoMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TesteDepartamentoMySuffixModule {}
