document.addEventListener("DOMContentLoaded", function () {

    function getSearchResults(searchTerm) {
        var searchURL = "http://www.google.com/search?q=" + searchTerm;
        var xml = new XMLHttpRequest();
        xml.responseType = "document";
        xml.onreadystatechange = function () {
            var xmlDoc = xml.response;
            var results = xmlDoc.getElementsByClassName("r");
            var display = "<h4 id='search-h4'>Search results for "+ searchTerm + "</h4><ol id='list'>";

            for (var i = 0; i < results.length; i++) {
                var child = results[i].childNodes[0];
                var text = child.childNodes[0].nodeValue;
                var link = child.getAttribute("href");

                if ( text !== null ) {
                    display += "<li class='list-result'><a href='" + link + "' target='_blank'>" + text + "</a></li>";
                }
            }

            display += "</ol>";
            document.getElementById("results").innerHTML = display;
        }
        xml.open("GET", searchURL, true);
        xml.send();
    }


    document.getElementById("submit").addEventListener("click", function () {
        searchTerm = document.getElementById("search");
        getSearchResults(searchTerm.value);
    })
});
