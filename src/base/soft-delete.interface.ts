/**
 * @description
 * Marca uma entidade como habilitada ou desabilitada logicamente (soft delete).
 *
 * Essa interface é usada para aplicar controle de exclusão lógica nas entidades persistidas,
 * evitando a remoção física no banco de dados e permitindo a filtragem por `active`.
 *
 * @remarks
 * - Em APIs de leitura, recomenda-se filtrar `active = true`
 * - Em APIs de exclusão, apenas marque como `active = false` e preencha `exclusionDate`
 *
 * @example
 * {
 *   active: false,
 *   exclusionDate: new Date("2024-01-12")
 * }
 */
export interface SoftDelete {
  /**
   * Indica se a entidade está ativa (`true`) ou desativada (`false`)
   */
  active: boolean

  /**
   * Data em que a entidade foi desativada, se aplicável
   */
  exclusionDate?: Date | null
}
