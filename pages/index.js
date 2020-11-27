import Head from "next/head";
import Payment from "../components/payment";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demo Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Payment />
    </div>
  );
}
