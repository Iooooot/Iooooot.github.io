/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","c9a31dd717704ddb71c72a66ddbd7c30"],["/2021/02/22/博客的搭建/index.html","5cbc60535f80b7f55922f1678d232bc6"],["/2021/02/23/如何使用markdown/index.html","9e582a979ea49bee6a2bb472bf36fe40"],["/2021/02/24/mysql命令大全/index.html","0265df08307e749abd9b72e04ee0a7ef"],["/2021/02/24/mysql数据类型/index.html","c2614bc97a97732942762532720ecb18"],["/2021/02/25/Git的介绍与简单使用/index.html","2e434c9db3a461a2c70e018ebd5f6553"],["/2021/02/27/简单工厂模式/index.html","61acdc00913333130953fadb66d2b37b"],["/2021/03/01/工厂方法模式/index.html","0cff325fac7ff5378a5acffa2f3cbb68"],["/2021/03/02/抽象工厂模式/index.html","260062420affb33fc1c0c89210f4a55b"],["/2021/03/03/单例模式/index.html","6dc68525a95106f489671368eaa7dd46"],["/2021/03/04/观察者模式/index.html","73e62626f0c1583f9c6b49c93c806c32"],["/2021/03/05/适配器模式/index.html","52ee18dbdb44832bc344f63b79653c93"],["/2021/03/06/模板方法模式/index.html","4452b19ec6d09b28d063ff3dbfd85a3c"],["/2021/03/07/责任链模式/index.html","a8b4abd96c346b673f788f8d5e5b02f0"],["/2021/03/09/代理模式/index.html","77f568cb9c13413471ec9df53c8382be"],["/2021/03/11/享元模式/index.html","08a5743a4f0d7ab2f51d070e9aeddf1e"],["/2021/03/12/外观模式/index.html","20555d57d00179fec899bf68dd4139f5"],["/2021/03/13/策略模式/index.html","a12df2f1821d3683aff621524a636e9c"],["/2021/03/14/桥接/index.html","c3beb8670a6007bb9844fd5d0fe64520"],["/2021/03/15/LeetCode-多数元素/index.html","1de778c3f1330ba920f3f45cc86dbc9d"],["/2021/03/16/LeetCode之汉明距离/index.html","928f9f4728363e12a452e6eddc5713bd"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","5210ebc9f67467484b4a9bc5adfeeb6c"],["/2021/03/18/LeetCode之两数之和/index.html","d37bb43bd940f7185e84523ea612c179"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","46d3620a72d40e43b48a25504bbd9bde"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","99a8274aa9dc41a4729cdb97f74e3a76"],["/2021/03/21/LeetCode之有效的括号/index.html","1215392959485412ea46f44831ad6e41"],["/2021/03/22/LeetCode之移动零/index.html","db98f8f77bc4c9559ac3c8bcabe42240"],["/2021/03/23/LeetCode之爬楼梯/index.html","d83637265447d1c2cfcbe5c5c27fb064"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","db2efc1b7df2099f1a67543c084f7599"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","57e1b3153b36a012c1e0952a6043d795"],["/2021/03/26/LeetCode之最大子序和/index.html","051fcfed0ee2ee8cda78ebd498cf5f55"],["/2021/03/27/LeetCode之子集/index.html","f975f794af54f35b9be4958e147044e8"],["/2021/03/28/LeetCode之合并二叉树/index.html","5611f01a3836949b7cad3e240ea71bd6"],["/2021/03/29/LeetCode之翻转二叉树/index.html","880f7f327aac2863aeffa3790ed2adf8"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","f09c2f8b324d44d90e5377cf293e1399"],["/2021/03/31/LeetCode之翻转链表/index.html","b739ac71567d8f38c74592214e7fc696"],["/2021/04/01/LeetCode之相交链表/index.html","36b607aa41551ddb07d2365c7450836a"],["/2021/04/02/LeetCode之最小栈/index.html","e1b53b84ae726bbead9d79129c7bde19"],["/2021/04/03/LeetCode之对称二叉树/index.html","310d2fba14905584bd726f0206315c3e"],["/2021/04/04/LeetCode之环形链表/index.html","c67bf987fd4c3dc9f02c6fde1f52ad45"],["/2021/04/05/LeetCode之二叉树的直径/index.html","6378cb288f232583f5dc1be0491879b7"],["/2021/04/06/LeetCode之回文链表/index.html","b04646b004998b6288c145538303f7fe"],["/2021/04/07/LeetCode之比特位计数/index.html","f5798fe85f31416e7164bd38bd2c5aa8"],["/2021/04/08/LeetCode之全排列/index.html","ce5723bdbe342ce4808a369a58d7e897"],["/2021/04/09/LeetCode之括号的生成/index.html","548f1eb4ea81e51cde4f338da14fe6a0"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","c13544c43254e4ad49355e65a5761892"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","536f48023c3150ef580be82160aeb829"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","72bc0ddaa68ea023c341928662cf357c"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","d6162af889610b1e9fa29a6b69e6eb80"],["/2021/04/14/Mybatis/index.html","b54de704186736bdc58134994f686cc6"],["/2021/04/15/Spring-1/index.html","36057920a38f460be59d6d0efcd6e521"],["/2021/04/25/Spring-2/index.html","004f61afa37f41eebe2f9c6e3fd71854"],["/2021/04/27/SpringMVC-1/index.html","dba24271e43e782a9853b92ad9ef59f9"],["/2021/04/29/SpringMVC-2/index.html","f3544e0ac6e06dca4fc2c6f87e623140"],["/2021/05/03/冒泡排序/index.html","89fef1b933338f94d68c46937eec6d4e"],["/2021/05/08/选择排序/index.html","7e54bdf089fea1aff3f820d595bf66ad"],["/2021/05/12/插入排序/index.html","25c306774256eed154cb32d840025df3"],["/2021/05/15/快速排序/index.html","dd8a17af71496ddded1170c6254e08e8"],["/2021/05/19/基数排序/index.html","d80cd5c374d3dbc207719d4003e18e2a"],["/2021/05/20/哈希排序/index.html","7bfbe8045a7d07749d595e7f2b4635eb"],["/2021/05/21/归并排序/index.html","336602846768f48a9a8135ece1ab6601"],["/2021/05/22/二分查找/index.html","738939ad75b7968933e78faba8711116"],["/2021/05/26/差值查找/index.html","e12e7db5d9fe4909aade1fac0b0b43f8"],["/2022/01/12/高精度大整数计算/index.html","0a64e97562f8b89c792d28966a65c920"],["/2022/01/22/前缀和/index.html","2f86628e21b702f04d83498a6fca3bd5"],["/2022/01/23/差分/index.html","c5ae732fe5088a05df43ec806a719ddf"],["/2022/04/04/MyBatisPlus/index.html","e63720b7a1daeadb008c629c1fb447dd"],["/2022/08/17/jQuery/index.html","e262c0ac147eb92cf1e479d280c0c5be"],["/2022/08/19/JavaScript/index.html","aa2beaf0baa6adb64ae645663d436a92"],["/2022/08/22/Ajax/index.html","a7ef873b5fadc2fb6c097e23c3ba90f1"],["/2022/08/23/Promise/index.html","daea0068d4da2825f6c05931d4187a30"],["/2022/08/24/Axios/index.html","ed2bb5fb2aa6065e735f0421211c8784"],["/2022/08/25/H5本地存储/index.html","8a2a08dcc17f5c1957e53b8b81754748"],["/2022/08/26/mock/index.html","08ea352a72385ff6f29d24b93d0817e3"],["/2022/08/31/VueJs/index.html","30a69c0efa42ef69ca724ab8f76989d5"],["/2022/09/01/vue组件化/index.html","27970597b7fefa9079ff7051dadacfb1"],["/2022/09/04/VueCLI/index.html","e2dc91479036bdc7c0dcfa06fd236baf"],["/2022/09/07/vue实现动画/index.html","85a0b430df3e3d03e75defcd4252ac5e"],["/2022/09/09/Vue响应式方法/index.html","64b87ea95661739ccbaaf9144bc1bf64"],["/2022/09/10/Vue异步请求/index.html","176107f8cd50a845e9cd0355deb450c2"],["/2022/09/11/vue-Router/index.html","2a7cdee411b88e5b5c3fc18153ae779c"],["/404.html","9936f1529d5cc95b1ee80b04358abc2b"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","8ec66bd0ca28ac987b984fbc5256c44f"],["/archives/2021/02/index.html","e3a9aa42363604d7186eb37f2bea0f63"],["/archives/2021/03/index.html","8dfd79479cb504926dddea9a60a3e85a"],["/archives/2021/03/page/2/index.html","f9c1bf9f0948ad5a5cfce9cd8d999f76"],["/archives/2021/03/page/3/index.html","cae0c7affaf3255a638eeca7d6c9c3a2"],["/archives/2021/04/index.html","0e10d4b493f384ca0dffdb62ab7bfe3b"],["/archives/2021/04/page/2/index.html","1525244e386de87f4552c5f7b91494ab"],["/archives/2021/05/index.html","f86b6a1e8dd0ce30b535e6a66f74c91b"],["/archives/2021/index.html","0c248c67f555d2fb13d912002783c923"],["/archives/2021/page/2/index.html","31b1f2b36b059688be685bb8662eb3ce"],["/archives/2021/page/3/index.html","3089b86e4f459b21300455a16145c148"],["/archives/2021/page/4/index.html","fc52ccb91daef3ff4c554d9e3c5a94c5"],["/archives/2021/page/5/index.html","9032fd1f12e793513bf3cbb57fb5f1d7"],["/archives/2021/page/6/index.html","c1b72c707405aabeb75876e7973a46c9"],["/archives/2021/page/7/index.html","1d711f0399213777e5b2ffb3ec1c4422"],["/archives/2022/01/index.html","7dafa6d5921fa17291669f794077243f"],["/archives/2022/04/index.html","09c6e71b8bb3b58df2e8789f28d84357"],["/archives/2022/08/index.html","46139522f8ad7f2ab09a39184d1e7a0e"],["/archives/2022/09/index.html","ce8ed95c70448619903599a5103957df"],["/archives/2022/index.html","c6f5ad9de2c04c48c2f9239e36b34bdf"],["/archives/2022/page/2/index.html","035c86424031d8d2a8d0cbebaebabfaa"],["/archives/index.html","e4ad3f4db9528ac3d82eea2df6e0406c"],["/archives/page/2/index.html","d3d5dd1bbf7d0f72cedcdfa651ec3b57"],["/archives/page/3/index.html","93346a8953dcf49379d6d311ac22f04f"],["/archives/page/4/index.html","47c84be0e41cee79941ee6838e647a2b"],["/archives/page/5/index.html","98d6f56ddf1e7ff20ae6d26a2a0111de"],["/archives/page/6/index.html","c2d7898e3586ea199b463f89d7b71c49"],["/archives/page/7/index.html","128b9603efa62b1cf102f13ba626d6ed"],["/archives/page/8/index.html","e43460464d8e121f928b98e67284c782"],["/archives/page/9/index.html","0bdf483474182a3a9792859b833e73ff"],["/categories/LeetCode/index.html","6421e910f5d48d881d2ba9e8c74e57d0"],["/categories/LeetCode/page/2/index.html","7e3f998de4740c9f31a58edeea7238c6"],["/categories/LeetCode/page/3/index.html","8584defa851b1558c3fd85e62eff79aa"],["/categories/SSM/index.html","0ed3e1d828d9f494dd88c377dddf567e"],["/categories/Vue/index.html","aabe8bf95bd297c0dfbf53a8388a6bc6"],["/categories/index.html","158029c5ee66f448f11bdfe3eca57303"],["/categories/前端/index.html","f628fd2824b1219a17173f57b882ce4a"],["/categories/博客/index.html","cd8fcde3e8eb92532ffb79b68a22e056"],["/categories/学习路线/index.html","f3d7e2ba16852f0141299a8108bb339b"],["/categories/工具/index.html","9070074b2237ae77012b2cac9ce0de57"],["/categories/数据库/index.html","9992e4dfa73c745d2c49c3068b992966"],["/categories/笔记/index.html","7b719a0208cdc214a44bf02a4a087979"],["/categories/算法/index.html","33a1a1a9823b7f68443495c3e56a52e1"],["/categories/算法/page/2/index.html","50e134d2859c0bb9b16bdcff8e8b06f3"],["/categories/设计模式/index.html","8315905507b11fbc84500fc868850d48"],["/categories/设计模式/page/2/index.html","509e074010df27b80b32f5db92f8010b"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","ee1e2643bb18f68e809919a467d895a2"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","cb7810c1b9f11ff888e0cd4ed32cec8e"],["/messageboard/index.html","b7b14fa8df5b92a529a0f1a3514503a5"],["/page/2/index.html","422110cf001ee76d7e40dec28b4fff45"],["/page/3/index.html","05dec10d2bdbf0260aa717bb77a65bea"],["/page/4/index.html","b21066abce7f73691419bf6d9129859a"],["/page/5/index.html","f08b46c58f9731a819afb323fcd8338f"],["/page/6/index.html","22ce2b2bb7bd1f6f308d7c4089b195a3"],["/page/7/index.html","d81329c88f3941904621769a55f3b8ae"],["/page/8/index.html","b0d494fd8be08eff3f60605b3771a9d5"],["/page/9/index.html","b02af3c139e9325a84a150c3ee401cb2"],["/sw-register.js","fc0e288d1bcf8d16f73ab88bc8b62866"],["/tags/Ajax/index.html","cb2ca66f31707a7923a2fec9bc3e4bfd"],["/tags/Axios/index.html","236c2803ef00bb28cf209a5efb15e51e"],["/tags/H5/index.html","650feee7c913f575e37d89303207b65b"],["/tags/JavaScript/index.html","0d37b432d1f21b7cdcd5bfbbfa524b9e"],["/tags/LeetCode/index.html","6a6b89916cfe2008d3059696193f8529"],["/tags/LeetCode/page/2/index.html","85ddc19178dbe333b06ab059b7997d2e"],["/tags/LeetCode/page/3/index.html","92de109465c1e524994fbc88ca228a76"],["/tags/Mock/index.html","56fe7a97e4527ad911d08867569a005d"],["/tags/Mybatis/index.html","3953356ae7331308ef5b565138b92d44"],["/tags/MybatisPlus/index.html","7b3fd87fc35d5831ff6c710824819715"],["/tags/Promise/index.html","4fdecc7e4b5ee486460cf9e65c964798"],["/tags/SSM/index.html","e214a7e301037d196b5eea0bb1a89275"],["/tags/Spring/index.html","e967f7f1678a3f4062107f2eebf2340a"],["/tags/SpringMVC/index.html","f12dd292afc9a5b5391640045a1b311e"],["/tags/butterfly/index.html","1ee439a328416630119f61da781be214"],["/tags/git/index.html","aa479e7c7bbdf4c5630b2f8a0795b09c"],["/tags/hexo/index.html","69d46ce2c9b1b91d605b186f27ffd8af"],["/tags/index.html","4d6c6a818855bf1a72be70b5e1bd8cd5"],["/tags/jQuery/index.html","b8440fbe96d650005b2925989245b29e"],["/tags/java/index.html","f07173d45ca75c7133764f390792fe01"],["/tags/markdown/index.html","39de17aadcef29692e55acd6ee8d3cac"],["/tags/mysql-数据类型/index.html","a0ecee87cb94eddbe8b0b43d7bbde46a"],["/tags/mysql/index.html","14061318de157070d048efcb3c614e22"],["/tags/typora/index.html","72a4120283141ac889301c8aabef0e9b"],["/tags/vue/index.html","23b786b2de236bd6190f35906be08f19"],["/tags/享元模式/index.html","d651d85acc5d34e75a6bcfb5bf1a5b9a"],["/tags/代理模式/index.html","acdf7e143bf88b38a3e94217ecb0dec1"],["/tags/分布式/index.html","22db0277f021ef1800d67a48c84c84c9"],["/tags/前端/index.html","15368404193beb44d6fe5f354d238046"],["/tags/前端/page/2/index.html","3d63946c3e6f8431a7069dffd5c7d6bf"],["/tags/后端/index.html","8a1f37b32baf0cac228fc8aeccb49900"],["/tags/外观模式/index.html","f5aed7942c83e459d4f6913b74627670"],["/tags/工厂方法/index.html","5c41c09f02c04319e8b94a4136f8fe36"],["/tags/抽象工厂/index.html","ea255d606da9c981763b501942ee1573"],["/tags/排序/index.html","18e0042d12e1ae352e8a5a5f2ec2ff1a"],["/tags/数据库/index.html","26021c0af84bc7926812dc001561411b"],["/tags/查找/index.html","bd625f6eb1f8be11d31af3cf466a21c0"],["/tags/桥接模式/index.html","e1a72e82a14b5079b67f18154364a653"],["/tags/模板方法模式/index.html","befc168728fcca2ebd8d75bf977c04aa"],["/tags/版本控制/index.html","ec5272c118931bd260c00a00397d04a1"],["/tags/策略模式/index.html","215b2836043ad91f43866ab178b26d41"],["/tags/简单工厂/index.html","57957c25bf07b36dcbc3d8dbf77d23b0"],["/tags/算法/index.html","9fb992c93a59586eb483e7725a51d28a"],["/tags/算法/page/2/index.html","17e4684be288d035199880babf3d2292"],["/tags/组件化/index.html","9eb9b9a7974fc880682d7c05eca67367"],["/tags/观察者模式/index.html","d03a3d36314f3f7174344cf9b671acce"],["/tags/设计模式/index.html","ed4f1c7f88cba932838ca81b4b380d4f"],["/tags/设计模式/page/2/index.html","6db45b9a38492a3aa18bea977357b66f"],["/tags/责任链模式/index.html","10f0e9a7d90c3717b37beba984acced3"],["/tags/适配器模式/index.html","84bef5fd8f6d2a44d3cc0570cf3a5317"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
