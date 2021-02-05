(function(){
    var flickrKey = 'a79dbdd1d24bbdf97f202f74ff0b63ec';
    var flickrBaseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=';
    var sufix = 'q';

    function getPhotos(searchTerm) {
        var url = `${flickrBaseUrl}${flickrKey}&text=${searchTerm}`;
        
        return(
            fetch(url)
                .then(response => response.json())
                .then(data => data.photos.photo)
        )
    }

    var app = document.querySelector('#app');
    var searchForm = app.querySelector('#searchForm');
    var searchTerm = app.querySelector('#searchInput');
    var results = app.querySelector('#results');

    function createFlickrThumb(photoData) {
        var link = document.createElement('a');
        link.setAttribute('href', photoData.large);
        link.setAttribute('target', '_blank');

        var image = document.createElement('img');
        image.setAttribute('src', photoData.thumb);
        image.setAttribute('alt', photoData.title);
        
        link.appendChild(image);

        return link;
    }

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault()
        var filter = searchTerm.value;
        results.innerText = 'Carregando ...';

        getPhotos(filter)
            .then(function(result) {
                results.innerText = '';
                result.forEach(function(photo) {
                    var url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
                    var thumbnail = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${sufix}.jpg`

                    var item = createFlickrThumb({
                        thumb:thumbnail,
                        large:url,
                        title:photo.title
                    })

                    results.appendChild(item)
                })
            })
    })
}())