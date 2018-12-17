/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 Dolphin in Herb Town
**/

var status = 0;

function start() {
	cm.sendSimple ("您好，我是#e#d喇叭販賣商人#k#n\r\n#e#d請問妳要買幾個喇叭?#k#n\r\n#r#L0##e#i5075004# 電視喇叭 #n#l#b10個(100萬)#k\r\n#r#L1##e#i5075004# 電視喇叭 #n#l#b100個(1000萬楓幣)#k\r\n#r#L2##e#i5075004# 電視喇叭 #n#l#b1000個(1億楓幣)#k#k#n\r\n#r#L3##e#i5390001# 高興喇叭 #n#l#b10個(150萬楓幣)#k\r\n#r#L4##e#i5390002# 戀愛喇叭 #n#l#b10個(150萬楓幣)#k\r\n#r#L5##e#i5390000# 生氣喇叭 #n#l#b10個(150萬楓幣)#k");
	}

function action(mode, type, selection) {
		cm.dispose();

	switch(selection){
		case 0: 
			if(cm.getMeso() >= 500000){
			cm.sendOk("謝謝您, #e#i5075004#電視喇叭10個#n 已經送到您的背包中.");
			cm.gainItem(5075004 ,10);
			cm.gainMeso(-500000);
			cm.dispose();
			}else{
			cm.sendOk("什麼阿！你連50萬楓幣都沒有阿！");
			cm.dispose();
			}
		break;
		case 1: 
			if(cm.getMeso() >= 5000000){
			cm.sendOk("謝謝您, #e#i5075004#電視喇叭100個#n 已經送到您的背包中.");
			cm.gainItem(5075004 ,100);
			cm.gainMeso(-5000000);
			cm.dispose();
			}else{
			cm.sendOk("什麼阿！你連500萬楓幣都沒有阿！");
			cm.dispose();
			}
		break;
		case 2: 
			if(cm.getMeso() >= 50000000){
			cm.sendOk("謝謝您, #e#i5075004#電視喇叭1000個#n 已經送到您的背包中.");
			cm.gainItem(5075004 ,1000);
			cm.gainMeso(-50000000);
			cm.dispose();
			}else{
			cm.sendOk("什麼阿！你連5000萬楓幣都沒有阿！");
			cm.dispose();
			
                break;  }
		case 3: 
			if(cm.getMeso() >= 1000000){
			cm.sendOk("謝謝您, #e#i5390001#高興喇叭10個#n 已經送到您的背包中.");
			cm.gainItem(5390001 ,1);
			cm.gainMeso(-1000000);
			cm.dispose();
			}else{
			cm.sendOk("什麼阿！你連100萬楓幣都沒有阿！");
			cm.dispose();
			}
		break;
		case 4: 
			if(cm.getMeso() >= 1000000){
			cm.sendOk("謝謝您, #e#i5390002#戀愛喇叭10個#n 已經送到您的背包中.");
			cm.gainItem(5390002 ,10);
			cm.gainMeso(-1000000);
			cm.dispose();
			}else{
			cm.sendOk("什麼阿！你連100萬楓幣都沒有阿！");
			cm.dispose();
			}
		break;
		case 5: 
			if(cm.getMeso() >= 1000000){
			cm.sendOk("謝謝您, #e#i5390000#生氣喇叭10個#n 已經送到您的背包中.");
			cm.gainItem(5390000 ,100);
			cm.gainMeso(-1000000);
			cm.dispose();
			}else{
			cm.sendOk("什麼阿！你連100萬楓幣都沒有阿！");
			cm.dispose();
			}
		break;
		case 6: 
			if(cm.getMeso() >= 1000000){
			cm.sendOk("謝謝您, #e#i5390002#戀愛心情喇叭10個#n 已經送到您的背包中.");
			cm.gainItem(5390002 ,10);
			cm.gainMeso(-1000000);
			cm.dispose();
			}else{
			cm.sendOk("什麼阿！你連100萬楓幣都沒有阿！");
			cm.dispose();
			}
		break;
		case 7: 
			if(cm.getMeso() >= 10000000){
			cm.sendOk("謝謝您, #e#i5390002#戀愛心情喇叭100個#n 已經送到您的背包中.");
			cm.gainItem(5390002 ,100);
			cm.gainMeso(-10000000);
			cm.dispose();
			}else{
			cm.sendOk("什麼阿！你連1000萬楓幣都沒有阿！");
			cm.dispose();
			}
		break;
		case 8: 
			if(cm.getMeso() >= 100000000){
			cm.sendOk("謝謝您, #e#i5390002#戀愛心情喇叭1000個#n 已經送到您的背包中.");
			cm.gainItem(5390002 ,1000);
			cm.gainMeso(-100000000);
			cm.dispose();
			}else{
			cm.sendOk("什麼阿！你連1億楓幣都沒有阿！");
			cm.dispose();
			}
		break;
			}
		}