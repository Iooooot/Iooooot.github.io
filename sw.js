/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","d79d475dbb0cd236bfe64c3fd9db2d02"],["/2021/02/22/博客的搭建/index.html","93498277d78bdda8d7d819cd21c0d879"],["/2021/02/23/如何使用markdown/index.html","ae6494990eca91906ee4f1ded868c198"],["/2021/02/24/mysql命令大全/index.html","d6990cbe95a3d30b030c0e1abda07084"],["/2021/02/24/mysql数据类型/index.html","7e94f54e809c3a162c2702c1460d993d"],["/2021/02/25/Git的介绍与简单使用/index.html","b62afaa9954f324577e50470d8dcb7bf"],["/2021/02/27/简单工厂模式/index.html","cc66bfd3d272f29576da693ccf56f9d1"],["/2021/03/01/工厂方法模式/index.html","e2c34e2f2c84f837c5bb8dfd32b1ede5"],["/2021/03/02/抽象工厂模式/index.html","0e2bff73768db0f480066b0ca72725c4"],["/2021/03/03/单例模式/index.html","caaed8c8ae6dc3ffbc7365ab9676541c"],["/2021/03/04/观察者模式/index.html","807c7e71a15221870ff70240e6cf431d"],["/2021/03/05/适配器模式/index.html","e91b9e4be6126cce8b27a00d2ca70d94"],["/2021/03/06/模板方法模式/index.html","677801f24ba5bed3e5bd40b82811db0f"],["/2021/03/07/责任链模式/index.html","f2f06bef13950b80ecbbdbf91b856e79"],["/2021/03/09/代理模式/index.html","8783de5bdaa66f8934bcbe27276e364d"],["/2021/03/11/享元模式/index.html","bdbcb83a19670ca634813d6ce55bf3a4"],["/2021/03/12/外观模式/index.html","1e4d25e42e0afc7380ce4040bafdb9d5"],["/2021/03/13/策略模式/index.html","37bc659519c33ee185965ae5dc55b624"],["/2021/03/14/桥接/index.html","b8dfd5ec5193f0accd4c7c8d1f3a110a"],["/2021/03/15/LeetCode-多数元素/index.html","1a65e8f8bf9d02b879dac7bdcd2990ff"],["/2021/03/16/LeetCode之汉明距离/index.html","a8f0766d724bc8a31d5229f1cd517148"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","1440effdabaec3f7a702f3bc58295706"],["/2021/03/18/LeetCode之两数之和/index.html","fb5523e6e41cac2a424687c49d4adf45"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","c8f480cddca5a63614d161aa5ca049b1"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","173434632a69dda75a249f9de3e3a134"],["/2021/03/21/LeetCode之有效的括号/index.html","747780f030d7528e18df303a3157da0e"],["/2021/03/22/LeetCode之移动零/index.html","cdfb3623de5176cae415e56817ce72dc"],["/2021/03/23/LeetCode之爬楼梯/index.html","3105cb76d614a93e76e9d0e096ee13aa"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","4465e7f845080e6949dbb16aabdcff4a"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","2288539e9dbdce29c657816b8d79d5b2"],["/2021/03/26/LeetCode之最大子序和/index.html","98ef1cf330fff24642fa589c102ec37e"],["/2021/03/27/LeetCode之子集/index.html","eccae39afcdf086feb2aeea54c8f65f9"],["/2021/03/28/LeetCode之合并二叉树/index.html","f954de0e0abc2a75204578aac441e3dd"],["/2021/03/29/LeetCode之翻转二叉树/index.html","38e832ec61ca6a71fe7ec9d6c9cc1ba3"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","9c01f34c961fbb745182162fa55d0362"],["/2021/03/31/LeetCode之翻转链表/index.html","1ff03c8f4c78f7ffc21deac218f6be9c"],["/2021/04/01/LeetCode之相交链表/index.html","120dab4b6bbc01b2e51616e80fc5405b"],["/2021/04/02/LeetCode之最小栈/index.html","749ad2b1315ed83bd2773e10bb80c2d1"],["/2021/04/03/LeetCode之对称二叉树/index.html","cb6abf0dc14c0f4f4e136f7606e1a0a8"],["/2021/04/04/LeetCode之环形链表/index.html","a5647c39d64dfa17cf4d24e83bc5f84c"],["/2021/04/05/LeetCode之二叉树的直径/index.html","394cee98313d7364b5892dadd1461df0"],["/2021/04/06/LeetCode之回文链表/index.html","e144486d9c44d6c72b2a7d42ef1326df"],["/2021/04/07/LeetCode之比特位计数/index.html","8ef6566c1dd977971ed972cd0720f731"],["/2021/04/08/LeetCode之全排列/index.html","232ad1a8b731d67dfd61f1ec6f7bd729"],["/2021/04/09/LeetCode之括号的生成/index.html","b323bf38fbe5691620c1e7d3f7096a7b"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","633b5fab547af894e8c1eb5b08b5ba50"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","faca071b3dd37e24a6b6010248f60914"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","f61753a28dd97fb5158b2b05d4497c2f"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","1d7ff53122df775445faa94f967541c4"],["/2021/04/14/Mybatis/index.html","838fedc1069bd03dc665d6453a6eba3f"],["/2021/04/15/Spring-1/index.html","076439d5812c61b2b372f16aed1bdc9f"],["/2021/04/25/Spring-2/index.html","6d2707197682ed1607a849d29d1024e9"],["/2021/04/27/SpringMVC-1/index.html","2034c8d0fa262b5d6f40a91bd55af71c"],["/2021/04/29/SpringMVC-2/index.html","31b1adc6e4c2c237b5040b18733083d5"],["/2021/05/03/冒泡排序/index.html","634cc7c2bc575738a905749d67f6ce7f"],["/2021/05/08/选择排序/index.html","f563f4b805cbaff297e2f10ad3dd32a4"],["/2021/05/12/插入排序/index.html","29fe01d6caec6f2f4884dcfda845e0dd"],["/2021/05/15/快速排序/index.html","544e2f524cd389ef98fceefb968ed24d"],["/2021/05/19/基数排序/index.html","f6773a390d314c2abf91d076789d470e"],["/2021/05/20/哈希排序/index.html","a2a1516ea74d7dc1b6af20f3493ab063"],["/2021/05/21/归并排序/index.html","4ba78cadc4fcf7d98aaa546da15d6d99"],["/2021/05/22/二分查找/index.html","fd5696c8dde01d806d4457f1a353bf34"],["/2021/05/26/差值查找/index.html","8c680657a1cbd824646faed6de3c5530"],["/2022/01/12/高精度大整数计算/index.html","389afbf57b86cc4f367f8a2c4e7f594b"],["/2022/01/22/前缀和/index.html","2d3fe670f8db074e14053eeb5cf9ba56"],["/2022/01/23/差分/index.html","12ff55ef9c9b5a162f30164a50691898"],["/2022/04/04/MyBatisPlus/index.html","433152129d88d81397098049fe38456b"],["/2022/08/17/jQuery/index.html","01fcb0257bb73bd911f2991a2fd6c276"],["/2022/08/19/JavaScript/index.html","b0fa494c306bb33dd4a43de516ab98fd"],["/2022/08/22/Ajax/index.html","ec31ef3fcc7661d07fdae5596602406e"],["/2022/08/23/Promise/index.html","45e6531778aff6189bda8012c117667d"],["/2022/08/24/Axios/index.html","6a7f49645b853233b02f55c745706ae0"],["/2022/08/25/H5本地存储/index.html","34ddf5aa90c64aaca660a2467fd9f784"],["/2022/08/26/mock/index.html","d56b68b64005dbabaeecaedb82c3526e"],["/2022/08/31/VueJs/index.html","f00e5f8b49bac6874a5eabc54ee713d4"],["/2022/09/01/vue组件化/index.html","d611da7964317648ffdae068bd38c1f8"],["/2022/09/04/VueCLI/index.html","90eeb872b33131bf7c81ca48ea9284ec"],["/2022/09/07/vue实现动画/index.html","602d2d6570fc7b0ed8c5f7718be8fe09"],["/2022/09/09/Vue响应式方法/index.html","4754bea98b7f6a3bafc55d4c0be6af28"],["/2022/09/10/Vue异步请求/index.html","e1fdb23718249333a8aebc6ae2519e5b"],["/2022/09/11/vue-Router/index.html","7255633bdac402cb89a32f40d1a013e6"],["/2022/09/13/Vuex/index.html","3bb5bc1c954e904040e9622c5f04c7ce"],["/2022/09/15/SpringBoot/index.html","81446b4fadb45f1f852a1b1ee4b59fe4"],["/2022/09/16/SpringBoot配置FastJson/index.html","07a0c98e9898fdf8a93067b17f47de39"],["/2022/09/19/SpringBoot参数校验/index.html","1c414b06592df53e34565eeff78baee1"],["/404.html","2d37d1346aa7f4e44a06be9265577371"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","6c1f0228aec4e37358b346d397abed96"],["/archives/2021/02/index.html","0f4c6dd72bd39be2b178257ff0aabbc4"],["/archives/2021/03/index.html","c16336dea8a8c9278bac364173a1aa83"],["/archives/2021/03/page/2/index.html","35c68a92506e0395e3cf51d5ad75231d"],["/archives/2021/03/page/3/index.html","d52a397c552fba67dafa2ac513528f7d"],["/archives/2021/04/index.html","d04ab8959f36056521ca9b96b241cb8d"],["/archives/2021/04/page/2/index.html","69c38fdf0a07567bf8ea785fdcabada2"],["/archives/2021/05/index.html","a45c3c386f1b830c71c1a6baeeee6cc1"],["/archives/2021/index.html","dd43887fd737132446087305bdc56de7"],["/archives/2021/page/2/index.html","1444daecedfefc6b996f3cfad8111633"],["/archives/2021/page/3/index.html","4dc02a6a922d65cb820e96fbe74927fb"],["/archives/2021/page/4/index.html","6102d8ffb5c337bf8ca7964fccd716e8"],["/archives/2021/page/5/index.html","25d2c064a2376311b6b1752b29b4a415"],["/archives/2021/page/6/index.html","901cc4ae05bca8a0a6b4afa1f76806a1"],["/archives/2021/page/7/index.html","c59cdebf9cda8a1ea2dfd65655ae4764"],["/archives/2022/01/index.html","3db912954f05f831b48214d60b5940dd"],["/archives/2022/04/index.html","e98e739405c3e24dca9817a9ddda33df"],["/archives/2022/08/index.html","869f35669d319b5a6d72863795e43e07"],["/archives/2022/09/index.html","d27ac2a4375806f6e1ddc231d65728bf"],["/archives/2022/index.html","cfb270a3ff4809b0a638acaca66ccf90"],["/archives/2022/page/2/index.html","b43397b7bc0ee9c34a7bb167cb0482bd"],["/archives/2022/page/3/index.html","c04f4105ca072b572ef4adfa74692734"],["/archives/index.html","a8bd20e7b1a7475ebabfbee50353b546"],["/archives/page/2/index.html","54eebdc88785854f9b5bb976e6aa99a5"],["/archives/page/3/index.html","8180f1a8edfa73ecf7c9b51795e94729"],["/archives/page/4/index.html","c51810be7bda7bbeb337802144345a68"],["/archives/page/5/index.html","b09ab008a030c6765d7a1232d62ed74f"],["/archives/page/6/index.html","336956c99af195d24539cb8c624719ea"],["/archives/page/7/index.html","9ea5e59061da30ed1159bfec5e7bed3b"],["/archives/page/8/index.html","6ba116f7013ca89443ab7cd17f842676"],["/archives/page/9/index.html","3df43f492e56de3489928ab08d1945c9"],["/categories/LeetCode/index.html","9354e613a5510efa6e25461828a9333d"],["/categories/LeetCode/page/2/index.html","ee1c69f97422985fdb2e07bca22f60de"],["/categories/LeetCode/page/3/index.html","fa319231678f8b3f5b0d0f1b303526b8"],["/categories/SSM/index.html","fea3a8d94817d64d51319b979e79dabb"],["/categories/Spring框架/index.html","e4b1a24b3e2709f6bb26fb1f4871c04a"],["/categories/Vue/index.html","51a9c5c805662f1c95feca52cf7d3eeb"],["/categories/index.html","e074f33b6eedbaec49dea93eff481406"],["/categories/前端/index.html","07201f83c8c8e6f0615b9d60f66c47d0"],["/categories/博客/index.html","4deb88da122d474a182e9db614e33b01"],["/categories/学习路线/index.html","bc64f2eed53949d209ba0d941f509004"],["/categories/工具/index.html","45434c976fbaa69292bfaa79037aa2b7"],["/categories/数据库/index.html","25d1e41955e31236a745e277918a4e85"],["/categories/笔记/index.html","6d36086e61980c27c1410b1ba3ca970a"],["/categories/算法/index.html","68b91c724a5aa7ec5142464a7642f2c1"],["/categories/算法/page/2/index.html","1dfab82048f6dd9f73a36030bf194c86"],["/categories/设计模式/index.html","4084baafd0515faadf34d220e06ae376"],["/categories/设计模式/page/2/index.html","df56be71eeb388deb40ea472afa928f4"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","578e877d18d47c761119228f678a6671"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","fb2dfe50523309d406a3c0213ee5a9a0"],["/messageboard/index.html","64341451546ceb9786108f07179ae5b4"],["/page/2/index.html","f9640640feaba0670b1a08cea8178501"],["/page/3/index.html","d08bbec4c4572905c70fa5f1ec78e49a"],["/page/4/index.html","f45e5e2a52f2941c32471bb286bd5369"],["/page/5/index.html","33b92ba610c07d7f9829481c279dc570"],["/page/6/index.html","13523a4984ce319326b298ffc2ff2d5b"],["/page/7/index.html","2f526e36ec7b919884c3d89b7e150b39"],["/page/8/index.html","9ad3baeb4ba8821943d3f1f414760a22"],["/page/9/index.html","7208676827d66019ab4cee4ed842f259"],["/sw-register.js","8dc02d6c4d6050c4b66777fa5e7aa075"],["/tags/Ajax/index.html","b8cca21ac00f5af5bddf1230b4551f34"],["/tags/Axios/index.html","0cb1cc778a52b6e8faedfe24b02a461d"],["/tags/H5/index.html","e17fd0d4409c5ee4d9d361158915a446"],["/tags/JavaScript/index.html","54312b39a1a3ff680a6e89fb52ff679d"],["/tags/LeetCode/index.html","48f7353c00b8b0cbb3393293fabd74e0"],["/tags/LeetCode/page/2/index.html","1255e01b58db2c1a2283abf82b3b259a"],["/tags/LeetCode/page/3/index.html","a54113eac9ee9a1bcb9844a4e3f4258a"],["/tags/Mock/index.html","52032397ad29c7d8d576283527c25b4d"],["/tags/Mybatis/index.html","54e2bfdc30d88f3be27e0ef0af84ba99"],["/tags/MybatisPlus/index.html","7e0e0cc282e51d9537a6c6edb46e047e"],["/tags/Promise/index.html","0da916f800000fbb65b84f292758b71b"],["/tags/SSM/index.html","e812ac3af96132e335b6fcf8ecdbe106"],["/tags/Spring/index.html","722959b6be23d029baadf32836e33be7"],["/tags/SpringBoot/index.html","cde2cd6e8e1184f33357e0942078eec1"],["/tags/SpringMVC/index.html","7fbde4b153499b088c30141a27afd787"],["/tags/butterfly/index.html","058e3bf53b93e8390e69dbdde4e51dea"],["/tags/git/index.html","415fc19bce68d278d66873ea8f4f9cc4"],["/tags/hexo/index.html","e155b1b9b5836e915ef5edc95c3eb403"],["/tags/index.html","356d39aea8c8b2d84f55815ea590d751"],["/tags/jQuery/index.html","dd10ef2524e066dbf6cc8c4c1fe40b03"],["/tags/java/index.html","1a04405455792609d4eafe7e26c17b79"],["/tags/markdown/index.html","bd9637e73a46240f84afb4e570b08006"],["/tags/mysql-数据类型/index.html","218e940d0a25c49d5959149aa4c0e96f"],["/tags/mysql/index.html","e957cba9c48aab4961d515721b17e0a7"],["/tags/typora/index.html","cafec9bc4c34a2d492f490932549471d"],["/tags/vue/index.html","c6ecd2d96d1e54fd0d04e4ed12d6f309"],["/tags/享元模式/index.html","f3533c30b0e8484e4b813a5909dda204"],["/tags/代理模式/index.html","b8ecca19a2290eb8447c4894d6a56c10"],["/tags/分布式/index.html","fac3f8260e86131bc5daf623e8022f92"],["/tags/前端/index.html","623b243a328140c1e791280f3d3013a6"],["/tags/前端/page/2/index.html","9c0b46c5adfb2bdda322e5379ec25bd8"],["/tags/后端/index.html","266f7439f7fabccfacdab90768adde68"],["/tags/外观模式/index.html","296604ef15a286ed758242f0358682d8"],["/tags/工厂方法/index.html","99f848df6dd74269ae2b90d6923894db"],["/tags/抽象工厂/index.html","ed01a9601ec2a45756e03c6712f4a3fb"],["/tags/排序/index.html","40634bfecfddc0cab7e9de61f122c8ab"],["/tags/数据库/index.html","8e3ebeae7823cb1fa473244225854a4d"],["/tags/查找/index.html","01af0bc6ff8c2b6fa646003465df1da3"],["/tags/桥接模式/index.html","33927b1873a55de31e0454269827536e"],["/tags/模板方法模式/index.html","74d6010466501e6cdd665c971bad062e"],["/tags/版本控制/index.html","f4715de4cce303a17483f6bfbf7a9f29"],["/tags/策略模式/index.html","ebf16f3da481d2f61a5956161863ac24"],["/tags/简单工厂/index.html","83daeb74af2a0e204b566f91e7d5f4a8"],["/tags/算法/index.html","9e8fd8c0704a88f0c58dbcf94d6da8fb"],["/tags/算法/page/2/index.html","4b90b5587d79e245746dff034c7a50d2"],["/tags/组件化/index.html","651ee0f7f38ca9edeb9f8a20fcc50ce2"],["/tags/观察者模式/index.html","c679ee48af76f10b1384bacf28feeae1"],["/tags/设计模式/index.html","a9fed148d94a6d229a2ec9ea5440a4c7"],["/tags/设计模式/page/2/index.html","6b7bc7447c9df42e9b7792b2356af516"],["/tags/责任链模式/index.html","5e15bdbced43f9509e2745c15e2bf4c5"],["/tags/适配器模式/index.html","fb08a57771c83a6ba6e7714b5385171f"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
