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
var price = 200000;
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
            cm.sendSimple("����A�A�n�I�o�̬O������x? �p�G�A�Q�D�Խбa�W#b#t4001017##k, �A�O���O�n�h�D�Ԥ�� .\r\n#L1#�ڧƱ�R#b���K����#v4001017##k����2�d�U !#l\r\n\#L2#�ڤw�g�����K�����A���ڶi�h(�C�ѥu��i3��)!#l\r\n\#L3#b#r�ڬO�ܴLVIP,�q�o�̶i!(�L����i�J)#l");
        } else if (status == 1) {
            if (selection == 1) {
                if(cm.getMeso() >= 20000000) {
                    cm.gainMeso(-20000000);
                    cm.gainItem(4001017, 1);
                    cm.sendOk("���´f�U!");
                } else {
                    cm.sendOk("�ܩ�p�A�A���W�S������������!");
                }
                cm.dispose();
        } else if (status == 3) {
            if (selection == 3) {
                if(cm.getChar().getVip() >= 4) {
                cm.warp(280030000, 0);
                } else {
                cm.sendOk("�A���O�ܴLVIP,�F���Y����?�Q�n�ܴLVIp��GM�R�h!");
                }
                cm.dispose();
            } else if (status == 2) {
            } else if (selection == 2  && cm.getLevel() >= 50) {
                if (cm.getBossLog('ZAKUM') < 3)
                {
                    cm.warp(280030000, 0);
                    cm.setBossLog('ZAKUM');
                    cm.dispose();
                }
                else
                {
                    cm.sendOk("�A�C�ѥu�ह�\�i�J��}3��!");
                    mode = 1;
                    status = -1;
                }
                
            }
            else{
                cm.sendOk("�A�����Ť���50�šA�ҥH����i�J��} (����50�ťH�W) !");
                mode = 1;
                status = -1;
            }
        }
    }
}