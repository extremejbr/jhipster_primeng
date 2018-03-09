/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TesteTestModule } from '../../../test.module';
import { DepartamentoMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/departamento-my-suffix/departamento-my-suffix-detail.component';
import { DepartamentoMySuffixService } from '../../../../../../main/webapp/app/entities/departamento-my-suffix/departamento-my-suffix.service';
import { DepartamentoMySuffix } from '../../../../../../main/webapp/app/entities/departamento-my-suffix/departamento-my-suffix.model';

describe('Component Tests', () => {

    describe('DepartamentoMySuffix Management Detail Component', () => {
        let comp: DepartamentoMySuffixDetailComponent;
        let fixture: ComponentFixture<DepartamentoMySuffixDetailComponent>;
        let service: DepartamentoMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TesteTestModule],
                declarations: [DepartamentoMySuffixDetailComponent],
                providers: [
                    DepartamentoMySuffixService
                ]
            })
            .overrideTemplate(DepartamentoMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DepartamentoMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DepartamentoMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new DepartamentoMySuffix(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.departamento).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
