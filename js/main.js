window.onload = function(){
    var elm_rock = document.querySelector(".buttons .rock");
    elm_rock.addEventListener("click" , _button_click);
   
    var elm_paper = document.querySelector(".buttons .paper");
    elm_paper.addEventListener("click" , _button_click);
   
    var elm_sissors = document.querySelector(".buttons .sissors");
    elm_sissors.addEventListener("click" , _button_click);
    
    function _button_click(e){
        document.getElementById("typing").style.display ="none";
        var com_spr = _com_spr();
        var my_spr  = _my_spr(e.currentTarget);
        if(my_spr === null){
        alert("Error !!");
        return;
        
      }
      
      var result = _check_match(my_spr , com_spr);
      _result2view(result , my_spr , com_spr);
    }

    function _com_spr(){
      return Math.floor(Math.random() * Math.floor(3));
    }

    function _my_spr(elm){
      switch(elm.className){
        case "rock"    : return 0;
        case "sissors" : return 1;
        case "paper"   : return 2;
        default        : return null;
      }
    }
   
    function _check_match(my_spr , com_spr){
      if(my_spr === com_spr){return "draw";}
      else if(my_spr === 0 && com_spr === 1){return "win";}
      else if(my_spr === 1 && com_spr === 2){return "win";}
      else if(my_spr === 2 && com_spr === 0){return "win";}
      else{return "lose";}
    }
    function _result2view(type , my_spr , com_spr){ 
    var messege_elm = document.querySelector(".message");
    console.log.innerHTML  = "";
    console.log.innerHTML += "<p>あなたの出した手は、"+ _spr_str(my_spr) +"です。</p>";
    console.log.innerHTML += "<p>コンピュータの出した手は、"+ _spr_str(com_spr) +"です。</p>";
   
      switch(type){
        case "win":
        messege_elm.innerHTML += "<p class='win'>YOU WIN!!!<p>";
        break;
        
        case "lose":
        messege_elm.innerHTML += "<p class='lose'>YOU LOOSE..<p>";
        break;
   
        case "draw":
        messege_elm.innerHTML += "<p class='draw'>DRAW..<p>";
        break;
      }
    }
   
    function _spr_str(spr){
      switch(spr){
        case 0 : return "グー";
        case 1 : return "チョキ";
        case 2 : return "パー";
      }
    }

    function _spr_str(elm){
        if(elm === 0){
          document.getElementById("image_place").src="img/goo.png";
        
        }　else if(elm === 1){
            document.getElementById("image_place").src="img/choki.png";
        
        }　else if(elm === 2){
            document.getElementById("image_place").src="img/pa.png";
         

        }
      }

      function typing(str = ""){
        let buf = document.getElementById("typing").innerHTML; //書き込み済みの文字を要素から取得
        let writed = buf.length; //書き込み済みの文字数を取得
        let write = "";
        if(writed < str.length){
            write = str.charAt(writed); //1文字だけ取得する
        }else{
            buf = "じゃんけんで勝負だ！"; 
        }
        document.getElementById("typing").innerHTML = buf + write; //1文字だけ追加していく
    }
    const str = document.getElementById("typing").innerHTML; //書き込む文字を要素から取得
    const delay = 80 //1文字が表示される時間
    document.getElementById("typing").innerHTML = "";
    window.setInterval(function(){typing(str);}, delay);

    };

