const map = document.querySelector("svg");

const panels = document.querySelectorAll("path");
const polygons = document.querySelectorAll("polygon");
const rects = document.querySelectorAll("rect");
const circles = document.querySelectorAll("circle");
const ellipsis = document.querySelectorAll("ellipsis");

const sidePanel = document.querySelector(".side-panel");
const container =  document.querySelector(".side-panel .container");
const closeBtn = document.querySelector(".close-btn");
const loading = document.querySelector(".loading");
const zoomInBtn = document.querySelector(".zoom-in");
const zoomOutBtn = document.querySelector(".zoom-out");
const zoomValueOutput = document.querySelector(".zoom-value");




panels.addEventListener("mouseenter", function() {
    const classList = [...this.classList].join('.');
    console.log(classList);
    const selctor = '.' + classList;

    const matchingElements = document.querySelectorAll(selector);

    matchingElements.forEach(e1 => e1.style.fill = "#c99aff")


});

panels.addEventListener("mouseout", function() {
    const classList = [...this.classList].join('.');
    console.log(classList);
    const selctor = '.' + classList;

    const matchingElements = document.querySelectorAll(selector);

    matchingElements.forEach(e1 => e1.style.fill = "#443d4b")

});
polygons.addEventListener("mouseenter", function() {
    const classList = [...this.classList].join('.');
    console.log(classList);
    const selctor = '.' + classList;

    const matchingElements = document.querySelectorAll(selector);

    matchingElements.forEach(e1 => e1.style.fill = "#c99aff")


});

polygons.addEventListener("mouseout", function() {
    const classList = [...this.classList].join('.');
    console.log(classList);
    const selctor = '.' + classList;

    const matchingElements = document.querySelectorAll(selector);

    matchingElements.forEach(e1 => e1.style.fill = "#443d4b")

});

rects.addEventListener("mouseenter", function() {
    const classList = [...this.classList].join('.');
    console.log(classList);
    const selctor = '.' + classList;

    const matchingElements = document.querySelectorAll(selector);

    matchingElements.forEach(e1 => e1.style.fill = "#c99aff")


});

rects.addEventListener("mouseout", function() {
    const classList = [...this.classList].join('.');
    console.log(classList);
    const selctor = '.' + classList;

    const matchingElements = document.querySelectorAll(selector);

    matchingElements.forEach(e1 => e1.style.fill = "#443d4b")

});


circles.addEventListener("mouseenter", function() {
    const classList = [...this.classList].join('.');
    console.log(classList);
    const selctor = '.' + classList;

    const matchingElements = document.querySelectorAll(selector);

    matchingElements.forEach(e1 => e1.style.fill = "#c99aff")


});

circles.addEventListener("mouseout", function() {
    const classList = [...this.classList].join('.');
    console.log(classList);
    const selctor = '.' + classList;

    const matchingElements = document.querySelectorAll(selector);

    matchingElements.forEach(e1 => e1.style.fill = "#443d4b")

});

ellipsis.addEventListener("mouseenter", function() {
    const classList = [...this.classList].join('.');
    console.log(classList);
    const selctor = '.' + classList;

    const matchingElements = document.querySelectorAll(selector);

    matchingElements.forEach(e1 => e1.style.fill = "#c99aff")


});

ellipsis.addEventListener("mouseout", function() {
    const classList = [...this.classList].join('.');
    console.log(classList);
    const selctor = '.' + classList;

    const matchingElements = document.querySelectorAll(selector);

    matchingElements.forEach(e1 => e1.style.fill = "#443d4b")

});

// you will need to add click event listeners for remaining svg vector types as well/ e.g. rect, polygon, etc
panels.addEventListener("click", function(e){
    loading.innerText = "Loading...";
    container.classList.add("hide");
    loading.classList.remove("hide");


    let clickedPanelName;

    if(e.target.hasAttribute("name")){
        clickedPanelName = e.target.getAttribute("name");

    } else{
        clickedPanelName = e.target.classList.value;
    }

    sidePanel.classList.add("side-panel-open");
    // here you can add code to add data in the side panel, however you want.

    // currently showing no data
    loading.innerText = "No data to show."


});


closeBtn.addEventListener("click", ()=>{
    sidePanel.classList.remove("side-panel-open")
});

let zoomValue = 100;
zoomOutBtn.disabled = true;

zoomInBtn.addEventListener("click", ()=>{
    zoomOutBtn.disabled = false;
    zoomValue += 100;

    if(zoomValue < 500){
        zoomInBtn.disabled = false;
    } else{
        zoomInBtn.disabled = true;
    }

    map.style.width = zoomValue + "vw";
    map.style.height = zoomValue + "vh";

    zoomValueOutput.innerText = zoomValue + "%";
    console.log("zoom in");


});

zoomOutBtn.addEventListener("click", () => {
    zoomInBtn.disabled = false;

    zoomValue -= 100;
    if(zoomValue > 100){
        zoomOutBtn.disabled = false;
    }else{
        zoomOutBtn.disabled = true;
    }

    map.style.width = zoomValue + "vw";
    map.style.height = zoomValue + "vh";
    zoomValueOutput.innerText = zoomValue + "%";
    console.log("zoom out");

});