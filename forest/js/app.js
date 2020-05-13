// 游戏的逻辑类
class App{
  constructor(){
    // 每一个步骤的谜语以及动物
    this.step = {
      'step-1': {
        animals: [{
          animal: '仓鼠',
        }, {
          animal: '鳄鱼',
        }, {
          animal: '河马',
        }, {
          animal: '猎豹'
        }, {
          animal: '鬣狗'
        }, {
          animal: '麋鹿'
        }, {
          animal: '秃鹫'
        }, {
          animal: '兔子'
        }, {
          animal: '犀牛'
        }, {
          animal: '长颈鹿'
        }],
        'riddles': [{
          riddle: 'Please select land mammals that live near rivers and lakes',
          animal: '河马',
          speak: 'During the morning time, I saw the lion was swimming in the river, I wanted to talk with him but he ignored me.'
        }, {
          riddle: 'Please select ruminants whose horns are fixed and not replaced',
          animal: '长颈鹿',
          speak: 'When I was having the breakfast, I saw a hyaena was fighting with the lion, the hyaena ran away soon.'
        }, {
          riddle: 'Please select a predator that moves alone',
          animal: '猎豹',
          speak: 'At the lunchtime, I saw the lion was eating an antelope, I tried to share with him but he threatened me.'
        }, {
          riddle: 'Please select the timid and gentle chordate',
          animal: '兔子',
          speak: 'At morning, I saw the lion resting under the tree, so I ran away.'
        }, {
          riddle: 'Please select reptiles in wet areas',
          animal: '鳄鱼',
          speak: 'Today was so hot, I swam in the river and met the lion was taking a walk along the river, I said ‘HELLO’ and went away.'
        }, {
          riddle: 'Please select animals that prefer to store food and act at night',
          animal: '仓鼠',
          speak: ' Our family had a meeting today, after meeting I saw elk attacked the lion with the angle, which made the lion fall into the river.'
        }, {
          riddle: 'Please select the animal that likes to crouch and feed on dead animals',
          animal: '秃鹫',
          speak: 'The lion is old now, I planned to kill him and replaced him before, but he died now, what a pity!'
        }, {
          riddle: 'Please select the timid and fast ungulate',
          animal: '麋鹿',
          speak: 'I hadn’t see the lion today, it is the first I see him today.'
        }, {
          riddle: 'Please select the animal that live in groups and hunt for leftovers',
          animal: '鬣狗',
          speak: 'Today is a raining day, we stay at home and haven’t saw the lion.'
        }, {
          riddle: 'Please select a herbivorous mammal that is temperamental and timid',
          animal: '犀牛',
          speak: 'When I was eating today, I heard the rabbit, hamster and moose are discussing about how to kill the lion.'
        }],
        end: {
          animals: ['猎豹', '鳄鱼', '麋鹿', '兔子', '秃鹫', '鬣狗']
        }
      },
      'step-2': {
        animals: [{
          animal: '鳄鱼'
        }, {
          animal: '猎豹'
        }, {
          animal: '鬣狗'
        }, {
          animal: '麋鹿'
        }, {
          animal: '秃鹫',
          audioType: 'WAV'
        }, {
          animal: '兔子'
        }],
        riddles: [{
          riddle: 'Please choose felid',
          animal: '猎豹',
          speak: 'In fact, after being driven away by the lion today, I hid in the side to wait for the lion to go and pick up some of the rest. There was no prey today in the rainy day, but when I saw the hyenas come and say something to the lion, the two sides fought and the lion was outnumbered.'
        }, {
          riddle: 'Please choose oviparous reptile',
          animal: '鳄鱼',
          speak: 'The land is wet today after rain, I hide in the reeds but what shocked me was that the lion’s head was covered with the blood.'
        }, {
          riddle: 'Please choose Sibuxiang animal',
          animal: '麋鹿',
          speak: 'As today rained suddenly, I had to find a cave. Inside the cave, I saw the vulture hold a giant rock and flied away, maybe the rock was so heavy that make him flied not high enough.'
        }, {
          riddle: 'Please choose animals that are often used for medical research',
          animal: '兔子',
          speak: ' I prepared to eat the grass along the river, but I saw the lion fall down from the cliff, there are lots of scars on his body.'
        }, {
          riddle: 'Please choose Beaked Animals',
              animal: '秃鹫',
          speak: 'Today is a rain day, I can’t fly high, but I saw the hyaenas were running after the lion.'
        }, {
          riddle: 'Please choose animals with mane',
          animal: '鬣狗',
          speak: 'I saw the vulture threw the rock on the lion’s head, it must be the vulture who killed the lion!!!'
        }],
        end: {
          animals: ['秃鹫', '鬣狗']
        }
      },
      'step-3': {
        animals: [{
          animal: '秃鹫'
        }, {
          animal: '鬣狗'
        }],
        speaks: {
          '秃鹫': {
            name: ['秃鹫'],
            speak: 'Today I haven’t wen to the cave, it rained heavily today, I just went back home to rest.'
          },
          'Hyaena': {
            name: ['鬣狗'],
            speak: 'We had enough food today, we don’t have to find the lion.'
          },
          '狮子': {
            name: ['秃鹫', '鬣狗'],
            speak: 'Oh,god! It was the lion! He is coming for revenge！I’m sorry! It was hyaena(vulture) who forced me to do this!'
          }
        },
        end: {
          animals: ['秃鹫', '鬣狗']
        }
      }
    };
  }

