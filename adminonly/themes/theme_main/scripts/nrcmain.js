// JavaScript Document

function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		// Add preload images here
		preloadFlag = true;
	}
}

function openWin(theURL,theWidth,theHeight) {
	aWindow=window.open(theURL,"popupwin","width="+((theWidth!=null)?theWidth:600)+",height="+((theHeight!=null)?theHeight:560)+",scrollbars=yes,resizable=yes,screenX=0,screenY=0,top=0,left=0,top=0,left=0");
	aWindow.focus();
}
function openGlossaryWin(theURL,theWidth,theHeight)
{
aWindow=window.open(theURL,"popupwin","width="+((theWidth!=null)?theWidth:600)+",height="+((theHeight!=null)?theHeight:560)+",scrollbars=yes,resizable=yes,screenX=0,screenY=0,top=0,left=0,top=0,left=0");
aWindow.focus();
}
function openRefsWin(theURL,theWidth,theHeight) {
	aWindow=window.open(theURL,"popuprefswin","width="+((theWidth!=null)?theWidth:600)+",height="+((theHeight!=null)?theHeight:560)+",scrollbars=yes,resizable=yes,screenX=0,screenY=0,top=0,left=0,top=0,left=0,toolbar=yes");
	aWindow.focus();
}

// TJK's cookie code
function getCookieVal (offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1)
    endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}
function GetCookie (name) {
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)
      return getCookieVal (j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break;
  }
  return null;
}

// Macromedia Dreamweaver functions
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function jumpMenu(baseUrl,targ,selObj,restore,grade){ //v3.0
  eval(targ+".location='"+baseUrl+selObj.options[selObj.selectedIndex].value+grade+".pdf'");
  if (restore) selObj.selectedIndex=0;
}
function jumpMenuGo(baseUrl, selName,targ,restore,grade){ //v3.0
  var selObj = MM_findObj(selName); if (selObj) jumpMenu(baseUrl, targ,selObj,restore,grade);
}
function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}


// Flash detection globals
// Major version of Flash required (Version 7+ support screen readers.)
var requiredMajorVersion = 7;
// Minor version of Flash required
var requiredMinorVersion = 0;
// Minor version of Flash required
var requiredRevision = 0;
// the version of javascript supported
var jsVersion = 1.1;
