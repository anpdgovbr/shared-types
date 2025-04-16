import { NamedEntity, SoftDelete } from '../base/'

export interface CnaeDto extends NamedEntity, SoftDelete {
  code: string
}
