const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

class ApiError extends Error {
    constructor(
        message: string,
        public status: number,
        public data?: any
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

async function fetcher<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const config: RequestInit = {
        ...options,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    };

    try {
        const response = await fetch(url, config);

        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new ApiError(
                error.message || 'Something went wrong',
                response.status,
                error
            );
        }

        if (response.status === 204) {
            return {} as T;
        }

        return response.json();

    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }

        throw new ApiError(
            error instanceof Error ? error.message : 'Network error',
            0
        );
    }
}

export const api = {
    get: <T>(endpoint: string, options?: RequestInit) =>
        fetcher<T>(endpoint, { ...options, method: 'GET' }),

    post: <T>(endpoint: string, data?: any, options?: RequestInit) =>
        fetcher<T>(endpoint, {
            ...options,
            method: 'POST',
            body: JSON.stringify(data),
        }),

    put: <T>(endpoint: string, data?: any, options?: RequestInit) =>
        fetcher<T>(endpoint, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(data),
        }),

    patch: <T>(endpoint: string, data?: any, options?: RequestInit) =>
        fetcher<T>(endpoint, {
            ...options,
            method: 'PATCH',
            body: JSON.stringify(data),
        }),

    delete: <T>(endpoint: string, options?: RequestInit) =>
        fetcher<T>(endpoint, { ...options, method: 'DELETE' }),
};