import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import SideNav from 'react-simple-sidenav';

//hooks
import { GetRoutes } from 'hooks/getRoutes';
//components
import MenuContainer from 'components/menu/menuContainer';

function Menu(props) {
    const [ showNav, setShowNav ] = useState(false);
    //hooks
    const [ routes ] = GetRoutes();

    return (
        <React.Fragment>
            <div style={{ position: 'fixed', right: '15px', top: '15px', zIndex: 11000 }}>
                <HamburgerMenu
                    isOpen={showNav}
                    menuClicked={() => setShowNav(!showNav)}
                    width={50}
                    height={40}
                    strokeWidth={10}
                    rotate={0}
                    color='#AAAAAA'
                    borderRadius={2}
                    animationDuration={0.5}
                />
            </div>

            <div style={{ zIndex: 1000 }}>
                <SideNav
                    openFromRight={true}
                    showNav={showNav}
                    onHideNav={() => setShowNav(false)}
                    children={<MenuContainer routes={routes} />}
                    titleStyle={{}}
                    itemStyle={{ backgroundColor: '#fff' }}
                    itemHoverStyle={{ backgroundColor: '#CDDC39' }}
                />
            </div>
        </React.Fragment>
    );
}
export default Menu;
