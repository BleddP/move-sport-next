import ReactMarkdown from "react-markdown";

const TextBlock = ({ data }) => {
  return (
    <section className="text-block">
      <h2>{data.title}</h2>
      <ReactMarkdown>{data.content}</ReactMarkdown>
    </section>
  );
};

export default TextBlock  