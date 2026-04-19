import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    const container = document.querySelector(".sakura-container");

    const createPetal = () => {
      const petal = document.createElement("span");
      petal.classList.add("petal");

      petal.style.left = Math.random() * window.innerWidth + "px";
      petal.style.animationDuration = 5 + Math.random() * 5 + "s";
      petal.style.opacity = Math.random();
      petal.style.transform = `scale(${0.5 + Math.random()}) rotate(${Math.random() * 360}deg)`;

      container.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, 10000);
    };

    const interval = setInterval(createPetal, 300);

    return () => clearInterval(interval);
  }, []);

  return <div className="sakura-container"></div>;
}