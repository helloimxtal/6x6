var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


function login(action) {
//	if(text=="60.000") return;
	var dt = new Date();
	xmlhttp.open("POST", ip+"/login.php?t="+parseInt(dt.getHours() + ((dt.getMinutes() < 10) ? "0" : "") + dt.getMinutes()+dt.getSeconds()), true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=Windows-1251");
	xmlhttp.onreadystatechange=function(){
	  if (xmlhttp.readyState == 4)  {
        	if (xmlhttp.status == 200) {
			arrresp = xmlhttp.responseText.split("~");
			inuser = arrresp[0];
			if(fb_id=="") document.getElementById("userdiv").innerHTML = inuser;
			if(inuser=="Anonymous") {
				document.getElementById("loginbut").style.display="inline";
				document.getElementById("logoutbut").style.display="none";
				refr("no");
				if(arrresp[1]) {
					document.getElementById("logininfdiv").innerHTML = "<font color=red>"+arrresp[1]+"</font><br>you can enter email address to be able to restore password.<br> <input type=input id='email' class='span4' name='email' placeholder='Email'><br><a data-toggle='modal' href='#' onclick='register();' class='btn btn-primary btn-large' id=register >REGISTER</a>";
				} else {
					document.getElementById("logininfdiv").innerHTML = "<font color=red>invalid username or password</font><br>you can enter email address to be able to restore password.<br> <input type=input id='email' class='span4' name='email' placeholder='Email'><br><a data-toggle='modal' href='#' onclick='register();' class='btn btn-primary btn-large' id=register >REGISTER</a>";
				}
			} else {
				document.getElementById("loginbut").style.display="none";
				document.getElementById("logoutbut").style.display="inline";
				document.getElementById("closeloginw").click();
				refr("no");
//        			$('#windowTitleDialog').modal('show');
	
			}
	}}}
	switch(action) {
		case 'login':
			xmlhttp.send("action="+action+"&username="+document.getElementById("username").value+"&password="+document.getElementById("password").value);
		        break;
		case 'register':
			xmlhttp.send("action="+action+"&username="+document.getElementById("username").value+"&password="+document.getElementById("password").value+"&email="+document.getElementById("email").value);
		        break;
		default:
			xmlhttp.send("action="+action);
	}
}
var bestscore="";
var score100="";
var scoretext="1'st:"+bestscore+" 100's:"+score100;

function refr(dosend) {
//	if(text=="60.000") return;
//	alert(fb_id);
	var dt = new Date();
	if(fb_id=="") dataphp="data.php"; else dataphp="data_fb.php";
	xmlhttp.open("POST", ip+"/"+dataphp+"?t="+parseInt(dt.getHours() + ((dt.getMinutes() < 10) ? "0" : "") + dt.getMinutes()+dt.getSeconds()), true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=Windows-1251");
	xmlhttp.onreadystatechange=function(){
	  if (xmlhttp.readyState == 4)  {
        	if (xmlhttp.status == 200) {
	ifps = 0;
	xfps = 0;
        document.getElementById('navchart').href="/chart.php?mode="+((mode=="home")?"react":mode)+"&id="+fb_id;
			var responsestr = xmlhttp.responseText;
//			document.getElementById("divdata"+mode).innerHTML = xmlhttp.responseText;
			if(responsestr.split("~")[0]=="timeout" && mode !="home") {
				//alert("timeout! please relogin!");
//				    $(window).load(function(){
        $('#windowTitleDialog').modal('show');
  //  });
	document.getElementById("loginbut").style.display="inline";
	document.getElementById("logoutbut").style.display="none";

percentstr=responsestr.split("~")[2];
aprogress=responsestr.split("~")[3];
bestscore=responsestr.split("~")[4].split(";")[0];
score100=responsestr.split("~")[4].split(";")[1];
scoretext="1'st:"+bestscore+" 100's:"+score100;
responsestr=responsestr.split("~")[1];
} else if(mode=="home" && responsestr.split("~").length>4) {
percentstr=responsestr.split("~")[2];
aprogress=responsestr.split("~")[3];
bestscore=responsestr.split("~")[4].split(";")[0];
score100=responsestr.split("~")[4].split(";")[1];
scoretext="1'st:"+bestscore+" 100's:"+score100;
responsestr=responsestr.split("~")[1];
} else  {
percentstr=responsestr.split("~")[1];
aprogress=responsestr.split("~")[2];
bestscore=responsestr.split("~")[3].split(";")[0];
score100=responsestr.split("~")[3].split(";")[1];
scoretext="1'st:"+bestscore+" 100's:"+score100;
responsestr=responsestr.split("~")[0];
}

	if(mode=="light" || mode=="orig" || mode=="light_r" || mode=="orig_r" || mode=="react" || mode=="memory") {
		document.getElementById('percentdiv').innerHTML = percentstr+"%";
		document.getElementById('progresstable').innerHTML = aprogress;
		$(function() {$("#percentdiv").css("width", percentstr+"%");});
		
		
	} else {
		document.getElementById('percentdiv').innerHTML = percentstr+"%";
		document.getElementById('progresstable').innerHTML = aprogress;
        	$(function() {$("#percentdiv").css("width", percentdiv.innerHTML);});
	}
        BABYLON.Tools.QueueNewFrame(renderLoop);
	}}}
	if(dosend=="no")	{
		xmlhttp.send("TZ="+TZ+"&mode="+mode+"&fb_id="+fb_id);
	} else {
		if(fb_id=="") {
			xmlhttp.send("TZ="+TZ+"&score="+text+"&mode="+mode+"&inuser="+document.getElementById("userdiv").innerHTML);
		} else {
			xmlhttp.send("TZ="+TZ+"&score="+text+"&mode="+mode+"&fb_id="+fb_id+"&fb_name="+fb_name);
		}
	}
	
}


var text = 0;
var date1;
var date2;
var hidemem = true;
var showmem = true;
var runningGO = false;
var diff = 0;
var numorig = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
var menuit = ["","react","light","light_r","orig","orig_r","memory"];

var num = numorig.slice();
var mode = "home";
var godown = new Array();
var arrNum = new Array();
var arrTime = new Array();
var memt = new Array();
//var num = numorig;
var numdum = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var expect = 0;
var lastTime=0;
var allowclick=false;
if (BABYLON.Engine.isSupported()) {} else {alert("Schulte-Table can't run on your browser, please use last versions of Google Chrome, FireFox, IE or Safari.");}

function getNum() {    var randno = Math.floor(Math.random() * num.length);    var retval = num[randno];    num.splice(randno,1);    return retval;}
function fixTime(){ arrTime[expect]=text-lastTime; lastTime=text;}

function drawTime() {
	document.getElementById("chart_div").style.display="inline";
	document.getElementById("chart_div").style.left = document.getElementById('renderCanvas').getBoundingClientRect().left+window.scrollX+"px";
	drawDualY();

}
function hideTime() {
	chart_div.style.display="none";
}
function startGO() {
	hideTime();
//	if(document.getElementById("userdiv").innerHTML=="Anonymous") {$('#windowTitleDialog').modal('show'); return;}
	if(mode=="home") {mode="react";	 $('.nav-tabs a[href="#' + mode + '"]').tab('show');}
 	hidemem = true;
	showmem = true;
	num = numorig.slice();
	arrNum = new Array();
	arrTime = new Array();
	lastTime=0;
	idx=0;
	for(var vx=-3; vx<3; vx++) {
		for(var vy=-3; vy<3; vy++) {
			arrNum[idx]=getNum();
			writeonbox(arrNum[idx],(vy*5/6)+0.4,(vx*5/6)+0.4);
			idx++;
		}
	}
	box[0].position.x=-6.0;
	document.getElementById("hint_div").style.display="none";
	hideMenu();
	expect = 1;
	if(mode=="light_r" || mode=="orig_r") expect=36;
	runningGO = true;
	if(mode=="react") {box[1].material=getRedMaterial();} 
	date1 = new Date();
	godown = new Array();
        context2.clearRect(0,0,420,40);
	context2.font = "bold 20px Arial";
	context2.fillText("Next #: "+expect, 10, 30);
	context2.fillText("Score:", 310, 30);
	window.scrollTo(0,0);
}
window.onscroll=function () { if(runningGO) {window.scrollTo(0,0); return;} }
function stopGO() {
	if(text=="60.000" || expect==0 || expect == 37 || mode == "home" || text=="0") {} else {
		console.log("try to cheat? why? please, play fair!");
		return;
  }
	hideTime();
	hidemem=false;
	box[0].scaling.z = 1;
	box[0].scaling.x = 1;
//	box[0].position.x=-6.0;
	box[0].scaling.y = 1;
	box[0].position.x=0;
	box[0].position.z=0;
	if(mode=="home") {box[0].position.x=-6.0;document.getElementById("hint_div").style.display="none";showMenu(); document.getElementById("brand").innerHTML=brand_str;} else {
		document.getElementById("brand").innerHTML="<span class='glyphicon glyphicon-arrow-left' aria-hidden='true'></span> "+back_str;
		document.getElementById("hint_div").innerHTML=descr[mode];
                document.getElementById("hint_div").style.display="inline";
		document.getElementById("hint_div").style.left = document.getElementById('renderCanvas').getBoundingClientRect().left+window.scrollX+"px";
		hideMenu();
		if(runningGO) drawTime();
	}
	runningGO = false;

	memtclear();
	refr();
	ifps = 0;
	xfps = 0;
	godown = new Array();
	for(key in box) if(key>0) box[key].position.y=-11; 
//	selectedondown = false;
//	oselectedondown = false;
BABYLON.Tools.QueueNewFrame(renderLoop);
BABYLON.Tools.QueueNewFrame(renderLoop);


}

function hideMenu() {	for(key in dmenu) dmenu[key].position.x=-6.0; }

function getRedMaterial() {
	var material2 = new BABYLON.StandardMaterial("default", scene);
	material2.emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
	var dynamicTexture2 = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
	dynamicTexture2.hasAlpha = true;
	material2.diffuseTexture = dynamicTexture2;
	var textureContext2 = dynamicTexture2.getContext();
	var size = dynamicTexture2.getSize();
	textureContext2.save();
	textureContext2.fillStyle = "red";
	textureContext2.fillRect(0, 0, size.width, size.height);
            textureContext2.font = "320px Calibri";
            var textSize = textureContext2.measureText(expect);
            textureContext2.fillStyle = "black";
            textureContext2.fillText(expect, (size.width - textSize.width) / 2, (size.height + 120) / 2);

	textureContext2.restore();
	dynamicTexture2.update();
	return material2;
}

var box = new Array();
var dmenu = new Array();
var material2;

function bornbox(text,posx,posz) {
            box[text] = BABYLON.Mesh.CreateBox("box_"+text, 0.8167, scene);
	    material2 = new BABYLON.StandardMaterial("default", scene);
            material2.emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
            var dynamicTexture2 = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
            dynamicTexture2.hasAlpha = true;
            material2.diffuseTexture = dynamicTexture2;
            var textureContext2 = dynamicTexture2.getContext();
	    var size = dynamicTexture2.getSize();
             
            textureContext2.save();
            textureContext2.fillStyle = "white";
            textureContext2.fillRect(0, 0, size.width, size.height);

            textureContext2.font = "320px Calibri";
            var textSize = textureContext2.measureText(text);
            textureContext2.fillStyle = "black";
            textureContext2.fillText("", (size.width - textSize.width) / 2, (size.height + 120) / 2);
            textureContext2.restore();
          
            dynamicTexture2.update();
	box[text].material = material2;
	    box[text].position.x=posx;
	    box[text].position.z=posz;
	    box[text].position.y=-11;
	    material2.alpha = 0.5;

	}
	function writeonbox(BOX_ID,posx,posz) {
//	console.log(BOX_ID);
	if(isNaN(BOX_ID) || BOX_ID<1 || BOX_ID>36) return; 
//            box[BOX_ID] = BABYLON.Mesh.CreateBox("box_"+BOX_ID, 0.9, scene);
            var material3 = new BABYLON.StandardMaterial("default", scene);
            material3.emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
            var dynamicTexture2 = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
            dynamicTexture2.hasAlpha = true;
            material3.diffuseTexture = dynamicTexture2;
            var textureContext2 = dynamicTexture2.getContext();
	    var size = dynamicTexture2.getSize();
             
            textureContext2.save();
            textureContext2.fillStyle = "white";
            textureContext2.fillRect(0, 0, size.width, size.height);

            textureContext2.font = "320px Calibri";
            var textSize = textureContext2.measureText(BOX_ID);
            textureContext2.fillStyle = "black";
            if(mode!="react" && showmem) textureContext2.fillText(BOX_ID, (size.width - textSize.width) / 2, (size.height + 120) / 2);
            textureContext2.restore();
          
            dynamicTexture2.update();
            box[BOX_ID].material = material3;
	    box[BOX_ID].position.x=posx;
	    box[BOX_ID].position.z=posz;
	    box[BOX_ID].position.y=0;

	}
	function clearbox(BOX_ID,posx,posz) {
//	console.log(BOX_ID);
	if(BOX_ID=="") return;
	if(expect>BOX_ID) return; 
	if(text<3) return;
	if(runningGO) {} else return;
//            box[BOX_ID] = BABYLON.Mesh.CreateBox("box_"+BOX_ID, 0.9, scene);
            var material2 = new BABYLON.StandardMaterial("default", scene);
            material2.emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
            var dynamicTexture2 = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
            dynamicTexture2.hasAlpha = true;
            material2.diffuseTexture = dynamicTexture2;
            var textureContext2 = dynamicTexture2.getContext();
	    var size = dynamicTexture2.getSize();
             
            textureContext2.save();
            textureContext2.fillStyle = "white";
            textureContext2.fillRect(0, 0, size.width, size.height);

            textureContext2.font = "320px Calibri";
            var textSize = textureContext2.measureText(BOX_ID);
            textureContext2.fillStyle = "black";
            textureContext2.restore();
          
            dynamicTexture2.update();
            box[BOX_ID].material = material2;
	    box[BOX_ID].position.x=posx;
	    box[BOX_ID].position.z=posz;
	    box[BOX_ID].position.y=0;

	}
function getOffset( el ) {    var _x = 0;    var _y = 0;   while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {        _x += el.offsetLeft - el.scrollLeft;        _y += el.offsetTop - el.scrollTop;        el = el.offsetParent;    }    return { y: _y, x: _x };}

  var canvas2 = document.getElementById("scoreCanvas");
  var context2 = canvas2.getContext("2d");
  context2.fillStyle = "white";
  context2.font = "bold 20px Arial";
  context2.fillText("Next #: "+expect, 10, 30);
  context2.fillText("Score: 0", 310, 30);
  var canvas = document.getElementById("renderCanvas");
  var engine = new BABYLON.Engine(canvas, true);
  var scene = new BABYLON.Scene(engine);
  var camera = new BABYLON.ArcRotateCamera("Camera", 1, 0.3, 10, new BABYLON.Vector3(0, 0, 0), scene);
//	    BABYLON.SceneOptimizer.OptimizeAsync(scene, BABYLON.SceneOptimizerOptions.HighDegradationAllowed());
//	    camera.viewport = new BABYLON.Viewport(0.5, 0, 0.5, 1.0);
            var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 100, 0), scene);
            light.diffuse = new BABYLON.Color3(1, 1, 1);
	    light.specular = new BABYLON.Color3(0,0, 0);
