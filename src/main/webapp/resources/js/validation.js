/* Customizando mensagens para validação client-side */
PrimeFaces.locales['pt_BR'] = {
	messages : {
		'javax.faces.component.UIInput.REQUIRED' : '{0} é obrigatório',
		'javax.faces.validator.LengthValidator.MAXIMUM' : '{1} deve ter no máximo {0} caracteres',
		'javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE' : '{2} deve ser no máximo R$ {1}'
	}
}

/* Adicionando uma função para string do javascript */
String.prototype.endsWith = function(sufixo) {
	return this.indexOf(sufixo, this.length - sufixo.length) !== -1;
}

/* Criando validador */
PrimeFaces.validator['com.algaworks.EmailBlacklist'] = {

	validate : function(element, value) {
		var dominios = [ 'hotmail.com', 'bol.com.br' ];

		for (i = 0; i < dominios.length; i++) {
			var dominio = dominios[i].trim();

			if (value.endsWith('@' + dominio)) {
				throw {
					summary : 'E-mail inválido',
					detail : value + ' está na lista negra'
				}
			}
		}
	}
}