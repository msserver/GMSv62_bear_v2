/*
@    Author : Snow
@
@    NPC = Mr.Pickall
@    Map =  Kerning City
@    NPC MapId = 103000000
@    Function = Rebirth Player
@
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {
        cm.dispose();
    
    }else if (mode == 0){
        cm.sendOk("Ok, talk to me when your sure you want to #bRebirth#k.");
        cm.dispose();

    }else{            
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
        cm.sendYesNo("Welcome, great hero. You have been through a long and challenging road, and you have become immensely strong. If you bring me a Maple Coin,I can use my magic to increase your power even further, and surpass your limits! You will become a level 1 Beginner again, but you will keep your stats the same and all the Skill in you Hot Keys. Do you wish to be reborn? #b(Note: Please Make Sure you Have Room for all your Equipment in your Inventory. Also Make Sure you use all your SP. As it won't Be useable in your next Job. )#k" );
        }else if (status == 1) {
        if(cm.getChar().getLevel() < 200){
        cm.sendOk("Sorry, You have to be level 200 to rebirth.");
        cm.dispose();
        }else{
        cm.sendOk("#bGood-Job#k, you have qualified for a #eRebirth#n.");
        }
         }else if (status == 2) {
        cm.unequipEverything()
        cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);
        cm.sendNext("Enjoy your rebirth!(Note: You will have to Change Channels For the Full Effect to Take Place.");
        cm.getChar().setLevel(2);
        cm.dispose();
        }            
          }
     }
