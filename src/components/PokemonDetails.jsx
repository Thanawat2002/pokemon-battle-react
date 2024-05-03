// import React from 'react'

function PokemonDetails({ pokeDetail }) {
  return (
    <div className='h-[8rem] w-[30rem] rounded-lg bg-gray-300 border-8 mt-10'>
      <div className='flex justify-between h-[2.5rem]'>
        {pokeDetail ? (
          <h1 className="text-gray-900 text-2xl  ml-3">{pokeDetail.name}</h1>
        ) : (
          <h1 className="text-gray-900 text-2xl  ml-3 ">Pokemon</h1>
        )}
      </div>
      <div className='h-[2.5rem]'>
        {pokeDetail ? (
          <>
            <div className='flex justify-end mr-6'>
              <h1 className="text-gray-900 text-xl mr-3">HP</h1>
              <div className='bg-red-500 w-[20rem] rounded-md content-center border-4 border-slate-800'>
                <p>{pokeDetail?.stats[0]?.base_stat}</p>
              </div>
            </div>
            <h1 className="flex justify-end text-gray-900 text-xl mr-6 mt-2">{pokeDetail?.stats[0]?.base_stat}/{pokeDetail?.stats[0]?.base_stat}</h1>
          </>
        ) : (
          <>
            <div className='flex justify-end mr-6'>
              <h1 className="text-gray-900 text-xl mr-3">HP</h1>
              <div className='bg-red-500 w-[20rem] rounded-md content-center'>
                <p>100</p>
              </div>
            </div>
            <h1 className="flex justify-end text-gray-900 text-xl mr-6 mt-2">100/100</h1>
          </>
        )}
      </div>
    </div>
  )
}

export default PokemonDetails