// scripts to enhance the dYNAMICNESS of my website 

const SONG_CHANCE = 0.1;

// On loading the main page ... 
$(function() {
    console.log( "ready!" );

    // PLAY SONGS (not implemented)
    var newSongChance = Math.random(); 

	// Random meme 
	//var memelist = $.getJSON("./other-data/memes.json");

	// BUTTON FUNCTIONALITY
	// MEME BUTTON
	$("#meme-button").click(function () {
		console.log("MEME BUTTON CLICKED");
		
		$.getJSON("./other-data/memes.json", function(data) {
			var memeCount = data.videos.length;
			var memePick = Math.floor(Math.random() * memeCount);

			window.open(data.videos[memePick].link, data.videos[memePick].title);
		});

	});
});



// PIC FLICKERING (in development)
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

