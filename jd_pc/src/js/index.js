//获取占位图片的url地址
function getImgUrls(num){
  var height = 220;
  var width = 220;
  var color,urls = []
  for(var i=0;i<num;i++){
    color = Math.random().toString(16).substring(2,8)
    urls.push("http://placehold.it/" + width + "x" + height + "/" + color + "/fff")
  }
  return urls
}
//插入到dom中
function waterfall(){
  let container = document.querySelector('.loadmore>.container');
  let templateArr = [];
  var urls = getImgUrls(15);
  let floatArr = ['00',10,30,50,60,70,80,99];
  urls.forEach((url) => {
    let priceInt = 40 + Math.floor(Math.random()*60);
    let priceFloat = floatArr[Math.floor(Math.random()*floatArr.length)];
    let template = `
         <a href="#" class="box">
          <img src="${url}" alt="loadmore">
          <p>
            文字描述文字描述文字描述文字描述文字描述文字描述
            文字描述文字描述文字描述文字描述文字描述文字描述
            文字描述文字描述
          </p>
          <span>￥${priceInt}.${priceFloat}</span>
        </a>
  `;
    templateArr.push(template)
  })

  templateArr.forEach((template) => {
    container.innerHTML += template;
  })
};

//给window绑定scroll事件，#empty元素出现时，加载更多图片
(function(){
  let windowHeight = window.innerHeight;
  let empty = document.querySelector('#empty');
  let offsetHeight = empty.offsetHeight;
  let offsetTop;
  let scrollHeight;
  //顶部固定搜索栏
  let fixedSearch = document.querySelector('.search.fixed');
  window.addEventListener('scroll', function(){
    scrollHeight = document.body.scrollTop;
    offsetTop = empty.offsetTop;
    if(scrollHeight + windowHeight > offsetTop){
      waterfall()
    }

    //当body滚动距离超过660px时，固定搜索栏出现，反之消失
    if(scrollHeight >= 660) {
      fixedSearch.style.top = 0;
    }
    if(scrollHeight < 660) {
      fixedSearch.style.top = '-52px';
    }

  })
})()