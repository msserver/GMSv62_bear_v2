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


/*
 
VIP�D��{�Ҫ��G
GM�b�u�o��I��VIP�ҩ��һݪ��D�㵹���a�A���a�hVIP�a�϶ǰe�B�I��VIP�ҩ��A���ҩ������N�����A���i����C
���qVIP�I���D��ID��4001120
����VIP�I���D��ID��4001121
*/
importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	
	action(1, 0, 0);
}

function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 0 && mode == 0) {
                
			cm.sendOk("�n��,�p�G�A�Q�n�F�n������,�ڷ|�ַܼN�����A�A�Ȫ�..");
			cm.dispose();
			return;                    
                }
                if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
		        if (status == 0) {
			cm.sendSimple("�A�n�A�ڬOVIP�޲z���A���A���ѳ��u�}���A�ȡC\r\n #r#L1#���b�c���#l #L2#����VIP����#l #g#L3#�W��VIP�t��#l \r\n\r\n #d#L12#�ܴLVIP����#l #b#L4#�ʳf��#l #L6#�ޯ��#l #L7#���b#l #L8#�d��#l \r\n\r\n #d#e#L9#GM�W��#l #L10#�a�ڱƦ�]#l #L11#�C������#l#n  ");
			} else if (status == 1) {
			if (selection == 1) {
				   if(cm.getChar().getVip() >= 0) {
                   cm.warp(209000000, 0);
				   cm.dispose();
				   }else{
                   cm.sendOk("#b�A���O���VIP�A���pôGM���A�b�u�}�q�I�I");
                   cm.dispose();   }  
			} else if  (selection == 0) {
				   if(cm.getChar().getVip() >= 0) {
                   cm.warp(209000009, 0);
				   cm.dispose();
				   }else{
                   cm.sendOk("#b�A���O����VIP�A���pôGM���A�b�u�}�q�I�I");
                   cm.dispose();   }     
            } else if (selection == 3) {
            if(cm.getChar().getVip() >= 3) {
                   cm.warp(920010000, 0);
                   cm.dispose(); 
                   }else{
                   cm.sendOk("#b�A���O�W��VIP�A���pôGM���A�b�u�}�q�I�I");
                   cm.dispose();   }     
            } else if (selection == 4) {
                       cm.openShop(10000);
                       cm.dispose();      
            } else if (selection == 6) {
                       //cm.openShop(109);
                       cm.sendOk("#b�]�k�K�L��NANA�����A�E���Ҧ��ޯ�(�ݭn500�U)");
                       cm.dispose();   
            } else if (selection == 7) {
                       cm.sendOk("#b���b�i�H�����z,100%���b�b����VIP�a�Ϥ��i�H�ʶR.");
                       cm.dispose();   
            } else if (selection == 8) {
                       cm.sendOk("#b�d���Шϥ��I��h�ӫ��ʶR");
                       //cm.openShop(912);
                       cm.dispose();   
            } else if (selection == 9) {
                   cm.sendOk("#rbear#l#b      \r\n\r\n #k�o�ǴN�O��SF��GM�W��");
                   cm.dispose();  
            } else if (selection == 10) {
                   cm.displayGuildRanks();
	               cm.dispose();  
            } else if (selection == 11) {
                   cm.sendOk("#b(01)@help���a���U \r\n(02)�ITRADE�i�H�����ǰe��ۥѥ����C#l \r\n(03)�U������nana�����w�|���n�F���@!  \r\n(04)�����@�ɮ��b�ǲ��M�d�M�{���ޯ�A�������㩱�R�M�d�C \r\n(05)�g������d���޲z��Cloy��i�D�A�����d�����@�� \r\n(06)���A�ȺݥѤ��l���ѡC");
                       cm.dispose();   
            } else if (selection == 12) {
            if(cm.getChar().getVip() >= 4) {
                   cm.warp(910000000, 0);
                   cm.dispose(); 
                   }else{
                   cm.sendOk("#b�A���O�ܴLVIP�A���pôGM���A�b�u�}�q�I�I");
                   cm.dispose();   
				}
			}
		}
	}
}