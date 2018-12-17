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
 
VIP道具認證版：
GM在線發放兌換VIP證明所需的道具給玩家，玩家去VIP地圖傳送處兌換VIP證明，該證明扔掉就消失，不可交易。
普通VIP兌換道具ID為4001120
高級VIP兌換道具ID為4001121
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
                
			cm.sendOk("好的,如果你想好了要做什麼,我會很樂意的為你服務的..");
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
			cm.sendSimple("你好，我是VIP管理員，為你提供最優良的服務。\r\n #r#L1#捲軸販賣區#l #L2#高級VIP探秘#l #g#L3#超級VIP聖殿#l \r\n\r\n #d#L12#至尊VIP異界#l #b#L4#百貨店#l #L6#技能書#l #L7#卷軸#l #L8#寵物#l \r\n\r\n #d#e#L9#GM名單#l #L10#家族排行榜#l #L11#遊戲說明#l#n  ");
			} else if (status == 1) {
			if (selection == 1) {
				   if(cm.getChar().getVip() >= 0) {
                   cm.warp(209000000, 0);
				   cm.dispose();
				   }else{
                   cm.sendOk("#b你不是初級VIP，請聯繫GM給你在線開通！！");
                   cm.dispose();   }  
			} else if  (selection == 0) {
				   if(cm.getChar().getVip() >= 0) {
                   cm.warp(209000009, 0);
				   cm.dispose();
				   }else{
                   cm.sendOk("#b你不是高級VIP，請聯繫GM給你在線開通！！");
                   cm.dispose();   }     
            } else if (selection == 3) {
            if(cm.getChar().getVip() >= 3) {
                   cm.warp(920010000, 0);
                   cm.dispose(); 
                   }else{
                   cm.sendOk("#b你不是超級VIP，請聯繫GM給你在線開通！！");
                   cm.dispose();   }     
            } else if (selection == 4) {
                       cm.openShop(10000);
                       cm.dispose();      
            } else if (selection == 6) {
                       //cm.openShop(109);
                       cm.sendOk("#b魔法密林的NANA能幫你激活所有技能(需要500萬)");
                       cm.dispose();   
            } else if (selection == 7) {
                       cm.sendOk("#b卷軸可以打怪爆,100%卷軸在高級VIP地圖內可以購買.");
                       cm.dispose();   
            } else if (selection == 8) {
                       cm.sendOk("#b寵物請使用點券去商城購買");
                       //cm.openShop(912);
                       cm.dispose();   
            } else if (selection == 9) {
                   cm.sendOk("#rbear#l#b      \r\n\r\n #k這些就是本SF的GM名單");
                   cm.dispose();  
            } else if (selection == 10) {
                   cm.displayGuildRanks();
	               cm.dispose();  
            } else if (selection == 11) {
                   cm.sendOk("#b(01)@help玩家幫助 \r\n(02)點TRADE可以直接傳送到自由市場。#l \r\n(03)各城市的nana說不定會有好東西賣哦!  \r\n(04)海底世界海豚學習騎寵和砸卷技能，海底防具店買騎寵。 \r\n(05)射手村的寵物管理員Cloy能告訴你關於寵物的一切 \r\n(06)此服務端由王子提供。");
                       cm.dispose();   
            } else if (selection == 12) {
            if(cm.getChar().getVip() >= 4) {
                   cm.warp(910000000, 0);
                   cm.dispose(); 
                   }else{
                   cm.sendOk("#b你不是至尊VIP，請聯繫GM給你在線開通！！");
                   cm.dispose();   
				}
			}
		}
	}
}