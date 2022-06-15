import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    SidebarWrapper,
    SlideBtnWrap,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggleMenu }) => {
    return (
        <SidebarContainer isOpen={isOpen} toggleMenu={toggleMenu}>
            <Icon onClick={toggleMenu.bind(this)}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        onClick={toggleMenu.bind(this)}
                        to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        exact='true'
                    >
                        About
                    </SidebarLink>
                    <SidebarLink
                        onClick={toggleMenu.bind(this)}
                        to='discover'
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        exact='true'
                    >
                        Discover
                    </SidebarLink>
                    <SidebarLink
                        onClick={toggleMenu.bind(this)}
                        to='services'
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        exact='true'
                    >
                        Services
                    </SidebarLink>
                    <SidebarLink
                        onClick={toggleMenu.bind(this)}
                        to='signup'
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        exact='true'
                    >
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SlideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SlideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
