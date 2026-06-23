## Interceptors

Global, singleton logic (loaded once for entire app)

---

### Auth Interceptor `auth.interceptor.ts`

Attaches authentication credentials to outgoing HTTP requests and handles authentication lifecycle events.

Typical responsibilities:

- Add JWT/Bearer token
- Add API key
- Refresh expired tokens
- Redirect on 401/403
- Skip auth for public endpoints

---

### Error Interceptor `error.interceptor.ts`

Handles cross-cutting HTTP failures (401, 403, 500, network errors) and triggers global application responses.

Typical responsibilities:

- Logout on 401
- Navigate to login
- Trigger toast/notification service
- Retry transient failures

---

### Logging Interceptor `logging.interceptor.ts`

Records HTTP request and response metadata for diagnostics, monitoring, and performance analysis.

Typical responsibilities:

- Request URL
- HTTP method
- Status code
- Duration
- Correlation IDs
- Development debugging
