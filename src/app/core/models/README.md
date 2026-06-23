## Core / Models

Global/shared domain data contracts

---

### `auth.model.ts`

Authentication and authorization-related contracts shared throughout the application.

**Typical Contents**

```ts
export interface LoginRequest {}

export interface LoginResponse {}

export interface RegisterRequest {}

export interface AuthUser {}

export interface AuthSession {}
```

---

**What does NOT belong here**

```ts
HttpResponse
ApiError
ApiRequest
```

Those are transport concerns

---

### `user.model.ts`

Application's canonical User contract.

**Typical contents**

```ts
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
}
```

---

### `pagination.model.ts`

Reusable pagination contracts used throught the application.
