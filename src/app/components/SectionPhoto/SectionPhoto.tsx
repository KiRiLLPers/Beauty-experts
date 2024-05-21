import photo from '../../../images/sectionPhoto/sectionPhoto.png'
import Image from "next/image";

export const SectionPhoto = () => {
    return <section className={``}>
        <Image src={photo} alt={`photo`} loading={'lazy'}
               className={`w-[100%] object-contain`}></Image>
    </section>
}
