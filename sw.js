/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","a68b5872a8ade737cffd7641b090fab8"],["/2021/02/22/博客的搭建/index.html","d9220ea2e59188f41dd36ed1a4755fec"],["/2021/02/23/如何使用markdown/index.html","6b267bc84a231b5f1fa639b558b04af5"],["/2021/02/24/mysql命令大全/index.html","cf7c6a48e0140a6c418867ebcf9160cf"],["/2021/02/24/mysql数据类型/index.html","ecce4314fb69f689c4a5afd118cb96ab"],["/2021/02/25/Git的介绍与简单使用/index.html","b403fe172c0e0311b13bec9370f4671c"],["/2021/02/27/简单工厂模式/index.html","4bb679347d3a97f8edd1d2a4dd628976"],["/2021/03/01/工厂方法模式/index.html","ae7e300ad93a2c6dfabaf989298704c0"],["/2021/03/02/抽象工厂模式/index.html","025bf7d272501ee958fcfd20b0da724a"],["/2021/03/03/单例模式/index.html","8acd615163bee44d3372588a4c54d22e"],["/2021/03/04/观察者模式/index.html","04fe318ea3ae41a717e67fef720c4a65"],["/2021/03/05/适配器模式/index.html","87678d7916c8b4fdda64f6e788ec3f2d"],["/2021/03/06/模板方法模式/index.html","74d852c2e77ba0ded551a25b7fd4f9a3"],["/2021/03/07/责任链模式/index.html","1ad9032dd3ea38e7ec19ca38600ea246"],["/2021/03/09/代理模式/index.html","940967c04596ac12ea1bee500f964535"],["/2021/03/11/享元模式/index.html","1a27211d321d93ff31c4864cecf89ee0"],["/2021/03/12/外观模式/index.html","c58757fa551d071001f26369bb62be75"],["/2021/03/13/策略模式/index.html","7a1b0531b171dcd8db454691bb89bb23"],["/2021/03/14/桥接/index.html","5eb9f0495d1fbadd9ec9319eaf74d76b"],["/2021/03/15/LeetCode-多数元素/index.html","d90d499e7b0b00e800c270dbcb725c79"],["/2021/03/16/LeetCode之汉明距离/index.html","390e4d18f6741612be6e1f6569221698"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","1244c8cb906fe31b302cfa39886a4ab9"],["/2021/03/18/LeetCode之两数之和/index.html","e0393f8a2bb931e1f78e96a0e5621f97"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","a7548113d6a166f86a3b806b2964726a"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","8fa04ae0350ca0f2c5302a27c8ef8cec"],["/2021/03/21/LeetCode之有效的括号/index.html","6ba6ea33be8994505898fb2472f4ec9e"],["/2021/03/22/LeetCode之移动零/index.html","f0c43e14888e5a30d33fafa4198d159d"],["/2021/03/23/LeetCode之爬楼梯/index.html","53d2705b2d61aa44b5869b4703e9ed75"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","7ae93f65468c3014fdae14092218c0fb"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","b2172f70cf649c2ce0a496302f989a39"],["/2021/03/26/LeetCode之最大子序和/index.html","8ba347092cc2e830ad8732d08c19bdfa"],["/2021/03/27/LeetCode之子集/index.html","91ca771db71d7e7337d3e0f6fe0a3894"],["/2021/03/28/LeetCode之合并二叉树/index.html","abf5e69497471b52aa3adc19cd523100"],["/2021/03/29/LeetCode之翻转二叉树/index.html","9f7fcdb79caf3540c9b0136d43c5a8c6"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","15f90302d36c4b491bff15d59eaf11fb"],["/2021/03/31/LeetCode之翻转链表/index.html","6e8a2718dcd6fa07aadacd2ee56c8aa6"],["/2021/04/01/LeetCode之相交链表/index.html","154c14621a34e082c850d63f8ca60391"],["/2021/04/02/LeetCode之最小栈/index.html","91371adff18826e9fbdbb521d6361a80"],["/2021/04/03/LeetCode之对称二叉树/index.html","f08755f3f005e090c74625a126aa1fd3"],["/2021/04/04/LeetCode之环形链表/index.html","a4a522fee812d54e8f2cb46385029f01"],["/2021/04/05/LeetCode之二叉树的直径/index.html","aea94a10776a43aab7e0cb0ff50011a3"],["/2021/04/06/LeetCode之回文链表/index.html","2d2b081d091b24e161c19520629cd142"],["/2021/04/07/LeetCode之比特位计数/index.html","76ef3dee4808219c6576b1a6b6e2e602"],["/2021/04/08/LeetCode之全排列/index.html","cf426716695398e51ce6ad2aef3e80c3"],["/2021/04/09/LeetCode之括号的生成/index.html","09d3cc0aecd3d08022ad25457f955981"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","204c0b1ac4bff647d7af812b002e8a40"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","8ec8fa8de17b922219f5b3b11fbdca40"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","d21987475edb52437701b1ffc61c09ca"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","7f5fe417c27dc0004d0afe012807cc05"],["/2021/04/14/Mybatis/index.html","8e83aae1d84a8c24375db6a203f2ad31"],["/2021/04/15/Spring-1/index.html","07c665fab16bc217d0072bd08dc83776"],["/2021/04/25/Spring-2/index.html","680ed21fb1254696f6995d2e45119610"],["/2021/04/27/SpringMVC-1/index.html","bd80a13f2f0749fc1cfa769576108880"],["/2021/04/29/SpringMVC-2/index.html","b716360b08e84fdd3736855e3196d371"],["/2021/05/03/冒泡排序/index.html","25c04e8b0d3298f209d915a09124c48c"],["/2021/05/08/选择排序/index.html","b9df5f045525b523198d97dccaaabad8"],["/2021/05/12/插入排序/index.html","b8ee610d44310a83ceb694d027d3c7f5"],["/2021/05/15/快速排序/index.html","ce7734e33b95014af0e07a5efd25781d"],["/2021/05/19/基数排序/index.html","1d38faeb7ff03ae34636946b692b01ed"],["/2021/05/20/哈希排序/index.html","1ae37ca7c11c14d3b232771de8b9cb21"],["/2021/05/21/归并排序/index.html","cec23eab4e5ea82e55e64069487d005a"],["/2021/05/22/二分查找/index.html","540140bba7372e505c117a5140f75344"],["/2021/05/26/差值查找/index.html","28929f4f23411dc9eefc994882815aeb"],["/2022/01/12/高精度大整数计算/index.html","7ff7e6061ca72af407bf145ad3b37afd"],["/2022/01/22/前缀和/index.html","15650e87788acdb61cfd528d01f7bc2d"],["/2022/01/23/差分/index.html","2c81b056377a149cef7ff26ad4e292cf"],["/2022/04/04/MyBatisPlus/index.html","c30b09a2a3cfa82aa1df38291d5cfbd0"],["/2022/08/17/jQuery/index.html","960c5a951d3ce83be168185ce6220e3f"],["/2022/08/19/JavaScript/index.html","b8b52d1e678ffa99cbd283dd35572634"],["/2022/08/22/Ajax/index.html","549ec63189fa94e64c93ac8c0c424e8d"],["/2022/08/23/Promise/index.html","b942b080e2c09dd6b0cb8941b111b2c5"],["/2022/08/24/Axios/index.html","ccdff87468947fd89a7abbf7a34fec84"],["/2022/08/25/H5本地存储/index.html","f24a1232c8518122c77362dcb60eb7e5"],["/2022/08/26/mock/index.html","e5dca6960277dbafb2c5759d2cdc815c"],["/2022/08/31/VueJs/index.html","62f72f0f9da08ea9b6161a599ad9f2a5"],["/2022/09/01/vue组件化/index.html","403880f9f2ac6b46f0737885983bab73"],["/2022/09/04/VueCLI/index.html","cebef029b4af6aac6ebb0cf368ba6ffa"],["/2022/09/07/vue实现动画/index.html","9c69ca2078721fe9e28f728f10f98cb4"],["/2022/09/09/Vue响应式方法/index.html","59ca2b341c61bf3b229f673fa790a7a2"],["/2022/09/10/Vue异步请求/index.html","90b8b695772b95731e2fa1d39e58190b"],["/2022/09/11/vue-Router/index.html","9462812f7561524e0ca780d970992605"],["/2022/09/13/Vuex/index.html","bfee64b9b88d38e938f0e4e9ea368b25"],["/2022/09/15/SpringBoot/index.html","5c33971a7d135f370f5ecb4885498319"],["/404.html","25f84925cf43bf20fdd53a3999a21a6c"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","cfb4325293adc4e3777186a996e94471"],["/archives/2021/02/index.html","abe46e49b960f6169d7e358f02f1a6ae"],["/archives/2021/03/index.html","88a8df88f9bceb3dfb5db42d62c42c9b"],["/archives/2021/03/page/2/index.html","63d7467e87d717dda6f8570224c86b16"],["/archives/2021/03/page/3/index.html","59295293ca1071504dce4e0a732f8b0d"],["/archives/2021/04/index.html","c6e4bba297c708ed3db4316199c6bcd7"],["/archives/2021/04/page/2/index.html","327c88e24011667c26872917fc539265"],["/archives/2021/05/index.html","cb14452d99f8b9aa21c32550320a26b6"],["/archives/2021/index.html","8ecc4c13dc9b006db42fdad8b3b76c76"],["/archives/2021/page/2/index.html","51563ad24e2a4d9d830993295349cb58"],["/archives/2021/page/3/index.html","8fbb1c2725dabb4e211992874b691e1c"],["/archives/2021/page/4/index.html","f3dd71c2f3e31a58d4db25fc908c31ff"],["/archives/2021/page/5/index.html","bf5b526b04ad4bc1639974214aad3ce0"],["/archives/2021/page/6/index.html","20fbd155b2444ca780e934dd6e87e657"],["/archives/2021/page/7/index.html","d6198d9e8e56761a8067bc97a60d3ad6"],["/archives/2022/01/index.html","a17fb0bf18c15ca26a32157dc29fb8c9"],["/archives/2022/04/index.html","f9952b53a46354f6a84f2bbdf88ee156"],["/archives/2022/08/index.html","0e4a22ab27a500eac8d4c09aee58ff07"],["/archives/2022/09/index.html","ed2644adc5545b18fc84fbeda8c43154"],["/archives/2022/index.html","4f86646cc56fbd5412684e056f2037dd"],["/archives/2022/page/2/index.html","3a60084e8666addf887df9316f94040d"],["/archives/index.html","4e3d9f43cfcf1a6539b16b176fd50954"],["/archives/page/2/index.html","92868d7c7ec7062cf50ea54c0410c46b"],["/archives/page/3/index.html","ca33a82a7e319068675191fe7d070470"],["/archives/page/4/index.html","773ad69c36b4d2a0847b25414510df44"],["/archives/page/5/index.html","b0fb7743d59771cd5ca891213aaba76b"],["/archives/page/6/index.html","b0c68ef6037c7c8b94538758083a0767"],["/archives/page/7/index.html","ee60da2a2863735c78d24a5a21eab564"],["/archives/page/8/index.html","3a557e177176e75259956125d61bf5cc"],["/archives/page/9/index.html","8037725fd5d92273066ecc0dfe3847ac"],["/categories/LeetCode/index.html","e809ba135995684f6a768fa3ea18ba1a"],["/categories/LeetCode/page/2/index.html","5dd35c32c7285d7636673d30d680176a"],["/categories/LeetCode/page/3/index.html","6eb3ea3da35b95c4844e2da83d35bff9"],["/categories/SSM/index.html","8b417efd18c6d452ede845e3cfaaa225"],["/categories/Spring框架/index.html","58f4acb29b6905fe6a2917ac76d52f6c"],["/categories/Vue/index.html","5b41dee45e1471beab9ed83ed6bf0ab3"],["/categories/index.html","3931a106488e6a05490e3bd82019d8d9"],["/categories/前端/index.html","a2fa55804c6f3afdfe0171314838fc84"],["/categories/博客/index.html","477c460c18447ce20c19bffbcfb1a8fa"],["/categories/学习路线/index.html","4d0d249c2cbfa5d23610cf8d66b4fcac"],["/categories/工具/index.html","c0a0093e4b34114a1f96f15d0a9fc42d"],["/categories/数据库/index.html","c5213c19459f3f3948b16d37e6904062"],["/categories/笔记/index.html","b4bc99d1d37321f7aa4d9c88b3ac5835"],["/categories/算法/index.html","59eadb92009d5b0e7aba4288e9fc632a"],["/categories/算法/page/2/index.html","19bdd626b17c62a41a7b928a3a4880db"],["/categories/设计模式/index.html","559b87b1f51d7e186b853d426aea7cb7"],["/categories/设计模式/page/2/index.html","fd58025ae59e40420425b218dfaf185f"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","7eba853464a6fdd1c2bc07e9b98b2b45"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","83aaf6d61cec83b8b5a9690819ee6f78"],["/messageboard/index.html","cee1c6e4417e9c05efbd02158686e4a6"],["/page/2/index.html","7ca073b6b8ebde60277873eaa3d88ff0"],["/page/3/index.html","8ff5e487647e2509e56b50ea4dfa2f05"],["/page/4/index.html","17a2713f5bdb21d1017f65cee023b2b8"],["/page/5/index.html","fbb1ccb4ab23c3c822a0366fc445f75c"],["/page/6/index.html","015489afb1424031df20276a651630da"],["/page/7/index.html","9d2e096eed45ef9b68daccb87570cba8"],["/page/8/index.html","103b9acae15a1217169c526a444676d5"],["/page/9/index.html","38eded7e17bee1f9ccc2f4cfd09054e0"],["/sw-register.js","639d08a12d8026bacf51720643ba1204"],["/tags/Ajax/index.html","d85f677b597a8d5ed477bf7301ab6864"],["/tags/Axios/index.html","cf9ba2b100e5bd28269bf452ba510fa9"],["/tags/H5/index.html","245d39105a1fa6431087a58421de8c2d"],["/tags/JavaScript/index.html","d89a5a5f31f3d99f9105560c47e7f52c"],["/tags/LeetCode/index.html","20389cf97ca8d3230e90d43c9eb1fbed"],["/tags/LeetCode/page/2/index.html","7ff52c32676ca803e0fa081134e634f8"],["/tags/LeetCode/page/3/index.html","dee7a115ac72d2c3e636cef6d44aa001"],["/tags/Mock/index.html","f38f076a8948788b7df82f49b07e54d9"],["/tags/Mybatis/index.html","c0fd45b77bbc815abfb6ec4d05e32b50"],["/tags/MybatisPlus/index.html","ae3c39046b60357b04c8a60fbccc62b3"],["/tags/Promise/index.html","a8301a4b033b36c92a676c6ace43576d"],["/tags/SSM/index.html","78cee1edb7908a1dfa9d2987b0ef7abb"],["/tags/Spring/index.html","09971c429cabf08c8b1fa4f2df2fe491"],["/tags/SpringBoot/index.html","db8da8f6d0d3887069132e82d0a1d4ba"],["/tags/SpringMVC/index.html","304be3588ae64ecbfbf5edb314fb1a8e"],["/tags/butterfly/index.html","9a6f4a20e4dbc343be6c0c50302fc7d8"],["/tags/git/index.html","421c85a0dcb47bf77b76694fdf5366ae"],["/tags/hexo/index.html","2661beeacc7b1486a01e3c5547960b34"],["/tags/index.html","e3603b5ef8b5fae749479ba77035e4b2"],["/tags/jQuery/index.html","6c0f642906778c3585955562064a3925"],["/tags/java/index.html","84882f527e932c1643239796e4ce79c0"],["/tags/markdown/index.html","391fd7ed1a28765f95c43ac923244b15"],["/tags/mysql-数据类型/index.html","41ffff85fcb0212a7f28a0a4bef983a7"],["/tags/mysql/index.html","895e615abaeaa9808d131b59ceeb6723"],["/tags/typora/index.html","a71322704b2d41db344dc41ead0dcbf5"],["/tags/vue/index.html","1896c878943deace2ed5c767321b01ab"],["/tags/享元模式/index.html","810d5c138541e1d16b449943389db194"],["/tags/代理模式/index.html","b438dd09077ddd9e3f6a8b4f515f4a5a"],["/tags/分布式/index.html","3b71113de11885ac6b2d6d4e0ba0f526"],["/tags/前端/index.html","59c2f901ba3ef2ae17471e0f2ed274df"],["/tags/前端/page/2/index.html","9e0a9d4e77dd40291b35eeb11d76f635"],["/tags/后端/index.html","420fd27bc34e25f59b4ecb5abca3856f"],["/tags/外观模式/index.html","528d2c2f22dbf3c083de1fa75c50f87a"],["/tags/工厂方法/index.html","9651ec185b291adc52493f5fa7f65fc5"],["/tags/抽象工厂/index.html","1bc479c5651e16ea8468ad6e9698fea1"],["/tags/排序/index.html","961027836383e4ae5131a0958d852aaa"],["/tags/数据库/index.html","d9ec215e36eb0214cde0f1070bb26fab"],["/tags/查找/index.html","f471a86fcc30b9a1ca3fc2fca8b406e3"],["/tags/桥接模式/index.html","0b044076f9701e4c7069a62a8839c185"],["/tags/模板方法模式/index.html","0a51756e541e04e8cc9e48b50e3113b9"],["/tags/版本控制/index.html","1be92ba570f77e5c2c5fdc440f9408e3"],["/tags/策略模式/index.html","4d135c747106b38715d16546de2b854d"],["/tags/简单工厂/index.html","659b4a63d71d8c16f044475dddb79db3"],["/tags/算法/index.html","253b2f84c2b612be8d1157e1fd0eb14c"],["/tags/算法/page/2/index.html","5b9782308f338ef3aaed71fed69d3878"],["/tags/组件化/index.html","38e79856060610e115f707738ce2f39b"],["/tags/观察者模式/index.html","4bc9183c58c8bc7da52791a5c1e9b41e"],["/tags/设计模式/index.html","3eeacda09cc580221cbd0c371cdaa5ca"],["/tags/设计模式/page/2/index.html","3f23277f491b6c2113f955fbccc74229"],["/tags/责任链模式/index.html","345713ca440107337f6f3d632fb71271"],["/tags/适配器模式/index.html","102f4818b7f4a4b23aacc918d5bfd960"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
