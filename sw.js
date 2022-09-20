/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","3c8c69016f380d4f01e075564c6850b3"],["/2021/02/22/博客的搭建/index.html","abe246243d376abbaca2689a09fbfca3"],["/2021/02/23/如何使用markdown/index.html","d4bc3c665fd07fe1ec14ca1e406b3859"],["/2021/02/24/mysql命令大全/index.html","28257efd8bb1316d0f3ae53325e34374"],["/2021/02/24/mysql数据类型/index.html","98e1e8ea102c64dc43b0812975f6f648"],["/2021/02/25/Git的介绍与简单使用/index.html","f0100ed26291317cbca767eb74c9865d"],["/2021/02/27/简单工厂模式/index.html","6c98d5e59a3822089633b520729b3655"],["/2021/03/01/工厂方法模式/index.html","56fa3f09c716918022497aaab644bfdc"],["/2021/03/02/抽象工厂模式/index.html","70365fe08c7b8acb4641f3845c11ff35"],["/2021/03/03/单例模式/index.html","24df68203c459db0ee568c609d4be72b"],["/2021/03/04/观察者模式/index.html","5e0d7ab3cb423fed4a433ec24f71a73c"],["/2021/03/05/适配器模式/index.html","882902a35f90f3e786f13ce7fd9612f5"],["/2021/03/06/模板方法模式/index.html","543d42eca8792173082e226672ce7f76"],["/2021/03/07/责任链模式/index.html","b7d1abac8e4bf3b8705b694a07067595"],["/2021/03/09/代理模式/index.html","4e2ed6ae9d606d8aa4c41f28ff423be2"],["/2021/03/11/享元模式/index.html","6e35b5e0b876cb86b1d1171981e32689"],["/2021/03/12/外观模式/index.html","39cae213608ac6320e47c6169bdf78f3"],["/2021/03/13/策略模式/index.html","95e6ad4c338d9e468e07ecde41690e9b"],["/2021/03/14/桥接/index.html","d8a7d48b4d324af6092427dac9655815"],["/2021/03/15/LeetCode-多数元素/index.html","031dec9af7b238f88673c6c0e61247a1"],["/2021/03/16/LeetCode之汉明距离/index.html","f50c590205eeaef53c08aea33aa8da41"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","2a144035562e2fa5c46aee97b1be8535"],["/2021/03/18/LeetCode之两数之和/index.html","05bde5ad317c4a75f01fa84ac3ef5f13"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","16bc5630c10fc353075620c8cd8c26ff"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","94499bdb59b398bcae832e9aa2d3f24e"],["/2021/03/21/LeetCode之有效的括号/index.html","4d57a236d68de3fd7ce8700cf2d48caf"],["/2021/03/22/LeetCode之移动零/index.html","5a07358c7e769b2e6b903a11d42acee0"],["/2021/03/23/LeetCode之爬楼梯/index.html","352363f2b97451b7a06260202bb5b766"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","2068dd27a23d390808ef8204df7e5c7a"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","870c0344f1fc2fc8a67085eaeaf6c2d1"],["/2021/03/26/LeetCode之最大子序和/index.html","ff92c942c98f6230e6d9cf2e02c9e558"],["/2021/03/27/LeetCode之子集/index.html","ce935c92b5380fbee46276de119d5613"],["/2021/03/28/LeetCode之合并二叉树/index.html","fc13a9bfe9cd2cb5fb48d0ae9b4a4e93"],["/2021/03/29/LeetCode之翻转二叉树/index.html","ea38a4c452883fcf382709bed8933a96"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","c4ff992c43dfb2bf17637b160b0164d9"],["/2021/03/31/LeetCode之翻转链表/index.html","8f61a3fef7471b7976a495cd78b27d2d"],["/2021/04/01/LeetCode之相交链表/index.html","679abfbbb26dc81f5be9c21c6a889f60"],["/2021/04/02/LeetCode之最小栈/index.html","d2b74fee45b6ac2a5af935bd7fed2e34"],["/2021/04/03/LeetCode之对称二叉树/index.html","3a727e49ecd28ac406d1eb500b5dd024"],["/2021/04/04/LeetCode之环形链表/index.html","330209bc5520496efc9196f4ee95cab4"],["/2021/04/05/LeetCode之二叉树的直径/index.html","069a349991b1d4ac3f7ad80be87e9a64"],["/2021/04/06/LeetCode之回文链表/index.html","a8aeaa6a22c80acd200a2304c27fac8d"],["/2021/04/07/LeetCode之比特位计数/index.html","94345a60570b1eed05fa2e1ef4302b52"],["/2021/04/08/LeetCode之全排列/index.html","1ed56b6d9f636f1dea039a0326474118"],["/2021/04/09/LeetCode之括号的生成/index.html","0f127307e9182a6e5f333e05ddb1d7ab"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","7fe9f6e5d1a6ea6022d397b2fa2bfc43"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","23495e78d3b0fb796fc4d20737650c93"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","42ccd36d4bfe0ce40d6025c8d6f9f3e5"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","a502ad8471d90dec36bd3c0c3322f84d"],["/2021/04/14/Mybatis/index.html","a1998b6a49aea46a6b0afc0a7cce5116"],["/2021/04/15/Spring-1/index.html","5da1a3453cda2a4e4f0f1be454a21e02"],["/2021/04/25/Spring-2/index.html","196cc6f3dabaac93440ac8f5a2523ced"],["/2021/04/27/SpringMVC-1/index.html","810c394d2af286385838abbb740283b6"],["/2021/04/29/SpringMVC-2/index.html","dad2262487acdefc6578ee07d3b9898a"],["/2021/05/03/冒泡排序/index.html","54ef29b44b8faf57498ccd3b374b4a01"],["/2021/05/08/选择排序/index.html","c26a2992ac37632b9145399d0ba622ab"],["/2021/05/12/插入排序/index.html","8d75886f05ba1220d26f14d33d33ea6d"],["/2021/05/15/快速排序/index.html","4736bf28622a126ccbd6beb6702bfb1d"],["/2021/05/19/基数排序/index.html","310fec48710733b8f521f05c57ac917d"],["/2021/05/20/哈希排序/index.html","1b369803067bff76a690f187fcfed8f0"],["/2021/05/21/归并排序/index.html","7aab69d4192bd14a22a3e109742cbe31"],["/2021/05/22/二分查找/index.html","378401530fb952640768dd0d497877a3"],["/2021/05/26/差值查找/index.html","3c6ca24bdb29903ca06e9cff1514eb00"],["/2022/01/12/高精度大整数计算/index.html","6646efed3a0af9e3f5124d1e6ab64e9c"],["/2022/01/22/前缀和/index.html","f699f876b7add2ef118f29d17526f5d6"],["/2022/01/23/差分/index.html","178d5206ab956a64e991472098a83e21"],["/2022/04/04/MyBatisPlus/index.html","5871daa57f73e3f0f50780cfaae8b99b"],["/2022/08/17/jQuery/index.html","c5a921bcd665ab406b0f46324ea45d9f"],["/2022/08/19/JavaScript/index.html","e4656164be65822c750d2ed0c74fa9f8"],["/2022/08/22/Ajax/index.html","bcd32b0f0e09a99d750bceed56c3e627"],["/2022/08/23/Promise/index.html","d25079946e35fe36d81cf4cd1d7b4519"],["/2022/08/24/Axios/index.html","01113c7f48f42d9dd0526440808bf144"],["/2022/08/25/H5本地存储/index.html","663afd1aadad93676ec8d04d3115282a"],["/2022/08/26/mock/index.html","4045de50f4c1f9c80debdf2341070ecd"],["/2022/08/31/VueJs/index.html","02c5e0d03e0b15b3483ad71b1648987b"],["/2022/09/01/vue组件化/index.html","aba3ec672b832af4f069b27175575861"],["/2022/09/04/VueCLI/index.html","e0ed6c834de40b600db2e2e6d3eb5544"],["/2022/09/07/vue实现动画/index.html","753bc7a5b66289e60aa9772ca2d4269f"],["/2022/09/09/Vue响应式方法/index.html","7aa2e800f8143db9a3ad55f3902a5846"],["/2022/09/10/Vue异步请求/index.html","015fdb7c784cf6baecc6a5de1a8f9bf2"],["/2022/09/11/vue-Router/index.html","dd38eac6225449eec1158e24f74bcc03"],["/2022/09/13/Vuex/index.html","4a886372a7982a3773d9cc2c170f6e3e"],["/2022/09/15/SpringBoot/index.html","6b4a7c19aa13dda69e89142007a2c29e"],["/2022/09/16/SpringBoot配置FastJson/index.html","db5fdee075d5c44b85a70dce6aab261b"],["/2022/09/19/SpringBoot参数校验/index.html","ac9386aadc7f7d61f42b0cfe934c177f"],["/2022/09/20/SpringBoot的异常处理/index.html","3e252a6eaf919edfdfee92a55c41bc4e"],["/404.html","d6e21f97153985e2e531b283ed15c6d0"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","ad0db204d0bd84b0b791fd87b06d972f"],["/archives/2021/02/index.html","bff9e38ad033b824a58bf1673aee8769"],["/archives/2021/03/index.html","91967e9d20a982e312cb23a3b75adce1"],["/archives/2021/03/page/2/index.html","0b85bbba7ef9623b43340e5b85f5d3e4"],["/archives/2021/03/page/3/index.html","7f5472b8778aebb1cd2d15bab81374b4"],["/archives/2021/04/index.html","a7fd87322299b75daaea1a88c508029b"],["/archives/2021/04/page/2/index.html","f943c97c8d7e3d40cec777eca51560fb"],["/archives/2021/05/index.html","539fe9e64f34c7140e179307840c047e"],["/archives/2021/index.html","e39de6c7e6d37ae241a15097d12f0233"],["/archives/2021/page/2/index.html","45f8d34ce1d815dc951b79afb60fb3da"],["/archives/2021/page/3/index.html","b25053c08518780eb67fccf09e10001d"],["/archives/2021/page/4/index.html","f086370533ef0f990f2b6f4c7630c1e1"],["/archives/2021/page/5/index.html","7f85d7ed68349940bfedef710ea24bba"],["/archives/2021/page/6/index.html","1def03f0798e6c5db73bfb0977b0e740"],["/archives/2021/page/7/index.html","1a9b05ac3eb4453e5ae146a0ed0d85c2"],["/archives/2022/01/index.html","fc0b7cf679645217b8690891d7ef29d3"],["/archives/2022/04/index.html","447cb6ffd22e6ce014d2ba49b654094b"],["/archives/2022/08/index.html","dbe1b1da5b5fedbc92970ab9b35ea685"],["/archives/2022/09/index.html","eef1fc5fe6c9bad56678be3a4c7aaee7"],["/archives/2022/09/page/2/index.html","b281d3e85e9f0003f34c896a7a7e277c"],["/archives/2022/index.html","67a762d410c1d61ade73dd108e85bee3"],["/archives/2022/page/2/index.html","e88c28a98b86c42d2dda0c6655438c9b"],["/archives/2022/page/3/index.html","a87baa65494e17a20ecb3c3b02d553bf"],["/archives/index.html","efc506625bca07bbf2309a65a63a0eb0"],["/archives/page/2/index.html","239d1956c6f378f34f606cbb2c4fb9a4"],["/archives/page/3/index.html","8e6601991f9743ee2331b5bf9eefd1de"],["/archives/page/4/index.html","1eec2dd5aa5de312aaa0687fcc7ee71c"],["/archives/page/5/index.html","6508eff1c56c6deef036a1591a3d16f5"],["/archives/page/6/index.html","3bbf8e7c1929103ee7cb1d292e88949f"],["/archives/page/7/index.html","1ab7141c6a237f6b005781acc32c066f"],["/archives/page/8/index.html","a1dc662764fddda94845b7454550b4be"],["/archives/page/9/index.html","88afb3a41e2f4e0d6860d50c7467d4b3"],["/categories/LeetCode/index.html","66683dbd2566a1937f79360d80d4ed24"],["/categories/LeetCode/page/2/index.html","f49e43f5c54da67a0ac4be3b53f5dfef"],["/categories/LeetCode/page/3/index.html","ab1d4ec94d2f610d78863cafba2c9081"],["/categories/SSM/index.html","30e45b7ec32768ac520f1d5f971d1d5a"],["/categories/Spring框架/index.html","e02b3ddfb8fb34c2822cc304b5f30116"],["/categories/Vue/index.html","ffa0828a8c13d0180866ef5c23331d03"],["/categories/index.html","ca68fb50c458bc3200d3bc76461b1012"],["/categories/前端/index.html","fba57bb9afd7bde1a2f4fe92dc4acfb4"],["/categories/博客/index.html","80059cb55dcd8400c36e6871c9ae0950"],["/categories/学习路线/index.html","a724ecf02ff1127f528f42d9cff9bcf8"],["/categories/工具/index.html","09fc12fdb07af31fe7468d3b5fff6c64"],["/categories/数据库/index.html","f77b05cf4960a09e85513ceff36e2cb1"],["/categories/笔记/index.html","183e191704ac012092b9dec59025c6a9"],["/categories/算法/index.html","f7e619de07992c809c1740e41b200591"],["/categories/算法/page/2/index.html","a1780ad94e68a9d00ad4d905c7bbcd82"],["/categories/设计模式/index.html","8a818b563212f60f198a1cf2bb4b3b79"],["/categories/设计模式/page/2/index.html","26987a7fa05c10bffc4076b6c545a4d5"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","dbe85c7dc2720133c86c8324b9103f41"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","2ff8ae0c5d55683c0b9bb41991101052"],["/messageboard/index.html","a8c5a5a57f4da4d03d4770dffd6043ef"],["/page/2/index.html","1a4b822cf375c2d8b96e69a152890d83"],["/page/3/index.html","d8aeec7d92480095a408cdd35d05865b"],["/page/4/index.html","749712d4f48036d2662812d273a97ef6"],["/page/5/index.html","8ad2244889e6240631ebd31437baa838"],["/page/6/index.html","8041df342601b4444502ba64707755be"],["/page/7/index.html","f70bfd9207d3bdad823749f04e7e1dbe"],["/page/8/index.html","b6bfa3e90d27d8261a3654e9b4d35408"],["/page/9/index.html","ff5db52833d9202b4ab0b115578d1bd7"],["/sw-register.js","b958ecafe08e80ec7ebb5235ec07fd89"],["/tags/Ajax/index.html","4038face64f09da867468a9810a6434b"],["/tags/Axios/index.html","4c9180e718491ce6e42f7408722e6fd1"],["/tags/H5/index.html","e8888dfdfd9d64c1a9fe4811f248e067"],["/tags/JavaScript/index.html","c4ca1a556e19ac408e9bd12e6905e1a0"],["/tags/LeetCode/index.html","502429dadf3cccaf2547c2a01c65fb20"],["/tags/LeetCode/page/2/index.html","95a975a722fd2a9b69bc8298db3acdfd"],["/tags/LeetCode/page/3/index.html","1dabaa058ef5e0571b7fb328dbe9785d"],["/tags/Mock/index.html","f3d776ac586c3eb9c82d057505cc4d19"],["/tags/Mybatis/index.html","44b2409a0cdfad54d07bccf5d9458e4d"],["/tags/MybatisPlus/index.html","a5462fdbd06328ad2554d216fc9a0a30"],["/tags/Promise/index.html","9a16de5a52e1d4f84ab99087fe7b096e"],["/tags/SSM/index.html","ab97272d5d028ae8115bd1bf32e6bda8"],["/tags/Spring/index.html","70322529b41740cfdfd960a538961e7b"],["/tags/SpringBoot/index.html","f53c1c51653653754d089c195bac203c"],["/tags/SpringMVC/index.html","a0daf171a5b2da02fb83dc9e8d64f301"],["/tags/butterfly/index.html","b5a26eae8064cb31731437eff172bf37"],["/tags/git/index.html","152d558d7a273f032049d88eec8c8668"],["/tags/hexo/index.html","40d9ee794d2d12140656dfecc2780aaf"],["/tags/index.html","c6f8694ca9ad975d3bfa955995a4a3cc"],["/tags/jQuery/index.html","2081cdd331cf7682652f65d7375cdea2"],["/tags/java/index.html","b474ffba35db8d22daf6ecc6a0d169d5"],["/tags/markdown/index.html","fc1f1b9442505d9082989f9000b699d8"],["/tags/mysql-数据类型/index.html","ebcd710b7251992e5dcdb6008bc392a7"],["/tags/mysql/index.html","4737238546c5acdb0f9c722e10f9fd43"],["/tags/typora/index.html","f90730efc290885634bfb8ce8ce12b47"],["/tags/vue/index.html","26894423af74103bf0205262193e6a52"],["/tags/享元模式/index.html","b1877c3b4f288760b12051d97dbc012f"],["/tags/代理模式/index.html","895410f436a6d880ecd008fc203ed651"],["/tags/分布式/index.html","0be17ad1dccada1ec2f9297980d67eba"],["/tags/前端/index.html","abfc9448eae51368926e51f399e3d28c"],["/tags/前端/page/2/index.html","6062e0be0a204636800de6d2ddda9b69"],["/tags/后端/index.html","e628d2a6e03269c8503ed3d600803435"],["/tags/外观模式/index.html","01992b9e8351cf03b5d68d5a5374d496"],["/tags/工厂方法/index.html","66818210a52a230bab56c2136bf65402"],["/tags/抽象工厂/index.html","a054eeb2f934b379d237e268731a72e7"],["/tags/排序/index.html","da05652dd67d3b0fe4057260c20e4d38"],["/tags/数据库/index.html","4baa6df73ce907e845367b7de7aef721"],["/tags/查找/index.html","4894567ba80aaa3f2550ef34a89948b3"],["/tags/桥接模式/index.html","83c69f0edd759abb3e2191b58d3b0e86"],["/tags/模板方法模式/index.html","f7750b1c96672faf55936798244bbab5"],["/tags/版本控制/index.html","360d6f52a92526601b84cc978f5c217c"],["/tags/策略模式/index.html","9a647e96e74041c7f8c942c82301a6fe"],["/tags/简单工厂/index.html","1996ee6472e0b624ecb7df74f249ce6b"],["/tags/算法/index.html","609d3c1f6198493689ba3ffc6c3238cd"],["/tags/算法/page/2/index.html","1aa2583f7f7729086d517492fb76d1c3"],["/tags/组件化/index.html","5b8412cfaac5a2d43806e788855b12e7"],["/tags/观察者模式/index.html","2e7466d6eec2502ff3acadd320206ea9"],["/tags/设计模式/index.html","0af50fc3bd318a3f2390151f75cc9d19"],["/tags/设计模式/page/2/index.html","006dad9eee42746c7a4469d3ce02481c"],["/tags/责任链模式/index.html","3f191f099c9c42ade54c223157b9937a"],["/tags/适配器模式/index.html","419b37b41c3bc91e9a9ac4bd81b88ac4"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
