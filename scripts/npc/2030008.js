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

/* Adobis
 * 
 * El Nath: The Door to Zakum (211042300)
 * 
 * Zakum Quest NPC 
*/

var status;
var mapId = 211042300;

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
			cm.sendSimple("您好!如果想要打炎,必須通過我這3關噢. #b\r\n#L0#炎魔任務 (第一階)#l\r\n#L1#炎魔任務 (第二階)#l\r\n#L2#炎魔忍耐 (第三階)#l");						
		}
		else if (status == 1) {
			//no quest checking yet
			if (selection == 0) { //ZPQ
				if (cm.getParty() == null) { //no party
					cm.sendNext("當你有了自己的組隊，請告訴我.");
					cm.dispose();
				}
				else if (!cm.isLeader()) { //not party leader
					cm.sendNext("請讓你的組隊長來和我說話.");
					cm.dispose();
				}
				else {
					//check each party member, make sure they're above 50 and still in the door map
					//TODO: add zakum variable to characters, check that instead; less hassle
					var party = cm.getParty().getMembers();
					var mapId = cm.getChar().getMapId();
					var next = true;
					
					for (var i = 0; i < party.size() && next; i++) {
						if ((party.get(i).getLevel() < 50) || (party.get(i).getMapid() != mapId)) {
							next = false;
						}
					}
					
					if (next) {
						//all requirements met, make an instance and start it up
						//cm.startPQ("ZakumPQ");
						var em = cm.getEventManager("ZakumPQ");
						if (em == null) {
							cm.sendOk("This trial is currently under construction.");
						} else {
							//start PQ
							em.startInstance(cm.getParty(), cm.getChar().getMap());
							
							//remove all documents/keys/full fire ore from members
							party = cm.getChar().getEventInstance().getPlayers();
							cm.removeFromParty(4001015, party);
							cm.removeFromParty(4001018, party);
							cm.removeFromParty(4001016, party);
						}
						cm.dispose();
					}
					else {
						cm.sendNext("Please make sure all of your members are qualified to begin my trials...");
						cm.dispose();
					}
				}
			}
			else if (selection == 1) { //Zakum Jump Quest
				cm.sendNext("This trial is currently under construction.");
				cm.dispose();
			}
			else if (selection == 2) { //Golden Tooth Collection
				cm.sendNext("This trial is currently under construction.");
				cm.dispose();
			}
		}
	}
}
