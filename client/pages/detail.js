import React, { useState, useContext } from 'react';
import { GeneralTemplate, Wrapper } from '../src/components';
import { useRouter } from "next/router";
import { getDetailMovies } from './api/movies';
import { route } from 'next/dist/server/router';


export default function Detail(props) {
  const { details } = props;
  const [detailAll, setDetailAll] = useState(details);
  const temp = [];
  Object.keys(detailAll).map(key => {
    if(!typeof detailAll[key] === Array) {
      const list = {
        key: key,
        value: detailAll[key]
      };
      temp.push(list);
    }
  }); 
  const tempArr = useState(temp);
  return (
    <GeneralTemplate isHeader isFooter>
      <Wrapper marginBottom='75vh'>
        <div style={{ marginTop: '7vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <img style={{ objectFit: 'contain' }}src={details.Poster} width={300} height={500} />
        </div>
        <div style={{ paddingLeft: '10px', paddingRight:"10px", marginBottom: '100vh'}}>
          <h2>{detailAll.Title}</h2>
          <tr>
            <td style={{ width: '25%'}}>Actors</td>
            <td style={{ width: '1%'}}>:</td>
            <td>{detailAll.Actors}</td>
          </tr>
          <tr>
            <td>Awards</td>
            <td>:</td>
            <td>{detailAll.Awards}</td>
          </tr>
          <tr>
            <td>BoxOffice</td>
            <td style={{ width: '5%'}}>:</td>
            <td>{detailAll.BoxOffice}</td>
          </tr>
          <tr>
            <td>Plot</td>
            <td style={{ width: '5%'}}>:</td>
            <td>{detailAll.Plot}</td>
          </tr>
          <tr>
            <td>Released</td>
            <td style={{ width: '5%'}}>:</td>
            <td>{detailAll.Released}</td>
          </tr>
          <tr>
            <td>imdbRating</td>
            <td style={{ width: '5%'}}>:</td>
            <td>{detailAll.imdbRating}</td>
          </tr>
          <tr>
            <td>Runtime</td>
            <td style={{ width: '5%'}}>:</td>
            <td>{detailAll.Runtime}</td>
          </tr>
        </div>
      </Wrapper>
    </GeneralTemplate>
  )
}


Detail.getInitialProps = async (router) => {
  const {
    query: { id },
  } = router
  const details = await getDetailMovies(id);
  return {
    details
  }
}


