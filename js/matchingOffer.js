
var allCards = document.querySelectorAll('.card:not(.link)');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var offerCardWrap = document.querySelector('.cards')
var cardLink = document.querySelectorAll('.card a')



function initCards(card, index) {
    let removedCard = document.querySelector('.removed')
  
    if(removedCard){
   
      
        let removedCardContent = removedCard.innerHTML;
        let removedCardClass = Array.from(removedCard.classList)
        let cardToAdd = document.createElement('div')      
      
        removedCardClass.forEach(classToAdd => {
          cardToAdd.classList.add(classToAdd)
        });
        cardToAdd.classList.remove('removed')
        cardToAdd.classList.remove('moving')
        cardToAdd.innerHTML = removedCardContent
        console.log(cardToAdd)
        offerCardWrap.appendChild(cardToAdd)
        addHammer(cardToAdd)
        
        
          
     

  }

    var newCards = document.querySelectorAll('.card:not(.removed)');
    newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
   
    });
    if(removedCard){
        setTimeout(() => {
            let toRemove = document.getElementsByClassName('removed');
            toRemove[0].remove()
        }, 100);
    }

    





}

initCards();



function addHammer(el){
  
    var hammertime = new Hammer(el);
    hammertime.domEvents = true;
    hammertime.get('pan').options.direction = 6
    hammertime.on('pan', function (event) {
      
     if (event.target.nodeName == 'A' || event.target.classList.contains("link") || event.target.nodeName == 'IMG')
     { return } 
  
      el.classList.add('moving');
       
      
    });
  
    hammertime.on('pan', function (event) {
      
      if (event.deltaX === 0) return;
      if (event.center.x === 0 && event.center.y === 0) return;
      if (event.target.nodeName == 'A' || event.target.classList.contains("link") || event.target.nodeName == 'IMG')
      { return } 
      
  
      var xMulti = event.deltaX * 0.01;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;
  
      event.target.style.transform = 'translate(' + event.deltaX + 'px) rotate(' + rotate + 'deg)';
    });
  
    hammertime.on('panend', function (event) {
      
      if (event.target.nodeName == 'A' || event.target.classList.contains("link") || event.target.nodeName == 'IMG')
      { return } 
      var moveOutWidth = document.body.clientWidth;
      var keep = Math.abs(event.deltaX) < 10 || Math.abs(event.velocityX) < 0.01;
  
      event.target.classList.toggle('removed', !keep);
      event.target.id = "removed"
  
      if (keep) {
        event.target.style.transform = '';
        initCards();
        
      } else {
        var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
        var toX = event.deltaX > 0 ? endX : -endX;
        var endY = Math.abs(event.velocityY) * moveOutWidth;
        var toY = event.deltaY > 0 ? endY : -endY;
        var xMulti = event.deltaX * 0.01;
        var yMulti = event.deltaY / 80;
        var rotate = xMulti * yMulti;
        event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
        
        
        initCards();
      }
    });
   
   
  
}

allCards.forEach(function (el) {
  addHammer(el);
  



});

function createButtonListener(love) {
  return function (event) {
    var cards = document.querySelectorAll('.card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[0];
    card.classList.add('removed')
    

    if (love) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
    }


    
    
    initCards();

    event.preventDefault();
  };
}

var leftListener = createButtonListener(false);
var rightListener = createButtonListener(true);

left.addEventListener('click', leftListener);
right.addEventListener('click', rightListener);



