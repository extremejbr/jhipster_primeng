import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { ItemMySuffix } from './item-my-suffix.model';
import { ItemMySuffixService } from './item-my-suffix.service';

@Injectable()
export class ItemMySuffixPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private itemService: ItemMySuffixService

    ) {
        this.ngbModalRef = null;
    }

    open(component: Component, id?: number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }

            if (id) {
                this.itemService.find(id)
                    .subscribe((itemResponse: HttpResponse<ItemMySuffix>) => {
                        const item: ItemMySuffix = itemResponse.body;
                        if (item.dataAquisicao) {
                            item.dataAquisicao = {
                                year: item.dataAquisicao.getFullYear(),
                                month: item.dataAquisicao.getMonth() + 1,
                                day: item.dataAquisicao.getDate()
                            };
                        }
                        this.ngbModalRef = this.itemModalRef(component, item);
                        resolve(this.ngbModalRef);
                    });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.itemModalRef(component, new ItemMySuffix());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    itemModalRef(component: Component, item: ItemMySuffix): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.item = item;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        });
        return modalRef;
    }
}
