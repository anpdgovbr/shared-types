import { SoftDelete, NamedEntity } from '../base';
export interface GrupoEconomicoDto extends NamedEntity, SoftDelete {
    observacoes?: string;
}
