// Reusable API transformation utilities (normalizes HTTP responses into consistent structures)
import { Observable, OperatorFunction, catchError, map, of } from 'rxjs';
import { ApiResponse, ApiError } from './api.types';

export function toApiResponse<T>(): OperatorFunction<T, ApiResponse<T>> {
  return (source$: Observable<T>) =>
    source$.pipe(
      map((data): ApiResponse<T> => ({
        data,
        error: null
      })),
      catchError((err): Observable<ApiResponse<T>> => {
        const error: ApiError = {
          message: 'API_ERROR',
          status: err?.status
        };

        return of({
          data: null as T,
          error
        });
      })
    );
}
