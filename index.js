
  // risolviamo la promise di fetch() con async/await
  const asyncAwaitExample = async function () {
    try {
      
      let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=one more time')
      
      console.log(res)
      if (res.ok) {
        let data = await res.json()
        console.log('data', data)
  
        
        let listReference = document.querySelector('#list')
        
        data.data.forEach((album) => {
            if(album.id === 3135553){
          listReference.innerHTML =
            listReference.innerHTML + 
            `
            <div class="col-4 col-lg-3 justify-content-center mb-2 h-100" >
            <div id="${album.asin}" class="card h-100 m-0">
                <img src=${album.album.cover} class="card-img-top" alt="...">
                <div class="card-body">
                  <h3 class="card-title">${album.title}</h3>
                  <h4 class="card-text">${album.artist.name}</h4>
                  
                  
                </div>
              </div>
          </div>
          `
           

        }})
      } else {
        
        console.log('Qualcosa è andato storto con la nostra chiamata!')
      }
    } catch (error) {
      
      console.log(error)
    }
  }
  
  asyncAwaitExample()
  
    
  const asyncAwaitExample2 = async function () {
    try {
      
      let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=get lucky')
      
      console.log(res)
      if (res.ok) {
        let data = await res.json()
        console.log('data', data)
  
        
        let listReference = document.querySelector('#list')
        
        data.data.forEach((album) => {
            if(album.id === 394338462){
          listReference.innerHTML =
            listReference.innerHTML + 
            `
            <div class="col-4 justify-content-center mb-2 h-100" >
            <div id="${album.asin}" class="card h-100 m-0">
                <img src=${album.album.cover} class="card-img-top" alt="...">
                <div class="card-body">
                  <h3 class="card-title">${album.title}</h3>
                  <h4 class="card-text">${album.artist.name}</h4>
                  
                  
                </div>
              </div>
          </div>
          `
           

        }})
      } else {
        
        console.log('Qualcosa è andato storto con la nostra chiamata!')
      }
    } catch (error) {
      
      console.log(error)
    }
  }
  
  asyncAwaitExample2()

  const asyncAwaitExample3 = async function () {
    try {
      
      let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q= harder, better, faster, stronger ')
      
      console.log(res)
      if (res.ok) {
        let data = await res.json()
        console.log('data', data)
  
        
        let listReference = document.querySelector('#list')
        
        data.data.forEach((album) => {
            if(album.id === 3135556){
          listReference.innerHTML =
            listReference.innerHTML + 
            `
            <div class="col-4 col-lg-3 justify-content-center mb-2 h-100" >
            <div id="${album.asin}" class="card h-100 m-0">
                <img src=${album.album.cover} class="card-img-top" alt="...">
                <div class="card-body">
                  <h3 class="card-title">${album.title}</h3>
                  <h4 class="card-text">${album.artist.name}</h4>
                  
                  
                </div>
              </div>
          </div>
          `
           

        }})
      } else {
        
        console.log('Qualcosa è andato storto con la nostra chiamata!')
      }
    } catch (error) {
      
      console.log(error)
    }
  }
  
  asyncAwaitExample3()
  
  const asyncAwaitExample4 = async function () {
    try {
      
      let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q= scatman ')
      
      console.log(res)
      if (res.ok) {
        let data = await res.json()
        console.log('data', data)
  
        
        let listReference = document.querySelector('#list2')
        
        data.data.forEach((album) => {
            if(album.id === 99360002){
          listReference.innerHTML =
            listReference.innerHTML + 
            `
            <div class="col-12 justify-content-center mb-2 h-100" >
            <div id="${album.asin}" class="card h-100 m-0">
                <img src=${album.album.cover} class="card-img-top h-75" alt="...">
                <div class="card-body text-center">
                  <h3 class="card-title">${album.title}</h3>
                  <h4 class="card-text">${album.artist.name}</h4>
                  
                  
                </div>
              </div>
          </div>
          `
           

        }})
      } else {
        
        console.log('Qualcosa è andato storto con la nostra chiamata!')
      }
    } catch (error) {
      
      console.log(error)
    }
  }
  
  asyncAwaitExample4()

  const asyncAwaitExample5 = async function () {
      try {
      
          let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q= translation ')
          
      console.log(res)
      if (res.ok) {
        let data = await res.json()
        console.log('data', data)
  
        
        let listReference = document.querySelector('#music')
        
        data.data.forEach((album) => {
            if(album.id === 990604232){
                listReference.innerHTML =
            listReference.innerHTML + 
            `
            
                  
                   
                  
                  
                  <!-- Quote 1 -->
                  <div class="item active div-quote">
                  <div class="row">
                  <div class="col-sm-12">
                  <img src=${album.album.cover} class=" d-block rounded border border-5 border-success w-75 h-75 my-0 mx-auto" alt="">
                  <div class="carousel-caption">
                  <h3 class="fs-1">${album.album.title}</h3>
                  <h4 class="vacche">${album.artist.name} </h4>
                  </div>
                  
                  </div>
                  </div>
                  </div>
                  
                  
                  
                  
                  
                  
                  


                  

                  
                  `
                  
                  
                }})
            } else {
        
                console.log('Qualcosa è andato storto con la nostra chiamata!')
      }
    } catch (error) {
        
        console.log(error)
    }
}


