const PartnerStrip = ({ partners }) => {
  console.log("partners: ", partners.partners.data);

  const array = partners.partners.data;

  return (
    <div className="partners-strip">
      {array.map((partner) => {
        return (
          <div key={partner.id} className="partner">
            <span className="partner__tooltip">{partner.attributes.name}</span>
            <img
              src="https://www.nu.nl/static/img/atoms/images/logos/nu_logo.svg?v=1"
              alt={partner.attributes.name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PartnerStrip;
