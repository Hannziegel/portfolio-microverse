/*    ------=========     Menu    =========------    */

function mobileMenu() {
  // Change the height of Header to cover all screen
  document.querySelector('.collapse').classList.toggle('header-menu');
  // Add hide class to burguer-icon, logo and remove for .close-icon
  document.querySelector('.logo').classList.toggle('hide');
  document.querySelector('.burguer-icon').classList.toggle('hide');
  document.querySelector('.close-icon').classList.toggle('hide');
  // Change display none to display flex in menu-links, add flex-direction column, add border-botton
  document.querySelector('.right').classList.toggle('right-menu');
  document.querySelector('.menu-links').classList.toggle('menu-links-menu');
  document
    .querySelectorAll('.menu-link')
    .forEach((element) => element.classList.toggle('menu-link-menu'));
}
document.querySelector('body').addEventListener('click', (event)=>{
  console.log(event.target);
});
document.querySelector('#mobMenu').addEventListener('click', () => {
  mobileMenu();
});
document.querySelector('.menu-links').addEventListener('click', () => {
  mobileMenu();
});

/*    ------=========     Data    =========------    */

// object proprieties

let projectData = [
  { 'title':'Multi Post Stories',
    'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 
    'featured image':'./assets/imgs/snapshoot_portfolio_mobile.jpg',
    'technologies':['html','Bootstrap','Ruby on rails'],
    'link to live version':'https://hannziegel.github.io/portfolio/', 
    'link to source': 'https://github.com/Hannziegel/portfolio'
  },
  { 'title':'Profesional Art Printing Data More',
    'description':'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard', 
    'featured image':'./assets/imgs/snapshoot_portfolio_mobile.jpg',
    'technologies':['html','Bootstrap','Ruby'],
    'link to live version':'https://hannziegel.github.io/portfolio/', 
    'link to source': 'https://github.com/Hannziegel/portfolio'
  },
  { 'title':'Data Dashboard Healthcare',
    'description':'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard', 
    'featured image':'./assets/imgs/snapshoot_portfolio_mobile.jpg',
    'technologies':['html','Bootstrap','Ruby'],
    'link to live version':'https://hannziegel.github.io/portfolio/', 
    'link to source': 'https://github.com/Hannziegel/portfolio'
  },
  { 'title':'Website Protfolio ',
    'description':'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard', 
    'featured image':'./assets/imgs/snapshoot_portfolio_mobile.jpg',
    'technologies':['html','Bootstrap','Ruby'],
    'link to live version':'https://hannziegel.github.io/portfolio/', 
    'link to source': 'https://github.com/Hannziegel/portfolio'
  },
  { 'title':'Website Protfolio ',
    'description':'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard', 
    'featured image':'./assets/imgs/snapshoot_portfolio_mobile.jpg',
    'technologies':['html','Bootstrap','Ruby'],
    'link to live version':'https://hannziegel.github.io/portfolio/', 
    'link to source': 'https://github.com/Hannziegel/portfolio'
  },
  { 'title':'Website Protfolio ',
    'description':'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard', 
    'featured image':'./assets/imgs/snapshoot_portfolio_mobile.jpg',
    'technologies':['html','Bootstrap','Ruby'],
    'link to live version':'https://hannziegel.github.io/portfolio/', 
    'link to source': 'https://github.com/Hannziegel/portfolio'
  },
  { 'title':'Website Protfolio ',
    'description':'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard', 
    'featured image':'./assets/imgs/snapshoot_portfolio_mobile.jpg',
    'technologies':['html','Bootstrap','Ruby'],
    'link to live version':'https://hannziegel.github.io/portfolio/', 
    'link to source': 'https://github.com/Hannziegel/portfolio'
  }
]

/*    ------=========     Pop Up    =========------    */

//click button

const addButton = document.querySelectorAll('.seeButton');

addButton.forEach((btn)=> {
  btn.addEventListener('click', createPopUp)
});

function createPopUp (event){
  //create popUp div, append it to the main section, add css style class
  console.log(event.target)
  let projectPopUp = document.createElement('div');
  document.body.querySelector('main').appendChild(projectPopUp)
  projectPopUp.classList.add('projectPopUp')

  //create elements

  let projectTitle = document.createElement('h2'),
      projectCloseContainner = document.createElement('a'),
      projectCloseIcon = document.createElement('i'),
      projectUl = document.createElement('ul'),
      projectImg = document.createElement('img'),
      projectDescription = document.createElement('p'),
      buttonContainner = document.createElement('div'),
      seeLiveButton = document.createElement('a'),
      seeSourceButton = document.createElement('a')

  //append elements inside the div

  projectPopUp.append(projectTitle, projectCloseContainner, projectCloseIcon, projectUl, projectImg, projectDescription, buttonContainner)
  buttonContainner.append(seeLiveButton, seeSourceButton)
  projectCloseContainner.appendChild(projectCloseIcon)

  //id for buttons

  const projectButtonId = parseInt(event.target.id, 10) 

  //add content to the elements 

  projectTitle.textContent = projectData[projectButtonId]['title']
  projectDescription.textContent = projectData[projectButtonId]['description']
  projectImg.src = projectData[projectButtonId]['featured image']
  buttonContainner.classList.add('buttonContainner')
  seeLiveButton.href = projectData[projectButtonId]['link to live version']
  seeLiveButton.target = '_blank'
  seeLiveButton.textContent = 'See Live'
  seeSourceButton.href = projectData[projectButtonId]['link to source']
  seeSourceButton.target = '_blank'
  seeSourceButton.textContent = 'See Source'

  //Add Li to Ul

  projectData[projectButtonId]['technologies'].forEach( (element, index) => {
    projectLi = document.createElement('li')
    projectUl.appendChild(projectLi)
    projectLi.textContent = projectData[projectButtonId].technologies[index];
  })


  //close item

  projectCloseIcon.classList.add('material-icons')
  projectCloseIcon.textContent = 'close'
  projectCloseContainner.id = 'close-Button'

  //close icon function

  const clickCloseButton = document.getElementById('close-Button');
  clickCloseButton.addEventListener('click', closeButton)
  function closeButton(){
    projectPopUp.remove()
  }
}