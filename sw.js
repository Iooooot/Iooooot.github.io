/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","2f3a15d21c169856f3ca0507869faa92"],["/2021/02/22/博客的搭建/index.html","78a837b6905787b1aeedaac56b61a2c7"],["/2021/02/23/如何使用markdown/index.html","041b5c5e2ae80b951a41ad29910214b4"],["/2021/02/24/mysql命令大全/index.html","7732507a76d2aa831753f9360c78c39e"],["/2021/02/24/mysql数据类型/index.html","4ab0e92f17f17305bd1064480bdad7a8"],["/2021/02/25/Git的介绍与简单使用/index.html","47b2e164357aeecb1521ebe737c16e07"],["/2021/02/27/简单工厂模式/index.html","570e302818638fe29e1df1595c817bda"],["/2021/03/01/工厂方法模式/index.html","c2dcaded3d90389b2cf48a99e31314ce"],["/2021/03/02/抽象工厂模式/index.html","6ca36966e3227853eed04cb756346dbc"],["/2021/03/03/单例模式/index.html","933095c03b847e7e4af1cd696f2d0095"],["/2021/03/04/观察者模式/index.html","5c088db1377a4c29a173a0fff0e18e82"],["/2021/03/05/适配器模式/index.html","c035ab70c8bb2aed7d92ac8a7856c1c0"],["/2021/03/06/模板方法模式/index.html","f93afb82d04f41ed00482b14a7024cb4"],["/2021/03/07/责任链模式/index.html","70dcdf2dc520bf1916fea95647453232"],["/2021/03/09/代理模式/index.html","35891334af6b61ee44fd6fc161f4f515"],["/2021/03/11/享元模式/index.html","8ab2011d8350920d9c35161f4af63f60"],["/2021/03/12/外观模式/index.html","4b14dfced7ca7c7be1c92223a116e0d1"],["/2021/03/13/策略模式/index.html","4502fe20a1e3717eeca1e9bd97a08696"],["/2021/03/14/桥接/index.html","5b8e94e542c0995a2b9aa0bf99e500b2"],["/2021/03/15/LeetCode-多数元素/index.html","08aad637bceec4b5515310bddebfd631"],["/2021/03/16/LeetCode之汉明距离/index.html","d064aac1a9831567f0e512ae17215668"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","79ba6e38923ae44404a8e80536e88203"],["/2021/03/18/LeetCode之两数之和/index.html","1143f763f8264d298cfa3b91f0de5f3c"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","634f6d12822fc72e609a1fc6c9513f6d"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","bd411f5c5c22d816cc3e36b30d50dcd6"],["/2021/03/21/LeetCode之有效的括号/index.html","db480d183863dee9d99041897efc2bb3"],["/2021/03/22/LeetCode之移动零/index.html","30ab6d96530866da79398412fea1322f"],["/2021/03/23/LeetCode之爬楼梯/index.html","63abfaaa53f8c1135e584a8a7271cee3"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","7c2356d229c7e23fb9b98a86deede552"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","bba7af87a058a4c3b23176829f59d2d2"],["/2021/03/26/LeetCode之最大子序和/index.html","a74c198c655348359c73fe74ea5dd6fb"],["/2021/03/27/LeetCode之子集/index.html","5d1b9dac1fafde4c74aa539a5300381c"],["/2021/03/28/LeetCode之合并二叉树/index.html","35c4ff959270c0aac93a9d71683f6f8c"],["/2021/03/29/LeetCode之翻转二叉树/index.html","74a5f1926bc48ea64da27cb55131f2b1"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","8b1bda0fd693461377a127364dd99bbb"],["/2021/03/31/LeetCode之翻转链表/index.html","46ba60eee8b4733554a11abb6ef191f0"],["/2021/04/01/LeetCode之相交链表/index.html","9c120b013fb5c305ed483eba99a65b75"],["/2021/04/02/LeetCode之最小栈/index.html","67c94cb1b9bab56af870e84c7e8e5d9b"],["/2021/04/03/LeetCode之对称二叉树/index.html","0144586c587f8b59d14ca77abf78903d"],["/2021/04/04/LeetCode之环形链表/index.html","fc5b11fbbea4a43e51b0ba837d85e408"],["/2021/04/05/LeetCode之二叉树的直径/index.html","1e51a39f740bf72ed31c21b532813353"],["/2021/04/06/LeetCode之回文链表/index.html","e284620b90ce6f6ffd124cc6b47f9f10"],["/2021/04/07/LeetCode之比特位计数/index.html","44bfab431d4ef701067cb166a82e657a"],["/2021/04/08/LeetCode之全排列/index.html","a5b2883938d7cd08c8f4e11bfbce377e"],["/2021/04/09/LeetCode之括号的生成/index.html","d1ccd33fd3555fbfd0c7ea27e267ed0d"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","6e929ce7ced1efb008f2e5557b875d65"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","58a4ef9d8a3c5843d3b05831d1d69b4b"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","1a759aff3570ae78f2cd257fd2d4c995"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","02c15166dc01f3d75ca348f89b027ca5"],["/2021/04/14/Mybatis/index.html","5e4594e3532f7c515bc83d94a3f9b14b"],["/2021/04/15/Spring-1/index.html","d657c50425f529a4f162441776b9973e"],["/2021/04/25/Spring-2/index.html","2752f0c0c1fdef0bd3806bc17799558d"],["/2021/04/27/SpringMVC-1/index.html","b72dedf1c5492c251b99a77fbdebbb9a"],["/2021/04/29/SpringMVC-2/index.html","d2dbc711b37d46c2118f80d326096dce"],["/2021/05/03/冒泡排序/index.html","af2bde115628a089b55fde4127e7cb50"],["/2021/05/08/选择排序/index.html","762793d7ee3ad81c971b2c511d8f475d"],["/2021/05/12/插入排序/index.html","1adb8533acbb7ae21921a8abba379ed5"],["/2021/05/15/快速排序/index.html","b0338118ac99f240de6eabcadfcaa114"],["/2021/05/19/基数排序/index.html","7630e5ee91f365cbcfbebe6f214c7130"],["/2021/05/20/哈希排序/index.html","a54b5e2eebf1dbe236574d408d731e5b"],["/2021/05/21/归并排序/index.html","b554fbb029b08810b7969ec34868719e"],["/2021/05/22/二分查找/index.html","3fe663f755941fdc7d92e035617aa562"],["/2021/05/26/差值查找/index.html","37f7c7a30b98641df184e61e06aed0eb"],["/2022/01/12/高精度大整数计算/index.html","fa28945217003051953c4cc31f13b5a4"],["/2022/01/22/前缀和/index.html","18d8fb92b740821990140f70d3aa27ea"],["/2022/01/23/差分/index.html","569223054fb05aac6c88e0d30a30cbf9"],["/2022/04/04/MyBatisPlus/index.html","443727b61d65c21323b2faf5ebc09581"],["/2022/08/17/jQuery/index.html","e4a5c9e9bbef496ecaf5bd23c068134c"],["/2022/08/19/JavaScript/index.html","274c6a39c29a124824342fc9176af5fb"],["/2022/08/22/Ajax/index.html","38ddb27c1da59349c06e120c7f15dbde"],["/2022/08/23/Promise/index.html","f3677b8000d99adb8545c8cf39c523a3"],["/2022/08/24/Axios/index.html","f33a83ff957b52a02e95ab6ce1c420c4"],["/2022/08/25/H5本地存储/index.html","cf0ff10f3234e873ff09f484744c5cdc"],["/2022/08/26/mock/index.html","b32b1a6fbc08325a12c6a00e6243f590"],["/2022/08/31/VueJs/index.html","3fc5febd970262b7b654ba876efb2238"],["/2022/09/01/vue组件化/index.html","5b0282e897febbeaf30f0f6ef3808325"],["/2022/09/04/VueCLI/index.html","2af9f29db793a73131a53060c5ef0afd"],["/2022/09/07/vue实现动画/index.html","e3047e49e450a0e0518445fc586670a0"],["/2022/09/09/Vue响应式方法/index.html","fc4e2edb9c4ebb732973a1ffea780b78"],["/2022/09/10/Vue异步请求/index.html","c956d7cc4690292b2fb16e048354d99c"],["/2022/09/11/vue-Router/index.html","8250619ab48710e00d57f6b7a282ef3c"],["/2022/09/13/Vuex/index.html","db07c48aee2d08ae131f1f5c2229a1e6"],["/2022/09/15/SpringBoot/index.html","30153f4285dcea72df38186e72fd09fe"],["/2022/09/16/SpringBoot配置FastJson/index.html","4ed7c6463b765173df18f6b8fb6d1af1"],["/2022/09/19/SpringBoot参数校验/index.html","7962f5f92e4b007f2a40bdb24bfb8ee3"],["/2022/09/20/SpringBoot的异常处理/index.html","cb57fe323f448c7d4362fa86b88c914e"],["/2022/09/21/SpringBoot统一响应处理/index.html","9af76407192ed6537ec89fece5eaa81e"],["/2022/09/28/Linux/index.html","ece14e3920cdaba9f61ce6eace265917"],["/2022/10/02/redis基础/index.html","991c891870d8cbe7e067d8b37b0034f0"],["/2022/10/03/Redis缓存/index.html","f6db185829d4036e440dcd314fb9a455"],["/2022/10/04/redis缓存穿透/index.html","1307ccc8d066aab972cb71f1935f4ff8"],["/2022/10/13/Redis缓存击穿/index.html","818e0e636c4fa33b45bdd6905405cf6d"],["/2022/10/14/Redis缓存雪崩/index.html","040e02f7865da2c4c984522688111969"],["/2022/10/17/Redis集群/index.html","3b4de38e1ae68896397cd9a6befc1047"],["/2022/10/18/Redis哨兵模式/index.html","8f46402efa840dbe833eb626fce12c66"],["/2022/10/19/Redis主从复制/index.html","a14483a61c7de56f93ae3664bc6c27cc"],["/2022/11/03/Spring-Security/index.html","bf3071b4b71e2a811b6789a5bc567ad0"],["/2022/11/08/SpringBoot日志/index.html","cb26c23e7b2f8349515f326c53840c6a"],["/2022/11/11/Swagger2/index.html","b7b5b19890124683c50d7efcdcfa0721"],["/404.html","3d776ef6946a379df801663618bbf28e"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","8aa833a1c4c7daebe3491cfa91bbe2b2"],["/archives/2021/02/index.html","c4db824aaaf61e1a6c1b71db58b9c9f7"],["/archives/2021/03/index.html","c790f14f5fe187861f0cffd0f96edb0f"],["/archives/2021/03/page/2/index.html","3edb188ca0ef326678a11b3d580aee2c"],["/archives/2021/03/page/3/index.html","e1b1accb2ccbfe8675a5445a89f973c7"],["/archives/2021/04/index.html","60db72fdfe9bc0674c2a9234bf60aea5"],["/archives/2021/04/page/2/index.html","fc6ced1a69fe81b56562587f36415c9c"],["/archives/2021/05/index.html","967c1e03f672f5e4f166f616963906bf"],["/archives/2021/index.html","632611496a2368e3c3c14fa5e1856b01"],["/archives/2021/page/2/index.html","378d74ed645bee8d224628ca9e32bce4"],["/archives/2021/page/3/index.html","46e13f919119ecc01557116875977b82"],["/archives/2021/page/4/index.html","74cce354ddc9cc4bb3fbbf9d4aa356e0"],["/archives/2021/page/5/index.html","f3615017576262e5f65bb42fcbe01f8d"],["/archives/2021/page/6/index.html","e076d5e84f2f7bf5754e54d57b8ee193"],["/archives/2021/page/7/index.html","466e7351381c5018f370e2410c31badc"],["/archives/2022/01/index.html","b29953a1ab4b5e87d555112664044a7a"],["/archives/2022/04/index.html","1e9f1affc61263864bc7d68823ca59a3"],["/archives/2022/08/index.html","e79a9cc8725515d7c57f553b1342ffa4"],["/archives/2022/09/index.html","aa61e3a72887575e9e24bf5df3479dea"],["/archives/2022/09/page/2/index.html","6512dfba7a77c8b59413a8474fb0c7b4"],["/archives/2022/10/index.html","565b97265d842141cab751f376b63b12"],["/archives/2022/11/index.html","ed4909a7a0a03d737a91071d2822778d"],["/archives/2022/index.html","4e6b5b052c537bb7ab8b269e585128b0"],["/archives/2022/page/2/index.html","476703027e37d28eae4cad9753685101"],["/archives/2022/page/3/index.html","448b8759351d9c45554c449440a5e710"],["/archives/2022/page/4/index.html","473d7589460a6bae5457812589b3ccc1"],["/archives/index.html","a89a380979c9d94bf7e101ee45feddd0"],["/archives/page/10/index.html","22101934c4c2c8616fe04748276890df"],["/archives/page/2/index.html","ea0cd032307b7025ce9ceb2f9daaf36b"],["/archives/page/3/index.html","90c9b14ef197f4e16fcd5febceb30bf1"],["/archives/page/4/index.html","75b344b8d4205e78becac5d218b64abe"],["/archives/page/5/index.html","9a3c7f0abdd466fa568882f5ec587421"],["/archives/page/6/index.html","0e03066e9db086f94a4082cb9312968e"],["/archives/page/7/index.html","8b705344b78e8ffb7a96980b60af7985"],["/archives/page/8/index.html","1fc26ddc909ca9a6ac4c11eb375606ff"],["/archives/page/9/index.html","327106505a227444e8c9ae984ca65d72"],["/categories/LeetCode/index.html","e23930e6b798417b3a5f73af4d4f94bf"],["/categories/LeetCode/page/2/index.html","fb95dafd1802cde4c686e8805639b335"],["/categories/LeetCode/page/3/index.html","280aa7e60d13edc949b363f348ae080a"],["/categories/Linux/index.html","19ddb8727a9c023bc6ceaeac45a958ba"],["/categories/Redis/index.html","7e8638de4456ebb9e946ecbab685ed45"],["/categories/SSM/index.html","721944b9e7a2514c024b622186f5b828"],["/categories/Spring-Security/index.html","f21d4a90931dcfcc56e98857bb071307"],["/categories/Spring框架/index.html","5f4921025143e21003d1237ff97f68e5"],["/categories/Spring框架/日志/index.html","3557721dbc7b241e698cc51402d1c739"],["/categories/Swagger/index.html","155505cc908b5ab72e842535633f26a2"],["/categories/Vue/index.html","2b79ddef4890deef2177ebd26680cc6a"],["/categories/index.html","a8ff80bbb856fd0dbf371ea0c2c10b36"],["/categories/前端/index.html","2f8d2ac1c1d2c8e893cff6613e2b6c15"],["/categories/博客/index.html","0b8216bb66191525b198eae1625164b3"],["/categories/学习路线/index.html","bd8faf8d10eebf8dbb6b10b36fde2bd1"],["/categories/工具/index.html","c24ed9f22447b395fa25251ae00443d0"],["/categories/数据库/index.html","5ef6b3a5e59fa4bc6c3d47b62917986c"],["/categories/笔记/index.html","5d0cc19c539e269236099397239be32d"],["/categories/算法/index.html","f1fbd77aae7edf932e5772ccd2c42867"],["/categories/算法/page/2/index.html","f0f3de6a12533af9518d04f2f515aa13"],["/categories/设计模式/index.html","bce778a0cf3e83ef5191a1677c4ff190"],["/categories/设计模式/page/2/index.html","7a52a21d3974ca92490bf54191c87ca1"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","dae1ff80eeee95c109b71e1602ce3319"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","cce049c076203bade342b2db5270d9db"],["/messageboard/index.html","42503597ee128dabe94df6fc240401d7"],["/page/10/index.html","faa98f4de313169180b5d20453b77e38"],["/page/2/index.html","46aee43616743fc92e52cc8711651ec9"],["/page/3/index.html","6e2ab3abdc690092a1be2492ad9a2de9"],["/page/4/index.html","37057ce20019745285078dbb4ea1abad"],["/page/5/index.html","3bac946b990248c0d62b4c996c94d3cf"],["/page/6/index.html","717be88a3e1ecb2ce7be7185f8c73f4a"],["/page/7/index.html","44079fecac96bfe46079440a89670dd8"],["/page/8/index.html","f280357465fab526c5209a23c00a46a3"],["/page/9/index.html","357dc9934f05f81d29e5c0ba01f80490"],["/sw-register.js","1f215f55d4c5c92cf5b272ff045a6575"],["/tags/Ajax/index.html","41a10519ff285c70f5a608bb8132c20e"],["/tags/Axios/index.html","cdcb3e779f1e9c0b178b11d23f6b2060"],["/tags/H5/index.html","acee7be78643fc3d386b480ae56b3e1c"],["/tags/JavaScript/index.html","5a946168e89eed660a6c48aa0fcbd0db"],["/tags/LeetCode/index.html","b7d55eeac9b3612ffeb5e7034b50f711"],["/tags/LeetCode/page/2/index.html","f96938563521213edc5198af16ecfad7"],["/tags/LeetCode/page/3/index.html","4654ef72f5dff93ade7a86b63223639e"],["/tags/Linux/index.html","e67c1103a1aa2b927559d3079c07ad30"],["/tags/Mock/index.html","fa17954be72df42e3e807f8d61928614"],["/tags/Mybatis/index.html","78e7b563970b852aa4312f6c307da962"],["/tags/MybatisPlus/index.html","30000c449ee44d2f1b25470821458ade"],["/tags/Promise/index.html","ad1b5ff668f45e719aec59563a74bbaf"],["/tags/Redis/index.html","3e4317f837f443755f8aa1b7846255b6"],["/tags/SSM/index.html","f9a08abaa95110efdbf78f1f6972b0ea"],["/tags/Spring-Security/index.html","6490f64cccf2481b15720c94e2528232"],["/tags/Spring/index.html","ad46ce943dbf676afc43a14e0a217c5a"],["/tags/SpringBoot/index.html","df1aa49da84d2fc729c32421905f192c"],["/tags/SpringMVC/index.html","b180bb069273bee9db31c5b2d6c1b022"],["/tags/Swagger/index.html","3752a6cf3a2020ef20b79aef6d7914a2"],["/tags/butterfly/index.html","56327e34afddc2e942325802f234fb08"],["/tags/git/index.html","48fbf7a84d64a591d3eb076c0acee50f"],["/tags/hexo/index.html","1a28d2482268732d40bb6df06d71dc3d"],["/tags/index.html","e83f5a8a33f89a1612e9cbaa89f688b9"],["/tags/jQuery/index.html","b71f9f5fc281eda68021f05f81371283"],["/tags/java/index.html","38b39f769a7cbc6e70cf31f7f7f0d2ac"],["/tags/markdown/index.html","297f83ca125abf403a8ecf1ad2b62149"],["/tags/mysql-数据类型/index.html","cf15d89fc5b93609b38917257689e3af"],["/tags/mysql/index.html","1c6e309bc60452b92c43f3d2150f5fa9"],["/tags/typora/index.html","9c5734d5ac715a2289b4ebb5d6e5f2af"],["/tags/vue/index.html","d2c46c812cb6aa1315a4980f83657456"],["/tags/享元模式/index.html","a159cdf5c3ddc3c668136e85e2c7c49c"],["/tags/代理模式/index.html","5eb734dd5921fd9bfb4fab95a1f75fcc"],["/tags/分布式/index.html","8101527d6de0a45a758578ae5d26da64"],["/tags/前端/index.html","8a9fe4b9aac05c6f7733b7acf30b6675"],["/tags/前端/page/2/index.html","65379055ed01d039cac5fb6b5f36a7f4"],["/tags/后端/index.html","92717060fc57bc790f254c4d821d8e1d"],["/tags/外观模式/index.html","61a882f7c29f9d58493118ef78f97961"],["/tags/工厂方法/index.html","edf6e961337ec32ea32c6518f00b567b"],["/tags/抽象工厂/index.html","64050f9d2a1c7e8bb4ae8e03abaebca9"],["/tags/排序/index.html","f8e7d2946b47bea757feae50ada8d9ed"],["/tags/数据库/index.html","c8a52d248a9218ecebeb51a7334e3310"],["/tags/查找/index.html","9e308fc89e2db98994d2a2122d2522c4"],["/tags/桥接模式/index.html","45550716b9cac78a3a40264c18094902"],["/tags/模板方法模式/index.html","f8deb03ddc77d1d52cd24cb1b497c3b4"],["/tags/版本控制/index.html","e851600d3a96f47ae632c1ae3f85904e"],["/tags/策略模式/index.html","6011afc49d7f32fac80fec4a8374d373"],["/tags/简单工厂/index.html","890e3294daf0cec933e2b5c8f79639c7"],["/tags/算法/index.html","1d166d6c9e61fa771d4b1671ce81c5e6"],["/tags/算法/page/2/index.html","d9303f11b67c483708dbe377727972b9"],["/tags/组件化/index.html","5f4f337906234800b2d14eeadaeaf6e6"],["/tags/缓存/index.html","6b9100682b5dbecbd8ac9c880377a069"],["/tags/观察者模式/index.html","3565d440230cef43d7cf6d600071ce73"],["/tags/设计模式/index.html","7f1713257fb2c213e5840cf120e8ee58"],["/tags/设计模式/page/2/index.html","baac0152fe6b6d29a4a585d89eba983c"],["/tags/责任链模式/index.html","51a890684b0f026594274426f319b33a"],["/tags/适配器模式/index.html","f61d2280fa9293b4f36407f027638f80"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
