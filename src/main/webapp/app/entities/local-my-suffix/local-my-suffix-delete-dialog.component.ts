import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LocalMySuffix } from './local-my-suffix.model';
import { LocalMySuffixPopupService } from './local-my-suffix-popup.service';
import { LocalMySuffixService } from './local-my-suffix.service';

@Component({
    selector: 'jhi-local-my-suffix-delete-dialog',
    templateUrl: './local-my-suffix-delete-dialog.component.html'
})
export class LocalMySuffixDeleteDialogComponent {

    local: LocalMySuffix;

    constructor(
        private localService: LocalMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.localService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'localListModification',
                content: 'Deleted an local'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-local-my-suffix-delete-popup',
    template: ''
})
export class LocalMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private localPopupService: LocalMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.localPopupService
                .open(LocalMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
