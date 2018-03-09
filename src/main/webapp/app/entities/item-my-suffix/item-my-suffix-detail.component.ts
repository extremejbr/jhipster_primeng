import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { ItemMySuffix } from './item-my-suffix.model';
import { ItemMySuffixService } from './item-my-suffix.service';

@Component({
    selector: 'jhi-item-my-suffix-detail',
    templateUrl: './item-my-suffix-detail.component.html'
})
export class ItemMySuffixDetailComponent implements OnInit, OnDestroy {

    item: ItemMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private itemService: ItemMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInItems();
    }

    load(id) {
        this.itemService.find(id)
            .subscribe((itemResponse: HttpResponse<ItemMySuffix>) => {
                this.item = itemResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInItems() {
        this.eventSubscriber = this.eventManager.subscribe(
            'itemListModification',
            (response) => this.load(this.item.id)
        );
    }
}
