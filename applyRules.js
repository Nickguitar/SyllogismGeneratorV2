
// ============================   funçoes pra aplicar as regras na tabela ============================



$('#tabelli tr').each(function(){
	var hide = false;
	for(var id of $(this).find('div')){
		if(!$(id).is(":visible")){
			hide = true;
		}else{
			hide = false;
		}
	}
	if(hide){
		$(id).css("display", "none");
	}
});

$('#r1').bind('change', function(){
	if($(this).is(':checked')){
		for(var mode of r1()){
			$("#"+mode).hide(100);
		}
	}else{
		for(var mode of r1()){
			$("#"+mode).show(100);
		}
	}	
});

$('#r2').bind('change', function(){
	if($(this).is(':checked')){
		for(var mode of r2()){
			$("#"+mode).hide(100);
		}
	}else{
		for(var mode of r2()){
			$("#"+mode).show(100);
		}
	}
});

$('#r3').bind('change', function(){
	if($(this).is(':checked')){
		for(var mode of r3()){
			$("#"+mode).hide(100);
		}
	}else{
		for(var mode of r3()){
			$("#"+mode).show(100);
		}
	}
});

$('#r4').bind('change', function(){
	if($(this).is(':checked')){
		for(var mode of r4()){
			$("#"+mode).hide(100);
		}
	}else{
		for(var mode of r4()){
			$("#"+mode).show(100);
		}
	}	
});

$('#r5').bind('change', function(){
	if($(this).is(':checked')){
		for(var mode of r5()){
			$("#"+mode).hide(100);
		}
	}else{
		for(var mode of r5()){
			$("#"+mode).show(100);
		}
	}
	
});