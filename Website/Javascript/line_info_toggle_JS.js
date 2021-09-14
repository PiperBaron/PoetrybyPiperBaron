window.onload = init;
var lineips = document.getElementsByClassName("line_info_point");
var lines = document.getElementsByClassName("line");

function init() {
    for (var i = 0; i < lines.length; i++) {
        lines[i].addEventListener('mouseover', toggle, false);
        lines[i].addEventListener('mouseleave', toggle, false);
        lines[i].addEventListener('click', toggle, false);
        lines[i].addEventListener('touchenter', toggle, false);
    }
}

function toggle() {
toggleOff()
for (var i = 0; i < lineips.length; i++) {
/* Show the lineInfoGloss associated with "this".  */
    var lineInfos = lineips[i].getAttribute("data-lineInfo").split(' ');
    if (lineInfos.includes('line_info_point-' + this.id)) {
     console.log('lineInfos = ' + lineInfos);
     lineips[i].classList.toggle("on");
     for (j = 0; j < lineInfos.length; j++) {
        var lineNum = lineInfos[j].split('-')[1]; 
         console.log('HEY I am the lineNum = ' + lineNum);
         for (k = 0; k < lines.length; k++) {
                if (lines[k].id === lineNum ) {
                    console.log('I am the actual lines signalled here ' + lines[k].id);
                    lines[k].firstElementChild.classList.toggle("on");
                    }
                }
            }         
        } 
    }     
}
    
function toggleOff()  {
for (var i = 0; i < lines.length; i++) {
    lines[i].firstElementChild.classList.remove("on");
}
for (var j = 0; j < lineips.length; j++) {
    lineips[j].classList.remove("on");
}
}
