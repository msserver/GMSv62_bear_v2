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
            cm.sendSimple ("#dHI ��#b#g�i�R#b��#r�i#h #�j #b�ର�A���I�����?#b\b\r\n#L0##d�W�Ŷǰe#b          #d�]�t���֧����b��#v2044203#... ...#b#l\r\n\#l\n#L1##rBoss �ǰe#b      �U���U�˩ǵ��A�ӬD��#v1002390#�A#v1122000#����#l\r\n#L2#2-4����¾          #b�U��¾�~���A�ӽm#b#l\r\n\#l\n#L3##r�ޯ��I��#b          #200������� ���O�i�H��@rebirth��#b\n\#l\r\n#L4##d���譫�m#b          #d�O��ߩ��I��,��A��O���ܧA�Q�n��#l\r\n#L5##g�C�������I��#b          #g1�d�U�����I��1W�I��#v4000423#�K�y�a!#b#l\r\n#L6##r�������Y#b          �߰ʧa#v5200002#�ڬݨ��ڤ]�߰ʪ�#v5200001##l\r\n#L7##r�m�\�a��          #v1402017#�٧䤣����̦n�ɯ�? �ݬݳo�a#b#l\r\n#L8##r�ܮw�޲z��         #b�F�躡���ܥi�H��ڳo#b#l\r\n\#l\n#L9##r1����s�Щx#b          #���ζ]���H����~�u�����s���u�f#b\n\#l\r\n#L10##d�ʶR�W�n#b          #d�Q�n���W�n3W?�u�n�������@�ʴN�쪺��#l\r\n#L11##g��z�M�橱#b          #g�i�H�H�ߩұ����R������#v5075004#�K�y�a!#b#l\r\n#L12##r�c���d��#b          �i�R�a#v5000029#�ڬݨ��L�ڤ]#v5160006##l\r\n#L13##r�����I�q          ��ť�@���q�a#b#l\r\n#L14##r�k�;��#b          �Q�����ӭ���?���A���ڦ��u#v5160014##l\r\n#L15##r�k�;��          �Q����������?���A���ڦ��u#v5160012##b   ");
        } else if (status == 1) {
            switch(selection) {
                case 0: cm.openNpc(9000020); break;
                case 1: cm.openNpc(9201045); break;
                case 2: cm.openNpc(9200000); break;
                case 3: cm.openNpc(2040048); break;
                case 4: cm.openNpc(2003); break;
                case 5: cm.openNpc(9201082); break;
                case 6: cm.openNpc(2050015); break;
                case 7: cm.openNpc(9220005); break;
                case 8: cm.openNpc(1022005); break;
                case 9: cm.openNpc(1072007); break;
                case 10: cm.openNpc(9000017); break; 
                case 11: cm.openNpc(1052017); break;
                case 12: cm.openNpc(10054); break;
                case 13: cm.openNpc(1061008); break;
                case 14: cm.openNpc(9010001); break;
                case 15: cm.openNpc(9900000); break;
            }
        }  
    }   
}    