// create a spaceBar using HTML markup

//give an form element a varible
const spaceBar = $('<form action ="#" method="get"> </form>');
// i attach the spaceBar to two types of input: search and submit
spaceBar.append('<input type="search" id="search-input" class="search-input" placeholder="Search...">',
'<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">');
// attach $spaceBar inside the <div class="search-container">
$('.search-container').append(spaceBar);

$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    // creating a reference to data.results
    const info = data.results;
    // create varible for gallery
    let gallery = '';
    // create varible for modal containers
    let modalBox = '';

    $.each(info, function (index, employee) {
      //create variable references for Name, email, city,state, etc
        const name = employee.name.first + " " + employee.name.last;
        const email = employee.email;
        const picture = employee.picture.large;
        const city = employee.location.city;
        const number = employee.phone;
        const address = employee.location.street + " " + city + " " + employee.location.postcode;
        const birthday = employee.dob.date;

        //CREATE GALLERY CARDS AND SHOW CONTENT FOR SMALL GALLERY CARDS
        // erik help me understand how and the why of doing it this way
         modalBox += '<div class="modal-container">'
         modalBox += '<div class="modal" data-index="'+index+'">';
         modalBox += '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>';
         modalBox += '<div class="modal-info-container"><img class="modal-img" src= ' + picture + ' alt="profile picture"><h3 id="name" class="modal-name cap">' + name + '</h3><p class="modal-text">' + email + '</p><p class="modal-text cap">' + city + '</p>';
         modalBox += '<hr>';
         modalBox += '<p class="modal-text">' + number + '</p><p class="modal-text">' + address + '</p><p class="modal-text">' + birthday + '</p>';
         modalBox += '</div></div>';

         //CREATE MODAL CARDS AND SHOW CONTENT FOR THEM
         gallery += '<div class="card" data-index="'+index+'">';
         gallery += '<div class="card-img-container">';
         gallery += '<img class="card-img" src= "' + picture + '" alt="profile picture"></div>';
         gallery += '<div class="card-info-container"><h3 id="name" class="card-name cap">' + name + '</h3>';
         gallery += '<p class="card-text">' + email + '</p><p class="card-text cap">' + city + '</p>';
         gallery += '</div></div>';

        })
        //this makes sure the function will run only when the elements are fully loaded
        $(document).ready(function () {

              $('.card').on("click", function() {
                var theIndex = $(this).data("index"); //this references the data stored in the card
                console.log('clicking the gallery card should display the modal' + data)
                $(".modal", $(".modal-container")).each(function(index){
                   //if the data between the gallery card and the modal matches, then add active classes, if not remove active classes
                    if( $(this).data("index") === theIndex) $(this).addClass("active");
                    else $(this).removeClass("active");
                });
            });
              //clicking on the X button,modal or outside will remove the active class
            $('#modal-close-btn, .modal, .modal-container').on("click", function() {
                $(".modal", $(".modal-container")).removeClass("active");
                console.log('you clicked on the x button');
            });
         })


         //Append gallery cards with employee details
         $('#gallery').append(gallery);
         //Finally, I will append modalBox inside body tag
         $('body').append(modalBox);
        }

      })
