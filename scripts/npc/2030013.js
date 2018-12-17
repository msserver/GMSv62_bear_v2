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
			cm.sendSimple("�A�n�I�o�̬O�ݼɪ��]���ª��J�f�A�p�G�A�u���Q�D�ԡA���ʶR #b#t4001017##k�C\r\n#L1#�ڧƱ�R #b���K����#k ���� 20,00000 ���� !#l\r\n\#L2#�ڤw�g�� #b���K����#k , ���ڶi�h!#l");
			} else if (status == 1) {
			if (selection == 1) {
				if(cm.getMeso() >= 20000000) {
					cm.gainMeso(-2000000);
					cm.gainItem(4001017, 1);
					cm.sendOk("���´f�U!");
				} else {
					cm.sendOk("�ܩ�p�A�A���W�S������������!");
				}
				cm.dispose();
			} else if (status == 2) {
			} else if (selection == 2) {
                                            cm.getLevel() >= 50 
					cm.warp(280030000, 0);
					cm.dispose();
}
else{
cm.sendOk("�A���ŤӧC�F!�o�̦ܤ֭n50�Ť~��i�h!");

			}
		}
	}
}
