import Image from "next/image";
import {SectionMain} from "@/app/components/SectionMain/SectionMain";
import {SectionAbout} from "@/app/components/SectionAbout/SectionAbout";
import { SectionMasters } from "./components/SectionMasters/SectionMasters";
import { SectionServices } from "./components/SectionServices/SectionServices";
import { SectionCarousel } from "./components/SectionCarousel/SectionCarousel";
import { SectionPortfolio } from "./components/SectionPortfolio/SectionPortfolio";
import { SectionPhoto } from "./components/SectionPhoto/SectionPhoto";
import { SectionCosmetics } from "./components/SectionCosmetics/SectionCosmetics";
import { SectionMap } from "./components/SectionMap/SectionMap";

export default function Home() {
  return (
      <>
        <SectionMain></SectionMain>
        <SectionAbout></SectionAbout>
        <SectionMasters></SectionMasters>
        <SectionServices></SectionServices>
        <SectionCarousel></SectionCarousel>
        <SectionPortfolio></SectionPortfolio>
        <SectionPhoto></SectionPhoto>
        <SectionCosmetics></SectionCosmetics>
        <SectionMap></SectionMap>
      </>
  );
}
