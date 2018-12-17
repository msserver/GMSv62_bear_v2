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
//YAY LICENSE
/**
-- By ---------------------------------------------------------------------------------------------
	Angel (get31720 ragezone) - (Fixed Engagement ring problems)
-- Extra Info -------------------------------------------------------------------------------------
	Fixed by  [happydud3] & [XotiCraze]
---------------------------------------------------------------------------------------------------
**/

var status;  

function start() {  
    status = -1;  
    action(1, 0, 0);  
}  

function action(mode, type, selection) {  
    if (mode == -1 || mode == 0) {
        cm.sendOk("Goodbye then"); 
            cm.dispose();
			return;
    } else if (mode == 1) {
            status++;
        } else {
            status--;
        }
		
        if (status == 0) { 
		cm.sendSimple("Hello were would you like to go?\r\n#L0#Untamed Hearts Hunting Ground#l\r\n#L1#I have 7 keys Bring me to smash boxes#l\r\n#L2#Please warp me out#l");
        } else if (status == 1) {
		if (selection == 0) {
			cm.warp(680000400); 
        	} else if (selection == 1) {
            		if (cm.haveItem(4031217,7))
                		cm.gainItem(4031217, -7);
            		else 
                		cm.sendOk("Seems like you don't have 7 Keys. Kill the cakes and candles in the Untamed Heart Hunting Ground to get keys. "); 
		} else if (selection == 2) {
			cm.warp(680000500);
			cm.sendOk("Goodbye, I hope you enjoyed the wedding!");
		}
		cm.dispose();
	}
}