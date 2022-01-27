const renderImage = (imageObject) => {
  const assetsPath = process.env.NEXT_PUBLIC_ASSET_URL;
  const development = process.env.NODE_ENV === "development";

  if (development) {
    imageObject.url = assetsPath + imageObject.url;
    imageObject.formats.large.url = assetsPath + imageObject.formats.large.url;
    imageObject.formats.medium.url =
      assetsPath + imageObject.formats.medium.url;
    imageObject.formats.small.url = assetsPath + imageObject.formats.small.url;
    imageObject.formats.thumbnail.url =
      assetsPath + imageObject.formats.thumbnail.url;
  }
  return imageObject;
};

export default renderImage;
