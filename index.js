var currentSelection = 'none';
var selectionList = undefined;
var rating_state = document.getElementsByClassName("rating-state");
var thank_state = document.getElementsByClassName("thank-you-state");

const defaultColor = "#ffffff0a";
const mouseOverFontColor = "#ffffff";
const mouseOverColor = "#959eac"; //this is also the font color on mouse leave
const clickedColor = "#fb7913ff";

function changeMouseFunctionsOverLeaveClick(domObject){

    let countFeedBack = document.getElementById("selection_count");
    let feedBackString = "You selected 0 out of 5";
    //countFeedBack.textContent = "a!";
    
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
            countFeedBack.textContent = "You selected 0 out of 5";
        }

        if(currentSelection==domObject.id){
            //in case we click the same button then lets deselect it
            let oldClicked = document.getElementById(currentSelection);
            oldClicked.style.backgroundColor= mouseOverColor;
            oldClicked.style.color = mouseOverFontColor;
            currentSelection = 'none';
            countFeedBack.textContent = "You selected 0 out of 5";
            return;
        }
        currentSelection = domObject.id;
        let splitter = currentSelection.split("_");
        feedBackString = "You selected "+splitter[1]+" out of 5";
        countFeedBack.textContent = feedBackString;
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

    var rating_state = document.getElementsByClassName("rating-state")[0];
    var thank_state = document.getElementsByClassName("thank-you-state")[0];

    console.log(rating_state);
    
    selectionList.forEach(element => {
        changeMouseFunctionsOverLeaveClick(element);
    });

    let submit_button = document.getElementById("submit_button");
    submit_button.onclick = function(){
        

        rating_state.style.display = "none";
        thank_state.style.display = "flex";
    }

    // rating_state.style.display = 'block';

}