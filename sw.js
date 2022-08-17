/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","0e63a1f41f31962562c28666db1e7097"],["/2021/02/22/博客的搭建/index.html","f5111c1ba53519ca571d8a6bf793fb65"],["/2021/02/23/如何使用markdown/index.html","4f9f671584f2f2005c0f4b4e7543467c"],["/2021/02/24/mysql命令大全/index.html","81eac85d3ed57c4f70b00893281c73e2"],["/2021/02/24/mysql数据类型/index.html","5117c506d123cb3774b4a7a9a9127994"],["/2021/02/25/Git的介绍与简单使用/index.html","f6357b4143d364d241254cfce4dc8910"],["/2021/02/27/简单工厂模式/index.html","8f2c3727ffa2eb71d56aca6415dac8d1"],["/2021/03/01/工厂方法模式/index.html","cb9f16597527a3558d2374be74dd04db"],["/2021/03/02/抽象工厂模式/index.html","44fff87ae7c57ed77b553194d57e4d6f"],["/2021/03/03/单例模式/index.html","3ec1339a462a2e783f71568ce298221d"],["/2021/03/04/观察者模式/index.html","ae20729b780c772f8cd3b16b3e27b828"],["/2021/03/05/适配器模式/index.html","f36233228cffd442bc4413ce0fd42c6f"],["/2021/03/06/模板方法模式/index.html","8277aa42400557cc8be370d6a7880ed9"],["/2021/03/07/责任链模式/index.html","1ba8130390adad76691ee7c3ca12aeb7"],["/2021/03/09/代理模式/index.html","e6d6d381d9188bd5c366463de2df8948"],["/2021/03/11/享元模式/index.html","7938585741e31f6862309bd9fd0032bc"],["/2021/03/12/外观模式/index.html","8a6755c45dd71b511a1460a0b03f7d10"],["/2021/03/13/策略模式/index.html","6023b874f8ebc0e04779e664e9dfcb72"],["/2021/03/14/桥接/index.html","0a2b77fb3937d248f8db0cb2d7ef9149"],["/2021/03/15/LeetCode-多数元素/index.html","9871b8a434ec56acd07a7f482afd007d"],["/2021/03/16/LeetCode之汉明距离/index.html","7346d19b173cd5923c85a155b283bb20"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","4410a39db624409006ccd1845dcbc3e5"],["/2021/03/18/LeetCode之两数之和/index.html","bf2d689d87a8adeb2e77c239fdbe6445"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","038c1f05ea941910e6bd10ff57a4a4c6"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","3045e83c1e96a5de47954b30ba8b69b5"],["/2021/03/21/LeetCode之有效的括号/index.html","57956e65450f947cd6468c93071f4c0f"],["/2021/03/22/LeetCode之移动零/index.html","c827553983f2760c185a045b788ff390"],["/2021/03/23/LeetCode之爬楼梯/index.html","f1084d1dba63f3017f93108d446ba380"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","192cb0627ed07c8efefac2ab7b1ad52b"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","0cfeba61432fda4ab284637085a569e3"],["/2021/03/26/LeetCode之最大子序和/index.html","bd6b1a5f109ca73e124680c168db9f7b"],["/2021/03/27/LeetCode之子集/index.html","60eb89e7a2a951d8f25add72c6c597f5"],["/2021/03/28/LeetCode之合并二叉树/index.html","1afc801a8996a690fb6f2148509b771c"],["/2021/03/29/LeetCode之翻转二叉树/index.html","3d91629bd58a0a6f0c401f85991c5a5d"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","4e4af23cdad798bb80c14fa5741d75a1"],["/2021/03/31/LeetCode之翻转链表/index.html","c865353eaabc499d5d3623811da27467"],["/2021/04/01/LeetCode之相交链表/index.html","b19726fa45678873d8275c53321c054e"],["/2021/04/02/LeetCode之最小栈/index.html","1d2e6cd64be02003726585562fbd8ee0"],["/2021/04/03/LeetCode之对称二叉树/index.html","2663b564a5a493eb606380c88db3fdcf"],["/2021/04/04/LeetCode之环形链表/index.html","c9388bc4bfc14b9c74cf6e2f99047fde"],["/2021/04/05/LeetCode之二叉树的直径/index.html","302b4cd94f01147c2bd84896154e70b5"],["/2021/04/06/LeetCode之回文链表/index.html","775796fb61d8b5e77142b9aee5fa2da7"],["/2021/04/07/LeetCode之比特位计数/index.html","a82112b7ad1967ecde5fdaf79c7a56b4"],["/2021/04/08/LeetCode之全排列/index.html","380114805ca6d1a773f27e433519fc6e"],["/2021/04/09/LeetCode之括号的生成/index.html","f6dbc75c423978ed839ccc7cd4d22564"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","f452008843ca9be9260e688fe4e45c5f"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","f46a7596948ada5e0336fb021555f7da"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","0dc300441ce13552e3109dc0c8899fc0"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","c08026029def29a4f76a9d2f1a4faeab"],["/2021/04/14/Mybatis/index.html","817d014f3bad7dfc45a17db3902bb5a4"],["/2021/04/15/Spring-1/index.html","34f4a94aca395651c8d5966341ef6872"],["/2021/04/25/Spring-2/index.html","d197a089496ba525139f90639c2b7a1a"],["/2021/04/27/SpringMVC-1/index.html","78245f3ee83b786b9e1533e5a61cc491"],["/2021/04/29/SpringMVC-2/index.html","d812182c272d3bc6a46ede9f35b4a610"],["/2021/05/03/冒泡排序/index.html","18a27e1855b9a74689d0af16fc498f5b"],["/2021/05/08/选择排序/index.html","22502b3c74b532bf6ae77f16f8bfcbda"],["/2021/05/12/插入排序/index.html","aa1c1c562f5e1ed6ff9fbc18b7280e3c"],["/2021/05/15/快速排序/index.html","61d7de860970668c9fb2279ef42ffc33"],["/2021/05/19/基数排序/index.html","eeb4b0828cbb2fde8f978babfde6169f"],["/2021/05/20/哈希排序/index.html","274153916d87ae2f185df14f006e03f2"],["/2021/05/21/归并排序/index.html","c1631ba40d6f49a63c5d8ee3a8ca708f"],["/2021/05/22/二分查找/index.html","d903cd52913d7122b28f1504694c9306"],["/2021/05/26/差值查找/index.html","22d9c9f1831c68f87e6178090f964ba6"],["/2022/01/12/高精度大整数计算/index.html","1e29fc06fc463a8a0fdba7b7c571c6e3"],["/2022/01/22/前缀和/index.html","affbdff487d5cf099c447443ae6179c7"],["/2022/01/23/差分/index.html","ca2465cb575bed6c777be018522e39d2"],["/2022/04/04/MyBatisPlus/index.html","17744fb8d15e8f016ee62693687ce22d"],["/2022/08/17/jQuery/index.html","9ce777d546765b82c1cc80535ca8ef95"],["/404.html","eb839ea2fe83c665df0a941f478003fa"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","bc3366287f088512dec095cfe3b6cf2b"],["/archives/2021/02/index.html","865b68b9fad66119bfaecd805e69a3f3"],["/archives/2021/03/index.html","3b7cf9e90a332aeb4a2e093ab9ecf1e7"],["/archives/2021/03/page/2/index.html","25a95ad386df15da5f092469e78c937b"],["/archives/2021/03/page/3/index.html","ab50b2dee9b344efa83607f532142d6d"],["/archives/2021/04/index.html","44d3190ef7f5c46ff5556866e13cf30a"],["/archives/2021/04/page/2/index.html","1c6ab41ea910194c9e2d64fc8b9b7f5f"],["/archives/2021/05/index.html","80f746382d42e7c10bb7db88c1aab3ad"],["/archives/2021/index.html","fde0bc9c6e4b4937fec851893578c416"],["/archives/2021/page/2/index.html","f96dc73bb2b0506946b9088292418e5d"],["/archives/2021/page/3/index.html","ec8b5d0ef416a1d80cb602e4c2e8148a"],["/archives/2021/page/4/index.html","1b2ed822b96655664e1fd21e70499ea4"],["/archives/2021/page/5/index.html","3ea89ea38307b065b3cdc039f5b146c1"],["/archives/2021/page/6/index.html","986038d01c1b02bba3bfe49a5ac86089"],["/archives/2021/page/7/index.html","b0868e384aa548e773ba81e8501d4103"],["/archives/2022/01/index.html","8b31812ebfe0cfdc6eedaefb2e58fa94"],["/archives/2022/04/index.html","97ad78cc928654b82fbc40a39e3b778c"],["/archives/2022/08/index.html","4be29acec469d7b034ab978933424593"],["/archives/2022/index.html","929c5dcb1502e64f7cbb9b9a64dc1302"],["/archives/index.html","dadb526407037004b5a0699ef1a43ad0"],["/archives/page/2/index.html","3dc813a2be4c7a5e1aa7a34887bbe056"],["/archives/page/3/index.html","6e9fe65e9317298a835818ab9a3ca984"],["/archives/page/4/index.html","b7cdf8ae918cf2383510ffb07ac4a274"],["/archives/page/5/index.html","3976d257b330ec9e3256e6f22eaf0921"],["/archives/page/6/index.html","59555f5fbb223dd59593afebe97d4894"],["/archives/page/7/index.html","d0be33df203e0435bb5f2e93e6545087"],["/categories/LeetCode/index.html","1b0e474ecfe6cfdb7aa096240ba72842"],["/categories/LeetCode/page/2/index.html","d19859aa2abcf590e23793505f86bb56"],["/categories/LeetCode/page/3/index.html","e02ccdf8a77793019b01b40c4b08928d"],["/categories/SSM/index.html","cea2a99c36d337cb1253ada4830c4518"],["/categories/index.html","ccd542c8a41fe936d4112efa727da131"],["/categories/jQuery/index.html","ffd360b1b2928bc428a3da7fd1acfbab"],["/categories/博客/index.html","92097171b6eb6ed453a1a0b147c3ed68"],["/categories/学习路线/index.html","a946bc0b704489d64a13bfbb7b7e7a51"],["/categories/工具/index.html","5ecd1d44f009f58e8f69b3f4d0f16dc0"],["/categories/数据库/index.html","3bde40ffc9d0a058ddadc0418502de90"],["/categories/笔记/index.html","747fa17760a8d5d1a8aa9906b6eff940"],["/categories/算法/index.html","a330ebcc5ea367d1f05a5150203647c1"],["/categories/算法/page/2/index.html","28e2bed212b9769878441e4dfcb6283d"],["/categories/设计模式/index.html","832f52cdd39882eb58783434cc34e91c"],["/categories/设计模式/page/2/index.html","2613b1bf8441b10ccaa33350ee071290"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","a36257a1856cbc01c32cfb5312984c2b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","29619b91bdf65f45c105c0d77b8efbc1"],["/messageboard/index.html","1b85b4b4879464367600492f8ab5a551"],["/page/2/index.html","b2b95326c18fe5864ab09c662a99df90"],["/page/3/index.html","a5ca25cb90a7c588a9a2d876bb770297"],["/page/4/index.html","5b339f4b47f605a2acff82bb4bb209c0"],["/page/5/index.html","b168ea1f3b7319f415b551e36d2655d2"],["/page/6/index.html","003df1ed82e9ecb5a0daeffc50809275"],["/page/7/index.html","bdcd333291ab4429ab2459f979b71949"],["/sw-register.js","399d438e55fd3b388a954ce47138b416"],["/tags/LeetCode/index.html","e792459950a442fde295b8ef0196ebfd"],["/tags/LeetCode/page/2/index.html","ed241d0c1905d456e011f6fda5aae180"],["/tags/LeetCode/page/3/index.html","2bd2d4fbf4900ab7b6d4b454bcecb6e5"],["/tags/Mybatis/index.html","d40e845161d6c37ddf65fb357499a029"],["/tags/MybatisPlus/index.html","f3d3791204fb4c0772d69d2248b10f54"],["/tags/SSM/index.html","d290b927f413c2b96f05b9c21a1677e1"],["/tags/Spring/index.html","9f5736b00e06451144e0c2bc8e9d2991"],["/tags/SpringMVC/index.html","4ecab1d4c2c76dead65b9e5d045febbd"],["/tags/butterfly/index.html","ab4e75caa586699776d01186b90afa5d"],["/tags/git/index.html","e9d8c55e52e243a214636d78e7f427b0"],["/tags/hexo/index.html","b89f4c6efd7670b4688e9b3d7c4683c5"],["/tags/index.html","481bebc099adec6360b23bf41b6db93b"],["/tags/jQuery/index.html","ae65ed2d7f80748560fe6e9b8804300e"],["/tags/java/index.html","461d1638744427dea9524b76b439274c"],["/tags/markdown/index.html","bcbda03797a235bb3c4eb5dc2ca8548c"],["/tags/mysql-数据类型/index.html","ad54731fc6747c9e10a0c8c4af263ba2"],["/tags/mysql/index.html","ca96e37bc17781f0b870411c1f89b1f3"],["/tags/typora/index.html","f9db430cc7ff2f0210d081d4315a63f9"],["/tags/享元模式/index.html","2c0ddae6484b55714662a2a88cf44d65"],["/tags/代理模式/index.html","63d08cecadfd1f707c8a2be3e0510c2a"],["/tags/分布式/index.html","01acd27d37314315b94931ed0a6a08de"],["/tags/前端/index.html","7ce6cbc1fef7fa3657cfcfe349f234e5"],["/tags/后端/index.html","7cafe31cf7208aabd34a5e549044ab44"],["/tags/外观模式/index.html","a7c1da73859cc292c78a5e7423447ef0"],["/tags/工厂方法/index.html","1305af46d7fe33b839da5b25a1461e71"],["/tags/抽象工厂/index.html","82cd1aa15ab17313d10d3a6dfedba53a"],["/tags/排序/index.html","ca9b62a5a81b0b5f94d097fc8b2b89eb"],["/tags/数据库/index.html","e8431c1e4f6baa75be6d3f37faf74d7b"],["/tags/查找/index.html","da8ea365b39eabb2164c2680ff1aa389"],["/tags/桥接模式/index.html","762167966e57f2b0257e2d4e0885c713"],["/tags/模板方法模式/index.html","d028e92bbf20a910c86f21de6fc0052b"],["/tags/版本控制/index.html","32979b7e97fbe0dd4ef0c0ea8964e0f3"],["/tags/策略模式/index.html","5a138004431c6c9071b8de611b33c4b8"],["/tags/简单工厂/index.html","66f0552bfee1cdae73c6c1fed3ac365a"],["/tags/算法/index.html","d33e7d6382a372aa6505696a83b6f52b"],["/tags/算法/page/2/index.html","8069497c0ff9d66a2601621c497b3e9b"],["/tags/观察者模式/index.html","d7e4657d46db70037bad4d44bd62cb9d"],["/tags/设计模式/index.html","59fcb371f297a61d21a8c2cd1207a117"],["/tags/设计模式/page/2/index.html","035dc6f4d166ddd994795b9a98226e6a"],["/tags/责任链模式/index.html","dfa54183528d60a5abd7bb4ae5b62335"],["/tags/适配器模式/index.html","45fe0e99a771d3526a637b832c07845f"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
