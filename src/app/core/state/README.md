# Global App State

Global application state shared across multiple unrelated features:

- authentication session
- current user, 
- theme
- localization
- feature flags, and other 
- application-wide concerns

Feature-specific state should remain inside its respective feature module.