  // 错误次数的统计显示
  set $errorNum(val){
    $('.closeNum span').html(val);
    this.errorNum = val;
    if(val <= 0){
      alert('Fail!');
      view.play('home');
    }
  }

  // 每次游戏开始的初始化
  init(){
    this.currentStepIndex = 0;
    this.$errorNum = 3;
  }

  // 游戏开始
  play(){
    // 初始化两个数组
    this.animals = [];
    this.btns = [];
    // 删除掉页面上存在的动物以及按钮
    $('.game-page .animals, .game-page .btns').html('');
    // 进入下一步，step-1 step-2 step-3
    this.currentStepIndex++;
    this.currentStep = JSON.parse(JSON.stringify(this.step['step-' + this.currentStepIndex]));

    // 生成动物
    this.currentStep.animals.map(item => {
      this.animals.push(new Animal({
        name: item.animal
      }));
    })
    // 最后一步的按钮是三个
    if(this.currentStepIndex >= 3){
      ['秃鹫', '鬣狗', '狮子'].sort(() => Math.random() - .49).map(item => {
        this.btns.push(new Btn({
          name: item
        }))
      })
      // 显示选择按钮
      this.showSelectRiddle();
    } else {
      // 显示对应的按钮
      this.currentStep.animals.sort(() => Math.random() - .49).map(item => {
        this.btns.push(new Btn({
          name: item.animal,
          audioType: item.audioType
        }))
      })

      this.riddle();
    }
  }

  // 显示谜语
  riddle(){
    if(this.currentStepIndex >= 3){
      app.showSelectRiddle('end');
      return;
    }
    this.r = this.currentStep.riddles.shift();
    if(!this.r){
      app.showSelectRiddle('end');
      return;
    }

    $('.riddle p:first-child').html(this.r.riddle)
    $('.step').hide();
    $('.riddle').fadeIn();

    setTimeout(() => {
      $(document).on('click', () => {
        app.showSelectRiddle();
        $(document).unbind('click')
      })
    }, 0);
  }

  // 显示选中谜语动物，或者是选中最终确认的动物
  showSelectRiddle(cls = 'start'){
    $('.game-page').removeClass('end').removeClass('start').addClass(cls);
    $('.game-page .btns input').each(function(){
      $(this)[0].checked = false;
    });
    $('.step').hide();
    $('.select').fadeIn();

    $('.game-page .btns input').attr('disabled', false);
  }

  // 播放音乐
  playAudio(name, type = 'mp3'){
    $('audio').remove();
    $(`<audio src="./voice/${
      this.currentStepIndex == 1 ? 'one' : this.currentStepIndex == 2 ? 'two' : 'three'
    }/${name}.${type}" autoplay></audio>`).on('ended', function(){
      $(this).remove();
    }).appendTo('body')
  }

  // 判断谜语动物是否正确
  selectAnimal(name){
    let _this = this;
    $('.game-page .btns input').attr('disabled', true);

    if(this.currentStepIndex >= 3){
      let speaks = this.currentStep.speaks[name];
      speaks.name.map(item => {
        new Speak({
          info: speaks.speak,
          animal: this.find(item),
          fn(){
            app.riddle();
          }
        })
      })
      return;
    }

    if(name == this.r.animal){
      new Speak({
        info: this.r.speak,
        animal: this.find(name),
        fn(){
          _this.riddle();
        }
      })
    } else {
      alert('Wrong！');
      this.$errorNum = this.errorNum - 1;
      setTimeout(() => {
        this.currentStep.riddles.unshift(this.r)
        this.riddle();
      }, 500);
    }

    console.log(name, this.r)
  }

