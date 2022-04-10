let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let page3 = document.querySelector(".page3");
let page4 = document.querySelector(".page4");
let page5 = document.querySelector(".page5");
let page6 = document.querySelector(".page6");
let page7 = document.querySelector(".page7");
let page8 = document.querySelector(".page8");

function set_design_for_page1(){
  if (window.screen.width > screen.height){
    page1.classList.remove("page_slim");
    page1.classList.add('page_thick');
    console.log("нет, я здесь");
  }
  else{
    page1.classList.remove("page_thick");
    page1.classList.add('page_slim');
    console.log("я здесь");
  }
}

function set_design_for_page2(){
  if (window.screen.width > screen.height){
    page2.classList.remove("page_slim");
    page2.classList.add('page_thick');
    console.log("нет, я здесь");
  }
  else{
    page2.classList.remove("page_thick");
    page2.classList.add('page_slim');
    console.log("я здесь");
  }
}

function set_design_for_page3(){
  if (window.screen.width > screen.height){
    page3.classList.remove("page_slim");
    page3.classList.add('page_thick');
    console.log("нет, я здесь");
  }
  else{
    page3.classList.remove("page_thick");
    page3.classList.add('page_slim');
    console.log("я здесь");
  }
}

function set_design_for_page4(){
  if (window.screen.width > screen.height){
    page4.classList.remove("page_slim");
    page4.classList.add('page_thick');
    console.log("нет, я здесь");
  }
  else{
    page4.classList.remove("page_thick");
    page4.classList.add('page_slim');
    console.log("я здесь");
  }
}

function set_design_for_page5(){
  if (window.screen.width > screen.height){
    page5.classList.remove("page_slim");
    page5.classList.add('page_thick');
    console.log("нет, я здесь");
  }
  else{
    page5.classList.remove("page_thick");
    page5.classList.add('page_slim');
    console.log("я здесь");
  }
}

function set_design_for_page6(){
  if (window.screen.width > screen.height){
    page6.classList.remove("page_slim");
    page6.classList.add('page_thick');
    console.log("нет, я здесь");
  }
  else{
    page6.classList.remove("page_thick");
    page6.classList.add('page_slim');
    console.log("я здесь");
  }
}

function set_design_for_page7(){
  if (window.screen.width > screen.height){
    page7.classList.remove("page_slim");
    page7.classList.add('page_thick');
    console.log("нет, я здесь");
  }
  else{
    page7.classList.remove("page_thick");
    page7.classList.add('page_slim');
    console.log("я здесь");
  }
}

function set_design_for_page8(){
  if (window.screen.width > screen.height){
    page8.classList.remove("page_slim");
    page8.classList.add('page_thick');
    console.log("нет, я здесь");
  }
  else{
    page8.classList.remove("page_thick");
    page8.classList.add('page_slim');
    console.log("я здесь");
  }
}

function set_design_for_pages(){
    set_design_for_page1();
    set_design_for_page2();
    set_design_for_page3();
    set_design_for_page4();
    set_design_for_page5();
    set_design_for_page6();
    set_design_for_page7();
    set_design_for_page8();
}

window.onload = function() {
   set_design_for_pages()
};

document.addEventListener("DOMContentLoaded", function(event) {window.onresize = function() {
set_design_for_pages()
};});