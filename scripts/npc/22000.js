/*
小偉製作的一個豪華NPC 希望你喜歡。
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
            cm.sendSimple ("#dHI 我#b#g可愛#b的#r【#h #】 #b能為你做點什麼嗎?你好，我是萬能NPC，為你提供最優良的服務。\r\n #r#L0#傳送世界各地圖#l #L1#Boss 傳送#l #g#L2#練功地圖#l \r\n\r\n #d#L3#2-4轉轉職#l #b#L4#1轉海盜教官#l \r\n\r\n  #L6#素質重配#l #L7#錢解壓縮#l \r\n\r\n #d#e#L8#喇叭專賣店#l #L9#販賣點數卡#l \r\n\r\n #L10#女生整形#l#L11#男生整形#l#n \r\n\r\n #L12#購買名聲#l #L13#倉庫管理#l#n #L14#背景音樂欣賞 ");
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