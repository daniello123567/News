import React, { useEffect, useState } from 'react'
import LocalFont from "next/font/local"
import { Inter, Poppins } from 'next/font/google'
import Image from 'next/image';
import { getContextSnippets, menu, newsbro, OpenStory, search, semistorys, Story } from './stuffs/utils';
import { ArrayOfSvgs } from './stuffs/utils2';
import { useRouter, useSearchParams } from 'next/navigation';
const inter = Inter({ subsets: ["latin"] })
const Havar = LocalFont({ src: "./fonts/halvar-breitschrift-regular.woff2" });
const Comorant = LocalFont({ src: "./fonts/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5wDD-iNM8.woff2" });
const Noe = LocalFont({ src: "./fonts/noe-standard-semibold.woff2" });
const pt = LocalFont({ src: "./fonts/pt-serif-regular.woff2" });
const PP = LocalFont({ src: "./fonts/PPNeueMachina-InktrapSemibold-e49286f0.woff2" })
const Flecha = LocalFont({ src: "./fonts/flecha-bronzea-medium.woff2" })
const Navs: Array<string> = ["Gaming", "Creativity", "Artificial Intelligence", "Robotics", "Art", "Clear Filter"]
const Druk = LocalFont({ src: "./fonts/DRUK.woff2" })
const FragmentLight = LocalFont({ src: "./fonts/FRAGMENTLIGHT.woff2" })

const poppins = Poppins({ weight: "400",subsets:["latin"] });

const Logo = ({ forLoad }: { forLoad?: boolean }) => {
  return <><svg id='kaka' className={`${forLoad ? '' : 'lg:hidden'}`} xmlns="http://www.w3.org/2000/svg" width="116" height="35" fill="none" viewBox="0 0 162 35"><g fill="currentColor"><path d="M80.543 30.898c-3.079 0-2.919-4.468-2.919-8.35 0-3.884-.16-8.298 2.919-8.298 3.078 0 2.972 4.414 2.972 8.297 0 3.883.106 8.35-2.972 8.35Zm0-19.84c-9.553 0-13.692 5.16-13.692 11.49 0 6.329 4.14 11.488 13.692 11.488 9.606 0 13.693-5.16 13.693-11.489 0-6.33-4.087-11.488-13.693-11.488ZM15.478 13.59c-2.495-1.542-4.67-2.447-4.67-4.68 0-2.021 3.768-3.511 8.066-1.702-.85 1.86 0 4.946 2.972 4.946 3.131 0 3.768-2.819 3.768-3.936-.053-1.649-1.168-2.765-1.752-3.191-1.962-1.489-5.36-3.192-11.197-3.192-5.731 0-11.41 2.447-11.41 9.521 0 6.382 9.128 9.467 12.153 11.33 2.016 1.223 2.919 2.18 2.919 3.297 0 2.127-2.389 2.819-4.936 2.819-1.878 0-3.612-.476-5.585-1.277.292-.46.463-.995.463-1.565 0-1.676-1.398-2.648-3.108-2.608C.7 23.41-.819 25.548.47 27.971c1.288 2.422 7.295 6.282 13.96 6.055 5.85-.198 12.617-2.99 12.617-9 0-6.436-8.545-9.575-11.57-11.436ZM153.973 19.111c-2.388-1.17-3.317-2.473-2.494-3.297.622-.624 2.297-.773 2.297-.768 0 1.495 1.521 2.74 3.386 2.74 1.864 0 3.36-1.245 3.387-2.74.027-1.536-1.441-3.499-6.098-3.966-5.054-.506-12.896-.266-13.426 6.33-.319 4.148 5.678 7.073 7.96 8.51 2.228 1.435 2.298 2.41 1.804 2.977-.982 1.129-5.527 1.227-7.11-.55-.967-1.086-.851-2.943 1.107-3.228.345-.05-.777-1.442-1.786-1.442-3.701 0-5.557 8.757 6.107 10.135 5.726.676 11.766-1.085 12.72-6.404.85-4.627-5.837-7.34-7.854-8.297Z"></path><path d="M43.976 14.428v-2.311a.442.442 0 0 0-.445-.447h-4.763V6.261a.895.895 0 0 0-.901-.904h-4.131c-2.904 0-5.456 2.303-5.456 5.397v.916h-1.24c-1.305 0-1.828.68-1.828 1.608v2.8c0 .237.184.47.446.47h2.625V33.13c0 .533.47.905.947.905h3.832c3.193-.018 5.706-2.65 5.706-5.852V16.547h3.197c.377 0 2.011.028 2.011-2.12ZM128.505 33.131c0 .532.425.905.902.905h4.039c3.192-.018 5.779-2.65 5.779-5.853v-15.59c0-.559-.37-1.153-.902-1.153h-4.039c-3.192.018-5.779 2.871-5.779 6.074v7.684c-1.279.969-2.888 2.764-3.996 2.764-.954 0-1.804-.692-1.804-2.872V12.566c0-.532-.339-1.126-.903-1.126h-4.053c-3.136.02-5.678 2.786-5.764 5.912V25.1c-1.296 1-2.95 2.862-4.096 2.862-.955 0-1.805-.692-1.805-2.872V12.566c0-.532-.423-1.126-.901-1.126h-4.044c-3.192.019-5.774 2.872-5.774 6.074l-.001.03v8.13c0 4.816 2.282 8.245 6.475 8.245 3.747 0 7.485-1.721 10.568-5.115.518 2.353 1.977 5.115 6.053 5.115 3.54 0 7.066-1.548 10.045-4.58v3.792ZM134.419 9.905c3.053 0 5.547-2.04 5.547-4.488 0-2.499-2.494-4.488-5.547-4.488-3.053 0-5.547 1.99-5.547 4.488 0 2.448 2.494 4.488 5.547 4.488ZM66.833 28.357l-9.401.006-.003-24.176c0-.352-.236-.903-.88-.903h-4.14c-3.35 0-5.452 2.665-5.452 5.392v24.662c0 .48.432.902.882.902 0 0 11.82.015 16.156.015 1.837 0 3.327-1.422 3.337-3.178l.02-2.224a.504.504 0 0 0-.519-.496ZM41.81 29.408c-1.574 0-2.86 1.025-2.86 2.313 0 1.263 1.286 2.315 2.86 2.315 1.575 0 2.861-1.052 2.861-2.315 0-1.288-1.286-2.313-2.86-2.313Z"></path></g></svg></>
}

