import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Burger_menu from '../assets/menu_burger.svg'
import classes from './style.module.scss'
import { NavLink } from 'react-router-dom'
import { AboutMeCard } from 'widgets/AboutMeCard'
import { ECodeExamples } from 'app/codeExamples'
import { NavLinkItem } from 'widgets/NavLinkItem'

export const AppHeader = () => {
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

            <Offcanvas show={ show } onHide={ handleClose }>
                <Offcanvas.Header closeButton />
                <Offcanvas.Body className={ classes.sidebarContainer }>
                    <NavLink
                        className={ ({ isActive, isPending }) => isPending ? 'pending' : isActive ? classes.active : '' }
                        to='AboutMe'
                    >
                        About me
                    </NavLink>

                    <b>Code Examples</b>
                    <ul>
                        <li>
                            <span>Layout</span>
                            <ul>
                                <NavLinkItem
                                    codeExamples={ ECodeExamples.SMART_DEVICE }
                                    text='Smart Device'
                                />
                                <NavLinkItem
                                    codeExamples={ ECodeExamples.JEVELLERY }
                                    text='Jewellery'
                                />
                                <NavLinkItem
                                    codeExamples={ ECodeExamples.EUROPE }
                                    text='Europe'
                                />
                                <NavLinkItem
                                    codeExamples={ ECodeExamples.MISHKA }
                                    text='Mishka'
                                />
                                <NavLinkItem
                                    codeExamples={ ECodeExamples.BICYCLE }
                                    text='Bicycle'
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
