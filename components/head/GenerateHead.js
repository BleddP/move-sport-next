import Head from "next/head";

const GenerateHead = ({ data }) => {

  const {
    page_title,
    page_description,
    og_title,
    og_description,
    og_site_name,
    og_image,
    og_locale,
    index,
    follow,
  } = data;

  const image = og_image?.data?.attributes?.url;

  return (
    <Head>
      <title>{page_title ? page_title : "Move Sport Psychologie"}</title>
      {page_description && (
        <meta name="description" content={page_description} />
      )}
      <meta
        name="robots"
        content={
          index ? index : "noindex" + ", " + follow ? follow : "nofollow"
        }
      />
      {og_title && <meta property="og:title" content={og_title} key="title" />}
      {og_description && (
        <meta property="og:description" content={og_description} />
      )}
      {og_locale && <meta property="og:locale" content={og_locale} />}
      <meta name="twitter:card" content="summary_large_image" />
      {image && <meta property="og:image" content={image} />}
    </Head>
  );
};

export default GenerateHead;
