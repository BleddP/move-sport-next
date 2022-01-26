const PartnerStrip = ({ partners }) => {
  const array = partners.partners.data;
  const assets = process.env.NEXT_PUBLIC_ASSET_URL

  return (
    <div className="partners-strip">
      {array.map((partner) => {
          const logo = partner.attributes.logo.data.attributes.url
        return (
          <div key={partner.id} className="partner">
            <span className="partner__tooltip">{partner.attributes.name}</span>
            <img
              src={assets + logo}
              alt={partner.attributes.name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PartnerStrip;
