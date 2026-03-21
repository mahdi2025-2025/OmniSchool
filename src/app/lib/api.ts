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
    const body = await res.text().catch(() => '');
    throw new Error(`Request failed (${res.status})${body ? `: ${body}` : ''}`);
  }

  return (await res.json()) as T;
}

export async function apiPut<T>(
  path: string,
  options?: {
    body?: unknown;
    headers?: Record<string, string>;
    query?: Record<string, string | number | boolean | undefined | null>;
  },
): Promise<T> {
  const url = new URL(`${API_BASE_URL}${path}`);
  if (options?.query) {
    for (const [k, v] of Object.entries(options.query)) {
      if (v === undefined || v === null) continue;
      url.searchParams.set(k, String(v));
    }
  }

  const hasBody = options && 'body' in options;

  const res = await fetch(url.toString(), {
    method: 'PUT',
    headers: authHeaders({
      ...(hasBody ? { 'Content-Type': 'application/json' } : {}),
      ...(options?.headers ?? {}),
    }),
    body: hasBody ? JSON.stringify(options?.body ?? null) : undefined,
  });

  if (!res.ok) {
    const bodyText = await res.text().catch(() => '');
    throw new Error(`Request failed (${res.status})${bodyText ? `: ${bodyText}` : ''}`);
  }

  // Some endpoints return no content
  if (res.status === 204) return undefined as T;

  const text = await res.text().catch(() => '');
  if (!text) return undefined as T;
  try {
    return JSON.parse(text) as T;
  } catch {
    // if backend replies with plain text
    return text as unknown as T;
  }
}

export async function apiPost<T>(
  path: string,
  options?: {
    body?: unknown;
    headers?: Record<string, string>;
    query?: Record<string, string | number | boolean | undefined | null>;
  } | unknown,
): Promise<T> {
  const isOptionsObject =
    options !== null &&
    typeof options === 'object' &&
    !Array.isArray(options) &&
    ('body' in (options as any) || 'headers' in (options as any) || 'query' in (options as any));

  const opts = (isOptionsObject ? (options as any) : { body: options }) as {
    body?: unknown;
    headers?: Record<string, string>;
    query?: Record<string, string | number | boolean | undefined | null>;
  };

  const url = new URL(`${API_BASE_URL}${path}`);
  if (opts?.query) {
    for (const [k, v] of Object.entries(opts.query)) {
      if (v === undefined || v === null) continue;
      url.searchParams.set(k, String(v));
    }
  }

  const res = await fetch(url.toString(), {
    method: 'POST',
    headers: authHeaders({
      'Content-Type': 'application/json',
      ...(opts?.headers ?? {}),
    }),
    body: JSON.stringify(opts?.body ?? null),
  });

  if (!res.ok) {
    const bodyText = await res.text().catch(() => '');
    throw new Error(`Request failed (${res.status})${bodyText ? `: ${bodyText}` : ''}`);
  }

  if (res.status === 204) return undefined as T;
  const text = await res.text().catch(() => '');
  if (!text) return undefined as T;
  try {
    return JSON.parse(text) as T;
  } catch {
    return text as unknown as T;
  }
}
