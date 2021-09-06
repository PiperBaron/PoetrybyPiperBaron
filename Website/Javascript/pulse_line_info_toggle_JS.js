window.onload = init;

function init() {
    var lines = document.getElementsByClassName("line");
    for (var i = 0; i < lines.length; i++) {
        lines[i].addEventListener('mouseover', toggle, false);
        lines[i].addEventListener('click', toggle, false);
        lines[i].addEventListener('touchenter', toggle, false);     
    } 
}

function toggle() {
var lineips = document.getElementsByClassName("line_info_point");
var lines = document.getElementsByClassName("line");
for (var i = 0; i < lineips.length; i++) {
/* Show the lineInfoGloss associated with "this".  */
    var lineInfos = lineips[i].getAttribute("data-lineInfo").split(' ');
    console.log('lineInfos = ' + lineInfos);
        for (j = 0; j < lineInfos.length; j++) {
            var lineNum = lineInfos[j].split('-')[1];
            console.log('HEY I am the lineNum = ' + lineNum);
            for (k = 0; k < lines.length; k++) {
                if (lines[k].id === lineNum ) {
                    console.log('I am the actual lines signalled here ' + lines[k].id);
                    lines[k].classList.toggle("on")
                }
            }
            if (lineNum === this.id) {
                lineips[i].classList.toggle("on")         
                
            }
        } 
    }  
    
}
    
    

    
    
    


