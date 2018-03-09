/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TesteTestModule } from '../../../test.module';
import { LocalMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/local-my-suffix/local-my-suffix-detail.component';
import { LocalMySuffixService } from '../../../../../../main/webapp/app/entities/local-my-suffix/local-my-suffix.service';
import { LocalMySuffix } from '../../../../../../main/webapp/app/entities/local-my-suffix/local-my-suffix.model';

describe('Component Tests', () => {

    describe('LocalMySuffix Management Detail Component', () => {
        let comp: LocalMySuffixDetailComponent;
        let fixture: ComponentFixture<LocalMySuffixDetailComponent>;
        let service: LocalMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TesteTestModule],
                declarations: [LocalMySuffixDetailComponent],
                providers: [
                    LocalMySuffixService
                ]
            })
            .overrideTemplate(LocalMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(LocalMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LocalMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new LocalMySuffix(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.local).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