//	    light.position.y=1;
            camera.setPosition(new BABYLON.Vector3(0.01, 7, 0));
          //  camera.attachControl(canvas);
//********************************************************************************************
//********************************************************************************************
  var plane = BABYLON.Mesh.CreatePlane("plane", 16, scene);
    plane.position.y = -11;
    plane.position.x = 0;
    plane.position.z = 0;
plane.rotation.x = Math.PI / 2;
	var materialPlane = new BABYLON.StandardMaterial("texturePlane", scene);
	materialPlane.diffuseTexture = new BABYLON.Texture("https://i.imgur.com/5G99Iar.gif", scene);
	 plane.material = materialPlane;

var materials = new Array();
var dynamicTexture = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
dynamicTexture.hasAlpha = true;
var material = new BABYLON.StandardMaterial("default", scene);

addCenterBox();
addMenuBoxes();


for(var vx=-3; vx<3; vx++) {
	for(var vy=-3; vy<3; vy++) {
		bornbox(getNum(),(vy*5/6)+0.4,(vx*5/6)+0.4);
	}
}

var infobox;
function addCenterBox() {
        box[0] = BABYLON.Mesh.CreateSphere("Box1", 32, 3, scene);
	//box[0] = BABYLON.Mesh.CreateBox("Box1", 2.0, scene);
        material.emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
        material.diffuseTexture = dynamicTexture;
        
	material.alpha = 0.7;
	material.specularPower = 16;

	material.reflectionFresnelParameters = new BABYLON.FresnelParameters();
	material.reflectionFresnelParameters.bias = 0.1;

	material.emissiveFresnelParameters = new BABYLON.FresnelParameters();
	material.emissiveFresnelParameters.bias = 0.6;
	material.emissiveFresnelParameters.power = 4;
	material.emissiveFresnelParameters.leftColor = BABYLON.Color3.White();
	material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Black();

	material.opacityFresnelParameters = new BABYLON.FresnelParameters();
	material.opacityFresnelParameters.leftColor = BABYLON.Color3.White();
	material.opacityFresnelParameters.rightColor = BABYLON.Color3.Black();
	box[0].material = material;
	box[0].position.x=-6;
	box[0].position.z=0;

}

