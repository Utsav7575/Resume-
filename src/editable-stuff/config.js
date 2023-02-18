// Navigation Bar SECTION
const navBar = {
  show: true,
};


// Main Body SECTION
const mainBody = {
  gradientColors: "#087E8B, #DC7F9B, #3C3C3C, #C1CAD6, #C1839F",
  firstName: "Shawn",
  middleName: "",
  lastName: "Soneja",
  message: "",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/shawn-don-soneja",
    },
    /*
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/hashirshoaeb",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/hashirshoaeb/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hashirshoaeb/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/hashirshoaeb/",
    },
    */
  ],
};

// Main Body SECTION
const musicBody = {
  gradientColors: "#CAE7B9, #F3DE8A, #EB9486, #7E7F9A, #97A7B3",
  firstName: "Shawn",
  middleName: "",
  lastName: "Soneja",
  message: "The artist",
  icons: [
    {
      image: "fa-soundcloud",
      url: "https://soundcloud.com/user-207519198",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/essexstreetsounds/",
    },
    /*
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/hashirshoaeb",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/hashirshoaeb/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hashirshoaeb/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/hashirshoaeb/",
    },
    */
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Headshot.jpg"),
  imageSize: 375,
  message:
    "I'm Shawn. I like trying new things. I like technology, among other things. What's up.",
  resume: "https://docs.google.com/document/d/e/2PACX-1vTFklxhTdEwKjuaOzn6HcZ-KHQ_hQrnxsjmvjKobkNy5dSOVej89_j8ZQBa_qlhwg/pub",
};

const musicAbout = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mountain.jpg"),
  imageSize: 375,
  message:
    "I'm Shawn. I also make music, and appreciate art.",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Some of My Work",
  gitHubUsername: "shawn-don-soneja", //i.e."johnDoe12Gh"
  reposLength: 5,
  specificRepos: ["Hexient","SFDC-Eintstein-Sentiment-Analysis", "sfdc-shawn-dev-ed","python-investments", "sportmaster","react-portfolio-page"],
};

const musicRepos = {
  show: true,
  heading: "Some of My Work",
  gitHubUsername: "shawn-don-soneja", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: ["SoundCloud", "Instagram"],
}

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Javascript", value: 90 },
    { name: "React", value: 85 },
    { name: "Python", value: 75 },
    { name: "Web Developement", value: 95 },
  ],
  softSkills: [
    { name: "Program / Project Management", value: 85 },
    { name: "Strategy Planning", value: 75 },
    { name: "Product Management", value: 75 },
  ],
  musicHardSkills: [
    { name: "Logic X", value: 90 },
    { name: "FL Studio", value: 85 },
    { name: "Mixing", value: 55 },
    { name: "Guitar", value: 69 },
    { name: "Piano", value: 55 },
    { name: "Music Theory", value: 55 },
  ],
  musicSoftSkills: [
    { name: "Songwriting", value: 35 },
    { name: "Vibes", value: 75 },
    { name: "Ideas", value: 85 },
  ],
};


// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm always open to collaboration, and am happy to chat. Feel free to drop me a line at",
  email: "shawn.soneja85@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, musicBody, musicAbout, about, repos, musicRepos, skills, leadership, getInTouch, experiences,  };
