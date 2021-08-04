function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}


	
function removeAcento(text){       
	text = text.toLowerCase();                                                         
	text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
	text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
	text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
	text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
	text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
	text = text.replace(new RegExp('[Ç]','gi'), 'c');
	return text;                 
}

$(document).ready(function () {
    // Adicionar classes ao carregar o documento
    ajuste_painel();

    $(window).resize(function() {
        // Adicionar sempre que a tela for redimensionada
        ajuste_painel();
    });

   $("#botao_respansivo").click(function(evento){
      if($("#menu-btn").is(":checked") == true){ 
	  		 $('.menu_respansivo').attr('style','display: block !important;');
			 $('#topo').attr('style','min-height:'+ (706) +'px !important;');
      }else{
         //$(".menu_respansivo").css("display", "none");
		 $('.menu_respansivo').attr('style','display: none !important;');
		 $('#topo').attr('style','');
      }

	});
	
	try{
		for (var i in id){
			var cmd = id[i].split("/");
			var local = cmd[0]; var tamanhomin = cmd[1]; var tamanhomax = cmd[2];	
			var recipiente = local; var acao = $(this).attr('class');	

			var atual_cookie =	(($.cookie(recipiente))? $.cookie(recipiente) : $(recipiente).css('font-size'));

				var novotamanho = atual_cookie;
				$(recipiente).css('font-size', atual_cookie-1+1);		
		}
	}catch(error){}
	
	
	$('#menu-info-js').dcAccordion({
		eventType: 'click',
		autoClose: false,
		saveState: true,
		disableLink: true,
		speed: 'fast',
		classActive: 'test',
		showCount: true
	});
    
    $('#menu-info-jss').dcAccordion({
		eventType: 'click',
		autoClose: false,
		saveState: true,
		disableLink: true,
		speed: 'fast',
		classActive: 'test',
		showCount: true
	});
	
	
	
});

function cpfValido(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}


function processPDF(){
	let timerInterval
	Swal.fire({
			position: 'top',
			title: 'Processando requisição!',
			html: 'Por favor aguarde....',
			timer: 3000,
			timerProgressBar: true,
			onBeforeOpen: () => {
					Swal.showLoading()
					timerInterval = setInterval(() => {
					  const content = Swal.getContent()
					  if (content) {
						const b = content.querySelector('b')
						if (b) {
						  b.textContent = Swal.getTimerLeft()
						}
					  }
					}, 100)
				  },
				  onClose: () => {
					clearInterval(timerInterval)
				  }
				}).then((result) => {
				  /* Read more about handling dismissals below 
				  if (result.dismiss === Swal.DismissReason.timer) {
					console.log('I was closed by the timer')
				  }*/
				});
				
}

function ajuste_painel() {
   jQuery(document).ready(function() {
	 var width_nv = Math.max(jQuery('#topo').width(),jQuery('#topo').width()); // Pega altura da Div main 
	 
	 if (width_nv < 680) {//alert(width_nv);
	 //jQuery('#p_noticias #painel').width(width_nv-30); //Aplica altura da div main à div sidebar	 
	 height_nv = (((width_nv-20)/100)*62);
	 $('#p_noticias #painel').attr('style', 'width: '+ (width_nv - 20) +'px !important; height:'+ (height_nv) +'px !important;');
	 $('#pc_noticias #painel').attr('style', 'width: '+ (width_nv - 20) +'px !important; height:'+ (height_nv + 10) +'px !important;');	 
	 //$('#p_noticias #painel').attr('style', 'width: '+ (width_nv - 20) +'px !important;');
	// $('.swiper-slide').attr('style', 'width: '+ (width_nv - 20) +'px !important;');
	 }else{
	$('#p_noticias #painel').attr('style', '');
	$('#pc_noticias #painel').attr('style', ''); 
	}
     });
	
	$("#d-news .d-second-block").height($("#d-news .d-second-block ul").height() + 50);
}

function pagina(pg){ 		
	document.getElementById('pg').value = pg; document.form2.submit();
}

function isIE () {
	var myNav = navigator.userAgent.toLowerCase();
	return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}
              
if (isIE () && isIE () < 9) {
	alert("Este site é incompativel com as versões inferiores ao Internet Explorer 9. Atualize o seu navegador.");
} 

function lerCookie(nome) {
    var regex = new RegExp('(?:(?:^|.*;\s*)' + nome + '\s*\=\s*([^;]*).*$)|^.*$');
    return document.cookie.replace(regex, "$1");
}


