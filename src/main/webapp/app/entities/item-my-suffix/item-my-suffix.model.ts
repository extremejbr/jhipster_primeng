import { BaseEntity } from './../../shared';

export class ItemMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public etiqueta?: string,
        public descricao?: string,
        public dataAquisicao?: any,
        public departamentoId?: number,
    ) {
    }
}
