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
            cm.sendSimple ("#dHI 我#b#g可愛#b的#r【#h #】 #b能為你做點什麼嗎?#b\b\r\n#L0##d超級傳送#b          #d包含幸福村卷軸區#v2044203#... ...#b#l\r\n\#l\n#L1##rBoss 傳送#b      各式各樣怪等你來挑戰#v1002390#，#v1122000#等等#l\r\n#L2#2-4轉轉職          #b各種職業等你來練#b#l\r\n\#l\n#L3##r技能點滿#b          #200等後轉生 指令可以打@rebirth喔#b\n\#l\r\n#L4##d素質重置#b          #d別擔心怕點錯,把你能力值變你想要的#l\r\n#L5##g遊戲幣換點數#b          #g1千萬楓幣兌換1W點卷#v4000423#便宜吧!#b#l\r\n#L6##r錢解壓縮#b          心動吧#v5200002#我看見我也心動的#v5200001##l\r\n#L7##r練功地圖          #v1402017#還找不到哪裡好升級? 看看這吧#b#l\r\n#L8##r倉庫管理員         #b東西滿的話可以放我這#b#l\r\n\#l\n#L9##r1轉海盜教官#b          #不用跑到鯨魚號~只有海盜有優惠#b\n\#l\r\n#L10##d購買名聲#b          #d想要高名聲3W?只要有錢有耐性就辦的到#l\r\n#L11##g喇叭專賣店#b          #g可以隨心所欲說愛說的話#v5075004#便宜吧!#b#l\r\n#L12##r販賣寵物#b          可愛吧#v5000029#我看見他我也#v5160006##l\r\n#L13##r音樂點歌          來聽一首歌吧#b#l\r\n#L14##r男生整形#b          想成為帥哥嗎?讓你美夢成真#v5160014##l\r\n#L15##r女生整形          想成為正咩嗎?讓你美夢成真#v5160012##b   ");
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