import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TesteItemMySuffixModule } from './item-my-suffix/item-my-suffix.module';
import { TesteDepartamentoMySuffixModule } from './departamento-my-suffix/departamento-my-suffix.module';
import { TesteLocalMySuffixModule } from './local-my-suffix/local-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TesteItemMySuffixModule,
        TesteDepartamentoMySuffixModule,
        TesteLocalMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TesteEntityModule {}
