import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
// import { Navbar, BottomNavigation } from '../ui';

export const GeneralTemplate = (props) => {
  const { 
    isHeader,
    isFooter,
    children,
  } = props;

  return(
    <div>
      {isHeader && <Header title='Movie List' />} 
      <>{children}</>
      {isFooter && <Footer />}
    </div>
  )
}