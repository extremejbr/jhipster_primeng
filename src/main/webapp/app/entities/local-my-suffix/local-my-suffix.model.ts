import { BaseEntity } from './../../shared';

export class LocalMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public nome?: string,
    ) {
    }
}
