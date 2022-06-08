import Layout from "../components/template/layout";
import Grid from "../components/template/grid";
import { useState } from "react";

export const getStaticProps = async () => {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=27684176-3c346f34cb73b73e9ec1e628a&type=photo&per_page=200`
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

const App = ({ gambar }: { gambar: any }) => {
  return (
    <Layout title="Home">
      <h1 className="text-4xl font-bold text-center">Piksabey</h1>
      <Grid gallery={gambar} />
    </Layout>
  );
};

export default App;
