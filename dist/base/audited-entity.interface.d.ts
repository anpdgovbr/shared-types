import { BaseEntity } from './base-entity.interface';
import { AuditContext } from './audit-context.interface';
/**
 * Representa uma entidade auditável com metadados de criação e atualização.
 *
 * ## Quando usar `AuditedEntity`:
 *
 * | Situação                         | Usar `AuditedEntity`? |
 * |----------------------------------|------------------------|
 * | Modelo persistido com logs       | ✅ Sim                 |
 * | DTO de leitura (Output)          | ✅ Se contiver auditoria |
 * | DTO de criação (Input)           | ❌ Não                 |
 * | Logs (ex: `AuditLog`)            | ❌ Não (ele é o log)   |
 * | Tipos de referência (CNAE, Setor)| ✅ Se tiver `criadoEm`/`active` |
 */
export interface AuditedEntity extends BaseEntity, AuditContext {
    criadoEm?: Date;
    atualizadoEm?: Date;
}
