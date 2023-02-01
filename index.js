var currentSelection = 'none';
var selectionList = undefined;

const defaultColor = "#ffffff0a";
const mouseOverFontColor = "#ffffff";
const mouseOverColor = "#959eac"; //this is also the font color on mouse leave
const clickedColor = "#fb7913ff";

function changeMouseFunctionsOverLeaveClick(domObject){
    
    domObject.onmouseover = function(){
        if(domObject.id==currentSelection) return;
        domObject.style.backgroundColor = mouseOverColor;
        domObject.style.color = mouseOverFontColor;
    }

    domObject.onmouseleave = function(){
        if(domObject.id==currentSelection) return;
        domObject.style.backgroundColor= defaultColor;
        domObject.style.color = mouseOverColor;
    };

    domObject.onclick = function(){
        if(currentSelection!=domObject.id && currentSelection!='none')
        {
            //clear out the other clicked dom if we click another
            let oldClicked = document.getElementById(currentSelection);
            oldClicked.style.backgroundColor= defaultColor;
            oldClicked.style.color = mouseOverColor;
        }

        if(currentSelection==domObject.id){
            //in case we click the same button then lets deselect it
            let oldClicked = document.getElementById(currentSelection);
            oldClicked.style.backgroundColor= mouseOverColor;
            oldClicked.style.color = mouseOverFontColor;
            currentSelection = 'none';
            return;
        }
        currentSelection = domObject.id;
        domObject.style.backgroundColor= clickedColor;
        domObject.style.color = mouseOverFontColor;
    }

}



window.onload = function(){
    selectionList = [
        document.getElementById('select_1'),
        document.getElementById('select_2'),
        document.getElementById('select_3'),
        document.getElementById('select_4'),
        document.getElementById('select_5'),
    ];
    
    selectionList.forEach(element => {
        changeMouseFunctionsOverLeaveClick(element);
    });


}