function professional_style() {
    document.getElementById('page_style').setAttribute("href", "professional.css");
}

function sunset_style() {
    document.getElementById('page_style').setAttribute("href", "sunset.css");
}

// function load_style() {
//     page_style = localStorage.getItem("page_stylesheet_name");
//     if (page_style === null) {
//         page_style = "professional.css";
//     }
//     document.getElementById('page_style').setAttribute("href", page_style);
// }

// function professional_style() {
//     localStorage.setItem("page_stylesheet_name", "professional.css");
//     load_style();
// }

// function sunset_style() {
//     localStorage.setItem("page_stylesheet_name", "sunset.css");
//     load_style();
// }

// load_style() // load style immediately
