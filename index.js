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
            <input class="px-5" type="text" placeholder="Enter User Name">
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
function modalOperation(){
    const modalLogin = document.getElementById("modalLogin");
    modalLogin.addEventListener("click",()=>{
    console.log("clicked");
});
    const modalCancel = document.getElementById("modalCancel");
    modalCancel.addEventListener("click",()=>{
    mainSection.removeChild(modal);
    count = 0;
});
}

