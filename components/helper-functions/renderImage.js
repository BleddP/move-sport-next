const renderImage = (imageObject) => {
  const assetsPath = process.env.NEXT_PUBLIC_ASSET_URL;
  const development = process.env.NODE_ENV === "development";

  let image = imageObject;

  if (!development) {
    image = {
      ...image,
      url: assetsPath + imageObject.url,
      // formats: {
      //   large: {
      //     ...image.formats.large,
      //     url: assetsPath + imageObject.formats.large.url,
      //   },
      //   medium: {
      //     ...image.formats.medium,
      //     url: assetsPath + imageObject.formats.medium.url,
      //   },
      //   small: {
      //     ...image.formats.small,
      //     url: assetsPath + imageObject.formats.small.url,
      //   },
      //   thumbnail: {
      //     ...image.formats.thumbnail,
      //     url: assetsPath + imageObject.formats.thumbnail.url,
      //   },
      // },
    };
  }

  return image;
};

export default renderImage;
