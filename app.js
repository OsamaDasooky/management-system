function Employee(id, name, dep, level,salary, img) {
    this.id = id;
    this.fullName = name;
    this.dep = dep;
    this.level = level;
    this.salary = salary(level);
    this.img = img;
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
    new Employee(1000, "Ghazi Samer", "Administration", "Senior"),
    new Employee(1001, "Lana Ali", "Finance", "Senior"),
    new Employee(1002, "Tamara Ayoub ", "Marketing", "Senior"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior"),
    new Employee(1004, "Omar Zaid", "Development", "Senior"),
    new Employee(1005, "Rana Saleh", "Development", "Junior"),
    new Employee(1006, "Ghazi Samer", "Finance", "Mid-Senior"),
]

for (let i = 0; i < employes.length; i++) {
    console.log(employes[i].print());
}
let arrTh = ["Id", "Name", "Department", "Level", "Salary"]

let theTable = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

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

document.querySelector("main").appendChild(theTable);
document.querySelector("table").appendChild(thead);
theTable.appendChild(tbody);

for (let i = 0; i < arrTh.length; i++) {
    let th = document.createElement("th");
    th.textContent = arrTh[i];
    thead.appendChild(th)
}
function add() {
        let row = document.createElement("tr");
        tbody.appendChild(row)
        let arrKey = Object.keys(employes[employes.length-1]).slice(0,5);
        for (j = 0; j < arrKey.length; j++){
            let td = document.createElement("td");
            row.appendChild(td);
            td.textContent = employes[employes.length-1][arrKey[j]];
        }
    } 

    for (let i = 0; i < employes.length; i++) {
        let row = document.createElement("tr");
        tbody.appendChild(row)
        let arrKey = Object.keys(employes[i]).slice(0,5);
        for (j = 0; j < arrKey.length; j++){
            let td = document.createElement("td");
            row.appendChild(td);
            td.textContent = employes[i][arrKey[j]];
        }
    } 
