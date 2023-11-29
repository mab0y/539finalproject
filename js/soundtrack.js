document.addEventListener('DOMContentLoaded', function() {
    var iframe = document.getElementById('spotify-link');
    var image1 = document.getElementById('witcher');
    var image2 = document.getElementById('redemption');
    var image3 = document.getElementById('bf');
    var image4 = document.getElementById('mh');
    var image5 = document.getElementById('civilization');
    var image6 = document.getElementById('assassin');
    var image7 = document.getElementById('dota');
    var image8 = document.getElementById('fc');

    image1.addEventListener('click', function() {
        iframe.src = 'https://open.spotify.com/embed/album/6pYNEn4tMc6gdv5fIZf5yn?utm_source=generator';
        scrollToIframe();
    });
    image2.addEventListener('click', function() {
        iframe.src = 'https://open.spotify.com/embed/album/5Oli3gQJrHdahY7FDEoofW?utm_source=generator';
        scrollToIframe();
    });

    image3.addEventListener('click', function() {
        iframe.src = 'https://open.spotify.com/embed/playlist/2CaO2my68JsZ4CLiL1UVJB?utm_source=generator';
        scrollToIframe();
    });

    image4.addEventListener('click', function() {
        iframe.src = 'https://open.spotify.com/embed/album/0H4cXrYB3b8IDEFgTMNcAT?utm_source=generator';
        scrollToIframe();
    });

    image5.addEventListener('click', function() {
        iframe.src = 'https://open.spotify.com/embed/playlist/0sl9ccXJZol3YmVmnrCJGD?utm_source=generator';
        scrollToIframe();
    });

    image6.addEventListener('click', function() {
        iframe.src = 'https://open.spotify.com/embed/album/09ixa10YNG75H0HDKbMAiZ?utm_source=generator';
        scrollToIframe();
    });

    image7.addEventListener('click', function() {
        iframe.src = 'https://open.spotify.com/embed/album/2YFDpVVSzAtOMll0CyPfms?utm_source=generator';
        scrollToIframe();
    });

    image8.addEventListener('click', function() {
        iframe.src = 'https://open.spotify.com/embed/playlist/37i9dQZF1DX3rXtgePifMs?utm_source=generator';
        scrollToIframe();
    });

    function scrollToIframe() {
        iframe.scrollIntoView({behavior: 'smooth'});
    }
});
