import { FaRegHeart } from "react-icons/fa";
import { splitAtoms } from "../../types";

const Hearts = ({ hearts }: { hearts: splitAtoms }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <FaRegHeart />
        <p className="text-md">{`${hearts}`}</p>
      </div>
    </>
  );
};

export default Hearts;
