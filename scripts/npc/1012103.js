var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("噗噗");
        cm.dispose();
    } else {
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            cm.sendSimple("有啥事情? 沒事就別跟我說話 cm.sendNext ");
        } else {
            switch (selection) {
                case 1://pap
                    cm.spawnMonster(85000019, 20000000, 2000000, 125, 700000, 1, 0, 1, 655, -146);
                    cm.dispose();
                    break;
                case 2://pianus
                    cm.spawnMonster(85100009, 24000000, 3000000, 110, 1500000, 1, 0, 1, 655, -146);
                    cm.dispose();
                    break;
                case 3://crow
                    cm.spawnMonster(94000149, 35000000, 10000000, 115, 2000000, 1, 0, 1, 655, -146);
                    cm.dispose();
                case 4://anego
                    cm.spawnMonster(94001219, 70000000, 10000, 130, 4500000, 1, 0, 1, 655, -146);
                    cm.dispose();
                case 5://bodyguard a
                    cm.spawnMonster(94001129, 350000000, 5000, 152, 15000000, 1, 0, 1, 655, -146);
                    cm.dispose();
                default:
                    cm.dispose();
            }
        }
    }
}  