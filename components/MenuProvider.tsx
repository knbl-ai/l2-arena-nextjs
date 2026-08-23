'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

type MenuContextValue = {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

const MenuContext = createContext<MenuContextValue | null>(null);

/**
 * The nav bar and the mobile menu overlay sit at opposite ends of the document
 * in the original markup but share one piece of state. A provider keeps the page
 * itself a server component while letting both ends read the same flag.
 */
export function MenuProvider({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = useCallback(() => setMobileMenuOpen((open) => !open), []);
  const value = useMemo(() => ({ mobileMenuOpen, toggleMobileMenu }), [mobileMenuOpen, toggleMobileMenu]);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenu(): MenuContextValue {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error('useMenu must be used inside <MenuProvider>');
  return ctx;
}
