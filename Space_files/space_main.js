$(function () {
	$("#throwableDiv").throwable();
	$("img").throwable();
});

$(function(){
	setInterval(sendAsteroid, randomNumber(500,1000));
});
function sendAsteroid() {
	$('body').append('<img src="Space_files/asteroid' +  randomNumber(4,1) + '.png" class="asteroid" style="top:1px; right:'+ randomNumber(0,1000) + 'px;"></img>')
	$(".asteroid").throwable({
		impulse:{
			f:randomNumber(20,40),
			p:{x:randomNumber(10,1),y:randomNumber(10,1)}
		}
	});

	setInterval(removeAsteroid, randomNumber(2000,3000));

	console.log("asteroid sent...")
}

function removeAsteroid() {
	if (!elementInViewport2($(".asteroid"))){
		$(".asteroid").remove()
	}	
}

function randomNumber(maxNum, minNum) {
	return Math.floor(Math.random() * maxNum) + minNum
}
function elementInViewport2(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
};