document.addEventListener('DOMContentLoaded', function() {

    function getSearchResults(searchTerm) {

    }

    document.getElementById("submit").addEventListener('click', function() {

        searchTerm = document.getElementById('search').value;
        getSearchResults(searchTerm)
    })
});
