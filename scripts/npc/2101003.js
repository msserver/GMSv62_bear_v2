var status = -1; 

function start() 
{ 
    status = -1; 
    action(1, 0, 0); 
}

function action(mode, type, selection) { 
    if (mode == 1) 
	status++; 
	if (status == 0) { 
		cm.sendSimple("#bWelcome to BeamMS V.62, I am the personal helper NPC. What do you need? \b\r\n#L0#What are the server rates?\n\#l\b\r\n#L1#Who are the Gms of this server?\n\#l\b\r\n#L2#What are some of the new updates?\n\#l\b\r\n#L3#Where are all the NPCS in the Fm at?\n\#l\b\r\n#L4#What are some of the features to the server?\n\#l\n\#l\b\r\n#L5#Nevermind I don't need anything.\n\#l")
	} else if (status == 1) {
            if (selection == 0) {
	cm.sendOk("#b               Server Rates\r\n\#i1302034 \r\n\     Exp - 50x \r\n\#i1302034 \r\n\     Meso - 10x \r\n\#i1302034 \r\n\     Drop - 5x");
	} else if (selection == 1) {
	cm.sendOk("#r               Official Gm List\r\n\#i1000009 \r\n\     Matt - Owner \r\n\#i1000009 \r\n\     James - Co Owner \r\n\#i1000009 \r\n\     Aaron - Gm \r\n\#i1000009 \r\n\     Ruski - Gm");
	} else if (selection == 2) {
	cm.sendOk("#d               Updates December 31st\r\n\#i2000005 \r\n\     Pet Shop Added \r\n\#i2000005 \r\n\     Player Hangouts Fixed \r\n\#i2000005 \r\n\     Bug Report System Added to Website \r\n\#i2000005 \r\n\     Non-Hamachi Coming out soon \r\n\#i2000005 \r\n\     Updating to 24/7 Server");
	} else if (selection == 3) {
	cm.sendOk("#k               Where to find all the NPCS\r\n\#i1092001 \r\n\     Talk to Shanks in the free market for the all in one Npc selection menu");
	} else if (selection == 4) {
	cm.sendOk("#r               Features List\r\n\#i5021005 \r\n\     PvP Working \r\n\#i5021005 \r\n\     Proper Autobans \r\n\#i5021005 \r\n\     Tons of npcs and shops \r\n\#i5021005 \r\n\     Player Hangouts \r\n\#i5021005 \r\n\     Most Pqs Working");
	} else if (selection == 5) {
	cm.dispose();
	}
	cm.dispose();
}
}