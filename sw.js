/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","b966ae8ba5d22f5ddcb9898347f3b340"],["/2021/02/22/博客的搭建/index.html","b53b1059556ea2d59b7f5ec96f657da2"],["/2021/02/23/如何使用markdown/index.html","032ee4c6c3be4671aec253d5b6354336"],["/2021/02/24/mysql命令大全/index.html","a44185d7f2c965863cf41773b4862b18"],["/2021/02/24/mysql数据类型/index.html","053aba08cee5a6cd0faa0fcc4cb77db3"],["/2021/02/25/Git的介绍与简单使用/index.html","1aaeb45bf6dc20e86288c2a24fcf8dbc"],["/2021/02/27/简单工厂模式/index.html","e22b1f84e6c93b9426864d3af0e0841e"],["/2021/03/01/工厂方法模式/index.html","ba6edbdf048ed6c8195f7cc5bb4ea8be"],["/2021/03/02/抽象工厂模式/index.html","95b483c540f1585ed6ad26f8925f8e75"],["/2021/03/03/单例模式/index.html","45b05d20a2244d0cd05cc7f93a0bc401"],["/2021/03/04/观察者模式/index.html","ea0326ecd83169bf0d7293b4c120ae85"],["/2021/03/05/适配器模式/index.html","0672d38c73fceff5ee6b2c5ef0b00249"],["/2021/03/06/模板方法模式/index.html","530e85a51c808a087415c8ed1f26b3d2"],["/2021/03/07/责任链模式/index.html","5ac853a9f797b43b245d6f84e99cc7ed"],["/2021/03/09/代理模式/index.html","dd483d7adc8f9178544a34759e66cef7"],["/2021/03/11/享元模式/index.html","152ff8b1ff64d6af205a1b2b09564799"],["/2021/03/12/外观模式/index.html","b644974830c0a28d6eaad253222a76eb"],["/2021/03/13/策略模式/index.html","b96391f1bec1cd981552c6ecdd5e2543"],["/2021/03/14/桥接/index.html","999f3d532e1c6bc0e6e9487e5d935f70"],["/2021/03/15/LeetCode-多数元素/index.html","4331df618ee72113ee20c69cafcba1ee"],["/2021/03/16/LeetCode之汉明距离/index.html","d3676c59d74b6e2ed00b71274cab8dc0"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","a5df45347163a0ccc56c54bc29e509e6"],["/2021/03/18/LeetCode之两数之和/index.html","e6d1a62def842aa94186a621df686ce6"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","c7df627660009e3e9f319d84d4978f9c"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","71980b5907fc5ac8d940f1f1b531ea5a"],["/2021/03/21/LeetCode之有效的括号/index.html","4398a4c94afbd3f4d5664191a2d230e9"],["/2021/03/22/LeetCode之移动零/index.html","e02e8a99d19e3135f069b907518565b9"],["/2021/03/23/LeetCode之爬楼梯/index.html","8ea6d5a90f1ffd47f6e41e7c2392ba98"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","196df9256d2d30c88442e4d00e95e57a"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","a8aa30a826d386da3bc5b79261ae2a00"],["/2021/03/26/LeetCode之最大子序和/index.html","b0ec2b84b777fa761ccdf1bc8c4f1f43"],["/2021/03/27/LeetCode之子集/index.html","dee4e349a4d1dcdaf6476992f344625d"],["/2021/03/28/LeetCode之合并二叉树/index.html","86ed99e00865af1224bddc817f90dd4d"],["/2021/03/29/LeetCode之翻转二叉树/index.html","17dcd13416c4a9aae335fc4c171cdfa5"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","821680134eb8dc3ed00e2ed053710849"],["/2021/03/31/LeetCode之翻转链表/index.html","f79ac2ed1571460bc99b9c150ce3ec94"],["/2021/04/01/LeetCode之相交链表/index.html","e0bcd0b51a3f6ad653e570584d2b679d"],["/2021/04/02/LeetCode之最小栈/index.html","71b412a099785fa7bae197c130e689d8"],["/2021/04/03/LeetCode之对称二叉树/index.html","5bce2e22f1a5a5289cbc67a2145c5d71"],["/2021/04/04/LeetCode之环形链表/index.html","428f6ac147c8c4d888a6e3530b04047a"],["/2021/04/05/LeetCode之二叉树的直径/index.html","4ee5b30929955ed533679573cbe5a05b"],["/2021/04/06/LeetCode之回文链表/index.html","5aa00d759651c0eb974897b2342077a6"],["/2021/04/07/LeetCode之比特位计数/index.html","ec731bb0367520b618e49dc3d5fa7ccd"],["/2021/04/08/LeetCode之全排列/index.html","bf32dc2d96f0759435151afe2390e95b"],["/2021/04/09/LeetCode之括号的生成/index.html","e90ce3dd2d1d0c105d04c1a93a7b4044"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","312d8a86d6279d2180949d47199268a2"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","444d337cd341c897fdc4bec59bd0d4d7"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","6a47221ff59772a01d105550e18e594f"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","6da1e68af6fd1e6164e4876391bb42fd"],["/2021/04/14/Mybatis/index.html","27575728851f886f213fa663d76a90b8"],["/2021/04/15/Spring-1/index.html","5326ab5bc19c7f690af1731ac6f389ec"],["/2021/04/25/Spring-2/index.html","f7ccf1d6060abc4543762ccf3f81f099"],["/2021/04/27/SpringMVC-1/index.html","dee83855905ecfda7b38bd6f641430be"],["/2021/04/29/SpringMVC-2/index.html","4fdc5317198c44196a6c19906e95c15c"],["/2021/05/03/冒泡排序/index.html","e5f6ef7c91c34325ebb37fd3da9afd89"],["/2021/05/08/选择排序/index.html","7873ce556442dc9e1d23de6faf2b22c7"],["/2021/05/12/插入排序/index.html","681359bbbc7a43167653415ad05dc04b"],["/2021/05/15/快速排序/index.html","fd420d2ed987aa8c3ec3a5fbcae22998"],["/2021/05/19/基数排序/index.html","6bc66b6e8e7768ed36f7ba7946d56ed2"],["/2021/05/20/哈希排序/index.html","f6143a10d50ef091d6a8cdd27b768bfc"],["/2021/05/21/归并排序/index.html","8c471a4a13570c1d838875351fb486b8"],["/2021/05/22/二分查找/index.html","ccd99b14726c5b053af01754b05c2990"],["/2021/05/26/差值查找/index.html","d9e7e5b7165742131b2bec08b746d851"],["/2022/01/12/高精度大整数计算/index.html","fe1b0931266e145375486f39b7c53512"],["/2022/01/22/前缀和/index.html","9debba0115a229d2865212d0014dae21"],["/2022/01/23/差分/index.html","1ec1b93f203c74355ebe9a6b101fa88b"],["/2022/04/04/MyBatisPlus/index.html","9e35d7f16caa355bb3a96ff7377baa38"],["/2022/08/17/jQuery/index.html","4ce199a59c3976fcee97b263762830b2"],["/2022/08/19/JavaScript/index.html","f0fa3878d943a3475085f6ecc95ff381"],["/2022/08/22/Ajax/index.html","82c301e4e9a14938c25d50350318192d"],["/2022/08/23/Promise/index.html","59b36263ff8516c003134bf73a66363f"],["/2022/08/24/Axios/index.html","7c584ba5b9f287ce39ef3cfd8aca0c09"],["/2022/08/25/H5本地存储/index.html","7ac8a87be71f451669aa955f2fc1917c"],["/2022/08/26/mock/index.html","9749a75bd1f1513abd86b7d0b4392f7d"],["/2022/08/31/VueJs/index.html","ab1aa4152eb3f268de6380c7aa777d61"],["/2022/09/01/vue组件化/index.html","1a1b6baa0fdc742251bbd0dac4e80dd4"],["/2022/09/04/VueCLI/index.html","d0abe96ad07a0082615b595d4379e14d"],["/2022/09/07/vue实现动画/index.html","200ddde5bc0df8e412eff73916183739"],["/2022/09/09/Vue响应式方法/index.html","d6c24bcf2cce2db2866559c222eeecc5"],["/2022/09/10/Vue异步请求/index.html","c6370339143fe8acdecc1ebce6dc0e3b"],["/2022/09/11/vue-Router/index.html","97435bb3f29bda9411ee6c16dd3f6b9e"],["/2022/09/13/Vuex/index.html","164f4fde79f39b414a15f1216911c2a3"],["/2022/09/15/SpringBoot/index.html","a4e4af3718dd73722ffe44d7ace21024"],["/2022/09/16/SpringBoot配置FastJson/index.html","4a3a73dd3f17b16434b2031af4c30715"],["/2022/09/19/SpringBoot参数校验/index.html","07c677d2b0ff240eef3bd1436424fd94"],["/2022/09/20/SpringBoot的异常处理/index.html","8a182693e9f885f6619891aa7362ca3c"],["/2022/09/21/SpringBoot统一响应处理/index.html","62b31c4963a075d03414cf153e24eec4"],["/2022/09/28/Linux/index.html","49ff2e1514a45004e7ce908120908cce"],["/2022/10/02/redis基础/index.html","286f95d9822301e5d853c0532280e8cc"],["/2022/10/03/Redis缓存/index.html","a25250a78d5cf615048d0e408c6062e3"],["/2022/10/04/redis缓存穿透/index.html","930d3ff7369d3631d71dc23c8d65bd82"],["/2022/10/13/Redis缓存击穿/index.html","546b8bdb001d60800af07f64425b23f5"],["/2022/10/14/Redis缓存雪崩/index.html","f064e188adc1c7bf9925f240203fe13f"],["/2022/10/17/Redis集群/index.html","888d0cc82e9780a514aa6471eff8eae0"],["/2022/10/18/Redis哨兵模式/index.html","1ae6dbb3c018bfd74b7a9261f704d754"],["/2022/10/19/Redis主从复制/index.html","0c6487801531193dbf2ae7ea237c345b"],["/2022/11/03/Spring-Security/index.html","09921e0b4a2ba381f5d84284c169cbf0"],["/2022/11/08/SpringBoot日志/index.html","ef1572a8b85a3f83dce67d6b18fde84b"],["/2022/11/11/Swagger2/index.html","8124ce2df41987037dfc85400e4c9d42"],["/2022/11/21/Nginx-一/index.html","56259dabed7819d60aa718c45420c38d"],["/2022/11/23/Nginx-二-代理服务/index.html","690de95854a842334802dc167095ad23"],["/2022/11/24/nginx-三-负载均衡/index.html","ff964cf92509d40e7b16329df30c0f45"],["/2022/11/26/nginx-四-缓存集成/index.html","42d62d4a521f3dc894a09fe5a1ffba90"],["/2022/11/28/nginx-五-动静分离/index.html","fa020377495c8f6271806ddc183b8b7a"],["/404.html","978ed21ae098d54c24229943eb2f3b53"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","6c9302eb58d84de7c273b92d0e3b637b"],["/archives/2021/02/index.html","aa1106098ab416257972d15afc7fe06b"],["/archives/2021/03/index.html","0aa744067d786a4df514ce63aa428a95"],["/archives/2021/03/page/2/index.html","9a48b8700e760f2acf799777f9260a40"],["/archives/2021/03/page/3/index.html","a1ed93944440bd1ab7670a5307e2e524"],["/archives/2021/04/index.html","cb79f8369b5ab79e1a475df28bbc6dd7"],["/archives/2021/04/page/2/index.html","ebdac2c9d7a6650cea35089c77e86c21"],["/archives/2021/05/index.html","b01cf2ed5c88e13d80932ad7f1d9c332"],["/archives/2021/index.html","89c65f3a776cd27b72981ac885635781"],["/archives/2021/page/2/index.html","630ca1fdf60d93ff9f835ec0d59ad946"],["/archives/2021/page/3/index.html","2fc65c241479da63635cc9d20ec67b83"],["/archives/2021/page/4/index.html","2ce575b39c093e4579fea5df05b9c22b"],["/archives/2021/page/5/index.html","f5cdd43643f2ddadfa20552a9ba97d05"],["/archives/2021/page/6/index.html","bf5812ffe469ead16ee5908a23973859"],["/archives/2021/page/7/index.html","7d7a82f8c559f3b685914fdf640ccb39"],["/archives/2022/01/index.html","e8b36acd3da5302f325edb484e595459"],["/archives/2022/04/index.html","eef5f3454b50a5e4d2b43198c946f8ce"],["/archives/2022/08/index.html","49a10f53ecfa4f009c3a6accd57c63ab"],["/archives/2022/09/index.html","6d47cedf4d1ca7e5c15c8d472391f59a"],["/archives/2022/09/page/2/index.html","ca858e2f151947079cd8a4be55869822"],["/archives/2022/10/index.html","dda1bfcbb6696a294bb66cfc0d2d1725"],["/archives/2022/11/index.html","5a9bea86e98a0f9b9a87d1478ed7ae5b"],["/archives/2022/index.html","02199656abdf97784d9d4a515965989d"],["/archives/2022/page/2/index.html","d7bf3ff50ccb43433c0e291cc015be1f"],["/archives/2022/page/3/index.html","cfdd84d96dc7fc58c6873eedef3fdb73"],["/archives/2022/page/4/index.html","6409fc2bb0b6cb8529770e21db2b648e"],["/archives/2022/page/5/index.html","24fc8d20b7e1c071e17e166b140c7324"],["/archives/index.html","9c0ca187671741977db4da93293608c1"],["/archives/page/10/index.html","4b3dc0f4c374ceb64aeed19888d92568"],["/archives/page/11/index.html","31cc48a847da2ef7d417909223ffcc2c"],["/archives/page/2/index.html","ac2c906626cad40e1b884ef59af139cf"],["/archives/page/3/index.html","2eefddfa075a6b3d844a4b11169fbfaa"],["/archives/page/4/index.html","3732a4e8e814b6adf14390df34cec5ae"],["/archives/page/5/index.html","9083d8dfeb894e35731c7450559a8a60"],["/archives/page/6/index.html","0486da22c1740c9ece1efac64f4e8921"],["/archives/page/7/index.html","bcf8c361e531dabfbfc50ed6408604f4"],["/archives/page/8/index.html","a24b59bdbac983c31a8290f8620ec294"],["/archives/page/9/index.html","4ca62f0610cc1d725c6d1e2be70b8b1f"],["/categories/LeetCode/index.html","e51614d9cd538fb2c949986a52bf01af"],["/categories/LeetCode/page/2/index.html","ee4b8ab8b6aa708aa81fd10c28927596"],["/categories/LeetCode/page/3/index.html","939404b33bd887eba81c12b296466e3c"],["/categories/Linux/index.html","deb55efd1f180ddb6b8b479b299c5c84"],["/categories/Nginx/index.html","e29904eeacdfc79f497dfeb8bf4c7d00"],["/categories/Redis/index.html","b76fd27fcbeda1d2c52871ec7dd81043"],["/categories/SSM/index.html","5c7d802c7d98bb6220fcb3e0e40c9fc6"],["/categories/Spring-Security/index.html","0ac82a5a9285416275c087392a864c74"],["/categories/Spring框架/index.html","27714ad92990e6f72ea99822ac12fc92"],["/categories/Spring框架/日志/index.html","6e32f69e38a187557d6fa5919a6f6d25"],["/categories/Swagger/index.html","6f0a2ac1901c02f2f9323a4ed990c1f4"],["/categories/Vue/index.html","852389a896d6f4524a125bc29f61d5b1"],["/categories/index.html","3010ca8721a3e7004cca195a8d1121c6"],["/categories/前端/index.html","1dcd7e5fde4e0f8a577760a8d8b8453a"],["/categories/博客/index.html","49d95f30d8d397564339a3f86facd519"],["/categories/学习路线/index.html","451da3e6827dc79b7504089ba908eb78"],["/categories/工具/index.html","25b0873c84dc1789c6a3fa498975c431"],["/categories/数据库/index.html","c7edaa751b45643b1a0c62a5266b3de1"],["/categories/笔记/index.html","1a3ceb944758f8848e8ce0020c0da38b"],["/categories/算法/index.html","09694a880fc188a0230468eb80edf333"],["/categories/算法/page/2/index.html","f8c1da8e41e8f9f017e4532b954d75f9"],["/categories/设计模式/index.html","b6412d9c754cbe6c5a4f8b9c25f354c7"],["/categories/设计模式/page/2/index.html","f1aef801fe17521e5343ff9ce0a30668"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","331c994a5fd5b306e1861ab8fe743cc6"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","e175803a897426611765bab88ac9ef0f"],["/messageboard/index.html","d0f79c01408a06be3a496a8c4e9cdc59"],["/page/10/index.html","321c52219d574b39142589f03b8d0495"],["/page/11/index.html","ab25f88f5428a7ce3c94e0dc84b2eb08"],["/page/2/index.html","9e17fc38d56a34da1071c53b15f22a4d"],["/page/3/index.html","bb9913f220d4378603561f4fb9438876"],["/page/4/index.html","3073466168d122774efaa6b99654ccc9"],["/page/5/index.html","6ef10a371fb45f81f281d058dda8909b"],["/page/6/index.html","bea3ae37a0235747deb14c53b877e9a6"],["/page/7/index.html","a237fc7a64341495b4088a24b58200fc"],["/page/8/index.html","a97db98fccbff7268fc2bf1d74cba00a"],["/page/9/index.html","47776735b590b5ce9d99b8b7b2d3ed55"],["/sw-register.js","dd8ad8c8ce62cb0c03ee003911741fa4"],["/tags/Ajax/index.html","0fda74da7c8e8c7000bed26bb953e905"],["/tags/Axios/index.html","97f3533048570773d15a554a69e2bf21"],["/tags/H5/index.html","47c0ab9a72c546248e28451a5846ff6a"],["/tags/JavaScript/index.html","3aae9270fb462748baee4a6de29e5db3"],["/tags/LeetCode/index.html","3d525582816b6405d84af2cba81b4efb"],["/tags/LeetCode/page/2/index.html","fe6b07ed93d02f925dc6dec7d883931d"],["/tags/LeetCode/page/3/index.html","8f1e62c1520b50ce978ec0253cf6799d"],["/tags/Linux/index.html","a0523c1e3788911096481634ea588a58"],["/tags/Mock/index.html","8fafa239275484f8f4da6acc6a7534da"],["/tags/Mybatis/index.html","9a160d1632f5f9174b5fd52d3ec85441"],["/tags/MybatisPlus/index.html","2e5f2f8d24e76734c64b00f3afaa3267"],["/tags/Nginx/index.html","4f6fcddc37d7942f09e28971de2f52d8"],["/tags/Promise/index.html","e7d77f2143415a5d07b8abe472e43a1b"],["/tags/Redis/index.html","13c102fd95d285dc1de25692314b79e1"],["/tags/SSM/index.html","0fa52b74dca11d9111eb13ee4d54bf49"],["/tags/Spring-Security/index.html","7d5afadcfc4dca09d33744e9356d03b7"],["/tags/Spring/index.html","054ef8141c461595202ca6b577705733"],["/tags/SpringBoot/index.html","2d857ded2ea9ef8c87fb6fd54e35044a"],["/tags/SpringMVC/index.html","9f25818aa76b524118b5de3e1e0bc5eb"],["/tags/Swagger/index.html","d2badccd16c580b171ed131cf2cced7d"],["/tags/butterfly/index.html","e49873412f488747c0a43d51d21e81a4"],["/tags/git/index.html","d36fd89bc37bd17a527d03d564892d31"],["/tags/hexo/index.html","83ca2eedee91a4f2cc0142d6e61ff984"],["/tags/index.html","b556b1b046b99ce325c0be7c5f234b81"],["/tags/jQuery/index.html","77ba77a370cc4ec29130b48a7768f462"],["/tags/java/index.html","6159b8162614c1b8b219c0ce96982987"],["/tags/markdown/index.html","e455c7ebe943cd95944952545aba065a"],["/tags/mysql-数据类型/index.html","ad47c1abb17d35dcaae3380276b55b11"],["/tags/mysql/index.html","b153f3d64584edd8e2ac8b94f20c1c2a"],["/tags/typora/index.html","007ef52e04336738b6a07bc08e56e298"],["/tags/vue/index.html","39b4d4e68a89b663779c0d72bebc8acb"],["/tags/享元模式/index.html","e650d5ab8ab3b1288a8d72c0f35797dc"],["/tags/代理模式/index.html","c825aa24af9639d13477c57878190c5a"],["/tags/分布式/index.html","83cea75617c526c030966f11a653688e"],["/tags/前端/index.html","86ddeffff080133749d7da535b52bf56"],["/tags/前端/page/2/index.html","8a7506bd738b73a9b3b4260e7f4d5513"],["/tags/后端/index.html","4c4d9cc011065004391b5f86847f8be1"],["/tags/外观模式/index.html","753b7fff52032b2d8e9985ac845f3194"],["/tags/工厂方法/index.html","470334bb84cd5d12f89dd8c34b6a3531"],["/tags/抽象工厂/index.html","d8fed8c11bc06e04e7520c7abfbac026"],["/tags/排序/index.html","b9d28f2e5a381603170608e60b548272"],["/tags/数据库/index.html","7ff793dc77dd17d946869cbe243ff36d"],["/tags/服务器/index.html","021faf4193b36b796f83ae173b6a8104"],["/tags/查找/index.html","aac23dde60aea0afbda3f5cea8274bcc"],["/tags/桥接模式/index.html","81e70e6658e09548fa0f7ee44d4aed12"],["/tags/模板方法模式/index.html","6603b399ce6387117477b1b059235718"],["/tags/版本控制/index.html","4c9e625dcab2b4c974aebb558a165274"],["/tags/策略模式/index.html","01cd19e5eca71130f55cd3d3c44ef6f2"],["/tags/简单工厂/index.html","85d68081fad00690ff9d7ec34273b5ce"],["/tags/算法/index.html","9dc3ac75661dbc657eda72af7b3b57f3"],["/tags/算法/page/2/index.html","44222696fc2f64dcc540183d268a2525"],["/tags/组件化/index.html","b44b56f362010b128d43f15dcf221c93"],["/tags/缓存/index.html","9cf1a10c7eb31afff3897d7beecf7330"],["/tags/观察者模式/index.html","6b22db1f16d19214bb64c32286e093cb"],["/tags/设计模式/index.html","5ef4f115834f5ad90c476c4af9eb4f62"],["/tags/设计模式/page/2/index.html","c1369432132b10dcaa5c5e39460c24ba"],["/tags/责任链模式/index.html","f27cf7cbd15a9fa7ba30c61e375846a9"],["/tags/适配器模式/index.html","55548c0d1991b0edbb480e4927cddd30"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
