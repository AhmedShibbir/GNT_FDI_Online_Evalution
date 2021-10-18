const signup = document.getElementById("LogIn");
const mainSection = document.getElementById("mainSection");
let count = 0;
signup.addEventListener("click", ()=>{
    // console.log("clicked");
    count += 1;
    if(count == 1){
        
        const modal = document.createElement("div");
        modal.setAttribute("class", "d-flex w-50 flex-column align-items-center bg-white py-3 rounded");
        modal.setAttribute("id", "modal")
        modal.innerHTML = `
        <h3 class="text-warning border-2 border-success border-bottom">Login part</h3>
        <div class="d-flex flex-row justify-content-between">
            <p class="px-3 mx-3 fw-bold">User Name: </p>
            <input id = "userName" class="px-5" type="text" placeholder="Enter User Name">
        </div>
        <div class="d-flex flex-row my-3">
            <p class="px-4 mx-3 fw-bold">Password: </p>
            <input class="px-5" type="password" placeholder = "Enter password">
        </div>
        <div class ="d-flex flex-row px-5">
            <button id ="modalLogin"class="btn btn-success ms-5 fw-bold">Login</button>
            <button id = "modalCancel" class="btn btn-danger ms-3 fw-bold">Cancel</button>
        </div>
        `;
        // mainSection.innerHTML = "";
        mainSection.appendChild(modal);
        count++;
        
    }
    modalOperation();
    
});
// modal operation part 
function modalOperation(){
       const userName = document.getElementById("userName").value;
        console.log(userName);
    const modalLogin = document.getElementById("modalLogin");
    modalLogin.addEventListener("click",()=>{
        // dashboard part 
        mainSection.removeChild(modal);
        const dashboard = document.createElement("div");
        dashboard.setAttribute("class", "d-flex flex-row container mx-auto w-75 bg-secondary bg-gradient text-white pe-0");
        dashboard.setAttribute("id", "dashboard");
        dashboard.innerHTML = `
            <div class=" d-flex flex-column w-25 py-5 align-items-center">
                <a id = "customerList"class="text-white text-decoration-none my-5 px-5 py-2 bg-success bg-opacity-50 fw-bold border" src="/index.html">Customer List</a>
                <a id = "addCustomer" class="text-white text-decoration-none my-5 px-5 py-2 bg-success bg-opacity-50 fw-bold border" src="/index.html">Add Customer</a>
                <a id ="exit" class="text-white text-decoration-none my-5 px-5 py-2 bg-success bg-opacity-50 fw-bold border" src="/index.html">Exit</a>
            </div>
            <div class=" bg-success w-75 d-flex py-5 flex-column align-items-center">
                <h1>Welcome, There!</h1>
                <p>Thanks for being with us!</p>
            </div>
        `;
        const body = document.getElementById("body");
        body.appendChild(dashboard);
        dashboardOperation();
    });
    const modalCancel = document.getElementById("modalCancel");
    modalCancel.addEventListener("click",()=>{
    mainSection.removeChild(modal);
    count = 0;
});
}
function dashboardOperation(){
    const dashboard = document.getElementById("dashboard");
    const exit = document.getElementById("exit");
    exit.addEventListener("click", ()=>{
        document.getElementById("body").removeChild(dashboard);
        count=0;
    });
    
}

