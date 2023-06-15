import { ECodeExamples } from 'app/codeExamples'
import { type FC } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './style.module.scss'

interface INavLinkItemProps {
    to: ECodeExamples
    text: string
    onClick?: () => void
}

export const NavLinkItem: FC<INavLinkItemProps> = ({ to, text, onClick }) => {
    return (
        <li>
            <NavLink
                className={ ({ isActive, isPending }) => isPending ? 'pending' : isActive ? classes.active : '' }
                to={ 'CodeExample/' + to }
                onClick={ onClick }
            >
                {text}
            </NavLink>
        </li>
    )
}
