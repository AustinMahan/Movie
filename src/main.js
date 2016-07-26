$(document).ready(function() {
  $(document).submit(function(e){
    e.preventDefault()
  })

  $('button').click(function(){
    if($('input').val()){
      findMovie($('input').val())

    }
  })
})


var arrOfGenre = []

function findMovie(movie){
  var promise = Promise.resolve($.ajax({
    url:'http://www.omdbapi.com/?t=' + movie,
    method: 'get'
  }))
  .then(function(data){
    console.log(data);
    $('.title').append('<div class="pics" style="float:left"><img src="' + data.Poster + '"/><h2>'+ data.Title + '</h2></div>')
    arrOfGenre = arrOfGenre.concat(data.Genre.split(', '))
    arrOfGenre = arrOfGenre.filter(function(item, pos, self){
      return self.indexOf(item) == pos;
    })
    console.log(arrOfGenre);
    $('.selectpicker').empty()
    for(var i = 0; i < arrOfGenre.length; i++){
      $('.selectpicker').append('<option val="' + arrOfGenre[i] + '">' + arrOfGenre[i] + '</option>')
    }
  })
}

function addOptions(data){

}
