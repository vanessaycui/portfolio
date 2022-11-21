/*----- constants -----*/
/*----- app's state (variables) -----*/
let count = 0

/*----- cached element references -----*/

const jobTabs = document.querySelector('.job-tabs')
const allTabs = document.querySelectorAll('.tab')
const contactLinks = document.querySelector('#contact-links')
const emailBtn = document.querySelector('#email-btn')

let menuBtn = document.querySelector('.menu')
let menuList = document.querySelector('.menu >.menu-links')
let menuLinks = document.querySelector('.menu ul')


/*----- event listeners -----*/
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
    allTabs.forEach(tab => {
        tab.classList.remove("active")
        let section = tab.id.split("-")[1]
        document.querySelector('#'+section).classList.add("work-edu-hide")
    })
    event.target.classList.add("active")
    let section = event.target.id.split("-")[1]
    document.querySelector('#'+section).classList.remove("work-edu-hide")  
})

contactLinks.addEventListener("click", (event)=>{
    if (event.target.id === 'github'){
        window.open('https://github.com/vanessaycui/');
    }
    if (event.target.id === 'linkedin'){
        window.open('https://www.linkedin.com/in/vanessa-cui-p-eng-9b763294/');
    }
})

emailBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    window.open('mailto:vanessa.y.cui@gmail.com')
})



/*----- functions -----*/