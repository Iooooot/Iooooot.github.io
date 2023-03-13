/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","92adba62808d757e7af32ac3ffa66f2f"],["/2021/02/22/博客的搭建/index.html","e02253855891afb3e7b99c638a8fed8f"],["/2021/02/23/如何使用markdown/index.html","d7c0effbcf386ae6195b295fef99c504"],["/2021/02/24/mysql命令大全/index.html","b189fce9f55a08eaa109c3e069521541"],["/2021/02/24/mysql数据类型/index.html","f963b7c81abd309e1dc06c3e0f141a46"],["/2021/02/25/Git的介绍与简单使用/index.html","249c966861c6b166a8254bc3995aa8c3"],["/2021/02/27/简单工厂模式/index.html","91f4d2580d36062c589e27767ccf8039"],["/2021/03/01/工厂方法模式/index.html","ffd670220a5f47718fb41c23af75213b"],["/2021/03/02/抽象工厂模式/index.html","9d330a76f5fdab5824acadec44968a99"],["/2021/03/03/单例模式/index.html","2e5f67c9910accef9b54e8a8714ce658"],["/2021/03/04/观察者模式/index.html","0e51731a01f5eb0b8765beb6adc5c8fb"],["/2021/03/05/适配器模式/index.html","edb5b28493d29adf6e26088b87c34222"],["/2021/03/06/模板方法模式/index.html","cc995c2affbf8c7b5d339e759a67f811"],["/2021/03/07/责任链模式/index.html","de709e954876e5697f3a98ff50801c32"],["/2021/03/09/代理模式/index.html","265cf6cc4fbebaaae199f2f75d11f4d0"],["/2021/03/11/享元模式/index.html","f8c649ee762d752a10382324f5ae0af1"],["/2021/03/12/外观模式/index.html","a619dbd6e110a484b4cb19e9f6095c83"],["/2021/03/13/策略模式/index.html","97f32ecc69c1a6539e01c2b4b6201689"],["/2021/03/14/桥接/index.html","cb7e67729e79b60d5997cf69c8ba2e95"],["/2021/03/15/LeetCode-多数元素/index.html","7e1df20b31ce301840823d24062f0508"],["/2021/03/16/LeetCode之汉明距离/index.html","7b5a6a8204a3cf01be567948226060d3"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","449a9500c1dba8bdf6bfd60f6b8a3905"],["/2021/03/18/LeetCode之两数之和/index.html","78802274d3f0d12caf3c39239e35a48f"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","b0cc36aa209fe7d7df7d3007706acd42"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","1ef7a89c986a7f5bf70a43820be1b51d"],["/2021/03/21/LeetCode之有效的括号/index.html","ac1187e880981d62fd8124903fce3afb"],["/2021/03/22/LeetCode之移动零/index.html","069b504e86b922ceec122afa5bbcc3ef"],["/2021/03/23/LeetCode之爬楼梯/index.html","e9d4b86be0aaff91e6329d33707645f6"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","eb16113fe198fc1330d470a033e4a33c"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","0ada8921262ff951a2e6bec32736292f"],["/2021/03/26/LeetCode之最大子序和/index.html","14a5d64519e21e0da9d851de3ab0a66a"],["/2021/03/27/LeetCode之子集/index.html","ee3790724b8ddce517603899c3f5a556"],["/2021/03/28/LeetCode之合并二叉树/index.html","e763767235837a75ef4510cbeb4a2363"],["/2021/03/29/LeetCode之翻转二叉树/index.html","11f1884269eb11ddd40bb9c439190174"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","bb3579378b58c3e92478733b17a00767"],["/2021/03/31/LeetCode之翻转链表/index.html","14bf56b1811c054542914cdc47013b95"],["/2021/04/01/LeetCode之相交链表/index.html","1586777063fafbc14b5dbe9c176a42df"],["/2021/04/02/LeetCode之最小栈/index.html","165d6eda78acb2cc95edc460f12b805a"],["/2021/04/03/LeetCode之对称二叉树/index.html","cab30a0135fb3a0688f84e734fc1d83e"],["/2021/04/04/LeetCode之环形链表/index.html","61532eff9dbf98ec89ed65471a39a0cb"],["/2021/04/05/LeetCode之二叉树的直径/index.html","d24c91e7527a813e9da678a322954581"],["/2021/04/06/LeetCode之回文链表/index.html","c28553034173d6fa4b708c9aef5bec21"],["/2021/04/07/LeetCode之比特位计数/index.html","9750f4aea87b6e9662583623c7f0ea78"],["/2021/04/08/LeetCode之全排列/index.html","375420356bc2886af80ddd9ffab1252b"],["/2021/04/09/LeetCode之括号的生成/index.html","374abc7e3c645f9573cf6afbd1a78179"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","952ef01f36c3d2e2bdd0e776d4e49cc4"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","483a205828e1b17ce8adce3c6eff823a"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","1e3808fba139d0a49b3e87a68a409a49"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","c8686bcb7258c751335be891d3e4f903"],["/2021/04/14/Mybatis/index.html","8c842a9f652227dd078777fe982ae0aa"],["/2021/04/15/Spring-1/index.html","7a07dbd3ef18aa7a284ff708873e2fca"],["/2021/04/25/Spring-2/index.html","ad978b068c34efe9955637dd38467cd2"],["/2021/04/27/SpringMVC-1/index.html","80bd9f44f9122cc6a1ba7f6e430cf12b"],["/2021/04/29/SpringMVC-2/index.html","c32a71752339e966c1f47ccbedb98bae"],["/2021/05/03/冒泡排序/index.html","b73116fd8ce950ba7cd8e550bd08012a"],["/2021/05/08/选择排序/index.html","4a72db8c965ceda2de414e4c83e18198"],["/2021/05/12/插入排序/index.html","f2898e4dae6835c04501772cf132bb32"],["/2021/05/15/快速排序/index.html","e0f938c422fff9a731a77c25e90b7ff3"],["/2021/05/19/基数排序/index.html","2c3cd1f2b0c3bc25521082c3592d8a6c"],["/2021/05/20/哈希排序/index.html","50d3547f13df9adf48ea6fe4dcf12793"],["/2021/05/21/归并排序/index.html","b8d702310849a9c23d9c7175aee0872d"],["/2021/05/22/二分查找/index.html","9a69f2aa3655dae11f658c5908299e24"],["/2021/05/26/差值查找/index.html","e8b0bb4185e1a1e93e49ffddd35576cf"],["/2022/01/12/高精度大整数计算/index.html","520bfd0e4fc3ed23d0d28fccda0d657f"],["/2022/01/22/前缀和/index.html","0daf49badb5333af21cc9bc53b21d704"],["/2022/01/23/差分/index.html","e5e2f1babbce73d3b649c4636ff633cd"],["/2022/04/04/MyBatisPlus/index.html","1b391b4cc14fc677ee94303d55bdc2b5"],["/2022/08/17/jQuery/index.html","6254acdec872454dca95aec9a1e2385d"],["/2022/08/19/JavaScript/index.html","11d4944e851982fbe7ebe8b3f097502a"],["/2022/08/22/Ajax/index.html","20e700e0670a2b4824c3cf7bb201a5fc"],["/2022/08/23/Promise/index.html","3a338733abcb50c7316a086ba61c4bb7"],["/2022/08/24/Axios/index.html","501db701a3853a3bb07dc5c562adac75"],["/2022/08/25/H5本地存储/index.html","8ba6f8759e2e7d0d3de2fe260d50e8ab"],["/2022/08/26/mock/index.html","8e61de60370fd10b34c446bd514efda8"],["/2022/08/31/VueJs/index.html","7114da5d0a4334b2a7c2c335d7816913"],["/2022/09/01/vue组件化/index.html","59b699bd0bd9de959ea2ab71709ed105"],["/2022/09/04/VueCLI/index.html","2ed35f1fc454486a96a4078a4e19689e"],["/2022/09/07/vue实现动画/index.html","ef2510811650946bc59ae4b5edd119a1"],["/2022/09/09/Vue响应式方法/index.html","14459d065a424e2a17fa9f61f3106025"],["/2022/09/10/Vue异步请求/index.html","82933b044353bff76f0fb07426363723"],["/2022/09/11/vue-Router/index.html","9418a6d6589b741b63e1eb2f37b7faf2"],["/2022/09/13/Vuex/index.html","4a4f19e99139c80162c14759f6889957"],["/2022/09/15/SpringBoot/index.html","42db060764310ee811459fd9f3f7c69d"],["/2022/09/16/SpringBoot配置FastJson/index.html","7a65626eaefefaa350752df6ba0631fe"],["/2022/09/19/SpringBoot参数校验/index.html","25b6cb629b63a99ed71ef9dbb795e065"],["/2022/09/20/SpringBoot的异常处理/index.html","3f3ea0cb53aa0d9795b492205d0da1cc"],["/2022/09/21/SpringBoot统一响应处理/index.html","81b0994ca0335fa7da5782382b0a55e7"],["/2022/09/28/Linux/index.html","371009ac744b1a85760cf9ecaec16874"],["/2022/10/02/redis基础/index.html","4ca75f3b9216a43cee024734389c060e"],["/2022/10/03/Redis缓存/index.html","eaed9e1271bd1775877cf3978b225aac"],["/2022/10/04/redis缓存穿透/index.html","ef9e8dd6c9facbc7a003ab8e19bf3598"],["/2022/10/13/Redis缓存击穿/index.html","80f4ce21c542745061f60f8beffabaff"],["/2022/10/14/Redis缓存雪崩/index.html","bf8f1e36e77de85f6d05ecddc6954efd"],["/2022/10/17/Redis集群/index.html","7e74c62cda26456eb753cc6573e5e0e5"],["/2022/10/18/Redis哨兵模式/index.html","ef31b712562d996733d31327ec0fe737"],["/2022/10/19/Redis主从复制/index.html","7241572b58ed135ecefda759ddd96b10"],["/2022/11/03/Spring-Security/index.html","aeffa9cff66cea92d9861d16909f7ab1"],["/2022/11/08/SpringBoot日志/index.html","787afcac3a328fd773257e7598e07f92"],["/2022/11/11/Swagger2/index.html","7c3a1d2b133724cc633a0643366d9bea"],["/2022/11/21/Nginx-一/index.html","e491a33f25eb2eb84bcef4282d90d368"],["/2022/11/23/Nginx-二-代理服务/index.html","eedfb7c83ce6b2e887b8345f134c10f1"],["/2022/11/24/nginx-三-负载均衡/index.html","abd54710be3b4271925a52d6e565a53d"],["/2022/11/26/nginx-四-缓存集成/index.html","d405c742aa1aad5adfbd59f20ec56196"],["/2022/11/28/nginx-五-动静分离/index.html","5b297ecd5895802fad30f0d57dcd6f4c"],["/2022/11/29/nginx-六-制作下载站点/index.html","0ff8597da46aac681454a9cfb6371710"],["/2022/12/06/docker基础/index.html","80b378fe7ed4a3c883da29ac155154b0"],["/2022/12/09/Docker高级/index.html","525b88d4d3799191a5810353c3ad9eeb"],["/2023/01/04/MongoDB/index.html","5bb89e6f200fbd5439a6919117af8c3e"],["/2023/02/05/消息队列/index.html","dbe2d3f1220e6783bc5ab8b6b5f49dec"],["/2023/02/12/RabbitMQ集群/index.html","5a7d08ea0b21391c46a7969dd6b44154"],["/2023/03/10/CICD/index.html","a56c4f167459a3a3a924354b202f8f9f"],["/2023/03/11/ElasticSearch/index.html","1002ebb0e7f1858748e646b3ebdeb901"],["/2023/03/12/ELK日志平台搭建/index.html","6a389a233f18b1f2c4d025cd642ffb4f"],["/2023/03/13/NIO/index.html","05aa4e3dde73a4c43475ede55d3c5f12"],["/404.html","67f096fb2285238b267a3402e5e26fcb"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","89fa321a17f585d70f01e0149e679016"],["/archives/2021/02/index.html","440d2b833ec05779fc01d087332bae28"],["/archives/2021/03/index.html","76a60678ecbd90f07fe5383424a0a887"],["/archives/2021/03/page/2/index.html","6b42aeb6726de7e2f2379649d9008679"],["/archives/2021/03/page/3/index.html","5bdffe1f087aacc2d5270aa475a939aa"],["/archives/2021/04/index.html","4abd84524194850ac8d858ec91a8f71b"],["/archives/2021/04/page/2/index.html","323021dad3ca2ff2373c732e62dfe0e8"],["/archives/2021/05/index.html","ca588df1a6d101dc8b9a497397c98822"],["/archives/2021/index.html","2671897c667a20790f736cdbf063f832"],["/archives/2021/page/2/index.html","c28a44800e6915c0ecc4e2cb03ec8146"],["/archives/2021/page/3/index.html","3ec584ef96a6d6f5e894eefc2431cecf"],["/archives/2021/page/4/index.html","017f095b27b811f3982ad660f654668e"],["/archives/2021/page/5/index.html","eef3f4a049142eb9d09d7e0f24e0b584"],["/archives/2021/page/6/index.html","aef847a0122a6a48f606c221853a6f17"],["/archives/2021/page/7/index.html","2374ea21a554048eba74c5cb75ac967f"],["/archives/2022/01/index.html","7edde22a7d3bcd31373a0d0af1e58a42"],["/archives/2022/04/index.html","cf526326cd8f3e816186132528e49a86"],["/archives/2022/08/index.html","0c91591644dfeb92086d45b64e11fcf7"],["/archives/2022/09/index.html","9298f2ece525ee3210ad8cec9b5aa14a"],["/archives/2022/09/page/2/index.html","da0f9e3e3d67a11e2bbe63c57cdfff72"],["/archives/2022/10/index.html","6fe9f9834eaac49fdb50f0816cc15d07"],["/archives/2022/11/index.html","1fe9b5c27d1cd50bf80c2d132b95bc58"],["/archives/2022/12/index.html","7e0c2e83e79867db59ecd51cdcac0d0f"],["/archives/2022/index.html","dc7a896ca2a0f916a5c9fae007947fb9"],["/archives/2022/page/2/index.html","bfe6ad77068d9f384039cba26e81aab0"],["/archives/2022/page/3/index.html","500d96b15872d294e3b4502e72c5984e"],["/archives/2022/page/4/index.html","36c93fbf8230db59cd1e753dda3f5c5b"],["/archives/2022/page/5/index.html","9befbf22e6c56a37839491af47ea8110"],["/archives/2023/01/index.html","27567b331eba8f816a1ec00ee33223e9"],["/archives/2023/02/index.html","03f3f2a02a306df4e30f68fb6e01eeaa"],["/archives/2023/03/index.html","ee68eca2383f759e31f641fb36f6f6be"],["/archives/2023/index.html","0e2c7624f861ab450cf8fab6d39877c6"],["/archives/index.html","d0ebd7a46b3dcdbd64d7dfffb16de334"],["/archives/page/10/index.html","bec2e156bbdca4f7dfbc91f44daeb9ce"],["/archives/page/11/index.html","68b34cf787d6be218f2e29af5ce24a7d"],["/archives/page/12/index.html","9244cb4e9bd5203a512e718580256c7c"],["/archives/page/2/index.html","5ff97e27d28a21cecee6c9051acc4774"],["/archives/page/3/index.html","ca644db9d1c4034b7d6752e30c8b987e"],["/archives/page/4/index.html","43b3e3f8ffa715fd7d5f3efcda8c0ba5"],["/archives/page/5/index.html","d8871c58bd9e12a4702f264f0bde9cdb"],["/archives/page/6/index.html","56a8b50e81df32c15b8b288a56e51d8c"],["/archives/page/7/index.html","44aa19c1fdf2d474ada553c9b4538a6c"],["/archives/page/8/index.html","981d02f9f5390a6b61ff22d1da5ac446"],["/archives/page/9/index.html","80d21d3f7c22c3f82e0c0242e1e9fb8d"],["/categories/CICD/index.html","4c2a57de033a5a9e468cece340d3a291"],["/categories/Docker/index.html","53baa513473fe1bcff8b988bdb5e905a"],["/categories/ELK/index.html","c149e72c1772ec1da23f627bb16fabce"],["/categories/ElasticSearch/index.html","57a83c59792fa3e4e88b1019c64e515f"],["/categories/LeetCode/index.html","d924fba2ca169c1bc62cf3d4dbbca6df"],["/categories/LeetCode/page/2/index.html","940f9262fccfedd03fd6286925ff03e1"],["/categories/LeetCode/page/3/index.html","81fc28cfafae983d3c3dce8f0f0f1a40"],["/categories/Linux/index.html","843e79d667997af92451dd3fafd55e1e"],["/categories/NIO/index.html","d7158702fe1895d086b7bb2d8b6931c9"],["/categories/Nginx/index.html","e46ca3ae30f3090fd77baf7a9a020620"],["/categories/Redis/index.html","5372e7fda4ad7776311a060d72aeaecd"],["/categories/SSM/index.html","2b2238d25a3b35bf780917e6854a3d41"],["/categories/Spring-Security/index.html","903e93f699e8edc386e1a33d2c935230"],["/categories/Spring框架/index.html","14c500270ee92b90461bea7a5a3b2b6b"],["/categories/Spring框架/日志/index.html","4ed4539894e0cd0a101135c65cb4a2f5"],["/categories/Swagger/index.html","382d46cde0145482894f5e6f0d182318"],["/categories/Vue/index.html","668dfc30cc9eaf880df4aebc073f2b69"],["/categories/index.html","f4b7aaea1bc2671bb2e45bf5b4013c44"],["/categories/前端/index.html","4ba7995a132f07b1f9d2d14985901062"],["/categories/博客/index.html","3cdf3c47086b177b5fbc02bb25b4fb5f"],["/categories/学习路线/index.html","093c2813c3c4a4cfc13afcd25d78e3e6"],["/categories/工具/index.html","2cd76305e573e419e90aab765be8beb9"],["/categories/数据库/index.html","b191b458de0d71627a3ba826d6feb0a9"],["/categories/消息队列/index.html","f4fae2cc38d5550a705269952798c5e5"],["/categories/笔记/index.html","0a7afe11892e162599f474724dae4ab2"],["/categories/算法/index.html","55b1a53e71019cf5898af465b33eaa19"],["/categories/算法/page/2/index.html","d97ddb711872f9b2d3635bde2563afbd"],["/categories/设计模式/index.html","6be13e9f7a3e707d6e95159e75387324"],["/categories/设计模式/page/2/index.html","6196db2abd2861397977587da3070fcf"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","055c95de063df40e3f5544c0190544a6"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","fb86ec5dad5df83df9e92d910ef4cf78"],["/messageboard/index.html","af66dd931322544f729b3be879c2bed7"],["/page/10/index.html","5049607505fa228a4231e8adcc1cc4d8"],["/page/11/index.html","e1002690787f4cefa78f74626af76deb"],["/page/12/index.html","90d8c36c62125d41e07c9db1e3ca11b3"],["/page/2/index.html","a74a2863a572ecd4de8bb470b61eb1f5"],["/page/3/index.html","c99305a21979c7211f61d158a5b3100b"],["/page/4/index.html","1779c6ad5f54b038606f0b319e3d7f4f"],["/page/5/index.html","e0835047b44a118f03316ed2fe100a07"],["/page/6/index.html","fcebccb4593ba23ac241033743b068c7"],["/page/7/index.html","3a55c638d9cd1205e06b87d95bbe596c"],["/page/8/index.html","49c3eddacff7b354864198cae0288d1e"],["/page/9/index.html","3dd1e2e1a8f18e9b23d1f524c3940b2a"],["/sw-register.js","e2fe88d8cd2fa62a28b3e2a66dd48c32"],["/tags/Ajax/index.html","0f44c4f61f6bb928258cacd72a74ddb3"],["/tags/Axios/index.html","91b5cb71dd67dc3a5c3f16bd9783a5ab"],["/tags/CICD/index.html","415d969d4fba8f72ea7f0ab4dcf3d08e"],["/tags/Docker/index.html","f0c4c0a03fd9ce96eb9c974020361152"],["/tags/ELK/index.html","41a2e9a2aa34c02e3622a133871aab59"],["/tags/ElasticSearch/index.html","5cc1058e60f0a42acc6ec36e16526ed1"],["/tags/H5/index.html","253e32620fb524825657794e49b18c65"],["/tags/JavaScript/index.html","5d269984cf1bf0dc962c32d1878909a4"],["/tags/Kibana/index.html","c11c37fb8c4af29b19c3b298873dbd07"],["/tags/LeetCode/index.html","d5d44984f96ab762b303754ec7f8b5a4"],["/tags/LeetCode/page/2/index.html","47cb112f6e8db5d9bbf3cc8d788b9f36"],["/tags/LeetCode/page/3/index.html","c214c1598210e9d4c6e820896894862c"],["/tags/Linux/index.html","9d5b011b8d24e20da91a5e4360f70dbb"],["/tags/Logstash/index.html","3e39c4bc617a4dc22dd004223bd63e99"],["/tags/Mock/index.html","c73dc08e08a52ae6954961b168186608"],["/tags/MongoDB/index.html","829d884e460a5e443e6b6606a0bb4273"],["/tags/Mybatis/index.html","71c38596dad0e60a30dba07f74fa944f"],["/tags/MybatisPlus/index.html","3a35deee9df2f5abf508298754625480"],["/tags/NIO/index.html","f90812224ce769075365d3f6351435b6"],["/tags/Nginx/index.html","8f4b84e560fb418ba06f55adb2e96866"],["/tags/Promise/index.html","55a07f97ad0b6966709af64ce17f5298"],["/tags/RabbitMQ/index.html","8e7ac693c446530c87731bab8a2d7197"],["/tags/Redis/index.html","0f3907d195c7af3d1234b60af505dbc7"],["/tags/SSM/index.html","3836e9f625cf01f92da82dd07e459548"],["/tags/Spring-Security/index.html","d4a9cf7637cd1188f6f3fb71cabca066"],["/tags/Spring/index.html","54f80edeac0ba25a2c6ebc46be17d05d"],["/tags/SpringBoot/index.html","ff4c7cfff5169db1cf1120a267938509"],["/tags/SpringMVC/index.html","2abe189d3e58ee8f62637ddb38299d11"],["/tags/Swagger/index.html","7853a5753045e135276a190251baa23c"],["/tags/butterfly/index.html","e14fc161ac922104ca5f30a45a612fc5"],["/tags/git/index.html","1adbf77880ed3820de70a7384c73e86e"],["/tags/hexo/index.html","ad7202f5d457e8e6a244905648713c72"],["/tags/index.html","4a9501d9ad193a58ad5e6e40e3a4500d"],["/tags/jQuery/index.html","13c0bfe7e226a1c1d344db48cc1480a1"],["/tags/java/index.html","9d81667ee45fe502012ea096e52a79df"],["/tags/markdown/index.html","eb5c834c33321ef6ae04f1e7038faa02"],["/tags/mysql-数据类型/index.html","e338b44744a62e248b21ed199f00987a"],["/tags/mysql/index.html","933cda7b2daa612f0b5637dd01dfa96a"],["/tags/noSQL/index.html","35add73e5ad377305f3e955a611cafb7"],["/tags/typora/index.html","874bcd66e6a4bfbb6dd78b445b35428a"],["/tags/vue/index.html","b49a7346f864d57eb0a931bd0f6c654f"],["/tags/享元模式/index.html","d17be7feb9625716971cc67af0276342"],["/tags/代理模式/index.html","eb23ef1763d0a56bff6298e574a73639"],["/tags/分布式/index.html","60009e4fa1453129bd3a5cbeb73e30c9"],["/tags/前端/index.html","9219d8069e15841ad8e54fd78f6158a1"],["/tags/前端/page/2/index.html","f8e7ac3abd6262551dfc5b8ddcd3b3f1"],["/tags/后端/index.html","980e1e1d53b61e6bd1b86ce34976b222"],["/tags/外观模式/index.html","38fdf4405ab9fdeb2fc783dd812d5ba8"],["/tags/容器技术/index.html","11cbca551c15a8f81b68f3cbef948a7f"],["/tags/工厂方法/index.html","5bbb7298f0d10817424f5ddd3d485e52"],["/tags/抽象工厂/index.html","34f85746bd0518cf4a6745d1720e37b5"],["/tags/持续集成持续部署/index.html","20fd624f619fead12acdf02319992cea"],["/tags/排序/index.html","88249d02cc6393df1aa1698d15322571"],["/tags/搜索引擎/index.html","26e30725c2d922b936462786b6f56099"],["/tags/数据库/index.html","749aa08ab69a75a4f3b58ae940994af3"],["/tags/日志/index.html","9ea1cb7549c6d8635eae80d294bee641"],["/tags/服务器/index.html","799b1a2037161af47debbeb15ed34211"],["/tags/查找/index.html","404bc1c7aad8531e5111ce8547ffd04b"],["/tags/桥接模式/index.html","2c6980c9713ab4e1d448f9f3f80a7480"],["/tags/模板方法模式/index.html","81ac569133c48008c06d794742b3fa06"],["/tags/消息队列/index.html","6023d068319cb2d06054e78584b75cda"],["/tags/版本控制/index.html","fe730482e9e0f7799a0d18b9723479ea"],["/tags/策略模式/index.html","fd5de5c808d0146fe46257d7bfa69921"],["/tags/简单工厂/index.html","0d0202ce670fdd50cf13b69c8e12e2e4"],["/tags/算法/index.html","2a68a864bfd6c7c67f7219ebb8e72912"],["/tags/算法/page/2/index.html","ddbd9073bb9b0a5fc171a25f7f9861af"],["/tags/组件化/index.html","5af8565a35d29307ec55b0d192765ceb"],["/tags/缓存/index.html","0b8d4eee028f35684844513c71904410"],["/tags/观察者模式/index.html","ebc7ded2ee059af7aa22fe620e2531b0"],["/tags/设计模式/index.html","cc4276be3df74995a7b97328d316cb73"],["/tags/设计模式/page/2/index.html","8d5f5e4748ceea60ac77b85c12c0d19b"],["/tags/责任链模式/index.html","cebfca6b5227993ed47f54ea36ea8286"],["/tags/适配器模式/index.html","cbfe5598b4cfb7f6851e998ce0649f20"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
