const app = new Vue({
  el:'#app',
  data:{
    errors:[],
    name:null,
  },
  methods:{
    checkForm:function(e) {
      this.errors = [];
      let regPhone = '/\+[3][0-9]{11,11}$'
      if(!this.name) this.errors.push("Name required.");
      
      if(this.phone = regPhone){
        
      }

      if(!this.errors.length) return true;
      e.preventDefault();
    },

  }
})