const Logo2 = () => {
  return <svg id='logoBs' xmlns="http://www.w3.org/2000/svg" width="162" height="35" fill="none" viewBox="0 0 162 35"><g fill="currentColor"><path d="M80.543 30.898c-3.079 0-2.919-4.468-2.919-8.35 0-3.884-.16-8.298 2.919-8.298 3.078 0 2.972 4.414 2.972 8.297 0 3.883.106 8.35-2.972 8.35Zm0-19.84c-9.553 0-13.692 5.16-13.692 11.49 0 6.329 4.14 11.488 13.692 11.488 9.606 0 13.693-5.16 13.693-11.489 0-6.33-4.087-11.488-13.693-11.488ZM15.478 13.59c-2.495-1.542-4.67-2.447-4.67-4.68 0-2.021 3.768-3.511 8.066-1.702-.85 1.86 0 4.946 2.972 4.946 3.131 0 3.768-2.819 3.768-3.936-.053-1.649-1.168-2.765-1.752-3.191-1.962-1.489-5.36-3.192-11.197-3.192-5.731 0-11.41 2.447-11.41 9.521 0 6.382 9.128 9.467 12.153 11.33 2.016 1.223 2.919 2.18 2.919 3.297 0 2.127-2.389 2.819-4.936 2.819-1.878 0-3.612-.476-5.585-1.277.292-.46.463-.995.463-1.565 0-1.676-1.398-2.648-3.108-2.608C.7 23.41-.819 25.548.47 27.971c1.288 2.422 7.295 6.282 13.96 6.055 5.85-.198 12.617-2.99 12.617-9 0-6.436-8.545-9.575-11.57-11.436ZM153.973 19.111c-2.388-1.17-3.317-2.473-2.494-3.297.622-.624 2.297-.773 2.297-.768 0 1.495 1.521 2.74 3.386 2.74 1.864 0 3.36-1.245 3.387-2.74.027-1.536-1.441-3.499-6.098-3.966-5.054-.506-12.896-.266-13.426 6.33-.319 4.148 5.678 7.073 7.96 8.51 2.228 1.435 2.298 2.41 1.804 2.977-.982 1.129-5.527 1.227-7.11-.55-.967-1.086-.851-2.943 1.107-3.228.345-.05-.777-1.442-1.786-1.442-3.701 0-5.557 8.757 6.107 10.135 5.726.676 11.766-1.085 12.72-6.404.85-4.627-5.837-7.34-7.854-8.297Z"></path><path d="M43.976 14.428v-2.311a.442.442 0 0 0-.445-.447h-4.763V6.261a.895.895 0 0 0-.901-.904h-4.131c-2.904 0-5.456 2.303-5.456 5.397v.916h-1.24c-1.305 0-1.828.68-1.828 1.608v2.8c0 .237.184.47.446.47h2.625V33.13c0 .533.47.905.947.905h3.832c3.193-.018 5.706-2.65 5.706-5.852V16.547h3.197c.377 0 2.011.028 2.011-2.12ZM128.505 33.131c0 .532.425.905.902.905h4.039c3.192-.018 5.779-2.65 5.779-5.853v-15.59c0-.559-.37-1.153-.902-1.153h-4.039c-3.192.018-5.779 2.871-5.779 6.074v7.684c-1.279.969-2.888 2.764-3.996 2.764-.954 0-1.804-.692-1.804-2.872V12.566c0-.532-.339-1.126-.903-1.126h-4.053c-3.136.02-5.678 2.786-5.764 5.912V25.1c-1.296 1-2.95 2.862-4.096 2.862-.955 0-1.805-.692-1.805-2.872V12.566c0-.532-.423-1.126-.901-1.126h-4.044c-3.192.019-5.774 2.872-5.774 6.074l-.001.03v8.13c0 4.816 2.282 8.245 6.475 8.245 3.747 0 7.485-1.721 10.568-5.115.518 2.353 1.977 5.115 6.053 5.115 3.54 0 7.066-1.548 10.045-4.58v3.792ZM134.419 9.905c3.053 0 5.547-2.04 5.547-4.488 0-2.499-2.494-4.488-5.547-4.488-3.053 0-5.547 1.99-5.547 4.488 0 2.448 2.494 4.488 5.547 4.488ZM66.833 28.357l-9.401.006-.003-24.176c0-.352-.236-.903-.88-.903h-4.14c-3.35 0-5.452 2.665-5.452 5.392v24.662c0 .48.432.902.882.902 0 0 11.82.015 16.156.015 1.837 0 3.327-1.422 3.337-3.178l.02-2.224a.504.504 0 0 0-.519-.496ZM41.81 29.408c-1.574 0-2.86 1.025-2.86 2.313 0 1.263 1.286 2.315 2.86 2.315 1.575 0 2.861-1.052 2.861-2.315 0-1.288-1.286-2.313-2.86-2.313Z"></path></g></svg>
}
const SearchBtn = () => {
  const { searchAppear } = search()
  return <svg onClick={searchAppear} className='lg:hidden cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 20 21"><circle cx="7.824" cy="7.824" r="6.824" stroke="currentColor" strokeWidth="2" transform="matrix(-1 0 0 1 20 .362)"></circle><path stroke="currentColor" strokeWidth="2" d="M6.588 13.774 1 19.362"></path></svg>
}
const SearchBtn2 = () => {
  const { searchAppear } = search()
  return <svg onClick={searchAppear} className='lg:block cursor-pointer hidden' xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 20 21"><circle cx="7.824" cy="7.824" r="6.824" stroke="currentColor" strokeWidth="2" transform="matrix(-1 0 0 1 20 .362)"></circle><path stroke="currentColor" strokeWidth="2" d="M6.588 13.774 1 19.362"></path></svg>
}
const Hamburger = () => {
  const { openClose } = menu()

  return <div onClick={openClose} className='w-[1.5rem] lg:hidden flex flex-col justify-between h-[1.4412rem] '>
    <div className='h-[.125rem] w-full bg-black'></div>
    <div className='h-[.125rem] w-full bg-black'></div>
    <div className='h-[.125rem] w-full bg-black'></div>
  </div>
}
const Hamburger2 = () => {
  const { openClose } = menu()

  return <div onClick={openClose} className='w-[1.5rem] hidden lg:hidden  h-[1.0662rem] '>
    <div className='w-full h-full flex flex-col justify-between'>
      <div className='h-[.125rem] w-full bg-black'></div>
      <div className='h-[.125rem] w-full bg-black'></div>
      <div className='h-[.125rem] w-full bg-black'></div>
    </div>
  </div>
}



