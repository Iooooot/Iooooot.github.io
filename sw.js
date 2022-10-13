/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","30c84ed56038cc02ec8f838f55df6e3c"],["/2021/02/22/博客的搭建/index.html","46b1be1d089e49368b19a0a05306364b"],["/2021/02/23/如何使用markdown/index.html","9141e0cb65d889dc8343445415c8b445"],["/2021/02/24/mysql命令大全/index.html","66fe23e8c50c8e208b2e1b93e32abbe0"],["/2021/02/24/mysql数据类型/index.html","e0a907fee91017ca92a4ca7fdc389ad4"],["/2021/02/25/Git的介绍与简单使用/index.html","e84a27aecab93a75445f2cf3af775fc2"],["/2021/02/27/简单工厂模式/index.html","7ae5c518ac8930369f0dbd47f36d9497"],["/2021/03/01/工厂方法模式/index.html","c76a90fa6f0e722f6a5fb0c69d252e46"],["/2021/03/02/抽象工厂模式/index.html","327d01a6a610743e1da2de73bb1736ed"],["/2021/03/03/单例模式/index.html","395d35ae3085cba278da9f04f02d7b1a"],["/2021/03/04/观察者模式/index.html","08065d934dd1a0146ff86a1c46b55fb3"],["/2021/03/05/适配器模式/index.html","ec57eea3b7d87b7c8c23d4e34b3b39cf"],["/2021/03/06/模板方法模式/index.html","a8797bfec141d976125f0854ab73afa2"],["/2021/03/07/责任链模式/index.html","aad0c977045e2fcf25788ef8d43a528c"],["/2021/03/09/代理模式/index.html","aecc7b6c5a4d70df04e916a9aaca161c"],["/2021/03/11/享元模式/index.html","f061513957e7a8fd65abb9443a470c86"],["/2021/03/12/外观模式/index.html","1892797691819dca54d0557fd0ad7674"],["/2021/03/13/策略模式/index.html","c4441134e96c6e9789bd9b0fc2e3919f"],["/2021/03/14/桥接/index.html","167bd8d0ef80a1f659a09da708941b6e"],["/2021/03/15/LeetCode-多数元素/index.html","0aebdd5d878dd7e1b660e0ebd34a3a0a"],["/2021/03/16/LeetCode之汉明距离/index.html","8ecd3831e6574bae229e66d1066c8009"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","c280b07b1db25e9eeae0dd6ce15605e4"],["/2021/03/18/LeetCode之两数之和/index.html","1612477d5b207ca1c65666fa4bf8eb24"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","83be7340f0de53d6a37c51bbf50cc9d1"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","8af099fd84b2b400793b78356b626b49"],["/2021/03/21/LeetCode之有效的括号/index.html","1e1516382927532287ac667c9f31dd2a"],["/2021/03/22/LeetCode之移动零/index.html","0d2d28ceeeb0b5ba99a4c4b1775d807e"],["/2021/03/23/LeetCode之爬楼梯/index.html","e189f3e216fb31ceb25187bf7369906f"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","3cb33850a580c806d4e8cf9c14d576bc"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","df6f58ee44110e05cf0f47aa5af1e517"],["/2021/03/26/LeetCode之最大子序和/index.html","048807aeb89c823f70dcac812fe83e20"],["/2021/03/27/LeetCode之子集/index.html","602b421ddbfe767128cb0a53b113ab33"],["/2021/03/28/LeetCode之合并二叉树/index.html","9425e75046a2ba56bff919a0879a3ff1"],["/2021/03/29/LeetCode之翻转二叉树/index.html","01d0fc81a950e3029bd0f18a92d75e5e"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","cc9b1cf7aeabe88c5511ee3af11cf3b2"],["/2021/03/31/LeetCode之翻转链表/index.html","a53c3bbc347d6bbc78b77c88c6f88c64"],["/2021/04/01/LeetCode之相交链表/index.html","862cc1968cc5a325ab4b563ca0e7a851"],["/2021/04/02/LeetCode之最小栈/index.html","221932e6372f8b7322b13b4fffa16b2e"],["/2021/04/03/LeetCode之对称二叉树/index.html","7b65dccc9486e9f300b863bad74f5319"],["/2021/04/04/LeetCode之环形链表/index.html","7a35f4bc788af1afd0c62faa4fcd5232"],["/2021/04/05/LeetCode之二叉树的直径/index.html","4485ae5f6a28976ab76bd6ca8ef6f3bc"],["/2021/04/06/LeetCode之回文链表/index.html","7d9f6721d6901b2ca88724e5f1f20ec9"],["/2021/04/07/LeetCode之比特位计数/index.html","f73c9b057914f3e5b9bcca92c3f3769e"],["/2021/04/08/LeetCode之全排列/index.html","68b2e877101e1523e2580549cc1101f4"],["/2021/04/09/LeetCode之括号的生成/index.html","10d931719d80333dbc1c14a489ffc3b0"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","4e7438c094fd0239cf88bea05389b289"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","fdee5440edd087a287c4e3f24e15494b"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","1c20576282c989389c41e18ce23e25a8"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","cb543a28ea505c499fe05e2f3ec66cd1"],["/2021/04/14/Mybatis/index.html","945db063e885f9d26d8deb93e4d8573a"],["/2021/04/15/Spring-1/index.html","c12e11d3fd3bd6e1dbf947487eef9e35"],["/2021/04/25/Spring-2/index.html","b36fdb61d23ec716fbf014b86344303c"],["/2021/04/27/SpringMVC-1/index.html","cdf00f789cfb4684140b2050717f2a33"],["/2021/04/29/SpringMVC-2/index.html","2b67f8a71fc7ba0c72e768d733003b2e"],["/2021/05/03/冒泡排序/index.html","2e0ce29fe8197fa15fd8015e1832928a"],["/2021/05/08/选择排序/index.html","48dfef8e61364c65c9d56ea8733718b3"],["/2021/05/12/插入排序/index.html","39b7fb7ae63cd9d19d48081b66bb9427"],["/2021/05/15/快速排序/index.html","450f24abac350790f16f42eb3182d9d3"],["/2021/05/19/基数排序/index.html","1fef7073e1bcf3cb80e610a114cf13ce"],["/2021/05/20/哈希排序/index.html","de96372fd142987c1cb0c3825a305600"],["/2021/05/21/归并排序/index.html","980929c31fa178efa05755262662dce3"],["/2021/05/22/二分查找/index.html","7d906098a64a3e36a78dfbb238ae9f8b"],["/2021/05/26/差值查找/index.html","8676f039b6521bf55503c41d8e2feb6e"],["/2022/01/12/高精度大整数计算/index.html","4256a618af640208f2f50d52fe5bd5f5"],["/2022/01/22/前缀和/index.html","b92c312163c20b97d97ee91264f68adb"],["/2022/01/23/差分/index.html","d63d1d614639338db6e56c11bc8d4563"],["/2022/04/04/MyBatisPlus/index.html","94f9627657ff26799173602d056462d5"],["/2022/08/17/jQuery/index.html","b594066b05389a005a1f42fb390c52e3"],["/2022/08/19/JavaScript/index.html","0a865e8e03486ab86181e835be72f65f"],["/2022/08/22/Ajax/index.html","467d87110f2c6473de2c9caa0d5401d1"],["/2022/08/23/Promise/index.html","e8eedf862c6233c9da65fc172905c5ea"],["/2022/08/24/Axios/index.html","c1e31de3ec744aa9449f2ec077212f85"],["/2022/08/25/H5本地存储/index.html","ede07c74d5c40fffe2c905ce0f016ef2"],["/2022/08/26/mock/index.html","044622e402a3087f8f28a7ee26a5912d"],["/2022/08/31/VueJs/index.html","9df26b1910de36450b5058d8898d7872"],["/2022/09/01/vue组件化/index.html","4f7cf917bc915877711ee8ae32bc92c0"],["/2022/09/04/VueCLI/index.html","a687426b17efbf920a564c0c3167e04f"],["/2022/09/07/vue实现动画/index.html","70661fe59dc8814db47939204ddedd40"],["/2022/09/09/Vue响应式方法/index.html","585c8375dc59d5c21a1a610ad1c977e9"],["/2022/09/10/Vue异步请求/index.html","8377c0e32c80546d6e1c5a66cb077d58"],["/2022/09/11/vue-Router/index.html","e4e2c54d05812354afd4151c80f0114d"],["/2022/09/13/Vuex/index.html","76e9717d5cd75cfcafd8e85fe1eecaa9"],["/2022/09/15/SpringBoot/index.html","0eb01fe024c195a99d18eb3d85d70632"],["/2022/09/16/SpringBoot配置FastJson/index.html","94a7d1d56bf9ed38267d466ee9ecd7a7"],["/2022/09/19/SpringBoot参数校验/index.html","c8f19a3b1d17fc65ce96417d5288d2f3"],["/2022/09/20/SpringBoot的异常处理/index.html","68c32105d718ccd1e10d81731f8fec00"],["/2022/09/21/SpringBoot统一响应处理/index.html","25c2e7db72c7ba5c0ec5215d52edd697"],["/2022/09/28/Linux/index.html","a19996fce98ffe194203810360f25395"],["/2022/10/02/redis基础/index.html","0ff16e2c531f12f8ea74d01d0d65f1b1"],["/2022/10/03/Redis缓存/index.html","22876681dacb71ce5cb77591f56f355d"],["/2022/10/04/redis缓存穿透/index.html","a3da8a403955dd87aa70b59403fcbae4"],["/2022/10/13/Redis缓存击穿/index.html","d7f7c2dacd62b95a90d0d21834612737"],["/404.html","78e5a77fe4aae2f67f29c44a021276f9"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","906a77d229b7cfe7bd5835f1b0dc37d7"],["/archives/2021/02/index.html","2f4dad2d1636dc0cd107967a4b155665"],["/archives/2021/03/index.html","4f491b408c6fcab57208d40705c87ab4"],["/archives/2021/03/page/2/index.html","47f2a77c255bfe3c3eb7a07e5e99634b"],["/archives/2021/03/page/3/index.html","ca742fdeb9b8bb16ea5f4a824bfd54a0"],["/archives/2021/04/index.html","9fad3c00c820015b8a33a36165c42cc7"],["/archives/2021/04/page/2/index.html","d0973ba2cc9cbf6cd52124a82415dd3d"],["/archives/2021/05/index.html","9ebc020142d08d032785554cda0f3dc2"],["/archives/2021/index.html","fd383ea9a13613b3848de8e25f1f8db0"],["/archives/2021/page/2/index.html","bc7175889ffe905ba635d08618cdb6d4"],["/archives/2021/page/3/index.html","b1229f3ef18315075be157a4249b2535"],["/archives/2021/page/4/index.html","d2b5e8bb153ae4ce15f5abfdca72e340"],["/archives/2021/page/5/index.html","fa387d323f8ba799d7091b4e2de47d44"],["/archives/2021/page/6/index.html","627e98fd627a4f83746d603d6c0f26fe"],["/archives/2021/page/7/index.html","71e66fd91938d31e010012d02086c164"],["/archives/2022/01/index.html","3fdad368971049fd62769d785b4b02f4"],["/archives/2022/04/index.html","01d3965fa46fe9e10bedafeab84ceedb"],["/archives/2022/08/index.html","89b83e250fe7dd96a7370802c2c28524"],["/archives/2022/09/index.html","ed8bcf04fe4f60ca032609686723df5f"],["/archives/2022/09/page/2/index.html","511aec9a72dd623c89001197ee27c919"],["/archives/2022/10/index.html","ee4eaa5ddccc01ba859135a6b97684c5"],["/archives/2022/index.html","37c6be945b944ac17280a6867685d7ad"],["/archives/2022/page/2/index.html","1d065dd7ee59266141ae516b9e0df9cd"],["/archives/2022/page/3/index.html","63d44f0ed9f732a3e1c0f8c6b7e89278"],["/archives/index.html","e18fe580e0fcc41d72487262e7f91821"],["/archives/page/10/index.html","5fd210f860c980fd26d590c269745c41"],["/archives/page/2/index.html","3f93167885c36487ffacb54a8b3278f6"],["/archives/page/3/index.html","03922d807f8f78be3290da301f731535"],["/archives/page/4/index.html","bc531eeeeae79a991715976ad54f2c45"],["/archives/page/5/index.html","d69c69658e1d6d8218534f3e64ecd1b1"],["/archives/page/6/index.html","1aab81661bc6053d511b9aa3bc7ef88b"],["/archives/page/7/index.html","6a41512509f8352e57cfaa52cb71dfbd"],["/archives/page/8/index.html","15123c2e62a73b8e22e947d0b827b12f"],["/archives/page/9/index.html","1ff42f23307f7f7aacfcd72a3e34e59f"],["/categories/LeetCode/index.html","b0a4795fd81c267008ef26734fd68de7"],["/categories/LeetCode/page/2/index.html","4e34c655dca529f3fdda17cf817158dc"],["/categories/LeetCode/page/3/index.html","942abd59e0c689c36f724e913074568c"],["/categories/Linux/index.html","a4e7ec8592c3078eef7f254d06f56545"],["/categories/Redis/index.html","852701a496eee16a1d40149c053717d2"],["/categories/SSM/index.html","82a961734301273856eb16c55c14bb06"],["/categories/Spring框架/index.html","cb425dd9c164e418ed20d076caf6797e"],["/categories/Vue/index.html","20f1fac58d5e6178bd50bf138de94e71"],["/categories/index.html","c97f771b7106274b1cdcc0e5a04e04d4"],["/categories/前端/index.html","43051be32daad4c0bf0745c1639452cf"],["/categories/博客/index.html","75ba99d57224c884a2b941d3e8a8d900"],["/categories/学习路线/index.html","41b8d8970f2429542ada368381be838b"],["/categories/工具/index.html","95aee5118e04ce770de47f388b0ec067"],["/categories/数据库/index.html","3d51c0f56a54a60124eaaaffa8c3ffaf"],["/categories/笔记/index.html","1e3d37cc4b631ee799f4746c6346c53a"],["/categories/算法/index.html","c8fc03a612ab5910867aa7bcf7958f47"],["/categories/算法/page/2/index.html","7a921418dcd44c59e8885b34d6562286"],["/categories/设计模式/index.html","ccb4ba51339145d4fdd261e6be6a7f32"],["/categories/设计模式/page/2/index.html","81f1ce2b0d328280f21b68db391b1621"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","1e50ccd4c4d6c752b86a3926e95ab770"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","6cc8ffc76f0e8aabd3a6db16522de765"],["/messageboard/index.html","19ba420af2e7a5b90404c31c6d4a8d70"],["/page/10/index.html","8323fffa9c6b037d22dd47e986b5e32c"],["/page/2/index.html","53e30c20c30f2f75ebd1f78250909632"],["/page/3/index.html","ed6e24ded86ef11336e8ea44cd7ce748"],["/page/4/index.html","5c2996e3b812870debb9c60499d5be1f"],["/page/5/index.html","3f6d4510d1b71df8e0429efbda6ed494"],["/page/6/index.html","10d19c3643367a2c2a5af32b18d39abb"],["/page/7/index.html","f7f9a83859faa2540930c605998194b8"],["/page/8/index.html","3a873ee1d2c9e2881f2e021211d06fc2"],["/page/9/index.html","26b0dfb65997a353aac6935ea4abb805"],["/sw-register.js","46b221e8596602c804a653ac0fc738d6"],["/tags/Ajax/index.html","6a7757ba5e63ba083b25e58d7464be93"],["/tags/Axios/index.html","043767a9203bd93bd4045dea93f726f3"],["/tags/H5/index.html","31e15444b4f0689b761a30b9c87bf1d4"],["/tags/JavaScript/index.html","c36b3ef5db280d75ba491af7eb29af82"],["/tags/LeetCode/index.html","287ef029dde87d0e65c74392a1feee31"],["/tags/LeetCode/page/2/index.html","35b06712aa5ab4778c7f52aef9f3672d"],["/tags/LeetCode/page/3/index.html","9a726b9d135644a7daaa7611f537c1f6"],["/tags/Linux/index.html","48dccff305c0669fc8a16070256c8fcd"],["/tags/Mock/index.html","4689651abbf8214bfb08063b205521e8"],["/tags/Mybatis/index.html","9b52e7a28cdaf8c68d3ee7c1c428dc59"],["/tags/MybatisPlus/index.html","44be35b31b70a6ea893d690600a94fe1"],["/tags/Promise/index.html","7838da1b6edcc35fb583a924f64e46b7"],["/tags/Redis/index.html","b7002cf7d5de77faa96b016de09fd038"],["/tags/SSM/index.html","ffbc25391544dbc4da2e32926be02a15"],["/tags/Spring/index.html","9b21a8549e53a196183fefcaaabb685a"],["/tags/SpringBoot/index.html","ee697792be064ecb4fa57d73adb61e0b"],["/tags/SpringMVC/index.html","fc0e59ac4b3a42f48566939a0b0ae027"],["/tags/butterfly/index.html","29220fcbdf7002dd16a8d8c8f036516f"],["/tags/git/index.html","160f0bf66331307f2516f6071135dfd4"],["/tags/hexo/index.html","d18c9d2e0349931b3906c49cafc6a5c6"],["/tags/index.html","f510af7e4fed7ac24d74280b3aae8216"],["/tags/jQuery/index.html","96661e4f0db4b1c7df6cead99f8c7d99"],["/tags/java/index.html","2b1d4c8f5db66593b79800a6d685967b"],["/tags/markdown/index.html","81fd35e4908aa1beb0994b973d86bd2d"],["/tags/mysql-数据类型/index.html","827d8cbe8bc9d8c63313c38617dcfddf"],["/tags/mysql/index.html","bd81c4a465cc81c4ea876bfd4e48c64a"],["/tags/typora/index.html","535b6736bee3f95394ecd16c3eacc90a"],["/tags/vue/index.html","57b27270f38b69378b571b4ed388e7ca"],["/tags/享元模式/index.html","be350efa93fd6392ecf180a1c3fe30fb"],["/tags/代理模式/index.html","5312b0b03157107941d7871ef7c3b194"],["/tags/分布式/index.html","72d5f4e9f8798ff83b2860996153152c"],["/tags/前端/index.html","fa9260dcd2b20c3d167f1e2463cd9f8d"],["/tags/前端/page/2/index.html","75c75a446b9b7dacb60aea41002918a6"],["/tags/后端/index.html","5a21156218d048898009aa9061840e92"],["/tags/外观模式/index.html","b5f52276335a9ce9b325c806ff255e22"],["/tags/工厂方法/index.html","f87f50ff330aa91c922a1cb6aaef978d"],["/tags/抽象工厂/index.html","bd313433b85d898b4b1abba75b2c2550"],["/tags/排序/index.html","6196739c5202d10cadf14db8366e0000"],["/tags/数据库/index.html","c2c692aab1a49a51808852856e74cc75"],["/tags/查找/index.html","3b1bc2130c0b62cecece65e44fb33b25"],["/tags/桥接模式/index.html","f1ab86b8928e3fe82674ac774b495d20"],["/tags/模板方法模式/index.html","16f76d1380d338230264f73403f9e6f7"],["/tags/版本控制/index.html","511d3d580053eefd62ba53ae1336b93c"],["/tags/策略模式/index.html","bc2518797ed87f7855a111cd2910907d"],["/tags/简单工厂/index.html","6980d29d20d58e9df60bc77c4bee6cdf"],["/tags/算法/index.html","e7a0fa4b87de7e3ad7f21c6927cd571f"],["/tags/算法/page/2/index.html","a1983830ba880d4e606c945e406a560c"],["/tags/组件化/index.html","7732ec29f500183ead8ac4d04771a777"],["/tags/缓存/index.html","ae630fdb664c0f876e02bc1f5103dd7d"],["/tags/观察者模式/index.html","b398318504e039321910eeabdeb348b3"],["/tags/设计模式/index.html","2626f1954fd8cf8292e6c3ce7082b9f0"],["/tags/设计模式/page/2/index.html","d35ee1407e5a304c5e1db5709a83bdfd"],["/tags/责任链模式/index.html","16b0c11243135a7a7f7091108ac4dcdd"],["/tags/适配器模式/index.html","4623eb8d0a2a041f0adced333d5302be"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
