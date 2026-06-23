## Guards

Route protection (auth, roles, permissions)

### Auth Guard

`auth.guard.ts`

The **Auth** guard verifies that the user is authenticated before accessing a route.

Typical checks:

- Is this user logged in?
- Does a valid access token/session exist?
- Has the session expired?
- Should the user be redirected to `/login?`

---

### Role Guard

The **Role Guard** performs authorization, not authentication.

Typical checks:

- Is the user an Admin?
- Is the user a Super User?
- Does the user have a required permission?

---
