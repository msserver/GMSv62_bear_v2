/* 
���}�������ѩ]���@�ط������}�o
*/ 

var status = 0; 
var maps = Array(
Array("GM�U[�۷��50��]",1002140,50000),
Array("���|���C",1322060,550),
Array("120���}�b��U",1002780,250),
Array("�s�ų��O",1442065,150),
Array("�s�����O",1442066,200),
Array("�s��+30",2070018,300),
Array("�����Ȥl",3010040,350),
Array("�¦���\�Ȥl",3010016,300),
Array("�����p����",3010024,400),
Array("���y",3010041,350),
Array("�{������C",1402050,400), 
Array("�{������C",1402049,400),
Array("�{������C",1402048,400),
Array("§����J��",4031137,60),
Array("70���ۤ��u��",1372035,500),
Array("70�����r�u��",1372036,500),
Array("70������u��",1372037,500),
Array("70���p��u��",1372038,500),
Array("103����������",1382045,600),
Array("103���r�s����",1382046,600),
Array("103���B�z����",1382047,600),
Array("103���g�p����",1382048,600),
Array("130���z������",1372039,700),
Array("130���@�r����",1372040,700),
Array("130���H�B���M",1372041,700),
Array("130���g�p����",1372042,700),
Array("163����������",1382049,800),
Array("163���ȪZ����",1382050,800),
Array("163���ժ����",1382051,800),
Array("163���C�s����",1382052,800)

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
cm.sendOk("�p�G�ݭn�i�H�H�ɧ��."); 
cm.dispose(); 
return; 
} 
if (mode == 1) 
status++; 
else { 
cm.sendOk("�p�G�ݭn�i�H�H�ɧ��."); 
cm.dispose(); 
return; 
} if (status == 0) { 
if(cm.getChar().getName()=="vip3123"){ 
cm.sendYesNo("���t�_�C!"); 
cm.dispose(); 
}else{ 

cm.sendYesNo("�A�Q�ΧA���ݩ��I�Ӵ��@�ǪF���?�A�٦�#r"+cm.getChar().getRemainingAp()+"#k�ݩ��I"); 
} 
} else if (status == 1) { 
var selStr = "�A�ݭn����F��O?����,�ֿ�a!�����w����ɭԴN#r�U�[�F ,��M�]�i��|���s�F��#r�W�[�@.#b"; 
for (var i = 0; i < maps.length; i++) { 
selStr += "\r\n#L" + i + "#" +"#i"+maps[i][1]+"#"+maps[i][0]+"["+maps[i][2]+"�I]"; 
} 
selStr +="#k"; 
cm.sendSimple(selStr); 
} else if (status == 2) { 
selectedMap= selection; 
cm.sendYesNo("�A�u���Q�n #b#i" + maps[selection][1] +"#"+ maps[selection][0]+ "#k ��?�o�|��O�A#r"+maps[selection][2]+"#k�ݩ��I"); 

} 

else if (status == 3) { 
if (cm.getChar().getRemainingAp() < maps[selectedMap][2]) { 
cm.sendOk("�A�S���������ݩ��I."); 
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