/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","92b8a7622efebc287a8ebdd803cb2177"],["/2021/02/22/博客的搭建/index.html","4d3293016aa967fcf5d9a7c901e0cfac"],["/2021/02/23/如何使用markdown/index.html","b6523f437f6188d74cd807e118570f69"],["/2021/02/24/mysql命令大全/index.html","71f8a7c0200648fe6e1092031ae68c03"],["/2021/02/24/mysql数据类型/index.html","7109329611c0f3cfb0dc982f88be0828"],["/2021/02/25/Git的介绍与简单使用/index.html","ed6e82de284a00f30bc91898b6dd0475"],["/2021/02/27/简单工厂模式/index.html","b60f124ae550448f6f90bb8fd350eec2"],["/2021/03/01/工厂方法模式/index.html","72971b63d1b2c007ded04f2cc0e08eaa"],["/2021/03/02/抽象工厂模式/index.html","2504e595510ea4cce07f04f7f1c05df8"],["/2021/03/03/单例模式/index.html","a1074eefaa90b1cf3af87d8cb90a67d2"],["/2021/03/04/观察者模式/index.html","d4bfe9f6c9d2eb17b9f1b5461464075a"],["/2021/03/05/适配器模式/index.html","0ae7e5a20b72e9b75fc815142c7bf1f4"],["/2021/03/06/模板方法模式/index.html","5dae74ad07b69e91c71a0f5265a31220"],["/2021/03/07/责任链模式/index.html","8cef9ec0fe70754a1de4f0a48ab60899"],["/2021/03/09/代理模式/index.html","41c5f18557c9275a1d3fc7c3d172a0fd"],["/2021/03/11/享元模式/index.html","e852f3a487c8eabf01d3cf04f7c4154a"],["/2021/03/12/外观模式/index.html","0ae8ca00d65389f6d05c1cab5537dfdf"],["/2021/03/13/策略模式/index.html","fa92238158832eae91734346707eec80"],["/2021/03/14/桥接/index.html","c4dde3170c23906fe07c0ac22bb70757"],["/2021/03/15/LeetCode-多数元素/index.html","371506e8ba1fe72be044e30de1dac122"],["/2021/03/16/LeetCode之汉明距离/index.html","db32cc5cda17f331682a59790a2a3d62"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","156c635cbf810d40e56b48fcb20bd177"],["/2021/03/18/LeetCode之两数之和/index.html","49425a2cae3393144c0934a4491737e8"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","4ea66bc6524da588a40ca6d264b30ea4"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","2b527c1d6bb9f4a6ff7d8ceff7d5997e"],["/2021/03/21/LeetCode之有效的括号/index.html","1083cfc007e4f004c8330cda6a617e34"],["/2021/03/22/LeetCode之移动零/index.html","84b720184dea9ca637ccd73f30a74687"],["/2021/03/23/LeetCode之爬楼梯/index.html","d3da432d75b10908b0bd0aa4cf50a7c1"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","a0ea9f9c05ac9d8064e22a8d5d126303"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","6cfa9ea96dd19fdb6801cbf84cb87ce1"],["/2021/03/26/LeetCode之最大子序和/index.html","5dd4d8ca6f1b272173beb5773b264b38"],["/2021/03/27/LeetCode之子集/index.html","629b15dd1d4f9a0f1626601ba0d8ce14"],["/2021/03/28/LeetCode之合并二叉树/index.html","eeac43be8009891aae367c23d2639b42"],["/2021/03/29/LeetCode之翻转二叉树/index.html","4e8e878ac38a8fd9f23d0031fb34b963"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","cdbf6a3a5c60e20ca3bc8d1bba1939a8"],["/2021/03/31/LeetCode之翻转链表/index.html","35235c746f057d380305788751347ef5"],["/2021/04/01/LeetCode之相交链表/index.html","2ed5d4b7d9542f8c734ef977b62ef8dc"],["/2021/04/02/LeetCode之最小栈/index.html","3e4188fc9a701165ce7c9c79b6945146"],["/2021/04/03/LeetCode之对称二叉树/index.html","8bf548664c17985f6b8f04d289513153"],["/2021/04/04/LeetCode之环形链表/index.html","47334d68e61e8eb8bde6755ddf83805f"],["/2021/04/05/LeetCode之二叉树的直径/index.html","71e26488a98af2c02339b59ba8df52ef"],["/2021/04/06/LeetCode之回文链表/index.html","215162c7eb45ac0011e27b86529afc43"],["/2021/04/07/LeetCode之比特位计数/index.html","d1f6cc42ca058c4fd1e73b0c5a729156"],["/2021/04/08/LeetCode之全排列/index.html","761fe2dd7d13a15437aef0623f5f836b"],["/2021/04/09/LeetCode之括号的生成/index.html","5b5cce88db1367aa2880199cadf08d2f"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","c609a0f2a42ff269b5c2a857f461d4da"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","285b0c8f41768ccbc07a1adde83c39c0"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","a8a85e90ded76203cece35299f1471b8"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","e4d015c093dab3c4e806cf231615d036"],["/2021/04/14/Mybatis/index.html","bcfe240cc921b652d08829f5719bcd30"],["/2021/04/15/Spring-1/index.html","29ce754c9553339356494cd32d4422f8"],["/2021/04/25/Spring-2/index.html","80069565a8d51eb754ecd889f7a5bfcf"],["/2021/04/27/SpringMVC-1/index.html","cb31094eb592555c8bd70538da46ea0e"],["/2021/04/29/SpringMVC-2/index.html","2822ab80ea6e136a7e17b72e15a7abf2"],["/2021/05/03/冒泡排序/index.html","30efe84108908062da83a34e0c87c585"],["/2021/05/08/选择排序/index.html","29c521308955c638297e1227f8759110"],["/2021/05/12/插入排序/index.html","05ccf86e598ae7b23078e7c3117f3a8f"],["/2021/05/15/快速排序/index.html","265ed334fb06fcff22763a484eb9abf5"],["/2021/05/19/基数排序/index.html","7a8e0721912d14d0de663e0ec5b0ec13"],["/2021/05/20/哈希排序/index.html","c66fb3cf8d7e907b431f386bd69b869e"],["/2021/05/21/归并排序/index.html","9a06332fa53077e28dd8ba4893bbe3a5"],["/2021/05/22/二分查找/index.html","c15ce97d5cf1db60fa81566f6c76ebd9"],["/2021/05/26/差值查找/index.html","e1746e428b4a5f85a702c101cbfffbed"],["/2022/01/12/高精度大整数计算/index.html","d206027c7f5ad60d348cfb0b0551ece5"],["/2022/01/22/前缀和/index.html","9a85e2e8b2802475879248fbbcec55d3"],["/2022/01/23/差分/index.html","1dd9ffe09ccc88fc7bc74fb757baa247"],["/2022/04/04/MyBatisPlus/index.html","fca6a611dfb4fd7f5e75933b4e587676"],["/2022/08/17/jQuery/index.html","0609160b4a61a1ff00028ca897537c4e"],["/2022/08/19/JavaScript/index.html","a983b2d1c3864e96426903db8c05e7fd"],["/2022/08/22/Ajax/index.html","f48a06767cc75c1ec7e570615b0c1b1e"],["/2022/08/23/Promise/index.html","7e8158839d1bbb9954f69d3c5300ee54"],["/2022/08/24/Axios/index.html","9ae649ab3ee7501d81ba9de9f0ca7aa2"],["/2022/08/25/H5本地存储/index.html","08c048057b46019ab0e40aa8d249b9f6"],["/2022/08/26/mock/index.html","004d1750ea0824aba51c720ab115a1d5"],["/2022/08/31/VueJs/index.html","fe754a9df3bc6906f98b7968a52d8238"],["/2022/09/01/vue组件化/index.html","afee32d79c47d416361476623d461717"],["/2022/09/04/VueCLI/index.html","ae6b201e0f9fe6f0099237203aeadce7"],["/2022/09/07/vue实现动画/index.html","b860e0c4e77fc9997430bc8655b36ce3"],["/2022/09/09/Vue响应式方法/index.html","ab29789f72d9966c4af4b3408c210de9"],["/2022/09/10/Vue异步请求/index.html","39a8a300f3c97757e406fe19d02d4d3e"],["/2022/09/11/vue-Router/index.html","11eac2cd8fcfbf3c64d85c23df31804f"],["/2022/09/13/Vuex/index.html","094a3927cda94a24798d19b3fcc74887"],["/2022/09/15/SpringBoot/index.html","b0665bd63bb08594b2089b78f6e68ed5"],["/2022/09/16/SpringBoot配置FastJson/index.html","0ef0c729bd10ed6520a63fda25838aee"],["/2022/09/19/SpringBoot参数校验/index.html","f12d357c77ac8bcd172d26f99af7ac15"],["/2022/09/20/SpringBoot的异常处理/index.html","9842e087436fb70bb7e174a3b11293df"],["/2022/09/21/SpringBoot统一响应处理/index.html","dbf78a63bd13186536551df0ad328d1c"],["/2022/09/28/Linux/index.html","578c00078fe221108ef0dbd94d1287e1"],["/2022/10/02/redis基础/index.html","dbcf7e25595567e4cba3c4bef995da22"],["/2022/10/03/Redis缓存/index.html","98f3b5c1d48c0fa0a3e1219952aa9b0b"],["/2022/10/04/redis缓存穿透/index.html","381c81aaeb56ba296ece68923114a3c6"],["/2022/10/13/Redis缓存击穿/index.html","77bbbb3ba9e8943958ed3fe01adccb3b"],["/2022/10/14/Redis缓存雪崩/index.html","7e8d3ebde161517b6360f35b0cbafc67"],["/2022/10/17/Redis集群/index.html","1ed15b92fa5d651bef1b73f37466bb17"],["/2022/10/18/Redis哨兵模式/index.html","c8d2b48f1e910a4eac023d5487134253"],["/2022/10/19/Redis主从复制/index.html","42fa03604f8739732deeef86eedf7b3a"],["/2022/11/03/Spring-Security/index.html","0df40438f97476077ba611c893285cc4"],["/2022/11/08/SpringBoot日志/index.html","c6e3103f6ceb89bdc0efac1472f40b84"],["/2022/11/11/Swagger2/index.html","6a3e5e119c3be07b16b1502b7ea1fdc7"],["/2022/11/21/Nginx-一/index.html","9710bd650c2dad2cd9b282d89cd02892"],["/2022/11/23/Nginx-二-代理服务/index.html","c9faf7cae4a9f42537d979abf1ff10ff"],["/2022/11/24/nginx-三-负载均衡/index.html","2f86a3486a6ffaddcbb1c4d114aeeb1f"],["/2022/11/26/nginx-四-缓存集成/index.html","62adfa08406058425fec2ad1f1730c0e"],["/2022/11/28/nginx-五-动静分离/index.html","73d52b1d4f0302463ecc2a35a480b51c"],["/2022/11/29/nginx-六-制作下载站点/index.html","f410fda413957b0b9525356a849d5556"],["/2022/12/06/docker基础/index.html","d64429031ba639f466e302b065b41af8"],["/2022/12/09/Docker高级/index.html","080968a8783f0f972087f4f3219b98d8"],["/2023/01/04/MongoDB/index.html","6cfb2ef1af74455fa7c6ea6669466d88"],["/2023/02/05/消息队列/index.html","6a44d4febe51594746754828eee49837"],["/2023/02/12/RabbitMQ集群/index.html","59e67adb1763d75d9733901ce999b801"],["/2023/03/10/CICD/index.html","ddcb05ba35ba073c1cf306568fba5918"],["/2023/03/11/ElasticSearch/index.html","9b8319089407e34dfb1aa7473e1af443"],["/2023/03/12/ELK日志平台搭建/index.html","7ab2eb662d274ac57ec523c8191b51fe"],["/2023/03/13/NIO/index.html","83b585b0d167f7dd8a7cc3b602731934"],["/2023/03/14/Netty/index.html","1fa9a8937d5374c6bf07a9969344adc3"],["/2023/03/15/SpringCloud/index.html","8e7e0e62fe65ee856de0cc1359b930fc"],["/2023/03/17/分布式系统认证/index.html","9df523581caca3bfefea8a1709993d7c"],["/2023/03/19/JVM概述/index.html","be910dcb086ae49fe8a90bc989525bf9"],["/404.html","e9dd01b012d8201275d2635b6f2cc430"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","ab09eea269750970fe74ffa2761119eb"],["/archives/2021/02/index.html","d5968ab483e65c0703d7b71a565f9178"],["/archives/2021/03/index.html","ddec4661792f90f2ead9286da880815d"],["/archives/2021/03/page/2/index.html","c05ea4cfbe579c3481bdc5c1fdc41ece"],["/archives/2021/03/page/3/index.html","5594e95e16b377cb45acc8867befa3c1"],["/archives/2021/04/index.html","6fea57f6054fc304c3f8718f0a598b4f"],["/archives/2021/04/page/2/index.html","99e22d505ce5e39f35b5669f7b0cc7c2"],["/archives/2021/05/index.html","8cebd9bd0e479938c436fc0c7b0ab7b3"],["/archives/2021/index.html","f0d4539540a3b515f9a02ff83aedaa97"],["/archives/2021/page/2/index.html","13c147f8eaa705dc30cac25e7596a8aa"],["/archives/2021/page/3/index.html","54006db6a37b09fdfcbef143aecaf789"],["/archives/2021/page/4/index.html","d3761bc446fdf0b597f3cfd173e3a09c"],["/archives/2021/page/5/index.html","809e78345621069d3072b26b7dd0b345"],["/archives/2021/page/6/index.html","107998d7d3a79032ca096fb585322e58"],["/archives/2021/page/7/index.html","f352da3efb239cb807d97709bc82229c"],["/archives/2022/01/index.html","57036f5d1eb6cdc17ea1c71b1a811941"],["/archives/2022/04/index.html","390679ab02c966f9231c8a721dc9185c"],["/archives/2022/08/index.html","c946f08e66c0aad44b3046c2d2f92220"],["/archives/2022/09/index.html","95b2c9cc9131e1d1c72c560db3e636bc"],["/archives/2022/09/page/2/index.html","3df6569670f47f63dc9926db58c5db2b"],["/archives/2022/10/index.html","69d74ea826dbd70bd528cd5a8d0d2e1d"],["/archives/2022/11/index.html","f85ce2ac0ff5bc3664496da023c4f357"],["/archives/2022/12/index.html","4cef7e717238f770b12bf07c42d31f71"],["/archives/2022/index.html","0c0d625a07c986f9ab3182ec55a0ce01"],["/archives/2022/page/2/index.html","a869117273983c0dfe612ca6a74b6904"],["/archives/2022/page/3/index.html","444a27c40d89dbc63668a17a8d70932a"],["/archives/2022/page/4/index.html","ead2b0856f3f652f6b329bef7c88ef20"],["/archives/2022/page/5/index.html","5b42907070a1076d5851cfcdb490d411"],["/archives/2023/01/index.html","fd58bde38756226ffe07c6a2084f5a4d"],["/archives/2023/02/index.html","2ddcce0230dc1407f4cee6bb98f1b3fd"],["/archives/2023/03/index.html","3be86136949c2a1bbf0b07bcce20c45e"],["/archives/2023/index.html","9ca0a64c80d491452d5ecdbcef060a2e"],["/archives/2023/page/2/index.html","740b085b5a2eda3597353badc3358dc8"],["/archives/index.html","72b02338f1b1e274d176d7266d27910d"],["/archives/page/10/index.html","3aeb3ad88c8cd925a61dff27d64ec95d"],["/archives/page/11/index.html","02540aac414ab4065b5081571f380718"],["/archives/page/12/index.html","5e9aa2ea99ca6f87da62362941f89a14"],["/archives/page/2/index.html","596cf1fcb3c8d85d84e09248edbc51a4"],["/archives/page/3/index.html","7f7459a7c7ebed614134aa4fa0087662"],["/archives/page/4/index.html","2cd224a43ad748b8ae39cadadddd5ad8"],["/archives/page/5/index.html","3377293a376b45b7844ab869a1d4c96d"],["/archives/page/6/index.html","63d7b913ac29e9c1f097527ef5b9dd47"],["/archives/page/7/index.html","8789c042dfeb211a0d965c5b9d19f838"],["/archives/page/8/index.html","35569abfb4ca918c51ac2dd68f6ef63c"],["/archives/page/9/index.html","1bb057d25ae237d7edfb6187391df116"],["/categories/CICD/index.html","31ac7aa5ca83a3f20045e224295056ce"],["/categories/Docker/index.html","b50554351dee654010f2633c0326379b"],["/categories/ELK/index.html","b2ff92fb276aa21409f12045af89dad4"],["/categories/ElasticSearch/index.html","18b6c1dc5237164015b75ba7c8d00445"],["/categories/JVM/index.html","92073b8fe62bbc39e0e1a7ea54fc6b6f"],["/categories/LeetCode/index.html","f25fc1947a2b3320db79f30999c5d5bd"],["/categories/LeetCode/page/2/index.html","15201fa744bee25a8e5683348809b626"],["/categories/LeetCode/page/3/index.html","02e41ee0d5970fbe181c7b7af7493185"],["/categories/Linux/index.html","04b497ec3ed619013122352e119fdbe2"],["/categories/NIO/index.html","c342e9a0e65002a513e7782d64b5103a"],["/categories/Netty/index.html","cbe28892fdb107a45f3c81bd6cfd3af6"],["/categories/Nginx/index.html","0dd37b73d889865d0c4d940a16de82fa"],["/categories/Redis/index.html","6054cd854de859b0d5c393bf3868a1ff"],["/categories/SSM/index.html","6af72899e983c0256f69edd4bb490d34"],["/categories/Spring-Security/index.html","4f2e2a174451d6e78cc960eeeba5f585"],["/categories/SpringCloud/index.html","eb729b52dc069944f397bbf24ad40e4f"],["/categories/Spring框架/index.html","37636ba6f97452a09a65e44164dbf03c"],["/categories/Spring框架/日志/index.html","607715377f6dba1fe55f1e5095e45d65"],["/categories/Swagger/index.html","4cd9c39d42f98168b5f9405888bbd40c"],["/categories/Vue/index.html","ecbd1ad838a520e0ee9b2a1dac5e2124"],["/categories/index.html","ab881c597e83172faa21dbe24275b1e8"],["/categories/分布式权限认证/index.html","274c12a12aeb03b9d9abf9df4a488f2f"],["/categories/前端/index.html","6439147f6976d340ec6a47ef92c7bbab"],["/categories/博客/index.html","a4e93fbc01c176d3e9893123c7216d74"],["/categories/学习路线/index.html","be9f720e906ab3eae6f93c8d9b9b034a"],["/categories/工具/index.html","9f27ee2a0f89d2a552c2e228b9cb5c72"],["/categories/数据库/index.html","a0e3747466ff2901ceb437eedaa65a5c"],["/categories/消息队列/index.html","6685ca101e8a7a5a14f55243c051da17"],["/categories/笔记/index.html","0f149c13720766ed675d21fd7b79b007"],["/categories/算法/index.html","6af9604b751cf15d03a1a61b2052f7ee"],["/categories/算法/page/2/index.html","fb399a80d6e8a5ac7a8d6658eb5bc6b3"],["/categories/设计模式/index.html","768488ad5fcdd68d588273232a58ec40"],["/categories/设计模式/page/2/index.html","c495ca222cd902ff3b4d6d77fe722c5c"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","b939d5c2133ef8dcc14f6f318fbe685c"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","cef87a1a28ed88746b3c43fd5a7f7e0c"],["/messageboard/index.html","42ea08b7a278ca2e606f0a58fe05fdd5"],["/page/10/index.html","6a92c67cbe32f8438c15b83824b41258"],["/page/11/index.html","b94623fc2beeb344cc44b2ef79bcac9c"],["/page/12/index.html","515ad7e4ddd9360024fedbb68e9ef68f"],["/page/2/index.html","892acfccb605cf819856bd496d380d86"],["/page/3/index.html","e11a11f9a2fafbf513ce0e354babfce3"],["/page/4/index.html","e20205051b6031ac3d7a3a4b56979539"],["/page/5/index.html","a85db5e020239d53eb55d22f74c049b6"],["/page/6/index.html","f2044a4bc1205e16329ab14b17f52cfd"],["/page/7/index.html","33672ab1b16450d2ae7389249f44b7b4"],["/page/8/index.html","5b4995c92ef12d73297a1c8bf7c51ba7"],["/page/9/index.html","d732cbafb59f318b8d656772e6337a5c"],["/sw-register.js","9feb0f49238e1409ffed3ea47b1f6678"],["/tags/Ajax/index.html","4836bd4f49389f15ac710e4c9d5bb859"],["/tags/Axios/index.html","4d6b53594891122581b2a5175fc4c40c"],["/tags/CICD/index.html","73e9b7ce6ba952a070847f221b475c50"],["/tags/Docker/index.html","9208a6e14737caf3fe0b374d76a6076c"],["/tags/ELK/index.html","5b34616d3cc227456c1dc0cab17cf57b"],["/tags/ElasticSearch/index.html","dd92925ff91b72bb5c1283e7d28b27dc"],["/tags/H5/index.html","67f55fe6d28faf67e7276d90a247a827"],["/tags/JVM/index.html","d49c32128c05982131168e7b6d532994"],["/tags/JavaScript/index.html","78e768dbb09ce95cff480cae619a4ba9"],["/tags/Kibana/index.html","bf030e5850752d3c487bf878b4ec5da8"],["/tags/LeetCode/index.html","7d2e24312f1a297b3af99b26a69f8444"],["/tags/LeetCode/page/2/index.html","76269a1f2af942ec9ad6569dbf327bb2"],["/tags/LeetCode/page/3/index.html","e7c47c681053eee03f53832c0d9e4f1e"],["/tags/Linux/index.html","792717177c344cdc2efc7cebfacbcb77"],["/tags/Logstash/index.html","546ceda3b5df0ed695ed1d446471b22d"],["/tags/Mock/index.html","d011d25666cb53a5d5dd5cfac1902d4c"],["/tags/MongoDB/index.html","72cfd00c834f9c082b7f5a7852da7676"],["/tags/Mybatis/index.html","9d3f21359e7ef55e53c393624e56a113"],["/tags/MybatisPlus/index.html","38d6cec88c34cd17acbb9759c8e11043"],["/tags/NIO/index.html","be1f30ca7cfdbf6179f062c9946aa920"],["/tags/Netty/index.html","a737acc36823e0697784f03f08601702"],["/tags/Nginx/index.html","b541e3c2f0d2d9f079cb70dbe57833f1"],["/tags/Promise/index.html","2c2e078a43a11a62f69bf48c77c5b1c0"],["/tags/RabbitMQ/index.html","0d86a4605e9c07292c626aa0d8fe5a21"],["/tags/Redis/index.html","5560d51b03f9a6d2e1afa02aac94de0c"],["/tags/SSM/index.html","2a886072f45084db16c3f9c81a1c2b1a"],["/tags/Spring-Security/index.html","4a170443ef7534d3fd22d317a90247c6"],["/tags/Spring/index.html","046395fd37b5c6fd24337a0d5c23ce70"],["/tags/SpringBoot/index.html","dc92a021ff468b472be5cd5b61694686"],["/tags/SpringCloud/index.html","de979f5c753d1e6f6641038124025853"],["/tags/SpringMVC/index.html","6c87ce8b5413863200f719fddd6fd6dd"],["/tags/Swagger/index.html","63183a965a370282039cab7874c0c66b"],["/tags/git/index.html","317a4238dac9076c0db036a7db832367"],["/tags/hexo/index.html","5d116d9998ed981981f34995ac52ff5c"],["/tags/index.html","23296a2b8a97f91c39c6c184d2668238"],["/tags/jQuery/index.html","bb879ca85062dd8449676ff18df735f4"],["/tags/java/index.html","e3214eddbcfdd7e3038f102c82d2deed"],["/tags/markdown/index.html","f20fb7f34cc487d506f44be4a184de8e"],["/tags/mysql-数据类型/index.html","d9d96fcd370303dae68f56cdc0573870"],["/tags/mysql/index.html","5bcc0a5b0814d079776f4a030b22e643"],["/tags/noSQL/index.html","b6a7cb3bccc6aa26043b9991dba13e98"],["/tags/typora/index.html","7d95d68c80ffa9bbfb1c9a48aeec9f25"],["/tags/vue/index.html","50733a4b09c65ddd7d42dd5385a05b90"],["/tags/享元模式/index.html","20a5bac088a462af7566a85aee7c54a7"],["/tags/代理模式/index.html","0ad5cf8cefd1c3057f8126c228fd317e"],["/tags/分布式/index.html","f70160acabbc4edb46cc246a0968e0a3"],["/tags/分布式系统/index.html","4d07b71bbfdf3da95d5d4fbb4a973b23"],["/tags/前端/index.html","d387d0d0a3ff4434f093e872be65b2e6"],["/tags/前端/page/2/index.html","8c67c5469e8ac44521582cc97e26cd3c"],["/tags/博客/index.html","40f52d92e1e66047ab8c0770546ec9e1"],["/tags/后端/index.html","9d621fe2c0163e12d204bf9e5e4dce54"],["/tags/外观模式/index.html","5e59b1dc08a01420a31a1f620a51d207"],["/tags/容器技术/index.html","2838e226231b89e4a057638fa24f354b"],["/tags/工厂方法/index.html","2773b31aee32f9cfac1f5ecea01da4ed"],["/tags/微服务/index.html","f867290ff8e7aa643186f9e752e7c7f8"],["/tags/抽象工厂/index.html","4c85402f08d42edbd425a5e5735f5438"],["/tags/持续集成持续部署/index.html","cc281313987232ad07b97bb1cbb10984"],["/tags/排序/index.html","485b8073c50171b105c41a186fe8ef5a"],["/tags/搜索引擎/index.html","cadcda1ef5ef9ec522d27fb9fc9e6ac0"],["/tags/数据库/index.html","9290e5123aa30aefb12fa299b6dd4ee2"],["/tags/日志/index.html","d07eba28d289d263a0bf4878ad64a671"],["/tags/服务器/index.html","0bca3022529c5fc4a27f446936012fa6"],["/tags/权限认证/index.html","bda468062a8b8b88a0c1909fc2e3f081"],["/tags/查找/index.html","1eb24a71db2fbe57490ca3712f8fa087"],["/tags/桥接模式/index.html","300c1fd069ac19c94f7bc34f2a68c280"],["/tags/模板方法模式/index.html","c9bf4269e165694df124563cbbd10105"],["/tags/消息队列/index.html","203729698af823c9a4cbf20e000d9bac"],["/tags/版本控制/index.html","40ace939a679ca323bf672849a505848"],["/tags/策略模式/index.html","15bdbfcdfbf52e8bcad544768e9eb7d0"],["/tags/简单工厂/index.html","3cf1acbdf1705d418bb37d2e3235938a"],["/tags/算法/index.html","2b38afd97123a34e3b888407b8f2ac46"],["/tags/算法/page/2/index.html","baa8ab49e0ee3e3d1c7119d2d6839ebd"],["/tags/组件化/index.html","605dbc2e663041329003ada519a9d2dd"],["/tags/缓存/index.html","44287e46e8b824cbaf24b4c46d681c0d"],["/tags/观察者模式/index.html","8ab65d4ff0e62dc784a7da4c0a7c74e8"],["/tags/设计模式/index.html","906f673e2b22ab3912d6a402ba425396"],["/tags/设计模式/page/2/index.html","a4131a2bd06501d69f91ed2208ac294a"],["/tags/责任链模式/index.html","d856bb14aa993f36026953386d308d9f"],["/tags/适配器模式/index.html","d517faad480092ce5f9ab6d0290f8ff5"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
