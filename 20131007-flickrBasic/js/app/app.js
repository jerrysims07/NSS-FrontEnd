'use strict';

$(document).ready(initialize);

function initialize()
{
  $(document).foundation();
  $('#search').click(searchFlickr);
  $('#save').click(saveForLater);
  $('#remove').click(clearResults);
  $('#deleteSpecific').click(deleteSelected);
  $('#photos').on('dblclick', '.photo',  deletePhoto);
  $('#photos').on('click', '.photo', selectPhoto)
}

function searchFlickr()
{
  var API_KEY = '23f169c6d09f63c9e46523d1231efbbd';
  var perPage = 20;
  var page=1;
  var query = $('#query').val();
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' +API_KEY + '&text=' + query + '&per_page=' + perPage + '&page=' + page + '&format=json&jsoncallback=?';
  $.getJSON(url, results);
}

function results(data)
{
  for(var i=0;i<data.photos.photo.length;i++)
  {
    createImage(data.photos.photo[i]);
  }
}

function createImage(photo)
{
  var url = "url(http://farm"+ photo.farm +".static.flickr.com/"+ photo.server +"/"+ photo.id +"_"+ photo.secret +"_m.jpg)";
  var $div = $('<div>');
  $div.addClass('photo');
  $div.css('background-image', url);
  $('#photos').prepend($div);
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