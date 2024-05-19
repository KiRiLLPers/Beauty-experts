import SectionMain from "@/app/service/[id]/components/SectionMain/SectionMain";
import SectionPrice from "@/app/service/[id]/components/SectionPrice/SectionPrice";

type Props = {
    params: {
        id: string
    }
}

// export function generateStaticParams() {
//     const services = [
//         {url: '/service/hairdressing'},
//         {url: '/service/manicure'},
//         {url: '/service/makeup'},
//         {url: '/service/cosmetology-massage'},
//     ];
//     return services.map(service => {
//         // Возьмём id из URL, отрезав "/service/"
//         const id = service.url.slice(9);
//         return {id}
//     });
// }

export default function Service({params: {id}}: any) {
    return <>
        <SectionMain id={id}/>
        <SectionPrice id={id}></SectionPrice>
    </>
}
