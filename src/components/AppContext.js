import React, {createContext, useState} from 'react';
import {useStaticQuery} from 'gatsby';

import {useIntl} from 'gatsby-plugin-intl';


export const AppContext = createContext();



const AppProvider = ({children}) => {
    const intl = useIntl();
    const defaultLanguage = intl.locale !=="pl" ? "nl" : intl.locale ;
    const secondLanguage = defaultLanguage === 'pl' ? 'nl' : 'pl';
    const languagesObject = {
        first: defaultLanguage,
        second: secondLanguage,
    }
    const [language, setLanguage] = useState(languagesObject);

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