asyncAwaitExample5()



  const asyncAwaitExample6 = async function () {
      try {
      
          let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q= the highlights ')
          
      console.log(res)
      if (res.ok) {
        let data = await res.json()
        console.log('data', data)
  
        
        let listReference = document.querySelector('#music')
        
        data.data.forEach((album) => {
            if(album.id === 1225758602){
                listReference.innerHTML =
            listReference.innerHTML + 
            `
            
                  
                  
                  
                  
                  
                        <!-- Quote 2 -->
                         <div class="item div-quote">
                         <div class="row">
                         <div class="col-sm-12 text-center">
                             <img src=${album.album.cover} class="d-block border-5 rounded border border-primary w-75 h-100 my-0 mx-auto" alt="Jim">
                             <div class="carousel-caption">
                             <h3 class="fs-1">${album.album.title}</h3>
                         <h4 class="panozzi">${album.artist.name}</h4>
                     </div>
                         </div>
                         </div>
                         </div>
          
                  


                  

                  
                  `
                  
                  
                }})
            } else {
        
                console.log('Qualcosa è andato storto con la nostra chiamata!')
      }
    } catch (error) {
        
        console.log(error)
    }
}


asyncAwaitExample6()

  const asyncAwaitExample7 = async function () {
      try {
      
          let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q= blurryface ')
          
      console.log(res)
      if (res.ok) {
        let data = await res.json()
        console.log('data', data)
  
        
        let listReference = document.querySelector('#music')
        
        data.data.forEach((album) => {
            if(album.id === 99976952){
                listReference.innerHTML =
            listReference.innerHTML + 
            `
            
                  
                  
                  
                  
                  

                        <!-- Quote 3 -->
                         <div class="item div-quote">
                         <div class="row">
                         <div class="col-sm-12 text-center">
                             <img src=${album.album.cover} class=" d-block rounded border border-5 border-danger w-50 h-100 my-0 mx-auto" alt="Jackie Chan">
                             <div class="carousel-caption">
                              <h3 class="fs-1">${album.album.title}</h3>
                           <h4 class=" sushi ">${album.artist.name}</h4>
                     </div>
                     </div>
                    </div>
          
                  

                  
                  `
                  
                  
                }})
            } else {
        
                console.log('Qualcosa è andato storto con la nostra chiamata!')
      }
    } catch (error) {
        
        console.log(error)
    }
}


asyncAwaitExample7()
  const asyncAwaitExample8 = async function () {
      try {
      
          
        let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q= blurryface ')
        let res1 = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q= the highlights ')
          
      console.log(res)
      if (res.ok && res1.ok) {
        let data = await res.json()
        let data1 = await res1.json()

        console.log('data', data)
  
        
        
        
        data.data.forEach((album) => {
            if(album.id === 99976952){
                window.alert(`Questi sono i titoli della pagina: ${album.album.title}`)
                
                  
                }})
        data1.data.forEach((album) => {
            if(album.id === 1225758602){
                window.alert(`Questi sono i titoli della pagina: ${album.album.title}`)
                
                  
                }})
            } else {
        
                console.log('Qualcosa è andato storto con la nostra chiamata!')
      }
    } catch (error) {
        
        console.log(error)
    }
}



  const asyncAwaitExample9 = async function () {
      try {
      
          let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q= blurryface ')
          let res1 = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q= the highlights ')
          
      console.log(res)
      if (res.ok && res1.ok) {
        let data = await res.json()
        let data1 = await res1.json()

        console.log('data', data)
  
        
        
        
        data.data
        data1.data
        
        .forEach((album) => {
            if((album.id === 99976952) || (album.id === 1225758602)){
                window.alert(`Questi sono i titoli della pagina: ${album.album.title}`)
                  
                }})
            } else {
        
                console.log('Qualcosa è andato storto con la nostra chiamata!')
      }
    } catch (error) {
        
        console.log(error)
    }
}







