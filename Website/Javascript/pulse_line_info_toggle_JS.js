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
for (var i = 0; i < lineips.length; i++) {
/* Show the lineInfoGloss associated with "this".  */
    var lineInfos = lineips[i].getAttribute("data-lineInfo").split(' ');
    console.log('lineInfos = ' + lineInfos);
        for (j = 0; j < lineInfos.length; j++) {
            var lineNum = lineInfos[j].split('-')[1];
            console.log('HEY I am the lineNum = ' + lineNum);
            if (lineNum === this.id) {
                lineips[i].classList.toggle("on")
                /* START THE NEW FUNCTION HERE. SEND THIS line[ip] info to the next function */
            
      /* For the next part, we need to go looking for 
       * the set of lines associated with lineips at this point and highlight them.  */ 
 
       
           /* We need to say, for each possible l in lineMatches, check if == to lineNums[k] */
           /* for (var l = 0; l < lineMatches.length; l++) {*/             
                
            }
        } 
    }  
    
}
    
    

    
    
    


