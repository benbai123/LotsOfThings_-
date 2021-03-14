import { Researcher, Paper } from "yoastseo";

function updateWordCount () {
	let value = document.querySelector('textarea').value;
	// yoastseo 不支援中文, 需要自己斷中文字
	let splitedWords = value.match(/[\u00ff-\uffff]|\S+/g).join(' ')
	const paper = new Paper(splitedWords , {
	    
	} );
	const researcher = new Researcher( paper );
	document.querySelector('.word-count').innerHTML = 
		researcher.getResearch( "wordCountInText" );
	document.querySelector('.sentence-count').innerHTML = 
		JSON.stringify(researcher.getResearch( "countSentencesFromText" ));
}
document.querySelector('textarea').addEventListener('input', updateWordCount);


updateWordCount();

