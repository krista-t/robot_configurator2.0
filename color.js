"use strict";
document.addEventListener("DOMContentLoaded", start);
let elementToPaint;
let color;

async function start() {
  let response = await fetch("./robot/robot_parts.svg");
  let mySvgData = await response.text();
  document.querySelector("#preview").innerHTML = mySvgData;
  startManipulatingSvg();
}

function startManipulatingSvg() {
  document.querySelectorAll(".colorize").forEach((g) => {
    document.querySelector("#body_2").classList.remove("hide");
    g.setAttribute("fill", "blue");
    g.addEventListener("click", colorElement);
    g.addEventListener("mouseover", selectArea);
    g.addEventListener("mouseout", deselectArea);
  });
}

function colorElement() {
  if (color != undefined) {
    console.log((this.style.fill = color));
    this.style.fill = color;
  } else {
    this.style.fill = "lightgrey";
  }
  elementToPaint = this;
}

function selectArea() {
  this.style.stroke = "black";
  this.style.fill = "white";
}

function deselectArea() {
  this.style.stroke = "none";
}

document.querySelectorAll(".color_btn").forEach((colorBtn) => {
  colorBtn.addEventListener("click", colorSelected);
});

function colorSelected() {
  color = this.getAttribute("fill");
  if (elementToPaint !== undefined) {
    elementToPaint.style.fill = this.getAttribute("fill");
  }
}
