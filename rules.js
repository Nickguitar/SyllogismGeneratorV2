
//  ===============================   funçoes p/ verificar validade ================================

function r1(){ // lista todos os modos em que o termo medio nao está distribuido em qualquer premissa
	var invalidos = [];
	for(var modo of modo_figura){
		var prems = modo.substr(0,2); //premissas
		var fig = modo.substr(3,4); //figura (string)
		
		if(fig == "1"){
			if(!(prems[0] == "A" || prems[0] == "E" || prems[1] == "E" || prems[1] == "O")){
				invalidos.push(modo);
			}
		}
		if(fig == "2"){
			if(!(prems[0] == "E" || prems[0] == "O" || prems[1] == "E" || prems[1] == "O")){
				invalidos.push(modo);
			}
		}
		if(fig == "3"){
			if(!(prems[0] == "A" || prems[0] == "E" || prems[1] == "A" || prems[1] == "E")){
				invalidos.push(modo);
			}
		}
		if(fig == "4"){
			if(!(prems[0] == "E" || prems[0] == "O" || prems[1] == "A" || prems[1] == "E")){
				invalidos.push(modo);
			}
		}
	}
	return invalidos; //retorna os modos que violam a regra 1
}

function r2(){ // lista todos os modos em que há um termo distribuído na conclusão que não está distribuído nas premissas
	var invalidos = [];
	for(var modo of modo_figura){
		var prems = modo.substr(0,2); //premissas
		var concl = modo.substr(2,1); //conclusao
		var fig = modo.substr(3,4); //figura (string)

		if(concl == "A"){	//se a conclusao for universal afirmativa  [todo S é P]
			if((fig == "1" || fig == "2") && !(prems[1] == "A" || prems[1] == "E")){ 
			// se a figura for 1 ou 2 e se a premissa que tem o msm termo que a conclusão for I ou O (se o suj. não for distrib nela) 
				invalidos.push(modo);
			}
			if((fig == "3" || fig == "4") && !(prems[1] == "E" || prems[1] == "O")){ 
			// se a figura for 3 ou 4 e se a premissa que tem o msm termo que a conclusão for A ou I (se o pred. não for distrib nela) 
				invalidos.push(modo);
			}
		}
		//preguiça de comentar os outros casos;  segue o msm modelo
		if(concl == "E"){	//se a conclusao for universal negativa  [nenhum S é P]
			if(fig == "1" && !((prems[1] == "A" || prems[1] == "E") && (prems[0] == "E" || prems[0] == "O"))){ 
				invalidos.push(modo);
			}	
			if(fig == "2" && !((prems[1] == "A" || prems[1] == "E") && (prems[0] == "A" || prems[0] == "E"))){ 
				invalidos.push(modo);
			}
			if(fig == "3" && !((prems[1] == "E" || prems[1] == "O") && (prems[0] == "E" || prems[0] == "O"))){ 
				invalidos.push(modo);
			}
			if(fig == "4" && !((prems[1] == "E" || prems[1] == "O") && (prems[0] == "A" || prems[0] == "E"))){ 
				invalidos.push(modo);
			}
		}
		if(concl == "O"){	//se a conclusao for particular afirmativa  [algum S não é P]
			if((fig == "1" || fig == "3") && !(prems[0] == "E" || prems[0] == "O")){
				invalidos.push(modo);
			}
			if((fig == "2" || fig == "4") && !(prems[0] == "A" || prems[0] == "E")){
				invalidos.push(modo);
			}
		}
	}
	return invalidos; //retorna os modos que violam a regra 2
}

function r3(){ // lista todos os modos cujas premissas sao ambas negativas
	var invalidos = [];
	for(var modo of modo_figura){
		var prems = modo.substr(0,2);
		if(prems == "EE" | prems == "EO" | prems == "OE" | prems == "OO"){  // se as premissas forem negativas 
			invalidos.push(modo);
		}
	}
	return invalidos; //retorna os modos que violam a regra 3
}

function r4(){ // lista todos os modos em que as premissas são negativas e a conclusão é afirmativa
	var invalidos = [];
	for(var modo of modo_figura){
		var prems = modo.substr(0,2);
		var concl = modo.substr(2,1);
		if(prems.includes("E") || prems.includes("O")){  // se alguma premissa for negativa 
			if(concl == "A" || concl == "I"){ // se a conclusao for positiva
				invalidos.push(modo);
			}
		}
	}
	return invalidos; //retorna os modos que violam a regra 4
}

function r5(){ // lista todos os modos em que as premissas são universais e a conclusão é particular
	var invalidos = [];
	for(var modo of modo_figura){
		var prems = modo.substr(0,2);
		var concl = modo.substr(2,1);
		if(prems == "AA" || prems == "AE" || prems == "EA" || prems == "EE"){ // se alguma premissa for universal 
			if(concl == "I" || concl == "O"){	//se a conclusao for particular 
				invalidos.push(modo);
			}
		}
	}
	return invalidos; //retorna os modos que violam a regra 5
}
var invalidos = uniq(r1().concat(r2().concat(r3().concat(r4().concat(r5())))));//array com todos os invalidados por alguma das 5 regras
function validos(){ // retorna um array com todos os silogismos validos (excluindo os que cometem a falacia existencial)
	 
	var validos = [];
	for(var syll of modo_figura){ // pra cada modo e figura existente, 
		if(!invalidos.includes(syll)){ // se esse modo e figura nao for invalido, 
			validos.push(syll); //poe ele na array dos válidos
		}
	}
	return validos;
}