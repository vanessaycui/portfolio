/*----- constants -----*/

/*----- app's state (variables) -----*/
let count = 0

/*----- cached element references -----*/

const jobTabs = document.querySelector('.job-tabs')
const allTabs = document.querySelectorAll('.tab')
const contactLinks = document.querySelectorAll('.circle-links')
const emailBtn = document.querySelector('#email-btn')

const menuBtn = document.querySelector('.menu')
const menuList = document.querySelector('.menu >.menu-links')
const menuLinks = document.querySelector('.menu ul')

const navLinks = document.querySelector('#nav-links')
const allNavLinks = document.querySelectorAll('#nav-links>a')
const navTitle = document.querySelector('#nav-title>div>a>h1')
const entireWindow = document.querySelector('*')

const bioImages = document.querySelector('#right-about-container')
const experienceImages = document.querySelector('.work-edu-content')
const projectImages = document.querySelector('.project-card-container')
const contactImages = document.querySelector('#contact')

/*----- init execution of functions-----*/
removeBioRumble()
removeExpRumble()
removeProjRumble()
removeTitleAnime('#about')
/*----- event listeners / observers -----*/

//this keeps track of what is in view, triggering animations.
const observerBio = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            addTitleAnime('#about')
            bioImages.childNodes.forEach((child) =>{
                if (child.id ==="bio-img-bg"){
                    child.classList.add("rumble-1")
                }else if (child.id ==="bio-img"){
                    child.classList.add("rumble-2")
                }
            })
        }
        setTimeout(()=>{
            removeTitleAnime('#about')
        }, 2000)
        setTimeout(removeBioRumble, 1900) // need to match duration of full animation
    })
})

// *********** adding new job? add animation here.
const observerWork = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            addTitleAnime('#work-edu')
            experienceImages.childNodes.forEach((child) =>{
                if (child.id ==="one"){
                    child.classList.add("rumble-1")
                }else if (child.id ==="two"){
                    child.classList.add("rumble-2")
                }else if (child.id ==="three"){
                    child.classList.add("rumble-3")
                }else if (child.id ==="edu"){
                    child.classList.add("rumble-4")
                }
            })
        }
        setTimeout(()=>{
            removeTitleAnime('#work-edu')
        }, 2000)
        setTimeout(removeExpRumble, 1700)// need to match duration of full animation
    })
})

const observerProj = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            addTitleAnime('#projects')
            projectImages.childNodes.forEach((child) =>{
                if (child.id ==="good-food"){
                    child.classList.add("rumble-1")
                }else if (child.id ==="snake"){
                    child.classList.add("rumble-2")
                    
                }
            })
        }
        setTimeout(()=>{
            removeTitleAnime('#projects')
        }, 2000)
        setTimeout(removeProjRumble, 1900) 
    })
})

const observerContact = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            addTitleAnime('#contact')
        }
        setTimeout(()=>{
            removeTitleAnime('#contact')
        }, 2000)
    })
})

observerWork.observe(experienceImages)
observerBio.observe(bioImages)
observerProj.observe(projectImages)
observerContact.observe(contactImages)


window.addEventListener('resize', function() {
    allNavLinks.forEach(link=>{
        if (link.id !==""){
            document.querySelector('#'+link.id).classList.remove("nav-links-active")
        }
    })
    if (window.innerWidth < 900) {
            navTitle.style.pointerEvents= "none"
   
    } else {

            navTitle.style.pointerEvents= "auto"
    }
  }, true);

menuBtn.addEventListener('click', (event)=>{
    count++
    if (count%2 !== 0){
      menuList.style.transition=' all 0.25s ease-in-out'
      menuList.style.opacity='1'
      menuList.style.width= '180px'
      menuList.style.height= '100vh'
      menuList.style.transform='translateY(20px)'
      menuBtn.classList.toggle("special")
      menuLinks.style.pointerEvents='auto'
    } else {
      menuBtn.classList.toggle("special")
      menuList.style.transition=' all 0.25s ease-in-out'
      menuList.style.opacity='0'
      menuList.style.width= '180px'
      menuList.style.height= '100vh'
      menuList.style.transform='translateY(0px)'
      menuLinks.style.pointerEvents='none'
    }
  })

jobTabs.addEventListener("click", (event)=>{
    if (event.target.tagName ==="A"){
    allTabs.forEach(tab => {
        tab.classList.remove("active")
        let section = tab.id.split("-")[1]
        document.querySelector('#'+section).classList.add("work-edu-hide")
    })
    event.target.classList.add("active")
    let section = event.target.id.split("-")[1]
    document.querySelector('#'+section).classList.remove("work-edu-hide")  

}})

contactLinks.forEach(link =>{
    link.addEventListener("click", (event)=>{
        if (event.target.classList[1] === 'github'){
            window.open('https://github.com/vanessaycui/');
        }
        if (event.target.classList[1] === 'linkedin'){
            window.open('https://www.linkedin.com/in/vanessa-cui-p-eng-9b763294/');
        }
    })
})

emailBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    window.open('mailto:vanessa.y.cui@gmail.com')
})

/*----- functions -----*/

function removeBioRumble(){
    bioImages.childNodes.forEach((child, index) =>{
        if (child.id ==="bio-img-bg"){
            child.classList.remove("rumble-1")
        }else if (child.id ==="bio-img"){
            child.classList.remove("rumble-2")
        }
    })
}

function removeExpRumble(){
    experienceImages.childNodes.forEach((child) =>{
        if (child.id ==="one"){
            child.classList.remove("rumble-1")
        }else if (child.id ==="two"){
            child.classList.remove("rumble-2")
        }else if (child.id ==="three"){
            child.classList.remove("rumble-3")
        }else if (child.id ==="edu"){
            child.classList.remove("rumble-4")
        }
    })
}

function removeProjRumble(){
    projectImages.childNodes.forEach((child) =>{
        if (child.id ==="good-food"){
            child.classList.remove("rumble-1")
        }else if (child.id ==="snake"){
            child.classList.remove("rumble-2")
        }
    })
}

function removeTitleAnime(id){
    document.querySelector(id+'>div').classList.remove('anime-outer-left')
    document.querySelector(id+'>div>div').classList.remove('anime-inner-left')
    document.querySelector(id+'>div>div>div').classList.remove('anime-section-outer-left')
    document.querySelector(id+'>div>div>div>div').classList.remove('anime-section-inner-left')
}

function addTitleAnime(id){
    document.querySelector(id+'>div').classList.add('anime-outer-left')
    document.querySelector(id+'>div>div').classList.add('anime-inner-left')
    document.querySelector(id+'>div>div>div').classList.add('anime-section-outer-left')
    document.querySelector(id+'>div>div>div>div').classList.add('anime-section-inner-left')
}