import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function truncate(str: string | null | undefined, length: number): string {
  if (!str || str.length === 0) {
    return "";
  }

  if (str.length <= length) {
    return str;
  }

  return str.slice(0, length) + "...";
}