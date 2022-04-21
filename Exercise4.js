function update() {
	var borderRed=document.getElementById("borderRed").value;
  	var borderGreen=document.getElementById("borderGreen").value;
  	var borderBlue=document.getElementById("borderBlue").value;
  	var size=document.getElementById('size').value;
  	var backgroundRed=document.getElementById("backgroundRed").value;
  	var backgroundGreen=document.getElementById("backgroundGreen").value; 
  	var backgroundBlue=document.getElementById("backgroundBlue").value;
    
    text.style.borderColor='rgb('+borderRed+','+borderGreen+','+borderBlue+')';
    text.style.backgroundColor='rgb('+backgroundRed+','+backgroundGreen+','+backgroundBlue+')';
    text.style.borderBottomWidth=size;
    text.style.borderRightWidth=size;
    text.style.borderLeftWidth=size;
    text.style.borderTopWidth=size;
}