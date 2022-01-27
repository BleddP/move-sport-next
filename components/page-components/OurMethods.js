import Image from "next/image";
import renderImage from '../helper-functions/renderImage'

const OurMethods = ({page}) => {

  const methods = page.methods.methods.data

  return (
    <section className="container container--96">
      <div className="our-methods">
        <div className="our-methods__content">
          <h1>{page.title}</h1>
          <p>
           {page.intro}
          </p>
        </div>
        <div className="our-methods__grid">
          {methods.map((method) => {
            const image = renderImage(method.attributes.icon.data.attributes)
            return (
              <div key={method.id} className="method">
              <Image className="method__image" src={image.url} alt={method.attributes.title} width={300} height={300}/>
              <div className="method__content">
                <h4>{method.attributes.title}</h4>
                <p>
                  {method.attributes.content}
                </p>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default OurMethods;
