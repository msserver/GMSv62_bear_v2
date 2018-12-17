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
	cm.sendSimple ("�z�n�A�ڬO#e#d��z�c��ӤH#k#n\r\n#e#d�аݩp�n�R�X�ӳ�z?#k#n\r\n#r#L0##e#i5075004# �q����z #n#l#b10��(100�U)#k\r\n#r#L1##e#i5075004# �q����z #n#l#b100��(1000�U����)#k\r\n#r#L2##e#i5075004# �q����z #n#l#b1000��(1������)#k#k#n\r\n#r#L3##e#i5390001# ������z #n#l#b10��(150�U����)#k\r\n#r#L4##e#i5390002# �ʷR��z #n#l#b10��(150�U����)#k\r\n#r#L5##e#i5390000# �ͮ��z #n#l#b10��(150�U����)#k");
	}

function action(mode, type, selection) {
		cm.dispose();

	switch(selection){
		case 0: 
			if(cm.getMeso() >= 500000){
			cm.sendOk("���±z, #e#i5075004#�q����z10��#n �w�g�e��z���I�]��.");
			cm.gainItem(5075004 ,10);
			cm.gainMeso(-500000);
			cm.dispose();
			}else{
			cm.sendOk("������I�A�s50�U�������S�����I");
			cm.dispose();
			}
		break;
		case 1: 
			if(cm.getMeso() >= 5000000){
			cm.sendOk("���±z, #e#i5075004#�q����z100��#n �w�g�e��z���I�]��.");
			cm.gainItem(5075004 ,100);
			cm.gainMeso(-5000000);
			cm.dispose();
			}else{
			cm.sendOk("������I�A�s500�U�������S�����I");
			cm.dispose();
			}
		break;
		case 2: 
			if(cm.getMeso() >= 50000000){
			cm.sendOk("���±z, #e#i5075004#�q����z1000��#n �w�g�e��z���I�]��.");
			cm.gainItem(5075004 ,1000);
			cm.gainMeso(-50000000);
			cm.dispose();
			}else{
			cm.sendOk("������I�A�s5000�U�������S�����I");
			cm.dispose();
			
                break;  }
		case 3: 
			if(cm.getMeso() >= 1000000){
			cm.sendOk("���±z, #e#i5390001#������z10��#n �w�g�e��z���I�]��.");
			cm.gainItem(5390001 ,1);
			cm.gainMeso(-1000000);
			cm.dispose();
			}else{
			cm.sendOk("������I�A�s100�U�������S�����I");
			cm.dispose();
			}
		break;
		case 4: 
			if(cm.getMeso() >= 1000000){
			cm.sendOk("���±z, #e#i5390002#�ʷR��z10��#n �w�g�e��z���I�]��.");
			cm.gainItem(5390002 ,10);
			cm.gainMeso(-1000000);
			cm.dispose();
			}else{
			cm.sendOk("������I�A�s100�U�������S�����I");
			cm.dispose();
			}
		break;
		case 5: 
			if(cm.getMeso() >= 1000000){
			cm.sendOk("���±z, #e#i5390000#�ͮ��z10��#n �w�g�e��z���I�]��.");
			cm.gainItem(5390000 ,100);
			cm.gainMeso(-1000000);
			cm.dispose();
			}else{
			cm.sendOk("������I�A�s100�U�������S�����I");
			cm.dispose();
			}
		break;
		case 6: 
			if(cm.getMeso() >= 1000000){
			cm.sendOk("���±z, #e#i5390002#�ʷR�߱���z10��#n �w�g�e��z���I�]��.");
			cm.gainItem(5390002 ,10);
			cm.gainMeso(-1000000);
			cm.dispose();
			}else{
			cm.sendOk("������I�A�s100�U�������S�����I");
			cm.dispose();
			}
		break;
		case 7: 
			if(cm.getMeso() >= 10000000){
			cm.sendOk("���±z, #e#i5390002#�ʷR�߱���z100��#n �w�g�e��z���I�]��.");
			cm.gainItem(5390002 ,100);
			cm.gainMeso(-10000000);
			cm.dispose();
			}else{
			cm.sendOk("������I�A�s1000�U�������S�����I");
			cm.dispose();
			}
		break;
		case 8: 
			if(cm.getMeso() >= 100000000){
			cm.sendOk("���±z, #e#i5390002#�ʷR�߱���z1000��#n �w�g�e��z���I�]��.");
			cm.gainItem(5390002 ,1000);
			cm.gainMeso(-100000000);
			cm.dispose();
			}else{
			cm.sendOk("������I�A�s1���������S�����I");
			cm.dispose();
			}
		break;
			}
		}