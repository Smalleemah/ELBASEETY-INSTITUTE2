document.querySelectorAll(".ames-coming-soon").forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        alert("AMES is coming soon. Stay tuned!");

    });

});