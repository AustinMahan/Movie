$(document).ready(function() {
  $('button').click(function(){
    findMovie($('input').val())
  })
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
    $('img').attr('src', data.poster)
    $('.title').append('<h2>'+ data.title + '</h2>')
  })
}
