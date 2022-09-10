/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","9385535a6801a18b76407cb4034d72b6"],["/2021/02/22/博客的搭建/index.html","29f12d1803c8d54b5fb03c9859fd623a"],["/2021/02/23/如何使用markdown/index.html","2b2d7640390404f32ecec0656351453f"],["/2021/02/24/mysql命令大全/index.html","afeeedc6718b5b99d6f4e6c0b6d871c6"],["/2021/02/24/mysql数据类型/index.html","ba5bf8b19c43fb819a129c8649c68237"],["/2021/02/25/Git的介绍与简单使用/index.html","2d9f436938df62c2cd06bed67f6456e8"],["/2021/02/27/简单工厂模式/index.html","5f963749f091b494fe074031e2fdd76d"],["/2021/03/01/工厂方法模式/index.html","386ef968f7071a556f5fd5fd3814df93"],["/2021/03/02/抽象工厂模式/index.html","8b1aca9b452c1e3ffbfa4e5a5661fe30"],["/2021/03/03/单例模式/index.html","8990915b10468a1db6d57d4a20e278a8"],["/2021/03/04/观察者模式/index.html","162b4bfae6471a8798f6b68e653190ac"],["/2021/03/05/适配器模式/index.html","75600325009acc24ff20a152b1d44185"],["/2021/03/06/模板方法模式/index.html","f204acd70e5ba149aab4e0fb01f72d30"],["/2021/03/07/责任链模式/index.html","fc35767092ef7fb99b33f54eaeff3daf"],["/2021/03/09/代理模式/index.html","5feb929006b74fe47857e7e171eb01b7"],["/2021/03/11/享元模式/index.html","520340bf58ba97dcfbf463effb88c3e5"],["/2021/03/12/外观模式/index.html","19e3daaf3163949c909a333099adbed2"],["/2021/03/13/策略模式/index.html","cbda77fa6aa9fcafcda29953e5073f83"],["/2021/03/14/桥接/index.html","29840880feafef1738efc2208e34e999"],["/2021/03/15/LeetCode-多数元素/index.html","3e9868b8a7f53673381d33488df1373d"],["/2021/03/16/LeetCode之汉明距离/index.html","e385cf2d002ddaa8caed02ffcd44e77c"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","1937e76dbd1ae47841d012e0cc7c45b0"],["/2021/03/18/LeetCode之两数之和/index.html","a248acd95b7d2e53f402f19b3e635ce8"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","d4e8cbb3ec008aba47de4d5d2990bc3d"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","0b5c6b0d9e99ddb7ad0a6173acc54175"],["/2021/03/21/LeetCode之有效的括号/index.html","ca87bd61a7acfb3b3e51ba17c25b6991"],["/2021/03/22/LeetCode之移动零/index.html","80a92f46551550f92543ab3614365e3c"],["/2021/03/23/LeetCode之爬楼梯/index.html","9f97afff35d6c08b06ad9768d5c4ae7b"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","bd94143bdc9a03031899949587a0f5bb"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","e3852cbe93df545e9f3c905fefd6ea99"],["/2021/03/26/LeetCode之最大子序和/index.html","8635fab830f28d14d88b4adb45aaf627"],["/2021/03/27/LeetCode之子集/index.html","5b58a38704baf0c44b88d57c55afd2c3"],["/2021/03/28/LeetCode之合并二叉树/index.html","4d2d720ab02d9bdd1283f88335285cee"],["/2021/03/29/LeetCode之翻转二叉树/index.html","65b0609582fb9920c99e8465ae1ccab2"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","bd4cec859a543ecb5499788a94023532"],["/2021/03/31/LeetCode之翻转链表/index.html","8aecdd785d6b43d1eb7c5e5fb0d99fdb"],["/2021/04/01/LeetCode之相交链表/index.html","09e6e009a8d92df55f08e2648420105e"],["/2021/04/02/LeetCode之最小栈/index.html","25534705ad790fa0511e6086757189a7"],["/2021/04/03/LeetCode之对称二叉树/index.html","ecc2aa2ec86240577accdd4feaa373e9"],["/2021/04/04/LeetCode之环形链表/index.html","07f5166e321337c92be7577692754fc0"],["/2021/04/05/LeetCode之二叉树的直径/index.html","5a3fba5dc1a0f5700add550c07050763"],["/2021/04/06/LeetCode之回文链表/index.html","2acd997db76df0eff1e5ce97207c3f91"],["/2021/04/07/LeetCode之比特位计数/index.html","0865865c035285bb89b044bf9a893f7c"],["/2021/04/08/LeetCode之全排列/index.html","60de0fad7ba0ce678df5fb0ae1b82811"],["/2021/04/09/LeetCode之括号的生成/index.html","6a4d12157cd5c24ab74a6b0cae5c3f8c"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","3ef479f948a18acfb03081c12d6c154c"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","61b84df8888bd1af8de686b28f761774"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","1b119e71ffc599ad862d6efda21ddcca"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","c887c1cb950fef8755760f0b67e07c76"],["/2021/04/14/Mybatis/index.html","bbbbf135143c3a6455a5b84483215eb2"],["/2021/04/15/Spring-1/index.html","7291ea7950f6d4ee35d4f06fded05a29"],["/2021/04/25/Spring-2/index.html","ecebcb91c4286982a063e49f2a8fbdaa"],["/2021/04/27/SpringMVC-1/index.html","e9ac35c72281ae2ba6fd89fe11a230dd"],["/2021/04/29/SpringMVC-2/index.html","0b4644885e7b1ef0e954684915f274b8"],["/2021/05/03/冒泡排序/index.html","a738c7766061b6ec634547fc42ad085b"],["/2021/05/08/选择排序/index.html","6b7def6718bf4a18d979f5af9b5db903"],["/2021/05/12/插入排序/index.html","d11e34450519a1765ad59eb806943755"],["/2021/05/15/快速排序/index.html","a12d5331bfba0594dca875e4aca926a1"],["/2021/05/19/基数排序/index.html","ecd25f90a74a0d8cc1258c85bea296ed"],["/2021/05/20/哈希排序/index.html","d15f95da17bfada2105a2233bfaa29c1"],["/2021/05/21/归并排序/index.html","bffc76d90029deee4086f2c0801e0d93"],["/2021/05/22/二分查找/index.html","367bd2e26688106df362ed608306b716"],["/2021/05/26/差值查找/index.html","6a5a3a8c04d587c3e0c6a988623b913d"],["/2022/01/12/高精度大整数计算/index.html","c9fee92e6aef709c821d0d67980da34b"],["/2022/01/22/前缀和/index.html","2cd8300539e4af08f7a7d4d8d3004a3a"],["/2022/01/23/差分/index.html","9084bf0664945e2fb025ca5aacca6d5c"],["/2022/04/04/MyBatisPlus/index.html","a9a34298b862aa015d0dbc32395f95b0"],["/2022/08/17/jQuery/index.html","6ffe10237efdaead2579b523527866c9"],["/2022/08/19/JavaScript/index.html","f607de6144da3c9bd7c1ba7340802b84"],["/2022/08/22/Ajax/index.html","6a135895666c666e4417ae65513e8a94"],["/2022/08/23/Promise/index.html","02e776145024b749f02dfdf96bbfb4e9"],["/2022/08/24/Axios/index.html","9711629d7a7587e38f31ae287badc494"],["/2022/08/25/H5本地存储/index.html","a0fab3de3e48ca8707890551c48885e9"],["/2022/08/26/mock/index.html","c3d28913db7cd857113e43ff58961b2a"],["/2022/08/31/VueJs/index.html","95866d0102694e43e989cf450e720f3a"],["/2022/09/01/vue组件化/index.html","60175541be42a281ebc0767afec3c5ff"],["/2022/09/04/VueCLI/index.html","30a543188a6c6986dd070e68e0c1fba0"],["/2022/09/07/vue实现动画/index.html","6b3d4904974dbab0d372bd1c8eb6d32b"],["/2022/09/09/Vue响应式方法/index.html","b3e91d38dbc0d372028a70aad76c035e"],["/2022/09/10/Vue异步请求/index.html","68a2718977e15b26dcd01ad614a29fb8"],["/404.html","306c8913f4b7849bfb2b200e2847dd60"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","80252cabfb8f9e19175b3d3991677889"],["/archives/2021/02/index.html","05ecf185a8affb55321a0a79588d15f3"],["/archives/2021/03/index.html","8b148dc658dd170b7acb99ef33244edd"],["/archives/2021/03/page/2/index.html","9680a8d8b25ac48c2db311cc04df4e15"],["/archives/2021/03/page/3/index.html","07f7205b1bf345cd93719647a4e56ca0"],["/archives/2021/04/index.html","3bc8870ad50670687cacb006a5a8a5b1"],["/archives/2021/04/page/2/index.html","f86a9635f524695e93f0f9d353695218"],["/archives/2021/05/index.html","c66d27e1e71cf0949ba09bb158cb03cc"],["/archives/2021/index.html","ae381df18e69f0a9675a85f2b00a2dbc"],["/archives/2021/page/2/index.html","368be92f0a22249c080236804c7380b0"],["/archives/2021/page/3/index.html","34e17f4ca4038dc58396954ab7acd663"],["/archives/2021/page/4/index.html","80dfe412e33dd5fa11298aab63f6f7b5"],["/archives/2021/page/5/index.html","e716a1d1a8a6d9b1b1be1993c7e66d58"],["/archives/2021/page/6/index.html","01413a2772fad07a6a59bc8693412dbf"],["/archives/2021/page/7/index.html","6a7778634dfd813c8daac9ed7cc690cf"],["/archives/2022/01/index.html","7cd87045e911b420234a72d2ad37431b"],["/archives/2022/04/index.html","90a2ab5079981e7949ce9e019d1afa0c"],["/archives/2022/08/index.html","86075d27da397f982e5e60bb611fe049"],["/archives/2022/09/index.html","2ff9f295a629f48f766c38d7a12e925e"],["/archives/2022/index.html","781482cf057a4ed07dcd283db37e7892"],["/archives/2022/page/2/index.html","6448d119ecccadb9cdbbe719b7688622"],["/archives/index.html","7d586b21d0d5085408f6ade3724f3fa3"],["/archives/page/2/index.html","ebc4093925a9c900b8c74c914588162f"],["/archives/page/3/index.html","cf71b4c0686662cd996baf76bd9caa21"],["/archives/page/4/index.html","828093bf759e5740a40b0e74acb69001"],["/archives/page/5/index.html","e284dc0059978c58a193eda136c6e433"],["/archives/page/6/index.html","fac45d8da4530f809e0f2addcadcda1e"],["/archives/page/7/index.html","5aea76bd527454ea1e243b5c8cf8733e"],["/archives/page/8/index.html","718de621ed1099d0d6a5f8c2fe2feb77"],["/categories/LeetCode/index.html","58ee01129ae6375f38d074b1d99e2412"],["/categories/LeetCode/page/2/index.html","5138c9393fb4cc3fc07540a2773d8478"],["/categories/LeetCode/page/3/index.html","91edb8cee7a30876b9ae81f600835968"],["/categories/SSM/index.html","c41a0df8edf43cd2536169af4e61ed37"],["/categories/Vue/index.html","d8af842056e30f6d05ddf7b7ff08a385"],["/categories/index.html","a663248eba614ee4c0a44d9332ad0525"],["/categories/前端/index.html","6bf9ed7c46895afe65c3cbeae021abcd"],["/categories/博客/index.html","1a18555c5630e954b68d9161913f3318"],["/categories/学习路线/index.html","060e24cbf718a7ad42e0cf6e7c6d0b47"],["/categories/工具/index.html","9f474618d691f43327ed357de4bf4ce5"],["/categories/数据库/index.html","106b4ff7e2bd5341dabadd1d112fb291"],["/categories/笔记/index.html","16ee585501cf3a3d23c49fdb818b33d2"],["/categories/算法/index.html","d03f11f9a302ff77ba2ffdc912560139"],["/categories/算法/page/2/index.html","68dd267f4e48e019da3f7de86295f8dd"],["/categories/设计模式/index.html","859edf4b1d6caf5496e1a7bfe61684c1"],["/categories/设计模式/page/2/index.html","6cc68cf4fd2cdf62dd5361179dc66131"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","4a23b00b454f658d27c1bc8ea0ad3915"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","637d681b864b4edb60bb77727bc3c733"],["/messageboard/index.html","57914853b72e633e3d41cad5491cac16"],["/page/2/index.html","65b7940c456f11be21058fdb735420c0"],["/page/3/index.html","fadef471bd87de349325aaae78691d50"],["/page/4/index.html","134b448c3214f6935d768cfb2d2865e1"],["/page/5/index.html","a979b1b2c2dbbde192bd8bd3c6492daa"],["/page/6/index.html","a53935189226f632eafc9b2983a37b06"],["/page/7/index.html","2427ee0911a549b45e4c8c3bd2aca9d7"],["/page/8/index.html","d028ff842b612166fc1d18c90a8b66bd"],["/sw-register.js","675f8bd7156c0656758863aa84c2654e"],["/tags/Ajax/index.html","de2f7fb8812424f17d1b799457f57756"],["/tags/Axios/index.html","a169e4b45e88ceb24b4fc978333090d9"],["/tags/H5/index.html","852db48548e182e61821cb3bb0374ff0"],["/tags/JavaScript/index.html","b19301bc7516249f623745d76a2a4ada"],["/tags/LeetCode/index.html","dfcac408865dad44192074a9e98b532a"],["/tags/LeetCode/page/2/index.html","0285e440b48c3b94c6fb0830761d96e1"],["/tags/LeetCode/page/3/index.html","526b09d29041ac2899d7227412eaad87"],["/tags/Mock/index.html","4e36e7539fc59f6dc54be27aaa8bdacc"],["/tags/Mybatis/index.html","170a6573877599deebf5bea272f8c1e6"],["/tags/MybatisPlus/index.html","04f575fb9d2cfd5bcb23d6b83d13f19b"],["/tags/Promise/index.html","6131323b443a54d8489993ea176fac41"],["/tags/SSM/index.html","897ab1e9e02dd0708bffa4da3e8fd132"],["/tags/Spring/index.html","d110d4729955ae35768f5d3a9b52a99e"],["/tags/SpringMVC/index.html","05dde799b923bd1c3cd10fa9b971c5c6"],["/tags/butterfly/index.html","fdfdacb5c7c7c801123a141325db2c7c"],["/tags/git/index.html","62178bb52e289a1113383f18a456d135"],["/tags/hexo/index.html","afaf61d228a6a347e9192665488af396"],["/tags/index.html","7d46a1e963c5b07cc4fa32d63d9e534a"],["/tags/jQuery/index.html","9bd08e0f58fcb4af5b83efe1df8fb314"],["/tags/java/index.html","e3434afc55d14bc252dea47912a54bdc"],["/tags/markdown/index.html","db8af78d27e94b03b0a94660d60c99fd"],["/tags/mysql-数据类型/index.html","c2d8e6907cc1e526ef21850cc6195a9f"],["/tags/mysql/index.html","6cb2bee092b613bf366eb15091f1aa15"],["/tags/typora/index.html","c624092f06fd6f0664d0d3360461cf9e"],["/tags/vue/index.html","19ed91e7efbcf7bd9c9ae16ef90783fa"],["/tags/享元模式/index.html","09c22657de3d78cc80f27a5adf7a22c9"],["/tags/代理模式/index.html","25a31fe68e4c5b0b7e7ba6b55fa35789"],["/tags/分布式/index.html","ba4b1dcfce962bf87ae33c4b79601c5c"],["/tags/前端/index.html","44803ebaaa99e8cc35c42d72bc3b94c5"],["/tags/前端/page/2/index.html","7ddc7b8bd517a4668aa2faecac8aa680"],["/tags/后端/index.html","5e02e4fc8b0948f5a4b51bc3172fd815"],["/tags/外观模式/index.html","affe49f36dd547048c4bb605051802b0"],["/tags/工厂方法/index.html","c506b50ff83871351724abeb34790f51"],["/tags/抽象工厂/index.html","deb19c59831d8c799028d03ece469661"],["/tags/排序/index.html","282369876ef5bbbbdda8b8c93bc3f20b"],["/tags/数据库/index.html","ab5c26ad8050330678d51408c965060a"],["/tags/查找/index.html","abea2716972afb508bcf8881ba924eca"],["/tags/桥接模式/index.html","5ba52ac2c4c296df1df06433a0419524"],["/tags/模板方法模式/index.html","2fc696f22dcdadee6d678045fa09aa06"],["/tags/版本控制/index.html","c8e3a39ba07e79ec88e59fe325e67e26"],["/tags/策略模式/index.html","e94328f9a13b81123a0c0642cc28da76"],["/tags/简单工厂/index.html","6a756e50b1ebc533d8729bdb9ca4b4cd"],["/tags/算法/index.html","341d293d4a8b0693393fac3fa14a7380"],["/tags/算法/page/2/index.html","c05117237fcfe2a5916ddcb7f5552268"],["/tags/组件化/index.html","732e91e54ca046302c933ec204133cd8"],["/tags/观察者模式/index.html","21efa50a8cc7a8c0112a3b66529dec90"],["/tags/设计模式/index.html","7147ad9ee1b440b3063cb8146aa6eaba"],["/tags/设计模式/page/2/index.html","d15fa14fcc6f916bbbe3c9e76a6b05db"],["/tags/责任链模式/index.html","1192b8a8897bebd08ad80727a4a897be"],["/tags/适配器模式/index.html","9caf18f4a405c3053fb6c5a76d5a1f96"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
