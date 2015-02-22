var prefix = 'mep_0_captions_';
var priorities = ['en', 'fr', 'es', 'ru'];

var findAllLanguages = function() {
	var subsDivAll = document.getElementsByClassName('mejs-captions-selector');

	if(subsDivAll.length > 0) {
		var subsDiv = subsDivAll[0];
		var subs = subsDiv.getElementsByTagName('input');
		console.log(subs.length);
		for (var i = 0; i < subs.length; i++) {
			console.log(subs[i].getAttribute('id'));
		}
	}
}

var enableSubtitles = function() {
	for (var i = 0; i < priorities.length; i++) {
		var input_id = prefix + priorities[i];
		var subs_input = document.getElementById(input_id);
		if(subs_input) {
			// console.log('Clicking ' + input_id);
			subs_input.click();
			clearInterval(intervalID);
			break;
		}
	}
}

var intervalID = setInterval(enableSubtitles, 1000);