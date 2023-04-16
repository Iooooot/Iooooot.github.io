/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","04e2b4807608b4af51cb0335ec594cad"],["/2021/02/22/博客的搭建/index.html","4a18d8294a8435d9bbc385f512dbf811"],["/2021/02/23/如何使用markdown/index.html","75bd80e9b19f7aeb927e236b8b6d70bd"],["/2021/02/24/mysql命令大全/index.html","471bb465191c5b14ef7c1d93f003355f"],["/2021/02/24/mysql数据类型/index.html","e44f196aaf8a83ffcb24060651edd599"],["/2021/02/25/Git的介绍与简单使用/index.html","9799e5ad2e0303946038dc5d5885cc0e"],["/2021/02/27/简单工厂模式/index.html","f1e8b602dffb40f2bab331789c192d97"],["/2021/03/01/工厂方法模式/index.html","cf418081317a82406b9133652b16c287"],["/2021/03/02/抽象工厂模式/index.html","52435d0da8242a42e256957625415b57"],["/2021/03/03/单例模式/index.html","b9e1219a67cda39216e91867b9fb5032"],["/2021/03/04/观察者模式/index.html","3b8e8703d12b8e7df441e8ee71049b53"],["/2021/03/05/适配器模式/index.html","e4f8ac48b9ecb0235fb77222ec7ed16f"],["/2021/03/06/模板方法模式/index.html","d00b147a95edc92129c6d1e65cc1748d"],["/2021/03/09/代理模式/index.html","5223573b5fa731efc1f352245a168010"],["/2021/03/11/享元模式/index.html","af4f364aa8f2947cde8ec700135f0c35"],["/2021/03/12/外观模式/index.html","a89e2e5f2478591fd91276fabaa71e13"],["/2021/03/13/策略模式/index.html","8a9fce4d41eb1d2f00db181c89b236ff"],["/2021/03/14/桥接/index.html","45cae636bab2e813e198be16dae82ca3"],["/2021/03/15/LeetCode-多数元素/index.html","8dc8a78b01ae2c593aed7f5e11198cd4"],["/2021/03/16/LeetCode之汉明距离/index.html","c1e75b9188dba31695d59721d8b4f35d"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","6fba4c7780f04fce7f603e75ded12e36"],["/2021/03/18/LeetCode之两数之和/index.html","fd631212ac6b9fdc7aa76d3bb33011f9"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","43bf106470f0f50ea69433b760513d1e"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","776c4cfb847e3b56f754b45e326cccb6"],["/2021/03/21/LeetCode之有效的括号/index.html","37195cdc81f5c8f2046a214a924ea607"],["/2021/03/22/LeetCode之移动零/index.html","f8c5506eb769c1213d36d12386b87263"],["/2021/03/23/LeetCode之爬楼梯/index.html","7cefc11f68f4b2f1a5757ba36d43dd29"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","e8a64d74df1bb3af90347d6df92f9742"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","7032b7b41e74927cf82ff3142db45715"],["/2021/03/26/LeetCode之最大子序和/index.html","0b25492fab41d26d815f5b804cae6a7e"],["/2021/03/27/LeetCode之子集/index.html","d92f3628441228e94029cd76996410d0"],["/2021/03/28/LeetCode之合并二叉树/index.html","abb94255cf0af7ca719e385514dcbcc1"],["/2021/03/29/LeetCode之翻转二叉树/index.html","ead9919575292b4a2db5dc5f9bca1dc9"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","5d8d50d886175b9fd30964f06769bf23"],["/2021/03/31/LeetCode之翻转链表/index.html","156da2a6099c869a7124fd5bd266dffb"],["/2021/04/01/LeetCode之相交链表/index.html","ff5941484ed5cb93ce6982bca2cfcdc4"],["/2021/04/02/LeetCode之最小栈/index.html","54dd05ef515e484557228031084790e9"],["/2021/04/03/LeetCode之对称二叉树/index.html","212541f30957659cb3037ef8d50dcae1"],["/2021/04/04/LeetCode之环形链表/index.html","201b4efcb4b660c154fbf63b19499966"],["/2021/04/05/LeetCode之二叉树的直径/index.html","faaa7c33d1ad88ee38f511d1c581f30a"],["/2021/04/06/LeetCode之回文链表/index.html","a85c84cf5d3ccd66eec285e003db80e3"],["/2021/04/07/LeetCode之比特位计数/index.html","fd822313fed152dc4273334f7f270489"],["/2021/04/08/LeetCode之全排列/index.html","2bfea67cc7a87a8ac7231f0e2131878e"],["/2021/04/09/LeetCode之括号的生成/index.html","99870914381c18044e8c21bac4751bfc"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","7102a44646abd82e9eca3fcf0cb7ede0"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","cd6e1ea7627fbf2b820b0223c2c04c12"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","288fda60b3b1c5677ead02570ae30e8a"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","9a096b7999cb407229fb7c258f678177"],["/2021/04/14/Mybatis/index.html","544189aa7eab48c766820e11ca2955cf"],["/2021/04/15/Spring-1/index.html","8fe76ab258f7cca96dba9a164a8d6589"],["/2021/04/25/Spring-2/index.html","f7b691b9887576f2dd891fb64adc6307"],["/2021/04/27/SpringMVC-1/index.html","8c9cd9f912268d2f1b34caa340036b64"],["/2021/04/29/SpringMVC-2/index.html","019dd6847f7ba5d7786c615e7643f195"],["/2021/05/03/冒泡排序/index.html","cad806921049b9f4cf9fb7d9467da943"],["/2021/05/08/选择排序/index.html","2c44dcee54bb63077fb5ea7b0d0549fa"],["/2021/05/12/插入排序/index.html","32841ae03331c2c2c849bab02c51965e"],["/2021/05/15/快速排序/index.html","88302ff7f5b67c890ce78bffcf6fe857"],["/2021/05/19/基数排序/index.html","3faf92d85762d5331d315514c653a814"],["/2021/05/20/哈希排序/index.html","fd24cf1ca76455857e13fbe54d80f158"],["/2021/05/21/归并排序/index.html","b0eb3a0f827683d2514231225d3ca576"],["/2021/05/22/二分查找/index.html","43f4b0f6bb584b4e146bb65c4175bc65"],["/2021/05/26/差值查找/index.html","c1c2eb31d61612a3e9f82df78949f898"],["/2022/01/12/高精度大整数计算/index.html","692d086bbf771063cc68a646171ac3a1"],["/2022/01/22/前缀和/index.html","846d6c114e792c4f0383e719cf171489"],["/2022/01/23/差分/index.html","013e867de7745fc78538517ee6ee7d81"],["/2022/04/04/MyBatisPlus/index.html","bed2f7462643ccd147b65332a96ccdb9"],["/2022/08/17/jQuery/index.html","2251d90ed07e0cd2451cbec0d615f9e9"],["/2022/08/19/JavaScript/index.html","7a14eb00460e02d4daa8854c0b528ff2"],["/2022/08/22/Ajax/index.html","305568e598ee5ecf12f35b60eb192737"],["/2022/08/23/Promise/index.html","ad8aa0a44f533dfa9fed0adaac47a9a4"],["/2022/08/24/Axios/index.html","517e19484796d75611ef3355d94c17c4"],["/2022/08/25/H5本地存储/index.html","d73f588c73a956a46892785e5dc16c15"],["/2022/08/26/mock/index.html","fcd232d7e8bd519d96dbe90e0791cfcb"],["/2022/08/31/VueJs/index.html","605e24f734f9e9adcade2ef3d7974779"],["/2022/09/01/vue组件化/index.html","dcf918808f94b538ea86042d09d9917c"],["/2022/09/04/VueCLI/index.html","b26b75e211ca2695a24186bfe800e059"],["/2022/09/07/vue实现动画/index.html","3a80165cefeab24dcba879378154ef22"],["/2022/09/09/Vue响应式方法/index.html","220a413c47d63ead042263a8f2034dd3"],["/2022/09/10/Vue异步请求/index.html","3d4017bcc7207535326ebe74957784d1"],["/2022/09/11/vue-Router/index.html","83bfda10903c5ad05d3f912f1b35f24d"],["/2022/09/13/Vuex/index.html","2af0d6aca795e4dae18c5e0a08e98adf"],["/2022/09/15/SpringBoot/index.html","013eddcb34c8583871399b0ef7f80008"],["/2022/09/16/SpringBoot配置FastJson/index.html","36a16b19d2e52df22edadd170b433653"],["/2022/09/19/SpringBoot参数校验/index.html","929a6efd24e7ccefea78520a7b2b59ac"],["/2022/09/20/SpringBoot的异常处理/index.html","37be6c8c8f7be45d4ee7ef6d68b88860"],["/2022/09/21/SpringBoot统一响应处理/index.html","b10504c7ca6e0b11114170d0aeef3be7"],["/2022/09/28/Linux/index.html","fc1e723e2472fa61563d0f6860fd960b"],["/2022/10/02/redis基础/index.html","3f4e56165d1c3c069938cc7a783d5159"],["/2022/10/03/Redis缓存/index.html","e3bae844739d18a5ac697314fee41b64"],["/2022/10/04/redis缓存穿透/index.html","5de424e4590bdec29220e6c49a3f394a"],["/2022/10/13/Redis缓存击穿/index.html","e0fb4ff4744a3f58e048fb2f1b41eac2"],["/2022/10/14/Redis缓存雪崩/index.html","ffbab2dd31a3e4d63c482a906877fd82"],["/2022/10/17/Redis集群/index.html","c7e9a973fc279e36f05013708e340038"],["/2022/10/18/Redis哨兵模式/index.html","939e80616ede0efd12f63ecef2d52263"],["/2022/10/19/Redis主从复制/index.html","7caa1ced3ced5c0477f560cb00949773"],["/2022/11/03/Spring-Security/index.html","47a96d97bc17ff5181465edfad3e50c0"],["/2022/11/08/SpringBoot日志/index.html","4865adfe3a262ff7ceeda38a6226a634"],["/2022/11/11/Swagger2/index.html","cd4417914353530b10e912c359d67995"],["/2022/11/21/Nginx-一/index.html","8a2f88e093d8a077cefcea7f7b36c962"],["/2022/11/23/Nginx-二-代理服务/index.html","c95827c8cdf40b9381f5a50275059c58"],["/2022/11/24/nginx-三-负载均衡/index.html","3bba25c9d787fdf2cfcfa5306c73fb06"],["/2022/11/26/nginx-四-缓存集成/index.html","f45f64682c187d92070a42b6a55043c7"],["/2022/11/28/nginx-五-动静分离/index.html","8177f886979765287935afb955bc9442"],["/2022/11/29/nginx-六-制作下载站点/index.html","81f140d24f1b18bcdb62a3705c78a975"],["/2022/12/06/docker基础/index.html","708df86503a8bf452c31afdd66fd02fd"],["/2022/12/09/Docker高级/index.html","5046ac1930c2c186cd867921afac73b8"],["/2023/01/04/MongoDB/index.html","8788d3db87dbfec50d2509db75e34f75"],["/2023/02/05/消息队列/index.html","59b7eab453b6343e06d0185f87e049a4"],["/2023/02/12/RabbitMQ集群/index.html","d398ef70cd753816b0b6721536c838ba"],["/2023/03/10/CICD/index.html","3fede0b937a8b8543d2e202d56fde8c6"],["/2023/03/11/ElasticSearch/index.html","4d3252b78a70ab64a1f3bf630777bf33"],["/2023/03/12/ELK日志平台搭建/index.html","4af609784eeb0a339ac8cd0a1247f477"],["/2023/03/13/NIO/index.html","e23dc7d308584179fa2e2c5e9e2ec0ce"],["/2023/03/14/Netty/index.html","45210d09bd6b99e1893c72ce1c6361a6"],["/2023/03/15/SpringCloud/index.html","964ad49eb877050f86b445ee719efca0"],["/2023/03/17/分布式系统认证/index.html","9bdefc5076afd17ea2a2453a1b602522"],["/2023/03/19/JVM概述/index.html","674035bb3c164b658afda483f4332b00"],["/2023/03/23/类的加载过程/index.html","592a878126be45b2168545e7a488f6c1"],["/2023/03/28/对象的实例化/index.html","bfdcbf4bdfb978f80a51c573ed4ab2a9"],["/2023/04/01/运行时数据区/index.html","c7898d30c357092d58809335f7db516a"],["/2023/04/04/执行引擎/index.html","336bb85563c3d9da045be40d4f958b65"],["/2023/04/06/对象引用/index.html","92db93aa9aeef49711643131d81b0ea1"],["/2023/04/09/垃圾回收/index.html","d62000c5b68f845b052464f9c27c6b42"],["/2023/04/11/垃圾回收器/index.html","264da1e17b6fcb2261e9f7c11abb8771"],["/2023/04/14/Class字节码文件/index.html","ab0a33aa288489bdb1f60e16ec457c03"],["/404.html","94ea668553f74f8597b87e2246d492b0"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","618d8191af67f33f8d1e7b9d0c94ffa7"],["/archives/2021/02/index.html","de668ecd9c167163a87ce0fcd86d4591"],["/archives/2021/03/index.html","4a803bdc58d974306e96994771595814"],["/archives/2021/03/page/2/index.html","818356ac784e42661fe42d161455b1bd"],["/archives/2021/03/page/3/index.html","f653a9f8cc7dcb25e1990d70960bd900"],["/archives/2021/04/index.html","54702e6ce33595710aac77bd768a20af"],["/archives/2021/04/page/2/index.html","3a55847dbec884b7cccafce8eb41ab32"],["/archives/2021/05/index.html","ae57a9bf000082c29c78fa43f02c93ca"],["/archives/2021/index.html","3b63fcff8422ee55b7303f11e44e103a"],["/archives/2021/page/2/index.html","6f51afa32991ea08cf80b70cf20db91f"],["/archives/2021/page/3/index.html","362aa17ad95f5d056a3d0265054f5e92"],["/archives/2021/page/4/index.html","ebe399c9c24e59b00116746fde63bbf3"],["/archives/2021/page/5/index.html","04450c2b220eb371f5fbcd690a5e8bdf"],["/archives/2021/page/6/index.html","894a11bd4784d2c5ae5b3f172964d612"],["/archives/2021/page/7/index.html","dfe3cd7a4471db17fd4b2612eb372f3f"],["/archives/2022/01/index.html","c4b0f8b1e3e46e9472545ea147bf3634"],["/archives/2022/04/index.html","715640a4817df72c96db22fe2decfd6d"],["/archives/2022/08/index.html","e9d77e91183f38989da3a3cf19fc2255"],["/archives/2022/09/index.html","e408d08fc5319907691624bc129e32e7"],["/archives/2022/09/page/2/index.html","b20a105c05bc67d45748c9c74555d04d"],["/archives/2022/10/index.html","be38f983853b4eb5dbfb77cf15bb921d"],["/archives/2022/11/index.html","d05ed016cd364d688a6b8d2f45ce97c5"],["/archives/2022/12/index.html","6454beec4924447743d6357e6027658a"],["/archives/2022/index.html","bc25a7d05092a5a8855f9c49b70623f5"],["/archives/2022/page/2/index.html","a273d2aec0f6df2e92c8f6ce1770ec49"],["/archives/2022/page/3/index.html","560fa13432c9fe0ed5d6786679d96ce7"],["/archives/2022/page/4/index.html","0d55176c55c7d81850a33068d5bfe548"],["/archives/2022/page/5/index.html","b44e89424d32b7a21cce4d82c9b21c78"],["/archives/2023/01/index.html","5813ea7e5ee5515690dd1f9595d1e5b5"],["/archives/2023/02/index.html","0a97f7d033c81794356f7ae9f1bf4cd3"],["/archives/2023/03/index.html","9f6ee8303247b01750889f1f5b0ccd0e"],["/archives/2023/04/index.html","0ae6fbda5637b2ce8403f10ceb6e8f29"],["/archives/2023/index.html","85b75ca04b2581def192b26388c61ec3"],["/archives/2023/page/2/index.html","82163281bb9b0d937bed27d70aa72f7e"],["/archives/index.html","36dd85e95c2e6b19a056aabb3843b075"],["/archives/page/10/index.html","04494b8ed7957188f7cc34f55ed67d24"],["/archives/page/11/index.html","4e682d235562be0bf0bb08bb0da62758"],["/archives/page/12/index.html","7e68891dd04294e6fa43f136d681f0c9"],["/archives/page/13/index.html","81971934faea348ad1d0c72170b5ad43"],["/archives/page/2/index.html","14841260d89f4e258f05d471e55f9ffd"],["/archives/page/3/index.html","974755fd41e9fc3375ab42f62a9b0ea0"],["/archives/page/4/index.html","185af24d60828783a2a7dbdd60756a21"],["/archives/page/5/index.html","0af69acbee35212960c19ee18ac354fc"],["/archives/page/6/index.html","78a2dfb3e516e9c367ceda3306402ec4"],["/archives/page/7/index.html","13461769aba1c86bb176f6393a422460"],["/archives/page/8/index.html","865058088edd59b8986390955031cf7e"],["/archives/page/9/index.html","d15325edbfd3e4a1d82ae0d71342464e"],["/categories/CICD/index.html","8e05f280d27e63ae3b3fde3c321a3e6e"],["/categories/Docker/index.html","3b4ba7a9afcedac9e8a6feb0fc11afca"],["/categories/ELK/index.html","e1e827b774ac6226f3c2a3c51a3dfe16"],["/categories/ElasticSearch/index.html","e03613eaad3ab3c7bf686b0a5a53d33e"],["/categories/JVM/index.html","5c672fe38b1810023331014b2062531b"],["/categories/LeetCode/index.html","fe10df2d5cb70ab3d3de8ebf0d199243"],["/categories/LeetCode/page/2/index.html","342f4f8d55e1f1fa6d30afe1dc397d04"],["/categories/LeetCode/page/3/index.html","de31dbb960e659382bcbb7a834af6c6d"],["/categories/Linux/index.html","be94937d74c0130761549bbf1f8c0905"],["/categories/NIO/index.html","6420b2bf777fd62655b353c40ca45c8a"],["/categories/Netty/index.html","efcc40e82b0119751ba19c244494d299"],["/categories/Nginx/index.html","dc6ffbb736b4614e0d9a8f18e5750222"],["/categories/Redis/index.html","89ea3cc5b14326d0c03b209f54196c62"],["/categories/SSM/index.html","e86a5e06f11f4a5777b32c7b8daff80e"],["/categories/Spring-Security/index.html","49a8883ffacb9120875ac1584fdfca33"],["/categories/SpringCloud/index.html","8e28bd8ac83a6dc062f7e348c687ac6e"],["/categories/Spring框架/index.html","eebc2695ff7d88c6d369310d39b6f0cf"],["/categories/Spring框架/日志/index.html","96e3a5b63fa2844690d2d9bd54826f76"],["/categories/Swagger/index.html","5af0b675ab8db9d00b395da773d0f80f"],["/categories/Vue/index.html","fe1e5f33881564769accac6aa9e284dc"],["/categories/index.html","f627ffc970d19be121887509e8059cfe"],["/categories/分布式权限认证/index.html","b8254126aae4e97f0e0902e7416deb05"],["/categories/前端/index.html","88fc6d2605937712c434c81281ede193"],["/categories/博客/index.html","04615c79758d40abd796837534284e0a"],["/categories/学习路线/index.html","1be05b53c5515656bf8772fbc82a8af0"],["/categories/工具/index.html","300d71ee04a3d1195ba7857a9c798f08"],["/categories/数据库/index.html","5d5563b643215ddaf45d114f37141b96"],["/categories/消息队列/index.html","10862fa6f35933837919fee33c1f1926"],["/categories/笔记/index.html","8314141f9c7af70426797b2a85fc3568"],["/categories/算法/index.html","8accdd986a80f92998ebf08f4b352272"],["/categories/算法/page/2/index.html","001463b27c6d080a907d75d06a0a2b7b"],["/categories/设计模式/index.html","06877f0548e1ebdcd50bb14a70b77e08"],["/categories/设计模式/page/2/index.html","08f69b8a0c9fb3fa3e740d6188ca8e2b"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","568fc62b7925f2473d01db91a9c76443"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","b035c6be89ce2611edec9e39e18def11"],["/messageboard/index.html","a4609fe380c08af020879cdd2a9a9308"],["/page/10/index.html","c85265e66406ad4f7ed46fd7b71ce7e1"],["/page/11/index.html","5115de320145efa6b367671d4c47ec6a"],["/page/12/index.html","1e947ea6f5d7325ed179bc376269df4f"],["/page/13/index.html","2969a1b38cdbf7c07203b0cf0da3e3b8"],["/page/2/index.html","656bc97fa1772e1eae1eaa41bbb3a9d4"],["/page/3/index.html","1ada37937678260316b70cc57dee8f1d"],["/page/4/index.html","1e2c9138fc075a40fc25e5aa3ad1dd72"],["/page/5/index.html","797918edadf92bf7c3d3217f74573c8f"],["/page/6/index.html","0dc702659e5040a1027bc4885f8ce3c4"],["/page/7/index.html","a69b05bda2db15b423eb3009326be07a"],["/page/8/index.html","658827715e91453533465fac57c5c4d0"],["/page/9/index.html","57d134d13e8a7cb7948bf35e4eb91df4"],["/sw-register.js","5cf851c9b4aed38eed41144ba79e911b"],["/tags/Ajax/index.html","70a82e3fb044e6b9452914f1fe690ef1"],["/tags/Axios/index.html","5fbacfeb25a35fbbc81687ecffc04fe0"],["/tags/CICD/index.html","34a4bc65b7db77ff21f48741f8df87af"],["/tags/Docker/index.html","95d04ffaede1d02df6a44cc9d4a4aa7b"],["/tags/ELK/index.html","0e5abb8ad758826a04a37d4535e541af"],["/tags/ElasticSearch/index.html","c1b98b1e8df4ac0246f04dc0c5c141d5"],["/tags/H5/index.html","cb340dce3f6db97d5c9ac3b88d2193d5"],["/tags/JVM/index.html","cd2c46d25ebbb7ecec13a6727d49032e"],["/tags/JVM内存模型/index.html","ca5b8ecf1a5ece22fae68fa00ff028f2"],["/tags/JVM执行引擎/index.html","04c7d2ac18f6d026aac5ed40502ea1cb"],["/tags/JavaScript/index.html","a50fd47e2c3326e8ae545c1c511b84e2"],["/tags/Kibana/index.html","8800d6d3de51c6a0aec835c6891ef773"],["/tags/LeetCode/index.html","1ab0c9fed874657737b2aec35c52d588"],["/tags/LeetCode/page/2/index.html","6d3bbe9513258eebfb0602c15d1664da"],["/tags/LeetCode/page/3/index.html","0a5451d57a932c32fdaf91f58e556f1a"],["/tags/Linux/index.html","0b3902cf00320dadd71ada0732dd6f0d"],["/tags/Logstash/index.html","afdee8bafb12fee7ed043e0642bc6ee6"],["/tags/Mock/index.html","575ace3239ed3822674e8f944f9a6a25"],["/tags/MongoDB/index.html","9a954982e50be3d60d37dcbd8efec70e"],["/tags/Mybatis/index.html","77a0b0123244a7e5bd929086772b4f84"],["/tags/MybatisPlus/index.html","a306905d24f6a8ae1af30f813606e9f2"],["/tags/NIO/index.html","6aa2149f2790a96b303f458f7f2c7f33"],["/tags/Netty/index.html","b9fba34848c466f68090f9987d57e0f9"],["/tags/Nginx/index.html","3d9d5179792c50345e9c1e5f21e92446"],["/tags/Promise/index.html","4bd192d2d8524edf473100e2d69d6078"],["/tags/RabbitMQ/index.html","9802e7572893563b9aabab0c0d07225e"],["/tags/Redis/index.html","36b6c0930c310b47eaa7891faad3bb3b"],["/tags/SSM/index.html","cb898df540a077a26012d1ef4c1c0105"],["/tags/Spring-Security/index.html","acc4edac48a7a4e78ed01cd01376d340"],["/tags/Spring/index.html","0483d7c0f73e6fe61c5ab769c5ec0a91"],["/tags/SpringBoot/index.html","38d4521d79f6c4f8d108c56e17a79b46"],["/tags/SpringCloud/index.html","32d29742940d432539f080943933c5ea"],["/tags/SpringMVC/index.html","da4d97e5fd881af09b622152772931d8"],["/tags/Swagger/index.html","1ab907b4375e2b1405b445b03f78e332"],["/tags/git/index.html","db4b8203da6988159b870645e36c5ed5"],["/tags/hexo/index.html","05bf1770eff7f69da3526cf621ad55b7"],["/tags/index.html","571c65bceefd7eb3472228797943e9cc"],["/tags/jQuery/index.html","c5ee97d9255085fced61b6265e34bd6f"],["/tags/java/index.html","70ec7b9bbfb779bd2abcd400985da512"],["/tags/markdown/index.html","59d66590e0a015051ae6f46e4c5dc371"],["/tags/mysql-数据类型/index.html","bc09d08018d49eab5d696e6ec743d6cf"],["/tags/mysql/index.html","2eccb6c9610e2b0766e0bb44845ce43b"],["/tags/noSQL/index.html","8947c7463e57663ee589dca3f79b1d26"],["/tags/typora/index.html","47f58d375a18b2fdd38bf7c40c30730f"],["/tags/vue/index.html","a5c57fcec702d48fd523474ea71c757b"],["/tags/享元模式/index.html","076a4b3a3a70972e434364653b86f44b"],["/tags/代理模式/index.html","12c8e48a020b6afed86de2da721871d5"],["/tags/分布式/index.html","08addf5d51dbe6772269ad79a502cf5f"],["/tags/分布式系统/index.html","1a1a5babdc236cfbab194875f4805c48"],["/tags/前端/index.html","87f940d9cf54211761d9d1dd152bbca9"],["/tags/前端/page/2/index.html","63b5f0412ff32ef4f3a90b920011ee27"],["/tags/博客/index.html","6fa676464e16a579aa07d7dc54fb81d8"],["/tags/后端/index.html","66335af67e522a261fcba7f37179dbed"],["/tags/外观模式/index.html","dffbfb068d50e3e32f09395a86d2ef66"],["/tags/容器技术/index.html","05324b3eac31065f0a3645a9cfb8ed03"],["/tags/工厂方法/index.html","0f68dcaf84cc7c3514acf89468ae4bae"],["/tags/微服务/index.html","883a266eef806a210d71cd99a5a518d1"],["/tags/抽象工厂/index.html","5720a020968b4e168dde021e768a0b7c"],["/tags/持续集成持续部署/index.html","07ade25bf441f69d92639a4d9a9d3069"],["/tags/排序/index.html","2422c0bcbae09c4c5b2aee81045b8d9b"],["/tags/搜索引擎/index.html","ee4be10f9039f17960bc0b7b93cad090"],["/tags/数据库/index.html","99a598dc8ccb952d5939bc3daba1b5e9"],["/tags/日志/index.html","af7a98b34327234dc935c46b661cdba3"],["/tags/服务器/index.html","50321c3beeebc27b8b2db8fec29693da"],["/tags/权限认证/index.html","8c19cd414089604ddd25769f41e7969c"],["/tags/查找/index.html","03698b980db6b5e81e55c7e05c68d9b4"],["/tags/桥接模式/index.html","47d9ae0117c3e1145263ed6f6457332a"],["/tags/模板方法模式/index.html","faf9609355690806c00704e76a68d810"],["/tags/消息队列/index.html","bbe614311f41173c1f4e514de51af263"],["/tags/版本控制/index.html","c48861310d9737e89d34507a49c3518b"],["/tags/策略模式/index.html","6f2b3d9b5bf60b93c63db055bde43084"],["/tags/简单工厂/index.html","c6a993a5952a82832c3bfbe8255c474a"],["/tags/算法/index.html","555bb2dab582edc695f512292a5c104c"],["/tags/算法/page/2/index.html","65e7527148afe12fa9eb4661239dda31"],["/tags/组件化/index.html","e76749d5ca386e400e8e2c96c98d3c0f"],["/tags/缓存/index.html","96b39cadd8297b23a34c083947504737"],["/tags/观察者模式/index.html","edf4f2b356dba693cfac1b94ea579b1a"],["/tags/设计模式/index.html","9901d8bb05700dfb9b2ec325771e25c1"],["/tags/设计模式/page/2/index.html","60f3d17cb9b88075c2df9f4645b35340"],["/tags/适配器模式/index.html","cd774ff3ab53fab8a06d79fd76bea457"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
