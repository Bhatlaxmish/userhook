import React,{useCallback, useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/Addmovie';
import ForwardCounter from './components/ForwardCounter';
import BackwardCounter from './components/BackwardCounter';
import Card from './components/Card';
function App() {


  const [movies,setMovies]=useState([]);
  const [isloading,setisLoading]=useState(false);/* while data is fetching   */
const [error,setError]=useState(null);




 const  fetchMovies=useCallback(()=>{
    setisLoading(true);
    setError(null);
    fetch('https://myreact-da37b-default-rtdb.firebaseio.com/').then(response=>{
       return response.json();
    }).then(data=>{
      const loadMovies=[];
      for(const key in data){
        loadMovies.push({
id:key,
title:data[key].title,
openingText:data[key].openingText,
releaseDate:data[key].releaseDate,

        });
      }
      const transformedMovies=data.results.map(movie=>{
        return {
          id:movie.episode_id,
          title:movie.title,
          openingText:movie.opening_crawl,
          releaseDate:movie.release_date,
        }
      });
          // setMovies(transformedMovies);
          setMovies(loadMovies);
          setisLoading(false);
    }) 
  },[]);/* fetch is an api built in browsers default method get */
  
  
  
  /*  you can also use async infront of function and await fetch to avoid then calls * /
      
        async function fetchMovies() {


          try{
const response = await fetch('https://swapi.dev/api/films/');

    const data = await response.json();
if(!response.ok)
{
  throw new Error('something went wrong');
}
    const transformedMovies = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      };
    });
    setMovies(transformedMovies);
     }
     catch(error){
      setError(error.message);}/* it displays the message the throw gives * /

     
    
    }; fetch is an api built in browsers default method get  */
  
useEffect(()=>{
  fetchMovies();
},[]);



async function addMovieHandler(movie){
    const response= await fetch('https://myreact-da37b-default-rtdb.firebaseio.com/movies.json',{
      method:'POST',
      body: JSON.stringify(movie),

headers:{
  'Content-Type':'application/json'
}
    });
    const data= await response.json();

  
}
  return (
    <React.Fragment>
      <AddMovie onAddMovie={addMovieHandler}/>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
        <p>{isloading? "data will be displayed":''}</p>
        {/* {!isloading && error && <p>{error}</p>} */}
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
      <Card>
      <ForwardCounter/>
      <BackwardCounter/>

      </Card>
    </React.Fragment>
  );
}

export default App;
