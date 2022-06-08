import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const getStaticPaths = async () => {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=27684176-3c346f34cb73b73e9ec1e628a&type=photo&per_page=200`
    );
    const data = await response.json();

    const paths = data.hits.map((image: any) => {
      return {
        params: { id: image.id.toString() },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
  }
};

export const getStaticProps = async (context: any) => {
  try {
    const id = context.params.id;
    const response = await fetch(
      `https://pixabay.com/api/?key=27684176-3c346f34cb73b73e9ec1e628a&type=photo&id=${id}&per_page=200`
    );
    const data = await response.json();
    console.log(data);

    return {
      props: { gambar: data },
    };
  } catch (err) {
    console.log(err);
  }
};

const DetailID = ({ gambar }: { gambar: any }) => {
  return (
    <>
      <Head>
        <title>Detail | Pixabey</title>
      </Head>
      <div className="flex justify-center items-center h-screen">
        {gambar.hits.map((img: any, index: number) => (
          <div
            className="flex items-center flex-col justify-center p-3"
            key={index + 1}
          >
            <Link href={img.largeImageURL} passHref download>
              <Image
                src={`${img.largeImageURL}`}
                width="900px"
                height="500px"
                className="relative hover:rounded-lg cursor-pointer object-cover hover:scale-110 duration-300 transition-all"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailID;
