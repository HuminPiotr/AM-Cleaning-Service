import React from "react"
import {ThemeProvider} from 'styled-components';

import GlobalStyle from '../assets/styles/globalStyle'
import theme from '../assets/styles/theme';
import TopNav from '../components/TopBar';
import LanguageButton from '../components/LanguageButton'
import Footer from '../components/Footer'


const MainLayout = ({children}) => (
    <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
    <TopNav />
    {children}
        
        <Footer />
    </ThemeProvider>
    </>

)

export default  MainLayout
