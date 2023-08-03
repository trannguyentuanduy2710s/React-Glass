import React, { useState } from 'react';
import '../StyleComponent//style.css'
const BaiTapGlass = () => {
  const [imgSrc, setImgSrc] = useState('./images/glass/model.jpg');
  const [productSrc, setProductSrc] = useState('./images/glass/v1.png');

  return (
    <div>
      <h2>Bài Tập Glass</h2>
      <div className="row">
        <div className="col-12">
          <div className="img-container">
            <img className="img-fluid model-img" src={imgSrc} alt="..." />
            <div
              className="product-overlay img-fluid"
              style={{
                backgroundImage: `url(${productSrc})`,
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
        <div className="col-3 ">
          <button onClick={() => setProductSrc('./images/glass/v1.png')}>
            <img src="./images/glass/v1.png" alt="..." />
          </button>
          <button onClick={() => setProductSrc('./images/glass/v2.png')}>
            <img src="./images/glass/v2.png" alt="..." />
          </button>
          <button onClick={() => setProductSrc('./images/glass/v3.png')}>
            <img src="./images/glass/v3.png" alt="..." />
          </button>
          <button onClick={() => setProductSrc('./images/glass/v4.png')}>
            <img src="./images/glass/v4.png" alt="..." />
          </button>
          <button onClick={() => setProductSrc('./images/glass/v5.png')}>
            <img src="./images/glass/v5.png" alt="..." />
          </button>
          <button onClick={() => setProductSrc('./images/glass/v6.png')}>
            <img src="./images/glass/v6.png" alt="..." />
          </button>
          <button onClick={() => setProductSrc('./images/glass/v7.png')}>
            <img src="./images/glass/v7.png" alt="..." />
          </button>
          <button onClick={() => setProductSrc('./images/glass/v8.png')}>
            <img src="./images/glass/v8.png" alt="..." />
          </button>
          <button onClick={() => setProductSrc('./images/glass/v9.png')}>
            <img src="./images/glass/v9.png" alt="..." />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BaiTapGlass;
