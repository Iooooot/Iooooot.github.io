/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","2eb7e17af0d74dcaa7861a9460ac1cad"],["/2021/02/22/博客的搭建/index.html","809369d84d96ec48e259a4f24697daf6"],["/2021/02/23/如何使用markdown/index.html","a704f5b5df8e037c7dac472283a118e8"],["/2021/02/24/mysql命令大全/index.html","d0b85c0c31a60dac667a114d4d40c96f"],["/2021/02/24/mysql数据类型/index.html","c216d68c6a6a6166d9ee297dd256a7d5"],["/2021/02/25/Git的介绍与简单使用/index.html","025b762034b0077676b3e82b5124b7aa"],["/2021/02/27/简单工厂模式/index.html","30de63197d76493964767cfab4f38646"],["/2021/03/01/工厂方法模式/index.html","9c90cfd39fb08beb79b807fc554eb042"],["/2021/03/02/抽象工厂模式/index.html","187db046dce8d4a537958a661d62510f"],["/2021/03/03/单例模式/index.html","d8ad4a5c8d6311bc057dd00b92ce7a83"],["/2021/03/04/观察者模式/index.html","a286686920ca06743731b78d0bff1d4c"],["/2021/03/05/适配器模式/index.html","41a1b33c86a36fff8dcccb4d85875834"],["/2021/03/06/模板方法模式/index.html","dc1db2897884a8a17303f25dfcd4b722"],["/2021/03/09/代理模式/index.html","6244fb66eb986378119aa99b4810bac7"],["/2021/03/11/享元模式/index.html","371031dfe58fecd2988603f048a679f1"],["/2021/03/12/外观模式/index.html","5ba0052596f79c76edd4762c91f230b8"],["/2021/03/13/策略模式/index.html","d8f6a753ddb7d38b1df6906890bd1521"],["/2021/03/14/桥接/index.html","102fc9a57bbcefc22d2fcb86baea151f"],["/2021/03/15/LeetCode-多数元素/index.html","6bd0db843451a95ffac01f19984fb23c"],["/2021/03/16/LeetCode之汉明距离/index.html","e8e1d17bd0afd0d688de177d2bb1c2e4"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","0dceef75e2eb8da050e7d8d5b8ad26c2"],["/2021/03/18/LeetCode之两数之和/index.html","7ee68fbb0df358fb945619b2c9c40dfe"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","fbce93ffa8356da0c945e08bcf638968"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","7e8c53c772918a9d58de0e59e4348455"],["/2021/03/21/LeetCode之有效的括号/index.html","f3671cd6dab92eb398a3ba0299952c18"],["/2021/03/22/LeetCode之移动零/index.html","92682c69b4ad6568dba0135c5bb4478a"],["/2021/03/23/LeetCode之爬楼梯/index.html","365beea3809d09c073d39514aa8eed7f"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","e074cad7e11321339a66fe10b7101548"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","a6f7f0f5caa2d63c13a4c139d6bca5e7"],["/2021/03/26/LeetCode之最大子序和/index.html","44a09c2fcf451746e5166d224ab3d895"],["/2021/03/27/LeetCode之子集/index.html","4fbce745ec4ddfe2ab21ec3143eb1582"],["/2021/03/28/LeetCode之合并二叉树/index.html","9253a0380182d84b4172f086a5436525"],["/2021/03/29/LeetCode之翻转二叉树/index.html","568cae2d922881b5ed1917ddbf49113a"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","f4573af0182554cde39976ea396727c1"],["/2021/03/31/LeetCode之翻转链表/index.html","fda215f7ed643fc7983ba2ecee63dea3"],["/2021/04/01/LeetCode之相交链表/index.html","9f6e95bb4edc4e5bda4d02a87ceaed95"],["/2021/04/02/LeetCode之最小栈/index.html","0f00118aae8853f7ce4db4ac6a049cf8"],["/2021/04/03/LeetCode之对称二叉树/index.html","3cf4618f6cc3b05cf13723481a1ca85a"],["/2021/04/04/LeetCode之环形链表/index.html","332f9d3b354b9cea766c419392890364"],["/2021/04/05/LeetCode之二叉树的直径/index.html","e5552acea1be3c8cb6daad9e63ba4384"],["/2021/04/06/LeetCode之回文链表/index.html","f7f168a5b84af82e813d4ddc41584d03"],["/2021/04/07/LeetCode之比特位计数/index.html","b1524ffe5043f55c8aa62e9415c1bc40"],["/2021/04/08/LeetCode之全排列/index.html","41108177490d8bb20a54def3899713aa"],["/2021/04/09/LeetCode之括号的生成/index.html","6a06dc0590dacd9d4194686484137aef"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","f1940f1ed15714d415570f557b2d0496"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","552153ce474da0853623cec79b94f2ac"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","7667e929a82ac3fd9735701f54826d2e"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","0e41560cec99be6c020a2fa2f3078731"],["/2021/04/14/Mybatis/index.html","9c038583199670e3f7e6657fb6c8516a"],["/2021/04/15/Spring-1/index.html","cfd0e9d6ba768d656ff63a7824f1df15"],["/2021/04/25/Spring-2/index.html","f5c9a53d9b53da323386673164ae05ad"],["/2021/04/27/SpringMVC-1/index.html","6aa9a4c260f7ee5f965c1837bc4fbab2"],["/2021/04/29/SpringMVC-2/index.html","d6017628025012c1191ee6129856722c"],["/2021/05/03/冒泡排序/index.html","9e88000ca31f5cb4d1f79704a1b1be22"],["/2021/05/08/选择排序/index.html","83757b80cc8c719039dbd15cb76ee4b6"],["/2021/05/12/插入排序/index.html","69308b5a991d333ca1aadd0b0471b12a"],["/2021/05/15/快速排序/index.html","7f9e00fe8d89890d9767cb677c690ffb"],["/2021/05/19/基数排序/index.html","4de02009fc3e6b44238f8480525eb209"],["/2021/05/20/哈希排序/index.html","94526b936e127155f20d10ca2c526a8b"],["/2021/05/21/归并排序/index.html","36ad7cc0243b9b1b3d5400ced792be13"],["/2021/05/22/二分查找/index.html","195648c4cf9e1d0bd90b5574ca775230"],["/2021/05/26/差值查找/index.html","21c8959c150c7ba38754a1a008ec0968"],["/2022/01/12/高精度大整数计算/index.html","9f1f6f66621ded1a3497f41d327922d6"],["/2022/01/22/前缀和/index.html","3ff6734439ddb86f2ef01a03fe8b96fb"],["/2022/01/23/差分/index.html","011a265a5ca6e28866b36b4befc91560"],["/2022/04/04/MyBatisPlus/index.html","59911f46964311c17a6b6d6553786fbd"],["/2022/08/17/jQuery/index.html","6364ff3b81874829e479f1c724929bf3"],["/2022/08/19/JavaScript/index.html","cb0afe05746d7c2c3521e409385bad9f"],["/2022/08/22/Ajax/index.html","faea2edd9a43e8edad0f3dce63049e78"],["/2022/08/23/Promise/index.html","68f756e77ae9a5bf1f48a804f82bc451"],["/2022/08/24/Axios/index.html","160c6d89d339811fc4a457c20ad75cab"],["/2022/08/25/H5本地存储/index.html","83dbd0de1e9b34d064d03c9ef8646f3e"],["/2022/08/26/mock/index.html","25f42f275d82cf3b7ac0d3d3bcef40f1"],["/2022/08/31/VueJs/index.html","4179a68826b00c02ece9761184ed6364"],["/2022/09/01/vue组件化/index.html","62774b4f59e787c37d670dcc6720293e"],["/2022/09/04/VueCLI/index.html","c8494c9bfed924cba6781f5e53729ce2"],["/2022/09/07/vue实现动画/index.html","3488ce07d818006470732f08597819f3"],["/2022/09/09/Vue响应式方法/index.html","cf866fa8092ea0d88e7101f6b4c1670a"],["/2022/09/10/Vue异步请求/index.html","ef9cdc88156dcbeffbf4febff9ced44f"],["/2022/09/11/vue-Router/index.html","19f48ec7a0a37b6485f9e0bfe18da4ff"],["/2022/09/13/Vuex/index.html","77b7a08e2c53c1bb1a13c1c2d3c94a08"],["/2022/09/15/SpringBoot/index.html","4fa32c0a4596b234e959503f8348452b"],["/2022/09/16/SpringBoot配置FastJson/index.html","87b8ff17366799226ba15c02778e4248"],["/2022/09/19/SpringBoot参数校验/index.html","7393d9fdb8c05c59612153c2729bc4ca"],["/2022/09/20/SpringBoot的异常处理/index.html","ab5c06ccbb6ec8501f2d903f1e66879a"],["/2022/09/21/SpringBoot统一响应处理/index.html","8a544ae79e1df5abec5df8f401901863"],["/2022/09/28/Linux/index.html","b5169aa6a875d1cb77a6ee7ece5aa3bd"],["/2022/10/02/redis基础/index.html","c63792f03861bbd4532d2382a09b1d8a"],["/2022/10/03/Redis缓存/index.html","d8a125cab47a7b25e053498141d4fd1c"],["/2022/10/04/redis缓存穿透/index.html","9dfed4391b935b5567abd47cc2bf9e34"],["/2022/10/13/Redis缓存击穿/index.html","166804c256b4f63ad9841584183f7d92"],["/2022/10/14/Redis缓存雪崩/index.html","6cc264f4c57f0e4fa2eb5b1a9e2b0d62"],["/2022/10/17/Redis集群/index.html","2acfe4e6365e4398b7089a670f826bc6"],["/2022/10/18/Redis哨兵模式/index.html","144a2c428721bb8c9471f6efdb4858f8"],["/2022/10/19/Redis主从复制/index.html","86c30c6342525ca4264e4a651673f317"],["/2022/11/03/Spring-Security/index.html","7fe5edb5ba5b2fd0a960a7c294663b6f"],["/2022/11/08/SpringBoot日志/index.html","ddde8f9d362cdf0132f81d4231f2391b"],["/2022/11/11/Swagger2/index.html","f9e57ba9aa3ebef28cc8cc60b5ec0344"],["/2022/11/21/Nginx-一/index.html","3cbe115a655d280c992531b278ac41c1"],["/2022/11/23/Nginx-二-代理服务/index.html","6baa4b33fd6fb4ed67ddbce5cb9f319b"],["/2022/11/24/nginx-三-负载均衡/index.html","987947d2b3266e89c243b7035386a91a"],["/2022/11/26/nginx-四-缓存集成/index.html","6a7aec83798c86a5962460917578085c"],["/2022/11/28/nginx-五-动静分离/index.html","07ab4a4c79d52f94df00c675d1e42b5d"],["/2022/11/29/nginx-六-制作下载站点/index.html","f2dd748a198f7fe6da0ebdd36ebd8740"],["/2022/12/06/docker基础/index.html","a9b63308110a6103c63ddd6af9947946"],["/2022/12/09/Docker高级/index.html","c101ad642823f0e8c0b724b16f46aa00"],["/2023/01/04/MongoDB/index.html","1a8d77578d3c16b3bef97f9dc114e387"],["/2023/02/05/消息队列/index.html","ed5700fff28421ee6e45fb3d16440112"],["/2023/02/12/RabbitMQ集群/index.html","36a0ad8a34055130f62a2a76470ab5be"],["/2023/03/10/CICD/index.html","c0690edeb6a209c5f6ef032613801cc6"],["/2023/03/11/ElasticSearch/index.html","f171502c5746f6a215a0843ab42f0b35"],["/2023/03/12/ELK日志平台搭建/index.html","97f1dafd3d44c4a36f42410128574b28"],["/2023/03/13/NIO/index.html","cf22952ba84b62d2207afcb54073c2d9"],["/2023/03/14/Netty/index.html","95f585f402e388db5b3c48315e5959bc"],["/2023/03/15/SpringCloud/index.html","c0c8b0583d5b9e77338b68067c748729"],["/2023/03/17/分布式系统认证/index.html","8adf48dc0c7a8b4a3455ed8ac673b6c0"],["/2023/03/19/JVM概述/index.html","b8be692f29453e260412d9efe9555b91"],["/2023/03/23/类的加载过程/index.html","c62dff864b36aa20404745b9e0cec743"],["/2023/03/28/对象的实例化/index.html","85a15c4ea596e8240d8ff3234e8095e3"],["/2023/04/01/运行时数据区/index.html","18067b9d351ecd606360d2bdbead8983"],["/2023/04/04/执行引擎/index.html","ae57b899b41bc681e7ed91253662024a"],["/2023/04/06/对象引用/index.html","d03902b80f34cd111c3f1ddb1eaa14f0"],["/2023/04/09/垃圾回收/index.html","7c7363ee0736bad0f1929af6bf3d4e78"],["/2023/04/11/垃圾回收器/index.html","a4eb3225183159aca51bbd7dc6d6021b"],["/2023/04/14/Class字节码文件/index.html","028c44d44111a5393c12a6b4edf9d642"],["/2023/04/17/设计模式总结/index.html","fe43760c2d5f7fad49b6f2de1548474b"],["/404.html","5244bbf2ee75d4d01ff67537da259223"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","6cb625ab74e83c2ed3296cb4fe4258c0"],["/archives/2021/02/index.html","3aa42bd739a33775cd9189cfd44f0c70"],["/archives/2021/03/index.html","f54f37114f924a9b7bc3b69b9b5cba4a"],["/archives/2021/03/page/2/index.html","3d900e43f948906e1fd61ae29dc81022"],["/archives/2021/03/page/3/index.html","10d22014f67d4838211120edb7b3e2ae"],["/archives/2021/04/index.html","e4ecac66d6eb7d1c099f42046e3aa9a1"],["/archives/2021/04/page/2/index.html","d3b76239d8f400ff7ec8b9ca3fb12c3c"],["/archives/2021/05/index.html","e4b2d8b0bad290c1efe6c21bbf9f0bc8"],["/archives/2021/index.html","5fbec1cdb9fa5fcc02f051395da6519c"],["/archives/2021/page/2/index.html","37024b16c0c663cbbd7ea54045b6d179"],["/archives/2021/page/3/index.html","a0134f3764530078819e1e5465fc5385"],["/archives/2021/page/4/index.html","11fde7b3b5d2de32d1f4f20f60fd8fee"],["/archives/2021/page/5/index.html","ddaef94e6f4ea1dc8526b50c7974a148"],["/archives/2021/page/6/index.html","122269b87b3be82befd3033c01edd36f"],["/archives/2021/page/7/index.html","63eadbab816a8bbf7fa5fd9e9c1ad6f1"],["/archives/2022/01/index.html","cdcae577729f48d64938d39a4f3389cf"],["/archives/2022/04/index.html","87a74f289c678325c3d53cd24c484aaa"],["/archives/2022/08/index.html","8127a0a579690a59e1b172d7a07a9cc2"],["/archives/2022/09/index.html","ace1eab54323cd353c694b4e8214329f"],["/archives/2022/09/page/2/index.html","de8696be331f8a63c55c637804d8702e"],["/archives/2022/10/index.html","055ca673e65156948bc7537c68f2d125"],["/archives/2022/11/index.html","fcf6377480ae5bf760d02912b7c864d6"],["/archives/2022/12/index.html","fd5c246641a43d2eeb2442fadef862f8"],["/archives/2022/index.html","b91ac39bfb1e09b437c021b964ca82cc"],["/archives/2022/page/2/index.html","c38c0847e02616a8c5f84b32666e5716"],["/archives/2022/page/3/index.html","eac42aade9dd26013ac41eca432bc526"],["/archives/2022/page/4/index.html","93d98f0461ecfd4e67759616f78516e3"],["/archives/2022/page/5/index.html","7c8473e66ca9cfb838037b921fcd90b8"],["/archives/2023/01/index.html","7dc0a1a128ac096d30823a3795489f90"],["/archives/2023/02/index.html","fcc36d88933f45253cb6ffd06b74c60f"],["/archives/2023/03/index.html","7efe5680e45c3b2854f52678a719dcb9"],["/archives/2023/04/index.html","d6c3e3878f2d52c5fe865c958f5ea75b"],["/archives/2023/index.html","fa344dc8a5bd1b9e4a36254294a32f22"],["/archives/2023/page/2/index.html","02c9cd1145eb450bfe27d2bbd2966707"],["/archives/index.html","add5750c9ffa883d1f286cbddedd3d4f"],["/archives/page/10/index.html","88c81b4984796c05e5723a4c987a8dd1"],["/archives/page/11/index.html","366a54a973dc508aa1c2480ccc7842ee"],["/archives/page/12/index.html","305192e6ddcde447bd6fa181042f2828"],["/archives/page/13/index.html","e41852e6497de65063e158494f9f5918"],["/archives/page/2/index.html","d23f6f9e444c7b3288607053296f59bf"],["/archives/page/3/index.html","b8608b7545ba0c362b279e80c5484bd9"],["/archives/page/4/index.html","09895521c2b11900d6814f1468accef4"],["/archives/page/5/index.html","6475dba3d06a5d9b1831b467174c63ee"],["/archives/page/6/index.html","48baca422db1ba8eab755a4f8e98b3da"],["/archives/page/7/index.html","db1e7a0b245fdff9e3d59c9fef6a802c"],["/archives/page/8/index.html","ebbc536434de7f81f10b43a16316b8aa"],["/archives/page/9/index.html","84df9bee1812245172f067e3b18dd3a9"],["/categories/CICD/index.html","fef37d96e477114614e366a8286f50b5"],["/categories/Docker/index.html","c8f489ca78cd72a8c72f15e2e60bcbeb"],["/categories/ELK/index.html","048772a70ca385ca997fb0531e064452"],["/categories/ElasticSearch/index.html","65acfd81e8897646cc583facf6fddafc"],["/categories/JVM/index.html","47135f034f01ce6fcfb64223106c792d"],["/categories/LeetCode/index.html","0cc7740d94a828118e508d5d92575b5f"],["/categories/LeetCode/page/2/index.html","4c30876e38a5bee56db205896060bc0d"],["/categories/LeetCode/page/3/index.html","945c044f897ba7daf6bcfe69bd688b81"],["/categories/Linux/index.html","908d6d28562408a3164c4f142fb43fbd"],["/categories/NIO/index.html","4e3d19e25c38d2d15e5919d42216f3e2"],["/categories/Netty/index.html","91ed5369ef3ac8752b272e8ee6c8f75d"],["/categories/Nginx/index.html","c526ecb4e3e3a7234ceedc55ee18e902"],["/categories/Redis/index.html","d5750113c1c28e7ac8685a6ee02461db"],["/categories/SSM/index.html","c0156248e897a5f3349826f91b6d0431"],["/categories/Spring-Security/index.html","50e57e63f32eff611040275ca4c9a02c"],["/categories/SpringCloud/index.html","ff7c9b5f07faea8e959a89f3de594f91"],["/categories/Spring框架/index.html","4f2ce58634cd45264173fbd0dbe4be03"],["/categories/Spring框架/日志/index.html","4452a824e2424bb8a135ef2c8805a036"],["/categories/Swagger/index.html","76873374cb793bb5fa5e0147dbdf802a"],["/categories/Vue/index.html","f8f520bd8866fd8e116b570abcc47894"],["/categories/index.html","4d033272c88edc9fa6179da95f60239a"],["/categories/分布式权限认证/index.html","463b317706f23fb15a3b4008ae145c6f"],["/categories/前端/index.html","04ed5b53b388f75dcecb292721c640d7"],["/categories/博客/index.html","e41953f119f00e879bd1d4abae268512"],["/categories/学习路线/index.html","64a3532a3e5a34c902b969fa2e7bef88"],["/categories/工具/index.html","dea46a0651a2d4c9e0cd078efaaab368"],["/categories/数据库/index.html","f316d34bb50259f25174748fd681423e"],["/categories/消息队列/index.html","18d7e4aec17cf0f05d548a2b8fc3db07"],["/categories/笔记/index.html","07a9b42f5c0cf2fd301bd1d26d6ab494"],["/categories/算法/index.html","b57618af04d8918ee532bffc002cb9fa"],["/categories/算法/page/2/index.html","2293e8586e7f2c263a27cfe486ad7089"],["/categories/设计模式/index.html","50810210dbff57be5eef59ef08dad10e"],["/categories/设计模式/page/2/index.html","5d6c326e3101276c0e410176a84b1745"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","815f0c7e5ed5b052b1ce80fe913a5cad"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","13872a67e0164fb0a9801b5b0daeaa03"],["/messageboard/index.html","c3196521a28a75f7256507b982701a8f"],["/page/10/index.html","a7091fc4435930230ec95d40b63bb9ad"],["/page/11/index.html","a30775e17ec04d38c9cd1e0df0fef065"],["/page/12/index.html","fc3d30292203115899d757724799965a"],["/page/13/index.html","a828b529fa6f8cfddeea4f92860a6e12"],["/page/2/index.html","5c23db562682f29c3ad87133ecde1302"],["/page/3/index.html","2ad387b5334c87e09b74b05f95dcdb00"],["/page/4/index.html","ec5aa0ab03631f5ee7518960e92c5bb7"],["/page/5/index.html","a35df471a3ee4726ad27682ab984b172"],["/page/6/index.html","1d0a6a98a94220b6d58352f1b5eb831d"],["/page/7/index.html","577804f46907bb46fb25200954cee4d7"],["/page/8/index.html","7df2caa2e7f479590adf035d17f1d6e0"],["/page/9/index.html","b380dd4f2b6847c9e93d676d62942203"],["/sw-register.js","6e720b21a481b12a71cd2884d4a2f3a9"],["/tags/Ajax/index.html","0058da685ed90d24334c4a315067b579"],["/tags/Axios/index.html","763959d7da95fdb10fe108d2c1a3bada"],["/tags/CICD/index.html","41df5b9dc4e37eebeefb7019ddca40f7"],["/tags/Docker/index.html","e3df76dfc32bc8af7408dd5c7fd7e1c3"],["/tags/ELK/index.html","c0d9b79f43acada04fcf669387fc0359"],["/tags/ElasticSearch/index.html","0a5ebe4184390a8f0f1624b4668883b5"],["/tags/H5/index.html","7507d18ceb1480f8516930195f999f1f"],["/tags/JVM/index.html","44c75e16aa7634c1592b179945816300"],["/tags/JVM内存模型/index.html","bac62480f4850519f8f0028a849e343b"],["/tags/JVM执行引擎/index.html","38d2f16956c231f2a3a8e007606cf450"],["/tags/JavaScript/index.html","d7b2eb2bb8595875cdffa92918572a97"],["/tags/Kibana/index.html","28c6162427fdf7598191e1f933985124"],["/tags/LeetCode/index.html","1227819194bb5714acf6acd424164a3c"],["/tags/LeetCode/page/2/index.html","cfc24b8facb11f2560e16c28b65128aa"],["/tags/LeetCode/page/3/index.html","a063afd8017db369d5cc639887f2204e"],["/tags/Linux/index.html","53c424a9e5fb1d8956a22b9e997140ca"],["/tags/Logstash/index.html","51532a356c1ea26d0b46200fe4130e80"],["/tags/Mock/index.html","5230d4bd25d201f9185aa772cb47d1e6"],["/tags/MongoDB/index.html","af89e76f48728760f889e30867135c8f"],["/tags/Mybatis/index.html","b47514d630b91a335a72e8058f35cab7"],["/tags/MybatisPlus/index.html","0762ffe4c072f33c60eb0466710a6c48"],["/tags/NIO/index.html","d5039e573bef55c92d9f4e7f032e3a02"],["/tags/Netty/index.html","15db9eb4c6a8646f17c3e8409147fbb1"],["/tags/Nginx/index.html","d9cf70d3a2fd9f87e8c70c34ca12394f"],["/tags/Promise/index.html","e784af64e5500fa49ad1eeedadc098ac"],["/tags/RabbitMQ/index.html","d293a6a9a3e9dbb873cd61c9b19b2a7c"],["/tags/Redis/index.html","111b827b7c06908ea1fd66564007a092"],["/tags/SSM/index.html","c21fe82bc6e8f19070a93a1040c4e64f"],["/tags/Spring-Security/index.html","600cfdbe55262a5f44cec12b3dc7dec4"],["/tags/Spring/index.html","4dc7df551cc8c0c6c57630a54e051d35"],["/tags/SpringBoot/index.html","61e3e58c4ed838fa072bae04ac76ba85"],["/tags/SpringCloud/index.html","5c8c7ed14f42564d7b6e3e812bbcb8ec"],["/tags/SpringMVC/index.html","436e8fb6e14241f524011d746d785a12"],["/tags/Swagger/index.html","cf6cf9ff57cc88d751d068c0e8482564"],["/tags/git/index.html","25a6e8ea5e308ffa4214308fd15c65f9"],["/tags/hexo/index.html","81be723fda27c388c117f3dd739a5bce"],["/tags/index.html","64f72f92fed8fcc6911985b08f78cd23"],["/tags/jQuery/index.html","a9d6eb9450d6966de91ca1c6bf578101"],["/tags/java/index.html","2c9273ff60f023df399b76e28bcafadb"],["/tags/markdown/index.html","650a7771ab7072bca83fd1acb07c772c"],["/tags/mysql-数据类型/index.html","f3aea7edba136e49af268e67df8688cf"],["/tags/mysql/index.html","f61218dc619c439fc5f9a8f2f49a07fa"],["/tags/noSQL/index.html","86dfbbe2bceb0fb9735e59da917a4cc1"],["/tags/typora/index.html","49e1193712fcea8917af1c0d99cd9990"],["/tags/vue/index.html","1b79583f9b8a6aca083767ea454a96a1"],["/tags/享元模式/index.html","46c719e16cb26610801b1375cb3d1506"],["/tags/代理模式/index.html","1d3f2528d7652f526e820da387a9a6b9"],["/tags/分布式/index.html","fa0abafaf599fb4fbf5558bb3b1aa0f0"],["/tags/分布式系统/index.html","677dd3566a354ce2c35a91a19d9ff423"],["/tags/前端/index.html","1c5c78b7bfee8cf15904a06213801d41"],["/tags/前端/page/2/index.html","2736837a762e4a64670085ba9513363e"],["/tags/博客/index.html","f476bb9fa3b2d51b48f7b7a2073cca6c"],["/tags/后端/index.html","5ec412af58efc89dac80c812d431d939"],["/tags/外观模式/index.html","9789483be48b79c4eeba6b1c45742a16"],["/tags/容器技术/index.html","0e1a3e6351dd620bb09928b706ea0d2a"],["/tags/工厂方法/index.html","77d6bb101fec5782ad9e6b57177bf955"],["/tags/微服务/index.html","0717337eb43212f8a9384682df120ae2"],["/tags/抽象工厂/index.html","9971b4bed46e8a745f65e4e69190128b"],["/tags/持续集成持续部署/index.html","a912378820ca7790bf07b8441e3537d3"],["/tags/排序/index.html","814c6955dee833973fa00acc0bcce025"],["/tags/搜索引擎/index.html","aea7a73355595aa407445605116fb1c3"],["/tags/数据库/index.html","c8fbbe56454774103455adaf91222f2d"],["/tags/日志/index.html","94b4fc18cf4d9c271944892bf0a1432b"],["/tags/服务器/index.html","a651eb2b01856a60ef215a24c245d194"],["/tags/权限认证/index.html","d8774d4e7320255624789d28d303e5dc"],["/tags/查找/index.html","cedcaa690bdc06e2246ba791ba73a87d"],["/tags/桥接模式/index.html","d06447b169284c0b73af955611db98c7"],["/tags/模板方法模式/index.html","27851b6f1c940e12358015b35a491201"],["/tags/消息队列/index.html","8847bfa799cee30ed788ba3685ad60c0"],["/tags/版本控制/index.html","857b853221c42d609fd204f2e0027e1c"],["/tags/策略模式/index.html","cb446c9b99ab8f0c41a0206dd826db7a"],["/tags/简单工厂/index.html","a3b7d10be1f3883fc4d058f68a4260e2"],["/tags/算法/index.html","ea550753c2ae3b09a5236f0dcffe44ca"],["/tags/算法/page/2/index.html","d2671450756d44914a524590556a59c6"],["/tags/组件化/index.html","d790267b838f739bea73690a83fe0871"],["/tags/缓存/index.html","ac7033d004e27f2e8d2f7fc4193ee11f"],["/tags/观察者模式/index.html","171634345895538fbd71b8307e2b3203"],["/tags/设计模式/index.html","92b6d6488c3ac2dc7d591c6dfedc341d"],["/tags/设计模式/page/2/index.html","204ff6348dd202622a95d45f361981e7"],["/tags/适配器模式/index.html","91e57f1e4d7e2d274105ab2c0fbe5a8a"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
