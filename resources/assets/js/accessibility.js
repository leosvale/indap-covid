$("body").mousemove(function (event) {
   	$("#rule-accessibility").css("top", (event.clientY + 15));
});

$(document).ready(function(){
	if(!sessionStorage.getItem("toggleDContrast")){ sessionStorage.setItem("toggleDContrast", "false"); }
	if(!sessionStorage.getItem("toggleDContrastLink")){ sessionStorage.setItem("toggleDContrastLink", "false"); }
	if(!sessionStorage.getItem("toggleDBlackWhite")){ sessionStorage.setItem("toggleDBlackWhite", "false"); }
	if(!sessionStorage.getItem("toggleDBlackWhite")){ sessionStorage.setItem("toggleDBlackWhite", "false"); }
	if(!sessionStorage.getItem("toogleDSpacing")){ sessionStorage.setItem("toogleDSpacing", "false"); }
	if(!sessionStorage.getItem("toggleDCursor")){ sessionStorage.setItem("toggleDCursor", "false"); }
	if(!sessionStorage.getItem("toggleDRule")){ sessionStorage.setItem("toggleDRule", "false"); }
	
	
  loadDContrast();
  loadDContrastLink();
  loadDBlackWhite();
  loadDSpacing();
  loadDCursor();
  loadDRule();
});


$("#toggleDContrast").click(function(){
	toggleDContrast();
});
$("#toggleDContrastLink").click(function(){
	toggleDContrastLink();
});
$("#toggleDBlackWhite").click(function(){
	toggleDBlackWhite();
});
$("#toogleDSpacing").click(function(){
	toogleDSpacing();
});
$("#toggleDCursor").click(function(){
	toggleDCursor();
});
$("#toggleDRule").click(function(){
	toggleDRule();
});


function createToggle(data) {
	
  if (!localStorage.getItem(data)){
	 localStorage.setItem(data, 'false');
  }
	
  if(localStorage.getItem(data) == 'true'){
	 localStorage.setItem(data, 'false');
  }else{
	 localStorage.setItem(data, 'true');
  }
}

function loadDContrast() {
  if (localStorage.getItem('toggleDContrast') == 'true'){
	  $("#toggleDContrast").addClass("set-accessibility");
      $('html').css("filter", "invert(100%)").css("-webkit-filter", "invert(100%)");
  } else {
	$("#toggleDContrast").removeClass("set-accessibility");
    $('html').css("filter", "none").css("-webkit-filter", "none");
	if (localStorage.getItem('toggleDBlackWhite') == 'true'){
		loadDBlackWhite();
  	}
  }
}

function toggleDContrast() {
  createToggle('toggleDContrast');
  loadDContrast();
}

function loadDContrastLink() {
  if (localStorage.getItem('toggleDContrastLink') == 'true'){
	  $("#toggleDContrastLink").addClass("set-accessibility");
      $("body a").addClass("link-contrast");
  } else {
	  $("#toggleDContrastLink").removeClass("set-accessibility");
      $("body a").removeClass("link-contrast");
  }
}

function toggleDContrastLink() {
  createToggle('toggleDContrastLink');
  loadDContrastLink();
}

function loadDBlackWhite() {
  if (localStorage.getItem('toggleDBlackWhite') == 'true'){
	 $("#toggleDBlackWhite").addClass("set-accessibility");
     $('html').css("filter", "grayscale(100%)").css("-webkit-filter", "grayscale(100%)");
  } else {
	$("#toggleDBlackWhite").removeClass("set-accessibility");
	$('html').css("filter", "none").css("-webkit-filter", "none");
	if (localStorage.getItem('toggleDContrast') == 'true'){
		loadDContrast();
  	}
  }
}

function toggleDBlackWhite() {
  createToggle('toggleDBlackWhite');
  loadDBlackWhite();
}

function loadDSpacing() {
  if (localStorage.getItem('toogleDSpacing') == 'true'){
	 $("#toogleDSpacing").addClass("set-accessibility");
      $('html').css("word-spacing", "5px").css("letter-spacing", "5px");
  } else {
	 $("#toogleDSpacing").removeClass("set-accessibility");
     $('html').css("word-spacing", "0").css("letter-spacing", "0");
  }
	
}

function toogleDSpacing() {
  createToggle('toogleDSpacing');
  loadDSpacing();
}

function loadDCursor(){
  if (localStorage.getItem('toggleDCursor') == 'true'){
	 $("#toggleDCursor").addClass("set-accessibility");
     $('body').addClass("cursor-large");
	 $('body a').addClass("cursor-large");
	 $('body input').addClass("cursor-large");
  } else {
	 $("#toggleDCursor").removeClass("set-accessibility");
     $('body').removeClass("cursor-large");
	 $('body a').removeClass("cursor-large");
	 $('body input').removeClass("cursor-large");
  }
}

function toggleDCursor() {
  createToggle('toggleDCursor');
  loadDCursor();
}

function loadDRule(){
  if (!$("body #rule-accessibility").length) {
    $("body").append("<div id='rule-accessibility'></div>")
  }
	
	
  if (localStorage.getItem('toggleDRule') == 'true'){
	 $("#toggleDRule").addClass("set-accessibility");
     $("body #rule-accessibility").removeClass("d-hide");
  } else {
	 $("#toggleDRule").removeClass("set-accessibility");
     $("body #rule-accessibility").addClass("d-hide");
  }
}

function toggleDRule() {
  createToggle('toggleDRule');
  loadDRule();
}

function accessibilityModal() {
  $("#d-accessibility").toggleClass("d-hide");
  $("#d-modal-accessibility").toggleClass("d-hide");
}