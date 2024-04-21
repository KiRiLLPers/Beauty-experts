import Image from "next/image";
import {SectionMain} from "@/app/components/SectionMain/SectionMain";
import {SectionAbout} from "@/app/components/SectionAbout/SectionAbout";
import {SectionMasters} from "@/app/components/SectionMasters/SectionMasters";
import {SectionServices} from "@/app/components/SectionServices/SectionServices";
import {SectionCarousel} from "@/app/components/SectionCarousel/SectionCarousel";
import {SectionPortfolio} from "@/app/components/SectionPortfolio/SectionPortfolio";
import {SectionCosmetics} from "@/app/components/SectionCosmetics/SectionCosmetics";
import {SectionPhoto} from "@/app/components/SectionPhoto/SectionPhoto";
import {SectionMap} from "@/app/components/SectionMap/SectionMap";

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
        </>)
}
