import React, { useState, useRef } from "react";
import bar from "./progressbar.module.css";

function Home() {
  const [width, setWidth] = useState(0);
  let timeRef = useRef(null);

  const startProgress = () => {
    setWidth((width) => {
      if (width === 100) return width;
      return width + 1;
    });

    timeRef.current = setTimeout(startProgress, 200);
  };

  const barBackground = () => {
    let background = "#cd5c5c";

    if (width >= 25) background = "#ffa500";
    if (width >= 50) background = "#ff8c00";
    if (width >= 75) background = "#20b2aa";
    if (width === 100) background = "#006400";

    return background;
  };

  const pauseBar = () => {
    clearTimeout(timeRef.current);
  };

  const resetBar = () => {
    setWidth(0);
    clearTimeout(timeRef.current);
  };

  return (
    <div className={bar.container}>
      <div className={bar.barContainer}>
        <div
          className={bar.bar}
          style={{ width: `${width}%`, background: barBackground() }}
        >
          {width < 100 ? `${width}%` : "Done!"}
        </div>
      </div>

      <div className={bar.btnGroup}>
        <button
          className={`${bar.btn} ${bar.btnLeft} ${bar.success}`}
          onClick={startProgress}
        >
          Start Progressbar
        </button>

        <button
          className={`${bar.btn} ${bar.btnCenter} ${bar.warning}`}
          onClick={pauseBar}
        >
          Pause Progressbar
        </button>

        <button
          className={`${bar.btn} ${bar.btnRight} ${bar.danger}`}
          onClick={resetBar}
        >
          Reset Progressbar
        </button>
      </div>
    </div>
  );
}

export default Home;
