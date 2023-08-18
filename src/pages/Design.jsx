import React, { useState } from "react";
import Draggable from "react-draggable";
import car from "/public/car.png";
const Design = ({ setDetail, detail }) => {
  const [color, setColor] = useState("green");
  return (
    <div>
      <div className="w-96 h-96 bg-blue-300">
        <div className="w-96 absolute">
          <svg
            id="eUudoIXmT7a1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 300 300"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
          >
            <g transform="translate(-5.179576-26.104958)">
              <path
                d="M83.08011,267.2651v-183.14899h39.15746c0,13.73084,14.65587,24.86188,32.73481,24.86188s32.73481-11.13104,32.73481-24.86188h39.15746v183.14899h-143.78454Z"
                transform="translate(-.20725 0.414353)"
                fill={detail.color}
                stroke-width="0"
              />
              <rect
                width="69.198895"
                height="39.779006"
                rx="0"
                ry="0"
                transform="matrix(.688622 0.688622-.645835 0.645835 227.486271 84.116111)"
                fill={detail.color}
                stroke-width="0"
              />
              <rect
                width="69.198895"
                height="39.779006"
                rx="0"
                ry="0"
                transform="matrix(.688622-.688622 0.645835 0.645835 35.221006 131.767965)"
                fill={detail.color}
                stroke-width="0"
              />
            </g>
          </svg>
        </div>
        <Draggable
          onStop={(e, data) => {
            //   console.log(e);
            console.log("x=> ", data.x, "y=> ", data.y);
          }}
          bounds={{ left: 97, right: 190, top: 71, bottom: 244 }}
        >
          <div className="w-24">
            <img src={car} alt="car" />
          </div>
        </Draggable>
      </div>
      <input
        type="color"
        onChange={(e) => {
          console.log(e.target.value);
          setDetail({ ...detail, color: e.target.value });
        }}
      />
    </div>
  );
};

export default Design;
