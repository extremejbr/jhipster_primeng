import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LocalMySuffix } from './local-my-suffix.model';
import { LocalMySuffixPopupService } from './local-my-suffix-popup.service';
import { LocalMySuffixService } from './local-my-suffix.service';

@Component({
    selector: 'jhi-local-my-suffix-dialog',
    templateUrl: './local-my-suffix-dialog.component.html'
})
export class LocalMySuffixDialogComponent implements OnInit {

    local: LocalMySuffix;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private localService: LocalMySuffixService,
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
        if (this.local.id !== undefined) {
            this.subscribeToSaveResponse(
                this.localService.update(this.local));
        } else {
            this.subscribeToSaveResponse(
                this.localService.create(this.local));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<LocalMySuffix>>) {
        result.subscribe((res: HttpResponse<LocalMySuffix>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: LocalMySuffix) {
        this.eventManager.broadcast({ name: 'localListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-local-my-suffix-popup',
    template: ''
})
export class LocalMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private localPopupService: LocalMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.localPopupService
                    .open(LocalMySuffixDialogComponent as Component, params['id']);
            } else {
                this.localPopupService
                    .open(LocalMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
