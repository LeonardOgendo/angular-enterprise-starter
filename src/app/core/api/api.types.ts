// Defines global API contracts (ApiResponse,  ApiError, generic transport shapes)

export interface ApiError {
  message: string;
  status?: number;
}

export interface ApiResponse<T> {
  data: T;
  error: ApiError | null;
}
