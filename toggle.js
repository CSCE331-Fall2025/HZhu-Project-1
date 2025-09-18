function load_style() {
    page_style = localStorage.getItem("page_stylesheet_name");
    if (page_style === null) {
        page_style = "blue.css";
    }
    document.getElementById('page_style').setAttribute("href", page_style);
}

function blue_style() {
    localStorage.setItem("page_stylesheet_name", "blue.css");
    load_style();
}

function sunset_style() {
    localStorage.setItem("page_stylesheet_name", "sunset.css");
    load_style();
}

load_style() // load style immediately
