
function createBookBg(){
    const bookbg = document.querySelector(".book-bg");
    for (let i = 0; i < 7 ; i++){
        const line = document.createElement("div");
        line.classList.add("line");
        bookbg.appendChild(line);
    }
}

let pagecounter = 0;

const nextBtn = document.querySelector(".scroll-btn").addEventListener("click",(e)=>{
    const nextBtnAgain = document.querySelector(".scroll-btn")
    function isDisabled(){
    nextBtnAgain.disabled = true
    setTimeout(() => {
        nextBtnAgain.disabled = false
    }, 1500);
   }

    pagecounter++; 
    const page2 = document.querySelector(".page2");
    e.preventDefault()
   isDisabled()
    console.log(pagecounter) 
    if (pagecounter === 1){
        const container = document.querySelector(".container");
        document.body.classList.add("fadeBg");
        container.style.display = "none";
        const page1 = document.querySelector(".page");
        page1.style.display = "flex";
        const bookbg = document.createElement("div");
        page1.appendChild(bookbg);
        bookbg.classList.add("book-bg");
        createBookBg();
        
    }
    
    else if (pagecounter === 2) {
        const page1 = document.querySelector(".page");
     
        if (page1.style.display === "flex") {
            page1.style.display = "none";        
            page2.style.display = "flex";
        }
    }
    
    else if (pagecounter === 3) {

        if (page2.style.display === "flex") {
            page2.style.display = "none"; 
            const pagelast = document.querySelector(".pagelast")
            pagelast.style.display = "flex";

     nextBtnAgain.style.display = "none";
        }
    }
    
    else {
        console.error("Unrecognized pagecounter value: " + pagecounter);
    }
});
/* TSParticles Load Ignore this */


tsParticles.load("tsparticles", {
    "fullScreen": {
      "zIndex": 1
    },
    "emitters": {
      "position": {
        "x": 50,
        "y": 100
      },
      "rate": {
        "quantity": 5,
        "delay": 0.15
      }
    },
    "particles": {
      "color": {
        "value": [
          "#1E00FF",
          "#FF0061",
          "#E1FF00",
          "#00FF9E"
        ]
      },
      "move": {
        "decay": 0.05,
        "direction": "top",
        "enable": true,
        "gravity": {
          "enable": true
        },
        "outModes": {
          "top": "none",
          "default": "destroy"
        },
        "speed": {
          "min": 50,
          "max": 100
        }
      },
      "number": {
        "value": 0
      },
      "opacity": {
        "value": 1
      },
      "rotate": {
        "value": {
          "min": 0,
          "max": 360
        },
        "direction": "random",
        "animation": {
          "enable": true,
          "speed": 30
        }
      },
      "tilt": {
        "direction": "random",
        "enable": true,
        "value": {
          "min": 0,
          "max": 360
        },
        "animation": {
          "enable": true,
          "speed": 30
        }
      },
      "size": {
        "value": 3,
        "animation": {
          "enable": true,
          "startValue": "min",
          "count": 1,
          "speed": 16,
          "sync": true
        }
      },
      "roll": {
        "darken": {
          "enable": true,
          "value": 25
        },
        "enlighten": {
          "enable": true,
          "value": 25
        },
        "enable": true,
        "speed": {
          "min": 5,
          "max": 15
        }
      },
      "wobble": {
        "distance": 30,
        "enable": true,
        "speed": {
          "min": -7,
          "max": 7
        }
      },
      "shape": {
        "type": [
          "circle",
          "square"
        ],
        "options": {}
      }
    },
    "responsive": [
      {
        "maxWidth": 1024,
        "options": {
          "particles": {
            "move": {
              "speed": {
                "min": 33,
                "max": 66
              }
            }
          }
        }
      }
    ]
  });
  /* TSParticles Load Ignore this */