const Header = () => {
  const router = useRouter();
  const {openClose} = menu();
  const {setshow} = newsbro()
const handleRoute = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget.innerText.includes('Clear')) {
      router.push(`/?tag=${e.currentTarget.innerText}`);
      openClose()
    } else {
      router.push(window.location.pathname);
      openClose()
    }
  }

  return <div id='header' className={`${Havar.className} lg:px-[2.55em] px-[1.5rem]  bg-white fixed left-0 right-0 z-10 w-full h-fit`}>
    <div className={` lg:text-[1.0245rem]  h-[5.1875rem] lg:border-b  lg:mx-auto lg:p-0 lg:none lg:h-[3rem] lg:mt-[1.5625rem] flex justify-between items-center py-[1.25rem]`}>
      <div className='w-full lg:pb-[.75rem] hidden lg:block h-full'>
        <div className='w-full flex justify-between items-center  h-full'>

          <div className='flex items-center justify-between w-[12.625rem]'>
            <Hamburger2 />
            <Logo2/>
          </div>

          <div className='w-[33.5988rem] flex items-center justify-between h-[2.1875rem] '>
            <div className='links flex gap-[2rem] justify-between items-center w-fit'>
              <span>PODCASTS</span>
              <span onClick={setshow}>NEWSLETTERS</span>
              <span>MAGAZINE</span>
              <span>ABOUT</span>
            </div>
            <SearchBtn2 />
          </div>


        </div>
      </div>

      <Hamburger />
      <Logo />
      <SearchBtn />
    </div>

    <div className='hidden  lg:block h-[3.1437rem] border-b'>
      <div className=' flex w-full h-full items-center justify-between'>
        {Navs.map((nav: string) => { return <p className='cursor-pointer' onClick={(e)=>handleRoute(e)} key={nav}>{nav}</p> })}
      </div>
    </div>
  </div>
}

