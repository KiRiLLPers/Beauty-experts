import css from './SectionPrice.module.scss'
import {priceTable} from "@/app/constants/price";

export default function SectionPrice({id}: any) {
    const renderTableBody = () => {
        return priceTable[id].data.map((el: any) =>
            <tr>{priceTable[id].metadata.columns.map((col: { field: string }) => {
                if (el.section) {
                    return <th
                        className={`text-grey text-16 leading-24 uppercase py-[6px] px-[24px] xl-max:text-12 xl-max:leading-20`}>{el[col.field]}</th>;
                }
                return <td
                    className={`text-16 leading-24 py-[12px] px-[24px] xl-max:text-12 xl-max:leading-20`}>{el[col.field]}</td>
            })
            }
            </tr>)
    }
    return <section className={`${css.wrapper}`}>
        <div className={`${css.wrap}`}>
            <h2 className={`font-felidae text-green text-56 leading-60 xl-max:text-40 xl-max:leading-50`}>Услуги и
                цены</h2>
            <div>
                <table className={`bg`}>
                    <thead>
                    <tr>
                        {priceTable[id].metadata.columns.map((el: { title: string }) => {
                            return <th
                                className={`text-grey text-16 leading-24 uppercase py-[12px] px-[24px] xl-max:text-12 xl-max:leading-20`}>{el.title}</th>
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {renderTableBody()}
                    </tbody>
                </table>
            </div>
            <p className={`text-grey`}>Предложение не является офертой. Мы оставляем за собой право менять
                стоимость.</p>
        </div>
    </section>
}
