/**
 * @description
 * Representa uma permissão concedida a um perfil, indicando se uma determinada ação é permitida sobre um recurso.
 *
 * Cada permissão é definida por um par `ação + recurso`, e vinculada a um `perfilId`.
 *
 * @remarks
 * - O campo `permitido` define se a ação está explicitamente permitida (`true`) ou negada (`false`)
 * - Pode ser modelado em conjunto com enums como `AcaoPermissao`, `RecursoPermissao` e `PermissaoConcedida`
 * - Esse DTO é frequentemente usado em telas de gestão de perfis, segurança e controle de acesso (RBAC)
 *
 * @example
 * {
 *   id: 7,
 *   acao: "Editar",
 *   recurso: "Processo",
 *   permitido: true,
 *   perfilId: 3
 * }
 */
export interface PermissaoDto {
    /**
     * Identificador único da permissão
     */
    id: number;
    /**
     * Ação permitida ou negada (ex: 'Exibir', 'Editar', 'Cadastrar')
     */
    acao: string;
    /**
     * Recurso ao qual a permissão se aplica (ex: 'Processo', 'Usuario')
     */
    recurso: string;
    /**
     * Define se a ação sobre o recurso está permitida
     */
    permitido: boolean;
    /**
     * ID do perfil ao qual a permissão está vinculada
     */
    perfilId?: number;
}
