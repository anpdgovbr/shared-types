import { SoftDelete } from '../base';
/**
 * User Data Transfer Object
 * Mantido nome em inglês para compatibilidade com o sistema de autenticação.

 * @extends SoftDelete
 */
export interface UserDto extends SoftDelete {
    id: string;
    email: string;
    nome?: string;
    perfilId?: number;
    image?: string;
    responsavelId?: number | null;
}
