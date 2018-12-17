var status = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0) {
        cm.sendYesNo("你要去PVP嗎? 就是可以互打的地方!");
        status++;
    } else {
       if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
            cm.dispose();
        } else {
            if (status == 1) {
                cm.sendNext ("Alright, good luck in there!");
                status++
            } else if (status == 2) {
                cm.warp(910000018, 0);
                cm.dispose();
            }
        }
    }
}  