const navLink = document.querySelectorAll('.navlink');
const hide = document.querySelectorAll('.hide');



//Navigation 'active' functionality.
for (let i=0; i < navLink.length; i++) {
  let activeIcon = navLink[i].nextElementSibling; //selects active icon
  navLink[i].addEventListener('click',()=> { //adds click listener to nav links
    for (let i=0; i < hide.length; i ++) { //loops through all icons and turns their active stylings 'off'
      hide[i].className = 'hide';
      navLink[i].className = 'navlink';
    }
    //turns the current selected icon stylings 'on' with bold text and a dot
    hide[i].className = 'active';
    event.target.className = 'active-link';

  });
}


//sets home icon as default when page loads
window.addEventListener('load', ()=> {
  hide[0].className = 'active';
});
