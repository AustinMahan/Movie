$(document).ready(function() {
  $(document).submit(function(e){
    e.preventDefault()
  })

  $('button').click(function(){

    if($('input').val()){
      var isAllowed = true
      titleCreated.forEach(function(titles){
        if(titles == $('input').val()){
          isAllowed = false
        }
      })
      if(isAllowed){
        titleCreated.push($('input').val())
        var promise = Promise.resolve($.ajax({
          url:'http://www.omdbapi.com/?t=' + $('input').val(),
          method: 'get'
        })).then(function(data){
          findMovie(data)
          addOptions(data)
        })
      }else{
        alert('You already added that')
      }
    }
    $('form')[0].reset()
  })
})
var titleCreated = []

$('select').change(function(){
  $('.pics').css('display', 'none')
  var currentGenre = $('select').val()
  console.log(currentGenre);
  $('.'+ currentGenre).parent().fadeIn()
})

var arrOfGenre = []

function findMovie(movie){
  var listOfGenre = movie.Genre.replace(/,/g , '')

  $('.title').append('<div class="pics" style="float:left"><img class="' + listOfGenre + '" src="' + movie.Poster + '"/><h2>'+ movie.Title + '</h2></div>')
}

function addOptions(movie){
  arrOfGenre = arrOfGenre.concat(movie.Genre.split(', '))
  arrOfGenre = arrOfGenre.filter(function(item, pos, self){
    return self.indexOf(item) == pos;
  })
  $('.selectpicker').empty()
  for(var i = 0; i < arrOfGenre.length; i++){
    $('.selectpicker').append('<option val="' + arrOfGenre[i] + '">' + arrOfGenre[i] + '</option>')
  }
}
