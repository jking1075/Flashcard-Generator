

module.exports = ClozeCard

//two arguements: `text` and `cloze`
function ClozeCard (text, cloze) {
	this.text = text;
	this.cloze = cloze;
	console.log(this.text, this.cloze);

}

var newClozeCard = new ClozeCard("George Washington was the first president of the United States", "George Washigton")




 // The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.

 // The constructed object should have a `partial` property that contains _only_ the partial text.

 // The constructed object should have a `fullText` property that contains _only_ the full text.

 // The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.
 
 // Use prototypes to attach these methods, wherever possible.


