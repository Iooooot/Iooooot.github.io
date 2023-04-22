/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","ffc88678bcecab4df24276d93a515b8c"],["/2021/02/22/博客的搭建/index.html","8f61f79e23393e8c4d207febc8d0b0d3"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","36649bb1beffd99e00c58c697eeae847"],["/2021/02/24/mysql命令大全/index.html","48118a59d862407aac95576c950b84fe"],["/2021/02/24/mysql数据类型/index.html","ee2205e474be1a5daad5eac224f5b173"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","8794601f39fe71014a957adce0e80ed0"],["/2021/02/27/简单工厂模式/index.html","85d9778c5697974b2356e942335c6fce"],["/2021/03/01/工厂方法模式/index.html","1cfb8a2e945ccaf350a6fbd295ff0f29"],["/2021/03/02/抽象工厂模式/index.html","5e19074b29fdadde2139d69a6a77ffb9"],["/2021/03/03/单例模式/index.html","fe866e8d3a7c26a5f1b7de5a1bfdfa08"],["/2021/03/04/观察者模式/index.html","9d5b996c0ff531a09721361eb88dcd70"],["/2021/03/05/适配器模式/index.html","6f7a8d190095b58e584f0518ec165613"],["/2021/03/06/模板方法模式/index.html","3a34270d3399e30510402c5268919773"],["/2021/03/09/代理模式/index.html","bba226480c33d65fdd9393ccc804f7d6"],["/2021/03/11/享元模式/index.html","2fcaf89fb4d636a043e4ecf660dbbe86"],["/2021/03/12/外观模式/index.html","4692bed2164ee03066f6029ead9a4684"],["/2021/03/13/策略模式/index.html","d8f5973330d8ccc9831c309d51cf9c55"],["/2021/03/14/桥接/index.html","75984aa3d3bc9286d2f47b5f72489405"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","e361f25ea3c6dae4831c4beb1d0348b1"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","84f76963bcc60a65fd98cfd0195e28c1"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","1e797b15d39dd0e5f7bd4ef35df1ccd3"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","c96cd86ab92abcfe3ebdfca039887fa3"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","f4ab058f65bc0b1cda2450bdfe6262cf"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","37003e74464a20107144d4bf3192946e"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","68e6666f95c95f903d4dc70054f239e2"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","233b0b5d6401341d4e12e9a3a33ba73e"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","c91f3296dc1185c5fe15f73ace3919b7"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","193dbf88b6f488c3f0a38e658fef99ce"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","4fa273410ba05ad82e36b30afd48538a"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","f867b5ba819e7abed83e4ea77dff2116"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","95637cb84257e31d95e42796e4953b08"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","3e572e02add19c514e833d3e7244e5d2"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","bf57aed6ad08b9a1079f91d244a74ce4"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","b6ba4e8307be513172ac69aab5bad77d"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","21e02a917203146f34c8c5efed079d05"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","47aa55b4e74dd29b84b706c70528f89b"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","d762e9af01b22e1b9476f819d67b3d77"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","29ce17478fcd2f2dc7f10b0bf4e034b2"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","6cc7db157b257a586af80bf10eb02437"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","46e496f8ab1a13ed5e1b1556425452d5"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","cd0912ff5afd9ab3cc5192c286a2149c"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","79c391d868d3108b457db49fb984ea5c"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","dce41503cd99004802b6bf463f23b61b"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","2cc7aa3143094904a4a644096fa8667a"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","8df6326ef2e85a573440142d6a43d6e1"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","91de316dd42dec659180e8ec305302d7"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","5683018f112fa90d49091002b5fd2919"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","8ce9af58fd4579f513d16883e54410f3"],["/2021/04/14/Mybatis/index.html","94eaf0f07039c495799c9f3a9d20ec09"],["/2021/04/15/Spring-1/index.html","c2ad58637f7398cba410e7792e42553c"],["/2021/04/25/Spring-2/index.html","9fea96da2cfe0e26e923a786e233f365"],["/2021/04/27/SpringMVC-1/index.html","4a36c3eb6ecba293873cc81b0297b4ed"],["/2021/04/29/SpringMVC-2/index.html","c953ae6b2c786b123ccf0d4eaa18813c"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","1cb1388c5b9fa487496caa2a57b51b1c"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","cbce02e79ce10abfcc4d0195150bc8ba"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","b91032d20d921626f198250078c96e88"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","4f5239da16f8a912e8e83f6950e984ac"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","b0f2931150b6853dcfed601a74d59a86"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","a3acbcb80eddafa73ca059aceb9c1f10"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","3c9f47a50651aaf79cb68d81d8adacc8"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","6e41cf473e1fad9ca896934927bd5993"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","6a0545615ffad270089699cd51166259"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","74b16c44362ba0486b5708568dc85d80"],["/2022/01/22/前缀和/index.html","fa30f4eafbf0428d3b4bdac13d97f123"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","1ed8cb42ca7c5f6ae4ea63ec8384f59a"],["/2022/04/04/MyBatisPlus/index.html","4f46c26cf69567079d7820e29314ca25"],["/2022/08/17/前端/jQuery/index.html","8f99e37299e66bd5c2e2444d171b7a01"],["/2022/08/19/前端/JavaScript/index.html","058ae3daadbe8b8b190686c5bb5ac6ac"],["/2022/08/22/前端/Ajax/index.html","4089ca6ecd11c08b47c065a10c83a27d"],["/2022/08/23/前端/Promise/index.html","9ced66ee716d7e3f5673ba9665947e57"],["/2022/08/24/前端/Axios/index.html","d4557ba7a07fd35411df265267f2548a"],["/2022/08/25/前端/H5本地存储/index.html","b19ffb728d3a2601b2d8722f4c7e3ccc"],["/2022/08/26/前端/mock/index.html","80b222a835962695facaf93323cca68d"],["/2022/08/31/前端/vue/VueJs/index.html","15b88c286d583b33f97207eb90b4d31d"],["/2022/09/01/前端/vue/vue组件化/index.html","866462a6de361aefe5a3758d79f463cf"],["/2022/09/04/前端/vue/VueCLI/index.html","ac36fe7ec75cf019eddd6c66d21320c6"],["/2022/09/07/前端/vue/vue实现动画/index.html","caf1986a26d437ad6664a8fa24c68c42"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","3a2cf5dfc7da362e26feba3966169471"],["/2022/09/10/前端/vue/Vue异步请求/index.html","a7cf07061c2c80f1c0b3b2bc6a453945"],["/2022/09/11/前端/vue/vue-Router/index.html","7e3ff4f592230de26da8fd70503d7438"],["/2022/09/13/前端/vue/Vuex/index.html","083416fcda57ec01999a217e8e7feafd"],["/2022/09/15/SpringBoot/index.html","27862472cca2d3aacda08c9bccf8e6a4"],["/2022/09/16/SpringBoot配置FastJson/index.html","b48eb5801109993432014202b626e572"],["/2022/09/19/SpringBoot参数校验/index.html","e338f6854249d0bcc171243b44d56965"],["/2022/09/20/SpringBoot的异常处理/index.html","266ddd98cdd195f6519e42cda2cceb93"],["/2022/09/21/SpringBoot统一响应处理/index.html","383748c564b79175296fef05d1bfee28"],["/2022/09/28/Linux/index.html","9b6ab1ed509da93655fabbad8a149339"],["/2022/10/02/中间件/Redis/redis基础/index.html","063431c459b7a8ae51a29e1f6ce491c4"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","1bfec3b91dad33709292056c69d4259f"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","2fd044498e34d2e68886ec5fb2c03f1c"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","01fcf33f4c33ba47100f4e7549806d77"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","ff7de9e6819d699e0dc940a28db0e0f3"],["/2022/10/17/中间件/Redis/Redis集群/index.html","95f29f3a646f7d93f007c53aa12449e6"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","adbf34c260f32b9df868e8b94e172f27"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","87804d02b3eb2c19f7edd2a058d2504c"],["/2022/11/03/Spring-Security/index.html","ede35d38aa8eca57ba11751ef56adb1c"],["/2022/11/08/SpringBoot日志/index.html","8ebe3fdab891eef065b53dbb85d9dc98"],["/2022/11/11/Swagger2/index.html","a5a768bf2c2c9e9b4ea59ee45999823f"],["/2022/11/21/Nginx-一/index.html","cb933198161293963b09efc745b4f4f6"],["/2022/11/23/Nginx-二-代理服务/index.html","34607dbd0a8bb1d7cb1602fd997bd6f5"],["/2022/11/24/nginx-三-负载均衡/index.html","1fc6376342539186e39300e3395f6a26"],["/2022/11/26/nginx-四-缓存集成/index.html","17f21e780d9e5d646b2e68b662f118b9"],["/2022/11/28/nginx-五-动静分离/index.html","4118e62412cfbca31e4e16d4fea3b74f"],["/2022/11/29/nginx-六-制作下载站点/index.html","0dbe20e35bb9cbf997027cea6de05918"],["/2022/12/06/docker基础/index.html","e836d42209ce2b439ab9f63e3b507582"],["/2022/12/09/Docker高级/index.html","481739ae2efd2bd8ab13cebbc76bd76e"],["/2023/01/04/MongoDB/index.html","beca0e577197f432a2aedb6f8eea552b"],["/2023/02/05/消息队列/index.html","e6c2c09fab66afab4f5013a4cd787322"],["/2023/02/12/RabbitMQ集群/index.html","e43a729d6abd150fcd2b73624c04354f"],["/2023/03/10/CICD/index.html","edd43bae462a35cb010ec70be6c12229"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","cb49c5a9eccf50c77e7dd7d7e8e0ab14"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","fe50bff4024fa18743b0e9866fe5ac5b"],["/2023/03/13/NIO/index.html","f9988d1662ed6ddb6c2bb9f654e5bd23"],["/2023/03/14/Netty/index.html","706c00141d761c7e0f2bbac917ef7349"],["/2023/03/15/SpringCloud/index.html","c7c77c46d49ab220da44cf89d53c0141"],["/2023/03/17/分布式系统认证/index.html","d721b10e27d05c688ad31fe27312f3dd"],["/2023/03/19/JVM概述/index.html","e03c75bece2d3f9d71d3ae12e8cf284b"],["/2023/03/23/类的加载过程/index.html","10e51df140d6275006c1333dadfffbc2"],["/2023/03/28/对象的实例化/index.html","3be40eaeb72671d73dd08917f1785f3f"],["/2023/04/01/运行时数据区/index.html","667891ea1016e35fed3062ae983ee8a8"],["/2023/04/04/执行引擎/index.html","52882fc94b2eaf711a2658aacff3842b"],["/2023/04/06/对象引用/index.html","75ee4a85971ef7c014a3b0156fd1a0ef"],["/2023/04/09/垃圾回收/index.html","b7b4356565d7f947f3fdd11b6a15855a"],["/2023/04/11/垃圾回收器/index.html","2422f928114a2fb3727fde44ff0272dc"],["/2023/04/14/Class字节码文件/index.html","db765fec50967b77a14c12cee3044311"],["/2023/04/17/设计模式总结/index.html","248fecc3413d1809486487048e744b3a"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","d94eb990913b0395f683aad5372af8e0"],["/404.html","625a626268cdc9725c106de4e7638bb2"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","08def6d516acd579cfda5d85d54a3d95"],["/archives/2021/02/index.html","5fe4c0cc4d4f3517507e1bc0fd11664e"],["/archives/2021/03/index.html","066eed4855f93895a100ca4fc397c658"],["/archives/2021/03/page/2/index.html","6ea7260f7d5489787de9f7caa07a22be"],["/archives/2021/03/page/3/index.html","f4b104668d78f7a333797e299a2367d6"],["/archives/2021/04/index.html","fc247d3bd0519f8cc85a91ff87e84f2e"],["/archives/2021/04/page/2/index.html","d7f5a682121796c3fcd7a6d3d32ba6eb"],["/archives/2021/05/index.html","f61bebc34064aa7e38182e64d576a838"],["/archives/2021/index.html","dff31e117e4d591c5e0086778cc4b186"],["/archives/2021/page/2/index.html","991d17b5af2fddf250cbe9b6973656f0"],["/archives/2021/page/3/index.html","f79a2ac81cd64814be6db0fedbba9983"],["/archives/2021/page/4/index.html","8d8251b35786363011dcb41ce4d788ea"],["/archives/2021/page/5/index.html","11e82336ef00b523f1ef0d38680d8cb1"],["/archives/2021/page/6/index.html","17fb0d26e52a2021b7252f8689792798"],["/archives/2021/page/7/index.html","6f3848bad6338c30f313b565789105c0"],["/archives/2022/01/index.html","0f65b61172182efa5fed824a207a75ad"],["/archives/2022/04/index.html","2f1d65cf100e9cb1c13e1ea801281198"],["/archives/2022/08/index.html","1f1f3ff2d46fbf1acd9a421cdd616fcb"],["/archives/2022/09/index.html","d2632acb56b81093aae1de0037197655"],["/archives/2022/09/page/2/index.html","92fe7a0ee1f8a3b71036ae5d108ff8ab"],["/archives/2022/10/index.html","f0e23dd8859e1fc8e1958a6df6453dd4"],["/archives/2022/11/index.html","6c7258a26e876429935715bb39a03b1d"],["/archives/2022/12/index.html","c95dd28873e44f24f56a154f00bb87a9"],["/archives/2022/index.html","bbf7b5e5f8f66c61cca53971ed9a82de"],["/archives/2022/page/2/index.html","865db7a691caf11c7c19be7a36347596"],["/archives/2022/page/3/index.html","535d9e7b75465ad4f60601900dbf67ab"],["/archives/2022/page/4/index.html","bc93e63f6f78df8b08f73af7d6e0ea1f"],["/archives/2022/page/5/index.html","18aeeac30d11918e32e5083e21dcbab3"],["/archives/2023/01/index.html","496fae0ab076220325a0df75210a78b0"],["/archives/2023/02/index.html","33ed87e5d23ff017f619c8ee2349533f"],["/archives/2023/03/index.html","6017734cdfae5c6bb9577a95c583ab09"],["/archives/2023/04/index.html","806269348a746062377db1db7376fd91"],["/archives/2023/index.html","0e0eb5f8e6234f6374515b0d127135b9"],["/archives/2023/page/2/index.html","a5ce8ce17655efd89a2b4f65cbd52024"],["/archives/2023/page/3/index.html","ab5e0c86b5bd0477c733eda485e18944"],["/archives/index.html","4417a637b55852a7703296a0b6a23f73"],["/archives/page/10/index.html","48dabe9ec415af5a5fc1ec4bc8bcc0aa"],["/archives/page/11/index.html","674c1fdf681ca40e58866b6c52b38ad3"],["/archives/page/12/index.html","577ebd9983edeaa949211ce2945fb3d7"],["/archives/page/13/index.html","6cfd532f65e5898c6455ea00730073d7"],["/archives/page/2/index.html","b40926ead5fd339dbde0fc14d28e3667"],["/archives/page/3/index.html","676cef3d1b81da8f5911aeab7ef80380"],["/archives/page/4/index.html","e46da98013ea23d5a0f8e3f121ab4ccf"],["/archives/page/5/index.html","2a3255d15cdef5bfe7654aeeba636680"],["/archives/page/6/index.html","8253f37e925ec5686b43d5abe15c81ff"],["/archives/page/7/index.html","073b219fb787b825c83be1a18e65f26d"],["/archives/page/8/index.html","f8ab0dab68d4bf5e8bda2d4e0bb00b6c"],["/archives/page/9/index.html","bf735b25928edf2fe26d7cfec646185e"],["/categories/CICD/index.html","5b5b60d2a37f10cef8b00b564dffb27f"],["/categories/Docker/index.html","2846af4eb4fe3485cc08c0d487b5b772"],["/categories/JVM/index.html","224986422ebf13760860419b87723bbe"],["/categories/Linux/index.html","6ec4227a7d1cff2f55d48cbba0c54c09"],["/categories/NIO/index.html","d5da3ee1497733b783969739e344f391"],["/categories/Netty/index.html","55a1bcf25d56856eaf29b9cbcf634980"],["/categories/Nginx/index.html","0992fb14101a5c2a19eb16f7f5b5a84a"],["/categories/SSM/index.html","a72b71d2b667a8f0206d4fdfa676a1ef"],["/categories/Spring-Security/index.html","ffc557e7649a34c9764d468e2284ec59"],["/categories/SpringCloud/index.html","debcbd2241fad82ad01e4373180841e1"],["/categories/Spring框架/index.html","f78e90a207c0bab67e86f8cd573e15c9"],["/categories/Spring框架/日志/index.html","87df5c002a3ba1828b91f617ac3f6a62"],["/categories/Swagger/index.html","2d1ffeb8d276119004dfdcbaf6d30655"],["/categories/index.html","dde02be692a985c56500517e0f52587f"],["/categories/中间件/ElasticSearch/index.html","f9932c61d4df8b34de57b01efe0414d2"],["/categories/中间件/Redis/index.html","8ee2b1a918782c9208feaa55729b6dee"],["/categories/中间件/index.html","19aad0e3fbfadb8a6ed2d8cb3478b49a"],["/categories/分布式权限认证/index.html","7771ce36c1b8084724bd887b9951ae40"],["/categories/前端/Mock/index.html","b070e8765b17a1b60c7bfac1c098d9d7"],["/categories/前端/Promise/index.html","af99a881f1761c1138cd634cb6a3bc04"],["/categories/前端/Vue/index.html","1b05f851857db0ee4ef64a8c4c28b408"],["/categories/前端/index.html","20582844cd1d37eec051c914176e1cfd"],["/categories/前端/jQuery/index.html","4ee4d7e09c7ce49812e3b9b1498ba8da"],["/categories/前端/page/2/index.html","abaf98093a3a043988872d24e352734e"],["/categories/前端/原生基础/index.html","105f4368a27d43b7e77ca4a22ff50aa6"],["/categories/前端/异步通信/index.html","98db7b1ab35fcf9815e5776d2eca4a9c"],["/categories/博客/index.html","b774db838b9a26f3d441501b99f7bd00"],["/categories/学习路线/index.html","baf51419dde9ae2e6c3b5c30aaa579e0"],["/categories/工具使用/Git/index.html","89730e74e5751b8ce88f297f32cdf985"],["/categories/工具使用/index.html","0dcc94b0d4800e89c167bd0f9237dd15"],["/categories/工具使用/markdown/index.html","124cc2f29ac2a43e446a04356e6da1a3"],["/categories/数据库/index.html","b4e0e2bea764c582b3fb51255fcb1cc6"],["/categories/消息队列/index.html","0ddba657fc3df02c3059225b61d28995"],["/categories/算法/index.html","4e72d90e04bba05eca612c8ab69a84d6"],["/categories/计算机基础/index.html","5f45117ed0365dc58ab3342c3f9ca210"],["/categories/计算机基础/page/2/index.html","8808be999e0bcfa454a1d377ed461865"],["/categories/计算机基础/page/3/index.html","006f4cf95be8c53848fd0a7b11cc392b"],["/categories/计算机基础/page/4/index.html","e200f527d826b31a2f76085e42d63987"],["/categories/计算机基础/page/5/index.html","06aea2900499ec3dd19bf88398520de0"],["/categories/计算机基础/操作系统/index.html","9cb9ac95b15dde188e18a71dcd886b06"],["/categories/计算机基础/数据结构与算法/index.html","e7e064253a8dcab19d1c33a5be4dbc20"],["/categories/计算机基础/数据结构与算法/page/2/index.html","a3f78b76f8aad52fa375194e01b6ffb7"],["/categories/计算机基础/数据结构与算法/page/3/index.html","8230938aa5e3c031652e6a7773e69f1a"],["/categories/计算机基础/数据结构与算法/page/4/index.html","4bed40b19dd1911e8ef42ed5f8b00b41"],["/categories/计算机基础/数据结构与算法/page/5/index.html","2f85dd287506667c6336f22878cb719c"],["/categories/设计模式/index.html","a65c9184cb5cf3bce286d51301d1c8b5"],["/categories/设计模式/page/2/index.html","b0d1654b455ccf5619787f9629150189"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","5176ab735fe3ad3703e64485ae999aa6"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","304f35edc9a164eb462377c578043f26"],["/messageboard/index.html","ccd7743ed7e88a13dedd1e6468c3f017"],["/page/10/index.html","ed3b1c78a8071967e4d3292512059636"],["/page/11/index.html","7b15959100091ea6ba50ae1b0fe54662"],["/page/12/index.html","60928ae4b8b9b11958a5a902063b0f54"],["/page/13/index.html","e79cde4ebe5d25cc7996da6a7e284c15"],["/page/2/index.html","7dfea174bc72523e8a414edd284002c5"],["/page/3/index.html","fd1440e6dc54a160326a80bd91f21b47"],["/page/4/index.html","e1a130b333f5897d0ee3dcca756942aa"],["/page/5/index.html","3802e8fadd96cdeb68d2f9e956f032d2"],["/page/6/index.html","a7a43c6add88b4f9b4978f25c08017d7"],["/page/7/index.html","02044965607dce586dfc878132306922"],["/page/8/index.html","240f1d6e6ebe296f1b5aa8975cf87c93"],["/page/9/index.html","32581df95836996acaa5b28c16a6ad6c"],["/sw-register.js","b2be62f5bca416af7039f8d0b5f9e9e5"],["/tags/Ajax/index.html","f80af9a02a56af9600b5d3634b627b37"],["/tags/Axios/index.html","38d26e5635f0587d70b9d1135bc98dd1"],["/tags/CICD/index.html","c0651a5536fa67b128e56ca925261281"],["/tags/Docker/index.html","29c3a4a216bc627389a1d430675a22b9"],["/tags/ELK/index.html","c4ba63692447fd585a7d4a2de29f6c2d"],["/tags/ElasticSearch/index.html","d9c4014a8cd7e556367b35b1e918863f"],["/tags/Git/index.html","d6a3974c1557000e26509faee858efbd"],["/tags/H5/index.html","307ddcbce4ff547f55cdc6a2ace1eef8"],["/tags/JVM/index.html","f46d640b6735f78d4b4856582e818f65"],["/tags/JVM内存模型/index.html","7f4e973b80abacc8ef082fd134fe2c7f"],["/tags/JVM执行引擎/index.html","220d57f5cadfe638e3bd3684842f0dd8"],["/tags/JavaScript/index.html","0e0367d2367d37a7c3ea0bf94267afe4"],["/tags/Kibana/index.html","8a669df6caff4a13252734680803e803"],["/tags/LeetCode/index.html","a742c6906a059e56e571ad6bce79accc"],["/tags/LeetCode/page/2/index.html","e03ebce0e0fa85963efab38daca47f9a"],["/tags/LeetCode/page/3/index.html","eb695208bf3c27482b12d3bfc584e2ef"],["/tags/Linux/index.html","1c6d82b6018d25b0060bd0a0ec4aea09"],["/tags/Logstash/index.html","21b4d09bd995bf74d5fbc93687294ba8"],["/tags/Mock/index.html","3198cf4828024693244bd897c4215eec"],["/tags/MongoDB/index.html","840ea2c39d8a1cb23cbffb06c223ed77"],["/tags/Mybatis/index.html","3c182977674f1d8957d8eb845ff2dfc2"],["/tags/MybatisPlus/index.html","7ffa1fa822a6a0dffbc2fbdbeaa97e6c"],["/tags/NIO/index.html","43ec5464fb19a02204e835566ea37c69"],["/tags/Netty/index.html","a3ad00765c8fc17213272e9577353695"],["/tags/Nginx/index.html","a2964b7e9270623c786e10ac4c1e303d"],["/tags/Promise/index.html","0b40e0baff47e1455fab579cdcf5bfd5"],["/tags/RabbitMQ/index.html","4711e1d115328687fa883fe5ccea01f7"],["/tags/Redis/index.html","fe2d0be110d7d893941c4dd3f307b8be"],["/tags/SSM/index.html","68e7698dc07772daefb54bc0657efc71"],["/tags/Spring-Security/index.html","0165da147d8c1cd904e118f3c7b1f54f"],["/tags/Spring/index.html","bcf4674eb148ad39f298d8edc9aaa307"],["/tags/SpringBoot/index.html","9f3cd3e5b3e6d12c8eabcd5283c497e3"],["/tags/SpringCloud/index.html","b2159f52627fc8f04b85d000165eae3f"],["/tags/SpringMVC/index.html","b048bcbad3cb3864f4913868fa1208c4"],["/tags/Swagger/index.html","10320dc8aa03ff21b119ff67b6292b3b"],["/tags/hexo/index.html","219d9ed481581c544693a2eed34b73cf"],["/tags/index.html","a3b1e8fae66dfae38d9b31f3558cd387"],["/tags/jQuery/index.html","00668d7cc1246b9806e6232faa40859a"],["/tags/java/index.html","ffb742986a10fc7694013e35d35ca186"],["/tags/markdown/index.html","bda2e819ced4f1aaf76e6af268b30010"],["/tags/mysql-数据类型/index.html","bcc36e5f2f814da08ee1030f841170d4"],["/tags/mysql/index.html","c5f5aad7488e0e5b63cbdaf470bc1a88"],["/tags/noSQL/index.html","c5b3f9b0688050f10b458e0288e0d71b"],["/tags/typora/index.html","e6656322a7d396727e627585bf4c430f"],["/tags/vue/index.html","375519678517c6bf5f9df1ca981204e2"],["/tags/享元模式/index.html","210f1393eb9c87d5ce258b2f8e3a61aa"],["/tags/代理模式/index.html","1787c5bd6ad31798a74b83d4dbf6925e"],["/tags/分布式/index.html","4acb57f2589a61fa2d89617d25974ec3"],["/tags/分布式系统/index.html","04125c5cc24bb3fd195c39dd6217d6e3"],["/tags/前端/index.html","29ae695e2db2efa37677d7f6df0a9b32"],["/tags/前端/page/2/index.html","4ca14980b332fec755bdaff40595c66f"],["/tags/博客/index.html","5e6a975292f842efe2a6230eef87ec1b"],["/tags/后端/index.html","58e17b4a570134bb97de83dcb832c083"],["/tags/外观模式/index.html","166aff2a087b38abb5cd5d8f4ba18872"],["/tags/容器技术/index.html","44b747f17d0af1354dd2e552a9acfbd0"],["/tags/工厂方法/index.html","f1977e8c96052f85616b639e87a53f30"],["/tags/微服务/index.html","6ad11b92c1181eb1c8b4a9bfba1d8c26"],["/tags/抽象工厂/index.html","99a3e58fd2533cfe65111cad9838633c"],["/tags/持续集成持续部署/index.html","af77b00c017fb42c9d475b1fb5008fc0"],["/tags/搜索引擎/index.html","e35d01a50a3a8d267108b05221959139"],["/tags/操作系统/index.html","fb8d8853a1b0d1777bd86316398b8e26"],["/tags/数据库/index.html","c282bca0b9bd3c09740a3b9512b3c21b"],["/tags/数据结构与算法/index.html","3b5384d0a2806a8ad33bf59ac68446ec"],["/tags/数据结构与算法/page/2/index.html","b5b926b9cd6d6a642d0e7830a28f3a55"],["/tags/日志/index.html","55490cb9896851fc5c1a55943d98897c"],["/tags/服务器/index.html","2d5635739f0cd48a9c82ac76bd7fd24e"],["/tags/权限认证/index.html","caaf81ebcf87a0a3cd2e703a2e9bc64c"],["/tags/桥接模式/index.html","8dd430c1611aefb0196eb44f2249f63b"],["/tags/模板方法模式/index.html","8738d1cc549f8e38f869e663df5e377d"],["/tags/消息队列/index.html","4227004a218e4f5103dcc32637a23db7"],["/tags/版本控制/index.html","cd99a8b6cb0fa25627abf3ebdbb4ea1f"],["/tags/策略模式/index.html","276f30f1d69e5eb9ea9d36ca8a7c9176"],["/tags/简单工厂/index.html","02c3eb700ad19c68db41f84dbed1369d"],["/tags/算法/index.html","16c2930c3cd8eac0b365df218bc69841"],["/tags/组件化/index.html","4122554cf8c6f92f5caaccb912c9fba3"],["/tags/缓存/index.html","91a562c15e89abde91cbc7a598754737"],["/tags/观察者模式/index.html","02126c28d4190c04aac04ca6816dc350"],["/tags/设计模式/index.html","00a6c6527413db21b54ce6da4fb1c676"],["/tags/设计模式/page/2/index.html","3cc4a811eecda170396662a6d8324a2a"],["/tags/进程管理/index.html","75b41003f016d39e3f9f73da356f42e0"],["/tags/适配器模式/index.html","dd39b9e7a3fe7837c8a94d2e598e75aa"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
