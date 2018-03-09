import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TesteSharedModule } from '../../shared';
import {
    LocalMySuffixService,
    LocalMySuffixPopupService,
    LocalMySuffixComponent,
    LocalMySuffixDetailComponent,
    LocalMySuffixDialogComponent,
    LocalMySuffixPopupComponent,
    LocalMySuffixDeletePopupComponent,
    LocalMySuffixDeleteDialogComponent,
    localRoute,
    localPopupRoute,
} from './';

const ENTITY_STATES = [
    ...localRoute,
    ...localPopupRoute,
];

@NgModule({
    imports: [
        TesteSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        LocalMySuffixComponent,
        LocalMySuffixDetailComponent,
        LocalMySuffixDialogComponent,
        LocalMySuffixDeleteDialogComponent,
        LocalMySuffixPopupComponent,
        LocalMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        LocalMySuffixComponent,
        LocalMySuffixDialogComponent,
        LocalMySuffixPopupComponent,
        LocalMySuffixDeleteDialogComponent,
        LocalMySuffixDeletePopupComponent,
    ],
    providers: [
        LocalMySuffixService,
        LocalMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TesteLocalMySuffixModule {}
