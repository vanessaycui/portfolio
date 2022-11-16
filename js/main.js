/*----- constants -----*/
/*----- app's state (variables) -----*/

/*----- cached element references -----*/
const bioBtn = document.querySelector("#bio-btn")
const workBtn = document.querySelector("#work-btn")
const schoolBtn = document.querySelector("#school-btn")
const resumeBtn = document.querySelector("#resume-btn")
const bioSection = document.querySelector("#about-bio")
const workSection = document.querySelector("#about-work")
const schoolSection = document.querySelector('#about-school')

/*----- event listeners -----*/

bioBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    bioSection.style.display = "flex"
    workSection.style.display = "none"
    schoolSection.style.display = "none"
})

workBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    bioSection.style.display = "none"
    workSection.style.display = "flex"
    schoolSection.style.display = "none"
})

schoolBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    bioSection.style.display = "none"
    workSection.style.display = "none"
    schoolSection.style.display = "flex"
})




/*----- functions -----*/