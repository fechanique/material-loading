function materialLoading(state){
  if(state) document.getElementById('materialLoading').className = 'show';
  else document.getElementById('materialLoading').className = 'hide';
}
window.addEventListener('load', function(){
  console.log('material-loading.js v1.0')
  var ml = document.createElement('div');
    ml.id = 'materialLoading';
    ml.className = 'hide';
  var mlCentered = document.createElement('div');
    mlCentered.id = 'materialLoadingCentered'
  var mlContent = document.createElement('div');
    mlContent.id = 'materialLoadingContent'
    mlContent.innerHTML = '<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>'
  mlCentered.appendChild(mlContent)
  ml.appendChild(mlCentered);
  document.body.appendChild(ml)
})
