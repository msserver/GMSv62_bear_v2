/*
@    Creator :  3esah Of Ragzone
@    Updater :  3esah Of Ragezone
@    NPC = 1002001
@    Function = Best Shop Biggest Shop Ever
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
    cm.sendSimple ("Hey i sell everything in the world\r\nPick a category" +"#k\r\n#L80#Magician shops" +"#k\r\n#L81#Thief shops" +"#k\r\n#L82#Warrior shops" +"#k\r\n#L83#Archer shops" +"#k\r\n#L84#Pirate shops" +"#k\r\n#L85#Common shops" +"#k\r\n#L87#Cash shops" +"#k\r\n#L86#ETC shops");
      } else if (selection == 80) {
               cm.sendSimple (" Pick a category #e#d" +
            "#k\r\n#L0##rMagician shoes" +
            "#k\r\n#L1##rMagician overalls" +
            "#k\r\n#L2##rMagician gloves" +
            "#k\r\n#L3##rMagician hats" +
            "#k\r\n#L4##rMagician shields" +
            "#k\r\n#L5##rMagician and common wands" +
            "#k\r\n#L6##rMagician and common staffs");
      } else if (selection == 81) {
               cm.sendSimple ("Pick a Category #e#d" +
            "#k\r\n#L7##bThief shoes" +
            "#k\r\n#L8##bThief bottoms" +
            "#k\r\n#L9##bThief tops" +
            "#k\r\n#L10##bThief overalls" +
            "#l\r\n#L11##bThief gloves" +
            "#l\r\n#L12##bThief hats" +
            "#l\r\n#L13##bThief shields" +
            "#l\r\n#L14##bThief and common daggers" +
            "#k\r\n#L15##bThief and common claws" +
            "#k\r\n#L16##bThief throwing stars");
      } else if (selection == 82) {
               cm.sendSimple ("Pick a Category #e#d" +
            "#k\r\n#L17##dWarrior shoes" +
            "#k\r\n#L18##dWarrior bottom" +
            "#k\r\n#L19##dWarrior top" +
            "#k\r\n#L20##dWarrior overalls" +
            "#k\r\n#L21##dWarrior gloves" +
            "#k\r\n#L22##dWarrior hats" +
            "#k\r\n#L23##dWarrior shields" +
            "#k\r\n#L24##dWarrior and common one handed axes" +
            "#k\r\n#L25##dWarrior and common two handed axes" +
            "#k\r\n#L26##dWarrior and common one handed bWs" +
            "#k\r\n#L27##dWarrior and common two handed bWs" +
            "#k\r\n#L28##dWarrior and common one handed swords" +
            "#k\r\n#L29##dWarrior and common two handed swords" +
            "#k\r\n#L30##dWarrior and common spears" +
            "#k\r\n#L31##dWarrior and common pole arms");
      } else if (selection == 83) {
               cm.sendSimple ("Pick a Category #e#d" +
            "#k\r\n#L32##gArcher shoes" +
            "#k\r\n#L33##gArcher overalls" +
            "#k\r\n#L34##gArcher gloves" +
            "#k\r\n#L35##gArcher hats" +
            "#k\r\n#L36##gArcher and common bows" +
            "#k\r\n#L37##gArcher and common crossbows" +
            "#k\r\n#L38##gArcher arrows");
      } else if (selection == 84) {
               cm.sendSimple ("Pick a Category #e#d" +
            "#k\r\n#L76##bPirate knuckler" +
            "#k\r\n#L71##bPirate guns" +
            "#k\r\n#L72##bPirate bullets" +
            "#k\r\n#L73##bPirate hats" +
            "#k\r\n#L74##bPirate overalls" +
            "#k\r\n#L101##bPirate gloves" +
            "#k\r\n#L75##bPirate shoes");
      } else if (selection == 85) {
               cm.sendSimple ("Pick a Category #e#d" +
            "\r\n#L105#Stirgeman's weapons" +
            "\r\n#L104#Stirgeman's bottom" +
            "\r\n#L102#Stirgeman's capes" +
            "#k\r\n#L39#Maple weapons" +
            "\r\n#L40#Earrings" +
            "\r\n#L41#Necklaces and face accessories" +
            "\r\n#L42#Capes" +
            "\r\n#L43#Common shoes" +
            "\r\n#L44#Common hats" +
            "\r\n#L45#Common gloves" +
            "\r\n#L46#Common overalls" +
            "\r\n#L47#Common shields" +
            "\r\n#L48#Level 0 weapons");
      } else if (selection == 86) {
               cm.sendSimple ("Pick a Category #e#d" +
            "\r\n#L94#All scrolls" +
            "\r\n#L50#Megaphones, Gachapon tickets, Rocks, Morphs" +
            "\r\n#L51#Buffs and potions" +
            "\r\n#L52#Boss pieces" +
            "\r\n#L57#Chairs" +
            "\r\n#L53#Mounts");
      } else if (selection == 87) {
               cm.sendSimple ("Pick a Category #e#d" +
            "\r\n#L55#All pets" +
            "\r\n#L56#All pet equips, Pet food, Scrolls, Books" +
            "\r\n#L100#Cash hats" +
            "\r\n#L95#Cash tops" +
            "\r\n#L96#Cash bottoms" +
            "\r\n#L97#Cash overalls" +
            "\r\n#L99#Cash weapons" +
            "\r\n#L69#Cash throwing stars" +
            "\r\n#L60#Cash gloves" +
            "\r\n#L98#Cash shoes" +
            "\r\n#L59#Cash capes" +
            "\r\n#L61#Cash shields" +
            "\r\n#L62#Rings" +
            "\r\n#L64#Emotions" +
            "\r\n#L65#Cash earrings" +
            "\r\n#L66#Eye accessories" +
            "\r\n#L67#All accessories" +
            "\r\n#L68#Effects" +
            "\r\n#L70#Messengers" +
            "\r\n#L103##rCharge cash");
      } else if (selection == 105) {
        cm.openShop (10095);
        cm.dispose();
      } else if (selection == 104) {
        cm.openShop (10094);
        cm.dispose();
      } else if (selection == 102) {
        cm.openShop (10086);
        cm.dispose();
      } else if (selection == 101) {
        cm.openShop (10092);
        cm.dispose();
      } else if (selection == 100) {
        cm.openShop (10081);
        cm.dispose();
      } else if (selection == 99) {
        cm.openShop (10080);
        cm.dispose();
      } else if (selection == 98) {
        cm.openShop (10083);
        cm.dispose();
      } else if (selection == 97) {
        cm.openShop (10082);
        cm.dispose();
      } else if (selection == 96) {
        cm.openShop (10085);
        cm.dispose();
      } else if (selection == 95) {
        cm.openShop (10084);
        cm.dispose();
      } else if (selection == 94) {
        cm.openShop (10053);
        cm.dispose();
      } else if (selection == 0) {
        cm.openShop (10000);
        cm.dispose();
      } else if (selection == 1) {
        cm.openShop (10001);
        cm.dispose();
      } else if (selection == 2) {
        cm.openShop (10002);
        cm.dispose();
      } else if (selection == 3) {
        cm.openShop (10003);
        cm.dispose();
      } else if (selection == 4) {
        cm.openShop (10004);
        cm.dispose();
      } else if (selection == 5) {
        cm.openShop (10005);
        cm.dispose();
      } else if (selection == 6) {
        cm.openShop (10006);
        cm.dispose();
      } else if (selection == 7) {
        cm.openShop (10007);
        cm.dispose();
      } else if (selection == 8) {
        cm.openShop (10008);
        cm.dispose();
      } else if (selection == 9) {
        cm.openShop (10009);
        cm.dispose();
      } else if (selection == 10) {
        cm.openShop (10010);
        cm.dispose();
      } else if (selection == 11) {
        cm.openShop (10011);
        cm.dispose();
      } else if (selection == 12) {
        cm.openShop (10012);
        cm.dispose();
      } else if (selection == 13) {
        cm.openShop (10013);
        cm.dispose();
      } else if (selection == 14) {
        cm.openShop (10014);
        cm.dispose();
      } else if (selection == 15) {
        cm.openShop (10015);
        cm.dispose();
      } else if (selection == 16) {
        cm.openShop (10038);
        cm.dispose();
      } else if (selection == 17) {
        cm.openShop (10016);
        cm.dispose();
      } else if (selection == 18) {
        cm.openShop (10017);
        cm.dispose();
      } else if (selection == 19) {
        cm.openShop (10018);
        cm.dispose();
      } else if (selection == 20) {
        cm.openShop (10019);
        cm.dispose();
      } else if (selection == 21) {
        cm.openShop (10020);
        cm.dispose();
      } else if (selection == 22) {
        cm.openShop (10021);
        cm.dispose();
      } else if (selection == 23) {
        cm.openShop (10022);
        cm.dispose();
      } else if (selection == 24) {
        cm.openShop (10023);
        cm.dispose();
      } else if (selection == 25) {
        cm.openShop (10024);
        cm.dispose();
      } else if (selection == 26) {
        cm.openShop (10025);
        cm.dispose();
      } else if (selection == 27) {
        cm.openShop (10026);
        cm.dispose();
      } else if (selection == 28) {
        cm.openShop (10027);
        cm.dispose();
      } else if (selection == 29) {
        cm.openShop (10028);
        cm.dispose();
      } else if (selection == 30) {
        cm.openShop (10029);
        cm.dispose();
      } else if (selection == 31) {
        cm.openShop (10030);
        cm.dispose();
      } else if (selection == 32) {
        cm.openShop (10031);
        cm.dispose();
      } else if (selection == 33) {
        cm.openShop (10032);
        cm.dispose();
      } else if (selection == 34) {
        cm.openShop (10033);
        cm.dispose();
      } else if (selection == 35) {
        cm.openShop (10034);
        cm.dispose();
      } else if (selection == 36) {
        cm.openShop (10035);
        cm.dispose();
      } else if (selection == 37) {
        cm.openShop (100320);
        cm.dispose();
      } else if (selection == 38) {
        cm.openShop (10037);
        cm.dispose();
      } else if (selection == 39) {
        cm.openShop (10051);
        cm.dispose();
      } else if (selection == 40) {
        cm.openShop (10039);
        cm.dispose();
      } else if (selection == 41) {
        cm.openShop (10040);
        cm.dispose();
      } else if (selection == 42) {
        cm.openShop (10041);
        cm.dispose();
      } else if (selection == 43) {
        cm.openShop (10042);
        cm.dispose();
      } else if (selection == 44) {
        cm.openShop (10043);
        cm.dispose();
      } else if (selection == 45) {
        cm.openShop (10044);
        cm.dispose();
      } else if (selection == 46) {
        cm.openShop (10045);
        cm.dispose();
      } else if (selection == 47) {
        cm.openShop (10046);
        cm.dispose();
      } else if (selection == 48) {
        cm.openShop (10047);
        cm.dispose();
      } else if (selection == 49) {
        cm.openShop (10048);
        cm.dispose();
      } else if (selection == 50) {
        cm.openShop (10048);
        cm.dispose();
      } else if (selection == 51) {
        cm.openShop (10049);
        cm.dispose();
      } else if (selection == 52) {
        cm.openShop (10050);
        cm.dispose();
      } else if (selection == 53) {
        cm.openShop (10052);
        cm.dispose();
      } else if (selection == 54) {
        cm.openShop (10053);
        cm.dispose();
      } else if (selection == 55) {
        cm.openShop (10054);
        cm.dispose();
      } else if (selection == 56) {
        cm.openShop (10055);
        cm.dispose();
      } else if (selection == 57) {
        cm.openShop (10056);
        cm.dispose();
      } else if (selection == 58) {
        cm.openShop (10057);
        cm.dispose();
      } else if (selection == 59) {
        cm.openShop (10058);
        cm.dispose();
      } else if (selection == 60) {
        cm.openShop (10059);
        cm.dispose();
      } else if (selection == 61) {
        cm.openShop (10060);
        cm.dispose();
      } else if (selection == 62) {
        cm.openShop (10061);
        cm.dispose();
      } else if (selection == 63) {
        cm.openShop (10062);
        cm.dispose();
      } else if (selection == 64) {
        cm.openShop (10063);
        cm.dispose();
      } else if (selection == 65) {
        cm.openShop (10064);
        cm.dispose();
      } else if (selection == 66) {
        cm.openShop (10065);
        cm.dispose();
      } else if (selection == 67) {
        cm.openShop (10066);
        cm.dispose();
      } else if (selection == 68) {
        cm.openShop (10067);
        cm.dispose();
      } else if (selection == 69) {
        cm.openShop (10068);
        cm.dispose();
      } else if (selection == 70) {
        cm.openShop (10069);
        cm.dispose();
      } else if (selection == 71) {
        cm.openShop (10088);
        cm.dispose();
      } else if (selection == 72) {
        cm.openShop (10089);
        cm.dispose();
      } else if (selection == 73) {
        cm.openShop (10090);
        cm.dispose();
      } else if (selection == 74) {
        cm.openShop (10091);
        cm.dispose();
      } else if (selection == 75) {
        cm.openShop (10093);
        cm.dispose();
      } else if (selection == 76) {
        cm.openShop (10087);
        cm.dispose();
      } else if (selection == 103) {
                cm.sendSimple ("How much would you like?#e#d" +
                 "#k\r\n#L89##r10k NX cash for 200k mesos" +
                 "#k\r\n#L90##r20k NX cash for 400k mesos" +
                 "#k\r\n#L91##r30k NX cash for 600k mesos" +
                 "#k\r\n#L92##r40k NX cash for 800k mesos" +
                 "#k\r\n#L93##r50k NX cash for 1 million mesos");
      } else if (selection == 89) {
        if (cm.getMeso < 200000) {
                   cm.sendOk ("Please check if you have enough #rmesos#k");
                   cm.dispose();
      } else {
                   cm.gainMeso (-200000);
                   cm.modifyNX(10000,4);
                   cm.dispose();
                   }
      } else if (selection == 90) {
        if (cm.getMeso < 400000) {
                   cm.sendOk ("Please check if you have enough #rmesos#k");
                   cm.dispose();
      } else {
                   cm.gainMeso (-400000);
                   cm.modifyNX(20000,4);
                   cm.dispose();
                   }
      } else if (selection == 91) {
        if (cm.getMeso < 600000) {
                   cm.sendOk ("Please check if you have enough #rmesos#k");
                   cm.dispose();
      } else {
                   cm.gainMeso (-600000);
                   cm.modifyNX(30000,4);
                   cm.dispose();
                   }
      } else if (selection == 92) {
        if (cm.getMeso < 800000) {
                   cm.sendOk ("Please check if you have enough #rmesos#k");
                   cm.dispose();
      } else {
                   cm.gainMeso (-800000);
                   cm.modifyNX(40000,4);
                   cm.dispose();
                   }
      } else if (selection == 93) {
        if (cm.getMeso < 1000000) {
                   cm.sendOk ("Please check if you have enough #rmesos#k");
                   cm.dispose();
      } else {
                   cm.gainMeso (-1000000);
                   cm.modifyNX(50000,4);
                   cm.dispose();
                   }
            }
      }
}  

