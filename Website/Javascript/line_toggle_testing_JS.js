window.onload = init;

function init() {
    var lines = document.getElementsByClassName("line");
    for (var i = 0; i < lines.length; i++) {
        lines[i].addEventListener('mouseover', toggleOn, false);
        lines[i].addEventListener('mouseleave', toggleOff, false);
        lines[i].addEventListener('click', toggleOn, false);
        lines[i].addEventListener('touchenter', toggleOn, false);
    }
    
    var lineips = document.getElementsByClassName("line_info_point");
    var lines = document.getElementsByClassName("line");
    console.log('What is "this" right now? ' + this.id)
    for (var i = 0; i < lineips.length; i++) {
        /* Show the lineInfoGloss associated with "this".  */
        var lineInfos = lineips[i].getAttribute("data-lineInfo").split(' ');
        if (lineInfos.includes('line_info_point-' + this.id)) {
            console.log('lineInfos = ' + lineInfos);
            for (j = 0; j < lineInfos.length; j++) {
                var lineNum = lineInfos[j].split('-')[1];
                console.log('HEY I am the lineNum = ' + lineNum);
                for (k = 0; k < lines.length; k++) {
                    if (lines[k].id === lineNum) {
                        console.log('I am the actual lines signalled here ' + lines[k].id);
                        lines[k].classList.add("highlight");
                    }
                }
            }
        }
    }
    
    
    function toggleOn() {
        if (lines[k].id === lineNum) {
            console.log('I am the actual lines signalled here ' + lines[k].id);
            lines[k].classList.add("on");
            /*lineips[i].classList.add("on")  */
        }
    }
    
    
    function toggleOff () {
        if (lines[k].id === lineNum) {
            console.log('I am the actual lines signalled here ' + lines[k].id);
            lines[k].classList.remove("on");
        }
    }
}