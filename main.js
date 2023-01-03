let btn=document.getElementById("click1");
btn.addEventListener("click",myFunction)
function myFunction(){
  let bills=parseInt(document.getElementById("bill").value);
  let tips1=parseInt(document.getElementById("tips").value);

  let tip1=100*tips1/bills;
  let fullamount=bills+tip1;
  document.getElementById("tipsamount").value=tip1;
  document.getElementById("total").value=fullamount;
}
