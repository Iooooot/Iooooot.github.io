/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","f134fbcd1353d13f8d7c7d25e79e2398"],["/2021/02/22/博客的搭建/index.html","584860e99aba60892576af171c8761ed"],["/2021/02/23/如何使用markdown/index.html","8a5f54e84ad41aca52b4ddae71b39da4"],["/2021/02/24/mysql命令大全/index.html","72885b62d302751a9f7fb667de665a9d"],["/2021/02/24/mysql数据类型/index.html","62331e71cf67ff5cfdeed22431a6694d"],["/2021/02/25/Git的介绍与简单使用/index.html","12631e5574598458887e5de670c7817e"],["/2021/02/27/简单工厂模式/index.html","c1d8f300da9b705b016cb40c0fe9e3c0"],["/2021/03/01/工厂方法模式/index.html","a582abe8a03ca2c1ddb2a492aa419406"],["/2021/03/02/抽象工厂模式/index.html","b54a06af83fdb78d07c3b52ab0eeb7cb"],["/2021/03/03/单例模式/index.html","f456e58522c50a453f949c71789c35f4"],["/2021/03/04/观察者模式/index.html","c51b85480a6a63474e939b2a6516f750"],["/2021/03/05/适配器模式/index.html","aa8be2c2d4a5afa1cbab7eb1a8cf63bf"],["/2021/03/06/模板方法模式/index.html","c7889f3ce6428a7e97d7f5d8e38600ba"],["/2021/03/07/责任链模式/index.html","92a817c0aa4500c0131844c430f86c3f"],["/2021/03/09/代理模式/index.html","3a64e28011e711107d8b821982e2089a"],["/2021/03/11/享元模式/index.html","017f3012828591a144db5b227d8f0a66"],["/2021/03/12/外观模式/index.html","e6782ea1e153c20b1d0c24749c0579c4"],["/2021/03/13/策略模式/index.html","4f165142f28fd979105e090629d123f1"],["/2021/03/14/桥接/index.html","0b30495c7ca96987d37ccbe5f9c58c8f"],["/2021/03/15/LeetCode-多数元素/index.html","ee163951868cca1fb903c67682359623"],["/2021/03/16/LeetCode之汉明距离/index.html","fa2b0c76fcd81c43cc971cea7eb1044f"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","f1821bdb50bc3030674377671d149e67"],["/2021/03/18/LeetCode之两数之和/index.html","c24165a8b8297c6e627f8c53f1ee4370"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","799fbd75f4daed70be5079712920eab7"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","37a1c892b2b603a85f5b4e6ca741da84"],["/2021/03/21/LeetCode之有效的括号/index.html","ee28f9ded7da4ce26843c5eca89eb5d0"],["/2021/03/22/LeetCode之移动零/index.html","cf18205439c906ebcfc74da508eb6603"],["/2021/03/23/LeetCode之爬楼梯/index.html","7a4a6c1f173e749bf559b772b76e5a9c"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","5cc5cf198366e41a5f212c873c98c63a"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","f53b22c0f60054ee1bc99807ecc2a598"],["/2021/03/26/LeetCode之最大子序和/index.html","d108916ae68f367e7cf9caebaa1ce980"],["/2021/03/27/LeetCode之子集/index.html","cb23a9bce96e3d789c14b8d83f467893"],["/2021/03/28/LeetCode之合并二叉树/index.html","316c0f7eb4bf70e509255ef1eaa2db94"],["/2021/03/29/LeetCode之翻转二叉树/index.html","b3fdd68f636b38ad7c93ae86f862b879"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","0aac9d7565ae4a8a455811b5ecadc768"],["/2021/03/31/LeetCode之翻转链表/index.html","4465ae3f3278fcbea9d09396150cba4a"],["/2021/04/01/LeetCode之相交链表/index.html","0ac4b32759350e2cf1ad0d533ad2f1af"],["/2021/04/02/LeetCode之最小栈/index.html","312fded32f36c1b690e1168e2dbcc7cf"],["/2021/04/03/LeetCode之对称二叉树/index.html","0bf488c2ea76188e3d963db66560cfd5"],["/2021/04/04/LeetCode之环形链表/index.html","c2ce9318d741c876700de457ea51d540"],["/2021/04/05/LeetCode之二叉树的直径/index.html","1ca6969d3d454934e5ef4f60937b3613"],["/2021/04/06/LeetCode之回文链表/index.html","b514b07429a1f0a2fcbc31148d5dc6c8"],["/2021/04/07/LeetCode之比特位计数/index.html","6011a44ca00562ac6a79dfd71d93922e"],["/2021/04/08/LeetCode之全排列/index.html","7d74774f06744f1262c5655ef42a40c4"],["/2021/04/09/LeetCode之括号的生成/index.html","5898deff85827c395d2cc8b3cc833f02"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","9baaa82a318a64bbf0acdd9b6c70768b"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","70596b85bc6272559e25fc2349a8e07c"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","0d0828829f835897e3c97e301bb8e3c0"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","9b3d14117ac9a9222f4758eb631ab31f"],["/2021/04/14/Mybatis/index.html","a34b927b432c93caed4472874d46f21a"],["/2021/04/15/Spring-1/index.html","5c816c8aaca9db31e5973a8014ca18d8"],["/2021/04/25/Spring-2/index.html","d9a013834a78d6a6d3e6b7ced8e7cadc"],["/2021/04/27/SpringMVC-1/index.html","87c49500df2a1894c4655f4522df9a53"],["/2021/04/29/SpringMVC-2/index.html","d7aba3793ea053e3faaaf816b663835a"],["/2021/05/03/冒泡排序/index.html","53fee7fc8448ea6f84b557bc2f087d28"],["/2021/05/08/选择排序/index.html","371bce622895a30ef96c2490dab08c5a"],["/2021/05/12/插入排序/index.html","598a6a27705fcb7e139cfd59135ad1bc"],["/2021/05/15/快速排序/index.html","9b782861d7fc1cf83e10ed9b7856a2ce"],["/2021/05/19/基数排序/index.html","e0fedc11c3c90fded4a15baeb63ff23b"],["/2021/05/20/哈希排序/index.html","c2132caae398161d0593f35bd5551d14"],["/2021/05/21/归并排序/index.html","98ab6ece92cad3778f2f0ca4759888fd"],["/2021/05/22/二分查找/index.html","8ad64a44a1a4c94a06b24b5738eaa042"],["/2021/05/26/差值查找/index.html","cc23ab43fa6e516e343ba3b6753804fb"],["/2022/01/12/高精度大整数计算/index.html","ecb130e8a949e0918909f9aed2a41e03"],["/2022/01/22/前缀和/index.html","90455946f0acc219f48189779f31c109"],["/2022/01/23/差分/index.html","2cfd48651fd6dca0d65659df52c2b8eb"],["/2022/04/04/MyBatisPlus/index.html","a79949a30db6e181f2b268abec55b1f3"],["/2022/08/17/jQuery/index.html","95a00f10d1263781987448f86e2ee845"],["/2022/08/19/JavaScript/index.html","0572d078b02eff35af40ddd51a14852d"],["/2022/08/22/Ajax/index.html","c985e03cb9b5d11450160a7be9d30b92"],["/2022/08/23/Promise/index.html","2bf13ec78c6afb074ce3e1a0a3b9fd2a"],["/2022/08/24/Axios/index.html","bc58a831aa5976687dd61acf5aa7b7e3"],["/2022/08/25/H5本地存储/index.html","1c70a6f37b8140d61e9da754a91d9be4"],["/2022/08/26/mock/index.html","7daf3e7f880b7ef8b588bcf7f4986937"],["/2022/08/31/VueJs/index.html","9aa68e1033bdf431109608062a36ae8d"],["/2022/09/01/vue组件化/index.html","e31873dccfbe5337b041fc76aac49018"],["/2022/09/04/VueCLI/index.html","38c7c4b0184cf1caa88af3f629d3130c"],["/2022/09/07/vue实现动画/index.html","57a68f7779335f4ee7a6659418533cb5"],["/2022/09/09/Vue响应式方法/index.html","d4539a8cface69afa2f8783d511d0dcf"],["/2022/09/10/Vue异步请求/index.html","394f92fd5305250617a1a9af99da5d3f"],["/2022/09/11/vue-Router/index.html","1694824099d3be734d31240fa8f50197"],["/2022/09/13/Vuex/index.html","6da4a2be593d48f82d7c1d1605a8eb6f"],["/2022/09/15/SpringBoot/index.html","d892456120285785676e8d2f208024c0"],["/2022/09/16/SpringBoot配置FastJson/index.html","c0e15bb59567ed27873752c44bfd8368"],["/2022/09/19/SpringBoot参数校验/index.html","7a7b81fc95406b5ee81d598b46320a1f"],["/2022/09/20/SpringBoot的异常处理/index.html","e2ff0eee2ae10a6e9cacd645d6f1b0d1"],["/2022/09/21/SpringBoot统一响应处理/index.html","4355a35d5843764712ec02c9b55f2255"],["/2022/09/28/Linux/index.html","92c692146600fc3cc467598e43cf3440"],["/2022/10/02/redis基础/index.html","7f1de6a60a179d23158e030e0bec8e22"],["/2022/10/03/Redis缓存/index.html","7db44ec8d2df219eff23f6cece465ea2"],["/2022/10/04/redis缓存穿透/index.html","277bfb1d6b30940ac8ad2f843b9b9202"],["/2022/10/13/Redis缓存击穿/index.html","56897daecce7dca68050c25e21504781"],["/2022/10/14/Redis缓存雪崩/index.html","b26049a5be2eb275e4ef7707c977bcc1"],["/2022/10/17/Redis集群/index.html","71eb347bcc2f6e61705573517c77d31d"],["/2022/10/18/Redis哨兵模式/index.html","a80956131ebbbbc852c0bb97ce5127f9"],["/2022/10/19/Redis主从复制/index.html","6cd3f9a832d8417e47b10946cc4344ec"],["/2022/11/03/Spring-Security/index.html","50b1a740e9fc66e1dd46e672c49c55a4"],["/2022/11/08/SpringBoot日志/index.html","bf8d9b50156e847f05f32a70602bf660"],["/2022/11/11/Swagger2/index.html","fe6703a1a43728c5cbcdd54f6202ba47"],["/2022/11/21/Nginx-一/index.html","995d77b35c7269f4cf0d17bece1169a0"],["/2022/11/23/Nginx-二-代理服务/index.html","ddfbff5b47484421be2ce0b7716beaaa"],["/2022/11/24/nginx-三-负载均衡/index.html","f0f526460f972abae0bc93c153c3ebf7"],["/2022/11/26/nginx-四-缓存集成/index.html","8898e2db1c27e15204dbdcc9d6e5749d"],["/2022/11/28/nginx-五-动静分离/index.html","00f61509309e440ab9f172776e61f674"],["/2022/11/29/nginx-六-制作下载站点/index.html","7a3262af5e1c1c3895e9825b8b3e63c7"],["/2022/12/06/docker基础/index.html","615d2aabc4d483e528fd76943640daa2"],["/2022/12/09/Docker高级/index.html","0d2d931455947df1419001bf05402aa2"],["/404.html","762b34ce3dd6b8131978bc6d69184917"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","569ea050793e18badf5e51fb9fc80e27"],["/archives/2021/02/index.html","c68aef83e6757f50dfb9277ba5dd771c"],["/archives/2021/03/index.html","86754c86ad573451b97fa6444e9d185f"],["/archives/2021/03/page/2/index.html","fa98b6f61d68f6796573282cb147ec43"],["/archives/2021/03/page/3/index.html","044444d9d6f0fdbb3634ba2240c1aa9f"],["/archives/2021/04/index.html","461638e0af189f35cc92e098f4cac2ad"],["/archives/2021/04/page/2/index.html","05f87938c1066a7432e8a7fa88b74b69"],["/archives/2021/05/index.html","69bfe14818a4eb7f9bb111d8d2ae1a67"],["/archives/2021/index.html","f8b3a1e49c4a9b3cdf2ecbf1cfc8d18b"],["/archives/2021/page/2/index.html","e2f807146aa320d86caf43ab7642fb1b"],["/archives/2021/page/3/index.html","3da715f994313f6f2e235f6ba5c5775e"],["/archives/2021/page/4/index.html","d76d9976a30d1be7835883d4711d7f08"],["/archives/2021/page/5/index.html","0b9d4ece5dee9040f2dd5fa888394e70"],["/archives/2021/page/6/index.html","5f79a8aa56ec271c50b4f2d64e23f466"],["/archives/2021/page/7/index.html","95dd15a4627dc28bbf33980cb1eab826"],["/archives/2022/01/index.html","f92068a903bcdf86c8a8f992fe296b94"],["/archives/2022/04/index.html","a945b215a7d735205b6896adb67c8654"],["/archives/2022/08/index.html","d4daa0a18717ce44cfad7effaaa10e0e"],["/archives/2022/09/index.html","7bc14e745941367e194656439dd65d0f"],["/archives/2022/09/page/2/index.html","835430e2e5b42626d104f31443a639c0"],["/archives/2022/10/index.html","a69ac8fea62720349fbd15bd7f6d0eed"],["/archives/2022/11/index.html","93dedb6938f017bc92b9bf34e2bd6500"],["/archives/2022/12/index.html","8d47dfedae75f22590ab5f984c2b46b8"],["/archives/2022/index.html","14ee576ef2fa25f85f4037a31bcb5b42"],["/archives/2022/page/2/index.html","6c47284c3f07d26b113ccecd8954285f"],["/archives/2022/page/3/index.html","64e91fdc45a9454dbc17cda5728911e9"],["/archives/2022/page/4/index.html","b49924d4e531a526bcc5ebaa8018334e"],["/archives/2022/page/5/index.html","4e5fcab7ccbfdc2f05f8691b80f03d64"],["/archives/index.html","5ec366b1f250d829d51939a4a72aecd5"],["/archives/page/10/index.html","ef57c49823309a811ca1e71bfa7d6686"],["/archives/page/11/index.html","c099aeae769b50dbcb782bce7b7f82c4"],["/archives/page/2/index.html","7170c7f6e9826c88d98384b51ddb3820"],["/archives/page/3/index.html","acc3d4f15101ab0da1263f763e9baee5"],["/archives/page/4/index.html","adced3e8d0e1e49d9ca4d9e837a52084"],["/archives/page/5/index.html","7280d570c9a6497beccdd83d57be3bd1"],["/archives/page/6/index.html","6f79d293300b217153e378e23ae72dc6"],["/archives/page/7/index.html","32fa2a0ec11863cecc0cd5ab4cfe9adf"],["/archives/page/8/index.html","23944eb82ec2ee97b190c0ddb66a4c1c"],["/archives/page/9/index.html","c52b552d48e0925483082bbc5c334e91"],["/categories/Docker/index.html","0ef94c9a9aa937c49251186a9e493256"],["/categories/LeetCode/index.html","59fb8d2b6389e7a55d033e88c58f65bc"],["/categories/LeetCode/page/2/index.html","4e0b0726c7d0f25671bd11cd3f672032"],["/categories/LeetCode/page/3/index.html","d642285f1bd8c3857e7b0eb2acc7c7a1"],["/categories/Linux/index.html","a47de28e67a75d6d2e918aef837da237"],["/categories/Nginx/index.html","f5b0291a31dfd9336a9eb9334d458831"],["/categories/Redis/index.html","20a45bd21db132963eed807a6e921d82"],["/categories/SSM/index.html","775d6517b71041086a16c6822086a16b"],["/categories/Spring-Security/index.html","e3f8d9e52040edffaad902807cc372ae"],["/categories/Spring框架/index.html","0a347566a40b86770d72f808e9212d28"],["/categories/Spring框架/日志/index.html","0771c92ab95a388936d70a9e562eaf4c"],["/categories/Swagger/index.html","1c1209e041d407287cd92dd29c6e6d75"],["/categories/Vue/index.html","53867d56dd2f050caaa026b0e246fe6b"],["/categories/index.html","56c9d777be6023185dae52713ac40e69"],["/categories/前端/index.html","111fd12769e256ef5f6972570e168583"],["/categories/博客/index.html","8de55c33e4fd59686ab27b3b98c13752"],["/categories/学习路线/index.html","7d47b563fd08fcc49946ff5bfafca33d"],["/categories/工具/index.html","34370a5e56e094f5c3406535f3707887"],["/categories/数据库/index.html","36e66efc18d92a92aed71e4060064a89"],["/categories/笔记/index.html","ed003b829b7fb4f4f531b6992601a6dc"],["/categories/算法/index.html","ee14f0eec0e562da620fdd3677ed1344"],["/categories/算法/page/2/index.html","8dd596c2799eef47c74e947fa6ff60f8"],["/categories/设计模式/index.html","998fc5b655246a995f5fbdbffd57f573"],["/categories/设计模式/page/2/index.html","3bef64331f37db60bb845b88db027ffa"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","af724cd66cd76d25043eed09f9174f93"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","ecdb8bd55c168ce27a6ece63f4226227"],["/messageboard/index.html","b0ae51145697696f2228ec4a89286983"],["/page/10/index.html","1d9c63f197695ad94250855863ea772e"],["/page/11/index.html","cff146d7c7337cf0ea69e7c986523568"],["/page/2/index.html","2f5c826059fff043a0374f69a94f41a0"],["/page/3/index.html","6ab36aa91300fe88b6d385940586068e"],["/page/4/index.html","ee7144db832a26266c8fc60a8adae2a2"],["/page/5/index.html","37bfbdc85f119f4077b001268295a45a"],["/page/6/index.html","66831ff838d128a33135bb68d2cc44d7"],["/page/7/index.html","056a09c8685ebad7025eea8ddc414a15"],["/page/8/index.html","a4ba1aa9bbc0cf33f1189549f44c239f"],["/page/9/index.html","1f102c92eae8432ee11df327a8754f86"],["/sw-register.js","755558afee1f7e78451d9da820c80fef"],["/tags/Ajax/index.html","20a450693950b6242bb8964756f208a6"],["/tags/Axios/index.html","7d3a36544da4e87580dc8f6e408bf0c8"],["/tags/Docker/index.html","dfa5ccac444d9b1789c102a364981f30"],["/tags/H5/index.html","b04867744a6d18b2c0ee5e5c415f6dd9"],["/tags/JavaScript/index.html","03fb3ebe2d3a1c1e1db41d59b2ed0295"],["/tags/LeetCode/index.html","73d1d8d5d746fbb538a7deac1e14d301"],["/tags/LeetCode/page/2/index.html","2010ccc9be9a6f467f68fb46bdd84b8b"],["/tags/LeetCode/page/3/index.html","6c6d8f8d13c29ea4d20686bb87105d13"],["/tags/Linux/index.html","ca19cd0003bff3e2bcdf0f796dcaaf44"],["/tags/Mock/index.html","a4de26ad11b7ea5aa6c0d494548ab0b8"],["/tags/Mybatis/index.html","f28550417bfd9a27e1d466a81d561f86"],["/tags/MybatisPlus/index.html","ee2ef772dbe5ea559ad12f02eafb7931"],["/tags/Nginx/index.html","05a475d4198b9e03975ab67b99098b79"],["/tags/Promise/index.html","346c844f71df43f4c870afb00bde5459"],["/tags/Redis/index.html","f3766604210c6092dfb389f5bf162c78"],["/tags/SSM/index.html","10f030655dac316ad3f18e8db43fcc3c"],["/tags/Spring-Security/index.html","7bbad05634c0b833da00bfa1c5af1e3a"],["/tags/Spring/index.html","b0a9ff823842001f75fb5872ce8f784f"],["/tags/SpringBoot/index.html","b20cf07f5818767960566d1215d1894e"],["/tags/SpringMVC/index.html","44461b2cc114c914906c96e14082871a"],["/tags/Swagger/index.html","9c771bd4fd4f5f512e2ad00e185d319d"],["/tags/butterfly/index.html","f227e1c872f84fd2e225709e69400fb6"],["/tags/git/index.html","c90ac4bef26cad82ddae0b199d368c17"],["/tags/hexo/index.html","27e0cb492d774fdd8e549c39644b817b"],["/tags/index.html","7ff9415f011afc845d804359f464de84"],["/tags/jQuery/index.html","1735f7a4112e6c6d1e3a545944018859"],["/tags/java/index.html","84433f88e05c46b7b46c8fe348358ea3"],["/tags/markdown/index.html","57f9a9c96e4c2b4a9eb94bbaa381c3cb"],["/tags/mysql-数据类型/index.html","4a6f36e871756fff3cfdaed49a28a239"],["/tags/mysql/index.html","fe5278624878f7db414dd88dca3b07b5"],["/tags/typora/index.html","d77663939152f6ee94e1a011d595147b"],["/tags/vue/index.html","0ddba8354c2b2c4250dd56ea779b308f"],["/tags/享元模式/index.html","1472e67509b481f2d165d316c50074e8"],["/tags/代理模式/index.html","3d4b82a38500b4949541bb61e79b7691"],["/tags/分布式/index.html","6a17b1deaf3ec6007ab10e26b56ae13d"],["/tags/前端/index.html","3c8476443c2890680304b72d0eb57ed3"],["/tags/前端/page/2/index.html","6649326f63c4797ac263f5883d08d712"],["/tags/后端/index.html","38ec058031369a8da389ca4445e2195d"],["/tags/外观模式/index.html","63bcb20c311e36e2682314d592419285"],["/tags/容器技术/index.html","4c3c0b531f581bc0b14e562426e76bad"],["/tags/工厂方法/index.html","bf00c2a3e36c79909f118b1946f8935e"],["/tags/抽象工厂/index.html","a3d898e4a3c4a5371d0252ab9625c50e"],["/tags/排序/index.html","2cc5dcbb8cafa66c8a93ceb899acdd84"],["/tags/数据库/index.html","022af3bdbe95dd81957f47379c7b4c3b"],["/tags/服务器/index.html","e8dc458d29a782a48b4b030645ea3b39"],["/tags/查找/index.html","b749e195e0fe9befaa720c18388da75e"],["/tags/桥接模式/index.html","b1b490994ae566b9b4fafa60f0974e70"],["/tags/模板方法模式/index.html","ba4aa8c98e97647813fb64d6baa34d8e"],["/tags/版本控制/index.html","3021853f2aacdee56a5c91cfecd3d33b"],["/tags/策略模式/index.html","3c3adc70d2e7c4b481abe70e4de6e67d"],["/tags/简单工厂/index.html","2b910f38421c3c057c58054e33eea39e"],["/tags/算法/index.html","1424358c0078dc31ab48b06828aab3a1"],["/tags/算法/page/2/index.html","05518cf1781abd1b62956820d490f271"],["/tags/组件化/index.html","7358ef8a5eada9ac2a0e0813d3806f50"],["/tags/缓存/index.html","f24e6bb30a35a8458f5a3ac0b7a520b3"],["/tags/观察者模式/index.html","8d296640dbb0279a4b71bcdc4d2d3f93"],["/tags/设计模式/index.html","5c3235fb0ddfd2a508023c9a39ea40df"],["/tags/设计模式/page/2/index.html","1e3fcbdf1da86310d34a4eb309189d7b"],["/tags/责任链模式/index.html","1b231a28e9a25b6823698face9801779"],["/tags/适配器模式/index.html","280e5ce5693c1c176ff0f2c1ef983336"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
