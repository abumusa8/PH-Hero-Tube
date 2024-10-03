//load catagories
const loadCatagories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(response => response.json())
        .then(data => DisplayCatagories(data.categories))
        .catch(error => console.log(error))
}

//video loded
const Video = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(response => response.json())
        .then(data2 => VideoDisplay(data2.videos))
        .catch(error => console.log(error))
}

//video Display
const VideoDisplay = (data2) => {
    const video = document.getElementById('videos')
    data2.forEach(item => {
        console.log(item)
        const cird = document.createElement('div')
        cird.classList= "card card-compact "
        cird.innerHTML = `
         <figure>
    <img class"h-[100px] relative"
      src=${item.thumbnail}
      class"h-full w-full object-cover"
      alt="Shoes" />
      ${item.others.posted_date?.length == 0? "": `<span class="absolute right-2 bg-black rounded-md p-1 text-white">${item.others.posted_date}</span>` }
      
  </figure>
  <div class="py-2 px-0 flex gap-2">
   <div>
   <img class="w-10 h-10 rounded-full object-cover" src ="${item.authors[0].profile_picture}"/>
   </div>
   <div>
   <h2 class="font-bold">${item.title} </h2> 
    <div class="flex items-center gap-2">
          <p>${item.authors[0].profile_name} </p>
          ${item.authors[0].verified == true ? '<img class="w-4 h-4" src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000"/>' : "" }
          
    </div>
   <p> </p>
   </div> 

  </div>
        `
        video.appendChild(cird)
    })
}

//load catagories video
const loadCatavideo =(id) =>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/1003${id}`)
        .then(response => response.json())
        .then(data2 => DisplayCatagories(data2.category))
        .catch(error => console.log(error))

}


Video()

// Display Catagories
const DisplayCatagories = (data) => {
    const catacontainer = document.getElementById('catagories')
    //foreatch loop return item
    data.forEach(item => {
        //create button
        const button = document.createElement('div')
        button.innerHTML =
        `
        <button onclick="loadCatavideo(${item.category_id})" class="btn">
        ${item.category}
        </button>
        `


        button.onclick =('allert')
        //add button catagori
        catacontainer.appendChild(button)


    })
}

loadCatagories()