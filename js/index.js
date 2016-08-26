window.onscroll=function()
{
  var oTop=document.getElementById("totop");
  var t=document.documentElement.scrollTop||document.body.scrollTop;
  if(t>100)
  {
    oTop.style.display="block"
  }
  else
  {
    oTop.style.display="none";
  }
}