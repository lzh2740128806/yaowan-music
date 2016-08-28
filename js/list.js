window.onscroll=function()
{
  var oUl=document.getElementById("nav_left");
  var oLi=oUl.getElementsByTagName("li");
  var oTop=document.getElementById("totop");
  var t=document.documentElement.scrollTop||document.body.scrollTop;
  if(t>=0&&t<650)
  {
    oLi[1].style.background=""
    oLi[2].style.background=""
    oLi[3].style.background=""
    oLi[0].style.background="#8cf"
  }
  else if(t>=650&&t<1400)
  {
    oLi[0].style.background=""
    oLi[2].style.background=""
    oLi[3].style.background=""
    oLi[1].style.background="#8cf"
  }
  else if(t>=1400&&t<2200)
  {
    oLi[0].style.background=""
    oLi[1].style.background=""
    oLi[3].style.background=""
    oLi[2].style.background="#8cf"
  }
  else
  {
    oLi[0].style.background=""
    oLi[1].style.background=""
    oLi[2].style.background=""
    oLi[3].style.background="#8cf"
  }
  if(t>100)
  {
    oTop.style.display="block"
  }
  else
  {
    oTop.style.display="none";
  }
}