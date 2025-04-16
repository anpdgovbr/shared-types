import { SoftDelete } from '../base'

/**
 * User Data Transfer Object
 * Mantido nome em inglês para compatibilidade com o sistema de autenticação.

 * @extends SoftDelete
 */
export interface UserDto extends SoftDelete {
  id: string // UUID do usuário, utilizado para autenticação e identificação única
  email: string
  nome?: string
  perfilId?: number
  image?: string
  responsavelId?: number | null //específico do backlog-dim, indica o link entre o User e o Responsável (nome do User no csv de importação)
}
