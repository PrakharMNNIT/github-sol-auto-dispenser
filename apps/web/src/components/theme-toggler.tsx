'use client';

import { SunDimIcon, SunMoonIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggler() {
  const { setTheme } = useTheme();

  return (
    <>
      <SunDimIcon className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <SunMoonIcon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </>
  );
}
