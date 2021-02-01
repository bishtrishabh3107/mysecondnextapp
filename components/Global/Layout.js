import Footer from '../organism/Footer';
import Header from '../organism/header';
import Head from 'next/head';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Head></Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
