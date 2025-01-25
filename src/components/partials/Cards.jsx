import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noImage.jpg'


function Cards({data , title}) {
  return (
    <div className='px-[5%] flex flex-wrap w-full pt-14 bg-[#1f1e24] overflow-hidden'>
        {data.map((c, i)=> (
            <Link to={`/${c.media_type || title}/details/${c.id}`} className={`relative ${c.overview ? 'group' : null} w-[24vh] mr-[3%] mb-[5%] flex-grow flex-shrink mx-auto`} key={i}>
                <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover' src={c.poster_path ||c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${c.poster_path ||c.backdrop_path || c.profile_path}` : noimage} alt="" />
              {/* <h1 className='text-xl text-zinc-300 mt-3 font-semibold'>{c.original_title || c.name || c.title || c.original_name}</h1> */}

              {/* hover pop-up pannel */}
              <div className='absolute opacity-0 rounded-xl border-2 border-[#6556cd] group-hover:opacity-100 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 delay-700 duration-300 h-[40vh] w-[36vh] group-hover:scale-[1.3] bg-[#1f1e24] z-10'>
                {/* top background image */}
                <div className='relative'>
                  <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-t-xl h-1/2 w-full object-cover bg-gradient-to-b	' src={c.poster_path ||c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${c.backdrop_path ||c.poster_path || c.profile_path}` : noimage} alt="" />
                  <h1 className='absolute bottom-0 text-xl text-white ml-3 font-bold'>{c.original_title || c.name || c.title || c.original_name}</h1>
                </div>
                {/* details */}
                {c.overview ? <>
                  <p className='text-lg font-bold text-[#6556cd] px-3 pt-0'>Overview</p>
                  <p className='text-white mx-3 text-xs'>{c.overview.slice(0, 210)}{c.overview.length > 210 ? <span>...</span> : null}</p>
                </> : null}
                
              </div>
              {/* {c.vote_average > 0 ? (c.vote_average && (<div className='text-white absolute right-[-3%] bottom-[25%] bg-yellow-600 text-md font-semibold rounded-full w-[5vh] h-[5vh] flex items-center justify-center'>{(c.vote_average*10).toFixed()} <sup>%</sup></div>)) : null} */}
            </Link>
        ))}
    </div>
  )
}

export default Cards