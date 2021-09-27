import React, { useState, useContext } from 'react';
import { GeneralTemplate, Wrapper, Spinner, Thumbnail } from '../src/components';
import { getMovies } from './api/movies';
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
        style={{marginTop: '7vh'}}
        dataLength={stateListMovies.length}
        next={getMovieMore}
        hasMore={hasMore}
        loader={<Spinner/>}
        endMessage={<h4>No more list...</h4>}
      >
        <div>{ stateListMovies.map((list,idx)=> {
          return (
            <MovieContext.Provider value={list} key={idx}>
              <Thumbnail
                width={180} 
                height={250}
                images={list.Poster} 
                title={list.Title} 
                id={list.imdbID}
                year={list.Year}
                type={list.Type}
              />
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