function valida_dados(num){ 	
	var  checa ='';	
	//validador 1
	var nome = document.all.nome; 
	var email = document.all.email;  
	var texto = document.all.texto;
	var assunto = document.all.assunto;
		
		if(num ==1){
			
			if(!nome.value){ 
				checa =  checa + ' "NOME" \n '; 
				if(!foco){ nome.focus(); var foco = 1; }
				nome.className='border';
			}else{ nome.className=''; }
			
			if(!email.value){
				checa =  checa + ' "E-MAIL" \n ';
				if(!foco){ email.focus(); var foco = 1; }
				email.className='border';
			}else{ email.className=''; }	
					
			if(!assunto.value){
				checa =  checa + ' "ASSUNTO" \n ';
				if(!foco){ assunto.focus(); var foco = 1; }
				assunto.className='border';
			}else{ assunto.className=''; }
			
			if(!texto.value){
				checa =  checa + ' "MENSAGEM" \n ';
				if(!foco){ texto.focus(); var foco = 1; }
				texto.className='border';
			}else{ texto.className=''; }
		}
		
		
		if(num ==2){
			var de = document.form1.de.value;
			var para = document.form1.para.value;
			var email = document.form1.email.value;
			var texto = document.form1.texto.value;
			
			if(!de){ checa =  checa + ' "DE" \n '; }
			if(!para){ checa =  checa + ' "PARA" \n '; }
			if(!email){ checa =  checa + ' "EMAIL" \n '; } 	
			if(!texto){ checa =  checa + ' "MENSAGEM" \n '; } 
			
		}
		
		if(num ==3){
			var cod_programa = document.form1.cod_programa.value;
			var nome = document.form1.nome.value;
			var cidade = document.form1.cidade.value;
			var email = document.form1.email.value;
			var mensagem = document.form1.mensagem.value;
			
			if(!nome){ checa =  checa + ' "NOME" \n '; }
			if(!cod_programa){ checa =  checa + ' "COD. PROGRAMA" \n '; }
			if(!cidade){ checa =  checa + ' "CIDADE" \n '; }
			if(!email){ checa =  checa + ' "EMAIL" \n '; } 	
			if(!mensagem){ checa =  checa + ' "MENSAGEM" \n '; } 
			
	
		
		}
		
		if(num ==4){
			
			var anonimo = document.form1.anonimo.value;
			var sigilo = document.form1.sigilo.value;
			var municipio = document.form1.municipio.value;
			var nome = document.form1.nome.value;
			var email = document.form1.email.value;
			var orgao = document.form1.orgao.value;
			var assunto = document.form1.assunto.value;	
			var mensagem = document.form1.mensagem.value;	
			
			if(!anonimo){ checa =  checa + ' "ANÔNIMO" \n '; }
			if(!sigilo){ checa =  checa + ' "MANTER SIGILO" \n '; }
			//if(!nome){ checa =  checa + ' "NOME" \n '; }
			//if(!email){ checa =  checa + ' "EMAIL" \n '; } 	
			if(!orgao){ checa =  checa + ' "ORGÃO" \n '; } 
			if(!assunto){ checa =  checa + ' "ASSUNTO" \n '; } 
			if(!mensagem){ checa =  checa + ' "MANIFESTAÇÃO" \n '; } 
		
		}
		
		if(num ==5){
			var protocolo = document.form1.protocolo.value;
			if(!protocolo){ checa =  checa + ' "Nº DE PROTOCOLO" \n '; }
					
		}
		
		if(num ==6){
			var mensagem = document.form1.mensagem.value;
			var assunto = document.form1.assunto.value;
			if(!assunto){ checa =  checa + ' "ASSUNTO" \n '; } 
			if(!mensagem){ checa =  checa + ' "MENSAGEM" \n '; } 
					
		}
		
		if(checa){	
			checa = "O(s) campo(s) obrigatorio(s) nao pode(m) ficar em branco \n \n " + checa + "  ";  
			alert(checa); 				
			return (false);				
		}	
}


function closeModal(id){
	$('#'+id).hide();
}

function openModal(id){
	$('#'+id).css('display', 'flex');
}
	
function loadingPage(){
	Swal.fire({
	  html: '<b>Carregando...</b><br><span class="fas fa-spinner fa-pulse" style="margin-top:10px;font-size:35px"></span>',
	  showConfirmButton: false
	});
}	


