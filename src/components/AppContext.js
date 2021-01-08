import React, {createContext, useState} from 'react';
import {useStaticQuery} from 'gatsby';

import {useIntl} from 'gatsby-plugin-intl';

export const AppContext = createContext();



const AppProvider = ({children}) => {
    const intl = useIntl();
    const defaultLanguage = intl.locale !=="pl" ? "nl-NL" : intl.locale ;
    console.log(defaultLanguage)
    const [language, setLanguage] = useState(defaultLanguage);

    const data = useStaticQuery(query);
    const contactInfo = {
        phone: data.datoCmsDaneKontaktowe.phone,
        email: data.datoCmsDaneKontaktowe.email,
        facebook: data.datoCmsDaneKontaktowe.facebook,
        facebookGroup: data.datoCmsDaneKontaktowe.facebookGroup
    }

    const changeLanguage = (language) => setLanguage(language);

    return (
        <AppContext.Provider value={{
            contactInfo,
            language,
            changeLanguage,
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