import React, { useState, useEffect } from "react";

export default function useScrollDirection() {
  const [upScroll, setUpScroll] = useState(false);
  useEffect(() => {
    let lastScrollPosition = window.scrollY;
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > 60) {
        if (currentScrollPosition > lastScrollPosition) {
          setUpScroll(true);
        } else {
          setUpScroll(false);
        }
      } else {
        setUpScroll(false);
      }
      lastScrollPosition = currentScrollPosition;
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return upScroll;
}
