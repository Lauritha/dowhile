function validacion(){
	var nombre = document.getElementById('icon_prefix').value;
	var correo = document.getElementById('email').value;
	var telefono = document.getElementById('icon_telephone').value;
	var mensaje = document.getElementById('textarea1').value;
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){

		Materialize.toast('Campo 	nombre Invalido', 4000,'error');
		return false;
	}

	else if(!expr.test(correo)){
		Materialize.toast('Campo correo invalido', 4000,'error');
		return false;
	} 

	else if(mensaje == null || mensaje.length == 0 || /^\s+$/.test(mensaje)){
		Materialize.toast('Campo mensaje invalido', 4000,'error');
		return false;
	}
	return true;
};	