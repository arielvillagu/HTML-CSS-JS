//Variables globales: ganador, total, vidasPerdidas;
function crearBotones(eleccion)
{
	total=eleccion;
	var i;
	document.getElementById("easy").style.display="none";
	document.getElementById("hard").style.display="none";
	$('#palabra').remove();
	crearBoton(eleccion);
	vidas(1);
}
function crearBoton(cant)
{
	var i;
	var rgb=new Array;
	for(i=0;i<cant;i++)
	{
		var button = '<input type="button" onclick="gano('+i+')" id="boton'+i+'" class=butoniano>';
		$('.juego').prepend(button);
		rgb[i]=estiloBoton(i);
	}
	ganador=Math.floor(Math.random()*cant);
	mostrarRGB(rgb[ganador]);
}
function estiloBoton(num)
{
	var rgb;
	rgb=document.getElementById("boton"+num).style.backgroundColor=generarColor();
	return rgb;
}
function generarColor()
{
	var newColor = "RGB(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";
	return newColor;
}

function mostrarRGB(rgb)
{
	var guardar='<p id="rgb">'+rgb+'</p>';
	$('.RGB').prepend(guardar);
}
function gano(num)
{
	var click;
	var i;
	if(num==ganador)
	{
		$('#boton'+ganador).attr("disabled","true");
		$('#boton'+ganador).clone().appendTo('.juego');
		limpiarBotones();
		seDice("¡¡Ganaste!!");
		click='<img src="imagen/continuar.jpg" onclick="limpiarResto();crearBoton('+total+');" id="continuar">';
		$('.continue').append(click);
	}
	else
	{
		$('#boton'+num).attr("disabled", true);
		$('#boton'+num).attr("value", "X");
		vidas(0);
	}
}
function vidas(flag)
{
	var vida;
	var click;
	var gif;
	if(flag==1)
	{
		vidasPerdidas=3;
		vida='<p id="vida">Vidas: '+vidasPerdidas+'</p>';
		$('#vidas').prepend(vida);
	}
	else if(vidasPerdidas<=3 && vidasPerdidas>=2)
	{
		vidasPerdidas--
		$('#vida').text('Vidas: '+vidasPerdidas);
	}
	else if(vidasPerdidas==1)
	{
		vidasPerdidas--
		$('#vida').text('Vidas: '+vidasPerdidas);
		limpiarBotones();
		limpiarResto();
		seDice("Perdiste...")
		click='<img src="imagen/vuelveJugar.jpg" onclick="reset()" id="reset">';
		$('.continue').append(click);
	}
}
function limpiarBotones()
{
	var i;
	var elemento;
	var padre;
	for(i=0;i<total;i++)
	{
		$('#boton'+i).remove();
	}
	$('br').remove();
}
function limpiarResto()
{
	$('#rgb').remove();
	$('#palabra').remove();
	$('#boton'+ganador).remove();
	$('#continuar').remove();
}
function reset()
{
	document.getElementById("easy").style.display="list-item";
	document.getElementById("hard").style.display="list-item";
	$('#palabra').remove();
	seDice("Elija dificultad!");
	$('#vida').remove();
	$('#reset').remove();
}
function seDice(palabra)
{
	var texto;
	texto='<p id="palabra">'+palabra+'</p>';
	$('.texto').append(texto);
}

