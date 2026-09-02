import type { Metadata } from "next";
import { CountryPage } from "../country-page";

export const metadata: Metadata = {
  title: "TGF Sri Lanka | Commercial Kitchen Solutions",
};

export default function Page() {
  return <CountryPage country="sri-lanka" />;
}
