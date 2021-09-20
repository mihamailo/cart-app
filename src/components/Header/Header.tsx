import React from 'react'
import { Link } from 'react-router-dom'
import s from './Header.module.scss'

console.log(s);

const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <div className='container'>
                <div className={s.headerInner}>
                    <div className="header__logo">MyShop</div>
                    <ul className="header__menu">
                        <li>
                            <Link to='/cart'>
                                Корзина
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
