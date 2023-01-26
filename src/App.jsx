import { useState, useEffect } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Characters } from './components/Characters'
import { Pagination } from './components/Pagination'


function App() {

  const [characters, setCharacters] = useState([])
  const [info,setInfo] = useState({});

  const url = 'https://rickandmortyapi.com/api/character'
  const onPrevious = () =>{
    fetchCharacters(info.prev)
  }
  const onNext = () =>{
    fetchCharacters(info.next)
  }
const fetchCharacters = async (url) =>{
  try {
    const data = await fetch(url);
    const res = await data.json();
    setCharacters(res.results)
    setInfo(res.info)
    // res.results.forEach(r => {
    //   console.log(r.name)
    // })

  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
  fetchCharacters(url);
},[])
  return (
    <>
      <Navbar
        titulo = 'Rick & Morty APP'
      />
      <div className="container mt-5">
        <Pagination
          prev = {info.prev}
          next = {info.next}
          onPrevious = {onPrevious}
          onNext = {onNext}
        />
        <Characters
          characters={characters}
       />
        <Pagination
         prev = {info.prev}
         next = {info.next}
         onPrevious = {onPrevious}
         onNext = {onNext}/>
      </div>
    </>
  )
}

export default App
