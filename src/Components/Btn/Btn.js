import React, { useEffect, useState } from "react";

const Btn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const clickBtn = ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
  }

  return (
    <div>
      <button
      onClick={clickBtn}
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          display: visible ? "block" : "none",
          border: "none",
          fontSize:"30px",
          zIndex:232432
        }}
      >
    <i class="fa-solid fa-up-long"></i>
      </button>
    </div>
  );
};

export default Btn;