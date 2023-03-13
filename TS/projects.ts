// skapa en lista med bilderna 

export function createProjectCards (){
    let projectContainer = document.querySelector(".projects-container-desktop") as HTMLElement;
    let projectCard = document.createElement("div") as HTMLDivElement;
    projectCard.classList.add('project-card');
    projectContainer.appendChild(projectCard);
};



