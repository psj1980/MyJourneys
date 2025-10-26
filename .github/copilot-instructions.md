# React + TypeScript Best Practices for GitHub Copilot

## 1. Component Structure

- Use functional components with arrow functions.
- Prefer named exports over default exports.
- Keep components small and focused.

## 2. Type Safety

- Always type props and state.
- Use `React.FC<Props>` for component props.
- Prefer explicit types over `any`.

## 3. File Naming

- Use `.tsx` for files containing JSX.
- Use PascalCase for component filenames.

## 4. Imports & Exports

- Use absolute imports if possible.
- Group imports: external libraries, internal modules, styles.

## 5. Hooks

- Use React hooks (`useState`, `useEffect`, etc.) for state and lifecycle.
- Create custom hooks for reusable logic.

## 6. Code Style

- Use consistent indentation (2 spaces or tabs).
- Prefer single quotes for strings.
- Use semicolons.

## 7. Documentation

- Add JSDoc comments for complex functions and components.
- Document prop types and expected values.

## 8. Error Handling

- Handle errors gracefully in async code.
- Use TypeScript's union types for error states.

## 9. Copilot Usage

- Write clear function/component signatures.
- Add descriptive comments for Copilot context.
- Use meaningful variable and function names.

## 10. Testing

- Write unit tests for components and hooks.
- Use TypeScript types in test files.

## 11. Querying Data

- use `useSuspenseQuery` from `@tanstack/react-query` for data fetching with suspense support.
- use `@tanstack/react-query` for data fetching and caching.

## 12. Styling

- use tailwindcss for styling components.
- prefer utility classes over custom CSS.

## 13. State Management

- use React's built-in state management for local state.
- prefer using tanstack/react-query for server state management and caching.
- use context API for global state when necessary.

## 14. Other

- prefer deconstruction of props and objects for cleaner code in the parameters.

## 15. Colors

- use tailwindcss color classes (e.g., `bg-red-500`, `text-gray-700`) for consistent theming.

## 16. Theme

As a best practice, prefix all custom colors in the "theme" in index.css to avoid conflicts with default tailwind colors.
Use my colors as defined in the index.css for a consistent design system.

---

Following these guidelines helps Copilot generate accurate, maintainable React + TypeScript code.
