import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { DepartamentoMySuffix } from './departamento-my-suffix.model';
import { DepartamentoMySuffixService } from './departamento-my-suffix.service';

@Component({
    selector: 'jhi-departamento-my-suffix-detail',
    templateUrl: './departamento-my-suffix-detail.component.html'
})
export class DepartamentoMySuffixDetailComponent implements OnInit, OnDestroy {

    departamento: DepartamentoMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private departamentoService: DepartamentoMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInDepartamentos();
    }

    load(id) {
        this.departamentoService.find(id)
            .subscribe((departamentoResponse: HttpResponse<DepartamentoMySuffix>) => {
                this.departamento = departamentoResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInDepartamentos() {
        this.eventSubscriber = this.eventManager.subscribe(
            'departamentoListModification',
            (response) => this.load(this.departamento.id)
        );
    }
}
