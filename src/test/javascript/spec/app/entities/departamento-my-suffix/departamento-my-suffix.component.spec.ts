/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TesteTestModule } from '../../../test.module';
import { DepartamentoMySuffixComponent } from '../../../../../../main/webapp/app/entities/departamento-my-suffix/departamento-my-suffix.component';
import { DepartamentoMySuffixService } from '../../../../../../main/webapp/app/entities/departamento-my-suffix/departamento-my-suffix.service';
import { DepartamentoMySuffix } from '../../../../../../main/webapp/app/entities/departamento-my-suffix/departamento-my-suffix.model';

describe('Component Tests', () => {

    describe('DepartamentoMySuffix Management Component', () => {
        let comp: DepartamentoMySuffixComponent;
        let fixture: ComponentFixture<DepartamentoMySuffixComponent>;
        let service: DepartamentoMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TesteTestModule],
                declarations: [DepartamentoMySuffixComponent],
                providers: [
                    DepartamentoMySuffixService
                ]
            })
            .overrideTemplate(DepartamentoMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DepartamentoMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DepartamentoMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new DepartamentoMySuffix(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.departamentos[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
