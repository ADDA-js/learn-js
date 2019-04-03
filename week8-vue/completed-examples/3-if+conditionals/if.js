new Vue({
  el: '#app',
  data: {
    display: true,
    message: "hello from vue"
  },
  methods: {
    toggle: function(){
      this.display = !this.display;
    }
  }
});
