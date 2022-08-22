/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","4e75b41d936c9dd348d7263d2bf7a8fc"],["/2021/02/22/博客的搭建/index.html","ec7dc6481f9d366409dfdab2ed79add1"],["/2021/02/23/如何使用markdown/index.html","54e6eee14f352646115fe6ab5bce5b82"],["/2021/02/24/mysql命令大全/index.html","68a013b0f120d42199b46c0420768121"],["/2021/02/24/mysql数据类型/index.html","e727cbb515aad98d5f7d9d4930255ae3"],["/2021/02/25/Git的介绍与简单使用/index.html","ee6e31807220791c40b15db53c09ff5d"],["/2021/02/27/简单工厂模式/index.html","484851572fe3205f3940d57937179465"],["/2021/03/01/工厂方法模式/index.html","f2589b8766e33f19faf427de1f95ebe0"],["/2021/03/02/抽象工厂模式/index.html","8b435579ab12d0331d306519217f7a0d"],["/2021/03/03/单例模式/index.html","f09b1143197c203adb35c019a581463a"],["/2021/03/04/观察者模式/index.html","eb2708317445e23bb94f71172ac9e64a"],["/2021/03/05/适配器模式/index.html","ad85c1ccfd8a02b9566c9ddfaba984d9"],["/2021/03/06/模板方法模式/index.html","e3061143db863b8da100722b8db1b59f"],["/2021/03/07/责任链模式/index.html","7bb165057b518c3fb07cc9aced2192e5"],["/2021/03/09/代理模式/index.html","28f89dfb7ecf99b4b5e8fdfacf3c7ebd"],["/2021/03/11/享元模式/index.html","29dd4afdaaab8ce67160a96c2fd665fe"],["/2021/03/12/外观模式/index.html","6777cfa90a76d874676197dcc5be49c5"],["/2021/03/13/策略模式/index.html","b9210702a525ed89a346dfd9c7ab589a"],["/2021/03/14/桥接/index.html","32bca20065bc33612790720eb7c95562"],["/2021/03/15/LeetCode-多数元素/index.html","cc50cb2ca8f0241be5069a2e54db47e4"],["/2021/03/16/LeetCode之汉明距离/index.html","8baf305e8d7f0be3524c874295b04099"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","bf250d7b58f08bfa2f543e4f46061260"],["/2021/03/18/LeetCode之两数之和/index.html","76c1f3a9f0328a04272125bd3bcf4ba1"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","2a6dcfe529d1a5ae90f0f6dafeb46600"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","4c8deef3774e6267583c8b7bf606e5fc"],["/2021/03/21/LeetCode之有效的括号/index.html","3e0cfb7cd8b046330c566cb3c9078e01"],["/2021/03/22/LeetCode之移动零/index.html","ce9ca96767c2132b012db4cf646b81a4"],["/2021/03/23/LeetCode之爬楼梯/index.html","5c648ab010732b88e8bea37c13fa922b"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","7fbe506e251fffac3088e326d9c9f19f"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","acd477b9660b72de098398c01c64364c"],["/2021/03/26/LeetCode之最大子序和/index.html","8f9b758e985aa8caa3827a0bfdda346e"],["/2021/03/27/LeetCode之子集/index.html","f5bbf4153405bf304618c8d14eea1226"],["/2021/03/28/LeetCode之合并二叉树/index.html","02857ccbd38d3abea4cc4d607b9eb0aa"],["/2021/03/29/LeetCode之翻转二叉树/index.html","079c9dc186e6de18f3642c14fdd714d1"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","5789ddc982a207ea88ba2a9276321dea"],["/2021/03/31/LeetCode之翻转链表/index.html","a711d1dc8e4037ea6884ed2be0fd143f"],["/2021/04/01/LeetCode之相交链表/index.html","01f1903e3502b1026686b133e35b2aa6"],["/2021/04/02/LeetCode之最小栈/index.html","6cad11a4bb3e4c797c94c2aae4746367"],["/2021/04/03/LeetCode之对称二叉树/index.html","7ea0e662459671a12048ffe1a814e75f"],["/2021/04/04/LeetCode之环形链表/index.html","436e5104bf7d68bedced87bd45c8368e"],["/2021/04/05/LeetCode之二叉树的直径/index.html","06ad8d42a40679501bd2309a0487aaf6"],["/2021/04/06/LeetCode之回文链表/index.html","f754af39f908cd1ac6a9766c6f0acfbd"],["/2021/04/07/LeetCode之比特位计数/index.html","1d56c284519e5a65e46fc71f4cf8de2b"],["/2021/04/08/LeetCode之全排列/index.html","16c2b0c00a338f9f7300b3a477146976"],["/2021/04/09/LeetCode之括号的生成/index.html","142e16fc4d9ff91646f3b7bca078f4e5"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","3d3b6347f5af6584033decedc69ee1fd"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","de83c86a64c508f11b93b4de8a9946ef"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","06925222d2b7e3748698cf0d2f630617"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","15a8d3b256e0aadd0254f1144ae5d704"],["/2021/04/14/Mybatis/index.html","2be24178e32272d72cfb939a31b6fd68"],["/2021/04/15/Spring-1/index.html","8f3bdb429294a0dcfca91304b18719ed"],["/2021/04/25/Spring-2/index.html","0c7ba71935ac84c8cfea14e1ac4cd0a5"],["/2021/04/27/SpringMVC-1/index.html","4ec24dbf28c028e36a70c5420338663c"],["/2021/04/29/SpringMVC-2/index.html","459a77c413130af9304fa8a56818faed"],["/2021/05/03/冒泡排序/index.html","d9ee052e411601e357c8ee8fb7e316c1"],["/2021/05/08/选择排序/index.html","684609d8088e1c7cb4a53620ffb6b121"],["/2021/05/12/插入排序/index.html","f1e20f089ed3b74f02337b1c7fc4c172"],["/2021/05/15/快速排序/index.html","f9cf548394575d9099d3d0a83df19053"],["/2021/05/19/基数排序/index.html","5507aee63e81ba029b3326bae436dbeb"],["/2021/05/20/哈希排序/index.html","518d599dd6e7f302bd720a5206ef0d18"],["/2021/05/21/归并排序/index.html","cd25508bee8ffaff1f242fc0900c13be"],["/2021/05/22/二分查找/index.html","d604726880a64bdb56fd7dbd691a1eca"],["/2021/05/26/差值查找/index.html","0a5c5e3cfc33f03e4bd75c8ca3a2e4b0"],["/2022/01/12/高精度大整数计算/index.html","d2e61f42da39683fd7cd66166aaa9fd9"],["/2022/01/22/前缀和/index.html","22f8428246f14a66789e2ffd7145c465"],["/2022/01/23/差分/index.html","e68046f35b7de05fce5782a54e429800"],["/2022/04/04/MyBatisPlus/index.html","039ee6fc4c36e903935f369faa0f1baa"],["/2022/08/17/jQuery/index.html","1aace835b26c578ab558b01ed4a0e05f"],["/2022/08/19/JavaScript/index.html","166e27b13d8b7755d56176f134edcf23"],["/2022/08/22/Ajax/index.html","382581cdd4f04c1f60b08275740a2fbc"],["/404.html","a6468e0d0ecc88d003be848305cd122c"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","4bdef2210f835bab0acc0d64fa8f4e99"],["/archives/2021/02/index.html","edcfcb18676a3dc7597f56a86ba66fae"],["/archives/2021/03/index.html","86a595e282b907b8dd9ff7880b91fd11"],["/archives/2021/03/page/2/index.html","3946e04ca7daa6f797277fa0e02b66f0"],["/archives/2021/03/page/3/index.html","e3448488540a814aa4e75483538f9b77"],["/archives/2021/04/index.html","74285756e4b4792d909598d909d1a8fe"],["/archives/2021/04/page/2/index.html","88b59e426140e49f0ef2c2d9fcfa6fc0"],["/archives/2021/05/index.html","d5ab4585b27f72f51bdccc63ca991ec6"],["/archives/2021/index.html","70b5dfa30368acadd7bf2fb0c0c842ef"],["/archives/2021/page/2/index.html","1489824f9d2f1199c891b238ed54d329"],["/archives/2021/page/3/index.html","b9d3c288e3332b20037f38e4492e0647"],["/archives/2021/page/4/index.html","90dba1d107ba16c88c9bd729b2777f7a"],["/archives/2021/page/5/index.html","221f932d341d7440bf43bf9a185ca7a5"],["/archives/2021/page/6/index.html","ac12d440cda7dcd9838ce3144b9fc9b2"],["/archives/2021/page/7/index.html","13f1f6634663ea4dbe5daa7af2298c85"],["/archives/2022/01/index.html","e6cd7d2738e21c5589c8ca3f3ba59296"],["/archives/2022/04/index.html","4a9a9786982a9c34e8ea20748fb26e48"],["/archives/2022/08/index.html","c03c2fa5fe62b733102474b9971966d5"],["/archives/2022/index.html","1e58c64a82fb346b0fbf2cd41a5ab6d0"],["/archives/index.html","495758a879f8ee503ee7596b27fc5998"],["/archives/page/2/index.html","bd0708cb305b9614ad1ab35fb5e1d766"],["/archives/page/3/index.html","59852740190bfc89d3a5c240797da44c"],["/archives/page/4/index.html","9ec838e03fe42e0dd067e1cafd988b28"],["/archives/page/5/index.html","809d196a1a483fc08946e9e5fbf57505"],["/archives/page/6/index.html","4768b9aebb1d5f18412b9a5d9e8a238e"],["/archives/page/7/index.html","2e05eb0fa6de768f6aa8e7a4946197a7"],["/categories/LeetCode/index.html","c1bbc1ae57aa6ba9fb60bd258e281edb"],["/categories/LeetCode/page/2/index.html","39629153412ed02eadaea641f4be6e9e"],["/categories/LeetCode/page/3/index.html","e9e78af067e8e9e2a8dc0cd1cefc72e2"],["/categories/SSM/index.html","351d6922b70474c20583b4949ef37369"],["/categories/index.html","51069fe2241926207f1c7b4ef40e6254"],["/categories/前端/index.html","c7cda3b1463231e6acd820e7be8bc310"],["/categories/博客/index.html","90d9d5a1c08e14072d4472385dc684ca"],["/categories/学习路线/index.html","106112b783b6cfc3fb90a1f99b7bb2a9"],["/categories/工具/index.html","0839c6778c928efb80a152e17984585b"],["/categories/数据库/index.html","bb833b43a49b04551441a8a247f9d7d4"],["/categories/笔记/index.html","62751d8ae658a95e2ae30fc1bc678f3c"],["/categories/算法/index.html","d6be26433c47c75b76eb2139aca3ddb5"],["/categories/算法/page/2/index.html","0fcc5eb3d520ec61f7d5fab5420ce14e"],["/categories/设计模式/index.html","3ecabfb028d5677876259b87416b89e9"],["/categories/设计模式/page/2/index.html","849159cdc47b43ec33d35322a6bdb674"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","f422d1c99b3e217a3029904189e57c1b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","720fd7550d27e7f3065a00bdb3666080"],["/messageboard/index.html","aecd108227015e4201ce3c2c900e1b41"],["/page/2/index.html","6922a83bfb41d5f1e0a6864508e99896"],["/page/3/index.html","a8d3a5efda7164cd68e9fb7648b652e4"],["/page/4/index.html","991923c486220c36262900144033803b"],["/page/5/index.html","4ae01a9f8c03f77261357bfb15553c4f"],["/page/6/index.html","71c5d38e3ed5f057da3ca98d1bd41cdf"],["/page/7/index.html","9e07b3009e6ea6dee4ca1d9831a9b09c"],["/sw-register.js","b5b0850d8936d1a6872dfe76bb8b50ac"],["/tags/Ajax/index.html","6d5b498c91a8058ad09f43273f0a0667"],["/tags/JavaScript/index.html","b2fe3fa6b4debc9be48f6bd145fde899"],["/tags/LeetCode/index.html","a00ea7bb46884efdef0058df84385275"],["/tags/LeetCode/page/2/index.html","a390e65c2e1cdacff92b9dc01b0e1140"],["/tags/LeetCode/page/3/index.html","ea74f088211438eb716bfbf21c90b51f"],["/tags/Mybatis/index.html","126d0bdc1e3a3ff3c6bda8df8b1d0316"],["/tags/MybatisPlus/index.html","2495b9243b20af40ba501c28f96913f7"],["/tags/SSM/index.html","28a443401de92e24f3011f46b5c8b200"],["/tags/Spring/index.html","01ba7cb736ffa51261aacd4e212ccf17"],["/tags/SpringMVC/index.html","dbcaa9289304d585db0465643c584d74"],["/tags/butterfly/index.html","a8123cf8ffd1238db4884642f30369e8"],["/tags/git/index.html","8d328805dd788277e7e7604094d6b302"],["/tags/hexo/index.html","2c47e087c1b60c258f18199c53988ec0"],["/tags/index.html","43a1ac239b2503fc621cece588fbf6a5"],["/tags/jQuery/index.html","93de6c60f84d8637f8097fef6e674468"],["/tags/java/index.html","ad68f00571a5a768777f0cbf8035a65d"],["/tags/markdown/index.html","e7ed5393557e10073e1b937f0b2a54cc"],["/tags/mysql-数据类型/index.html","a5f70c63b3f776a4d55b97c745cdeb71"],["/tags/mysql/index.html","1f9872bf9e409b20e4ddd095dcac86d9"],["/tags/typora/index.html","a32cf56630347d542a58a9bc1c7be7f0"],["/tags/享元模式/index.html","b3615be412fc901d1a5acd732ffb02a3"],["/tags/代理模式/index.html","5912445c9fe98168d4dcc2b4acd0120b"],["/tags/分布式/index.html","baa0b13d88a15b06e967c1057a8a7f10"],["/tags/前端/index.html","e52191176182d36e0b12675c6cf89400"],["/tags/后端/index.html","1a8679557fc1d1cdf2f6217d7ea6b5da"],["/tags/外观模式/index.html","c5498f9815af748482a8494c7dfdc4be"],["/tags/工厂方法/index.html","46f863e490b4f5bfe742caf7269e1a81"],["/tags/抽象工厂/index.html","2e74d824396ca5b9774086aa334a94ad"],["/tags/排序/index.html","5f730053f96f3675b1fb9b06dbd5411e"],["/tags/数据库/index.html","5038374c56b90ee5960c3ff5e1417239"],["/tags/查找/index.html","ed3f5b9b58ac089b211a6b096c54bccd"],["/tags/桥接模式/index.html","981b710c3d40980f31e763457d8df326"],["/tags/模板方法模式/index.html","08282824f64f4ddfc4df6d776b228e16"],["/tags/版本控制/index.html","0d4fde3c4938b9be1d5f91bda899fdbb"],["/tags/策略模式/index.html","d5dd3ec5b813a174d6ca0f128de3c52b"],["/tags/简单工厂/index.html","7e747f4a93382e71f9cbe074268ec14c"],["/tags/算法/index.html","53e5fbd530a7d6241e0e9b5047107288"],["/tags/算法/page/2/index.html","53b76565e9bad6ed41b7b92f911060d0"],["/tags/观察者模式/index.html","3e3522a974913c8a2704b04727b3f75e"],["/tags/设计模式/index.html","db86abb1dbc03f33ee25e9cc47f3c8fe"],["/tags/设计模式/page/2/index.html","4d406a1eaae98e6f59670c6cd2498ce7"],["/tags/责任链模式/index.html","a93d3be5fff2da4e3048a88a3f4f432a"],["/tags/适配器模式/index.html","13386f47ddb1e79372f1e770f5db2c72"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
