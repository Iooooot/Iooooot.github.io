/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","af24c42d3028c1c4c632735b1d89244f"],["/2021/02/22/博客的搭建/index.html","080fadc2a137e75609a2551659cf7e47"],["/2021/02/23/如何使用markdown/index.html","2862b743348be603e6bbe06d7b73be57"],["/2021/02/24/mysql命令大全/index.html","41953e8d3c812dfb8bceeaa12e6dc60e"],["/2021/02/24/mysql数据类型/index.html","170e45585ead4e3618b32c7a9c25421c"],["/2021/02/25/Git的介绍与简单使用/index.html","d53c9e29f87fbbc5e39defc36af7800e"],["/2021/02/27/简单工厂模式/index.html","f39a101d390eefa818ee82edea63d19b"],["/2021/03/01/工厂方法模式/index.html","ae6d89aee617c442368b58760a5c3a98"],["/2021/03/02/抽象工厂模式/index.html","e4c335a854b25ee5a083288a3c784c28"],["/2021/03/03/单例模式/index.html","e7d4b5395167d99ec759d162e65682b5"],["/2021/03/04/观察者模式/index.html","bf3ae186b622b1d615b80d7f39ce38ee"],["/2021/03/05/适配器模式/index.html","04820e43593d9470a88792eed860f652"],["/2021/03/06/模板方法模式/index.html","c0324fd6f998f823131d1320566440e5"],["/2021/03/07/责任链模式/index.html","ec40751a3ae8aeaddcbf921b86ca7515"],["/2021/03/09/代理模式/index.html","c4cc5c58143f76211efeaee2eccff2b0"],["/2021/03/11/享元模式/index.html","c5369e52a8a8404679f3151d8cdbce2e"],["/2021/03/12/外观模式/index.html","6189ded6c98025248da082f55836b499"],["/2021/03/13/策略模式/index.html","67a4af5021d439e372e6c018d8771f34"],["/2021/03/14/桥接/index.html","8a4212a69f381eaa573d796a950ce375"],["/2021/03/15/LeetCode-多数元素/index.html","cd5af18ba07ea54324efdcb34ca2fc5b"],["/2021/03/16/LeetCode之汉明距离/index.html","4b7349482f8f9010ce36733eadc3c019"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","ca43b9ec18b5def569a0993216ca4937"],["/2021/03/18/LeetCode之两数之和/index.html","dbb40bfeb9aab673c7fcddcac1ab2d75"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","f3133e2457f42f63e2e9daf5e55faf39"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","18f83c5680f7039c3286113761b2a119"],["/2021/03/21/LeetCode之有效的括号/index.html","f186335206e5937e842594fa711cea6e"],["/2021/03/22/LeetCode之移动零/index.html","ad95ea61e12761e37078fabc10781cca"],["/2021/03/23/LeetCode之爬楼梯/index.html","1ebf5c30e7678a54209a74e948144cf7"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","b07479307e0b741f0f1bdef172458b36"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","0e8dbc3bac38807e8197d545da47682b"],["/2021/03/26/LeetCode之最大子序和/index.html","7db1f1ef682f50d8f1592cc191bdfc00"],["/2021/03/27/LeetCode之子集/index.html","f62c1e5e7d136a26f8af80934ea48951"],["/2021/03/28/LeetCode之合并二叉树/index.html","ad6397132d5291458dda4e6bbcd23f37"],["/2021/03/29/LeetCode之翻转二叉树/index.html","40017e8e761228f306d3c8a0e54179d2"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","3b09a7ec97671ae6ff1f05ea9cd0d25f"],["/2021/03/31/LeetCode之翻转链表/index.html","f78fe3d4bb1f3bce5f4c8c9577d85166"],["/2021/04/01/LeetCode之相交链表/index.html","0f1ff8a645a9f8d12f525ee25d221952"],["/2021/04/02/LeetCode之最小栈/index.html","fce66263a29208876377bdb30f7ad922"],["/2021/04/03/LeetCode之对称二叉树/index.html","677919e0d01e78abf32049887cbd2027"],["/2021/04/04/LeetCode之环形链表/index.html","985c634c7f7dcc1b3bbc50f3a6e71759"],["/2021/04/05/LeetCode之二叉树的直径/index.html","6dd4fe7ba6047bd4bd456e90c36c94e2"],["/2021/04/06/LeetCode之回文链表/index.html","162d0c52bdd06d279d06dee54880eea5"],["/2021/04/07/LeetCode之比特位计数/index.html","70898501fc0b5dda7db1321659f3866a"],["/2021/04/08/LeetCode之全排列/index.html","06f603f54e539f558a8c7ed32cb532e6"],["/2021/04/09/LeetCode之括号的生成/index.html","39fd16641f4c8f06ca1e388e045755b8"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","a7f89303a0dd127e01ca650120657f9b"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","9df093f0e6e5e37f89471757d8b9175c"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","14d8713b897a1cdb967b2b845602b227"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","eb7838a38661e8ba3ec634fbe2018958"],["/2021/04/14/Mybatis/index.html","52c012ea7c39c56c1551e982ee323162"],["/2021/04/15/Spring-1/index.html","efe32bfe855d6974054f98ca923f118b"],["/2021/04/25/Spring-2/index.html","6800eac9ae1e691553bf37c3c32ba4e6"],["/2021/04/27/SpringMVC-1/index.html","cf044ffd59cdc9630fee75043f042016"],["/2021/04/29/SpringMVC-2/index.html","6065cc06c41b5681f1ef3e8dd4fc9f64"],["/2021/05/03/冒泡排序/index.html","6831b2e21cbc13dc79547edf1f37909d"],["/2021/05/08/选择排序/index.html","ae94dbc02ddf991947a311adcda4760a"],["/2021/05/12/插入排序/index.html","1106b39137161b79bc8d5c35984a110f"],["/2021/05/15/快速排序/index.html","fe2269a18adc7767efc7c56a7f578c01"],["/2021/05/19/基数排序/index.html","cf61c948ef38785113c1e6e254c8b347"],["/2021/05/20/哈希排序/index.html","4b00ecc4d37d18cae559efa5eab1b0ef"],["/2021/05/21/归并排序/index.html","5ccef781b17efb0c5e7de2895867824c"],["/2021/05/22/二分查找/index.html","ee681f8c7d9976e411edb59223551131"],["/2021/05/26/差值查找/index.html","9fa245a73b1f6b401e5f2773d4b37eb5"],["/2022/01/12/高精度大整数计算/index.html","e04e0ca717f0cdf7106f4db1f16ad476"],["/2022/01/22/前缀和/index.html","f8d78479ca935694bbc7c26e324eae83"],["/2022/01/23/差分/index.html","713497f235910b803a654d2458aa009f"],["/2022/04/04/MyBatisPlus/index.html","98d8c73fe568d7f5e3ee50dbc308f32f"],["/2022/08/17/jQuery/index.html","780553c50a7c05aa1648d0f24a191f94"],["/2022/08/19/JavaScript/index.html","b5daf9220412ffb06e8f791deee2d502"],["/2022/08/22/Ajax/index.html","1244f414a3811ef85cb0e15655057fb9"],["/2022/08/23/Promise/index.html","d62b3a6ac739079868c55ffbb80b82bf"],["/2022/08/24/Axios/index.html","0e4b365eb8eab2d72f0b62c30e77d250"],["/2022/08/25/H5本地存储/index.html","2ed5a32be19e8a8b9d4b873ab3ba4b77"],["/2022/08/26/mock/index.html","59d6a0c605e995121231dddd7cb6b910"],["/2022/08/31/VueJs/index.html","119d86fb08713da05eb4a22108dcd2f3"],["/2022/09/01/vue组件化/index.html","0c249f51c9390fde1014d0c816ac9f2b"],["/2022/09/04/VueCLI/index.html","e32c9fdbef98c1a91a99fea4007537a9"],["/2022/09/07/vue实现动画/index.html","0e684635e428911c4971436f612cf261"],["/2022/09/09/Vue响应式方法/index.html","1d6c033a116d96a67b347370b537ce4d"],["/2022/09/10/Vue异步请求/index.html","a10e7c5db6b4579b02a7377648d794d9"],["/2022/09/11/vue-Router/index.html","cbccaabcc981fb228f7f1931ad65c2aa"],["/2022/09/13/Vuex/index.html","451ee28a6acd308716c36163a7b3270e"],["/2022/09/15/SpringBoot/index.html","df8cfdf84d746ddbffb62395b37f351f"],["/2022/09/16/SpringBoot配置FastJson/index.html","d7d984297da386619fd9f4c438872b14"],["/2022/09/19/SpringBoot参数校验/index.html","6571141a4e117d2c6101fc78c4dcfcee"],["/2022/09/20/SpringBoot的异常处理/index.html","21e3632612cef5846cbc07995503a6e3"],["/2022/09/21/SpringBoot统一响应处理/index.html","bd7b206145a4dd1b0bebef38d45009fd"],["/2022/09/28/Linux/index.html","f503fb87f4e89a8d232bd379fdad2e06"],["/2022/10/02/redis基础/index.html","f6929a2a0d28b66b4d895e2417dbbb55"],["/2022/10/03/Redis缓存/index.html","70e9fe9598b33af9fd7c823c2f7b1d49"],["/2022/10/04/redis缓存穿透/index.html","7f3eb955c1aab163a16e09c9b12a2dc2"],["/2022/10/13/Redis缓存击穿/index.html","8c5591c43d3c2dcf894a6b52312638eb"],["/2022/10/14/Redis缓存雪崩/index.html","9b47f4dc21503577dac4439bd0972d83"],["/2022/10/17/Redis集群/index.html","63fc7b4fae46d75c33ec894254239dd6"],["/2022/10/18/Redis哨兵模式/index.html","f664e1eb92a877e613a5347923e9de5f"],["/2022/10/19/Redis主从复制/index.html","4e16837512594d149e7f543c6ec00c54"],["/2022/11/03/Spring-Security/index.html","5b1c55a9319b33b8df34caac1353f1b7"],["/404.html","69b6a982e78df8c2e416e12c86f6712b"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","99e384be19a2b11b3705784707176bf3"],["/archives/2021/02/index.html","c346a6aca719003a1cb438176c6e81dd"],["/archives/2021/03/index.html","e1ac480e5c1acaaa8ac1f28e0f260359"],["/archives/2021/03/page/2/index.html","cf26480ab73b0283ae40211f0a5124d5"],["/archives/2021/03/page/3/index.html","105eef2c8fc7c038ff9a8f79b822de17"],["/archives/2021/04/index.html","2a719a948fa7bcf3378a52b699d52a75"],["/archives/2021/04/page/2/index.html","3eb9d6f8ce7f1c5a8dcb979adb426937"],["/archives/2021/05/index.html","bc160dae212680f4adfd3a97a67270bd"],["/archives/2021/index.html","fef78768ecdd097fef2b15b133253f89"],["/archives/2021/page/2/index.html","3e0678a57f87bb5eacc616f4ed237b9f"],["/archives/2021/page/3/index.html","acc267f210e392b5f525d461449e7d98"],["/archives/2021/page/4/index.html","e9dc7367c59c0279c90b1808aaa35dd1"],["/archives/2021/page/5/index.html","2adf31be686116a0f52f2ee26da26d91"],["/archives/2021/page/6/index.html","366c53aa978d570cfc3d7a2d7d7826c4"],["/archives/2021/page/7/index.html","4622d73b49c931badc8a697fa71d7305"],["/archives/2022/01/index.html","707d8b7b4bdaa7102c72a3248eeeab6c"],["/archives/2022/04/index.html","ac390b388d7f4c837a847990e63a4fe5"],["/archives/2022/08/index.html","69f6dde4aefc61fdcfef5f13ba14381c"],["/archives/2022/09/index.html","ec0121728e6627f63c773eafe465674b"],["/archives/2022/09/page/2/index.html","ab44de4287b7c0714515bce884a68b3e"],["/archives/2022/10/index.html","56da9a21ac849fb0189a4f9264443608"],["/archives/2022/11/index.html","87aab92ddb3d9f068586270240134f1b"],["/archives/2022/index.html","ce91fd8bfa7f000a154d309afa9f7567"],["/archives/2022/page/2/index.html","17d03ed21653f07cc351bfe389476ad6"],["/archives/2022/page/3/index.html","8043b7b943ca4ef515444ac898b7c56d"],["/archives/2022/page/4/index.html","c562aa0e0b2c9f019d20531b7801760d"],["/archives/index.html","6e8151a58b6bb1355e5e94f9f3272980"],["/archives/page/10/index.html","a84f190bbfad3dc73d6400ff7a91c68e"],["/archives/page/2/index.html","ca24c7e2ecb602ac0e2a9111d99832fe"],["/archives/page/3/index.html","ec9dfa5c81f0118ce5ec524dd36af2c1"],["/archives/page/4/index.html","a491082bf5cfc69c82870e6151e41611"],["/archives/page/5/index.html","52af6d0244cab58f482a6c4506a7a34c"],["/archives/page/6/index.html","bf3f9937b1d35dd30ec2c931cea93a3b"],["/archives/page/7/index.html","47a9e65c819892b7ab7b5de9e4b03107"],["/archives/page/8/index.html","936d125b8cebf32e7659e7c0dd9d54ff"],["/archives/page/9/index.html","2ab8441d572f7e92bb8086f42bcd3b5f"],["/categories/LeetCode/index.html","553160613cebcb87dd884254ff875bc1"],["/categories/LeetCode/page/2/index.html","edfb548192ca7c77a090dea24c2e1408"],["/categories/LeetCode/page/3/index.html","a52f576fb9128b4a5cfecb0e1b21b7f5"],["/categories/Linux/index.html","51be545ff920b7acd798f81e3e70967c"],["/categories/Redis/index.html","67975c2ab730a860da411fc4c8c2a265"],["/categories/SSM/index.html","9358f523dd64654a3e778404312c4c29"],["/categories/Spring-Security/index.html","4b044bdba6b3fc2e880d930cc812edd3"],["/categories/Spring框架/index.html","cbc07f4a2aa6ae1e798cfed86281cf47"],["/categories/Vue/index.html","e48132f997a5693e123c8bcba2f06122"],["/categories/index.html","368819831301b5ac78e185001882eaf8"],["/categories/前端/index.html","186bbdd589bbf02ab0cfc300e77a9538"],["/categories/博客/index.html","291643d91cea9791933bc1304f1e026b"],["/categories/学习路线/index.html","bfcd8e392e157d2d6884a50e78dd39b9"],["/categories/工具/index.html","d7d7ffd0ddd405e32483962b6d7e198b"],["/categories/数据库/index.html","2ce383b4eb433da115b90030e3644d65"],["/categories/笔记/index.html","e8fe40c18596051cc710fd8f2c1753ce"],["/categories/算法/index.html","dc809514760a5a6fe2172a5900390fb6"],["/categories/算法/page/2/index.html","3df530dbba6a7fe339a9ecf401099fd5"],["/categories/设计模式/index.html","1cf1df60dffe40ed78407c39329ea744"],["/categories/设计模式/page/2/index.html","ae7b052613810611ea18766363f7f3cf"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","ff7f59892ff72b85c9bed8aeb07d92b5"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","895e8d1e0f86ccf9c9604e747bb3b280"],["/messageboard/index.html","01804ea822feb7b053619070631d46c4"],["/page/10/index.html","3dc6a57b7ff9f7a3b5ffebd0cac2fd71"],["/page/2/index.html","7e0dd96f39b527f0e8e1e11fb2e654fd"],["/page/3/index.html","bf7db9f688ea98a7ff62ea4d16aa8e39"],["/page/4/index.html","644c8d736b47f2960826e8c79a0f73b2"],["/page/5/index.html","81e16bd836703e1891983fff573ff024"],["/page/6/index.html","cf379a466c17178a136667a006a883a7"],["/page/7/index.html","d914e46627c3917e29e71b9f2e662aed"],["/page/8/index.html","e678d9aed3efc30f2bfe0a4685f144a0"],["/page/9/index.html","274337a5465fa5c45bd21bd4a7d1ea33"],["/sw-register.js","08fd4d1b43bfaf2588dc67456bc401ce"],["/tags/Ajax/index.html","a81d6c30abb60f698659fc015b19cc93"],["/tags/Axios/index.html","b5a87d3fbf68fac43fec41ecc678a158"],["/tags/H5/index.html","34e0d55906deedfb61c93208c9fc794f"],["/tags/JavaScript/index.html","2b32d1ba8e69efd4b5b960f6c46d3c35"],["/tags/LeetCode/index.html","9d704815cc7b1c1ae550bbcb2d615fb5"],["/tags/LeetCode/page/2/index.html","552352a8797976f441ef2bb9f8efddf7"],["/tags/LeetCode/page/3/index.html","90c1c0cf74c32463c115563f322d2309"],["/tags/Linux/index.html","1c82344942a0966aa5e00629442fc8ec"],["/tags/Mock/index.html","29a123735f40ed70256bec908f08b90f"],["/tags/Mybatis/index.html","f6f2db12f59e06eb547956045fabb3f7"],["/tags/MybatisPlus/index.html","32a455debaedd78aa24de3c15620a2fd"],["/tags/Promise/index.html","6b9b9f20026d92bdc8eb76264aea8794"],["/tags/Redis/index.html","e5f1a411547338ccc3c6c1b101747b91"],["/tags/SSM/index.html","bdadad0a311a6b89890cd9bcac6263fd"],["/tags/Spring-Security/index.html","eba7ea2ee9d1594db1eb37647fd65f16"],["/tags/Spring/index.html","1e4be00fe475d4f4555b333bdbb6b88a"],["/tags/SpringBoot/index.html","790df2a7a1f45f10766966569a7bb5c1"],["/tags/SpringMVC/index.html","3af8bff20bcc104dd296b1d02d9bd6e0"],["/tags/butterfly/index.html","4785cef97984a38a2585ec420af24d03"],["/tags/git/index.html","f21efd02c88728856241dd3357aabd49"],["/tags/hexo/index.html","f33d39cff96fbedbd58d36723fa99fca"],["/tags/index.html","09e8ff768985832974ea8d86202302f2"],["/tags/jQuery/index.html","39aeccc8208422aad297090c569de7e2"],["/tags/java/index.html","919277a6147ea8368f3eb9665533af6c"],["/tags/markdown/index.html","636481627199ed38faa9d2f014298da5"],["/tags/mysql-数据类型/index.html","7e4f43f57dc64642f9e93ae164ff020a"],["/tags/mysql/index.html","a64651a20d584107c2c2a680ad7f9ca8"],["/tags/typora/index.html","054592fb961695936e83df6ae3544e5e"],["/tags/vue/index.html","cbfa47e3d5bb970ece6a9ff2df3594b6"],["/tags/享元模式/index.html","3cb8c299d69bf0dadce17ed566f7bf8f"],["/tags/代理模式/index.html","f12e7a412d8b8275d9fc4dd33229a6b4"],["/tags/分布式/index.html","db28d0adafda8f95ef55c9dc9fc73a10"],["/tags/前端/index.html","f1f968b8f753c4fceb9f5eba3476bc21"],["/tags/前端/page/2/index.html","4859e6065843b7781cfd440d345676d4"],["/tags/后端/index.html","25165d9da940e161ad4d7d41d5ec6338"],["/tags/外观模式/index.html","425ee8bdab986a33e2a406957c864538"],["/tags/工厂方法/index.html","dc1e2f474e09c89c26d27c126c700cb7"],["/tags/抽象工厂/index.html","930bfdf108b980e6014c80a8e099882a"],["/tags/排序/index.html","0fbe20e88b1e219406e9b90f50fdedb4"],["/tags/数据库/index.html","d9a5a6a12f4c32062466bf7c4c9954aa"],["/tags/查找/index.html","7858451905503c780c7275a4a48f305a"],["/tags/桥接模式/index.html","d4d9008bcc445404dd1c04b60589bbb6"],["/tags/模板方法模式/index.html","8a158eaf9a01e6380f08b6cbc23d2714"],["/tags/版本控制/index.html","3e16288a72b04aa7d7969cf5e9a2b7a6"],["/tags/策略模式/index.html","f0861b4cc57a2c66cc2fbcccdf22d9c5"],["/tags/简单工厂/index.html","9d07e2af1a78741c3e55a8a0d30f1a20"],["/tags/算法/index.html","3c895eb5af76029b4fb9189d86b86fb9"],["/tags/算法/page/2/index.html","ad3b74158f3d6f62783e769d1dae1cee"],["/tags/组件化/index.html","8d4cd0e7aec54d860bdf27b42219ce62"],["/tags/缓存/index.html","1c541322fa24fa8a025537b694b66212"],["/tags/观察者模式/index.html","8bc499917aca78c078a622b0c99a7f01"],["/tags/设计模式/index.html","b1b90c1a3a48e0552a7b60e6423956c6"],["/tags/设计模式/page/2/index.html","592d0ddf86dc51fd819e12d62ee42d99"],["/tags/责任链模式/index.html","c1f83878d8c2c09207139dc02bbb97cd"],["/tags/适配器模式/index.html","9c0d3dc08cf83f058aae21da34b75c6e"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