$(function(){
	
$("#acess1, #acess2, #acess3, #acess4").click(function() { 
	if($(this).attr('id') == 'acess1'){
		$('html, body').animate({scrollTop: $('#conteudo').offset().top }, 700);
	}else if($(this).attr('id') == 'acess2'){
		if($(location).attr('pathname') != '/'){ location.href = 'http://'+$(location).attr('hostname') + "#p_menu"; }
		$('html, body').animate({scrollTop: $('#p_menu').offset().top }, 700);
	}else if($(this).attr('id') == 'acess3'){
		$('html, body').animate({scrollTop: $('#busca').offset().top }, 700);
		$("#busca").focus();		
	}else if($(this).attr('id') == 'acess4'){
		$('html, body').animate({scrollTop: $('#rodape').offset().top }, 700);
	}
});

$('.diminuir, .aumentar, .normal, .contraste').click(function(){

for (var i in id){

	var cmd = id[i].split("/");
	var local = cmd[0]; var tamanhomin = cmd[1]; var tamanhomax = cmd[2];	
	var recipiente = local; var acao = $(this).attr('class');	
	var atual = parseFloat($(recipiente).css('font-size'));

	if(acao == 'aumentar'){
		var novotamanho = atual+1;
		if (novotamanho < tamanhomax){ 
			$(recipiente).css('font-size', novotamanho);
			$.cookie(recipiente, novotamanho, { path : '/' });
		}
		
		 //$("body").css({"zoom":"1.3", "-moz-transform":"scale(1.3)"});
		 $.cookie("body", "aumentar", { path : '/' });
	}

	if (acao == 'diminuir'){
		var novotamanho = atual-1;
		if (novotamanho > tamanhomin){ 
			$(recipiente).css('font-size', novotamanho);
			$.cookie(recipiente, novotamanho, { path : '/' });
		}
		
	//	$("body").css({"zoom":"0.8", "-moz-transform":"scale(0.7)"});
		$.cookie("body", "diminuir", { path : '/' });
	}

	if(acao == 'normal'){
		$(recipiente).css('font-size', '');
		$.cookie(recipiente, '', { path : '/' });
		
	//	$("body").css({"zoom":"1.0", "-moz-transform":"scale(1.3)"});
		$.cookie("body", "normal", { path : '/' });
	}	
	
	try{
		document.getElementById('iframe_transparencia').contentWindow.alterFont('#filtro', acao);
		document.getElementById('iframe_transparencia').contentWindow.alterFont('#licitacao_grid', acao);
		document.getElementById('iframe_transparencia').contentWindow.alterFont('#paginas h2', acao);
		document.getElementById('iframe_transparencia').contentWindow.alterFont('#paginas .nav_pg li', acao);

		document.getElementById('iframe_transparencia2').contentWindow.alterFont('#filtro', acao);
		document.getElementById('iframe_transparencia2').contentWindow.alterFont('#licitacao_grid', acao);
		document.getElementById('iframe_transparencia2').contentWindow.alterFont('#paginas h2', acao);
		document.getElementById('iframe_transparencia2').contentWindow.alterFont('#paginas .nav_pg li', acao);
	}catch(e){}
	
	

}	return false;

});

/*CONTRASTE*/
$(".contraste").click(function() { 
	var today = new Date();
	var cache = today.getFullYear() + '' + (today.getMonth()+1) + '' + today.getDate();
	var url_site = 'http://'+$(location).attr('hostname') + (($(location).attr('hostname') == '127.0.0.1')? '/demonstracao' : ''); 

	if($.cookie('contraste_tipo') == 'contraste'){ var tipo = "tema"; }else{ var tipo = "contraste"; }
	var estilo = url_site +'/files/css/'+ ((tipo == "contraste")? 'contraste.css?'+ cache : 'tema.css?' + cache);// 
	$('#styles').attr('rel', tipo); $('#style').attr('href', estilo); //$('link[rel=stylesheet]').attr('href', estilo); 
	$.cookie('contraste_tipo', estilo); $.cookie('contraste_tipo', tipo); 
	window.location.reload(true);
});
	
	
});
	

