const TextBlock = ({ data }) => {
  return (
    <section className="text-block">
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </section>
  );
};

export default TextBlock  