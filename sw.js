/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","5e202b28cdca86564178dab571352f46"],["/2021/02/22/博客的搭建/index.html","65277578af7f9aca6605320f72b5a41d"],["/2021/02/23/如何使用markdown/index.html","48a10917ff2bbbe0de9a7b9fbc4b9857"],["/2021/02/24/mysql命令大全/index.html","5790d582db6e8229cfaeda0c207945f6"],["/2021/02/24/mysql数据类型/index.html","0a5f19f28f6c903f0f2e404b2ac643d8"],["/2021/02/25/Git的介绍与简单使用/index.html","c403e5ff35007bb8b2ca176414c3568c"],["/2021/02/27/简单工厂模式/index.html","456b17fdf7347716f7546262e98557a1"],["/2021/03/01/工厂方法模式/index.html","ae5396ba0846fd686e52c9c757bb92ae"],["/2021/03/02/抽象工厂模式/index.html","39e99db6af007a9a3d97d9e09222726d"],["/2021/03/03/单例模式/index.html","28f9c8c3dabafb6ad61541a337c3cea5"],["/2021/03/04/观察者模式/index.html","cd59105afbb00713ffa4c7050b635818"],["/2021/03/05/适配器模式/index.html","3a794558b12cbf94833f026f2af58a3b"],["/2021/03/06/模板方法模式/index.html","f50a469cf5bb192be36503424cd6228d"],["/2021/03/07/责任链模式/index.html","ee8023e30c14540cf709053f4daa7d2f"],["/2021/03/09/代理模式/index.html","6cd490c77236f951eca8e8172ade52cb"],["/2021/03/11/享元模式/index.html","0d80d7d85e5cb23f5351caeb5c7afee7"],["/2021/03/12/外观模式/index.html","cb807cfddbf347e2543f08a895d4ad7e"],["/2021/03/13/策略模式/index.html","bd42233352671fc63f35b90650627969"],["/2021/03/14/桥接/index.html","6e18b4fe42e4071985b481b7953ca70e"],["/2021/03/15/LeetCode-多数元素/index.html","1ec8ec6060592ee0d824569933e236dc"],["/2021/03/16/LeetCode之汉明距离/index.html","357abd7139f4021c9430438d1b9eb1d8"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","014ab07af3b03cbdc40ce7f0a9b4d603"],["/2021/03/18/LeetCode之两数之和/index.html","00a4c5c6d101b127369073de46094635"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","df5ca37c6fe1aef3c766e8bcda8b6c33"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","505d6ef689f8c1db04451d8862600598"],["/2021/03/21/LeetCode之有效的括号/index.html","201eb690944e7c5071fa9dfcd9d5fdc4"],["/2021/03/22/LeetCode之移动零/index.html","dac56072eea6fd894764aba286c85418"],["/2021/03/23/LeetCode之爬楼梯/index.html","fb18bdf085d10caeabf8a750c18f3a21"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","a8848b60016cca838672a663d4644ba1"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","23dabf331745c8ba9c17ae1f01cb1898"],["/2021/03/26/LeetCode之最大子序和/index.html","15e97090e7d9f60104ddfed88a11d5e8"],["/2021/03/27/LeetCode之子集/index.html","7517ee26bacdc32f7d20518006b491e9"],["/2021/03/28/LeetCode之合并二叉树/index.html","6fae2a7f88b60895513ab9cc057b009f"],["/2021/03/29/LeetCode之翻转二叉树/index.html","00836667f132bb07c63d8d8ffed23a1b"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","0f124ae70f4656d2404ad90f91fff6df"],["/2021/03/31/LeetCode之翻转链表/index.html","99b9bf0eb26d6456039b213d44d33416"],["/2021/04/01/LeetCode之相交链表/index.html","b6f4bc9c6ec11b303da6f9f07d54fc39"],["/2021/04/02/LeetCode之最小栈/index.html","3528649a675fdad448e3ae55a79ab6f1"],["/2021/04/03/LeetCode之对称二叉树/index.html","528f2bc33ccb73e0009146861f1456a7"],["/2021/04/04/LeetCode之环形链表/index.html","c61dbd47d28b320bdb1e7344bad46908"],["/2021/04/05/LeetCode之二叉树的直径/index.html","19dd9ef46c8058219fbfcc714b6d2b83"],["/2021/04/06/LeetCode之回文链表/index.html","58c6d372184f3369d1ef48d2c2a54d53"],["/2021/04/07/LeetCode之比特位计数/index.html","c6489212a6cb6b0b8d9cd78f5f9f210c"],["/2021/04/08/LeetCode之全排列/index.html","ea9b247f73bdd0b18c08cdb31bf2f465"],["/2021/04/09/LeetCode之括号的生成/index.html","8b47fc22b31673880c68b49bb55cedcc"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","08520d8ba7643cb1bc507dd786a529a4"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","02fc631d294878781e978482385b914f"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","c2fb5325e3403c435ca72abcfa8c775c"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","9d8f09dbf027d7f65f859822ff05cb12"],["/2021/04/14/Mybatis/index.html","f2297c545ec9031ec58b4238c36a80da"],["/2021/04/15/Spring-1/index.html","8b619cd58b76f4d3fd8fcc2bbcec5aa9"],["/2021/04/25/Spring-2/index.html","f53b007505214e9b5dd39cc811da37ca"],["/2021/04/27/SpringMVC-1/index.html","c4adf3b55d2c21eb9bfcefa1798a265a"],["/2021/04/29/SpringMVC-2/index.html","769437b79c6488c36f6361d1a3394aa6"],["/2021/05/03/冒泡排序/index.html","913f1593cd3a8d7a77945575ade360b8"],["/2021/05/08/选择排序/index.html","0dd471800368f87e98d0b0441835bd91"],["/2021/05/12/插入排序/index.html","d6d7467eb4f872eaba4728ee49ca161f"],["/2021/05/15/快速排序/index.html","1ad9ec4526a9370e55919ecb7ad2f1e3"],["/2021/05/19/基数排序/index.html","c61df3a2d4bf01afd0f26f0f490c7b33"],["/2021/05/20/哈希排序/index.html","c3ec9d7959a743bd38eefe24f3a55db4"],["/2021/05/21/归并排序/index.html","a96d1f57cd4bd910e9d6955fec745941"],["/2021/05/22/二分查找/index.html","c75244a7c0ce7f528355a270227f0cd7"],["/2021/05/26/差值查找/index.html","0197a0d13bd381f5b28353970b490cc7"],["/2022/01/12/高精度大整数计算/index.html","f229d50fb13fbf8c9dc455accd065c99"],["/2022/01/22/前缀和/index.html","3b6ab3ee7db3769c98b5d77d02b8e8ce"],["/2022/01/23/差分/index.html","d06cfe63cd7ded0fe6c86473be2a06d6"],["/2022/04/04/MyBatisPlus/index.html","618f48d94a3532aec352a4b41c335647"],["/2022/08/17/jQuery/index.html","a7940a507571bfaff463bea72688c0dc"],["/2022/08/19/JavaScript/index.html","b53e8cbf2ec3485e52f7e856d21746c9"],["/2022/08/22/Ajax/index.html","c1e16721a2812c8bc2f3a2f1a762c881"],["/2022/08/23/Promise/index.html","89ba9e97526b2bdd9c28852d2b7a30e9"],["/2022/08/24/Axios/index.html","f0242a5f33b56b62555ff23603b39ab1"],["/2022/08/25/H5本地存储/index.html","3d8ace547a22a9a2e51a076accfad101"],["/2022/08/26/mock/index.html","cc3195d27d7cef944369949613ce5ba3"],["/2022/08/31/VueJs/index.html","0ffb6ed4c47e06a468fd449f46e964a6"],["/2022/09/01/vue组件化/index.html","ee6c4d7ec4bf01a81a930586e527ccd0"],["/2022/09/04/VueCLI/index.html","985f86ab822d9096d00a823b0110a536"],["/2022/09/07/vue实现动画/index.html","bbd01b1f7339e6dc9f0700e1e9b18519"],["/2022/09/09/Vue响应式方法/index.html","e7ee3b2196d2eb7e7e65737cc9e7104a"],["/2022/09/10/Vue异步请求/index.html","16f6dcaa526525b7cc4d0ed491fb8d1b"],["/2022/09/11/vue-Router/index.html","131ec313c63b71e7b994e0df40e1cd9f"],["/2022/09/13/Vuex/index.html","db081986a16efcc9572a045a94ddca99"],["/2022/09/15/SpringBoot/index.html","8637d514af752b6b043766f0b8e99e22"],["/2022/09/16/SpringBoot配置FastJson/index.html","be528cc65973b9d2b46be4bc69980f38"],["/2022/09/19/SpringBoot参数校验/index.html","29a0c3ea6de3356ebc6153333deebb6b"],["/2022/09/20/SpringBoot的异常处理/index.html","11f57b1c32907ec085551bc3af3cd0cd"],["/2022/09/21/SpringBoot统一响应处理/index.html","396928671a470805776a06ece72708ff"],["/2022/09/28/Linux/index.html","cdb5e6b1b15f475a360b31a9786472fb"],["/2022/10/02/redis基础/index.html","14cc798d6ee194fccdaa12031fa97cb6"],["/2022/10/03/Redis缓存/index.html","9a2fda228888973b72d170980a8a4dd7"],["/2022/10/04/redis缓存穿透/index.html","7862324934813ffa8ddc8c011b5dc3a5"],["/2022/10/13/Redis缓存击穿/index.html","7748db66fc378164de0130cefa67b183"],["/2022/10/14/Redis缓存雪崩/index.html","232e0f7dabe099f27d1cdb595ab20472"],["/2022/10/17/Redis集群/index.html","b518a62ebf0f0d05e1dbb76df846df60"],["/404.html","0ee42ccf100aaf90954f83e62887d3db"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","99b008829b14237269823557b37472c2"],["/archives/2021/02/index.html","ab28e95280d73a6a73453e1b9443fc1c"],["/archives/2021/03/index.html","51569e68b061aa6f2a5f3e1f0091df75"],["/archives/2021/03/page/2/index.html","6cebca14f3b328197429e7480c4da81a"],["/archives/2021/03/page/3/index.html","d53c84783fe30fc9de7f0a4eaae58797"],["/archives/2021/04/index.html","0f97b232b6aaaab30ac7311819fc15ed"],["/archives/2021/04/page/2/index.html","3bfbd302220c4778fb1b96e3480d3fbe"],["/archives/2021/05/index.html","aca5cd6b6547902cc15929cb5f47d067"],["/archives/2021/index.html","4bb0ea9add8fbb61331607cf74ae26e2"],["/archives/2021/page/2/index.html","f91b72a6d38158246d9a330b1fd921fe"],["/archives/2021/page/3/index.html","b6287432731807654c650b51fb852ff6"],["/archives/2021/page/4/index.html","7019cdd974faf59454a627d857a07d50"],["/archives/2021/page/5/index.html","4901a4b773912c3215265c52122472ab"],["/archives/2021/page/6/index.html","a469c7fcca31dbd0655b5c5173187293"],["/archives/2021/page/7/index.html","951b7f7bc062547f9460dbaf9f424ff0"],["/archives/2022/01/index.html","a5b170f605c21c5e9def4d268843f958"],["/archives/2022/04/index.html","d7ca47bb1081aa5040dd7c4e3c5f2169"],["/archives/2022/08/index.html","fcd4e37a2fa1073c2672387136848512"],["/archives/2022/09/index.html","41b5c0e4f1bbbb598eb6bb73b8fe1c4a"],["/archives/2022/09/page/2/index.html","61c5fa11703db646afe944ab4cf4c636"],["/archives/2022/10/index.html","3e0cb31c20eb45632ceb21c71d2d04d5"],["/archives/2022/index.html","09e287818d2e764af27cd0c5edba0f2e"],["/archives/2022/page/2/index.html","51b4d9ce2454716e8411be3803fa5a32"],["/archives/2022/page/3/index.html","2b946d4410d91e10060e2a3c842a28c3"],["/archives/2022/page/4/index.html","ebb7c2c224f234b824134f267012bd88"],["/archives/index.html","4564f45d88146edc7ce104b2ee8d2421"],["/archives/page/10/index.html","0ecd8e0cb0fa9ef76eb0df9093bf7c6b"],["/archives/page/2/index.html","8c99600f22f04c8e4ba4af6256e12028"],["/archives/page/3/index.html","345fe23093d1500771fd4208b93469bd"],["/archives/page/4/index.html","df37910b85303d122438be79ba8e32c5"],["/archives/page/5/index.html","abd3afc45720d2cf2746590c1db6b7d2"],["/archives/page/6/index.html","bde379de8b095e88987a0e701b27b276"],["/archives/page/7/index.html","e2712c04e3a61430379091d79bfd1506"],["/archives/page/8/index.html","4d1c13309e544c388b49f2b5e0bb76c6"],["/archives/page/9/index.html","218bd22ec704a9e53809a0a988482911"],["/categories/LeetCode/index.html","39b7e3777f7dc6ef127d2f0f73e2a169"],["/categories/LeetCode/page/2/index.html","b687410c00cea2569afcba58ef481439"],["/categories/LeetCode/page/3/index.html","6c75a20c7b83dde7d1fe6f04897f4746"],["/categories/Linux/index.html","c6b47d40761174c48040147b30c980af"],["/categories/Redis/index.html","b57ff28925b8749efbc42861d709bb5f"],["/categories/SSM/index.html","7425f7bb58f6723a48b52661aa1adec0"],["/categories/Spring框架/index.html","fca2d8668f50e6fc1b23c7953f382ced"],["/categories/Vue/index.html","cdbff22cb8233aa1729e2dce7eb064e4"],["/categories/index.html","bfb160d3f0759df3b88fae62784763c5"],["/categories/前端/index.html","d63e2601393ebc94c122fcd05855bd2c"],["/categories/博客/index.html","ecea851040b0471a258e95d264f74b58"],["/categories/学习路线/index.html","7d3e5df5b35c20a88d71801cece1e602"],["/categories/工具/index.html","fe31a3883ab03c9303ccf4346d74109b"],["/categories/数据库/index.html","c0d389590f9ad11478d708102e2e9add"],["/categories/笔记/index.html","463218338cf588242c65cdc5205836b4"],["/categories/算法/index.html","dc44fa9f3dd238f7d143b47c6f2ebbe0"],["/categories/算法/page/2/index.html","c12d8dc02c369de9d018958e8b9a0a84"],["/categories/设计模式/index.html","214ed5bf7e0a8441dd76bd6230f4c0f6"],["/categories/设计模式/page/2/index.html","f75bf8ac5ed2c6112492da8bb03eff4c"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","c10fb86198f83b94ca642befc3c31f74"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","fd0c60c6d66ab267c3fd0ef6e01bdc6c"],["/messageboard/index.html","a4a75adb5e30d6e97f777dd6d9746dfa"],["/page/10/index.html","895322ba6b929238a3acb8085c43d0ae"],["/page/2/index.html","072f0f87997d2626127b850e7654041d"],["/page/3/index.html","8cffa61aa17f7fbf309aab61dafce279"],["/page/4/index.html","62a8426a17d2d52b7528aec0d7586623"],["/page/5/index.html","49f4bfc4e950356d31c1f00d92508b62"],["/page/6/index.html","a03722df4f6c00c9f54ee1501bd88907"],["/page/7/index.html","92bbb6c24eff91adfeaecbf4c91790df"],["/page/8/index.html","57f52ecbdef8589e10607ed7a2e77af9"],["/page/9/index.html","39606dd002f127bb3e2b7382496f2a37"],["/sw-register.js","5e7bb92605ce01f0ca24f39f2021f54e"],["/tags/Ajax/index.html","583824017f2f3e42438fdd5f8d05d0b7"],["/tags/Axios/index.html","fd967f3c583a4b222b0385a1ee0e1567"],["/tags/H5/index.html","ad8809521bb9c9d081cfa52e1d845916"],["/tags/JavaScript/index.html","791614ee8ba6099c519c8e5b955e86f8"],["/tags/LeetCode/index.html","f98c02a45d047c2cc5da43e4d886ff18"],["/tags/LeetCode/page/2/index.html","a32e6cbe6c53f40557f2e8fd42569497"],["/tags/LeetCode/page/3/index.html","d1389e6e825323e9a6604f93c08acf7e"],["/tags/Linux/index.html","25471ad68390ae560c02ec3c8fec21b1"],["/tags/Mock/index.html","f75efd86e2b66e2143ef912310db2721"],["/tags/Mybatis/index.html","1fe911a8663e9416e248a8f798e2b7d8"],["/tags/MybatisPlus/index.html","350f4c44ea9cfa39c4ccf1caef5cc363"],["/tags/Promise/index.html","7857e91dea94ca48b51658f335abc5ee"],["/tags/Redis/index.html","a9e8dba9a87097e01ac568e76b27f405"],["/tags/SSM/index.html","29c5661575568e4046e14ccc2bf8c0ce"],["/tags/Spring/index.html","087996ca2fdf3b754aa536204a0da30c"],["/tags/SpringBoot/index.html","343c4ddfffb8f1c8ecbff7b54af7cc99"],["/tags/SpringMVC/index.html","170ebe618b84d43113351983737c0fae"],["/tags/butterfly/index.html","eb9f1d0d534edb2dfdc668e26a1d7ebb"],["/tags/git/index.html","0391c7365a757d09dc1a5e3e8f72ee86"],["/tags/hexo/index.html","8df84f2395e3e56e1d542d365834cc3b"],["/tags/index.html","d66e82038506224b0991f6c7090a6063"],["/tags/jQuery/index.html","b13b59a18a8c3d6c6249b908892e93fc"],["/tags/java/index.html","bc9ff2e5a72d85962cdc3d45b8bd08bb"],["/tags/markdown/index.html","e62676df2705d01ea1073a804f30fb45"],["/tags/mysql-数据类型/index.html","c8d4e1f53aa28516ff0cb3399f97a968"],["/tags/mysql/index.html","5b354ff7acbcd2ceba4c2f9ad2c13b8e"],["/tags/typora/index.html","1cfdd0cb93ad1d4c2b3ad3ea7dedbbbc"],["/tags/vue/index.html","7266b62a79ec59d8870eabc445405f3a"],["/tags/享元模式/index.html","0114c8eaa68fd507cd9b8408dfbc2ed6"],["/tags/代理模式/index.html","8ea329f0c084ebca06af5e2f84349926"],["/tags/分布式/index.html","c87e5ae20b73d46fa1d3f2637bd85625"],["/tags/前端/index.html","c42f7e250d3ba4354dee6470f6e9f5ae"],["/tags/前端/page/2/index.html","546807d76851daec3e73f1424b30a0d4"],["/tags/后端/index.html","2f1f691065bbe612fe80bb2b063ac0ff"],["/tags/外观模式/index.html","0c270c172ada2bb399c96574882f6321"],["/tags/工厂方法/index.html","ff54f36c2235aee7048277d84b9c979b"],["/tags/抽象工厂/index.html","8dce2b69f3f19adb5ea7b8351d22e942"],["/tags/排序/index.html","11c25336f26108bc71b0a4cb2bb893be"],["/tags/数据库/index.html","d38a2c4a3d4e21cc693235079dcf5c90"],["/tags/查找/index.html","6f116765df80c92e303a07c9985e2549"],["/tags/桥接模式/index.html","43fc87fd52b7e663ce32e62eea18f1e7"],["/tags/模板方法模式/index.html","72d8780c194cdf5ea8b6ec6f0845f107"],["/tags/版本控制/index.html","2aa836ee517eb3642a90c1dd505d9b55"],["/tags/策略模式/index.html","8020323744c573267577491fd9667e4f"],["/tags/简单工厂/index.html","9193d484dbc90556b4d48269cbc067f9"],["/tags/算法/index.html","10c940799bc9b6131060a7cee035d599"],["/tags/算法/page/2/index.html","383c6e904b297ee36fa1348a9a2a784a"],["/tags/组件化/index.html","fbd95b39df41788c2675fb1cef4d07ac"],["/tags/缓存/index.html","519fc7bc822e300ca40da7f938664755"],["/tags/观察者模式/index.html","1fe58accfbccee51aa231121cfa09691"],["/tags/设计模式/index.html","b112b02479a2dbfbeb1972930dbd3c74"],["/tags/设计模式/page/2/index.html","2d9d37ef886947f6f624b78f2a9fef1e"],["/tags/责任链模式/index.html","6fb76e66acf9e1752000be2a3d954bfc"],["/tags/适配器模式/index.html","322669d5216a070cf1124e6c3a7615a4"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
