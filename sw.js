/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","b9cb14c3e356849fc918c4424b51d9c4"],["/2021/02/22/博客的搭建/index.html","bc307b799c22f368194c3486e88b4504"],["/2021/02/23/如何使用markdown/index.html","ed45e30f38d1208fe7026bf3ad0d2468"],["/2021/02/24/mysql命令大全/index.html","50a0f928ae5f9ae16a4fd3185cb81b41"],["/2021/02/24/mysql数据类型/index.html","a9b546d77e3caafc9b90b3be3c9b3be3"],["/2021/02/25/Git的介绍与简单使用/index.html","f3b271107324698983b2e6e7290d943e"],["/2021/02/27/简单工厂模式/index.html","505eed66325b6496e7e8e110818aca2d"],["/2021/03/01/工厂方法模式/index.html","955d06ea47444f60c65858745ec893d2"],["/2021/03/02/抽象工厂模式/index.html","31134da23cd820b9bbe96abb34f775e8"],["/2021/03/03/单例模式/index.html","3a9517e2683a12bd96a9aa10666bd30d"],["/2021/03/04/观察者模式/index.html","90619b32dc896c66813254cd33a531d3"],["/2021/03/05/适配器模式/index.html","bc828c645c90d971e042f3ce545a6e65"],["/2021/03/06/模板方法模式/index.html","f1edc97a6c92bf2bafc973dea5f7d8cf"],["/2021/03/07/责任链模式/index.html","1fa4c3b3be8636806910f89fc7c92f07"],["/2021/03/09/代理模式/index.html","b26082ce010df727d2bf88dd4123ac65"],["/2021/03/11/享元模式/index.html","2fbf5aae3a79f0a7b9171699e5ad707a"],["/2021/03/12/外观模式/index.html","acfc0949647c4f7bb355475c5727f680"],["/2021/03/13/策略模式/index.html","7a286c04669e8d47f06434bfaadc7756"],["/2021/03/14/桥接/index.html","6f86b42ec4ab3c79bd84db05acc43f63"],["/2021/03/15/LeetCode-多数元素/index.html","9a6c0f5f5db1692116804cdb4b331106"],["/2021/03/16/LeetCode之汉明距离/index.html","b192b05e33ad3846730959839b89621e"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","ce28ea10c786a1d904d016b25af5fd7e"],["/2021/03/18/LeetCode之两数之和/index.html","4262eaf75bdf36fa8ffdb0c87f28fec0"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","ae170e0d0afc64681eb0ec3e638cc80b"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","d058f2977cd18d340eb5d397c1131265"],["/2021/03/21/LeetCode之有效的括号/index.html","c11aa8ffe6901d21be710873b7002784"],["/2021/03/22/LeetCode之移动零/index.html","9db4b50f7fa50db6c07213c5a8293a4b"],["/2021/03/23/LeetCode之爬楼梯/index.html","1e9b3d7578ae282f66113dffd8180541"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","df07567f0e8f9a4dc310565a73566200"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","b842d97700fc5e5ab67d7739b54064fd"],["/2021/03/26/LeetCode之最大子序和/index.html","d55159c9e797e0e5034f6622f10a853e"],["/2021/03/27/LeetCode之子集/index.html","6b3bfcd2c5c713c32ea03e9271dea854"],["/2021/03/28/LeetCode之合并二叉树/index.html","a5c12c889923eab13c441b3143a08e64"],["/2021/03/29/LeetCode之翻转二叉树/index.html","d4f69bec6e754867c465321644aa9214"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","ea1687a5f1aa741addc0a48f39ca3eb3"],["/2021/03/31/LeetCode之翻转链表/index.html","ebf5881e60c14bf8a7c6d4fcb65fe4c9"],["/2021/04/01/LeetCode之相交链表/index.html","5983ae56d5b60f947b787f32e33ba7af"],["/2021/04/02/LeetCode之最小栈/index.html","aa6a586a9dc96a996f680dff621b3f8d"],["/2021/04/03/LeetCode之对称二叉树/index.html","e499c49a2298d70748edb26e076e2694"],["/2021/04/04/LeetCode之环形链表/index.html","3c878225553dd86ba6f2a0b2bc05092d"],["/2021/04/05/LeetCode之二叉树的直径/index.html","d5906d6640e5e344d7b2dfabc9141fcf"],["/2021/04/06/LeetCode之回文链表/index.html","417541f563a5c27dd2c50e2196fb09a9"],["/2021/04/07/LeetCode之比特位计数/index.html","1cc380d5b4efe882a60ee85893d74b6a"],["/2021/04/08/LeetCode之全排列/index.html","d1269311ab9f839fc5c55949a533243c"],["/2021/04/09/LeetCode之括号的生成/index.html","0f70172b64d7460fffd4fcc541e94d2a"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","7835a1e35d8838c39c5e60111e471817"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","59c97357b970cd1ce5bcbc397a3e2ab3"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","27f0cf32919a8ff89f6234a684cfc1ab"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","668fc33a0897dcb185d9870935671e3f"],["/2021/04/14/Mybatis/index.html","ab837ee532cec4c4503087b481901e5d"],["/2021/04/15/Spring-1/index.html","f89de7116ca12dc5a4c878f5b9e8c86d"],["/2021/04/25/Spring-2/index.html","df3177f28b9cb94177967cf5e9e964f2"],["/2021/04/27/SpringMVC-1/index.html","b2fbcd475c9421ef1303aef2da7768fa"],["/2021/04/29/SpringMVC-2/index.html","0fa4485f9dd8920ba638f09702f3d3da"],["/2021/05/03/冒泡排序/index.html","e86b472e57f393c4a37b4bc149efa124"],["/2021/05/08/选择排序/index.html","6dd5ceb2568fb4933d366095e3f8ab6c"],["/2021/05/12/插入排序/index.html","825803981f6269ae319437bc2f2c6c7e"],["/2021/05/15/快速排序/index.html","0cd16a803c39c1e6bc295717c8683196"],["/2021/05/19/基数排序/index.html","ea7948cce3280f99623d7e8ace61d292"],["/2021/05/20/哈希排序/index.html","f2ab3b6d9cbf862fa1432653d57f2465"],["/2021/05/21/归并排序/index.html","40a39e4283c6b07002a9f6d2449cb671"],["/2021/05/22/二分查找/index.html","4c807d906a5d3c1b86a6b2e7ef84795d"],["/2021/05/26/差值查找/index.html","9ab3deb699400ee5d3af6b4b096aec8b"],["/2022/01/12/高精度大整数计算/index.html","7138b086a4fa02c362c892469a09148f"],["/2022/01/22/前缀和/index.html","389bdbe57407fc87e8ef2befca6b6551"],["/2022/01/23/差分/index.html","31ee86fb069ac4241469aa2bb7e0684a"],["/2022/04/04/MyBatisPlus/index.html","3c364e1a088cbf3d2d88e9f709b83dc5"],["/2022/08/17/jQuery/index.html","df6cc90927d5dbfe92c9e3889c89e8cd"],["/2022/08/19/JavaScript/index.html","99018d39a6506d811a64100d4c48e727"],["/2022/08/22/Ajax/index.html","86f9dc8c3a1e03f75a1db1a543e5ccc1"],["/2022/08/23/Promise/index.html","4a9a9b3a0f45bdfc154226cbf50e36c1"],["/2022/08/24/Axios/index.html","f8257cd49093c1f0b7adc172b661bbac"],["/404.html","c08ff55c63eeedc90380deb0b46a25bf"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","264fc62cfe80417f7dc577bf11340c9f"],["/archives/2021/02/index.html","d0224d92f385a3aaf1cd23b22fb271ae"],["/archives/2021/03/index.html","f52feea26af6760c17af2ecf7d9b125d"],["/archives/2021/03/page/2/index.html","af451ac7ede222236923eaeee951ceaf"],["/archives/2021/03/page/3/index.html","1700ab10f745516d384f2a044938bfc0"],["/archives/2021/04/index.html","635a6eebeaea4c66a8ca0c6732dc7fc5"],["/archives/2021/04/page/2/index.html","3b51d1e1aadee76aa61df08186a671ad"],["/archives/2021/05/index.html","913af2670f714b87eae212ababbac8d4"],["/archives/2021/index.html","111c416dac2c58e601de1fa94228ed29"],["/archives/2021/page/2/index.html","50062959c0f8870ba6090040ff9e84cf"],["/archives/2021/page/3/index.html","32729b030e369dd1bb8f163acdbb97a6"],["/archives/2021/page/4/index.html","007cb3bb872510cf7cdcffab16faf408"],["/archives/2021/page/5/index.html","b6f111699f826e10ea2231a2a2beaead"],["/archives/2021/page/6/index.html","0fa677152516a9cf9df9741c87a0f4ec"],["/archives/2021/page/7/index.html","0c047c6827ce78a7a43c391c3a34ac7d"],["/archives/2022/01/index.html","306e94b9d2ccff84ecbf837a78b35f89"],["/archives/2022/04/index.html","7d1b4c35f0c8a804475f7d6e9b630b96"],["/archives/2022/08/index.html","88d7ef96df19567be4200195eb1544c4"],["/archives/2022/index.html","a3b2a7478c8bf90e70e6e34eee64e174"],["/archives/index.html","9b252a75e5ab5125e4f570d51de4e5b3"],["/archives/page/2/index.html","65cdff8e50ee9ed934ca48e9b707aa4b"],["/archives/page/3/index.html","44903ef3155d0e4e5db61ae6900816a0"],["/archives/page/4/index.html","d18937ff04508f873ea737072c661707"],["/archives/page/5/index.html","a5ff4d4c0bb196ccc01e1cc46cb2dea4"],["/archives/page/6/index.html","1909a010ffc31c4d460453df0e01f487"],["/archives/page/7/index.html","d24caa5d72e7a7cda786fa7c7df1e3bc"],["/archives/page/8/index.html","4cbd5cdfaeed118ea901195e45550fe1"],["/categories/LeetCode/index.html","0d3cb341d6e1081177a27873cfc6d0d2"],["/categories/LeetCode/page/2/index.html","68297e312c01a24243b7222c1ce270d5"],["/categories/LeetCode/page/3/index.html","8f9815e3251c1da0a153a03699479e2a"],["/categories/SSM/index.html","22246cc973fca4002cd7cdc09607307c"],["/categories/index.html","3e17d5d45ef1d35e9af1d88f48ad3771"],["/categories/前端/index.html","c6a632a3e7b1f628c88095de831406fd"],["/categories/博客/index.html","d30d4e435ff185bb860e6aaf782d72fe"],["/categories/学习路线/index.html","3678b8b60202d4328b4e7039694d0152"],["/categories/工具/index.html","1088cf5f03599577717c1adef451f69e"],["/categories/数据库/index.html","d45d92205dbd60d58b15efd16d46d8cf"],["/categories/笔记/index.html","d0653c3d9ae0b4b7f42e0212f3d8a265"],["/categories/算法/index.html","c57006db97376ceccf1aebc6bf4309dd"],["/categories/算法/page/2/index.html","c87d056cac5f20141e5fac456089072c"],["/categories/设计模式/index.html","de395089e92ca256bf03ecb3fb0d522f"],["/categories/设计模式/page/2/index.html","73c64f8add6d81bfb7ff378cbc025020"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","214ff39f10b2458b32961456cf1fc209"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","8ca14f8ec84b69a36afb226ae7fe3d97"],["/messageboard/index.html","554f1d18cd4bfe32bdcbb55f5dea1167"],["/page/2/index.html","cb097286d46c36b6040a83df9e64499f"],["/page/3/index.html","97a93000dcfae3304d94f4fd512a6b85"],["/page/4/index.html","50ae547c007f6b539128f2b42794b0e2"],["/page/5/index.html","4f0d78d99efd43a27d35070c6e5ae893"],["/page/6/index.html","715e7414d170f995bc1526b636ade04d"],["/page/7/index.html","cc86d8597eda3d4734c93d540cce74fb"],["/page/8/index.html","72f22bdfda2aff809fb2b19b3b08b75d"],["/sw-register.js","5ff43b95081feddebdac05529a862496"],["/tags/Ajax/index.html","6ae88cdc3c740234e081828498e3e111"],["/tags/Axios/index.html","7cb0e422cfda3f26f851e964c0539d88"],["/tags/JavaScript/index.html","b1f42c22e6b79624d4526f9d06ba60ae"],["/tags/LeetCode/index.html","bb6398b1c0cfdf5a6ddbf7a0ec71f2e8"],["/tags/LeetCode/page/2/index.html","c478ff670196b73d6df171b8de26a16d"],["/tags/LeetCode/page/3/index.html","6e97c35ea790f0b938164c35f5880cff"],["/tags/Mybatis/index.html","862242088b4d94391a3f71c0443eb4bc"],["/tags/MybatisPlus/index.html","f81c8a6caa8f32b256cef2047e34c6af"],["/tags/Promise/index.html","29ece85048d14162de4e0b9004414126"],["/tags/SSM/index.html","875764ae8f36c26acdccd6a964337866"],["/tags/Spring/index.html","e4c6729352c3d89c8c0fc61af0dfde6e"],["/tags/SpringMVC/index.html","cbee8f1699411eff7def047616c4f2d2"],["/tags/butterfly/index.html","f86a36a2489f1692b1e7bdbdf267419d"],["/tags/git/index.html","0ea3b8fe527beddef3e4a2591fa1255c"],["/tags/hexo/index.html","1e53f6eefe365db0cf41598f3452dddc"],["/tags/index.html","ea50cb31a9545974e5082a83bad09f18"],["/tags/jQuery/index.html","7cfb190c062cec11ca62fa26602cb40f"],["/tags/java/index.html","a25ef380790151e8f99ff6fa80e39894"],["/tags/markdown/index.html","b926ecd96128e164cc3cfc2401013080"],["/tags/mysql-数据类型/index.html","2ebcd0daf5e6ac77abc2dbe148978b1b"],["/tags/mysql/index.html","5e2171e8618f484cdabe8e97fec96cbe"],["/tags/typora/index.html","d64b97abb9708d788df2a92a32d5579d"],["/tags/享元模式/index.html","74ed962309ebb297ada030308a8e91c2"],["/tags/代理模式/index.html","ff7814d6dd7b249b02a431c98e61fa8e"],["/tags/分布式/index.html","6fc9ec43732dbb8d610c9009196cd020"],["/tags/前端/index.html","9cb399703bf6b133fa2ea5ba7c49915d"],["/tags/后端/index.html","203c135378a382b927228a3dd7727aa0"],["/tags/外观模式/index.html","fca7b6d908ac8a46954ed1d8798d8e09"],["/tags/工厂方法/index.html","c9541154b9817b078043a734b6689773"],["/tags/抽象工厂/index.html","72ba20078d4352957f4816f0667b0992"],["/tags/排序/index.html","eb799bf6af13b39eef992e18c7172308"],["/tags/数据库/index.html","efe71fd680968ba51e1d915e1037de8f"],["/tags/查找/index.html","ab1aedc196b2c34d3fe9045c58f1e7ac"],["/tags/桥接模式/index.html","28ca1ff5bd4dbc63dab32f98f5c459cf"],["/tags/模板方法模式/index.html","f695e2f9a00041bf81da658aea2addf5"],["/tags/版本控制/index.html","9b89c179a43cb2f4cfbb9b235e5eaefb"],["/tags/策略模式/index.html","526c6710001df0e8d24bb35373e55709"],["/tags/简单工厂/index.html","5264d60ed0905badac635912e03f924e"],["/tags/算法/index.html","cba8679f7b029eea01dae50f0b346fd8"],["/tags/算法/page/2/index.html","85b6d912e2846ec4e63ed420b0af805c"],["/tags/观察者模式/index.html","f0ed6d671e4578cfe7f76fc8c0edebd0"],["/tags/设计模式/index.html","8bc964bc8e457669a0b323895b3a1414"],["/tags/设计模式/page/2/index.html","699549ec926e0e596d354b7f42a29917"],["/tags/责任链模式/index.html","c21517a2938fd14878bead4eda202822"],["/tags/适配器模式/index.html","59e7e10fa2e205db269f16ab80c6f5c0"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
