import React, { useState, useContext  } from 'react';
import { GeneralTemplate, Wrapper } from '../src/components';
import { Context } from "../context";

export default function Favorite({ props }) {
  const { state, dispatch } = useContext(Context);
  const [favContent, setFavContent] = useState([]);
  state.movies.map(list => {
    const view = {
      Title: list.Title,
      Actors: list.Actors,
      Released: list.Released,
      Runtime: list.Runtime,
      Rating: list.imdbRating
    }
    favContent.push(view)
  })

  const deleteList = (data) => {
    dispatch({
      type: 'REMOVE_FAVORIES',
      payload: data.Title,
    });
  }

  return (
    <GeneralTemplate isHeader isFooter>
      <Wrapper width={400}>
        <table style={{ marginTop: '8vh', width: '100%'}} className="zui-table">
          <thead>
            {favContent.lenght && Object.keys(favContent[0]).map((key,idx) => {
              return (
                  <th key={idx}>{key}</th>
              )
            }) ||
            <tr>
              <th>Title</th>
              <th>Actors</th>
              <th>Released</th>
              <th>Runtime</th>
              <th>Action</th>
            </tr>
            } 
          </thead>
          <tbody>
          
            { favContent.map((list,idx) => {
              return (
                <tr key={idx}>
                  <td>{list.Title}</td>
                  <td>{list.Actors}</td>
                  <td>{list.Released}</td>
                  <td>{list.Runtime}</td>
                  <td onClick={() => deleteList(list)}>X</td>
                </tr>
              )
            }) }
          </tbody>
          <style jsx>{`
          .zui-table {
            border: solid 1px #DDEEEE;
            border-collapse: collapse;
            border-spacing: 0;
            font: normal 13px Arial, sans-serif;
          }
          .zui-table thead th {
            background-color: #DDEFEF;
            border: solid 1px #DDEEEE;
            color: #336B6B;
            padding: 10px;
            text-align: left;
            text-shadow: 1px 1px 1px #fff;
          }
          .zui-table tbody td {
            border: solid 1px #DDEEEE;
            color: #333;
            padding: 10px;
            text-shadow: 1px 1px 1px #fff;
          }
        `}
        </style>
      </table>
      </Wrapper>
    </GeneralTemplate>
  )
}


