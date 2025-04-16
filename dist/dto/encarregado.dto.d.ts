import { BaseEntity } from '../base/base-entity.interface';
import { SoftDelete } from '../base/soft-delete.interface';
/**
 * @description
 * Representa um Encarregado pelo tratamento de dados pessoais (Data Protection Officer - DPO),
 * vinculado a um Controlador. Pode ser interno ou externo à organização controladora.
 *
 * @remarks
 * - Quando `externo` for `true`, o campo `controladorEmpresaExternaId` pode ser usado para
 *   referenciar a empresa à qual o encarregado pertence.
 * - Um mesmo Controlador pode ter múltiplos encarregados, e um encarregado pode servir mais de um controlador.
 * - Segue a estrutura da LGPD para entidades responsáveis pela comunicação com os titulares e com a ANPD.
 *
 * @example
 * {
 *   id: 1,
 *   nome: "Maria Silva",
 *   email: "maria@empresa.com.br",
 *   telefone: "(61) 99999-9999",
 *   externo: false,
 *   controladorId: 42,
 *   active: true
 * }
 */
export interface EncarregadoDto extends BaseEntity, SoftDelete {
    /**
     * Nome completo do encarregado de dados pessoais
     */
    nome: string;
    /**
     * E-mail de contato oficial do encarregado
     */
    email: string;
    /**
     * Telefone para contato direto (opcional)
     */
    telefone?: string;
    /**
     * Define se o encarregado atua como empresa externa (prestador de serviço)
     */
    externo: boolean;
    /**
     * ID do Controlador ao qual o encarregado está vinculado
     */
    controladorId: number;
    /**
     * ID do Controlador que representa a empresa externa, se aplicável
     */
    controladorEmpresaExternaId?: number;
}