  // 确认动物的判断
  enterAnimal(){
    let num = 0;
    let _this = this;
    $('[name="checkedAnimal"]').each(function(){
      if($(this)[0].checked){
        let val = $(this).val();
        if(_this.currentStep.end.animals.indexOf(val) > -1){
          num++;
        }
      }
    })
    if(num == this.currentStep.end.animals.length){
      if(this.currentStepIndex >= 3){
        alert('You find the criminal successfully!')
        view.play('end')
      } else {
        info.play();
        view.play('info');
      }
    } else {
      alert('Wrong!');
      view.play('reset')
    }
  }

  // 找到相对应的动物
  find(name){
    return this.animals.filter(i => i.name == name)[0];
  }
}

// 动物生成类
class Animal{
  constructor(data){
    this.data = data;
    this.name = data.name;
    this.id = app.animals.length;

    this.create();
  }

  // 生成对应的动物到页面上
  create(){
    let elem = $(`
      <div class="animal">
        <img src="./animal/${this.name}.png" alt="">

        <div class="checkbox-item">
          <input name="checkedAnimal" value="${this.name}" class="inp-cbx" id="checkbox-animal-${this.id}" type="checkbox" style="display: none;">
          <label class="cbx" for="checkbox-animal-${this.id}"><span>
          <svg width="22px" height="20px">
              <use xlink:href="#check"></use>
          </svg>
          </span><span></span></label>
        </div>
      </div>
    `);
    // 仓鼠变小
    if(this.name == '仓鼠'){
      elem.css('width', '170px')
    }
    this.elem = elem;
    $('.animals').append(this.elem);
  }
}

// 按钮的生成类
class Btn{
  constructor(data){
    this.data = data;
    this.name = data.name;
    this.id = app.btns.length;
    this.audioType = data.audioType || 'mp3'

    this.create();
  }

  // 生成到页面上
  create(){
    let elem = $(`
    <div class="btn-item">
      <button class="btn" onclick="app.playAudio('${this.name}', '${this.audioType}')"><svg t="1589248943859" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2216" width="20" height="20"><path d="M609.745455 4.654545L27.927273 339.781818c-13.963636 4.654545-18.618182 18.618182-18.618182 27.927273v288.581818c0 13.963636 4.654545 23.272727 18.618182 32.581818l581.818182 330.472728c4.654545 4.654545 9.309091 4.654545 18.618181 4.654545 4.654545 0 13.963636 0 18.618182-4.654545 9.309091-4.654545 18.618182-18.618182 18.618182-32.581819V37.236364c0-13.963636-4.654545-23.272727-18.618182-32.581819-13.963636-4.654545-27.927273-4.654545-37.236363 0zM195.490909 707.490909l-116.363636-65.163636V390.981818l116.363636-69.818182 60.509091-32.581818 335.127273-190.836363v828.50909L269.963636 744.727273l-74.472727-37.236364M740.072727 339.781818c27.927273 55.854545 41.890909 116.363636 41.890909 181.527273 0 55.854545-9.309091 111.709091-32.581818 162.909091l65.163637 27.927273c23.272727-60.509091 37.236364-125.672727 37.236363-190.836364 0-74.472727-13.963636-144.290909-46.545454-209.454546l-65.163637 27.927273z" fill="#ffffff" p-id="2217"></path><path d="M907.636364 125.672727l-60.509091 37.236364c65.163636 107.054545 97.745455 232.727273 97.745454 358.4 0 116.363636-27.927273 237.381818-88.436363 339.781818l60.509091 32.581818c60.509091-111.709091 93.090909-242.036364 93.090909-372.363636 4.654545-139.636364-32.581818-274.618182-102.4-395.636364z" fill="#ffffff" p-id="2218"></path></svg></button>

      <div class="checkbox-item">
        <input onclick="app.selectAnimal('${this.name}')" class="inp-cbx" id="checkbox-btn-${this.id}" type="checkbox" style="display: none;">
        <label class="cbx" for="checkbox-btn-${this.id}"><span>
        <svg width="22px" height="20px">
            <use xlink:href="#check"></use>
        </svg>
        </span><span></span></label>
      </div>
    </div>
    `)
    this.elem = elem;
    $('.game-page .btns').append(this.elem);
  }
}

// 动物对话类
class Speak{
  constructor(data){
    this.info = data.info;
    this.animal = data.animal;
    this.fn = data.fn;

    this.create();
  }

  // 显示到页面上
  create(){
    let elem = $(`
      <div class="speak">
        ${this.info}
        <div class="bubbleTail"></div>
      </div>
    `)

    elem.css({
      left: this.animal.elem.offset().left,
      top: this.animal.elem.offset().top - 50,
    })

    $('.game-page').append(elem);
    this.elem = elem;

    setTimeout(() => {
      this.elem.remove();
      this.fn();
    }, 5000);
  }
}
