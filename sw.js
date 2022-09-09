/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","cf5bd7c0d9b8d209bb80c4551bd3bd75"],["/2021/02/22/博客的搭建/index.html","4b81d0033791ed02d460be7cebb6f9d0"],["/2021/02/23/如何使用markdown/index.html","cd96b66adb1e4e14ff5a34b29fd37b85"],["/2021/02/24/mysql命令大全/index.html","ece4460646914d3a382756a1f1f0a0c2"],["/2021/02/24/mysql数据类型/index.html","fcc85f2339ce64ad82aba52f0904d427"],["/2021/02/25/Git的介绍与简单使用/index.html","521cf9ce13feeb036142c354964546a0"],["/2021/02/27/简单工厂模式/index.html","577563571df2467c9a02d006ce256333"],["/2021/03/01/工厂方法模式/index.html","6ae7f45b9055f4e093967e4e4edef160"],["/2021/03/02/抽象工厂模式/index.html","7bb8e0a71284d19d354602adb71cb10d"],["/2021/03/03/单例模式/index.html","c3af8df22dfc151461ef45f7a75f5c5f"],["/2021/03/04/观察者模式/index.html","5dfaaf645ef4b518b1da01c90fd52171"],["/2021/03/05/适配器模式/index.html","716341018c7505221eb4ccd76057c128"],["/2021/03/06/模板方法模式/index.html","1f0cf059389a0642220092bfe6db6b8a"],["/2021/03/07/责任链模式/index.html","f2921a62765647bd1da6b76c1614101f"],["/2021/03/09/代理模式/index.html","0f30253b6853c895a1b4d182595f395e"],["/2021/03/11/享元模式/index.html","d70648cd26135230b16d0bff9d388ed1"],["/2021/03/12/外观模式/index.html","e2cbf5d83d8a51297ff06110470fbe53"],["/2021/03/13/策略模式/index.html","42ccb7343c541da0064ab66ea1153058"],["/2021/03/14/桥接/index.html","f5bafb981acb0acd97ce2ecf5574cdff"],["/2021/03/15/LeetCode-多数元素/index.html","9a660355cc5a0ebd8359187c3c5ba75e"],["/2021/03/16/LeetCode之汉明距离/index.html","880b137c0df290d401da1011c784f6d6"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","76730d70b62b6d7c7be4f83d656e145e"],["/2021/03/18/LeetCode之两数之和/index.html","ed602351d50273869663b212f510344e"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","b8fee9dcb80c8e240e93502e5ed7eaa3"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","d49f39b8faf38162f833e3530d5db3fe"],["/2021/03/21/LeetCode之有效的括号/index.html","837edcdee78334c4f0601df253d2bdab"],["/2021/03/22/LeetCode之移动零/index.html","178647149c8a87131c6f79575c4436de"],["/2021/03/23/LeetCode之爬楼梯/index.html","82b08bb320e86b924aff7041803261db"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","57a0456d015c382a8f87ee0c3ae6c71f"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","c81d1f6323f1027239c249ee1f106155"],["/2021/03/26/LeetCode之最大子序和/index.html","1663974d8598b4586ec1eb91f86f8070"],["/2021/03/27/LeetCode之子集/index.html","a91e6795e35ef4638224108fcbe3efa7"],["/2021/03/28/LeetCode之合并二叉树/index.html","682a2220c8c3b41d42d8508f5fd953f0"],["/2021/03/29/LeetCode之翻转二叉树/index.html","a26a493756af4f95f94b4f59010aae40"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","17e51ab09dcd66ae7a178a37ef24734a"],["/2021/03/31/LeetCode之翻转链表/index.html","0ef696dcb35353dcd98a003c5bd584f8"],["/2021/04/01/LeetCode之相交链表/index.html","463e8f6625a38761871631b5b29c356b"],["/2021/04/02/LeetCode之最小栈/index.html","57f5fbddb5329ab42d0b9f485ae49e33"],["/2021/04/03/LeetCode之对称二叉树/index.html","413c20270e568cc364f37a315d011b54"],["/2021/04/04/LeetCode之环形链表/index.html","563cc61957f3175c6f57d61c1e79a3ba"],["/2021/04/05/LeetCode之二叉树的直径/index.html","a0569f335d65feeeaa4f034db048bf7a"],["/2021/04/06/LeetCode之回文链表/index.html","4f9e549b26f797c40da6f49aca4e1d58"],["/2021/04/07/LeetCode之比特位计数/index.html","76e73192a082b5636ed22576f714bb1c"],["/2021/04/08/LeetCode之全排列/index.html","6f9a032e9a1b120c16fb824344571b27"],["/2021/04/09/LeetCode之括号的生成/index.html","b664b83524cbb528433e7905efad5197"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","c647316adf75597fe68b7c82aa3736b5"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","523348203bc9aab3906419524594e108"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","f87d3df4cacac0cad0d6813d5dc588ae"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","114b8feab29850c7ac297a34780ae2c3"],["/2021/04/14/Mybatis/index.html","94fd9ec4d69d0c2a6f5f8374728e6dac"],["/2021/04/15/Spring-1/index.html","b258bbe45d337c7e08dcead8a5d9c6c4"],["/2021/04/25/Spring-2/index.html","05eec27247cc4523263d335f2126563d"],["/2021/04/27/SpringMVC-1/index.html","da0938a37dba89e23b964cdfc79fb0d3"],["/2021/04/29/SpringMVC-2/index.html","a9f706ac78dbc24a38ae685624bac14a"],["/2021/05/03/冒泡排序/index.html","c01ece03627c2b1a4adff97813b41460"],["/2021/05/08/选择排序/index.html","84ae8241b488aea96a4438bf29a1a109"],["/2021/05/12/插入排序/index.html","8039da8dfd4a7467b9acd6870aa6378c"],["/2021/05/15/快速排序/index.html","cafefa546fd96492d5a2d9b7b4367b78"],["/2021/05/19/基数排序/index.html","dc66dfc15b6a150961202f3bb9a159c1"],["/2021/05/20/哈希排序/index.html","b1280e77330f5e48537ea5ff876ca374"],["/2021/05/21/归并排序/index.html","5fca6913837d7ce69f005249448e6557"],["/2021/05/22/二分查找/index.html","e5bf68c9115e74e6ca42127d42540f3e"],["/2021/05/26/差值查找/index.html","3e25d4afc87aca523fd136286f03f584"],["/2022/01/12/高精度大整数计算/index.html","e7411d8c0054affd11440eab6d49b778"],["/2022/01/22/前缀和/index.html","104ad52c282ed1614182bfe7c3d5f826"],["/2022/01/23/差分/index.html","63dd58b0f9fdd9da10318e7787de9ab8"],["/2022/04/04/MyBatisPlus/index.html","26db83eeebc332ed6517be6dbf2aba41"],["/2022/08/17/jQuery/index.html","dcfec9be1cfd527b06cfddff91c27282"],["/2022/08/19/JavaScript/index.html","4749e165ad1ce6cc6b6c8f76fd44bfda"],["/2022/08/22/Ajax/index.html","910593794527409ae9f403dc861ff835"],["/2022/08/23/Promise/index.html","c0ef8136f4fbf0f718a61e9a1a9f592d"],["/2022/08/24/Axios/index.html","eee3255b19589d3c3e7414617d021474"],["/2022/08/25/H5本地存储/index.html","bd4a0cb6cbd7ab23377eded757d7367a"],["/2022/08/26/mock/index.html","51355dc3762bae2e504c562427829c80"],["/2022/08/31/VueJs/index.html","44d44a6a2b69dad22709132a187d3a00"],["/2022/09/01/vue组件化/index.html","b18b22b403a834580d30bf3569fb3289"],["/2022/09/04/VueCLI/index.html","07aca5b5152ba1abc73ac6659d5f6f2d"],["/2022/09/07/vue实现动画/index.html","e36ccb61ce59c9443975270bf11f9f17"],["/2022/09/09/Vue响应式方法/index.html","a8837facc74475b35d8827d08dd0eff4"],["/404.html","c283cf1b51a6c5275640f36d3b967321"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","97bcf4c99339bf6d360f33deefc72f60"],["/archives/2021/02/index.html","2a633a855099f40cff8ab12e9847de93"],["/archives/2021/03/index.html","aa9eb7991cc86876cb106987981c8134"],["/archives/2021/03/page/2/index.html","28de03de838dcb8e933dd90c01b3fda3"],["/archives/2021/03/page/3/index.html","73f8835abb1876097aa8d8d7bdebd171"],["/archives/2021/04/index.html","2344a8bf33f1ad0c878052a2e7f51264"],["/archives/2021/04/page/2/index.html","19f0d376fae62596f786c61fb0bfd6c1"],["/archives/2021/05/index.html","1025c6d06ea2241592da05c68f543776"],["/archives/2021/index.html","f5207eeb70c6590779e9e7f29353eee2"],["/archives/2021/page/2/index.html","46138b6060a3c96d974a88a655edaf5a"],["/archives/2021/page/3/index.html","22f3373968ffb726f59572fd42c64546"],["/archives/2021/page/4/index.html","02891cd0f3d6b14d632ae7a571f39dae"],["/archives/2021/page/5/index.html","b20a1854257360116fb1099631966e91"],["/archives/2021/page/6/index.html","1e8077065135966cf0d71e68764ac2b6"],["/archives/2021/page/7/index.html","250d3ca63d2ea3806cc86f8541e3d41a"],["/archives/2022/01/index.html","1681df48e2d8a16fcb90374e8fe92aa5"],["/archives/2022/04/index.html","5a9e2803bbad0739de7553fc41ceac47"],["/archives/2022/08/index.html","2e9d4e39e6e7e3eedd7e7152007a261b"],["/archives/2022/09/index.html","83410151608a96df6ffc77ec03de124c"],["/archives/2022/index.html","093f758f17ba6bcb124dcb5989c058de"],["/archives/2022/page/2/index.html","658f4cad20e3ff5ad571da59d25edd3d"],["/archives/index.html","63231b445bbbae80a1ce8947cd1d9318"],["/archives/page/2/index.html","06f0c8a33e98f23982354341f379b112"],["/archives/page/3/index.html","fbae9774f5a91d0f05de7a798242e0a3"],["/archives/page/4/index.html","8f75cda4c8bd95a4ad781ef76aae4761"],["/archives/page/5/index.html","dd5e6961d8bbd5cdf526b7ca46968fe5"],["/archives/page/6/index.html","8b7304c939eba701a2ea47917708fa70"],["/archives/page/7/index.html","e84d8e0748b6761cf1c266b7e844bb72"],["/archives/page/8/index.html","c4acf31aa91e0f7e81d3eaffbf61f943"],["/categories/LeetCode/index.html","769e8ccd77768fa138cc404d8cd54eaa"],["/categories/LeetCode/page/2/index.html","f6e3fd5ba3da17dd39cab0b99ac9783f"],["/categories/LeetCode/page/3/index.html","f336125713396acbf980986ed0cd730d"],["/categories/SSM/index.html","9d62394c0ae12b595e3a8fde59986077"],["/categories/Vue/index.html","b10904a7ca047782dc659ad58264444f"],["/categories/index.html","37a5c373e9cba2c7766467f353cf98a0"],["/categories/前端/index.html","db6755ca4a86b2498dabaca0bde9542d"],["/categories/博客/index.html","8a7db977cb911af009d64d65a78050c2"],["/categories/学习路线/index.html","f53cc84cb034450b7d8bcacf3d4572a0"],["/categories/工具/index.html","70acfee1743a2ee1ceb0c88dfaabf748"],["/categories/数据库/index.html","f928f545daf50078d45169ca6298c245"],["/categories/笔记/index.html","9ad3b93d084a38021aed85b8f64de147"],["/categories/算法/index.html","4a590fd5db13516db3b8f480c7fae4fa"],["/categories/算法/page/2/index.html","2bbd4697caaf3c691acc673ae4883a66"],["/categories/设计模式/index.html","f0f06ff4218d127a8338031f78a92daa"],["/categories/设计模式/page/2/index.html","024e5331cfdfbdf44132b31891b64168"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","56fbcb364eb790bfc497592485769367"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","aa98f7dc3cb10b8651d39a1beb858f7b"],["/messageboard/index.html","7d6906ba7add49772549acdce2bed56b"],["/page/2/index.html","a82b02b38194faa91d328a8652f1c4c1"],["/page/3/index.html","76772f394ebc0175edfd78a74eb10aed"],["/page/4/index.html","fdb71fbc84bcddfbe79f8e3968bdc4c9"],["/page/5/index.html","dd70233b2d8e0d6c0f3b5b0a82c544a7"],["/page/6/index.html","c7df0127e1dca0442d2eaed2e77a4d1e"],["/page/7/index.html","b87337e65bcb502e71fce5c9495e62f4"],["/page/8/index.html","9225a36ec0f3e250775d94a2313dd099"],["/sw-register.js","84b5fdae2aa9a8196de41d479ed25b59"],["/tags/Ajax/index.html","88228447e790c4bc4abd1aaf1767b85c"],["/tags/Axios/index.html","ba922bf94736e53b7778af23e47c2244"],["/tags/H5/index.html","117a8df8cf07621025f7a5d6da1141f6"],["/tags/JavaScript/index.html","f06d069e6d7b769feefbb03d581c0df1"],["/tags/LeetCode/index.html","c24364e1306d1c9cae7f2f39ecaaf55a"],["/tags/LeetCode/page/2/index.html","e0b77e7cb5157e884ccd5928a2b28b56"],["/tags/LeetCode/page/3/index.html","7af86332cb71554cc75a93afcf094eb4"],["/tags/Mock/index.html","9138a221297bd7a83a3d540f716961be"],["/tags/Mybatis/index.html","5a5d7c5c61af10ab311786cf3d41c20e"],["/tags/MybatisPlus/index.html","55bf04cd84b65dc629e72ba2c187e763"],["/tags/Promise/index.html","2bc81c10411410d6859f7d2d026ae808"],["/tags/SSM/index.html","8de8eb337ac7d174cad2371b7b8bfdc9"],["/tags/Spring/index.html","1fe63a2f97d8b8d4826a84fdfe253ffe"],["/tags/SpringMVC/index.html","ae3cb3fa1385393ec3f7ee95c508fcc1"],["/tags/butterfly/index.html","8ee7c831a96f66c580db4d338d8da3b5"],["/tags/git/index.html","611e96c68695f4f377a39eb121500e60"],["/tags/hexo/index.html","f4354ef90db5d8f703938c1ea0b4bcb7"],["/tags/index.html","e6077f7ac3a893aa7fca66be607d1569"],["/tags/jQuery/index.html","70131890a262905c7593be7a789e55cc"],["/tags/java/index.html","a95f1a024359bf139bba20feaddbab96"],["/tags/markdown/index.html","edc7aabcfbd96421584ee9f50bc33954"],["/tags/mysql-数据类型/index.html","dc28d36528e299931d005b82c9905be1"],["/tags/mysql/index.html","a7856e974b1e228b3c03e27dfbc5bcc1"],["/tags/typora/index.html","caeeba71baf2e836a5c1f9f689f17b63"],["/tags/vue/index.html","1858b035e360e4064e0d8c5b63db02a3"],["/tags/享元模式/index.html","5a3bcaddff393882478c745dcbcdcab5"],["/tags/代理模式/index.html","d86d06634139db802c294bebd1616a2a"],["/tags/分布式/index.html","ef36d8064afce55b883d6f67253d3c2e"],["/tags/前端/index.html","6d28868fde2ea14795dc4c5fc9ae1a4d"],["/tags/前端/page/2/index.html","bdbf75a5c438e340d077712558637104"],["/tags/后端/index.html","e92138f785fecc1407c5c94a29b8d9d6"],["/tags/外观模式/index.html","66a33d31da81254297197a09328eb568"],["/tags/工厂方法/index.html","8628644ba4a131318da8c16dcf115570"],["/tags/抽象工厂/index.html","37ab420ae372c372f32caad8f40559f7"],["/tags/排序/index.html","02e60215f50ac53282b840823ca57b3b"],["/tags/数据库/index.html","b96508037c5a5037b297ab2635af9c15"],["/tags/查找/index.html","00d3810d18b7f6a9e6d80b1883a3e685"],["/tags/桥接模式/index.html","62bbe8f683bf48aa7ed0ca24ee246348"],["/tags/模板方法模式/index.html","18d033fdb9d4194ca9e684887f42d295"],["/tags/版本控制/index.html","132fbd89fc001a98bce40dad6193d288"],["/tags/策略模式/index.html","06f60924324cc29b9a30b46e9cc36e04"],["/tags/简单工厂/index.html","4122330700ef280d54162a1866386ab0"],["/tags/算法/index.html","8a337bfbad7786afdcd2c0b1ed24df99"],["/tags/算法/page/2/index.html","31539c6a7b8b36072246d4dd670dc0e2"],["/tags/组件化/index.html","2574e161200af7a5ed8dfabba82f148e"],["/tags/观察者模式/index.html","7ecb0c640de198f1417de18cbeb34b72"],["/tags/设计模式/index.html","2c712540e00864a75771c39c9a77643f"],["/tags/设计模式/page/2/index.html","1e5f576fe5c26f72097247bed4d065de"],["/tags/责任链模式/index.html","0579e608086ea1fc92d41bc38f9ec971"],["/tags/适配器模式/index.html","935e3d3515ecf7c7aa0bf48257f1b01b"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
