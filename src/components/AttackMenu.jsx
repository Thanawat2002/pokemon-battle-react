// import React from 'react'

function AttackMenu({ pokeDetail }) {
  return (
    <div className='w-full flex justify-end'>
      {pokeDetail ? (
        <div className='flex justify-end'>
          <details className="dropdown dropdown-top mr-[22.5rem]">
            <summary className="m-1 btn">Attack</summary>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              {pokeDetail?.abilities?.map(({ability}) => (
                <li key={ability.name}><a className='text-gray-900' onClick={() => alert("pewwwwwww")}>{ability?.name}</a></li>
              ))}
            </ul>
          </details>
        </div>
      ) : (
        <div className='bg-white'></div>
      )}
    </div>
  )
}

export default AttackMenu