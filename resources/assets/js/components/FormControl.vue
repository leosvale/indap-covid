<template>
    <div class="form-group" v-bind:class="{ 'has-error': error }">
        <slot></slot>
        <span class="help-block" ref="help" v-show="error" v-html="errorMessage"></span>
    </div>
</template>

<script>
    export default {
        props: ["error"],
        computed: {
            errorMessage: function() {
                // Caso o erro venha em formato de array, usa-se a primeira posição
                return Object.prototype.toString.call(this.error) === '[object Array]' ? this.error[0] : this.error;
            }
        }
    }   
</script>