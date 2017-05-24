(function(){
  let pageWidth = document.documentElement.clientWidth;
  let style = document.createElement('style')
  style.innerHTML = 'html{font-size:' + pageWidth/16 + 'px;}'
  document.head.appendChild(style)
})()