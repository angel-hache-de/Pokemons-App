import { FC } from "react";

import Head from "next/head";
import { Navbar } from "../ui";

interface LayoutProps {
  children: JSX.Element;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title || "Pokemon App"}</title>
      <meta name="author" content="Angel Hern&aacute;ndez" />
      <meta name="description" content={`Info about pokemon ${title}`} />
      <meta name="keywords" content={`${title}, pokemon, pokedex`} />

      <meta property="op:title" content={`Info about ${title}`} />
      <meta property="op:description" content={`Page about ${title}`} />
      <meta property="op:image" content={`${origin}/img/banner.png`} />
    </Head>

    <Navbar />

    <main>{children}</main>
  </>
);
