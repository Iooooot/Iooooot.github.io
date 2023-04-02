/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","2a419c148685caa6d34f7304c0109ab8"],["/2021/02/22/博客的搭建/index.html","c49de0dae8b7640149cdeadc4a68612c"],["/2021/02/23/如何使用markdown/index.html","bbc062889c2511c105e1a8c6267ae2e8"],["/2021/02/24/mysql命令大全/index.html","3e204a563c9b7a44fb8df4c206026153"],["/2021/02/24/mysql数据类型/index.html","92d4be511fb1baacb24de89429700ff3"],["/2021/02/25/Git的介绍与简单使用/index.html","4b560dafe082b5d07b28b4c73b0caacc"],["/2021/02/27/简单工厂模式/index.html","0bc611450a3bdfdeb7a896c46256b978"],["/2021/03/01/工厂方法模式/index.html","5a893164632752249f0ebcc8478157b0"],["/2021/03/02/抽象工厂模式/index.html","82dc7f2912e78bc5c53f54a89cbbdf2e"],["/2021/03/03/单例模式/index.html","aef3d476b69b7a831ef1a1dd767ce21d"],["/2021/03/04/观察者模式/index.html","8341cf4e6974013b3f041581d187d40e"],["/2021/03/05/适配器模式/index.html","5559b35faaf75a45285430dff4690ee6"],["/2021/03/06/模板方法模式/index.html","fc51bba588a748964d957dd014304d2e"],["/2021/03/07/责任链模式/index.html","121a56816c39c39d51f1c769735351a3"],["/2021/03/09/代理模式/index.html","75bbfd3762613a3986cd27e865da5464"],["/2021/03/11/享元模式/index.html","83d097274af3395fc9368b661c16c1e7"],["/2021/03/12/外观模式/index.html","114ff1523c672fa61d70d6d3af312925"],["/2021/03/13/策略模式/index.html","a9ae8f20853f23ac6171279cb0935d41"],["/2021/03/14/桥接/index.html","29f433e64f395c819ded66bf15eeda8c"],["/2021/03/15/LeetCode-多数元素/index.html","32f6d36c35c10f5b1589a77103a5d633"],["/2021/03/16/LeetCode之汉明距离/index.html","682204f19bf639a3b83d49a3e9bcb306"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","341378dcf1f6a0227c0566fe4af22fbe"],["/2021/03/18/LeetCode之两数之和/index.html","24ff8fa48cfa4e6ee8473f4c1b2eedc7"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","9e40c5471669c3571ea21941318b8ab1"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","fda26b72b30c0d853f5dcfa64ed07129"],["/2021/03/21/LeetCode之有效的括号/index.html","f6291f7772434e8a97c0effeb1b69e3b"],["/2021/03/22/LeetCode之移动零/index.html","78904eb7f2a632512a2b76044c0dbdc3"],["/2021/03/23/LeetCode之爬楼梯/index.html","8339335907874d41381f0d382973cbae"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","6b090126a12818bd2b3e99161b2f7a17"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","ea43d7355d053f34350ca7644650f1eb"],["/2021/03/26/LeetCode之最大子序和/index.html","374df8136f3aced757e35dadf7ce664a"],["/2021/03/27/LeetCode之子集/index.html","6850160a0ca47468c80a1032af45799b"],["/2021/03/28/LeetCode之合并二叉树/index.html","cbc9dfb399c391da2a9a920ad6c8a440"],["/2021/03/29/LeetCode之翻转二叉树/index.html","d90e8d731c141096b4d2bb0106984df0"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","0b5f265cb60faa6e6a50155aabfb73d3"],["/2021/03/31/LeetCode之翻转链表/index.html","af739fa18a743775026c4d31722c6063"],["/2021/04/01/LeetCode之相交链表/index.html","9b69035ad98df7400a9fbbcc793cd6cf"],["/2021/04/02/LeetCode之最小栈/index.html","055295fafd20eb8f48fa3287a9d80653"],["/2021/04/03/LeetCode之对称二叉树/index.html","842ef8450b6cf3c6384935aaad1d23f9"],["/2021/04/04/LeetCode之环形链表/index.html","66d63092221fd04d917b248bf8eb0d72"],["/2021/04/05/LeetCode之二叉树的直径/index.html","8716aec9548485c1e884443750100817"],["/2021/04/06/LeetCode之回文链表/index.html","99dc6a272ef309cbd4a8b3e9444d0449"],["/2021/04/07/LeetCode之比特位计数/index.html","b1b2c2e551774121f387f2f5ca52a08a"],["/2021/04/08/LeetCode之全排列/index.html","6925e639445b964d12afb661e0c7b6f1"],["/2021/04/09/LeetCode之括号的生成/index.html","b66152ffe528d9181fbdba045e55e715"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","6d4070a8fdb9179234b74aabbde4408c"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","3370905a4c9ddb37b2c9aec75c8286c9"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","5cf77c69303cb31dd53688868cfb1c47"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","bd5e94bc36d2072ef730db321c51d185"],["/2021/04/14/Mybatis/index.html","d04ae1c20aac80b96bafba7a76d11a4a"],["/2021/04/15/Spring-1/index.html","aea22c622c2d7afed21873d2c21bca22"],["/2021/04/25/Spring-2/index.html","3f6fdd67354db7b58aab194e5906d049"],["/2021/04/27/SpringMVC-1/index.html","3ad300e177b8e436ccd024a6f3a3fd4f"],["/2021/04/29/SpringMVC-2/index.html","da58dabf12662a31d9d2d2aa6f8f446d"],["/2021/05/03/冒泡排序/index.html","723709a9541c313160628eeffe0ffb72"],["/2021/05/08/选择排序/index.html","27f9adab653c7548551b0e9d9610dd7e"],["/2021/05/12/插入排序/index.html","95b18e69b0b0d8455eb9ed6c372b0567"],["/2021/05/15/快速排序/index.html","1c2c0ceb3d37d5132af63f069fa766a2"],["/2021/05/19/基数排序/index.html","d5f9e2abc23dc267b826d68258468de6"],["/2021/05/20/哈希排序/index.html","8244af7f15e3209b25f3007c55fbc192"],["/2021/05/21/归并排序/index.html","6a6d98eec7f63bb2db67b01b7cd4f60d"],["/2021/05/22/二分查找/index.html","8c4f5d6d72ffdf8db4f1d2185e170373"],["/2021/05/26/差值查找/index.html","f50989c64ef3fffad5945743a9b0f3d5"],["/2022/01/12/高精度大整数计算/index.html","77f4e92ec24847e48b32f706be0c97f2"],["/2022/01/22/前缀和/index.html","765d659b30343b988f11251e9d497ed6"],["/2022/01/23/差分/index.html","88e65461b137177cb7ae45a4dbfca2c1"],["/2022/04/04/MyBatisPlus/index.html","7146a13aab03fc92f034e7904adadda9"],["/2022/08/17/jQuery/index.html","cbd9dcfd15c8c311210fc06dedbf00a1"],["/2022/08/19/JavaScript/index.html","cfc9e4b2c37c7d0b555a99761f705824"],["/2022/08/22/Ajax/index.html","c9db113cf8b943b7a0d7373ed633d46f"],["/2022/08/23/Promise/index.html","c2baa37897413c7921ac159fca53e14d"],["/2022/08/24/Axios/index.html","a1b662d024c24ac819961f99c939095b"],["/2022/08/25/H5本地存储/index.html","960779c5674590b9352ad9f6a4a2c25a"],["/2022/08/26/mock/index.html","4e8681aae38d1731afbe0960bc2bade8"],["/2022/08/31/VueJs/index.html","fc6f3c44aba53657af817c1496cd94cf"],["/2022/09/01/vue组件化/index.html","6002f9f8df26272761317bbb05be58b2"],["/2022/09/04/VueCLI/index.html","fb0df84b5689b0e37f7e4cb422a9ddf0"],["/2022/09/07/vue实现动画/index.html","34265c531a982f8c565eff42a0612f52"],["/2022/09/09/Vue响应式方法/index.html","cdd9e9f15017892df5b1eca1e844b7a6"],["/2022/09/10/Vue异步请求/index.html","4f10ef8529054bec422ec9a47106464d"],["/2022/09/11/vue-Router/index.html","dfae253d76190adbb077ce7147bac0b1"],["/2022/09/13/Vuex/index.html","4c974dd5aa66366835093afb5a64cd98"],["/2022/09/15/SpringBoot/index.html","ce9275937075a4fec4c20adb07483551"],["/2022/09/16/SpringBoot配置FastJson/index.html","50e045d55240a5f70062d7924cd40689"],["/2022/09/19/SpringBoot参数校验/index.html","7a8822d1ebd887e0f084f78be6c78d23"],["/2022/09/20/SpringBoot的异常处理/index.html","dfcd6800b4710a0922505f2376a35cdd"],["/2022/09/21/SpringBoot统一响应处理/index.html","8f66de0e7f23b80e621ddbfa4d54eae5"],["/2022/09/28/Linux/index.html","47f6875b78cf7cc94409e3eccd04f6bd"],["/2022/10/02/redis基础/index.html","f3f16100cae67a3865cd324c64de7148"],["/2022/10/03/Redis缓存/index.html","e0b3b7126418dbbd4a7486b208e31bc2"],["/2022/10/04/redis缓存穿透/index.html","541aa9865573f8e0d9987a4e523c4936"],["/2022/10/13/Redis缓存击穿/index.html","f394b1b0a6edc7d53a62540ce76820fe"],["/2022/10/14/Redis缓存雪崩/index.html","8fc435e57ffbbf10c6fc66e9c62fd190"],["/2022/10/17/Redis集群/index.html","fc90aeecd3b38c37ef08da491c8f7b82"],["/2022/10/18/Redis哨兵模式/index.html","3a40215ca47bd306234faa2e584df72c"],["/2022/10/19/Redis主从复制/index.html","a8a648d4bc020b271db873d9e7aaca3a"],["/2022/11/03/Spring-Security/index.html","3d61a59090a6d36c5581bf61e7318807"],["/2022/11/08/SpringBoot日志/index.html","88421e8bc378d5541432e605197432a5"],["/2022/11/11/Swagger2/index.html","b9aba17d0054a1c6f8c0d08e5fe5dfda"],["/2022/11/21/Nginx-一/index.html","7f22be097beb97e4f7c985505613d558"],["/2022/11/23/Nginx-二-代理服务/index.html","5f99cecdd35b00679df8188212ae8c18"],["/2022/11/24/nginx-三-负载均衡/index.html","1ab2086035f2d7182f9a78fc531cdc87"],["/2022/11/26/nginx-四-缓存集成/index.html","e9755ae469fac628a9a07e52a4c9e884"],["/2022/11/28/nginx-五-动静分离/index.html","4180f44780bab41add18f6bfb385c4a5"],["/2022/11/29/nginx-六-制作下载站点/index.html","aeac7a10967e0bc39f7b5b42d6e1e544"],["/2022/12/06/docker基础/index.html","34d823c137d3e80bd81bbb9319945360"],["/2022/12/09/Docker高级/index.html","18ee00d64c2268c444a78e624b9cdcde"],["/2023/01/04/MongoDB/index.html","faa108b8953831edb1b032920899582c"],["/2023/02/05/消息队列/index.html","789a63ecdb70247606fe22acd3c809c7"],["/2023/02/12/RabbitMQ集群/index.html","60c41b7c5911b6273d4f81d6348a4448"],["/2023/03/10/CICD/index.html","8297b10cc81d8e725e1f675a2aedbc44"],["/2023/03/11/ElasticSearch/index.html","22e2760d426db6fd7bbb65fdc8c20331"],["/2023/03/12/ELK日志平台搭建/index.html","347befb51c9e36acb1101164f9ad3a0a"],["/2023/03/13/NIO/index.html","fa29c60365d496ca5af383d0812c48bd"],["/2023/03/14/Netty/index.html","9d49acb6df29ba7d7e0e7ef3731dd742"],["/2023/03/15/SpringCloud/index.html","388ae88b8f7cadc8b4692122ed31194e"],["/2023/03/17/分布式系统认证/index.html","c100dca1ce0802c6e5c43fe72024b3bf"],["/2023/03/19/JVM概述/index.html","0fa733167ab30c1af5781b48cc77bcf9"],["/2023/03/23/类的加载过程/index.html","4c6a7e07515d8cfe434b50da0fb96f3b"],["/2023/03/28/对象的实例化/index.html","89b157559daffe6fe2978d2b67376a27"],["/2023/04/01/运行时数据区/index.html","9f9098547c8a72f8c9527bbf9e52f3c1"],["/404.html","f0de625154e3d88b3a2a1581cbca462a"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","6dd137af403512514d9a5a0cba3d7ca9"],["/archives/2021/02/index.html","59f406a93adadfb24a5ae1e1d03629e2"],["/archives/2021/03/index.html","3a91b9ac5ca7e5a451f36a0f1a21760b"],["/archives/2021/03/page/2/index.html","05122d8cd49a66061c1d6b0c000483e7"],["/archives/2021/03/page/3/index.html","6198f44c24f31376713918dfb8943317"],["/archives/2021/04/index.html","250883a139870ae194bf945a02be105a"],["/archives/2021/04/page/2/index.html","45af48d34afa719403bf77029cc91cfd"],["/archives/2021/05/index.html","f5c62c00a40c0b91f4327514eadb1b16"],["/archives/2021/index.html","80ee4b61f140d3f3164d189fc6b56c15"],["/archives/2021/page/2/index.html","d3e1c0be99ba428dc15214298f2dcd44"],["/archives/2021/page/3/index.html","fd10135c7c58e9e48c6b75e5013075cc"],["/archives/2021/page/4/index.html","e13c47a196fbb4df9f6342a1cd74534f"],["/archives/2021/page/5/index.html","f03eeb0fda6c3e560feb7e59d057d882"],["/archives/2021/page/6/index.html","b6ee1e9cd0373e6b82e725ff6ec8b0f2"],["/archives/2021/page/7/index.html","f67287b157409ca242562f5aa33c5f4d"],["/archives/2022/01/index.html","4ddc298654a4fb6bbac77e39345b8297"],["/archives/2022/04/index.html","1c58253adde438aea8d636c55ca588d6"],["/archives/2022/08/index.html","a63a3f38493624eefc5ac9211c66cdcd"],["/archives/2022/09/index.html","56132e1b281d98d5e84a392973c05a47"],["/archives/2022/09/page/2/index.html","e7e59b9557d4ba49cd56299c922f22ea"],["/archives/2022/10/index.html","4e0c798a90ec2221bb4b1ca5fa6f77f7"],["/archives/2022/11/index.html","05b4c65f38908a9022b588c93e26abd1"],["/archives/2022/12/index.html","b69038f7d670b18ccbdf7c39df001225"],["/archives/2022/index.html","efc90283b1e3a53e8e7374c7a4608e4f"],["/archives/2022/page/2/index.html","e54998e93458604f6f69340dc52b5fbb"],["/archives/2022/page/3/index.html","05225ffd692576bb2b64eb1b1bbbeccf"],["/archives/2022/page/4/index.html","04441580b22a432d05f068173dce2c03"],["/archives/2022/page/5/index.html","f5ac17a42a601f2434faed700ca88c8a"],["/archives/2023/01/index.html","c32fe13f151118b63b05dfbb87976946"],["/archives/2023/02/index.html","5b377a417e66d00b207e554ddf5e6f77"],["/archives/2023/03/index.html","d66392c165b304021bb97c1f93bd7ef2"],["/archives/2023/04/index.html","96f8302760458f085c2439930d7f3d62"],["/archives/2023/index.html","84042cc12f3bbfab6e41917e856aaf3a"],["/archives/2023/page/2/index.html","280e4d9888c250797b271a1aed044821"],["/archives/index.html","db2aa37e33445cc683e7c38090ee0902"],["/archives/page/10/index.html","363af1a3c9378bc51d86d1de5b10513d"],["/archives/page/11/index.html","752b027461b1e1567cde33aacdc793c4"],["/archives/page/12/index.html","a0ca682fa04e93c3c5fa40b85cbd3a58"],["/archives/page/13/index.html","67d815bfa67f462e1522e6b912cba555"],["/archives/page/2/index.html","23aa0de7d2ff5c1077dddacdbe479387"],["/archives/page/3/index.html","76d805e175fb56709e4c9064e4206b56"],["/archives/page/4/index.html","0425a279bdc09dbe5756e1e8ce904752"],["/archives/page/5/index.html","cb4854bcf778404895c8f712336bb388"],["/archives/page/6/index.html","3a9f1865d078aa099dca662949426146"],["/archives/page/7/index.html","cfdc03570156ce002e37e1e25bd79150"],["/archives/page/8/index.html","9fff39a7df68a007bdac3c162c7240d4"],["/archives/page/9/index.html","73e8b0d50b962ae9f54dbe9b874e7f12"],["/categories/CICD/index.html","49b372ad3afca047406c5c97879f5bf0"],["/categories/Docker/index.html","d0cd821617be051cd9820eea0268081a"],["/categories/ELK/index.html","7594d3f793617b17fb8cce6adf8b70b9"],["/categories/ElasticSearch/index.html","7f2bc73ed45f20efa9a655245611280f"],["/categories/JVM/index.html","27642733f9e6c94538341979839310d5"],["/categories/LeetCode/index.html","75b2d8cfcdd986a91f6b24123efaac24"],["/categories/LeetCode/page/2/index.html","d0107cfce933dacbbe0fbfbabad68f97"],["/categories/LeetCode/page/3/index.html","bd1570eb2c20232ca22ae56fbd6ea1b0"],["/categories/Linux/index.html","f50025f876722a444e5f9b7b70b5887d"],["/categories/NIO/index.html","0bf8b6a7c7cb94f867dde48d2b0ef7ae"],["/categories/Netty/index.html","c39c5ee9a4433765be83525e8b346103"],["/categories/Nginx/index.html","94d46d299cc51feb3967bc562e16180f"],["/categories/Redis/index.html","a120c99290aef3c78277a3ecdf6601db"],["/categories/SSM/index.html","4fe71081888beab6e535bce60ba1e077"],["/categories/Spring-Security/index.html","bc3eb2fdc649ec5680746b493c6ae916"],["/categories/SpringCloud/index.html","a3ac536e29688e02e0e90d8c6f30e209"],["/categories/Spring框架/index.html","773dd53f350eed8522f1dd44dccb3d95"],["/categories/Spring框架/日志/index.html","b60cb7690adfab89c8197bbaea4bac75"],["/categories/Swagger/index.html","48634749d4d397256b15d014c17c3649"],["/categories/Vue/index.html","3afba0f1c6df3ff84f16d3dbb8db8397"],["/categories/index.html","8b55363b50ba53b6c4d8477e2198f84d"],["/categories/分布式权限认证/index.html","7dc1f6b23af83a72209d911ee74d9405"],["/categories/前端/index.html","0db7cdb24edb2c20688e410449d29643"],["/categories/博客/index.html","3380667006c255ab0efeef06c502e0ee"],["/categories/学习路线/index.html","dfd4afee6f9680af00614a5631b1a750"],["/categories/工具/index.html","7c3d198ecd5869457dea421186eb4f77"],["/categories/数据库/index.html","09a0f74628f5154d03376296444ecda2"],["/categories/消息队列/index.html","6073904053c04c44008b4b9abb059b8c"],["/categories/笔记/index.html","09ab1d5103845fc1b31e903c39b16133"],["/categories/算法/index.html","c764817166fced6a09ef9908bf3b1374"],["/categories/算法/page/2/index.html","16589d45443b79618e828f52be2fe1e0"],["/categories/设计模式/index.html","263833f8888e53c6fe817654e24a7f80"],["/categories/设计模式/page/2/index.html","ad4cf2d314afa64135466ef568df1df7"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","e74105f1e580339f2804ff7addfb9599"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","a63180f88cee857772c5de621515d6b1"],["/messageboard/index.html","52c97bfaa40e43f966011bd6775ba20b"],["/page/10/index.html","90c2c05e031f7becdf15c0413a13aca2"],["/page/11/index.html","e91a1f31e18615b4cd0efa68064370bc"],["/page/12/index.html","31c2a50a201bbad6a8afc4f8d12088e7"],["/page/13/index.html","739ca094989fb4cd69412a3f573067c8"],["/page/2/index.html","2aa07f1eb86e7bce3b35897f38a03791"],["/page/3/index.html","c4c9b274fca13e9ab8b0855e7e20d8f9"],["/page/4/index.html","6cf95cf3b681bf774fb7dc1e81bdf082"],["/page/5/index.html","d862977ea249ff1bd9d8911aee871bb7"],["/page/6/index.html","670e759a3d07f52474cfdd09145133cb"],["/page/7/index.html","d3eaa98d4964ea84df521c851459f9d4"],["/page/8/index.html","1514d1cff77cdd8ee0a422794f28ea06"],["/page/9/index.html","310b2939c285cd1c1ee511c92351a365"],["/sw-register.js","e9bf9899c9374bc87d273cf6a88c4f66"],["/tags/Ajax/index.html","ea44ab13727f75754db3fd5c5efed3a0"],["/tags/Axios/index.html","fac8bfc9d4eac72a03aaefb738791888"],["/tags/CICD/index.html","a83e7e666422bba827a25289ca126536"],["/tags/Docker/index.html","b24844c71c57982b3c1fbafe0f7bbf7c"],["/tags/ELK/index.html","8b8ef3857b7e74f278e8c4627df3861f"],["/tags/ElasticSearch/index.html","65f489e7cf52f90a97b3d57a2f630d5d"],["/tags/H5/index.html","4369af732a5d05854c3d0dcdc9a46fa8"],["/tags/JVM/index.html","b350a6a8ba3d7519c6bb60d57bb6c39b"],["/tags/JVM内存模型/index.html","624c400158c78569681286fa8e7da699"],["/tags/JavaScript/index.html","bf9fe78655b359917fdf2b9d16ecebec"],["/tags/Kibana/index.html","2f7f014d4b56be169b1c7ea7be7f4ea8"],["/tags/LeetCode/index.html","89fdc65f96424e21d7141f3012df579d"],["/tags/LeetCode/page/2/index.html","7877afd2c42bef5d2e762a1bea9c33d8"],["/tags/LeetCode/page/3/index.html","0b14f80c093687fae2aa9aa30cba3100"],["/tags/Linux/index.html","c3f80cfb686168f300b743a93ff01cb9"],["/tags/Logstash/index.html","e9c1462f436c14b2254f9debe13f62b1"],["/tags/Mock/index.html","e82983bc6058c5d9341303365868e466"],["/tags/MongoDB/index.html","9f14c6f74663d12c25d7faa49e22eb58"],["/tags/Mybatis/index.html","eacb9a460bdb067285e477017902548e"],["/tags/MybatisPlus/index.html","0012bf7156511234fc28355711f3fde0"],["/tags/NIO/index.html","467be01ade361a4bd2dd0c797058228f"],["/tags/Netty/index.html","bc9b51fe665f545009a56dba86338788"],["/tags/Nginx/index.html","1403fa2b2bc618de038505c3b99a7cb7"],["/tags/Promise/index.html","7af28181bad87e9153be366ec35af6b7"],["/tags/RabbitMQ/index.html","bfb7a77038794d851300f9dd4d723e3b"],["/tags/Redis/index.html","1b06ecace83a49ff32340fbdcbc8f72c"],["/tags/SSM/index.html","d6e44d65d4d28b64520303dccb577bef"],["/tags/Spring-Security/index.html","17fd479bd99467f3d3ca5b7b01c1f2e6"],["/tags/Spring/index.html","ac34fd354e3dda403ff375febdd05ee8"],["/tags/SpringBoot/index.html","b9e2bb370637df069a7eb2ee2b408807"],["/tags/SpringCloud/index.html","b062508b07b266bc288a9830626ee5ed"],["/tags/SpringMVC/index.html","73314dc7067c1f91ceaae8fb29dc81a1"],["/tags/Swagger/index.html","5e2ddf77d76d535dac553d71ac611e6d"],["/tags/git/index.html","28b0575eb902a6d2c40aedb75a15eafa"],["/tags/hexo/index.html","b4d3b39a8cb7173acd0aab11c2dd60fb"],["/tags/index.html","e68ad39925af6cf7e99e9d14e188b552"],["/tags/jQuery/index.html","dcd7c3d71e6c756f936913d5ba6f0198"],["/tags/java/index.html","e9fbafd5835267bcb6ea20d601bfb003"],["/tags/markdown/index.html","c68848322b8c5153944dc4306c6446e7"],["/tags/mysql-数据类型/index.html","e165a3b65f0d8b036f8e84d2b5ad4ed1"],["/tags/mysql/index.html","fa4b3b0ca1afc92edbee1057cb3dcaa8"],["/tags/noSQL/index.html","50cf1432a02862f99095e3fb7dd5445f"],["/tags/typora/index.html","e38fc1bfcaf71583bcdf387d1bdb12a2"],["/tags/vue/index.html","1f7ac3113652d1f0dd146ed3934901b9"],["/tags/享元模式/index.html","0bd5812f661130706143ee7d3daa3c31"],["/tags/代理模式/index.html","d7d458ecf498adc1d4ed1be4a02cdb46"],["/tags/分布式/index.html","8264ebf3a9d632416295908d605811af"],["/tags/分布式系统/index.html","a963d7745d02c2928eead8851bda034a"],["/tags/前端/index.html","4adb593c726d2df46019cc9fc5ff1547"],["/tags/前端/page/2/index.html","d32175eac45fd79a5d776f9b0c5d01b6"],["/tags/博客/index.html","287299945170ba79e6178b84bff8c2b5"],["/tags/后端/index.html","134db1f66a99d477a0d4fde4dd5693e2"],["/tags/外观模式/index.html","37ca425ecab10861c435767dd74425a9"],["/tags/容器技术/index.html","317cb88e4eb95c0c33db052bcaf5099f"],["/tags/工厂方法/index.html","6d88351692514b8d8d8a11dba77baac7"],["/tags/微服务/index.html","4494139f890abdd8d3093757487f338c"],["/tags/抽象工厂/index.html","391e14f85ac91f022289468aeccdb689"],["/tags/持续集成持续部署/index.html","8c52f647ac8372057fd080f76a4fa1e9"],["/tags/排序/index.html","045ad8b573725ad5ddf87d5ad95cb896"],["/tags/搜索引擎/index.html","184bf3310915bef8e54c72e9bceb7a76"],["/tags/数据库/index.html","29495cac6b204aa72c6b201fed77665a"],["/tags/日志/index.html","146570d870c5c9a0850ccb274d1e7c29"],["/tags/服务器/index.html","10220460bbca2ae687d4b38da186557d"],["/tags/权限认证/index.html","873a008300d2a88cc9bb466a3d7404aa"],["/tags/查找/index.html","8c2c5977060e74e8a989a3e49c8bb20e"],["/tags/桥接模式/index.html","96740993d1614c0dbce01f2bc75e4382"],["/tags/模板方法模式/index.html","a41d38f601a2604d3326791100751d96"],["/tags/消息队列/index.html","c78dbb7fb83771a6080bfe60622ec566"],["/tags/版本控制/index.html","8ecc21cc6c06cdda6228b7225c6fb373"],["/tags/策略模式/index.html","888bd6697af5352c1787a60b3f086954"],["/tags/简单工厂/index.html","ca292bc71e28b153a3440d0145916321"],["/tags/算法/index.html","6f85151358f4e33bc361b3abe5c615a4"],["/tags/算法/page/2/index.html","973df39bf5b4e65f5290915c1702ccbd"],["/tags/组件化/index.html","82ad83d493d02b0c15af53b5abc8753b"],["/tags/缓存/index.html","7425d8dc62d0ed0d019169ebd3bf0ede"],["/tags/观察者模式/index.html","f8b2b903a1faa4bec60fa610bc7931eb"],["/tags/设计模式/index.html","32dd9cb627be9c71df1375d328dd978e"],["/tags/设计模式/page/2/index.html","2a14f62e037675a6f0fe9cefe5fe58ca"],["/tags/责任链模式/index.html","9c413a1d6a4bf53c91fc44e69498c466"],["/tags/适配器模式/index.html","f9d2f168ba3304b3717181fac4996294"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
