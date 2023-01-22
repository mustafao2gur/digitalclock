function getTime(){
    let now=new Date();
    let hour=now.getHours();
    let minutes=now.getMinutes()
    let second=now.getSeconds()

    let day=now.getDate()
    let month=now.getMonth()+1
    let year=now.getFullYear()
    hour < 10
      ? (document.getElementById("hour").innerText = "0" + hour)
      : (document.getElementById("hour").innerText = hour);

minutes<10 ?    document.getElementById("minute").innerText="0"+minutes:
    document.getElementById("minute").innerText=minutes
    second<10 ?    document.getElementById("second").innerText="0"+second:
    document.getElementById("second").innerText=second
document.getElementById("date").innerText=day+"/"+month+ "/" +year
}
setInterval(function(){getTime();},1000)