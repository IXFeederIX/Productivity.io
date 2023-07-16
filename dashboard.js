const createContainer = document.querySelector(".create-container")
const coverSideBar = document.querySelector(".side-bar-bg-cover")
const sideBar = document.querySelector(".side-bar");

const dashboardMenu = document.querySelector(".dashboard-menu").addEventListener("click", () => {

  sideBar.classList.add("active");
  coverSideBar.style.display = "block"
  
});
coverSideBar.addEventListener("click",()=>{
  sideBar.classList.remove("active");
  coverSideBar.style.display = "none";
})
const noNotes = document.querySelector(".no-notes")
function getDate() {
    const DateInfo = document.querySelector(".date-info");
    const currentDate = new Date();
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    
    DateInfo.innerHTML = year + '-' + month + '-' + day;
    
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();
    
    var timeFormat = document.getElementById("time-format").value;
    var timeString;
    
    if (timeFormat === "24") {
      // 24-hour format
      timeString = hour + ':' + minute + ':' + second;
    } else {
      // 12-hour format
      var ampm = hour >= 12 ? 'PM' : 'AM';
      hour = hour % 12;
      hour = hour ? hour : 12;
      timeString = hour + ':' + minute + ':' + second + ' ' + ampm;
    }
    
    const theHour = document.querySelector(".time");
    theHour.innerHTML = "&#x23F0; The Hour is: " + timeString;
  }
  
  // call getDate() initially to set the date and time
  getDate();
  
  // call getDate() every second to update the time in real time
  setInterval(getDate, 1000);


  const create = document.querySelector(".create")
  create.addEventListener("click",(e)=>{
    e.preventDefault()
    noNotes.classList.add("fade-out");
    create.classList.add("fade-out")
    setTimeout(() => {
      noNotes.style.display = "none";
      create.style.display = "none";
      createContainer.style.display = "flex";
    }, 1000);
  
  })