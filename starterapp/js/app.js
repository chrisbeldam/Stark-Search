// Function which obtains the wikipedia data for the form
let displayWikipediaData = () => {
    let $linksElement = $('#links');
    let searchString = $('#searchString').val();
    let wikipediaURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchString + "&format=json&callback=wikiCallback";
    $.ajax({
        url: wikipediaURL,
        dataType: 'jsonp',
        jsonp: 'callback',
        success: (res) =>{
           let linkList = res[1];
            linkList.forEach(function(item){ // Function is run each time, es6
                let url = 'https://en.wikipedia.org/wiki/' + item;
                $linksElement.append('<li><a href="' + url + '" target="_blank">' + item + '</a></li>');
                return url;
            })
           
        }
    });
    return false;
};

$('#form').submit(displayWikipediaData);