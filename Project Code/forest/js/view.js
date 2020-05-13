// 视图类，管理进入每一个页面的事件
class View{
  constructor(){
    this.name = '';
    this.fn1 = {};
    this.fn2 = {};
  }

  // 进入某个页面，然后执行相对应的监听事件
  play(name){
    if(name == this.name) return;
    this.fn2[this.name] && this.fn2[this.name]()
    this.name = name;
    this.fn1[name] && this.fn1[name]();
    $('.page').hide();
    $(`.${name}-page`).show();
  }

  // 监听页面事件，fn1进入事件, fn2退出事件
  listen(name, fn1, fn2){
    fn1 && (this.fn1[name] = fn1);
    fn2 && (this.fn2[name] = fn2)
  }
}

// 信息类, 每一轮播放相对应的信息
class Info{
  constructor(){
    this.step = [`
      <img src="./animal/狮子.png" alt="">
      <p class="describe">At 4:30 p.m. on April 10, 2055, the lion's entity was found by the forest river, and the abdomen was slightly swollen. The above suspects met the deceased at different times or saw the deceased or had a dispute with the deceased. There are cases of mutual identification, it seems that each has a motive for murder.
      </p>
    `, `
      <p class="describe">It was only after a second inquiry that these herbivores persuaded themselves because they had been threatened by some carnivores. After this investigation, it was possible to preliminarily judge that the murder was related to carnivores. The herbivores did not commit crimes. Motivation or ability to commit crimes.
      </p>
    `, `
      <p class="describe">After a field search, it was found that some skin was found in the claw gap of one of the hyenas. After the test, it was derived from the body of the lion, and the lion's dander was found on the rock in the middle of the cliff. And had a dispute with the hyena group, which coincided with the testimony of rabbits and cheetahs. After reporting from the medical office, the vulture's leg has a new torn wound, which is suspected of lifting a heavy object, which is consistent with the testimony of the elk, and it can be judged that the vulture has actually mentioned heavy stones.
      </p>
    `]
  }

  play(){
    if(this.step[app.currentStepIndex]){
      $('.info-page .content').html(this.step[app.currentStepIndex]);
    }
  }
}
