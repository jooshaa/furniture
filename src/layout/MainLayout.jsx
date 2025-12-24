import React from 'react';
import { LayoutWrapper } from './Layout.styled';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Slidebar from '../components/slidebar/slidebar';

function MainLayout(props) {
    const { children } = props;

    return (
        <LayoutWrapper>
            <div>
                <Navbar />
                {/* {children} */}
            </div>

            <Slidebar/>            
            <Footer />
        </LayoutWrapper>
    );
}

export default MainLayout;