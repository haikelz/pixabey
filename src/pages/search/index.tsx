import Layout from "../../components/layout";
import GallerySearch from "../../components/gallerySearch";
import { useState } from "react";

const Search = () => {
  const [searchImage, setSearchImage] = useState("");
  const [image, setImage] = useState([]);

  const getSearchImage = async (query: string) => {
    try {
      let response = await fetch(
        `https://pixabay.com/api/?key=27684176-3c346f34cb73b73e9ec1e628a&q=${query}&type=photo`
      ).then((res) => res.json());

      setImage(response.hits);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    getSearchImage(searchImage);
  };

  return (
    <Layout title="Search">
      <h1 className="text-4xl font-bold text-center">Search</h1>
      <form className="mt-2" onSubmit={handleSearch}>
        <input
          className="rounded-full outline-none border-2 font-semibold border-blue-500 px-4 py-1"
          type="text"
          name="text"
          placeholder="Search Here"
          value={searchImage}
          onChange={(e) => setSearchImage(e.target.value)}
        />
      </form>
      <GallerySearch galeri={image} />
    </Layout>
  );
};

export default Search;
