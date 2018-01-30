# RollingDice
Udemy 線上課程「普通話-深入淺出了解Javascript」其中的練習題。JavaScript部分程式碼改寫，達到一樣的效果。


## 遊戲需求:

1.	點選搖骰子，透過亂數產生骰子點數1~6點。
2.	骰到的點數要以相對應圖片呈現(骰子點數png)。
3.	橘色方框要能累積三回合的點數加總。
4.	該回合輪到哪個玩家，該玩家的背景就要套用Class active，且另一玩家現在點數歸0。
5.	兩玩家完成三回合後，遊戲自動重新開始。
6.	有兩個角色玩家1及玩家2，三回合後點數加總較大者獲勝(顯示獎盃)，若點數相同則將搖骰子按鈕名稱改為平手。
7.	點擊重新開始鈕，遊戲立即重設。


## 遊戲實現Tips:

> 產生亂數:Math.random();
無條件進到整數位:Math.floor();

> DOM(Document Object Model):文檔對象模型。
選取DOM → document.querySelector(DOM變數)

> 修改Tag內部的文字內容:
document.querySelector(DOM).textContent = ..;

> 修改Tag內部的Html:
document.querySelector(DOM).innerHTML = ..;

> 修改img內部的src:
document.querySelector(‘img DOM’).src = ..;

> 修改Tag CSS的兩種方法:
* document.querySelector('.dice').style.display = 'none';
* document.querySelector('.dice').style = 'display : none;'

> Event事件:

``` js

document.querySelector('.roll').addEventListener('click', function(){  
    
  console.log(Dice);  
    
});  

```
說明:
1.	querySelector : DOM選取器。
2.	addEventListener : 添加事件監聽器，共需要兩個參數。
- (1)選擇的事件，可至MDN文件查詢所有事件。
- (2)事件發生時執行的函式，為匿名函式。當所有Excution Context都執	行完之後，他才會被添加至Excution Stack隊伍最後面。

> 利用id取得DOM:
* document.getElementById(‘player1-current-score’)..
* ※querySelector可以靠class和id取得element，getElementById只能靠Id

> Element新增或移除class:
* 新增class : document.querySelector(DOM).classList.add(className);
* 移除class : document.querySelector(DOM).classList.remove(className);
