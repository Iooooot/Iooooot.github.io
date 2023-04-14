/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","04e2b4807608b4af51cb0335ec594cad"],["/2021/02/22/博客的搭建/index.html","4a18d8294a8435d9bbc385f512dbf811"],["/2021/02/23/如何使用markdown/index.html","75bd80e9b19f7aeb927e236b8b6d70bd"],["/2021/02/24/mysql命令大全/index.html","471bb465191c5b14ef7c1d93f003355f"],["/2021/02/24/mysql数据类型/index.html","e44f196aaf8a83ffcb24060651edd599"],["/2021/02/25/Git的介绍与简单使用/index.html","9799e5ad2e0303946038dc5d5885cc0e"],["/2021/02/27/简单工厂模式/index.html","82e8c2feb574858a62ea01d99643e170"],["/2021/03/01/工厂方法模式/index.html","ceb7ce05eb8a1f40c6eda47e8edafad7"],["/2021/03/02/抽象工厂模式/index.html","73fd121a1101282e46caa17171530d45"],["/2021/03/03/单例模式/index.html","b9e1219a67cda39216e91867b9fb5032"],["/2021/03/04/观察者模式/index.html","c3cee1a1ef7fa20bf9834e5331394acb"],["/2021/03/05/适配器模式/index.html","69eafaccc5d6d14da0b7734aed9c3332"],["/2021/03/06/模板方法模式/index.html","edbc67686784e37715780e700beff49b"],["/2021/03/09/代理模式/index.html","9abf58d9f27e877c220c2995fbd5c5bb"],["/2021/03/11/享元模式/index.html","5f1705a1cc3a862bc75adce4008c74c6"],["/2021/03/12/外观模式/index.html","fd02a51a19fb0252574a053810934c81"],["/2021/03/13/策略模式/index.html","6ed91e7c6fe92bfd0aa59802adbedd72"],["/2021/03/14/桥接/index.html","e23472d3a307d074ccb089049bd0d358"],["/2021/03/15/LeetCode-多数元素/index.html","8dc8a78b01ae2c593aed7f5e11198cd4"],["/2021/03/16/LeetCode之汉明距离/index.html","c1e75b9188dba31695d59721d8b4f35d"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","6fba4c7780f04fce7f603e75ded12e36"],["/2021/03/18/LeetCode之两数之和/index.html","fd631212ac6b9fdc7aa76d3bb33011f9"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","43bf106470f0f50ea69433b760513d1e"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","776c4cfb847e3b56f754b45e326cccb6"],["/2021/03/21/LeetCode之有效的括号/index.html","37195cdc81f5c8f2046a214a924ea607"],["/2021/03/22/LeetCode之移动零/index.html","f8c5506eb769c1213d36d12386b87263"],["/2021/03/23/LeetCode之爬楼梯/index.html","7cefc11f68f4b2f1a5757ba36d43dd29"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","e8a64d74df1bb3af90347d6df92f9742"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","7032b7b41e74927cf82ff3142db45715"],["/2021/03/26/LeetCode之最大子序和/index.html","0b25492fab41d26d815f5b804cae6a7e"],["/2021/03/27/LeetCode之子集/index.html","d92f3628441228e94029cd76996410d0"],["/2021/03/28/LeetCode之合并二叉树/index.html","abb94255cf0af7ca719e385514dcbcc1"],["/2021/03/29/LeetCode之翻转二叉树/index.html","ead9919575292b4a2db5dc5f9bca1dc9"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","5d8d50d886175b9fd30964f06769bf23"],["/2021/03/31/LeetCode之翻转链表/index.html","156da2a6099c869a7124fd5bd266dffb"],["/2021/04/01/LeetCode之相交链表/index.html","ff5941484ed5cb93ce6982bca2cfcdc4"],["/2021/04/02/LeetCode之最小栈/index.html","54dd05ef515e484557228031084790e9"],["/2021/04/03/LeetCode之对称二叉树/index.html","212541f30957659cb3037ef8d50dcae1"],["/2021/04/04/LeetCode之环形链表/index.html","201b4efcb4b660c154fbf63b19499966"],["/2021/04/05/LeetCode之二叉树的直径/index.html","faaa7c33d1ad88ee38f511d1c581f30a"],["/2021/04/06/LeetCode之回文链表/index.html","a85c84cf5d3ccd66eec285e003db80e3"],["/2021/04/07/LeetCode之比特位计数/index.html","fd822313fed152dc4273334f7f270489"],["/2021/04/08/LeetCode之全排列/index.html","2bfea67cc7a87a8ac7231f0e2131878e"],["/2021/04/09/LeetCode之括号的生成/index.html","99870914381c18044e8c21bac4751bfc"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","7102a44646abd82e9eca3fcf0cb7ede0"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","cd6e1ea7627fbf2b820b0223c2c04c12"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","288fda60b3b1c5677ead02570ae30e8a"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","9a096b7999cb407229fb7c258f678177"],["/2021/04/14/Mybatis/index.html","544189aa7eab48c766820e11ca2955cf"],["/2021/04/15/Spring-1/index.html","8fe76ab258f7cca96dba9a164a8d6589"],["/2021/04/25/Spring-2/index.html","f7b691b9887576f2dd891fb64adc6307"],["/2021/04/27/SpringMVC-1/index.html","8c9cd9f912268d2f1b34caa340036b64"],["/2021/04/29/SpringMVC-2/index.html","019dd6847f7ba5d7786c615e7643f195"],["/2021/05/03/冒泡排序/index.html","fc19a8083adea55986a7d615d2d2bcd9"],["/2021/05/08/选择排序/index.html","293124f384b485a05427751ed5002816"],["/2021/05/12/插入排序/index.html","435c8643ff24aaafac97d3aa323ace1f"],["/2021/05/15/快速排序/index.html","88302ff7f5b67c890ce78bffcf6fe857"],["/2021/05/19/基数排序/index.html","a95a89557f360c66750679d479ea222a"],["/2021/05/20/哈希排序/index.html","ed817359ccf6bbbb0446a07def0d2aee"],["/2021/05/21/归并排序/index.html","b0eb3a0f827683d2514231225d3ca576"],["/2021/05/22/二分查找/index.html","43f4b0f6bb584b4e146bb65c4175bc65"],["/2021/05/26/差值查找/index.html","c1c2eb31d61612a3e9f82df78949f898"],["/2022/01/12/高精度大整数计算/index.html","692d086bbf771063cc68a646171ac3a1"],["/2022/01/22/前缀和/index.html","846d6c114e792c4f0383e719cf171489"],["/2022/01/23/差分/index.html","013e867de7745fc78538517ee6ee7d81"],["/2022/04/04/MyBatisPlus/index.html","bed2f7462643ccd147b65332a96ccdb9"],["/2022/08/17/jQuery/index.html","2251d90ed07e0cd2451cbec0d615f9e9"],["/2022/08/19/JavaScript/index.html","7a14eb00460e02d4daa8854c0b528ff2"],["/2022/08/22/Ajax/index.html","305568e598ee5ecf12f35b60eb192737"],["/2022/08/23/Promise/index.html","ad8aa0a44f533dfa9fed0adaac47a9a4"],["/2022/08/24/Axios/index.html","517e19484796d75611ef3355d94c17c4"],["/2022/08/25/H5本地存储/index.html","d73f588c73a956a46892785e5dc16c15"],["/2022/08/26/mock/index.html","fcd232d7e8bd519d96dbe90e0791cfcb"],["/2022/08/31/VueJs/index.html","605e24f734f9e9adcade2ef3d7974779"],["/2022/09/01/vue组件化/index.html","dcf918808f94b538ea86042d09d9917c"],["/2022/09/04/VueCLI/index.html","b26b75e211ca2695a24186bfe800e059"],["/2022/09/07/vue实现动画/index.html","3a80165cefeab24dcba879378154ef22"],["/2022/09/09/Vue响应式方法/index.html","220a413c47d63ead042263a8f2034dd3"],["/2022/09/10/Vue异步请求/index.html","3d4017bcc7207535326ebe74957784d1"],["/2022/09/11/vue-Router/index.html","83bfda10903c5ad05d3f912f1b35f24d"],["/2022/09/13/Vuex/index.html","2af0d6aca795e4dae18c5e0a08e98adf"],["/2022/09/15/SpringBoot/index.html","013eddcb34c8583871399b0ef7f80008"],["/2022/09/16/SpringBoot配置FastJson/index.html","36a16b19d2e52df22edadd170b433653"],["/2022/09/19/SpringBoot参数校验/index.html","929a6efd24e7ccefea78520a7b2b59ac"],["/2022/09/20/SpringBoot的异常处理/index.html","37be6c8c8f7be45d4ee7ef6d68b88860"],["/2022/09/21/SpringBoot统一响应处理/index.html","b10504c7ca6e0b11114170d0aeef3be7"],["/2022/09/28/Linux/index.html","fc1e723e2472fa61563d0f6860fd960b"],["/2022/10/02/redis基础/index.html","231ce228f756a80d69a4ed0aabee8993"],["/2022/10/03/Redis缓存/index.html","e3bae844739d18a5ac697314fee41b64"],["/2022/10/04/redis缓存穿透/index.html","5de424e4590bdec29220e6c49a3f394a"],["/2022/10/13/Redis缓存击穿/index.html","e0fb4ff4744a3f58e048fb2f1b41eac2"],["/2022/10/14/Redis缓存雪崩/index.html","ffbab2dd31a3e4d63c482a906877fd82"],["/2022/10/17/Redis集群/index.html","c7e9a973fc279e36f05013708e340038"],["/2022/10/18/Redis哨兵模式/index.html","939e80616ede0efd12f63ecef2d52263"],["/2022/10/19/Redis主从复制/index.html","7caa1ced3ced5c0477f560cb00949773"],["/2022/11/03/Spring-Security/index.html","47a96d97bc17ff5181465edfad3e50c0"],["/2022/11/08/SpringBoot日志/index.html","4865adfe3a262ff7ceeda38a6226a634"],["/2022/11/11/Swagger2/index.html","cd4417914353530b10e912c359d67995"],["/2022/11/21/Nginx-一/index.html","9b7a0793eb47a6462ecb92a6fa0af4a1"],["/2022/11/23/Nginx-二-代理服务/index.html","33629d114d4f7068fc7ddd13bbdeab08"],["/2022/11/24/nginx-三-负载均衡/index.html","ff8a04afeef6052dfc63892bb165a420"],["/2022/11/26/nginx-四-缓存集成/index.html","42ae92f81a3e3c637b495f76fc1ec747"],["/2022/11/28/nginx-五-动静分离/index.html","6e7357fde043a07667373ed50b24463f"],["/2022/11/29/nginx-六-制作下载站点/index.html","f3685e8ca23471455d29ea43e66fddd0"],["/2022/12/06/docker基础/index.html","708df86503a8bf452c31afdd66fd02fd"],["/2022/12/09/Docker高级/index.html","5046ac1930c2c186cd867921afac73b8"],["/2023/01/04/MongoDB/index.html","8788d3db87dbfec50d2509db75e34f75"],["/2023/02/05/消息队列/index.html","59b7eab453b6343e06d0185f87e049a4"],["/2023/02/12/RabbitMQ集群/index.html","d398ef70cd753816b0b6721536c838ba"],["/2023/03/10/CICD/index.html","3fede0b937a8b8543d2e202d56fde8c6"],["/2023/03/11/ElasticSearch/index.html","4d3252b78a70ab64a1f3bf630777bf33"],["/2023/03/12/ELK日志平台搭建/index.html","4af609784eeb0a339ac8cd0a1247f477"],["/2023/03/13/NIO/index.html","e23dc7d308584179fa2e2c5e9e2ec0ce"],["/2023/03/14/Netty/index.html","45210d09bd6b99e1893c72ce1c6361a6"],["/2023/03/15/SpringCloud/index.html","964ad49eb877050f86b445ee719efca0"],["/2023/03/17/分布式系统认证/index.html","9bdefc5076afd17ea2a2453a1b602522"],["/2023/03/19/JVM概述/index.html","0adf08a8e09f1155d582dadffd849359"],["/2023/03/23/类的加载过程/index.html","800f7ce274dcb9347a93c82743fdd915"],["/2023/03/28/对象的实例化/index.html","927faf7e1221eef1aa13aa312d86ec53"],["/2023/04/01/运行时数据区/index.html","7f155cd1bc4e6a52f37b66b22326f8c5"],["/2023/04/04/执行引擎/index.html","c2f1ad32a6a8d6a9ce2b4bf963908e1c"],["/2023/04/06/对象引用/index.html","946855bdf090408a6946ba8eba4d3041"],["/2023/04/09/垃圾回收/index.html","d62000c5b68f845b052464f9c27c6b42"],["/2023/04/11/垃圾回收器/index.html","264da1e17b6fcb2261e9f7c11abb8771"],["/2023/04/14/Class字节码文件/index.html","9c9aad385b2228c20273c0cf761f2060"],["/404.html","e1918afaa41caf28a93911b995b33c47"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","ba247f628168dd50ec63322bbb7329bc"],["/archives/2021/02/index.html","8eb329a003457d4b63296abc9a376554"],["/archives/2021/03/index.html","9056a85acd96759d48ed8a8e0e0217c4"],["/archives/2021/03/page/2/index.html","461ebdfe3f7a076c701d3ea7ec11e90a"],["/archives/2021/03/page/3/index.html","7d74ad0014c656474033e15cd0415273"],["/archives/2021/04/index.html","567d089b6fde3e09d6837a53cd12668c"],["/archives/2021/04/page/2/index.html","40744bc241e1b10d01972fc6e5ac6b48"],["/archives/2021/05/index.html","dd22b93800bb022b3e57bf51b3fb1714"],["/archives/2021/index.html","b73f0a52c35d1c4ad4fdff0eb51212c0"],["/archives/2021/page/2/index.html","a50a8f662ff72fc522b0eb38e37f53e7"],["/archives/2021/page/3/index.html","38529171b129cc528544a54134e7276e"],["/archives/2021/page/4/index.html","0aa7213293b87cb6098da39c4a80fd41"],["/archives/2021/page/5/index.html","37548e5a7312db97234b655d076e5f6f"],["/archives/2021/page/6/index.html","2404120e2a8fdd17ba3e14b8e8429773"],["/archives/2021/page/7/index.html","9a66f10d732497acf22dc13d495aa9c0"],["/archives/2022/01/index.html","8546f2591ea371fc0b8d35ba7ba17dbd"],["/archives/2022/04/index.html","a22c6c29d2778f5a49f3a257fc9aefa6"],["/archives/2022/08/index.html","f896bf2ecb20d6283bb0fbfebd2c966b"],["/archives/2022/09/index.html","6d52d2ef616f92f5f8b2e29ca2a418a9"],["/archives/2022/09/page/2/index.html","48914cbfdd232b7bb2cc8b06008b47db"],["/archives/2022/10/index.html","f3b9510d1768c3d73a22463f44dcd46f"],["/archives/2022/11/index.html","00464cbf5dbfa2ddca2a463dfe537fa9"],["/archives/2022/12/index.html","c0ede4523fc8fe613973d89e4a8cb035"],["/archives/2022/index.html","e939dd53049e3b411b929fdf5fba6f67"],["/archives/2022/page/2/index.html","18de14dbf218281c4205c3c930652ffb"],["/archives/2022/page/3/index.html","7eda712ff03009618ff68bb9a918d18b"],["/archives/2022/page/4/index.html","cfbcaa1f2e6861328821c9ce1b49396f"],["/archives/2022/page/5/index.html","97dbfb5c4f51586394f1a6964183bb4c"],["/archives/2023/01/index.html","c30881bc266444bee5c23e26ba63628f"],["/archives/2023/02/index.html","eb5bb18000b90d215cca0c519f79bbe1"],["/archives/2023/03/index.html","9df390026dbb12ec5be2d2d4edfd5e6f"],["/archives/2023/04/index.html","10b2c3ef52fc3b4923ebc62efcf74e38"],["/archives/2023/index.html","45238dcb9d04a9e203f17fb3036d1df9"],["/archives/2023/page/2/index.html","5dfdba1a57b8c6c7ab269946323a9af2"],["/archives/index.html","ea4d94a8445a3cea331f819b53d2b968"],["/archives/page/10/index.html","86bbba131be8ecafea5ebbafa7628038"],["/archives/page/11/index.html","46c2b849a5fae0394a4957b569797540"],["/archives/page/12/index.html","1b708d95cd14cf026584ecc86e8c58bb"],["/archives/page/13/index.html","0f7db467eca63c7184015f429cbc9871"],["/archives/page/2/index.html","c99703868a3e464c40a0470ef3b0783c"],["/archives/page/3/index.html","6a2244d18d5aa8d734f3a0ab7441a49e"],["/archives/page/4/index.html","e89d9472b567432a8b1a63e74e06bc97"],["/archives/page/5/index.html","bb2a2f7be518907ad46acc3232a0a71c"],["/archives/page/6/index.html","dcf37aaf412fc808dcc1bff520a2ad24"],["/archives/page/7/index.html","34b4f17e5daea163cf4d675a6c067c48"],["/archives/page/8/index.html","458785f063d1e5ddc1847f9626ecaadc"],["/archives/page/9/index.html","492f349596d642098adcd1fb4b3985f8"],["/categories/CICD/index.html","17b449f60a714fad9f9a35b399d635a5"],["/categories/Docker/index.html","414ba24353ea06840d4a7e7241e28c9c"],["/categories/ELK/index.html","eb4c6bf175ff827bf384b30c660b9181"],["/categories/ElasticSearch/index.html","ab04964def8065875a68375e10eb4615"],["/categories/JVM/index.html","5eafa74482b9a62d75882421f81fae90"],["/categories/LeetCode/index.html","ff5c03aabc6aa11cc5b280ee7db93313"],["/categories/LeetCode/page/2/index.html","b931f42d5ee4801da4c6e214b6541c6a"],["/categories/LeetCode/page/3/index.html","641055641d4ad897d9de6260280c2040"],["/categories/Linux/index.html","7c78bdf2823b7d505169f44501dfe03f"],["/categories/NIO/index.html","f74d1c716fc716224cb6e10d98db0ab7"],["/categories/Netty/index.html","2f5fd8490b4b287993fbea9e77531e02"],["/categories/Nginx/index.html","5bef56c3eaf0623e53070a4430acf430"],["/categories/Redis/index.html","de729bba73bdda97bd7894db4a52a4e9"],["/categories/SSM/index.html","90baaeaeed2d64d48cfed4f5c0d9d572"],["/categories/Spring-Security/index.html","c3ad39c06aff146081be28c1d47107c1"],["/categories/SpringCloud/index.html","e48a9ed99e08129c9bc882a4a8884df1"],["/categories/Spring框架/index.html","beaec2f49998a57d79e91b3178e0d38f"],["/categories/Spring框架/日志/index.html","34cbf7c33f17c6c35201eeae539fe213"],["/categories/Swagger/index.html","395ff90777292831b16f7a4ccde7e136"],["/categories/Vue/index.html","f4f77412e89485ad9209af6f35403d93"],["/categories/index.html","75d8f75a04c356e14168bfaa43c6848a"],["/categories/分布式权限认证/index.html","efd46283bc54631a46acb61cb8b61300"],["/categories/前端/index.html","55dc2b195bc97ab96d4256758f595c65"],["/categories/博客/index.html","1da8008f33d4834727db536c9146110f"],["/categories/学习路线/index.html","3b6194f4555a0ab633ef2e61984a03ad"],["/categories/工具/index.html","2feeec3fe0375325aa95d71e8c6c8119"],["/categories/数据库/index.html","17c14fd9192f1f82893fe9315b61eb76"],["/categories/消息队列/index.html","42f2a8ab0eb73f36ea0c6ef6c38ae5a0"],["/categories/笔记/index.html","2e48111328ea5358d723b26ee87c1c69"],["/categories/算法/index.html","73545705df0ac73688e5794e11de6f8f"],["/categories/算法/page/2/index.html","e79758831130f575001360c830d5a4d1"],["/categories/设计模式/index.html","e7a32d8b1d7ca13abdf67839853df8a8"],["/categories/设计模式/page/2/index.html","eb0c22b2861ed096ebd72924a65d76c2"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","48d076fa3e50b1ef2a0ff8c5aa357ca2"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","8f79030ca7764e5426a7faff1ad8e741"],["/messageboard/index.html","32f12c6402e2537d1e8a0d6d788337c8"],["/page/10/index.html","53a73db3139e7cd6ffa2925b408767eb"],["/page/11/index.html","49d732a75b0172a12e875b6340e7c4ae"],["/page/12/index.html","59ce2ada221f4234ac04b7c04ec47f16"],["/page/13/index.html","320b16c1738659c41c11fbf0af24941f"],["/page/2/index.html","d582e31b1e3eb0678fd32056ed61070e"],["/page/3/index.html","d26d9e5d845048f5562421bd53776ca1"],["/page/4/index.html","22c504d7d1262d66832995290515e5c1"],["/page/5/index.html","b2091434796230d7a85b75e5cb3cb91f"],["/page/6/index.html","394a5fcab0de49608b409eb03945000b"],["/page/7/index.html","effadad1288a305f1f1f2218b8d43d46"],["/page/8/index.html","3e87ec68dd57455042c71ec2507536db"],["/page/9/index.html","3a50e7ac65cb6aee4d0ca35e01d698fc"],["/sw-register.js","57d82a2e863476f12851f9b8b8bb7ccf"],["/tags/Ajax/index.html","be30397bb93a34c645fd362ddb3dca99"],["/tags/Axios/index.html","b632ecdbe4e20698b2508c0f23c79e3f"],["/tags/CICD/index.html","94451211970b8c0de7591ae4934b3af5"],["/tags/Docker/index.html","1f61205490e37e6ef261379b6cd7b7f7"],["/tags/ELK/index.html","da550b9c5c5ea9d887781285d9733517"],["/tags/ElasticSearch/index.html","40d5380f24bebfae2c275511e1b54be9"],["/tags/H5/index.html","f4a5384c8050327f3fac62e40af07587"],["/tags/JVM/index.html","a380dcd3193894666af5e281e7b061d4"],["/tags/JVM内存模型/index.html","d6f89208d5504ef85bbb885f028fedf0"],["/tags/JVM执行引擎/index.html","7a5363a7ec1877b1e13e68f75a393206"],["/tags/JavaScript/index.html","24db95cdc7df64f6b27d4e2d0e79e2d0"],["/tags/Kibana/index.html","254cc1cce408e799b17c08d350cd69f8"],["/tags/LeetCode/index.html","ecc1d38d36fdfd385a3465a922a36432"],["/tags/LeetCode/page/2/index.html","1d953035122ed599b5ad6bfd193936a6"],["/tags/LeetCode/page/3/index.html","826f52cdf1e865ed0e6e74280546166e"],["/tags/Linux/index.html","6a2a58e07b17e6015646b3b7ac58fc1a"],["/tags/Logstash/index.html","bb20fb9950cdee92b4e48c31d53b4bf3"],["/tags/Mock/index.html","42a5708b54a71d38ccc82854ad935455"],["/tags/MongoDB/index.html","9d18b8802252d4e43edf7e9d6424502f"],["/tags/Mybatis/index.html","c16bdc0df1e8c145dd2a41ee4632aeee"],["/tags/MybatisPlus/index.html","f13def8ef0c769cb99c455ea3ee01f88"],["/tags/NIO/index.html","389a177a32db70c03e7615da63e3a816"],["/tags/Netty/index.html","81fd6ff9ede47ef41f3fbca5259a1518"],["/tags/Nginx/index.html","c6b971861bee0c48b3055edec6327453"],["/tags/Promise/index.html","72580f369ecefb87beb0c2a85d23e422"],["/tags/RabbitMQ/index.html","350e1c6bd1864dcb386d3bf10fe0fddc"],["/tags/Redis/index.html","b383d4b0c8560bd5755e53b5134b6621"],["/tags/SSM/index.html","427520db0e49b894e80fb65c27fc45e4"],["/tags/Spring-Security/index.html","e502f88e06d4abc7f0b2773da8b6accb"],["/tags/Spring/index.html","8d6aeb44067a304dc6521557983530d9"],["/tags/SpringBoot/index.html","02fad6b760248c410182ac2c3a07c2fb"],["/tags/SpringCloud/index.html","8fa731abbe64b075a8842dec3db70a43"],["/tags/SpringMVC/index.html","f42b7d91d7e9672e0abf3b9a23273d0c"],["/tags/Swagger/index.html","2f6cce80f873b113c4d79a15278d8199"],["/tags/git/index.html","765429fe826aa34b90ad95d089efe345"],["/tags/hexo/index.html","00215e5faffbe8ed66e1b785d466b3e6"],["/tags/index.html","d3fbf9ac23d36ad5f17eb9db9d40106e"],["/tags/jQuery/index.html","72499dcb833d957363caa31dc6388eb5"],["/tags/java/index.html","e8e8bffcd769dbeb1ccd5990227b3ad0"],["/tags/markdown/index.html","2d79bf1379f3dd31aaa5ee00bdb25fd6"],["/tags/mysql-数据类型/index.html","e39aaa6b735d88825b29422a49f27929"],["/tags/mysql/index.html","91513d75af0d0c95020326ac4eb1999d"],["/tags/noSQL/index.html","f78a503a4ddbf64636b04b2e0e5fc721"],["/tags/typora/index.html","a9dbe0406697b7eb8d710d60af79848b"],["/tags/vue/index.html","acfe580c194cec3a9d8d30e49d68febb"],["/tags/享元模式/index.html","06bc5f4cc116edd85abf6832199e708c"],["/tags/代理模式/index.html","d978818a3965439f2cddb869e8a6490b"],["/tags/分布式/index.html","cf883bcfc2ff6c7e26678a836e6472c5"],["/tags/分布式系统/index.html","5228d7023a083003ec0e2a8a34088227"],["/tags/前端/index.html","7554de20cb25d107cf8a94b04254a49f"],["/tags/前端/page/2/index.html","1eda98e4966f668d51a1fa56dbd5f812"],["/tags/博客/index.html","ef13bff0226b85dbd9f914946a01c2db"],["/tags/后端/index.html","b1541a7a7098ba926458803c139f466b"],["/tags/外观模式/index.html","2efb1e8c9d8053b5c57b62164da3bb17"],["/tags/容器技术/index.html","45b2c1cda406ae5efb8e4cd1857ccb2f"],["/tags/工厂方法/index.html","b3db8afd63c45a9c9658ab05b5ee06da"],["/tags/微服务/index.html","d6011c7803158c92f570cb5c14a01a18"],["/tags/抽象工厂/index.html","72d56b75d22c8ec07d0d5b3163e83c50"],["/tags/持续集成持续部署/index.html","4f5275c61616ef9ae983a9c3d27db0bf"],["/tags/排序/index.html","a9611fad6e16eece6cf109103abbd16d"],["/tags/搜索引擎/index.html","001691399a734fc6a1b20d320a6f1222"],["/tags/数据库/index.html","407c15325f85eaaa96ccfff5d16cfb5f"],["/tags/日志/index.html","e9f08c2478c861acba5879e27e4bd334"],["/tags/服务器/index.html","842a2c88067bf224cc109134074546e4"],["/tags/权限认证/index.html","3368ad3fb66ec8a1be75c1c2fbd75469"],["/tags/查找/index.html","9ab944e2d93c95e7103d19cbfdd16533"],["/tags/桥接模式/index.html","1f2684ddb4fee730eb14408db6de5cae"],["/tags/模板方法模式/index.html","4ca67f58beb50470ecf9427aa5d99d7c"],["/tags/消息队列/index.html","a0f1296e4ff92549f66dd88a983653f4"],["/tags/版本控制/index.html","da951a1fc74a001d0ec4359fcdf2debc"],["/tags/策略模式/index.html","9508fe3dd3bc02c1db1ee96f099b8733"],["/tags/简单工厂/index.html","0413f16955dc65d47e479104c5e726f0"],["/tags/算法/index.html","283c0a508926a3f1ff8bdb43b5b8b2b0"],["/tags/算法/page/2/index.html","6ef0b72153d10385fb52f5d0fdcdedbc"],["/tags/组件化/index.html","5a2a976c360c7ea140580b735f0a1576"],["/tags/缓存/index.html","a2dbd145f22b33a37d3a64a496788668"],["/tags/观察者模式/index.html","3fd71360aafbee3507da06760a9efc30"],["/tags/设计模式/index.html","71d637afbce433631c335d688bb67473"],["/tags/设计模式/page/2/index.html","5c78ad907bcae64cc9281bee7ec935ab"],["/tags/适配器模式/index.html","63ca07a319daa4c70ccb08f5549f9d85"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
