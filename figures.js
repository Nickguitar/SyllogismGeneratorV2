function uniq(a) {
    var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

    return a.filter(function(item) {
        var type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}


var forma = ['A', 'E', 'I', 'O'];

// alterar p/ mudar idioma
// SE FOR MODIFICAR, APENAS TRADUZA; NÃO TROQUE AS STRINGS UMA PELA OUTRA, VAI DAR RUIM

var todo = "Todo <a class='distr'>"; 	 // Translate this to "All"
var algum = "Algum"; 	 // Translate this to "Some"
var nenhum  = "Nenhum <a class='distr'>"; // Translate this to "No"
var e = "é"; 			 // Translate this to "is"
var n_e = "não é <a class='distr'>"; 	 // Translate this to "is not"

var highlight = false;
if(highlight){
	var P = "<a class='maior'>P</a>"; // termo maior (major term)
	var M = "<a class='medio'>M</a>"; // termo médio (middle term)
	var S = "<a class='menor'>S</a>"; // termo menor (minor term)
}else{
	var P = "P"; // termo maior (major term)
	var M = "M"; // termo médio (middle term)
	var S = "S"; // termo menor (minor term)
}


function modos(n=3){ // gera todos os modos possiveis (são 3 proposições)
	if(n > 0){
		var tmp_set = [];
		var res = modos(n-1);
		for  (var ce of res){
			for (var e of forma){
				tmp_set.push(ce + e);
			}
		}
		return tmp_set; // o retorno é um array com todas as combinações entre A, E, I e O com 3 caracteres (64 combinações)
	}else{
		return [''];
	}
}

var modo_figura = [];
for(tipo of modos()){
	for(i=1;i<=4;i++){
		modo_figura.push(tipo+i); // vai ser usado lá em baixo pra validar os silogismos
		//é um array com os modos e figuras possiveis (256)
	}
}

function check(modo){
	if(modo.length !== 3){
		throw new Error("my error message");
	}
	for(var i=0;i<3;i++){
		if(!forma.includes(modo[i])){
			throw new Error("Modo de silogismo não identificado.");
		}
	}
}

function figura1(modo){ 	//por exemplo AEE

	/*
	 Primeira figura
	 
	 M - P
	 S - M
	 S - P
	*/
	
	var silog = [];

	switch(modo[0]){ // premissa maior
		case "A": // Todo A é B
			silog.push(todo+M+"</a> "+e+" "+P);
			break;
		case "E": // Nenhum A é B
			silog.push(nenhum+M+"</a> "+e+" <a class='distr'>"+P+"</a>");
			break;
		case "I": // Algum A é B
			silog.push(algum+" "+M+" "+e+" "+P);
			break;
		case "O": // Algum A não é B
			silog.push(algum+" "+M+" "+n_e+P+"</a>");
			break;
	}
	
	
	// =======
	
		switch(modo[1]){ //premissa menor
		case "A": // Todo A é B
			silog.push(todo+S+"</a> "+e+" "+M);
			break;
		case "E": // Nenhum A é B
			silog.push(nenhum+" <a class='distr'>"+S+"</a> "+e+" <a class='distr'>"+M+"</a>");
			break;
		case "I": // Algum A é B
			silog.push(algum+" "+S+" "+e+" "+M);
			break;
		case "O": // Algum A não é B
			silog.push(algum+" "+S+" "+n_e+M+"</a>");
			break;
	}
	
	
	// ========
	
		switch(modo[2]){ //conclusao
		case "A": // Todo A é B
			silog.push(todo+S+"</a> "+e+" "+P);
			break;
		case "E": // Nenhum A é B
			silog.push(nenhum+" <a class='distr'>"+S+"</a> "+e+" <a class='distr'>"+P+"</a>");
			break;
		case "I": // Algum A é B
			silog.push(algum+" "+S+" "+e+" "+P);
			break;
		case "O": // Algum A não é B
			silog.push(algum+" "+S+" "+n_e+P+"</a>");
			break;
	}

	return silog;
}

function figura2(modo){ 	//por exemplo AEE

	/*
	 Primeira figura
	 
	 P - M
	 S - M
	 S - P
	*/
	
	var silog = [];

	switch(modo[0]){ // premissa maior
		case "A": // Todo A é B
			silog.push(todo+P+"</a> "+e+" "+M);
			break;
		case "E": // Nenhum A é B
			silog.push(nenhum+" <a class='distr'>"+P+"</a> "+e+" <a class='distr'>"+M+"</a>");
			break;
		case "I": // Algum A é B
			silog.push(algum+" "+P+" "+e+" "+M);
			break;
		case "O": // Algum A não é B
			silog.push(algum+" "+P+" "+n_e+M+"</a>");
			break;
	}
	
	
	// =======
	
		switch(modo[1]){ //premissa menor
		case "A": // Todo A é B
			silog.push(todo+S+"</a> "+e+" "+M);
			break;
		case "E": // Nenhum A é B
			silog.push(nenhum+" <a class='distr'>"+S+"</a> "+e+" <a class='distr'>"+M+"</a>");
			break;
		case "I": // Algum A é B
			silog.push(algum+" "+S+" "+e+" "+M);
			break;
		case "O": // Algum A não é B
			silog.push(algum+" "+S+" "+n_e+M+"</a>");
			break;
	}
	
	
	// ========
	
		switch(modo[2]){ //conclusao
		case "A": // Todo A é B
			silog.push(todo+S+"</a> "+e+" "+P);
			break;
		case "E": // Nenhum A é B
			silog.push(nenhum+" <a class='distr'>"+S+"</a> "+e+" <a class='distr'>"+P+"</a>");
			break;
		case "I": // Algum A é B
			silog.push(algum+" "+S+" "+e+" "+P);
			break;
		case "O": // Algum A não é B
			silog.push(algum+" "+S+" "+n_e+P+"</a>");
			break;
	}

	return silog;
}

function figura3(modo){ 	//por exemplo AEE

	/*
	 Primeira figura
	 
	 M - P
	 M - S
	 S - P
	*/
	
	var silog = [];

	switch(modo[0]){ // premissa maior
		case "A": // Todo A é B
			silog.push(todo+M+"</a> "+e+" "+P);
			break;
		case "E": // Nenhum A é B
			silog.push(nenhum+" <a class='distr'>"+M+"</a> "+e+" <a class='distr'>"+P+"</a>");
			break;
		case "I": // Algum A é B
			silog.push(algum+" "+M+" "+e+" "+P);
			break;
		case "O": // Algum A não é B
			silog.push(algum+" "+M+" "+n_e+P+"</a>");
			break;
	}
	
	
	// =======
	
		switch(modo[1]){ //premissa menor
		case "A": // Todo A é B
			silog.push(todo+M+"</a> "+e+" "+S);
			break;
		case "E": // Nenhum A é B
			silog.push(nenhum+" <a class='distr'>"+M+"</a> "+e+" <a class='distr'>"+S+"</a>");
			break;
		case "I": // Algum A é B
			silog.push(algum+" "+M+" "+e+" "+S);
			break;
		case "O": // Algum A não é B
			silog.push(algum+" "+M+" "+n_e+S+"</a>");
			break;
	}
	
	
	// ========
	
		switch(modo[2]){ //conclusao
		case "A": // Todo A é B
			silog.push(todo+S+"</a> "+e+" "+P);
			break;
		case "E": // Nenhum A é B
			silog.push(nenhum+" <a class='distr'>"+S+"</a> "+e+" <a class='distr'>"+P+"</a>");
			break;
		case "I": // Algum A é B
			silog.push(algum+" "+S+" "+e+" "+P);
			break;
		case "O": // Algum A não é B
			silog.push(algum+" "+S+" "+n_e+P+"</a>");
			break;
	}

	return silog;
}

function figura4(modo){ 	//por exemplo AEE

	/*
	 Primeira figura
	 
	 M - P
	 M - S
	 S - P
	*/
	
	var silog = [];

	switch(modo[0]){ // premissa maior
		case "A": // Todo A é B
			silog.push(todo+P+"</a> "+e+" "+M);
			break;
		case "E": // Nenhum A é B
			silog.push(nenhum+" <a class='distr'>"+P+"</a> "+e+" <a class='distr'>"+M+"</a>");
			break;
		case "I": // Algum A é B
			silog.push(algum+" "+P+" "+e+" "+M);
			break;
		case "O": // Algum A não é B
			silog.push(algum+" "+P+" "+n_e+M+"</a>");
			break;
	}
	
	
	// =======
	
		switch(modo[1]){ //premissa menor
		case "A": // Todo A é B
			silog.push(todo+M+"</a> "+e+" "+S);
			break;
		case "E": // Nenhum A é B
			silog.push(nenhum+" <a class='distr'>"+M+"</a> "+e+" <a class='distr'>"+S+"</a>");
			break;
		case "I": // Algum A é B
			silog.push(algum+" "+M+" "+e+" "+S);
			break;
		case "O": // Algum A não é B
			silog.push(algum+" "+M+" "+n_e+S+"</a>");
			break;
	}
	
	
	// ========
	
		switch(modo[2]){ //conclusao
		case "A": // Todo A é B
			silog.push(todo+S+"</a> "+e+" "+P);
			break;
		case "E": // Nenhum A é B
			silog.push(nenhum+" <a class='distr'>"+S+"</a> "+e+" <a class='distr'>"+P+"</a>");
			break;
		case "I": // Algum A é B
			silog.push(algum+" "+S+" "+e+" "+P);
			break;
		case "O": // Algum A não é B
			silog.push(algum+" "+S+" "+n_e+P+"</a>");
			break;
	}

	return silog;
}



function silogismo(modoFigura){

	var modo = modoFigura.substr(0, 3);
	var figura = modoFigura.substr(-1);
	

	// ========= check ========
	var figs = ["1", "2", "3", "4"];
	
	if(modoFigura.length !== 5){ // o tamanho do $modoFigura ".$e." sempre 5, pq ".$e." da forma EAE-2, por exemplo
		throw new Error("Erro no modo ou figura");
	}
	check(modo); // verifica se o modo ".$e." tipo EAE, AAA, IIA, etc. (3 chars)
	if(!figs.includes(figura)){ // verifica se a figura ".$e." 1, 2, 3 ou 4
		throw new Error("Erro na figura");
	}
	// =========================
	
	switch(figura){ //verifica a figura do silogismo e salva o resultado pra retornar
		case "1":
			var ret = figura1(modo);
			break;
		case "2":
			var ret = figura2(modo);
			break;
		case "3":
			var ret = figura3(modo);
			break;
		case "4":
			var ret = figura4(modo);
			break;
	}

	var arg = "";
	for (prop of ret){ //transforma o resultado (que é um array c/ 3 proposiçoes em string)
		arg = arg+prop+"<br>";
	}
	
	return arg; // string contendo premissa maior <br> premissa menor <br> conclusao

}