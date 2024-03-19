AOS.init();

const sidebar = document.querySelector(".sidebar");
const sidebarItems = document.querySelectorAll(".sidebar a");
const sideBarListItems = document.querySelectorAll(".sidebar a");
const navbar = document.querySelector("nav");
const navbarItems = document.querySelectorAll("li a");
const body = document.querySelector("body");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const svgIconsPath = document.querySelectorAll(".svg-icons path");

//cover section
const profilePictureImg = document.querySelector(".profile-picture img");
const coverProfileInfoh1 = document.querySelector(".cover-profile-info h1");
const  coverProfileInfoh4 = document.querySelector(".cover-profile-info h4");
const coverProfileInfoP = document.querySelectorAll(".cover-profile-info p");
const contactOptionsSvg = document.querySelectorAll(".contact-options svg");

//about section
const AboutSectionh1 = document.querySelector("#aboutSection h1");
const aboutInfoP = document.querySelector(".about-info p");

//education section
const educationSectionh1 = document.querySelector("#educationSection h1");
const eduSectionP = document.querySelectorAll(".edu1 p");
const eduSectionh3 = document.querySelectorAll(".edu1 h3");
const edu2SectionP = document.querySelectorAll(".edu2 p");
const edu2Sectionh3 = document.querySelectorAll(".edu2 h3");
const lineSectionCircle = document.querySelectorAll(".line-section .circle");

//skills section
const skillssectionh1 = document.querySelector("#skillssection h1");
const skillsBox = document.querySelectorAll(".skills .box");

//project section
const projectssectionh1 = document.querySelector("#projectssection h1");

//cetificates section
const certificatesh1 = document.querySelector("#certificates h1");
const certificate1 = document.querySelector(".certificate-1 img");
const certificate2 = document.querySelector(".certificate-2 img");

//social profile
const socialProfilesh1 = document.querySelector("#socialProfiles h1");
const socialProfileBox = document.querySelectorAll(".social-profile .linkedin-profile");

//footer section
const footercontainer = document.querySelector(".container .footer");
const footerP = document.querySelectorAll(".footer p");

function showSidebar()
{
    sidebar.style.display = 'flex';
}

function closeSidebar()
{
    sidebar.style.display = 'none';
}

//close side bar if any menuitem clicked
sideBarListItems.forEach(item => {
    item.addEventListener('click', function(){
        closeSidebar();
    });
});

//show contact options on button click
const contactMeBtn = document.getElementById("contactMe-btn");
const contactOptions = document.querySelector('.contact-options');
contactMeBtn.addEventListener('click', function(event){
    event.preventDefault();
    contactOptions.style.display = 'flex';
});

document.addEventListener('click', function (event) {
    if (!contactMeBtn.contains(event.target) && !contactMeBtn.contains(event.target)) {
        contactOptions.style.display = 'none';
    }
});


function lightTheme()
{
    body.style.backgroundColor = 'white';
    sun.style.display = 'none';
    moon.style.display = 'inline-block';
    svgIconsPath.forEach(path => {
        path.style.fill = '#01192b';
    });

    navbar.style.backgroundColor = '#d2d2d2';
    navbarItems.forEach(path => {
        path.style.color = '#01192b';
    });

    sidebar.style.backgroundColor = '#d2d2d2';
    sidebarItems.forEach(path => {
        path.style.color = '#01192b';
    });

    //cover section theme change for light mode
    profilePictureImg.style.border = '5px solid #01192b';
    coverProfileInfoh1.style.color = '#01192b';
    coverProfileInfoh4.style.color = 'rgb(104, 175, 201)';
    coverProfileInfoP.forEach(textcolor => {
        textcolor.style.color = '#01192b';
    });
    contactOptionsSvg.forEach(contacticons => {
        contacticons.style.fill = '#01192b';
    });

    //about section theme change for light mode
    AboutSectionh1.style.color = '#01192b';
    aboutInfoP.style.color = '#01192b';

    //education section theme change for light mode
    educationSectionh1.style.color = '#01192b';
    eduSectionP.forEach(education => {
        education.style.color = '#01192b';
    });
    edu2SectionP.forEach(education2 => {
        education2.style.color = '#01192b';
    });

    eduSectionh3.forEach(educationh3 => {
        educationh3.style.color = '#08394d';
    });
    eduSectionh3.forEach(education2h3 => {
        education2h3.style.color = '#08394d';
    });
    edu2Sectionh3.forEach(education2h3 => {
        education2h3.style.color = '#08394d';
    });

    lineSectionCircle.forEach(lineCirleBg => {
        lineCirleBg.style.backgroundColor = '#08394d';
    });

    //skills section
    skillssectionh1.style.color = '#01192b';
    skillsBox.forEach(skillsBoxShadow => {
        skillsBoxShadow.style.boxShadow = '6px 6px 2px 0 #03233bdc';
    });

    //project section
    projectssectionh1.style.color = '#01192b';

    //certificates section
    certificatesh1.style.color = '#01192b';
    certificate1.style.border = '1px solid #01192b';
    certificate2.style.border = '1px solid #01192b';

    //social profile section
    socialProfilesh1.style.color = '#01192b';
    socialProfileBox.forEach(socialProfileBoxShadow => {
        socialProfileBoxShadow.style.boxShadow = '6px 6px 2px 0 #03233bdc';
    });

    //footer section
    footercontainer.style.backgroundColor = '#d9d9d9';
    footerP.forEach(footerPara => {
        footerPara.style.color = 'black';
    });



}

