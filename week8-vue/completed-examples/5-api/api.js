//storing our vue instance in a var
var vue = new Vue({
  el: '#app',
  data: {
    lookup: "",
    gifs: []
  },
  methods: {
    get: function(){
    	var url = 'http://api.giphy.com/v1/gifs/search?q=' + this.lookup+ '&api_key=dc6zaTOxFJmzC';
      axios.get(url).then(function (response){
        vue.gifs = response.data.data
        //why not this???
      })
    }
  }
})
