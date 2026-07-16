"use client";

import { useEffect, useRef } from "react";

export default function MobileMenu() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      const menu = menuRef.current;
      if (menu?.open && !menu.contains(event.target as Node)) menu.open = false;
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  return (
    <details className="mobileMenu" ref={menuRef}>
      <summary>Меню</summary>
      <div>
        <a href="#services" onClick={closeMenu}>Послуги</a>
        <a href="#works" onClick={closeMenu}>Каталог</a>
        <a href="#materials" onClick={closeMenu}>Матеріали</a>
        <a href="#contact" onClick={closeMenu}>Контакти</a>
      </div>
    </details>
  );
}
