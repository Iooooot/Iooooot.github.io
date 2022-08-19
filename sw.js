/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","129087bbd31f84fc2bd4acb53411d181"],["/2021/02/22/博客的搭建/index.html","e691bebc6a95a0ae3c0154d14cc92901"],["/2021/02/23/如何使用markdown/index.html","3777929ed6d4f86451ff73b5fb9140b2"],["/2021/02/24/mysql命令大全/index.html","91b9ada283aa67217d9debadeb4d11a6"],["/2021/02/24/mysql数据类型/index.html","a31502682403eed08ab56bcecbdf95b8"],["/2021/02/25/Git的介绍与简单使用/index.html","ebcd09c920a5e2fdb3a2559a114c7475"],["/2021/02/27/简单工厂模式/index.html","08a41694b43578b8fd05d8e5bc614b31"],["/2021/03/01/工厂方法模式/index.html","4d1890e8f791c340bc165451fdc4c961"],["/2021/03/02/抽象工厂模式/index.html","fac98ed6da8538801c4554fc9d937998"],["/2021/03/03/单例模式/index.html","7aea783a92e9af16515b7ab1ff90d084"],["/2021/03/04/观察者模式/index.html","a1848c5cb0a7a41659b310a56f3198db"],["/2021/03/05/适配器模式/index.html","932feee0427bc584c1199d74f84d1266"],["/2021/03/06/模板方法模式/index.html","2aa69904c169cb333a6c512f11401dbf"],["/2021/03/07/责任链模式/index.html","bf71e5a15adc528dd13e10b860c73aeb"],["/2021/03/09/代理模式/index.html","ac71595e9ad9db41b2bec661e9b65d73"],["/2021/03/11/享元模式/index.html","14e6edbd1461852f728efbb71f521871"],["/2021/03/12/外观模式/index.html","e2ad69b8a8fe814534e2439ecff9c003"],["/2021/03/13/策略模式/index.html","2c163e3e29a040833226a6e71dca7935"],["/2021/03/14/桥接/index.html","4dae783bed613bbdddf9c94423d92181"],["/2021/03/15/LeetCode-多数元素/index.html","f11479645169e238191a0220d9e4e9f6"],["/2021/03/16/LeetCode之汉明距离/index.html","283e9eaa6aee5a95b08c332eaad956c2"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","336d32f6483047d6b6055a134a99260c"],["/2021/03/18/LeetCode之两数之和/index.html","0a2248617b96beff5d79eaffa1c083e6"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","02b367613a79721fa0c9350935303107"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","1dc0e027119e6dacbb550bb8755100b6"],["/2021/03/21/LeetCode之有效的括号/index.html","a19522e2c4d1a1414f6d9e115ba1320b"],["/2021/03/22/LeetCode之移动零/index.html","7cec9719ed55d6b493654ceb554be3f0"],["/2021/03/23/LeetCode之爬楼梯/index.html","ecc81df41f80be2a5ca2192da40cc47b"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","fe4ebe5f525f14a977a046cb6611bd0f"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","0d808c747d796ed58a7ef31dc0a0aec4"],["/2021/03/26/LeetCode之最大子序和/index.html","665454cab9b88a9298cd0f74bae8b2df"],["/2021/03/27/LeetCode之子集/index.html","f931951eb8757d064af0aade454c9892"],["/2021/03/28/LeetCode之合并二叉树/index.html","86584fcec9ec66ba18bb0eed34dcff13"],["/2021/03/29/LeetCode之翻转二叉树/index.html","a700366e4d3781f1616446d2f0919216"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","6df5af08caffc4f2e74c76c7e46ffe60"],["/2021/03/31/LeetCode之翻转链表/index.html","e0b81bf50884e31bf64d9090e978d952"],["/2021/04/01/LeetCode之相交链表/index.html","ff6590752b68096a58df7e0e2eae53b7"],["/2021/04/02/LeetCode之最小栈/index.html","e6d9851a8e6e10f5be6ac167c6c5eba1"],["/2021/04/03/LeetCode之对称二叉树/index.html","bfe4ac36416437ddd3ce99dfeb557f6f"],["/2021/04/04/LeetCode之环形链表/index.html","731d38e5b6e0a9f6d41d95f7e4e4b76f"],["/2021/04/05/LeetCode之二叉树的直径/index.html","b8ca278c3efb548e55854350108b3ab8"],["/2021/04/06/LeetCode之回文链表/index.html","7b30c4d41c7026bc8cd14f232cbf0035"],["/2021/04/07/LeetCode之比特位计数/index.html","0633284f3a0b777bc554e82cea536bf3"],["/2021/04/08/LeetCode之全排列/index.html","6349111feac74b4265a40da9e830c7dc"],["/2021/04/09/LeetCode之括号的生成/index.html","7840eb43243eb2ba1b102ced0a1cfa4a"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","82d4fd5f32dc5e87268b10482e515a43"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","dca7feaa12bbdf3facad9f84685b8d6b"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","f27183ad79631a49389e063d2490b7a5"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","6c6433783dce9df47280819e70d61203"],["/2021/04/14/Mybatis/index.html","da120107b58a6b11e789f2b246e8d191"],["/2021/04/15/Spring-1/index.html","3977fe8600ceff64a8abb5073ae342b5"],["/2021/04/25/Spring-2/index.html","e10e76e45944dd0d8ab56fb9b324475c"],["/2021/04/27/SpringMVC-1/index.html","1721cb3a59eba659ef98074c1d9db5c6"],["/2021/04/29/SpringMVC-2/index.html","b91d3b8f7864e809b76aa2de4352fc3f"],["/2021/05/03/冒泡排序/index.html","dc6da67f55b92a355faa4b1733346905"],["/2021/05/08/选择排序/index.html","7bfa8ef661577d64ede0c9e2440937a3"],["/2021/05/12/插入排序/index.html","10cd3edcdf58481c85620781c401c4a8"],["/2021/05/15/快速排序/index.html","fe911b58234af0587b801e9a9db25634"],["/2021/05/19/基数排序/index.html","dd654c297be23f2aa9c94cffe3e7c69c"],["/2021/05/20/哈希排序/index.html","61924297f6260b95ff753f290544bd8c"],["/2021/05/21/归并排序/index.html","eca68c83554b83e719b62c1f4254d4f2"],["/2021/05/22/二分查找/index.html","be797751cc8601fbfbd569ea2bc6e03a"],["/2021/05/26/差值查找/index.html","1ae7c76afc48d37a800f11339d507ffb"],["/2022/01/12/高精度大整数计算/index.html","1fa237e297d3644f3e40d2aed88eeae9"],["/2022/01/22/前缀和/index.html","adda12b2fbc92b533da6fe8dff1813c6"],["/2022/01/23/差分/index.html","421672f4ccd7138dda01218900ac169c"],["/2022/04/04/MyBatisPlus/index.html","fd8ed0ae219ece85e8acb8c5cd5adce1"],["/2022/08/17/jQuery/index.html","9756f2501dcb863f01cba00a3f06c891"],["/2022/08/19/JavaScript/index.html","e3f81baf7bda0be04ba4522455dc0e37"],["/404.html","e478155c5e5b3dee2ec7b15bf9f21593"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","3573579b3743f4507e6afa7f77809d97"],["/archives/2021/02/index.html","7ff09f168fa97025d52e7188293c4f2a"],["/archives/2021/03/index.html","3a6735599db7c7153bc6dfe84f9b5a5a"],["/archives/2021/03/page/2/index.html","292e6e3fbf32a783bba1798c137996dc"],["/archives/2021/03/page/3/index.html","dc89482edb240cde580c5db9374682ee"],["/archives/2021/04/index.html","4cf3041f44aee8da19e3a7aa82038ed6"],["/archives/2021/04/page/2/index.html","a4e68c6ade7d987e14110017461b45d8"],["/archives/2021/05/index.html","36f9a619eb872989031b14d881024dab"],["/archives/2021/index.html","8a731b8fed38a5dfb8536b0432828d4e"],["/archives/2021/page/2/index.html","6d72adc57aa4fb11a5fa638e71798b1b"],["/archives/2021/page/3/index.html","ae18887b0b38f8a5d75cfcd24c167256"],["/archives/2021/page/4/index.html","f5aca4809e305722d23fb89038f516aa"],["/archives/2021/page/5/index.html","63d551ef44dec921466610c92c26a341"],["/archives/2021/page/6/index.html","db0508053f77ffeed55454eab2a916fd"],["/archives/2021/page/7/index.html","0b2b20498f20c87f6de08ca0bf468974"],["/archives/2022/01/index.html","138064209c3f4964bdb788a7764d0142"],["/archives/2022/04/index.html","05bfd48a5f56e0094cbe5fa94f1f23cf"],["/archives/2022/08/index.html","a7829593816ebddab77f1e5a57799a3b"],["/archives/2022/index.html","a96b8768c4abb8dc5f790091291e91d8"],["/archives/index.html","e1825bdad255453d5df179c22f898eb7"],["/archives/page/2/index.html","cac00d16f98eeb876b854808a94b7b0a"],["/archives/page/3/index.html","6eb250f89c607ef15c8649f977d4b271"],["/archives/page/4/index.html","14c99ff2d33aafec9fd7f63c1fe23f0d"],["/archives/page/5/index.html","ebcc4cbe7979fe8071325886fc998906"],["/archives/page/6/index.html","89196af4a2b5eb4a9e5be4e6ab21daac"],["/archives/page/7/index.html","eb5ec2f661ba412889b72f0e790d2aca"],["/categories/JavaScript/index.html","c2778f6c648582bbce0e32363a8130ba"],["/categories/LeetCode/index.html","80aca6953ae7054f228037a149fa6de0"],["/categories/LeetCode/page/2/index.html","81876274d662a3faa2c515a80e08be67"],["/categories/LeetCode/page/3/index.html","6b2233ea0139a48689b26e67e8ca0e6e"],["/categories/SSM/index.html","1fc72c52d1aa58ea62d1a26892997531"],["/categories/index.html","75704744ecba1ed93f12ad04f48e828f"],["/categories/jQuery/index.html","e87834ab5ea3b2c0fdb3b75b94aea3ce"],["/categories/博客/index.html","0d679e2aee969cd7ca887ee57ffc54ba"],["/categories/学习路线/index.html","5d8677ec75b9183fd440e501e9b25e9d"],["/categories/工具/index.html","e3a2da1023f6ccf2c1648b11cdbc9b7a"],["/categories/数据库/index.html","f93a4ccaaac6c55b02ac1a168fa9f177"],["/categories/笔记/index.html","8c4f39fd07b48d3c80f980322a7718d1"],["/categories/算法/index.html","343190f5f549b230816e2d3b7184bd6e"],["/categories/算法/page/2/index.html","7985c51a08cb9daaf77a2322719fb55c"],["/categories/设计模式/index.html","4d52ff15c3027948ac6fa84f17798a04"],["/categories/设计模式/page/2/index.html","c9a3360927ab5614a825c6e6b8058d67"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","db30319cfeba5a5e9c123cba1e9f91bb"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","7400a0bcf8f4fc1141a97fd768e86257"],["/messageboard/index.html","a22928318b2eaa2fdb03a20527ccc29f"],["/page/2/index.html","16f6f8a49ccbb8ffc16ee4fe956e8a79"],["/page/3/index.html","eeff4293eac4f3c6aba99afd632a21e7"],["/page/4/index.html","5c2d7abaef989648688980934bf8d3fe"],["/page/5/index.html","6a72449f8f66126f12afc510d4b08b7a"],["/page/6/index.html","da52fe090bf2ec9aa36799459d8c9587"],["/page/7/index.html","e4fc514dfe41501a4da507b9b2d994e6"],["/sw-register.js","645dd929e72cfbe6a8e87bbaea86fa3a"],["/tags/JavaScript/index.html","3c452c4dafac23b75eca9e3f6411f47f"],["/tags/LeetCode/index.html","5e4e29af11195073225b0e58985e0c77"],["/tags/LeetCode/page/2/index.html","739a987ff6ded39e77b8790a2dc42bbe"],["/tags/LeetCode/page/3/index.html","4b8618d003ae44cf8f6df69e0b53dafe"],["/tags/Mybatis/index.html","6dbe780ae294a72d8a6ef0111d60a631"],["/tags/MybatisPlus/index.html","7502b6405fd05df664f3c201f1557801"],["/tags/SSM/index.html","a092fa4081c44a53c4663393ea3b843b"],["/tags/Spring/index.html","c23ac17562491085bdfbe71a355a4db1"],["/tags/SpringMVC/index.html","63b2d93886a8adaee80f6b3cd596e11f"],["/tags/butterfly/index.html","7a8f43f03f39e9ca24e90394d90716ac"],["/tags/git/index.html","cef38a677546730eae9e60056ca993b1"],["/tags/hexo/index.html","01c3c69209fbb69e12216f2194fdffc4"],["/tags/index.html","104989a308ec14294f0d8db88f379a47"],["/tags/jQuery/index.html","e2c6bf5c8abe4fbfbaae877f647376ed"],["/tags/java/index.html","3409e457f395fc7c193f1d29ff053c5b"],["/tags/markdown/index.html","1fa2855a6283a94333b768a45efdf8d4"],["/tags/mysql-数据类型/index.html","ba8655df43ddfb8fdbec32f8439fdcaf"],["/tags/mysql/index.html","4597b3f7d9c80e477cc2c7a26b237e49"],["/tags/typora/index.html","efe3e079ddd0dd1e11491df978579505"],["/tags/享元模式/index.html","42b10793ad99a218f088c1faec85c403"],["/tags/代理模式/index.html","45c0dcadd1c1fc43f1ad3a92490636f6"],["/tags/分布式/index.html","67bc8771914a54df8d9c897fe5f0e960"],["/tags/前端/index.html","c0f49f77ce302b29d61592ec9fd5c755"],["/tags/后端/index.html","cc4995daa905b01dcbc9f1276dd2e491"],["/tags/外观模式/index.html","466fd906114324edd85804f801b81401"],["/tags/工厂方法/index.html","5d2d86d64ea5ae2336d82a062b909f6d"],["/tags/抽象工厂/index.html","6768aff06339cd47e1e4305a54532566"],["/tags/排序/index.html","80d7bd1185a3f36ccb5fb66e4df1e60f"],["/tags/数据库/index.html","2940de26d98201d047446f94a6034567"],["/tags/查找/index.html","485c2fa8d8f3aceb621ff6029faf6c8d"],["/tags/桥接模式/index.html","507556faca315a85167c0f2663ae7640"],["/tags/模板方法模式/index.html","bab870ede4af453ca136c9d37eecba2b"],["/tags/版本控制/index.html","a286b195a9f3f6306700964022e2f2d0"],["/tags/策略模式/index.html","c2c993b1c3211825ce9f4331f0a6159a"],["/tags/简单工厂/index.html","51dd0ab1bfeae2923c1d3c1e5b7ebed1"],["/tags/算法/index.html","1e6c19a04bb97ff8207c3a5b24c5f7b7"],["/tags/算法/page/2/index.html","7cc77746fa97d5c30261ad08309f0c3c"],["/tags/观察者模式/index.html","709dae84238c328df19ac666c8f3571f"],["/tags/设计模式/index.html","4c04f2cf8df5880c8f6baa524e1b0f22"],["/tags/设计模式/page/2/index.html","80785475e85ba93b0b9c67295314b174"],["/tags/责任链模式/index.html","5bc1da1863cb71ea57d7bce6fec1b9f4"],["/tags/适配器模式/index.html","ce12ea4d0ab080fa0e50edcf04359850"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
