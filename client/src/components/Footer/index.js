import React from 'react';
import Image from 'next/image'
import ListIcon from '../../../public/list.svg';
import FavIcon from '../../../public/touch.svg';
import styled from '@emotion/styled';
import Link from 'next/link';

const Container = styled.div(props => ({
  display: props.flex && 'flex',
  flexDirection: props.row && 'row',
  justifyContent: props.center && 'center',
  padding: props.padding,
  background: '#082032',
  position: 'fixed',
  bottom: 0,
  width: '100%',
}))

const Spacer = styled.div`
  padding: 25px 80px;
`

const Footer = () => {
  return(
    <>
      <Container row center flex>
        <Link href="/">
          <Image width="50" height="20" src={ListIcon} alt="Julo"/>
        </Link>
        <Spacer />
        <Link href="/favorites">
          <Image width="50" height="20" src={FavIcon} alt="Julo"/>
        </Link>
      </Container>
    </>
  )
}

export default Footer;