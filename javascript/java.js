// function togglePopup(){
//     document.getElementById("popup-1").classList.toggle("active");
// }

// document.addEventListener("click", e => {
//     const isDropdownButton = e.target.matches('[data-dropdown-button]')
//     if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

//     let currentDropdown
//     if (isDropdownButton) {
//         currentDropdown = e.target.closest('[data-dropdown]')
//         currentDropdown.classList.toggle('active')
//     }

//     document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//         if (dropdown === currentDropdown) return
//         dropdown.classList.remove('active')
//     })
// })

const countElement = document.getElementById('count');

update();

function update(){
    fetch('https://api.countapi.xyz/update/dmaltzicode/test?amount=1')
        .then(res => res.json())
        .then(res => {
            countElement.innerHTML = res.value;
        })
}

function websiteVisits(response){
    document.querySelector("#visits").textContent = response.value;
}
