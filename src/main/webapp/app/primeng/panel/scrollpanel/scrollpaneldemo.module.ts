import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import { TesteSharedModule } from '../../../shared';
import {ScrollPanelModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import { RouterModule } from '@angular/router';

import {
    ScrollPanelDemoComponent,
    scrollPanelDemoRoute
} from './';

const primeng_STATES = [
    scrollPanelDemoRoute
];

@NgModule({
	imports: [
        TesteSharedModule,
		CommonModule,
		ScrollPanelModule,
        CodeHighlighterModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
	],
	declarations: [
        ScrollPanelDemoComponent
	]
})
export class TesteScrollPanelDemoModule {}
