/*

	遊戲JavaScript文件:

  1.	點選搖骰子，透過亂數產生骰子點數1~6點。
  2.	骰到的點數要以相對應圖片呈現(骰子點數png)。
  3.	橘色方框要能累積三回合的點數加總。
  4.	該回合輪到哪個玩家，該玩家的背景就要套用Class active，且另一玩家現在點數歸0。
  5.	兩玩家完成三回合後，遊戲自動重新開始。
  6.	有兩個角色玩家1及玩家2，三回合後點數加總較大者獲勝(顯示獎盃)，若點數相同則將搖骰子按鈕名稱改為平手。
  7.	點擊重新開始鈕，遊戲立即重設。
  
*/

var CurrentPlayer = 1;//執行玩家
var P1_total_score = 0;//P1分數加總
var P2_total_score = 0;//P2分數加總
var Count = 0;//擲骰次數

document.querySelector('.dice').style = 'display : none;';
document.querySelector('.winner1').style.display = 'none';
document.querySelector('.winner2').style.display = 'none';


//典籍搖骰子Button
document.querySelector('.roll').addEventListener('click',function() {

  var Player = Count % 2 + 1;//用擲骰次數判斷現在玩家
  var Dice = Math.floor(Math.random() * 6) + 1;//亂數1~6點

  if(Player === 1){
    P1_total_score = P1_total_score + Dice;//分數加總加上本次搖骰點數
    document.querySelector('#Player' + Player + '-Current-Score').textContent = Dice;
    document.querySelector('#Player' + Player + '-Total-Score').textContent = P1_total_score;
    document.querySelector('.panel-1').classList.add('active');//新增搖骰時的背景class active
    document.querySelector('.panel-2').classList.remove('active');//移除搖骰時對方玩家的背景class active
  }
  else {
    P2_total_score = P2_total_score + Dice;
    document.querySelector('#Player' + Player + '-Current-Score').textContent = Dice;
    document.querySelector('#Player' + Player + '-Total-Score').textContent = P2_total_score;
    document.querySelector('.panel-2').classList.add('active');
    document.querySelector('.panel-1').classList.remove('active');
  }
  document.querySelector('.dice').style = 'display : block;';
  document.querySelector('.dice').src = 'dice' + Dice + '.png';

  Count++;

  //三回合(搖骰六次)後P1、P2比大小
  if(Count === 6){
    //P1贏
    if(P1_total_score > P2_total_score){
      document.querySelector('.winner1').style.display = 'block';//顯示獎杯
      document.querySelector('#Player1-Current-Score').style = 'margin-top: 0px';//版型跑掉微調
    }
    //P2贏
    else if(P2_total_score > P1_total_score){
      document.querySelector('.winner2').style.display = 'block';
      document.querySelector('#Player2-Current-Score').style = 'margin-top: 0px';
    }
    //平手
    else {
      //兩邊都顯示獎盃
      document.querySelector('.winner1').style.display = 'block';
      document.querySelector('#Player1-Current-Score').style = 'margin-top: 0px';
      document.querySelector('.winner2').style.display = 'block';
      document.querySelector('#Player2-Current-Score').style = 'margin-top: 0px';
    }

    document.querySelector('.roll').textContent = '再玩一次';//搖骰子按鈕改成再玩一次
    document.querySelector('.roll').classList.add('playAgain');//.roll改成.playAgain
    document.querySelector('.roll').classList.remove('roll');

    //如果點擊再玩一次，刷新頁面
    document.querySelector('.playAgain').addEventListener('click', function () {
      location.reload();
    });
  }

});

//如果點擊重設遊戲，刷新頁面
document.querySelector('.newGame').addEventListener('click', function () {
  location.reload();
});
