/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","c9a6d97d81850a07484deed4f9920cc8"],["/2021/02/22/博客的搭建/index.html","8d2ee6eb863cccd123f5b181f52eb480"],["/2021/02/23/如何使用markdown/index.html","e489ff12e60ad3c76316fbc4110d83ca"],["/2021/02/24/mysql命令大全/index.html","867ad7676f379ef4ae1bf2706ab27e88"],["/2021/02/24/mysql数据类型/index.html","4a970a4e6edbc3701a1ad1b1b1ff9995"],["/2021/02/25/Git的介绍与简单使用/index.html","e594e82cb4b28f5d60e085320ee59d30"],["/2021/02/27/简单工厂模式/index.html","9ebeaa9aa6511627e18c219753b567e7"],["/2021/03/01/工厂方法模式/index.html","0f687b806c8f225ccaef79c0bb3abe81"],["/2021/03/02/抽象工厂模式/index.html","7d8a2d9a0e794887093c3ab650114e9c"],["/2021/03/03/单例模式/index.html","ba434821603053faaa7d660969d98263"],["/2021/03/04/观察者模式/index.html","61154ca221502e0c181248affec0f08f"],["/2021/03/05/适配器模式/index.html","4b1df6236031e124669758acb458d430"],["/2021/03/06/模板方法模式/index.html","698a8950ed8f5c4eab47202805455ffa"],["/2021/03/07/责任链模式/index.html","297f64860e748d92da30bf4bbf4d0bf1"],["/2021/03/09/代理模式/index.html","c600cdd92d874def1c6b5f04d60ebda7"],["/2021/03/11/享元模式/index.html","57405d78b27bd01e07d0302464eda149"],["/2021/03/12/外观模式/index.html","b4ffc990c6d6105ec651e6140bb21d78"],["/2021/03/13/策略模式/index.html","058795c519f7bd8667f20778965aa223"],["/2021/03/14/桥接/index.html","d03c9785168d3023b5c91c3d7cb5670f"],["/2021/03/15/LeetCode-多数元素/index.html","772309816db21f57e88a0bb484bfa625"],["/2021/03/16/LeetCode之汉明距离/index.html","a2ce63c85249fab1f189be0f23cd5465"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","34ec924206705829e4e553cd6af947df"],["/2021/03/18/LeetCode之两数之和/index.html","c58c1a6a53becba793e52405420904a7"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","971c01d2a4a14901b8b741773b4a366b"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","ae0bea8645e6406f9ac17dd6017883fa"],["/2021/03/21/LeetCode之有效的括号/index.html","e7877af43c48e084387b081e99d220e0"],["/2021/03/22/LeetCode之移动零/index.html","92f2a7640f495ab8da6568f478e1551f"],["/2021/03/23/LeetCode之爬楼梯/index.html","565262606a539cc6afbb06632fe5d006"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","1790ba03b96f9842ef7f0a143198f377"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","aa73ffc0bb6ff308b00b10f10f207d1d"],["/2021/03/26/LeetCode之最大子序和/index.html","ec9b2d6da48651ba195317e5a9087b7d"],["/2021/03/27/LeetCode之子集/index.html","207a85329a533f4a0345f7173ba3513b"],["/2021/03/28/LeetCode之合并二叉树/index.html","9792b63ed8ff3fabc11271de06f2b6b7"],["/2021/03/29/LeetCode之翻转二叉树/index.html","cedb6f4aae2f6451346d3bf3248a2760"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","1b2d127f708e33a7d1e5149f0d9ee8a6"],["/2021/03/31/LeetCode之翻转链表/index.html","ba455cd1e12fe8aab32f436c1bcae2ec"],["/2021/04/01/LeetCode之相交链表/index.html","48b362a447cbf7f7db008f627cb1c621"],["/2021/04/02/LeetCode之最小栈/index.html","40ce9f834b0aa01518efb9bb07bbe009"],["/2021/04/03/LeetCode之对称二叉树/index.html","0808da46fc5f5424a30c559d3e53cf68"],["/2021/04/04/LeetCode之环形链表/index.html","7a1cdf9abca99e0e0ab6c155aff20564"],["/2021/04/05/LeetCode之二叉树的直径/index.html","bbc715e5d11d62519b7cb480225fc17c"],["/2021/04/06/LeetCode之回文链表/index.html","8ca471507ea456986835c29d784aa7de"],["/2021/04/07/LeetCode之比特位计数/index.html","1c9f76d766c5d2e494f9764edc0724c7"],["/2021/04/08/LeetCode之全排列/index.html","04c3c6c71fc5921eb50029c3e5a717a9"],["/2021/04/09/LeetCode之括号的生成/index.html","5d18759f97e0f9e3dabcb1b477447630"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","22dfd1240b55363959a0d30c395e2985"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","677e82b503f47c963ea33690ec7cf556"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","216b0b75cbc7318f5960ae1280a04afb"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","a968dc7304e2d939148aeb3672455fe3"],["/2021/04/14/Mybatis/index.html","154038845521973f7c44169cc5519aa8"],["/2021/04/15/Spring-1/index.html","4d67934209186e951164ea32c4934e20"],["/2021/04/25/Spring-2/index.html","1f515c5b5ebe3d20ee7bc89cb16123ed"],["/2021/04/27/SpringMVC-1/index.html","1d9ff97a4206e999ccaa7643ab76c6ce"],["/2021/04/29/SpringMVC-2/index.html","2f7441e85bd3e49b2204bbbc5d9f429b"],["/2021/05/03/冒泡排序/index.html","ddad7996efc1f91a6e85e8f3000a5e5d"],["/2021/05/08/选择排序/index.html","4d5f17372873b0c32c85ab7c15505faa"],["/2021/05/12/插入排序/index.html","3a9ac718f9120400af6419352ca24b09"],["/2021/05/15/快速排序/index.html","05fea4b0eef01eb6383a9220464e9184"],["/2021/05/19/基数排序/index.html","617a201b5ee92e635a4ccd89a253c211"],["/2021/05/20/哈希排序/index.html","6d3f1749e9fdeee0f29f85773d09096f"],["/2021/05/21/归并排序/index.html","3a7e215289d0309f89ebcc5f5ad64424"],["/2021/05/22/二分查找/index.html","7b17da3dd2a2c8fc9f85ff6bc9793c91"],["/2021/05/26/差值查找/index.html","bcc0a1a0a89a1de6ae0fa927d6802424"],["/2022/01/12/高精度大整数计算/index.html","ab03248d5a1324ccc655d6ce421fc55d"],["/2022/01/22/前缀和/index.html","067d2b986f77987d2eb49d5cf3df6855"],["/2022/01/23/差分/index.html","4322a765e6589f4d6e4af6d8405559dc"],["/2022/04/04/MyBatisPlus/index.html","27eb2ec3e0b9f0ba0c42c7d7abe0a22c"],["/2022/08/17/jQuery/index.html","fbe39e61180a66db87acec9de879ed40"],["/2022/08/19/JavaScript/index.html","feff819b904914b18058fd5362e50d09"],["/2022/08/22/Ajax/index.html","dac3ce70f59c1646edfdc603de15b879"],["/2022/08/23/Promise/index.html","00697ffc94e51103eea875411e62525a"],["/2022/08/24/Axios/index.html","d5190e0d63b799be9c4c9efb30e61b98"],["/2022/08/25/H5本地存储/index.html","d70f1bce0650281b5d4a1d57b5a82b31"],["/2022/08/26/mock/index.html","19175c6ea0986f0320630d3bdbfe7c62"],["/2022/08/31/VueJs/index.html","69810cf1cb3bc967d55cc87c9da2dabe"],["/2022/09/01/vue组件化/index.html","e9b6d79650caac2d91b43b1941d0f54a"],["/2022/09/04/VueCLI/index.html","1275a130be53604c7bfe930f645d4164"],["/2022/09/07/vue实现动画/index.html","6e5f17377323815e7c382110332baa24"],["/404.html","46908f0b790896b5aab234c41f51aeb8"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","869fe61d2b05b2b96550bd67197516bc"],["/archives/2021/02/index.html","ddca94c67149f334409f0835ec33c424"],["/archives/2021/03/index.html","95f894dce8320ae2040010b1d519a509"],["/archives/2021/03/page/2/index.html","6164f5aa093590fef3aad4b2f1aee130"],["/archives/2021/03/page/3/index.html","b6644a79ae07888bd2d49b05d21ec1f1"],["/archives/2021/04/index.html","c7d204b814b812f2bd6efef44c51ec27"],["/archives/2021/04/page/2/index.html","b242d7a685e4849a9c07b745bc9fe26a"],["/archives/2021/05/index.html","061eb34fa3949b69fc3a6dd34e8490ba"],["/archives/2021/index.html","d7e0c00ddbf633f5dac102d18724e692"],["/archives/2021/page/2/index.html","b92260a3b36e19f0d9d0eb93fed6b370"],["/archives/2021/page/3/index.html","af5073d95db2801430f075d9a80eee30"],["/archives/2021/page/4/index.html","5b54c909ae7d18482559cc5f35530689"],["/archives/2021/page/5/index.html","4da4337c70966d26cdd0759cfc86c073"],["/archives/2021/page/6/index.html","7d6d7f1326b761e71a348a68ce669435"],["/archives/2021/page/7/index.html","c743602a68027f4ecfd77752ecdd7128"],["/archives/2022/01/index.html","cbd7b6a1e024af161e61e78ce7ed4cfd"],["/archives/2022/04/index.html","6aedd93e5f220ea48a81c9cfa458d893"],["/archives/2022/08/index.html","5c2ea8ad8c67f04573caa3ab7de63ae1"],["/archives/2022/09/index.html","c65e8ba501447d585f947f10391a2b91"],["/archives/2022/index.html","a4247516244b01d01d9fb190a11748c7"],["/archives/2022/page/2/index.html","3f8d20f5c590510ff311d17b5152c562"],["/archives/index.html","6d2685140225e57730790fcbb4e0832a"],["/archives/page/2/index.html","68269278b1f01d6b33705224ae82ef95"],["/archives/page/3/index.html","00943df59e3ed14315f55170e7de6896"],["/archives/page/4/index.html","0202d6330492a23e6190748f8d871538"],["/archives/page/5/index.html","52632e2a187b4a4cd07e623b99cc0d59"],["/archives/page/6/index.html","6c5d889243aaeba1ab4dc9858005cb14"],["/archives/page/7/index.html","32e29cb4fba18234a9d9015bad2545c2"],["/archives/page/8/index.html","65d3bf565923c043b23e35e1898e1674"],["/categories/LeetCode/index.html","ca32ef49ffaf3e1d408424a81df5416e"],["/categories/LeetCode/page/2/index.html","b740f5a33ece352b461a3cfc9830f472"],["/categories/LeetCode/page/3/index.html","4e58f3a4d9e88c694010b6bdd693b1c3"],["/categories/SSM/index.html","f8e308b21c9e080f5f2471bd856b7904"],["/categories/Vue/index.html","67b9217bce064556225484534c70d690"],["/categories/index.html","07e18f8d73da8b341d01b761133d5580"],["/categories/前端/index.html","82bcf78e00623e22859de7a5eecf7616"],["/categories/博客/index.html","c5d755c3db280b72162eccce5429a85a"],["/categories/学习路线/index.html","f0e5e99e72635a7ce70f15506a23329e"],["/categories/工具/index.html","49f3a44fbaac6b57e2d402cf97573996"],["/categories/数据库/index.html","34455301e84264b1cca9065d22a789fe"],["/categories/笔记/index.html","95981109a5ae73056b2da4ceab58d16c"],["/categories/算法/index.html","e45f608bdc2d8ef6b2bd7c9b3906d91d"],["/categories/算法/page/2/index.html","00244101d3919857721b49ae87e9e6c6"],["/categories/设计模式/index.html","a31eea86d0e14c5aa6059e966aa2643e"],["/categories/设计模式/page/2/index.html","14ea88cd924a23687fbf6362188c5643"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","7faf942541245dce44a382b368abd626"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","f8bc47f28d9c962b726639257f713c79"],["/messageboard/index.html","547247777895d00b10262fd8da568df1"],["/page/2/index.html","5f29aa7f1d8a9005ba622ed919896ca8"],["/page/3/index.html","2585422bb6f4663cd50c2e58b16a5c24"],["/page/4/index.html","0e75ccdb4e443b8103d446e5e3e12f8e"],["/page/5/index.html","0294090f0d7bb22fa47fdb8205e7a4bd"],["/page/6/index.html","5a55a48f812e8aa68a6093d00831f90f"],["/page/7/index.html","eaacde5302f109055b9f498e275ea9c4"],["/page/8/index.html","b7d28a03eaefc92a3ed210953a8df147"],["/sw-register.js","d236c52b209cb4f07fb7e883be0084c8"],["/tags/Ajax/index.html","b09e793bc2cf3e6f5047ba66deec9f14"],["/tags/Axios/index.html","ae8507f5b0f925fe6ff3fa159bac8278"],["/tags/H5/index.html","580d70f4cc6c38570a86401f42b1205a"],["/tags/JavaScript/index.html","701546a25bd13c1dae0fff75c205ae4d"],["/tags/LeetCode/index.html","56a926ed410f08a7c26b90c6a8c8ec72"],["/tags/LeetCode/page/2/index.html","5474730e7d01b91d36f43dcae8a172e9"],["/tags/LeetCode/page/3/index.html","c2a7b3bdc7077450ddb25fbf0fe92e1a"],["/tags/Mock/index.html","79e6197276dac309da876c06d8b61c20"],["/tags/Mybatis/index.html","e203989aa47e84ddde1becbcd0b872d0"],["/tags/MybatisPlus/index.html","dbfbd1c28089c5c3fe123385a5a1febb"],["/tags/Promise/index.html","b932f51fadd6ef19fa6a4906184779c1"],["/tags/SSM/index.html","87bc342a489e033abe959a3d21145018"],["/tags/Spring/index.html","9eba00d4729c407d373f681606953b8d"],["/tags/SpringMVC/index.html","f3389acf58f2707602f61e5888e2e87a"],["/tags/butterfly/index.html","523b33eee3575c9158307d1825d8158e"],["/tags/git/index.html","8c98f251b3acafa0be68bd7ee873e3c6"],["/tags/hexo/index.html","719a7b3297b9ce798b9e037d5335a4a1"],["/tags/index.html","9591e42e2f5fbe187dde67c43cdaf91b"],["/tags/jQuery/index.html","95cf23041ec6a10661b1e7dbfe504aa1"],["/tags/java/index.html","9172b273edae6b8becf7e82d609b3bd5"],["/tags/markdown/index.html","af055cbf0ff9d90f999897eccc181ebb"],["/tags/mysql-数据类型/index.html","29ef879f66283ab74a48e346f59cb2d7"],["/tags/mysql/index.html","f68451921607c1a5b092a9b032676607"],["/tags/typora/index.html","783b16cb122c71df07d4e86d91488fad"],["/tags/vue/index.html","d98edde04dcfe5071f2c7f3244c5ceb1"],["/tags/享元模式/index.html","bdf57276e01cb5fda82f889f568ec25b"],["/tags/代理模式/index.html","7a0b8ce44bb5bac5d06636f29672d7e3"],["/tags/分布式/index.html","7bce3a6c3f1a47fc62541e5941f388f4"],["/tags/前端/index.html","61ec728093ee04e01033b71b471c78c3"],["/tags/前端/page/2/index.html","8590463b3afc41f206b784a8b2a41739"],["/tags/后端/index.html","c2b0ffb999c4acba94c2a8db6c5a80e2"],["/tags/外观模式/index.html","815c7e1f93a9cf0c1e78b4478afef753"],["/tags/工厂方法/index.html","2da53b8c4455eae8882b5532bc8255b9"],["/tags/抽象工厂/index.html","03c37c9f8c72e2b8d4948b0832a12e9a"],["/tags/排序/index.html","dc65fa24a3e4624077d939f554314cbd"],["/tags/数据库/index.html","1dfa120f171855dadba9b4710f6b9970"],["/tags/查找/index.html","0d58a5762484b131c1225c7be446ab85"],["/tags/桥接模式/index.html","2873e89c584b936c4553001b7ca56945"],["/tags/模板方法模式/index.html","090bf92289ed40509d31a4ffec7a2eae"],["/tags/版本控制/index.html","d174de111897cda6801e127375623c00"],["/tags/策略模式/index.html","00bf390fdf8549909fa099e28165ad0b"],["/tags/简单工厂/index.html","e1802eb640c9455f3907d66616a97f78"],["/tags/算法/index.html","e5c94402a4602fa94e920ef196d73e39"],["/tags/算法/page/2/index.html","61ed0113ec16e3516bf513ca48d43729"],["/tags/组件化/index.html","78be519741413bf6605a0c5d8e2e2abc"],["/tags/观察者模式/index.html","e675776e3b5aa702b3cec7334e703899"],["/tags/设计模式/index.html","76431978b1ce7c39e9f84d2c58d66ca9"],["/tags/设计模式/page/2/index.html","b3ac7764d2c3ace89ece74efab09078c"],["/tags/责任链模式/index.html","483c2e628b9869f4ebab7b676f18cb57"],["/tags/适配器模式/index.html","4198cb539aca7299eee33001b2cf05a8"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
