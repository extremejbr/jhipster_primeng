import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TesteSharedModule } from '../../shared';
import {
    ItemMySuffixService,
    ItemMySuffixPopupService,
    ItemMySuffixComponent,
    ItemMySuffixDetailComponent,
    ItemMySuffixDialogComponent,
    ItemMySuffixPopupComponent,
    ItemMySuffixDeletePopupComponent,
    ItemMySuffixDeleteDialogComponent,
    itemRoute,
    itemPopupRoute,
    ItemMySuffixResolvePagingParams,
} from './';

import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';

const ENTITY_STATES = [
    ...itemRoute,
    ...itemPopupRoute,
];

@NgModule({
    imports: [
        TesteSharedModule,
        RouterModule.forChild(ENTITY_STATES),
        InputMaskModule,
        InputTextModule,
        CalendarModule
    ],
    declarations: [
        ItemMySuffixComponent,
        ItemMySuffixDetailComponent,
        ItemMySuffixDialogComponent,
        ItemMySuffixDeleteDialogComponent,
        ItemMySuffixPopupComponent,
        ItemMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        ItemMySuffixComponent,
        ItemMySuffixDialogComponent,
        ItemMySuffixPopupComponent,
        ItemMySuffixDeleteDialogComponent,
        ItemMySuffixDeletePopupComponent,
    ],
    providers: [
        ItemMySuffixService,
        ItemMySuffixPopupService,
        ItemMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TesteItemMySuffixModule {}
