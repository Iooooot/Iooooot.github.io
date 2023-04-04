/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","eeda6996863d002d33b206dff28c8936"],["/2021/02/22/博客的搭建/index.html","bf066dca5fdf184a2fcdcb8cc3124ecc"],["/2021/02/23/如何使用markdown/index.html","d6a15808b718f1bf4d5ae37f295c4f88"],["/2021/02/24/mysql命令大全/index.html","951eeebf5a30ba2b9f10c82296bb8913"],["/2021/02/24/mysql数据类型/index.html","691a242cc28a6cee143c138e5c30e76c"],["/2021/02/25/Git的介绍与简单使用/index.html","ba3e2dba970d1e680af987e0c55be57e"],["/2021/02/27/简单工厂模式/index.html","d81ba5fc3e804c3a024f87fff6e9235f"],["/2021/03/01/工厂方法模式/index.html","a198f0e65038177231c66447bbc6adac"],["/2021/03/02/抽象工厂模式/index.html","828442448a5e97f2e609d2657b8d3381"],["/2021/03/03/单例模式/index.html","1b27f5a478dc0c87909763315099913e"],["/2021/03/04/观察者模式/index.html","6cf2f7c1b5922afb4d6e7bd87ac127de"],["/2021/03/05/适配器模式/index.html","2ae6c061ce06fe442d8d366b1e2a2c38"],["/2021/03/06/模板方法模式/index.html","4d4bcf07e6d9c87817339ed125d85cb8"],["/2021/03/07/责任链模式/index.html","d9f578c59d9f6b657bdd5848c19dfaf5"],["/2021/03/09/代理模式/index.html","d2a8446d0a4248d6db70b095b5b8b1c3"],["/2021/03/11/享元模式/index.html","dbfed102f59d698cab47ae4c1047054c"],["/2021/03/12/外观模式/index.html","cccadf7f9a8581e7710192201b3bb418"],["/2021/03/13/策略模式/index.html","a32fa344368c7a853028db3d7f1a5588"],["/2021/03/14/桥接/index.html","deb863f9a0fcc240311f4fae841ee2aa"],["/2021/03/15/LeetCode-多数元素/index.html","268ed5fc5ecab3cc8d81d8da67551eb6"],["/2021/03/16/LeetCode之汉明距离/index.html","4a59bff95d44c6fdd537e54da80da97f"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","106837651c0983c31b5afa081cb720f3"],["/2021/03/18/LeetCode之两数之和/index.html","69591df8ade7f18a2247a2ec34d055df"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","8f10e4c0ab19a0ac3dfea36023d2e0ad"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","b4c4fb01643bfb5fcb65345ee92cdc53"],["/2021/03/21/LeetCode之有效的括号/index.html","04d08995cbb71347651703152bb900a4"],["/2021/03/22/LeetCode之移动零/index.html","4d669b2cf0a743c7a2261c42ce80daf2"],["/2021/03/23/LeetCode之爬楼梯/index.html","9e2d5744e535e85c68105c5dcd3455da"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","b4e33324f25411abd45cdac6d4704b89"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","c9dee0616d4cdb842c54c67862ed1ade"],["/2021/03/26/LeetCode之最大子序和/index.html","0b614c4f9a44b8de66361c8fb4ecbe1f"],["/2021/03/27/LeetCode之子集/index.html","f1105f0b5a8841e139d5a1897ce2685d"],["/2021/03/28/LeetCode之合并二叉树/index.html","49483e87204eedd48201e49ba15a4e4b"],["/2021/03/29/LeetCode之翻转二叉树/index.html","b3cd5415bd026567cc9d32f81607bb9e"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","0637facd2e9bb8d3d1ffd3dd6763a433"],["/2021/03/31/LeetCode之翻转链表/index.html","943eb8a5f59c7e71b9041137bea9da96"],["/2021/04/01/LeetCode之相交链表/index.html","f193624a36f970db2df5d0b206da8ac3"],["/2021/04/02/LeetCode之最小栈/index.html","60372c216b3d788440f61be8e9392c81"],["/2021/04/03/LeetCode之对称二叉树/index.html","cc01037bb41e58a36add5567a07d6bdf"],["/2021/04/04/LeetCode之环形链表/index.html","7e051215999b7c52041c515158bd1fbf"],["/2021/04/05/LeetCode之二叉树的直径/index.html","aa5e5bd9745873ba123ef6a228175aeb"],["/2021/04/06/LeetCode之回文链表/index.html","aaa06c0ac64c5c9d3ca50fa17b1112f0"],["/2021/04/07/LeetCode之比特位计数/index.html","23269c8470ad0fd6b926d16716c29612"],["/2021/04/08/LeetCode之全排列/index.html","d4e135245613cdb27e140ecc830ff71d"],["/2021/04/09/LeetCode之括号的生成/index.html","e3888919c4c5b0269ab0349f078afc16"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","52ca81e8aad5b0de6e866eeeaea4e7e2"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","b3940837d3a8ffa7c839770b9ca1f8e5"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","42f07d3dbfbb1498f799f63f238d87db"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","a636068df4cf474ade7910571c9d9c26"],["/2021/04/14/Mybatis/index.html","54c30f5893f12ab55cd4190ce1b3f0a2"],["/2021/04/15/Spring-1/index.html","0b034fc16541af50e8f80b8f17587cb5"],["/2021/04/25/Spring-2/index.html","85c8e3529b3d553d74d9eceeb1ce3de1"],["/2021/04/27/SpringMVC-1/index.html","dcc3107f0d141082aa225a1607a65b6b"],["/2021/04/29/SpringMVC-2/index.html","96e9e1e9a18c1e5df646c3e2184bd14b"],["/2021/05/03/冒泡排序/index.html","74e42e1748bd0cbfde1da30be8bf7537"],["/2021/05/08/选择排序/index.html","7e249e6cb685c3d7416caa0a14dacb13"],["/2021/05/12/插入排序/index.html","9fbaf1995136fc0118767404287b1432"],["/2021/05/15/快速排序/index.html","b0eb2b88b9f3b092ab5666f51726fd8f"],["/2021/05/19/基数排序/index.html","6d1fa5df68f448fd52d94f6040616c33"],["/2021/05/20/哈希排序/index.html","482f992aaec50a9a5ddff9ae195bae84"],["/2021/05/21/归并排序/index.html","f7fcc7f13cd0fa3a99ffb15453131be1"],["/2021/05/22/二分查找/index.html","8d34e2b03b8a47139c5ac8aaa0047a1f"],["/2021/05/26/差值查找/index.html","7f475c2924c3ca032229e0fd9aed14c1"],["/2022/01/12/高精度大整数计算/index.html","37f2c558c40376bfdd524140d33614f2"],["/2022/01/22/前缀和/index.html","0367f1fc2a6b736ce2c1a8669920e86f"],["/2022/01/23/差分/index.html","ad336da2c945e22c9c1c132c8800a625"],["/2022/04/04/MyBatisPlus/index.html","d5174bfbb3d0045347f5763851fa098a"],["/2022/08/17/jQuery/index.html","c781403422686377d541906c6699766c"],["/2022/08/19/JavaScript/index.html","7a142fb35d688aa5cc44973f955b5e9c"],["/2022/08/22/Ajax/index.html","29b8f7b3990b8075548b71bde530b3a6"],["/2022/08/23/Promise/index.html","2cd2c9885d388e6b38229490916c2951"],["/2022/08/24/Axios/index.html","e8ecf9bedf066954ed63e36a8ff7ffe0"],["/2022/08/25/H5本地存储/index.html","424dba66fc40c9f86a2c6e94c4046164"],["/2022/08/26/mock/index.html","fc3424d68bc16ce430357ff49d9df64e"],["/2022/08/31/VueJs/index.html","ac7839d4d6513926e0a4c31de53134fb"],["/2022/09/01/vue组件化/index.html","0a72c4ec47689243a68a9bc89f9cb173"],["/2022/09/04/VueCLI/index.html","04973bf81e8e1d691537116cd809272c"],["/2022/09/07/vue实现动画/index.html","0d6c85655e46424c4f43c176dffcdb8c"],["/2022/09/09/Vue响应式方法/index.html","2e25decbcfa64585f91c15856724ed3c"],["/2022/09/10/Vue异步请求/index.html","e12109b1afc527e70d49880db1fde5f7"],["/2022/09/11/vue-Router/index.html","7343f088ae56528b9e7450eda89ffde0"],["/2022/09/13/Vuex/index.html","b4ddd580a941dd7acb43f929ca7aca15"],["/2022/09/15/SpringBoot/index.html","b450eabb9488d31ebfe96daadee648ed"],["/2022/09/16/SpringBoot配置FastJson/index.html","197a5a50b49b6d42da8feb737b1bf3c2"],["/2022/09/19/SpringBoot参数校验/index.html","1000c4c2fc147ad2ef90384b7dd355cf"],["/2022/09/20/SpringBoot的异常处理/index.html","541100d4e0876271acc4db119a4441cb"],["/2022/09/21/SpringBoot统一响应处理/index.html","13d9d8eb6a7861a026f82b200df36979"],["/2022/09/28/Linux/index.html","0d7e723fbb633042c9e34c0665fe9d7c"],["/2022/10/02/redis基础/index.html","3890da82317ee0d8b0a46db96c0d3eb1"],["/2022/10/03/Redis缓存/index.html","4f8c7e99ec7ea11efec8b959c69b94ad"],["/2022/10/04/redis缓存穿透/index.html","7bbd47697d10e07afaacb8243ed47f68"],["/2022/10/13/Redis缓存击穿/index.html","da860dcc4d64f2d70f790f38eec622e1"],["/2022/10/14/Redis缓存雪崩/index.html","a20f5a12dd055ab2e32ed80f39517f14"],["/2022/10/17/Redis集群/index.html","aae1865ac7fcd81e55a8b9ffe3fd875a"],["/2022/10/18/Redis哨兵模式/index.html","11dee49fc8f5f754f5a56fc4e5c9aaa6"],["/2022/10/19/Redis主从复制/index.html","7eb321bae1b0d6fd2a397f4b4fb2c49a"],["/2022/11/03/Spring-Security/index.html","797f3f7980f531b4292351de62cb675a"],["/2022/11/08/SpringBoot日志/index.html","7d5b0cb78c928e8851d5d0fb45732876"],["/2022/11/11/Swagger2/index.html","8064a7e94644c6888cd799c58b13198e"],["/2022/11/21/Nginx-一/index.html","5ac9c548af8a5e14770a8629bb26747a"],["/2022/11/23/Nginx-二-代理服务/index.html","9c04ea0b99aee172287bb42f878adc9e"],["/2022/11/24/nginx-三-负载均衡/index.html","c36557079fddfc16b1d4ab31179fb8cd"],["/2022/11/26/nginx-四-缓存集成/index.html","8fd3f02b5c64824a21df437060c2d698"],["/2022/11/28/nginx-五-动静分离/index.html","be25962676320b40c8140e8a83ffbdb0"],["/2022/11/29/nginx-六-制作下载站点/index.html","f18f0873b735ffa1cefc81e45199f885"],["/2022/12/06/docker基础/index.html","0efc5de131d312a75b4628a10ee6af2c"],["/2022/12/09/Docker高级/index.html","01e07a9006c6d3e1853666986f72dcc5"],["/2023/01/04/MongoDB/index.html","1b8ac735ca1686afb36f29063b18363c"],["/2023/02/05/消息队列/index.html","5c9102b318a603f8b603811b4823f79e"],["/2023/02/12/RabbitMQ集群/index.html","a6404701a673fcdbfd303177faa216fc"],["/2023/03/10/CICD/index.html","c663009a4a232a250a6ff67f35a55762"],["/2023/03/11/ElasticSearch/index.html","25f11c152c5e33ffe28289c6c1397057"],["/2023/03/12/ELK日志平台搭建/index.html","a1b72a035d0be08f97425c46a383a5bf"],["/2023/03/13/NIO/index.html","794824e257f2ea8b5907a7c6b8d119cb"],["/2023/03/14/Netty/index.html","11bab354d6f4e28f9347344f91928721"],["/2023/03/15/SpringCloud/index.html","3aeb244b882c4569d999681acc630b1b"],["/2023/03/17/分布式系统认证/index.html","559cc4eeacc40dc4a2a940bd9d3fbc59"],["/2023/03/19/JVM概述/index.html","62d5b0072248513af7f3a278c57b14f2"],["/2023/03/23/类的加载过程/index.html","e0734ea6f1b3b8e9bf4efed86d5de7e1"],["/2023/03/28/对象的实例化/index.html","f2135e725808222f7690d644e912365c"],["/2023/04/01/运行时数据区/index.html","281f6ee94427914fb0c69dd866ce1d7c"],["/2023/04/04/执行引擎/index.html","30c84c08163d3188b02406324374bb5f"],["/404.html","6126dbf777604c626c5621db2f090f86"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","93284517e9644a28b162cf17f090d37e"],["/archives/2021/02/index.html","4adc07ef4b1b90e6b97989a38cb83511"],["/archives/2021/03/index.html","9b08737951f3264a83fd355c0dcbfc6c"],["/archives/2021/03/page/2/index.html","0f7ff9bb78bdbd1e06bab99b8e2c47b0"],["/archives/2021/03/page/3/index.html","35c8bfd6533c42fe070c4f394d312f65"],["/archives/2021/04/index.html","39e4979ded35ad0c84e9b5775f4a0b7e"],["/archives/2021/04/page/2/index.html","8dfeeedb7d660c58b7bbd7df57ff5356"],["/archives/2021/05/index.html","dc022fdacbce821298d1743dd8ea64dd"],["/archives/2021/index.html","fe3fff38ab6dcda17b5430a3932e80f8"],["/archives/2021/page/2/index.html","9f0312bb03b2ca9b8b4cc79b7bb04dcd"],["/archives/2021/page/3/index.html","371e7e79430c72050409738016effdfa"],["/archives/2021/page/4/index.html","65313516116e5559b81331c2b290bc43"],["/archives/2021/page/5/index.html","9e6191c9762554b1b73273987eb75916"],["/archives/2021/page/6/index.html","658b6def423a04271503c46de54f2f3e"],["/archives/2021/page/7/index.html","275f50c3d4da4274daf34cbc5763933f"],["/archives/2022/01/index.html","35b52a8b0ecd5bb63accd1a54da4a729"],["/archives/2022/04/index.html","ff1c3f5eccea7219065f44ac38c8e97f"],["/archives/2022/08/index.html","d25f7a7758af95255dc7e1542da2383e"],["/archives/2022/09/index.html","8eac7c93c38b796396e4b77f977824e2"],["/archives/2022/09/page/2/index.html","2f27a1581efff9d5b9324e5bfe07632e"],["/archives/2022/10/index.html","93ceb78fea96f001c391299796aa3eb0"],["/archives/2022/11/index.html","8dae768bd17be0df6313a1ae2c894d56"],["/archives/2022/12/index.html","b602ac576af02db15a5c46f4178983a6"],["/archives/2022/index.html","6e6fdb9e80c3c571c94b576050b11b1b"],["/archives/2022/page/2/index.html","af50c176c8734d7c1bfd850b195817f3"],["/archives/2022/page/3/index.html","04d0553044a140dfc44e0efb66e4e473"],["/archives/2022/page/4/index.html","d6c4dc0591d036870a4a634bc6cb3474"],["/archives/2022/page/5/index.html","442ee74eaea61ec6e9a92544cc60034c"],["/archives/2023/01/index.html","ed8f94af3ee257337873875d394ad15c"],["/archives/2023/02/index.html","ad89ee0c74f7e1e0476e8fabb64c86f0"],["/archives/2023/03/index.html","350c3eb5b249f85701a81b29de704556"],["/archives/2023/04/index.html","b1354298270f3e51499a13e669534fac"],["/archives/2023/index.html","336844b7b75b7039f1690e69c4382a03"],["/archives/2023/page/2/index.html","143a2a035a8610c8e59e2c02cc2950e7"],["/archives/index.html","7a1edd38bd409d3afa1d2dbdd73971a1"],["/archives/page/10/index.html","31fef44201c898084b1f4fedfac54b4f"],["/archives/page/11/index.html","8c7a3a6e1259c0c79f425e0234bd9a30"],["/archives/page/12/index.html","c671568f67c96696b6d5ded98c14b6d5"],["/archives/page/13/index.html","ee6df41a000717cb679e2c7157618a37"],["/archives/page/2/index.html","8db563f6c3229da3cd9e664f75549523"],["/archives/page/3/index.html","57a1cab18b97d222bf5a4c086191bfa5"],["/archives/page/4/index.html","b5618e0db22eebc8d640f7e1b118127e"],["/archives/page/5/index.html","30496e91051e9bd8c568e29713ea3623"],["/archives/page/6/index.html","30d4b366381c63f798fdb483991051f8"],["/archives/page/7/index.html","beba0bab4cc4d4e8ea2d899994321e49"],["/archives/page/8/index.html","1949f8a8738b326b403dac14539a4296"],["/archives/page/9/index.html","6d2cab93dea6249f3ec4bc641094dc2a"],["/categories/CICD/index.html","a1ab812eff3f1819f44100b78d57dc9b"],["/categories/Docker/index.html","33132645f4c221b3240d2a66fe38f0fa"],["/categories/ELK/index.html","1a9e6af2f1d77969f0b716fa23289480"],["/categories/ElasticSearch/index.html","1051e9b87a9881467b2f949d29818cd9"],["/categories/JVM/index.html","69647b823778dff2eab5f908a5cad635"],["/categories/LeetCode/index.html","06a7dff32362520d95ad5b5a59fbcfc7"],["/categories/LeetCode/page/2/index.html","c6e5255ff9e37b3e76bf29f33e6d6d0a"],["/categories/LeetCode/page/3/index.html","76c49b2db3e3ed4e7b74cd797bad1282"],["/categories/Linux/index.html","4c8db2f1dbdb92c3715c003930794a16"],["/categories/NIO/index.html","4287b7a7d7ff7fe669ec308e590bcc72"],["/categories/Netty/index.html","b2181b1ccbb3620d5d5d47d57b506646"],["/categories/Nginx/index.html","c9bcad21ec5eb7875028c436f3624362"],["/categories/Redis/index.html","d830a5dd5dd64a421b340b39dd5a3313"],["/categories/SSM/index.html","d2e090198a62dd5a80ed6b846f5e1a1c"],["/categories/Spring-Security/index.html","69278f3a263c3fee5eba215e9a71a284"],["/categories/SpringCloud/index.html","c86cc057489a2190262e8f48fabdfc5b"],["/categories/Spring框架/index.html","1b169fca70f652fef3f3b8a3f23f4c53"],["/categories/Spring框架/日志/index.html","a750cad14bd19bc951113f7e32a9997c"],["/categories/Swagger/index.html","9a2090fdba068d271cc96d84c117f61a"],["/categories/Vue/index.html","c9b062ea8bc7dfdb00d59402528eade2"],["/categories/index.html","89a9765091e0a9eaa7fdd89e67f1ae48"],["/categories/分布式权限认证/index.html","747ca143254bcccba9778a22c474abcf"],["/categories/前端/index.html","1cfad561cdf7050b7f8f118603741738"],["/categories/博客/index.html","88b2e082bad373700a0619e945234edf"],["/categories/学习路线/index.html","eb436a18d3a1555bb60ab7d93c327358"],["/categories/工具/index.html","068c23ae5839a407e50e38a513f9d130"],["/categories/数据库/index.html","fdb56dba1fc385347c0e40518fd00d11"],["/categories/消息队列/index.html","56787ad48a99095572b314117c549e9b"],["/categories/笔记/index.html","f574a97c34be1b546f26ee7b83dc559e"],["/categories/算法/index.html","557c979e1ebee04ec84f360982288f50"],["/categories/算法/page/2/index.html","13aa19d0cd854371fa9c96709dbcc6ec"],["/categories/设计模式/index.html","a043836343a2a6d074e0e0378c897d39"],["/categories/设计模式/page/2/index.html","dc3725083e720f1bf952f5b159b3b917"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","4948866683c679de0909f9ba861c395b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","865972c0ce198fa54ecb66fff2b9ae51"],["/messageboard/index.html","12db9d0f60b6fe725124b30119056001"],["/page/10/index.html","0b53bf7bcaa5a33137f8b55d3c8caf84"],["/page/11/index.html","9dc835061e90961886c4e473665b43eb"],["/page/12/index.html","0b6d2f8ea593aba2ff26facdc3cc706a"],["/page/13/index.html","a731765dd2bb9b1ae4a6c5fc90325b66"],["/page/2/index.html","494dad7241f823f07da4b8c4fd61e1e0"],["/page/3/index.html","0cab020751ac5d58331ccb92f3e7e5d9"],["/page/4/index.html","598d3fd97cb038fda0777c98b8636260"],["/page/5/index.html","7ebf3eb1ab7331fa85552e7bba610e0e"],["/page/6/index.html","220f7e7c670d367402a01046a0a141f4"],["/page/7/index.html","d8d97cf42ec0d7dbb55273955e194bb7"],["/page/8/index.html","b721646409c911528011632db8e53528"],["/page/9/index.html","9b2f17826e8d9ac3a6281cf0f2435ea7"],["/sw-register.js","6cc8baf001da1767311e35264b5039a7"],["/tags/Ajax/index.html","6250d660ae024e6cd2edbd3ea1fff671"],["/tags/Axios/index.html","aa92ab765e49856684b24c3e8637bd68"],["/tags/CICD/index.html","0a3eaffb4a09e2bc9d789c2bbe9c1046"],["/tags/Docker/index.html","5aaf7b69b640920de58859fd3c057746"],["/tags/ELK/index.html","c7937c33343910a4c5b701bc4e282041"],["/tags/ElasticSearch/index.html","407f66bfc9bba4d8674965e0b3f003bc"],["/tags/H5/index.html","d3f85c27e52641eb5fea185d0e3eca93"],["/tags/JVM/index.html","2a95b4e32689fbc8732029daadd3112c"],["/tags/JVM内存模型/index.html","cce4a6350471ed9a9862d3eb537a51c5"],["/tags/JVM执行引擎/index.html","e334c2f6a453b158ca685c8f03327399"],["/tags/JavaScript/index.html","8608e87e3cae86b30353e165a035af5b"],["/tags/Kibana/index.html","dd6c5fa2c1813fe2ce59c555c895b0a2"],["/tags/LeetCode/index.html","59d6dfc06275eaa427a24218edcad0f9"],["/tags/LeetCode/page/2/index.html","7c6c9afc977125e6577f40129c014e5a"],["/tags/LeetCode/page/3/index.html","59879170729d84e83b5a29b68cbd93e6"],["/tags/Linux/index.html","c81349be77711fdcda22502d6c06d7db"],["/tags/Logstash/index.html","70cd8869183e66c9403313187659fe99"],["/tags/Mock/index.html","1be1ee37b5146a6d533e2a113fad7a48"],["/tags/MongoDB/index.html","199bb7c4d695ed7a5192711b07c33c22"],["/tags/Mybatis/index.html","c61a3b94c9abc94e5f4e9f8c9f7a10e6"],["/tags/MybatisPlus/index.html","c431aa996bbfa29f4eefeb871526ac74"],["/tags/NIO/index.html","6a59a9400b1b99ec681860773ea9be79"],["/tags/Netty/index.html","8f1fabbd2fafd3cc651e146a73931d38"],["/tags/Nginx/index.html","cfb4807dd6f58d229836d8d94da2d37b"],["/tags/Promise/index.html","ca6eb5aa6ed16d32a00951773b99429b"],["/tags/RabbitMQ/index.html","0f0e789514d97451584a308b4d7b2edf"],["/tags/Redis/index.html","7256ae199d72f876a56cd5f08970cc82"],["/tags/SSM/index.html","993171498c0af954be48a4b519722d62"],["/tags/Spring-Security/index.html","fad4f1c80d807b6f354551ae204b4537"],["/tags/Spring/index.html","ae79573348e975f686c4450d52343b77"],["/tags/SpringBoot/index.html","c3dbe3a0eb3349dd71cd99b5a3d47508"],["/tags/SpringCloud/index.html","2f0cc5dd548a0be3ed0c842d7ccbc492"],["/tags/SpringMVC/index.html","bf2ce6bc01d023ac582182d4df497a9b"],["/tags/Swagger/index.html","ca6bc4676f485aa322a2dfbb2634bdce"],["/tags/git/index.html","aabeb68b1520b367dbed1408fdee9804"],["/tags/hexo/index.html","f9a5d83b557d3d0306a5482f88dc5c61"],["/tags/index.html","655b5796b53134f157be03de618b0d44"],["/tags/jQuery/index.html","56a34c26cd3e9bcf79c60e8f8829ff28"],["/tags/java/index.html","79501e2641e399b40cd1732b2d5179e5"],["/tags/markdown/index.html","33a5c128b68f046aa39fd2b79007d3ad"],["/tags/mysql-数据类型/index.html","e28a4a6b7f37733548877a2d24d9fe4d"],["/tags/mysql/index.html","8b07eefad7669d34b18f42f0bf9d5155"],["/tags/noSQL/index.html","39b4f264ee630b438d528beb53a15412"],["/tags/typora/index.html","69c1937672453debf4d87e1aad831886"],["/tags/vue/index.html","b98bac0fc0df1424f0304ecc3c98affd"],["/tags/享元模式/index.html","d873e7669886459b91ecb989f2151e8f"],["/tags/代理模式/index.html","e7c76c6cc68a753c0fa677e059a49df9"],["/tags/分布式/index.html","3ac0490e8cec6d0eed7cfa27e2362dce"],["/tags/分布式系统/index.html","d71c7157715bba8df5a6551d0cf387e3"],["/tags/前端/index.html","ee1892c37fd4333dd2431a22e0747285"],["/tags/前端/page/2/index.html","0a20a1520fbb53db32a30172eb0b3658"],["/tags/博客/index.html","c7b5ff4cb812a2d21da8026dcf564bad"],["/tags/后端/index.html","198bc5d198d842fc135eba7ad6c58cdb"],["/tags/外观模式/index.html","c9b55e66397e943043c49a22c660e4af"],["/tags/容器技术/index.html","e606956d5a59afd799f3bf9b8b1b147c"],["/tags/工厂方法/index.html","f258561b05b7dbddebfd298015b39c5c"],["/tags/微服务/index.html","a973b67a5c0463540fd825647df5e799"],["/tags/抽象工厂/index.html","a9848ccf6ca1bfe506b571564847ee42"],["/tags/持续集成持续部署/index.html","25a59948b5b10390326ecedef1362ed9"],["/tags/排序/index.html","e31e356852bcfa936ed584884540ebef"],["/tags/搜索引擎/index.html","f41a55f67137236c00340239e6df4286"],["/tags/数据库/index.html","d259b63e31470b25fac52aefc1dd6bcb"],["/tags/日志/index.html","c72a3c5e2f2a572d9a73e7403c851038"],["/tags/服务器/index.html","2618382ea2030905c86ef68fbdc85668"],["/tags/权限认证/index.html","195cbe889ceb5759e83ed89b524c944e"],["/tags/查找/index.html","e5fee3e2d1152ee67abf75e5a4663f56"],["/tags/桥接模式/index.html","df94fe60c0ac70ba57dc42c8d2ab1d87"],["/tags/模板方法模式/index.html","64f1191af40588d73cc87da5e0321746"],["/tags/消息队列/index.html","41d22cd64c68f3926d172e2f0489be2f"],["/tags/版本控制/index.html","941ed607cff36f3348020c4d85db1a7d"],["/tags/策略模式/index.html","faa4c3a1e8adbba4cf7adb3cd1e775f9"],["/tags/简单工厂/index.html","5a00cfc72ad6d04b5176adc9db19f00a"],["/tags/算法/index.html","61b335a7743bfaee0cb7423c513b78cf"],["/tags/算法/page/2/index.html","7d63a4d8610c69362d38bb8f8fd33398"],["/tags/组件化/index.html","02b0b136a5128f39c96d79a7103d29fe"],["/tags/缓存/index.html","d4ea71f752b281537712d5edba5f7b97"],["/tags/观察者模式/index.html","04afa19c7c5101a63120b030b17ce066"],["/tags/设计模式/index.html","59568f0dcd2db6bfac263c45203bbc8a"],["/tags/设计模式/page/2/index.html","a0be23a0fa8819fe645192656fef20e9"],["/tags/责任链模式/index.html","b7928cdf3cf1611a1344a47e3f4e52eb"],["/tags/适配器模式/index.html","bdf219b78c41369d5eda756af7c7ced5"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
