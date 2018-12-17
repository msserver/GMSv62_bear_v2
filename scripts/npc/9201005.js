/**
	Nicole
-- By ---------------------------------------------------------------------------------------------
	Angel (get31720 ragezone) - (fixed engagement ring problems)
-- Extra Info -------------------------------------------------------------------------------------
	Fixed by  [happydud3] & [XotiCraze]
---------------------------------------------------------------------------------------------------
**/

var status;
var x;
var hasEngageRing = false;

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
		
		var item = new Array(4031360, 4031358, 4031362, 4031364);
		for (x = 0; x < item.length && !hasEngageRing; x++) {
			if (cm.haveItem(item[x], 1))
				hasEngageRing = true;
		}
		
    if (status == 0) {
		var text = "I'm here to assist you on weddings !";
		var choice = new Array("How do I prepare a wedding?", "I have an engagement ring and need invites for my guests", "I am the bride/groom and I'd like to start the wedding", "I am the guest and I'd like to go into the wedding", "Mooney has sent me here to talk to you about engagement rings");
		for (x = 0; x < choice.length; x++) {
			text += "\r\n#L" + x + "##b" + choice[x] + "#l";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		switch(selection) {
			case 0:
				cm.sendOk("Moony makes the engagement ring. The engagement ring is required throughout the wedding so never lose it. To invite your guests into the wedding you need to show me your engagement ring and then I'll give you 15 Gold Maple Leaves. They need 1 each to enter the wedding. Enjoy!");
				cm.dispose();
				break;
			case 1:
				if (cm.haveItem(4000313)) {
					cm.sendOk("You already have a Gold Maple Leaf. Go give them to your guests before you go into the wedding.");
					cm.dispose();
                } else if (hasEngageRing) {
					cm.sendOk("You have recieved 15 Gold Maple Leaves.");
					cm.gainItem(4000313,15);
					cm.dispose();
				} else {
					cm.sendOk("You do not have an engagement ring.");
					cm.dispose();
				}
				break;
			case 2:
				if (hasEngageRing) {
					cm.warp(680000210, 2);
					cm.sendOk("Talk to High Priest John when you're ready to be married.");
					cm.dispose();
				} else {
					cm.sendOk("You do not have an engagement ring.");
					cm.dispose();
				}
				break;
			case 3:
				if (cm.haveItem(4000313)) {
					cm.warp(680000210);
					cm.sendOk("Enjoy the wedding. Don't drop your Gold Maple Leaf or you won't be able to finish the whole wedding.");
					cm.dispose();
				} else {
					cm.sendOk("You do not have a Gold Maple Leaf");
					cm.dispose();
				}
				break;
			case 4:
                if (cm.getPlayer().getGender() == 0 && cm.haveItem(4031360,2)) {
                    cm.sendOk("You have recieved a blue primrose seed. Please give this to your wife so she can get her engagement ring.");
                    cm.gainItem(4031360,-1);
                    cm.gainItem(4001100,1);
                    cm.dispose();
                } else if(cm.getPlayer().getGender() == 0 && cm.haveItem(4031358,2)) {
                    cm.sendOk("You have recieved a brown primrose seed. Please give this to your wife so she can get her engagement ring.");
                    cm.gainItem(4031358,-1);
                    cm.gainItem(4001098,1);
                    cm.dispose();
                } else if(cm.getPlayer().getGender() == 0 && cm.haveItem(4031362,2)) {
                    cm.sendOk("You have recieved a green primrose seed. Please give this to your wife so she can get her engagement ring.");
                    cm.gainItem(4031362,-1);
                    cm.gainItem(4001095,1);
                    cm.dispose();            
                } else if(cm.getPlayer().getGender() == 0 && cm.haveItem(4031364,2)) {
                    cm.sendOk("You have recieved a pink primrose seed. Please give this to your wife so she can get her engagement ring.");
                    cm.gainItem(4031364,-1);
                    cm.gainItem(4001097,1);
                    cm.dispose();
                } else if(cm.getPlayer().getGender() == 1 && cm.haveItem(4001100)) {
                    cm.sendOk("Thank you. Here is your ring. You may now start your wedding");
                    cm.gainItem(4031360,1);
                    cm.gainItem(4001100,-1);
                    cm.dispose();
                } else if(cm.getPlayer().getGender() == 1 && cm.haveItem(4001098)) {
                    cm.sendOk("Thank you. Here is your ring. You may now start your wedding");
                    cm.gainItem(4031358,1);
                    cm.gainItem(4001098,-1);
                    cm.dispose();
                } else if(cm.getPlayer().getGender() == 1 && cm.haveItem(4001095)) {
                    cm.sendOk("Thank you. Here is your ring. You may now start your wedding");
                    cm.gainItem(4031362,1);
                    cm.gainItem(4001095,-1);
                    cm.dispose();
                } else if(cm.getPlayer().getGender() == 1 && cm.haveItem(4001100)) {
                    cm.sendOk("Thank you. Here is your ring. You may now start your wedding");
                    cm.gainItem(4031364,1);
                    cm.gainItem(4001097,-1);
                    cm.dispose();
                }
                else {
                    cm.sendOk("I only work for either guys who have 2 rings and need to exchange one of their rings or for girls who need to exchange an item given by their husbands for their engagement ring");
                    cm.dispose();
                }
                break;
		}
	}
}