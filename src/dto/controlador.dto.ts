import { BaseEntity } from '../base/base-entity.interface'
import { SoftDelete } from '../base/soft-delete.interface'
import { TipoControlador } from '../enums/tipo-controlador.enum'

/**
 * Representa um Controlador de Dados Pessoais (Requerido) no contexto da ANPD.
 *
 * Esse tipo é utilizado para trafegar dados entre os microsserviços e APIs,
 * correspondendo à entidade persistida no sistema `cadastro-controladores-api`.
 *
 * ## Heranças:
 * - `BaseEntity` → inclui `id`
 * - `SoftDelete` → inclui `active` e `exclusionDate`
 *
 * ## Campos relevantes:
 * - Pode representar tanto pessoa jurídica (`cnpj`) quanto natural (`cpf`), conforme o `tipo`.
 * - É vinculado a dados de referência como `Setor`, `CNAE` e `Grupo Econômico` por ID.
 *
 * ## Notas:
 * - Externamente, esse tipo corresponde ao "Requerido" no sistema `backlog-dim`.
 * - Pode ser expandido para conter entidades relacionadas ou ser mapeado para `ControladorDetalhadoDto`.
 */
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
