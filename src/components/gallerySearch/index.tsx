import { FaRegHeart, FaRegCommentAlt, FaRegEye } from "react-icons/fa";
import Image from "next/image";

const GallerySearch = ({ galeri }: { galeri: any }) => {
  return (
    <>
      <div className="flex justify-center mt-6 items-center">
        <div className="grid gap-6 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 md:grid-cols-3 md:grid-rows-3 grid-rows-1">
          {galeri.map((gambar: any, index: number) => (
            <div
              className="rounded-lg bg-white shadow-xl overflow-hidden"
              key={index + 1}
            >
              <Image
                className="hover:rounded-lg cursor-pointer object-cover hover:scale-110 duration-300 transition-all"
                src={gambar.largeImageURL}
                width="500px"
                height="350px"
              />
              <div className="py-2 px-4">
                <div className="flex gap-4 items-center">
                  <div className="flex flex-col justify-center items-center">
                    <FaRegHeart />
                    <p className="text-xs">{gambar.likes}</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <FaRegCommentAlt />
                    <p className="text-xs">{gambar.comments}</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <FaRegEye />
                    <p className="text-xs">{gambar.views}</p>
                  </div>
                </div>
                <h2 className="font-bold">
                  User: <span className="font-medium">{gambar.user}</span>
                </h2>
                <p className="font-bold">
                  Tags: <span className="underline">{gambar.tags}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GallerySearch;
