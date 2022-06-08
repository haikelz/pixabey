import { useState } from "react";
import Link from "next/link";
import Images from "../atoms/images";
import Hearts from "../atoms/hearts";
import Views from "../atoms/views";
import Comments from "../atoms/comments";
import User from "../atoms/user";
import Tag from "../atoms/tag";

const Grid = ({ gallery }: { gallery: any }) => {
  /*buat load more, jadi satu kali tampil itu ada 20 gambar, 
  jadi jika buttonnya dipencet, maka 20 + 20 = 40, 
  dan seterusnya  
  */
  const [visible, setVisible] = useState(18);

  const showMoreImages = () => {
    setVisible((prevValue) => prevValue + 18);
  };
  return (
    <div className="flex justify-center flex-col mt-6 items-center">
      <div className="grid gap-6 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 md:grid-cols-3 md:grid-rows-3 grid-rows-1">
        {gallery.hits?.slice(0, visible).map((gambar: any, index: number) => (
          <Link href={`/detail/${gambar.id}`} key={index + 1}>
            <div
              className="rounded-lg shadow-xl bg-white overflow-hidden"
              key={index + 1}
            >
              <Images src={gambar.largeImageURL} />
              <div className="py-2 px-4">
                <div className="flex gap-4 items-center">
                  <Hearts hearts={gambar.likes} />
                  <Views views={gambar.views} />
                  <Comments comments={gambar.comments} />
                </div>
                <div className="pt-2">
                  <User user={gambar.user} />
                  <Tag tags={gambar.tags} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex mt-6 justify-center items-center ">
        <button
          className="bg-blue-500 border-none outline-none hover:bg-blue-600 duration-300 transition-all text-white font-bold text-xl drop-shadow-md rounded-md px-5 py-3"
          onClick={showMoreImages}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Grid;
