/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","f685df7679904956e0e0ad3bcb5dc3d3"],["/2021/02/22/博客的搭建/index.html","6399bfe670daba529f4cec7c32f4be20"],["/2021/02/23/如何使用markdown/index.html","f65027588aadea9eecada3e2a37c801f"],["/2021/02/24/mysql命令大全/index.html","63ec11f0b2c23d855a207cb01e0c0b70"],["/2021/02/24/mysql数据类型/index.html","db3abe49d8ed251f7e666d93e24c3a13"],["/2021/02/25/Git的介绍与简单使用/index.html","8e1109f57d6cccd7c0e90624d343393b"],["/2021/02/27/简单工厂模式/index.html","1a6851a80d77594a860c2b8fef3ea33e"],["/2021/03/01/工厂方法模式/index.html","fb449a8f985ba4c2222dc5372d31846b"],["/2021/03/02/抽象工厂模式/index.html","4aa3b30a16734b675ff899d8da1bea27"],["/2021/03/03/单例模式/index.html","6dc7d7fac4cb77440a0586039760c4eb"],["/2021/03/04/观察者模式/index.html","107ca5f179c72ffaa6980ae2258d404b"],["/2021/03/05/适配器模式/index.html","c0ab7c5b5ef0b2c828314496c94d7ebf"],["/2021/03/06/模板方法模式/index.html","90192b6b31e31798d6fb023fcc8bab0c"],["/2021/03/07/责任链模式/index.html","6e00fe94cc8ba4db42e70a372f236f59"],["/2021/03/09/代理模式/index.html","e1ae931e6fefcf0ae18c36088005d5fd"],["/2021/03/11/享元模式/index.html","bbb5b8ac03b1673bddb6676501329ce1"],["/2021/03/12/外观模式/index.html","6ba081f95fd3003568a81f51f831572b"],["/2021/03/13/策略模式/index.html","9c214f59503e056a4e6096be2dd57a06"],["/2021/03/14/桥接/index.html","60e3f19ff7e6475af8617efe0b0d5ad4"],["/2021/03/15/LeetCode-多数元素/index.html","50cc119c7841bbdea3d506d8bdec5a7d"],["/2021/03/16/LeetCode之汉明距离/index.html","fc9e65b0e6bf704f7a535b7245b7e8ed"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","b8aeab03f27c53001b2cc77387b44744"],["/2021/03/18/LeetCode之两数之和/index.html","7e8115ab73692b577417ec9ee4296f28"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","ed97e1cb8c428c34cf0299609801d260"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","8c8ecb8aef8ff804200a077e2b4dd8a8"],["/2021/03/21/LeetCode之有效的括号/index.html","947de2f1972f7e6c947a619ea70bfb64"],["/2021/03/22/LeetCode之移动零/index.html","40b443bf1e5b5a5b987498da99e4f770"],["/2021/03/23/LeetCode之爬楼梯/index.html","1a6fea6b10a2edcedd3b76abb4e6aada"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","cafa838180cacf0d49ab37cc61887989"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","29f12b165898e550caf3ac1124804f03"],["/2021/03/26/LeetCode之最大子序和/index.html","1cfd5581ed81bd1678b776f0940789ed"],["/2021/03/27/LeetCode之子集/index.html","b9701d9481617733adc941724d087341"],["/2021/03/28/LeetCode之合并二叉树/index.html","96218b1fae6441b22704d589237d3b1b"],["/2021/03/29/LeetCode之翻转二叉树/index.html","61b3553aa2c4a6381b7e23fa404ec704"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","8eefec325bf9329b84b61d5d0b2d9842"],["/2021/03/31/LeetCode之翻转链表/index.html","e40e99edf1dba35f68748d4769603cad"],["/2021/04/01/LeetCode之相交链表/index.html","f6a46bac1097519cff903a0606b9516c"],["/2021/04/02/LeetCode之最小栈/index.html","c19353abc4f25b0105cb526c3da69787"],["/2021/04/03/LeetCode之对称二叉树/index.html","9adade33c38958fad5d64985b7cd934d"],["/2021/04/04/LeetCode之环形链表/index.html","9a8934519aeba72f49a5dd396ba1a7e6"],["/2021/04/05/LeetCode之二叉树的直径/index.html","d1ef8bb01097239fc9b9fe530f936146"],["/2021/04/06/LeetCode之回文链表/index.html","ee1bcd0647fe80483867e9ba22487f87"],["/2021/04/07/LeetCode之比特位计数/index.html","9e0d933021ee80519844251c99db1a46"],["/2021/04/08/LeetCode之全排列/index.html","c54ae9994351ede6495b906d444e4c2d"],["/2021/04/09/LeetCode之括号的生成/index.html","59b5b7ee36050eed36446665746e2f63"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","504ae17f1e574965aee21868e00cc3be"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","ec29b23df715b6457f5223efdd02c9a2"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","6a0ede921ea5126c77da8ad2c0caf9f0"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","1953f3019e2ef017946f2bb505f5c847"],["/2021/04/14/Mybatis/index.html","ae96a61e17d626851796096a5c8522f8"],["/2021/04/15/Spring-1/index.html","565931eabc5093d690db66b1493250bd"],["/2021/04/25/Spring-2/index.html","12f8295a6f6758ca42331fb92e39aab3"],["/2021/04/27/SpringMVC-1/index.html","7cb88fee2d9ce337e652b1a068ea3964"],["/2021/04/29/SpringMVC-2/index.html","8f559e148e3b6ede3086c7057d731201"],["/2021/05/03/冒泡排序/index.html","e9c0ae8429cdd9ba371a3a1ee5f52b18"],["/2021/05/08/选择排序/index.html","43f83aa7c7c9662f43f292ddc3e5d189"],["/2021/05/12/插入排序/index.html","8b0888be24a93f6ee8c5d9ad1bcfba9c"],["/2021/05/15/快速排序/index.html","e937cac0835743a52a45e84ccd4f2feb"],["/2021/05/19/基数排序/index.html","638245103c194434edb523b86e463dd9"],["/2021/05/20/哈希排序/index.html","5560ba1b009c750dda613e65a66c534a"],["/2021/05/21/归并排序/index.html","638c0ceedec094dd37ce07015ace12be"],["/2021/05/22/二分查找/index.html","cc014b2a748e2b6b2900b8b085613f7a"],["/2021/05/26/差值查找/index.html","2a46441e4228d13ce88d3bc97ecb1af7"],["/2022/01/12/高精度大整数计算/index.html","2404cc82aa0a7faaa2c775fb9431cc44"],["/2022/01/22/前缀和/index.html","fc9ca2e3c44020792024688b5cc0a012"],["/2022/01/23/差分/index.html","1a36cd97eda77bbc34141157942faa38"],["/2022/04/04/MyBatisPlus/index.html","20884fd0641ed00485f63dac7ac13784"],["/2022/08/17/jQuery/index.html","c82b0c6dd119173ebeb6fba3fa1ba796"],["/2022/08/19/JavaScript/index.html","fcf1a540c3b480ffb6746bc03aaea83a"],["/2022/08/22/Ajax/index.html","befe8d1a562e5274de58b5aad1dea395"],["/2022/08/23/Promise/index.html","c4a2c6a1f61e69295500b70e9e9f0827"],["/2022/08/24/Axios/index.html","6c235dde1d94283482fa3f2a85926e49"],["/2022/08/25/H5本地存储/index.html","2d2346a97f6cc7ec65bea10fd961e15c"],["/2022/08/26/mock/index.html","538b69d4a6d674fa430842103e4872af"],["/2022/08/31/VueJs/index.html","470a87ade0975eb6af75241742417be9"],["/2022/09/01/vue组件化/index.html","fcf284481217a46ea17b6dc7fdbaa45e"],["/2022/09/04/VueCLI/index.html","5b94bb20d2bfb431fb261159c397aa48"],["/2022/09/07/vue实现动画/index.html","d524a69cdd4bf671686dbc14f991167f"],["/2022/09/09/Vue响应式方法/index.html","4adbc9a86ade58f2ff9661855db3edc1"],["/2022/09/10/Vue异步请求/index.html","d0c76ca3aa0303e7c1f8337596b651ad"],["/2022/09/11/vue-Router/index.html","77e853d8284aef0997b4a0781ba95c28"],["/2022/09/13/Vuex/index.html","5e831188b7bd1213ce96d5f6155fd247"],["/2022/09/15/SpringBoot/index.html","623e7ca7dd3781844689adbe1667028e"],["/2022/09/16/SpringBoot配置FastJson/index.html","c593231e93739e4456369039f9c65072"],["/2022/09/19/SpringBoot参数校验/index.html","239b22a292f03f2ffda57c0365b727cd"],["/2022/09/20/SpringBoot的异常处理/index.html","4835bb2eb6b1819177bf1bd84c4ea656"],["/2022/09/21/SpringBoot统一响应处理/index.html","d71361bf3c1b267762f93d771adcefa6"],["/2022/09/28/Linux/index.html","fbd60719569ca9c2bbdf43ca8e80fa8f"],["/404.html","32eaaaa453f51d292e200902e3a44695"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","2cb4f6e0c240913a75238b0f72717a84"],["/archives/2021/02/index.html","1311028ee2eb98bcc69bc04828f2fedb"],["/archives/2021/03/index.html","4932c1a4dd82d470249cd14f1b305a7b"],["/archives/2021/03/page/2/index.html","96937262f1d4b1d4412ec16a1b6fa3a1"],["/archives/2021/03/page/3/index.html","3e1ac914a32f2ce54c71fb0e4cb289b6"],["/archives/2021/04/index.html","149104cf80e87187c4d425d8f7978662"],["/archives/2021/04/page/2/index.html","6fa31ee784ba0064597e19e33d43f7aa"],["/archives/2021/05/index.html","701f597e214230631729b7858e4338ab"],["/archives/2021/index.html","0da9863ee7eead42c0f1638a69bd68e6"],["/archives/2021/page/2/index.html","e650b94e626aabc364001522cf719005"],["/archives/2021/page/3/index.html","6e79009d3ab3cfcb2d5d085e4280797c"],["/archives/2021/page/4/index.html","8063e882afc5cc469ba0608411a29dd8"],["/archives/2021/page/5/index.html","adb6e3859af7289b4777e29551c7ce96"],["/archives/2021/page/6/index.html","8508c3a297cb38775a782e30194fb421"],["/archives/2021/page/7/index.html","d5b4a39df98df070ed989ace8e4a8b82"],["/archives/2022/01/index.html","73f10798fd6fdd2f4fe5b1f2dd33fefc"],["/archives/2022/04/index.html","a438be0534359d165fc673ae1b50eec9"],["/archives/2022/08/index.html","6007bb1d8402fe423a07529db21311a1"],["/archives/2022/09/index.html","03f71c043a85b7f62608eebd9212fd53"],["/archives/2022/09/page/2/index.html","ee33d3d594b4e4d64ac5dd3f2b4e0ec5"],["/archives/2022/index.html","ff2135e10c991c716c9baed75f993dfa"],["/archives/2022/page/2/index.html","753a564fae03df3e4e87681d9222ddba"],["/archives/2022/page/3/index.html","3e5216b1eed5b8d395da0ddcbd20da39"],["/archives/index.html","4e6d78ae0836204b5ab38087ad8121d8"],["/archives/page/2/index.html","26417a387e030319df153f9393b3d272"],["/archives/page/3/index.html","cda2bf95d630828546135c0da22bd95a"],["/archives/page/4/index.html","96edf94b13f80caf5e18a72e353ce573"],["/archives/page/5/index.html","29e3f83b841f04b62601d0bdd40937ff"],["/archives/page/6/index.html","9babe571387dad21be2eb3dd1334711f"],["/archives/page/7/index.html","b5c02ed30772ce5a5d936fcfbb63dffe"],["/archives/page/8/index.html","7a92b43546c2e019d92f669e694ecb94"],["/archives/page/9/index.html","2085594b849788c17fa577bff7f37121"],["/categories/LeetCode/index.html","9edad3800d122813bf916c0d731658e6"],["/categories/LeetCode/page/2/index.html","e8dd6e117932baac045cc9696501b59d"],["/categories/LeetCode/page/3/index.html","ce87f818a07391273ed63aea070e1dd0"],["/categories/Linux/index.html","ad80c0973eb1946a830c519b38da6dcb"],["/categories/SSM/index.html","ca73e4fc2e38abae1036aa1c9c6500bd"],["/categories/Spring框架/index.html","3e9ac9d10cd6204ec30ec853098f4c20"],["/categories/Vue/index.html","72d803f7688261cc301f8b21c4f5ea0c"],["/categories/index.html","cdf6cc76eb8aacbe14449d3789c6ac20"],["/categories/前端/index.html","0f7b676a04c8b61fb5032df1033cf5ee"],["/categories/博客/index.html","e3ab101a218587edeca3fa06b2f60783"],["/categories/学习路线/index.html","c569ed4efda6d378b6f5ace85bf46bc8"],["/categories/工具/index.html","b427d139fed7aa5d03d02b8c80aab057"],["/categories/数据库/index.html","da029371525bfa4aef6580dcc7063393"],["/categories/笔记/index.html","0dd83592d47ddcb2d3a10875749c3877"],["/categories/算法/index.html","05ed096296a675c59f4441b8a81f4c89"],["/categories/算法/page/2/index.html","be5565b4f8b3f2d1ee5a06f76ef67fcb"],["/categories/设计模式/index.html","ccd999d9c9a1ddb6000507d00061bd66"],["/categories/设计模式/page/2/index.html","dbb41a3440ae56de47c286a45a765e53"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","42be310411bd8a3cbe8a1f45fb5c6483"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","a18b4c71b60498d9b99cb078e79079ff"],["/messageboard/index.html","52205321db3871cd47730478503f9b53"],["/page/2/index.html","5d197d4b8b62aca196ff5c7392fbdbf1"],["/page/3/index.html","ea8a893f8899feb70fd61128ea1a6d95"],["/page/4/index.html","f5efc86682904501c6c3fa4f7de56a1b"],["/page/5/index.html","f113739a24518e003e485730b58757a9"],["/page/6/index.html","bcd140e2e7b7fc1f049e5e4f12d650bf"],["/page/7/index.html","d3e6fd19a1d97cbebba10dd69dacdd8c"],["/page/8/index.html","0e103f292ae6c463a78c0c2985ee13ec"],["/page/9/index.html","a8e11dfd1a61705fb23d2702df3d040e"],["/sw-register.js","79eca99fa674a8fa53ce513e20d04da3"],["/tags/Ajax/index.html","5b180ca90d75206d81afe22e59724e4b"],["/tags/Axios/index.html","ee4632d47e651a7d1807e30ff068c697"],["/tags/H5/index.html","8db72fd8f6d45e98579b0aa4164916cf"],["/tags/JavaScript/index.html","baa6f65df8575c956b6181b0e5c96a82"],["/tags/LeetCode/index.html","c7b62ee22b98bcb87a93cfa12bd09838"],["/tags/LeetCode/page/2/index.html","3d431ac94cad2ae3ad7e76674a719b36"],["/tags/LeetCode/page/3/index.html","e542a844d335540bb77c27da980e7788"],["/tags/Linux/index.html","29b8589e1c8fe6ece7a1c313cb40f505"],["/tags/Mock/index.html","7b7ce3bb159bf93d0161b1727b69872a"],["/tags/Mybatis/index.html","c6e5887accc0ab2346eab03f8599c6f9"],["/tags/MybatisPlus/index.html","ffbb65779689043268d583bce41b9394"],["/tags/Promise/index.html","2403c989f303060a2cb20a60ae3a263a"],["/tags/SSM/index.html","cd3b56bf69a97af869f839e55b1765d0"],["/tags/Spring/index.html","73fc4b6fb46cd900cb35112d3bc434a4"],["/tags/SpringBoot/index.html","d6aeb2f094405773025520ca9b357199"],["/tags/SpringMVC/index.html","749dd03bf298a5b50970dc83015cf940"],["/tags/butterfly/index.html","49a1fc760dc6fa0ce5a5911a295b7f93"],["/tags/git/index.html","6c35cb58da26a3667aa774533d0ccc37"],["/tags/hexo/index.html","1f5d88cf8d3c68cd3f73cea8f6d3c3c9"],["/tags/index.html","409e27532a39fe3f99dc2c2b5b2ea037"],["/tags/jQuery/index.html","21071d0c7537a855046dfe8ec1cc5fb1"],["/tags/java/index.html","8c929248de4475d4a07b16f1aff3a447"],["/tags/markdown/index.html","c2bdb142408bf4d46486ee8a31b80b1e"],["/tags/mysql-数据类型/index.html","ef8fef6805c9226d862a1b650a122629"],["/tags/mysql/index.html","67da5519aeb97624ff3a12fc4bac1fdd"],["/tags/typora/index.html","08fd508d803ea67496779f32b696a6c0"],["/tags/vue/index.html","82469e7297081220dcb71c559fd75507"],["/tags/享元模式/index.html","33fa38b18a3a6f50d016893483091108"],["/tags/代理模式/index.html","751f63d80a7e2d03a8850eb8ac964f22"],["/tags/分布式/index.html","6e3366aba0c03e504af65b239a3c7987"],["/tags/前端/index.html","9a8928ca3348efe127b51915dfb07e5a"],["/tags/前端/page/2/index.html","54e42400635b6406ab1ce228f0d5ebd0"],["/tags/后端/index.html","b95e54a40533a2299df1013d080624d7"],["/tags/外观模式/index.html","aeb7c639e2da78927279b305a57c3b8a"],["/tags/工厂方法/index.html","5c83fe39936d87fecc9d244a1f9a6c40"],["/tags/抽象工厂/index.html","82b57172a5716796de0d1958c9fec68b"],["/tags/排序/index.html","d3d98e548111b010188b1159c88706dc"],["/tags/数据库/index.html","64a19c6cb60ebe5d82a9c8d9d709b85f"],["/tags/查找/index.html","c57c895a171384933ae6bbc4d68c5c2b"],["/tags/桥接模式/index.html","b6da5ff2359201aa5a4194c146b3bb1d"],["/tags/模板方法模式/index.html","6ea86ff9a77dc36d23d73856a502975a"],["/tags/版本控制/index.html","0a166aadb60ddf8bb5ab562880ea7ca5"],["/tags/策略模式/index.html","d8f585b3dc8f1a3c751bcc49dd00b13e"],["/tags/简单工厂/index.html","9ed43c2496152f9c71411dc7374136e9"],["/tags/算法/index.html","166f68b4974029620bfe9a21b9db0a81"],["/tags/算法/page/2/index.html","d4fe5817f4b1d91e551122faaa75cd43"],["/tags/组件化/index.html","3c2a7f83c821347d9d35b86524b9c4ba"],["/tags/观察者模式/index.html","7971b94de29be63570fe5fb1795db8a1"],["/tags/设计模式/index.html","a70b6119359f47110c7ace816b5333fc"],["/tags/设计模式/page/2/index.html","0d9b88a9ff6606c415c97fc443426a34"],["/tags/责任链模式/index.html","351655f09ea8cbd5d4956c660f164294"],["/tags/适配器模式/index.html","e9938b6e35b83118fdabb9e56fffe77b"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
