import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div(props => ({
  margin: '0 auto',
  maxWidth: props.width || '500px',
  height: '100vh',
  marginBottom: props.marginBottom || '100px',
}))


export const Wrapper = (props) => {
  const { 
    children,
  } = props;

  return(
    <Container width={props.width} marginBottom={props.marginBottom}>
      { children }
    </Container>
  )
}

