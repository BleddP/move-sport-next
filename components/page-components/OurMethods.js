import Image from "next/image";

const OurMethods = ({page}) => {

  const methods = page.methods.methods.data
  const assets = process.env.NEXT_PUBLIC_ASSET_URL

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
            return (
              <div key={method.id} className="method">
              <Image className="method__image" src={assets + method.attributes.icon.data.attributes.url} alt='sparlkes' width={300} height={300}/>
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
