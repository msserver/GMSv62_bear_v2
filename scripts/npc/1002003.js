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
            cm.sendOk("�ݭn�W�[�n�����?.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("���o.�ڥi�H���A�W�[��~");
        } else if (status == 1) {
            capacity = cm.getBuddyCapacity();
            if (capacity == 100) {
                cm.sendOk("�A�S��10�U");
                cm.dispose();
            }
            else {
                price = 100000;
                newcapacity = capacity + 5;
                cm.sendYesNo("�A�R�ڶ� #b" + newcapacity + "#k for #b" + price + " #�n�W�[?");
            }
        } else if (status == 2) {
            if (cm.getMeso() < price) {
                cm.sendOk("�A����������!")
                cm.dispose();
            }
            else {
                cm.updateBuddyCapacity(newcapacity);
                cm.gainMeso(-price);
                cm.sendOk("�w�g�W�[�F.");
                cm.dispose();
            }
        } 
    }
}