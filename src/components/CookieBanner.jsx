import React from 'react';
import CookieConsent from 'react-cookie-consent';

const GDPRAcceptance = window.localStorage.getItem('GDPRAcceptance');

const CookieBanner = () => {
  return (
    <>
      {GDPRAcceptance === 'true' ? (
        <div></div>
      ) : (
        <CookieConsent
          onAccept={() => {
            window.localStorage.setItem('GDPRAcceptance', true);
          }}
          location="bottom"
          buttonText="Sure man!"
          cookieName="myAwesomeCookieName2"
          style={{ background: 'rgb(49 49 49)' }}
          buttonStyle={{
            borderRadius: '5px',
            color: 'white',
            background: '#E58F46',
            fontSize: '15px',
            fontFamily: 'IBM Plex Sans',
          }}
          expires={150}>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      )}
    </>
  );
};

export default CookieBanner;
