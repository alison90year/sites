(function () {
    const r = window.location.search.substr(1).match(new RegExp("(^|&)code=([^&]*)(&|$)", "i"));
    const g = r ? unescape(r[2]) : null;
    g && sessionStorage.setItem("inviteCode", JSON.stringify(g.slice(0, 8)));
    let u = window.location.hostname;
    let a = u.split(".");
    let l = u === "localhost";
    l || (l = /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g.test(u));

    function s() {
        let h;
        let p = a;
        const m = /Android|webOS|iPhone|ipad|iPod|BlackBerry|XiaoMi/i.test(navigator.userAgent);
        const z = p.length > 2 && p[0] === "m";
        if (p.length > 2) p = p.slice(p.length - 2);
        if (!m && z) {
            h = location.protocol + "//" + p.join(".");
        } else if (m && !z) {
            h = location.protocol + "//m." + p.join(".");
        }
        if (h) {
            const s = sessionStorage.getItem("inviteCode");
            if (s && s.length) h += "?code=" + JSON.parse(s);
            window.location.href = h;
        }
    }

    function t() {
        const c = [{
            // "code": "tbha",
            "code": "tbha",
            "skin": "tbh",
            "childCode": "tbyl",
            "locale": 'zh_CN',
            "name": "腾博会官网 - 诚信为本，专业服务",
            "theme": "a026",
            "winOpenTime": "6000",
            "PTUrl": "",//PT客户端
            "customerServiceStatus": 1,//0旧版本   1新版本
            "sortArr": [1, 2, 3, 4, 5, 6, 7],//1电子游艺 2体育赛事 3棋牌游戏 4彩票游戏 5视讯直播 6电竞赛事 7捕鱼机
            "maintainUrl": "https://www.ffyl0202.com/clientMaintain/getClientMaintain",
            "domains": ['localhost', "011317.com"]
        }
        ];
        if (!l) {
            if (a.length > 2) a = a.slice(a.length - 2);
            u = a.join(".");
        }
        let o = c[0];
        for ({ // noinspection ES6ConvertVarToLetConst
            var x
        } in c) {
            const i = c[x];
            if (i.domains.indexOf(u) > -1) {
                o = i;
                break;
            }
        }
        // o.host = location.protocol + "//" + u + "/xxa";
        o.host = 'https://011317.com/xxa'
        // o.host = 'https://bets888805.com/xxa'
        localStorage.setItem("host", o.host);
        sessionStorage.setItem("theme", parseInt(o.theme.slice(1)));
        window.theme = o.theme;
        window.clientCode = o.code;
        window.projectImgUrl = o.skin;
        window.projectName = o.name;
        window.winOpenTime = o.winOpenTime;
        window.childCode = o.childCode;
        window.mergeAccount = o.mergeAccount;
        window.locale = o.locale;
        window.maintainUrl = o.maintainUrl;
        window.interval = 180000;
        document.title = o.name;
        window.sortArr = o.sortArr;
        window.customerServiceStatus = o.customerServiceStatus;
        window.PTUrl = o.PTUrl;
    }
    !l && s();
    t();
})();
