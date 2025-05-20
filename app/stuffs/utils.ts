import { create } from 'zustand'
import gsap from 'gsap';
import {SplitText} from 'gsap/all';
gsap.registerPlugin(SplitText)
type menu = {
  menuState: boolean,
  openClose: () => void,
  animateInto: () => void,
  animateOut: () => void,
}

const CloseAnim = (state: menu): boolean => {
  state.animateOut()
  return false
}
const openAnim = (state: menu): boolean => {
  state.animateInto()
  return true
}
const menu = create<menu>((set) => ({
  menuState: false,
  openClose: () => set((state) => ({ menuState: state.menuState == false ? openAnim(state) : CloseAnim(state) })),
  animateInto: () => {
    const tl = gsap.timeline()
    tl.fromTo("#menu", {
      x: "-100%",
      stagger: 0.5,
      opacity: 0.5,
    }, {
      x: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 0.4,
      ease: "power3.in"
    }).from("#nav", {
      stagger: 0.2,
      duration: 0.1,
      opacity: 0,
      y: -30,
      ease: "power4.inOut"
    })

    console.log('hello')
  },
  animateOut: () => {
    gsap.to("#menu", {
      x: "-100%",
      opacity: 0.5,
      duration: 0.4,
      stagger: 0.6,
      ease: "power3.out"
    })
  }
}));
type search = {
  searchAppear:()=>void,
  searchDisApp:()=>void
}
type o = {
  show:boolean,
  setshow:()=>void
}
const newsbro = create<o>((set)=>({
  show:false,
  setshow:()=>set((state)=>({show:!state.show}))
}))
const search = create<search>(()=>({
   searchAppear:()=>{
    gsap.set("#blur",{
      y:"0%",
    });
    document.getElementById('sear')?.focus()
    gsap.fromTo("#search",{y:"-100%"},{y:"0%",duration:0.5,ease:"power4.in"})
   },
   searchDisApp:()=>{
    gsap.to("#search",{
      y:"-170%",
      duration:0.5,
      ease:"power4.out"
    });
    gsap.set("#blur",{y:"-100%",delay:0.6})
   }
}));
const Story = create(()=>({
  view:()=>{
    gsap.fromTo("#full",{
      y:"100%",
    },
    {y:"0%",
      duration:0.5,
      ease:"power4.in"
    });


    const tl =gsap.timeline();
    const headTitles = new SplitText("#head",{type:"words"})

    tl.from(headTitles.words,{
       y:-100,
       opacity:0,
       rotation:"random(-80,80)",
       duration:0.7,
       ease:"back",
       stagger:0.15
    }).from("#author",{
        opacity:0,
        x:-100,
        duration:0.5,
        ease:"power3.in"
    },"startTogether").from(".line",{
      scale:0.5,
      duration:0.5
    },"startTogether").from("#tag",{
      opacity:0,
      ease:"back.in",
      duration:0.5
    },"babe").from("#baba",{y:300,duration:0.5,ease:"power3.in"},"babe")
  },
  close:()=>{
    gsap.to("#full",{
      y:"100%",
      duration:0.5,
      ease:"power1.out"
    })
  }
}));
type mala = {image:string,Title:string,Author:string,Tag:string,Date:string,Story:string};
type alu = {story:mala,setStory:(newStory:mala)=>void}
const OpenStory = create<alu>((set)=>({
  story:{image:"",Title:"",Author:"",Tag:"",Date:"",Story:""},
  setStory:({...newStory})=>set(()=>({story:{...newStory}}))
}))
const semistorys = [
  {Tag:"Robotics",
    Title:"The Rise of Robotics: Shaping the Future of Technology",
    author:"Tony Stark",
    Date:"11 Jun '30",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrnbQJamPqR9f0IkMWyPan641vqaD0S92LwA&s",
    story:`Robotics has rapidly transformed from science fiction to everyday reality, revolutionizing industries from manufacturing to healthcare. With advancements in AI and machine learning, robots are becoming smarter, more agile, and increasingly capable of performing complex tasks with precision and efficiency. From robotic arms assembling cars to autonomous drones delivering packages, the possibilities are limitless.

In addition to industrial applications, robotics is making significant strides in personal and social contexts. Service robots assist in elder care, robotic exoskeletons aid in physical rehabilitation, and educational robots are inspiring the next generation of tech innovators. These breakthroughs are not just enhancing productivity but also improving quality of life.

As technology continues to evolve, robotics is set to redefine how we live, work, and interact with machines. The journey towards smarter, more integrated robotic solutions is just beginning, promising a future where human-robot collaboration becomes the norm.
`
  },
  {Tag:"Creativity",
    Title:"Mastering Adobe Design: Elevating Your Creative Workflow",
    author:"Ben Rose",
    Date:"11 Jun '30",
    image:"https://helpx.adobe.com/content/dam/help/en/illustrator/how-to/character-design/jcr_content/main-pars/image/character-design-intro_900x506.jpg",
    story:`Adobe's suite of design tools—Photoshop, Illustrator, After Effects, and more—has been the backbone of digital creativity for decades. Whether you're a graphic designer, digital artist, or content creator, mastering these tools can unlock your creative potential and streamline your workflow.

With powerful features like Content-Aware Fill, Vector Editing, and Motion Graphics, Adobe Design tools allow artists to bring their visions to life with precision and style. The key to maximizing their potential lies in understanding layers, smart objects, and non-destructive editing, ensuring that your designs remain flexible and easy to adjust.`
  },
  {Tag:"Gaming",
    Title:"The Legacy of GTA: How Grand Theft Auto Redefined Open-World Gaming",
    author:"John Smith",
    Date:"30 Jun '25",
    image:"https://image.jeuxvideo.com/medias-sm/170230/1702303334-1969-jaquette-avant.jpeg",
    story:`Since its debut in 1997, the Grand Theft Auto (GTA) series has revolutionized the gaming industry with its expansive open-world environments, gripping storytelling, and unmatched freedom of exploration. Developed by Rockstar Games, GTA set the standard for what sandbox games could achieve, offering players the chance to live out high-stakes heists, chaotic car chases, and deep narratives—all within beautifully rendered urban landscapes.

From the gritty streets of Liberty City to the sun-soaked avenues of Los Santos, each installment pushes the boundaries of interactive storytelling and world-building. Players can engage in missions, side quests, or simply explore and cause mayhem, all while experiencing lifelike physics and dynamic AI interactions.

With the highly anticipated GTA VI on the horizon, Rockstar promises even more groundbreaking features, including enhanced graphics, larger maps, and deeper role-playing elements. GTA remains more than just a game—it's a cultural phenomenon that continues to shape the future of open-world gaming`
  },
]
const FatStorys = [

  {
  tag:"Artificial Intelligence",
  Title:"Mastering Midjourney: The Ultimate Guide to Creating Stunning AI Art",
  Description:"Discover the secrets behind Midjourney, the revolutionary AI tool that transforms your imagination into breathtaking digital art.",
  Date:"12 Dec '24",
  imageUrl:'https://live.staticflickr.com/65535/52829510686_741efd4ba1_b.jpg',
  Author:"Daniel Windfield",
  story:`Artificial Intelligence has revolutionized the art world, enabling artists and enthusiasts to create breathtaking visuals with just a few lines of code or simple text prompts. AI Art blends technology and creativity, unlocking possibilities that were once confined to imagination.

Through powerful models like DALL-E, Stable Diffusion, and Midjourney, AI learns from countless images and artistic styles to produce unique and often surreal artwork. The beauty of AI-generated art lies in its ability to transcend human limitations—exploring abstract concepts, perfecting symmetry, and blending genres in ways that challenge traditional art forms.

Whether you are an artist looking to experiment with new styles, a developer seeking to integrate art into applications, or simply a lover of visual storytelling, AI Art offers endless opportunities to innovate and inspire.`
},
  {
  story:`Africana Art—rooted in the rich cultural heritage of Africa—represents a legacy of storytelling, craftsmanship, and symbolism. From ancient sculptures and vibrant textiles to rhythmic music and dance, it encapsulates the essence of African identity and history. Today, a new wave of modern creativity is breathing fresh life into this traditional art form, bridging the past with the present in stunning ways.

Contemporary artists and digital creators are exploring innovative mediums like digital illustration, augmented reality (AR), and artificial intelligence (AI) to reinterpret Africana Art. These modern techniques not only preserve traditional aesthetics but also introduce them to global audiences through interactive experiences and immersive designs. Collaborative projects are emerging that merge ancestral craftsmanship with cutting-edge technology, creating a platform for African art to shine on a global stage.

By infusing Africana Art with modern creativity, artists are not only celebrating its history but also pushing its boundaries—ensuring its relevance for generations to come. This revival is more than just artistic expression; it's a powerful statement of cultural pride and innovation.`,
  tag:"Art",
  Title:"Reviving Africana Art Through Modern Creativity",
  Description:"Africana art is a vibrant celebration of culture, history, and storytelling. Rooted in tradition yet endlessly evolving, its forms span from intricate beadwork and bold textiles to powerful sculptures and expressive paintings",
  Date:"12 Dec '24",
  imageUrl:'https://i.pinimg.com/736x/ae/9f/3c/ae9f3c68e8c19b77be969b9900351979.jpg',
  Author:"John Mana"
}

];

