/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","17e211c34faa392e4d4f03816ed51271"],["/2021/02/22/博客的搭建/index.html","de681722fde023b29fae51faf57fbe4b"],["/2021/02/23/如何使用markdown/index.html","c07f436a1b6ab3942aad21362adf87a1"],["/2021/02/24/mysql命令大全/index.html","f1a082ddf79544cd261f7bceb1b2494f"],["/2021/02/24/mysql数据类型/index.html","ccd8557443ea7e5bc4692065b0139422"],["/2021/02/25/Git的介绍与简单使用/index.html","ffeab32ad1c6fc1fc0ecfc1924ba704f"],["/2021/02/27/简单工厂模式/index.html","8e67debda5f34ce1a5410739e90f2159"],["/2021/03/01/工厂方法模式/index.html","e1dfea500454cf7c99668f2890670225"],["/2021/03/02/抽象工厂模式/index.html","bff1d50367001da3ebcb184bc3a6d227"],["/2021/03/03/单例模式/index.html","a471c2386099983750f4c3b65b9ee2d6"],["/2021/03/04/观察者模式/index.html","3a87aa1fd7be41b14fd9de59b695f8cb"],["/2021/03/05/适配器模式/index.html","ad0a0c7c5752eabf7a13a4d2da3c05a8"],["/2021/03/06/模板方法模式/index.html","03adb4a971874e01655a21a9e980ad69"],["/2021/03/07/责任链模式/index.html","35d5072faa70229ce0642ca6098e9479"],["/2021/03/09/代理模式/index.html","01392bcd778759c49306fc1d54c600ae"],["/2021/03/11/享元模式/index.html","52bf81316872e3340217ccae117d5869"],["/2021/03/12/外观模式/index.html","93e014b338def7d783aade90921c39ed"],["/2021/03/13/策略模式/index.html","23913d41d87cea2993f7149f1f5d81f5"],["/2021/03/14/桥接/index.html","3ac705407bba3c30c2a38e66775ab412"],["/2021/03/15/LeetCode-多数元素/index.html","d09a94e88cbec909bd6e7d0b6e9cc18d"],["/2021/03/16/LeetCode之汉明距离/index.html","92ac216d120f312cad72b3dd949cb62d"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","4197a367ede073c1f68587ab834a923c"],["/2021/03/18/LeetCode之两数之和/index.html","3467bbd8ca404ee5623fe925a4cdc866"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","4e18a9b0137fcbbff4c5c28d26b5b39a"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","148268c69420ae54385d9502b330f7c6"],["/2021/03/21/LeetCode之有效的括号/index.html","4c6db0c0f53ee0a3548bf1a2f2d95546"],["/2021/03/22/LeetCode之移动零/index.html","5d91e80440b7b3cbe9b2f7aa7ad231b6"],["/2021/03/23/LeetCode之爬楼梯/index.html","cc99ab549fdb5f1d5bb1dff95c9a560f"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","d6c4c32d4dcaf5cebc18a07641cb4768"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","09f66b12fb9d1c2b8383aa9dc08faeb6"],["/2021/03/26/LeetCode之最大子序和/index.html","d09c5d2d448b990457d0f66af3296a41"],["/2021/03/27/LeetCode之子集/index.html","91b9bb04cddb4aa7694de766319352d8"],["/2021/03/28/LeetCode之合并二叉树/index.html","aade462fbc51ce7e1f7af2a2e03b5dd0"],["/2021/03/29/LeetCode之翻转二叉树/index.html","3f17f1be890d13379eb6c4595c327237"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","3318cf76555496a6a2485de2711de6ad"],["/2021/03/31/LeetCode之翻转链表/index.html","2dd5ef504e5a0cd7fd60eef1102b4b96"],["/2021/04/01/LeetCode之相交链表/index.html","99e1645771646a74155b217f99b1d767"],["/2021/04/02/LeetCode之最小栈/index.html","80e154ce202c8340a4a04e53dae1b4bc"],["/2021/04/03/LeetCode之对称二叉树/index.html","cedb57016226e108b0a635ef8c1fe7fc"],["/2021/04/04/LeetCode之环形链表/index.html","e6dafcbd066b59d2b9961d528ba8c9f3"],["/2021/04/05/LeetCode之二叉树的直径/index.html","133144406291350f28df276c05396ccf"],["/2021/04/06/LeetCode之回文链表/index.html","75e576beeef9bc7e600306741e181919"],["/2021/04/07/LeetCode之比特位计数/index.html","ffd38c882a6b25861ff8ee11d28239fe"],["/2021/04/08/LeetCode之全排列/index.html","6f6a8a9148bffca2de7a04d3bf9a9cc2"],["/2021/04/09/LeetCode之括号的生成/index.html","b187cb9f55e3f057a3bd66b8c51359c0"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","646dca6e8f39d180eb543bbabd7c5900"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","f6929b4b0520a89e06cf17e76ace7f0d"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","a44a4cceb5b4af65f0cfde93d425fa76"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","6948d0535a1cb60f92740f732b6f4f3c"],["/2021/04/14/Mybatis/index.html","40a9ade63d7b1af63c6344d1555384cd"],["/2021/04/15/Spring-1/index.html","3d44d2913b131cac557d6d429ca7cfd0"],["/2021/04/25/Spring-2/index.html","979b8025689906135891a0cd3f354e55"],["/2021/04/27/SpringMVC-1/index.html","4ce75d3ee9c464ca22717b07f90ed866"],["/2021/04/29/SpringMVC-2/index.html","65d13a17707c70d890f4e10a8e3b2a97"],["/2021/05/03/冒泡排序/index.html","9f10d6eb274d4e42b0cd75f4c511cdf3"],["/2021/05/08/选择排序/index.html","53197efd6932bbf7add43d36ae6afea5"],["/2021/05/12/插入排序/index.html","edaa9f03d67048047fb1311bee3e3138"],["/2021/05/15/快速排序/index.html","b34965af10dce4dacc875457e5c74e98"],["/2021/05/19/基数排序/index.html","d960b8b91fb6c715433d739efeb57b95"],["/2021/05/20/哈希排序/index.html","28f6b3fe143c5e4037e31d452fda736c"],["/2021/05/21/归并排序/index.html","745f4d911970f398c7ba5eeec6efe942"],["/2021/05/22/二分查找/index.html","a405560d34dc8ce71cf28eb9138b5dff"],["/2021/05/26/差值查找/index.html","c0ad06e14c9aa6f9d89eb8bb39920549"],["/2022/01/12/高精度大整数计算/index.html","f73e771cea86f804f99b13730a7f499c"],["/2022/01/22/前缀和/index.html","0c8b73a2c4140b20ff6821f1ddadde20"],["/2022/01/23/差分/index.html","e4e2017d731bf9c974fe455957c0d997"],["/2022/04/04/MyBatisPlus/index.html","db339ebdbea02ca4d46d37a0bb170385"],["/2022/08/17/jQuery/index.html","1864e871acb8b3bb51bb62971daca862"],["/2022/08/19/JavaScript/index.html","a50be84497b0b7c0be75724a3dcbaa16"],["/2022/08/22/Ajax/index.html","a070c9690a018059dee449ea6a689be7"],["/2022/08/23/Promise/index.html","ce334748921bc6118a6314ab91eed319"],["/2022/08/24/Axios/index.html","46cebaaf8789f2fec6e98eddc7514616"],["/2022/08/25/H5本地存储/index.html","866705bb6e88c880769511e8bf171cdc"],["/2022/08/26/mock/index.html","782daeb3d07d0fe4956cd8d0766349d7"],["/2022/08/31/VueJs/index.html","c74399f0b9c69472e9c13336480490fa"],["/2022/09/01/vue组件化/index.html","5c01d2bfb0e2c2b7dacd5af9f1ad6dfd"],["/2022/09/04/VueCLI/index.html","b2a82250db7d8c15717562880b7d86c1"],["/2022/09/07/vue实现动画/index.html","01452d5170e79e3914e317c9635adf78"],["/2022/09/09/Vue响应式方法/index.html","a6c352cacfe700e4f7beba375f913b22"],["/2022/09/10/Vue异步请求/index.html","6975dedafcdde7670af0697acff35597"],["/2022/09/11/vue-Router/index.html","6bbbf5221749b6ff4b06d98f5a33438d"],["/2022/09/13/Vuex/index.html","7cfc4acb7286d1c12c4e47fc79e027fc"],["/2022/09/15/SpringBoot/index.html","3117dfad5514b45298528a071eec8cc5"],["/2022/09/16/SpringBoot配置FastJson/index.html","bb1f07b8772177c31f83489c9796977d"],["/2022/09/19/SpringBoot参数校验/index.html","789cae98e103be938f5a1d0cb900aab6"],["/2022/09/20/SpringBoot的异常处理/index.html","5227f25dfdc675c8878a3964bc198661"],["/2022/09/21/SpringBoot统一响应处理/index.html","2d4f1abe0121afce1eb8086f133f55fb"],["/2022/09/28/Linux/index.html","930bf95dd8d7a5307528039659b79e54"],["/2022/10/02/redis基础/index.html","8164bbd449daeb2210dd60e795d1212e"],["/2022/10/03/Redis缓存/index.html","40d02b4dc2497bd4ed34146c9d7c9cf5"],["/2022/10/04/redis缓存穿透/index.html","30466a514ebafc66af9de8175dd46091"],["/2022/10/13/Redis缓存击穿/index.html","c410d519517724d374340dd80ac74e21"],["/2022/10/14/Redis缓存雪崩/index.html","9309c1bc09e708515570d54e03006e70"],["/2022/10/17/Redis集群/index.html","75aba849d048cd91426c70dc81d46bff"],["/2022/10/18/Redis哨兵模式/index.html","462827eb70c4153f5a579299688d91dd"],["/2022/10/19/Redis主从复制/index.html","7d376b2b4941c663fe2f5fa3469bd361"],["/2022/11/03/Spring-Security/index.html","040069bc905a57647ca12af115fb6477"],["/2022/11/08/SpringBoot日志/index.html","54a2913286bac82ea01119c3d7a0b7bf"],["/2022/11/11/Swagger2/index.html","c651e528dbb30dbd1b1e717ed4c1ec38"],["/2022/11/21/Nginx-一/index.html","313d04eff520cec8ba8d034d8f8d978b"],["/2022/11/23/Nginx-二-代理服务/index.html","b5cb52e5d50fd0965c32d40e84c09502"],["/2022/11/24/nginx-三-负载均衡/index.html","0ef74ccd079229d72b358984ec9ec20a"],["/2022/11/26/nginx-四-缓存集成/index.html","0ace32e65f06a78c873d1c60bacd06ee"],["/404.html","d0ef7a3be85cee892e3fd8c02fa67059"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","e474a81a1603d52ae4ff2f51810551b2"],["/archives/2021/02/index.html","5f9c56785c740836dd4f5ff64fe2258d"],["/archives/2021/03/index.html","a4bf326833c8cd560c85e696eb047756"],["/archives/2021/03/page/2/index.html","f44652bd86157f01a76172e5a1f7c0f4"],["/archives/2021/03/page/3/index.html","17bf59932f331f96000abc5e1fc03301"],["/archives/2021/04/index.html","673d39069caf53172c533b627c9aed7d"],["/archives/2021/04/page/2/index.html","5440d027bbbaaaf7376f284377950cd1"],["/archives/2021/05/index.html","7d07e638fa7f7669a33ae1abbff8e56e"],["/archives/2021/index.html","61869f7c402913ee0ccf438b2a8b2510"],["/archives/2021/page/2/index.html","73b58e3f9e893fa303dd4fc15a008269"],["/archives/2021/page/3/index.html","1359ec4c6b74e6311e5f51f720293aa5"],["/archives/2021/page/4/index.html","e8e95f52054261af8aac1b85ad90f350"],["/archives/2021/page/5/index.html","4990c586999d435da121a8f9d2b13ba0"],["/archives/2021/page/6/index.html","9ee80507a8292f166d535589f99f3c14"],["/archives/2021/page/7/index.html","0f6c51598bdb94fe483b784b5ad0749b"],["/archives/2022/01/index.html","77a308ddc21ca838825e1e538454f69c"],["/archives/2022/04/index.html","6b76b6eaeb9343b6e157c9668630ac88"],["/archives/2022/08/index.html","c5920ece187dfb615d888bd4e1eae1ff"],["/archives/2022/09/index.html","c197c8326f6dacc0a92a28a9fe91b7f8"],["/archives/2022/09/page/2/index.html","f393135d8e28b7cda29309715e1501ca"],["/archives/2022/10/index.html","ae8237b18870ca4368bd0650abe5e502"],["/archives/2022/11/index.html","08e7282bf274d3c22019faa110e35779"],["/archives/2022/index.html","af497f10bea7f2523747ce9229020793"],["/archives/2022/page/2/index.html","a9f01804d4176845b04539de368ef2d2"],["/archives/2022/page/3/index.html","458f81b40e3c3e948f7cc80fa73e998d"],["/archives/2022/page/4/index.html","e85b8db5ce1047bdacf0125a6a9e18d4"],["/archives/index.html","e61275ea85546f14ecaf85f693d601d2"],["/archives/page/10/index.html","a34011510cc5b074b2b40a38662628e1"],["/archives/page/11/index.html","2c9aa878aa021431e18cbc01b84ab17d"],["/archives/page/2/index.html","a42bb982f4331889577c86665e0aff8a"],["/archives/page/3/index.html","cb0d4ea7ba4273f77446db1446b30c9c"],["/archives/page/4/index.html","97dfc291a43b057cca6c88217a62c472"],["/archives/page/5/index.html","f158b5594027d5e92cd612319714a084"],["/archives/page/6/index.html","13c05ec6a75fc8e4c8b9191c1390cea1"],["/archives/page/7/index.html","724a17d0a4978c93713879f08e9a5837"],["/archives/page/8/index.html","1ff03a3b1ad9192c079fd5a61817f32e"],["/archives/page/9/index.html","b971043409aeed61bb8e067a72eef0d0"],["/categories/LeetCode/index.html","041e48ea0ced34975fcfee579b00eccf"],["/categories/LeetCode/page/2/index.html","b7a057194e9af7e4bf91211bd82984ad"],["/categories/LeetCode/page/3/index.html","1ac32f6bb79878ce26fed120a52f74b6"],["/categories/Linux/index.html","6c4c6574967100176f677606dccd862b"],["/categories/Nginx/index.html","3a0458707dce23806356833b6b9dc660"],["/categories/Redis/index.html","45031e9c337559d4851d23f21bb0aa5b"],["/categories/SSM/index.html","82544591477efdea3c832eb08f850a4c"],["/categories/Spring-Security/index.html","f3019e7f736e0abd6936d9791ae4b4e2"],["/categories/Spring框架/index.html","269559c374a077efed4b35671a33ffc9"],["/categories/Spring框架/日志/index.html","d5eeea2d46c40ce85c012c0c36838eef"],["/categories/Swagger/index.html","541655749f38e717ab8dc5fb906412bd"],["/categories/Vue/index.html","8acb37ea98f2428404273dcf51602aa0"],["/categories/index.html","28ea7864f21bb33d870878caa35eb424"],["/categories/前端/index.html","a5ffa2d9e3b31fddab6fe7ada084255e"],["/categories/博客/index.html","2845c3738fcd430a87a8131d098014b3"],["/categories/学习路线/index.html","7d22918bbc33459318d39069524f7b49"],["/categories/工具/index.html","0d0326eb47c0e28b9cab40cbb34c3d7b"],["/categories/数据库/index.html","92d501ab7285d4da80a708fe40ae6729"],["/categories/笔记/index.html","9dd9078eb2bb63d8936151efd05f9703"],["/categories/算法/index.html","c572b5b7e7aac2c369c6d1f31db6f828"],["/categories/算法/page/2/index.html","60ed122abfb2e9e040ac2e2afca3128f"],["/categories/设计模式/index.html","80a024825d258aef1681fb36912eb161"],["/categories/设计模式/page/2/index.html","a10e85c8252270d10659c74bd3f67227"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","a09ea76e0e92ed7cbe5babcb3e34df10"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","b532a6cf6d4aa4c80ccb347c5d38c8da"],["/messageboard/index.html","e8020dbc7e13475e7eccbdffdbe05914"],["/page/10/index.html","a80b5a0abec5ba4e54bf92ca1372f1dc"],["/page/11/index.html","7fa7450efdc6a8de0bce14d8c88e7d5b"],["/page/2/index.html","7bc99c9304e765a136eb96c2f1526087"],["/page/3/index.html","619483ace5736e1b8a671aa5c5636349"],["/page/4/index.html","67a9bf1bfa8d3d32aae27785bd63d671"],["/page/5/index.html","839e174b275f00d09b06d7ba8066c38d"],["/page/6/index.html","931d32aa97ef7e664ddcd76c810066a5"],["/page/7/index.html","e4a779b458f2d61235c3218b102776a3"],["/page/8/index.html","6b97d9de2897def9019512dc67916bf7"],["/page/9/index.html","f7aa6519507bcdf89a6aa6374f6d4125"],["/sw-register.js","b982722bdf14d02e989a14ad48a2896a"],["/tags/Ajax/index.html","2af660854f1afc88c3ff97254ee31e2b"],["/tags/Axios/index.html","0f0fa411824c393cea1516d828d84795"],["/tags/H5/index.html","93eaa6c3f93f4d8950951839ff105ca4"],["/tags/JavaScript/index.html","1bc5d724d5bdd18bda7c60bd7cae23a3"],["/tags/LeetCode/index.html","14ea75d7884927661ac98ba625fee82e"],["/tags/LeetCode/page/2/index.html","5339c23e89929db89a984f366225f8d6"],["/tags/LeetCode/page/3/index.html","4fe0a2557bc7bd3be603e9f2273da079"],["/tags/Linux/index.html","96b538791e3f6906180156183c77c526"],["/tags/Mock/index.html","f96ef986a15d3dfb33f69abda21fe0d2"],["/tags/Mybatis/index.html","a7b409dcaf67f6106b6f6a66b73489b0"],["/tags/MybatisPlus/index.html","2d7752293cf0cd0d466e544f64d876b7"],["/tags/Nginx/index.html","fdc875c8fdd3feebdc0ae862e481220a"],["/tags/Promise/index.html","c81b87b1b9b67d145032daeb9080f619"],["/tags/Redis/index.html","70623e47df3d78c8bf22344f8f8fefb4"],["/tags/SSM/index.html","18e3c3ca6e64de3a8be88efae6d84daa"],["/tags/Spring-Security/index.html","ca904f42ad73e8be6c9c04547f496097"],["/tags/Spring/index.html","3a415e01b871852954d691199a750735"],["/tags/SpringBoot/index.html","fcecf6a8011926695a6dd591f2616be2"],["/tags/SpringMVC/index.html","55958a535fc11c612b687db440d84938"],["/tags/Swagger/index.html","92ff055cfcb0a4b4e79a48295f2b2919"],["/tags/butterfly/index.html","03debedba0339d97e02eca044f23d8b8"],["/tags/git/index.html","5e6c0b6a834ee4cf89b434733323736e"],["/tags/hexo/index.html","10abe7686927220ce4caf2b5cd2ed7f4"],["/tags/index.html","56dca94fcbb42a7bd797daff89d666b5"],["/tags/jQuery/index.html","78469b04932278616f08131245fd1944"],["/tags/java/index.html","be4b36692d83d2ad4785ae73f06d2d0a"],["/tags/markdown/index.html","8d243720ea65ab234c61e79b403f31ee"],["/tags/mysql-数据类型/index.html","e25c15737d6cc3cc85bed471afe5e62d"],["/tags/mysql/index.html","bc2d731d1eb57c8e44de042afdd4dc3e"],["/tags/typora/index.html","26e5a70345b4255c1b7c8f6a0e62e700"],["/tags/vue/index.html","4646bf0973facf6b3325aa8e58497e57"],["/tags/享元模式/index.html","cb84b5e87186b2d4c2e2af152732d853"],["/tags/代理模式/index.html","e59dd2513e9a16b574267f6926127043"],["/tags/分布式/index.html","529f24bed784dee3d37e9a738fd51461"],["/tags/前端/index.html","1bfacb2732943ca6146853feed71f35f"],["/tags/前端/page/2/index.html","dea28de52efa1a418042d09d9ad3c529"],["/tags/后端/index.html","30e99bf77bc32f59ae49e2eecc38cc08"],["/tags/外观模式/index.html","97bfc1a5c3d632bcc7e7a341d5c7ed81"],["/tags/工厂方法/index.html","4c70625bc716bc16c8a711099922e707"],["/tags/抽象工厂/index.html","c2153649e52b99f4f16276b88a268e30"],["/tags/排序/index.html","154ecbd8cfd3e4d24a03efdc8e73cd9c"],["/tags/数据库/index.html","6e651842a21b60135c8b6dc59f91def2"],["/tags/服务器/index.html","047ef6951805357aacb330206a9eba00"],["/tags/查找/index.html","73fd904dad379ff3c4862ed2e92ddd2c"],["/tags/桥接模式/index.html","0c8acf73b072df4ac791f753dec207ac"],["/tags/模板方法模式/index.html","2b7d95fc157087eb193d883c9addb22b"],["/tags/版本控制/index.html","d47f1b7449db99a18a4e6b920288aa08"],["/tags/策略模式/index.html","2b4678eeae8a25bad24d844f5b966537"],["/tags/简单工厂/index.html","36ce9e52e2e07a9e30047881e99b8e92"],["/tags/算法/index.html","a53e8a3a7b161cfb3402dc87376e4318"],["/tags/算法/page/2/index.html","b1cfe8733193c0d99649cc4ffd80e65f"],["/tags/组件化/index.html","15d88b1824491e2b3818e29171cf778e"],["/tags/缓存/index.html","e652e9ee57649f4a85e2f5132654e7e3"],["/tags/观察者模式/index.html","4865b0fee9b94f023da4a259e38de5d0"],["/tags/设计模式/index.html","bde5f2df3ed31ae492e7672a8b791839"],["/tags/设计模式/page/2/index.html","74912564d76a9400e8afdb115bdf1b06"],["/tags/责任链模式/index.html","cb339f510f5bd62d3b605a48fd344d6d"],["/tags/适配器模式/index.html","50328761f558d0ff089ea593c54b3524"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
