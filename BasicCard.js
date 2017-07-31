module.exports = BasicCard

  var newBasicCard = new BasicCard ("Who was the first president of the United States?", "George Washington");
  
  // The constructor should accept two arguments: `front` and `back`.
  function BasicCard(front, back) {
	this.front = front;
	this.back = back;
	console.log(this.front, this.back);
}
//  contains the text on the front of the card.

 
  // The constructed object should have a `back` property that contains the text on the back of the card.




//First Step create BasicCard.js and ClozeCard.js
//make a constructor which takes two parameters: front and back
//make a new object
//display front and back