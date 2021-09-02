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
        var lineNums = lineNums[j].split('-')[2];
        console.log('lineNums = ' + lineNums);
        /* We should be able to say: where lineNums[j] == this.id then add classList.on */
        /* Also, we would trigger next event: */
        
     /* This part should go looking for other lines to highlight. */   
        for (var k = 0; k < lineNums.length; k++) {
            var lineMatches = document.getElementsByClassName("line").getAttribute("id") == lineNums[k]
           /* We need to say, for each possible l in lineMatches, check if == to lineNums[k] */
            for (var l = 0; l < lineMatches.length; l++) {
                
                
            }
        }
        
    }
    
    
    
    
}
    
    

    
    
    
}

