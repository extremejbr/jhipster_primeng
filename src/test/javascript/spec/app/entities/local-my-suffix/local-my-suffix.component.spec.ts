/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TesteTestModule } from '../../../test.module';
import { LocalMySuffixComponent } from '../../../../../../main/webapp/app/entities/local-my-suffix/local-my-suffix.component';
import { LocalMySuffixService } from '../../../../../../main/webapp/app/entities/local-my-suffix/local-my-suffix.service';
import { LocalMySuffix } from '../../../../../../main/webapp/app/entities/local-my-suffix/local-my-suffix.model';

describe('Component Tests', () => {

    describe('LocalMySuffix Management Component', () => {
        let comp: LocalMySuffixComponent;
        let fixture: ComponentFixture<LocalMySuffixComponent>;
        let service: LocalMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TesteTestModule],
                declarations: [LocalMySuffixComponent],
                providers: [
                    LocalMySuffixService
                ]
            })
            .overrideTemplate(LocalMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(LocalMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LocalMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new LocalMySuffix(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.locals[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
