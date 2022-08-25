/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","9f668c2790d67d1e0bf805a70803cb94"],["/2021/02/22/博客的搭建/index.html","982c6a8cd8078f7dbd681736689dc8a6"],["/2021/02/23/如何使用markdown/index.html","d8c76c73fcf77efa33914505cbc45255"],["/2021/02/24/mysql命令大全/index.html","eabefeb78f5726070618ba24d3d9cf5e"],["/2021/02/24/mysql数据类型/index.html","18db7b76e75a0bceab17722aef994b6e"],["/2021/02/25/Git的介绍与简单使用/index.html","adde945c15d1329eab8e06893e093271"],["/2021/02/27/简单工厂模式/index.html","ee4a2b7fa6fe93fb47176ed92acfae17"],["/2021/03/01/工厂方法模式/index.html","989ed13835a89ea1625dabf2d32b366c"],["/2021/03/02/抽象工厂模式/index.html","68bde6c4bdbeb539309e1245e0372619"],["/2021/03/03/单例模式/index.html","ebe8f9dc28691583a0d8bda3246c4217"],["/2021/03/04/观察者模式/index.html","71b3a004e1b642fbbb7bd11624419e63"],["/2021/03/05/适配器模式/index.html","8bee3233a54c606d624243cef5885878"],["/2021/03/06/模板方法模式/index.html","1dac2bd784d791c1c60132ca398c8c04"],["/2021/03/07/责任链模式/index.html","beb473cf51a4970ce6243d053c19ef4c"],["/2021/03/09/代理模式/index.html","10439ad3cb6430b4ca01bd9a57f82c5b"],["/2021/03/11/享元模式/index.html","8ea44eed3097d65af53e3dad89c0844f"],["/2021/03/12/外观模式/index.html","43218aa0a80b097825b8cae73dc91fff"],["/2021/03/13/策略模式/index.html","05336e5b0e6a9ee6260f21e39daa04dc"],["/2021/03/14/桥接/index.html","b1714e10e3dbde51bd58f454781cc372"],["/2021/03/15/LeetCode-多数元素/index.html","3fe8fd0f417bb2515af8031d0c2524e2"],["/2021/03/16/LeetCode之汉明距离/index.html","0829a2c226849e82ae9eed13bb5f53fc"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","53c1e4cef3cdf5ced8369b445ada9641"],["/2021/03/18/LeetCode之两数之和/index.html","3248c26fb23ca7f7361ef0684e1777a4"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","4c1c6e8834550ab5b268de83c8b5dbcd"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","4a831f3a07d248c4cf0027697446ca24"],["/2021/03/21/LeetCode之有效的括号/index.html","27a192d23e893b1bc80ec786dce484df"],["/2021/03/22/LeetCode之移动零/index.html","fcc5a1364077a0e4e4949655ab24b719"],["/2021/03/23/LeetCode之爬楼梯/index.html","ac0dc8483845f3b2c916cf4263328e31"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","438d7d63d37a5c53c4bf3a06e9966d5e"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","282c2ecb5656a3590a6d070577d3f752"],["/2021/03/26/LeetCode之最大子序和/index.html","3d22fe4aa24363cc71aa75d981186d10"],["/2021/03/27/LeetCode之子集/index.html","4168afe12308b06c39bd5f4908d0220e"],["/2021/03/28/LeetCode之合并二叉树/index.html","1c21e03b4e04ef8bdc6027baa6eda96f"],["/2021/03/29/LeetCode之翻转二叉树/index.html","11aa7be8691ab86d428c0444d4b79549"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","c022c61b10b2f1dbbdd54ed91f06cf43"],["/2021/03/31/LeetCode之翻转链表/index.html","97926fa09a7bcf729d9ac3c4346417da"],["/2021/04/01/LeetCode之相交链表/index.html","273293b129733964a7ae84bd7c344011"],["/2021/04/02/LeetCode之最小栈/index.html","14c647851b59a877581befa4da29a24c"],["/2021/04/03/LeetCode之对称二叉树/index.html","cc32334e7fc73adb3de9d357a6c38183"],["/2021/04/04/LeetCode之环形链表/index.html","6c7ac7f763a18a5fe242c25aab945d47"],["/2021/04/05/LeetCode之二叉树的直径/index.html","42fe26e1f6dc84e2b281462f91f9b437"],["/2021/04/06/LeetCode之回文链表/index.html","75ac581d1301c21bb2020b542485ba31"],["/2021/04/07/LeetCode之比特位计数/index.html","10a0f11178e49c0bd6ef938267f1c0b7"],["/2021/04/08/LeetCode之全排列/index.html","c379896d451077efa87aa2638e214259"],["/2021/04/09/LeetCode之括号的生成/index.html","26d0e9e03959b9e3ea7b84ec6018ed89"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","8c78bd7e70988fc0197e6b2050a7f540"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","35e25dffe828364bc556b585d7aaf613"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","720f3ede5f5150bba9b8ff8e9b35af33"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","62dbef80dfe5fcbb3f97eb61692dc992"],["/2021/04/14/Mybatis/index.html","98123e4e4968aadadd61f4dabeef640a"],["/2021/04/15/Spring-1/index.html","b42b6b0de62d654ee398822b3a4d027d"],["/2021/04/25/Spring-2/index.html","6ba282d46685ef308faa22904e16f35e"],["/2021/04/27/SpringMVC-1/index.html","a87385c6532727cdde18c9454ec8ebde"],["/2021/04/29/SpringMVC-2/index.html","54508a98fc1c24ad3d0fa5ff5c68b33e"],["/2021/05/03/冒泡排序/index.html","f733b8d3afff2fead2662074c325b834"],["/2021/05/08/选择排序/index.html","278b546495abccd2e28e91c4c5cdb3dd"],["/2021/05/12/插入排序/index.html","f9edd835dff8ba8056ea987b918e35ce"],["/2021/05/15/快速排序/index.html","a71a072e8f3fb2e3c81bdcd1544f91a7"],["/2021/05/19/基数排序/index.html","4a8542b363a11e9f09371b8ed8fd25cc"],["/2021/05/20/哈希排序/index.html","26578bbdee9583e9e39dedfeb4b5b193"],["/2021/05/21/归并排序/index.html","953c65a35d9a9c36f968a80712e3aaba"],["/2021/05/22/二分查找/index.html","81f38ae53819a14ef44648c7afae30c6"],["/2021/05/26/差值查找/index.html","8bc898fc1dbe4caebbe38ea79ba96e32"],["/2022/01/12/高精度大整数计算/index.html","7e38c8edc8ee041a7f0b37b04104a6d5"],["/2022/01/22/前缀和/index.html","f447e916045e23a536e494a13985da84"],["/2022/01/23/差分/index.html","dddb4f270cee7380f7e4a5b39a71aa8e"],["/2022/04/04/MyBatisPlus/index.html","0fbd6ae6b4aeaee97638ed06f2b72c25"],["/2022/08/17/jQuery/index.html","9b38e57aa21deda5a07d7ed4d3d52ca6"],["/2022/08/19/JavaScript/index.html","39a9326d8717e5b12dfc2a3c49ebdc43"],["/2022/08/22/Ajax/index.html","3a771381463f867daf451d2a1aee5838"],["/2022/08/23/Promise/index.html","e406ed569a9724a8024fdcafeb86fb5c"],["/2022/08/24/Axios/index.html","c8fb3eee8894faf756b913dcf9ff1022"],["/2022/08/25/H5本地存储/index.html","a96ce1ad83814376a3559ee8c11ec97d"],["/404.html","fc3c2bb5da0d9a07a575d4ed168f3b2c"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","e25612fec6b69e033b9dc560ea3b999e"],["/archives/2021/02/index.html","94b2e84f9d9ef1bc1b95fca7e4e07bbb"],["/archives/2021/03/index.html","36bf1353ffe9e2d2ce0710e1597e8a82"],["/archives/2021/03/page/2/index.html","7cc0c9bd2436e80d7d13ef5ba9384d98"],["/archives/2021/03/page/3/index.html","362e0152f8792d0e470ddef17e14fc43"],["/archives/2021/04/index.html","440ee218b2fbc8de010ba478a3c62e69"],["/archives/2021/04/page/2/index.html","362e464fead3157e7b1de46893d1717b"],["/archives/2021/05/index.html","5083a30827fd768a02e314764ff92ac8"],["/archives/2021/index.html","42a840491417d46b488a126243a7723c"],["/archives/2021/page/2/index.html","6c1193332ff4f332fe7076dbc9de02d9"],["/archives/2021/page/3/index.html","b27dc1021c9a7803bf0eda11bdc7eabe"],["/archives/2021/page/4/index.html","d7bd90d0f12b7912c0645b9cdd68ed37"],["/archives/2021/page/5/index.html","42042c9afa38def4c4d8b7a985bf8585"],["/archives/2021/page/6/index.html","81f672372a38ecba808d8346562bbcac"],["/archives/2021/page/7/index.html","0d97759e795f950eb8eec2cd7ea86dec"],["/archives/2022/01/index.html","6bc41dc6288dbf15449e6b8423786726"],["/archives/2022/04/index.html","507bff896fb27cc566c319f1894ef36b"],["/archives/2022/08/index.html","3634b237c5b298c6b93b8aaf4f378eb4"],["/archives/2022/index.html","a47f6d835390bbf1fa8ee99101f0a9dc"],["/archives/index.html","6671fcfeb3d7f71d455004a927a3777c"],["/archives/page/2/index.html","d58c19ead16f2286d1318599c4a7da55"],["/archives/page/3/index.html","2ecc30105cb8e253943015d4b368aa4e"],["/archives/page/4/index.html","ad66a92810df05d2f0f4c09a3f5eec1a"],["/archives/page/5/index.html","e71ab3061d20689884e78016d3423e6c"],["/archives/page/6/index.html","1a22cb4d1bb6f7f136ed86f7bcf0c7a5"],["/archives/page/7/index.html","647372af912c80506820bab6fbe4a8f5"],["/archives/page/8/index.html","f2c6976a05a6da805de73d9b97492687"],["/categories/LeetCode/index.html","0a92f6aa6bb731aa2ef388c5f001ad50"],["/categories/LeetCode/page/2/index.html","0427555259358bcd16c2e8426e617d16"],["/categories/LeetCode/page/3/index.html","3afe189affa592403f9712c9ffcb5a19"],["/categories/SSM/index.html","afcb8fac921cd49bc755c902e95e4560"],["/categories/index.html","7b25f6b36324829118b80a2c633ffce9"],["/categories/前端/index.html","5690016487fcd4d2334aaee7a70fd960"],["/categories/博客/index.html","8cbcb6802adedc65da127552ef132eac"],["/categories/学习路线/index.html","d8b3a8a103af1eb902256795c14b0499"],["/categories/工具/index.html","655902cab87b79bb60a010e8520fe9af"],["/categories/数据库/index.html","8b17ce09d05db5ffc5d0ce18fb3d8160"],["/categories/笔记/index.html","c3f5f5f6333cbdfa134247f8f68563f5"],["/categories/算法/index.html","9d16f3fa76622e5a3d6e751988ed2458"],["/categories/算法/page/2/index.html","2f4e58318d6c9e095a3222a9e4baa5cd"],["/categories/设计模式/index.html","9eec0adfd98313e4f13e585dadb14a83"],["/categories/设计模式/page/2/index.html","bb46cd76c5aac11aec9dc7f4b1b10412"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","d894b4476b38ac025a0a1f0215ddff56"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","54f4cb67c0bf9cd85d755283d3051b3b"],["/messageboard/index.html","689ad8248f1d3487ac3c1f3f25fe4501"],["/page/2/index.html","8120b577b521220f4d05d5f2a2c21b7d"],["/page/3/index.html","a6ea839571949498b5010e814ea7ede6"],["/page/4/index.html","4f979ebaf278eabb8ac8b150aa9fc96c"],["/page/5/index.html","45ac22143e4e4fe5cdc0d09d9c4f00b1"],["/page/6/index.html","a6b57c07345ada32fb9ef1182b2fc464"],["/page/7/index.html","f31d0f8ee47cd30fc18776c0c8812cf9"],["/page/8/index.html","04816137396e6897dd75f64041a3c7a6"],["/sw-register.js","5215beb48bea3c6286db182631a311c7"],["/tags/Ajax/index.html","722ed470cf26321286603b62e2ae3e27"],["/tags/Axios/index.html","0fddbd940873913fd258daf1105d19fe"],["/tags/H5/index.html","437bc9691057d3d3e6ca974ea2f1881c"],["/tags/JavaScript/index.html","a827bce5cbb048e17b0c67c5d9f18dbc"],["/tags/LeetCode/index.html","26374a6433dbbf5076f629ea044dce0c"],["/tags/LeetCode/page/2/index.html","6e656e25e53c2f6b4eb8f7d120092f94"],["/tags/LeetCode/page/3/index.html","86e305ebb8cd6432515d74f705a6903b"],["/tags/Mybatis/index.html","237c742d336062fc200fa6339f71118d"],["/tags/MybatisPlus/index.html","5ccc04685e4e70cb44335a8f2387c187"],["/tags/Promise/index.html","09ec66a4560c9c153af5d070268a3a51"],["/tags/SSM/index.html","de009bb78f100ef5777bbab3c69fa8b1"],["/tags/Spring/index.html","4b18bc07a8af275a40def06a81a49605"],["/tags/SpringMVC/index.html","5987b20361a7c63b011fced04cd3040d"],["/tags/butterfly/index.html","b8f4dd2ae0b05f6d045a5f3214bee24b"],["/tags/git/index.html","901bba57c7dd3a06f22a60247774d158"],["/tags/hexo/index.html","2bcfd0ff1d1fe6bc0b7216efa21d3ee0"],["/tags/index.html","7e0bdef9664853aa6e971ba09baaa5c4"],["/tags/jQuery/index.html","3c867604aa67f9fcfb20e517035c4d8c"],["/tags/java/index.html","53d2d6f12090c0ae139230a57d08865a"],["/tags/markdown/index.html","0326b1c915b23db9e3e1448edb8d82b3"],["/tags/mysql-数据类型/index.html","e3b97f2c1c937a7febbe9d5a63a4aeb9"],["/tags/mysql/index.html","70c4c0af3fdf5c6b2104ee29b20c06aa"],["/tags/typora/index.html","1dd463bf8871602fad10274e09807154"],["/tags/享元模式/index.html","83464eb4c755421e6fb492d11a65f8c7"],["/tags/代理模式/index.html","6337829966b00ae1555a0a55680c6bfa"],["/tags/分布式/index.html","ad63aa95f46455a4ecf6df105ee197cb"],["/tags/前端/index.html","2b786221cc2e8f0fd00ac45b04bf343f"],["/tags/后端/index.html","357282e0362d3562bf6cf1e233e93502"],["/tags/外观模式/index.html","69964070c08fb36fd0e6dec3cc61697c"],["/tags/工厂方法/index.html","6587abb44c26d07d590f65c34f34d91b"],["/tags/抽象工厂/index.html","5b6be9142225ed5a0572e6113a636128"],["/tags/排序/index.html","e7d9f027349b723e6dd2986e00faf7a5"],["/tags/数据库/index.html","712331d3a4fb045325597e46b9b15521"],["/tags/查找/index.html","35a966e7d2c5448e11d7a5c8a87ab1ea"],["/tags/桥接模式/index.html","334a9c84e567a8c831d80747e1850fad"],["/tags/模板方法模式/index.html","2015f73a659a87db263876455cc95e97"],["/tags/版本控制/index.html","b68cd7b5942a3693a997c7e4a6fe50c8"],["/tags/策略模式/index.html","e3a8a92088a1f14e7afb914d749dd9cb"],["/tags/简单工厂/index.html","6d20eb6fd9b9e3e4c7e8c80a01cf524a"],["/tags/算法/index.html","abc40bb09ed250943e214b61248b9728"],["/tags/算法/page/2/index.html","fa58d3f645660dc4945add1efbe89731"],["/tags/观察者模式/index.html","f52ef1adce884d15ff458b83deeca2b2"],["/tags/设计模式/index.html","c7c14a565c9154dc8823bf0cfe9fec1f"],["/tags/设计模式/page/2/index.html","d40c2140f7b9f6d6ac361036b8a17872"],["/tags/责任链模式/index.html","1a52e48c963bb22f86e07c4405ef80de"],["/tags/适配器模式/index.html","b4d2c5dbcca3369bbfec037594d2c67f"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
