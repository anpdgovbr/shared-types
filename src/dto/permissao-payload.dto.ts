import { AcaoPermissao, RecursoPermissao } from '../enums/permissao.enum'

/**
 * Payload utilizado para criar ou atualizar permissões vinculadas a um perfil.
 */
export interface PermissaoPayload {
  perfilId: number
  acao: AcaoPermissao
  recurso: RecursoPermissao
  permitido: boolean
}
