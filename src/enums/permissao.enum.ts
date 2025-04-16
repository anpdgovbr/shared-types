/**
 * Ações permitidas em uma permissão de recurso
 */
export type AcaoPermissao =
  | 'Exibir'
  | 'VerHistorico'
  | 'EditarProprio'
  | 'EditarGeral'
  | 'Alterar'
  | 'Cadastrar'
  | 'Editar'
  | 'Desabilitar'
  | 'Criar'

/**
 * Recursos do sistema que podem ter permissões atribuídas
 */
export type RecursoPermissao =
  | 'Processo'
  | 'Responsavel'
  | 'Metadados'
  | 'Relatorios'
  | 'Permissoes'
  | 'Usuario'

/**
 * Representa uma permissão concedida efetiva no formato `Acao_Recurso`
 * @example 'EditarGeral_Processo'
 */
export type PermissaoConcedida = `${AcaoPermissao}_${RecursoPermissao}`
