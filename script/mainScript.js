new Vue({
    el: '#header',
    data: {
        vsb_modal: false,
        placeholder_vsb: {
            name: true,
            phone: true
        },      
    },
    methods: {
        toggle_vsb_modal: function(){
            this.vsb_modal = !this.vsb_modal ;
        },
        hide_vsb_placeholder: function(placeholder_name){
            this.placeholder_vsb[placeholder_name] = false;
        }
    }
})