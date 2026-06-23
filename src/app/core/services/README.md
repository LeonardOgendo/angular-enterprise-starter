# Core / Services

App-wide services (cross-feature logic)

---

## `auth.service.ts`

Authentication state and session orchestration

**Responsibilities**:

- Authentication state (logged in / logged out)
- Current user state
- Login / logout orchestration
- Token refresh coordination
- Session restore on app init

---

## `config.service.ts`

Application configuration (runtime or environment based)

**Responsibilities**

- Provide API base URL
- Provide feature flags
- Provide environment metadata
- Load runtime config

---

## `logger.service.ts`

Standardized logging API:

- info
- warn
- error
