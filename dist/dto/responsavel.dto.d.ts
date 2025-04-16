import { BaseEntity, SoftDelete } from '../base';
export interface ResponsavelDto extends BaseEntity, SoftDelete {
    nome: string;
    userId?: string;
}
