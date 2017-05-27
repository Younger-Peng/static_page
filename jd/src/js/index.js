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

  window.addEventListener('scroll', function(e){
    const emptyBox = document.querySelector('.empty');
    let scrollTop = document.body.scrollTop
    const windowHeight = window.innerHeight;
    let offsetTop = emptyBox.offsetTop;
    const selfHeight = parseInt(getComputedStyle(emptyBox).height);
    let pos = offsetTop - scrollTop - windowHeight + selfHeight;
    console.log(pos);
    if(pos <= 0) {
      waterfall();
    }
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
    if(x > 16 * rem) x = 16 * rem;
    if(x < -32 * rem) x = -32 * rem;
    this.style.marginLeft = x +'px';
  })
})();

function getImgUrls(num){
  var height = 7.9 * rem
  var width = 7.9 * rem;
  var color,urls = []
  for(var i=0;i<num;i++){
    color = Math.random().toString(16).substring(2,8)
    urls.push("http://placehold.it/" + width + "x" + height + "/" + color + "/fff")
  }
  return urls
}

function waterfall(){
  let container = document.querySelector('.loadmore');
  let templateArr = [];
  var urls = getImgUrls(10);
  urls.forEach((url) => {
    let template = `
    <section class="half">
        <div class="pic">
          <img src="${url}" alt="">
        </div>
        <p class="description">文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述</p>
        <div class="price-info">
          <span>￥</span><strong>34.</strong><span>99</span>
          <a href="#"><button>看相似</button></a>
        </div>
      </section>
  `;
    templateArr.push(template)
  })

  templateArr.forEach((template) => {
    container.innerHTML += template;
  })
};

