import { AcaoAuditoria } from '../enums/acao-auditoria.enum';
import { BaseEntity } from '../base/base-entity.interface';
export interface AuditLogDto extends BaseEntity {
    tabela: string;
    acao: AcaoAuditoria;
    registroId?: number;
    userId?: string;
    email?: string;
    antes?: unknown;
    depois?: unknown;
    contexto?: string;
    ip?: string;
    userAgent?: string;
    criadoEm: Date;
}
