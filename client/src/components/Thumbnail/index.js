import React from 'react';
import Link from 'next/link';

const Thumbnail = (props) => {
  return(
    <Link href={`/${props.id}`}>
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