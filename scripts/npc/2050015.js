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
			cm.sendSimple("�������ƤӰ��A�H���u���20����?\r\n\�Τp���W�S���������Y�޳N�i�H���A��20���ܦ�1�Ӽ���!!\r\n\�п�ܪA��:\r\n\#L1##r����������#l\r\n\#L2##r���״�����#l#k \r\n\\r\n\���ת��Ϥ�:#i4031454#")						
		} else if (selection == 1) {
			if(cm.getMeso() >= 2000000000) {
				cm.gainMeso(-2000000000);
				cm.gainItem(4031454, 1);
				cm.sendOk("#e�n�F,�ݬݪ��~�椺���S������#i4031454#�a!");
		} else {
				cm.sendOk("#e�A������20���ګ�����A���Y�O?");
				cm.dispose();
		}
		} else if (selection == 2) {	
			if (cm.haveItem(4031454) >= 1 && cm.getMeso() < 347474329) {
				cm.gainItem(4031454, -1);
				cm.gainMeso(2000000000);
				cm.sendOk("#e�n�F,�ݬݬO���O������20��!");
		} else {
				cm.sendOk("#e�A�ڥ��S�� #r ���� #k #i4031454# �o�ӪF��Ϊ̧A�����W�L #r 347474329�� #r �p�G�u�������\���ܨ�L�����|�Q�t�ΦY����");
		}
				cm.dispose();
		}
	}
}