function validaCpfCnpj(val) {
    if (val.length == 14) {
        var cpf = val.trim();
     
        cpf = cpf.replace(/\./g, '');
        cpf = cpf.replace('-', '');
        cpf = cpf.split('');
        
        var v1 = 0;
        var v2 = 0;
        var aux = false;
        
        for (var i = 1; cpf.length > i; i++) {
            if (cpf[i - 1] != cpf[i]) {
                aux = true;   
            }
        } 
        
        if (aux == false) {
            return false; 
        } 
        
        for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
            v1 += cpf[i] * p; 
        } 
        
        v1 = ((v1 * 10) % 11);
        
        if (v1 == 10) {
            v1 = 0; 
        }
        
        if (v1 != cpf[9]) {
            return false; 
        } 
        
        for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
            v2 += cpf[i] * p; 
        } 
        
        v2 = ((v2 * 10) % 11);
        
        if (v2 == 10) {
            v2 = 0; 
        }
        
        if (v2 != cpf[10]) {
            return false; 
        } else {   
            return true; 
        }
    } else if (val.length == 18) {
        var cnpj = val.trim();
        
        cnpj = cnpj.replace(/\./g, '');
        cnpj = cnpj.replace('-', '');
        cnpj = cnpj.replace('/', ''); 
        cnpj = cnpj.split(''); 
        
        var v1 = 0;
        var v2 = 0;
        var aux = false;
        
        for (var i = 1; cnpj.length > i; i++) { 
            if (cnpj[i - 1] != cnpj[i]) {  
                aux = true;   
            } 
        } 
        
        if (aux == false) {  
            return false; 
        }
        
        for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
            if (p1 >= 2) {  
                v1 += cnpj[i] * p1;  
            } else {  
                v1 += cnpj[i] * p2;  
            } 
        } 
        
        v1 = (v1 % 11);
        
        if (v1 < 2) { 
            v1 = 0; 
        } else { 
            v1 = (11 - v1); 
        } 
        
        if (v1 != cnpj[12]) {  
            return false; 
        } 
        
        for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) { 
            if (p1 >= 2) {  
                v2 += cnpj[i] * p1;  
            } else {   
                v2 += cnpj[i] * p2; 
            } 
        }
        
        v2 = (v2 % 11); 
        
        if (v2 < 2) {  
            v2 = 0;
        } else { 
            v2 = (11 - v2); 
        } 
        
        if (v2 != cnpj[13]) {   
            return false; 
        } else {  
            return true; 
        }
    } else {
        return false;
    }
 }

/*ACESSIBILIDADE*/
  document.onkeydown = function(e) {
        var keychar;

        // Internet Explorer
        try {
            keychar = String.fromCharCode(event.keyCode);
            e = event;
        }

        // Firefox, Opera, Chrome e outros
        catch (err) {
            keychar = String.fromCharCode(e.keyCode);
        }
		
		var urlSite = 'http://'+$(location).attr('hostname');

        if (e.altKey) {

            if (keychar == 0) {
                // alt + 0 = acessibilidade
                location.href = urlSite + "/texto/acessibilidade";
                return false;
            }

            if (keychar == 1) {
                //conteudo
                //location.href = urlSite + "#conteudo";
				
				$('html, body').animate({scrollTop: $('#conteudo').offset().top }, 700);
				
				
                return false;
            }

            if (keychar == 2) {
				if($(location).attr('pathname') != '/'){ location.href = urlSite + "#p_menu"; }
				$('html, body').animate({scrollTop: $('#p_menu').offset().top }, 700);
            }

            if (keychar == 3) {
			$('html, body').animate({scrollTop: $('#busca').offset().top }, 700);
			$("#busca").focus();
            }

            if (keychar == 4) {
				$('html, body').animate({scrollTop: $('#rodape').offset().top }, 700);
            }

            if (keychar == 5) {
              location.href = urlSite;
                return false;
            }

            if (keychar == 6) {
				$("#contraste").trigger('click');
            }

            if (keychar == 7) {
                $(".aumentar").trigger('click');
            }
            if (keychar == 8) {
               $(".normal").trigger('click');
            }
			if (keychar == 9) {
               $(".diminuir").trigger('click');
            }

        }
    }
	

window.onload=function(){
	//select all checkboxes
	$("#checkall").change(function(){  //"select all" change 
		$(".checkbox").prop('checked', $(this).prop("checked")); //change all ".checkbox" checked status
	});
	
	//".checkbox" change 
	$('.checkbox').change(function(){ 
		//uncheck "select all", if one of the listed checkbox item is unchecked
		if(false == $(this).prop("checked")){ //if this item is unchecked
			$("#checkall").prop('checked', false); //change "select all" checked status to false
		}
		//check "select all" if all checkbox items are checked
		if ($('.checkbox:checked').length == $('.checkbox').length ){
			$("#checkall").prop('checked', true);
		}
	});

}

function mostrar_filtro() { 
	if($('#busca_avancada').is(':visible')) { 
		$("#busca_avancada").css("display", "none");
		$("#topo header a.filtro i").css("background-position", "-203px -143px");
	}else{ 
		$("#busca_avancada").css("display", "table");
		$("#topo header a.filtro i").css("background-position", "-203px -158px");
	}
}


