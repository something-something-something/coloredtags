document.addEventListener('DOMContentLoaded',()=>{
	console.log('hi');
	doStuff();
})


function doStuff(){
	console.log('test');
	let wordlist=randomWordArray(100);
	wordlist=[
		'Canvas',
		'Phone Bank',
		'Register Voters',
		'Write letters',
		'Lit Drop',
		'Community',
		'Zoom',
		'Spanish',
		'Get out the Vote',
		'Voter Registration',
		'Text Bank',
		'Litirature Drop',
		'Democrats',
		'collage',
		'Meet & Greet',
		'Meeting',
		'Meet up',
		'Presidential Election',
		'Test Tag',
		'Short',
		'the',
		'The',
	].concat(wordlist);
	for(let w of wordlist){
		let wordEl=document.createElement('div');
		
		let theColor=makeStringToColorA(w);
	
		wordEl.style.borderColor='hsl('+theColor.hue+','+theColor.sat+'%,'+theColor.lum+'%)';
		
		let theColorB=makeStringToColorB(w);
		wordEl.style.backgroundColor='hsl('+theColorB.hue+','+theColorB.sat+'%,'+theColorB.lum+'%)';

		let theColorC=makeStringToColorC(w);
		wordEl.style.borderBottomColor='hsl('+theColorC.hue+','+theColorC.sat+'%,'+theColorC.lum+'%)';

		wordEl.textContent=w;


		document.getElementById('words').appendChild(wordEl);
	}
}

function randomWordArray(num){
	let words=[]

	for(let i=0;i<num;i++){
		words.push(makeRandomWord());
	}
	return words;
}


function makeRandomWord(){
	
	let letterNum=Math.floor(Math.random()*10)+1+5;
	let word='';
	for(let i=0; i< letterNum;i++){
		let l=Math.floor(Math.random()*24)+97;
		word=word+String.fromCharCode(l);
	}
	return word;
}

function makeStringToColor(str,hueDiv,hueAdd,satDiv,satAdd,lumDiv,lumAdd,bInt=true){
	
	
	let wordNumber=stringToBigInt(str,bInt);
	//console.log(wordNumber);
	if(typeof BigInt==='function'&&bInt){
		hueDiv=BigInt(hueDiv);
		hueAdd=BigInt(hueAdd);
		satDiv=BigInt(satDiv);
		satAdd=BigInt(satAdd);
		lumDiv=BigInt(lumDiv);
		lumAdd=BigInt(lumAdd);
	}

	let colorObj= {
		hue:(wordNumber%hueDiv)+hueAdd,
		sat:(wordNumber%satDiv)+satAdd,
		lum:(wordNumber%lumDiv)+lumAdd
	}

	console.log(colorObj);

	return colorObj;
}

function stringToBigInt(str,bInt=true){
	let numStr='';

	for(let i=0;i<str.length;i++ ){
		let repusentation=str.codePointAt(i).toString(16).padStart(4,'0');
		//console.log(repusentation);
		numStr=numStr+repusentation;

	}

	
	let wordNumber=0;
	if(typeof BigInt==='function'&&bInt){
		
		wordNumber=BigInt('0x'+numStr);
	}
	else{
		
		wordNumber=parseInt('0x'+numStr);
	}

	//console.log(wordNumber);

	return wordNumber;
}

function makeStringToColorA(str,bInt=true){
	return makeStringToColor(str,359,0,83,17,49,40,bInt);
}
function makeStringToColorB(str,bInt=true){
	let col= makeStringToColor(str,113,0,73,9,19,70,bInt);

	if(typeof BigInt==='function'&&bInt){
		col.hue=col.hue*BigInt(3);
	}
	else{
		col.hue=col.hue*3;
	}
	return col;
}

function makeStringToColorC(str,bInt=true){
	return makeStringToColor(str,100,200,93,0,67,30,bInt);
}