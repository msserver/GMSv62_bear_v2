function start() {
    cm.sendSimple ("Hello, I sell pirate Weapons and bullets. What do you want?\r\n#L0#Knuckler#l\r\n#L1#Guns#l\r\n#L2#Bullets#l\r\n#L3#Hats\r\n#L4#Overalls\r\n#L5#Gloves\r\n#L6#Shoes\r\n#L7#Scrolls");
}

function action(mode, type, selection) {
    cm.dispose();
    switch(selection) {
        case 0: cm.openShop (5000); break;
        case 1: cm.openShop (5001); break;
        case 2: cm.openShop (5002); break;
        case 3: cm.openShop (5003); break;
        case 4: cm.openShop (5004); break;
        case 5: cm.openShop (5005); break;
        case 6: cm.openShop (5006); break;
        case 7: cm.openShop (5007); break;
        default: cm.dispose(); break;
    }
}