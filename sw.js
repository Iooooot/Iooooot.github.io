/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/02/22/博客的搭建/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/02/23/如何使用markdown/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/02/24/mysql命令大全/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/02/24/mysql数据类型/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/02/25/Git的介绍与简单使用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/02/27/简单工厂模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/01/工厂方法模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/02/抽象工厂模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/03/单例模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/04/观察者模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/05/适配器模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/06/模板方法模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/07/责任链模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/09/代理模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/11/享元模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/12/外观模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/13/策略模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/14/桥接/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/15/LeetCode-多数元素/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/16/LeetCode之汉明距离/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/18/LeetCode之两数之和/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/21/LeetCode之有效的括号/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/22/LeetCode之移动零/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/23/LeetCode之爬楼梯/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/26/LeetCode之最大子序和/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/27/LeetCode之子集/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/28/LeetCode之合并二叉树/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/29/LeetCode之翻转二叉树/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/31/LeetCode之翻转链表/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/01/LeetCode之相交链表/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/02/LeetCode之最小栈/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/03/LeetCode之对称二叉树/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/04/LeetCode之环形链表/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/05/LeetCode之二叉树的直径/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/06/LeetCode之回文链表/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/07/LeetCode之比特位计数/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/08/LeetCode之全排列/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/09/LeetCode之括号的生成/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/14/Mybatis/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/15/Spring-1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/25/Spring-2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/27/SpringMVC-1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/29/SpringMVC-2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/03/冒泡排序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/08/选择排序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/12/插入排序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/15/快速排序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/19/基数排序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/20/哈希排序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/21/归并排序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/22/二分查找/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/26/差值查找/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/01/12/高精度大整数计算/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/01/22/前缀和/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/01/23/差分/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/04/04/MyBatisPlus/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/17/jQuery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/19/JavaScript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/22/Ajax/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/23/Promise/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/24/Axios/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/25/H5本地存储/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/26/mock/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/31/VueJs/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/01/vue组件化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/04/VueCLI/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/07/vue实现动画/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/09/Vue响应式方法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/10/Vue异步请求/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/11/vue-Router/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/13/Vuex/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/15/SpringBoot/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/16/SpringBoot配置FastJson/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/19/SpringBoot参数校验/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/20/SpringBoot的异常处理/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/21/SpringBoot统一响应处理/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/28/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/02/redis基础/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/03/Redis缓存/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/04/redis缓存穿透/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/13/Redis缓存击穿/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/14/Redis缓存雪崩/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/17/Redis集群/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/18/Redis哨兵模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/19/Redis主从复制/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/11/03/Spring-Security/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/11/08/SpringBoot日志/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/11/11/Swagger2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/11/21/Nginx-一/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/11/23/Nginx-二-代理服务/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/404.html","e4be6e34c690a379ef54d50be3f42349"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","790ba279fef7ff548ce90d0399367aa5"],["/archives/2021/02/index.html","c5a89f527a705ec90ce8de00ca2f4801"],["/archives/2021/03/index.html","e3fef93bfd308552001367c37624846f"],["/archives/2021/03/page/2/index.html","29d0a2cd3b6b93add602462dd5243cbc"],["/archives/2021/03/page/3/index.html","ae915721a513096ef30dbbf7b3c220d5"],["/archives/2021/04/index.html","4ce549982a9249903625f48cd50fbb8f"],["/archives/2021/04/page/2/index.html","24221c41b8c753458fde5405dae5c225"],["/archives/2021/05/index.html","698f088136ad26517c8604e86e21cdc0"],["/archives/2021/index.html","5567628f2471624f3a3ad641d68ac657"],["/archives/2021/page/2/index.html","e0d26bd5853255125fc30ce968260f6d"],["/archives/2021/page/3/index.html","dfb08c9945a26fd3b3ecd4c04d78ca76"],["/archives/2021/page/4/index.html","769cad73bbc212df204ab0e81ca85e95"],["/archives/2021/page/5/index.html","aef6f79ed58928411f673bd5082712c3"],["/archives/2021/page/6/index.html","e2fa24469bb5abaa4347d300aec9575b"],["/archives/2021/page/7/index.html","7cbed30d5b0500ff76e1f793a80b731f"],["/archives/2022/01/index.html","76d895f587c6b3417b60a5c281083b33"],["/archives/2022/04/index.html","d3795e1c2eb8d69f0f15089c3bb57522"],["/archives/2022/08/index.html","2ab71be2cd34ec6796dbaf8a4f6f1719"],["/archives/2022/09/index.html","871cfcc699a544f46547fc1293e21d75"],["/archives/2022/09/page/2/index.html","cc5b424aa5552648aefa853f2c9fcc9b"],["/archives/2022/10/index.html","af5264763ed48b90ca5f5e3841d6a6f5"],["/archives/2022/11/index.html","58a12efd77e65ad4dac1f58f16130ad8"],["/archives/2022/index.html","03878433b5912689ca1828ba0b533dd2"],["/archives/2022/page/2/index.html","c1ff6f0166ac3b410ad0d49874b42374"],["/archives/2022/page/3/index.html","6c0dd8bb81dc5c83a35e679a6be7b3a0"],["/archives/2022/page/4/index.html","e58c485ec3401cc6586232b8e9b1fa63"],["/archives/index.html","16bda2d5c428d984216a73b5c2061c77"],["/archives/page/10/index.html","74424bfa6d65a80c4daac6978cf55283"],["/archives/page/11/index.html","d0724d3621d3c8f6ee79ccdb14706d44"],["/archives/page/2/index.html","df5f6107e413f20ae46aad499715662d"],["/archives/page/3/index.html","031cb919b86a24d55eb14fb47f2c03f0"],["/archives/page/4/index.html","2875b6a589feb04a30bfe027a5b48c70"],["/archives/page/5/index.html","3ea6d52dab97f10fb83c7702c1297a48"],["/archives/page/6/index.html","fdbeb9fb3e243c76d440d595c2f2e63a"],["/archives/page/7/index.html","3341610d2f3be2c3ff688b84018ac7e5"],["/archives/page/8/index.html","fbdddd0a3e49ef986f050f18b0dfd667"],["/archives/page/9/index.html","7404b24f13a2b35d8dd7a63205fe2592"],["/categories/LeetCode/index.html","64dc3fb521df6c1b295eb35ce8144db0"],["/categories/LeetCode/page/2/index.html","b5f6ef22f269cfbcd6f07c22376448f2"],["/categories/LeetCode/page/3/index.html","75636b8e3e25e8aa9b2476886dd9a323"],["/categories/Linux/index.html","c72d7a1fedaf6b7e04579c2266762756"],["/categories/Nginx/index.html","808fe34c43507260d8f6f55bf5f92f59"],["/categories/Redis/index.html","ece94cdbbb889494e583d8e6d3665b79"],["/categories/SSM/index.html","bca89a8e5b379d344c95644b21afb5c6"],["/categories/Spring-Security/index.html","ea2bda0bf6575cbc19196eb4316b510f"],["/categories/Spring框架/index.html","33685000b85adb34d018060b9295ce44"],["/categories/Spring框架/日志/index.html","e9b2bc5821fa5a24bfa837715f4745ae"],["/categories/Swagger/index.html","d4ae6de8d4d21869e3f2dd822c48d584"],["/categories/Vue/index.html","819f207c5902eaac17a80e5d90f2bb91"],["/categories/index.html","e88815ef3525f2a656282ced375f5c16"],["/categories/前端/index.html","fdef6ea86d5f1d30f33750260fc016eb"],["/categories/博客/index.html","3264238b15e0f867210619bf2f5d749f"],["/categories/学习路线/index.html","c8fcd0a2612149c7b7b3e6332ab9f132"],["/categories/工具/index.html","efc9bdc20b52db2920fbafba93f97ad4"],["/categories/数据库/index.html","52047c7bcab102a6d88e3819457411e2"],["/categories/笔记/index.html","a03e1a237cef5e07abca2e87cee8388f"],["/categories/算法/index.html","539a2c42665a0fb7878a288d3fc66aa5"],["/categories/算法/page/2/index.html","2eaa6349d9f1fb5f403ee03df68760da"],["/categories/设计模式/index.html","9df13a6f8d96be71befd956647670f94"],["/categories/设计模式/page/2/index.html","59d21591e0c5b03fb528916f3ced44be"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","ab5c03dede5de80e67e2f484b1b6acbc"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","251b15757e487fa0fefe3d54761dd7ab"],["/messageboard/index.html","a3eb95627896b1569d14c2d34ab36cc3"],["/page/10/index.html","d252b7754e95f62befb0b23eac9f7556"],["/page/11/index.html","46cf7b0a1b19c18357a9f2744ad0adc1"],["/page/2/index.html","1f9bbbd4cf75dc7f8b2bc1cf8144c878"],["/page/3/index.html","bb6eec81332920a2aa24cdd531e697be"],["/page/4/index.html","77090d1398204d929e74f3839cda2e94"],["/page/5/index.html","b200ab372f01a81166371421e88f7c8c"],["/page/6/index.html","db29295a40a5e71440106f67e6b76753"],["/page/7/index.html","7d953e1dba4f1dfc62196208145f2efa"],["/page/8/index.html","7830466e66b9d0d426e801424d08c826"],["/page/9/index.html","107ef53b7e50f7a8c0a69dad413a7638"],["/sw-register.js","35c1def75fe4529fc85aa3308c43f8dc"],["/tags/Ajax/index.html","837227ccfd857c5abcff8cd53c2f0d9c"],["/tags/Axios/index.html","d3b40f11d2eed7d6389d7d304cc427e9"],["/tags/H5/index.html","ba37a048b96d39f92c5bc318cc7dbbaf"],["/tags/JavaScript/index.html","32005b3bd926b9e09502bff4783c5646"],["/tags/LeetCode/index.html","4c76d3bd7068c7c3aeb548291e53f395"],["/tags/LeetCode/page/2/index.html","b89475fb2a7d01ae50f901f2bbab09ab"],["/tags/LeetCode/page/3/index.html","5c3a8cdfba51bcfdfbefc8b88c0bb787"],["/tags/Linux/index.html","c075f029d01359d24fb775f6db090eda"],["/tags/Mock/index.html","12136715b2397000d9bb7df9f855e112"],["/tags/Mybatis/index.html","41bcb47b95269a1f23d0fa12b1ae2e81"],["/tags/MybatisPlus/index.html","e5e35d0b8443319aac8f6da8b5cdb609"],["/tags/Nginx/index.html","bd899d8e91dff65889119b1f8935c398"],["/tags/Promise/index.html","eee0136e747eb3af73b36b6ad066b2d3"],["/tags/Redis/index.html","95d12cceef760673b4af9eb1d9e24af9"],["/tags/SSM/index.html","08215286de5c5d8a07890ea08e2c9c97"],["/tags/Spring-Security/index.html","c443cf0a1d22e607053d609c6b68210b"],["/tags/Spring/index.html","00b03b636c31b7f918c3f677040c6ea0"],["/tags/SpringBoot/index.html","c7dad19237061dc8b1c64da6f08b1fdc"],["/tags/SpringMVC/index.html","31a50bdd34bb97d350eb85d42a6a7779"],["/tags/Swagger/index.html","75729e4b1be521ddd36004eef2596d54"],["/tags/butterfly/index.html","8e9745b20d7f6a59c9039065e78e90b1"],["/tags/git/index.html","cf4786a2ffad1f6bede530c6bd2a071d"],["/tags/hexo/index.html","d17353cc5ab59df1e8d4aa1b4278c31f"],["/tags/index.html","a0556b98196e2df1b39176ca186785a7"],["/tags/jQuery/index.html","ef800aeddd0ec3df0a2a25834e7372e5"],["/tags/java/index.html","25b2c1a90bec99820900bec227978fee"],["/tags/markdown/index.html","55c13a9c2a9cc9c84df6f8f911a9c9ee"],["/tags/mysql-数据类型/index.html","bf0207904ce0098b62d8d011d40b4faf"],["/tags/mysql/index.html","7bdb017f53aa5b8c6292e959e64dc2a3"],["/tags/typora/index.html","a893b23e1906b72e4f8c763ce2f9aba4"],["/tags/vue/index.html","63286fbc7e271ba2ebc03a399c80cd79"],["/tags/享元模式/index.html","fe2ba5140eb580b5d16b5b5c4f88fe24"],["/tags/代理模式/index.html","07c1ac07344ec212a1286049208524ed"],["/tags/分布式/index.html","5638517459e9fdc28021afe5ebb58f98"],["/tags/前端/index.html","87682a3ff80854e61773834f0caae8f2"],["/tags/前端/page/2/index.html","ce59a2a1b4923398cc7d995fd6c6213a"],["/tags/后端/index.html","8f5a68bf222ea4ed1b34bbb07bee9490"],["/tags/外观模式/index.html","b9a2c94ee4356c8bd2c1e09e6e2d700c"],["/tags/工厂方法/index.html","37db58219d9da364431b3678e8d5caca"],["/tags/抽象工厂/index.html","9393b79d2ff44dc2d44f7c7e04cb26ff"],["/tags/排序/index.html","3bc1e8f74acf60d6bc00bc1d6fb44c03"],["/tags/数据库/index.html","08b36247e104201d1745789a835d7606"],["/tags/服务器/index.html","a51efbc5a6214a5f268389da5654f0a2"],["/tags/查找/index.html","749be016ea1646d875d1a34e00614ea7"],["/tags/桥接模式/index.html","c27434d96f2658de4ef7855c4575cd7c"],["/tags/模板方法模式/index.html","bf4484d910f41ecb5a9f9bae0e7d9aff"],["/tags/版本控制/index.html","e569b53231f4fc6593e25dd787a38b80"],["/tags/策略模式/index.html","a38aa7e8b30b36fa6c6ee613db06445f"],["/tags/简单工厂/index.html","4d83aa8a2f52ec870b4e219454823830"],["/tags/算法/index.html","61ce146af793cceb9bec3b8431793823"],["/tags/算法/page/2/index.html","152e7d6793c0bdc5145cda3b38f9e9b1"],["/tags/组件化/index.html","24427d96a5cdd74e5aae7b4229dc28fa"],["/tags/缓存/index.html","2cf870608e3f7ffb34e1aaccbd04876f"],["/tags/观察者模式/index.html","c2830f60fd15ea77e01749fba50e8a5e"],["/tags/设计模式/index.html","682b565c39f6d72b273ae6fcfd040bfa"],["/tags/设计模式/page/2/index.html","907a450bd0e6cb2cfc1c1136df6afab6"],["/tags/责任链模式/index.html","abbc4f6a74369d06bb9421ee59523025"],["/tags/适配器模式/index.html","8e82333a0042ac68496654f0762b99b9"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
