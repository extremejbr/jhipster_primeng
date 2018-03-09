import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { DepartamentoMySuffix } from './departamento-my-suffix.model';
import { DepartamentoMySuffixPopupService } from './departamento-my-suffix-popup.service';
import { DepartamentoMySuffixService } from './departamento-my-suffix.service';

@Component({
    selector: 'jhi-departamento-my-suffix-delete-dialog',
    templateUrl: './departamento-my-suffix-delete-dialog.component.html'
})
export class DepartamentoMySuffixDeleteDialogComponent {

    departamento: DepartamentoMySuffix;

    constructor(
        private departamentoService: DepartamentoMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.departamentoService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'departamentoListModification',
                content: 'Deleted an departamento'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-departamento-my-suffix-delete-popup',
    template: ''
})
export class DepartamentoMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private departamentoPopupService: DepartamentoMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.departamentoPopupService
                .open(DepartamentoMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
