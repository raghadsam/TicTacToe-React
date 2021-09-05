import React from "react";
import Sky from "react-sky";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";
import image6 from "./images/6.png";
import image7 from "./images/7.png";
import image8 from "./images/8.png";
import image9 from "./images/9.png";
import image10 from "./images/10.png";
export default function Background() {
  return (
    <div>
      <Sky
        images={{
          0: image1,
          1: image2,
          2: image3,
          3: image4,
          4: image5,
          5: image6,
          6: image7,
          7: image8,
          8: image9,
          9: image10,
        }}
        how={50}
        time={8}
        size={"90px"}
        background={"#131a28"}
      />
    </div>
  );
}