function darkTheme()
{
    body.style.backgroundColor = '#01192b';
    sun.style.display = 'inline-block';
    moon.style.display = 'none';
    svgIconsPath.forEach(path => {
        path.style.fill = 'white';
    });

    navbar.style.backgroundColor = '#012c4e46';
    navbarItems.forEach(path => {
        path.style.color = 'white';
    });

    sidebar.style.backgroundColor = '#012c4e46';
    sidebarItems.forEach(path => {
        path.style.color = 'white';
    });

    //cover section theme change for dark mode
    profilePictureImg.style.border = '5px solid rgb(183, 226, 243)';
    coverProfileInfoh1.style.color = 'white';
    coverProfileInfoh4.style.color = 'rgb(183, 226, 243)';
    coverProfileInfoP.forEach(textcolor => {
        textcolor.style.color = 'white';
    });
    contactOptionsSvg.forEach(contacticons => {
        contacticons.style.fill = 'white';
    });

    //about section theme change for dark mode
    AboutSectionh1.style.color = 'white';
    aboutInfoP.style.color = 'white';

    //education section theme change for dark mode
    educationSectionh1.style.color = 'white';
    eduSectionP.forEach(education => {
        education.style.color = 'white';
    });
    edu2SectionP.forEach(education2 => {
        education2.style.color = 'white';
    });

    eduSectionh3.forEach(educationh3 => {
        educationh3.style.color = 'rgb(183, 226, 243)';
    });
    eduSectionh3.forEach(education2h3 => {
        education2h3.style.color = 'rgb(183, 226, 243)';
    });
    edu2Sectionh3.forEach(education2h3 => {
        education2h3.style.color = 'rgb(183, 226, 243)';
    });

    lineSectionCircle.forEach(lineCirleBg => {
        lineCirleBg.style.backgroundColor = 'white';
    });

    //skills section
    skillssectionh1.style.color = 'white';
    skillsBox.forEach(skillsBoxShadow => {
        skillsBoxShadow.style.boxShadow = '6px 6px 2px 0 rgba(129, 206, 248, 0.5)';
    });

    //project section
    projectssectionh1.style.color = 'white';

    //certificates section
    certificatesh1.style.color = 'white';
    certificate1.style.border = '1px solid white';
    certificate2.style.border = '1px solid white';


    //social profile section
    socialProfilesh1.style.color = 'white';
    socialProfileBox.forEach(socialProfileBoxShadow => {
        socialProfileBoxShadow.style.boxShadow = '6px 6px 2px 0 rgba(129, 206, 248, 0.5)';
    });

    //footer section
    footercontainer.style.backgroundColor = '#001424';
    footerP.forEach(footerPara => {
        footerPara.style.color = 'rgb(210, 210, 210)';
    });
}


//smooth scrolling
const targetElement = document.querySelector('.container');

targetElement.scrollIntoView({ behavior: 'smooth' });