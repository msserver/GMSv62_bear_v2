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

importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

/* Adobis
	Zakum entrance
*/
var status = 0;
var price = 20000;
var map = Array(240010501);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("你好！這裡是殘暴炎魔祭壇的入口，如果你真的想挑戰，請購買 #b#t4001017##k。\r\n#L1#我希望買 #b火焰之眼#k 價格 20,00000 金幣 !#l\r\n\#L2#我已經有 #b火焰之眼#k , 讓我進去!#l");
			} else if (status == 1) {
			if (selection == 1) {
				if(cm.getMeso() >= 20000000) {
					cm.gainMeso(-2000000);
					cm.gainItem(4001017, 1);
					cm.sendOk("謝謝惠顧!");
				} else {
					cm.sendOk("很抱歉，你身上沒有足夠的楓幣!");
				}
				cm.dispose();
			} else if (status == 2) {
			} else if (selection == 2) {
                                            cm.getLevel() >= 50 
					cm.warp(280030000, 0);
					cm.dispose();
}
else{
cm.sendOk("你等級太低了!這裡至少要50級才能進去!");

			}
		}
	}
}
