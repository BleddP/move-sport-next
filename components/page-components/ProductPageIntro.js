import Image from "next/image";
import ReactMarkdown from "react-markdown";

import renderImage from "../helper-functions/renderImage";

export const ProductPageIntro = ({ data }) => {
  const image = renderImage(data?.image?.data?.attributes);

  const direction = data.direction

  return (
    <div className="page-product__intro">
      <div className={direction === 'image_right' ? "columns columns--2-col" : 'columns columns--2-col reverse'}>
        <div>
          <h1>{data.title}</h1>
          <ReactMarkdown>
            {data.intro}
            </ReactMarkdown>
        </div>
        <div className="columns--image">
          <Image src={image.url} width={image.width} height={image.height} />
        </div>
      </div>
    </div>
  );
};

export default ProductPageIntro;
