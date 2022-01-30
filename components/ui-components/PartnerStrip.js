const PartnerStrip = ({ partners }) => {
  const array = partners.partners.data;
  const assetsPath = process.env.NEXT_PUBLIC_ASSET_URL
  const development = process.env.NODE_ENV === 'development'

  return (
    <section className="partners-strip">
      {array.map((partner) => {
        let logo = partner.attributes.logo.data.attributes.url
        if (development) {
          logo = assetsPath + logo
        }
        return (
          <div key={partner.id} className="partner">
            <span className="partner__tooltip">{partner.attributes.name}</span>
            <img
              src={logo}
              alt={partner.attributes.name}
            />
          </div>
        );
      })}
    </section>
  );
};

export default PartnerStrip;
