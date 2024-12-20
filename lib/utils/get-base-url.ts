export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    // Client-side
    return window.location.origin;
  }
  // Server-side
  if (process.env.DASHBOARD_BASE_URL) {
    return process.env.DASHBOARD_BASE_URL;
  }
  // Fallback for development
  return 'http://localhost:3000';
}
