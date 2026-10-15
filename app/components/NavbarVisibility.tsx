"use client";

import { useEffect, useRef, useState } from "react";

interface NavbarVisibilityProps {
  children: React.ReactNode;
}

export default function NavbarVisibility({
  children,
}: NavbarVisibilityProps) {
  const [open, setOpen] = useState(true);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    clearTimer();

    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 5000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearTimer();
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimer();
    setOpen(true);
  };

  const handleMouseLeave = () => {
    startTimer();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`navbar-shell ${
        open ? "is-open" : "is-collapsed"
      }`}
    >
      {children}
    </div>
  );
}