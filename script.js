const themeToggle = document.getElementById("theme-toggle");


// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
}


// Toggle theme
themeToggle.addEventListener("click", () => {

    const html = document.documentElement;

    const currentTheme =
        html.getAttribute("data-theme");

    const newTheme =
        currentTheme === "light" ? "dark" : "light";

    html.setAttribute("data-theme", newTheme);

    // Save theme
    localStorage.setItem("theme", newTheme);

});

//choose tutorials

const godotRecommend=document.getElementById("godot-recommend-card");
const webRecommend=document.getElementById("web-recommend-card");
const aiRecommend=document.getElementById("ai-recommend-card");
const mobileRecommend=document.getElementById("mobile-recommend-card");
const desktopRecommend=document.getElementById("desktop-recommend-card");
const automationRecommend=document.getElementById("automation-recommend-card");
const dataRecommend=document.getElementById("data-recommend-card");
const hardwareRecommend=document.getElementById("hardware-recommend-card");

const allBtn=document.getElementById("choose-all-btn");
allBtn.addEventListener("click",function(){
    godotRecommend.style.display="block";
    webRecommend.style.display="block";
    aiRecommend.style.display="block";
    mobileRecommend.style.display="block";
    desktopRecommend.style.display="block";
    automationRecommend.style.display="block";
    dataRecommend.style.display="block";
    hardwareRecommend.style.display="block";
});

const webBtn=document.getElementById("choose-web-btn");
webBtn.addEventListener("click",function(){
     webRecommend.style.display="block";
    godotRecommend.style.display="none";
    aiRecommend.style.display="none";
    mobileRecommend.style.display="none";
    desktopRecommend.style.display="none";
    automationRecommend.style.display="none";
    dataRecommend.style.display="none";
    hardwareRecommend.style.display="none";
});
