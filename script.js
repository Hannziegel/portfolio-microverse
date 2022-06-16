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

document.querySelector('#mobMenu').addEventListener('click', () => {
  mobileMenu();
});
document.querySelector('.menu-links').addEventListener('click', () => {
  mobileMenu();
});

/*    ------=========     Data    =========------    */

// object proprieties

const projectData = [
  {
    title: 'Multi Post Stories',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'featured image': './assets/imgs/projects/mainprojectimg.jpg',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    'link to live version': 'https://hannziegel.github.io/portfolio/',
    'link to source': 'https://github.com/Hannziegel/portfolio',
  },
  {
    title: 'Profesional Art Printing Data More',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    'featured image': './assets/imgs/snapshoot_portfolio_mobile.jpg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    'link to live version': 'https://hannziegel.github.io/portfolio/',
    'link to source': 'https://github.com/Hannziegel/portfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    'featured image': './assets/imgs/snapshoot_portfolio_mobile.jpg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    'link to live version': 'https://hannziegel.github.io/portfolio/',
    'link to source': 'https://github.com/Hannziegel/portfolio',
  },
  {
    title: 'Website Protfolio ',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    'featured image': './assets/imgs/snapshoot_portfolio_mobile.jpg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    'link to live version': 'https://hannziegel.github.io/portfolio/',
    'link to source': 'https://github.com/Hannziegel/portfolio',
  },
  {
    title: 'Profesional Art Printing Data More',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    'featured image': './assets/imgs/snapshoot_portfolio_mobile.jpg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    'link to live version': 'https://hannziegel.github.io/portfolio/',
    'link to source': 'https://github.com/Hannziegel/portfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    'featured image': './assets/imgs/snapshoot_portfolio_mobile.jpg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    'link to live version': 'https://hannziegel.github.io/portfolio/',
    'link to source': 'https://github.com/Hannziegel/portfolio',
  },
  {
    title: 'Website Protfolio ',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    'featured image': './assets/imgs/snapshoot_portfolio_mobile.jpg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    'link to live version': 'https://hannziegel.github.io/portfolio/',
    'link to source': 'https://github.com/Hannziegel/portfolio',
  },
];

/*    ------=========     Portfolio Section    =========------    */

// create portfolio section, add portfolio class to use in css, add portfolio id to use in js
const porfolioSection = document.createElement('SECTION');
porfolioSection.classList.add('portfolio');
porfolioSection.id = 'portfolio';

// place porftolio section before about section on html
const mainPosition = document.getElementById('main');
const aboutSectionPosition = document.getElementById('about');
mainPosition.insertBefore(porfolioSection, aboutSectionPosition);

// -- Porfolio Title -- //

// Create portfolio-title div and put h2 and div inside

const porfolioTitle = document.createElement('div');
const portfolioTitleh2 = document.createElement('h2');
const porfolioTitleLine = document.createElement('div');

// Add css classes to use in css and add content

porfolioTitle.classList.add('portfolio-title');
porfolioTitleLine.classList.add('portfolio-line');
portfolioTitleh2.textContent = 'My Recent Works';

// -- Main Project -- //

// Create main-project container div,  article, a, img, info div (h3, p, ul, li, button)

const mainProjectContainer = document.createElement('div');
const mainProjectArticle = document.createElement('ARTICLE');
const mainProjectImgContainer = document.createElement('a');
const mainProjectImg = document.createElement('img');
const mainProjectInfoContainer = document.createElement('div');
const mainProjectInfoH3 = document.createElement('h3');
const mainProjectInfoP = document.createElement('p');
const mainProjectUl = document.createElement('ul');
const mainProjectButton = document.createElement('button');

// Add css classes and ids to use in css and content

mainProjectContainer.classList.add('main-project-container');
mainProjectArticle.id = 'main-project';
mainProjectImgContainer.classList.add('project-img');
mainProjectImg.src = projectData[0]['featured image'];
mainProjectInfoContainer.classList.add('project-info');
mainProjectInfoH3.textContent = projectData[0].title;
mainProjectInfoP.textContent = projectData[0].description;
mainProjectButton.classList.add('seeButton');
mainProjectButton.id = '0';
mainProjectButton.textContent = 'See Project';

// Add li to Ul main project

projectData[0].technologies.forEach((element) => {
  const mainProjectLi = document.createElement('li');
  mainProjectUl.appendChild(mainProjectLi);
  mainProjectLi.textContent = element;
});

// -- Other Projects -- //

// Create other-projects container div,  article, a, img, info div (h3, p, ul, li, button)

const flexContainer = document.createElement('div');
const projectsCointainer = document.createElement('div');

