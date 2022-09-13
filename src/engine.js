$(document).click(function(e) {
    e.preventDefault();

    var home = document.getElementById('home');
    var projects = document.getElementById('projects');

    
    home.click(function(e) {
        // e.preventDefault();
        $(document).scrollTop(100);
    })

    projects.click(function(e) {
        $(document).scrollTo('.projects')
    })

})