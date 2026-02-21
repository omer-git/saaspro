
const defaultSettings={theme:"default",direction:1};

function loadSettings(){
 return JSON.parse(localStorage.getItem("saas_settings"))||defaultSettings;
}

function saveSettings(s){
 localStorage.setItem("saas_settings",JSON.stringify(s));
}

function applySettings(s){
 document.documentElement.setAttribute("data-theme",s.theme);
 const dir=s.direction===0?"rtl":"ltr";
 document.documentElement.setAttribute("dir",dir);
}

document.addEventListener("DOMContentLoaded",()=>{
 let s=loadSettings();
 applySettings(s);

 document.querySelectorAll("[data-theme]").forEach(btn=>{
  btn.onclick=()=>{
   s.theme=btn.dataset.theme;
   saveSettings(s);
   applySettings(s);
  };
 });

 document.getElementById("directionSwitch").onclick=()=>{
  s.direction=s.direction===0?1:0;
  saveSettings(s);
  applySettings(s);
 };
});