function addInfoBox() {
	infobox = BABYLON.Mesh.CreatePlane("plane", 10.0, scene);
//	infobox.material = material;
	infobox.position.x=0;
	infobox.position.z=0;
	infobox.position.y=-11;

}
function addMenuBoxes() {
	    addMenuBox(1," Reaction",-1.7,-1.2);
	    addMenuBox(2,"Classic Light",-1.7,1.2);
	    addMenuBox(3,"Classic Light Reverse",0,-1.2);
	    addMenuBox(4,"Classic Original",0,1.2);
	    addMenuBox(5,"Classic Original Reverse",1.7,-1.2);
	    addMenuBox(6," Memory",1.7,1.2);
}
function showMenu() {
    dmenu[1].position.x=-1.7;
    dmenu[2].position.x=-1.7;
    dmenu[3].position.x=0;
    dmenu[4].position.x=0;
    dmenu[5].position.x=1.7;
    dmenu[6].position.x=1.7;  
}

function addMenuBox(m_id,m_text,m_x,m_y) {
            dmenu[m_id] = BABYLON.Mesh.CreateBox("menu_"+m_id, 2.2, scene);          
            var material2 = new BABYLON.StandardMaterial("texture1", scene);

//            material2.emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
            var dynamicTexture2 = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
  //          dynamicTexture2.hasAlpha = true;

            material2.diffuseTexture  = dynamicTexture2;
//            material2.diffuseTexture  = new BABYLON.Texture("img/but_"+m_id+".jpg", scene);
//    material2.alpha = 0.8;
 //   material2.specularPower = 16;
            var textureContext2 = dynamicTexture2.getContext();
	    var size = dynamicTexture2.getSize();
             
//	var imageObj = new Image();
//	imageObj.src = 'img/woodbut.jpg';
//	imageObj.onload = function(){
//         textureContext2.drawImage(imageObj, 10, 10,size.width, size.height);
//         textureContext2.font = "40pt Calibri";
//         textureContext2.fillText("My TEXT!", 20, 20);
 //    };
//	textureContext2.drawImage(img1, 0, 0);//, size.width, size.height);
//            textureContext2.fillStyle = "red";
  //          textureContext2.fillRect(0, 0, size.width, size.height);



    material2.alpha = 0.8;
    material2.specularPower = 16;

material2.reflectionFresnelParameters = new BABYLON.FresnelParameters();
    material2.reflectionFresnelParameters.bias = 0.1;

    material2.emissiveFresnelParameters = new BABYLON.FresnelParameters();
    material2.emissiveFresnelParameters.bias = 0.6;
    material2.emissiveFresnelParameters.power = 4;
    material2.emissiveFresnelParameters.leftColor = BABYLON.Color3.White();
    material2.emissiveFresnelParameters.rightColor = BABYLON.Color3.Black();

    material2.opacityFresnelParameters = new BABYLON.FresnelParameters();
    material2.opacityFresnelParameters.leftColor = BABYLON.Color3.White();
    material2.opacityFresnelParameters.rightColor = BABYLON.Color3.Black();

            textureContext2.save();

		textureContext2.fillStyle = "silver";
//		if(!runningGO)  textureContext.fillStyle = "red";  else textureContext.fillStyle = "black";
                textureContext2.fillRect(0, 0, size.width, size.height);
                
            textureContext2.font = "110px Calibri";
            var textSize = textureContext2.measureText(text);
            textureContext2.fillStyle = "black";
	    awords=m_text.split(" ");
	    var step=0;
	    for(key in awords) {
		var textSize = textureContext2.measureText(awords[key]);
		    step+=110;
	            textureContext2.fillText(awords[key], 260-textSize.width/2, 80+step);
	    }
       	    textureContext2.restore();
          
            dynamicTexture2.update();

	    dmenu[m_id].material = material2;
	    dmenu[m_id].position.x=m_x;
	    dmenu[m_id].position.z=m_y;
            dmenu[m_id].scaling.x = 0.6;
/*
            materials[m_id] = new BABYLON.StandardMaterial("default", scene);
            materials[m_id].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
            materials[m_id].diffuseTexture = dynamicTexture;
  
            dmenu[m_id] = BABYLON.Mesh.CreateBox("menu_"+m_id, 1.5, scene);
            dmenu[m_id].material = materials[m_id];
	    dmenu[m_id].position.x=m_x;
	    dmenu[m_id].position.z=m_y;

/*	    var size = dynamicTexture.getSize();
            var textureContext = dynamicTexture.getContext();        
	    textureContext.fillText(m_text, 60, (size.height - 120) / 2);
            textureContext.font = "50px Calibri";
            textureContext.fillText("click here to start!", 80, (size.height + 320) / 2);
*/
}

