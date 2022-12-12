/*----- constants -----*/

/*----- app's state (variables) -----*/
let count = 0

/*----- cached element references -----*/
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const leftSideLine = document.querySelector('#left-side-links>div:nth-child(4)')
const leftSideLinks = document.querySelector('#left-side-links')

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
const experienceImages = document.querySelector('#about-experience-roles')
const experienceSection = document.querySelector('.job-tabs')
const projectImages = document.querySelector('.project-card-container')
const proj1 = document.querySelector('#good-food')
const proj2 = document.querySelector('#snake')
const proj3 = document.querySelector('#budget')
const contactImages = document.querySelector('#contact')
const footer = document.querySelector('footer')

/*----- init execution of functions-----*/
removeBioRumble()
removeExpRumble()
removeProj1Rumble()
removeProj2Rumble()
removeProj3Rumble()
/*----- event listeners / observers -----*/

//this keeps track of what is in view, triggering animations.
const observerBio = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            nav.style.backgroundColor = 'whitesmoke';
                
                allNavLinks.forEach(link=>{
                    link.style.color='black'
                });
            navTitle.style.color="black"
            body.style.backgroundColor="whitesmoke";
            body.style.color="black";
            body.style.transition="0.5s linear";
            leftSideLine.style.borderColor="black"
            footer.style.backgroundColor="var(--alloverbgcolor)"
            addTitleAnime('#about')
            document.querySelector("#left-git").classList.add("github")
            document.querySelector("#left-git").classList.remove("github-white")
            document.querySelector("#left-li").classList.add("linkedin")
            document.querySelector("#left-li").classList.remove("linkedin-white")
            document.querySelector("#resume-link").style.border="2px solid var(--navbarlinks)"
            document.documentElement.style.setProperty('--projectimghoverbgcolor', 'whitesmoke')
            document.documentElement.style.setProperty('--projectimghovercolor', 'rgba(48, 56, 65,0.4)')
            document.documentElement.style.setProperty('--menubg','#092532') 
            document.documentElement.style.setProperty('--resume-link-bg-color','#A3C6C4')  
            document.documentElement.style.setProperty('--menulinkcolor','rgba(255,255,255,0.9)')
            document.documentElement.style.setProperty('--menulinkbg','#303841')
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
},[1])

// *********** adding new job? add animation here.
const observerWork = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            nav.style.backgroundColor = 'whitesmoke';
                
                allNavLinks.forEach(link=>{
                    link.style.color='black'
                });
            body.style.backgroundColor="whitesmoke";
            navTitle.style.color="black"
            body.style.color="black";
            body.style.transition="0.5s linear";
            leftSideLine.style.borderColor="black"
            footer.style.backgroundColor="var(--alloverbgcolor)"
            document.querySelector("#left-git").classList.add("github")
            document.querySelector("#left-git").classList.remove("github-white")
            document.querySelector("#left-li").classList.add("linkedin")
            document.querySelector("#left-li").classList.remove("linkedin-white")
            document.querySelector("#resume-link").style.border="2px solid var(--navbarlinks)"
            document.documentElement.style.setProperty('--projectimghoverbgcolor', 'whitesmoke')
            document.documentElement.style.setProperty('--projectimghovercolor', 'rgba(48, 56, 65,0.4)')  
            document.documentElement.style.setProperty('--menubg','#092532') 
            document.documentElement.style.setProperty('--resume-link-bg-color','#A3C6C4')
            document.documentElement.style.setProperty('--menulinkcolor','rgba(255,255,255,0.9)')
            document.documentElement.style.setProperty('--menulinkbg','#303841')
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
}, [1])

const observerWorkMobile = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            nav.style.backgroundColor = 'whitesmoke';
                
                allNavLinks.forEach(link=>{
                    link.style.color='black'
                });
            body.style.backgroundColor="whitesmoke";
            navTitle.style.color="black"
            body.style.color="black";
            body.style.transition="0.5s linear";
            leftSideLine.style.borderColor="black"
            footer.style.backgroundColor="var(--alloverbgcolor)"
            document.querySelector("#left-git").classList.add("github")
            document.querySelector("#left-git").classList.remove("github-white")
            document.querySelector("#left-li").classList.add("linkedin")
            document.querySelector("#left-li").classList.remove("linkedin-white")
            document.querySelector("#resume-link").style.border="2px solid var(--navbarlinks)"
            document.documentElement.style.setProperty('--projectimghoverbgcolor', 'whitesmoke')
            document.documentElement.style.setProperty('--projectimghovercolor', 'rgba(48, 56, 65,0.4)')  
            document.documentElement.style.setProperty('--menubg','#092532') 
            document.documentElement.style.setProperty('--resume-link-bg-color','#A3C6C4')
            document.documentElement.style.setProperty('--menulinkcolor','rgba(255,255,255,0.9)')
            document.documentElement.style.setProperty('--menulinkbg','#303841')
        }
    })
}, [1])

