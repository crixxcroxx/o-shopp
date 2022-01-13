import { useState } from "react";

import Btn from "../Btn";

import "./btnGrp.css";

export default function BtnGrp() {
  const [pcs, setPcs] = useState(1);

  const handleClick = (method) => {
    if(method === "dec") {
      setPcs(pcs - 1)
    } else {
      setPcs(pcs + 1)
    }
  }

  return (
    <div className="btn-grp">
      <div onClick={() => handleClick("dec")}>
        <Btn>-</Btn>
      </div>

      <div className="product-count">{pcs}</div>

      <div onClick={() => handleClick("inc")}>
        <Btn>+</Btn>
      </div>
    </div>
  );
}