// predisponiamo la funzione che eliminerà tutto il contenuto della pagina una volta chiamata

//   function myFun() {
        //     let elem = document.getElementById('list');
        //     elem.parentNode.removeChild(elem);
        //    }
        


        // predisponiamo la funzione che eliminerà il contenuto dell' ultimo elemento della pagina una volta chiamata
        function myFun() {
            let elem = document.getElementById('1487404239');
            elem.parentNode.removeChild(elem);
        }
        
        
        
        
        
        
        
        
        //        <!-- Quote 2 -->
        //       <div class="item div-quote">
        //       <div class="row">
        //       <div class="col-sm-12 text-center">
        //           <img src="https://m.media-amazon.com/images/M/MV5BMTcyODU3NjI1NV5BMl5BanBnXkFtZTgwMzkwNjUyMjE@._V1_.jpg" class="d-block border-5 rounded border border-primary w-75 h-100 my-0 mx-auto" alt="Jim">
        //           <div class="carousel-caption">
        //           <h5 class="fs-1">Jim</h5>
        //       <p class="panozzi">Mi ci spupazzerei con sta roba, da sturbo questi panozzi.</p>
        //   </div>
        //       </div>
        //       </div>
        //       </div>
        //       <!-- Quote 3 -->
        //       <div class="item div-quote">
        //       <div class="row">
        //       <div class="col-sm-12 text-center">
        //           <img src="https://cdn-idoli-a.facciabuco.com/6/jackie-chan/idolo.jpg?v=0" class=" d-block rounded border border-5 border-danger w-50 h-100 my-0 mx-auto" alt="Jackie Chan">
        //           <div class="carousel-caption">
        //             <h5 class="fs-1">Jackie</h5>
    //             <p class=" sushi ">Meglio del sushi, complimenti!</p>
    //       </div>
    //       </div>
    //       </div>
    
    //       <!-- End of Quotes -->
    //       </div>
    //       </div> 
    //       </div>
    
    // const asyncAwaitExample5 = async function () {
    //   try {
        
    //     let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q= the highlights ')
        
    //     console.log(res)
    //     if (res.ok) {
    //       let data = await res.json()
    //       console.log('data', data)
    
          
    //       let listReference = document.querySelector('#list3')
          
    //       data.data.forEach((album) => {
    //           if(album.id === 99360002){
    //         listReference.innerHTML =
    //           listReference.innerHTML + 
    //           `
    //           <div class="col-12 justify-content-center mb-2 h-100" >
    //           <div id="${album.asin}" class="card h-100 m-0">
    //               <img src='https://images.genius.com/560e8f7037f423674a1f5bf7ab29e8d2.600x600x1.jpg' class="card-img-top h-75" alt="...">
    //               <div class="card-body text-center">
    //                 <h3 class="card-title">${album.title}</h3>
    //                 <h4 class="card-text">${album.artist.name}</h4>
                    
                    
    //               </div>
    //             </div>
    //         </div>
    //         `
             
    
    //       }})
    //     } else {
          
    //       console.log('Qualcosa è andato storto con la nostra chiamata!')
    //     }
    //   } catch (error) {
        
    //     console.log(error)
    //   }
    // }
    
    // asyncAwaitExample5()
    
    // const asyncAwaitExample6 = async function () {
    //   try {
        
    //     let res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q= translation ')
        
    //     console.log(res)
    //     if (res.ok) {
    //       let data = await res.json()
    //       console.log('data', data)
    
          
    //       let listReference = document.querySelector('#list3')
          
    //       data.data.forEach((album) => {
    //           if(album.id === 99360002){
    //         listReference.innerHTML =
    //           listReference.innerHTML + 
    //           `
    //           <div class="col-12 justify-content-center mb-2 h-100" >
    //           <div id="${album.asin}" class="card h-100 m-0">
    //               <img src='https://images.genius.com/560e8f7037f423674a1f5bf7ab29e8d2.600x600x1.jpg' class="card-img-top h-75" alt="...">
    //               <div class="card-body text-center">
    //                 <h3 class="card-title">${album.title}</h3>
    //                 <h4 class="card-text">${album.artist.name}</h4>
                    
                    
    //               </div>
    //             </div>
    //         </div>
    //         `
             
    
    //       }})
    //     } else {
          
    //       console.log('Qualcosa è andato storto con la nostra chiamata!')
    //     }
    //   } catch (error) {
        
    //     console.log(error)
    //   }
    // }
    
    // asyncAwaitExample6()
          