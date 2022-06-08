import { FaRegEye } from "react-icons/fa";
import { splitAtoms } from "../../types";

const Views = ({ views }: { views: splitAtoms }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <FaRegEye />
        <p className="text-md">{`${views}`}</p>
      </div>
    </>
  );
};

export default Views;
