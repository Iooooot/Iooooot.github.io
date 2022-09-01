/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","b3c73995e897f92c3d2e518ba7118afc"],["/2021/02/22/博客的搭建/index.html","63b50687570b8bf3d2aeeb8517237d0b"],["/2021/02/23/如何使用markdown/index.html","c9ac5e7061d70e51bb1a2040546e01e4"],["/2021/02/24/mysql命令大全/index.html","448cac2d638e67a07ba2c11985d54e6f"],["/2021/02/24/mysql数据类型/index.html","d2c006d012b7b3b6eae9b71645b6353b"],["/2021/02/25/Git的介绍与简单使用/index.html","531609352c71c7af75aa8d5d1925e215"],["/2021/02/27/简单工厂模式/index.html","9bc90229e4e34304a112f0c7e6dee8d7"],["/2021/03/01/工厂方法模式/index.html","8d70d9a611d5c8c40a32c7d6c91a9a25"],["/2021/03/02/抽象工厂模式/index.html","8b0e4a32ed4c39fdf2a6e4a3c73d4eae"],["/2021/03/03/单例模式/index.html","5fc2356b06ad71a28dc47ad455ef60bc"],["/2021/03/04/观察者模式/index.html","5b59ddad0f9ad5ef41990dd8f2825e3d"],["/2021/03/05/适配器模式/index.html","c55e22d8867b1710d0e7709faca1bd7d"],["/2021/03/06/模板方法模式/index.html","a0d322d77af058904f7420526468c0d0"],["/2021/03/07/责任链模式/index.html","afe6d6ee64a2736394b9db3ce4d0dbe0"],["/2021/03/09/代理模式/index.html","fc4a53162f00be2163a8c7d9bd4126ae"],["/2021/03/11/享元模式/index.html","2a48976d0936764fe8dfdea45692e74a"],["/2021/03/12/外观模式/index.html","25ba00f1fe233a0b830ace7461b18b3c"],["/2021/03/13/策略模式/index.html","1bbcb06ea6785474bc3eb42c366deea5"],["/2021/03/14/桥接/index.html","05a58860fd005279a6b8de0a4d76f60a"],["/2021/03/15/LeetCode-多数元素/index.html","efa51320c5a9e303b0abfd5ed378d959"],["/2021/03/16/LeetCode之汉明距离/index.html","edf273adc9ed294e309c819122f8634c"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","40ac735d1788941290ff2525b6bfd28b"],["/2021/03/18/LeetCode之两数之和/index.html","0e2ef7c6616ceadb59c3cea3695ae436"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","f2fa41bcd6fc494713d9fcb261f9c8b2"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","3d54f8486813636cb3d337960dc30cc0"],["/2021/03/21/LeetCode之有效的括号/index.html","f08d0d447b8296432d512331b0f2139d"],["/2021/03/22/LeetCode之移动零/index.html","5ace068933dda863675e4e5d796c37c1"],["/2021/03/23/LeetCode之爬楼梯/index.html","cccb74bd1302bd38be12a588503403c9"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","a4c6b26cfbb9d7bbebd69197514a6acf"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","9f05c6fae43b632532d5991ad6c54c13"],["/2021/03/26/LeetCode之最大子序和/index.html","2fa1f8a8bfe4068350696a0ce8f0fbd2"],["/2021/03/27/LeetCode之子集/index.html","100507c139f2df772affa5644068138a"],["/2021/03/28/LeetCode之合并二叉树/index.html","e3f45c5ff58e663215c4d705463f38e3"],["/2021/03/29/LeetCode之翻转二叉树/index.html","8a463ef1d096ac8005d17375c4ec089b"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","65c8647970defe356d74f32b788460b6"],["/2021/03/31/LeetCode之翻转链表/index.html","5494f27bd15d7aea2ab298ce51f80693"],["/2021/04/01/LeetCode之相交链表/index.html","b07df38c8a155b5e60c3d4ab243b7b90"],["/2021/04/02/LeetCode之最小栈/index.html","3cd6635242a67486ac5f064dc6811e25"],["/2021/04/03/LeetCode之对称二叉树/index.html","02f7e5e19c44d856ab7f38bbb22751b8"],["/2021/04/04/LeetCode之环形链表/index.html","a04b4433cb6b81cf08aa514f33d36213"],["/2021/04/05/LeetCode之二叉树的直径/index.html","2b6f459ed24ee6453746b60b3c8b4979"],["/2021/04/06/LeetCode之回文链表/index.html","47760af983349e1a330494d33d79a758"],["/2021/04/07/LeetCode之比特位计数/index.html","0e71b181cfe9989f4a0cc7c3b9d2a6e2"],["/2021/04/08/LeetCode之全排列/index.html","672282d014244205764f8ebd4be75fed"],["/2021/04/09/LeetCode之括号的生成/index.html","268e6e2474768b5d1b684293c6405bd6"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","35c8aa014329f37cea37933c1979e013"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","6c49f55e2523efb992fc6035d06953b7"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","22bb1b0f1c92b03b4e0d05a919f23a68"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","25f4fc0445e8db7ab77a6d611816b839"],["/2021/04/14/Mybatis/index.html","84c38521bebddd38f1514e54513caf1f"],["/2021/04/15/Spring-1/index.html","d44f4c5be15fcdef32f8c93cbce09c55"],["/2021/04/25/Spring-2/index.html","8ca28c4a852d8fdbf5958ee8caf8f6f7"],["/2021/04/27/SpringMVC-1/index.html","7776f7fbbea54045ef73323228a2eb5d"],["/2021/04/29/SpringMVC-2/index.html","c7c4a7a7ed66baebee6ac069e67ee55d"],["/2021/05/03/冒泡排序/index.html","5b3cd9c082d35f960004f8eaf4170088"],["/2021/05/08/选择排序/index.html","60124c5400293c4cd233dddd0f8d74c9"],["/2021/05/12/插入排序/index.html","30bf1195ba07eb6a6559439633dde784"],["/2021/05/15/快速排序/index.html","76e0a6b8a919189e9e32c8e6786a264f"],["/2021/05/19/基数排序/index.html","1d672ec4c21c3d7534db590bd858a360"],["/2021/05/20/哈希排序/index.html","ffc2911e5b1274586ec24d8ace7c27fe"],["/2021/05/21/归并排序/index.html","f5ae2f95484ee61f87a1f08895d60741"],["/2021/05/22/二分查找/index.html","0999b06bf7ca4876442b80f15e7d0ab7"],["/2021/05/26/差值查找/index.html","6dad3808a7a50b74da42815d8201d993"],["/2022/01/12/高精度大整数计算/index.html","7ce0441beee6c13b1a8e3a0f945c85fc"],["/2022/01/22/前缀和/index.html","b9865bc4aff07bd56f601e102a6b30f1"],["/2022/01/23/差分/index.html","0e254a7ec6a92487299e620aa763b25d"],["/2022/04/04/MyBatisPlus/index.html","86688c1496965bcefb1cfbc658b5106d"],["/2022/08/17/jQuery/index.html","a763c12a6129bbf4be691c8a2e71d78c"],["/2022/08/19/JavaScript/index.html","74a606b91d78df4b7412aa971390ba40"],["/2022/08/22/Ajax/index.html","0a1d182895e0c04490dce7fc29beb43c"],["/2022/08/23/Promise/index.html","6a72f553eecea72f0adae4e17bd11b1f"],["/2022/08/24/Axios/index.html","c78896aa41e0ec384d0437d89f16df10"],["/2022/08/25/H5本地存储/index.html","32f2ca58b99bb40cbe4f6888b71f4c80"],["/2022/08/26/mock/index.html","ad3365fa463fdfe165ead0a11356c3f4"],["/2022/08/31/VueJs/index.html","701cfbd31a9a950e7a603f38e76558dc"],["/2022/09/01/vue组件化/index.html","731fcdd3a9df930a207591f7e944228a"],["/404.html","4d2f480aaaa398a9b8b59451ca510f3f"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","675e1e6727460faa14d3585d26f34d90"],["/archives/2021/02/index.html","7aed55f52fc2fed2298a56e13f3228b8"],["/archives/2021/03/index.html","198be3fdac3c365e33ac9c675830e22a"],["/archives/2021/03/page/2/index.html","9ecd00286db03938385dc2c96824f4bc"],["/archives/2021/03/page/3/index.html","fc96514e0fe9d7a03a756347ad043f00"],["/archives/2021/04/index.html","5a0122d2da7b499302db4afaf5da6d7a"],["/archives/2021/04/page/2/index.html","79f8f3e6c26c9427c09837b8b050f2ac"],["/archives/2021/05/index.html","86848840772723742368ea1a94dc1189"],["/archives/2021/index.html","b735c1ac08c1cae8920334b823d1adbc"],["/archives/2021/page/2/index.html","a87ba8cdb01208b9cf6229567b4527b9"],["/archives/2021/page/3/index.html","0520d255c34fbb809765eb9ed7dc4e9f"],["/archives/2021/page/4/index.html","8b4f52bd3971b6e4f74d14963818abb2"],["/archives/2021/page/5/index.html","4f8df3555ea112e8f3c85bcdd2443db9"],["/archives/2021/page/6/index.html","9b531cb7ee56ba39765ed9b44fc79bae"],["/archives/2021/page/7/index.html","4813465446b80dff37be62d90daf8571"],["/archives/2022/01/index.html","67031690c3062aedcc14a66681c747a4"],["/archives/2022/04/index.html","efb0547892d989ecc11b6e75e122ac02"],["/archives/2022/08/index.html","9771054d4b22149e0ce7bea0defd419a"],["/archives/2022/09/index.html","cea36f5683c17bd17a719fe2d9751c2a"],["/archives/2022/index.html","2d4eec43cf2f063400f076b51688ccc4"],["/archives/2022/page/2/index.html","935ae05c3928e29bc850aee67cbbf0d8"],["/archives/index.html","e28f3d61fc4a7029bc1aae5b53a1496e"],["/archives/page/2/index.html","b51f6430640205bb8f88cdf504efaa1e"],["/archives/page/3/index.html","f8dc95d64ff147b09dd88bc550bf4730"],["/archives/page/4/index.html","00dd1fd0b8d25e37f0427331d2ebf4da"],["/archives/page/5/index.html","e70ceee10d3367a957b6587cc5f2a65f"],["/archives/page/6/index.html","66ccce23de0d0e7e487fcf0c0d116ab1"],["/archives/page/7/index.html","50b5510bbfebc7adf73c33d115fa5dcb"],["/archives/page/8/index.html","e7d34da638fbe539c2a7276c12c77ca2"],["/categories/LeetCode/index.html","7e2b305d720ced98d9e9bb107a0bd90f"],["/categories/LeetCode/page/2/index.html","243872aca0647e3f6188246eed8d59cc"],["/categories/LeetCode/page/3/index.html","79d5548085f1b1b97e38e941aaf4b5c9"],["/categories/SSM/index.html","0b24e61f555b015369f24a39bbea008b"],["/categories/Vue/index.html","9128d6bb0e0f755e3059bf197b2c572c"],["/categories/index.html","726a5dcf10bc3881267598cbc1468ca9"],["/categories/前端/index.html","d6f8f642ddcab19d53e890ec2f4b2129"],["/categories/博客/index.html","dce1d44c773b6bbbe908561dd79c0b99"],["/categories/学习路线/index.html","8f679c6c348be872d2720d6595bab1a4"],["/categories/工具/index.html","a4d9b4bfafc361904ea992b4a18dc07a"],["/categories/数据库/index.html","03ead1b086eb209fe6ebb515aee23dd6"],["/categories/笔记/index.html","e7f4efe5c337a10f569fba0d634cfda9"],["/categories/算法/index.html","fc740d1fa936b01319bf3da540e5a262"],["/categories/算法/page/2/index.html","a74200f16ba47e06294929fe9e1e6959"],["/categories/设计模式/index.html","14539a0d7286b7b860e07def286603b9"],["/categories/设计模式/page/2/index.html","a98828e989431d9936285e932d4d1cef"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","1c577ceef907e098b1596189890f28f3"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","caadbfb46c4ffdfc40f46dca3f96993f"],["/messageboard/index.html","0912ae6e4a445520101ff317386ba0be"],["/page/2/index.html","1047a8c8a939659708f5a5934dea4fb1"],["/page/3/index.html","faa1f5f67ae639442f08beae724c0906"],["/page/4/index.html","256afb495a7fc0da47f23b8130ee4597"],["/page/5/index.html","f6480fe1e3abdd2e6ec01dff5703a8b6"],["/page/6/index.html","f964c71edc89ee459f4e562426bad7d6"],["/page/7/index.html","64a206f815412d004a75424097c1ff9b"],["/page/8/index.html","6e39c64ce81453a85e481d727ddaf9ae"],["/sw-register.js","77e88cd28dc6197b221b34450bfed004"],["/tags/Ajax/index.html","f0c46a091708c97e50e0f666bbbcb8fb"],["/tags/Axios/index.html","4d45bf50584ec4675809779726a651ff"],["/tags/H5/index.html","8c9cefae911847fd66ebe2f7f919af3c"],["/tags/JavaScript/index.html","094fec62dbf7ea05a08a1d5b94b7a35e"],["/tags/LeetCode/index.html","dd3ac11f2be1703e952ed083ef127346"],["/tags/LeetCode/page/2/index.html","465668ad9cbdd044768462d9c1adc6aa"],["/tags/LeetCode/page/3/index.html","d4bca5eb72da42f5a368a8be4ed43bc9"],["/tags/Mock/index.html","9bf8404f256195de2138bc1d8e117852"],["/tags/Mybatis/index.html","44b4625b8a15e9d6b0e48bbe10ffa7ad"],["/tags/MybatisPlus/index.html","04b803d1a35614921218e5c395ce2796"],["/tags/Promise/index.html","ef1587c802568c08ceed2396dac8a2d9"],["/tags/SSM/index.html","683a6ef99c3b5343ba2fc50f2b95dccc"],["/tags/Spring/index.html","4f06f1b2b7bb1f79635de223e358d06f"],["/tags/SpringMVC/index.html","16d019ce4a479ddc4ad487534578d57c"],["/tags/butterfly/index.html","8db1a836032ea44e9a4b981788522ddd"],["/tags/git/index.html","d7f0ff4d8303b7c55fa85380780bd001"],["/tags/hexo/index.html","d87ae1a4bb3b9c56369c9f2cbea73070"],["/tags/index.html","1f466a2ca35460fc2e2eb8694b6c941d"],["/tags/jQuery/index.html","17e31b51d151bc564ea068add6e35033"],["/tags/java/index.html","d3aa4d01894edccee22dfb9fbb91dd6a"],["/tags/markdown/index.html","ae8a7a7f84669881fc6a2048425da654"],["/tags/mysql-数据类型/index.html","67d0c3509a8bb1dbf5fea042f7b1f134"],["/tags/mysql/index.html","ae84350ab8e753e7be21b4be8fa2c03a"],["/tags/typora/index.html","22ededfb1d222f0bef86661d15f28b12"],["/tags/vue/index.html","43f19579155715a27c3548ba4f4208b6"],["/tags/享元模式/index.html","cdec159d47d24e4d7e084c6dd0847165"],["/tags/代理模式/index.html","ab5ef79d096e78bd5ce0df7f97d508ea"],["/tags/分布式/index.html","881fa9649b1605c906359b3fb45138a8"],["/tags/前端/index.html","688719825c8e5701878d2a2f709f57a8"],["/tags/后端/index.html","ab3c93a267fba2c85285505f41db2ce7"],["/tags/外观模式/index.html","03e23f7805be98b8b4a8bbb35d99c95c"],["/tags/工厂方法/index.html","9d35355659caa2b1d7fdeec84bdb3437"],["/tags/抽象工厂/index.html","1a290574e135e5459a1c7b983993ad76"],["/tags/排序/index.html","3ce61b7d543cecc752d756b2e677ea96"],["/tags/数据库/index.html","00802f9e6959d7e7dc7235a70808eff5"],["/tags/查找/index.html","0c1ceff087cb25aeeba3a08ead569eab"],["/tags/桥接模式/index.html","90881c52b5e56e79fe58ee1e638bf62c"],["/tags/模板方法模式/index.html","24708d2fa7d3062e902afc41e99f9d76"],["/tags/版本控制/index.html","506302ea4bc458c38718a5e037d38b4d"],["/tags/策略模式/index.html","ed294226a2e607d66a85c2723b5714ab"],["/tags/简单工厂/index.html","e01b35d40107a72a9be98fac3d4ded8e"],["/tags/算法/index.html","6be7e6d3d75e3fd39120b119a64987b5"],["/tags/算法/page/2/index.html","7ee13180f2259864e0ad14e6a72ea293"],["/tags/组件化/index.html","37542cfd4fd6f85930d2519b323592cd"],["/tags/观察者模式/index.html","a53617ea906a6f212afda0d60cbc18b5"],["/tags/设计模式/index.html","34270cdbec8f09044c846799e3f0ab52"],["/tags/设计模式/page/2/index.html","9002a66a12ec903cb18b12a2999dcd17"],["/tags/责任链模式/index.html","d5b8423a1f70cf1ee957ded508a22bef"],["/tags/适配器模式/index.html","0b0b920139e34fea3bd1617b24a9ec94"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
