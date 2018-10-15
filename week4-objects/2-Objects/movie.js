var movie = {
    title: "Mulan",
    director: "Tony Bancroft and Barry Cook",
    year: "1998",
    stars: ["Ming-Na", "Eddie Murphy", "Miguel Ferrer", "BD Wong"],
    genre: ["comedy", "drama", "family"],
    watched: 0,
    watch: function(times){
        alert("You are watching a movie!");
        this.watched = this.watched + times;
    },
    characters: function(){
        for(var i=0; i<this.stars.length; i++){
            console.log(this.stars[i] + " rocks!");
        }
    }

    movie.watch();
}