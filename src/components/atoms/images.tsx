import { splitAtoms } from "../../types";
import Image from "next/image";

const Images = ({ src }: { src: splitAtoms }) => {
  return (
    <>
      <Image
        className="hover:rounded-lg cursor-pointer object-cover hover:scale-110 duration-300 transition-all"
        src={`${src}`}
        width="450px"
        height="350px"
      />
    </>
  );
};

export default Images;
