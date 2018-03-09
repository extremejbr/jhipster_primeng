import { BaseEntity } from './../../shared';

export class DepartamentoMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public nome?: string,
        public local?: string,
        public ids?: BaseEntity[],
    ) {
    }
}
