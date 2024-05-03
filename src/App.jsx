import { useEffect, useState } from 'react';
import { fetchPoke } from './api/PokeApi';
import { fetchPokeDetail } from './api/PokeDetailApi';
import backGround from './assets/battle-field.gif';
import './App.css';
import PokemonBoss from './components/PokemonBoss';
import PokemonList from './components/PokemonList';
import AttackMenu from './components/AttackMenu';
import PokemonDetails from './components/PokemonDetails';


function App() {
  const [pokeData, setPokeData] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokeDetail, setPokeDetail] = useState(null);
  const [pokeBossDetail, setPokeBossDetail] = useState(null);

  const backgroundImageStyle = {
    backgroundImage: `url(${backGround})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  useEffect(() => {
    fetchPokeBossDetail();
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetchPoke();
      let arr = []
      for (let i = 0; i < data.results.length; i++) {
        let my =  await fetchPokeDetail(data.results[i].name)
        arr.push(my)
      }
      // console.log(arr);
      setPokeData(arr)
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchPokeName(pokeName) {
    try {
      const res = await fetchPokeDetail(pokeName);
      setPokeDetail(res);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function fetchPokeBossDetail() {
    try {
      const res = await fetchPokeDetail('dragonite');
      setPokeBossDetail(res);
    } catch (error) {
      return Promise.reject(error);
    }
  }


  const handleSelectChange = (event) => {
    setSelectedPokemon(event.name);
    fetchPokeName(event.name);
  };

  return (
    <>
      <div style={backgroundImageStyle}>
        <img src="/src/assets/logo.png" alt="" className='w-[7rem]' />
        <PokemonBoss pokeBossDetail={pokeBossDetail} />
        <div className='flex justify-between w-full'>
          <PokemonList pokeData={pokeData} handleSelectChange={handleSelectChange} />
          <div className='flex h-[15rem] mr-[23rem] '>
            {
              pokeBossDetail ? (
                <img src={pokeBossDetail?.sprites?.other?.showdown?.front_shiny} alt={pokeBossDetail?.name} />
              ) : (
                <img src="/src/assets/mew.png" alt="" />
              )
            }
          </div>
        </div>

        <div className='w-full flex justify-between '>
          <div className='flex h-[15rem] ml-[20rem] '>
            {
              pokeDetail ? (
                <img src={pokeDetail?.sprites?.other?.showdown?.back_default} alt={pokeDetail?.name} />
              ) : (
                <img src="/src/assets/question-mark.png" alt="" className='ml-12' />
              )
            }
          </div>
          <PokemonDetails pokeDetail={pokeDetail} />
        </div>  
        <AttackMenu pokeDetail={pokeDetail} />
      </div>
    </>
  );
}

export default App;
