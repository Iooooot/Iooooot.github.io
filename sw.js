/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","b0594cdf320a0f57e7752db6d823c59b"],["/2021/02/22/博客的搭建/index.html","46f58bb381161c85147a04dac8b355f8"],["/2021/02/23/如何使用markdown/index.html","b8cbe7f373b32fd8686077eca9941e91"],["/2021/02/24/mysql命令大全/index.html","ca70d4d4b55776a49f82fffba82911cf"],["/2021/02/24/mysql数据类型/index.html","792e7b343651af41594db7616aa70120"],["/2021/02/25/Git的介绍与简单使用/index.html","915b90eccdd3296ee41169b19b0cf445"],["/2021/02/27/简单工厂模式/index.html","c97133b020b832c2d4cc8b0e964e21c1"],["/2021/03/01/工厂方法模式/index.html","6838b9a39e26071ef32cac0491fde17c"],["/2021/03/02/抽象工厂模式/index.html","7edcef59f65be5a89bb065809aee1057"],["/2021/03/03/单例模式/index.html","562fd5b263b8848736be6c2bc9ebae0b"],["/2021/03/04/观察者模式/index.html","7f28c8a3a0dca97e080017e44aa63366"],["/2021/03/05/适配器模式/index.html","c8a6510880a3767a34ed776042778e8a"],["/2021/03/06/模板方法模式/index.html","0003a340fc9dc68a5ac9cf5676818d02"],["/2021/03/07/责任链模式/index.html","01c898d5ebc9b1b35796ce492c08a045"],["/2021/03/09/代理模式/index.html","4d664c154b2bbb1a9afce490b4c668c1"],["/2021/03/11/享元模式/index.html","66a165a01a04b7076e671f6638ed47d9"],["/2021/03/12/外观模式/index.html","b158240409d1a410d6ca1ff0d4c4ccf2"],["/2021/03/13/策略模式/index.html","fec21d9a54c0dcc7b0be3beeb859a50b"],["/2021/03/14/桥接/index.html","7c02d32fd9bdd93f8be9e4fde493f3c8"],["/2021/03/15/LeetCode-多数元素/index.html","a9b289e340549aa16dfc4e13fd253302"],["/2021/03/16/LeetCode之汉明距离/index.html","c9840b7350a74b661f96819a76a0023c"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","6c929a7304fcfc100e0350f1cd9e27f7"],["/2021/03/18/LeetCode之两数之和/index.html","bae1b731ca3950ac55103caa9799e96e"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","2041884b28a95de1881d8f3c64dcc6ce"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","e1164b01b2035133ab3428a8b215f7d9"],["/2021/03/21/LeetCode之有效的括号/index.html","b6d962582a98ce971d2283a241bfbecd"],["/2021/03/22/LeetCode之移动零/index.html","cdc8bd25b3d0d0d4cecc761936bb9408"],["/2021/03/23/LeetCode之爬楼梯/index.html","71d913fa3ce468b18f2d9efaac9979af"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","8d26459f3d3dcb10993a56405d6ae8b4"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","f941fe7a663699e933da143b085eb49f"],["/2021/03/26/LeetCode之最大子序和/index.html","d09e3ab239f1344ce244db36fc04a87e"],["/2021/03/27/LeetCode之子集/index.html","7389aa3b6ce357a42f3452191ad6e498"],["/2021/03/28/LeetCode之合并二叉树/index.html","f6807a7f80a6356e0283aec28f7dbeda"],["/2021/03/29/LeetCode之翻转二叉树/index.html","45b5e4de75d42336caebe60521cbcc53"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","2df00e8e9b37c01287813ee41fea03b6"],["/2021/03/31/LeetCode之翻转链表/index.html","a92b9a09fce3de913db8c1854f974ad7"],["/2021/04/01/LeetCode之相交链表/index.html","e685083bbe0b0c6e6661bc8b13acd182"],["/2021/04/02/LeetCode之最小栈/index.html","dc346a3283e531741a64cc80bd4cb92c"],["/2021/04/03/LeetCode之对称二叉树/index.html","3518deb5422c7a5ae00588fcfc6caa4f"],["/2021/04/04/LeetCode之环形链表/index.html","88cacfa015537c3d8b2d63ad3a9e9dd4"],["/2021/04/05/LeetCode之二叉树的直径/index.html","57ac82cc90eca29b68dee0dbcce84658"],["/2021/04/06/LeetCode之回文链表/index.html","b48e75b6caa6fd3c48a73078acae532d"],["/2021/04/07/LeetCode之比特位计数/index.html","bc6b5bb73d6ac0ef7fba0ea7aed9ae1d"],["/2021/04/08/LeetCode之全排列/index.html","01f82115a956ec91ea1a2d97342ba461"],["/2021/04/09/LeetCode之括号的生成/index.html","1157d0503dac8b203520a8992a9da471"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","247df82565b18f2d28d09a0118b45904"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","af195f0f4508d943efaa4752ddb83aa7"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","1f036d6746c9d7da64b0c5150dd9695c"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","bfe16747a924be380c70333f19d5ba3d"],["/2021/04/14/Mybatis/index.html","25ccad3bf83942c28c1050801e184406"],["/2021/04/15/Spring-1/index.html","049b0ad25d147833577f346c6f46b7c2"],["/2021/04/25/Spring-2/index.html","64b21a2c592f72d93befd69459cbf43b"],["/2021/04/27/SpringMVC-1/index.html","09530d129f0804d84b15aec5027ea9bd"],["/2021/04/29/SpringMVC-2/index.html","5da4fe4d7b780d628304c4e462da49df"],["/2021/05/03/冒泡排序/index.html","d139697481e0177f0395de34ba286447"],["/2021/05/08/选择排序/index.html","ad3622697e7f5e9fa7db5550826502ab"],["/2021/05/12/插入排序/index.html","7e8ecd07517a3e6f73f0008d8b4150ec"],["/2021/05/15/快速排序/index.html","77a5102021a93eb5b92983ba3cfc4d6e"],["/2021/05/19/基数排序/index.html","f0e84aec818930a53d33c4ed18207ca1"],["/2021/05/20/哈希排序/index.html","1c1f826d25f414606156de1aa56f333b"],["/2021/05/21/归并排序/index.html","5a73337043a2d68cb10ee4274503e26f"],["/2021/05/22/二分查找/index.html","952ed3b5a0673c648ac7c9c34240dec2"],["/2021/05/26/差值查找/index.html","c62618f584ec6379e1691430a89e4042"],["/2022/01/12/高精度大整数计算/index.html","df2cca022203cc5248e0ab11cab6a6d4"],["/2022/01/22/前缀和/index.html","ced56f67b6be399ac57a5480e490ed81"],["/2022/01/23/差分/index.html","4ef88b53319ca6003b8fbef61c88788b"],["/2022/04/04/MyBatisPlus/index.html","003e4a794663de824f25f9dfc56f29d0"],["/2022/08/17/jQuery/index.html","d76f95f7111f133de3b0c9db741c3cdd"],["/2022/08/19/JavaScript/index.html","06a555052427cd1eb6cffd5244214119"],["/2022/08/22/Ajax/index.html","b35cfa1a003ed4573e7ec71becb06e80"],["/2022/08/23/Promise/index.html","28643c3e30284012f20f9ee931f81bb5"],["/2022/08/24/Axios/index.html","74ca6515c05c3ccdb49b8abda952b645"],["/2022/08/25/H5本地存储/index.html","438f3fcbc76e4fc98bc4592c67c3ddb9"],["/2022/08/26/mock/index.html","0584296505a204176073228505ff5608"],["/2022/08/31/VueJs/index.html","484e34a1b590e7599438cff87cfcf421"],["/2022/09/01/vue组件化/index.html","936fb306754b60d752ddecb4a3c9e41a"],["/2022/09/04/VueCLI/index.html","287198f386b15fb093b3285e066cf5da"],["/2022/09/07/vue实现动画/index.html","6dd8a5e2d330f4d1cec3d75c316c7e81"],["/2022/09/09/Vue响应式方法/index.html","c12941b69b3d01360376359b3d2f39bc"],["/2022/09/10/Vue异步请求/index.html","5afaf5178acc3643345b1a3928facffe"],["/2022/09/11/vue-Router/index.html","e822d93425f010867e87e02a0646eec6"],["/2022/09/13/Vuex/index.html","e61c832e3b42568482a4334ca43d95c8"],["/404.html","3fc57e0c66c7e48d27fad134ebcf46de"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","39d370d6d2cb27d09d11f140e1d31bf7"],["/archives/2021/02/index.html","2706be83dc79e8ef27e752037a722e2c"],["/archives/2021/03/index.html","023531486438171868b1f880c23b4c23"],["/archives/2021/03/page/2/index.html","dffcf1ce4c5b3df0b0551f3368df12ef"],["/archives/2021/03/page/3/index.html","4f1b5644711991d162789639e5d6bbb1"],["/archives/2021/04/index.html","ab019edce901b0ec6be4970b01ae3329"],["/archives/2021/04/page/2/index.html","673ac1ed720ec722b38a8af029eaa555"],["/archives/2021/05/index.html","8d0f1ca5b7bc594f0d53ae9a88f1a3e6"],["/archives/2021/index.html","d12be83b2de3be4018020102b44d0d4e"],["/archives/2021/page/2/index.html","3a71f99289ed46ba21a2f4283e72877d"],["/archives/2021/page/3/index.html","53c1426b3133ff30fdd4743270fa48a6"],["/archives/2021/page/4/index.html","7ad0bdf2f319597900b043a84ff233f1"],["/archives/2021/page/5/index.html","a559a02cbd1be685f964d5a88206021a"],["/archives/2021/page/6/index.html","ad0a91fdd664781c0a765b9ce1f10188"],["/archives/2021/page/7/index.html","c6c5b9a40807045a679d373c825535c6"],["/archives/2022/01/index.html","96afd031139222b3275fefafc67e61a1"],["/archives/2022/04/index.html","309694f7c99e22cab34fd2e1fac46e55"],["/archives/2022/08/index.html","ad69eb4255a742099e48fd83fe8bd679"],["/archives/2022/09/index.html","e92bde2f89388f7440773a22d969ce5b"],["/archives/2022/index.html","4965818d01a420d201308efae3976ed1"],["/archives/2022/page/2/index.html","60378b3cbc1ec8a101dac2e4e93042ef"],["/archives/index.html","68c6a23c07e663a9612c744c972d7f04"],["/archives/page/2/index.html","6ef1c3b11369cc1975ef9d395a757774"],["/archives/page/3/index.html","409816149b5311455b80b6628fcc1cbe"],["/archives/page/4/index.html","e05f6a52c01ff7677abd362bb091a8ca"],["/archives/page/5/index.html","7ab7e878e811e14eff04023f8692fbfd"],["/archives/page/6/index.html","6ca9f6d914d6fea8019bcf0cdad8e9be"],["/archives/page/7/index.html","24101d0c1242c5cbccf3cd841c0a38c3"],["/archives/page/8/index.html","ae475f4c75ed6878aa66c3156c01152c"],["/archives/page/9/index.html","ccec479b150eab4281440c1432a8959d"],["/categories/LeetCode/index.html","60d497b0b70a1a277a0b141b1a2808e5"],["/categories/LeetCode/page/2/index.html","47c9642004d8d8624eec171a54c7c399"],["/categories/LeetCode/page/3/index.html","e4562057ea5953d113211d269aac69bb"],["/categories/SSM/index.html","a8078041a785384f207b7dd93d9ac006"],["/categories/Vue/index.html","1c7f157103a49e099774ca0272996948"],["/categories/index.html","2b26e8024c86adab3378a8ceb20e8cd0"],["/categories/前端/index.html","d82c2cf1607bc6303252308b2373f834"],["/categories/博客/index.html","0fae8ac855a859897e5c22bb78d323de"],["/categories/学习路线/index.html","36d2300b664e4603be5594997ec5704d"],["/categories/工具/index.html","500ed1561413393bb2ae55354c8919a5"],["/categories/数据库/index.html","d7f9c19690f1b679bb8386cbfbd09e2f"],["/categories/笔记/index.html","9b4ffc25d1896abf9f8b8d0279b94c22"],["/categories/算法/index.html","60dfacbd66fd19552ece0bc443025b0e"],["/categories/算法/page/2/index.html","0199ee09cfd9f78f9a5d036c351282a3"],["/categories/设计模式/index.html","f401c87f492f116e5845cd866df7576a"],["/categories/设计模式/page/2/index.html","218cad4caa3e191aab76a0bc08df9008"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","209cc3223e1c6ee5d23d99356ecfafa8"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","e87d83b5079cb050507fe875ea95dcbe"],["/messageboard/index.html","840e53515b0a77dcb3d38836ebb479ff"],["/page/2/index.html","48ef7cda4966243f3aa032abd5b30010"],["/page/3/index.html","0981917996ab05b5140f4a10d86ffd83"],["/page/4/index.html","24188e64c8c5ce83ff1c6c08dbeca0d7"],["/page/5/index.html","f4b46de67e1579e5932afdaa443d2ec6"],["/page/6/index.html","769ca04e1d0ebc75a5b3a2c9eb407574"],["/page/7/index.html","c3f9e0eb55dd8aee297bb41b6a4bbc06"],["/page/8/index.html","696038ff47afbc62123efabab76c199d"],["/page/9/index.html","e0451c595aff0f745d6d4b99707d934a"],["/sw-register.js","35a15ac73e213cb4b4c9080174ed546a"],["/tags/Ajax/index.html","a8cef0233f4006c08d1b52c19d7fc311"],["/tags/Axios/index.html","a3df298fd5d72c086426465bda11b153"],["/tags/H5/index.html","a030613e4c7653daf8ab7e72a77ec77f"],["/tags/JavaScript/index.html","49b54728f75e54b6999531e99fea3e2d"],["/tags/LeetCode/index.html","666480ed9dcb8299926ac4b4d52ae3c6"],["/tags/LeetCode/page/2/index.html","0fe1247376dd7885231a790db7c548a2"],["/tags/LeetCode/page/3/index.html","8fd01f65f35d996fa19d5122ed15b657"],["/tags/Mock/index.html","baa030ab8e95dcdc3f893da573568cb7"],["/tags/Mybatis/index.html","14d39200666ea201dd555f1b31325d08"],["/tags/MybatisPlus/index.html","7cfb9e2d11db1adc5dd16d243ac3183e"],["/tags/Promise/index.html","27d9d4ca90c9597f3ffbb0183d99aa24"],["/tags/SSM/index.html","4e929f88db74c034f9b435c1f35de146"],["/tags/Spring/index.html","c3c66051decb05d3babad0628a74902b"],["/tags/SpringMVC/index.html","0637eedca8d23cf8e321865a12d1603f"],["/tags/butterfly/index.html","c04820c5fbd7f2777b82e8ba758d1fbf"],["/tags/git/index.html","a26ebb454fe3b22e356c2b0b8568824a"],["/tags/hexo/index.html","219645d70db0f120b8f596f574ea3c44"],["/tags/index.html","45942e6c025fcb45f41be7d9ec02fece"],["/tags/jQuery/index.html","1b93bf85a24b6fb847a0c3e595ab5826"],["/tags/java/index.html","30dea22e6f8d3b082bd0c5dd29ceb5e2"],["/tags/markdown/index.html","a4c56a11ee340eab8f781b148b5af45d"],["/tags/mysql-数据类型/index.html","7b536b30533b3ec41fdb7700abdd3843"],["/tags/mysql/index.html","4135dbba40662abd5c5b480d55a1ec50"],["/tags/typora/index.html","0043ef0577d1541d3f4ea266b4490918"],["/tags/vue/index.html","9cf47f088723df2669cdc3b853ebb678"],["/tags/享元模式/index.html","9c77fca95748bd03b545c6a0ca717f55"],["/tags/代理模式/index.html","e6fd759c520aea93ef6dc3377ca642f6"],["/tags/分布式/index.html","f9bdc589a031e493ba61def98caa1ea0"],["/tags/前端/index.html","40215cd5b6907afd939a99844c2c629f"],["/tags/前端/page/2/index.html","56fb19617bacc97cd763f27c69899054"],["/tags/后端/index.html","5c20e0bc4d59c3cfd411d66e9d8d98f6"],["/tags/外观模式/index.html","239d9c325a38ca27a8d0cd464e398f84"],["/tags/工厂方法/index.html","d58a38bb87b483f1f2144fc3f0261b18"],["/tags/抽象工厂/index.html","091594c56e2a9f7e6af21d9520bb984a"],["/tags/排序/index.html","bf2c50b82541e8af074f648a722ba978"],["/tags/数据库/index.html","75b9ca168d6b0fa6f8d0cfe34a3b2a85"],["/tags/查找/index.html","c23a3bdfe0690762c2f91cca4d47933c"],["/tags/桥接模式/index.html","0e5ab68756707cd73f2e06528f40b8ee"],["/tags/模板方法模式/index.html","6b26a4c67502a4bf18d83e6aa6c7fbb1"],["/tags/版本控制/index.html","7992b6867136424be5fb0291f4222b80"],["/tags/策略模式/index.html","e913ef55afa92653199fe0fb094ada59"],["/tags/简单工厂/index.html","080c5026a05ea29c0edddd9356107514"],["/tags/算法/index.html","2611472a6e78b7ccce203e65df73d819"],["/tags/算法/page/2/index.html","e2725101f094adb5d3cdd9d6114a3c49"],["/tags/组件化/index.html","3cd3513ed1694b8b4ec22a3dfed7e96a"],["/tags/观察者模式/index.html","44c0aa7844bccb723f39acbb364279c5"],["/tags/设计模式/index.html","cdc06fa19cf436d757c4b1ba4769abf8"],["/tags/设计模式/page/2/index.html","c1854a27a08ced83ec642576ea885d16"],["/tags/责任链模式/index.html","77c26414671533b55fc9b83d41373122"],["/tags/适配器模式/index.html","7c32d882c02eafab2732564213d17298"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
