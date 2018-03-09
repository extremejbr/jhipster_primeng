import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { LocalMySuffix } from './local-my-suffix.model';
import { LocalMySuffixService } from './local-my-suffix.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-local-my-suffix',
    templateUrl: './local-my-suffix.component.html'
})
export class LocalMySuffixComponent implements OnInit, OnDestroy {
locals: LocalMySuffix[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private localService: LocalMySuffixService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.localService.query().subscribe(
            (res: HttpResponse<LocalMySuffix[]>) => {
                this.locals = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInLocals();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: LocalMySuffix) {
        return item.id;
    }
    registerChangeInLocals() {
        this.eventSubscriber = this.eventManager.subscribe('localListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