//******************EVENTS*******************************************
var selectedondown = false;
var oselectedondown = false;
var ismousedown = false;
var scored = 0;
canvas.addEventListener("click", function (evt) {
//   var pickResult = scene.pick(evt.clientX, evt.clientY);
// alert(pickResult.pickedMesh.id);
//count++;
});

canvas.addEventListener("pointerdown", function (evt) {
   // We try to pick an object
    ismousedown=true;
	scored = 0;
    if(runningGO && mode=="memory" && text<3) return;

   var pickResult = scene.pick(evt.clientX-getOffset(canvas).x, evt.clientY-getOffset(canvas).y);
	// alert(pickResult.pickedMesh.id);
	//&& pickResult.pickedMesh.id=="Box1"
	allowclick=false;
    if(pickResult.pickedMesh) {
	if(pickResult.pickedMesh.id.substr(0,4)=="menu") {
		var selid=pickResult.pickedMesh.id.substr(5);
		mode=menuit[selid];
		//re_link.click();
		text=0;diff=0;
		 $('.nav-tabs a[href="#' + mode + '"]').tab('show');
		box[0].position.x=0;
		hideMenu();
		stopGO();

	}

	if(pickResult.pickedMesh.id=="Box1") {startGO(); BABYLON.Tools.QueueNewFrame(renderLoop);}
//	if(pickResult.pickedMesh.id.substr(0,4)=="box_") {
//		if(expect == pickResult.pickedMesh.id.substr(4)) expect++;
//		if(expect==26) {expect=1; stopGO();}
//	}
	}

    if(pickResult.pickedMesh) {
	if(selectedondown) oselectedondown = selectedondown;
	selectedondown = pickResult.pickedMesh;
        if(pickResult.pickedMesh.id=="Box1") allowclick=true;
	if(pickResult.pickedMesh.id.substr(0,4)=="box_") {
	    if(mode=="light_r" || mode=="orig_r") {
		if(expect == pickResult.pickedMesh.id.substr(4)) {allowclick=true; fixTime(); expect--;}
		if(expect==0) {stopGO(); expect=36;}
	    } else {
		if(expect == pickResult.pickedMesh.id.substr(4)) {allowclick=true; fixTime(); expect++; scored = 1; if(mode=="react" && expect<37) box[expect].material=getRedMaterial();}
		if(expect==37) {stopGO(); expect=1;}
	    }
	}
    }
        if(mode=="memory" && text>3) {
//		console.log(expect +"-"+ pickResult.pickedMesh.id.substr(4)+"-"+memt.length);
		if(expect < pickResult.pickedMesh.id.substr(4)-1+2+scored) writeonbox(pickResult.pickedMesh.id.substr(4),pickResult.pickedMesh.position.x,pickResult.pickedMesh.position.z);
		if(expect < pickResult.pickedMesh.id.substr(4)) memt[memt.length]=setTimeout("clearbox("+pickResult.pickedMesh.id.substr(4)+","+pickResult.pickedMesh.position.x+","+pickResult.pickedMesh.position.z+")",3000);
	}

	if(mode=="orig" || mode=="orig_r") {
		if(runningGO && pickResult.pickedMesh && allowclick && pickResult.pickedMesh.id.substr(0,4)=="box_") pickResult.pickedMesh.position.y=-0.5;
//		if(selectedondown) selectedondown.position.y=-0.5;
	} else {
		if(pickResult.pickedMesh && pickResult.pickedMesh.id=="Box1") {pickResult.pickedMesh.position.y=0; allowclick=false;}
		if(selectedondown && allowclick) godown[selectedondown.id.substr(4)]=true; //selectedondown.position.y=-11;
	}
       if(runningGO) evt.preventDefault(); else  BABYLON.Tools.QueueNewFrame(renderLoop);

//    if(pickResult.pickedMesh && allowclick) pickResult.pickedMesh.position.y=-0.5;
},false);

