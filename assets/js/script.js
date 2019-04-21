imagem_Web2();
imagem_back();
imagem_banco();

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

function imagem_back(){
  document.getElementById('iconeBack').src = "assets/img/icon-spring-framework.svg";
  setTimeout("imagem_back2()",3500);
}

function imagem_back2(){
  document.getElementById('iconeBack').src = "assets/img/icon_java.png";
  setTimeout("imagem_back3()",3500);
}

function imagem_back3(){
  document.getElementById('iconeBack').src = "assets/img/icon-csharp.png";
  setTimeout("imagem_back()", 3500);
}

function imagem_banco(){
  document.getElementById('iconeBanco').src = "assets/img/icon-firebase.png";
  setTimeout("imagem_banco2()", 3500);
}

function imagem_banco2(){
  document.getElementById('iconeBanco').src = "assets/img/icon-mysql.png";
  setTimeout("imagem_banco3()", 3500);
}

function imagem_banco3(){
  document.getElementById('iconeBanco').src = "assets/img/icon-mongodb.png";
  setTimeout("imagem_banco()", 3500);
}


/*
function imagem_java(){
	document.getElementById('iconeJava').src = "assets/img/java-icon.png";
	document.getElementById('iconeJava').className = "java-icon";
	setTimeout("imagem_java2()", 5000);
}

function imagem_java2(){
	document.getElementById('iconeJava').src = "assets/img/python-icon.png";
	document.getElementById("iconeJava").className = "pythonIcon";
	setTimeout("imagem_java()", 5000);
}
*/
