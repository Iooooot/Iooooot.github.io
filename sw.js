/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","5045407b79c4c6bb203e29ee2617e13e"],["/2021/02/22/博客的搭建/index.html","995b313128451e58b3474604866416d4"],["/2021/02/23/如何使用markdown/index.html","a2f3845320bdf3ba290ad1e75226e7bd"],["/2021/02/24/mysql命令大全/index.html","fa7f584e03c7442d01917d8e9fbd148d"],["/2021/02/24/mysql数据类型/index.html","f1dddcb8621a1053edaa458e6daf7b1e"],["/2021/02/25/Git的介绍与简单使用/index.html","898002ea2e1c6a6de24be50543ba11a0"],["/2021/02/27/简单工厂模式/index.html","c4ef35ac2e9e3015e2a8d688f61d6bd6"],["/2021/03/01/工厂方法模式/index.html","a598cf37dcd336f5dbefa60b6bbcf84e"],["/2021/03/02/抽象工厂模式/index.html","ad5e4c628ce6539f3a828358e795f6c9"],["/2021/03/03/单例模式/index.html","5e9efd737a22a5293af45ba3063b503e"],["/2021/03/04/观察者模式/index.html","363bfc6de2ec0ef0dcdd071dc94f383c"],["/2021/03/05/适配器模式/index.html","47e515322625cc3946991bedbc58a264"],["/2021/03/06/模板方法模式/index.html","21f927425b3f375726557c0858867147"],["/2021/03/07/责任链模式/index.html","9b55e1871159c22d84320bb723c66908"],["/2021/03/09/代理模式/index.html","b0eae6d364bbd677ca67a1c11266764c"],["/2021/03/11/享元模式/index.html","f474e279a2fe5e2379db7a00d73d8542"],["/2021/03/12/外观模式/index.html","06de09a303548859f5bc9501f8546fc3"],["/2021/03/13/策略模式/index.html","5f475330b318a2f95840a9aa7a34f443"],["/2021/03/14/桥接/index.html","66f71ff9d8413db775c36d7f8bf23e99"],["/2021/03/15/LeetCode-多数元素/index.html","6325132bd2ac8306381237c892826585"],["/2021/03/16/LeetCode之汉明距离/index.html","215451a05af7c197df39681bb55cfa91"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","617cc30442cfa8c498bb76668fa4ce1b"],["/2021/03/18/LeetCode之两数之和/index.html","5cb92e54fa602a2116cbae60ee63e712"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","632c334c567c1d33d79571f3081b8801"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","e72ad8135b3062eca6023cd0a07a6b85"],["/2021/03/21/LeetCode之有效的括号/index.html","9dc25c503530f73d6cc6043fa4a85804"],["/2021/03/22/LeetCode之移动零/index.html","b77968a0f38b26ae7371bb8059f4df88"],["/2021/03/23/LeetCode之爬楼梯/index.html","d00f0aed768db3e2d9fc1934babf2f56"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","12672ca295908ef572b79abbba4ee652"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","88f1a614279e5172abbaa75b13e18155"],["/2021/03/26/LeetCode之最大子序和/index.html","5600a07174d82bbe1248f9ed67ba0933"],["/2021/03/27/LeetCode之子集/index.html","e2153ce0b867266a2009e25f371e017a"],["/2021/03/28/LeetCode之合并二叉树/index.html","08fcdae3f7f6f66bab21ae4e82fd6811"],["/2021/03/29/LeetCode之翻转二叉树/index.html","ec45facc5bb75449821200e1a5e51edf"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","1ca03cbac94ef534958c9b8d614fda70"],["/2021/03/31/LeetCode之翻转链表/index.html","2a0f784941d3ace959507bcc60706a4f"],["/2021/04/01/LeetCode之相交链表/index.html","e22518d1f88a6fd4e13aa089f6867c38"],["/2021/04/02/LeetCode之最小栈/index.html","2e73b21f8631a51417774591cc07375d"],["/2021/04/03/LeetCode之对称二叉树/index.html","b93a8e1d65af167131ff9e5f8937e280"],["/2021/04/04/LeetCode之环形链表/index.html","321b4150595faef1e40570e58e30cff7"],["/2021/04/05/LeetCode之二叉树的直径/index.html","cdb6a77a17d8140f45fe5e092cafff1a"],["/2021/04/06/LeetCode之回文链表/index.html","452ec4f4b8c310ea5a45db6ce975beba"],["/2021/04/07/LeetCode之比特位计数/index.html","f918a9ec75161e6df8ce9ec257bf9ae3"],["/2021/04/08/LeetCode之全排列/index.html","950238bcb45fff49bf170792be10df40"],["/2021/04/09/LeetCode之括号的生成/index.html","c9fb45273d27af8e5ccc4f6a436e530d"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","fe86da50372234d0f1bbaf961abba7ff"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","34f4f7d3cd20be23ebb936042d97198d"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","cb599131916bf32a4c9345577da99313"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","93fcf452fad7412d0ee51aae4cc4431c"],["/2021/04/14/Mybatis/index.html","cebd2474e85bb8f722a578098b581af2"],["/2021/04/15/Spring-1/index.html","bb1ebb80c0c296605a36b54f85bae982"],["/2021/04/25/Spring-2/index.html","b9c55be82759b638e430785f8d4f5691"],["/2021/04/27/SpringMVC-1/index.html","3f0d9e477f63308e5fdb0980a003ff3b"],["/2021/04/29/SpringMVC-2/index.html","8e121bae5c27b280782395dcee09b99e"],["/2021/05/03/冒泡排序/index.html","8eecab3b666c689da7c4b7814a640fb3"],["/2021/05/08/选择排序/index.html","6edc362101b14422901ce8970ac38820"],["/2021/05/12/插入排序/index.html","b46c34119b1ff23b23f0b89cdfcc0b7c"],["/2021/05/15/快速排序/index.html","144c786e353c8c6b8153e12f8e859f95"],["/2021/05/19/基数排序/index.html","27eb3a26e1a67ba652c74916d9f4a054"],["/2021/05/20/哈希排序/index.html","a42837d7597231fa008403c073fb1bc1"],["/2021/05/21/归并排序/index.html","bb0af827e3c5a2aac07cab37dea79005"],["/2021/05/22/二分查找/index.html","5ebb64b37958e6014a26b4c1ea5dcfe2"],["/2021/05/26/差值查找/index.html","cb455ed13f2ac75399e6afc1f4ea2a69"],["/2022/01/12/高精度大整数计算/index.html","a85aa50481369d63d3bde666889aebf0"],["/2022/01/22/前缀和/index.html","f2b2210c2b16e543e2e5e94ea6eda22c"],["/2022/01/23/差分/index.html","9d148388dbccb9e9fa4aa41f2b22060d"],["/2022/04/04/MyBatisPlus/index.html","ed411cd9a876a12158163a7abfa8d2ea"],["/2022/08/16/hello-world/index.html","16c7d84715822a990166d3308ec03259"],["/404.html","47a3a8df4fe756eb458c5c8cb73b3bb0"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","ed4b1907720d680f51f1681478006eee"],["/archives/2021/02/index.html","69a0c39e0c3a057700656dac31099eb9"],["/archives/2021/03/index.html","3ec5da5c2e49911b1edf992441c44a35"],["/archives/2021/03/page/2/index.html","a5b9749f39e933db38018a1a32a04764"],["/archives/2021/03/page/3/index.html","c282ddc04f9b6e7168c7facc80fb58e1"],["/archives/2021/04/index.html","bd53e439a485e875c36668f04dea57fb"],["/archives/2021/04/page/2/index.html","a7002600120d5ffd49abbdaddcb188ff"],["/archives/2021/05/index.html","db92f74dfe56035ef42facb1af2530d5"],["/archives/2021/index.html","f734120c5f08df4be91d0c04bdc20165"],["/archives/2021/page/2/index.html","fd8088825d0c2c53b4b19fe563cae4f6"],["/archives/2021/page/3/index.html","5d365fceed5364678dfc21aa26badbf8"],["/archives/2021/page/4/index.html","72b706239eb85a4155b94e59985146e0"],["/archives/2021/page/5/index.html","e0eb7b8d0e402c1173697b7f3ffc6f8f"],["/archives/2021/page/6/index.html","bb4c8186585d151700d23d84bd11d7c2"],["/archives/2021/page/7/index.html","bf02567edf8421fec832b5b41d2d61dd"],["/archives/2022/01/index.html","0b976d274b75f47f2ba392313f2074d6"],["/archives/2022/04/index.html","7b8b4c82e7c0a6b4ceb199305cb3d6a7"],["/archives/2022/08/index.html","bc0fc4e1a49634ba686cc048ead40ccc"],["/archives/2022/index.html","bcfacc5202e87ce99c07762dc7dd33cf"],["/archives/index.html","13c349022cb24bd62d7f4cbb55e22348"],["/archives/page/2/index.html","49beab4f178b5b09c3fb1a7534d45cd7"],["/archives/page/3/index.html","8087e071498ac5877bbaf4d62e17ccae"],["/archives/page/4/index.html","7dccea1b4e1555659424d7143c2ec476"],["/archives/page/5/index.html","34c69b225f5011c8160275bd542ee0f5"],["/archives/page/6/index.html","87f73cc604ebebc2dddc48b9c0bf4452"],["/archives/page/7/index.html","d0f68f20d7c09f0fe2f4b8bfbd16754d"],["/categories/LeetCode/index.html","8fe2508ba77e20452b11cabc59fdde7d"],["/categories/LeetCode/page/2/index.html","25ffd884a5c60130d22013d9caf33771"],["/categories/LeetCode/page/3/index.html","099f7366d8aeed9825faf002deab7373"],["/categories/SSM/index.html","078310318e83c190c3c8b231758fd833"],["/categories/index.html","c0c42668149484b37456946e577f6ac8"],["/categories/博客/index.html","5a294b59a9045e25d9af38bdf657a9f5"],["/categories/学习路线/index.html","d14344a14068c041638e9e97c9c1d9ce"],["/categories/工具/index.html","3a3fe836ad1e81e8e479fe77f583ce40"],["/categories/数据库/index.html","9cb263ce4b3989680b288069faa76c02"],["/categories/笔记/index.html","b6a87b20fb06c9e0542ec6dfeffc38d5"],["/categories/算法/index.html","09a88571a1bad4aa7867463edace1de2"],["/categories/算法/page/2/index.html","fa6d6abd8b3f781297622866a59df0df"],["/categories/设计模式/index.html","f429658d304be3d7dfc3d8bc1678fb45"],["/categories/设计模式/page/2/index.html","be7cddfece65b7bdc3c6ab03c7b579db"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","1ba9b9c996a7d617ba92d2dd7737776b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","98e7e81ee6295253390d7d15811c5173"],["/messageboard/index.html","960406842ffbce45095227610c891a9a"],["/page/2/index.html","e4c07f632cc8323e28946dbe8a261195"],["/page/3/index.html","bc6eb806fad615d56df9a077bcc60b81"],["/page/4/index.html","cb134fcc5ae39849f13edf74c3c5db8d"],["/page/5/index.html","7490f2f1695ba02d4746429ffb558efc"],["/page/6/index.html","4e202726fb0af221d0bfe7c1a0d54960"],["/page/7/index.html","523f9a70377366f1a5df2c6e82eac25d"],["/sw-register.js","a19d5df9dc52cca4e1626ac322f7696f"],["/tags/LeetCode/index.html","7d71833f8ca5e9eae708c0e117586acb"],["/tags/LeetCode/page/2/index.html","9dde8d736b3396eb51341aa40427ff96"],["/tags/LeetCode/page/3/index.html","687c1d4f3645e587e17ebececb507ca1"],["/tags/Mybatis/index.html","0ee929a6255702af43caa3f5ca31b280"],["/tags/MybatisPlus/index.html","dfc647b938701168d4648bdba22e6ebc"],["/tags/SSM/index.html","bb99c1de89f2b8d27f36cafb879b3072"],["/tags/Spring/index.html","293659b30a6fb87b8ff9f351ca65df45"],["/tags/SpringMVC/index.html","5b2d8a61c14498a27f60ba057e197290"],["/tags/butterfly/index.html","0e2d7d4c9ca20f4b30c3c96b3ae40da2"],["/tags/git/index.html","648eff237f13a15ce71d9918f6d0d433"],["/tags/hexo/index.html","1f8d97c76fdaa24fb87673d55c600ae0"],["/tags/index.html","e0d214b2d93105bc87e21335d10a7925"],["/tags/java/index.html","fa210a0150d45ca6c839fce016fc1245"],["/tags/markdown/index.html","0a2614bc125c3e23794c1c7f4ef1abc7"],["/tags/mysql-数据类型/index.html","4424187fb08e9da137d9ca2774e10690"],["/tags/mysql/index.html","5816263d07206a2248d9a2e9380110c6"],["/tags/typora/index.html","ce13a765f4867691c406cc60350e41c0"],["/tags/享元模式/index.html","c0568e072a96f82506d3248cba3ecd81"],["/tags/代理模式/index.html","b6d87a0871a6e904b58e15d9ff45c7a7"],["/tags/分布式/index.html","711572ebf670d03048ec7f3e57f53299"],["/tags/后端/index.html","1cdba05611d7f07f4b79aa5008f1b076"],["/tags/外观模式/index.html","e933ecca45db3921f8ae181c36947d46"],["/tags/工厂方法/index.html","aa17bd671b3596f0e1a906118ff98f5b"],["/tags/抽象工厂/index.html","abd3fefb9e0f10a39c61ed0648920f7c"],["/tags/排序/index.html","c5a4aaaa380eaede67b687d6de6cc95c"],["/tags/数据库/index.html","065eb2310dc24f8b42b48f93b74d2973"],["/tags/查找/index.html","77223e4c6809130dc01fe612fdbaf34b"],["/tags/桥接模式/index.html","015d7a2bf285b952f6f2eb24a8429ce9"],["/tags/模板方法模式/index.html","6cf6941603f16b6aa4da96e27bd4700d"],["/tags/版本控制/index.html","28407bf990068bf1c7873a5a6e118bef"],["/tags/策略模式/index.html","f530d9cafc634d464865570a52fe025c"],["/tags/简单工厂/index.html","c1211d257af74dcedf605d5441444fae"],["/tags/算法/index.html","a11eb6796f45fb9793a251c450630e58"],["/tags/算法/page/2/index.html","5356e3ea059a30ec2fa94c660f2f6989"],["/tags/观察者模式/index.html","b1767873af62574d4d227a80269193c3"],["/tags/设计模式/index.html","9416b552f86bb5fa61c87c50dc331eff"],["/tags/设计模式/page/2/index.html","39ab1e11f85e814ccc101374abf002ff"],["/tags/责任链模式/index.html","a03437366690fd1a1303088f7cb432ac"],["/tags/适配器模式/index.html","ff6ee424c87d6b17d286d470732bde69"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
