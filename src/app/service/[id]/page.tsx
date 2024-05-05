import SectionMain from "@/app/service/[id]/components/SectionMain/SectionMain";
import SectionPrice from "@/app/service/[id]/components/SectionPrice/SectionPrice";

type Props = {
    params: {
        id: string
    }
}
export default function Service({params: {id}}: any) {
    return <>
        <SectionMain id={id}/>
        <SectionPrice id={id}></SectionPrice>
    </>
}
