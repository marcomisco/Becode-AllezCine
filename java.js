$(document).ready(function() {

    // Hide cookies alert
    $('#btnAcceptCookies').on('click', function() {
        $('#cookiesAlert').css('display', 'none');
    });

    // Age controller
    // let age = prompt('Please enter your age ?\nYou must be 18 or older to enter our website. If you are younger, you will be redirected to the IMDB website.')
    // if (parseInt(age) < 18) {
    //     window.location.href = "https://www.imdb.com"
    // }
    function ageVerif() {

        let age = prompt("Please enter your age !");
        alert(age);
        age = parseInt(age);
        console.log(typeof(age));

        while (isNaN(age) || age < 18) {
            alert(age);

            if (isNaN(age)) {
                age = prompt("Please enter your age !");
            }

            if (age < 18) {
                window.location.href = "https://www.imdb.com";
                break;
            }
        }
    }
    // ageVerif();

    // Create button to return to top of the page
    function addGoToTop() {
        // create a new div element 
        var newBackToTop = document.createElement('a');
        var newI = document.createElement('i');
        // and give it some content 
        // var newContent = document.createTextNode('<i class="fas fa-arrow-alt-up"></i>');
        // var newContent = document.createTextNode('');
        // add the text node to the newly created div
        newBackToTop.setAttribute("href", "#mainHeader");
        newBackToTop.setAttribute("id", "backToTop");
        // newBackToTop.innerHTML = '<i class="fas fa-arrow-alt-up"></i>';
        newI.classList.add("fas", "fa-arrow-alt-up");
        // newI.setAttribute("class", "fas");
        // newI.setAttribute("class", "fa-arrow-alt-up");
        newBackToTop.appendChild(newI);

        // add the newly created element and its content into the DOM 
        var footerSocial = document.getElementById("footerSocial");
        footerSocial.appendChild(newBackToTop);
        // document.body.appendChild(newBackToTop, currentDiv);
        // document.body.insertBefore(newBackToTop, currentDiv);
    }
    addGoToTop();

    // Display contact form info in a pop-up

    /* Scroll to anchors */
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var target = $(this).attr('href');
        //JQUERY SCROLL
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 1000);

    });

    // Ajax Json - Shop Movies
    // var shopCurrent = 1;

    // var shopNbrPages = 0;

    function shopCalculatePages() {
        $.getJSON("movies.json", function(data) {
            $.each(data.shopMovies, function(i, item) {
                shopNbrPages++;
                // console.log(shopNbrPages / 8);
            });
            // console.log(Math.ceil(shopNbrPages / 8));
            shopNbrPages = Math.ceil(shopNbrPages / 8);
            // console.log('pages: ' + shopNbrPages);
            return shopNbrPages;
        });
        // console.log('pages: ' + shopNbrPages);
    }
    // shopCalculatePages();


    // function shopMoviesAjax(x) {
    //     // alert('test');
    //     // shopNbrPages = 0;
    //     // shopCalculatePages();
    //     // console.log(shopCalculatePages());
    //     $("#shopRow1").empty();
    //     $("#shopRow2").empty();
    //     $.getJSON("movies.json", function(data) {
    //         let shopNbrPages = 0;
    //         $.each(data.shopMovies, function(i, item) {
    //             shopNbrPages++;
    //         });
    //         shopNbrPages = Math.ceil(shopNbrPages / 8);
    //         console.log(shopNbrPages);
    //         let movies = [];
    //         let start = x * 8;
    //         $.each(data.shopMovies, function(i, item) {
    //             if (i >= start && i < (start + 8)) {
    //                 movies.push(item);
    //             }
    //         });
    //         $.each(movies, function(i, movie) {
    //             itemText = "<div class='col-3'>";
    //             itemText += "<a href=''>";
    //             itemText += "<img src='" + movie.image + "' alt='Movie - Poster'>";
    //             itemText += "<h5>Movie title</h5>";
    //             itemText += "<p>2016<span>15 Euros</span></p>";
    //             itemText += "</a>";
    //             itemText += "</div>";
    //             if (i === 0) {
    //                 $("#shopRow1").html(itemText);
    //             } else if (i < 4) {
    //                 $("#shopRow1").append(itemText);
    //             } else if (i === 4) {
    //                 $("#shopRow2").html(itemText);
    //             } else if (i < 8) {
    //                 $("#shopRow2").append(itemText);
    //             }
    //         });
    //         console.log(movies);
    //         if (x === 0) {
    //             $('#shopPrevious').attr('onclick', 'shopMoviesAjax(' + x + ')');
    //             $('#shopPrevious').attr('disabled', true);
    //             $('#shopNext').attr('onclick', 'shopMoviesAjax(' + (x + 1) + ')');
    //             $('#shopPrevious').attr('disabled', false);
    //         } else if (x < shopNbrPages) {
    //             $('#shopPrevious').attr('onclick', 'shopMoviesAjax(' + (x - 1) + ')');
    //             $('#shopPrevious').attr('disabled', false);
    //             $('#shopNext').attr('onclick', 'shopMoviesAjax(' + (x + 1) + ')');
    //             $('#shopPrevious').attr('disabled', false);
    //         } else {
    //             $('#shopPrevious').attr('onclick', 'shopMoviesAjax(' + (x - 1) + ')');
    //             $('#shopPrevious').attr('disabled', false);
    //             $('#shopNext').attr('onclick', 'shopMoviesAjax(' + x + ')');
    //             $('#shopPrevious').attr('disabled', true);
    //         }
    //     });
    // }
    // shopMoviesAjax(0);

    // $('#shopPrevious').on('click', function() {
    //     shopCalculatePages();
    //     console.log('shopCurrent = ' + shopCurrent);
    //     console.log('shopNbrPages = ' + shopNbrPages);
    //     shopMoviesAjax(shopCurrent);
    //     if (shopCurrent > 0) {
    //         shopCurrent--;
    //     }
    //     shopNbrPages = 0;
    // });
    // $('#shopNext').on('click', function() {
    //     shopCalculatePages();
    //     console.log('shopCurrent = ' + shopCurrent);
    //     console.log('shopNbrPages = ' + shopNbrPages);
    //     shopMoviesAjax(shopCurrent);
    //     if (shopCurrent <= shopNbrPages) {
    //         shopCurrent++;
    //     }
    //     shopNbrPages = 0;
    // });
});

