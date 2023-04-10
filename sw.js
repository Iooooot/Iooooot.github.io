/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","8e520a3d1ef00506e7caaad03bf431be"],["/2021/02/22/博客的搭建/index.html","0519540f316939e788efe78904da8a27"],["/2021/02/23/如何使用markdown/index.html","83b169e9215372eeaef57e65f5a3ad18"],["/2021/02/24/mysql命令大全/index.html","0f75b2af71fdfabd708ec56a7eff416b"],["/2021/02/24/mysql数据类型/index.html","6282b37919e71f51cd2825e49b1bdf33"],["/2021/02/25/Git的介绍与简单使用/index.html","b13a13daa1ff1044e536452364168dd9"],["/2021/02/27/简单工厂模式/index.html","766192bb6173e03e275b7528bf86bcc0"],["/2021/03/01/工厂方法模式/index.html","359c71b255ed172da8098e248449b06b"],["/2021/03/02/抽象工厂模式/index.html","b42447d2530dc7cc25ee83f1b0230015"],["/2021/03/03/单例模式/index.html","7bec58a672e7fdbc3450feec13abc4fc"],["/2021/03/04/观察者模式/index.html","266559e5975e024a12334bbc8e04b415"],["/2021/03/05/适配器模式/index.html","bf83746da529c4918f8f06263f83ddb7"],["/2021/03/06/模板方法模式/index.html","8ec72723a38d6dcc7513445e889eddf2"],["/2021/03/09/代理模式/index.html","e6157dc1e1e9ea641588e2394b524649"],["/2021/03/11/享元模式/index.html","eac59c69517fcacbeeea9dbdcf3b975e"],["/2021/03/12/外观模式/index.html","293461add635daace0573a69aa05ee36"],["/2021/03/13/策略模式/index.html","60e8f0df16c4e03c2fc02df5fcfaefc0"],["/2021/03/14/桥接/index.html","fcae7148cdf251f5e86575f2cef7d957"],["/2021/03/15/LeetCode-多数元素/index.html","077a422b8330b8deed878232bceb6f86"],["/2021/03/16/LeetCode之汉明距离/index.html","7479991c2ea880e0b4e254d997f958e3"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","347ab9fe83b204012a6eedb01d2a7bcf"],["/2021/03/18/LeetCode之两数之和/index.html","5f71b220611d340ed93c79b1305849e4"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","7c7ff488da50eddfc4082599c7d07056"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","79a9c24174d7e7ef2bad205423fd7360"],["/2021/03/21/LeetCode之有效的括号/index.html","7474ff8caebf3d3450497e4e3c4f75b9"],["/2021/03/22/LeetCode之移动零/index.html","aebd259bb44f0b56dd1ce15d39117b2e"],["/2021/03/23/LeetCode之爬楼梯/index.html","2ac80a3b917376bef7ed9f30103c09f1"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","46de9968d6e3ccf7f88a7ecd9e86ce16"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","b6b50855128952a788281e151c1622d3"],["/2021/03/26/LeetCode之最大子序和/index.html","45cf7462a4295e1665afa7901bb27709"],["/2021/03/27/LeetCode之子集/index.html","3cc385721cbec2c30228194472db4cfe"],["/2021/03/28/LeetCode之合并二叉树/index.html","86d32261b11b8ab5b9285f9bb7747824"],["/2021/03/29/LeetCode之翻转二叉树/index.html","82a94e438fb29b5e8c9e394001a8aa10"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","d7fbeefab23ee7b6f7c01d6635413389"],["/2021/03/31/LeetCode之翻转链表/index.html","a406a96daafd29276242610ec4887349"],["/2021/04/01/LeetCode之相交链表/index.html","5286fcc4f056bf71da8ea7c3537e3009"],["/2021/04/02/LeetCode之最小栈/index.html","9a847a7a8c5f192d61f25c82ef8d354f"],["/2021/04/03/LeetCode之对称二叉树/index.html","24947bfd8ecb5ce91b6cfa3566531c8c"],["/2021/04/04/LeetCode之环形链表/index.html","a17d324e13432c791dc6e6bb89f192cc"],["/2021/04/05/LeetCode之二叉树的直径/index.html","112a6f65fc5279f6eb35099f7fe28e7b"],["/2021/04/06/LeetCode之回文链表/index.html","f5edc60aec1da918318760e49dad3535"],["/2021/04/07/LeetCode之比特位计数/index.html","43f310a2cdf59e94ee2cb9e3dc3d7caf"],["/2021/04/08/LeetCode之全排列/index.html","6a348a4ff5d3604a74fafa26f3be1334"],["/2021/04/09/LeetCode之括号的生成/index.html","9d8822237f82e2991fb38fc88c2a9ff4"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","60a87dcd3cb094565260c85c1eb7c543"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","1bb6fd92585c4139052f557fc97ecf43"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","c7ab720bbacd86b97ee33f0ed6761af9"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","1181c1f68e8068c00d1d86f790ae6317"],["/2021/04/14/Mybatis/index.html","e692eb80386430af3d67d0beee884d51"],["/2021/04/15/Spring-1/index.html","86f7b150aad767f6d50e6537b8203861"],["/2021/04/25/Spring-2/index.html","4df945fe354df0bd07b5a81dd39893c1"],["/2021/04/27/SpringMVC-1/index.html","118e5c3618466bd121542ad3fc210662"],["/2021/04/29/SpringMVC-2/index.html","5ca9f8f25da209f71e6efc8efb03de69"],["/2021/05/03/冒泡排序/index.html","1ce20dc79309beee5efd4d8d58ecf566"],["/2021/05/08/选择排序/index.html","1f7eb192a2b562889e9a198eeb99efdf"],["/2021/05/12/插入排序/index.html","fdd4a6dfe2baef188d44f0abf04d0fcd"],["/2021/05/15/快速排序/index.html","65a3ade0bc4034a4e626d206eb713b15"],["/2021/05/19/基数排序/index.html","f0f8ef11254c6bf0ccd359fc9e78714d"],["/2021/05/20/哈希排序/index.html","cb109c3dccdfbe9ed8c1b41f6c818bac"],["/2021/05/21/归并排序/index.html","d5905da792662752d2329e39c69017fc"],["/2021/05/22/二分查找/index.html","9add388e2afc1963d660403683878481"],["/2021/05/26/差值查找/index.html","f7a89c0541cca590f1416b175776fc7a"],["/2022/01/12/高精度大整数计算/index.html","be2cf4213a354b4b007863d97f2c6259"],["/2022/01/22/前缀和/index.html","9ee3f5da4ee1b0ece2144aeb463f7ec4"],["/2022/01/23/差分/index.html","45e8ea196b753e290b7585f25dbf3ac1"],["/2022/04/04/MyBatisPlus/index.html","3e6d8f561474152e63b7111dec9af4ce"],["/2022/08/17/jQuery/index.html","da57594359b10b8902d2772bfa1949cf"],["/2022/08/19/JavaScript/index.html","e88ae046d4b94edc85538d66e30835c8"],["/2022/08/22/Ajax/index.html","ae3063c6af05465352ad5e19f58bf037"],["/2022/08/23/Promise/index.html","4817c324f497627ba1203c0cd251e17d"],["/2022/08/24/Axios/index.html","1632ff7eb4ccb8efc9d8d0dd527eca9b"],["/2022/08/25/H5本地存储/index.html","8c3cc627250b211fe0a1c105e4e82ecd"],["/2022/08/26/mock/index.html","bd530717f2d3bf3f984a26908a51ced8"],["/2022/08/31/VueJs/index.html","8832d673db8c2829b61433342e07f1fb"],["/2022/09/01/vue组件化/index.html","e0e2ba0ad521243d8a4a435a073a0ee9"],["/2022/09/04/VueCLI/index.html","3a0d77b88528c8757d912dfe99fa13e5"],["/2022/09/07/vue实现动画/index.html","2347d16097e0e1581bc4c1c10d5b7e7a"],["/2022/09/09/Vue响应式方法/index.html","c4773ed2ece30cfc5466ee71ed4f620c"],["/2022/09/10/Vue异步请求/index.html","7002356ff3b3f87f25a2dab9857e22b7"],["/2022/09/11/vue-Router/index.html","2c3527b417b4657e2d7ae95b66c07d01"],["/2022/09/13/Vuex/index.html","f1e1679b8e8058bcd4b9540fe59ad1f6"],["/2022/09/15/SpringBoot/index.html","6e7f4db675a460eccb196f2c2774e5d2"],["/2022/09/16/SpringBoot配置FastJson/index.html","7ca70a76ddbba86f398cfa555c5a96ab"],["/2022/09/19/SpringBoot参数校验/index.html","d66a21bf07bc10515f984319bb257ec8"],["/2022/09/20/SpringBoot的异常处理/index.html","567c66a281d44494eca470222e7ace9b"],["/2022/09/21/SpringBoot统一响应处理/index.html","3b411bcd5328c45e2bb407e7f0bd1ecb"],["/2022/09/28/Linux/index.html","d13efe03093cec1ddd1b6b508683a3a8"],["/2022/10/02/redis基础/index.html","4d56ae09ff1de8bd310f24906db0045e"],["/2022/10/03/Redis缓存/index.html","11da5f9da6b604315d8a3e915baeb400"],["/2022/10/04/redis缓存穿透/index.html","a5cc8cd4731418ddb52d035bf7a3a2d3"],["/2022/10/13/Redis缓存击穿/index.html","e4697b3cd0253688b83f44cc393d02de"],["/2022/10/14/Redis缓存雪崩/index.html","7acd03daaf47889fe1ae5bd12b316098"],["/2022/10/17/Redis集群/index.html","ee817523bde5dfccf78a9ebb334b2623"],["/2022/10/18/Redis哨兵模式/index.html","241c4ef5f22287928dbba6838e16c266"],["/2022/10/19/Redis主从复制/index.html","e87d35b2610f074ff93e8856e78dab90"],["/2022/11/03/Spring-Security/index.html","465a31ad9b0d920658c5ff29a626263e"],["/2022/11/08/SpringBoot日志/index.html","a9f9dd6a84d29baeb74dee142cb0d4b7"],["/2022/11/11/Swagger2/index.html","8c4c384c7ce1da964ca674b4a42fe5f2"],["/2022/11/21/Nginx-一/index.html","5fc322f618404a8c89e7e9993c7a9670"],["/2022/11/23/Nginx-二-代理服务/index.html","9cc95fa4e0b8b3c76db3344f184987f2"],["/2022/11/24/nginx-三-负载均衡/index.html","a0fffd4d84be3368fc4a4f483f7669b3"],["/2022/11/26/nginx-四-缓存集成/index.html","040b843464b74f4a10a8300b594df728"],["/2022/11/28/nginx-五-动静分离/index.html","d6c24f2d6f422d38f6ff78127f3edac8"],["/2022/11/29/nginx-六-制作下载站点/index.html","611699a48add1ca726094cf85de4b939"],["/2022/12/06/docker基础/index.html","06a6e55bb8170f778595fd3a01d51cd6"],["/2022/12/09/Docker高级/index.html","2156d615f81c7148afe683389050be83"],["/2023/01/04/MongoDB/index.html","e42ed923405cd25dfd0852cb72c93baa"],["/2023/02/05/消息队列/index.html","554b4507903aae53726627117cf5f896"],["/2023/02/12/RabbitMQ集群/index.html","80f8be3c6b0b65507abc2ff4c851b9c0"],["/2023/03/10/CICD/index.html","4830b32063f4d6e6042f28988c9e8cb9"],["/2023/03/11/ElasticSearch/index.html","9a77437742594df85484eb9ab194ca37"],["/2023/03/12/ELK日志平台搭建/index.html","00d57b77a0846e07c09b8d3470c796cd"],["/2023/03/13/NIO/index.html","8f80776309f2337d96f0df743531092c"],["/2023/03/14/Netty/index.html","4968268630fcc5b2d60596f25b81bc7d"],["/2023/03/15/SpringCloud/index.html","d6bb50bdaec39e265df5bcbce5c9c14f"],["/2023/03/17/分布式系统认证/index.html","332078e921fb4db74a2a805b6ad4fa18"],["/2023/03/19/JVM概述/index.html","61690bb3659e98aa87f45dacc515302d"],["/2023/03/23/类的加载过程/index.html","4e2288cf741429f80db0e8b946a69b79"],["/2023/03/28/对象的实例化/index.html","f88577f2250ea77574d3adb9aa401210"],["/2023/04/01/运行时数据区/index.html","b43108733d7cac9a63277a3c287e16d5"],["/2023/04/04/执行引擎/index.html","6c69c92089d3ec0fb69b2b723698575b"],["/2023/04/06/对象引用/index.html","51770f77fef92527052d061c9c4dcfcd"],["/2023/04/09/垃圾回收/index.html","850a0b280596bc7b10a46f904eeddcac"],["/404.html","7c59b6ce45167e22dcc5aefe9fb117ba"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","13dd64ca774ea60827b7664dd7824281"],["/archives/2021/02/index.html","64cf672a9d01df87b66859680778705e"],["/archives/2021/03/index.html","115fd51f39bf96a50d7ef82dac57c0be"],["/archives/2021/03/page/2/index.html","2f85e236336008f34b2a6bd265ea5245"],["/archives/2021/03/page/3/index.html","8373e995d8bfe50ea0f06301f5d08f10"],["/archives/2021/04/index.html","143d07bd729b0cd316e103cd4a776d1f"],["/archives/2021/04/page/2/index.html","81592b926505fa433e94d81f16ad3cac"],["/archives/2021/05/index.html","2e5d013fa82c973e791f90b07abc6aff"],["/archives/2021/index.html","f2b18d6f561d06f21e89de3a086f3cb0"],["/archives/2021/page/2/index.html","7eeff67d5afd22be3f91aa0bfea7e680"],["/archives/2021/page/3/index.html","34b9b9dbbad662299b38bff6068a2ddc"],["/archives/2021/page/4/index.html","e3c3616f71d6365114ff92c6ee1de18c"],["/archives/2021/page/5/index.html","4412268399db1c61c2fde044364d8cbd"],["/archives/2021/page/6/index.html","32d8054df657301020489d17be5b33b9"],["/archives/2021/page/7/index.html","81e6342c9d9a2114644982a80dd9cb2b"],["/archives/2022/01/index.html","b285b0c8cc491ee8cf288b2556ef1c42"],["/archives/2022/04/index.html","11554c5c04d8a2ea0f71634f10e7a04a"],["/archives/2022/08/index.html","95edbaabeff83bcb17741332e9ee25c7"],["/archives/2022/09/index.html","3cbfd03aa1f8d6e77834ae7cf7c44c38"],["/archives/2022/09/page/2/index.html","0331e2add0bb024faa0aa3508702cdc6"],["/archives/2022/10/index.html","a3f796a71e27a441833fcda463082298"],["/archives/2022/11/index.html","13a1ede3a2678596bbd30aca7802a601"],["/archives/2022/12/index.html","556cf27e22342fbe9c729f394fe8923a"],["/archives/2022/index.html","7211a4defb106c6e72b193406d112adb"],["/archives/2022/page/2/index.html","759f60de7a101fe3d8260e7b7cac089a"],["/archives/2022/page/3/index.html","3bf432d1afcdd8fa10a6645a1fe91b95"],["/archives/2022/page/4/index.html","f3b023e673f2e463a67f911627443ea5"],["/archives/2022/page/5/index.html","80946ddda4c18450ce57fd0c75dc8540"],["/archives/2023/01/index.html","6844a6f4964da9afc24338a1324b77ba"],["/archives/2023/02/index.html","89c1ccf4f9a40a462fe49e3964b98e7e"],["/archives/2023/03/index.html","95b4ab117852d4e66e80118fabc2c32f"],["/archives/2023/04/index.html","85bc3310420bbbc3bd8f6bc40fc5f8b9"],["/archives/2023/index.html","34d3031848a1a603ad4ee6a0f353e829"],["/archives/2023/page/2/index.html","a1356a918dfcf9e05c969b14e5ace37e"],["/archives/index.html","db1b09dcb7d3ce1ed01a71634d024463"],["/archives/page/10/index.html","b97882ebbb6d3ace97210040b2d7a097"],["/archives/page/11/index.html","18adce7abf0b3515bac8ad2a9b646d5f"],["/archives/page/12/index.html","f4f621b545b94135883bf5f22503e2f1"],["/archives/page/13/index.html","8aa4ed8876784029ca04289de65cb7b0"],["/archives/page/2/index.html","854c06f741a00732b82315f0a1b7b386"],["/archives/page/3/index.html","dfe57e39faf96bb218e43b79a83f93c7"],["/archives/page/4/index.html","d3c91eb3b67c495c624404495ec66922"],["/archives/page/5/index.html","a08c7a0e50932839ffe4d5e6bcae8599"],["/archives/page/6/index.html","482ce015bbfec7edbced86ed8f735007"],["/archives/page/7/index.html","74f479736cbe55464c23a9b98dd9fc5f"],["/archives/page/8/index.html","e9cfeba26a73619838b3fd554ce3f702"],["/archives/page/9/index.html","02301178b78982fb07aa7286ac852d3d"],["/categories/CICD/index.html","07b6d9d57336ffdcbc4b309d373740a5"],["/categories/Docker/index.html","06a1b552ddafb0b64ee538f4de6b2935"],["/categories/ELK/index.html","f12b3e0234afbfa8876034253059cada"],["/categories/ElasticSearch/index.html","b35a35a9455774afc613bf93ae9a8d11"],["/categories/JVM/index.html","b4dcaca536d946487a11242a3f3aa6c6"],["/categories/LeetCode/index.html","157c754bdf63ebd80d35295551d71471"],["/categories/LeetCode/page/2/index.html","b358ab73840f7287c42ffe54f3e08664"],["/categories/LeetCode/page/3/index.html","975aaf0d4e4afe7c8296abfc21c74b05"],["/categories/Linux/index.html","259bb9ede8f19654471fff20774cfd50"],["/categories/NIO/index.html","14ceab7ddf1827fabbdc8b3e83af3dc7"],["/categories/Netty/index.html","52faa6061bf1746a516ce985dadb46b7"],["/categories/Nginx/index.html","113a27351e643cb6c73b7c448be7d94d"],["/categories/Redis/index.html","274e1c01ca2e2fe361bb551fb9d52f59"],["/categories/SSM/index.html","2577c3ab233fae2d424d1ba97a2ea24c"],["/categories/Spring-Security/index.html","4a97635be937d850fd1bfdb943cebe35"],["/categories/SpringCloud/index.html","b52bb56c0c813cd78714536cd7775d37"],["/categories/Spring框架/index.html","9c1bec6817ac7af583d9964a0d40ec4b"],["/categories/Spring框架/日志/index.html","b913431543550bc9758f92879c961418"],["/categories/Swagger/index.html","8df1c7ef8e10f882af3e1fea0098af31"],["/categories/Vue/index.html","5d46c3c2499b03cd2dfc02f75c3eacf2"],["/categories/index.html","2ce4e9f8ccbeae09e2a72fe082d4066e"],["/categories/分布式权限认证/index.html","b299776d090ec9911c615e3c2064d093"],["/categories/前端/index.html","8b82fc194fc385922359f85abda7b62d"],["/categories/博客/index.html","025fb5910758337342ec49ef22939ff6"],["/categories/学习路线/index.html","663f3075e26dd913401081f72f0acc75"],["/categories/工具/index.html","051ad51c7636465cf23270a07d27865e"],["/categories/数据库/index.html","6bcfaf3942a9e63931a24779638c0ed6"],["/categories/消息队列/index.html","512267d34eadf23e98a7eb88aa331262"],["/categories/笔记/index.html","eda6083fa686dd1eb828e4c63a6b239d"],["/categories/算法/index.html","42d04dfab4b87a778837a80997969b7a"],["/categories/算法/page/2/index.html","df2f402fb902996aea69a26004265640"],["/categories/设计模式/index.html","8297eb93831a372743b0f1f09d994e26"],["/categories/设计模式/page/2/index.html","f8c93b48b7d4d301ec9d5e411558de07"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","9a54e7cb606cff49b8bb1353b512929b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","71d5ae7c2e0d194fd6f9c522330aa964"],["/messageboard/index.html","96d6cfcfe89cb771cdb028ebe7d2c02a"],["/page/10/index.html","9dd6fe35644dbe385ce37d10d7e37c54"],["/page/11/index.html","b2da996c897d03cbd34fe7d5832c7570"],["/page/12/index.html","4bcefcf2547efb469c326ae84bb2bc12"],["/page/13/index.html","3ef115d82b4b251bcd0d7f4cacce798d"],["/page/2/index.html","a96c7fa5c730ca8e66e6134f59dd5a83"],["/page/3/index.html","6ee0c2c0fccb1b35526607b4602b56bc"],["/page/4/index.html","1192c7c1b4b742f259a0240c34e7d2ab"],["/page/5/index.html","55f6de9aea29bd1c708cae9f7c955434"],["/page/6/index.html","c848a0c9663c052825de746a36e90a09"],["/page/7/index.html","d47a03f48493b9ffa34a0197bdaf25aa"],["/page/8/index.html","481b930a28fa8d9bc6a3e16be293e7a2"],["/page/9/index.html","6a58e6223eb364203baa70c0f7daa55e"],["/sw-register.js","6bd4b327bec8154f1bdf1b0856165ef9"],["/tags/Ajax/index.html","3521500059feaebfb44e7b6da271fa2a"],["/tags/Axios/index.html","b8bb9991da863f27777f9b8903881b1e"],["/tags/CICD/index.html","650a04c0cc8b7fde241749e728ad3c8b"],["/tags/Docker/index.html","e2cb6c96f4253a25ccab0eb494be84e9"],["/tags/ELK/index.html","689671e675edd33812eb9d5d24053504"],["/tags/ElasticSearch/index.html","5fd2d13db7140fa2b845fe51329a5305"],["/tags/H5/index.html","6676a9a5872959178f6b72c6af08afed"],["/tags/JVM/index.html","5f097250cd840e0ec94663577328ac47"],["/tags/JVM内存模型/index.html","d6c61a62b832d3e646f360839801c932"],["/tags/JVM执行引擎/index.html","b325de6c4bebba90b20b7d3372947be9"],["/tags/JavaScript/index.html","df8537b515db6b6755c15e4e00859b98"],["/tags/Kibana/index.html","294b6eda2a85b93a6fbaddc2dd0288f0"],["/tags/LeetCode/index.html","b05f238fb73ccbf375696cc51b0dab78"],["/tags/LeetCode/page/2/index.html","f0e5a7a9fc3320905cb3f45fbc1b5e44"],["/tags/LeetCode/page/3/index.html","d7faae472145f03f0b5e97a7ca3f23d4"],["/tags/Linux/index.html","5cb1877d509b1485bf893e3481bcb7e2"],["/tags/Logstash/index.html","f0d167a84f2233fa8647e7fbc625e777"],["/tags/Mock/index.html","29598a72e4a1cb365885f38fe14d69f2"],["/tags/MongoDB/index.html","4fcd2d6d83e09b1c937cade205a078b3"],["/tags/Mybatis/index.html","bae48bfd4db1db3425554b664253d0e1"],["/tags/MybatisPlus/index.html","5df1841e453fd5e6c2fa743b2b017853"],["/tags/NIO/index.html","a507b37154d4084048784e28c6000cca"],["/tags/Netty/index.html","ae1d6dc7e6bea22448cd9473b538f9d9"],["/tags/Nginx/index.html","7381f1f9907c93f1a0af60f913d9c3dd"],["/tags/Promise/index.html","2e1e6198d3ee2366761781a79854c3e2"],["/tags/RabbitMQ/index.html","cfc8843bf8e5f7b317b8a930071c5bae"],["/tags/Redis/index.html","ca5f9f824b61e8fe11c033d583ad0b69"],["/tags/SSM/index.html","a77ad4d3bb27c6e7156f832bbae608e7"],["/tags/Spring-Security/index.html","752e4da98bd7fb37b2a07a4bafc2c44a"],["/tags/Spring/index.html","15d3998a5d80710cdf9bdde12fb4bcd5"],["/tags/SpringBoot/index.html","6ad9c6c3eda0af8c334528461c4adfab"],["/tags/SpringCloud/index.html","3770c31c239690891a5206b1947c2681"],["/tags/SpringMVC/index.html","bef951e7c54893179efd1043b3023dc4"],["/tags/Swagger/index.html","5732c5e78e81d920e7a2b4b3e3040f3d"],["/tags/git/index.html","39ac68963aef4c18b7497e4e53ac02eb"],["/tags/hexo/index.html","d54314ddc127b12d44213dcc5f5cba88"],["/tags/index.html","89acde42643ff770d656d78bb86c0c32"],["/tags/jQuery/index.html","58e81102998665b8a4e562b46f289fb8"],["/tags/java/index.html","61a3019596866b3d7717a6990b41c2d8"],["/tags/markdown/index.html","d4f8e02f98587dcff7376ce120ff28b9"],["/tags/mysql-数据类型/index.html","5d602cc6f260f729e641b18c2ff2acce"],["/tags/mysql/index.html","dea832a93784b700f5baeb39c70de1a1"],["/tags/noSQL/index.html","4e1a7f20c1f34ce2c25a74a7612591e8"],["/tags/typora/index.html","19ec5e4d1b581cb9c0c04d5cda83d8f0"],["/tags/vue/index.html","dd810206e58af45d21aab26565943686"],["/tags/享元模式/index.html","2a259c22278d38c71fa5ca14da4e0789"],["/tags/代理模式/index.html","eae22ce3a9ad5bb704ea49f81e92503a"],["/tags/分布式/index.html","93bc4d38cbf6dae1355a22c4918c3896"],["/tags/分布式系统/index.html","a5973f535a42b72ce6a9fb3d99d49b66"],["/tags/前端/index.html","00332bdee6f129e0709c7c8cfdb166b3"],["/tags/前端/page/2/index.html","60bfb4ba10dca5fe83a36f0e25a15011"],["/tags/博客/index.html","7139ca600ce9deebd6b0cf797d68ef16"],["/tags/后端/index.html","5ada3c59567114241d4de8f2fb4f33ad"],["/tags/外观模式/index.html","aab0f3e5c6f7e79ebd0c46a013c02bf0"],["/tags/容器技术/index.html","3e0c37a907d4c06186cd04ccb414bb07"],["/tags/工厂方法/index.html","9c48d44546380107cfd2c250ebd13eca"],["/tags/微服务/index.html","2266c25a5402b8a1128b36ca917ad857"],["/tags/抽象工厂/index.html","5ca5635f538c642cb9a513ab8e4ea634"],["/tags/持续集成持续部署/index.html","2a17e727d004076926b9a8744b8a5b3b"],["/tags/排序/index.html","bafdf94f1153c23894642fd7792395e1"],["/tags/搜索引擎/index.html","d3e86314c321e1d229b3af0ad3f3d094"],["/tags/数据库/index.html","4175a9634802d5ccd15da77e5a0c907d"],["/tags/日志/index.html","920de1d82f8db58fd0a8597540898e39"],["/tags/服务器/index.html","448f4ecf816b2de83c7a93332fe8f094"],["/tags/权限认证/index.html","ede1cc16b44204c473b9cc6afaed9dde"],["/tags/查找/index.html","be65f63535dd0fad371a7dfb8b1b1c80"],["/tags/桥接模式/index.html","20593fa06825902d799cebdbb68b5fbc"],["/tags/模板方法模式/index.html","9983786ff9b2157ad39bb62e7b2546e4"],["/tags/消息队列/index.html","76814bc041c5cdb8c8899b66cafe8c21"],["/tags/版本控制/index.html","06414633569e628bb7e6ded2ad30e2c4"],["/tags/策略模式/index.html","c60efcaaf056a15f1bdb758d2f640d9f"],["/tags/简单工厂/index.html","22667ab3c43b2b50a1d6110d5e98d360"],["/tags/算法/index.html","7e2b04e6285c222df0895260cda8e7cb"],["/tags/算法/page/2/index.html","76d4f300a1654e9ed560530988409e75"],["/tags/组件化/index.html","740bec744eaf837735e1893baefe5194"],["/tags/缓存/index.html","36f6ed8b4601053fe86b3d3b5fb2ab47"],["/tags/观察者模式/index.html","c74d14b99d847a293ce21c7e13a7da36"],["/tags/设计模式/index.html","371d607ed48e6e42ad99eb2d59adc3fc"],["/tags/设计模式/page/2/index.html","13941ca64efaf5d01c3f082ba4a98277"],["/tags/适配器模式/index.html","a4756354e21a1d8ed7939138aa22968b"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
