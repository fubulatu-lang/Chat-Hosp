export interface ApiResponse<T> {

    success: boolean;

    data: T;

    message?: string;

}

export interface Pagination {

    page: number;

    pageSize: number;

    total: number;

}

export interface SelectOption {

    label: string;

    value: string | number;

}

export interface Audit {

    createdAt: string;

    updatedAt: string;

    createdBy?: string;

    updatedBy?: string;

}