function shopMoviesAjax(x) {
    // alert('test');
    // shopNbrPages = 0;
    // shopCalculatePages();
    // console.log(shopCalculatePages());
    $("#shopRow1").empty();
    $("#shopRow2").empty();
    $.getJSON("movies.json", function(data) {
        let shopNbrPages = 0;
        $.each(data.shopMovies, function(i, item) {
            shopNbrPages++;
        });
        shopNbrPages = Math.ceil(shopNbrPages / 8);
        console.log(shopNbrPages);
        let movies = [];
        let start = x * 8;
        $.each(data.shopMovies, function(i, item) {
            if (i >= start && i < (start + 8)) {
                movies.push(item);
            }
        });
        $.each(movies, function(i, movie) {
            itemText = "<div class='col-3'>";
            itemText += "<a onclick='shopTrailer(" + movie.id + ")'>";
            itemText += "<img src='" + movie.image + "' alt='Movie - Poster'>";
            itemText += "<h5>Movie title</h5>";
            itemText += "<p>2016<span>15 Euros</span></p>";
            itemText += "</a>";
            itemText += "</div>";
            if (i === 0) {
                $("#shopRow1").html(itemText);
            } else if (i < 4) {
                $("#shopRow1").append(itemText);
            } else if (i === 4) {
                $("#shopRow2").html(itemText);
            } else if (i < 8) {
                $("#shopRow2").append(itemText);
            }
        });
        console.log(movies);
        if (x === 0) {
            console.log('disable');
            $('#shopPrevious').addClass('isDisabled');
            $('#shopNext').attr('onclick', 'shopMoviesAjax(' + (x + 1) + ')');
            $('#shopNext').removeClass('isDisabled');
        } else if (x < shopNbrPages - 1) {
            $('#shopPrevious').attr('onclick', 'shopMoviesAjax(' + (x - 1) + ')');
            $('#shopPrevious').removeClass('isDisabled');
            $('#shopNext').attr('onclick', 'shopMoviesAjax(' + (x + 1) + ')');
            $('#shopNext').removeClass('isDisabled');
        } else {
            $('#shopPrevious').attr('onclick', 'shopMoviesAjax(' + (x - 1) + ')');
            $('#shopPrevious').removeClass('isDisabled');
            $('#shopNext').attr('onclick', 'shopMoviesAjax(' + x + ')');
            $('#shopNext').addClass('isDisabled');
            $('#shopNext').addClass('isDisabled');
        }
    });
}
shopMoviesAjax(0);

