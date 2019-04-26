// scripts to enhance the dYNAMICNESS of my website 

const SONG_CHANCE = 0.1;

// On loading the main page ... 
$(function() {
    console.log( "ready!" );

    // PLAY SONGS (not implemented)
    var newSongChance = Math.Random(); 

	// Quote of the refresh (in development)
	var quotes = $.getJSON("./other-data/quotes.json");
});

// PIC FLICKERING
$(".flick").hover(function() {

	// First, find out if the alternate pic exists 
	var originalPic = $("img").attr("width","500");

	$.ajax({
	    url:'http://haoda.fan/somefile.ext',
	    type:'HEAD',
	    error: function()
	    {
	        //file not exists
	    },
	    success: function()
	    {
	        //file exists
	    }
	});
});