const observerProj = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            addTitleAnime('#projects')          
                nav.style.backgroundColor ="var(--alloverbgcolor-proj)"
                navTitle.style.color="whitesmoke"
                
                nav.style.transition="0.5s linear";
                allNavLinks.forEach(link=>{
                    link.style.color='whitesmoke'
                })
                body.style.backgroundColor="var(--alloverbgcolor-proj)"
                body.style.color="whitesmoke";
                body.style.transition="0.5s linear";
                leftSideLine.style.borderColor="whitesmoke"
                footer.style.backgroundColor="var(--alloverbgcolor-proj)"
                document.querySelector("#resume-link").style.border="2px solid whitesmoke"
                document.querySelector("#left-git").classList.remove("github")
                document.querySelector("#left-git").classList.add("github-white")
                document.querySelector("#left-li").classList.remove("linkedin")
                document.querySelector("#left-li").classList.add("linkedin-white")
                document.documentElement.style.setProperty('--projectimghoverbgcolor', 'rgba(48, 56, 65,0.8)')
                document.documentElement.style.setProperty('--projectimghovercolor', 'rgba(165,201,202,0.9') 
                document.documentElement.style.setProperty('--menubg','whitesmoke') 
                document.documentElement.style.setProperty('--menulinkbg','rgba(255,255,255,0.9)')
                document.documentElement.style.setProperty('--menulinkcolor','#303841')
        }
        setTimeout(()=>{
            removeTitleAnime('#projects')
        }, 2000)
       
    })
})

const obsProj1 = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            addTitleAnime('#projects')
            projectImages.childNodes.forEach((child) =>{
                if (child.id ==="good-food"){
                    child.classList.add("rumble-3")
                }
            })
        setTimeout(removeProj1Rumble, 1900) 
        }
       
    })
},[1])
const obsProj2 = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            addTitleAnime('#projects')
            projectImages.childNodes.forEach((child) =>{
                 if (child.id ==="snake"){
                    child.classList.add("rumble-3")
                }
            })
        setTimeout(removeProj2Rumble, 1900) 
        }
    })
},[1])
const obsProj3 = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            addTitleAnime('#projects')
            projectImages.childNodes.forEach((child) =>{
                 if (child.id ==="budget"){
                    child.classList.add("rumble-3")
                }
            })
        setTimeout(removeProj3Rumble, 1900) 
        }
       
    })
},[1])

const observerContact = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            body.style.backgroundColor="whitesmoke";
            body.style.color="black";
            body.style.transition="0.5s linear";
            nav.style.backgroundColor = 'whitesmoke';
            navTitle.style.color="black"
            leftSideLine.style.borderColor="black"
            footer.style.backgroundColor="var(--alloverbgcolor)"
            document.querySelector("#left-git").classList.add("github")
            document.querySelector("#left-git").classList.remove("github-white")
            document.querySelector("#left-li").classList.add("linkedin")
            document.querySelector("#left-li").classList.remove("linkedin-white")
            document.querySelector("#resume-link").style.border="2px solid var(--navbarlinks)"
            document.documentElement.style.setProperty('--projectimghoverbgcolor', 'whitesmoke')
            document.documentElement.style.setProperty('--projectimghovercolor', 'rgba(48, 56, 65,0.4)')
            document.documentElement.style.setProperty('--menubg','#092532')   
            document.documentElement.style.setProperty('--resume-link-bg-color','#A3C6C4')
            document.documentElement.style.setProperty('--menulinkcolor','rgba(255,255,255,0.9)')
            document.documentElement.style.setProperty('--menulinkbg','#303841')
            allNavLinks.forEach(link=>{
                link.style.color='black'
            });
            addTitleAnime('#contact')
        }
        setTimeout(()=>{
            removeTitleAnime('#contact')
        }, 2000)
    })
},[1])

observerWork.observe(experienceImages)
observerWorkMobile.observe(experienceSection)
observerBio.observe(bioImages)
observerProj.observe(projectImages)
obsProj1.observe(proj1)
obsProj2.observe(proj2)
obsProj3.observe(proj3)
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

  navLinks.addEventListener('click', (event)=>{
    
    allNavLinks.forEach(link=>{ 
        if (link.id !==""){
            document.querySelector('#'+link.id).classList.remove("nav-links-active")
        }
    })
    document.querySelector('#'+event.target.id).classList.add("nav-links-active")
})


jobTabs.addEventListener("click", (event)=>{
    if (event.target.tagName ==="A"){
        allTabs.forEach(tab => {
            tab.classList.remove("active")
            let section = tab.id.split("-")[1]
            document.querySelector('#'+section+'-mobile').classList.add("work-edu-hide")
         
        })
        event.target.classList.add("active")
        let section = event.target.id.split("-")[1]
        document.querySelector('#'+section+'-mobile').classList.remove("work-edu-hide")  
     

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

function removeProj1Rumble(){
    projectImages.childNodes.forEach((child) =>{
        if (child.id ==="good-food"){
            child.classList.remove("rumble-3")
        }
    })
}
function removeProj2Rumble(){
    projectImages.childNodes.forEach((child) =>{
        if (child.id ==="snake"){
            child.classList.remove("rumble-3")
        }
    })
}
function removeProj3Rumble(){
    projectImages.childNodes.forEach((child) =>{
        if (child.id ==="budget"){
            child.classList.remove("rumble-3")
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