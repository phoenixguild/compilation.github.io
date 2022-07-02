



const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }
    else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});
var con = document.getElementById('cslider'),
    items = con.children,
    totalItems= con.children.length,
    current= 1,
    next= document.getElementById('next'),
    prev= document.getElementById('prev');

function arrange(c){
  
  let curr = c || current;
  
  Array.prototype.forEach.call(items, (item, i) => {
  
   
    
    if(i< curr){
      item.classList.add('p');
      item.style.left = '-'+item.offsetWidth/4+'px';
      
     item.style.zIndex = 'initial';
      if(item.classList.contains('n'))
          item.classList.remove('n');
      if(item.classList.contains('active'))
        item.classList.remove('active')
    }
    
    if(i == curr){
      item.classList.add('active');
      item.style.left = (con.offsetWidth/2-item.offsetWidth/2)+'px';
      if(item.classList.contains('n'))
          item.classList.remove('n');
      if(item.classList.contains('p'))
        item.classList.remove('p')
    }
    if(i > curr){
      item.style.zIndex =items.length - i;
      item.classList.add('n');
      item.style.left = (con.offsetWidth-item.offsetWidth/4)+'px';
      if(item.classList.contains('active'))
          item.classList.remove('active');
      if(item.classList.contains('p'))
        item.classList.remove('p')
      
    
    }
    
    
});
}

function goNext(){
  if(current < totalItems - 1) {
      current ++;
      arrange(current)                       
    }
}
function goPrev(){
  if(current > 0) {
      current --;
      arrange(current)                       
    }
}


arrange()



next.addEventListener('click', goNext);
prev.addEventListener('click', goPrev);
