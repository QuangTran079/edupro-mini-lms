import type { AuthUser } from "../../types/auth";

const STORAGE_KEY = "edupro-user";

export function readStoredUser(): AuthUser | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return null;
    }

    const data: unknown = JSON.parse(stored);

    if (
      typeof data === "object" &&
      data !== null &&
      "email" in data &&
      "name" in data &&
      typeof data.email === "string" &&
      typeof data.name === "string"
    ) {
      return {
        email: data.email,
        name: data.name,
      };
    }

    return null;
  } catch {
    return null;
  }
}

export function saveStoredUser(user: AuthUser | null) {
  try {
    if (user === null) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }
  } catch {}
}