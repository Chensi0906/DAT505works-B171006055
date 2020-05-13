// 游戏的入口文件
let app = new App;
let info = new Info;
let view = new View;

// 监听data-go的按钮，点击进入相对应的页面
$('[data-go]').click(function(ev){
  view.play($(this).data('go'));
})

// 进入主页初始化
view.listen('home', () => {
  app.init();
})

// $('.screen').click(() => {
//   if(view.name == 'info'){
//     view.play('game');
//   }
//   if(view.name == 'game' && app.rFlag){
//     app.showSelectRiddle();
//   }
// })

// 进入游戏页面开始游戏
view.listen('game', () => {
  app.play();
})

// 进入信息页播放相对应的信息
view.listen('info', () => {
  info.play();
  setTimeout(() => {
    $(document).on('click', () => {
      if(view.name == 'info'){
        view.play('game');
      }
    })
  }, 0);
})

// 点击确认选中按钮
$('.enterAnimal').click(() => {
  app.enterAnimal();
})

// 一开始先进入主页
view.play('home')
// view.play('info')
// view.play('game')
// view.play('reset')
// view.play('parse')
// view.play('end')