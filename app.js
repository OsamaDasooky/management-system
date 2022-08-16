function Employee(id, name, dep, level,img,salary ) {
    this.id = id;
    this.fullName = name;
    this.dep = dep;
    this.level = level;
    this.img = img;
    this.salary = salary(level);
    function salary(level) {
        switch (level) {
            case "Junior":
                return Math.round(Math.random() * 500 + 500);
                break;
            case "Mid-Senior":
                return Math.round(Math.random() * 500 + 1000);
                break;
            case "Senior":
                return Math.round(Math.random() * 500 + 1500);
                break;
        }
    }
    this.print = function () {
        return `Hello ${this.fullName} your salary is ${this.salary} JD`;
    }
}
let employes = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior","https://place-hold.it/200x200/ddd"),
    new Employee(1001, "Lana Ali", "Finance", "Senior","https://place-hold.it/200x200/ddd"),
    new Employee(1002, "Tamara Ayoub ", "Marketing", "Senior","https://place-hold.it/200x200/ddd"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior","https://place-hold.it/200x200/ddd"),
    new Employee(1004, "Omar Zaid", "Development", "Senior","https://place-hold.it/200x200/ddd"),
    new Employee(1005, "Rana Saleh", "Development", "Junior","https://place-hold.it/200x200/ddd"),
    new Employee(1006, "Ghazi Samer", "Finance", "Mid-Senior","https://place-hold.it/200x200/ddd")
]
// add employee
let addButton = document.getElementsByClassName("login-box")[0];        
document.querySelector(".add-btn button").addEventListener("click", function () {
    addButton.style.opacity ="1"
    addButton.style.zIndex="10"
    document.getElementsByTagName("main")[0].classList.add("blur")
})
let closeButton = document.getElementById("close");        
closeButton.addEventListener("click", function () {
    addButton.style.opacity ="0"
    addButton.style.zIndex = "-10"
    document.getElementsByTagName("main")[0].classList.remove("blur")
})

let submit = document.getElementById("add");        
const id = document.getElementsByName("id")[0];
const fullName = document.getElementsByName("fullName")[0];
const dep = document.getElementsByName("dep")[0];
const level = document.getElementsByName("level")[0];
submit.addEventListener("click", function () {
    employes.push(new Employee(id.value, fullName.value, dep.value, level.value));
    addButton.style.opacity ="0"
    addButton.style.zIndex = "-10"
    document.getElementsByTagName("main")[0].classList.remove("blur");
    add()
})
//create elements
for (let i = 0; i < employes.length; i++) {
    let card = document.createElement("div");
    document.querySelector("main .container").appendChild(card);
    card.classList.add("card")

    let cardImg = document.createElement("div");
    cardImg.classList.add("image")
    card.appendChild(cardImg);

    let cardText = document.createElement("div");
    cardText.classList.add("text")
    card.appendChild(cardText);

    let img = document.createElement("img");
    img.setAttribute("src",employes[i]["img"]);
    cardImg.appendChild(img);

    let nameText = document.createElement("h3");
    nameText.textContent = employes[i]["fullName"]
    cardText.appendChild(nameText)

    let idText = document.createElement("p");
    idText.textContent = `ID Number:${employes[i]["id"]}`
    cardText.appendChild(idText);

    let depText = document.createElement("p");
    depText.textContent = `Department:${employes[i]["dep"]}`
    cardText.appendChild(depText);

    let levelText = document.createElement("p");
    levelText.textContent = "Level: " + employes[i]["level"]
    cardText.appendChild(levelText);

    let salaryText = document.createElement("p");
    salaryText.textContent = `Salary:${employes[i]["salary"]}$`
    cardText.appendChild(salaryText);
}
function add() {
    let card = document.createElement("div");
    document.querySelector("main .container").appendChild(card);
    card.classList.add("card")
    
    let cardImg = document.createElement("div");
    cardImg.classList.add("image")
    card.appendChild(cardImg);

    let cardText = document.createElement("div");
    cardText.classList.add("text")
    card.appendChild(cardText);

    let img = document.createElement("img");
    img.setAttribute("src",employes[employes.length-1]["img"]);
    cardImg.appendChild(img);

    let nameText = document.createElement("h3");
    nameText.textContent = employes[employes.length-1]["fullName"]
    cardText.appendChild(nameText)

    let idText = document.createElement("p");
    idText.textContent = `ID Number:${employes[employes.length-1]["id"]}`
    cardText.appendChild(idText);

    let depText = document.createElement("p");
    depText.textContent = `Department:${employes[employes.length-1]["dep"]}`
    cardText.appendChild(depText);

    let levelText = document.createElement("p");
    levelText.textContent = `Level:${employes[employes.length-1]["level"]}`
    cardText.appendChild(levelText);

    let salaryText = document.createElement("p");
    salaryText.textContent = `Salary:${employes[employes.length-1]["salary"]}$`
    cardText.appendChild(salaryText);
        } 