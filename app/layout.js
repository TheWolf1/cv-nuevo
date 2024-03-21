"use client";
import "@css/circle.css";
import "@css/component.css";
// import "@css/font-awesome.css";
import "@css/font-awesome.min.css";
import "@css/style.css";
import "./globals.css";
// <!-- Live Style Switcher - demo only --;
import TunisState from "@/context/context";
import TunisCss from "@/layouts/TunisCss";
import "@css/styleswitcher.css";
import { Open_Sans, Poppins } from "next/font/google";
import { IntlProvider } from "react-intl";
import messages from "./messages";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});
const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-open_sans",
  display: "swap",
});

const metadata = {
  title: "Kevin Paz - Desarrollador Web",
  description:
    "Creado por Kevin Paz - Desarrollador Web",
};

const fontFamily = `${open_sans.variable} ${poppins.variable}`;

export default function RootLayout({ children }) {
  const locale = "es";

  return (
    <TunisState>
      <IntlProvider locale={locale} messages={messages[locale]}>
      <html
        lang="en"
        className="overflow-x-hidden h-full js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths"
      >
        <head>
          <TunisCss />
        </head>
        <body
          className={`${fontFamily} font-Poppins text-fs-16 font-medium leading-lh-1.6`}
        >
          {children}
        </body>
      </html>
      </IntlProvider>
    </TunisState>
  );
}
