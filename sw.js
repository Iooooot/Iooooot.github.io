/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","c03d248535ca5220a2e628d0670b8d82"],["/2021/02/22/博客的搭建/index.html","22598cc704a6a91c25ba4020931f7564"],["/2021/02/23/如何使用markdown/index.html","f66d316af9f0b552ddbee311ac557fe5"],["/2021/02/24/mysql命令大全/index.html","afc2430280469a0d92325e7e8fe70410"],["/2021/02/24/mysql数据类型/index.html","279f1cafff6b39f2926c1ab91cf5e9cd"],["/2021/02/25/Git的介绍与简单使用/index.html","3b7c7cf5badc12d9e5f74c60325ae9a2"],["/2021/02/27/简单工厂模式/index.html","737416d8d6e8dcbca75e7911599c46b2"],["/2021/03/01/工厂方法模式/index.html","550bd1b8b4335bf6ac6c197319d2511b"],["/2021/03/02/抽象工厂模式/index.html","61cb401f934ba28d291ae3eea384f8d9"],["/2021/03/03/单例模式/index.html","36164527dd8e2d2df48cb7e522b146c8"],["/2021/03/04/观察者模式/index.html","2f156d41d815d5b8a8e4241a46737756"],["/2021/03/05/适配器模式/index.html","ba50c246a6286170c1bc033da5e8f110"],["/2021/03/06/模板方法模式/index.html","bfbc9c0b10c7694059e91597eec167c4"],["/2021/03/07/责任链模式/index.html","7d541cff9468b36ab0bad8bbd0c08f48"],["/2021/03/09/代理模式/index.html","29d6e3ca141145a00182a4d45d0bb688"],["/2021/03/11/享元模式/index.html","ca1063566d31e32c37bd5943e44edaee"],["/2021/03/12/外观模式/index.html","a1612461d585f591bb36611c2dae77dc"],["/2021/03/13/策略模式/index.html","45dfc565eb94e14000efe1b9737206d4"],["/2021/03/14/桥接/index.html","dcee72340104a64e78471a81649cf163"],["/2021/03/15/LeetCode-多数元素/index.html","d781bef6e45c6ba32a4eb48e0c220250"],["/2021/03/16/LeetCode之汉明距离/index.html","674ce902c9a92bffe39909969e116b56"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","058809d748940f9aef22c76f2c012fe3"],["/2021/03/18/LeetCode之两数之和/index.html","ace7f0967ea76e4070069eb1e4e82b11"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","eb5c5070e54971165474e3691d14134e"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","8d4d0b47a397117114419b2657149756"],["/2021/03/21/LeetCode之有效的括号/index.html","32b27d887adeb8ee6357cb8c003189b2"],["/2021/03/22/LeetCode之移动零/index.html","9008128fa93030ad7ac1c5d29cd45a75"],["/2021/03/23/LeetCode之爬楼梯/index.html","f3841e0e3f3bf5b4af8df816f275203d"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","081314c0d8c81a9fe3590dc66a5b0b27"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","306653bdda5358c9f52dd1351f500607"],["/2021/03/26/LeetCode之最大子序和/index.html","38b0db914e02c42f343ddaa1d32835fe"],["/2021/03/27/LeetCode之子集/index.html","167a03fd723b6b201f328e4e52a6a9f9"],["/2021/03/28/LeetCode之合并二叉树/index.html","f064bd96282aec2d7f9cc3295d0a0639"],["/2021/03/29/LeetCode之翻转二叉树/index.html","4f68d7253e9bc853f67c890c38bbb0a7"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","59c49f9ef71618831b8f74c640a77212"],["/2021/03/31/LeetCode之翻转链表/index.html","47db9ff2a1554593920c6cebef99319b"],["/2021/04/01/LeetCode之相交链表/index.html","5d26572fcb37ea7837d8137b673892e2"],["/2021/04/02/LeetCode之最小栈/index.html","87da8e2bceb53d7f45fb2dbf5d7f2dcf"],["/2021/04/03/LeetCode之对称二叉树/index.html","4b146b003790777237972a9911ecb106"],["/2021/04/04/LeetCode之环形链表/index.html","0d436a22277209a56def3675967853c3"],["/2021/04/05/LeetCode之二叉树的直径/index.html","1bc7c30858633393ab0cfe73de987172"],["/2021/04/06/LeetCode之回文链表/index.html","8b2c591c37fca8af029b18afe1bdff23"],["/2021/04/07/LeetCode之比特位计数/index.html","a177aeda2bf22918805c9dfa1dfff683"],["/2021/04/08/LeetCode之全排列/index.html","b608a67f9c27f46705cabf28a8f4639d"],["/2021/04/09/LeetCode之括号的生成/index.html","6764ec7a69cfa75304d9eaebb108a2c1"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","d9ab855f1b5e31a2efdbafae263f00a3"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","e924f11cfd0759736406ce4ec5e3bf6f"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","be0a45ed0e796a740b60da22b5bb4da1"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","6f27abbc474684735bceb382d5c395cc"],["/2021/04/14/Mybatis/index.html","e981f234855ca443882a2c21dd793816"],["/2021/04/15/Spring-1/index.html","6a515777b18ef409bd729ecd57755fda"],["/2021/04/25/Spring-2/index.html","1201af7a175c4d72f7c3cd236296b5ce"],["/2021/04/27/SpringMVC-1/index.html","caddd9a7679c16465bf0a0baf7d81f76"],["/2021/04/29/SpringMVC-2/index.html","63d5bf3265c5ebbd1a55b84aa69db231"],["/2021/05/03/冒泡排序/index.html","75a98ea5e2447650183a5b8665c6312f"],["/2021/05/08/选择排序/index.html","d5006432238ab0ece12d6dc887f6e402"],["/2021/05/12/插入排序/index.html","367f88219b054f80abaf905e476e4c17"],["/2021/05/15/快速排序/index.html","38bd52de58162c9431fcd94f05ee5c28"],["/2021/05/19/基数排序/index.html","4bce45e28f8c4e32899e452c48ce62b3"],["/2021/05/20/哈希排序/index.html","35d8f47efa636d2f43e510ef89d219c4"],["/2021/05/21/归并排序/index.html","5c7c9becb5509a6c871beb422d9178b0"],["/2021/05/22/二分查找/index.html","ad4d4e8ebff5ea9c881b7171c62ddb87"],["/2021/05/26/差值查找/index.html","b97bca5a4c6bf66f30e2cc0ffa98b08e"],["/2022/01/12/高精度大整数计算/index.html","cc97fdb2cffd09539c868f4fa128f83b"],["/2022/01/22/前缀和/index.html","3add96cd54866b032344c1bcd2f41606"],["/2022/01/23/差分/index.html","6232157cbe9b8f088127690980a2a368"],["/2022/04/04/MyBatisPlus/index.html","19fcf00b91379c25864530316e7a58c8"],["/2022/08/17/jQuery/index.html","bf9a13c6818049a1ebe1fc9568bcfcc0"],["/2022/08/19/JavaScript/index.html","6fe3a46208a13783c18ca328ef4ab380"],["/2022/08/22/Ajax/index.html","cbe01f91ea206cf4c745c52c2e886905"],["/2022/08/23/Promise/index.html","baf1ae76bd98500f6b392c4190edbd65"],["/2022/08/24/Axios/index.html","8f565cb5f5d5dc58eeccf7df2f3fa31b"],["/2022/08/25/H5本地存储/index.html","9cdd47277a219cc82680a56e187b1660"],["/2022/08/26/mock/index.html","28acb71ea614417f14a7a060adbf4362"],["/2022/08/31/VueJs/index.html","1821538e9640316b9bc17fc5629e2ac5"],["/2022/09/01/vue组件化/index.html","6f1f2c2f5a1e4b3adf84cb55fc6306d0"],["/2022/09/04/VueCLI/index.html","e20faa33fb01683734e741e737fee872"],["/404.html","92545415215504387fa4902c54d49e1a"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","1a501c65ec560b9585d3e45259bfbd3c"],["/archives/2021/02/index.html","ac7918e92fa24c9451e55db8040456a8"],["/archives/2021/03/index.html","4b4c0e7cff6221f7a13630d0b536594a"],["/archives/2021/03/page/2/index.html","7182f4ddc7ee6a3d0489d01305f4819b"],["/archives/2021/03/page/3/index.html","00a4852201c65ed9f9b61e6b3bbec172"],["/archives/2021/04/index.html","b83634d949c21c8b73d511bce226516f"],["/archives/2021/04/page/2/index.html","be3fc95292ab5febd0bf8bfdef1dd23f"],["/archives/2021/05/index.html","0654340fcac36e8c63a1dab86af15e11"],["/archives/2021/index.html","4112ca108f97262a74df1dd7afd6a6df"],["/archives/2021/page/2/index.html","277e225ee00a76f7276301dc09fe34d0"],["/archives/2021/page/3/index.html","87c1fb82a3ca14790934b5d927013d05"],["/archives/2021/page/4/index.html","5ca0912ae11ef3b4f1e8c6815dad59c4"],["/archives/2021/page/5/index.html","d90df4a4622552d4116ccdd09a741999"],["/archives/2021/page/6/index.html","d29bc852546806a7d342ec8f001017c5"],["/archives/2021/page/7/index.html","1720b690328d50ef2e619984f46e62d9"],["/archives/2022/01/index.html","7b523d4ebed045090048ad3f1c7229b4"],["/archives/2022/04/index.html","86524b6c072eb92d2a921321c4c1be0b"],["/archives/2022/08/index.html","b456bb0038d77bedea7b5a341cb618b8"],["/archives/2022/09/index.html","e14a0fd144a2b18e967692441c9dd326"],["/archives/2022/index.html","7a1b321475bbed953faf044a6c72dbc6"],["/archives/2022/page/2/index.html","05349395694598a4b04101e67d1a1ce0"],["/archives/index.html","049710e68fb8c9351f41f873d0665ae4"],["/archives/page/2/index.html","46d87501b0ca225dfedb51b0635c42a7"],["/archives/page/3/index.html","1bce1e27b2554654137a7be8a6b1aaba"],["/archives/page/4/index.html","d74ea703c6a6eb812234d51aad418ed3"],["/archives/page/5/index.html","a2cfc6b92eb057ce534cb13da5335a2a"],["/archives/page/6/index.html","d549310bf7bbea7a6560233df15ba6c9"],["/archives/page/7/index.html","c356bc8c0c8feafd075b77281ec4bf63"],["/archives/page/8/index.html","7b576173a0ce3384e94fb6bb90f967d2"],["/categories/LeetCode/index.html","4cccb6a706fca8a8c7370634b03b302b"],["/categories/LeetCode/page/2/index.html","7bc47690f718977d1580f83f8acbfa4b"],["/categories/LeetCode/page/3/index.html","0388872d18df114f1eafd0d24d2b8b2f"],["/categories/SSM/index.html","adc9479271da69c147063a92a1e5a5a5"],["/categories/Vue/index.html","1c3efe9b27b731ee8613c073eccc3bb9"],["/categories/index.html","cd505e49776950581528f5acc5701d8a"],["/categories/前端/index.html","c0fdcb70464a5b363aeb5f4ab4d5d427"],["/categories/博客/index.html","d3a1bcdd87883a2eb253ffac9e57385d"],["/categories/学习路线/index.html","9492683fadb8ab2123e87940609dbffd"],["/categories/工具/index.html","e01192f95507af3da6a6c34918b8c34b"],["/categories/数据库/index.html","4bb8e79fb576e436db5b862953c9866c"],["/categories/笔记/index.html","1c9922c8d2aa371f90c355e9a8aaee78"],["/categories/算法/index.html","2726bd1aee901e0bf9e382b90a2ce360"],["/categories/算法/page/2/index.html","495c6fe8fea9df41fc34c21005e1b21b"],["/categories/设计模式/index.html","23bf70f92e15712e2b739a7100a7c73d"],["/categories/设计模式/page/2/index.html","ad8c05e9b17099d941ceabf8e6882dec"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","7c5b39abdae9cf7e64e735a773e3b892"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","77975c443f7f09cf64e335748593b378"],["/messageboard/index.html","6895e053c198104c168d397d1e8a4101"],["/page/2/index.html","b020c44b83036f9ed0854a00eb32b9a0"],["/page/3/index.html","47f83c5d4859c1b99a935f69864d56c4"],["/page/4/index.html","fd2e4e4c231f055c673d8a5abbf25d9b"],["/page/5/index.html","6d19892386d0bbd30ad5e82c7c9b404b"],["/page/6/index.html","ce048921aa07b74345aab82225b16b44"],["/page/7/index.html","34eadf3023a83ff71bae6ceaadcddc4a"],["/page/8/index.html","32a4bb1099117a03b988238111a620c6"],["/sw-register.js","a882545a3c5e399d2566c77a0932b172"],["/tags/Ajax/index.html","280164a5c966f62366f49f5557908b6f"],["/tags/Axios/index.html","b39b878cd066ff0a4f9014f2725cce76"],["/tags/H5/index.html","ec3d44e577e7a47dcd66cb61621d5d81"],["/tags/JavaScript/index.html","3996a61ad6e84ccead11db8134d59fcb"],["/tags/LeetCode/index.html","1001504007edea5a326e9dc896a083ec"],["/tags/LeetCode/page/2/index.html","4ff0b708ab84b172fbf310db4667d4f8"],["/tags/LeetCode/page/3/index.html","5f471aeb03459b60dc88dcccd40b9ac5"],["/tags/Mock/index.html","5c92ecf09f2888e45981f1e3076a75d4"],["/tags/Mybatis/index.html","577522aae89cac99597b2508c5095ff2"],["/tags/MybatisPlus/index.html","44b78ba84573ac645b1c2ade42b1cdff"],["/tags/Promise/index.html","e24c9ee8955bb4b662cc3c8f90e17f2d"],["/tags/SSM/index.html","289ddc6c959c589dc4123c8810feb4ce"],["/tags/Spring/index.html","08e8911ba5d8184ae7a27c3432e4510d"],["/tags/SpringMVC/index.html","906c74a80898e2c3b3c5895d8359e4a6"],["/tags/butterfly/index.html","6cdaf464c0441bed825c669bcd0b8551"],["/tags/git/index.html","88cf126e411bedb3fe011b1187502784"],["/tags/hexo/index.html","777cdcf348a425b86f132e2bd5253615"],["/tags/index.html","b72babce9a5350571f31ce612c2c35d3"],["/tags/jQuery/index.html","f611308970e66b1b0d003a3dc34357fe"],["/tags/java/index.html","04c1520e2cfbcf4787b364125ba498c7"],["/tags/markdown/index.html","710b03317e7f8792d4beb835f0b948d3"],["/tags/mysql-数据类型/index.html","f04d65fec8a28723e9f27fc0ca19babd"],["/tags/mysql/index.html","072b01a8732e1af87e706623b6658e4b"],["/tags/typora/index.html","33cca6b261c984a5be128d3244ec55ac"],["/tags/vue/index.html","1f0df5cb1529159cb5ea9be8f3d41a2e"],["/tags/享元模式/index.html","7be8e73c49dcd729ea551ffc146fe388"],["/tags/代理模式/index.html","6004afe430573a904016568ef2aea3ea"],["/tags/分布式/index.html","b77d30caf5420462af7888252f16ee7f"],["/tags/前端/index.html","4c14bc15b641b4e6adff6a0fd93c2132"],["/tags/后端/index.html","2a75168e95c2b95b68de826a5c86c192"],["/tags/外观模式/index.html","7b98087ffb313a0675ffeb394d629ef5"],["/tags/工厂方法/index.html","132d9b03e835db54ac777fda1d966393"],["/tags/抽象工厂/index.html","1db4d351c6ef4fb06d26cff16dbfc15f"],["/tags/排序/index.html","e1c264f6da9ad782e5eef7e2290a90fa"],["/tags/数据库/index.html","8a9297aad35f6025ac79673b46a407b2"],["/tags/查找/index.html","d9f6cd1b51542cfcad8b75fb695b8b92"],["/tags/桥接模式/index.html","c466cbfa55e4f3df1e2408e0f4aca407"],["/tags/模板方法模式/index.html","cd5d7c6fed921923d6ce09fc6541b469"],["/tags/版本控制/index.html","faeb46e9826ef7435eb26507978a668a"],["/tags/策略模式/index.html","1884ea59fa5a4eab13e4c5706cd97e4f"],["/tags/简单工厂/index.html","eeeb9ff3d13aa9295ee91a2e91b81dd7"],["/tags/算法/index.html","30d3696f4096eefcc55a8c2141cac77f"],["/tags/算法/page/2/index.html","8cc5a2a43e1e7d6888ab2b0fad3e6dc2"],["/tags/组件化/index.html","4692cefc3ee23f022d78bc3716784ff4"],["/tags/观察者模式/index.html","791c2eefdd87bc1050f9e0c84468b161"],["/tags/设计模式/index.html","9e2bec167b730c8b582eeaa42c8bc994"],["/tags/设计模式/page/2/index.html","740d64589ac0f9c1aaddf855d845feb1"],["/tags/责任链模式/index.html","bde5e2d25c1ca7ea6e173784ae8bc14d"],["/tags/适配器模式/index.html","24fd2e8fc87f7777c9f7ccdcb685c7cc"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
