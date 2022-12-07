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
const navTitle = document.querySelector('#nav-title>h1')
const entireWindow = document.querySelector('*')

/*----- event listeners -----*/

window.addEventListener('resize', function() {
    allNavLinks.forEach(link=>{
        if (link.id !==""){
            document.querySelector('#'+link.id).classList.remove("nav-links-active")
        }
    })
    if (window.innerWidth < 900) {
        allNavLinks.forEach(link=>{
            document.querySelector(link.hash).style.display='flex'
            navTitle.style.pointerEvents= "none"
        })
    } else {
        allNavLinks.forEach(link=>{
            document.querySelector(link.hash).style.display='none'
            document.querySelector("#intro").style.display='flex'
            navTitle.style.pointerEvents= "auto"
        })
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
        console.log(event.target.classList[1])  
    })
})

emailBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    window.open('mailto:vanessa.y.cui@gmail.com')
})

navLinks.addEventListener('click', (event)=>{
    
    allNavLinks.forEach(link=>{ 
        if (link.id !==""){
            console.log('#'+link.id)
            document.querySelector('#'+link.id).classList.remove("nav-links-active")
        }
        document.querySelector(link.hash).style.display='none'
    })

    if (event.target.tagName ==='A'){
        document.querySelector(event.target.hash).style.display='block'
    }
    document.querySelector('#'+event.target.id).classList.add("nav-links-active")

})

navTitle.addEventListener('click', (event)=>{
    allNavLinks.forEach(link=>{
        document.querySelector(link.hash).style.display='none'
    })
    document.querySelector("#intro").style.display='flex'

})



/*----- functions -----*/