let profile = document.querySelector('.header .flex .profile');
let sidebarRedbtn =document.querySelector('#close-btn')
let searchbar = document.querySelector('form.search-form')
let sidebar = document.querySelector('.side-bar')
let body =document.querySelector('body.active')
let userBTN = document.querySelector('#user-btn')
let searchBTN = document.querySelector('#search-btn')
let menubtn = document.querySelector('#menu-btn')
let coursePlaylist = document.querySelector('.playlistcourses')

userBTN.onclick = () =>{
    profile.classList.toggle('active');
    search.classList.remove('active');
}


searchBTN.onclick =()=>{
    searchbar.classList.toggle('active');
    profile.classList.remove('active')
}

 
menubtn.onclick =()=>{
    sidebar.classList.toggle('active');
    body.classList.toggle('active')
}

document.querySelector('#close-btn').onclick =()=>
{
    sidebar.classList.remove('active');
    body.classList.remove('active');
}

function displaycards(data){
data.map((item,index)=>{

    let card = document.createElement('div');
    card.classList.add('playlist');
    card.innerHTML = `
     <div class="tutor">
                <img src="${item.courseIMG}" alt="">
                <div class="info">
                    <h3 class="name">${item.username}</h3>
                    <p class="joining-date">${item.joiningDate}</p>
                </div>
            </div>
            <img src="${item.userIMG}" alt="" class="post">
            <span class="imga-over">10 vedios</span>
            <h2 class="thick-dark">${item.coursename}</h2>
            <button class="blue-btn" onclick="viewPlaylist(${index})">view playlist</button>
            `
            coursePlaylist.appendChild(card)
})
}
function viewPlaylist(index) {
    localStorage.setItem('selectedCourse', index); 
    window.location.href = '../course.html'; 
  }

async function getdata() {
    try {
        let response = await fetch("./assets/data.json");
        let data = await response.json();
        displaycards(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
getdata();
