import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { DepartamentoMySuffix } from './departamento-my-suffix.model';
import { DepartamentoMySuffixService } from './departamento-my-suffix.service';

@Injectable()
export class DepartamentoMySuffixPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private departamentoService: DepartamentoMySuffixService

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
                this.departamentoService.find(id)
                    .subscribe((departamentoResponse: HttpResponse<DepartamentoMySuffix>) => {
                        const departamento: DepartamentoMySuffix = departamentoResponse.body;
                        this.ngbModalRef = this.departamentoModalRef(component, departamento);
                        resolve(this.ngbModalRef);
                    });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.departamentoModalRef(component, new DepartamentoMySuffix());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    departamentoModalRef(component: Component, departamento: DepartamentoMySuffix): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.departamento = departamento;
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
