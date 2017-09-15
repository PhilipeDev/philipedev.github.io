imagem_Web2();

function imagem_Web(){
  document.getElementById('iconeConteudo').src = "assets/img/icon-responsivedesign2.png";
  setTimeout("imagem_Web2()", 3500);	
}

function imagem_Web2(){
	document.getElementById('iconeWeb').src = "assets/img/icon-html5-js-css3.png";
	setTimeout("imagem_Web3()", 3500);	
}

function imagem_Web3(){
	document.getElementById('iconeWeb').src = "assets/img/iconBootstrap.png";
	setTimeout("imagem_Web2()", 3500);
	
}