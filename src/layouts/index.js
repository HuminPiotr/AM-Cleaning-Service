import React from "react"
import {ThemeProvider} from 'styled-components';

import GlobalStyle from '../assets/styles/globalStyle'
import theme from '../assets/styles/theme';
import TopNav from '../components/TopBar';
import Footer from '../components/Footer'
import AppProvider from "../components/AppContext";
import CustomerChat from '../components/CustomerChat'


console.log(CustomerChat);
const MainLayout = ({children}) => (
    <>
    
    <GlobalStyle />
    <ThemeProvider theme={theme}>
    <AppProvider>
        <TopNav />
            {children}
            
        <Footer />
        
    </AppProvider>
    </ThemeProvider>
    <CustomerChat />
    </>

)

export default  MainLayout
