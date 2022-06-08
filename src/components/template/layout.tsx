import Head from "next/head";
import { layout } from "../../types";

const Layout = ({ children, title }: layout) => {
  return (
    <>
      <Head>
        <title>{title} | Piksabey</title>
      </Head>
      <section className="py-8 flex justify-center items-center">
        <div className="max-w-[85%] md:max-w-[75%] flex flex-col justify-center items-center">
          {children}
        </div>
      </section>
    </>
  );
};

export default Layout;
