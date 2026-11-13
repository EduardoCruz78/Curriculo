import { Archivo } from "next/font/google";

/** One grotesque family; hierarchy comes from weight and width, like station signage. */
export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});
