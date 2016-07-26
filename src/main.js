$(document).ready(function() {
  $('button').click(function(){

  })


findMovie('frozen')
})

function findMovie(movie){
  // $.ajax({
  //   url:'http://www.omdbapi.com/?t=' + movie,
  //   method: 'get'
  // }).done(function(data){
  //   console.log(data);
  // })
  
  var promise = Promise.resolve($.ajax({
    url:'http://www.omdbapi.com/?t=' + movie,
    method: 'get'
  }))
  .then(function(data){
    return data
  })
  .then(function(movie){
    console.log(movie.Title);
  })
}
