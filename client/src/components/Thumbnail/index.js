import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const kebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()

const Thumbnail = (props) => {
  return(
    <Link href={{
        pathname: `detail`,
        query: {
          id: props.id,
          title: kebabCase(props.title),
          year: props.year,
          images: props.images
        },
      }}
      as = {`detail/${props.id}/${kebabCase(props.title)}(${props.year})`} 
    >
      <div style={{ objectFit: 'contain', display: 'flex', flexDirection: 'row', border: '1px solid #000', padding: '5px', background: '#000' }}>
        <div>
          <img src={props.images} alt="Julo" width={props.width} height={props.height}/>
        </div>
        <div style={{ padding: '10px', background: '#eee', width: '100%'}}>
          <h4>{ `${props.title} (${props.year})` }</h4>
          <div>Tipe : { props.type }</div>
        </div>
      </div>
    </Link>
  )
}

export default Thumbnail;