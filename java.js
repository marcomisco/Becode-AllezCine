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

});

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

