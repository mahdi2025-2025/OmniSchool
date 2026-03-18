/**
 * Minimal API client helpers for OmniSchool frontend.
 *
 * Centralizes the API base URL and Authorization header handling.
 */

// Prefer Vite env var (VITE_API_BASE_URL), then window override, then default.
// Backend runs on http://localhost:8080 by default.
export const API_BASE_URL =
  (import.meta as any).env?.VITE_API_BASE_URL ??
  (globalThis as any)?.__API_BASE_URL__ ??
  'http://localhost:8080';

export function getAccessToken(): string | null {
  return localStorage.getItem('accessToken');
}

export function authHeaders(extra?: Record<string, string>): HeadersInit {
  const token = getAccessToken();
  const headers: Record<string, string> = {
    ...(extra ?? {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: authHeaders(),
  });

  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`);
  }

  return (await res.json()) as T;
}

export async function apiPut<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'PUT',
    headers: authHeaders(),
  });

  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`);
  }

  return (await res.json()) as T;
}
