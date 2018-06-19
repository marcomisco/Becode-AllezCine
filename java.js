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