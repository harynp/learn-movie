import React from 'react';
import Image from 'next/image'
import ListIcon from '../../../public/list.svg';
import FavIcon from '../../../public/touch.svg';
import styled from '@emotion/styled';

const Container = styled.div(props => ({
  display: props.flex && 'flex',
  flexDirection: props.row && 'row',
  justifyContent: props.center && 'center',
  padding: props.padding,
  background: props.background,
  position: 'fixed',
  bottom: 0,
  width: '100%',
}))

const Spacer = styled.div`
  padding: 0 40px;
`

const Footer = () => {
  return(
    <>
      <Container row center flex padding="5px" background="#ddd">
        <Image width="50" height="50" src={ListIcon} alt="Julo"/>
        <Spacer />
        <Image width="50" height="50" src={FavIcon} alt="Julo"/>
      </Container>
    </>
  )
}

export default Footer;