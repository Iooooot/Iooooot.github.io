/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","fbd50f5000049ec2ea098dfcbb9f8edb"],["/2021/02/22/博客的搭建/index.html","88c2ca0be20ff99e08ea61c7386995ff"],["/2021/02/23/如何使用markdown/index.html","ad426ebf6b41b3b3969dc75ed57027e4"],["/2021/02/24/mysql命令大全/index.html","718b8f2f873c9a4b55fda9f707271443"],["/2021/02/24/mysql数据类型/index.html","d677112e282d6ef3bfbb354f8a1cdceb"],["/2021/02/25/Git的介绍与简单使用/index.html","6315fb12e8c2b2a47666bf7fa909addf"],["/2021/02/27/简单工厂模式/index.html","52f8fd4b7acd86bd5a8cec16687e7b1e"],["/2021/03/01/工厂方法模式/index.html","8e6e9ddb1e1ec804aacd41775aceccdb"],["/2021/03/02/抽象工厂模式/index.html","3f3d1daa61dbf6da331d89552d653b74"],["/2021/03/03/单例模式/index.html","dccec542d2521878f456912a3bf4dcf8"],["/2021/03/04/观察者模式/index.html","477d565856290dfc941008fcbf4cb1c8"],["/2021/03/05/适配器模式/index.html","43dc33bb9e2a408e77203722eef56bbb"],["/2021/03/06/模板方法模式/index.html","7834430231fe3c3199b7a7c7d78d3e96"],["/2021/03/09/代理模式/index.html","c4287df17277ac33472a6c5169195ebb"],["/2021/03/11/享元模式/index.html","87f49bd3642213800368418a2db5a8f1"],["/2021/03/12/外观模式/index.html","a40197f0f933a80759f836e9ef9e38a9"],["/2021/03/13/策略模式/index.html","b1f4cef85ec7a659f83b42a6bb7586eb"],["/2021/03/14/桥接/index.html","afcb5eff1a05c39aafbdffc1b102c5bc"],["/2021/03/15/LeetCode-多数元素/index.html","eee96538488ae8b9c753d212ffed6448"],["/2021/03/16/LeetCode之汉明距离/index.html","559e695c79296fe622563930c9a29d90"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","031ddb9986e6bc085d7be7e3656d0f6b"],["/2021/03/18/LeetCode之两数之和/index.html","98ad97a4783d8d224e1c7b615780619b"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","d0aa97aa40a70696447cfc1235945a28"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","e443682f92714da0e6e1b11dbe213876"],["/2021/03/21/LeetCode之有效的括号/index.html","0376c5fe2887571442241ebf3e68191c"],["/2021/03/22/LeetCode之移动零/index.html","5fda44b3e2324e15d65e215a362d3456"],["/2021/03/23/LeetCode之爬楼梯/index.html","6da54a9d32e0edeeacdd5ed512974d4c"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","9de9826c6db18d48d97e1f78842cee72"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","21d14480335cf617e792b0f9aaf92094"],["/2021/03/26/LeetCode之最大子序和/index.html","e8704f6dff3fa63e74d39471ebbcee9d"],["/2021/03/27/LeetCode之子集/index.html","745ee25b4fe259a98a6e08d2f17a4c05"],["/2021/03/28/LeetCode之合并二叉树/index.html","6e701696490378141a6681e7e32f60f2"],["/2021/03/29/LeetCode之翻转二叉树/index.html","170e3343dee2e772266653313dd7533d"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","7d0b708c5a3cb0536685f53843dde166"],["/2021/03/31/LeetCode之翻转链表/index.html","d88ced5706405e9ee75e8d5047c5d46b"],["/2021/04/01/LeetCode之相交链表/index.html","fd0aae28059cd2ebc7d37f798e1b5af0"],["/2021/04/02/LeetCode之最小栈/index.html","18d5a11bbd4038dbc72973963cb9b03a"],["/2021/04/03/LeetCode之对称二叉树/index.html","ffdbbe4ec40e6f2a883dd41ded159f04"],["/2021/04/04/LeetCode之环形链表/index.html","901090eaa220e6fcc78bff9d8d6bc092"],["/2021/04/05/LeetCode之二叉树的直径/index.html","b312724ba2bdaf7289729889c658bbd5"],["/2021/04/06/LeetCode之回文链表/index.html","03fa750b6a165942b83eb9a7bf7a0d94"],["/2021/04/07/LeetCode之比特位计数/index.html","bac9fc9760370960b6f919418d6613fe"],["/2021/04/08/LeetCode之全排列/index.html","28d72bdd807dc383874e71c951087c90"],["/2021/04/09/LeetCode之括号的生成/index.html","ee86e45590dce87938be13fe74b7825c"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","7ef97f70dd953dda6b05fbf3a5bc5a73"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","bc9f0e0bb8970ff23ef9df891e2e1aed"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","a9eb1e7412b0e9a5ff1f276e163324cf"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","75c664033f8b72d63b32a5b84731ceeb"],["/2021/04/14/Mybatis/index.html","a11b99a69b40493a82c6b6db1710806a"],["/2021/04/15/Spring-1/index.html","49b68821c0b22c33753ff5705e512ff2"],["/2021/04/25/Spring-2/index.html","968e41cf3678e38bd22c4c8df0b6da5e"],["/2021/04/27/SpringMVC-1/index.html","1dd8f55c395f5b1fc64c70624257f9b1"],["/2021/04/29/SpringMVC-2/index.html","28b52560109b37fde068e21e01d07dd3"],["/2021/05/03/冒泡排序/index.html","5aaec2097124eb832706332f9bffd271"],["/2021/05/08/选择排序/index.html","450f953e9e205904be85b7ac201d033c"],["/2021/05/12/插入排序/index.html","b1adac2a49aab463ac43d2fb046ab0b5"],["/2021/05/15/快速排序/index.html","9bdc38394a6652b5c48f2502df70f2a5"],["/2021/05/19/基数排序/index.html","76277f82f1421ff97e4f83b003acc600"],["/2021/05/20/哈希排序/index.html","f33b64a658230dcc4146de097a632bb8"],["/2021/05/21/归并排序/index.html","1101f58c7c4afb4494d01170daab0431"],["/2021/05/22/二分查找/index.html","eded2054d8c69e08d5de86edcebf2dfd"],["/2021/05/26/差值查找/index.html","9aed58a9cadda6945dece2e8a8c007b7"],["/2022/01/12/高精度大整数计算/index.html","1f51aae81c6973e23dd141719e45d57f"],["/2022/01/22/前缀和/index.html","5a732eaf8f9fc4bb9b640f07726ee17c"],["/2022/01/23/差分/index.html","590dfb3371f7b7a76e30ae73e445779d"],["/2022/04/04/MyBatisPlus/index.html","90fcbcdad14a3b6678052f194103211c"],["/2022/08/17/jQuery/index.html","eac4b0fe0bc8ea5a8b2ffc594962365c"],["/2022/08/19/JavaScript/index.html","6984db0dd15eefaac5834c4125884872"],["/2022/08/22/Ajax/index.html","d0682e22366c7bf3042110f4bd1d65c9"],["/2022/08/23/Promise/index.html","9cda8b2ddbcb74bdf1fcf5e2dbb2de62"],["/2022/08/24/Axios/index.html","495f83b45c6b1395f15470600d434d47"],["/2022/08/25/H5本地存储/index.html","d39f39039c400a158380bea7162e9091"],["/2022/08/26/mock/index.html","d3b65a243284376dd4c1484ce5b23317"],["/2022/08/31/VueJs/index.html","6a0005d3ec699b8cb83093d2596ee6fd"],["/2022/09/01/vue组件化/index.html","12dd7a42c3309bdc1712ca5808eafe58"],["/2022/09/04/VueCLI/index.html","1a4db736b0db585acc50b8bf24accc55"],["/2022/09/07/vue实现动画/index.html","655222d55dd2e2a1764e4bb2e9e63e79"],["/2022/09/09/Vue响应式方法/index.html","c8d91808b5a1c0ab643e9ec78ace5b42"],["/2022/09/10/Vue异步请求/index.html","9a3b28eda9132d6ff059ab830705c713"],["/2022/09/11/vue-Router/index.html","3c9fe3980dc4adb11873e9a961df055a"],["/2022/09/13/Vuex/index.html","f330ebead93b8ae0be09411a87bef56b"],["/2022/09/15/SpringBoot/index.html","f691e6d37cdfbd2ba5aebf6389220bae"],["/2022/09/16/SpringBoot配置FastJson/index.html","660e53e6aa3d5fd0b670d76bb9ffff45"],["/2022/09/19/SpringBoot参数校验/index.html","59a5fd119d8fa89736d07179c8b1812d"],["/2022/09/20/SpringBoot的异常处理/index.html","8fe112077491fc70c7b0e9fd9d30831b"],["/2022/09/21/SpringBoot统一响应处理/index.html","639585213524a0ef935ffcd128954c8e"],["/2022/09/28/Linux/index.html","7925762cc0a786495170dfe3cc30b936"],["/2022/10/02/redis基础/index.html","ae3dbbe9f5fc26c44542a4340d8002a8"],["/2022/10/03/Redis缓存/index.html","40e11d77ca7bd2c4c524a4a11c730653"],["/2022/10/04/redis缓存穿透/index.html","39fb57f6a1bc726fbedcaf9231924695"],["/2022/10/13/Redis缓存击穿/index.html","95939081d0560cbddea95d4423dc1782"],["/2022/10/14/Redis缓存雪崩/index.html","7202c6e48bfb4d9cd48c2ae3c519b91b"],["/2022/10/17/Redis集群/index.html","1ac2addcf1c3ffece7c46ecfd4608828"],["/2022/10/18/Redis哨兵模式/index.html","7341352af1f5aaa454b38f3f0ddd270e"],["/2022/10/19/Redis主从复制/index.html","382f03310f620b04007bc631b8242171"],["/2022/11/03/Spring-Security/index.html","dd88e9f76171c16a01793544bbde2610"],["/2022/11/08/SpringBoot日志/index.html","475d476aa444cb5999f95b28354e841c"],["/2022/11/11/Swagger2/index.html","44964bd0f5a4e0be7c4ef53bb82c02ed"],["/2022/11/21/Nginx-一/index.html","edf22d382f2f4fd867b02ce03b1c8ecb"],["/2022/11/23/Nginx-二-代理服务/index.html","921167aef6d4cd337866cfd5a2a9673a"],["/2022/11/24/nginx-三-负载均衡/index.html","e46c5b99f830e1eca9627e04ead8f477"],["/2022/11/26/nginx-四-缓存集成/index.html","181805d1fe0834d8292c9bbedb429334"],["/2022/11/28/nginx-五-动静分离/index.html","745e221e1bed05e953f72b41b6761f23"],["/2022/11/29/nginx-六-制作下载站点/index.html","25e62d51d5f54f20c0883271bae65511"],["/2022/12/06/docker基础/index.html","c318ea55594e4c8e680eb9f7203a7882"],["/2022/12/09/Docker高级/index.html","e96546330e55338d7bfc59ca4e51ca7e"],["/2023/01/04/MongoDB/index.html","039655b3c48c08bee522de1f5b4b939b"],["/2023/02/05/消息队列/index.html","a53af490017cb8eee1ea285efba44794"],["/2023/02/12/RabbitMQ集群/index.html","5fd1bfca1ce5badfea0c5a1d7b347b7d"],["/2023/03/10/CICD/index.html","24c8b82bcd40f1313840b5e181cc5bc6"],["/2023/03/11/ElasticSearch/index.html","6551a1472b6cd23ccb93a547f1ba64e9"],["/2023/03/12/ELK日志平台搭建/index.html","d1ff91ae947255b610a979ade50611e0"],["/2023/03/13/NIO/index.html","e844531c3c4a0ac34d19d096511aa323"],["/2023/03/14/Netty/index.html","22dda359ffa5e33c2081e5c056932d71"],["/2023/03/15/SpringCloud/index.html","667d0f9567366007bc8f496be03f78e0"],["/2023/03/17/分布式系统认证/index.html","55fe5ef10708b9aa024a7a6894e82801"],["/2023/03/19/JVM概述/index.html","a70f5d0475a89bea6d4d540298c58739"],["/2023/03/23/类的加载过程/index.html","439de3ae3957d1ddafde966f3540f4d2"],["/2023/03/28/对象的实例化/index.html","400e255b49d39b2080b721fae539fe1d"],["/2023/04/01/运行时数据区/index.html","a5956926bc04cf34cc3a927bce928fe4"],["/2023/04/04/执行引擎/index.html","5ebd7bfcadef4b8a97c0d6636ab78309"],["/2023/04/06/对象引用/index.html","dff774da5cfb0cb47061932450fce029"],["/404.html","769c84754faaedd122034db272845f38"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","b5a8e51f63cc3529c00470a4160c48f9"],["/archives/2021/02/index.html","36768be3a8b6da23c5ff468baf0a73b9"],["/archives/2021/03/index.html","a8abbe657ffc4754c535fd7d3b514220"],["/archives/2021/03/page/2/index.html","dd5df70b09afd3aaf0ccd13965fcf3f6"],["/archives/2021/03/page/3/index.html","3b32c899058caad0ad43ed47d4a7bf74"],["/archives/2021/04/index.html","3cb359864f6cd26ed330ec0ad872ddc4"],["/archives/2021/04/page/2/index.html","298f8ba9d084446fe4d57668f0f11be5"],["/archives/2021/05/index.html","e50e653e7f24938cd1b0931a938232c9"],["/archives/2021/index.html","d831b3253ad136eba3c834fd256522ce"],["/archives/2021/page/2/index.html","12fbd1e8a09cdcd370316a930a144601"],["/archives/2021/page/3/index.html","c493c1e6d57d8a85ca8348e6aa49b336"],["/archives/2021/page/4/index.html","c4eec547f8a7cd408ab93af2225834fd"],["/archives/2021/page/5/index.html","c426ba8e69ca24b0885fbde4cb2bd349"],["/archives/2021/page/6/index.html","f68f0b129e87b20568d51bb8bf95f3e8"],["/archives/2021/page/7/index.html","130cda6d60c1c977b7b84abaf7450c34"],["/archives/2022/01/index.html","f659b379b8582cac23eab53131d4790e"],["/archives/2022/04/index.html","2ea79fb7ef747e54ddd9615c45b996b3"],["/archives/2022/08/index.html","56d19cf7b0d93e70772c84e626cf75ec"],["/archives/2022/09/index.html","6632759eb9375e3b2bb37545f453013a"],["/archives/2022/09/page/2/index.html","aba21afb2d11e48bf9a638d9f305a8b0"],["/archives/2022/10/index.html","f2a69dcbd61f4db78dac2e401cc8bbf0"],["/archives/2022/11/index.html","4be77e83585b0c80e14706f0a02e44ad"],["/archives/2022/12/index.html","498ce9999daa936c1fac2ce7e0453caf"],["/archives/2022/index.html","b0eb4f919be81eedf0e55bb2397214ff"],["/archives/2022/page/2/index.html","354b196781526dca5018b27302b0e7e7"],["/archives/2022/page/3/index.html","962b3580a9bef94b0f6af13e4177e3eb"],["/archives/2022/page/4/index.html","b839a3d638c8923a9c76c467a1b54bcc"],["/archives/2022/page/5/index.html","4bc31e16148b8dda5372667239cd26b7"],["/archives/2023/01/index.html","01a2bb9ae8083970f0a98c4226c95076"],["/archives/2023/02/index.html","eeef8f2ddb51093098be0edcb3aa4ef4"],["/archives/2023/03/index.html","5c9ac80af65c7407c062134537249d27"],["/archives/2023/04/index.html","f2cff58bb912ba71971e66a64fcde9bf"],["/archives/2023/index.html","9d0ef85c30015fc95fc0ba6621f01b5f"],["/archives/2023/page/2/index.html","b4b64613c5942c593b6b82b9c7ae1cf3"],["/archives/index.html","e9d104cfd14269f5b1a179a1ccbf8ffe"],["/archives/page/10/index.html","949ffc4c1e6c205f5db10bdedac207b0"],["/archives/page/11/index.html","b9e3ce8c936a1fb62d65a3076d159c72"],["/archives/page/12/index.html","506b9beae6d89588fed02a0ec48cd35e"],["/archives/page/13/index.html","5117c1c4081d84157dc146652a40a6ca"],["/archives/page/2/index.html","2a23a78be7d949828bcd74fd496b029f"],["/archives/page/3/index.html","465dce34bb5eabba1f378ea4df1ac2a5"],["/archives/page/4/index.html","b9c6c0c5485b802ecfa1b5d57bd7ccd8"],["/archives/page/5/index.html","2740825dc638d3482ca5485ac5b17356"],["/archives/page/6/index.html","fbcc4331b26d0c917bc46e1fe0cbd090"],["/archives/page/7/index.html","f09997d1d78c583086812fae7149205f"],["/archives/page/8/index.html","41ce17c7f0f951407c1a3e270d353184"],["/archives/page/9/index.html","0bccd6c95af1096d8937b63d53c0e306"],["/categories/CICD/index.html","a669821e6b7f67383d884f94c4007314"],["/categories/Docker/index.html","b65c04ea0e84828d7fca0d67dfa9f902"],["/categories/ELK/index.html","b8d726e78c8189fff8c2d8d3ccda521d"],["/categories/ElasticSearch/index.html","fdd323504bbbeca1f3b533d0bfcdde56"],["/categories/JVM/index.html","2813bf90ba1682015e7455bab448fc1b"],["/categories/LeetCode/index.html","5d3b9a3b93d686c37f530e1355f3c2dd"],["/categories/LeetCode/page/2/index.html","edcd89dc7a00c4b92aa4228478130415"],["/categories/LeetCode/page/3/index.html","2483050bfdad8b5943a4c2811d27eca3"],["/categories/Linux/index.html","a9d1aa7d5ee37d3d3cbc4c43a90fc6e6"],["/categories/NIO/index.html","85d6c2e45f7bb28fa6c75c65ed12af48"],["/categories/Netty/index.html","65b39cc16e418199745560a85068daab"],["/categories/Nginx/index.html","f7e6846ec7a80a617033f6d777334836"],["/categories/Redis/index.html","1b58ffbe9e77719506c81b4e91b0a03a"],["/categories/SSM/index.html","2ef96c3c7c0ca729735af1ff767afb3f"],["/categories/Spring-Security/index.html","190f0b9d9bf8d0c48d6e3e39a4999588"],["/categories/SpringCloud/index.html","2e57642c6ac036d712616cc2b39cf581"],["/categories/Spring框架/index.html","d1dd2f6b61fe1361a7a145addd501cef"],["/categories/Spring框架/日志/index.html","a64f19f11b82d3b6397839e140dc4a62"],["/categories/Swagger/index.html","94c446573d23102f667a31b3031ed673"],["/categories/Vue/index.html","c6e5253be24b939e7b5347a512e97b3c"],["/categories/index.html","b8ba3f9f5f086f42df94eb16d4677612"],["/categories/分布式权限认证/index.html","164b39284daa7699978611098e8f6c10"],["/categories/前端/index.html","5da354f141b2b543dc19d732ccef32c9"],["/categories/博客/index.html","d16ce33f697356f09d27bf2e396a8a19"],["/categories/学习路线/index.html","6c210298274528e58cfc283c00051aa3"],["/categories/工具/index.html","89e75958eb734b36ccc0ad6c8bd3a0eb"],["/categories/数据库/index.html","e389534892cfc1f1c8a0ce2aaa8a286a"],["/categories/消息队列/index.html","0278a773097fea89d71739312ee6bd25"],["/categories/笔记/index.html","80eaa9e8d2e1d698e2253f26a2fb49a6"],["/categories/算法/index.html","be283efba66d703f2657b43b2691ac90"],["/categories/算法/page/2/index.html","10ffb4abf241f89af3742a32c442cc9f"],["/categories/设计模式/index.html","8a4abc4dc3185ea7c693d53a2e7e2435"],["/categories/设计模式/page/2/index.html","447a770e5f01760f40cb99d0bfe089fe"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","965eda92e8079796765aa8df092b2b79"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","0bc458d85d395895742b6870928bf587"],["/messageboard/index.html","351174547601fc8634f1d3b3437198de"],["/page/10/index.html","6a2f9c691d81379210078c7db9020b7d"],["/page/11/index.html","847d157466eae0c25a2a080f26968adb"],["/page/12/index.html","9f870157661a036e73518f409cb03ee6"],["/page/13/index.html","81ef71d950f79fb184ba6d917eac9cf6"],["/page/2/index.html","630b568340005b2798157c057651d772"],["/page/3/index.html","ee5bc53a2addd4d81b1282739f872c48"],["/page/4/index.html","cfbd42a4e81b9284de8bc1c7bbccfb5e"],["/page/5/index.html","fe30fe5ef68dfe0897e7a344bd8b6546"],["/page/6/index.html","86c532db53fd58a7a2ad435c2637513b"],["/page/7/index.html","d38ebc1bb35293fd9078321694ceb23c"],["/page/8/index.html","105f88803bd380651f70875f78016367"],["/page/9/index.html","03874da2acf197de548f7461d5e373b8"],["/sw-register.js","531a9125fe9aef98e60253c10a5936c8"],["/tags/Ajax/index.html","282650492ffd39c93db8bead518782d4"],["/tags/Axios/index.html","bbe9539a409d9b6d9bdd9a9f5344d817"],["/tags/CICD/index.html","13c4153e95fe93d1961c2d2105def550"],["/tags/Docker/index.html","83143e01fb43c4b7760dfe822fc21b02"],["/tags/ELK/index.html","f3fb5b1cff9a01469a0027f4111583e6"],["/tags/ElasticSearch/index.html","ea7a5146575b4ecd921ca9c336a3171f"],["/tags/H5/index.html","f19dd7e14a26035edd05a6fd5a15bcb7"],["/tags/JVM/index.html","fe8bf30c888ff9eee82b4b311e53bc8a"],["/tags/JVM内存模型/index.html","bd24390766cbfa1eeea8c5c6d7964ec1"],["/tags/JVM执行引擎/index.html","536fe07d92653953997d22bd4b6a0900"],["/tags/JavaScript/index.html","7f5049429d389ef6a28f4b9b16fe18e5"],["/tags/Kibana/index.html","813bd3808d8ee40b615a66cafeda8f56"],["/tags/LeetCode/index.html","72bf72f84dd2572d1520fcadb2533abd"],["/tags/LeetCode/page/2/index.html","55020479febc8ec209d0bc93f63fd5f2"],["/tags/LeetCode/page/3/index.html","636b2a5f3979c63fd16c7538c9287077"],["/tags/Linux/index.html","957f98893c6c4879121051940bb45cf2"],["/tags/Logstash/index.html","28f733339ad8a6e5d93baf17e2c7124b"],["/tags/Mock/index.html","8e4886a0440ac94799850d24f50faf50"],["/tags/MongoDB/index.html","1c5583f285588a91093e998ab1476b31"],["/tags/Mybatis/index.html","fb1d2e7b6d41fe0f7c56dde972172d43"],["/tags/MybatisPlus/index.html","6fe77dde42a04dba583f77978e143cae"],["/tags/NIO/index.html","8c28ea21272743f7b2e28d9272e2f60f"],["/tags/Netty/index.html","7d825cb0194fdbb9d8eeae9a2a96eb23"],["/tags/Nginx/index.html","83cce71aa282465f3468e7ce5a416e3a"],["/tags/Promise/index.html","b03b181f68096e0ce97ce5d159359120"],["/tags/RabbitMQ/index.html","819ed6ff0d20134e5f6ac06e321ddc5d"],["/tags/Redis/index.html","7432d8b8a3ef65e1583111ae1b3a7ded"],["/tags/SSM/index.html","3eba49ab0c6bd2c10fe355beb1cc0220"],["/tags/Spring-Security/index.html","5d05827a47b505b5c11e9fcbe20019ef"],["/tags/Spring/index.html","c6f97418267106e562a8436684aa24c6"],["/tags/SpringBoot/index.html","7e9c06fb8e9d972b999d25c1a29acf46"],["/tags/SpringCloud/index.html","9212f1a2fbe120b581afc58e0000de89"],["/tags/SpringMVC/index.html","bb0db95de563126da64b811d44b058c4"],["/tags/Swagger/index.html","13d85f36a5c020726152cd2b81d32878"],["/tags/git/index.html","fea604a5ff3668973c0413eaf97309cb"],["/tags/hexo/index.html","726f2086acaab6ec31d0e3a2bb2b9801"],["/tags/index.html","0f797358a07610b4c8daa16411061c23"],["/tags/jQuery/index.html","258d6c6b8b4cc8d22ef32a3368fcb7db"],["/tags/java/index.html","100f3e4c0cf3b15fe2710392aadc7d97"],["/tags/markdown/index.html","a4142dd8d31747481b7c9476a330cd56"],["/tags/mysql-数据类型/index.html","5210e764219b262adcad824b1c1e7c7d"],["/tags/mysql/index.html","dc3deeec5adb3d029136494fc03eb0e1"],["/tags/noSQL/index.html","bd770ab79c8b41351a90318dbf5e2fe4"],["/tags/typora/index.html","d3a572c475e5f7f9883e7014f58e09ef"],["/tags/vue/index.html","fd79751529a18e184b58c9a95b309c30"],["/tags/享元模式/index.html","05d97f0065e1d30d8b1f28af089bc4dc"],["/tags/代理模式/index.html","a54aeba34fcb98a2440daa4b597ff3e0"],["/tags/分布式/index.html","b112262464652a145401ca4941a362d0"],["/tags/分布式系统/index.html","f988e38ebb4407e5a18bc77c5ddd1d52"],["/tags/前端/index.html","324e70dc6bfaa18c4741fd78e12f2e5c"],["/tags/前端/page/2/index.html","e5948c29a1c684aedaaa9477065ebdd2"],["/tags/博客/index.html","40cf4e21b2b4b50b1c6050d735bc7814"],["/tags/后端/index.html","296c0700237bf0e090e47e2e69330a70"],["/tags/外观模式/index.html","5dc2b0a1db44b4abedb0e20a1f719762"],["/tags/容器技术/index.html","723af617f7daf156d2f4187809893da8"],["/tags/工厂方法/index.html","494a8a813d081d25c6ce9085606baa59"],["/tags/微服务/index.html","d9d57d5fdbdb6e3b5ddd43faf64ec5d4"],["/tags/抽象工厂/index.html","0f43476f48286bd81298ea073b8e4540"],["/tags/持续集成持续部署/index.html","58c228c22caf58d7ccd8c78a9a596747"],["/tags/排序/index.html","a10a53417944ef1ad76ec0fa43ae87d5"],["/tags/搜索引擎/index.html","0d165b447ff134fe8d0cc666826f9a87"],["/tags/数据库/index.html","b1e889448170c7c10cdf43adea3333ee"],["/tags/日志/index.html","212b0bfe855bb59c7e6b27bbadedb424"],["/tags/服务器/index.html","986a21a140edd539a24c82a9893d6e71"],["/tags/权限认证/index.html","dc2cfc9ea9b1102dc71352f6490b4ccb"],["/tags/查找/index.html","f508c4b41e5492415334337138907690"],["/tags/桥接模式/index.html","337f0a0f56a7af04aa7ecc564796dabf"],["/tags/模板方法模式/index.html","4b18b7a09f225818cc24bed3fea8ab98"],["/tags/消息队列/index.html","77a02b966441911e48d108f20f3e9f5b"],["/tags/版本控制/index.html","8bbf0ab1dacf47f17ec9ab6d4a5a8d6e"],["/tags/策略模式/index.html","b308ae344684a2a66a4189886cba2951"],["/tags/简单工厂/index.html","fcbe4f93f9f703c394fc178cf51a4aad"],["/tags/算法/index.html","58e97c84677870380a150097319a5fcf"],["/tags/算法/page/2/index.html","2037ce33e796b9126657a6fbdf0d73a3"],["/tags/组件化/index.html","ccb89efb1a2797fd4ac06feac68089f5"],["/tags/缓存/index.html","f91027a7a486afb93f0b053427608624"],["/tags/观察者模式/index.html","a9cf31cb55b57425bfbf43b6e34b61a3"],["/tags/设计模式/index.html","24bcadd064949e6350c827a2acf36cf0"],["/tags/设计模式/page/2/index.html","1d3d6b8161c618ff804a1059bf100ad2"],["/tags/适配器模式/index.html","52dd913f4bf1e7acf9aa7b13f89eb974"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
