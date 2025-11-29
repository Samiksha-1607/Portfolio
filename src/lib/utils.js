/**
 * Merge class names while filtering falsy values.
 * This helper is intentionally small and easy to read — useful instead of a dependency like `clsx`.
 *
 * Example: classNames('btn', isPrimary && 'btn-primary')
 */
export function cn(...args) {
	return args.filter(Boolean).join(' ');
}

// Common alias — some devs expect `classNames` instead of `cn`.
export const classNames = cn;
