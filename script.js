const btnBars = document.querySelector("#bars-btn");
const tabList = document.querySelector(".tab-list");



btnBars.addEventListener('click',  () => {
    console.log(tabList.classList)
    console.log(tabList.classList.contains("slide-down"))
    if(tabList.classList.contains("slide-down")){
        tabList.classList.remove("slide-down")
    }else {
       tabList.classList.add("slide-down")
    }
    tabList.classList.toggle("slide-down")
})