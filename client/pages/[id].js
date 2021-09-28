import React, { useState, createContext, useContext } from 'react';
import { GeneralTemplate, Wrapper } from '../src/components';
import { getDetailMovies } from './api/movies';
import styled from '@emotion/styled';
import { Context } from "../context";

const Button = styled.button`
  padding: 10px;
  width: 100px;
  background: #4CAF50;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 25px;
`
export default function Detail(props) {
  const { details } = props;
  const [detailAll, setDetailAll] = useState(details);
  const [saveContent, setSaveContent] = useState([]);
  const { state, dispatch } = useContext(Context);
  const saveMovie = () => {
    dispatch({
      type: 'ADD_FAVORITES',
      payload: details
    });
  }
  return (
    <GeneralTemplate isHeader isFooter>
      <Wrapper marginBottom='75vh'>
        <div style={{ marginTop: '7vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{ objectFit: 'contain' }}src={details.Poster} width={300} height={500} />
          </div>
          <div style={{ paddingLeft: '10px', paddingRight:"10px", marginBottom: '100vh'}}>
            <h2>{detailAll.Title}</h2>
            <table>
              <tbody>
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
              </tbody>
            </table>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '20px' }}>
              <Button onClick={(details) => saveMovie()}>Favorites</Button>
            </div>
          </div>
      </Wrapper>
    </GeneralTemplate>
  )
}

Detail.getInitialProps = async (router, context) => {
  const {
    query: { id },
  } = router
  const details = await getDetailMovies(id);
  return { details }
}
