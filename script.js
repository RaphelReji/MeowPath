
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
