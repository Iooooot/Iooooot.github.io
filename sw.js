/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","c3957af793fd96c30d057e822bf20b2a"],["/2021/02/22/博客的搭建/index.html","f6b5a1340a704213c818fd1ebefe1a5e"],["/2021/02/23/如何使用markdown/index.html","0dde9e88c13af71ef22ad17bf04edb0a"],["/2021/02/24/mysql命令大全/index.html","36e60a2071bdd0e1166c665de395ad3e"],["/2021/02/24/mysql数据类型/index.html","26a80a673fc775eeab183f55f33be5ba"],["/2021/02/25/Git的介绍与简单使用/index.html","a1c61e4615d64a64f2f7cdea25bc64b1"],["/2021/02/27/简单工厂模式/index.html","444dee2d23ae96b12aa24916c26074e2"],["/2021/03/01/工厂方法模式/index.html","e639a3e22e2a6d42ed8db88ecd6d52ba"],["/2021/03/02/抽象工厂模式/index.html","bc357ebeb8ac6bbcf6f8224c9761d1da"],["/2021/03/03/单例模式/index.html","34e8cbda82f144b12e1755f8c179e336"],["/2021/03/04/观察者模式/index.html","c2f7f612633673600dd85f3a39fb6a87"],["/2021/03/05/适配器模式/index.html","88d2565f74d43669bf76050e95ce25c1"],["/2021/03/06/模板方法模式/index.html","17812312cd3424dba28c3e90fea2cb79"],["/2021/03/07/责任链模式/index.html","91d3c4c7f244a0b66c315975d13d3dde"],["/2021/03/09/代理模式/index.html","01e93de27fac875aa519c6690d2dbfa3"],["/2021/03/11/享元模式/index.html","fe4227b987842f93c4a119d17a427d3a"],["/2021/03/12/外观模式/index.html","38a9c57da81995fa4b458149f2d966a5"],["/2021/03/13/策略模式/index.html","47d066f85d340657d8a10802e2e3b67a"],["/2021/03/14/桥接/index.html","deb44b6e69d2e52ed4fe986f84642035"],["/2021/03/15/LeetCode-多数元素/index.html","d02402fe2a8a3ed2ba0d0a8123b06204"],["/2021/03/16/LeetCode之汉明距离/index.html","b0ce483d1e18f68d6df252c9e5b8f214"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","09751f660ebe745322a6456b0e709513"],["/2021/03/18/LeetCode之两数之和/index.html","6ae06cab8f8210a7352f7e760408ae4f"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","81b84a83fe597c0cd1209f8d85032866"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","6a14beb0aa0a3588e65f0d941900c16f"],["/2021/03/21/LeetCode之有效的括号/index.html","61afff9323f7d9daa383277366b117a2"],["/2021/03/22/LeetCode之移动零/index.html","a4421151948e91e7fd365673a5de9074"],["/2021/03/23/LeetCode之爬楼梯/index.html","b064639e9e7dcee8f64848895484de8e"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","374ef8386d6789d925240861d5ddc563"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","9c074d44132f65b7b442231f571073c0"],["/2021/03/26/LeetCode之最大子序和/index.html","ab0d60f0ff31594d33376382cbb9a099"],["/2021/03/27/LeetCode之子集/index.html","38623dca73113bef91a3d8159fd38aa5"],["/2021/03/28/LeetCode之合并二叉树/index.html","80dfc894c29ccafa984d36165194c04e"],["/2021/03/29/LeetCode之翻转二叉树/index.html","66df26b6fa1598f20e5437cb47296d0b"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","db85d7eb80288d2f81f875e8a3b501a3"],["/2021/03/31/LeetCode之翻转链表/index.html","ad6fe2b15213bb53c21ae5408357f842"],["/2021/04/01/LeetCode之相交链表/index.html","17b9bfd35b956e8b591285d12ad10d3a"],["/2021/04/02/LeetCode之最小栈/index.html","e3e0e31e0956accae350d307e2a5f49f"],["/2021/04/03/LeetCode之对称二叉树/index.html","ee148505440ba732055aab2a5e2d70d4"],["/2021/04/04/LeetCode之环形链表/index.html","efd7d882694924e665e7297f9aaabe18"],["/2021/04/05/LeetCode之二叉树的直径/index.html","b7717f69a8a188c241871ce54a6a874e"],["/2021/04/06/LeetCode之回文链表/index.html","42cb8f4da15fbd0406b52cc43e6e685f"],["/2021/04/07/LeetCode之比特位计数/index.html","c11443066c330062297ba0dddea9c784"],["/2021/04/08/LeetCode之全排列/index.html","6311d3ce236f08d28b23933a5a645307"],["/2021/04/09/LeetCode之括号的生成/index.html","6f9360d2d15e11e027f892a8d050469a"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","c0d7e2c6639b6c11b0c327c74463b044"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","d72912f87fd296bfabe2fca948ca7490"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","fff64bae4395507f675665d53c66c926"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","4057016a46444824120a13e5f4fdc503"],["/2021/04/14/Mybatis/index.html","ba01389a1f36898bbf54e910868c7a94"],["/2021/04/15/Spring-1/index.html","c13501866f55f286e2d3ce63fda0f786"],["/2021/04/25/Spring-2/index.html","81db5daaa5c147dd91fb280e03e5e998"],["/2021/04/27/SpringMVC-1/index.html","97471ea9364673766193187b5a161135"],["/2021/04/29/SpringMVC-2/index.html","f4a168b9f79c8dbee0224abe45d72cd8"],["/2021/05/03/冒泡排序/index.html","5ca284bafd43633e18e11c33a43c60e3"],["/2021/05/08/选择排序/index.html","ec6360c199ad2c22ab60203a5369fdeb"],["/2021/05/12/插入排序/index.html","fa6cee293c6a350fc6a93a786eaefdd9"],["/2021/05/15/快速排序/index.html","abfb1678eac98c7351ec4840df359b6c"],["/2021/05/19/基数排序/index.html","a4c4c7d471b3047b8f413a440c3d992e"],["/2021/05/20/哈希排序/index.html","81ef925a34e4b3b67ca741454f0fbc76"],["/2021/05/21/归并排序/index.html","ecbe146292f5affd9cbecb283e5726e5"],["/2021/05/22/二分查找/index.html","3535a4526e066c47b52d17d9ace41937"],["/2021/05/26/差值查找/index.html","9b97e36a8bb498cd8cc676e48dd2d19c"],["/2022/01/12/高精度大整数计算/index.html","d60df24f9444f4641495fce5e2d6e572"],["/2022/01/22/前缀和/index.html","78dbbb435e69296f78bb4332b79f8722"],["/2022/01/23/差分/index.html","aed84a9d70839b81f7c6600a89f13b26"],["/2022/04/04/MyBatisPlus/index.html","ff56a348839ff7bc6d658b87a6f113a6"],["/2022/08/17/jQuery/index.html","7635d29bf01b21f4c0a9a5a43c6a12f7"],["/2022/08/19/JavaScript/index.html","d675fcac768bf2f8cd119f8fd4613f99"],["/2022/08/22/Ajax/index.html","c8b76ffb4968f47531362e0868f55c87"],["/2022/08/23/Promise/index.html","4de505ae932a13483cc568b9f864535a"],["/2022/08/24/Axios/index.html","3240843cc8521a5a2d6f6820e72b841e"],["/2022/08/25/H5本地存储/index.html","6871d1d89dddeb89aada5c5213bacedb"],["/2022/08/26/mock/index.html","0c0e499281b2cdd4ac0c24f12ff06996"],["/2022/08/31/VueJs/index.html","15d73277b9813ae33b2039571b094a08"],["/2022/09/01/vue组件化/index.html","3e84b6c237b5a92449ddb0a189b26a8e"],["/2022/09/04/VueCLI/index.html","28f6afe035abb53bfeb7b95342c969c0"],["/2022/09/07/vue实现动画/index.html","12d9e7fafe4373eea650bcd4b88275f6"],["/2022/09/09/Vue响应式方法/index.html","e08da2fa18f426cbb72bbadc23e3d619"],["/2022/09/10/Vue异步请求/index.html","73c91513e7710f2e22c13e3d1a402dfc"],["/2022/09/11/vue-Router/index.html","bfb1bbeac5adb63bb39925f9e4f5881d"],["/2022/09/13/Vuex/index.html","aed6b1ba3d043031cf6797c2676db322"],["/2022/09/15/SpringBoot/index.html","8e4b83a450c7de37d0062555a35d96e7"],["/2022/09/16/SpringBoot配置FastJson/index.html","73fe58cffbb1aeeb80204f7495c50201"],["/2022/09/19/SpringBoot参数校验/index.html","3ad8f3c744bc6d954cbf870d118f3200"],["/2022/09/20/SpringBoot的异常处理/index.html","15ebb77c4b88bb86664aacc3737e8242"],["/2022/09/21/SpringBoot统一响应处理/index.html","14444b0340eab342f2b165d6ea989b22"],["/2022/09/28/Linux/index.html","85b90a19f9cee7d88d7946f698bfe6c5"],["/2022/10/02/redis基础/index.html","18eb96fa718f2712119b3d5956d0cabe"],["/2022/10/03/Redis缓存/index.html","ba76e2371d91398abd828244979dff61"],["/404.html","157fda9c56a9b5cdc24bdb4fbd497474"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","daf04203d0502ade80a679b1cca696ce"],["/archives/2021/02/index.html","13151fe9a0ccfeff6de8855661a3df54"],["/archives/2021/03/index.html","5b42735c731790f91c49b0b780716be1"],["/archives/2021/03/page/2/index.html","1987b494230457ced577e8b4deda0ceb"],["/archives/2021/03/page/3/index.html","d43b6f17f5b33b7facc1ab9328246bb3"],["/archives/2021/04/index.html","086a1ca41e89e60be91c0f88ad60aef4"],["/archives/2021/04/page/2/index.html","05fab25f62cf4e05f84eb77bf9849975"],["/archives/2021/05/index.html","b30d505ac17e646a74cc7a3891eb3b15"],["/archives/2021/index.html","ca2c13cc64a8a3c53dec5aacbb25a12f"],["/archives/2021/page/2/index.html","802a53de84f5304de774c13e8774ee68"],["/archives/2021/page/3/index.html","27811f76701ac93fe358cb7746fe1bbc"],["/archives/2021/page/4/index.html","3fc3acb5ae819b457c6729957e416c7b"],["/archives/2021/page/5/index.html","e8adcccc9c6f04bd67738f51da00a666"],["/archives/2021/page/6/index.html","92087a045a63f605b97c554d16b75552"],["/archives/2021/page/7/index.html","9fce9c7b5d51e8342bfa411c5338b5b7"],["/archives/2022/01/index.html","95f9da6ad3f882a7e5577422b54f28a0"],["/archives/2022/04/index.html","933fca8f530e36b102c4fdc0a2130384"],["/archives/2022/08/index.html","5f93764103b9356fe3f66c60213f43ce"],["/archives/2022/09/index.html","157cbf066ad46b8d88a021e1b586adbf"],["/archives/2022/09/page/2/index.html","eafda16b52c3406957c0bd54330bde94"],["/archives/2022/10/index.html","e3296ef74b2e31755d18e7812cba4c9b"],["/archives/2022/index.html","9f20ab956976ed13fd2171fa8329b1cf"],["/archives/2022/page/2/index.html","266664995c960ed4fe4ac082627e9c3e"],["/archives/2022/page/3/index.html","de820131bcf3f75324e30f543634b4ac"],["/archives/index.html","829f85b8318ac605ed907b4b998fb0db"],["/archives/page/2/index.html","05267ba41e73643e2b98552c0d52d5d3"],["/archives/page/3/index.html","8395155f480aba14a1589fbfa7a5480e"],["/archives/page/4/index.html","c85647662b8f1e11f59a8fdd28c4b07b"],["/archives/page/5/index.html","48ccd072f667fcd65d83a2028997c865"],["/archives/page/6/index.html","f618c8dfc60df0735fc673750847ecf5"],["/archives/page/7/index.html","574da7ddbbd708449630a481864de63a"],["/archives/page/8/index.html","3d7cd6bf19f4898bec72aabfab962445"],["/archives/page/9/index.html","cf96b178848a5cc78559683de11feefa"],["/categories/LeetCode/index.html","99b6473e915d0422bbf5ce2b1f235b46"],["/categories/LeetCode/page/2/index.html","47ed8aab949c3bdffbe2c9dfb749272e"],["/categories/LeetCode/page/3/index.html","64a1e13398fc009c5699556770d93b8f"],["/categories/Linux/index.html","d87c7021cb8b726f87d609ba366f11b3"],["/categories/Redis/index.html","19fcc6becede82f6ae8d69132c8c12d0"],["/categories/SSM/index.html","ccbbacc8c5e26bbcaef52f39dc6d2e9c"],["/categories/Spring框架/index.html","d1f6b0a2d35656122f5bc14f36eded54"],["/categories/Vue/index.html","b07d336fca83d2f44ba5b15d0ed3d1fc"],["/categories/index.html","faee7c5661b78914a7c853444c802655"],["/categories/前端/index.html","50407f8057c3cc9496afcb2437673064"],["/categories/博客/index.html","d7d3f5602b6c4f97036fbeb0feb2f01b"],["/categories/学习路线/index.html","cfc1d7b4f20f4cd33c087fd69ccca5aa"],["/categories/工具/index.html","ff719f33fd859d470c7f2b8c96d5a645"],["/categories/数据库/index.html","4282d652f4a2b85987559e2183ed4b8b"],["/categories/笔记/index.html","fd3fd0cf89d4db49762c6aaddc0d009d"],["/categories/算法/index.html","0b75d5ecdda9505a0a8e72eb226e7f1f"],["/categories/算法/page/2/index.html","5e4072d257f7d2e57aaf350f048322a5"],["/categories/设计模式/index.html","1f8cb7bc1c11c5e31b254fbc833779ee"],["/categories/设计模式/page/2/index.html","1569b7d4cbb298e52ff146b08593827f"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","a6075867566afdb523649e620c4faa1a"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","d8e2622ca82adb6b55e26a11f72865b9"],["/messageboard/index.html","5c096717a3a67a6b2027c8a9ff20ff60"],["/page/2/index.html","1f2bd0aac5ff63c4b43ab0dc49d3c97c"],["/page/3/index.html","511ffb4cefc94e6b05ef8cbea988e9db"],["/page/4/index.html","79a34910dae92a31c1529c644c0e0591"],["/page/5/index.html","c79323ac1aae938cce471487a3787313"],["/page/6/index.html","adb39d7aae0020c6c21fcace4d2e475c"],["/page/7/index.html","d257fafb6b5bc3bf8a652195db59eaaa"],["/page/8/index.html","95268073e075df5951fc31453f6ade55"],["/page/9/index.html","aae2a3992f6158f9f8d7603210517ff5"],["/sw-register.js","8f7690555d516d1f0cb1841958335866"],["/tags/Ajax/index.html","69c514ba09a2a8b88379a29a4dc13726"],["/tags/Axios/index.html","8efa7bc20fee62615864d66b7ab1547b"],["/tags/H5/index.html","3f7451f193c987d70eaac62e3352dbe3"],["/tags/JavaScript/index.html","a92565780f0b5a33633f34f043496260"],["/tags/LeetCode/index.html","443555a5dcdf8ba689ea0e379e1cc612"],["/tags/LeetCode/page/2/index.html","af38517d0c9306433932eade42f07d53"],["/tags/LeetCode/page/3/index.html","e50967e695061114329d4ae51139cefe"],["/tags/Linux/index.html","ab3babd951a37ceae857af3dbf9e5d93"],["/tags/Mock/index.html","cfe335e7bca317f4b5e9e8c16f3370b4"],["/tags/Mybatis/index.html","0ab15d1c7a2d69d57996893d20347ad0"],["/tags/MybatisPlus/index.html","2f1f2e954dac0af4d47d092ea6bf607d"],["/tags/Promise/index.html","15c76a47feae523ae297b0e7d255961f"],["/tags/Redis/index.html","e648f54eb30db026a9fe7cd5e422d794"],["/tags/SSM/index.html","adc2e089c9e6357939a5d4e1b165b2c2"],["/tags/Spring/index.html","92bc6fa82fe2a6228f0707286d0ac906"],["/tags/SpringBoot/index.html","55a72bdb814b1270cb0e2a2b92e9767c"],["/tags/SpringMVC/index.html","d74096b1580249c7b22d16d9932c1a5e"],["/tags/butterfly/index.html","289eab4e2196e18f3cfa200abb8f7a4f"],["/tags/git/index.html","3d522e3ad10b831824b87b652f0abb5f"],["/tags/hexo/index.html","378843366bf6edb61bd9e792ea27a249"],["/tags/index.html","fd5ce47fbcc4e30a65fa98e9a7eeda91"],["/tags/jQuery/index.html","05f163836ca6e3513683d89a0a4f281f"],["/tags/java/index.html","ec6da6cc52469843e8419bf07b14cdb7"],["/tags/markdown/index.html","5ef8790bec3e7fdc9afd581de9670648"],["/tags/mysql-数据类型/index.html","a834fd4abf10e2d68d25182fdb19b5a4"],["/tags/mysql/index.html","9c07d2543de0b4b5725570bc1c8072f1"],["/tags/typora/index.html","b08dda621331302570b86ecbc1f1be3e"],["/tags/vue/index.html","f07780b84eb99a460af66fa50bb80166"],["/tags/享元模式/index.html","10a32e3b8ae6082713e800e601ef2ddf"],["/tags/代理模式/index.html","84251aa29765e7142f61f73e9ef9d218"],["/tags/分布式/index.html","d4d244abfee2841ce6d2c5357265f295"],["/tags/前端/index.html","aea5d1ae6ccd5cbaf6ce6576c9fb511b"],["/tags/前端/page/2/index.html","e7ffa0a3516c5121de86ef838589ce50"],["/tags/后端/index.html","52658ad50265f2aab3d7d41ff762593c"],["/tags/外观模式/index.html","58f00d340e96963bea6fe1cd141202fd"],["/tags/工厂方法/index.html","091fcefdc73cd36c29f50a421fcb046d"],["/tags/抽象工厂/index.html","a754889cefec43029e79b78daec15f24"],["/tags/排序/index.html","5d1874a8f51394d70c9bc4b79a8da41a"],["/tags/数据库/index.html","f459842ba3ec41f18910e036fce785cc"],["/tags/查找/index.html","2097df536cf764037dabcdb1624ce130"],["/tags/桥接模式/index.html","cbd503ef948a480ba49b502e9cd5e592"],["/tags/模板方法模式/index.html","5c814f64425ec23e190f55ae9c1fad9d"],["/tags/版本控制/index.html","c3e727c1ad62b1747c166b2f630c228a"],["/tags/策略模式/index.html","c1d7ed07c035f44215890740043ecb7e"],["/tags/简单工厂/index.html","cd2dcf429e5f592eed0482ae27513979"],["/tags/算法/index.html","5ed53eee428ee59cd2ce5d77c6237a8e"],["/tags/算法/page/2/index.html","03c87254ba4723e031c6093b76e996e5"],["/tags/组件化/index.html","ce1f39a30053e5c3b644205d957c3ef5"],["/tags/缓存/index.html","2d514ddf1c6568ae1faac2f8ceaf7a89"],["/tags/观察者模式/index.html","8aadc940f1a36ecc7e8bb328e1ba1952"],["/tags/设计模式/index.html","15afeb9e0f57d27830eb315e8e8041ac"],["/tags/设计模式/page/2/index.html","346f43f82fcf1446949c59be3ad75547"],["/tags/责任链模式/index.html","14d709d53449f7f2224f1978a7711aad"],["/tags/适配器模式/index.html","f20974715db87fbff42b22948aae03ef"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