canvas.addEventListener("pointermove", function(evt) {
    if(runningGO && mode=="memory" && text<3) return;
    if(runningGO && ismousedown) {
   var pickResult = scene.pick(evt.clientX-getOffset(canvas).x, evt.clientY-getOffset(canvas).y);
		if(allowclick) {} else {
    if(pickResult.pickedMesh) {
	if(pickResult.pickedMesh.id.substr(0,4)=="box_") {
//		console.log(pickResult.pickedMesh.id.substr(4));
		if(expect == pickResult.pickedMesh.id.substr(4)) {
			    if(mode=="orig" || mode=="orig_r") {
                                 	 pickResult.pickedMesh.position.y=-0.5;
					if(selectedondown) oselectedondown = selectedondown;
					selectedondown = pickResult.pickedMesh;
					allowclick=true;

				} else {
				godown[pickResult.pickedMesh.id.substr(4)]=true;
				box[pickResult.pickedMesh.id.substr(4)].position.y=box[pickResult.pickedMesh.id.substr(4)].position.y-1; box[pickResult.pickedMesh.id.substr(4)].material.alpha=box[pickResult.pickedMesh.id.substr(4)].material.alpha-0.07;
				ifps = 0;
				xfps = 0;
			        ismousedown=false;
			    }
			    if(mode=="light_r" || mode=="orig_r") {
				 fixTime(); expect--;
				if(expect==0) {stopGO(); expect=36;}
			    } else {
				 fixTime(); expect++; if(mode=="react" && expect<37) box[expect].material=getRedMaterial();
				if(expect==37) {stopGO(); expect=36;}
			    }
		}

	}

	}
}}
},false);

