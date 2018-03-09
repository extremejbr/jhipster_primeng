/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { TesteTestModule } from '../../../test.module';
import { LocalMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/local-my-suffix/local-my-suffix-delete-dialog.component';
import { LocalMySuffixService } from '../../../../../../main/webapp/app/entities/local-my-suffix/local-my-suffix.service';

describe('Component Tests', () => {

    describe('LocalMySuffix Management Delete Component', () => {
        let comp: LocalMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<LocalMySuffixDeleteDialogComponent>;
        let service: LocalMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TesteTestModule],
                declarations: [LocalMySuffixDeleteDialogComponent],
                providers: [
                    LocalMySuffixService
                ]
            })
            .overrideTemplate(LocalMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(LocalMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LocalMySuffixService);
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
