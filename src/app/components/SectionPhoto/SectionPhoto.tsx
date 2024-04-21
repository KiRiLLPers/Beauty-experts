import photo from '../../../../public/images/sectionPhoto/photo.png'
import Image from "next/image";

export const SectionPhoto = () => {
    return <section className={``}>
        <Image src={photo} alt={`photo`}
               className={`w-[100%] object-contain`}></Image>
    </section>
}
