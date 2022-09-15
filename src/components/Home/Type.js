import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
            "Developer",
            "MERN Stack Developer",
            "Open Source Contributor",
            "ETHERIUM BLOCKCHAIN Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
      }}
    />
  );
}

export default Type;
