/*
let line = document.querySelector('.cls-1')

function pathPrepare (element) {
    
    var lineLength = element.getTotalLength();
    element.style.strokeDasharray = lineLength;
    element.style.strokeDashoffset = lineLength;
    console.log(lineLength)
}

pathPrepare(line);

var controller = new ScrollMagic.Controller();

var tween = new TimelineMax()
.add(TweenMax.to(line, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
.add(TweenMax.to(line, 1, {ease:Linear.easeNone}), 0);// change color during the whole thing


var scene = new ScrollMagic.Scene({triggerElement: ".membership", duration: 400, tweenChanges: false})
.setTween(tween)
//.addIndicators() // add indicators (requires plugin)
.addTo(controller);


*/