/*
�p���s�@���@�ӻ���NPC �Ʊ�A���w�C
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
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple ("#dHI ��#b#g�i�R#b��#r�i#h #�j #b�ର�A���I�����?�A�n�A�ڬO�U��NPC�A���A���ѳ��u�}���A�ȡC\r\n #r#L0#�ǰe�@�ɦU�a��#l #L1#Boss �ǰe#l #g#L2#�m�\�a��#l \r\n\r\n #d#L3#2-4����¾#l #b#L4#1����s�Щx#l \r\n\r\n  #L6#���譫�t#l #L7#�������Y#l \r\n\r\n #d#e#L8#��z�M�橱#l #L9#�c���I�ƥd#l \r\n\r\n #L10#�k�;��#l#L11#�k�;��#l#n \r\n\r\n #L12#�ʶR�W�n#l #L13#�ܮw�޲z#l#n #L14#�I�����֪Y�� ");
        } else if (status == 1) {
            switch(selection) {
                case 0: cm.openNpc(9000020); break;
                case 1: cm.openNpc(9201045); break;
                case 2: cm.openNpc(9220005); break;
                case 3: cm.openNpc(9200000); break;
                case 4: cm.openNpc(1072007); break;
                case 5: cm.openNpc(9201082); break;
                case 6: cm.openNpc(2003); break;
                case 7: cm.openNpc(2050015); break;
                case 8: cm.openNpc(1052017); break;
                case 9: cm.openNpc(9201082); break;
                case 10: cm.openNpc(9900000); break; 
                case 11: cm.openNpc(9010001); break;
                case 12: cm.openNpc(9000017); break;
                case 13: cm.openNpc(1022005); break;
                case 14: cm.openNpc(1061008); break;
            }
        }  
    }   
}    