canvas.addEventListener("pointerup", function (evt) {
    ismousedown=false;
	if(runningGO) {
   var pickResult = scene.pick(evt.clientX-getOffset(canvas).x, evt.clientY-getOffset(canvas).y);

		if(allowclick) {
			if(mode=="orig" || mode=="orig_r") {
				if(pickResult.pickedMesh && pickResult.pickedMesh.id.substr(0,4)=="box_") pickResult.pickedMesh.position.y=0;
				if(selectedondown && selectedondown.id.substr(0,4)=="box_") selectedondown.position.y=0;
				if(oselectedondown && oselectedondown.id.substr(0,4)=="box_") oselectedondown.position.y=0;
			} else {
				if(pickResult.pickedMesh && pickResult.pickedMesh.id=="Box1") {pickResult.pickedMesh.position.y=0; allowclick=false;}
//				if(selectedondown && allowclick && pickResult.pickedMesh && pickResult.pickedMesh.id!="Box1") godown[selectedondown.id.substr(4)]=true; //selectedondown.position.y=-11;
			}
			allowclick=false;
		} else {
/*    if(pickResult.pickedMesh) {
	if(pickResult.pickedMesh.id.substr(0,4)=="box_") {
//		console.log(pickResult.pickedMesh.id.substr(4));
		if(expect == pickResult.pickedMesh.id.substr(4)) {
			    if(mode=="orig" || mode=="orig_r") {} else {
				godown[pickResult.pickedMesh.id.substr(4)]=true;
				box[pickResult.pickedMesh.id.substr(4)].position.y=box[pickResult.pickedMesh.id.substr(4)].position.y-1; box[pickResult.pickedMesh.id.substr(4)].material.alpha=box[pickResult.pickedMesh.id.substr(4)].material.alpha-0.07;
				ifps = 0;
				xfps = 0;
			    }

			    if(mode=="light_r" || mode=="orig_r") {
				expect--;
				if(expect==0) {expect=25; stopGO();}
			    } else {
				expect++; if(mode=="react" && expect<26) box[expect].material=getRedMaterial();
				if(expect==26) {expect=1; stopGO();}
			    }
		}

	}

	}
*/
}}
},false);