function getContextSnippets(
  elements: Element[],
  searchTerm: string,
  contextLength = 20,
  highlightClass = "highlight"
): string[] {
  return elements.map((el) => {
    const fullText = el.textContent ?? "";

    const regex = new RegExp(`(${searchTerm.trim().replace(/\s+/g, "\\s+")})`, "gi");
    const match = fullText.match(regex);

    if (!match) return "";

    const start = fullText.toLowerCase().indexOf(match[0].toLowerCase());
    const end = start + match[0].length;

    const snippetStart = Math.max(0, start - contextLength);
    const snippetEnd = Math.min(fullText.length, end + contextLength);

    let snippet = fullText.slice(snippetStart, snippetEnd);

    if (snippetStart > 0) snippet = "..." + snippet;
    if (snippetEnd < fullText.length) snippet = snippet + "...";

    const highlightedSnippet = snippet.replace(
      regex,
      `<span class="${highlightClass}">$1</span>`
    );

    return highlightedSnippet;
  });
}
type lama = {
  curr:string,
  setCurr:(text:string)=>void;
}
const currentTag = create<lama>((set)=>({
  curr:"",
  setCurr:(text)=>set(()=>({curr:text}))
}))
export {currentTag,FatStorys,OpenStory,newsbro, Story, menu,search,semistorys ,getContextSnippets}
