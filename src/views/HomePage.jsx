import React from "react";
import img from "../img/logo192.png";
function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
        }}
      >
        <li>
          <img src={img} alt={"foto"} />
        </li>
        <li>
          <img src={img} alt={"foto"} />
        </li>
        <li>
          <img src={img} alt={"foto"} />
        </li>
        <li>
          <img src={img} alt={"foto"} />
        </li>
        <li>
          <img src={img} alt={"foto"} />
        </li>
        <li>
          <img src={img} alt={"foto"} />
        </li>
        <li>
          <img src={img} alt={"foto"} />
        </li>
        <li>
          <img src={img} alt={"foto"} />
        </li>
        <li>
          <img src={img} alt={"foto"} />
        </li>
        <li>
          <img src={img} alt={"foto"} />
        </li>
        <li>
          <img src={img} alt={"foto"} />
        </li>
        <li>
          <img src={img} alt={"foto"} />
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
