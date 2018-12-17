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
			cm.sendOk("你的運氣應該是不錯的,下次好運!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("我是禮物機.\r\nI 需不需要來試一下你的運氣?有機會轉到稀有裝.可以找左邊NPC的喇叭專賣店購買喔~!\r\n這是禮物圖片: #v4031137#");
			}
		else if (status == 1) {
			if (cm.haveItem(4031137)) {
			cm.sendYesNo("我看見你有禮物, 是否要用它?");
			}
			else if (!cm.haveItem(4031137)) {
			cm.sendOk("你身上沒有禮物#bGM#k交代我不能幫你");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(4031137, -1);
			if ((itemchance >= 1) && (itemchance <= 20)) {
			cm.gainItem(2000004, itemamount);
			}
			else if ((itemchance >= 21) && (itemchance <= 40)) {
			cm.gainItem(2020012, itemamount);
			}
			else if ((itemchance >= 41) && (itemchance <= 50)) {
			cm.gainItem(2000005, itemamount);
			}
			else if ((itemchance >= 51) && (itemchance <= 60)) {
			cm.gainItem(2030007, itemamount);
			}
			else if ((itemchance >= 61) && (itemchance <= 70)) {
			cm.gainItem(2022027, itemamount);
			}
			else if (itemchance == 71) {
			cm.gainItem(1372035, 1);
			}
			else if (itemchance == 72) {
			cm.gainItem(2041002, 1);
			}
			else if (itemchance == 73) {
			cm.gainItem(1372036, 1);
			}
			else if (itemchance == 74) {
			cm.gainItem(2040702, 1);
			}
			else if (itemchance == 75) {
			cm.gainItem(2043802, 1);
			}
			else if (itemchance == 76) {
 cm.serverNotice("『轉蛋機公告』：恭喜"+ cm.getChar().getName() +"，獲得祝福卷軸一張.!");
			cm.gainItem(2340000, 1);
			}
			else if (itemchance == 77) {
			cm.gainItem(1402049, 1);
			}
			else if (itemchance == 78) {
			cm.gainItem(1302022, 1);
			}
			else if (itemchance == 79) {
			cm.gainItem(1372037, 1);
			}	
			else if (itemchance == 80) {
			cm.gainItem(1402048, 1);
			}	
			else if (itemchance == 81) {
			cm.gainItem(1302026, 1);
			}
			else if (itemchance == 82) {
			cm.gainItem(1442017, 1);
			}
			else if (itemchance == 83) {
			cm.gainItem(1432048, 1);
			}	
			else if (itemchance == 84) {
			cm.gainItem(1102043, 1);
			}
			else if (itemchance == 85) {
			cm.gainItem(1372038, 1);
			}
			else if (itemchance == 86) {
			cm.gainItem(1402012, 1);
			}
			else if (itemchance == 87) {
			cm.gainItem(1302027, 1);
			}	
			else if (itemchance == 88) {
			cm.gainItem(1402051, 1);
			}
			else if (itemchance == 89) {
			cm.gainItem(1322025, 1);
			}
			else if (itemchance == 90) {
			cm.gainItem(1382045, 1);
			}
			else if (itemchance == 91) {
			cm.gainItem(1062000, 1);
			}
			else if (itemchance == 92) {
			cm.gainItem(1332020, 1);
			}
			else if (itemchance == 93) {
			cm.gainItem(1302028, 1);
			}
			else if (itemchance == 94) {
			cm.gainItem(1302087, 1);
			}
			else if (itemchance == 95) {
			cm.gainItem(1102152, 1);
			}
			else if (itemchance == 96) {
			cm.gainItem(1382046, 1);
			}
			else if (itemchance == 97) {
			cm.gainItem(1302021, 1);
			}
			else if (itemchance == 98) {
			cm.gainItem(1102041, 1);
			}
			else if (itemchance == 99) {
			cm.gainItem(1102042, 1);
			}
			else if (itemchance == 100) {
			cm.gainItem(1382047, 1);
			}
			else if (itemchance == 101) {
			cm.gainItem(1302090, 1);
			}
			else if (itemchance == 102) {
			cm.gainItem(1032050, 1);
			}
			else if (itemchance == 103) {
 cm.serverNotice("『轉蛋機公告』：恭喜"+ cm.getChar().getName() +"，20等武器~攻擊力+100.!");
			cm.gainItem(1302098, 1);
			}
			else if (itemchance == 104) {
			cm.gainItem(1322022, 1);
			}
			else if (itemchance == 105) {
			cm.gainItem(1002020, 1);
			}
			else if (itemchance == 106) {
 cm.serverNotice("『轉蛋機公告』：恭喜"+ cm.getChar().getName() +"，獲得50等全職業手套 卷軸數20捲.!");
			cm.gainItem(1082246, 1);
			}
			else if (itemchance == 107) {
 cm.serverNotice("『轉蛋機公告』：恭喜"+ cm.getChar().getName() +"，獲得草莓冰棒+20攻擊力~+20魔攻.!");
			cm.gainItem(1012070, 1);
			}
			else if (itemchance == 108) {
			cm.gainItem(1472075, 1);
			}
			else if (itemchance == 109) {
			cm.gainItem(1002096, 1);
			}
			else if (itemchance == 110) {
			cm.gainItem(1382048, 1);
			}
			else if (itemchance == 111) {
			cm.gainItem(1442012, 1);
			}
			else if (itemchance == 112) {
 cm.serverNotice("『轉蛋機公告』：恭喜"+ cm.getChar().getName() +"，獲得超屌蝴蝶項鍊 全屬性+60.!");
			cm.gainItem(1122001, 1);
			}
			else if (itemchance == 113) {
			cm.gainItem(1442011, 1);
			}
			else if (itemchance == 114) {
			cm.gainItem(1442018, 1);
			}
			else if (itemchance == 115) {
			cm.gainItem(1372039, 1);
			}
			else if (itemchance == 116) {
			cm.gainItem(1022060, 1);
			}
			else if (itemchance == 117) {
 cm.serverNotice("『轉蛋機公告』：恭喜"+ cm.getChar().getName() +"，獲得戒指 全屬性+30 MP+1000.!");
			cm.gainItem(1112311, 1);
			}
			else if (itemchance == 118) {
			cm.gainItem(1372040, 1);
			}
			else if (itemchance == 119) {
			cm.gainItem(1322063, 1);
			}
			else if (itemchance == 120) {
			cm.gainItem(1002088, 1);
			}
			else if (itemchance == 121) {
			cm.gainItem(1041020, 1);
			}
			else if (itemchance == 122) {
 cm.serverNotice("『轉蛋機公告』：恭喜"+ cm.getChar().getName() +"，獲得 帥氣 蝙蝠武器.!");
			cm.gainItem(1302088, 1);
			}
			else if (itemchance == 123) {
			cm.gainItem(1442004, 1);
			}
			else if (itemchance == 124) {
			cm.gainItem(1422008, 1);
			}
			else if (itemchance == 125) {
			cm.gainItem(1322064, 1);
			}
			else if (itemchance == 126) {
			cm.gainItem(1432000, 1);
			}
			else if (itemchance == 127) {
			cm.gainItem(1372042, 1);
			}
			else if (itemchance == 128) {
 cm.serverNotice("『轉蛋機公告』：恭喜"+ cm.getChar().getName() +"，獲得攻擊力不錯的 22等七夕武器.!");
			cm.gainItem(1322051, 1);
			}
			else if (itemchance == 129) {
			cm.gainItem(1302101, 1);
			}
			else if (itemchance == 130) {
			cm.gainItem(1050053, 1);
			}
			else if (itemchance == 131) {
			cm.gainItem(1051032, 1);
			}
			else if (itemchance == 132) {
			cm.gainItem(1050073, 1);
			}
			else if (itemchance == 133) {
			cm.gainItem(1061036, 1);
			}
			else if (itemchance == 134) {
			cm.gainItem(1002253, 1);
			}
			else if (itemchance == 135) {
			cm.gainItem(1382049, 1);
			}
			else if (itemchance == 136) {
			cm.gainItem(1051025, 1);
			}
			else if (itemchance == 137) {
			cm.gainItem(1050067, 1);
			}
			else if (itemchance == 138) {
			cm.gainItem(1051052, 1);
			}
			else if (itemchance == 139) {
			cm.gainItem(1382051, 1);
			}
			else if (itemchance == 140) {
			cm.gainItem(1382050, 1);
			}
			else if (itemchance == 141) { 
			cm.gainItem(1051054, 1);
			}
			else if (itemchance == 142) { 
			cm.gainItem(1050069, 1);
			}
			else if (itemchance == 143) { 
			cm.gainItem(1302095, 1);
			}
			else if (itemchance == 144) { 
			cm.gainItem(1050056, 1);
			}
			else if (itemchance == 145) { 
			cm.gainItem(1050074, 1);
			}
			else if (itemchance == 146) { 
			cm.gainItem(1382049, 1);
			}
			else if (itemchance == 147) {
			cm.gainItem(1382050, 1);
			}
			else if (itemchance == 148) { 
			cm.gainItem(1002218, 1);
			}
			else if (itemchance == 149) { 
			cm.gainItem(1122014, 1);
			}
			else if (itemchance == 150) { 
			cm.gainItem(1412033, 1);
			}
			else if (itemchance == 151) { 
			cm.gainItem(1002246, 1);
			}
			else if (itemchance == 152) { 
			cm.gainItem(1050039, 1);
			}
			else if (itemchance == 153) { 
			cm.gainItem(1382007, 1);
			}
			else if (itemchance == 154) { 
			cm.gainItem(1372000, 1);
			}
			else if (itemchance == 155) { 
			cm.gainItem(1002013, 1);
			}
			else if (itemchance == 156) { 
			cm.gainItem(1302081, 1);
			}
			else if (itemchance == 157) { 
			cm.gainItem(1002036, 1);
			}
			else if (itemchance == 158) { 
			cm.gainItem(1002243, 1);
			}
			else if (itemchance == 159) { 
			cm.gainItem(1372008, 1);
			}
			else if (itemchance == 160) { 
			cm.gainItem(1382008, 1);
			}
			else if (itemchance == 161) { 
			cm.gainItem(1382011, 1);
			}
			else if (itemchance == 162) { 
			cm.gainItem(1092021, 1);
			}
			else if (itemchance == 163) { 
			cm.gainItem(1382051, 1);
			}
			else if (itemchance == 164) { 
			cm.gainItem(1050047, 1);
			}
                        else if (itemchance == 165) { 
			cm.gainItem(1442068, 1);
			}
			else if (itemchance == 166) { 
			cm.gainItem(1041031, 1);
			}
			else if (itemchance == 167) { 
			cm.gainItem(1051033, 1);
			}
			else if (itemchance == 168) { 
			cm.gainItem(1372039, 1);
			}
			else if (itemchance == 169) { 
			cm.gainItem(1002252, 1);
			}
			else if (itemchance == 170) { 
			cm.gainItem(1051024, 1);
			}
			else if (itemchance == 171) { 
			cm.gainItem(1372042, 1);
			}
			else if (itemchance == 172) { 
			cm.gainItem(1050068, 1);
			}
			else if (itemchance == 173) { 
			cm.gainItem(1382003, 1);
			}
			else if (itemchance == 174) { 
			cm.gainItem(1382006, 1);
			}
			else if (itemchance == 175) { 
			cm.gainItem(1402051, 1);
			}
			else if (itemchance == 176) { 
			cm.gainItem(1051031, 1);
			}
			else if (itemchance == 177) { 
			cm.gainItem(1050025, 1);
			}
			else if (itemchance == 178) { 
			cm.gainItem(1462055, 1);
			}
			else if (itemchance == 179) { 
			cm.gainItem(1002245, 1);
			}
			else if (itemchance == 180) { 
			cm.gainItem(13720013, 1);
			}
			else if (itemchance == 181) { 
			cm.gainItem(1452004, 1);
			}
			else if (itemchance == 182) { 
			cm.gainItem(1452023, 1);
			}
			else if (itemchance == 183) { 
			cm.gainItem(1060057, 1);
			}
			else if (itemchance == 184) { 
			cm.gainItem(1040071, 1);
			}
			else if (itemchance == 185) { 
			cm.gainItem(1372038, 1);
			}
			else if (itemchance == 186) { 
			cm.gainItem(1462009, 1);
			}
			else if (itemchance == 187) { 
			cm.gainItem(1452017, 1);
			}
			else if (itemchance == 188) { 
			cm.gainItem(1040025, 1);
			}
			else if (itemchance == 189) { 
			cm.gainItem(1041027, 1);
			}
			else if (itemchance == 190) { 
			cm.gainItem(1322051, 1);
			}
			else if (itemchance == 191) { 
			cm.gainItem(1452007, 1);
			}
			else if (itemchance == 192) { 
			cm.gainItem(1061057, 1);
			}
			else if (itemchance == 193) { 
			cm.gainItem(1472006, 1);
			}
			else if (itemchance == 194) { 
			cm.gainItem(1472019, 1);
			}
			else if (itemchance == 195) { 
			cm.gainItem(1060084, 1);
			}
			else if (itemchance == 196) { 
			cm.gainItem(1432048, 1);
			}
			else if (itemchance == 197) { 
			cm.gainItem(1382052, 1);
			}
			else if (itemchance == 198) { 
			cm.gainItem(1082074, 1);
			}
			else if (itemchance == 199) { 
			cm.gainItem(1332015, 1);
			}
			else if (itemchance == 200) { 
			cm.gainItem(1432001, 1);
			}
			else if (itemchance == 201) { 
			cm.gainItem(1060071, 1);
			}
			else if (itemchance == 202) { 
			cm.gainItem(1472007, 1);
			}
			else if (itemchance == 203) { 
			cm.gainItem(1472002, 1);
			}
			else if (itemchance == 204) { 
			cm.gainItem(1051009, 1);
			}
			else if (itemchance == 205) { 
			cm.gainItem(1422031, 1);
			}
			else if (itemchance == 206) { 
			cm.gainItem(1332016, 1);
			}
			else if (itemchance == 207) { 
			cm.gainItem(1332034, 1);
			}
			else if (itemchance == 208) { 
			cm.gainItem(1332077, 1);
			}
			else if ((itemchance >= 209) && (itemchance <= 215)) { 
			cm.gainItem(1102084, 1);
			}
			else if ((itemchance >= 216) && (itemchance <= 221)) { 
			cm.gainItem(1102086, 1);
			}
			else if ((itemchance >= 222) && (itemchance <= 228)) { 
			cm.gainItem(1102042, 1);
			}
			else if ((itemchance >= 228) && (itemchance <= 240)) { 
			cm.gainItem(1032026, 1);
			}
			else if (itemchance >= 228) { 
			cm.gainItem(1442002, 1);
			}

			cm.dispose();
		}
	}
}
