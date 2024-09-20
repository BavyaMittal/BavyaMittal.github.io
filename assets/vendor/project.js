/*!
 * 
 *   project.js - A JavaScript Code for project DOM Activity 5
 *   Author: Bavya Mittal <bavyamittal.com>
 *   Version: v2.0.11
 * 
 */


const projects = [
  {
    title:"OS161 Operating System Project",
    description: "A simplified operating system similar to Linux",
    tools: "C, Git",
    accomplishments: [
      "Developed and implemented key system calls, file I/O and process management, as part of an OS kernel",
      "Designed and implemented a custom virtual memory system, including on-demand paging and swapping, improving performance and resource allocation by 80%",
      "Collaborated using Git to manage and merge code changes, ensuring smooth integration of new features and bug fixes while using Software Development Life Cycle"
    ],
    image:"/assets/img/os161.png" ,
    date: "2023-03-30" 
  },

  {
    title:"Telecommunications website",
    description: "A telecommunications web app based on Django",
    tools: "Django, HTML, CSS, Bootstrap",
    accomplishments: [
      "Register and create an account, buy a business phone number, and additional features associated with number",
      "Buy additional minutes, and offer services such as VM queuing, put-on-hold, forwarding and IVR",
      "Buy multiple phone numbers and connect to centralized service for businesses",
      "Implement search criteria and purchasing custom phone numbers"
    ],
    image:"/assets/img/Telecommunications.png" ,
    date: "2021-04-01" 
  },
  {
    title:"Reversi Game",
    description: "A Reversi Game with AI to play opponent",
    tools: "C, Git",
    accomplishments: [
      "Designed a competitive AI for players to play against, ranking 10th on local scoreboard",
      "Followed software development cycle and adjusted features and objectives based on time-constraints",
      "Added functionality to game verifying legality of moves, possible move options, and representation of game status"
    ],
    image:"/assets/img/reversi.png" ,
    date: "2023-02-01" 
  },
  {
    title:"Ignis",
    description: "Developed a product that allowed neighbourhood fire alarms to connect in case of fire",
    tools: "Arduino, Java",
    accomplishments: [
      "Led a team of 4 students",
      "Won Best Beginner Hack for product",
      "Outlined project requirements and industry practices to create a well-functioning product"
    ],
    image:"/assets/img/ignis.png" ,
    date: "2021-10-08" 
  },
  {
    title:"GIS Mapping Project",
    description: "A mapping software similar to Google Maps",
    tools: "C++, GTK",
    accomplishments: [
      "Designed algorithm with two-opt & genetic algorithm to solve Travelling-Salesman problem and optimize results by 25%",
      "Admin can view specific tourist sites and see pop-up window with more information related to those sites"
    ],
    image:"/assets/img/GISMapping.png" ,
    date: "2022-03-30" 
  }
]

let currentIndex = 0; // Track the index of the last loaded project

// Function to load a project and inject it into the "recent-projects" div
function loadProject(index, count) {
  for (let i = index; i < index + count && i< projects.length; i++) {
    const project = projects[i];
  
  // Create project card dynamically
    const projectCard = `
      <div class="col s12 m6 l6">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img src="${project.image}" alt="${project.title}" class="activator" style="height: 100%; width: 100%" />
          </div>
          <div class="card-content">
            <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
            <p>${project.description}</p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
            <ul>
              <li><b>Tools:</b> ${project.tools}</li>
              ${project.accomplishments.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
  ` ;

  // Insert the project into the recent-projects div
    document.getElementById('recent-projects').innerHTML += projectCard;
  }
}

const projectsDisplayed =3; 

// Sort projects by date (most recent first) and load the first project
document.addEventListener('DOMContentLoaded', () => {
  projects.sort((a, b) => new Date(b.date) - new Date(a.date));
  loadProject(currentIndex, projectsDisplayed); // Load the most recent project
  currentIndex += projectsDisplayed
});

document.getElementById('load-more').addEventListener('click', function () {
  if (currentIndex < projects.length) {
    loadProject(currentIndex, projectsDisplayed);
    currentIndex += projectsDisplayed
  } 
  else {
    // If there are no more projects to load, disable the button
    this.disabled = true;
    this.textContent = 'No More Projects';
  }
});