//*********************************************************************************************
//*******************************Before Render ************************************************
var isclickstart = 0;
var ifps = 0;
var inaction=false;
scene.beforeRender = function() {
	ifps++;	if(ifps>60) ifps=1;
	inaction=false;
	for(key in godown) {
	if(godown[key]) { if(box[key].position.y>-11) {inaction=true; box[key].position.y=box[key].position.y-1; box[key].material.alpha=box[key].material.alpha-0.07;} else godown[key]=false;}// box[key].rotation.y=box[key].rotation.y-Math.PI / 12;
	}
        var textureContext = dynamicTexture.getContext();
        var size = dynamicTexture.getSize();
	date2 = new Date();
	if(runningGO) diff = date2 - date1;
	if(!diff) diff=0;		
        text = (diff/1000);
	if(text>60 && runningGO) {text="60.000"; stopGO();}
	if(text>60) text="60.000";
//        text = engine.fps + " fps";
if(!runningGO){
	if(ifps == 1) {
/*
	        context2.clearRect(80,0,200,40);
		context2.fillText(expect+"        Mode:"+mode, 80, 30);
	        context2.clearRect(370,0,400,30);
		context2.fillText(text, 380, 30);
*/
		if(mode!="home") {
		context2.font = "18px Arial";
	        context2.clearRect(0,0,480,40);
		context2.fillText(mode_str+" "+mode+"    "+yourrecord_str+" "+bestscore+"    100's: "+score100, 10, 30);
		} else {
		context2.font = "18px Arial";
	        context2.clearRect(0,0,480,40);
		context2.fillText(choose_str, 60, 30);
		}
	}
} else {

	if(ifps % 15 == 0) {	
        	context2.clearRect(80,0,200,40);
		context2.fillText(expect+"        "+mode_str+mode, 80, 30);
	}
	if(ifps % 2 == 0) {	
	        context2.clearRect(370,0,400,30);
		context2.fillText(text, 380, 30);
	}
}
//if(!runningGO && ifps % 15 != 0) {} else { 
//if(ifps == 1) {	
         if(!runningGO) {
                textureContext.save();
		textureContext.fillStyle = "silver";
//		if(!runningGO)  textureContext.fillStyle = "red";  else textureContext.fillStyle = "black";
                textureContext.fillRect(0, 0, size.width, size.height);
                textureContext.font = "bold 90px Calibri";
                var textSize = textureContext.measureText(text);

        
	                textureContext.fillStyle = "black";
			if(text!=0) {
				textureContext.fillText(text, 400-size.width/2, (size.height + 340) / 2);
			}
//	                textureContext.fillStyle = "darkblue";
//		                textureContext.font = "28px Calibri";
//				textureContext.fillText(scoretext, 400-size.width/2, (size.height - 410) / 2);
//	                textureContext.fillStyle = "black";

	                textureContext.font = "bold 50px Calibri";
			if(text!=0) {
//				textureContext.fillText("score:", 80, (size.height + 280) / 2);
			} else {
				textureContext.fillText("Schulte-Table.com", 65, (size.height + 280) / 2);
			}
//			if(mode!="home") textureContext.fillText("mode:"+mode, 60, (size.height + 360) / 2);
//        		if(isclickstart<1 && !inaction) {
//				textureContext.fillText("click here to start!", 80, (size.height + 320) / 2);
//				isclickstart++;
//			} else {
		                textureContext.font = "50px Calibri";
				textureContext.fillText(click_str, 70, (size.height + 440)/2);
//				isclickstart++;
//				if(isclickstart>2) isclickstart=0;
//			}
                textureContext.restore();
                dynamicTexture.update();

		}
//}
		if(mode=="memory" && text>3 && hidemem) { ind=0; showmem=false;
			for(var vx=-3; vx<3; vx++) {
				for(var vy=-3; vy<3; vy++) {writeonbox(arrNum[ind],(vy*5/6)+0.4,(vx*5/6)+0.4);ind++;}
			}
			showmem=true;
			hidemem=false;
			if(!runningGO)  BABYLON.Tools.QueueNewFrame(renderLoop);
		}
            };
// ******************************Render loop**************************************
// *******************************************************************************
var xfps=0;
var doRender=true;
var renderLoop = function () {
	xfps++;	if(xfps>60) xfps=1;
	if(!runningGO && !inaction){if(xfps == 1) doRender=true; else doRender=false;} else {if(xfps % 2 == 0) doRender=true; else doRender=false;}
	if(doRender) {	engine.beginFrame();scene.render(); engine.endFrame();}
        if(runningGO) BABYLON.Tools.QueueNewFrame(renderLoop);
};
function memtclear() {	var index;	for (index = 0; index < memt.length; ++index) {clearTimeout(memt[index]);} memt = new Array();}

BABYLON.Tools.QueueNewFrame(renderLoop);

}
/*
     FILE ARCHIVED ON 21:05:00 Mar 27, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:17:54 Aug 22, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 388.27
  exclusion.robots: 0.162
  exclusion.robots.policy: 0.148
  RedisCDXSource: 102.257
  esindex: 0.015
  LoadShardBlock: 264.762 (3)
  PetaboxLoader3.datanode: 275.141 (4)
  CDXLines.iter: 17.484 (3)
  load_resource: 126.019
  PetaboxLoader3.resolve: 98.057
*/