const Fat = ({ story, date, image, Tag, Title, Description, Author, isHiddenInMd, specialClass }: { story: string, date: string, image: string, Tag: string, Title: string, Description: string, Author: string, specialClass?: string, isHiddenInMd?: boolean }) => {
  const { view } = Story();
  const { setStory } = OpenStory();
  const handleOpue = () => {
    setStory({ image: image, Tag: Tag, Story: story, Title: Title, Author: Author, Date: date });
    view()
  }
  return <div id={!specialClass ? 'fat' : specialClass} className={`w-full sm:mb-0   mb-[5em] ${isHiddenInMd && 'md:hidden'} lg:w-[40.5744rem] md:h-screen relative min-h-[31.5938rem] pt-[100%]`}>
    <div className='absolute flex flex-col gap-[1rem]  top-0 left-0 right-0 bottom-0'>
      <div id='child' className='w-full overflow-hidden xl:h-[47%] h-[60%]'>
        <Image width={1000} height={1000} className='w-full h-full object-cover' alt='man' src={image} />
      </div>
      <div id='textsection' className='h-[40%]  flex flex-col w-full'>
        <p id='tag' className={`${Havar.className} text-[.75rem] text-[#6e6e6e]`}>{Tag}</p>
        <p id='tit' onClick={handleOpue} className={`hover:underline py-[.3em] cursor-pointer tracking-[0.411568px] hover:text-red-400 ${Druk.className} fack text-[#212121] font-bold md:tracking-[0.8px] md:leading-[45px]  leading-[41.15px]`}>{Title}.</p>
        <p className={`${FragmentLight.className} kai text-[#212121] leading-[22.9908px] mt-[.5rem] text-[1.0264rem]`}>{Description}</p>
        <p className={`${inter.className} mt-[.5rem] text-[.75rem] text-[#212121]`}>By <span className={`${Havar.className} font-[700]`}>{Author}</span>.</p>
      </div>
    </div>
  </div>
}
const SemiNews = ({ Tag, Title, Author, image, story, date }: { story: string, date: string, Tag: string, Title: string, Author: string, image: string }) => {
  const tag = useSearchParams().get("tag")

  const { view } = Story()
  const { setStory } = OpenStory();
  const handleOp = () => {
    setStory({ image: image, Tag: Tag, Story: story, Title: Title, Author: Author, Date: date });
    view();

  }
  return <div id='semih' className='w-full flex gap-[.875rem] h-[10.28rem]  '>
    <div className='w-[9.375rem] h-full '>
      <Image width={1000} height={1000} className='w-full h-full object-cover' alt='man' src={image} />
    </div>
    <div className='h-full w-[12.5rem] flex flex-col justify-between '>
      <p id='tag' className={`${Havar.className} ${tag?.includes(Tag) && 'bg-yellow-300 text-white'} text-[.75rem] text-[#6e6e6e]`}>{Tag}</p>
      <h2 onClick={handleOp} className={`${Druk.className} text-[#212121] text-[1.8rem]   md:tracking-[0.8px] leading-[31.15px] `}>{Title}</h2>
      <p className={`${inter.className} mt-[.5rem] text-[.75rem] text-[#212121]`}>By <span className={`${Havar.className} font-[700]`}>{Author}</span>.</p>
    </div>
  </div>
}

