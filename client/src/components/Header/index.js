import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image'
import Logo from '../../../public/julo.svg';
import XXI from '../../../public/XXI.png';

const Container = styled.div(props => ({
  display: props.flex && 'flex',
  flexDirection: props.row && 'row',
  justifyContent: props.center && 'center',
  padding: props.padding,
  background: props.background,
  position: 'sticky',
  top: 0
}))


const Header = () => {
  return(
    <Container row center flex padding="5px" background="#ddd">
      <Image src={Logo} alt="Julo"/>
      <div style={{paddingRight:'15px'}}/>
      <Image width={100} height={20} src={XXI} alt="XX1"/>
    </Container>
  )
}

export default Header;