projectData.forEach((element, index) => {
  if (index > 0) {
    // Create projects article,h3,p, ul, button

    const projectsArticle = document.createElement('ARTICLE');
    const projectsArticleH3 = document.createElement('h3');
    const projectsArticleP = document.createElement('p');
    const projectsArticleUl = document.createElement('ul');
    const projectsArticleButton = document.createElement('button');

    // Add classes and ids to use in css

    projectsArticle.classList.add('other-projects');
    projectsArticleH3.textContent = element.title;
    projectsArticleP.textContent = element.description;
    projectsArticleButton.classList.add('seeButton');
    projectsArticleButton.id = index;
    projectsArticleButton.textContent = 'See Project';

    // Add li to Ul main project

    projectData[index].technologies.forEach((element) => {
      const projectsArticleLi = document.createElement('li');
      projectsArticleUl.appendChild(projectsArticleLi);
      projectsArticleLi.textContent = element;
    });

    // append elements
    projectsCointainer.appendChild(projectsArticle);
    projectsArticle.append(
      projectsArticleH3,
      projectsArticleH3,
      projectsArticleP,
      projectsArticleUl,
      projectsArticleButton,
    );
  }
});

// Add classes and ids to use in css

flexContainer.classList.add('test');
projectsCointainer.classList.add('article-container');

// append to the html

porfolioSection.append(porfolioTitle, mainProjectContainer, flexContainer);
porfolioTitle.append(portfolioTitleh2, porfolioTitleLine);
mainProjectContainer.appendChild(mainProjectArticle);
mainProjectArticle.append(mainProjectImgContainer, mainProjectInfoContainer);
mainProjectImgContainer.appendChild(mainProjectImg);
mainProjectInfoContainer.append(
  mainProjectInfoH3,
  mainProjectInfoP,
  mainProjectUl,
  mainProjectButton,
);
flexContainer.appendChild(projectsCointainer);

/*    ------=========     Pop Up    =========------    */

// click button

const addButton = document.querySelectorAll('.seeButton');

function createPopUp(event) {
  // create popUp div, append it to the main section, add css style class
  const projectPopUp = document.createElement('div');
  document.body.querySelector('main').appendChild(projectPopUp);
  projectPopUp.classList.add('projectPopUp');

  // create elements

  const projectTitleContainer = document.createElement('div');
  const projectTitle = document.createElement('h2');
  const projectCloseContainner = document.createElement('a');
  const projectCloseIcon = document.createElement('i');
  const projectUl = document.createElement('ul');
  const projectImg = document.createElement('img');
  const projectInfoContainer = document.createElement('div');
  const projectDescription = document.createElement('p');
  const buttonContainner = document.createElement('div');
  const seeLiveButton = document.createElement('a');
  const seeSourceButton = document.createElement('a');
  const projectImgInfoContainer = document.createElement('div');
  // append elements inside the div

  projectPopUp.append(
    projectTitleContainer,
    projectUl,
    projectImgInfoContainer,
  );
  projectTitleContainer.append(projectTitle, projectCloseContainner);
  projectImgInfoContainer.append(projectImg, projectInfoContainer);
  projectInfoContainer.append(projectDescription, buttonContainner);
  buttonContainner.append(seeLiveButton, seeSourceButton);
  projectCloseContainner.appendChild(projectCloseIcon);

  // id for buttons

  const projectButtonId = parseInt(event.target.id, 10);

  // add content to the elements

  projectTitleContainer.classList.add('projectTitleContiner');
  projectTitle.textContent = projectData[projectButtonId].title;
  projectImgInfoContainer.classList.add('projectImgInfoContainer');
  projectInfoContainer.classList.add('projectInfoContainer');
  projectDescription.textContent = projectData[projectButtonId].description;
  projectImg.src = projectData[projectButtonId]['featured image'];
  buttonContainner.classList.add('buttonContainner');
  seeLiveButton.href = projectData[projectButtonId]['link to live version'];
  seeLiveButton.target = '_blank';
  seeLiveButton.textContent = 'See Live';
  seeLiveButton.id = 'seeLiveButton';
  seeSourceButton.href = projectData[projectButtonId]['link to source'];
  seeSourceButton.target = '_blank';
  seeSourceButton.textContent = 'See Source';
  seeSourceButton.id = 'seeSourceButton';

  // Add Li to Ul

  projectData[projectButtonId].technologies.forEach((element) => {
    const projectLi = document.createElement('li');
    projectUl.appendChild(projectLi);
    projectLi.textContent = element;
  });

  // close item

  projectCloseIcon.classList.add('material-icons');
  projectCloseIcon.textContent = 'close';
  projectCloseContainner.id = 'close-Button';

  // close icon function

  const clickCloseButton = document.getElementById('close-Button');
  function closeButton() {
    projectPopUp.remove();
  }
  clickCloseButton.addEventListener('click', closeButton);
}

addButton.forEach((btn) => {
  btn.addEventListener('click', createPopUp);
});

/*    ------=========     Form Validation   =========------    */

// show message
function warningMessage(input, message, type) {
  const messageContent = input.parentNode.parentNode.querySelector('.warningMessage');
  messageContent.innerText = message;
  input.parentNode.className = type ? 'sucess' : 'error';
  return type;
}

// get contact form from html
const contactForm = document.forms[0];

// Prevent form to be sent if email has Uppercase chars
contactForm.addEventListener('submit', (event) => {
  warningMessage(contactForm.email, '', true);
  if (contactForm.email.value.match(/[A-Z]/)) {
    warningMessage(contactForm.email, 'Email must be in lowercase, no Uppercase character allowed. Form not sent! Please rewrite your email in lowercase.', false);
    event.preventDefault();
  }
});