/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { TesteTestModule } from '../../../test.module';
import { DepartamentoMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/departamento-my-suffix/departamento-my-suffix-delete-dialog.component';
import { DepartamentoMySuffixService } from '../../../../../../main/webapp/app/entities/departamento-my-suffix/departamento-my-suffix.service';

describe('Component Tests', () => {

    describe('DepartamentoMySuffix Management Delete Component', () => {
        let comp: DepartamentoMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<DepartamentoMySuffixDeleteDialogComponent>;
        let service: DepartamentoMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TesteTestModule],
                declarations: [DepartamentoMySuffixDeleteDialogComponent],
                providers: [
                    DepartamentoMySuffixService
                ]
            })
            .overrideTemplate(DepartamentoMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DepartamentoMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DepartamentoMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
