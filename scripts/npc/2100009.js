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
			cm.sendOk("下次見!祝你好運!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("如果你能給我傳說中的#r炎魔頭盔#k#b(Zakum Helmet(1))#k 我就可以隨機給你祝福捲#v2340000#\r\n#r扎昆頭盔#k#b(Zakum Helmet(1))#k的樣子是 #v1002357#  據說#g排名第二的BOSS#k#r扎昆(第三階段)#k有掉喲");
			}
		else if (status == 1) {
			if (cm.haveItem(1002357)) {
			cm.sendYesNo("你竟然有傳說中的#r扎昆頭盔#k#b(Zakum Helmet(1))#k,想試下你的手氣嗎?");
			}
			else if (!cm.haveItem(1002357)) {
			cm.sendOk("你沒有#r扎昆頭盔#k#b(Zakum Helmet(1))#k #v1002357#");
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