const Scrolly = () => {
  return <div className='monalisa py-[5em]'>
    <div className='flex mb-[3em] justify-between px-[2.5em] items-center w-full'>
      <hr className='text-[#e5e4e7] md:w-[15em] lg:w-[24em] w-[5em]' />
      <p className={`${inter.className} text-sm`}>Sponsored by:</p>
      <hr className='text-[#e5e4e7] md:w-[15em] lg:w-[24em] w-[5em]' />
    </div>
    <div className='max-w-[37.5rem] relative mx-auto overflow-hidden'>
      <div className='bg-white/50  left-0 z-20 opacity-[0.7] absolute w-[3em] h-[3em]'></div>
      <div className='bg-white/50  right-0 z-20 opacity-[0.7]  absolute w-[3em] h-[3em]'></div>

      <div className='row whitespace-nowrap  w-fit gap-[40px] items-center  flex h-[2.1875rem] '>
        {ArrayOfSvgs.map((svg) => { return svg })}
      </div></div></div>
}

const Third = () => {
  return <>
    <div className="flex bg-white flex-col w-full h-fit gap-[2em]">
      <div className="w-full h-[15.9766rem]  IMAGE ">
        <iframe title='video' name='hello' className='w-full object-cover h-full'
          src="https://kinescope.io/embed/12wt5VJ63V2Ln6SZFeEGRs?&muted=true&autoplay=true&autopause=false&loop=true"

          allow="autoplay; fullscreen"
        >
        </iframe>
      </div>
      <div className="h-fit text-center w-full ">
        <p className={`${inter.className} mb-[.5rem]  text-[.75rem] font-[400] tracking-[.165rem] uppercase`}>Newsletters</p>
        <p className={`${Noe.className} text-[2.25rem] leading-[2.8575rem] mb-[.625rem] font-semibold`}>Stay connected to the city</p>
        <p className={`mb-[1.25rem] leading-[1.43rem] ${pt.className}`}>Start your mornings with a fresh take on the day&apos;s top local news from Sarah Fenske and Ryan Krull.</p>
        <input placeholder='enter email' className='bg-[#f2f2f2] w-full py-[.75rem] px-[1rem]' title="newsletter" type="text" />
        <button className={`h-[2.625rem] text-white mt-[.
        9em] font-[500] mt-[.9em] w-full bg-[#e2042a] ${Havar.className}`}>SUSCRIBE FOR FREE</button>
      </div>
    </div></>
}

