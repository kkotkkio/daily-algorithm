
var i = 1;
var tmp = '';
var cnt = 0;

for(; i<=10000; i++) {

  tmp = i + '';
  for(var j=0; j<=tmp.length; j++){
    cnt2++;
    if(tmp[j] == '8') {
      cnt++;
    }
  }

}

console.log(cnt);
