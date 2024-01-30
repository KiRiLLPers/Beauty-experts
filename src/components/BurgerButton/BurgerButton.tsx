'use client'

import css from './BurgerButton.module.scss'
const BurgerButton = ({ isOpen, handleOpenMenu }: { isOpen: boolean, handleOpenMenu: () => void }) => {

    return <button className={`xl-min:hidden ${css.burger} ${isOpen && css.open}`} onClick={handleOpenMenu}>
        <div></div>
        <div></div>
        <div></div>
    </button>
}

export default BurgerButton
