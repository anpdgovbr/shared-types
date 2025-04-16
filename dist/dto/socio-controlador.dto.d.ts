import { BaseEntity } from '../base';
export interface SocioControladorDto extends BaseEntity {
    socioId: number;
    controladorId: number;
    percentual?: number;
}
