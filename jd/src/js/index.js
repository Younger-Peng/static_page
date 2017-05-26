(function(){
  let pageWidth = document.documentElement.clientWidth;
  let style = document.createElement('style')
  window.rem = pageWidth/16
  style.innerHTML = 'html{font-size:' + rem + 'px;}'
  document.head.appendChild(style)
  //给顶部搜索栏添加滚动时背景色渐变函数

  window.addEventListener('scroll', function(e){
    let scrollTop = document.body.scrollTop
    let n = scrollTop / (5.25*rem)
    if(n>0.9) n = 0.9;
    document.querySelector('.top').style.background = 'rgba(255,0,0,'+ n +')'
  })

})();

(function(){
  let longpic = document.querySelector('.longpic')
  let ox;
  let startX;
  longpic.addEventListener('touchstart', function(e){
    startX = e.touches[0].clientX
    ox = getComputedStyle(this).marginLeft
    ox = parseInt(ox.slice(0,ox.length-2));
  })
  longpic.addEventListener('touchmove', function(e){
    let cx = e.touches[0].clientX
    x = cx - startX + ox;
    this.style.marginLeft = x +'px';
  })
})()



