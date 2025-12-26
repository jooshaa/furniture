import React from 'react';
import { LayoutWrapper } from './Layout.styled';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Slidebar from '../components/slidebar/slidebar';
import Catalog from '../components/catalog/Catalog';
import Why_norlight from '../components/why_norlight/why_norlight';
import Popular from '../components/popular/popular';
import Verified_brands from '../components/verified_brands/verified_brands';
import Houses from '../components/house/Houses';
import About from '../components/about/About';

function MainLayout(props) {
    const { children } = props;

    return (
        <LayoutWrapper>
            <div>
                <Navbar />
            </div>

            <Slidebar/>    

            <Catalog/>   

            <Why_norlight/> 

            <Popular/> 

            <Verified_brands/>   

            <Houses/>

            <About/>

            <Footer />
        </LayoutWrapper>
    );
}

export default MainLayout;