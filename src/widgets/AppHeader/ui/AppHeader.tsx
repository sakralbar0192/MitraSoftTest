import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Burger_menu from '../assets/menu_burger.svg'
import classes from './style.module.scss'
import { NavLink } from 'react-router-dom'
import { AboutMeCard } from 'widgets/AboutMeCard'
import { ECodeExamples } from 'app/codeExamples'
import { NavLinkItem } from 'widgets/NavLinkItem'
import { useAppSelector } from 'app/hooks'

export const AppHeader = () => {
    const codeExampleSourceLinkHref = useAppSelector(state => state.main.codeExampleSourceLinkHref)
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div className={ classes.header }>
            <button
                type='button'
                onClick={ handleShow }
                className={ classes.burgerMenuButton }
            >
                <Burger_menu />
            </button>
            {codeExampleSourceLinkHref && <a href={ codeExampleSourceLinkHref }>Source code</a>}

            <Offcanvas show={ show } onHide={ handleClose }>
                <Offcanvas.Header closeButton />
                <Offcanvas.Body className={ classes.sidebarContainer }>
                    <NavLink
                        className={ ({ isActive, isPending }) => isPending ? 'pending' : isActive ? classes.active : '' }
                        to=''
                        onClick={ handleClose }
                    >
                        About me
                    </NavLink>

                    <b>Code Examples</b>
                    <ul>
                        <li>
                            <span>Layouts</span>
                            <ul>
                                <NavLinkItem
                                    to={ ECodeExamples.SMART_DEVICE }
                                    text='Smart Device'
                                    onClick={ handleClose }
                                />
                                <NavLinkItem
                                    to={ ECodeExamples.JEVELLERY }
                                    text='Jewellery'
                                    onClick={ handleClose }
                                />
                                <NavLinkItem
                                    to={ ECodeExamples.EUROPE }
                                    text='Europe'
                                    onClick={ handleClose }
                                />
                                <NavLinkItem
                                    to={ ECodeExamples.MISHKA }
                                    text='Mishka'
                                    onClick={ handleClose }
                                />
                                <NavLinkItem
                                    to={ ECodeExamples.BICYCLE }
                                    text='Bicycle'
                                    onClick={ handleClose }
                                />
                            </ul>
                        </li>
                        <li>
                            <span>Apps</span>
                            <ul>
                                <li>
                                    <NavLink
                                        className={ ({ isActive, isPending }) => isPending ? 'pending' : isActive ? classes.active : '' }
                                        to='PostsList'
                                        onClick={ handleClose }
                                    >
                                        Posts list
                                    </NavLink>
                                </li>
                                <NavLinkItem
                                    to={ ECodeExamples.POKEDEX }
                                    text='Pokedex'
                                    onClick={ handleClose }
                                />
                                <NavLinkItem
                                    to={ ECodeExamples.KEKSOBOOKING }
                                    text='Keksobooking'
                                    onClick={ handleClose }
                                />
                            </ul>
                        </li>
                    </ul>

                    <AboutMeCard />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
