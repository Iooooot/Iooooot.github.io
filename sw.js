/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","c37b117ec369d342782088eb4ad377c8"],["/2021/02/22/博客的搭建/index.html","0edcefd8a6785762455e40125bb7561e"],["/2021/02/23/如何使用markdown/index.html","18877593ad7b1919b819545f637b12f4"],["/2021/02/24/mysql命令大全/index.html","628e9fb9777c2ceed02cc1414c014f51"],["/2021/02/24/mysql数据类型/index.html","1e2ecd89986847a80277902047226e8b"],["/2021/02/25/Git的介绍与简单使用/index.html","c4fb65f66f44edb8dc79c89151893b2f"],["/2021/02/27/简单工厂模式/index.html","808ce902d12b5140066a65be92cd3b0f"],["/2021/03/01/工厂方法模式/index.html","f026bc2a68add0226a47a735d0cd0e33"],["/2021/03/02/抽象工厂模式/index.html","e3ba92d1a1b45dc6f2c171b6ec2a9020"],["/2021/03/03/单例模式/index.html","1a6675d5e2c95451ee1ae4c65afc6f89"],["/2021/03/04/观察者模式/index.html","1427e42bcf70a1cfcc554f8d77ba601b"],["/2021/03/05/适配器模式/index.html","aa96c57aded37d888d3c159aca25e188"],["/2021/03/06/模板方法模式/index.html","893f073393978b4e778727aa80ed2972"],["/2021/03/07/责任链模式/index.html","1deaedfeee839a25d8873086698fc61e"],["/2021/03/09/代理模式/index.html","4f95bd534cbc9666a0c62a855402ca39"],["/2021/03/11/享元模式/index.html","63cf4e3c081b9718e19f9e5dcb8b7f24"],["/2021/03/12/外观模式/index.html","13f3563cccb22332eac26437d0d80ec5"],["/2021/03/13/策略模式/index.html","dc5874ec22df3e95947d3894bb9462a5"],["/2021/03/14/桥接/index.html","9528fcbce2991798abe7a7694ea9a223"],["/2021/03/15/LeetCode-多数元素/index.html","767ca2d58b806afbf849a6530251fd22"],["/2021/03/16/LeetCode之汉明距离/index.html","c71f2070d6a3e326052d1c90ba48f384"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","0370db7a51e07bf6a1914d2eff4ea661"],["/2021/03/18/LeetCode之两数之和/index.html","602a2b8dd8d3bb12d6e111fc683e7885"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","3499698e35b8df1a0e5353a2fb3d2011"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","c6816c984fd293ffb4c544aaded9102c"],["/2021/03/21/LeetCode之有效的括号/index.html","338a35190b7c249a6c94eebf539cc309"],["/2021/03/22/LeetCode之移动零/index.html","035a77788bbca1bba89ee555bbbc93ee"],["/2021/03/23/LeetCode之爬楼梯/index.html","1e8ab264addffd6b1a541c24a42d10c0"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","e43870717baa81925fe1529a0190617e"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","b43c26c86fd82acfc6804f091b4a2794"],["/2021/03/26/LeetCode之最大子序和/index.html","957fc64363f122fd55c7b1eeb8ad9928"],["/2021/03/27/LeetCode之子集/index.html","2f005f6e91d4171dcb12ab1f3adb768c"],["/2021/03/28/LeetCode之合并二叉树/index.html","19848387be07f15c72c1f380e4badc69"],["/2021/03/29/LeetCode之翻转二叉树/index.html","b44b9b11cff9e7d21544c06df8fff7b6"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","1c04fb265c748915e016cbdc1cd810b5"],["/2021/03/31/LeetCode之翻转链表/index.html","0e6b0b8d274925f43ad717df6ff9d0cf"],["/2021/04/01/LeetCode之相交链表/index.html","daf54d82dfca4c76281a4d442ea76889"],["/2021/04/02/LeetCode之最小栈/index.html","694881d528c50dda08fa22e66286f99e"],["/2021/04/03/LeetCode之对称二叉树/index.html","aba256a38ac405b8b3f8efec7df7d2a1"],["/2021/04/04/LeetCode之环形链表/index.html","d7e597372cbfcec23656a1274df3b3b9"],["/2021/04/05/LeetCode之二叉树的直径/index.html","53376def1a694b05b2415f29b55f22c2"],["/2021/04/06/LeetCode之回文链表/index.html","39168b5b063d3008669b2a1c7762a002"],["/2021/04/07/LeetCode之比特位计数/index.html","7ed41b5cb2179de64a1bd12aaa90d141"],["/2021/04/08/LeetCode之全排列/index.html","be925ccbf638e48e25b82b3574bb3261"],["/2021/04/09/LeetCode之括号的生成/index.html","c0f06031bdc27be4861ebba8339c5078"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","197e2153cab1bad5498e26a795efdaae"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","ec241c61f25b11140cf4de83a69a7795"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","acc41a54c34a67d5496133c6d3eff942"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","709a77ae7fa85ea80441d34f3e4925cf"],["/2021/04/14/Mybatis/index.html","fe659a62645615ebcc65e79525db6817"],["/2021/04/15/Spring-1/index.html","e375941788d654f8a3ed3855ba381a23"],["/2021/04/25/Spring-2/index.html","8df917a1e673105064f2f75282cb4fda"],["/2021/04/27/SpringMVC-1/index.html","fc8f6c00417b2fd67f3a14447b6002ed"],["/2021/04/29/SpringMVC-2/index.html","45a4a184c8b385491634b12816837137"],["/2021/05/03/冒泡排序/index.html","b93ca2e2965e16fcd908dfdba363ec8a"],["/2021/05/08/选择排序/index.html","10a723aa203770560fc9fc48f6e63cba"],["/2021/05/12/插入排序/index.html","9df4bdb5f8cdfef4946951a6e96a1241"],["/2021/05/15/快速排序/index.html","321113b220e9623391eafc0e17517379"],["/2021/05/19/基数排序/index.html","849b1f2974f91c735b4b9e48d955698b"],["/2021/05/20/哈希排序/index.html","32bf92b9d4e0a8a3f9258a9236958b2b"],["/2021/05/21/归并排序/index.html","33dc7aa771ce4293756508a162d39442"],["/2021/05/22/二分查找/index.html","a418ffeb781630b6b60252d696900c58"],["/2021/05/26/差值查找/index.html","659f552b3a06b09b400b9979880bcd1f"],["/2022/01/12/高精度大整数计算/index.html","9963d34d6da30aee9e22b1189a284313"],["/2022/01/22/前缀和/index.html","ee781cb6352b532fc57cf7337b2628a3"],["/2022/01/23/差分/index.html","dcfe320be10de9b22a01d4646fc6b8c2"],["/2022/04/04/MyBatisPlus/index.html","83640e95a7d45731f21734df75206f07"],["/2022/08/17/jQuery/index.html","efaf866154d0e75c0b89756d2a007b42"],["/2022/08/19/JavaScript/index.html","c2d2af53e2e2d103e8b4d3475249d63e"],["/2022/08/22/Ajax/index.html","f35988e134293d367f261c43294d6455"],["/2022/08/23/Promise/index.html","4078ed5426a8dbbec88add5b711c1006"],["/2022/08/24/Axios/index.html","140f7135ba8938db0d4769356c119e39"],["/2022/08/25/H5本地存储/index.html","3496eca2bcf2424efb29be125df66d38"],["/2022/08/26/mock/index.html","4bf59d8540b8ff654fa1ef6ebc96377d"],["/2022/08/31/VueJs/index.html","185bd79d689d9f366d4864b3ecfdcabb"],["/2022/09/01/vue组件化/index.html","efb2cba5a3c65955d022f7b3ed28f1ed"],["/2022/09/04/VueCLI/index.html","bdbcdb405ace56387ebe645c77737781"],["/2022/09/07/vue实现动画/index.html","3c804e54420121d367a5e7f5c65ecfc4"],["/2022/09/09/Vue响应式方法/index.html","a64debbc5cc268ca4c3d2e0b98283b30"],["/2022/09/10/Vue异步请求/index.html","279eb0d6331973fd034a45e72cc35e81"],["/2022/09/11/vue-Router/index.html","1205afe9bcbb37d03ea8ab3b4d4ab91b"],["/2022/09/13/Vuex/index.html","e3d8628bf4ff22c3c489746a9ff3e7a3"],["/2022/09/15/SpringBoot/index.html","cbf4dbe3ebd0c50f0d2dac4c6bec329b"],["/2022/09/16/SpringBoot配置FastJson/index.html","eeb9f3ae55bd480574576a0ee271bf94"],["/2022/09/19/SpringBoot参数校验/index.html","ec0c3a9864e8398c4f3f74fdb8bb8f49"],["/2022/09/20/SpringBoot的异常处理/index.html","35c6d0b4c449e8d00260b3b48d8d475a"],["/2022/09/21/SpringBoot统一响应处理/index.html","ea238375ade9f7ba1eaf5b0529443281"],["/2022/09/28/Linux/index.html","26ee6789e1d1bfd0ae7cbbc803888a23"],["/2022/10/02/redis基础/index.html","2dc1b43b8bf2b63c1d41cdb47bc1afc6"],["/2022/10/03/Redis缓存/index.html","07a9119739489134fc79565a6f70496a"],["/2022/10/04/redis缓存穿透/index.html","48e549e3c1b2ee4d22e5a9f901909aa9"],["/2022/10/13/Redis缓存击穿/index.html","b675494ffc15285dde2661628dd3b842"],["/2022/10/14/Redis缓存雪崩/index.html","6386314c43494f8f799b58b3c772aa41"],["/2022/10/17/Redis集群/index.html","7c06e3b84409d1c2244bd47cc4be9173"],["/2022/10/18/Redis哨兵模式/index.html","13d4ddab12c2f269777b1a08fefefc94"],["/2022/10/19/Redis主从复制/index.html","bca8af205f88270169945b35e1a92cba"],["/2022/11/03/Spring-Security/index.html","0d11efbc7ed97ad82e226d9c01aeb820"],["/2022/11/08/SpringBoot日志/index.html","87b01cd7d54bbc9668b43e028b708970"],["/2022/11/11/Swagger2/index.html","b56d102b969112f9353d010a48fe49fe"],["/2022/11/21/Nginx-一/index.html","a609d9c6ce105675a8c04a45b2b5bca8"],["/2022/11/23/Nginx-二-代理服务/index.html","64b6cb3eccf0d6e9160159a4b9257692"],["/2022/11/24/nginx-三-负载均衡/index.html","6f1be3d449b06040dbfcc3505a20da79"],["/2022/11/26/nginx-四-缓存集成/index.html","5b078125ff1762b4be94d2bc660cbaee"],["/2022/11/28/nginx-五-动静分离/index.html","ab423f2a8a749bd075c1d949f3d8f05d"],["/2022/11/29/nginx-六-制作下载站点/index.html","01a6813c5c4042a2ae19357108a7a5a5"],["/2022/12/06/docker基础/index.html","65348f6207c08afa35bd29f116fa69d2"],["/2022/12/09/Docker高级/index.html","3057d9b8f3dd163e0d132bca264148a9"],["/2023/01/04/MongoDB/index.html","cc5b92fd560739df17d2e096cfe8b7ca"],["/2023/02/05/消息队列/index.html","f4b1154664f353d626af83223d17d926"],["/2023/02/12/RabbitMQ集群/index.html","df6165425916ea9a804b812a60f980f5"],["/2023/03/10/CICD/index.html","dd89e4096e8ec7dbcdc1776c6bf9e0c8"],["/2023/03/11/ElasticSearch/index.html","461ef1b16465b97bd698aa3dbecda0ff"],["/2023/03/12/ELK日志平台搭建/index.html","fc591b0dcac3fcc6836f3261c57b6e75"],["/2023/03/13/NIO/index.html","b1855a3aea70d9f331aadb23422759a2"],["/2023/03/14/Netty/index.html","2fc973478a9e83c48c6f3c693b0f66c8"],["/2023/03/15/SpringCloud/index.html","ffcf47c7f2ef65d4a04c32691e663ca5"],["/2023/03/17/分布式系统认证/index.html","4dd8239966df9b9ba145180e3d9033fe"],["/2023/03/19/JVM概述/index.html","be738dc92485b7b11eec5ab82bb3ab6a"],["/2023/03/23/类的加载过程/index.html","a46f9ea303e9d45c8b6c24d492143272"],["/2023/03/28/对象的实例化/index.html","8f143c464643c25bed66848c07435d4a"],["/2023/04/01/运行时数据区/index.html","4ff447c0bcf7c66be4eee65599e60a7a"],["/404.html","814e1898a0d3890fd6ff971104debeed"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","4f0187d7e492895393578c227b30fb76"],["/archives/2021/02/index.html","ac982b151863701ab362a5229c3957f5"],["/archives/2021/03/index.html","2528d9e46714facf90529158c920a84a"],["/archives/2021/03/page/2/index.html","916e01d635ca378962b6e2fbc1dbd071"],["/archives/2021/03/page/3/index.html","6f22b0c01adff907b65a425aec8c4df8"],["/archives/2021/04/index.html","85506a0eaf13eea2628cc62b7f4e34d5"],["/archives/2021/04/page/2/index.html","4f3e2ca6952f7d95dccecfa2383747dd"],["/archives/2021/05/index.html","3b23cfbf020570579d382912adbd4a08"],["/archives/2021/index.html","415bd0e351b535ffb0494f30b092d3ef"],["/archives/2021/page/2/index.html","d95e688143086dd3d40ebc795672eccc"],["/archives/2021/page/3/index.html","88d41d6ea51e5b3bdeb470e4442e37d2"],["/archives/2021/page/4/index.html","c8428c95d41b9a838c095ec2ef80d28a"],["/archives/2021/page/5/index.html","7fb877ae997abc4b3ffae938001f5aa7"],["/archives/2021/page/6/index.html","8da25585f8cbadd4fa8189cfc7acaddf"],["/archives/2021/page/7/index.html","429c7321bb51129d3de66dc01e0bf909"],["/archives/2022/01/index.html","9e7f4a9d201ebbce1fcff880b4b28212"],["/archives/2022/04/index.html","fdddafa65304123ef03a11eadd5cda9d"],["/archives/2022/08/index.html","9e2b3bdd84136a24bfbcf91d15cb733a"],["/archives/2022/09/index.html","4b3acfe7c2bd596ff9180510e83795a8"],["/archives/2022/09/page/2/index.html","5907cef129db517a4e76dcd64b88894b"],["/archives/2022/10/index.html","d190a26155984318e27612fb4eac3168"],["/archives/2022/11/index.html","cc37bee9b37e69ff029eb7fbe2110eed"],["/archives/2022/12/index.html","2602a6d3970a6b520d61df4351a0d95d"],["/archives/2022/index.html","cea9f1bb8e8e4b521d55376b63ccb743"],["/archives/2022/page/2/index.html","c557614b1c1f63c9d02791b94bfb0d56"],["/archives/2022/page/3/index.html","7a18b85eeabc35afb98646eaaf533b70"],["/archives/2022/page/4/index.html","61142e21f15169cbc8bcb3905bc92620"],["/archives/2022/page/5/index.html","07f45061f506461326f7b77101cccf0c"],["/archives/2023/01/index.html","1a5ebc57a95eed30f8b7f068ad3b65a1"],["/archives/2023/02/index.html","085bef5c7039b887821f563d3b648b0a"],["/archives/2023/03/index.html","a87dae9eba1dab6dc502697d5e77791f"],["/archives/2023/04/index.html","5099a8c8d222a94c371b89a09f4f9a88"],["/archives/2023/index.html","18849371da61f2166b7c0bc1a7df03fd"],["/archives/2023/page/2/index.html","3c1da0eb8504df731d102e4947ef2f74"],["/archives/index.html","88b0f38a6a8179a7fb4d494e46a74854"],["/archives/page/10/index.html","f2fc23e0b8bbbd2f3f3ca1605c4f8b5b"],["/archives/page/11/index.html","909b98a611f51c0e7f12157f45bfd8eb"],["/archives/page/12/index.html","206d8bcdc0dc7d65b50ce809bbdda460"],["/archives/page/13/index.html","6886604c28f2e0080a27e71f53b18a2f"],["/archives/page/2/index.html","c320aafb3e6b54eb5f4bddb1ac89cdba"],["/archives/page/3/index.html","7b4ff7099c49c3e5d002e8b6a3facb47"],["/archives/page/4/index.html","d07c00a7c1076759d81e010b00a499ab"],["/archives/page/5/index.html","0b1a0c8aa32ed452bae48eea20cb5449"],["/archives/page/6/index.html","599701df76400fb9c0b762c2fc586a5c"],["/archives/page/7/index.html","3e2195e0e995a0e0ae615294c625cfb3"],["/archives/page/8/index.html","048289c1ca2a13fa8ed0f43384a01772"],["/archives/page/9/index.html","4af505536f9d0ae84c9334b81621b80f"],["/categories/CICD/index.html","14c7b3d3cbddeae32c0098da1819b080"],["/categories/Docker/index.html","4e9433fa279caf5e24c2b94da83e2f4c"],["/categories/ELK/index.html","2580a21969ae7d0e8ec6606dd0cfff4c"],["/categories/ElasticSearch/index.html","9d50403d8b76b7c238d6894de6040b0b"],["/categories/JVM/index.html","231351fc3f86bd691aa3ae597306c232"],["/categories/LeetCode/index.html","8a43da65d5848ade998f1d6c93218a5b"],["/categories/LeetCode/page/2/index.html","0379223322583ee8a253a9ccf717d1a2"],["/categories/LeetCode/page/3/index.html","543304cbb82af0df34f68f6f998b9b01"],["/categories/Linux/index.html","2e1bf1139ce8ebe8edea078fa7611c74"],["/categories/NIO/index.html","d2dc37a4a554da8f1383e1f828097735"],["/categories/Netty/index.html","daf0e9ec4ba6ed925ae648b103b886b7"],["/categories/Nginx/index.html","a9b51b086af206b70e34062ba1aff8b9"],["/categories/Redis/index.html","5350496ac6de7875f232e1f6e43ed3ff"],["/categories/SSM/index.html","c26ca0a7d3cbf139895fa48dd9a81143"],["/categories/Spring-Security/index.html","b32785ee97f26cffa5b578c0911bc34e"],["/categories/SpringCloud/index.html","bdfc4486b462b940c09f343c558a3ece"],["/categories/Spring框架/index.html","0faad81583e16b1bab8a68eed4fd7a4a"],["/categories/Spring框架/日志/index.html","356c91e94271a55251b5fba4bb8b89d2"],["/categories/Swagger/index.html","d8149a686a258831dc8550bd3ad6ef3d"],["/categories/Vue/index.html","a31cf8dc15c579ed9524e30ff29c2e73"],["/categories/index.html","381a47a569917ed6e7538391241725f3"],["/categories/分布式权限认证/index.html","87cf30af8d02a4c020fa9fbd20d582b7"],["/categories/前端/index.html","80294fb32ec93160632e51874c047dbc"],["/categories/博客/index.html","8f9863c0adeef60ac9af04d1926354ae"],["/categories/学习路线/index.html","4f947ae537231629a8dcb6cc34789572"],["/categories/工具/index.html","4fd53dac950d2f158a2539ce345f2e5d"],["/categories/数据库/index.html","4d8c3f9404f52a6bc2e4052d2d199529"],["/categories/消息队列/index.html","adef578208e7788674e7a0b006a8f96c"],["/categories/笔记/index.html","8ccd1cf1d15e10f33ae0741ebf4d9041"],["/categories/算法/index.html","7ee8738d32babedc0b4638ce5b6567ef"],["/categories/算法/page/2/index.html","812426788ad66edc2c0fbcd457a9e7cc"],["/categories/设计模式/index.html","74a89b251838f5385376ab6eef40a582"],["/categories/设计模式/page/2/index.html","4f21feee01844c662d178797b011169e"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","0e050d4fa5c9296e4c591f8bdd552fe5"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","8a99efff9faec6ed50b7283d8657734a"],["/messageboard/index.html","9c8738b322029559f4afff78880242ae"],["/page/10/index.html","ceed2e5d50834b2f502103be1ec9cd7a"],["/page/11/index.html","78c6d58eba7cb6abd34ecad1d2bd730a"],["/page/12/index.html","b6eb3ce57774985249d75e9e72edf253"],["/page/13/index.html","0d34f1003707e9ec9b5f60fca0681047"],["/page/2/index.html","a0ca7c7cb5ca32cfb8541f8042f527ef"],["/page/3/index.html","ffeb0fef75c595a8a22c1eaebd06b5aa"],["/page/4/index.html","8dc9e1a5c6518cb0c51b02fb3132b6ca"],["/page/5/index.html","bd2f78488c8ab3bc403fbcc226b5b926"],["/page/6/index.html","dfa56807d679cc09c500d1ca2beed645"],["/page/7/index.html","074dd246c80e5e554e8c3eff8bac9e6a"],["/page/8/index.html","d9c5aa40b38df30a7c0d39d080aadc41"],["/page/9/index.html","0fce46bab2fcb854763b8ac0936ab4f4"],["/sw-register.js","b71d411811150452aeec545ea4d44d0a"],["/tags/Ajax/index.html","604e576c6948d47f545421cbc6256a39"],["/tags/Axios/index.html","82cc2725f61d592acc32efcf79803490"],["/tags/CICD/index.html","6105a0303479b33151798548d13f4aac"],["/tags/Docker/index.html","2888c37ad18179ae180b5131db9957cc"],["/tags/ELK/index.html","b2b8f19297758f6efb2262d39c2c171b"],["/tags/ElasticSearch/index.html","6984cf6b5376b65eae5effbb85f271b5"],["/tags/H5/index.html","e84b6aa1a0afce93e297777e9db3918e"],["/tags/JVM/index.html","2b6e7ea756820a81b81beadd6eb41e87"],["/tags/JVM内存模型/index.html","3ab45cf4aef25cb3fa6551a5a81ab9ca"],["/tags/JavaScript/index.html","8a37ba45a363275705b98cc900499ced"],["/tags/Kibana/index.html","24c52f284aef75c051f58a6385faa551"],["/tags/LeetCode/index.html","a741160bd1cd33b6cd6aef88238ae777"],["/tags/LeetCode/page/2/index.html","e27fc13e5954f4bde0af327499380cc9"],["/tags/LeetCode/page/3/index.html","78606d45c5f1c3aa340afd348be9fe32"],["/tags/Linux/index.html","87d15caa30091ac2eabaeb58bfa5d613"],["/tags/Logstash/index.html","8dfe3d8038679fb86c3074ab6edde98b"],["/tags/Mock/index.html","a9a88231ff7fa137be3fed819dedb57d"],["/tags/MongoDB/index.html","b763d5cd7539627e2a3a8b0ef2df984b"],["/tags/Mybatis/index.html","5a646f51a65bccf9352c755f404ad50b"],["/tags/MybatisPlus/index.html","670523a720b8182c94bb87c101177578"],["/tags/NIO/index.html","b711142d9cfe3c79dd8e38838fd65e52"],["/tags/Netty/index.html","7d82604cecd0e6916cb390c951a2444f"],["/tags/Nginx/index.html","fa5c0ed520eb44cd48912dd23fb6c535"],["/tags/Promise/index.html","bb47819ecca42c2c49706aa7495d2286"],["/tags/RabbitMQ/index.html","349eed99da4d6b031a4d447ce813efe3"],["/tags/Redis/index.html","a8ce6cdf7abe0cd1b20c0a21d451abdc"],["/tags/SSM/index.html","8ff5c3a95b897c72d7987bcb8fe3c39a"],["/tags/Spring-Security/index.html","dad74e2d695528f1d3a3f873c7a7414f"],["/tags/Spring/index.html","14148c6217f97e33f932b2731bbd43e7"],["/tags/SpringBoot/index.html","5099ffb62c7a3c8316a27c06f79bc012"],["/tags/SpringCloud/index.html","19cf517ecd7df9a0ef5f364da7750bd0"],["/tags/SpringMVC/index.html","c7979add4f6f6d0b03ba0291542ca8f2"],["/tags/Swagger/index.html","ff68412c2ce98e86d41abdc0a54158fc"],["/tags/git/index.html","0bd9f5f425799d6fd159e583ccc4f590"],["/tags/hexo/index.html","2be1ec4b1e9cdd5631ba1c968083d6f5"],["/tags/index.html","a2e07e4ac49830fd4dc030fd809bd6b4"],["/tags/jQuery/index.html","595df6a8dba1bc724b8728a118cae597"],["/tags/java/index.html","6db095c042606f517701c0f5837f4e80"],["/tags/markdown/index.html","821d3779380274246715e0565fd89cd1"],["/tags/mysql-数据类型/index.html","0d6e9094840d1fd2c260ec6337ca6574"],["/tags/mysql/index.html","6abdb298773665c223c2042bcf3421c1"],["/tags/noSQL/index.html","690b66534715c23263da6cf1df1af069"],["/tags/typora/index.html","b39bf662c5ddaff07399d9d0fea51d9a"],["/tags/vue/index.html","7b29ceacf1d77a1c0d865cb44f3d88c7"],["/tags/享元模式/index.html","3358753bf6baeadd644c91d701706760"],["/tags/代理模式/index.html","2c6e8d8b54c08643dbb19cbbb518f83c"],["/tags/分布式/index.html","685956d1bcc2877ed45ca66e72d8f1a2"],["/tags/分布式系统/index.html","017c20b565078c4a0ec341793b1f6af7"],["/tags/前端/index.html","43959178f0bcfe878a06a7eb45834b55"],["/tags/前端/page/2/index.html","ec60f66ae37534ffc9b4d6b39a8407e0"],["/tags/博客/index.html","06b61d91dd2aac5f9dc0ead10e1a2215"],["/tags/后端/index.html","47ceb8711fdb7d3e82c9f7e4aba516ff"],["/tags/外观模式/index.html","6e3cafa69052e9a7d646c46f3ea9437b"],["/tags/容器技术/index.html","666927e724a5931f24ceafe7ae406e04"],["/tags/工厂方法/index.html","38117863df9e04104249f1aa7dea5687"],["/tags/微服务/index.html","5cb1e8468d7c5daae6a9a995e850ec85"],["/tags/抽象工厂/index.html","8df32db5fbc90eceaa66b5052c754cc6"],["/tags/持续集成持续部署/index.html","7446760418d6bb785664a90f1a2d0c22"],["/tags/排序/index.html","5e9685ac0a465a4efc7fe567c758f9b5"],["/tags/搜索引擎/index.html","78d630341735fd76d1e7fcc757f9a4a0"],["/tags/数据库/index.html","a2d584c1bc6e231408108c2520e5d6fc"],["/tags/日志/index.html","3508d9b34140f083c65c08e48cea9ef6"],["/tags/服务器/index.html","d0d3f1cfd287aaa462cf72e17b4bb5f4"],["/tags/权限认证/index.html","82e4453369ea45ba3776f2370d8284f6"],["/tags/查找/index.html","7b1fa5c9d06bf1d9f950673900fd68ec"],["/tags/桥接模式/index.html","073b172069daf0ee49c31324fa25a7de"],["/tags/模板方法模式/index.html","42f65f668b3d8b709afc3dabbd2b2fd8"],["/tags/消息队列/index.html","fadb774319ce50311c8794199b547f1e"],["/tags/版本控制/index.html","c699571a5b414aea022de68a446d1cdd"],["/tags/策略模式/index.html","88682a2cb4a59038f26ec98290a0ff99"],["/tags/简单工厂/index.html","29ae919e84406db5a0aa28a35ece4ce4"],["/tags/算法/index.html","36cd7d7c2f522eee2de166031bb953e5"],["/tags/算法/page/2/index.html","9c13a02aa2be187fb4d8067b0a34763e"],["/tags/组件化/index.html","560c6e8be9223393a50bbb42cdbc8251"],["/tags/缓存/index.html","06dc1e38f96a5a21d75b224d57539620"],["/tags/观察者模式/index.html","5bf259e30705a7ecf37e01881e1574fc"],["/tags/设计模式/index.html","781c57ee5fb8355ec5564c3d7b497e86"],["/tags/设计模式/page/2/index.html","2eeeed33d9a10f0bb4b740de270a48fd"],["/tags/责任链模式/index.html","5d3a4b0d366aaec0ebd4820863c0aefc"],["/tags/适配器模式/index.html","d8dc1613d5876a049b5d3a9befc8428e"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
