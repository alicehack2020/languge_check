

import "../globals.css";
import { dir } from "i18next";
import Navbar from "./components/navbar";

const languages = ["en", "de"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />

      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
