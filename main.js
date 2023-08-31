let toggleBtn = document.getElementsByClassName('ri-menu-line')[0];
let navMenu = document.getElementsByClassName('nav-list')[0];
toggleBtn.addEventListener("click",(e)=>{
    navMenu.classList.toggle('active');
});
let inputTitle = document.querySelector(".input-title");
let inputDesc = document.querySelector(".input-desc");
let submitBtn = document.querySelector(".submit-btn");
let taskSection = document.querySelector(".tasks");
function addTask(){
    let taskTitle = inputTitle.value;
    let taskDesc = inputDesc.value;
    let createdBox = document.createElement("div");
    createdBox.classList.add("task-box");
    createdBox.innerHTML = `<h3 class="task-title">${taskTitle}</h3>
    <p class="task-desc">${taskDesc}</p>
    <div class="com-del">
        <a href="#" class="complete-btn">Complete</a>
        <a href="#" class="remove-btn">Delete</a>
    </div>`;
    taskSection.appendChild(createdBox)
    localStorage.setItem(taskTitle,taskDesc)
}
function loadBox(){
    for(let i=0; i<localStorage.length; i++){
        let oldBox = document.createElement("div");
        oldBox.classList.add("task-box");
        oldBox.innerHTML = `<h3 class="task-title">${localStorage.key(i)}</h3>
        <p class="task-desc">${localStorage.getItem(localStorage.key(i))}</p>
        <div class="com-del">
            <a href="#" class="complete-btn">Complete</a>
            <a href="#" class="remove-btn">Delete</a>
        </div>`;
        taskSection.appendChild(oldBox)
    }
}
submitBtn.addEventListener('click',addTask)
loadBox()
let dltBtn = document.querySelector(".remove-btn");
dltBtn.addEventListener('click',(e)=>{
    dltBox = e.target.parentElement.parentElement;
    dltElement = e.target.parentElement.parentElement.childNodes[0].outerText;
    localStorage.removeItem(dltElement);
    console.log(dltBox);
    dltBox.remove();
    console.log(dltBox);
    
})