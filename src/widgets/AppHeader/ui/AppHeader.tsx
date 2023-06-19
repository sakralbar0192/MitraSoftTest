import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Burger_menu from '../assets/menu_burger.svg'
import classes from './style.module.scss'
import { NavLink } from 'react-router-dom'
import { AboutMeCard } from 'widgets/AboutMeCard'
import { ECodeExamples } from 'app/codeExamples'
import { NavLinkItem } from 'widgets/NavLinkItem'
import { useAppSelector } from 'app/hooks'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

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
                                    text='SmartDevice'
                                    tooltipText='HTML5, scss, VanilaJs, Gulp, styleLint'
                                    onClick={ handleClose }
                                />
                                <NavLinkItem
                                    to={ ECodeExamples.JEVELLERY }
                                    text='Jewellery'
                                    tooltipText='HTML5, scss, VanilaJs, Gulp, styleLint, Webpack'
                                    onClick={ handleClose }
                                />
                                <NavLinkItem
                                    to={ ECodeExamples.EUROPE }
                                    text='Europe'
                                    tooltipText='HTML5, scss, VanilaJs, Gulp, styleLint'
                                    onClick={ handleClose }
                                />
                                <NavLinkItem
                                    to={ ECodeExamples.MISHKA }
                                    text='Mishka'
                                    tooltipText='HTML5, scss, VanilaJs, Gulp, styleLint'
                                    onClick={ handleClose }
                                />
                                <NavLinkItem
                                    to={ ECodeExamples.BICYCLE }
                                    text='Bicycle'
                                    tooltipText='HTML5, scss, VanilaJs, Gulp, styleLint, esLint'
                                    onClick={ handleClose }
                                />
                            </ul>
                        </li>
                        <li>
                            <span>Apps</span>
                            <ul>
                                <li>
                                    <OverlayTrigger
                                        placement='right'
                                        delay={ { show: 250, hide: 400 } }
                                        overlay={ <Tooltip id='button-tooltip'>
                                                React, React-router, Redux, Redux-saga, TypeScript, Vite, EsLint, axios
                                        </Tooltip> }
                                    >
                                        <NavLink
                                            className={ ({ isActive, isPending }) => isPending ? 'pending' : isActive ? classes.active : '' }
                                            to='PostsList'
                                            onClick={ handleClose }
                                        >
                                            Posts list
                                        </NavLink>
                                    </OverlayTrigger>

                                </li>
                                <NavLinkItem
                                    to={ ECodeExamples.POKEDEX }
                                    text='Pokedex'
                                    tooltipText='React, React-router, TypeScript, CreateReactApp, axios'
                                    onClick={ handleClose }
                                />
                                <NavLinkItem
                                    to={ ECodeExamples.KEKSOBOOKING }
                                    text='Keksobooking'
                                    tooltipText='VanilaJS, Leaflet'
                                    onClick={ handleClose }
                                />
                                <li>
                                    <OverlayTrigger
                                        placement='right'
                                        delay={ { show: 250, hide: 400 } }
                                        overlay={ <Tooltip id='button-tooltip'>
                                                Vue, CompositionAPI, Vuetify, Vue-Router, Pinia, Vite, TypeScript, axios, EsLint
                                        </Tooltip> }
                                    >
                                        <a
                                            href='https://sakralbar0192.github.io/CyberZilla/#/'
                                            onClick={ handleClose }
                                        >
                                            CyberZilla
                                        </a>
                                    </OverlayTrigger>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <AboutMeCard />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
