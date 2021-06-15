 window.onscroll = function() { scrollIndicator() } ;
 function scrollIndicator() {
  const heightOfWindow = window.innerHeight,
  contentScrolled = window.pageYOffset,
  bodyHeight = document.body.offsetHeight,
  percentage = document.querySelector(".progress-container .progress-bar")
  percentageVal = document.querySelector(".container")

  if(bodyHeight - contentScrolled <= heightOfWindow) {
       percentageVal.textContent = percentage.style.width = "100%"
        }
    else {
     const total = bodyHeight - heightOfWindow,
         got = contentScrolled,
        percent = parseInt((got/total) * 100)
         percentageVal.textContent = percentage.style.width = percent + "%"
         }
        }
        
     window.addEventListener('scroll', updateScrollPercentage)
 

//  const updateScrollPercentage = function() { 
//      const heightOfWindow = window.innerHeight,
//      contentScrolled = window.pageYOffset,
//      bodyHeight = document.body.offsetHeight,
//     percentage = document.querySelector("[data-scrollPercentage] .percentage")
//     percentageVal = document.querySelector("#percentage-value")
    
// //     if(bodyHeight - contentScrolled <= heightOfWindow) {
//     percentageVal.textContent = percentage.style.width = "100%"
//     }
//     else {
//     const total = bodyHeight - heightOfWindow,
//     got = contentScrolled,
//     percent = parseInt((got/total) * 100)
//     percentageVal.textContent = percentage.style.width = percent + "%"
//     }
//     }
    
//     window.addEventListener('scroll', updateScrollPercentage)