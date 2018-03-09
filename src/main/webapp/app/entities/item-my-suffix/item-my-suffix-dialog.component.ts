import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ItemMySuffix } from './item-my-suffix.model';
import { ItemMySuffixPopupService } from './item-my-suffix-popup.service';
import { ItemMySuffixService } from './item-my-suffix.service';
import { DepartamentoMySuffix, DepartamentoMySuffixService } from '../departamento-my-suffix';

@Component({
    selector: 'jhi-item-my-suffix-dialog',
    templateUrl: './item-my-suffix-dialog.component.html'
})
export class ItemMySuffixDialogComponent implements OnInit {

    item: ItemMySuffix;
    isSaving: boolean;

    departamentos: DepartamentoMySuffix[];
    dataAquisicaoDp: any;

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private itemService: ItemMySuffixService,
        private departamentoService: DepartamentoMySuffixService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {

        this.isSaving = false;
        this.departamentoService.query()
            .subscribe((res: HttpResponse<DepartamentoMySuffix[]>) => { this.departamentos = res.body; }, (res: HttpErrorResponse) => this.onError(res.message));
        
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        console.log(this.item.dataAquisicao);
        this.isSaving = true;
        if (this.item.id !== undefined) {
            this.subscribeToSaveResponse(
                this.itemService.update(this.item));
        } else {
            this.subscribeToSaveResponse(
                this.itemService.create(this.item));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ItemMySuffix>>) {
        result.subscribe((res: HttpResponse<ItemMySuffix>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: ItemMySuffix) {
        this.eventManager.broadcast({ name: 'itemListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackDepartamentoById(index: number, item: DepartamentoMySuffix) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-item-my-suffix-popup',
    template: ''
})
export class ItemMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private itemPopupService: ItemMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.itemPopupService
                    .open(ItemMySuffixDialogComponent as Component, params['id']);
            } else {
                this.itemPopupService
                    .open(ItemMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