const Design = () => {
  return <svg width="1809" preserveAspectRatio="xMidYMid meet" height="1264" viewBox="0 0 1809 1264" xmlns="http://www.w3.org/2000/svg" className="min-w-[115%] md:top-[-14em] juk:top-[-9em] lg:top-[-17em] xl:top-[-25em] max-w-[115%] h-fit absolute left-[-2em]  right-[-2em] sm:top-[-12em]  top-[-6.8em] translate-none rotate-none scale-none translate-[(0px, 0px)]">
    <path d="M828.861 1025.95C712.217 925.542 587.811 832.28 456.902 746.798C356.307 681.188 249.209 623.78 150.607 555.752C79.4882 506.755 -36.7359 424.427 11.3062 331.585C40.4671 275.228 118.614 251.571 175.468 286.794C238.929 326.118 293.895 378.164 333.125 437.36C275.748 350.721 181.866 179.232 288.86 98.6918C354.105 49.5896 411.797 98.9021 445.573 151.369C490.678 221.289 524.035 299.096 562.322 372.066C541.972 300.042 533.685 225.39 537.881 151.369C540.818 98.5866 555.399 38.7598 607.427 12.7893C771.169 -69.1177 785.224 266.396 790.259 338.525C801.693 228.124 821.518 108.786 910.889 31.0843C924.84 18.8876 941.414 7.63722 960.924 5.4292C1013.48 -0.353706 1042.53 57.896 1048.2 104.37C1060.05 202.364 1020.92 282.904 1018.72 377.323C1085.75 277.857 1119.84 152.841 1229.04 88.9134C1248.02 77.7681 1269.95 68.831 1292.6 70.303C1438.83 79.871 1254 405.606 1216.45 460.807C1248.23 414.228 1360.16 241.582 1400.23 207.726C1424.04 187.643 1452.15 169.769 1484.67 165.458C1563.76 154.944 1611.8 213.404 1587.57 268.814C1541.84 372.907 1457.92 470.27 1386.07 562.165C1462.01 465.118 1553.9 351.037 1667.5 286.268C1727.6 251.991 1805.65 262.821 1808.9 338.525C1810.47 376.797 1793.58 412.441 1766.94 445.561C1710.19 516.323 1609.39 575.729 1550.54 625.357C1442.18 716.727 1336.14 810.305 1238.06 910.507C1137.67 1013.02 1055.02 1132.04 1019.56 1264C987.253 1170 908.686 1094.51 829.071 1025.95H828.861Z" fill="#BB98F2"></path>
  </svg>
}
const Footer = () => {
  return <div className='w-full'>
    <Image src={"https://ahadi-foundation.org//wp-content/themes/ahadi-foundation/svg/illus/femmes.svg"} width={2000} height={1000} alt='footer design' />
  </div>
}
const SpiralSvg = () => {
  return <svg className='absolute lg:w-[9em] vad  right-0 z-50 w-[7.1875rem]'>
    <path d="M115.144 62.281C107.26 78.8784 96.4094 98.6791 78.0734 105.383C61.8397 111.319 41.131 107.646 27.8662 96.6868C-0.540431 73.2136 8.4655 23.4773 42.9361 10.4531C58.0475 4.74497 75.9439 9.59951 86.8234 21.3568C97.7029 33.1142 98.4271 49.569 92.0785 63.4486C85.2885 78.2811 72.6057 85.9256 56.4855 86.0664C36.5875 86.2378 25.3801 69.7685 29.8263 50.8359C32.0566 41.3145 38.789 32.7587 48.8019 31.0641C56.5702 29.7413 66.6696 33.1142 70.2186 40.6739C72.748 46.068 72.2796 54.3802 68.2027 58.9226C62.2378 65.5547 48.6164 58.1953 54.5957 50.3522C58.687 44.9726 49.582 39.7337 45.5483 45.043C32.7952 61.7974 60.8038 79.9612 74.409 66.1249C86.9225 53.3985 81.4962 31.3925 66.3417 23.9195C44.5413 13.1872 22.4688 30.1545 19.2315 52.3464C15.7221 76.388 31.7017 96.7283 56.4999 96.3024C99.9314 95.5607 121.62 34.5958 84.8201 8.84514C42.4948 -20.7765 -10.312 29.7972 1.74755 75.0075C8.64924 100.884 32.7808 119.619 59.9228 116.7C89.5491 113.512 107.402 89.6829 118.794 64.4015C119.887 61.9688 116.336 59.8195 115.172 62.281H115.144Z" fill="#ffd743"></path></svg>
}
const SecondSection = () => {
  return <div id='design' className='w-full h-fit pb-[2em] bg-white z-50'><div className="w-full z-40 md:pb-[10em] relative min-h-[500px] pb-[2em] bg-[#bb98f2]">
    <Design />
    <div className='w-full z-40 h-full'>
      <div className='w-full h-full relative px-[3.75rem] lg:px-[7em]'>
        <SpiralSvg />
        <div id='ori' className={`${Comorant.className} traCking-[-1px] lg:text-[2.3708rem] md:text-[2.0833rem] lg:w-[6.75rem] lg:h-[4.0625rem] md:w-[5.9375rem] md:h-[3.5625rem] bg-white rotate-[-13deg] font-[500] tracking-[-0.72px] text-[1.5rem] flex text-[#0c5752] justify-center items-center top-0 h-[2rem] w-[3.5625rem]`}>Origin</div>
        <Image className='w-[15.3125rem] lg:h-[28.9948rem] lg:w-[48.6021rem]  md:w-[40.6875rem] md:h-[24.25rem] h-[9.1411rem] z-50 object-cover' alt='design' width={500} height={500} src={'https://ahadi-foundation.org//wp-content/themes/ahadi-foundation/svg/illus/handicap.svg'} />
        <p className={`${PP.className} lg:tracking-[-2.7881px]  lg:leading-[77.1333px] lg:text-[5.8085rem] lg:w-[48.6021rem]  md:tracking-[-2.45px] md:leading-[67.7833px] md:text-[5.1042rem] leading-[31.5333px] tracking-[-1.14px] text-[2.375rem]
             text-[#0c4642] font-semibold`}>Curious thinkers reading
          <span className={`${Comorant.className} thenews md:text-[6.875rem]
                md:tracking-[-5.5px] lg:text-[7.8238rem] lg:tracking-[-6.259px]
                inline-block p-[.1875rem] font-[500] tracking-[-2.5px] bg-[#ffc4c0]
                text-[3.125rem] text-[#0c4642]`}>the news</span>to lead with purpose</p>
        <div className={`${poppins.className} lg:mt-[4.7417rem] mt-[2.375em]  ml-auto max-w-[25rem]  tracking-[-0.34px] leading-[27.2px] text-[1.0625rem] text-[#0c4642]`}>
          <p className='w-full began md:text-[1.25rem] tracking-[-0.4px] lg:text-[1.4225rem] lg:leading-[2.276rem] lg:tracking-[-0.0284rem] leading-[32px] h-full '>Stloius began with a daring vision: inspiring minds across generations to seek truth, stay informed, and shape tomorrow..</p></div>
      </div>
    </div>
  </div>
    <Scrolly />
    <div className='w-full bg-white z-50 pt-[1em] md:hidden px-[2rem]'>
      <Third />
    </div>
  </div>
}
const TypeWriter = () => {
  return <div className={`${Flecha.className} border-b h-fit font-[500] pb-[.1em] text-[2.2797rem] text-[#212121]`}>
    <p className='border-b flex h-fit w-full'>
      <span id='text'></span> <span className='cursor'>|</span>
    </p>
  </div>
}
const MobileSection = () => {
  return <div className="w-full  md:hidden h-screen">
    <TypeWriter />

    <div className='flex pt-[1em] gap-[.7em] flex-col'>
      {semistorys.map((story) => {
        return <SemiNews story={story.story} date={story.Date} image={story.image} key={story.author} Tag={story.Tag} Author={story.author} Title={story.Title} />
      })}
    </div>
  </div>
}
const CancelBtn = ({ naforsearch,nowork, naforstory }: {nowork?:boolean, naforstory?: boolean, naforsearch?: boolean }) => {
  const { openClose } = menu()
  const { close } = Story()
  const { searchDisApp } = search()
  const {setshow} = newsbro()
  const handleClose = () => {
    if (naforsearch) {
      searchDisApp()
    } else if (naforstory) {
      close()
    }else if(nowork){
           setshow()
    } else {
      openClose()
    }
  }
  return <div onClick={handleClose} className='w-[2.1875rem] z-50 hover:cursor-pointer flex justify-center items-center h-[35px] rounded-full '>
    <svg className='rotate-45' width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.7487 11.2513L24 11.2513V12.7513L12.7487 12.7513L12.7487 24H11.2487L11.2487 12.7513H0L0 11.2513H11.2487L11.2487 0L12.7487 0L12.7487 11.2513Z" fill="currentColor"></path></svg>
  </div>
}
const VisitBtn = () => {
  return <svg width="12" height="12" viewBox="0 0 14 14">
    <path d="M10.8101 1.96222L0.726954 12.0453L1.66171 12.9801L11.7448 2.89698L11.9344 9.4447L13.208 9.07311L13.0134 2.35278C12.9877 1.46249 12.2434 0.718185 11.3531 0.692412L4.80762 0.502924L4.43487 1.77539L10.8101 1.96222Z" fill="black" stroke="black" strokeWidth="0.542084"></path>
  </svg>
}
const Sidebar = () => {
  const router = useRouter()
  const { openClose } = menu()
  const handleRoute = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget.innerText.includes('Clear')) {
      router.push(`/?tag=${e.currentTarget.innerText}`);
      openClose()
    } else {
      router.push(window.location.pathname);
      openClose()
    }
  }
  return <div id='menu' className='h-[100vh] translate-x-[-100%] tran flex items-center rounded lg:hidden z-50 w-full bg-white/50 backdrop-blur-sm  fixed left-0 '>
    <div id='menu' className='py-[1.5rem] px-[1.25rem] bg-white h-full border border-neutral-300 shadow-sm    w-[17.5rem] '>
      <div className='w-full h-[21.6px] flex justify-between items-center'>
        <Logo />
        <CancelBtn />
      </div>
      <div className='flex mt-[2em] gap-[1em] flex-col'>
        {Navs.map((nav: string) => {
          return <div onClick={(e) => handleRoute(e)} id='nav' className={`${Havar.className} cursor-pointer border-b border-neutral-200 pb-[.9em] flex gap-[.8em] items-center`} key={nav}><p>{nav}</p><VisitBtn /></div>
        })}
      </div>
      <img src="https://cdn.prod.website-files.com/668f3e70c0ccb8c61e4c2bbb/67eb200062987f14268ee43d_Running-Right.gif" alt="some image" />
    </div>
  </div>
}
const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchRes, setSearchRes] = useState<string[]>([]);
  const [foundElements, setFoundElements] = useState<HTMLDivElement[]>([])
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value)
  }



  useEffect(() => {
    const elementsToSearch = ["#fat", "#fat2", "#semih"]
    const Results: NodeListOf<HTMLDivElement>[] = elementsToSearch.map((el) => {
      return document.querySelectorAll(el);
    });
    const flattened: HTMLDivElement[] = Results.reduce((acc, curr) => {
      return acc.concat(Array.from(curr))
    }, [] as HTMLDivElement[]);
    setFoundElements(flattened)




    const results = flattened.filter(el => el.textContent?.trim().replace(/\s+/g, " ").toLowerCase().includes(searchTerm.trim().replace(/\s+/g, " ").toLowerCase()));

    const lol = getContextSnippets(results, searchTerm,)
    if (searchTerm) {
      setSearchRes([...lol])
    } else {
      setSearchRes([]);
    }
  }, [searchTerm]);


  const handlescax = (index: number) => {
    searchDisApp();
    foundElements[index].scrollIntoView({ behavior: "smooth" });
  }
  const Rest = ({ Text, i }: { Text: string, i: number }) => {
    return <div onClick={() => handlescax(i)} dangerouslySetInnerHTML={{ __html: Text }} className='w-full active:bg-gray-200 hover:bg-gray-200 p-[.5em] bg-gray-100'></div>

  }
  const Resulta = () => {
    return <>{searchRes.map((res, i) => <Rest i={i} key={crypto.randomUUID()} Text={res} />)}
    </>
  }

  const {searchDisApp} = search()
  return <div id='blur' className={`${inter.className} translate-y-[-100%] w-full  p-[24px] lg:p-[71.8px] md:p-[61.5px] z-50 fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-[oklab(0_0_0_/_0.2)] h-full`}>
    <div id='search' className='max-w-[47.375rem] mx-auto shadow-sm rounded-[.5rem] h-[261px] bg-white'>
      <div className='w-full flex items-center justify-between px-[1rem] border-gray-200 border-b h-[56px]'>
        <div className='size-[1rem]'>
          <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </div>
        <input onChange={handleSearch} id='sear' placeholder='search by entering a keyword' title='searchTerm' className='w-full text-gray-500 px-[1rem] outline-none' type="text" />
        <button title='close' className='w-[32px] flex justify-center items-center cursor-pointer rounded text-[.8em] text-gray-400  h-[24px] border border-gray-200'>
          <CancelBtn naforsearch={true} />
        </button>
      </div>
      <div className='w-full overflow-y-scroll h-[70%] px-[1em] flex flex-col gap-[.7em]'>
        {searchTerm && searchRes.length == 0 ? 'NO RESULTS' : <Resulta />}

      </div>
    </div>
  </div>
}
const Full = ({ Title, Author, Tag, image, Date, Story }: { image: string, Title: string, Author: string, Tag: string, Date: string, Story: string }) => {
  const tag = useSearchParams().get("tag")
  const bg = `bg-[#e6b64e]`
  return <div id='full' className='  w-full translate-y-[100%] z-50 h-full fixed top-0 left-0 right-0 bottom-0'>

    <div className={`bro ${bg} overflow-y-auto pt-[3.1408rem] md:px-[3.3208rem] px-[1rem] w-full relative h-full`}>
      <div className='fixed p-[.2em] z-50  rounded-full top-[1em] right-[1em]'>
        <CancelBtn naforstory={true} />
      </div>

      <p id='head' className={`${Druk.className} title font-[700] leading-[58.6px] sm:leading-[62.0667px] md:leading-[66.2px] lg:leading-[78.95px] tracking-[0.01em] text-[#0e0d12]`}>{Title}</p>

      <div className='w-full overflow-hidden stuff h-[1.5625rem]  border-l-[3px]'>
        <p id='author' className={`${FragmentLight.className} font-[300]`}>{Author}</p>
      </div>
      <hr className='line' />
      <div className='w-full h-auto '>
        <div id='tag' className={`${FragmentLight.className} ${tag?.includes(Tag) && 'bg-yellow-300 text-white'} text-[#0e0d12] text-[.8384rem] md:text-[.9375rem] flex justify-between items-center pt-[17px]`}>
          <p>{Tag}</p>
          <p>— {Date}</p>
        </div>
        <div id='baba' className='w-full lg:flex lg:justify-between pt-[2.7065rem] min-h-full'>
          <div className='image w-[18.75rem] h-[13.4375rem] bg-blue-500'>
            <Image className='w-full h-full object-cover' width={1000} height={1000} src={image} alt={Title} />
          </div>
          <p className={`${FragmentLight.className} lg:w-[50%] font-[300] vashu leading-[23.3333px] pb-[5em] text-[1.25rem] mt-[1em]`}> {Story}</p>
        </div>
      </div>
    </div>
  </div>
}



export { Fat, Search,CancelBtn, SemiNews, MobileSection, Third, Footer, Full, Header, SecondSection, Sidebar }