function shopTrailer(x) {
    $.getJSON("movies.json", function(data) {
        // $.each(data.shopMovies, function(i, item) {
        //     shopNbrPages++;
        // });
        let movie = data.shopMovies[x];
        console.log(movie.title);
        $('#movieTrailer iframe').attr('src', movie.trailer);
        $('#movieTrailer .trailerTitle').text(movie.title);
        $('#movieTrailer .trailerStory').text(movie.description);
        $('#movieTrailer .trailerDate').text(movie.date);
        $('#movieTrailer .trailerPrice').text(movie.price);
        let trailerCats = "";
        // movie.genres.forEach(element => {
        //     trailerCats += element.label;
        // });
        movie.genres.forEach((val, key, arr) => {
            if (!Object.is(movie.genres.length - 1, key)) {
                trailerCats += val.label;
                trailerCats += " | ";
            } else {
                trailerCats += val.label;
            }
        });
        $('#movieTrailer .trailerCats').text(trailerCats);
    });
}
shopTrailer(0);

function contactInfo() {
    let firstName = document.getElementById('contactFirstName').value;
    let surname = document.getElementById('contactSurname').value;
    let email = document.getElementById('contactEmail').value;
    let subject = document.getElementById('contactSubject').value;
    let message = document.getElementById('contactMessage').value;
    let text = "Full name: " + firstName + " " + surname + "\n";
    text += "Email: " + email + "\n";
    text += "Subject: " + subject + "\n";
    text += "Message: " + message + "\n";
    alert(text);
}


 // Get the modal
 var modal = document.getElementById('myModal');
        
 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks the button, open the modal 
 btn.onclick = function() {
     modal.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 
 //outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

// Get the modal
var modal2 = document.getElementById('myModal2');
        
// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event2) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}




 //boutonvoirplus

function togglediv(bouton, id) { 
  var div = document.getElementById(id); 
  if(div.style.display=="none") { 
    div.style.display = "block"; 
    bouton.innerHTML = "Less Movies"; 
  } else { 
    div.style.display = "none"; 
    bouton.innerHTML = "More Movies"; 
  }
}

function togglediv2(bouton, id) { 
    var div = document.getElementById(id); 
    if(div.style.display=="none") { 
      div.style.display = "block"; 
      bouton.innerHTML = "Less Series"; 
    } else { 
      div.style.display = "none"; 
      bouton.innerHTML = "More Series"; 
    }
  }
  //triage
  filterSelection("all")

  function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("filterDiv");
      if (c == "all") c = "";
      for (i = 0; i < x.length; i++) {
          RemoveClass(x[i], "show");
          if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
      }
  }

  function AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {
              element.className += " " + arr2[i];
          }
      }
  }

  function RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
              arr1.splice(arr1.indexOf(arr2[i]), 1);
          }
      }
      element.className = arr1.join(" ");
  }




  filterSelection2("all2")

  function filterSelection2(c) {
      var x, i;
      x = document.getElementsByClassName("filterDiv2");
      if (c == "all2") c = "";
      for (i = 0; i < x.length; i++) {
          RemoveClass(x[i], "show2");
          if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show2");
      }
  }

  function AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {
              element.className += " " + arr2[i];
          }
      }
  }

  function RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
              arr1.splice(arr1.indexOf(arr2[i]), 1);
          }
      }
      element.className = arr1.join(" ");
  }




  // Add active class 
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
      });
  }
// modals
  $('.launch-modal').on('click', function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
});