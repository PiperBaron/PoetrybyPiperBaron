window.onload = init;

function init() {
    var lines = document.getElementsByClassName("line");
    for (var i = 0; i < lines.length; i++) {
        lines[i].addEventListener('mouseover', toggle, false);
        lines[i].addEventListener('mouseleave', toggle, false);
        lines[i].addEventListener('click', toggle, false);
        lines[i].addEventListener('touchenter', toggle, false);
    }
}

function toggle() {
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
                    /*if (lines[k].classList.contains("on")) {
                     lines[k].classList.remove("on");
                     } */
                    if (lines[k].id === lineNum) {
                        console.log('I am the actual lines signalled here ' + lines[k].id);
                        /*if (lineips[i].classList.contains("on")) {
                         /\*lineips[i].classList.remove("on");*\/
                         lineips[i].classList.add("hide");
                         } else* if (lineips[i].classList.contains("hide")) {
                         lineips[i].classList.remove("hide"); */
                        lineips[i].classList.add("on");
                        var linesContent = lines[k].textContent;
                        var linesHTML = lines[k].innerHTML;
                        console.log('linesHTML = ' + linesHTML);
                        console.log('lines[k] = ' + lines[k].textContent);
                        if (linesHTML === linesContent) {
                            lines[k].innerHTML = '<span class="line_span">' + linesHTML + '</span>';
                            var linesSpan = document.getElementsByClassName("line_span");
                            for (m = 0; m < linesSpan.length; m++) {
                                console.log('linesSpan = ' + linesSpan[m]);
                                linesSpan[m].classList.toggle("on");
                            }
                            /*console.log('linesSpan = ' + linesSpan[0]);*/
                             /*linesSpan[k].classList.toggle("on");*/
                        } else {
                            lines[k].innerHTML == linesContent;
                        }
                    }
                }
            }
        }
    }
}