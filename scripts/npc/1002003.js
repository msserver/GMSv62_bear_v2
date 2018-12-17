/* Mr. Goldstein
	located in Lith Harbour (104000000)
	Buddy List Admin
 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
    var capacity;
    var newcapacity;
    var price;
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("需要增加好友欄嗎?.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("哈囉.我可以幫你增加喔~");
        } else if (status == 1) {
            capacity = cm.getBuddyCapacity();
            if (capacity == 100) {
                cm.sendOk("你沒有10萬");
                cm.dispose();
            }
            else {
                price = 100000;
                newcapacity = capacity + 5;
                cm.sendYesNo("你愛我嗎 #b" + newcapacity + "#k for #b" + price + " #要增加?");
            }
        } else if (status == 2) {
            if (cm.getMeso() < price) {
                cm.sendOk("你的錢不夠喔!")
                cm.dispose();
            }
            else {
                cm.updateBuddyCapacity(newcapacity);
                cm.gainMeso(-price);
                cm.sendOk("已經增加了.");
                cm.dispose();
            }
        } 
    }
}