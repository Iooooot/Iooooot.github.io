/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","a6b337966b0dc97cacfc5308b23a03b6"],["/2021/02/22/博客的搭建/index.html","04ee6baacc41083876db3cb27e02d8d1"],["/2021/02/23/如何使用markdown/index.html","5ec1ed29b8edf1bcb1da34ec2e924486"],["/2021/02/24/mysql命令大全/index.html","183ba7dd962750fb5fe217dc2b871567"],["/2021/02/24/mysql数据类型/index.html","31a31b3e9c297ba16e9054451006bce2"],["/2021/02/25/Git的介绍与简单使用/index.html","02d8069a368c678fdc9b35a62996706a"],["/2021/02/27/简单工厂模式/index.html","0a9c2c86c957eaf24ce84b1d3b700491"],["/2021/03/01/工厂方法模式/index.html","2b76344b1a05b0f2f8e44035fae46e93"],["/2021/03/02/抽象工厂模式/index.html","95053cc1ecf1a6146dcde45161bfa237"],["/2021/03/03/单例模式/index.html","b661757a0d160d44512e2efe15d4a434"],["/2021/03/04/观察者模式/index.html","a3b379e3d894332e07a6f48e4a446a40"],["/2021/03/05/适配器模式/index.html","8942ac23db2f4afd12369a6b3a70b6ee"],["/2021/03/06/模板方法模式/index.html","2167fd9093357103004485042e43d8e5"],["/2021/03/07/责任链模式/index.html","506b6b63d269782135419d3b4d8598cd"],["/2021/03/09/代理模式/index.html","6710c911d2a5a65efd7fb8b821d8d84f"],["/2021/03/11/享元模式/index.html","3d4d87d4272cba8e211b4574601c589e"],["/2021/03/12/外观模式/index.html","52afa2bfd8efd8640d1d3feb72c4af11"],["/2021/03/13/策略模式/index.html","821cb2ff70306d2a18217d5786bda7fd"],["/2021/03/14/桥接/index.html","e93685bdaf98264853962d5f155070b8"],["/2021/03/15/LeetCode-多数元素/index.html","1af06f63a6865366c92c240c98118e37"],["/2021/03/16/LeetCode之汉明距离/index.html","b9fb02ccee0bb20b2a712a537e6c04f0"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","90b18f61ccae33691edff41a6645e68f"],["/2021/03/18/LeetCode之两数之和/index.html","28ab84b4d5d3f543f80627b09807fcc9"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","d4c1e9d83ce5bdf351913bb8c10bc24a"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","65ae18f253547a8380d3220dfcb9ff90"],["/2021/03/21/LeetCode之有效的括号/index.html","a276d3e994eb1a35daa9be9f2d96a987"],["/2021/03/22/LeetCode之移动零/index.html","63e94ab7ae4db4de1e1afaf3c165eb10"],["/2021/03/23/LeetCode之爬楼梯/index.html","ac11582970a7c860423d9bf55fbd8f3a"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","07b80c3f9b2369e9c7d2f1c77614e2be"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","46fdf12114a124e0375de51bc38a76cf"],["/2021/03/26/LeetCode之最大子序和/index.html","3735a7e572bb11819bcd2d23af04bf27"],["/2021/03/27/LeetCode之子集/index.html","e7a87f2578661f11a4d4db46d8140419"],["/2021/03/28/LeetCode之合并二叉树/index.html","f51524efe5b69a87486a7725d43fffa0"],["/2021/03/29/LeetCode之翻转二叉树/index.html","a089a1a925e598dd1939ccb37bfcadfd"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","bf79b9834f3db285eed5d6ae24aafd35"],["/2021/03/31/LeetCode之翻转链表/index.html","3b7bcc23397fc7ad00306e6d2099badb"],["/2021/04/01/LeetCode之相交链表/index.html","ee85402ca1ad316302b3c26d5e707207"],["/2021/04/02/LeetCode之最小栈/index.html","1e1817e6bfd83ac73b919c9d1ce766f6"],["/2021/04/03/LeetCode之对称二叉树/index.html","99adbc7a08b5edd07430fc2fedc88a82"],["/2021/04/04/LeetCode之环形链表/index.html","9acd5f5b0c3d8f97ec6533fe5e376cec"],["/2021/04/05/LeetCode之二叉树的直径/index.html","179f69fc37dc5b8251ffc74585229765"],["/2021/04/06/LeetCode之回文链表/index.html","b814e250ccfcb1c2e00f96625edbd8cd"],["/2021/04/07/LeetCode之比特位计数/index.html","e4990ce40906bcc50fb4a32e31c6549f"],["/2021/04/08/LeetCode之全排列/index.html","f16e41017fbf37bda476fde870c188d0"],["/2021/04/09/LeetCode之括号的生成/index.html","d1fe7f0c442f8e54ab9805a5a860b7e6"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","2a3592fdaef190135cea953d35c3b657"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","1675569db4a95067f81375d25364eb52"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","faf98e6b9b87185844813ee2e0e1fad6"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","6978f46d61efb814244965fc7beef89e"],["/2021/04/14/Mybatis/index.html","ef86a89aa3f7e8412e73167148b8020b"],["/2021/04/15/Spring-1/index.html","b61bfb364ce82bba1128420b0a04d7cc"],["/2021/04/25/Spring-2/index.html","01aff90f6827ba535a920c9e05872656"],["/2021/04/27/SpringMVC-1/index.html","e4dd2aa03cb44def9094952cde48d8a3"],["/2021/04/29/SpringMVC-2/index.html","30453543e4a4c3f3db3137172136f098"],["/2021/05/03/冒泡排序/index.html","c5cea5317645a3ac73edf74501f4d6dc"],["/2021/05/08/选择排序/index.html","3a1d290801ff3d1a22379f795941b6be"],["/2021/05/12/插入排序/index.html","8928f4613b1b68347f7c09b1e823b7c1"],["/2021/05/15/快速排序/index.html","f722215c884d5e3587bedab600e7ae3c"],["/2021/05/19/基数排序/index.html","9f4ca5a58d0e657da4d09a21a7f1b88b"],["/2021/05/20/哈希排序/index.html","b05098c40cf226785b231c816bda9fa6"],["/2021/05/21/归并排序/index.html","aec4da414e3f68443945ebaa91e3632a"],["/2021/05/22/二分查找/index.html","f5704dcb48a4fac1a98b61ad987fb3af"],["/2021/05/26/差值查找/index.html","7536f87e28b1cd948721cd9488c2a258"],["/2022/01/12/高精度大整数计算/index.html","66c35488a2070bb30c0c9c441ff24d82"],["/2022/01/22/前缀和/index.html","5d24aba2460302032f0855c9d62e4330"],["/2022/01/23/差分/index.html","2180418ae5aac6dbc4950f781d8566d5"],["/2022/04/04/MyBatisPlus/index.html","3cfc13807331dd54dd905a67169142c5"],["/2022/08/17/jQuery/index.html","c8f51aff3b6eaba91a4c0bde2c6acd4c"],["/2022/08/19/JavaScript/index.html","7a5985332a317f176f51c75c568317d3"],["/2022/08/22/Ajax/index.html","f0cb995704a9b7e0e8ae1d9afeceb15c"],["/2022/08/23/Promise/index.html","d1680087b6777da61c279117ae636da4"],["/2022/08/24/Axios/index.html","dd43e3938dfd3ee05c25dae8751329b4"],["/2022/08/25/H5本地存储/index.html","7d5e588e7cb1140f2d4e27945982a1f0"],["/2022/08/26/mock/index.html","ee3676504fa7d71558380f0387e48b97"],["/2022/08/31/VueJs/index.html","52e299a3f41d4fe424229d6df729f164"],["/2022/09/01/vue组件化/index.html","a369746c5aeb3c8981fd8298a743f064"],["/2022/09/04/VueCLI/index.html","053e06f16885131cda9e66841d2f6a3c"],["/2022/09/07/vue实现动画/index.html","ac51456b31badd095a0a7ed32239b87e"],["/2022/09/09/Vue响应式方法/index.html","01f2a04f6217e3039aa68642c943f2ab"],["/2022/09/10/Vue异步请求/index.html","be0adb2bce107df0d8e1e21a6f6347ce"],["/2022/09/11/vue-Router/index.html","7e87a49d0713550419278155d39937a0"],["/2022/09/13/Vuex/index.html","94d605f95a90039eeff85f08943fd822"],["/2022/09/15/SpringBoot/index.html","d1ec5ce8f588ecbaede854eb72620043"],["/2022/09/16/SpringBoot配置FastJson/index.html","c227285209435a4da93cdcb2f82afc7e"],["/2022/09/19/SpringBoot参数校验/index.html","a74d8b3722eb6a2548656e2c056cb3ba"],["/2022/09/20/SpringBoot的异常处理/index.html","f5b9a85b0f9028bd03e9690efb19c288"],["/2022/09/21/SpringBoot统一响应处理/index.html","7905aeddb3b4410d70f13956d0be91dc"],["/404.html","221101fd1e373c5d88037f5b2665fefd"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","b700806194878f207cf2d626ec2dce07"],["/archives/2021/02/index.html","11ac46c2ab286cd9d841af7cb8d17387"],["/archives/2021/03/index.html","4ad3bc8bba30ba002eb32ada8c4230bf"],["/archives/2021/03/page/2/index.html","c3068c6e333633b0c81193c2d20776ee"],["/archives/2021/03/page/3/index.html","01516cfb93fdba4bc7c59c152ab8dc7a"],["/archives/2021/04/index.html","ff3dd66eb02d8008691effc1e8729ca5"],["/archives/2021/04/page/2/index.html","d2b67a30ed84179f804242f284e55205"],["/archives/2021/05/index.html","81a8f200879f260d455b65e7e00725a6"],["/archives/2021/index.html","3e66f92631007103b3387f3b0b76d128"],["/archives/2021/page/2/index.html","e71f77f7ef8b2b4160f705f1c637daf7"],["/archives/2021/page/3/index.html","05262f858015836fcb64e44722caeb3b"],["/archives/2021/page/4/index.html","486970b33c6790e1ffc2d808afc5ab3c"],["/archives/2021/page/5/index.html","636318c9225adcd1893f68a1a6b85dfa"],["/archives/2021/page/6/index.html","e7546a1b8722b656a9b13983b04409f5"],["/archives/2021/page/7/index.html","3dcb60fd21aa1b351116bf68a9044d16"],["/archives/2022/01/index.html","455c091bf2ea89d1ebc7b7fe58f7c753"],["/archives/2022/04/index.html","3386bf0d1c3dad7dd170f9777483804a"],["/archives/2022/08/index.html","7fcbde6ab565e4148ec00e1043fb2a96"],["/archives/2022/09/index.html","10f4316553db43723a64b4c09ff0edc2"],["/archives/2022/09/page/2/index.html","356e8931aa8d6ffed0c4693aabe86a37"],["/archives/2022/index.html","8be19988717f91336a6e9e743dd10f4a"],["/archives/2022/page/2/index.html","66fd55c8ddd832f70cb0b974cb425093"],["/archives/2022/page/3/index.html","76f39844beca6bda248d2ce397622585"],["/archives/index.html","eef833e312671191111fbfd7c458fd7b"],["/archives/page/2/index.html","e8d3601e6d86c9fb5e428b76085de522"],["/archives/page/3/index.html","3670fc50ab7f30771bec24525251c3fd"],["/archives/page/4/index.html","d281421d25f21abb12c8810689cba86b"],["/archives/page/5/index.html","4d50310f89c73f943a66ef9881832232"],["/archives/page/6/index.html","cb982fcd0494f830e54fd6437efa6804"],["/archives/page/7/index.html","769beec2d1f8ce0b7bd1aea4daa0c18c"],["/archives/page/8/index.html","25d96aa511ff65dca666d8bfa08037e1"],["/archives/page/9/index.html","cbc00441b4aef4c76af97303e1fcdc91"],["/categories/LeetCode/index.html","66a14880a65d5eb260031c6a575ab783"],["/categories/LeetCode/page/2/index.html","64537ff0245757a514c6a1048593c29f"],["/categories/LeetCode/page/3/index.html","eb6ff5a1acf2adc2b75ece918e3f17d8"],["/categories/SSM/index.html","950be2469e24ec6f38e20984f064496c"],["/categories/Spring框架/index.html","5da8d15d4bcf0f3f8779886f75af97e9"],["/categories/Vue/index.html","65e4431829a0a9e7409449d3741a8297"],["/categories/index.html","76891f589226ec46510fe044f4883b70"],["/categories/前端/index.html","f0acf807d01a3008d12b7bc47950f318"],["/categories/博客/index.html","1dfb149955193ad9f74fe6b1806664a5"],["/categories/学习路线/index.html","809b7e2ce7272fc135fde047098153a5"],["/categories/工具/index.html","18896788ff3013bd03dee1462d16c9f3"],["/categories/数据库/index.html","125568ef021f16b87bc0f3cd45c69d47"],["/categories/笔记/index.html","4a1e5bc659461a3ca293ac772e1fdd38"],["/categories/算法/index.html","b774e8bdd62eb43e60a6c83cfedb0515"],["/categories/算法/page/2/index.html","032881d4e0e95871bd80f753a513f58e"],["/categories/设计模式/index.html","ff65bd47a816e9244a02aabbb3ec8d37"],["/categories/设计模式/page/2/index.html","62d08b8c6d6f5563de0bd391c83f2371"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","6ecfad036c07b3c7f395d59e9ca6cd95"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","2ac5c144535591dc30b7cc3842869bac"],["/messageboard/index.html","3c22bbdb896f2f48273407567ee3fa6f"],["/page/2/index.html","a0ef8fbca241f055730d6f5d481bfc98"],["/page/3/index.html","4578fa002f131c07258b3570c2dbe5d2"],["/page/4/index.html","30473ef80b810d73968f471c561f3551"],["/page/5/index.html","e71e2362269442335643a6860e5ea018"],["/page/6/index.html","c3ce7b98dcf47d8ab4f078e1ba947b87"],["/page/7/index.html","f187184ac5f214dca3a55b7251fd3434"],["/page/8/index.html","57a70688354934a7fe1701c5d1b313c7"],["/page/9/index.html","3818aaf4d07fb6b63f70a6f029cf6379"],["/sw-register.js","c2fb732d4e74a61b4862cb4f0666d5bd"],["/tags/Ajax/index.html","cf51c3e5f76c38da85c85f40b7bdd4fd"],["/tags/Axios/index.html","25ded6b5fa27768f60998ec28cfb611b"],["/tags/H5/index.html","e33499d16b7e567bc864ad38f4c13b91"],["/tags/JavaScript/index.html","2409b3b6a7859c7783386639deca80f1"],["/tags/LeetCode/index.html","985adeac0a00a82dd1d93fb1e649aff5"],["/tags/LeetCode/page/2/index.html","f05cfc472276c1352254d83dd77366d4"],["/tags/LeetCode/page/3/index.html","d811ee04c7a4969e548bbe5d8242f877"],["/tags/Mock/index.html","504fbd2e4eceb463728995e5e487f88b"],["/tags/Mybatis/index.html","e95277c44a8a96a59e1a08be651616da"],["/tags/MybatisPlus/index.html","c6be2f1bbe52f9a91971e01dab00d15f"],["/tags/Promise/index.html","a75582edc1eb7c20bbc5f9125a318fef"],["/tags/SSM/index.html","ea42aebf1dc09b8b1f5326298abb5190"],["/tags/Spring/index.html","6f2195f4c86585e397aab633031e96f4"],["/tags/SpringBoot/index.html","4636894158d866b17ab8997d5f385c6c"],["/tags/SpringMVC/index.html","c776265c6dbde534ec844fa4d6e2fef8"],["/tags/butterfly/index.html","0c145ba45bba3284121daf2fe98429c7"],["/tags/git/index.html","63169988745d5e4ebbd54d094b13ba6c"],["/tags/hexo/index.html","46c12fee3c2d460f686367ec1b67956d"],["/tags/index.html","0d01b428cc3bf32b47726cb2aa50acdb"],["/tags/jQuery/index.html","6fdf28d4a071fdf2cc41fee4726d7470"],["/tags/java/index.html","6c4e0048201af45ddf5817a8dd1c6eee"],["/tags/markdown/index.html","56fb446487402a4bb2e2c5f2d979f55f"],["/tags/mysql-数据类型/index.html","fc1f5bd07de15ef3c68cc5545483adf2"],["/tags/mysql/index.html","c28e265ba151ef8f46a0fb9b1bc96a5d"],["/tags/typora/index.html","7eccb20d4c00039cbb48d797bf147d48"],["/tags/vue/index.html","eb4511c33e37053855bd7a581cf58031"],["/tags/享元模式/index.html","cf08cf1492944e042641a6f20d71b372"],["/tags/代理模式/index.html","b34fba22cec216b4ef1057180410a0e5"],["/tags/分布式/index.html","0b4e1a7e48b0963493fa1dd9e357de9c"],["/tags/前端/index.html","990887a5ecb53d0ad28f523770479823"],["/tags/前端/page/2/index.html","050a25600974c97f71e0b620f8d3f796"],["/tags/后端/index.html","0981d38034c0754413f8ad43277f65f4"],["/tags/外观模式/index.html","38bf561a66f493c91e74b4b00451d8de"],["/tags/工厂方法/index.html","489795575fc45e0da4b89d2f089b1051"],["/tags/抽象工厂/index.html","c55deff9fb3d24f5b44cba194dfd8c2b"],["/tags/排序/index.html","fe274bf9de4a473b6848299bb902bf42"],["/tags/数据库/index.html","2910d87e40fe38cec43573d6d05694a1"],["/tags/查找/index.html","da003c041671fc0f2abeeda52947b9ce"],["/tags/桥接模式/index.html","1aed1ab7dbcfb1faf04b1a047f6d9a3f"],["/tags/模板方法模式/index.html","46102aa44194c64f01eb77270709860f"],["/tags/版本控制/index.html","a6b7ba73b6fbd8af05a8b64b58460e61"],["/tags/策略模式/index.html","3b753a72176b697a37fb7a216bc40f26"],["/tags/简单工厂/index.html","db2675b22069c3e7dccc33cac4a33338"],["/tags/算法/index.html","74cab02e9e170abadb7afda85711cf3e"],["/tags/算法/page/2/index.html","d19bd50901143fb11b37e70433bc4f6e"],["/tags/组件化/index.html","81515a74dde3407f0404cec706ecb07a"],["/tags/观察者模式/index.html","84c3eee4a175bfc76cb07755599fd2c1"],["/tags/设计模式/index.html","ddb8109ccffc42149eab0520fb7a2bc6"],["/tags/设计模式/page/2/index.html","e84a7a869e31109fa2acd3ac485f1d78"],["/tags/责任链模式/index.html","38629c8a09ae9ef7345cc3995fae5d83"],["/tags/适配器模式/index.html","795eaf3428911eb730ccd50d40e7e6c7"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
