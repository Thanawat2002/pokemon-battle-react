// import React from 'react'

function PokemonBoss({ pokeBossDetail }) {
  return (
    <div className='h-[5rem] w-full'>
      <div className='h-[7rem] w-[30rem] rounded-lg bg-gray-300 border-8'>
        {pokeBossDetail ? (
          <>
            <div className='flex justify-between h-[2.5rem]'>
              <h1 className="text-gray-900 text-2xl ml-3">{pokeBossDetail.name}</h1>
              <h1 className="text-gray-900 text-2xl mr-3">LV.100</h1>
            </div>
            <div className='flex justify-between h-[2.5rem]'>
              <img src="/src/assets/pokeball.png" alt="" className='ml-2' />
              <div className='flex justify-end mr-6'>
                <h1 className="text-gray-900 text-xl mr-3 content-center">HP</h1>
                <div className='bg-red-500 w-[20rem] h-[2rem] rounded-md content-center border-4 border-slate-800'>
                  <p>{pokeBossDetail?.stats[0]?.base_stat}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='flex justify-between h-[2.5rem]'>
              <h1 className="text-white text-2xl  ml-3 ">Pokemon</h1>
              <h1 className="text-white text-2xl mr-3 ">LV.100</h1>
            </div>
            <div className='flex justify-between h-[2.5rem]'>
              <img src="./assets/pokeball.jpeg" alt="" />
              <h1 className="text-white text-2xl mr-3 ">HP ++++++++++++++</h1>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default PokemonBoss