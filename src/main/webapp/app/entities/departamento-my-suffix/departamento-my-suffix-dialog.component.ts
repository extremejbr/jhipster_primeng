import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { DepartamentoMySuffix } from './departamento-my-suffix.model';
import { DepartamentoMySuffixPopupService } from './departamento-my-suffix-popup.service';
import { DepartamentoMySuffixService } from './departamento-my-suffix.service';

@Component({
    selector: 'jhi-departamento-my-suffix-dialog',
    templateUrl: './departamento-my-suffix-dialog.component.html'
})
export class DepartamentoMySuffixDialogComponent implements OnInit {

    departamento: DepartamentoMySuffix;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private departamentoService: DepartamentoMySuffixService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.departamento.id !== undefined) {
            this.subscribeToSaveResponse(
                this.departamentoService.update(this.departamento));
        } else {
            this.subscribeToSaveResponse(
                this.departamentoService.create(this.departamento));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<DepartamentoMySuffix>>) {
        result.subscribe((res: HttpResponse<DepartamentoMySuffix>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: DepartamentoMySuffix) {
        this.eventManager.broadcast({ name: 'departamentoListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-departamento-my-suffix-popup',
    template: ''
})
export class DepartamentoMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private departamentoPopupService: DepartamentoMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.departamentoPopupService
                    .open(DepartamentoMySuffixDialogComponent as Component, params['id']);
            } else {
                this.departamentoPopupService
                    .open(DepartamentoMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
