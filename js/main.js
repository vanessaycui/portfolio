/*----- constants -----*/
/*----- app's state (variables) -----*/

/*----- cached element references -----*/

const jobTabs = document.querySelector('.job-tabs')
const allTabs = document.querySelectorAll('.tab')
const resumeBtn = document.querySelector("#resume-btn")

/*----- event listeners -----*/


jobTabs.addEventListener("click", (event)=>{
    console.dir(event.target)
    allTabs.forEach(tab => {
        tab.classList.remove("active")
        let section = tab.id.split("-")[1]
        document.querySelector('#'+section).classList.add("work-edu-hide")
    })
    event.target.classList.add("active")
    let section = event.target.id.split("-")[1]
    document.querySelector('#'+section).classList.remove("work-edu-hide")  
})




/*----- functions -----*/