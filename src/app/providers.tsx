"use client";
import { ThemeProvider } from "@material-tailwind/react";

export function MaterialProvider({ children }: { children: React.ReactNode }) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
