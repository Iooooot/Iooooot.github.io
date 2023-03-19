/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","bf24287e25bb8820ad14dd1f2c9e49d1"],["/2021/02/22/博客的搭建/index.html","1e8967b477b7dc386691aca6c32400d6"],["/2021/02/23/如何使用markdown/index.html","46150f940f65976ab01326d40b4ab446"],["/2021/02/24/mysql命令大全/index.html","9416c54d2eed079faf8d026b017f75d0"],["/2021/02/24/mysql数据类型/index.html","7109329611c0f3cfb0dc982f88be0828"],["/2021/02/25/Git的介绍与简单使用/index.html","ed6e82de284a00f30bc91898b6dd0475"],["/2021/02/27/简单工厂模式/index.html","b60f124ae550448f6f90bb8fd350eec2"],["/2021/03/01/工厂方法模式/index.html","cfa049fa734d0fbb4c82dd89bac489f6"],["/2021/03/02/抽象工厂模式/index.html","0c329f93546e554b2391dd2a8967b011"],["/2021/03/03/单例模式/index.html","a1074eefaa90b1cf3af87d8cb90a67d2"],["/2021/03/04/观察者模式/index.html","d4bfe9f6c9d2eb17b9f1b5461464075a"],["/2021/03/05/适配器模式/index.html","0ae7e5a20b72e9b75fc815142c7bf1f4"],["/2021/03/06/模板方法模式/index.html","5dae74ad07b69e91c71a0f5265a31220"],["/2021/03/07/责任链模式/index.html","8cef9ec0fe70754a1de4f0a48ab60899"],["/2021/03/09/代理模式/index.html","6d7fef6a112240c04009a783a4e589e3"],["/2021/03/11/享元模式/index.html","75f02fe0e5ae627c1357752f811bf2aa"],["/2021/03/12/外观模式/index.html","b55d5110ebd938bff9c6108dde11536b"],["/2021/03/13/策略模式/index.html","fa92238158832eae91734346707eec80"],["/2021/03/14/桥接/index.html","7a1995143a784b184125c6cf92ffd7d6"],["/2021/03/15/LeetCode-多数元素/index.html","7fa522bb8612a5cedc5a7fb35be00fb5"],["/2021/03/16/LeetCode之汉明距离/index.html","9d47d204eac381dc548e88d6469f381b"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","5dd035476fcf25ac0e826b0859c16bd8"],["/2021/03/18/LeetCode之两数之和/index.html","6de0fb1ef1b4e4a33326743f0429e293"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","73b4cb7c8890d626e25a3262f4b74142"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","ae10dc67ad840294b3a3d28ba06010d3"],["/2021/03/21/LeetCode之有效的括号/index.html","0e9f2418c373225040b70b334dde7dbd"],["/2021/03/22/LeetCode之移动零/index.html","fb3d1a1401f63d81df05b6fc6d03c2d4"],["/2021/03/23/LeetCode之爬楼梯/index.html","deac16e464b90b9c4b2518a9f9713486"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","f43db4d008e7f7f7d71be8c31976fbe2"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","658c66fbd1195c0d01c7c380ad2959cf"],["/2021/03/26/LeetCode之最大子序和/index.html","01016c17a73257f5cbe971262bb8b8d1"],["/2021/03/27/LeetCode之子集/index.html","c156d4e9afd3d04402e7fb972983312a"],["/2021/03/28/LeetCode之合并二叉树/index.html","6ca4fab84ac1d14afab4b76ccd9176d5"],["/2021/03/29/LeetCode之翻转二叉树/index.html","d5b67d1c483c7a252956b2e31a38a253"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","22461080f18722d5b53a47d01e62ba3c"],["/2021/03/31/LeetCode之翻转链表/index.html","e9bd160f53c32a8d60ac45eee6982b44"],["/2021/04/01/LeetCode之相交链表/index.html","6ba4a5a409021a49ff02ab1d9b3a4659"],["/2021/04/02/LeetCode之最小栈/index.html","e4958ce6354b136abcd67636294b313b"],["/2021/04/03/LeetCode之对称二叉树/index.html","a5ea7cda05887a5885180513bb2bd52a"],["/2021/04/04/LeetCode之环形链表/index.html","b2787ee3e960d58cd46e087aeb875008"],["/2021/04/05/LeetCode之二叉树的直径/index.html","7af82c71caea368dc589c319db18e948"],["/2021/04/06/LeetCode之回文链表/index.html","da22e2a8eb697ca2ac10ac3fbd8d44b7"],["/2021/04/07/LeetCode之比特位计数/index.html","ce5c1180a2589e6b3c5e6977866b39b1"],["/2021/04/08/LeetCode之全排列/index.html","62c01e9d30914fe2fdd4418109e32bc2"],["/2021/04/09/LeetCode之括号的生成/index.html","1c695a9001b48d1ec855dcfcbbda499a"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","1e8251cdac6a744e626212d183def268"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","7b67a9ea542673612a40a8721f9dc7ac"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","2b692f9630410f9a07c0b238b79fdc10"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","f6d890b5fefc6e4cac5e01f8a996d3c1"],["/2021/04/14/Mybatis/index.html","5f7266308348d5bba23d3f4bf5dbde23"],["/2021/04/15/Spring-1/index.html","44c568d1add729ae10230f16887da6bf"],["/2021/04/25/Spring-2/index.html","e907f34d28a7a6c980bda0551cdaf879"],["/2021/04/27/SpringMVC-1/index.html","b049c2aa1e08b693679f56cdf488bb93"],["/2021/04/29/SpringMVC-2/index.html","5335903cdeb5c752b90fb3bec4f33625"],["/2021/05/03/冒泡排序/index.html","30efe84108908062da83a34e0c87c585"],["/2021/05/08/选择排序/index.html","29c521308955c638297e1227f8759110"],["/2021/05/12/插入排序/index.html","05ccf86e598ae7b23078e7c3117f3a8f"],["/2021/05/15/快速排序/index.html","265ed334fb06fcff22763a484eb9abf5"],["/2021/05/19/基数排序/index.html","7a8e0721912d14d0de663e0ec5b0ec13"],["/2021/05/20/哈希排序/index.html","c66fb3cf8d7e907b431f386bd69b869e"],["/2021/05/21/归并排序/index.html","9a06332fa53077e28dd8ba4893bbe3a5"],["/2021/05/22/二分查找/index.html","c15ce97d5cf1db60fa81566f6c76ebd9"],["/2021/05/26/差值查找/index.html","e1746e428b4a5f85a702c101cbfffbed"],["/2022/01/12/高精度大整数计算/index.html","d206027c7f5ad60d348cfb0b0551ece5"],["/2022/01/22/前缀和/index.html","9a85e2e8b2802475879248fbbcec55d3"],["/2022/01/23/差分/index.html","1dd9ffe09ccc88fc7bc74fb757baa247"],["/2022/04/04/MyBatisPlus/index.html","fca6a611dfb4fd7f5e75933b4e587676"],["/2022/08/17/jQuery/index.html","45763c0d44ab363897889f0bcc46265b"],["/2022/08/19/JavaScript/index.html","f4a2a78cd392bbcb89670e67f4a3fab2"],["/2022/08/22/Ajax/index.html","be8b591e02d0af379c4f6958bb037274"],["/2022/08/23/Promise/index.html","e049b5baf1b89b15b25cf72789f36982"],["/2022/08/24/Axios/index.html","e4b1e9fa52fd2cbcf10b84e21a2ee813"],["/2022/08/25/H5本地存储/index.html","3782bc420edebe567885c8ba6f1cbe01"],["/2022/08/26/mock/index.html","529e736ee0f1d2c04887c907425c95bd"],["/2022/08/31/VueJs/index.html","89962bce418c289389c531ab22bf3f5c"],["/2022/09/01/vue组件化/index.html","8500aad26e56a5a03381f23a3a2a9e85"],["/2022/09/04/VueCLI/index.html","4c876d57dfc667b2254e4baee2cfb8a5"],["/2022/09/07/vue实现动画/index.html","f560254d9422c758d5de1bb5f54afb0e"],["/2022/09/09/Vue响应式方法/index.html","fbf418af4f1b305199c0a49f68c5450c"],["/2022/09/10/Vue异步请求/index.html","b11be7070db790e56ce25a5e6518f9ec"],["/2022/09/11/vue-Router/index.html","d32e04979a3bf9c3ae4331a76bcbd435"],["/2022/09/13/Vuex/index.html","b0e9828a1073963fe3da84509e9d677d"],["/2022/09/15/SpringBoot/index.html","51dfea0594731373c8c557940e380e70"],["/2022/09/16/SpringBoot配置FastJson/index.html","b7b4dc0b500b04aadf9848dabb0bd6eb"],["/2022/09/19/SpringBoot参数校验/index.html","e48a04b1f899bcb166ec4200dbb46b22"],["/2022/09/20/SpringBoot的异常处理/index.html","73788150551abbb5fea5003e3067f70f"],["/2022/09/21/SpringBoot统一响应处理/index.html","5b73b322100bc3e087acb7dec29790ff"],["/2022/09/28/Linux/index.html","578c00078fe221108ef0dbd94d1287e1"],["/2022/10/02/redis基础/index.html","df443e2a84ba5d12699333717c7fb891"],["/2022/10/03/Redis缓存/index.html","80a4ac3d735972cef2fa768900edde01"],["/2022/10/04/redis缓存穿透/index.html","986c541b6aa548d1002b3facfacd55ec"],["/2022/10/13/Redis缓存击穿/index.html","c4ea011ce8a8a4f7b27ea693a9aedf23"],["/2022/10/14/Redis缓存雪崩/index.html","b03ecb78459697ea7f00a3959ef64a31"],["/2022/10/17/Redis集群/index.html","16a98dbfbdefd6615e59c503031a7a4b"],["/2022/10/18/Redis哨兵模式/index.html","4b47e465a0f96aee422545114e1fdee9"],["/2022/10/19/Redis主从复制/index.html","70e0b0f7db7b3a64d47cd36d06cd9cdd"],["/2022/11/03/Spring-Security/index.html","ff94c0329c635bafe7dcf7605d1e5ffa"],["/2022/11/08/SpringBoot日志/index.html","f03a339a621bed1fbef154f73f89cb76"],["/2022/11/11/Swagger2/index.html","3408959ef87bcc580523e178c1296110"],["/2022/11/21/Nginx-一/index.html","9710bd650c2dad2cd9b282d89cd02892"],["/2022/11/23/Nginx-二-代理服务/index.html","c9faf7cae4a9f42537d979abf1ff10ff"],["/2022/11/24/nginx-三-负载均衡/index.html","2f86a3486a6ffaddcbb1c4d114aeeb1f"],["/2022/11/26/nginx-四-缓存集成/index.html","62adfa08406058425fec2ad1f1730c0e"],["/2022/11/28/nginx-五-动静分离/index.html","73d52b1d4f0302463ecc2a35a480b51c"],["/2022/11/29/nginx-六-制作下载站点/index.html","f410fda413957b0b9525356a849d5556"],["/2022/12/06/docker基础/index.html","d64429031ba639f466e302b065b41af8"],["/2022/12/09/Docker高级/index.html","080968a8783f0f972087f4f3219b98d8"],["/2023/01/04/MongoDB/index.html","73820b54315a5df0473682e4150162ae"],["/2023/02/05/消息队列/index.html","6a44d4febe51594746754828eee49837"],["/2023/02/12/RabbitMQ集群/index.html","59e67adb1763d75d9733901ce999b801"],["/2023/03/10/CICD/index.html","ddcb05ba35ba073c1cf306568fba5918"],["/2023/03/11/ElasticSearch/index.html","9b8319089407e34dfb1aa7473e1af443"],["/2023/03/12/ELK日志平台搭建/index.html","7ab2eb662d274ac57ec523c8191b51fe"],["/2023/03/13/NIO/index.html","83b585b0d167f7dd8a7cc3b602731934"],["/2023/03/14/Netty/index.html","ac2061c507c92e79df7f7df65080b9e3"],["/2023/03/15/SpringCloud/index.html","8e7e0e62fe65ee856de0cc1359b930fc"],["/2023/03/17/分布式系统认证/index.html","9df523581caca3bfefea8a1709993d7c"],["/2023/03/19/JVM概述/index.html","be910dcb086ae49fe8a90bc989525bf9"],["/404.html","b9a69cde53e4e56bad602c9fa78e23bb"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","46159e818c1bb3dc54a006ef7411d5f4"],["/archives/2021/02/index.html","c7001f30634add266fdf2b617296573c"],["/archives/2021/03/index.html","9337f74cccfa4f44328b849f727f64e4"],["/archives/2021/03/page/2/index.html","d6ec78a990118003a8655c36de661ffa"],["/archives/2021/03/page/3/index.html","115aa9b17eeefcc6a2c153460ae791a7"],["/archives/2021/04/index.html","f0dcf1a84e16e393b654577aa22eca99"],["/archives/2021/04/page/2/index.html","d93abd7c94eaee2e8120cc7dacc1ae9c"],["/archives/2021/05/index.html","7653419a50ce59c35626f28fb63111f0"],["/archives/2021/index.html","4d6905a2ff95abb348c13a7e85ac30b7"],["/archives/2021/page/2/index.html","9227963f5a67a7a0c4ef71a2305c5b20"],["/archives/2021/page/3/index.html","af573c0f6719b563ece966103669d92e"],["/archives/2021/page/4/index.html","8b1e3e09783ea085d7df6ffd6c0bc96c"],["/archives/2021/page/5/index.html","ef0c41e09e15a216d93fe1cad22c3151"],["/archives/2021/page/6/index.html","b1fcd7fc590236b07eeeb48cd917c4b7"],["/archives/2021/page/7/index.html","8a6a8995ec9a5c60df9f0540174ed423"],["/archives/2022/01/index.html","7530fffc2cfe0f3a146df1da4cf62f78"],["/archives/2022/04/index.html","40122e8250c137e411f96b7d27173271"],["/archives/2022/08/index.html","dbeb01af5989c526b6af506306c6f6f1"],["/archives/2022/09/index.html","3b77080b93b4d62fba53e46cfd2f87a1"],["/archives/2022/09/page/2/index.html","696299b69dc71b70643d393b3135e1f7"],["/archives/2022/10/index.html","969b312eda4becb64e3acaf9d034f239"],["/archives/2022/11/index.html","857980ba43e1ea65df86d2ffe8d7940a"],["/archives/2022/12/index.html","d3ed7ce9f4ac43d768229c295bfe54e5"],["/archives/2022/index.html","7674beecd2778791dede5501f4523666"],["/archives/2022/page/2/index.html","86aacc3dd6c376d0878cf50de9cc8d7d"],["/archives/2022/page/3/index.html","ee621fb3d14f6cc4702b2d84beac7bda"],["/archives/2022/page/4/index.html","fe58d8c390a890f17c9eb2c8b6773376"],["/archives/2022/page/5/index.html","fd99c8c9446808a07b9a71421379b70e"],["/archives/2023/01/index.html","e470afd51c5f9dcfdfbbc1f7a7bcb045"],["/archives/2023/02/index.html","bcf0131a8cd3252ce702d1ced98f0653"],["/archives/2023/03/index.html","988437e2ddcea7a26140227cf4730d9f"],["/archives/2023/index.html","28d0e1c4ee95fba6568647cd174c5dc0"],["/archives/2023/page/2/index.html","90a571130474b1ff14e7d2ae64d2ce00"],["/archives/index.html","88d36d2639701c426f3d3c012f7a01ac"],["/archives/page/10/index.html","45bbec7ed1002abc541f94e3eed5b6df"],["/archives/page/11/index.html","2ade9e299b3de39e3aeffe12a908615e"],["/archives/page/12/index.html","60ad426131ab10507876c62fa20a1ed0"],["/archives/page/2/index.html","5fcd76bc98b3fa83c1fb97ae761320e6"],["/archives/page/3/index.html","bcc6fa4733fee28b2791d1495b5b7b14"],["/archives/page/4/index.html","e10070b40afd5fd5678dd3f8b14b5f53"],["/archives/page/5/index.html","11e6e5beb4f033bead9ad9de8e18cb13"],["/archives/page/6/index.html","59453ca56908a3eff2d24b368de1e06c"],["/archives/page/7/index.html","4fbb84a5277c72fcbfa8a452990307ca"],["/archives/page/8/index.html","c41d159e28ced25ac488f9f153ef480c"],["/archives/page/9/index.html","9b247b0146e478b531412860616f2a40"],["/categories/CICD/index.html","0614c93129aaed16ec72b058c92c9a54"],["/categories/Docker/index.html","9e02b1d9e8c4357172506c8b4dc0717e"],["/categories/ELK/index.html","3467fc3c5aeca5d3a5d4adfa03b7eb00"],["/categories/ElasticSearch/index.html","cabbff86e0a63a6cb2bae088480b1b2b"],["/categories/JVM/index.html","45fba9924e44f133b619abe84e14b308"],["/categories/LeetCode/index.html","6deb70b470ebbfed39595b8a82283be4"],["/categories/LeetCode/page/2/index.html","f8da5b42d9de214b2ffa617d055b46ce"],["/categories/LeetCode/page/3/index.html","82d7a5342292602492d9568979635ad0"],["/categories/Linux/index.html","9a511b075f7441d95007909c7976b085"],["/categories/NIO/index.html","207dbbb71958a17db0fe29a11cb6152b"],["/categories/Netty/index.html","aee1b9a487bd6077c077f36eee27477d"],["/categories/Nginx/index.html","d2f496afc1abd1b60a125ecf444677b9"],["/categories/Redis/index.html","32ce51014f0b67660c42e7c2eb6b10e3"],["/categories/SSM/index.html","948c3dd208e27043aeba9d3aa0c6e9b6"],["/categories/Spring-Security/index.html","02fe37d5b2baab831620a0b3538cf2ca"],["/categories/SpringCloud/index.html","d0b68ff75aaab2ac1953cfbd8f0d62aa"],["/categories/Spring框架/index.html","dd50b8645358a15d025c7444f267f1f3"],["/categories/Spring框架/日志/index.html","f1ff5f01bf74fa13f781bba13daa4e21"],["/categories/Swagger/index.html","efd3f0d9080857756c7e91e6ed343ec2"],["/categories/Vue/index.html","d56f7503683d5be63adb1c2d40315018"],["/categories/index.html","19e3bd968d1a1fb020c1a92a0dd4ac03"],["/categories/分布式权限认证/index.html","c3fc5e28b73c25cf2af547893f746aa8"],["/categories/前端/index.html","45cab215fa4244d2c2ccc74b74e734c9"],["/categories/博客/index.html","b0f629ef0277e56f1ec36e36e4ae6a03"],["/categories/学习路线/index.html","5ffc57ff19b18f255718b55a871b97ca"],["/categories/工具/index.html","f388d5a2baf4cc782a9c46bd03b72ddf"],["/categories/数据库/index.html","9d0e1b178813697d20403308639be9e2"],["/categories/消息队列/index.html","7274aa7f4898e2f32af509f36fa16a25"],["/categories/笔记/index.html","97fcb9185e27b358eb74588396dbc1c9"],["/categories/算法/index.html","61ad5ca6a7367e95626231ee7ccb2675"],["/categories/算法/page/2/index.html","91b05a1f9fef4666b7c8c9cb8de3640d"],["/categories/设计模式/index.html","8985b2eb21a46078a84a11ddc5e8b97f"],["/categories/设计模式/page/2/index.html","6fede3bc6dcd42519291b5b335a858a2"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","2c3191eac22f7121767c74d0e3d10a04"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","89d43bead73784cfe734cf93390e5f90"],["/messageboard/index.html","ad00baf9b64ba5e9a64078291b071613"],["/page/10/index.html","415f616924e2810f644e785abadee5d6"],["/page/11/index.html","9c8f3490d6cd31ec3786c860c7ee8db9"],["/page/12/index.html","6e40540f73a048e00813e8738c305ab5"],["/page/2/index.html","867bc4e7872dce728afa2af02a866186"],["/page/3/index.html","176268ec9108473121f3623a0c5bf646"],["/page/4/index.html","5404c84e0115e7da8fa48876d5737e9e"],["/page/5/index.html","04ea3eb06a5c9d2118017ecbdf0963dc"],["/page/6/index.html","c070ffddc515154064e1c31bfb9579d8"],["/page/7/index.html","6ad7b5a487e7c8785557172fa7c72a89"],["/page/8/index.html","805ee28099001911695a9d1680dac154"],["/page/9/index.html","04cb5fa3b0fb2f96bdf78150410d6bfe"],["/sw-register.js","a7e66d845d076e6e689eb0fc36e132c9"],["/tags/Ajax/index.html","4ca11621dbe2271664f53562bc1124b2"],["/tags/Axios/index.html","8a28f7001099ed675e5161e6d7bf6fb7"],["/tags/CICD/index.html","51d3553cab6cb1b7aa9a551be0b9c78c"],["/tags/Docker/index.html","eefdc57f75dd598c1b17dcbb995db9e6"],["/tags/ELK/index.html","6b5923cdb1d3d6a606da0fcbe927a754"],["/tags/ElasticSearch/index.html","c9e7f96468cd4e3d4bfd1fb5e5d6be6b"],["/tags/H5/index.html","a32f8051931e536b0903573526ae4764"],["/tags/JVM/index.html","cdee2a2cff4d81fa2a641f1488b919d1"],["/tags/JavaScript/index.html","9d21af1e86755f00721fdeabee93aa20"],["/tags/Kibana/index.html","c56df68533350a1eca0d52c20ab1ffed"],["/tags/LeetCode/index.html","83ef77249ce37b19e097a7ac0b009432"],["/tags/LeetCode/page/2/index.html","ed561c7d12d33284a097ad1ae32aee9f"],["/tags/LeetCode/page/3/index.html","158e56d94ba599ee549d4f580621673b"],["/tags/Linux/index.html","83846d70260a215bb5b0b2e808df3625"],["/tags/Logstash/index.html","519a108d05b21c679ec8af520e6d6e23"],["/tags/Mock/index.html","922dcbd27e454d66fc509859d589d4c9"],["/tags/MongoDB/index.html","0cb3ecb60dd1d7c341988cccd795311e"],["/tags/Mybatis/index.html","4f2cadd9c96cad3c05afb2d92d0c7d84"],["/tags/MybatisPlus/index.html","3df52cf460614e75cc97cdef96a36091"],["/tags/NIO/index.html","8d379d1a62200a9ae2a0f98bfcc397b0"],["/tags/Netty/index.html","23a21af80ebf0b6d5324c7c0b63f5213"],["/tags/Nginx/index.html","1dfda6f77b4be40e460e9c64df960fee"],["/tags/Promise/index.html","fa5368de320b5765ecbc5b471c91c1d9"],["/tags/RabbitMQ/index.html","f7a61e97229b57ca84899ee34c05330d"],["/tags/Redis/index.html","d0ed3ac2cf6f45d168b7c2f4cc9501ab"],["/tags/SSM/index.html","bf7056590c1736a463eb598942c7856a"],["/tags/Spring-Security/index.html","2fbb051494edea73780a49e77d60bb41"],["/tags/Spring/index.html","4ad296dc4c4ad030d112418a19dba693"],["/tags/SpringBoot/index.html","96380fad19f85703d049251791e1ccf1"],["/tags/SpringCloud/index.html","d42089f17e2fd741cb745d57cc3752aa"],["/tags/SpringMVC/index.html","1bbb439081e29098eb35b5eb5f1e1693"],["/tags/Swagger/index.html","8e0377ad88c0b1b24808d357de6a67a2"],["/tags/butterfly/index.html","f344063e83e2de0519b1b38e98178bda"],["/tags/git/index.html","2910ee54506d0fd75ac4f9fd2794c0dd"],["/tags/hexo/index.html","33c13d9066764ac0c9f1d358e2cb4ad4"],["/tags/index.html","0ba832c3b765b7ccad0d44e76b48098b"],["/tags/jQuery/index.html","32849a998c4a2b5554d6f24e0e834672"],["/tags/java/index.html","d6ade46db3da6be1812e9b3421cc3b57"],["/tags/markdown/index.html","be21c99f42b743f95f5d08e49f510107"],["/tags/mysql-数据类型/index.html","d91b27eccf1473bce0e8c1207958dca1"],["/tags/mysql/index.html","e95a4e69dc828c8e16a66038301ef74c"],["/tags/noSQL/index.html","58440e0329ccb8a6a20ead8f8a63132b"],["/tags/typora/index.html","755ecace5b97191b48fd76ba8c718411"],["/tags/vue/index.html","f85c1b4ed2b482507585b94781129185"],["/tags/享元模式/index.html","878ead243d874e00c61a0dbc27f1e03f"],["/tags/代理模式/index.html","a15337d9d99b789fb36f0216759568d1"],["/tags/分布式/index.html","6001d22bab1cd41a4f3a8b4391d475ca"],["/tags/分布式系统/index.html","d8833ba7d6ed8d9706959195b479edf7"],["/tags/前端/index.html","a215882f3cc2e7c1e59f0cc855b0967c"],["/tags/前端/page/2/index.html","8deec1afd7708ed4ffc1d62a97cf494a"],["/tags/后端/index.html","b32ba9446f5f2e4009785ea5640970e9"],["/tags/外观模式/index.html","be3294dbc37e53e7cdda56508f275b48"],["/tags/容器技术/index.html","a68ba4ef96c588b7463333033d07fb3f"],["/tags/工厂方法/index.html","a59569844623f1062762a489117f14d8"],["/tags/微服务/index.html","d5b8b302738bff7db6df9bc88cdfce37"],["/tags/抽象工厂/index.html","130b01e55ebbcd031ac49d503a448add"],["/tags/持续集成持续部署/index.html","88e44321d188cc405e4dcb232d1a9caf"],["/tags/排序/index.html","bafe6a8f2462ba89bb0d29d81761822b"],["/tags/搜索引擎/index.html","51d96b94b42ffb11c42ca533f7201e92"],["/tags/数据库/index.html","695d0d61af051581d3629c51688d095f"],["/tags/日志/index.html","e3376c462571cde4dc734663d4be005b"],["/tags/服务器/index.html","4bfaa6084e468de73b3634bd6cf8fed0"],["/tags/权限认证/index.html","333bb7c8beb409c3ef44b675a03bbc57"],["/tags/查找/index.html","78a34a6624bef072b08c5d90edcdff2f"],["/tags/桥接模式/index.html","fe1faa95bf2d1c0e6e4c7830ca4bcb93"],["/tags/模板方法模式/index.html","094c3d66638e35c7171b24aa46fd0c8e"],["/tags/消息队列/index.html","0bfef429f828a9fa4010f5ca30483a1b"],["/tags/版本控制/index.html","93476892870491c7526a62f05cac11f9"],["/tags/策略模式/index.html","757fa3dd56257db04de4a513dba61bce"],["/tags/简单工厂/index.html","0aa0b76237b65a33fb23c0cf78b884b1"],["/tags/算法/index.html","11418b829461532631edefd42ec69214"],["/tags/算法/page/2/index.html","fdbfc66af60a8a707f483bea624aa2c9"],["/tags/组件化/index.html","f424bfe10c685d5adbec93cae4a895c7"],["/tags/缓存/index.html","2ef9f8e37dc910752fd488b88472ff87"],["/tags/观察者模式/index.html","e21515acac62f6d78755ad8c8d2c671e"],["/tags/设计模式/index.html","16526de4c83faade87d1ce9b6387e2f0"],["/tags/设计模式/page/2/index.html","9345afb00de866a857a9d009156446c0"],["/tags/责任链模式/index.html","91de5b5d93b58ad8c051f29eefb970b3"],["/tags/适配器模式/index.html","45751df06a9bae73a1432e519cbf9037"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
