import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// // Improved performance - 7129

// // Fixed bug - 2570

// // Fixed bug - 2865

// // Refactored code - 7262
