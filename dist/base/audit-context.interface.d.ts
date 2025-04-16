/**
 * @description
 * Representa os metadados de rastreamento de ações realizadas por um usuário ou sistema.
 *
 * Essa interface é útil para capturar o contexto de auditoria de uma operação em APIs,
 * como quem realizou a ação, de onde veio e com qual agente de usuário.
 *
 * @remarks
 * - Pode ser usada isoladamente ou como parte de entidades auditáveis (ex: `AuditedEntity`)
 * - Ideal para registros em microsserviços de auditoria ou interceptadores de requisições
 *
 * @example
 * {
 *   userId: "b3c2e3a9",
 *   ip: "192.168.0.101",
 *   userAgent: "Mozilla/5.0 (Windows NT 10.0)",
 *   contexto: "Importação de processos via CSV"
 * }
 */
export interface AuditContext {
    /**
     * ID do usuário que executou a ação
     */
    userId?: string;
    /**
     * Endereço IP de origem da requisição
     */
    ip?: string;
    /**
     * Identificação do agente de usuário (navegador, sistema, etc.)
     */
    userAgent?: string;
    /**
     * Descrição opcional do contexto da ação (ex: nome do módulo ou operação)
     */
    contexto?: string;
}
