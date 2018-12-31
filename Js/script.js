// create a spaceBar using HTML markup

//give an form element a varible
const spaceBar = $('<form action ="#" method="get"> </form>');
// i attach the spaceBar to two types of input: search and submit
spaceBar.append('<input type="search" id="search-input" class="search-input" placeholder="Search...">',
'<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">');
// attach $spaceBar inside the <div class="search-container">
$('search-container').append(spaceBar);

$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    console.log(data);

    const info = data.results;
    let gallery = '';
    let modalBox = '';

    $.each(info, function (index, employee) {
        const name = employee.name.first + " " + employee.name.last;
        const email = employee.email;
        const picture = employee.picture.large;
        const city = employee.location.city;
        const number = employee.phone;
        const address = employee.location.street + " " + city + " " + employee.location.postcode;
        const birthday = employee.dob.date;

        modalBox += '<div class="modal-container">';
        modalBox += '<div class="modal" data-index="'+index+'">';
        modalBox += '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>';
        modalBox += '<div class="modal-info-container"><img class="modal-img" src= ' + picture + ' alt="profile picture"><h3 id="name" class="modal-name cap">' + name + '</h3><p class="modal-text">' + email + '</p><p class="modal-text cap">' + city + '</p>';
        modalBox += '<hr>';
        modalBox += '<p class="modal-text">' + number + '</p><p class="modal-text">' + address + '</p><p class="modal-text">' + birthday + '</p>';
        modalBox += '</div></div>';

        // <div class="modal-container">
        //     <div class="modal">
        //         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        //         <div class="modal-info-container">
        //             <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
        //             <h3 id="name" class="modal-name cap">name</h3>
        //             <p class="modal-text">email</p>
        //             <p class="modal-text cap">city</p>
        //             <hr>
        //             <p class="modal-text">(555) 555-5555</p>
        //             <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
        //             <p class="modal-text">Birthday: 10/21/2015</p>
        //         </div>
        //     </div>

        gallery += '<div class="card" data-index="'+index+'">';
        gallery += '<div class="card-img-container">';
        gallery += '<img class="card-img" src= ' + picture + ' alt="profile picture"></div>';
        gallery += '<div class="card-info-container"><h3 id="name" class="card-name cap">' + name + '</h3>';
        gallery += '<p class="card-text">' + email + '</p><p class="card-text cap">' + city + '</p>';
        gallery += '</div></div>';

        });

      $('#gallery').append(gallery);
      $('body').append(modalBox);
    }

})
const indexInfo = $(this).data('index');

//$(document).ready( function () {

  $('.card').on('click',function() {
    console.log('card clicked');
    $(".modal", $(".modal-container")).each( function(index) {
        if( $(this).data('index') === indexInfo){
            $('.modal', $('.modal-container')).addClass('active');
        }  else   $('.modal', $('.modal-container')).removeClass('active');
    });

  });
  const modalButton = $('#modal-close-btn');

  $('#modal-close-btn, .modal, .modal-container').on('click', function() {
    $('.modal',$('.modal-container')).removeClass('active');
  });
//})
