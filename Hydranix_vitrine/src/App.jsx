import { useEffect } from "react";
import Background from "./components/Background";
import Hero from "./components/Hero";
import Socials from "./components/Socials";

export default function App() {
  useEffect(() => {
    const blockContext = (e) => e.preventDefault();

    const blockKeys = (e) => {
      const key = e.key.toUpperCase();

      if (
        key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(key)) ||
        (e.ctrlKey && key === "U")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", blockContext);
    document.addEventListener("keydown", blockKeys);

    return () => {
      document.removeEventListener("contextmenu", blockContext);
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);

  return (
    <>
      <Background />
      <Hero />
      <Socials />
    </>
  );
}