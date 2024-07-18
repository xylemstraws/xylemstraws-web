import {
  Josefin_Sans as HeadFont,
  // Raleway as HeadFont,
  Outfit,
  Bona_Nova as TitleFont,
  Great_Vibes as QuoteFont,
  Xanh_Mono
} from "next/font/google";
// import { Inder as Be_Vietnam_Pro } from "next/font/google";

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
});


const headFont = HeadFont({
  weight: [
    "400",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    // "800",
    // "900",
  ],
  subsets: ["latin"],
});

console.log(headFont);

const titleFont = TitleFont({
  weight: ["400"],
  subsets: ["latin"],
});
const quoteFont = QuoteFont({
  weight: ["400"],
  subsets: ["latin"],
});

const fonts = {
  MainFont: headFont.className,
  HeadFont: headFont.className,
  TitleFont: headFont.className,
  QuoteFont: headFont.className,
};
export default fonts;
