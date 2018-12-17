/*
Athur : Allen Fnazy, RageZone Forums.
 */

/*
Quest Pet NPC
 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("I see you don't need it.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.haveItem(4031921,1)) {
                cm.sendOk("You already have my letter!!");
                cm.dispose();
            } else {
                cm.sendNext("Yo, I must bring this letter to my brother up there!");
            }
        } else if (status == 1) {
            cm.sendNextPrev("I guess you can help me, Please!")
        } else if (status == 2) {
            cm.sendYesNo("Listen up, I just need you to give him this letter as fast you can, You gotta get up there. He will reward you as some closeness! Will you take it, #h #?")
        } else if (status == 3) {
            cm.sendOk("Thank you so much, Iv'e been waiting for someone all this night. Here is the letter, Go up there, Hero!");
            cm.gainItem(4031921, 1);
            cm.dispose();
        }
    }
} 