import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image'
import Logo from '../../../public/julo.svg';
import XXI from '../../../public/popcorn.svg';

const Container = styled.div(props => ({
  display: props.flex && 'flex',
  flexDirection: props.row && 'row',
  justifyContent: props.center && 'center',
  padding: props.padding,
  background: props.background,
  position: 'fixed',
  top: 0,
  width: '100%',
  marginBottom: '2vh',
}))


const Header = () => {
  return(
    <Container row center flex padding="5px" background="#000">
      <Image src={Logo} alt="Julo" width={100} height={50}/>
      <div style={{paddingRight:'15px'}}/>
      <Image width={50} height={50} src={XXI} alt="XX1"/>
    </Container>
  )
}

export default Header;