// components/layout.js
import Navbar from './Navbar';
import Footer from './Footer';
import Head from "next/head";


export default function Container({ children }) {
  return (
    <div className="Principal">
      <Head>
        <title>Factura Colibri</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cosmo/bootstrap.min.css"
        />

      </Head>
      <Navbar />
      <div className="container p-2">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
