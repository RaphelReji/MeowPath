
const root=document.documentElement;
document.querySelector(".toggle").onclick=()=>{
    root.style.setProperty("--bg-main","#FFFFFF")
    root.style.setProperty("--bg-secondary","#F8FAFC")
    root.style.setProperty(" --bg-tertiary", "#F1F5F9")
    root.style.setProperty("--surface","#FFFFFF")
    root.style.setProperty("--surface-hover","#F8FAFC")
    root.style.setProperty(" --surface-active"," #F1F5F9")
    root.style.setProperty(" --border","#E2E8F0")
    root.style.setProperty("--border-light","#E8EDF3")
    root.style.setProperty("--border-hover"," #CBD5E1")
    root.style.setProperty("--text-primary","#111827")
    root.style.setProperty("--text-secondary","#334155")
    root.style.setProperty(" --text-tertiary"," #64748B")
    root.style.setProperty("--text-muted","#94A3B8")
    root.style.setProperty("--primary","#4F46E5")
    root.style.setProperty("--text-secondary","#334155")
    root.style.setProperty(" --text-tertiary"," #64748B")
};

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
