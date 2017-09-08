document.addEventListener('DOMContentLoaded', function() {

    function getSearchResults(searchTerm) {

        var searchURL = 'http://www.google.com/search?q=' + searchTerm;
        var xml = new XMLHttpRequest();
        xml.responseType = 'document';

        xml.onreadystatechange = function () {
            var xmlDoc = xml.response;
            var results = xmlDoc.getElementsByClassName("r");
            var display = "";
            for (var i = 0; i < results.length; i++) {
                var child = results[i].childNodes[0]
                var text = results[i].childNodes[0].childNodes[0].nodeValue;
                var link = results[i].childNodes[0].getAttribute('href')
                if ( text !== null ) {
                    display += "<li><a href='" + link + "' target='_blank'>" + text + "</a></li>"
                    // display += text
                }
            }

            document.getElementById('results').innerHTML = display;
        }

        xml.open("GET", searchURL, true);
        xml.send();
    }



    document.getElementById("submit").addEventListener('click', function() {

        searchTerm = document.getElementById('search');
        // document.getElementById('results').innerHTML = searchTerm.value;
        getSearchResults(searchTerm.value);
    })
});
