export interface PermissaoDto {
  id: number
  acao: string
  recurso: string
  permitido: boolean
  perfilId?: number
}