/*CALENDARIO*/

if (top.location != location) {
    top.location.href = document.location.href ;
}
$(function(){
			window.prettyPrint && prettyPrint();
		
			var startDate = new Date(2012,1,20);
			var endDate = new Date(2012,1,25);
			$('#dataini').datepicker()
				.on('changeDate', function(ev){
					if (ev.date.valueOf() > endDate.valueOf()){
						alert('A data de início não pode ser maior que a data final.');
					} else {
						$('#alert').hide();
						startDate = new Date(ev.date);
						$('#startDate').text($('#dataini').data('date'));
					}
					$('#dataini').datepicker('hide');
				});
			$('#datafim').datepicker()
				.on('changeDate', function(ev){
					
					if (ev.date.valueOf() < startDate.valueOf()){
						alert('A data de término não pode ser inferior à data de início.');
					} else {
						$('#alert').hide();
						endDate = new Date(ev.date);
						$('#endDate').text($('#datafim').data('date'));
					}
					$('#datafim').datepicker('hide');
				});

        // disabling dates
        var nowTemp = new Date();
        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

        var checkin = $('#dpd1').datepicker({
          onRender: function(date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
          }
        }).on('changeDate', function(ev) {
          if (ev.date.valueOf() > checkout.date.valueOf()) {
            var newDate = new Date(ev.date)
            newDate.setDate(newDate.getDate() + 1);
            checkout.setValue(newDate);
          }
          checkin.hide();
          $('#dpd2')[0].focus();
        }).data('datepicker');
        var checkout = $('#dpd2').datepicker({
          onRender: function(date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
          }
        }).on('changeDate', function(ev) {
          checkout.hide();
        }).data('datepicker');
		});
		
	/*MASCARA*/
	
	jQuery(function($){
	
	$(".data").mask("99/99/9999");
	$('.hora').mask('00:00:00');
	$('.data_hora').mask('00/00/0000 00:00:00');
	$(".cep").mask("99.999-999");
	$('.cpf').mask('000.000.000-00', {reverse: true});
	$('.cnpj').mask('00.000.000/0000-00', {reverse: true});
	$('.moeda').mask('000.000.000,00', {reverse: true});
	$('.quantidade').mask('000.000,00', {reverse: true});
	$('.peso').mask('000,000', {reverse: true});
	$('.moeda_decimal').mask('000,0000', {reverse: true});
	$('.area').mask('000.000,00', {reverse: true});
	$('.dias').mask('000', {reverse: true});
	$('.percentual').mask('000,00', {reverse: true});
	$('.percent').mask('00,00', {reverse: true});
	$('.percentual_decimal').mask('000,0000', {reverse: true});

	//TELEFONE
	var maskBehavior = function (val) {
		return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
	}, options = {onKeyPress: function(val, e, field, options){
		field.mask(maskBehavior.apply({}, arguments), options);
	}};
	$('.telefone').mask(maskBehavior, options);
	
	//UNIDADE
	var options = {
    translation: { 'S': { pattern: /\-/, optional: true } },
    onComplete: function(a, b, c, d) {
      console.log('completado');
      if(a.length>=14)  return; // Limitar Tamanho máximo
      if(a.length>=6) {
        mask += "9";
        c.mask(mask, d);
      }
    }
  };
  var mask = "S999999"; // Defini tamanho mínimo
  $('.unidade').mask(mask, options);
  $('.unidade_p').mask('000000', {reverse: true});
 

});

// $('.porcentagem').mask('##0,00%', {

/* EXEMPLOS
  $('.date').mask('11/11/1111');
  $('.time').mask('00:00:00');
  $('.date_time').mask('00/00/0000 00:00:00');
  $('.cep').mask('00000-000');
  $('.phone').mask('0000-0000');
  $('.phone_with_ddd').mask('(00) 0000-0000');
  $('.phone_us').mask('(000) 000-0000');
  $('.mixed').mask('AAA 000-S0S');
  $('.cpf').mask('000.000.000-00', {reverse: true});
  $('.money').mask('000.000.000.000.000,00', {reverse: true});
  $('.money2').mask("#.##0,00", {reverse: true, maxlength: false});
  $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {translation: {'Z': {pattern: /[0-9]/, optional: true}}});
  $('.ip_address').mask('099.099.099.099');
  $('.percent').mask('##0,00%', {reverse: true});
  $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
  $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
*/