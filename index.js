const login = document.querySelector(".login-form")

function tipsUpdater(){
    const tips = document.querySelector(".tips-content")
    const tipsRandomizer = [

  [
    "Writing down your tasks for the day can help you stay organized and focused. Consider breaking up larger tasks into smaller, more manageable steps to make them easier to accomplish. You can also use your task list to prioritize your tasks and identify which ones are most important."
  ],
  [
    "Identifying the most important tasks and tackling them first can help you avoid feeling overwhelmed. As you work through your task list, consider the urgency and importance of each task, and focus on completing the most important ones first."
  ],
  [
    "Taking short breaks throughout the day can help you stay refreshed and focused. Consider taking a short walk, doing some stretching exercises, or simply stepping away from your work for a few minutes to recharge your batteries."
  ],
  [
    "Grouping similar tasks together can help you be more efficient and save time. For example, if you have several phone calls to make, try to make them all at once instead of spreading them out throughout the day."
  ],
  [
    "If possible, delegate tasks to others to free up your time and reduce stress. Consider delegating tasks that are not your area of expertise or that can be completed by someone else on your team."
  ],
  [
    "Multitasking can actually decrease your productivity. Focus on one task at a time and give it your full attention before moving on to the next."
  ],
  [
    "Set a timer for a specific task to help you stay on track and avoid getting sidetracked. For example, if you need to complete a report, set a timer for 30 minutes and focus solely on that task until the timer goes off."
  ],
  [
    "Identify tasks that aren't necessary or can be eliminated to save time and reduce stress. For example, if you find yourself spending too much time on social media, consider limiting your use or setting specific times of the day for checking it."
  ],
        [
    "The Pomodoro Technique is a time management method that involves breaking your workday into 25-minute work periods, followed by short breaks. This helps you stay focused and avoid burnout."
  ],
  [
    "Your physical health plays a big role in your ability to learn and be productive. Make sure you're getting enough sleep, eating a healthy diet, and getting regular exercise."
  ],
  [
    "Distractions can make it difficult to focus and get things done. Try turning off your phone, closing unnecessary tabs on your computer, and finding a quiet place to work."
  ],
  [
    "When you accomplish something, no matter how small, take a moment to celebrate. This can help you stay motivated and boost your confidence."
  ]
      ]
      setInterval(() => {

        tips.classList.add("fade-out")
        function takeTipIndex(number){
          number = null
          const randomNumber = Math.floor(Math.random() * tipsRandomizer.length);
            number = randomNumber;
            return number
        }
       
        setTimeout(() => {
            tips.classList.remove("fade-out")
        }, 1000);
        tips.innerHTML = ""
        let index = takeTipIndex();
        tips.textContent = tipsRandomizer[index]
      }, 9000);
    }
    tipsUpdater();
    const start = document.querySelector(".start").addEventListener("click", (e)=>{
        const menuStart = document.querySelector(".menu-start")
        menuStart.classList.add("fade-out")
   
       
      function displayMenu(){
        setTimeout(() =>{
            menuStart.style.display = "none"
            login.style.display = "flex"
        }, 2000)
        
      }
      displayMenu();

    })
    const register = document.querySelector(".acc-link").addEventListener("click",(e)=>{
     const registerForm = document.querySelector(".register-form")
      login.style.animation = ""
      login.classList.add("fade-out")
      function displayReg(){
        setTimeout(() =>{
            login.style.display = "none"
          registerForm.style.display = "flex"
          registerForm.style.padding = "100px"

        }, 2000)
        
      }
    
      displayReg();

 
      });
  