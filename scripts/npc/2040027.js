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
            cm.sendSimple("那麼，你好！這裡是扎昆祭台? 如果你想挑戰請帶上#b#t4001017##k, 你是不是要去挑戰扎昆 .\r\n#L1#我希望買#b火焰的眼#v4001017##k價格2千萬 !#l\r\n\#L2#我已經有火焰的眼，讓我進去(每天只能進3次)!#l\r\n\#L3#b#r我是至尊VIP,從這裡進!(無限制進入)#l");
        } else if (status == 1) {
            if (selection == 1) {
                if(cm.getMeso() >= 20000000) {
                    cm.gainMeso(-20000000);
                    cm.gainItem(4001017, 1);
                    cm.sendOk("謝謝惠顧!");
                } else {
                    cm.sendOk("很抱歉，你身上沒有足夠的金幣!");
                }
                cm.dispose();
        } else if (status == 3) {
            if (selection == 3) {
                if(cm.getChar().getVip() >= 4) {
                cm.warp(280030000, 0);
                } else {
                cm.sendOk("你不是至尊VIP,騙飯吃找扁啊?想要至尊VIp找GM買去!");
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
                    cm.sendOk("你每天只能允許進入扎洞3次!");
                    mode = 1;
                    status = -1;
                }
                
            }
            else{
                cm.sendOk("你的等級不足50級，所以不能進入扎洞 (必須50級以上) !");
                mode = 1;
                status = -1;
            }
        }
    }
}