import css from './BurgerButton.module.scss'
const BurgerButton = () => {
    return <button className={`xl-min:hidden ${css.burger}`}></button>
}

export default BurgerButton
