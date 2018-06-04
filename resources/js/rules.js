// set innerHTML of rules content
function setRulesContentAndAddListeners(content, removeThisListener, addThisListener) {
  rulesContent.innerHTML = content;
  nextArrow.className = 'rulesArrows';
  nextArrow.removeEventListener('click', removeThisListener);
  nextArrow.addEventListener('click', addThisListener);
}
// Show and hide rules
function showRules() {
  document.getElementById('closeRules').className = 'hideNow';
  document.getElementById('mainTitle').className = 'hideNow';
  document.getElementById('game').className = 'hideNow';

  document.getElementById('modal').className = 'rulesAppear';
  document.getElementById('modal-container').className = 'rulesAppear';

  rulesContent.innerHTML = rulesNo1;
  nextArrow.className = 'rulesArrows';
  nextArrow.addEventListener('click', rulesContentChangeNo2);
}

function rulesContentChangeNo2() {
  setRulesContentAndAddListeners(rulesNo2,
    rulesContentChangeNo2, rulesContentChangeNo3);
}
function rulesContentChangeNo3() {
  setRulesContentAndAddListeners(rulesNo3,
    rulesContentChangeNo3, rulesContentChangeNo4);
}
function rulesContentChangeNo4() {
  nextArrow.className = 'hidden';
  rulesContent.innerHTML = rulesNo4;
  document.getElementById('closeRules').className = 'deleteBtn';
}

// Hide Rules
function hideRules() {
  document.getElementById('modal').className = 'hidden';
  document.getElementById('modal-container').className = 'initialModal';
  document.getElementById('game').className = '';
  document.getElementById('mainTitle').className = '';
  nextArrow.className = 'rulesArrows';
}
