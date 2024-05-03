// import React from 'react'

function PokemonList({ pokeData, handleSelectChange }) {
  return (
    <div className='mt-10 ml-6 content-center'>
      <details className="dropdown">
        <summary className="m-1 btn">Select Pokemon</summary>
        <ul className="p-2 shadow bg-base-100 rounded-box w-[15rem] h-[10rem] overflow-y-auto">
          {pokeData?.map((poke, index) => (
            <li key={index} className='h-[5rem] bg-green-100 my-2 rounded-lg border-2 border-slate-400' onClick={() => handleSelectChange(poke)}>
              <div className='flex justify-between'>
                <a className='text-gray-900 mt-7 ml-2'>{poke.name}</a>
                <img src={poke?.sprites?.other?.showdown?.front_default} alt="" className='h-[5rem] w-[5rem] object-contain' />
              </div>
            </li>
          ))}
        </ul>
      </details>
    </div>
  )
}

export default PokemonList