function tokei(){
  var d = new Date();

  var h = d.getHours();//時間
  var m = d.getMinutes();//分
  var s = d.getSeconds();//秒

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  //表示の方法を書く
  nowtime ="ただ今の時間は"+ h + ":" + m + ":" + s;
  var t = document.getElementById('time');
  // 今の時間を表示する
 
  t.innerHTML = nowtime; 
}

setInterval('tokei()', 1000);

