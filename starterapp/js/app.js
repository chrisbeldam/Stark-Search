// Function which obtains the wikipedia data for the form
let displayWikipediaData = () => {
    let $linksElement = $('#wikiLinks');
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
                $linksElement.append('<li style="margin:2%; color:white; background-color: #232C3F; width:100%;" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent wikiLinks" id="wikilinks"><a href="' + url + '" target="_blank" style="color:white;" id="wikiURL">' + item + '</a></li>');
                return url;
            })
            $('#clearScreen').prop('disabled', false);
            $('#clearScreen').css('background-color', '#232C3F');
        }
    });
    return false;
    $('#clearScreen').prop('disabled', false);
};

$('#form').submit(displayWikipediaData);

if($('#wikiURL').length <= 1){
    $('#clearScreen').prop('disabled', true);
    $('#clearScreen').css('background-color', 'grey');
}


$('#clearScreen').click(function() {
    $('#wikiLinks').remove();
});
