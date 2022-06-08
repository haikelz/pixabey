import { FaRegCommentAlt } from "react-icons/fa";
import { splitAtoms } from "../../types";

const Comments = ({ comments }: { comments: splitAtoms }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <FaRegCommentAlt />
        <p className="text-md">{`${comments}`}</p>
      </div>
    </>
  );
};

export default Comments;
