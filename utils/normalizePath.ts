/**
 * Removes trailing '/' from path, if isn't root url
 * update as needed to handle other path related stuff
 */
export function normalizePath(path: string | null | undefined): string {
	// Return home url if path is empty or is root url
	if (!path || path === '' || path === '/') return '/'
	// Remove trailing forward slash, if exists
	return path.replace(/\/$/, '')
}
