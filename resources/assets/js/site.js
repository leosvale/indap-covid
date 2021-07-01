// site.js

(function ( $ ) {
    "use strict";

    var Core = {

        initialized: false,

        initialize: function()
        {
            if (this.initialized) return;
            this.initialized = true;

            this.build();
        },

        build: function()
        {
            this.initFormOuvidoria();
        },

        initFormOuvidoria: function ()
        {
            var $form  = $("#form-ouvidoria");
            var qtd_anexos = 1;

            if(!$form.length) return;

            // Máscaras
            var CpfCnpjMaskBehavior = function (val) {
                    return val.replace(/\D/g, '').length < 12 ? '000.000.000-009' : '00.000.000/0000-00';
                },
                spOptions = {
                    clearIfNotMatch: true,
                    onKeyPress: function(val, e, field, options) {
                        field.mask(CpfCnpjMaskBehavior.apply({}, arguments), options);
                    }
                };

            $form.find("#ctt_cpf_cnpj").mask(CpfCnpjMaskBehavior, spOptions);
            $form.find("#ctt_telefone").mask('(00) 0000-00009', {clearIfNotMatch: true});

            // Checkbox de mensagem sigilosa
            $form.find("#ctt_sigiloso").change(function () {
                if($(this).is(":checked")) {
                    $form.find(".hide-if-secret").hide();
                }
                else {
                    $form.find(".hide-if-secret").show();
                }
            });

            $form.find("#btn-add-attachment").click(function() {
                qtd_anexos++;
                $form.find(".anexo_"+qtd_anexos).show();

                if(qtd_anexos >= 3) {
                    $(this).prop('disabled', true);
                    $(this).parent().hide();
                }
            });

            // Submit
            $form.submit(function(e) {
                e.preventDefault();

                $form.find("button[type=submit]").prop('disabled', true);
                $form.find(".alert-danger").html("").hide();

                // Create an FormData object
                var post_data = new FormData($form[0]);
                var protocolo = null;

                post_data.set('ctt_cpf_cnpj', $form.find("#ctt_cpf_cnpj").val().replace(/[^0-9]/g, ""));
                post_data.set('ctt_telefone', $form.find("#ctt_telefone").val().replace(/[^0-9]/g, ""));

                $.ajax({
                    type: "POST",
                    url: "/ajax/contato",
                    enctype: 'multipart/form-data',
                    data: post_data,
                    processData: false,
                    contentType: false,
                    cache: false,
                    timeout: 600000,
                    success: function (data)
                    {
                        protocolo = data.data.protocolo;
                        document.getElementById("numeroProtocolo").innerHTML = protocolo;
                        $form.hide().remove();
                        $("#alert-ouvidoria").show();
                    },
                    error: function (error)
                    {
                        var errorHtml = "";

                        if (error.status == 422) {
                            for (var i in error.responseJSON.data) {
                                errorHtml += errorHtml ? "<br>" : "";
                                errorHtml += error.responseJSON.data[i];
                            }
                        }
                        else if(error.responseJSON.message) {
                            errorHtml = error.responseJSON.message;
                        }
                        else {
                            errorHtml = "Ocorreu um erro ao tentar processar sua solicitação.";
                        }

                        $form.find(".alert-danger").html( errorHtml ).show();
                        $form.find("button[type=submit]").prop('disabled', false);
                    }
                });

                return false;
            });
        },

    };

    Core.initialize();

}( jQuery ));