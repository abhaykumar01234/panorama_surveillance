import s from "./layout.module.scss";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className={s.parent}>
      <Head>
        <title>Panaroma Surveillance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>Surveillance</header>
      <main>{children}</main>
      <footer>
        <div>
          <big>PIMCO</big> Abs Structured Products
        </div>
        <div>Home</div>
        <div>BETA powered by PIMgrid</div>
      </footer>
    </div>
  );
};

export default Layout;
