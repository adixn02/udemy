let profile = document.querySelector('.header .flex .profile');
document.querySelector("#user-btn").onclick = () =>{
    profile.classList.toggle('active');
    search.classList.remove('active');
}

let searchbar = document.querySelector('form.search-form')
document.querySelector('#search-btn').onclick =()=>{
    searchbar.classList.toggle('active');
    profile.classList.remove('active')
}
let sidebar = document.querySelector('.side-bar')
let body =document.querySelector('body.active')
 
document.querySelector('#menu-btn').onclick =()=>{
    sidebar.classList.toggle('active');
    body.classList.toggle('active')
}

let sidebarRedbtn =document.querySelector('#close-btn')
document.querySelector('#close-btn').onclick =()=>
{
    sidebar.classList.remove('active');
    body.classList.remove('active');
}