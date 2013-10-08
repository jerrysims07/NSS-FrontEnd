'use strict';

var photos = [];
var currentIndex = 0;
var timer = 0;
var page=1;

$(document).ready(initialize);

function initialize()
{
  $(document).foundation();
  $('#search').click(searchFlickr);
}

function searchFlickr()
{
  var API_KEY = '23f169c6d09f63c9e46523d1231efbbd';
  var perPage = 10;
  var query = $('#query').val();
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' +API_KEY + '&text=' + query + '&per_page=' + perPage + '&page=' + page + '&format=json&jsoncallback=?';
  $.getJSON(url, results);
  console.log(url);
}

function results(data)
{
  photos = data.photos.photo;
  timer = setInterval(createImage,1000);

}

function createImage()
{
  try
  {
    // console.log('you are being called by a timer.');
    var photo = photos[currentIndex];
    currentIndex++;

    var url = "url(http://farm"+ photo.farm +".static.flickr.com/"+ photo.server +"/"+ photo.id +"_"+ photo.secret +"_m.jpg)";
    var $div = $('<div>');
    $div.addClass('photo');
    $div.css('background-image', url);
    $('#photos').append($div);

    // check for whether we are at the end of the array
    if(currentIndex >= photos.length -1)
    {
      clearInterval(timer);
      page++;
      searchFlickr();
      currentIndex=0;
    }
  }
  catch(err)
  {
    clearInterval(timer);
    currentIndex=0;
    searchFlickr();
  }
}

function deletePhoto()
{
// debugger;
  var $currentPhoto = $(this);
  // var $daddy
  $currentPhoto.remove();
}

function clearResults()
{
  $('#photos').empty();
}

function selectPhoto()
{
  if($(this).hasClass('selected'))
  {
    $(this).removeClass('selected');
    return;
  }
  else
  {
  $(this).addClass('selected');
  }
}

function deleteSelected()
{
  $('.selected').remove();
}

function saveForLater()
{
  var $selectedPhotos = $('.selected');
  $selectedPhotos.removeClass('selected');
  $selectedPhotos.detach();
  $('#savedPhotos').append($selectedPhotos);
}