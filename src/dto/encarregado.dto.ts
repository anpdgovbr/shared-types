import { BaseEntity } from '../base/base-entity.interface'
import { SoftDelete } from '../base/soft-delete.interface'

export interface EncarregadoDto extends BaseEntity, SoftDelete {
  nome: string
  email: string
  telefone?: string
  externo: boolean
  controladorId: number
  controladorEmpresaExternaId?: number
}
