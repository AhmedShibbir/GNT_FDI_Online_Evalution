const signup = document.getElementById("LogIn");
const mainSection = document.getElementById("mainSection");
let count = 0;
signup.addEventListener("click", ()=>{
    // console.log("clicked");
    count += 1;
    if(count == 1){
        
        const modal = document.createElement("div");
        modal.setAttribute("class", "d-flex w-100 flex-column align-items-center bg-white bg-opacity-50 py-3");
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
        <div>
            <button class="btn btn-success" onclick="() => dashboard()">Login</button>
        </div>
        `;
        // mainSection.innerHTML = "";
        mainSection.appendChild(modal);
        count++;
    }
})