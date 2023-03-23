/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","851800d65cb305a12bbb4fde53f91f65"],["/2021/02/22/博客的搭建/index.html","fa7164c6df11b6ce3d6342f7c0165de3"],["/2021/02/23/如何使用markdown/index.html","cdf2dda362e5265f56131e74bfee7130"],["/2021/02/24/mysql命令大全/index.html","60ad4d08be3e6cbbe12dc3bf02359ef3"],["/2021/02/24/mysql数据类型/index.html","561fea3f0c1e75546db804b2fb722d12"],["/2021/02/25/Git的介绍与简单使用/index.html","782fe99eb4489fb83b85ebdfd8e2d300"],["/2021/02/27/简单工厂模式/index.html","4f1000b17c22c2b44bca710229cc1b8a"],["/2021/03/01/工厂方法模式/index.html","23053a91892c8a8c39ce4c94330f0a3f"],["/2021/03/02/抽象工厂模式/index.html","05fd793b2537a78d0ce1563f52720de4"],["/2021/03/03/单例模式/index.html","0d8e5db248026d5e463936749046137f"],["/2021/03/04/观察者模式/index.html","b5c7d48ae32cd95c617088ddff9cefef"],["/2021/03/05/适配器模式/index.html","8ff9ff0040f430e1850715a09c8c3fd4"],["/2021/03/06/模板方法模式/index.html","3e8b0d0aee064234e77aa83ef9173a4f"],["/2021/03/07/责任链模式/index.html","f4d5bce3f24ff872b8e4a3a7ec6139bd"],["/2021/03/09/代理模式/index.html","868ce45d7264fb14e2ea3623bd905118"],["/2021/03/11/享元模式/index.html","4297c9ac0502ed8160a3e027b1253aee"],["/2021/03/12/外观模式/index.html","cb887ee86e557ec07755af1168b7c591"],["/2021/03/13/策略模式/index.html","0bae61b7d91f763eabca34e50d8e83bf"],["/2021/03/14/桥接/index.html","fb9d871fecfc305fdd982185cfc54873"],["/2021/03/15/LeetCode-多数元素/index.html","2fb3fc072a9c740ad80288edbc56a6bb"],["/2021/03/16/LeetCode之汉明距离/index.html","0ac1d756c2c9a963cdb48b66ef0b3887"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","7ccd409fac9b370dfa6c620e3271a2ab"],["/2021/03/18/LeetCode之两数之和/index.html","bda13fdd35e76036f001bc6cddb0183c"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","4a693b9aaa2af02ce671082fec1f0fe0"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","53a2d853913b83be502fd6e2928c3170"],["/2021/03/21/LeetCode之有效的括号/index.html","da8c9e512a3cf30767fbd5b5860a06f1"],["/2021/03/22/LeetCode之移动零/index.html","15b8be0259312714ed1a73bea64851dc"],["/2021/03/23/LeetCode之爬楼梯/index.html","032bab9e22201fbfe57019c83910adc2"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","81a7d9e9606e87278c6684a4407738fc"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","b1b5100f4a7a2ad99480bb9f2ed64227"],["/2021/03/26/LeetCode之最大子序和/index.html","3ce16775e805e67576684a44b9b05d9d"],["/2021/03/27/LeetCode之子集/index.html","1b6318e045fc67eb37539f36b21425d7"],["/2021/03/28/LeetCode之合并二叉树/index.html","4b34cc918bd648d6ea0fce0e3f75f1c3"],["/2021/03/29/LeetCode之翻转二叉树/index.html","77095b47541360c4c8692d8ad3593884"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","e65007b21391620e6a4c6468b92be107"],["/2021/03/31/LeetCode之翻转链表/index.html","a8652cfd2b02e37e82d3530520203e82"],["/2021/04/01/LeetCode之相交链表/index.html","013dc6849336ba0a306d6adb35dce6bf"],["/2021/04/02/LeetCode之最小栈/index.html","f95fb1e096c687bcd4cabcb78db1f909"],["/2021/04/03/LeetCode之对称二叉树/index.html","1c01d921e0ddbabb678eacb4e8d356bf"],["/2021/04/04/LeetCode之环形链表/index.html","50734bb5c46ca9b5c4fed9f241027a2d"],["/2021/04/05/LeetCode之二叉树的直径/index.html","76bdb3af41278a7f83fa267b386532cc"],["/2021/04/06/LeetCode之回文链表/index.html","bb1e2c0925a3530d9adbc482a29cea4f"],["/2021/04/07/LeetCode之比特位计数/index.html","39dbd43d33f2c1737867e0eb7a7d0598"],["/2021/04/08/LeetCode之全排列/index.html","6ecce10bf37ec6592905a7c5e5e6adcc"],["/2021/04/09/LeetCode之括号的生成/index.html","facf7661ff92b9f54759d901c30f626b"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","cb76350dd6cf73eebb0e2fefc2032a04"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","af4be1b80ca917a28efa79c940644ab0"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","b779c8ab44ec8a72ac48560fefa07e53"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","cca2b92cf871a0f450250288cf416bbc"],["/2021/04/14/Mybatis/index.html","0f082b6bbea59929511a332f28735e9a"],["/2021/04/15/Spring-1/index.html","8a4d454cafcb0075463da88e2c439969"],["/2021/04/25/Spring-2/index.html","af1854583ae2a925163c3d1a3747c03d"],["/2021/04/27/SpringMVC-1/index.html","fb720e00d2cc30e5e51467111b2d6514"],["/2021/04/29/SpringMVC-2/index.html","9a1308cb173f8bea438985e8cbb1f3cb"],["/2021/05/03/冒泡排序/index.html","876215d3d67043eb44008e7498f2a0ea"],["/2021/05/08/选择排序/index.html","215fd809579252e46521911e672e28e9"],["/2021/05/12/插入排序/index.html","055df21fec84bfb5ccd9504e4b49bb13"],["/2021/05/15/快速排序/index.html","c6b44abc709174e30e1222334c9aa546"],["/2021/05/19/基数排序/index.html","2f87cc63ba302754e891292eb3b7c9d0"],["/2021/05/20/哈希排序/index.html","79f26f56b576f7f3716368abeb027f17"],["/2021/05/21/归并排序/index.html","0771cb52ae41f030f4e6ef4cba7532c0"],["/2021/05/22/二分查找/index.html","5a4dd2a9c259b8fe2a6e17efff7d13cc"],["/2021/05/26/差值查找/index.html","13dfb214bc0c61bf7e7d1f46bbc895f3"],["/2022/01/12/高精度大整数计算/index.html","f5292758b1545afece5cac1f4dee0d2b"],["/2022/01/22/前缀和/index.html","c1a82fe063cae5a5819b5c17c9bb62be"],["/2022/01/23/差分/index.html","9e88326ba5c56946b994cc56777e0e6c"],["/2022/04/04/MyBatisPlus/index.html","c4ff5213d5f8c1c12e15894f42c06eda"],["/2022/08/17/jQuery/index.html","2d05ea4b88f895a1194a863046d60798"],["/2022/08/19/JavaScript/index.html","79210a22ac5a3418931178e4fe5ed0e7"],["/2022/08/22/Ajax/index.html","535f06689f531c6df4808224e6a6ee34"],["/2022/08/23/Promise/index.html","5b174fcd28237186c0f3108bb33354ed"],["/2022/08/24/Axios/index.html","e30c7a320433a99ed6273cbf4dc64284"],["/2022/08/25/H5本地存储/index.html","7a17dc9281521bdecfc12e676d5fd8f2"],["/2022/08/26/mock/index.html","b2f48c3d20b7f738d8c444d736767d02"],["/2022/08/31/VueJs/index.html","8aae61eeb31d9c1dbb1384ba63213040"],["/2022/09/01/vue组件化/index.html","bb652f7d92c94b5d59b0ffc1e58a8f18"],["/2022/09/04/VueCLI/index.html","428224afa80ddd9e3f08851bc76d89dc"],["/2022/09/07/vue实现动画/index.html","989016f95a1f12675e88c80cd23842f4"],["/2022/09/09/Vue响应式方法/index.html","0a5f9cab95c96fddeeb36e75236877fd"],["/2022/09/10/Vue异步请求/index.html","055f7ab8afec0ab43aa48ce5617a9257"],["/2022/09/11/vue-Router/index.html","4898eaf3515578991fa31f89069393a9"],["/2022/09/13/Vuex/index.html","806d879c4d32168f6d6e6e441b7e2390"],["/2022/09/15/SpringBoot/index.html","4127a70511e55f7929e4b54436b255ab"],["/2022/09/16/SpringBoot配置FastJson/index.html","1e79226a56e87e5c325a5e49d72206a6"],["/2022/09/19/SpringBoot参数校验/index.html","ecec27e2b346610f5136945f079aa883"],["/2022/09/20/SpringBoot的异常处理/index.html","2b6cbe23fdae5aab1a8d66564a332aff"],["/2022/09/21/SpringBoot统一响应处理/index.html","042c7988267b8c2d670ab494fbb0040c"],["/2022/09/28/Linux/index.html","0330049041f7087b76165ad60d6d6429"],["/2022/10/02/redis基础/index.html","228b870d1de77fa89d2f405551c1e2b0"],["/2022/10/03/Redis缓存/index.html","7f6eb1df8ec0585545be7c0366757b40"],["/2022/10/04/redis缓存穿透/index.html","ca4c3f53b06a3f8e0fbdfcfc56965df3"],["/2022/10/13/Redis缓存击穿/index.html","b5143ae69357e4a3364c465c4d0d3936"],["/2022/10/14/Redis缓存雪崩/index.html","ad650f7ff41a2b4be2be6386b5a41a03"],["/2022/10/17/Redis集群/index.html","829c9f4d9c3f45bae26e3b44e2f420e8"],["/2022/10/18/Redis哨兵模式/index.html","137ec99491dc911ce0a1ab3c1dd09389"],["/2022/10/19/Redis主从复制/index.html","b597c634fadc5a6edcda6e4d42876c19"],["/2022/11/03/Spring-Security/index.html","b332f200ead8bb3c5d3baa3fb21dcaad"],["/2022/11/08/SpringBoot日志/index.html","bf1885b05bef27c7c12e4c35d555abe2"],["/2022/11/11/Swagger2/index.html","2d86b2dbc6ac5aea4f19071f0071b9ef"],["/2022/11/21/Nginx-一/index.html","3658a032c05722c0ef42cb39c7721cfd"],["/2022/11/23/Nginx-二-代理服务/index.html","8bca7809041e7eb814dc5087e7de3be7"],["/2022/11/24/nginx-三-负载均衡/index.html","4c9751afdadc33ed45e55fb1a26712ef"],["/2022/11/26/nginx-四-缓存集成/index.html","da36278dcd5a9f61508c1b973bd46075"],["/2022/11/28/nginx-五-动静分离/index.html","d0f96d24ff5d68a0c77ae20f0ba39df4"],["/2022/11/29/nginx-六-制作下载站点/index.html","d11bbb808b2336bf4b2b9b1d2b9f97dc"],["/2022/12/06/docker基础/index.html","f8d67fd9d4d583165d90204fe4db5895"],["/2022/12/09/Docker高级/index.html","0a6b9cd1177fe212c63fb241366a64be"],["/2023/01/04/MongoDB/index.html","3ebbbafa311823b5cb26f454207b98ed"],["/2023/02/05/消息队列/index.html","805248aac375f43cd38410bcee060581"],["/2023/02/12/RabbitMQ集群/index.html","58310349f7caa22deaab4f6603d6eb7e"],["/2023/03/10/CICD/index.html","e48b21c5321bbac440e46827f232c16b"],["/2023/03/11/ElasticSearch/index.html","e96749aef655e9400068372baba32f1b"],["/2023/03/12/ELK日志平台搭建/index.html","eb570698d1a69022847e0b841c56a3ab"],["/2023/03/13/NIO/index.html","ee47738dc84904d34ab069e7eb3b5383"],["/2023/03/14/Netty/index.html","1059a9c671ef175271a33760cee453a4"],["/2023/03/15/SpringCloud/index.html","2254b3dc16519d9c5f048b6ea6343a23"],["/2023/03/17/分布式系统认证/index.html","0f072344e84d1876d7bc44129b504a44"],["/2023/03/19/JVM概述/index.html","21faefc8f2a4d70e6f0cb9d5962c1cf9"],["/2023/03/23/类的加载过程/index.html","acbe26b98b5624fffdad76e5e8493a17"],["/404.html","1a38e0e1a7fa4fa653a42a7a04d16f5b"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","a8d34d645ca70eefb5645622e5ee668f"],["/archives/2021/02/index.html","8f0bd5981421abf00a26bea3af07e35f"],["/archives/2021/03/index.html","0c7dedc30afa2d38799ed21b1d8713d2"],["/archives/2021/03/page/2/index.html","14dcb957efcf1298e7ea1fa05e3471c0"],["/archives/2021/03/page/3/index.html","e0f093fa535d28df8854a14c659c79bc"],["/archives/2021/04/index.html","b0dbb80fdeb1cc74c8bb846726248503"],["/archives/2021/04/page/2/index.html","b2d64564209e2b005a709e5b998a1e75"],["/archives/2021/05/index.html","ddb6643d87678dcfd7dc9716c8b005a8"],["/archives/2021/index.html","ca55f845962d5e99a6e58c34e87565b8"],["/archives/2021/page/2/index.html","941ea464f62c6bdfc073d6edca1d6ce2"],["/archives/2021/page/3/index.html","5ac294178f0e6dc4e9c9b846ceec939d"],["/archives/2021/page/4/index.html","8202f9212d59ac202368c2cfc6304a22"],["/archives/2021/page/5/index.html","9ab4932bc93d5eafa22ad4b252ab21dd"],["/archives/2021/page/6/index.html","9cf006cd7a36b72d9747b0c49fc9b8cc"],["/archives/2021/page/7/index.html","24b21dfb91836e93df4dd241812d49db"],["/archives/2022/01/index.html","cc5db1191beea2da108b6875321704eb"],["/archives/2022/04/index.html","daa844eba866ea2985c11b3213b83e48"],["/archives/2022/08/index.html","515435721339e541ec7730cfa9ae9624"],["/archives/2022/09/index.html","49accd1d7f44693e9d773504494593e7"],["/archives/2022/09/page/2/index.html","f6c32d55f0c8a0abf7ef230c051a5290"],["/archives/2022/10/index.html","c5f5dbfbd1cb84487150b210532967e4"],["/archives/2022/11/index.html","89dc3ad37cb82cd79e16220355f5b8a8"],["/archives/2022/12/index.html","0180690c8a9128d945d8bc03040f11f4"],["/archives/2022/index.html","988839d5e83428f5ca0da5dadfea0e08"],["/archives/2022/page/2/index.html","2ee0b6f1e55c1ece2bf1f0be8e6b6865"],["/archives/2022/page/3/index.html","d83f9afeec5b0b35edf7e137274a73fd"],["/archives/2022/page/4/index.html","3139abd94f0dfad9e31bec6d30bbd2e8"],["/archives/2022/page/5/index.html","c46a4e5df623dc9f3af1e587f8c4893a"],["/archives/2023/01/index.html","00470499b4db8ca660f671082449801c"],["/archives/2023/02/index.html","dd435ab3fbebc57ebe6cb3cbe2f714f7"],["/archives/2023/03/index.html","3354e91d653d55aa8debbc3bf0fbae1a"],["/archives/2023/index.html","f15991ca972b5ea2bd19655af1a7d710"],["/archives/2023/page/2/index.html","178eeee5dc4f57806df8cec1d49499e1"],["/archives/index.html","ab9fbddf627e33d2bd482adbaf01b480"],["/archives/page/10/index.html","a4b3e7493742b783afe86c1fb781ac69"],["/archives/page/11/index.html","d2fac0367ebf6f169af514634626ebaa"],["/archives/page/12/index.html","3e45dc4f2b2608227bd8e825e7fca20b"],["/archives/page/2/index.html","f9b56d7dab637388ad24899bf7234ed8"],["/archives/page/3/index.html","23e698cf2c6290e4ad4a84db61861728"],["/archives/page/4/index.html","d299114a8cfb7c00f36f4d251d90a044"],["/archives/page/5/index.html","bb1c6183424359caffa48bed646ee9f0"],["/archives/page/6/index.html","cd9547d02b98b783a1f9429752d35bcf"],["/archives/page/7/index.html","cfc38a94781a954551691e95b74ffe82"],["/archives/page/8/index.html","ecbba8844e18fe8e45299ec470231174"],["/archives/page/9/index.html","980116282c67e39c17070f0ffc145718"],["/categories/CICD/index.html","d3fe4a4bdef3347e15c72640c57b7a55"],["/categories/Docker/index.html","674eb504c5d2c6e47d0d4dddcbef7119"],["/categories/ELK/index.html","3c30d237aae6cbce2a68ed971b2ca257"],["/categories/ElasticSearch/index.html","a51395cd4de8b7de8c32291a24908cdf"],["/categories/JVM/index.html","9493fe5255b9bc314cd9e6793d4e1c3c"],["/categories/LeetCode/index.html","630a6f7eb92bba4b156fcac05d8c5a76"],["/categories/LeetCode/page/2/index.html","6812447879e880b625de2107177fe760"],["/categories/LeetCode/page/3/index.html","2525920bc255eb3c0002cb46fc463aad"],["/categories/Linux/index.html","1577bb2ce12a7002628f833dd24fc2e6"],["/categories/NIO/index.html","dcff0196c579a663a5ea37e33176b364"],["/categories/Netty/index.html","017c5fb531054dfeeeefdae9e90e3518"],["/categories/Nginx/index.html","1a2cfe2635093c50e46c8c549d1d6688"],["/categories/Redis/index.html","5c53be2860d4c93adb267ada277cfe74"],["/categories/SSM/index.html","2887181a6221b1b27673ccb0b44fbc56"],["/categories/Spring-Security/index.html","27290ee3e5f5780c0d25f2ca3fe27691"],["/categories/SpringCloud/index.html","8b7a206a0bafb79fc7af80554e424da0"],["/categories/Spring框架/index.html","16e948f89f6dc9a89310737e6c1bd22c"],["/categories/Spring框架/日志/index.html","1d76610c6b3ec538ab9ced52f35e220b"],["/categories/Swagger/index.html","54b81a01e9a0dac05c0f3cfd13c46ff1"],["/categories/Vue/index.html","25993801027255b1219a189adad47c02"],["/categories/index.html","693f424abe6c5090be3c0217c08ef2ed"],["/categories/分布式权限认证/index.html","0c506c15f5e0973e14e84df9358bc796"],["/categories/前端/index.html","5fc9342a1faf64689b1a5de88b110f32"],["/categories/博客/index.html","61044d3035a34581e41deded54d05e18"],["/categories/学习路线/index.html","1154332c9050bbefd2887507c37151fd"],["/categories/工具/index.html","b5c6488467676b4140e02cff9f70bd78"],["/categories/数据库/index.html","03e36f47aaa7c7c2c9f7c2cd0dc213c3"],["/categories/消息队列/index.html","6c392ff80198bcd5e381f1015ee79888"],["/categories/笔记/index.html","a74747585c09c4715ef7cd76addaf829"],["/categories/算法/index.html","0ad734c6f3b6992aff1bf26cc1a1d301"],["/categories/算法/page/2/index.html","b59974d31b3e17ec79c70a545118d563"],["/categories/设计模式/index.html","584e20b52657fa1d57c4d06552c7885e"],["/categories/设计模式/page/2/index.html","aa32d1674687eb232849156bc54cf6c0"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","c5a2e6e4668bc449f841e65c54fcf7dd"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","0fe9d8163c6e5481eb079e505e4a8e2d"],["/messageboard/index.html","9e743dda2b61328df4a7a6d485a5d290"],["/page/10/index.html","bd6fa558b2a8fe235108bfb14bde737a"],["/page/11/index.html","0ae3887f1f216a56769d85664d551840"],["/page/12/index.html","01115ac766935ed505bf6ab934d82de9"],["/page/2/index.html","60d1a209a35779424aa6bcd62a4b4277"],["/page/3/index.html","974c9a019e7c7d1b25c88df5a5dcf3d6"],["/page/4/index.html","44591d15c55b965c705ac83cabc35a6a"],["/page/5/index.html","4dde8d1f2d1c618387f699c056d47798"],["/page/6/index.html","895874f279f7923e12a1c67dc283f79e"],["/page/7/index.html","04097513a151bfa0975434ff43bbc1bb"],["/page/8/index.html","ff423e879c5b637e475008b38b87163a"],["/page/9/index.html","b04b2b4fa2ab56858f978594e1b358a4"],["/sw-register.js","254e883682cc295acab21b08f123aa4e"],["/tags/Ajax/index.html","3482578bd06c46288607f5e7b243bfd4"],["/tags/Axios/index.html","8eb177f698650aa5019ca588cecc3fa4"],["/tags/CICD/index.html","bce5d2383c9cd30712fda06e37442217"],["/tags/Docker/index.html","2f7381accaa35715ee994dab16500a49"],["/tags/ELK/index.html","b8a02e65483b90e95dcc430947231726"],["/tags/ElasticSearch/index.html","24bb1993fa33a3c7f23964dd3b708086"],["/tags/H5/index.html","b6de7a6334b5b86efbf771ce871cb43b"],["/tags/JVM/index.html","1971a8a91a94e518ce1b513621f4b9c1"],["/tags/JavaScript/index.html","d7949b9362083de0dcbacc971d24a4d7"],["/tags/Kibana/index.html","b1b632b15c4151b7807f1ad2604eb69a"],["/tags/LeetCode/index.html","93d098abd264b11ab83591d078d33f8d"],["/tags/LeetCode/page/2/index.html","000026716bd9aed174ccfd645337d0e8"],["/tags/LeetCode/page/3/index.html","b49294026da7191d40098e62d6623ec7"],["/tags/Linux/index.html","889b74bc8f820b48175865b6946524ca"],["/tags/Logstash/index.html","421c8c7638563121dc8504fab443555f"],["/tags/Mock/index.html","fb9de8b2f3056b8b4a6690b547300174"],["/tags/MongoDB/index.html","f5fd0a9bdbc69c182e8a92834cb9caa5"],["/tags/Mybatis/index.html","89af1ea27958b7bab5e50252a5fd2dc4"],["/tags/MybatisPlus/index.html","dbf989eaaa82fc0a8e26871f2fe2aa79"],["/tags/NIO/index.html","c16ad66c6130c8e0f40ed2deab910ab2"],["/tags/Netty/index.html","8817f5504753625a0570056bfbd28e51"],["/tags/Nginx/index.html","479879d89bfccb82544ec05373d8d45a"],["/tags/Promise/index.html","96716f2c697606fcb6a768f9c54c1af9"],["/tags/RabbitMQ/index.html","58e2f6710b0ca3a70f8f7f28966fda61"],["/tags/Redis/index.html","f20e6446abe1c1adedddb94dfd066d89"],["/tags/SSM/index.html","9b42c843f09fd154e691afaa9700e848"],["/tags/Spring-Security/index.html","dcb79d029d378b34b2afbd629b519fc0"],["/tags/Spring/index.html","e119d4f526fe43501a85d46835b50617"],["/tags/SpringBoot/index.html","fff42cf46e0a4d3a5d96d13519439b42"],["/tags/SpringCloud/index.html","352e2ff48da8c82dd4a1150fe5a794db"],["/tags/SpringMVC/index.html","35f0b868c4af0dab21734c29ab667bad"],["/tags/Swagger/index.html","f82fb79eb8f121bce2e357fa2628fe52"],["/tags/git/index.html","51961af9af7d340d4ba49c1435c366c0"],["/tags/hexo/index.html","537c2072ce19c30eec8c70db9a835df3"],["/tags/index.html","6bcc7ab576763df492b9006eefd06ace"],["/tags/jQuery/index.html","8a273aa73eab5eac0eda2a5ec5f4c24f"],["/tags/java/index.html","5a68a41f41ad34515e724b9bb9afb453"],["/tags/markdown/index.html","abe1c8b6c6d3e7994904273fa490e277"],["/tags/mysql-数据类型/index.html","cb18e038f013b25af5bb478821fa462c"],["/tags/mysql/index.html","4ddb135ef96e27c659c76d6b536cb806"],["/tags/noSQL/index.html","bce97f5b75e242a6ab859f3971214af6"],["/tags/typora/index.html","1f2e158ef194824df94f32ad352370b4"],["/tags/vue/index.html","9bd04367f2a6be3d7cb3bb9eefbd42b8"],["/tags/享元模式/index.html","c285ef76eeb8c26764d0e50c68509cb4"],["/tags/代理模式/index.html","1a6ce0147a1e4ac45a1dba0992dc71cf"],["/tags/分布式/index.html","7c0b97729f5ed5c2057be69948111ab2"],["/tags/分布式系统/index.html","1e21547611475abe7da86385d9b5bb6e"],["/tags/前端/index.html","0448503920bba91fcbf23040ac3a15e9"],["/tags/前端/page/2/index.html","eb6eacc9d1df4ef7ad62a0f22714862e"],["/tags/博客/index.html","af51c15ae2d555f696f3838fe8d2d6f5"],["/tags/后端/index.html","0940c2ec57efd2f7b416d172ce7597a1"],["/tags/外观模式/index.html","06cc252971523d16b612e8fa87d8f707"],["/tags/容器技术/index.html","92b9727c7670f28fd360eca050729b72"],["/tags/工厂方法/index.html","25ad65d6c43f4948599facdc3e31a46f"],["/tags/微服务/index.html","30d38c46aaeae86ae3f7ceacefff345a"],["/tags/抽象工厂/index.html","bb1e26bb79eb037d874db7789171d5ab"],["/tags/持续集成持续部署/index.html","74cf7d1891fdd02e2b2acd464790fed9"],["/tags/排序/index.html","b8f203b8392bd87149c2f43d9ed9ed7b"],["/tags/搜索引擎/index.html","81152c8f43a27498d533c5405b764bb0"],["/tags/数据库/index.html","d3c07e6b8f0364493c901ccc16af5166"],["/tags/日志/index.html","04ac6136ce895fe27550647494c58ab9"],["/tags/服务器/index.html","67f127680c08c78c0bd6e583ba55085e"],["/tags/权限认证/index.html","0061e446b0d06384709400cf85b10a85"],["/tags/查找/index.html","fd3570a3e8307e22b873e2b944e046b9"],["/tags/桥接模式/index.html","ca106097db057f9aedd1f81b527d7272"],["/tags/模板方法模式/index.html","1fa22c810072851124857d12216e00f0"],["/tags/消息队列/index.html","29791759095b72fedf89c69e90834d14"],["/tags/版本控制/index.html","9d15caae8634ba4a0b137b9d1f999a28"],["/tags/策略模式/index.html","91a50229307e6b1652cbdf019092a54d"],["/tags/简单工厂/index.html","11bdd5d3f587170c49e88d7934d681c8"],["/tags/算法/index.html","29bca987cbebd6ebe09a4ee93ec9158a"],["/tags/算法/page/2/index.html","6ee64cb1161e2e9f22417404032a6563"],["/tags/组件化/index.html","eb095f5f39a207f0007ccd5a15c379e4"],["/tags/缓存/index.html","9c840705516ad3a756e5b8c9760bb972"],["/tags/观察者模式/index.html","f02c01c5693da86a5357ec86029d5f31"],["/tags/设计模式/index.html","29c719f4530ad117e37999b76518abd1"],["/tags/设计模式/page/2/index.html","0ee454a946951967b4c3ace303442863"],["/tags/责任链模式/index.html","e8e335b40bcb173371df1afdd94b40fa"],["/tags/适配器模式/index.html","77f6d4ee0762cd38627cbeb3ca8bb177"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
