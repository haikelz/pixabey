import { splitAtoms } from "../../types";

const Tag = ({ tags }: { tags: splitAtoms }) => {
  return (
    <>
      <p className="font-bold">
        Tags: <span className="underline">{`${tags}`}</span>
      </p>
    </>
  );
};

export default Tag;
