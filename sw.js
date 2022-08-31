/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","ca7467e133cc7a7582dcc29164ac7024"],["/2021/02/22/博客的搭建/index.html","79a8280ffea6725bca2c84919f5cf17c"],["/2021/02/23/如何使用markdown/index.html","16d2e02637c7f7cc3327ddddc62e2665"],["/2021/02/24/mysql命令大全/index.html","2fda5b1ddd9a54c539994fe7e4cf2108"],["/2021/02/24/mysql数据类型/index.html","7be4a661a8b70d06e1e091e4a3d5fc7c"],["/2021/02/25/Git的介绍与简单使用/index.html","798b70f7c0b58d3b327c80b95fd9fa5f"],["/2021/02/27/简单工厂模式/index.html","a03e09b23c0ee22f428596025f27551d"],["/2021/03/01/工厂方法模式/index.html","b093c6ad1885b63ff840d8999eaf053e"],["/2021/03/02/抽象工厂模式/index.html","0080c20a5e48b1667d4dba1088e889af"],["/2021/03/03/单例模式/index.html","e3beba01af97d56d843534d286925450"],["/2021/03/04/观察者模式/index.html","1bdfca836c47185e4d16951b2491a4cf"],["/2021/03/05/适配器模式/index.html","46f3165b916f9ab74c813e3e837393f9"],["/2021/03/06/模板方法模式/index.html","d47f02131ebeebfd5a7dccf06c383541"],["/2021/03/07/责任链模式/index.html","8351970563a16df120c44f6d53fb9596"],["/2021/03/09/代理模式/index.html","7fdd70b5b17ca7fea095f336764666d6"],["/2021/03/11/享元模式/index.html","9aa11c6297ad2c22b003a0aa77b1c08b"],["/2021/03/12/外观模式/index.html","311b7e1d06192ebe80e1e47b48cae7eb"],["/2021/03/13/策略模式/index.html","1d6a5f0b088c8bd2bb74d83ea1d6a5d1"],["/2021/03/14/桥接/index.html","5dc28edcdea8c9f64701a5ae10082280"],["/2021/03/15/LeetCode-多数元素/index.html","77d00adf5076c90ae682325eb0ec86ad"],["/2021/03/16/LeetCode之汉明距离/index.html","f5a124ae1233d08dfa1a9dd84c583906"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","28e78f198edd07ce91b922d382839403"],["/2021/03/18/LeetCode之两数之和/index.html","c46f1ea1ccf532ee883ea9596a65566b"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","859408756f53956d43b24f0c1ba2f7cf"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","13d77ef112cf2918a916a9e5c3e19a84"],["/2021/03/21/LeetCode之有效的括号/index.html","22535032084a9a9fdb51319e1cb3d3e8"],["/2021/03/22/LeetCode之移动零/index.html","31ffc9b5a14cc07e0a35161770e71e1c"],["/2021/03/23/LeetCode之爬楼梯/index.html","09bdf2d6e9b80570309f808441d7f12a"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","7bd453ea8e4e3a388206347f3a850b14"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","d2f54d404dcb52ea50136dec72ea72a5"],["/2021/03/26/LeetCode之最大子序和/index.html","8402565d22895c8a66acdad4c0d59a33"],["/2021/03/27/LeetCode之子集/index.html","0446d229e4b11398f3c840bbcd16ca06"],["/2021/03/28/LeetCode之合并二叉树/index.html","cfad8246c6960e50d7decf5bc5edc3b8"],["/2021/03/29/LeetCode之翻转二叉树/index.html","2e6145ab5f9bcd34e2e04ef1d174cbb0"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","478747f7efdc7a144a519d85d3cac488"],["/2021/03/31/LeetCode之翻转链表/index.html","f9fbbeb84063ff81eba4d298458206f9"],["/2021/04/01/LeetCode之相交链表/index.html","fd3b7d1f3041fd9b0c0709d4c0706b30"],["/2021/04/02/LeetCode之最小栈/index.html","1c9205feebe4c632e9170363a12e172f"],["/2021/04/03/LeetCode之对称二叉树/index.html","b85a82309fdfe8e971e86a3e64ef66c8"],["/2021/04/04/LeetCode之环形链表/index.html","9aae3dec6ba1b6edb70ee6710b2d4985"],["/2021/04/05/LeetCode之二叉树的直径/index.html","5da1db5f4d6f12957599778f103742d3"],["/2021/04/06/LeetCode之回文链表/index.html","95abe49cec3d16cd4c5863290ccc64c2"],["/2021/04/07/LeetCode之比特位计数/index.html","7166f0ccccb4f96be18d8f4adb14efe7"],["/2021/04/08/LeetCode之全排列/index.html","8b3f0eddf8979f65895f1caa91ad72eb"],["/2021/04/09/LeetCode之括号的生成/index.html","3b41622b1efdd663bd76604a22b64afa"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","67fde11b501d636d0ef495005060c07c"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","626745c84b2bb839a66ca4b507c9cb11"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","69edab2ab02702a31ee30bec4cc47c99"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","e46e1255c145361e64711c561bd57d7a"],["/2021/04/14/Mybatis/index.html","418844be242dc042fd00e62c58fae7ee"],["/2021/04/15/Spring-1/index.html","c05fa83348e66060f9a9e79a7d32b537"],["/2021/04/25/Spring-2/index.html","b37eeca1631365ae642528210ea72ccb"],["/2021/04/27/SpringMVC-1/index.html","1fb74dfe455cf83f850de9821031166a"],["/2021/04/29/SpringMVC-2/index.html","d7ed9afecf7684c531568aec041e44a7"],["/2021/05/03/冒泡排序/index.html","4b15293b68ad32634d2f14b077dc2c70"],["/2021/05/08/选择排序/index.html","eebd6e982f001e2dee719991ff040eb3"],["/2021/05/12/插入排序/index.html","f43560916e7e4f2f9090848caef897f5"],["/2021/05/15/快速排序/index.html","47b823830bbd4deee1fc4a3ddbca8ebb"],["/2021/05/19/基数排序/index.html","03935f68398b2598ddaefbf46402e2c1"],["/2021/05/20/哈希排序/index.html","b4704402cc3c27134d322a55b7f1cea2"],["/2021/05/21/归并排序/index.html","e517e7b0d7559f3018efba2df0e4b081"],["/2021/05/22/二分查找/index.html","ea44d4e0325b0a7dc8c5813da8581d20"],["/2021/05/26/差值查找/index.html","fce437069103e02ded5a767f1b8e71f7"],["/2022/01/12/高精度大整数计算/index.html","8156e2954d9fd98fd4530ab6fa4b4419"],["/2022/01/22/前缀和/index.html","d25195e1d7a06208c43cef971c242c53"],["/2022/01/23/差分/index.html","083d80dc6574438a2369dc39f95b0dbe"],["/2022/04/04/MyBatisPlus/index.html","916f5799fb710eac1a32fcdea93da693"],["/2022/08/17/jQuery/index.html","c153d442fd1e3a79dcd5da5962a1f070"],["/2022/08/19/JavaScript/index.html","6d2b43d4bbcf0685731f9b00e49c3e29"],["/2022/08/22/Ajax/index.html","9413112d94bd822aa72896b4dfc36e98"],["/2022/08/23/Promise/index.html","b6e02255966f4c4071663da6b47ee36e"],["/2022/08/24/Axios/index.html","4d9f3c11de095248d458c858b54d586c"],["/2022/08/25/H5本地存储/index.html","d7c027f54035495bfd5187acf55a558f"],["/2022/08/26/mock/index.html","615b9e4ea85575fbd2ced6a675f9a770"],["/2022/08/31/VueJs/index.html","80c365968c681984fc281def873568dd"],["/404.html","07f3ecdd6eccb146b1d9b938bd17aa94"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","91450b4fab41f2d4aa3920641ade1c14"],["/archives/2021/02/index.html","2d992ea1467b490d2a988c5ffbd0b7a6"],["/archives/2021/03/index.html","755db1b4104f804fc7608a511cad40bc"],["/archives/2021/03/page/2/index.html","de33ea570030dc32656ab0546218163e"],["/archives/2021/03/page/3/index.html","93cad1687d1e99527bfec1332bc9d279"],["/archives/2021/04/index.html","e9d948772557fc0a8b258d899fb67b4c"],["/archives/2021/04/page/2/index.html","68f4dab9ec6f5976874d79099dbe5931"],["/archives/2021/05/index.html","5b9e56b2a3525014c88a6b8f73a8af41"],["/archives/2021/index.html","cb46cbf9ea115771f42b6f32b5802c6b"],["/archives/2021/page/2/index.html","7aa32f99159b818c2ecfbe4bf6ff38c0"],["/archives/2021/page/3/index.html","173f77218d763c8cfc0da635993f504a"],["/archives/2021/page/4/index.html","3433aac024cd0d4625265d62def4920d"],["/archives/2021/page/5/index.html","2c58d6a5bbca6307b74271d50804efc4"],["/archives/2021/page/6/index.html","3477d189d17ea2f888ed6b5c182f02ba"],["/archives/2021/page/7/index.html","bc2201be9da7ce306673ea5feaf724ef"],["/archives/2022/01/index.html","11a95f28d35bb153f8222a957815ae80"],["/archives/2022/04/index.html","234e636185f38dd600156977b5b3a8ec"],["/archives/2022/08/index.html","3deeb8d4fbd370df7b8d515ae3cd3be4"],["/archives/2022/index.html","3d47f7a1ea13f50d1d9158603d753aa0"],["/archives/2022/page/2/index.html","fdc91556c1709b804f764cdab04f195c"],["/archives/index.html","57348199f065a950209b24127a92c429"],["/archives/page/2/index.html","e6844723a48a46ba83fd366bb6fb9cec"],["/archives/page/3/index.html","cddfb7241c755d7746fd3eb98fda7618"],["/archives/page/4/index.html","39ffc5fb4a19689b489513a4f5eb3d7f"],["/archives/page/5/index.html","5a72efad30cea6c05ad9e186a0dd0519"],["/archives/page/6/index.html","95f86816e9fd251d04a14fe54952261e"],["/archives/page/7/index.html","477bf7678307ec4f1fd802336c3707cf"],["/archives/page/8/index.html","b2555896801f57c1d62b1a6590d7f466"],["/categories/LeetCode/index.html","ce5946df782ba70683106e8f6376051d"],["/categories/LeetCode/page/2/index.html","f0428efa65f75bbe10ba4115a0711b21"],["/categories/LeetCode/page/3/index.html","646de7bf9f60775857ac1fc9dda5f068"],["/categories/SSM/index.html","a7bb8b30f56b673dcddc76f4c3ebf074"],["/categories/index.html","748a57d1cc04a7a25454753a6a9c8581"],["/categories/前端/index.html","018b34efc638e4f2c1cbc03d24179357"],["/categories/博客/index.html","a71a07c4a7cd686282e8c3a985f41078"],["/categories/学习路线/index.html","badf7f1a37dd9a259bdb81809a7b7bd6"],["/categories/工具/index.html","aac1db314490f30eb6357be87bdd0a0b"],["/categories/数据库/index.html","83814648012a1c0f95484801b2fdf3ec"],["/categories/笔记/index.html","c702ad95791f62da35b5a71b13fce5fe"],["/categories/算法/index.html","e771a363ecd7c3f1a1285eedbddb5c24"],["/categories/算法/page/2/index.html","56a02ca57076cc59e110e199b56734d9"],["/categories/设计模式/index.html","65b2a8eabffa64262b667db75b1cd18f"],["/categories/设计模式/page/2/index.html","b285e9f832a285eae435903636d80d2d"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","df464f8607096c5fdce8130c838dc831"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","6e45e83c0619b201ed1140955837d98d"],["/messageboard/index.html","e953a896d788f4bea3cef33ccfeb67fe"],["/page/2/index.html","cf3f454765177bd6537af8b0e56df6fd"],["/page/3/index.html","7b885f152da4e4c5d68d77cc384b2951"],["/page/4/index.html","2880c2f6643d1ff866a1db56ea5bd98f"],["/page/5/index.html","ae83fb82758a0e3bf736f8ad6323ba52"],["/page/6/index.html","28536611be15a400f1e8b2398ec9d777"],["/page/7/index.html","5d5bfc7b4c141f271ab3c713b0a82ef9"],["/page/8/index.html","5bb44bb8105d7a1579d0e68af7408634"],["/sw-register.js","7a652bce28a7b102690231ba04ce1efd"],["/tags/Ajax/index.html","cbeb1702324104097a104d39ade9bdba"],["/tags/Axios/index.html","9a9853bfae4b8d419bd5b237f41f48d4"],["/tags/H5/index.html","fbe63263c3e682cca5ad08b6be4ebe7f"],["/tags/JavaScript/index.html","70dbad892d64b513faa86528dc6a2e89"],["/tags/LeetCode/index.html","68634ea9bb7b28b1c33f0a7a76e7e51b"],["/tags/LeetCode/page/2/index.html","1f988f1b5f85d127596b8d198ca207fe"],["/tags/LeetCode/page/3/index.html","d3dc2eb8ae42dac35ff33144041c3f80"],["/tags/Mock/index.html","dda7534b34a2a4ae4ebadcd4121ba26f"],["/tags/Mybatis/index.html","fe206b0d821ff3b89a63b11856c66ce4"],["/tags/MybatisPlus/index.html","5485f386057133bfa8215a56219bf1df"],["/tags/Promise/index.html","0ccc394122bd83fb1e1eb47ef9072ac6"],["/tags/SSM/index.html","217bfa3a803974216219bc0c7968f2f2"],["/tags/Spring/index.html","cb31e612a77be2e3522fadda0f221567"],["/tags/SpringMVC/index.html","e1e8530d447537b2abf5d0a184225365"],["/tags/butterfly/index.html","218557e8fc96d5432a852035b196082c"],["/tags/git/index.html","8e71e98285be4791f06d8ce366796afb"],["/tags/hexo/index.html","820a554c0669dbe8d4cf3454d9d00e1a"],["/tags/index.html","9bc0e8addfc3fbcf744edd5318588e2a"],["/tags/jQuery/index.html","3265fa72075309207afc77b6d839ea8a"],["/tags/java/index.html","751a1129912df20102cef83509bf4f00"],["/tags/markdown/index.html","568deeea0fd1a882fbfc91d0be83c90f"],["/tags/mysql-数据类型/index.html","d51671c69118e06ab1e5f0552723d3bb"],["/tags/mysql/index.html","abc78dcf64d346f0930920c4d852826f"],["/tags/typora/index.html","f03b7e60f390496d7af70e61e31c4f5d"],["/tags/vue/index.html","0d8c3b4828afe0d3665557359e77bed6"],["/tags/享元模式/index.html","dd0a3198f6491ca459bd9bf6aefa28f8"],["/tags/代理模式/index.html","3fd682a5ef7961dddc203dad8a49cbe2"],["/tags/分布式/index.html","28e516f783d14937fca65b075df36160"],["/tags/前端/index.html","d4819f56b5cefff0ac23e3ab2510d786"],["/tags/后端/index.html","38b55c1ee43fe199d40d25215a4d6c37"],["/tags/外观模式/index.html","86486e9ab24601640956c6cd15221861"],["/tags/工厂方法/index.html","5dcf3b29e81776c1c915f60070419504"],["/tags/抽象工厂/index.html","026f84c5d704884ba14f0cddb6113407"],["/tags/排序/index.html","7ee99e4651fda7779e19749dbb3a0148"],["/tags/数据库/index.html","b06f332481ad0e722667416c8560893a"],["/tags/查找/index.html","6afbccbad4ce808d7f90fce3de2f4bb6"],["/tags/桥接模式/index.html","3b9517a159e3ff425a11aa62cb80d60f"],["/tags/模板方法模式/index.html","81066849adaa506cbdc3650b1797526b"],["/tags/版本控制/index.html","befc6aa29581bfc22d15a630225ec16e"],["/tags/策略模式/index.html","b47358a2992e76167ffddec8dd897c79"],["/tags/简单工厂/index.html","747fde5df0efe507a3e8fe8918da3ef6"],["/tags/算法/index.html","b27d43f2cb9ef4c9cbc8fa579b53d265"],["/tags/算法/page/2/index.html","6c588454fee75cc87eaf150de31bb05b"],["/tags/观察者模式/index.html","b8a8c4608abbfb70a09453d886171158"],["/tags/设计模式/index.html","51c171d6b6a1d6642e2b7ddb46304e60"],["/tags/设计模式/page/2/index.html","7773270c17410a96ef0dec01648e0388"],["/tags/责任链模式/index.html","515690284164d37d72af7054e07b2f75"],["/tags/适配器模式/index.html","8d21a1f507ee5f19d8faa504d8aff512"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
