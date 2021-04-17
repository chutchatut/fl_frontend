import Head from "next/head";
import Dashboard from "../components/Dashboard/Dashboard";

const Home = () => {
  return (
    <>
      <Head>
        <title>FL dashboard</title>
      </Head>
      <Dashboard />
    </>
  );
};

Home.getInitialProps = () => ({});

export default Home;
