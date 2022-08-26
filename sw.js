/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","9980f36ed5f7c4b8d8c0769d5f722387"],["/2021/02/22/博客的搭建/index.html","cf9a1de464b458db8f66e2bf6633c735"],["/2021/02/23/如何使用markdown/index.html","b6327d15535586b3d3e6d0272a328dce"],["/2021/02/24/mysql命令大全/index.html","b45d45fe3412c91ebe0605cb8f1ffe3a"],["/2021/02/24/mysql数据类型/index.html","c800255310163eaf489d56a7e5369fa9"],["/2021/02/25/Git的介绍与简单使用/index.html","e23f0a0be999050eaeedabe66dc15f82"],["/2021/02/27/简单工厂模式/index.html","8a430d8c1e300c2b6a7bc211cc9226f4"],["/2021/03/01/工厂方法模式/index.html","8433e07eaf1081036153bbc19c52b4db"],["/2021/03/02/抽象工厂模式/index.html","db650688926dc15be49e8a51b9ae6bb7"],["/2021/03/03/单例模式/index.html","63ccf65b80e1a14df3be56b2379a4c5c"],["/2021/03/04/观察者模式/index.html","cf687646b563fc4e1fb90ddbe8b5c714"],["/2021/03/05/适配器模式/index.html","dec14b8d99a2ff8a3e710187c34ca74f"],["/2021/03/06/模板方法模式/index.html","abdfdde261d1fc71b1cc1adc0eb8b421"],["/2021/03/07/责任链模式/index.html","e48f64444adbfa9ac613ae34ac12f1e9"],["/2021/03/09/代理模式/index.html","a7229f758de9d684c620563aaececd6f"],["/2021/03/11/享元模式/index.html","183e2459c2715086e7e30e66312905d4"],["/2021/03/12/外观模式/index.html","7f7259c1d96a8f657338ab31611f3034"],["/2021/03/13/策略模式/index.html","373ed07eac09bf6794c86849920746e7"],["/2021/03/14/桥接/index.html","ecb9d3266cb9ca4fd440127f3db09b54"],["/2021/03/15/LeetCode-多数元素/index.html","3401e18bcbef4679a97e851fed7c0743"],["/2021/03/16/LeetCode之汉明距离/index.html","804025f041f185691cec6ddd5cd34468"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","2b7604451f95cb52d49276898bb6fc16"],["/2021/03/18/LeetCode之两数之和/index.html","8d20f541ccaf975d2ad2aa12a6dbbc8a"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","14147b445369ffb572ea1a80c7fc7d46"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","a808f1a400eca611e55bb94f8c85074c"],["/2021/03/21/LeetCode之有效的括号/index.html","8beeb8e7df7ca8468197ebe37e07db10"],["/2021/03/22/LeetCode之移动零/index.html","af6da0722e7e168be61dffaf5aa1c429"],["/2021/03/23/LeetCode之爬楼梯/index.html","68e7affd87c4fb7e033e5194e9aabe91"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","008b0c6c22e58193218e24d7a0a8d3fc"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","b00b44a412ef19c5ee25b23727e0490c"],["/2021/03/26/LeetCode之最大子序和/index.html","478c4769f5dca4b9ba5e702e9d091dea"],["/2021/03/27/LeetCode之子集/index.html","e469501054d8be02f773dfa5e7be166a"],["/2021/03/28/LeetCode之合并二叉树/index.html","9aa54872d0d1a380a93881b3b7b21bbc"],["/2021/03/29/LeetCode之翻转二叉树/index.html","5d98b5904d377abb13be2c837e11edef"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","183abd5ce01163c69a1172a525cd68b3"],["/2021/03/31/LeetCode之翻转链表/index.html","8429befad9007c6113f04ba64c83442f"],["/2021/04/01/LeetCode之相交链表/index.html","f252066bee56aeb8ac519141be13df5b"],["/2021/04/02/LeetCode之最小栈/index.html","579486ada26f8b3d506df6ab56245a59"],["/2021/04/03/LeetCode之对称二叉树/index.html","f3b4ef6c49d57097ff859115caac1b80"],["/2021/04/04/LeetCode之环形链表/index.html","9f3808e6afd23065d735b10470a6ebbc"],["/2021/04/05/LeetCode之二叉树的直径/index.html","1d2b2a927fd51aea4400f08c215a1996"],["/2021/04/06/LeetCode之回文链表/index.html","8751c912d3d29cde08556dd5dd3a5f6f"],["/2021/04/07/LeetCode之比特位计数/index.html","c98affbb5106cfca6778d001ff74de1f"],["/2021/04/08/LeetCode之全排列/index.html","506cb492f2f80313f6598769b1fd2fa4"],["/2021/04/09/LeetCode之括号的生成/index.html","e33d8e330cc5ec4e65899b7574d8cab7"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","20740f1ab83a3cf5ac92684f716912fe"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","d7a1607ba1537155e118330dbbe9e01f"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","17d6489219024f42fcf8d9d6ab357984"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","80be6bc705a548e0a0ddba4e9280b385"],["/2021/04/14/Mybatis/index.html","73fb9a10cb19e43ec5625001b2384b36"],["/2021/04/15/Spring-1/index.html","bca64fb55cbbbc3057b3ae56a7ad50d7"],["/2021/04/25/Spring-2/index.html","c3a7cf322332b2f6dbc09dfae844adf7"],["/2021/04/27/SpringMVC-1/index.html","6d58fd1443287108ef25f71e2cfd8db3"],["/2021/04/29/SpringMVC-2/index.html","d1588983ba3c5aa24244ce3691fa8ab8"],["/2021/05/03/冒泡排序/index.html","0beedc64e01e3ebc5957176d749b87f9"],["/2021/05/08/选择排序/index.html","8bbff5b6d5722aa2bc0f855d47e3c95d"],["/2021/05/12/插入排序/index.html","e3751edbc1a05765673e94b424b2e09c"],["/2021/05/15/快速排序/index.html","20789189dad128d7d829a685cf729097"],["/2021/05/19/基数排序/index.html","5790f5e8097703cafd1e140702816b93"],["/2021/05/20/哈希排序/index.html","9e31925414618fe5601d09953bf5ff38"],["/2021/05/21/归并排序/index.html","024389def2a41f0e6724b5aad4c9134b"],["/2021/05/22/二分查找/index.html","c0c335378f2f07c32ae07f5e687754b5"],["/2021/05/26/差值查找/index.html","83d620c459fe48e205a717cf2d43e134"],["/2022/01/12/高精度大整数计算/index.html","007f28c4e0077a2f3849807ed6aab0aa"],["/2022/01/22/前缀和/index.html","248a1eae627096db0adb73f2c2b2242e"],["/2022/01/23/差分/index.html","0ce7eb53fda0243f0aae9e9f388d3c3d"],["/2022/04/04/MyBatisPlus/index.html","567af815f5895d5318048e9ccc2c4410"],["/2022/08/17/jQuery/index.html","d3c21a696c906982f2856f4cf7d6afc5"],["/2022/08/19/JavaScript/index.html","0fb6b777563b61cd64c56581b3e3d83c"],["/2022/08/22/Ajax/index.html","f13cc057a4cdcfe4d6b8a8f010ad0d1a"],["/2022/08/23/Promise/index.html","2e0819d24da4556c46c093a99e7c3c61"],["/2022/08/24/Axios/index.html","2b343f8d21076bb7c4a521363d4157e6"],["/2022/08/25/H5本地存储/index.html","7aba7c8e6ef6eef382ccc0ee3abb0270"],["/2022/08/26/mock/index.html","a3c2cb87a30cab2f82e81ab8128291c0"],["/404.html","cc2d698d2db05cf1dca0c018943b3418"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","82c197dadb72c56a85fc67094fe228d8"],["/archives/2021/02/index.html","4c6ec393c7f179ce1e05a4d15c603bd1"],["/archives/2021/03/index.html","58cabad91034e6811b5e3d639ae13093"],["/archives/2021/03/page/2/index.html","eae567f430522d2ffb9ec128bba11a19"],["/archives/2021/03/page/3/index.html","8ef19463cfccb55fbf2a50dee122831c"],["/archives/2021/04/index.html","00c4dab2b0b68560944898e6ac487927"],["/archives/2021/04/page/2/index.html","cd1517e4919a28d247f45d00416ee329"],["/archives/2021/05/index.html","b4f6f5ab86c0ae035a0e88f8f28fed38"],["/archives/2021/index.html","ae8a27d0f25bf140b17d05cc21ae5714"],["/archives/2021/page/2/index.html","ef0e21091f3eaecbb4d069dd2ef94055"],["/archives/2021/page/3/index.html","15cb71662e4a703f9581d8617b6e9157"],["/archives/2021/page/4/index.html","e3859bf6cea3a86ab637fc2ebcda8e80"],["/archives/2021/page/5/index.html","a8af4adf9b5ab861128d30d0a9c35d99"],["/archives/2021/page/6/index.html","070533afc6ec50bdf3acd81df8ff80e6"],["/archives/2021/page/7/index.html","6e070f0980fbcc1d7b524812c438e9ef"],["/archives/2022/01/index.html","b78b6aa013bbaf285a10941d7c6885d9"],["/archives/2022/04/index.html","f93d4bf065e68be7a76007207f38e96c"],["/archives/2022/08/index.html","c13fb4dda5cdfd877af5b9d46f1d6261"],["/archives/2022/index.html","dd5e462942d0f912a559b9a279a75f87"],["/archives/2022/page/2/index.html","476c1981c8b0434f744f0a54a73792b8"],["/archives/index.html","702d7e4f015ad6ca47fd08cf76bf4c27"],["/archives/page/2/index.html","122f44544cfcfe3debc4dbe4700add12"],["/archives/page/3/index.html","7528a9e7ce6bf292e040408185272392"],["/archives/page/4/index.html","13daba8102e6aaf1e5427421f7bd9a1e"],["/archives/page/5/index.html","3c1338f07e3ff29a2dfcd8165582cbe2"],["/archives/page/6/index.html","75cdb31c32990a2aa83a39a556d9cd93"],["/archives/page/7/index.html","16af24353d1d4c33f233eb6f60b3541b"],["/archives/page/8/index.html","c148a88de150b2f933807b0f69fef9fa"],["/categories/LeetCode/index.html","43bf20a86831d0cc2f38288e2e446e8e"],["/categories/LeetCode/page/2/index.html","6d4f8d9c49b6dafb3d9c87bbdc6b5834"],["/categories/LeetCode/page/3/index.html","1b5eb07600c7639a17468719675543d3"],["/categories/SSM/index.html","cfaad31b9cdf31fd6d468c79d44e8bc1"],["/categories/index.html","98806606c7a395a7fba3d50f94e46056"],["/categories/前端/index.html","b01e58e523429fc30822e96ccc78a2a7"],["/categories/博客/index.html","d77e80af823ae9bb834955663167a6cc"],["/categories/学习路线/index.html","532fe17fd17320f2dba2a4b1b85168a1"],["/categories/工具/index.html","920130f347f8f91af878a3d3405562fd"],["/categories/数据库/index.html","c8c30f2f9e162a89388b07cfff6eba38"],["/categories/笔记/index.html","e731589654e5851bb328575ad5a18bcf"],["/categories/算法/index.html","7498ca7f4e5ca58582ec8f00d59ab9d5"],["/categories/算法/page/2/index.html","fecbc2b90c8f89595fa4f1a8a6741991"],["/categories/设计模式/index.html","975a0eeb8e858b2e62a8ab384874d44f"],["/categories/设计模式/page/2/index.html","d0f4cdf9b24abe4a790309448991bb5b"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","aaebc1eaabc1c57cd83f1b54a53735bd"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","f7148a96d8bb32ee8ac65ca41d6b4737"],["/messageboard/index.html","77f659c94c1c9def4a46733a9a2b0a3c"],["/page/2/index.html","cd9499b4f4c8ce4557c64915488e1992"],["/page/3/index.html","950cdb76b147bf94ca8597ccca06b470"],["/page/4/index.html","88ed40ff95079a518e19d3c9cd8783bf"],["/page/5/index.html","b5e1b0bbf7675cfdaa2e822af83c3a9f"],["/page/6/index.html","91f1f5b778245959ae2d49c64df51ee4"],["/page/7/index.html","d5ece1ee2b754d4d85056307b10215f4"],["/page/8/index.html","28b6f28fbe6b4dd51bffd29b05bf0efc"],["/sw-register.js","ef9764329dbe6d064e2085e508e72ced"],["/tags/Ajax/index.html","ffc3a304943464603b0d8209760c54f6"],["/tags/Axios/index.html","2b09134852131fd622d1617f98b018ba"],["/tags/H5/index.html","cd416bb4d4e248fd54181f4bbc0d09f4"],["/tags/JavaScript/index.html","4f4a9e9c17500f9e25360607ba94cb94"],["/tags/LeetCode/index.html","526b3a6de3aeda1e405321289e9641b8"],["/tags/LeetCode/page/2/index.html","b461d8eaf7a6c2e069a3ef21cc01b36a"],["/tags/LeetCode/page/3/index.html","2237111faf90f6f5a0af415d131c8874"],["/tags/Mock/index.html","069bf50dc0b4bb4f0e157207ffa4ad90"],["/tags/Mybatis/index.html","16e44cd6ea93b5bfa6982ac14b4013ab"],["/tags/MybatisPlus/index.html","d3ba5110b23ac4889884946c922ec97f"],["/tags/Promise/index.html","094b2297a77de4447d6628affb17c3dc"],["/tags/SSM/index.html","b6f115fe91320b6ab9e06af656ad1c44"],["/tags/Spring/index.html","ff955d4ef998e1a5f6ba8c58d34a9be2"],["/tags/SpringMVC/index.html","e74f93b07ddc90620cc3621acc3c8779"],["/tags/butterfly/index.html","e7bd618b0545f8278a3afe83f56624b6"],["/tags/git/index.html","e9ab20c2af05e4c2068c3cb0593271b8"],["/tags/hexo/index.html","5b158093884990628bbec104a1d5ed5c"],["/tags/index.html","fd6a364bd3081a8201735e1e935b3171"],["/tags/jQuery/index.html","ac99aa35697f9c228038ffbe1d3acd4c"],["/tags/java/index.html","8e614fdcfb4daa87b1a3a441984eb7d6"],["/tags/markdown/index.html","742b811f0175d6656423843a6cf54c1c"],["/tags/mysql-数据类型/index.html","0b5f1af93b32768edbd2ac87fd9807db"],["/tags/mysql/index.html","fe991164dd97c9aa1eea600d24d5e533"],["/tags/typora/index.html","8ab97592eced0cc16cf4a355b16a36b0"],["/tags/享元模式/index.html","69494c442f2f785715ef5ab760103364"],["/tags/代理模式/index.html","8163c618c7b43eac68a5891ca9661500"],["/tags/分布式/index.html","361ab9b5ee54f04df94368f5ba2cc5f9"],["/tags/前端/index.html","fb3e8ade9bdbbb847daa1d0c94915292"],["/tags/后端/index.html","dc2070ed9cd448c92096f4d16978b5ce"],["/tags/外观模式/index.html","3ec0e1b8862dd9ea5cb5f92f4b7bb66b"],["/tags/工厂方法/index.html","5bcfe77806f05150e6bfb0a47c4566a3"],["/tags/抽象工厂/index.html","fcf39e6de7e6997c968c3bf5c43c8ed2"],["/tags/排序/index.html","18d92fdfdf59a2d3c20d18b88e0cd6fa"],["/tags/数据库/index.html","189f48686d1db36ef095ac45e996c885"],["/tags/查找/index.html","f3acaf0cecee599350c39ae9616ef547"],["/tags/桥接模式/index.html","5f9c4a752f52b2f6a23c66026e40db55"],["/tags/模板方法模式/index.html","07611937286a50e63440662e6b752b6a"],["/tags/版本控制/index.html","5e7bcc65dd17957360d63d88fc5bb0b4"],["/tags/策略模式/index.html","320de041ddcf1bb98cc2d9fb6b22956b"],["/tags/简单工厂/index.html","7aeab7d85daa1fb9611ff1f17bc36e3d"],["/tags/算法/index.html","ebf98e45f0735d4b112e3b89bd15fe4d"],["/tags/算法/page/2/index.html","ab0f140aae460169ac0d74930ad137b4"],["/tags/观察者模式/index.html","fcaac862a90a8f06c396fdf98cb2a4e6"],["/tags/设计模式/index.html","6f3295af19f4164a6b05c47cfc36219c"],["/tags/设计模式/page/2/index.html","628478533c5862b73083b65ff854a133"],["/tags/责任链模式/index.html","560aea03ba1e23af11c2f622c3172540"],["/tags/适配器模式/index.html","1bf8d6594c4d8d76c6a2a90584308697"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
