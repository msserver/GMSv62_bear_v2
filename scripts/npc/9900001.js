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

/*
Edited by :
lhjrlhjr of RopeMS/RubikMS
lhjrlhjr of RageZone 
lhjrlhjr of OdinMS


Credits:   Summoner of RubikMS
	   (lhjrlhjr of Ragezone)
*/
function start() {
	cm.sendSimple ("嗨，我是#e#r楓葉冒險GM#n#k請來賣卷軸的[Coco(酷酷)]請問你想買哪些東西呢？\r\n#L0#10%#l\r\n#L1#15%#l\r\n#L2#30%#l\r\n#L3#40%#l\r\n#L4#60%#l\r\n#L5#65%#l\r\n#L6#70%#l\r\n#L7#消耗類物品#l\r\n#L8#雜貨#l");
}

function action(mode, type, selection) {
        cm.dispose();
	if (selection == 0) {
		cm.openShop (73);
	} else if (selection == 1) {
		cm.openShop (1393001);
	} else if (selection == 2) {
		cm.openShop (2042010);
	} else if (selection == 3) {
		cm.openShop (2042004);
	} else if (selection == 4) {
		cm.openShop (2042008);
	} else if (selection == 5) {
		cm.openShop (78);
	} else if (selection == 6) {
		cm.openShop (79);
	} else if (selection == 7) {
		cm.openShop (80);
	} else if (selection == 8) {
		cm.openShop (81);
	} else {
		cm.dispose();
	}
}