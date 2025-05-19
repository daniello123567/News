"use client"
import TextPlugin from "gsap/TextPlugin";
import { useEffect } from "react";
import { CancelBtn, Fat, Footer, Full, Header,  MobileSection, Search, SecondSection, SemiNews, Sidebar, Third } from "./components";
import gsap from 'gsap'
import { ScrollTrigger, SplitText,DrawSVGPlugin } from "gsap/all";
import { FatStorys, newsbro, OpenStory, semistorys } from "./stuffs/utils";
import { useRouter, useSearchParams } from "next/navigation";
gsap.registerPlugin(ScrollTrigger,SplitText,TextPlugin,DrawSVGPlugin)
function News() {
  const query:string|null = useSearchParams().get("tag");

useEffect(()=>{
  if(!query)return;
 const element = Array.from(document.querySelectorAll('#tag')).find(el=>el.textContent?.includes(query))
 element?.scrollIntoView({behavior:"smooth"})


},[query])
 const router = useRouter();

  useEffect(() => {
 router.push(window.location.pathname)
gsap.timeline().from(".maluk",{
    opacity:0,
    duration:0.7,
    ease:"power2.in"
   });
  setTimeout(()=>{

    gsap.matchMedia().add("(max-width:767px)",()=>{
      gsap.from("#kaka",{
        xPercent:-50,
        yPercent:-50,
        x:"50%",
        y:"50vh",
        delay:0.7
      })
    });
    gsap.matchMedia().add("(min-width:769px)",()=>{
      gsap.from("#kaka",{
        opacity:0,
        y:50,
        duration:0.5,
          delay:0.7,
      })
    })
    gsap.matchMedia().add("(min-width:769px)",()=>{
      const tl = gsap.timeline();
      tl.from("#logoBs",{
        opacity:0,
        y:50,
        duration:0.5,
          delay:0.7,
      },"power").from(".main",{
        y:1000,
        opacity:0,
        duration:0.5,
        ease:"power3.inOut",
        delay:0.7
      },"power")

    })

  },1)

 gsap.from("#ori",{x:-30,scrub:0.7,opacity:0,duration:0.8,start:"top 20%",scrollTrigger:{trigger:"#ori"}})
 gsap.to(".vad",{rotate:360,scrollTrigger:{trigger:".vad",scrub:true,start:"top bottom"}})
 const lines = new SplitText(".began",{type:"lines"});
 gsap.from(lines.lines,{y:30,opacity:0,duration:0.5,stagger:0.1,ease:"power3.inOut",scrollTrigger:{trigger:".began",start:"top 80%"}})

 const sentences = ["The Latest","Most reliable"];

  const timeL = gsap.timeline({repeat:-1,repeatDelay:1});
  sentences.forEach((sentence)=>{
    timeL.to("#text",{
      text:sentence,
      duration:0.7,
      ease:"power1.inOut"
    }).to("#text",{duration:0.7,text:"",ease:"none",delay:0.7})
  })





  const split = new SplitText("#fat2 #tit",{type:"lines"});
  gsap.timeline({
    scrollTrigger:{
      trigger:"#fat2 #textsection",
      start:"top 80%",
      end:"bottom 100%",
      scrub:true,
      markers:true
    }
  }).set(split.lines,{color:"black",stagger:0.1},0.1)
gsap.matchMedia().add("(max-width:767px)",()=>{gsap.from("#fat",{
  delay:0.8,
  y:200,
    opacity:0,
    duration:0.7,
    ease:"power4.in"
  });})



  gsap.timeline({
    scrollTrigger:{
      trigger:"#fat2 #child",
      start:"top 80%",
      end:"top 50%",
      toggleActions:"restart none none reverse",
      scrub:true,
    }
  }).from("#fat2 #child",{
    scale:0.5,
    borderRadius:"1em"
  })

 const alltweens =   gsap.context(()=>{
  const sections: HTMLElement[] = gsap.utils.toArray("#section");
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: () => section.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false,
      })
    });
    const Design = document.getElementById('design');
    const animateHeaderOutofScreen = ()=>{
      gsap.to("#header",{
        y:-100,
        duration:0.7,
        ease:"back.inOut"
      });
    }
    const BringInHeader = ()=>{
      gsap.fromTo("#header",{
          y:-100,
          duration:0.7,
          ease:"back.inOut"
      },{y:0})
    }
    ScrollTrigger.create({
      trigger:Design,
      start:"top+=200px bottom",
      end:"bottom top",
      onEnter:()=>{animateHeaderOutofScreen()},
      onLeave:()=>{BringInHeader()},
      onEnterBack:()=>{animateHeaderOutofScreen()},
      onLeaveBack:()=>{BringInHeader()}
    })



  const rows = document.querySelector('.row');
  if(!rows)return;
  rows.innerHTML+=rows.innerHTML
  const width = rows?.scrollWidth /2
   gsap.to(rows,{
   x:`-=${width}`,
   duration:30,
   ease:"none",
   repeat:-1
   })


 })


return ()=> alltweens.revert()

  }, []);
  const fat1Info = FatStorys[0];
  const fat2info = FatStorys[1];
  const {story} = OpenStory();
   const {show} = newsbro()
  return <>
  <div className="w-full  h-fit">
  {<Sidebar/>}
  <Search/>
  {show&&<div id="newsletterman" className="w-full h-full top-0 z-50 backdrop-blur-sm bg-[oklab(0_0_0_/_0.2)] fixed">
  <div className="flex justify-center items-center w-full h-full">
  <div className="w-[23.75rem] relative h-[90%] border bg-white p-[1em]"><Third/>
    <div className="w-[3em] h-[3em] bg-gray-100 rounded-full top-[1em]  left-[1em] flex justify-center items-center text-black absolute"><CancelBtn nowork={true}/> </div>
</div>
  </div></div>}
  <Full Story={story.Story} image={story.image} Author={story.Author} Tag={story.Tag} Date={story.Date} Title={story.Title} />
  <div className=" w-full relative overflow-hidden">
    <Header />
    <div id="section" className="w-full main section1 lg:mb-0 md:mb-[14em] mb-[9em] lg:px-[2.5313rem] lg:pt-[6.6em] px-[1.5rem] pt-[4.2em]">
      <div className="mt-[2rem] md:flex gap-[1rem] lg:justify-between  w-full h-fit">
        <Fat date={fat1Info.Date} story={fat1Info.story} image={fat1Info.imageUrl} Author={fat1Info.Author} Title={fat1Info.Title} Tag={fat1Info.tag} Description={fat1Info.Description} />
        <Fat date={fat2info.Date} story={fat2info.story} image={fat2info.imageUrl} Author={fat2info.Author} Title={fat2info.Title} Tag={fat2info.tag} Description={fat2info.Description}  specialClass={"fat2"} isHiddenInMd={true} />
        <MobileSection/>


        <div className=" min-h-[41.4375rem] w-[22.8rem] hidden md:block">
          <div className="w-full  gap-[1.625rem] h-full flex flex-col">
            {semistorys.map((story)=>{
              return <SemiNews story={story.story} date={story.Date} image={story.image} key={story.author} Tag={story.Tag} Author={story.author} Title={story.Title}/>
            })}
          </div>
        </div>


        <div className=" xl:block border text-[rgb(33,33,33)]  p-[1.5rem] hidden h-[43.7931rem]  w-[20.05rem]">
          <Third />

        </div>
      </div>
    </div>


    <SecondSection />

  </div>
  <Footer/>
  </div></>
}
export default News;
