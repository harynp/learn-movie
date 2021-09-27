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

  // const listBottomNav = [
  //   {
  //     id: 0,
  //     label: 'Home',
  //     image: '/home.svg',
  //     link: '/'
  //   },
  //   {
  //     id: 1,
  //     label: 'Search',
  //     image: '/search.svg',
  //     link: '/search'
  //   },
  //   {
  //     id: 2,
  //     label: 'Favorite',
  //     image: '/favorite.svg',
  //     link: '/favorite'
  //   }
  // ];

  return(
    <>
      {isHeader && <Header title='Movie List' />} 
      <>{children}</>
      {isFooter && <Footer />}
    </>
  )
}