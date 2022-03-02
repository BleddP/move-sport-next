import Image from "next/image";

import renderImage from "../helper-functions/renderImage";

export const ProductPageIntro = ({ data }) => {
  const image = renderImage(data?.image?.data?.attributes);

  return (
    <div className="page-product__intro">
      <div className="columns columns--2-col">
        <div>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
        </div>
        <div>
          <Image src={image.url} width={image.width} height={image.height} />
        </div>
      </div>
    </div>
  );
};

export default ProductPageIntro;
