/* First NPC on Map 0
* By Moogra
*/

function start() {
    if (cm.getChar().getMapId() == 0) {
    cm.sendSimple ("�w��Ө� ���g���]. �A�n��ԣ¾�~�ڴN�e�A��¾�~���˳�! \r\n#L0##b��s��#k#l \r\n\ #L1##b�C�h#k#l \r\n\ #L2##b�k�v#k#l \r\n\ #L3##b�}�b��#k#l \r\n\ #L4##b�s��#k#l \r\n\ #L5##b���s#k#l");
} else
cm.dispose();
}

function action(mode, type, selection) {
    if (selection > 5) {
        cm.sendSimple("�p�G�S����@�ӴN�L�k�X�h��!.");
        cm.dispose();
    } else {
        switch(selection) {
            case 0: cm.gainItem(1102041); cm.gainItem(1442018); cm.gainItem(1442039); cm.gainItem(2000005, 300); break; cm.gainItem(5390002, 20); break;
            case 1: cm.gainItem(1432038); cm.gainItem(1402036); cm.gainItem(1102041); cm.gainItem(2000005, 300); break; cm.gainItem(5390002, 20); break;
            case 2: cm.gainItem(1372032); cm.gainItem(1382036); cm.gainItem(1102042); cm.gainItem(2000005, 300); break; cm.gainItem(5390002, 20); break;
            case 3: cm.gainItem(1452044); cm.gainItem(1462039); cm.gainItem(1102041); cm.gainItem(2000005, 300); break; cm.gainItem(5390002, 20); break;
            case 4: cm.gainItem(1472051); cm.gainItem(1332050); cm.gainItem(1102041); cm.gainItem(2000005, 300); break; cm.gainItem(5390002, 20); break;
            case 5: cm.gainItem(1482023); cm.gainItem(1492013); cm.gainItem(1102041); cm.gainItem(2000005, 300); break; cm.gainItem(5390002, 20); break;
         }
        cm.warp(910000000);
        cm.getChar().maxAllSkills();
        cm.resetStats();
        cm.gainMeso(1000000);
        cm.sendOk("���A���C���r��!");
        cm.dispose();
    }
}