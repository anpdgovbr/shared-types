import { TipoParticipacaoSocietaria } from '../enums/tipo-participacao-societaria.enum'
import { SoftDelete, BaseEntity } from '../base/'

export interface SocioDto extends BaseEntity, SoftDelete {
  nome: string
  cpfCnpj: string
  tipoParticipacao: TipoParticipacaoSocietaria
  nacionalidade?: string
}
