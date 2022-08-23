/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","348162bf844755bee04341698d03fcf4"],["/2021/02/22/博客的搭建/index.html","e4b616012e9a69c58a253e045d2f8923"],["/2021/02/23/如何使用markdown/index.html","f9196235dd6a91e5d5aad5220df3b9cc"],["/2021/02/24/mysql命令大全/index.html","a56416280f29383dd8cb367b14dae334"],["/2021/02/24/mysql数据类型/index.html","18f82355a8cbcb24ea23c408ef76ddf4"],["/2021/02/25/Git的介绍与简单使用/index.html","005d1aa332e42434c79ca96cef089a96"],["/2021/02/27/简单工厂模式/index.html","5987947e46ffd24eae2d5f784bcddb55"],["/2021/03/01/工厂方法模式/index.html","ebe6f537d84d64204ab2b6a1da106c6a"],["/2021/03/02/抽象工厂模式/index.html","a4e1c3cc2cae46b48e6ae830d23ac455"],["/2021/03/03/单例模式/index.html","e14efe8f5bff06c40ef5253170a12f16"],["/2021/03/04/观察者模式/index.html","0ac89bfcbe9bdb1659a265999770a827"],["/2021/03/05/适配器模式/index.html","f10e3c11f629e2bd60c462be63ce0843"],["/2021/03/06/模板方法模式/index.html","983a1a8b6c0f1fbb5687436703d259a0"],["/2021/03/07/责任链模式/index.html","f35920a492e9a64a6fe3bdbb9ee7547b"],["/2021/03/09/代理模式/index.html","a28f66ab16dac9262f3bf4efc7f8da90"],["/2021/03/11/享元模式/index.html","1e88d9401ea10fb87b468cfcf1bb6dd1"],["/2021/03/12/外观模式/index.html","cb4c48c601d9425644965ba5ca3e9281"],["/2021/03/13/策略模式/index.html","f44aa46390cd77c4f818231dba02940b"],["/2021/03/14/桥接/index.html","4190a86f82a02bce515f9c9c30caf015"],["/2021/03/15/LeetCode-多数元素/index.html","ff2d73be1de858c2a19ae4704cfb177a"],["/2021/03/16/LeetCode之汉明距离/index.html","b5bdc0f91b9d6ed4da855c6c7295fc82"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","3512fc61590db13787e557c99958f83d"],["/2021/03/18/LeetCode之两数之和/index.html","9a8f12db251f441d3d962ec6dc676fd2"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","9562c188b69f239e47005c3f0d591435"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","c87a3363d834983de38c8bfcf3bc5e62"],["/2021/03/21/LeetCode之有效的括号/index.html","cfb142ee198bbe8fbf6540e3798c1501"],["/2021/03/22/LeetCode之移动零/index.html","4b6abe4b263aed8a5a70de844f3eb942"],["/2021/03/23/LeetCode之爬楼梯/index.html","d51309a5c58cc74196d558862b09f0dd"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","292756f9faff104d618c0db304b52461"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","2eb4226df56e10f6dda5c87ee1a3b3db"],["/2021/03/26/LeetCode之最大子序和/index.html","47f14d6285815a7dc6e6e71ea5e940a7"],["/2021/03/27/LeetCode之子集/index.html","dc60876608b74212a4cd849a96e4049b"],["/2021/03/28/LeetCode之合并二叉树/index.html","96e328951d58edae93814585cad2209f"],["/2021/03/29/LeetCode之翻转二叉树/index.html","c29055ea0f6abd54ea37271a357c2278"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","4f30d60a404476749dcc57e09dfca809"],["/2021/03/31/LeetCode之翻转链表/index.html","e74be58e11cd9f919571b904155031c3"],["/2021/04/01/LeetCode之相交链表/index.html","188771cd95d4328ef99c69cb6c244579"],["/2021/04/02/LeetCode之最小栈/index.html","93e344c34f7f26aac95542fae01d222b"],["/2021/04/03/LeetCode之对称二叉树/index.html","3dae546ca25d398105ad1367bcb5add2"],["/2021/04/04/LeetCode之环形链表/index.html","dcd118a664c808540c638ffac3efa720"],["/2021/04/05/LeetCode之二叉树的直径/index.html","838aa2fe57eee8fc9dda06c3691d77dd"],["/2021/04/06/LeetCode之回文链表/index.html","573870ad24cf91c24a0586a3ed141d86"],["/2021/04/07/LeetCode之比特位计数/index.html","1c27b97c59a441b176d409a71b6ef6e0"],["/2021/04/08/LeetCode之全排列/index.html","13c8a53e9593e04ae372f441333b5a10"],["/2021/04/09/LeetCode之括号的生成/index.html","eae9b1c310aa7e9d6a00457bc94c0580"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","72af3943e2d9e257922349eb8c4d9c74"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","47a70e4150e380c646fc889aa8aaf62a"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","4811343ba3fe532ee9032c0149594992"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","0f2423ef3081c5319e8b535025406cfc"],["/2021/04/14/Mybatis/index.html","c6d5c8aee2a7be5ca098befcef30323a"],["/2021/04/15/Spring-1/index.html","2948c18d5eebdf478270bcee797bc236"],["/2021/04/25/Spring-2/index.html","bd4babb0015b86157e835e661fdfbbc2"],["/2021/04/27/SpringMVC-1/index.html","591c8ca87cbde2a5accc0b8572cf37b2"],["/2021/04/29/SpringMVC-2/index.html","b3a63b1680ff3d1efbe66623dec877c7"],["/2021/05/03/冒泡排序/index.html","f69b77ea1ba499ed10f3901fc4e5ec23"],["/2021/05/08/选择排序/index.html","947db00b18ac1dc6e67950b706b23d1c"],["/2021/05/12/插入排序/index.html","ce7c6ee684deba1b78d7d048d96bc839"],["/2021/05/15/快速排序/index.html","c4e2090739f3db650b35c821db2702e5"],["/2021/05/19/基数排序/index.html","e62dee70374752162e1ae7d2504adf62"],["/2021/05/20/哈希排序/index.html","05dbf8363d636b2a69f31d5bd34e6993"],["/2021/05/21/归并排序/index.html","c7005a4a72a37c078a826fe3f80f300e"],["/2021/05/22/二分查找/index.html","cbc370d29440c39e248b2303d2d74339"],["/2021/05/26/差值查找/index.html","caf95d1d8cffad38a32af911d8df0fba"],["/2022/01/12/高精度大整数计算/index.html","27eefdd95c27deaa056a8b3a8c4f549d"],["/2022/01/22/前缀和/index.html","60078517e76d9abf091cf9c5a82d6c55"],["/2022/01/23/差分/index.html","404e469be388799ac92754df77dbcca7"],["/2022/04/04/MyBatisPlus/index.html","a48506a45b76802b628dc44cf603cb68"],["/2022/08/17/jQuery/index.html","620cda3961128341dde6bd2dba306c43"],["/2022/08/19/JavaScript/index.html","d69b8ec25ad14e79a3c36a0ce551a7f8"],["/2022/08/22/Ajax/index.html","b6ef26da701ba60cee9b43fe54899831"],["/2022/08/23/Promise/index.html","3138de03f2403f3ab2ecf2890190afca"],["/404.html","52d180da2e14aee98dd19c908df461f3"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","1fa3baa16b610d42fe0ce788d5bfa18a"],["/archives/2021/02/index.html","c3b58b5499183877b7a4fd4fcc2e2e2d"],["/archives/2021/03/index.html","0ea67c162bd1abe9e58d3595f4aa24da"],["/archives/2021/03/page/2/index.html","ba0649ff9c6b2194176ab0de8cab2145"],["/archives/2021/03/page/3/index.html","e9bf01201442258860ce3fb449d28e69"],["/archives/2021/04/index.html","5470f9f7d32f7ced9b9fbfa67064d43c"],["/archives/2021/04/page/2/index.html","424ea3a9b0a23556218830b51cb46e12"],["/archives/2021/05/index.html","8d38d742ff19bf8f8334893a2f62987f"],["/archives/2021/index.html","3b953cdfda39289a6f4c0e578ef94833"],["/archives/2021/page/2/index.html","fb7b70a4fdc14268d05cb4065232fcb5"],["/archives/2021/page/3/index.html","cca24e84f5c669da113b68b005b3edf5"],["/archives/2021/page/4/index.html","b6b994cab5c52481ba7d179d6c6fffa8"],["/archives/2021/page/5/index.html","453c6a947dec037221014be112983422"],["/archives/2021/page/6/index.html","e9a909a8ef9393b61815939fc90dc704"],["/archives/2021/page/7/index.html","6595e1c8beb4d68ea51275369a0f9add"],["/archives/2022/01/index.html","8ff8e3f0f49af4c5e02473b3a06a67bd"],["/archives/2022/04/index.html","b3863c57b15bfbb613aedcc51cdd6a7a"],["/archives/2022/08/index.html","86fac5ef667848a5720b861ec0549441"],["/archives/2022/index.html","2864fb4ca293f3817c80194792f05078"],["/archives/index.html","e7ecd7713f387839550e72771a114aaf"],["/archives/page/2/index.html","f5bb940365d42d8172198983e0689bab"],["/archives/page/3/index.html","57da480416301161e37bb12bfb878e9b"],["/archives/page/4/index.html","cda221bbb6a62479dd3b114f443b196c"],["/archives/page/5/index.html","1a3cc63e39bcd122240ceb63c7f63908"],["/archives/page/6/index.html","ab93a138059ede0d9726c8f12ddcd715"],["/archives/page/7/index.html","65cf5ae2374cc4a85e626e0c60bff0e5"],["/archives/page/8/index.html","5ef033af22301c48fc11592a56f6dce2"],["/categories/LeetCode/index.html","5fa789941f9a349af43a3373928ca6ed"],["/categories/LeetCode/page/2/index.html","3cb1b88a7344f760061c052f23872673"],["/categories/LeetCode/page/3/index.html","ba1a4ad3e318443e5c181405fa0885da"],["/categories/SSM/index.html","3ef846257327f9061dcea28ada76a6e9"],["/categories/index.html","3ba3f4b8263e803124004ac39fcebcdd"],["/categories/前端/index.html","613a0df6d33fb0b5bc4ef153713505ae"],["/categories/博客/index.html","44675b80744196d9686def2e664963d3"],["/categories/学习路线/index.html","8ae65a246220d01ea82adf72c6b9621d"],["/categories/工具/index.html","2aa12f73038dffac3a4437b07bed1334"],["/categories/数据库/index.html","da01d64f3957ff12c2288989be0751a7"],["/categories/笔记/index.html","7f736db2cb6fc8e8c888a310a1460f62"],["/categories/算法/index.html","cffabd6efc546e4fbbc5ff323637ee72"],["/categories/算法/page/2/index.html","d247cb4cd04dafe98551d298144ff2db"],["/categories/设计模式/index.html","0c17bd18343e58bdcaab61274111e74e"],["/categories/设计模式/page/2/index.html","6784d7bf4aa2830f5e8f35aae0ee26f0"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","99aa4204479a40f35746d4217d7a15cd"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","02d7b02f2fb761a44b37ea96989cfa2c"],["/messageboard/index.html","a840f23baf496ba3a28d730bac94cdcf"],["/page/2/index.html","f9f1f8f04b3e3fb5e78a55cd77da70f7"],["/page/3/index.html","50ac92cc7cc91721f0c3a1cc01c33016"],["/page/4/index.html","b89ea62a1f1a7693684f4d9f625cabc5"],["/page/5/index.html","8a4994c406292e47d50a5c4292e9443d"],["/page/6/index.html","78760d1489f4ac626b73027c06f651ec"],["/page/7/index.html","436668cf11f2001d1b63f9d6f9642a1b"],["/page/8/index.html","3914877a20101292df7c4ade47ae47ff"],["/sw-register.js","23dc9ade275a31b88743af74f89a37fc"],["/tags/Ajax/index.html","26887e675a9c7bacf0da8eac86fe1df2"],["/tags/JavaScript/index.html","7286f25172685845236b1b8df5d02757"],["/tags/LeetCode/index.html","3e8e1758ed36dd3522723ed9da738f35"],["/tags/LeetCode/page/2/index.html","3ff00517804b558b8c65da0957199012"],["/tags/LeetCode/page/3/index.html","f8016b95e82ac18aa2a4c0c6549e6f7b"],["/tags/Mybatis/index.html","69d36989f69cf50396300670e59345e3"],["/tags/MybatisPlus/index.html","b82e5ef69dd1a84b051b64b5ab22006b"],["/tags/Promise/index.html","d653b04d7b0d688d58c68fa05f4c9e6f"],["/tags/SSM/index.html","ad1441b03b36f71020376b3b2559595b"],["/tags/Spring/index.html","be26f0bc8e352f37a89fdb7c723430d2"],["/tags/SpringMVC/index.html","a73b545b97b1f0789b647e1d9ec1f8d7"],["/tags/butterfly/index.html","46d407ba6fe4a7e1632bbcd99294c33b"],["/tags/git/index.html","d5df0da1f4ee02e390b8145504aa53b4"],["/tags/hexo/index.html","ec5df289b2d1305b99f990572591a973"],["/tags/index.html","9c018b9d32d116fc08c38e84f53e8bb7"],["/tags/jQuery/index.html","b78442d9512aca905bbe2c47610a4455"],["/tags/java/index.html","b5d680ac43cd8fd73e8d424bc9d847d8"],["/tags/markdown/index.html","9db1b27c7447729a396fe607d20a3a52"],["/tags/mysql-数据类型/index.html","df45aff2441c7bba7da8c4ef9bf2ba77"],["/tags/mysql/index.html","3dfba0f803e4a8fdcdf993607101b456"],["/tags/typora/index.html","69246d423f978a0d74476009f13cfd65"],["/tags/享元模式/index.html","58ac80fcfc24bffbf83d31af18420ee8"],["/tags/代理模式/index.html","3d3e6d10bc043c044b30f88b6c8fedaa"],["/tags/分布式/index.html","2786582304d9c939b054443af6c023eb"],["/tags/前端/index.html","4276fa756c9bb85781a8c6fac18b8006"],["/tags/后端/index.html","e12156be4c31f17622cba3e2937e3926"],["/tags/外观模式/index.html","af589577100c615e3aafa8d28d4db203"],["/tags/工厂方法/index.html","611985be4494b1d215e8dc37da701b56"],["/tags/抽象工厂/index.html","34fb6557c3f040b381e4fa5162fb2a56"],["/tags/排序/index.html","3d261376b77b71d8165da7a6dc525ea5"],["/tags/数据库/index.html","5d561bc0882cb2f77eb38d74753c8f5c"],["/tags/查找/index.html","bc2ca20d171ae01fada12b24e43dec51"],["/tags/桥接模式/index.html","85a09cf9176d86236d6b0703b10cc920"],["/tags/模板方法模式/index.html","6658bf055956f6ab32a21fd780349c34"],["/tags/版本控制/index.html","4d567e625da1118968c71dad92c6127b"],["/tags/策略模式/index.html","c8a3bffadc0cc5909105f5a04f64a9ad"],["/tags/简单工厂/index.html","4230dda4fbd0908ff34aeb583f68f4f2"],["/tags/算法/index.html","66eea3bd646b19c1732052a95fe8e9a8"],["/tags/算法/page/2/index.html","1ce566aeb2cf560e7a31ff95e73621f2"],["/tags/观察者模式/index.html","428c56e17ee229be6ac06e93958121d4"],["/tags/设计模式/index.html","55fbc2fb6b9a7ab967c5ba45320c2600"],["/tags/设计模式/page/2/index.html","33e64cc673a73919410c05c488989b9d"],["/tags/责任链模式/index.html","602b9174088168ffbb90474cb58f1ec1"],["/tags/适配器模式/index.html","8d2215e6c8085b5466f1dcc79ec679f1"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
