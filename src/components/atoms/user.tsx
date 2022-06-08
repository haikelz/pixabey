import { splitAtoms } from "../../types";

const User = ({ user }: { user: splitAtoms }) => {
  return (
    <>
      <h2 className="font-bold">
        User: <span className="font-medium">{`${user}`}</span>
      </h2>
    </>
  );
};

export default User;
