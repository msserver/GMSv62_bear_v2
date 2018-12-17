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
	Moony, Amoria
-- By ---------------------------------------------------------------------------------------------
	Angel (get31720 ragezone) - (Fixed Engagement ring problems)
-- Extra Info -------------------------------------------------------------------------------------
	Fixed by  [happydud3] & [XotiCraze]
---------------------------------------------------------------------------------------------------
**/

var status;
var complete;
var proofoflove = 0;
var x;
var pol = new Array(4031367, 4031368, 4031369, 4031370); // Proof Of Love

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
		if (cm.getPlayer().getGender() == 0)
			cm.sendNext("Hello I'm here to create beautiful rings for you and your future wife.");
		else {
			cm.sendOk("I'm sorry but only males can create an engagement ring.");
			cm.dispose();
		}
	} else if (status == 1) {
		var choice = new Array("Create an engagement ring - Requires 4 Proof of Loves",
		"Proof of Love Quest- Requires 50 Orange Mushroom Caps, 20 Soft Feathers, 40 Firewood, and 40 Horny Mushroom Caps");
		var text = "What would you like me to do?";
		for (x = 0; x < choice.length; x++) {
			text += "\r\n#L" + x + "##b" + choice[x] + "##l";
		}
		cm.sendSimple(text);
	} else if (status == 2) {
		switch (selection) {
			case 0:
				checkProofOfLove();
				if (proofoflove == 4) {
					cm.sendSimple("Great now you can choose a ring! \r\n#L0#Star Gem#l\r\n#L1#Moonstone#l\r\n#L2#Golden Heart#l\r\n#L3#Silver Swan#l");
				} else {
					cm.sendOk("Too bad. You don't have 4 proofs of love.");
					cm.dispose();
				}
				break;
			case 1:
				checkProofOfLove();
				if (proofoflove == 4) {
					cm.sendOk("You already have 4 proofs of love.");
					cm.dispose();
					} else {
				checkQuestItems();
				if (complete) {
					for (x = 0; x < pol.length; x++)
						cm.gainItem(pol[x], 1);
					cm.dispose();
				} else {
					cm.sendNext("To hold the 4 proofs of love you need 4 ETC spaces. To get them you need: \r\n50 Orange Mushroom Caps \r\n20 Soft Feathers \r\n40 Firewood \r\n40 Horny Mushroom Caps");
					cm.dispose();
				}
				break;
		}
		}
	} else if (status == 3) {
		var rings = new Array(4031360, 4031358, 4031362, 4031364);
		cm.gainItem(rings[selection], 2);
		removeProofOfLove();
		cm.sendOk("You have recieved 2 rings. Keep one yourself and give the other to Nicole she will give you an item to give your wife. Your wife will give that item back to Nicole to get her own engagement ring.");
		cm.dispose();
	}
}

function checkProofOfLove() {
    for (x = 0; x < pol.length; x++) {
          if (cm.haveItem(pol[x]))
          	proofoflove++;
     }
}

function removeProofOfLove() {
    for (x = 0; x < pol.length; x++)
		cm.gainItem(pol[x], -1);
}

function checkQuestItems() {
	complete = true;
    var reqItems = new Array(4000001, 4003005, 4000018, 4000015);
	var reqAmount = new Array(50, 20, 40, 40);
    for (x = 0; x < reqItems.length && complete; x++) {
          if (!cm.haveItem(reqItems[x], reqAmount[x]))
          	complete = false;
     }
	if (complete) {
		for (x = 0; x < reqItems.length && complete; x++)
			cm.gainItem(reqItems[x], -reqAmount[x]);
	}
}