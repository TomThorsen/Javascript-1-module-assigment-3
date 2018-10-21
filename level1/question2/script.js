//Console.log out elements in JSON file
$.getJSON("author.json", function(json) { // import external json using jQuery and ajax
    for ( key in json.video[0] ) {
        if (json.video[0].hasOwnProperty(key)) { // iterate elements of first array
            if (key !== "author") {
                console.log(key + ": " + json.video[0][key]);
            } else for ( key in json.video[0].author.data[0] ) { // iterate elements of second array
                if (json.video[0].author.data[0].hasOwnProperty(key)) {
                    console.log(key + ": " + json.video[0].author.data[0][key]);
                }
            }
        }
    }
});
// used more time on this single question then probably all of the other questions of all javascript assignments combined :)