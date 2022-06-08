import useDownloader from "react-use-downloader";

const Download = () => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  return (
    <>
      <button></button>
    </>
  );
};

export default Download;
