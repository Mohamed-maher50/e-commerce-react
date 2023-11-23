import React from "react";

import ReactImageMagnify from "react-image-magnify";

import watchImg687 from "/products/apple_iphone_11-_white_3_1.jpg";
import watchImg1200 from "/products/apple_iphone_11-_white_3_1.jpg";

const ImageMagnify = () => {
  return (
    <div className="fluid">
      <div className="fluid__image-container  ">
        <ReactImageMagnify
          {...{
            isActivatedOnTouch: true,
            isHintEnabled: true,
            enlargedImageContainerClassName: "z-10",
            imageClassName: "w-65 border-4",
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              src: watchImg687,
              width: 350,
              height: 300,
            },
            largeImage: {
              src: watchImg1200,
              width: 300,
              height: 600,
            },
          }}
        />
      </div>
    </div>
  );
};

export default ImageMagnify;
