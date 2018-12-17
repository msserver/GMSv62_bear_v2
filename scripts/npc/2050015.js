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

/* Robin
	First NPC on Snail Hunting Ground I (2003)
*/

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("金錢倍數太高，人物只能放20億嗎?\r\n\用小熊獨特的屁屁壓縮技術可以幫你把20億變成1個獎盃!!\r\n\請選擇服務:\r\n\#L1##r錢換成獎盃#l\r\n\#L2##r獎盃換成錢#l#k \r\n\\r\n\獎盃的圖片:#i4031454#")						
		} else if (selection == 1) {
			if(cm.getMeso() >= 2000000000) {
				cm.gainMeso(-2000000000);
				cm.gainItem(4031454, 1);
				cm.sendOk("#e好了,看看物品欄內有沒有拿到#i4031454#吧!");
		} else {
				cm.sendOk("#e你錢不到20億我怎麼幫你壓縮呢?");
				cm.dispose();
		}
		} else if (selection == 2) {	
			if (cm.haveItem(4031454) >= 1 && cm.getMeso() < 347474329) {
				cm.gainItem(4031454, -1);
				cm.gainMeso(2000000000);
				cm.sendOk("#e好了,看看是不是有拿到20億!");
		} else {
				cm.sendOk("#e你根本沒有 #r 獎盃 #k #i4031454# 這個東西或者你的錢超過 #r 347474329元 #r 如果真的換成功的話其他的錢會被系統吃掉的");
		}
				cm.dispose();
		}
	}
}