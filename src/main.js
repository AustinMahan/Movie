$(document).ready(function() {
  $(document).submit(function(e){
    e.preventDefault()
  })

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
    console.log(data);
    $('img').attr('src', data.Poster)
    $('.title').append('<h2>'+ data.Title + '</h2>')
  })
}
