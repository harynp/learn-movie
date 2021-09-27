import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image'
import Logo from '../../../public/julo.svg';
import XXI from '../../../public/XXI.png';

const Container = styled.div(props => ({
  background: 'red',
  margin: '0 auto',
  maxWidth: '780px',
  height: '100vh',
  marginBottom: '100px',
}))


export const Wrapper = (props) => {
  const { 
    children,
  } = props;

  return(
    <Container>
      { children }
    </Container>
  )
}

