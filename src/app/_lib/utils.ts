import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function InitialsNameLetters(name: string) {
  const words = name.split(" ");
  if (words.length === 1) {
    return words[0].substring(0, 2);
  } else {
    return words[0].substring(0, 1) + words[1].substring(0, 1);
  }
}
