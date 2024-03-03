import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function startRefreshInterval(data: any) {
  setInterval(async () => {
    try {
      const refreshedToken = await fetch(`/api/auth/login?_=${Date.now()}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const res = await refreshedToken.json();
    } catch (error) {
      console.error('Token refresh failed:', error);
    }
  }, 30 * 60 * 1000);
}

