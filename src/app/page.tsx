import Image from "next/image";
import {SectionMain} from "@/app/components/SectionMain/SectionMain";
import {SectionAbout} from "@/app/components/SectionAbout/SectionAbout";
import {SectionMasters} from "@/app/components/SectionMasters/SectionMasters";

export default function Home() {
    return (
        <>
            <SectionMain></SectionMain>
            <SectionAbout></SectionAbout>
            <SectionMasters></SectionMasters>
        </>
    );
}
