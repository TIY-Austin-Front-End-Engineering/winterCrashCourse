var head = $('.head');
var torso = $('.torso');
var bottom = $('.bottom');
var nextBg = $('input.next');
var prevBg = $('input.prev');
var save = $('#submit');
var nameInput = $('#snowman-name');
var nameDisplay = $('.snowman-name');

var headList = $('.upper-bodies button');
var torsoList = $('.mid-bodies button');
var bottomList = $('.lower-bodies button');
var backgroundList = $('.backgrounds li');

nextBg.on('click', function(evt) {
	var prev = $('li.prev');
	var curr = $('li.curr');
	var next = $('li.next');
	var nextNext = next.nextElementSibling;
	if (!nextNext) {
		nextNext = backgroundList[0];
	}
	prev.removeClass('prev');
	curr.addClass('prev');
	curr.removeClass('curr');
	next.addClass('curr');
	next.removeClass('next');
	nextNext.addClass('next');
})

prevBg.on('click', function(evt) {
	var prev = $('li.prev');
	var curr = $('li.curr');
	var next = $('li.next');
	var prevPrev = prev.prev();
	if (!prevPrev) {
		prevPrev = backgroundList[backgroundList.length - 1];
	}
	next.removeClass('next');
	curr.addClass('next');
	curr.removeClass('curr');
	prev.addClass('curr');
	prev.removeClass('prev');
	prevPrev.addClass('prev');
})

headList.on('click', function(evt) {
	head.html('');
	var img = $(evt.target).clone();
	head.append(img);
});

torsoList.on('click', function(evt) {
	torso.html('');
	var img = $(evt.target).clone();
	torso.append(img);
});

bottomList.on('click', function(evt) {
	bottom.html('');
	var img = $(evt.target).clone();
	bottom.append(img);
});

save.on('click', function(evt) {
	nameDisplay.text(nameInput.val());
	nameInput.val('');
	var data = {
		name: nameDisplay.text(),
		bg: $('li.curr img').attr('src'),
		head: head.find('img').attr('src'),
		torso: torso.find('img').attr('src'),
		bottom: bottom.find('img').attr('src')
	};
	$.ajax({
		url: '/api/snowmen',
		data: JSON.stringify(data),
		contentType: 'application/json',
		type: 'POST'
	})
})
