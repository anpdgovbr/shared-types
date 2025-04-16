import { BaseEntity } from '../base/base-entity.interface'
import { SoftDelete } from '../base/soft-delete.interface'
import { TipoControlador } from '../enums/tipo-controlador.enum'

export interface ControladorDto extends BaseEntity, SoftDelete {
  nome: string
  tipo: TipoControlador
  cnpj?: string
  cpf?: string
  email?: string
  site?: string
  telefone?: string
  politicaPrivacidadeUrl?: string
  setorId?: number
  cnaeId?: number
  grupoEconomicoId?: number
}
