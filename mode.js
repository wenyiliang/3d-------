// window.onload=function(){
	var istage=document.getElementById("stage");
	var ocss=document.getElementById("css");
	var lcss='';
	var onestep=60;
	var shtml='';
	var lindex=0;
	var ilength=stage.clientWidth/onestep;
	for(var i=0;i<ilength;i++){
		i<ilength/2?lindex++:lindex--;
	    lcss+="#stage li:nth-of-type("+(i+1)+") {z-index:"+lindex+"}";
	    lcss+="#stage li:nth-of-type("+(i+1)+") a{background-position:-"+i*onestep+"px 0px;}";
		shtml+='<li><a href="#"></a> <a href="#"></a><a href="#"></a><a href="#"></a></li>';
	}
	istage.innerHTML=shtml;
	ocss.innerHTML+=lcss;
	var ibtn=document.getElementById("btn").getElementsByTagName("li");
	var ili=istage.getElementsByTagName("li");
	var blength=ibtn.length;
	var inown=0;
	for(var i=0;i<blength;i++){
		ibtn[i].onclick=(function(a){
			return function(){
                   for(var j=0;j<ili.length;j++){
                   	   ibtn[inown].className="";
                   	   with(ili[j].style){
                            WebkitTransform="translateZ(-250px) rotateX("+a*90+"deg)"
                            transition="1s "+j*50+"ms all ease-in-out";
                   	   }
                   	   this.className="active"
                       inown=a;
                   }
			}
		})(i);

	}
// };