import vision from "@react-native-firebase/ml-vision";

export default useOcr = () => {
  const processPhoto = async (uri) => {
    const processed = await vision().cloudDocumentTextRecognizerProcessImage(
      uri
    );
    return processed;
  };

  return { processPhoto };
};
