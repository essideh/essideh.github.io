document.addEventListener('DOMContentLoaded', function() {
    SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('search-results'),
        json: '/assets/js/search.json',
        searchResultTemplate: '<li><a href="{{ site.baseurl }}{url}"><div class="search-title">{title}</div><div class="search-content">{content}</div></a></li>',
        noResultsText: 'No results found',
        limit: 10,
        fuzzy: false
    });
});