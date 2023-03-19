
 fetch('https://restomenu.onrender.com/menu')
  .then(response => response.json())
  .then(burger => {

    const burgers = document.getElementById("food");
                   
    for (let i = 0; i < burger.Burgers.length; i++) {
      const newBurg = document.createElement("div");
        newBurg.className = "col-sm-6 col-lg-4 filterDiv burger show";
        
              
      const Burg = ` 
            <div class="box">
        <div>
          <div class="img-box">
            <img src="${burger.Burgers[i].img}" alt="">
          </div>
          <div class="detail-box">
            <h5>
            ${burger.Burgers[i].name}
            </h5>
            <p>
            The Best  ${burger.Burgers[i].name} you'll ever taste!
            </p>
            <div class="options">
              <h6>
              ${burger.Burgers[i].price} $ 
              </h6>
             </div>
          </div>
        </div>
      </div>
    </div>
      `
      newBurg.innerHTML = Burg;
      burgers.appendChild(newBurg);
    }
    
  })




  fetch('https://restomenu.onrender.com/menu')
  .then(response => response.json())
  .then(pizza => {

    const pizzas = document.getElementById("food");
                   
    for (let i = 0; i < pizza.Pizzas.length; i++) {
      const newPizz = document.createElement("div");
        newPizz.className = "col-sm-6 col-lg-4 filterDiv pizza show";
        
      
      const Pizz = ` 
            <div class="box">
        <div>
          <div class="img-box">
            <img src="${pizza.Pizzas[i].img}" alt="">
          </div>
          <div class="detail-box">
            <h5>
            ${pizza.Pizzas[i].name}
            </h5>
            <p>
            The Best  ${pizza.Pizzas[i].name} you'll ever taste!
            </p>
            <div class="options">
              <h6>
              ${pizza.Pizzas[i].price} $ 
              </h6>
             
            </div>
          </div>
        </div>
      </div>
    </div>
      `
      newPizz.innerHTML = Pizz;
      pizzas.appendChild(newPizz);
    }
    
  })


  fetch('https://restomenu.onrender.com/menu')
  .then(response => response.json())
  .then(pasta => {

    const pastas = document.getElementById("food");
                   
    for (let i = 0; i < pasta.Pastas.length; i++) {
      const newPast = document.createElement("div");
        newPast.className = "col-sm-6 col-lg-4 filterDiv pasta show";
        
            const Past = ` 
            <div class="box">
        <div>
          <div class="img-box">
            <img src="${pasta.Pastas[i].img}" alt="">
          </div>
          <div class="detail-box">
            <h5>
            ${pasta.Pastas[i].name}
            </h5>
            <p>
            The Best  ${pasta.Pastas[i].name} you'll ever taste!
            </p>
            <div class="options">
              <h6>
              ${pasta.Pastas[i].price} $ 
              </h6>
             
            </div>
          </div>
        </div>
      </div>
    </div>
      `
      newPast.innerHTML = Past;
      pastas.appendChild(newPast);
    }
    
  })

 

  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  
  // Show filtered elements
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  // Hide elements that are not selected
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }
  
 

  const filterDivs = document.querySelectorAll(".filterDiv");
  filterDivs.forEach((filterDiv) => {
    filterDiv.classList.add("show");
  });

  
  
  fetch('https://restomenu.onrender.com/menu')
  .then(response => response.json())
  .then(data => {

    const carousel = document.getElementById("cont");
                   
    for (let i = 0; i < data.Testimonials.length; i++) {


      const clients = document.createElement("span");
            
      const client = ` 

      <div class="box-area">	
      <div class="img-area">
        <img src="${data.Testimonials[i].img}" alt="">
      </div>	
      <h5>${data.Testimonials[i].name}</h5>
      <span>${data.Testimonials[i].rating}</span>									
      <p class="content">
      ${data.Testimonials[i].review}
      </p>
      <h6 class="socials">
          <i class="fa fa-instagram"></i>
          <i class="fa fa-facebook"></i>
          <i class="fa fa-linkedin"></i>
          <i class="fa fa-youtube"></i>
      </h6>
    </div> 
     
      `
      
      clients.innerHTML = client;
      carousel.appendChild(clients);
    }
    
  })
