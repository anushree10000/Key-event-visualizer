const container = document.getElementById("keyContainer");
window.addEventListener("keydown",(e)=>{
    container.innerHTML = generateHTML(e.key,e.code,e.key.charAt
        (0));
})
function generateHTML(key,code,keyCode){
    return `
    <div class="key-container">
<h4>Key</h4>
<div class="key-content">${key === " " ? "Space" : key}
</div>
</div>
<div class="key-container">
<h4>Key</h4>
<div class="key-content">${code}
 </div>
</div>

<div class="key-container">
<h4>Key</h4>
<div class="key-content">${keyCode}
 </div>
</div>
` ;
    }