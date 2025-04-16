import { EnumData } from '../interfaces/enum-data.interface';
import { ControladorDto } from './controlador.dto';
import { ResponsavelDto } from './responsavel.dto';
import { StatusInterno } from '../enums/status-interno.enum';
import { BaseEntity } from '../base';
/**
 * Representa os dados necessários para criação ou atualização de um processo.
 *
 * Usada principalmente como payload em formulários ou APIs REST.
 *
 * ⚠️ Não contém identificador (`id`) nem metadados como `criadoEm`.
 */
export interface ProcessoInput {
    numero: string;
    dataCriacao: string;
    requerente?: string;
    formaEntradaId?: number;
    responsavelId: number;
    requeridoId?: number;
    situacaoId?: number;
    pedidoManifestacaoId?: number;
    contatoPrevioId?: number;
    evidenciaId?: number;
    anonimo?: boolean;
    observacoes?: string;
    tipoReclamacaoId?: number;
    encaminhamentoId?: number;
    temaRequerimento?: string[];
    tipoRequerimento?: 'PETICAO_TITULAR' | 'DENUNCIA_LGPD';
    resumo?: string;
    dataConclusao?: string;
    dataEnvioPedido?: string;
    prazoPedido?: number;
    requeridoFinalId?: number;
}
/**
 * Representa um processo completo, com dados resolvidos de relacionamento e metadados.
 *
 * Estende `BaseEntity`, portanto inclui `id`.
 *
 * ## Uso comum:
 * - Respostas de APIs REST
 * - Visualização detalhada na UI
 *
 * ## Campos resolvidos:
 * - `formaEntrada`, `situacao`, `encaminhamento`, etc. são representados via `EnumData`
 * - `requerido`, `responsavel`, `requeridoFinal` usam DTOs próprios
 */
export interface ProcessoOutput extends BaseEntity {
    numero: string;
    dataCriacao: Date;
    requerente?: string;
    formaEntrada?: EnumData;
    responsavel: ResponsavelDto;
    requerido?: ControladorDto;
    situacao?: EnumData;
    encaminhamento?: EnumData;
    pedidoManifestacao?: EnumData;
    contatoPrevio?: EnumData;
    evidencia?: EnumData;
    anonimo?: boolean;
    observacoes?: string;
    tipoReclamacao?: EnumData;
    statusInterno?: StatusInterno;
    temaRequerimento: string[];
    tipoRequerimento?: 'PETICAO_TITULAR' | 'DENUNCIA_LGPD';
    resumo?: string;
    dataConclusao?: Date;
    dataEnvioPedido?: Date;
    prazoPedido?: number;
    requeridoFinal?: ControladorDto;
}
/**
 * Representa uma linha do arquivo CSV importado.
 *
 * Esse tipo é usado para mapear o conteúdo bruto da importação de processos antes de converter para `ProcessoInput`.
 *
 * ## Observações:
 * - Campos como `situacaoNome` e `formaEntradaNome` são mapeados para IDs posteriormente.
 * - `anonimoStr` é convertido para boolean.
 */
export interface ProcessoImportacao {
    responsavelNome: string;
    numeroProcesso: string;
    dataCriacao: string;
    situacaoNome: string;
    formaEntradaNome: string;
    anonimoStr: string;
    requerenteNome: string | null;
    statusInterno: StatusInterno;
}
