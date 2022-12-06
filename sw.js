/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","e199a5f78b797685251841fe01a0d056"],["/2021/02/22/博客的搭建/index.html","3ac8eef0a4c17559f48a8d40dbc8d1bd"],["/2021/02/23/如何使用markdown/index.html","2f537214d3416c9fb6edd5ac9163607a"],["/2021/02/24/mysql命令大全/index.html","0281f44a086318a159db03ca685686bc"],["/2021/02/24/mysql数据类型/index.html","1b54de6eeada34f4f7cbefd95afea84b"],["/2021/02/25/Git的介绍与简单使用/index.html","c0a53bbd442b238e9ceb6c915c73af78"],["/2021/02/27/简单工厂模式/index.html","059f95d0e3ed388803132c73532a0b46"],["/2021/03/01/工厂方法模式/index.html","4d73a09c30da68dff63a3578b3874396"],["/2021/03/02/抽象工厂模式/index.html","604b49cd535e00a4e188460da05dbc01"],["/2021/03/03/单例模式/index.html","07b5bcad96547cc04a960832e79c4b35"],["/2021/03/04/观察者模式/index.html","6f2be3d24462fcdd277e12ccac129ab4"],["/2021/03/05/适配器模式/index.html","a5f857cc12776ba601e0d7e677429275"],["/2021/03/06/模板方法模式/index.html","04f40f63461fda486b187b5de717a5c3"],["/2021/03/07/责任链模式/index.html","f304f4e71e9d60a9195455b77f5253e2"],["/2021/03/09/代理模式/index.html","3e599b857999ade0af33b72d55c83c61"],["/2021/03/11/享元模式/index.html","852efbff662fbe85132a4c42b4125488"],["/2021/03/12/外观模式/index.html","54582df6556b38a170000972e700a54d"],["/2021/03/13/策略模式/index.html","74efd98985496319fc1aa650038605e0"],["/2021/03/14/桥接/index.html","519f5f4d6d7ae5ebc66471349fcaa8e2"],["/2021/03/15/LeetCode-多数元素/index.html","55edf1b7195eda86b61fca7bfbe3e410"],["/2021/03/16/LeetCode之汉明距离/index.html","dec62e225c99901b7ec564333d2ea673"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","9a03239628f0d3a8aba0286dcd1a02fa"],["/2021/03/18/LeetCode之两数之和/index.html","d297ea3adcad9feff3f6e56ac65b9d63"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","0f2911d142a7dd257b0962691d50f20d"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","b776a86c9df6ae20322023e33530a0bf"],["/2021/03/21/LeetCode之有效的括号/index.html","ba0eb7fe9f7d77ec6deb8d6466efa8eb"],["/2021/03/22/LeetCode之移动零/index.html","1237dd8ed25f4ce793d71ebb1afa1acd"],["/2021/03/23/LeetCode之爬楼梯/index.html","882aed3aa6fd1bf148a8a56d1720d526"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","9d4bc84bec2eef752b98bdaf7fa333ae"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","052da8b75fd4db327a862179c4bfdac6"],["/2021/03/26/LeetCode之最大子序和/index.html","e35b8d3bece1bae7dbbb83942cacbc7d"],["/2021/03/27/LeetCode之子集/index.html","d83cc3e7c946d04199e23abda2e7d899"],["/2021/03/28/LeetCode之合并二叉树/index.html","d508396a7d41318bb884ea140b2352d2"],["/2021/03/29/LeetCode之翻转二叉树/index.html","4af2c4aaa1fb5c88236cd07eab7e33c1"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","9306eea33598c68c82ca043d00ed4231"],["/2021/03/31/LeetCode之翻转链表/index.html","52e2252730be8b4080f18248692bc096"],["/2021/04/01/LeetCode之相交链表/index.html","f0276e25a13a9e924d4eb041d0dfc6b3"],["/2021/04/02/LeetCode之最小栈/index.html","a8ffbf8d38a63d829e6950cb7c33e237"],["/2021/04/03/LeetCode之对称二叉树/index.html","8a39a89e3dc961450c683871923b7fc0"],["/2021/04/04/LeetCode之环形链表/index.html","6cbd1ffc6c30d503db40b65fd0906746"],["/2021/04/05/LeetCode之二叉树的直径/index.html","002484e201fbe973e72a1198848b00af"],["/2021/04/06/LeetCode之回文链表/index.html","8d85d23b452bf57abac23ef4eb2f058e"],["/2021/04/07/LeetCode之比特位计数/index.html","95d07d9d476eba62cc541789fe41f5ab"],["/2021/04/08/LeetCode之全排列/index.html","d0b23228e85a6923cefc18543c44a305"],["/2021/04/09/LeetCode之括号的生成/index.html","1138286315048bd10780decffac6e62b"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","bb50af18cb1c36b1daa85919d71dd4bc"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","1a06b1273d26fbe98ce1a2ba6c5f79a5"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","26c80f6e6def265bbcd9b8b27fcd1343"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","d42922c9ea6c7c26a0a717d0b269d6cc"],["/2021/04/14/Mybatis/index.html","dd65b9c19f080f40eb1f286b556dbede"],["/2021/04/15/Spring-1/index.html","d57f3a96c9dbcad34705cdbd04c236c3"],["/2021/04/25/Spring-2/index.html","116715fb4404f941d84784dde91e1354"],["/2021/04/27/SpringMVC-1/index.html","30da1ce440b22bb92e1bf3ac3f19eeaa"],["/2021/04/29/SpringMVC-2/index.html","946d01425191e2e7dace881b4b0caf13"],["/2021/05/03/冒泡排序/index.html","cacbb8cbcb546e36deee554da72f7566"],["/2021/05/08/选择排序/index.html","47b7cce960786c92f60f0e48858206d0"],["/2021/05/12/插入排序/index.html","e5672be5eb9410de76557c108b9335ae"],["/2021/05/15/快速排序/index.html","a3d372568e2956edc0ffe7e748bb0fc0"],["/2021/05/19/基数排序/index.html","f7196f1db01374e25451b703511f5f37"],["/2021/05/20/哈希排序/index.html","3fd24523118f146681c278a12f594fd1"],["/2021/05/21/归并排序/index.html","85a284acf9fe86b3709242b69f94a749"],["/2021/05/22/二分查找/index.html","37ea07e3b43625dee93b784e8b3ec108"],["/2021/05/26/差值查找/index.html","06ebd2b82a6808ab301e2572125cb670"],["/2022/01/12/高精度大整数计算/index.html","4d47ea45aa5508f12cd4c12dcbd6ed46"],["/2022/01/22/前缀和/index.html","6a379abd4bf2033cdfcf2b3a4a50ecdc"],["/2022/01/23/差分/index.html","f6154a72f1f84324a50f55b612a2b4da"],["/2022/04/04/MyBatisPlus/index.html","616da293e4ec8f074150012548b06ef6"],["/2022/08/17/jQuery/index.html","28b2937266657425ed56c788754bcd63"],["/2022/08/19/JavaScript/index.html","4aaa42e91bc2debe4dce67ad482c32b1"],["/2022/08/22/Ajax/index.html","9250ce6d3069c497af8bdabfb9f6b49d"],["/2022/08/23/Promise/index.html","6138feee9dddccb6b7a40ec528aab3f0"],["/2022/08/24/Axios/index.html","1e59e26ea1a80e51201f7c3d4aa3a208"],["/2022/08/25/H5本地存储/index.html","04bff281e6ecd4ae82c0c28b09498868"],["/2022/08/26/mock/index.html","601883cd69d4f392c778502a2d5337cf"],["/2022/08/31/VueJs/index.html","b58f39f9385f3220fbd8b0f3edecad69"],["/2022/09/01/vue组件化/index.html","dfc96f6b9cbd25577410b7e3001b9fce"],["/2022/09/04/VueCLI/index.html","bdb1418847edeab9e10a72d8fca216b0"],["/2022/09/07/vue实现动画/index.html","d37c42468afb5250c1650b1562d42280"],["/2022/09/09/Vue响应式方法/index.html","c7da91d45281c8ccf4004a77edb5c783"],["/2022/09/10/Vue异步请求/index.html","b0a69d9c134082b8b6cb45041469e078"],["/2022/09/11/vue-Router/index.html","e15d903a3095fda93b5c7965d39fdfa0"],["/2022/09/13/Vuex/index.html","403bb9bdaf19120938fd920f70f5842f"],["/2022/09/15/SpringBoot/index.html","33b2380dff8957d0999b6077aba7181a"],["/2022/09/16/SpringBoot配置FastJson/index.html","6d10dc0ab17b18a60bee0396ccd1327f"],["/2022/09/19/SpringBoot参数校验/index.html","dcc978a0f6f69a7ea952a51125c881a4"],["/2022/09/20/SpringBoot的异常处理/index.html","be769f56f8e8b75da55fc2c225fa7387"],["/2022/09/21/SpringBoot统一响应处理/index.html","21aca99f7fec55c08b97b40172c7bc58"],["/2022/09/28/Linux/index.html","3d51aa9169eff331cfa4537949ba4d82"],["/2022/10/02/redis基础/index.html","cda01ae4c5b3333b8e1213de46653bc9"],["/2022/10/03/Redis缓存/index.html","a16c2bf45cb5a2ba9e3d1e0aebfe0959"],["/2022/10/04/redis缓存穿透/index.html","2a9a4103974952c3805ca31c9e1d1b88"],["/2022/10/13/Redis缓存击穿/index.html","1de381632779b8e1c556748bcca2856e"],["/2022/10/14/Redis缓存雪崩/index.html","ed79ffc1e8a942e541754629ef104b58"],["/2022/10/17/Redis集群/index.html","5a66dc3a9cae7b73368b2b2dcd1d579a"],["/2022/10/18/Redis哨兵模式/index.html","303cecd8930761c5ba534849c67be681"],["/2022/10/19/Redis主从复制/index.html","3d1e2e4a2198a254872124b636596ac7"],["/2022/11/03/Spring-Security/index.html","d6086d324b2dc4a6bbb37f83277de60b"],["/2022/11/08/SpringBoot日志/index.html","868d374c15bc0be732df010a5b113344"],["/2022/11/11/Swagger2/index.html","8e56281e7e140ab16d2c2e41d525e9b1"],["/2022/11/21/Nginx-一/index.html","e20ed403d1d9b21a5ecc9c638b7a01c4"],["/2022/11/23/Nginx-二-代理服务/index.html","ca1da87091b1fb70f2dc376a3c497e69"],["/2022/11/24/nginx-三-负载均衡/index.html","c1ce2e3e1cea5322980fc0ad8efa04e7"],["/2022/11/26/nginx-四-缓存集成/index.html","9db9eeeaeb747cf506136ecc4d019692"],["/2022/11/28/nginx-五-动静分离/index.html","2c8f1a146f950324bbfcfae522a9631a"],["/2022/11/29/nginx-六-制作下载站点/index.html","ca2b10c2f6006127063e68c072c9c9aa"],["/2022/12/06/docker基础/index.html","40da19eb9e2ea57b8296b460c52be843"],["/404.html","835121774b190d1799fd910f781a27f7"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","e9bdfb42400571e636f2beb0810b7bc8"],["/archives/2021/02/index.html","a828bf17cbf6d76a806ecdebf1d9119c"],["/archives/2021/03/index.html","7eb704bf7785e2fa1170c17d80defb83"],["/archives/2021/03/page/2/index.html","1057282a0028209e2fc02dfc5217ae51"],["/archives/2021/03/page/3/index.html","4ee4513a63a001b3decedfd6de2b11ab"],["/archives/2021/04/index.html","348e66251f3a2510d07b212ae5b2fd4f"],["/archives/2021/04/page/2/index.html","ede29049e94d6860698c0c3c062ae0e1"],["/archives/2021/05/index.html","b116185339c0130b38f7f853bd1b827d"],["/archives/2021/index.html","bcb4d390e7b78d9c72d42785c8feffaa"],["/archives/2021/page/2/index.html","976c84ac543972d91a54042f69716071"],["/archives/2021/page/3/index.html","655583b8608ddd3c6719def39f596bde"],["/archives/2021/page/4/index.html","93c7dbbfce724bb04f1ce91a97d0d700"],["/archives/2021/page/5/index.html","82d369ffb4be858966049dd124768f64"],["/archives/2021/page/6/index.html","04518f73f563666c996c6cebd6599cf2"],["/archives/2021/page/7/index.html","c250c6f617c12e5159936ba49e99dc1d"],["/archives/2022/01/index.html","6344e7c596ee271187affae97f5b1994"],["/archives/2022/04/index.html","5d41a5494c3fea8589ee89e28ffe228c"],["/archives/2022/08/index.html","2bac9da34d3d2b9b88deb3cdcc71f5f4"],["/archives/2022/09/index.html","82800cfc97d119a7d649061732c6b765"],["/archives/2022/09/page/2/index.html","4253d204426df64d564b9cc9fd7d0e7d"],["/archives/2022/10/index.html","d739595830632d08cfb13633e0064f5a"],["/archives/2022/11/index.html","963196a05832a182e75e13bc1970a6b2"],["/archives/2022/12/index.html","4f863a9706fed4f2a865c8e956d38e0a"],["/archives/2022/index.html","fc6bdcc4c33a08ed9246b9b9974a2e33"],["/archives/2022/page/2/index.html","14779c43cfab86368eeef89eb074aea5"],["/archives/2022/page/3/index.html","92dd6ed5a0ee4d9e5cbe99e648efe39e"],["/archives/2022/page/4/index.html","9fe2a52509b2bb2adb903dcbb594d1a0"],["/archives/2022/page/5/index.html","0dd3a25542159836b1f6d26e726d1197"],["/archives/index.html","dd8d59bf2fd457fedc725fce16e658d8"],["/archives/page/10/index.html","38c7dab3dfc78dac2a5026b75b04e7fd"],["/archives/page/11/index.html","673c014069977bebdf7bcd413788bfba"],["/archives/page/2/index.html","8180147657358860f56ea3ebcd7fb2ae"],["/archives/page/3/index.html","bc46c4e2564e1f21a7d618310997eaa0"],["/archives/page/4/index.html","a39c357af39cc7353cab2aaa6c852d0d"],["/archives/page/5/index.html","ecfd37122b6be3d9da9ba302d1d7ba59"],["/archives/page/6/index.html","e9c39668f32c87806ab679cdd539e6e2"],["/archives/page/7/index.html","4e9ee62600b6f92e23d102323b0a5336"],["/archives/page/8/index.html","15ca2c09396b048cfc458a932087151e"],["/archives/page/9/index.html","2833565d248c6ea4d7cd58da389b3701"],["/categories/Docker/index.html","bf5271ab9eb3c149cb42a89bfe6bd73a"],["/categories/LeetCode/index.html","277767d8b15a081d95c81861d8b3062a"],["/categories/LeetCode/page/2/index.html","26297963663c5423cc051014f68df650"],["/categories/LeetCode/page/3/index.html","bb19cb77c20c1a2ae74657cd4c789e36"],["/categories/Linux/index.html","bc1b8e6dfeacc8127a08200c8839afe4"],["/categories/Nginx/index.html","1b9baa139d91794b14e7235d1f999f73"],["/categories/Redis/index.html","b3c6e586d4f22f20ecbac393fc42f487"],["/categories/SSM/index.html","99cb8d92df2e9b56d3ba403f7ad508fa"],["/categories/Spring-Security/index.html","246d88d1d8a672404299e50a755f497c"],["/categories/Spring框架/index.html","759006150885761cf386cab9724ebea8"],["/categories/Spring框架/日志/index.html","2323ca5af0189081c5e1f95b6f001f97"],["/categories/Swagger/index.html","feb09b7d4f5b431d41a0d2d6b5716259"],["/categories/Vue/index.html","9318831c1be3755982bceb8a0f6d816a"],["/categories/index.html","327fec458314539655d04fcfa517152f"],["/categories/前端/index.html","d4955837fa9a8ef3063b7277815bdf27"],["/categories/博客/index.html","b512c46dd7721b1dba86f84ef6d6a7a0"],["/categories/学习路线/index.html","4bb4328cb7f301b5a8c8e5a4ec79c0f6"],["/categories/工具/index.html","bdfec0adfeb4f6ae635eff50515966b7"],["/categories/数据库/index.html","91eb6445e5d5dcea68a8a9b95a1a8e85"],["/categories/笔记/index.html","cf5f607259086eb630959788e6328265"],["/categories/算法/index.html","9d3308835686312a2cfd6605d0102445"],["/categories/算法/page/2/index.html","e9db1b8d55587e65fe49a768b6ca4b6e"],["/categories/设计模式/index.html","7f41da4b7e266a323450981b7275f8f6"],["/categories/设计模式/page/2/index.html","54d99cf3668712c3f63454812be269b3"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","1b8a3d2dabf92f09948bc1304495af05"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","0f15fbdd4f99e404ed9c31435ad59192"],["/messageboard/index.html","9989fa7551048f84a68500d189bb4986"],["/page/10/index.html","328ba73d5e4397c06c556bd510bfc4c7"],["/page/11/index.html","1fa4eb8ec7a676f12c54fe984ddc3dfb"],["/page/2/index.html","a63a7a1567c7dcebb883a4d133c41c83"],["/page/3/index.html","aeec299ecd6d1804074613abd909e524"],["/page/4/index.html","7a129a56ce0f080ac617f479e20fb391"],["/page/5/index.html","b3224a676ba739359ff1a316f949b709"],["/page/6/index.html","62e58cdf0d9cce4f01836e8a0b4a47d3"],["/page/7/index.html","52b15447567642cc689e1c2d7d0bc316"],["/page/8/index.html","629a1754ddded9b7ae172725932979d1"],["/page/9/index.html","e1588817d3c70770ac82446a5df015ba"],["/sw-register.js","5082a10af571ac1f9e055d4a26bf3c3e"],["/tags/Ajax/index.html","f0558f8b63760a7905158acba75f47d9"],["/tags/Axios/index.html","05a0a81773db3682379873415e024ab9"],["/tags/Docker/index.html","d75c4e8bf8fd28e45bb761d3a595bc57"],["/tags/H5/index.html","510692ae566c1c908d8252cc34012a0c"],["/tags/JavaScript/index.html","710d1f94c0ef58ea25048f3a7b57c7a4"],["/tags/LeetCode/index.html","bcbc8cabe18a835d109786bbfe8aeaea"],["/tags/LeetCode/page/2/index.html","8a7466e91eab6b1eeabbd0d52a5bd0b1"],["/tags/LeetCode/page/3/index.html","d67b07d110f5f639f42a82d724b12b80"],["/tags/Linux/index.html","174e3423a55ee6d4a18540f70f0663b3"],["/tags/Mock/index.html","32471d7a0c6bf5cce806c038d310e133"],["/tags/Mybatis/index.html","6432ea74594ce89c8b415fceb312df7a"],["/tags/MybatisPlus/index.html","4c9c984e4bb1abe2522a263b41ad0d2a"],["/tags/Nginx/index.html","c21a85f9ebd003ed7e506b07822ce170"],["/tags/Promise/index.html","ff219a45d694f5920287444c3382c5a3"],["/tags/Redis/index.html","89f56fda415dd6f505b0f7149f039512"],["/tags/SSM/index.html","ccc86c5f2ec5f961f4df725bf1ea382e"],["/tags/Spring-Security/index.html","1ceed86cfddf5b71d50b0ab29abddcaf"],["/tags/Spring/index.html","745881c85625b909fa7d3b6c444247b9"],["/tags/SpringBoot/index.html","18f268fbcaea923e195fc285a0dafa95"],["/tags/SpringMVC/index.html","8ba3f0192c0502be2e19f131def55bf7"],["/tags/Swagger/index.html","8fe9dce7dc4bd04c2b9970ee46385099"],["/tags/butterfly/index.html","695ddbe74bf919183765a3154e1f02be"],["/tags/git/index.html","4b871b2abc228594942195ea4c5ef68a"],["/tags/hexo/index.html","be3eba5eecc9756f731a00e329e61ec9"],["/tags/index.html","163f600b57c78564ff3f18980ae92caf"],["/tags/jQuery/index.html","f0396b50bdb3656da8c0ace62a3fd04d"],["/tags/java/index.html","0d1043affacd46aae0813c8f810cfa90"],["/tags/markdown/index.html","46f7cdfa501a46264213e7625b93a720"],["/tags/mysql-数据类型/index.html","84d29ea01c3c1a6179071f46dd7e4176"],["/tags/mysql/index.html","a4570a56f97f7328303962c5528cee3f"],["/tags/typora/index.html","331ec08833cf288b19c8fd4f898479d8"],["/tags/vue/index.html","8acda862e63210077477a8b28cae2fd2"],["/tags/享元模式/index.html","aaa25e77fc64519b44ffd0a95f8ce292"],["/tags/代理模式/index.html","82346748a7de9d79f63a623f7184efe4"],["/tags/分布式/index.html","559faafefd7b2149f539a3f75f487289"],["/tags/前端/index.html","8271c8cb9d47e8323e2e3c5c6fc75721"],["/tags/前端/page/2/index.html","8188712773d679fad40e37c79f84548f"],["/tags/后端/index.html","9a6e5d1cfce9a0488e97714826e960c9"],["/tags/外观模式/index.html","06a845b108fb599d7b321eb08289144a"],["/tags/容器技术/index.html","bf7354a6d6bea89df110ab83efd496f0"],["/tags/工厂方法/index.html","4f6a3d73a7cb5d2444655ba817af50cc"],["/tags/抽象工厂/index.html","d3bd863c6d172f0ea78eb5b751436d02"],["/tags/排序/index.html","dd42a30b2468298afcdd2fdb9064d4b0"],["/tags/数据库/index.html","5b97f0a28f938e020342d46da1366cb6"],["/tags/服务器/index.html","88c5e3a4ed446db664171deb6ada33e8"],["/tags/查找/index.html","3d30cf6f61b54d10eea7479a479e8089"],["/tags/桥接模式/index.html","802995d5cf32926e5bd8c351fcaa427c"],["/tags/模板方法模式/index.html","d0920bdf23b6ba88a2d0e246c837b340"],["/tags/版本控制/index.html","6282dcaae73757cde5c3ea8691ecc749"],["/tags/策略模式/index.html","15699c43ad1b0dbc75ba174e5780be1a"],["/tags/简单工厂/index.html","dbe51dfa7938892a442d6427e1786cb3"],["/tags/算法/index.html","5ef91e96a4ef0c2270cb3918c6697921"],["/tags/算法/page/2/index.html","b780e8a0dc06b54c7f2a99becec8de37"],["/tags/组件化/index.html","a4e47786d6e3a91df083ee2892e2d4cd"],["/tags/缓存/index.html","7ddcc3be27d5e6fd7091a827c536c86a"],["/tags/观察者模式/index.html","e029ac6329056f83c8b31aef87af3300"],["/tags/设计模式/index.html","838351f3b1fe68b611cb099da56d80f4"],["/tags/设计模式/page/2/index.html","ee863d2f6a8c11fbc616dd15f73d50bb"],["/tags/责任链模式/index.html","93d040ae92772ee4713ae6d006507713"],["/tags/适配器模式/index.html","12ed88938b30ce020df7d17a44e0816f"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
