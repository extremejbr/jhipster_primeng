import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { LocalMySuffix } from './local-my-suffix.model';
import { LocalMySuffixService } from './local-my-suffix.service';

@Component({
    selector: 'jhi-local-my-suffix-detail',
    templateUrl: './local-my-suffix-detail.component.html'
})
export class LocalMySuffixDetailComponent implements OnInit, OnDestroy {

    local: LocalMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private localService: LocalMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInLocals();
    }

    load(id) {
        this.localService.find(id)
            .subscribe((localResponse: HttpResponse<LocalMySuffix>) => {
                this.local = localResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInLocals() {
        this.eventSubscriber = this.eventManager.subscribe(
            'localListModification',
            (response) => this.load(this.local.id)
        );
    }
}
