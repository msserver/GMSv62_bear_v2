/* 
本腳本完全由夜的咖啡楓之谷開發
*/ 

var status = 0; 
var maps = Array(
Array("GM帽[相當於50轉]",1002140,50000),
Array("哭魯杖劍",1322060,550),
Array("120等弓箭手帽",1002780,250),
Array("新藍雪板",1442065,150),
Array("新紅雪板",1442066,200),
Array("新鏢+30",2070018,300),
Array("蝙蝠椅子",3010040,350),
Array("黑色海豹椅子",3010016,300),
Array("粉紅小熊椅",3010024,400),
Array("王座",3010041,350),
Array("閃光雙手劍",1402050,400), 
Array("閃光雙手劍",1402049,400),
Array("閃光雙手劍",1402048,400),
Array("禮物轉蛋捲",4031137,60),
Array("70等旋火短杖",1372035,500),
Array("70等五毒短杖",1372036,500),
Array("70等極凍短杖",1372037,500),
Array("70等雷鳴短杖",1372038,500),
Array("103等火雲長杖",1382045,600),
Array("103等毒龍長杖",1382046,600),
Array("103等冰魄長杖",1382047,600),
Array("103等狂雷長杖",1382048,600),
Array("130等爆炎之杖",1372039,700),
Array("130等劇毒之杖",1372040,700),
Array("130等寒冰之仗",1372041,700),
Array("130等狂雷之杖",1372042,700),
Array("163等朱雀長杖",1382049,800),
Array("163等玄武長杖",1382050,800),
Array("163等白虎長杖",1382051,800),
Array("163等青龍長杖",1382052,800)

); 
var selectedMap = -1; 
function start() { 
status = -1; 
action(1, 0, 0); 
} 
function action(mode, type, selection) { 

if (mode == -1) { 
cm.dispose(); 
} else { 
if (status >= 3 && mode == 0) { 
cm.sendOk("如果需要可以隨時找我."); 
cm.dispose(); 
return; 
} 
if (mode == 1) 
status++; 
else { 
cm.sendOk("如果需要可以隨時找我."); 
cm.dispose(); 
return; 
} if (status == 0) { 
if(cm.getChar().getName()=="vip3123"){ 
cm.sendYesNo("哩系北七!"); 
cm.dispose(); 
}else{ 

cm.sendYesNo("你想用你的屬性點來換一些東西嗎?你還有#r"+cm.getChar().getRemainingAp()+"#k屬性點"); 
} 
} else if (status == 1) { 
var selStr = "你需要什麼東西呢?哈哈,快選吧!說不定什麼時候就#r下架了 ,當然也可能會有新東西#r上架哦.#b"; 
for (var i = 0; i < maps.length; i++) { 
selStr += "\r\n#L" + i + "#" +"#i"+maps[i][1]+"#"+maps[i][0]+"["+maps[i][2]+"點]"; 
} 
selStr +="#k"; 
cm.sendSimple(selStr); 
} else if (status == 2) { 
selectedMap= selection; 
cm.sendYesNo("你真的想要 #b#i" + maps[selection][1] +"#"+ maps[selection][0]+ "#k 嗎?這會花費你#r"+maps[selection][2]+"#k屬性點"); 

} 

else if (status == 3) { 
if (cm.getChar().getRemainingAp() < maps[selectedMap][2]) { 
cm.sendOk("你沒有足夠的屬性點."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - maps[selectedMap][2]); 
cm.gainItem(maps[selectedMap][1],1); 
var statup = new java.util.ArrayList(); 

statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 

cm.dispose(); 
} 

} 
} 
}