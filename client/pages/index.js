import React, { useState, useContext } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GeneralTemplate, Wrapper, Spinner } from '../src/components';
import { getMovies } from '../pages/api/movies';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieContext from '../store/movies';

export default function Home(props) {
  const { movies } = props;
  const [stateMovies, setStateMovies] = useState(movies);
  const [stateListMovies, setStateListMovies] = useState(movies && movies.Search);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPageMore] = useState(2);
  const getMovieMore = async () => {
    try {
      let counter = page + 1;
      const getMore = await getMovies(page);
      setHasMore(getMore.Response === 'False' ? false : true);
      if (getMore && getMore.Search) {
        setTimeout(() => setStateListMovies([...stateListMovies, ...getMore.Search]), 2000);
      }
      setPageMore(counter);
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <GeneralTemplate isHeader isFooter>
      <Wrapper>
      <InfiniteScroll
        dataLength={stateListMovies.length}
        next={getMovieMore}
        hasMore={hasMore}
        loader={<Spinner/>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        <div>{ stateListMovies.map((list,idx)=> {
          return (
            <MovieContext.Provider value={list} key={idx}>
              <p>{ idx }</p>
              <div>{ list.Title }</div>
              <div>{ list.Poster }</div>
              <div>{ list.Type }</div>
              <div>{ list.Year }</div>
            </MovieContext.Provider>
          )
        }) } </div>
        </InfiniteScroll>
      </Wrapper>
    </GeneralTemplate>
  )
}


Home.getInitialProps = async () => {
  const movies = await getMovies();
  return {
    movies
  }
}