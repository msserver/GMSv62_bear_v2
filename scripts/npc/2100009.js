//Gachaphon

importPackage(net.sf.odinms.client);



var status = 0;
var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var itemamount = Math.floor(Math.random()*50+1);


function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("�U����!���A�n�B!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("�p�G�A�൹�ڶǻ�����#r���]�Y��#k#b(Zakum Helmet(1))#k �ڴN�i�H�H�����A���ֱ�#v2340000#\r\n#r����Y��#k#b(Zakum Helmet(1))#k���ˤl�O #v1002357#  �ڻ�#g�ƦW�ĤG��BOSS#k#r���(�ĤT���q)#k������");
			}
		else if (status == 1) {
			if (cm.haveItem(1002357)) {
			cm.sendYesNo("�A���M���ǻ�����#r����Y��#k#b(Zakum Helmet(1))#k,�Q�դU�A������?");
			}
			else if (!cm.haveItem(1002357)) {
			cm.sendOk("�A�S��#r����Y��#k#b(Zakum Helmet(1))#k #v1002357#");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(1002357, -1);
			if ((itemchance >= 1) && (itemchance <= 20)) {
			cm.gainItem(2340000,+4);
			}
			else if ((itemchance >= 21) && (itemchance <= 40)) {
			cm.gainItem(2340000,+3);
			}
			else if ((itemchance >= 41) && (itemchance <= 50)) {
			cm.gainItem(2340000,+2);
			}
			else if ((itemchance >= 51) && (itemchance <= 60)) {
			cm.gainItem(2340000,+5);
			}
			else if ((itemchance >= 61) && (itemchance <= 70)) {
			cm.gainItem(2340000,+2);
			}
			else if (itemchance == 71) {
			cm.gainItem(2340000,+10);
			}
			else if (itemchance == 72) {
			cm.gainItem(2340000,+3);
			}
			else if (itemchance == 73) {
			cm.gainItem(2340000,+5);
			}
			else if (itemchance == 74) {
			cm.gainItem(2340000,+2);
			}
			else if (itemchance == 75) {
			cm.gainItem(2340000,+2);
			}
			else if (itemchance == 76) {
			cm.gainItem(2340000,+2);
			}
			else if (itemchance == 77) {
			cm.gainItem(2340000,+3);
			}
			else if (itemchance == 78) {
			cm.gainItem(2340000,+3);
			}
			else if (itemchance == 79) {
			cm.gainItem(2340000,+3);
			}	
			else if (itemchance == 80) {
			cm.gainItem(2340000,+3);
			}	
			else if (itemchance == 81) {
			cm.gainItem(2340000,+1);
			}
		

			cm.dispose();
		}
	}
}
