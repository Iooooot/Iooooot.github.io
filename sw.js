/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","103228da8eb9363b8769bce18d366b4e"],["/2021/02/22/博客的搭建/index.html","bebbd2ca4af06a2a7ebe7da32dc1d135"],["/2021/02/23/如何使用markdown/index.html","e84240c425b313e05cd63d1e25f111f9"],["/2021/02/24/mysql命令大全/index.html","24bde5fdefe97eee194aa9a42e70cf02"],["/2021/02/24/mysql数据类型/index.html","398f6b66d7aa04131d861ecb41240ed4"],["/2021/02/25/Git的介绍与简单使用/index.html","132a1c86dd06b9fa0b6b78e0e3d1ba24"],["/2021/02/27/简单工厂模式/index.html","3eb29c604023a8c3eb07be711c7b57a3"],["/2021/03/01/工厂方法模式/index.html","3ac1c9a8f059351fc5245f31ff433095"],["/2021/03/02/抽象工厂模式/index.html","40b259dd96c429b0cb21faf31c8c652a"],["/2021/03/03/单例模式/index.html","2bd33c1f75967eb35c98eafcb7d186c9"],["/2021/03/04/观察者模式/index.html","966662b320bc027bef93a28167e4583b"],["/2021/03/05/适配器模式/index.html","5891ad1d5fff16ee15e6124b87d33761"],["/2021/03/06/模板方法模式/index.html","4a3f6a54aaa3e8ed534a056a6395ccfb"],["/2021/03/07/责任链模式/index.html","99e550317af23831ed5ad018f1c40eb7"],["/2021/03/09/代理模式/index.html","dd5c3950f905679c5e414dded747a7a5"],["/2021/03/11/享元模式/index.html","f62e41325a6271975d222fbd67dd0edb"],["/2021/03/12/外观模式/index.html","d52f1564f2b62bf5e9dfc5442aa119d0"],["/2021/03/13/策略模式/index.html","abc0f3efb3b410effcdc5a49e14dff87"],["/2021/03/14/桥接/index.html","56d91c152e18a76494b5cbdf0fa2e309"],["/2021/03/15/LeetCode-多数元素/index.html","7e6ab0e6437546be001935f538e0e030"],["/2021/03/16/LeetCode之汉明距离/index.html","0830ece27d209ad44f13def51ae15d8e"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","b1a1fe4c413648884f813f3ad2927129"],["/2021/03/18/LeetCode之两数之和/index.html","fb8eb09fc726372fa03740768fd9dd02"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","977510090926098901119dcd2237f8eb"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","0299a52c2b4aba088e3112f5bdc5ddcd"],["/2021/03/21/LeetCode之有效的括号/index.html","9aa7b27c37480280e6ad2bc1e566178c"],["/2021/03/22/LeetCode之移动零/index.html","93f0fc1b9d4f280043ef09d5b1fae207"],["/2021/03/23/LeetCode之爬楼梯/index.html","b5185b14baaac720acf53f5a610ee70e"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","47e9d2417d3c13a55fde1eceeffdbce1"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","6eaacc8d5b0f6375e38a166f77c90e12"],["/2021/03/26/LeetCode之最大子序和/index.html","58c32677808c0157b5f664ecc70b5315"],["/2021/03/27/LeetCode之子集/index.html","bbfcf9b6d28d0ab30dd71c7170daaba8"],["/2021/03/28/LeetCode之合并二叉树/index.html","8c2b8aa0ae2e20507ab5917222f6f653"],["/2021/03/29/LeetCode之翻转二叉树/index.html","9d057d37921bf8b60c82a4ad18fb6f76"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","a438bc7e25cadbcd9f9aa4a6c5ce5cdd"],["/2021/03/31/LeetCode之翻转链表/index.html","860d146cbaabbc578b394791bac4f079"],["/2021/04/01/LeetCode之相交链表/index.html","055fdfa3b7dc9136f46240ef5ff0e784"],["/2021/04/02/LeetCode之最小栈/index.html","007c296ff22cf70d3af8a713c23f4089"],["/2021/04/03/LeetCode之对称二叉树/index.html","5310d04c010555a890aa747f8450e79a"],["/2021/04/04/LeetCode之环形链表/index.html","307cb2bdcea90e62c072951b1150d906"],["/2021/04/05/LeetCode之二叉树的直径/index.html","3ef9df7f6010c44ee3f6342cd26c2907"],["/2021/04/06/LeetCode之回文链表/index.html","a689e6538770928477953c55ba4723a7"],["/2021/04/07/LeetCode之比特位计数/index.html","9065305588176f6c64bd5a5335b4bad6"],["/2021/04/08/LeetCode之全排列/index.html","265b6973f7d597ed4a72f8e92f71a470"],["/2021/04/09/LeetCode之括号的生成/index.html","a24227223fdda073e318f28cdc741afe"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","5d10fa610a24b002ff5099fd5ce1a5f1"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","2d34a0093c4de549a1bb219c903f83de"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","c9f7202542d55486eff0b319b6ce0d50"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","383688b56a7789b00b222078248f218e"],["/2021/04/14/Mybatis/index.html","78ea9a48a98759b69276910b677bfc00"],["/2021/04/15/Spring-1/index.html","df987d1b75eacb79c9441df517b48755"],["/2021/04/25/Spring-2/index.html","9b20b6a8f8eda67b5985d2789afd6007"],["/2021/04/27/SpringMVC-1/index.html","4ceac58c7ef8e33d4fa7e92db968c1b8"],["/2021/04/29/SpringMVC-2/index.html","3ac78139a7f14e62ac83af868fd561f8"],["/2021/05/03/冒泡排序/index.html","e2d1dd74260188b7fd627c96439b0c30"],["/2021/05/08/选择排序/index.html","7cd22b26c12073097f8201ee137fac5c"],["/2021/05/12/插入排序/index.html","91146629b5b51280688c712804dfdebf"],["/2021/05/15/快速排序/index.html","bc1f74b4cc434f5c17dc89891bb9d49e"],["/2021/05/19/基数排序/index.html","6f423b3cc9742540f97b147e3f14658b"],["/2021/05/20/哈希排序/index.html","d66a8cebbf47f9d586466e47baf26f22"],["/2021/05/21/归并排序/index.html","b78a86f0e0cca70a382b4356b17310f1"],["/2021/05/22/二分查找/index.html","95a76626a0712800bc2a7e0ea3be0e9e"],["/2021/05/26/差值查找/index.html","738a8b030eb6e9a3f3e693613f6cb5e2"],["/2022/01/12/高精度大整数计算/index.html","35eae98a89b16739459b109efcefec2f"],["/2022/01/22/前缀和/index.html","480a1c17c1902e1dcbcd801feb6c7b45"],["/2022/01/23/差分/index.html","588bbd33601970bec3248cddef32deaa"],["/2022/04/04/MyBatisPlus/index.html","0144714a5a1c5fe1b38d12aa76c9a174"],["/2022/08/17/jQuery/index.html","1756dc86309f19192860dcfea3a1ffa2"],["/2022/08/19/JavaScript/index.html","9380d7e784e90c522959b85a56e4b12e"],["/2022/08/22/Ajax/index.html","dd5b9b88dc02d07c1b8a8f3d8341fbfe"],["/2022/08/23/Promise/index.html","a4606d2b4b52dfe5fcf47ad60c2df522"],["/2022/08/24/Axios/index.html","f3e43594b2a1695f5c401056af24427d"],["/2022/08/25/H5本地存储/index.html","794c2dc9a2983ca499f1efb1731e3618"],["/2022/08/26/mock/index.html","0673d88aa3f1f8ecaf3bfa1141795fcc"],["/2022/08/31/VueJs/index.html","957b483e1aa84dc553950d473718639f"],["/2022/09/01/vue组件化/index.html","1b8c6f890e60b21579a2d0ff352489c0"],["/2022/09/04/VueCLI/index.html","71543bc9b1f6bf9c2aa87df04280aa1a"],["/2022/09/07/vue实现动画/index.html","73b0530459b3d93a8f25f6e6794b3829"],["/2022/09/09/Vue响应式方法/index.html","71def7692813599171afc7a242800170"],["/2022/09/10/Vue异步请求/index.html","591318d9019f07ecd772642f98c7db46"],["/2022/09/11/vue-Router/index.html","8ded1a7b6d3f86c575383e0d0b533364"],["/2022/09/13/Vuex/index.html","e0dec99a26bd6202f199f7bc338a7c84"],["/2022/09/15/SpringBoot/index.html","d030aa78cb7cc8fe29371641dd447551"],["/2022/09/16/SpringBoot配置FastJson/index.html","ddf1d762535bf801c05b4fa2a7d141f2"],["/2022/09/19/SpringBoot参数校验/index.html","371a1ff740dceea856d4c9c5704e988c"],["/2022/09/20/SpringBoot的异常处理/index.html","efa62e0b7dce39130b8c8967bac8cb6f"],["/2022/09/21/SpringBoot统一响应处理/index.html","d3f6996a05f282e907927ef8ad5dacec"],["/2022/09/28/Linux/index.html","1a3c531f98529aeca905af0eb80401e7"],["/2022/10/02/redis基础/index.html","b45e59db24cdd67c0808f6581e378f91"],["/2022/10/03/Redis缓存/index.html","8d8734e726611e9f87baa23996ff4e8e"],["/2022/10/04/redis缓存穿透/index.html","ffa529537233fb7ce8d971de7ac2d261"],["/2022/10/13/Redis缓存击穿/index.html","5e629503df4d2c3d0ae030d0146d0205"],["/2022/10/14/Redis缓存雪崩/index.html","d095347bb71a9e88d459ef94cb897af3"],["/2022/10/17/Redis集群/index.html","a3875dc14223e87ac2d12136600db110"],["/2022/10/18/Redis哨兵模式/index.html","a878b64a6915697afbbb8979ddb0915b"],["/2022/10/19/Redis主从复制/index.html","b6973c5e97c3e181e06c1687bd36f8aa"],["/2022/11/03/Spring-Security/index.html","098089f90a3bc5b9d4daff601a85587a"],["/2022/11/08/SpringBoot日志/index.html","aa7408b119cc859668ee11b1794be82d"],["/2022/11/11/Swagger2/index.html","398c6599c6da7fbd3b8121af9ff43750"],["/2022/11/21/Nginx-一/index.html","a9b2841f59d7b0f4ea3177d0cd39996d"],["/2022/11/23/Nginx-二-代理服务/index.html","a898ee56bc95769adbd3e748f8cf8222"],["/2022/11/24/nginx-三-负载均衡/index.html","8e3f9519d65e459a4df3bf94dadbacb7"],["/2022/11/26/nginx-四-缓存集成/index.html","d6b957cde85331c5927906933f1bfd5a"],["/2022/11/28/nginx-五-动静分离/index.html","94bd4fb23afc8342cb07a3f25da7ebfb"],["/2022/11/29/nginx-六-制作下载站点/index.html","c3cbf3f1e4e607b5cc2dd8aceaab2107"],["/2022/12/06/docker基础/index.html","ea3b5eb2451c29bbe7be442212ac0275"],["/2022/12/09/Docker高级/index.html","ee354e1bfbd07f115418906a3359c736"],["/2023/01/04/MongoDB/index.html","8bd7547cc89aa23c1365c472a368c533"],["/2023/02/05/消息队列/index.html","32a1e52607a6cc4a2052f537af5cd195"],["/2023/02/12/RabbitMQ集群/index.html","8bf83e44c384568b01a01826601f7635"],["/2023/03/10/CICD/index.html","405cc172c67277227431d60493563197"],["/2023/03/11/ElasticSearch/index.html","f432f2c7f4f00bf60ac7ceb284e405d5"],["/2023/03/12/ELK日志平台搭建/index.html","91625d7365c211cd39082afce0955293"],["/2023/03/13/NIO/index.html","512eb3ae15b55b71a70d1853b8a8f5e2"],["/2023/03/14/Netty/index.html","853dc2c93f142cff801df7aeada22945"],["/2023/03/15/SpringCloud/index.html","642504034916357ea36dc5c1a53f9f90"],["/2023/03/17/分布式系统认证/index.html","cf2087f65d1b71643332222ce3927e30"],["/2023/03/19/JVM概述/index.html","cc2ed004a39b4b83c3fbea15b5d20163"],["/2023/03/23/类的加载过程/index.html","387669984f205797ded9ae653e388e9f"],["/2023/03/28/对象的实例化/index.html","e1d18c8720006240b78a3aa6a8840d5c"],["/404.html","e62585fc24127fda88308345df50b8bb"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","232a98fd22a0d2628eec177356c733f8"],["/archives/2021/02/index.html","357fb8580adff94666e030e8ad4f42e2"],["/archives/2021/03/index.html","dd513660f13f6d1134cf1afca73dece5"],["/archives/2021/03/page/2/index.html","65a1cf04e5a660d0985de91c0468e91e"],["/archives/2021/03/page/3/index.html","a2d6fbe1e0ed13c213fa290274a5fd90"],["/archives/2021/04/index.html","6c7e0deae5f9e65c8d2b6c28836b0ad9"],["/archives/2021/04/page/2/index.html","86ecb8d5401804596bb97c34d4c99ebe"],["/archives/2021/05/index.html","bd60d8e57524b76ea32e5af1a9f307fa"],["/archives/2021/index.html","be9f03ca74155a00455a2295a332a2c0"],["/archives/2021/page/2/index.html","5633173bdc55b16c830f2b155b797add"],["/archives/2021/page/3/index.html","19fc3a760b6ac0db1f49088c32dfd6c1"],["/archives/2021/page/4/index.html","37d1dcec9d9f1bc3df6229363df94e41"],["/archives/2021/page/5/index.html","db0c47fdb88a7956ffef5069dc154da7"],["/archives/2021/page/6/index.html","726a09f3d6cdd0ab7c123864b437511b"],["/archives/2021/page/7/index.html","202812957ca46d73b50b0cb966722566"],["/archives/2022/01/index.html","bf451cacdfff9dae1df426e7c22b2ed8"],["/archives/2022/04/index.html","5e53bda37c27299471ce733fc74d8dba"],["/archives/2022/08/index.html","a0e5d75190e93f7ec6e3925577459a46"],["/archives/2022/09/index.html","af3ca0ff84ad3a64ca82802e45885c1d"],["/archives/2022/09/page/2/index.html","c89ac0e48314f10e7ad063077b086be1"],["/archives/2022/10/index.html","0d11f096c3162e3041f2740effa429e1"],["/archives/2022/11/index.html","31d04e0c2061aa618b2f04e332de1eae"],["/archives/2022/12/index.html","11b0565ac2514e9f35f53a0a0fbb4304"],["/archives/2022/index.html","61aa688f3f8a230b999bc8efebd8ca36"],["/archives/2022/page/2/index.html","fd5932287321bc1f9f62f72f614582a1"],["/archives/2022/page/3/index.html","00b76b9bd5f8f8434853281e80524a74"],["/archives/2022/page/4/index.html","00ea15e22c01acb80e594f69e5ca5969"],["/archives/2022/page/5/index.html","545a09924279ce6bf9a94b07943170c4"],["/archives/2023/01/index.html","4457617066cc4f93b1a2ad0d3bdc5bab"],["/archives/2023/02/index.html","45d8e98851bd0c5c108f9bb2ce9d65b9"],["/archives/2023/03/index.html","5bb37db21c88d01e4c7e820ae8dc583e"],["/archives/2023/index.html","788482b49dd3c4d1895e29589dae5e60"],["/archives/2023/page/2/index.html","3bda5b5d6a4806bd714bd7d34ed6b4cd"],["/archives/index.html","fda936993cdb573d336aa4c4f5c0ceb0"],["/archives/page/10/index.html","cd818df26afe20b25dd241e2fe6c806a"],["/archives/page/11/index.html","7519f53ec01f405a53aa7a1979b1a2a5"],["/archives/page/12/index.html","a5954f82a60e5de175ce9d4a1c5a5ce0"],["/archives/page/2/index.html","08e1c155c2e53bbf0922a38f09e5937f"],["/archives/page/3/index.html","368b0c048755fb871fb810cb1121996a"],["/archives/page/4/index.html","e30cf08f02d9e8cc98c610b6d533be96"],["/archives/page/5/index.html","5a9cdc46dcbf117c6e6c72369b1d2b4d"],["/archives/page/6/index.html","514a92adcd8329c54730d6951d60df41"],["/archives/page/7/index.html","7d9548311161dd9c501ac1d263615516"],["/archives/page/8/index.html","6d0342eb961a7c8ae11f828a6e4eb675"],["/archives/page/9/index.html","74a032d7164c5c08a9ae2ca6505fe0e6"],["/categories/CICD/index.html","55ef74ced9eca63a535b5a25dee301db"],["/categories/Docker/index.html","bc876ae7182421d9fb37e37bac04d38f"],["/categories/ELK/index.html","f89e090176a2422cc7a99a27e20b96c5"],["/categories/ElasticSearch/index.html","343cd35558fcb83dd52b55e55e7a370e"],["/categories/JVM/index.html","6d4b530b892ecb58580547af1a9edc6a"],["/categories/LeetCode/index.html","bddf19c08c1fd632bf1c8786d45c7ccd"],["/categories/LeetCode/page/2/index.html","bf105e3ffcbddeb819526a12fb6e0a70"],["/categories/LeetCode/page/3/index.html","6cdba151599fcc88b4fb062953039a67"],["/categories/Linux/index.html","976521b9e2ac2144e28f619a3ddf7d30"],["/categories/NIO/index.html","019dc2c57970471d9a96034119bc5af4"],["/categories/Netty/index.html","2eb1ea5837f478a3f2a1ae8eb0335b27"],["/categories/Nginx/index.html","111395ac553c55568f9fcd52d0fff43c"],["/categories/Redis/index.html","1c2335146747077c4d4622181e5b6b1d"],["/categories/SSM/index.html","41476311a5796b62fa4f9e6a9fd8eca3"],["/categories/Spring-Security/index.html","416081531c444fb5d292f8ff2a279b7e"],["/categories/SpringCloud/index.html","aca39b96fcad92826dc71196ec7f193c"],["/categories/Spring框架/index.html","d77cce8826f86277bb93d6b886ba00a1"],["/categories/Spring框架/日志/index.html","c37af507b45fab99648c886786284769"],["/categories/Swagger/index.html","ae36c101e3e946594abfcda03eae6a6f"],["/categories/Vue/index.html","672a7fbd5e61fcca8be2061e11d47f6b"],["/categories/index.html","3e9fc2fcc54f870ff0b01b912d78e018"],["/categories/分布式权限认证/index.html","0de8e4831f97e283a71254bacebffb98"],["/categories/前端/index.html","54bd889b88564acf2f5831b7e5f8e182"],["/categories/博客/index.html","ecb81a826e8b07b30122a86831800ff2"],["/categories/学习路线/index.html","85b84dbaea0cf58ab925ee2bb404b50d"],["/categories/工具/index.html","841eab8c781b5b04b54672fd63efc44b"],["/categories/数据库/index.html","5094e35339ef7d09c17efaf16cf4f582"],["/categories/消息队列/index.html","bc153ed476974feb3dbd01d0a38ad5b6"],["/categories/笔记/index.html","d00dcc6ffa32926f0f1c282a549a4f79"],["/categories/算法/index.html","a35cb764603029c9f7ef0442c5c9bd2e"],["/categories/算法/page/2/index.html","e23f0819aee9fc24c2f0a84c2cbaa996"],["/categories/设计模式/index.html","d0f671b3c408a34b01894743448f1bfe"],["/categories/设计模式/page/2/index.html","a59fa79d8cfa984d18402a5446e58696"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","112d061ce65102ad9b025b2a5a85068d"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","26707b9e675737ef0f592ca97ceaa0b2"],["/messageboard/index.html","e8f4192f25e223188aaf567d7ae6de90"],["/page/10/index.html","0c9d04eef8383573f8515d9a08b4cf2e"],["/page/11/index.html","9ba39a6a73b50cdb0e632b152f43bbce"],["/page/12/index.html","c6be891851858e6bcfd4679c2cc940d1"],["/page/2/index.html","d17ed3658fbc1f4bf23c95054972cd85"],["/page/3/index.html","529558c7031443e4d3be7541f6e815f0"],["/page/4/index.html","814932c91332293bb89937bac5e1f849"],["/page/5/index.html","64174dbc445fe881131aa06d0480570b"],["/page/6/index.html","751a596763c08a7dbfc27d60676e7fdd"],["/page/7/index.html","04d2575656ad5390b87dc034a55c0fa0"],["/page/8/index.html","7597c6a5171c1bbb5a98d0e6d7165fbf"],["/page/9/index.html","f909cbdc9b6b7b169458864f6091f63a"],["/sw-register.js","e0481175554c61a5ad770fd84b60712f"],["/tags/Ajax/index.html","8dedf83fbefc7c4d32c34b13ab1f5764"],["/tags/Axios/index.html","55c0c966983c07e56ccdf24d8bb7330d"],["/tags/CICD/index.html","848f9134405a7b4b62173beefd48f7cc"],["/tags/Docker/index.html","b5c3e0548a31f16e51b177bba126563d"],["/tags/ELK/index.html","da34db7ca7a63049daf8dea02c27a58c"],["/tags/ElasticSearch/index.html","8dfbf3963e545668b93a6056c8242ce5"],["/tags/H5/index.html","4451f6d1dfc01820956d3ecfb1c68b85"],["/tags/JVM/index.html","eb69799cf53e6e46d1416237c5ac3075"],["/tags/JavaScript/index.html","0d86d4583e7b36026c5ca7d44b486900"],["/tags/Kibana/index.html","6a3eec1ddf033002a12b079eb0bacc25"],["/tags/LeetCode/index.html","f70f4aa156d6da3bf2a1546adc1ea50a"],["/tags/LeetCode/page/2/index.html","a9fc14ba45e6fee77adc112266e04298"],["/tags/LeetCode/page/3/index.html","8eb0297df86da312aa2e8813b9359836"],["/tags/Linux/index.html","b1ae565bb8acd34303b3a4aef4d492c1"],["/tags/Logstash/index.html","42f58f14510bdbfa583ef02979de3f78"],["/tags/Mock/index.html","f2241022bd5163bd6a4bcffe91f324b1"],["/tags/MongoDB/index.html","751b799ec5379801e5172b760de7185d"],["/tags/Mybatis/index.html","df13f94cc76b87a2f6bad26dee734235"],["/tags/MybatisPlus/index.html","a7c74209a03e3ecd4e469cdd0b43b9a6"],["/tags/NIO/index.html","7b0439b9726777ba0b0b8c19652e9ba7"],["/tags/Netty/index.html","e142e20c63aed861adde2f0ef64be479"],["/tags/Nginx/index.html","26cf71221d4d76db55ea11b84f33323d"],["/tags/Promise/index.html","67fbf1cc190df31fdc2c2a86c74457b6"],["/tags/RabbitMQ/index.html","fca5cd8cad0d39910fbd4fa4029820f4"],["/tags/Redis/index.html","17013f7a216591190d420100494f3fd6"],["/tags/SSM/index.html","391ca8b7e618a24110a2243922062d9d"],["/tags/Spring-Security/index.html","47ae6386f8aa95513e89999e546dd394"],["/tags/Spring/index.html","0f6a0fee78ab3a122a07614bef3eef0d"],["/tags/SpringBoot/index.html","7c44501d4daa75a32c424969b47b93b8"],["/tags/SpringCloud/index.html","5a9f9b003ddb39a9310ba3f515db35ac"],["/tags/SpringMVC/index.html","40e07b5ab1ed9b13247ab927b37cce72"],["/tags/Swagger/index.html","f3312380dcaa8879a7f88f5ac12d3170"],["/tags/git/index.html","91c9d9322ddab8865b8da9419e50a1c0"],["/tags/hexo/index.html","8b170154c768f07b1ff8df43627f3013"],["/tags/index.html","bcea14f5fb0ce17e9529aa4b9b83d939"],["/tags/jQuery/index.html","2ca147949dd62a5210d4e32bd78680c4"],["/tags/java/index.html","48bea760229de3639f878eb3b0a8014a"],["/tags/markdown/index.html","4aa99d6ae5e00d4603bdd189f49f4a88"],["/tags/mysql-数据类型/index.html","65645fe3bac6c292d268c418785ad890"],["/tags/mysql/index.html","b15838e908dd4dde03879339f137fe65"],["/tags/noSQL/index.html","3d5524eb019044658325966ef6d11156"],["/tags/typora/index.html","b686e91cf6abc95b2519c459980d73e4"],["/tags/vue/index.html","85b861bd0e46f68524a04fc8665952b0"],["/tags/享元模式/index.html","5c2b03e011e8eb691763cba8dad72049"],["/tags/代理模式/index.html","1e4cbb7661add28e8b91739ec8dd8f50"],["/tags/分布式/index.html","35c18cc36822afe5dc0fb03be18ab454"],["/tags/分布式系统/index.html","f40b5e16d0ee6c2899428cdf415289c5"],["/tags/前端/index.html","ce7953936a1d60b8c58d1d3bd6ffef28"],["/tags/前端/page/2/index.html","ae79ee14556314346c962ec98b60caa9"],["/tags/博客/index.html","2fe324d417475d6b711418d650c03fcf"],["/tags/后端/index.html","cd30a260adef9505146230793f79edcb"],["/tags/外观模式/index.html","6248118173ba49f102b203ea79ab7b7e"],["/tags/容器技术/index.html","88e61fcd651c7029702a3bd530bcfb0f"],["/tags/工厂方法/index.html","83d80ede819876a6bb816d866419cf73"],["/tags/微服务/index.html","3b3c380637c15c41fd64e0d94679fc25"],["/tags/抽象工厂/index.html","0b3a04ecb1a78461b02c234dfa28ea7b"],["/tags/持续集成持续部署/index.html","827c81481a28c9fe1402ed3e763b3f2b"],["/tags/排序/index.html","932ae57c8979274a93aa79c1da9d1c0e"],["/tags/搜索引擎/index.html","543dc9dab17f3abcb10f561bbbc0747d"],["/tags/数据库/index.html","4198e2b78cd08a3e7b93ec76d07598e2"],["/tags/日志/index.html","035f1cd3aef2786dfc60c091899616f9"],["/tags/服务器/index.html","57610d5e4a54bfc42ec2324d856f82e8"],["/tags/权限认证/index.html","9280eef53b9e777d922d8a5aed6d6e5b"],["/tags/查找/index.html","c620b39418af303132ad89ba29db9819"],["/tags/桥接模式/index.html","8876be63542a1cdadbf7cc193dad44de"],["/tags/模板方法模式/index.html","765f8f7a3ef0dd5fc1f5e12fc9a7f8c7"],["/tags/消息队列/index.html","1bd561e3c3d073373b46fc9548faf6d7"],["/tags/版本控制/index.html","69be5fb4b019661ea6de6f3b9f7828a4"],["/tags/策略模式/index.html","f1e6b98701f9b5734ab221f6301ab272"],["/tags/简单工厂/index.html","c60cbf5f007e39e8eed29ade689c9163"],["/tags/算法/index.html","6fbd658c74dc885829bef37b3cf2e993"],["/tags/算法/page/2/index.html","e55efd1f8cd6fb522f6a439333f09d95"],["/tags/组件化/index.html","0cd618d00cf6947e9c4cb6eff31c86dd"],["/tags/缓存/index.html","9d11eba454b884a93109ad15a1d525ea"],["/tags/观察者模式/index.html","98da98f423cf0d662d9c94d7f46bd390"],["/tags/设计模式/index.html","d69b497918803d5725b7fbf6159e54ae"],["/tags/设计模式/page/2/index.html","0a54b6b3d47911b3c1cbfdee0e36ff05"],["/tags/责任链模式/index.html","54ab0ee181257734134fb80cdd674e3e"],["/tags/适配器模式/index.html","86d0154e345a00ff5309c35ed69dab38"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
