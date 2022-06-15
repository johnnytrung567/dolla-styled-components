import { FaBars } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavItem,
    NavLogo,
    NavMenu,
    NavLink,
    NavBtn,
    NavBtnLink,
} from './NavbarElements'

const Navbar = ({ toggleMenu }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 80) setScrollNav(true)
        else setScrollNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const scrollToHome = () => {
        scroll.scrollToTop()
    }

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={scrollToHome}>
                        dolla
                    </NavLogo>
                    <MobileIcon onClick={toggleMenu.bind(this)}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink
                                to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                exact='true'
                            >
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to='discover'
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                exact='true'
                            >
                                Discover
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to='services'
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                exact='true'
                            >
                                Services
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to='signup'
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                exact='true'
                            >
                                Sign Up
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default Navbar
