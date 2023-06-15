import { ECodeExamples } from 'app/codeExamples'
import { type FC } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './style.module.scss'

interface INavLinkItemProps {
    codeExamples: ECodeExamples
    text: string
}

export const NavLinkItem: FC<INavLinkItemProps> = ({ codeExamples, text }) => {
    return (
        <li>
            <NavLink
                className={ ({ isActive, isPending }) => isPending ? 'pending' : isActive ? classes.active : '' }
                to={ 'CodeExample/' + codeExamples }
            >
                {text}
            </NavLink>
        </li>
    )
}
