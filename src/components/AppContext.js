import React, {createContext, useState, useEffect } from 'react';
import {useStaticQuery} from 'gatsby';

import {useIntl, changeLocale} from 'gatsby-plugin-intl';


export const AppContext = createContext();



const AppProvider = ({children}) => {
    const browserLanguage = typeof window !== 'undefined' ? window.navigator.language : null;

    const defaultLanguage = browserLanguage !=="nl" ? "pl" : 'nl' ;
    const secondLanguage = defaultLanguage === 'pl' ? 'nl' : 'pl';
    const languagesObject = {
        first: defaultLanguage,
        second: secondLanguage,
    }
    const [language, setLanguage] = useState(languagesObject);

    useEffect(() => {
        changeLocale(defaultLanguage);

    },[]);

    const data = useStaticQuery(query);
    const contactInfo = {
        phone: data.datoCmsDaneKontaktowe.phone,
        email: data.datoCmsDaneKontaktowe.email,
        facebook: data.datoCmsDaneKontaktowe.facebook,
        facebookGroup: data.datoCmsDaneKontaktowe.facebookGroup
    }

     const changeLanguageContext = (languages) => {
        setLanguage(languages);
        
       
    }

    return (
        <AppContext.Provider value={{
            contactInfo,
            language,
            changeLanguageContext,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const query = graphql`
{
    datoCmsDaneKontaktowe {
      facebook
      facebookGroup
      email
      phone
    }
  }
  
`

export default AppProvider;