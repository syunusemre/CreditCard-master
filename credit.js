function getInputValue(resultId,writeId){
  var getResult = document.getElementById(resultId);
  var long = String(getResult.value).length;
  var writeResult = document.getElementById(writeId);
  var children = writeResult.children;
  
  if (long==0) {
    var grandchild = children[0].children;
    grandchild[0].innerHTML="#";
  }
  else if (long<5) {
    grandchild = children[1].children;
    grandchild[0].innerHTML="#";

    grandchild = children[0].children;
    grandchild[long-1].innerHTML=String(getResult.value).slice(-1);
    grandchild[long].innerHTML="#";

    grandchild[2].style.marginTop="-15px";

    grandchild[long+1].innerHTML="#";
    grandchild[long+2].innerHTML="#";
  }
  else if (long<9) {
    grandchild = children[2].children;
    grandchild[0].innerHTML="#";

    grandchild = children[1].children;
    grandchild[long-5].innerHTML="*";
    grandchild[long-4].innerHTML="#";
    grandchild[long-3].innerHTML="#";
    grandchild[long-2].innerHTML="#";
  }
  else if (long<13){
    grandchild = children[3].children;
    grandchild[0].innerHTML="#";

    grandchild = children[2].children;
    grandchild[long-9].innerHTML="*";
    grandchild[long-8].innerHTML="#";
    grandchild[long-7].innerHTML="#";
    grandchild[long-6].innerHTML="#";
  }
  else{
    grandchild = children[3].children;
    grandchild[long-13].innerHTML=String(getResult.value).slice(-1);
    grandchild[long-12].innerHTML="#";
    grandchild[long-11].innerHTML="#";
    grandchild[long-10].innerHTML="#";

  }
  
}

function getName(resultId,writeId){
  var getResult = String(document.getElementById(resultId).value);
  var lastResult = getResult.toUpperCase();
  var writeResult = document.getElementById(writeId).innerHTML=lastResult;
 
}

function rotateCard(frontId,backId){
  var front = document.getElementById(frontId);
  var back = document.getElementById(backId);

  front.style.opacity="0";
  front.style.transform="rotateY(180deg)";

  back.style.opacity="1";
  back.style.transform="rotateY(360deg)";
}
function rotateCardReverse(frontId,backId){
  var front = document.getElementById(frontId);
  var back = document.getElementById(backId);

  front.style.opacity="1";
  front.style.transform="rotateY(0deg)";

  back.style.opacity="0";
  back.style.transform="rotateY(180deg)";
}
function cvvInput(gCvvId,wCvvId){
  var getResult = document.getElementById(gCvvId).value;
  var writeResult = document.getElementById(wCvvId).innerHTML=getResult;
}

function detailSelect(loginMonthId,monthId){
  var getResult = document.getElementById(loginMonthId).value;
  var writeResult = document.getElementById(monthId).innerHTML=getResult;
}
