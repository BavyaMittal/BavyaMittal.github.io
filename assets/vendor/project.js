/*!
 * 
 *   project.js - A JavaScript Code for project DOM Activity 5
 *   Author: Bavya Mittal <bavyamittal.com>
 *   Version: v2.0.11
 * 
 */

document.addEventListener('DOMContentLoaded', function () {
    // Get all project cards and convert the NodeList to an array
    const projectCards = Array.from(document.querySelectorAll('#projects .col.s12.m6.l6'));
    
    // Sort the projects by their data-date attribute (newest first)
    projectCards.sort((a, b) => {
      const dateA = new Date(a.getAttribute('data-date'));
      const dateB = new Date(b.getAttribute('data-date'));
      return dateB - dateA;
    });
  
    let currentIndex = 0; // Start with the first project
    const totalProjects = projectCards.length;
  
    // Hide all projects initially
    projectCards.forEach(card => card.classList.add('hidden'));
  
    // Function to show a project by index
    function showProject(index) {
      if (index < totalProjects) {
        projectCards[index].classList.remove('hidden');
      }
    }
  
    // Show the first 3 projects on page load
    for (let i = 0; i < 2 && i < totalProjects; i++) {
      showProject(i);
      currentIndex++;
    }
  
    // Handle "Load More" button click
    document.getElementById('load-more').addEventListener('click', function () {
      const projectsLeft = totalProjects - currentIndex;

      for (let i = 0; i < projectsLeft; i++) {
        showProject(currentIndex);
        currentIndex++;
      }
  
      // Disable button if no more projects
      if (currentIndex >= totalProjects) {
        this.disabled = true;
        this.textContent = 'No More Projects';
      }
    });
  });
  