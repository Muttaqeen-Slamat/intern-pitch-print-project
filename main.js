// const api = "https://pixabay.com/api/"
const image1 = document.querySelector('image1')
const API_KEY = '45434706-c0ccd452e1bf1b6dd98f43217';
const apiURL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
const apiURL1 = "https://pixabay.com/api/?key="+API_KEY


async function fetchInfo() {
    try {
      const response = await fetch(apiURL1);
      const results = await response.json();
  
      console.log(results);
  
      results.forEach(function (pix) {
        const imgDiv = document.createElement('div')
        const pixImg = new Image();
        pixImg.src = pix.previewURL;
        imgDiv.classList.add('image1')
        pixImg.onload = function(){
            imgDiv.prepend(pixImg)
            imgDiv.innerHTML+= `
            <img src="${pix.previewURL}"                                      
            <h6>${pix.type}</h6>
            <h6>${pix.tags}</h6>
            `;
        }
        image1.appendChild(imgDiv)
        console.log(`${pix.type}`)
      });
    } catch (error) {
      console.log(error);
    }
  }
fetchInfo();
