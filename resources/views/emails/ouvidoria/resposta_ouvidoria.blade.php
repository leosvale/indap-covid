<p>
	<pre>{{ $texto }}</pre>
</p>

<br>
<br>

<p>
	<b>
		
		@if(isset( $contato->ctt_data_cadastro ))
			Em,
			{{ $contato->ctt_data_cadastro }}
		@endif

		@if(isset( $contato->ctt_nome ))
	 		{{ $contato->ctt_nome }}
		@endif

		@if(isset( $contato->ctt_email ))
			{{ '<'.$contato->ctt_email.'>' }}
	 		escreveu:
		@endif
	</b>
</p>

<br>

<p>
	<b>
			@if(isset( $contato->ctt_mensagem ))
		 		<pre>{{ $contato->ctt_mensagem }}</pre>
			@endif
	</b>
</p>

<style>
    pre {
       white-space: pre-wrap;       /* Since CSS 2.1 */
       white-space: -moz-pre-wrap;  /* Mozilla */
       white-space: -pre-wrap;      /* Opera 4-6 */
       white-space: -o-pre-wrap;    /* Opera 7 */
       word-wrap: break-word;       /* Internet Explorer */
    }
</style>

