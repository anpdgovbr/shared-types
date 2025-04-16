export interface BasePaginatedResponse<T> {
    data: T[];
    total: number;
}
