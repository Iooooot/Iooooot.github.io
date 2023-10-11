/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","a82c4818e3a0eefaee03f1a43f360df5"],["/2021/02/22/工具的使用/博客的搭建/index.html","7f80f1deea309ec4b5332561028d47aa"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","cf9feae3462c2171ed0a34ba6dd9add6"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","906eb7360b89afa30ebd2ee98e693765"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","7bf6ff602ef4b463eea564da8ef9e82e"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","efaf4629fbf55f75be69072c1bfc576b"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","03555f33d186ed2f79a07004aafb9fb2"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","aef2043588a5bea021dbc2089568b9e8"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","29d824c987f1336764965d8a65d88aea"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","994567b8825995764be7840ea8311976"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","7244b58bb8d834fa200f87aa0bf21643"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","61106ad2c58ae246602b433a178262c4"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","2b4d7a673a51a78e3f84bb4ca0322d1f"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","141df8af1ab37a559f96359a26950496"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","3a21e91cb10f283c3ac9cafbbc46308d"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","9e442aa5e185219f96bff2f2fc780c9f"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","fcecb4895aa456b5667f177692c4026f"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","5f42b736e0e58cd6bf28be6a7c17bc16"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","6c41a7b5b0515fe473f1c734799ebd27"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","6e4af538506f47b4581058e194f54074"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","5198901fce067973efcff57a4656526a"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","bef5622dcb6a642728b5213e4333c28c"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","7c7d98bcd3b38d816f74c451ac4b0124"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","9280c6adab51996560d72a8dde9b52e6"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","81a5ee9ec8a94e3cf4196805954dc58c"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","dc0470b2e6d65e48fd64eadf16c716f7"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","87059f026019c107f591b9038e60f1a5"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","c55104dd876820a0acf935bef18d857c"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","ac938567440167c5c3fc3ff3b7cb69af"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","35a2460b11c3533a1aa53e78ac7f787f"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","97a80fe4e7588a33f523f01c6fcec1e4"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","5fa79d51a68f8eba9812e155803b0f9f"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","862fd69b9cf49a086fb5347471d89c67"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","5047f7c8bd67622fc583684da75b8c66"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","0e2ec922d2d3930b8388b5c796f48b87"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","981a1ffd852303c7e047b183d9d1dfc2"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","b627a170b70bb54719c17eb330310b14"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","6ac9b8e6dcc6bd34de3dc4cbce422618"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","af7b02f92921768a4f3a0df87ccde0e2"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","b47fe68adea27bd4fcb120ea670d6df5"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","fdc4973e44e8ab339d1d11eae3eb0ae1"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","6a8ccd2ab11105d4db36dd99bb876717"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","eb04a4418dae367f27a15cfff1ca6bfc"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","8581d264bee66f18cceaa17b8646528a"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","7486f0b6bf440fe15d9b02f776ef48e2"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","9e9dfa9ad26bde647f40343363b02829"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","c71e5c5363ff95212f1988c436fc04ba"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","bbad82666563974c0c8fa4f010557f0e"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","0efa78abd61aabf2ad480ad9d6cf9d0d"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","51eaeb91f1cb494003e9b0e7a04cf0d4"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","683c1d932d8a54befcb9c30ff800f503"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","0979890fa3136b5b8546640b9956f578"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","a469b1385eadad29a627f89de26870e7"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","c47230c589ff20457a3e718d253c825f"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","63e353ccc3e4a28274377447a9a1795e"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","836c40fc4e6676d13127ebf1e8dc2288"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","075bd79af3667bef6a03a0ff997ee875"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","01c306d5b3ca9cd92073a687d04b3041"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","9236ce4878758c48b276decb6f422ca8"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","232efa6f912f4ccdf9744ba3294fa864"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","bf4bf66183457e3aa983112acfad52de"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","9b0778186b80dfa05b363a8c095e1cd7"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","c8647d2afca2699d13bdc220a5f3c5c7"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","7ca5a1d28111067333bfb7a6a37f3bcf"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","dd87bca8532bdd44464e50da3ad8c199"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","e59a41a4900575761f80aa8c21f732ba"],["/2022/08/17/前端/jQuery/index.html","bbe8e8d853eac90d9ccc93d3a0e8eb9c"],["/2022/08/19/前端/JavaScript/index.html","aab473abc36d47a2b867ff07f5eda155"],["/2022/08/22/前端/Ajax/index.html","a8faff2171ace5c6cbbe7552b9608020"],["/2022/08/23/前端/Promise/index.html","8474fd931cdfd71daafd9cf93ec3b463"],["/2022/08/24/前端/Axios/index.html","d5a8b0e2cef03e9d81097fe4322ad2d8"],["/2022/08/25/前端/H5本地存储/index.html","23e5a5c4cd3510dbb6eb88b6b6242147"],["/2022/08/26/前端/mock/index.html","23dfa4d104c29d3dacc5b2037cdb91fe"],["/2022/08/31/前端/vue/VueJs/index.html","8c5fccc118ce8596e6ec23766e0fd1df"],["/2022/09/01/前端/vue/vue组件化/index.html","afac2303b818c8b8100a550a751f857e"],["/2022/09/04/前端/vue/VueCLI/index.html","cb987fe5ab14777431780d9cd5eb5a58"],["/2022/09/07/前端/vue/vue实现动画/index.html","ce29c6b965126d68afdfd424e5d7d60b"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","48fec3f0ea73f45715c9c01af2cfc472"],["/2022/09/10/前端/vue/Vue异步请求/index.html","712357e175418f24de4e42ea15342fc3"],["/2022/09/11/前端/vue/vue-Router/index.html","3f9ebbd6580b6a3ff9582f7c6e8bbcd3"],["/2022/09/13/前端/vue/Vuex/index.html","a4e8369b9189f67a21a996b3583bf4af"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","5bf2d839c05bf1279c85885d03442813"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","812bfd238245775af7db15254223866f"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","dc21a082d0f1f82c55eaa18386dc624e"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","9a9ac0e46eb31c0e031986b9ca5aabf7"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","184e1828e3fce98ffae62c80ab12ebf9"],["/2022/09/28/DevOps/Linux/Linux/index.html","1290150999918580ad3b1d93a3b324eb"],["/2022/10/02/中间件/Redis/redis基础/index.html","83929512418af309f2d2caad246688c8"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","e31fcd81b32d3f99a12101e474324e69"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","2c544ad6d187d4dacbc80a1ae0c4cf75"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","44a66a7e0fc96886aed73a3ec24b9542"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","e172680eabb6c6290d2ce7801afcca04"],["/2022/10/17/中间件/Redis/Redis集群/index.html","844a8937fe4f5d6966191e0261863091"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","f45eaeca4083dbd7d33f9284d4d210e8"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","949a4dc49b6b9b21c33cf49c94910189"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","5e02ff881cd5af52a1cd3a09688482ca"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","079b04b4e438d40e408f757e9aea5abc"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","8988fe153f18c63bdba9c3db192409cc"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","523eb5313b3dc61eae3219ce92d8820e"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","7edd5669bf959e8b8e9f7c364ff8b134"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","e20dca8efd652002a40e6a1430ae3c9e"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","3666a333183c28847598e17084dc5b26"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","1a41b542f6b18f47971871b0010b0f4a"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","737cea81631b24da7bcb68bd22193ea3"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","6ad9658d5d930a48ec14b27410fdc66c"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","01d247af0770721f62e1ccc67fb4f04e"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","aa09f3e12c3220a5cb3f5da6757af5be"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","ad94940e0e96cb1c04c6056811fba4ac"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","b9e9c5a3d7ff110a713feddbcad8a35a"],["/2023/03/10/DevOps/CICD/CICD/index.html","ca24f30c59f7f220f7cdf86e62dbbd1b"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","59a8fd2295416fb2e9f3f783396b0815"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","bca78526eefe4a17ff95c7faf164a9b7"],["/2023/03/13/Java/NIO/NIO/index.html","cf5cdadd4cfc59796f38fbb095d6c78d"],["/2023/03/14/中间件/Netty/Netty/index.html","358e0defc9326def4673a52cfcd92a64"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","e2432ef6172caa87096105499715aa58"],["/2023/03/17/系统设计/分布式系统认证/index.html","c54545ba5e34293ef5dcedfd575d6049"],["/2023/03/19/Java/JVM/JVM概述/index.html","a17c0f6aee0b0d3bd792f9fd57e121b2"],["/2023/03/23/Java/JVM/类的加载过程/index.html","d6277b62a18bf35e3e5864783ad21310"],["/2023/03/28/Java/JVM/对象的实例化/index.html","a42a3dd5181a2eacf894e930651e18d1"],["/2023/04/01/Java/JVM/运行时数据区/index.html","f94242e05e8078cfccd94608eebd6df0"],["/2023/04/04/Java/JVM/执行引擎/index.html","3b7c79636364d4d0befc50f26e293404"],["/2023/04/06/Java/JVM/对象引用/index.html","ceb9aa5e82e2f2455797eb98ce75bc49"],["/2023/04/09/Java/JVM/垃圾回收/index.html","4c85c6561e69e9589d4430de3a45f6be"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","af9bc772dc8b29e6002f8a2bf27ab491"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","6bf46bb2f58da872389d7c994f16f8d4"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","bb888efed243fe687ded76c0d22aaa36"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","eaf0dfda755d91d627e4a040e00f5a64"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","b26d5d3885950bc470bf890733c4cf51"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","89833ae45e977e823791e5d8c90e3fb1"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","3620f4272322dfe1d89007a728413e09"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","495f3db1ca4eea98f51dd7fe0648f104"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","f03ff67d3d735d804487e40ad7b529ad"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","23e3df8fc26e8559f5da19df6393456a"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","2b2ce0e23cee6aed203a5b34d7866089"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","64ed82e4c04e488ba1a64469130907dc"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","0f4606bb4cef88993f03a036838b3bb0"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","e51c1a8030b3310adba37d5cf621e6e9"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","6ff8ecfa3129b1e7f12e6c158d80b580"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","06490eddd4f3d133c9cf2958d2cee2bd"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","690f5ecc3b01b13ac935808162a65b93"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","857a1a77304ddb6b553ec2b64d8bf8b5"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","cdf60217ccdff80c334aff1f9649bc91"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","189eb8ed8e01e3b4f0959c40efaec1ea"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","8ba0ebc8ac8d528fa2229d1cc04ff3b3"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","7118634c905966fa08a5ee3a249e2902"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","53ef4d80665e33a00385ce377950441c"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","d831f37f3e5582d352c1bc8a66be1008"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","16d241dfc168cd17fe612e0b5fd0ea1b"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","7447831123062d0ee3880cb06ad95c75"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","0b8c13b5fa7c22f2ce8014213560a582"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","25258eee93a97e0acabeb1ebae7566e0"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","f7150dd591058feda7126270f9ed7b22"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","814bc98085256659ab5f0e9d683bee55"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","4a8192bdb8435411ae7aeddc2744271c"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","947247c77932bb3f59032b8b5cd814d8"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","0d63b49f5b62a89918023835e8c0dc64"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","7eca6b8cc32c6a9a88a6def2caf52324"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","da2b08650756bde042bff1dc2804abb7"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","65adbb21638678892577777e0f6a77ec"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","aef4b0d2442918e9947c597349127a0c"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","e376c7e54d90c489ee05f4a2bc990a28"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","43f088081829c9d522b0cb7341def77e"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","012fb970c0088a927827d5e72eb0c6ef"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","89eddaccb83dd77fdbb1bbec54fb4911"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","4c312df1d611e331f8033dc60bce710b"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","6d8565a819b1e8fa4c63256c6a8dc2e3"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","42ef67bd66f1e98a907c985464c106cf"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","6cd24c2284c77767be424218cea5db85"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","cf3556c9d036e15c7ac2bf9c9ac70f5d"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","6e2b038b104c6a305655978687e6fc21"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","2e4c054d13b5d8d2953c012283b3a6fe"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","2a2337beb5e72b3e5d52d62df8ee373c"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","a2761d83fe51b51ba923cac2963f6ca5"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","bc2e12f8ac7b4e8cdd521427a7f15fc6"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","50b4ddada1346d07ae4abc66427f785e"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","a6fee7c1347ce38a149ca59b635ebe70"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","f8671f50d2d50a07d5ea08fc3cc56c15"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","4fd98998b481889b0aa4ba8063ce50f9"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","29703fde2a39ed886104179d9f048d36"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","d8473cd219c840ccbfcf238a86d43f10"],["/2023/09/04/中间件/Redis/Redis事务/index.html","585e010c1ad88972232ccfba2a8cc356"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","c451f54c87980969ec02e9da80a556a9"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","1651f4a61246e948f52a24a964a453e1"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","3ef7fc9aebe2f7f46312384c1e3f3a1a"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","6e67b86f867e46f2004cad06a56e35b0"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","3dc0c8b74ef11ec66bd8293d8eb9a528"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","5fc95a68c66dc8196543c8190b0db1b5"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","fb99fd5d88e70d999c9fe3df6d289ac7"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","65e4ebdc7805eebd8358658896ba72e9"],["/2023/09/22/Java/NIO/零拷贝/index.html","9bec72f633c385c78522acac77e49d1f"],["/2023/09/24/系统设计/JWT认证/index.html","734d244fe828a6f4e00c5eddc46a6315"],["/2023/09/26/Java/NIO/Reactor模式/index.html","62d3bca6bfcc1b8a89d9d754c0091cc8"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","c1bcb43d730126fb029193e8af3c5413"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","58ebbd5781f3f0c35cd1e6b20d95a7ac"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","126c0258967b4af12c3e98c12fc7dd0c"],["/2023/10/09/Java/并发编程/共享问题/index.html","29f9f5e0b03894c6f026b992b1bd3273"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","8e8cf0bd16a888fb3687cf351bf37d34"],["/404.html","787e16bb522cd7f50295c546aef508c0"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","d6725d7e6d7e8517e508e0fd310d15bf"],["/archives/2021/02/index.html","2f79a9701bcdfc086ada8fb7ce751e7d"],["/archives/2021/03/index.html","e884c632c4b9dcf6a7997669c5a5a3a4"],["/archives/2021/03/page/2/index.html","f2becd07f5638324bfd2a7171f211416"],["/archives/2021/03/page/3/index.html","29c353b495e2fcc5ceb4e2d5c2af7148"],["/archives/2021/04/index.html","be0c7abeaca157df0f131b1d39c4dda3"],["/archives/2021/04/page/2/index.html","ed63b3f19e109b94e22a228ce8075f00"],["/archives/2021/05/index.html","9a9f1f819fc12fde29ff33d269770e02"],["/archives/2021/index.html","af5915efe86e8bb8d21445daa8f144b7"],["/archives/2021/page/2/index.html","21d72c3b0e732a6b755bec0382fe6869"],["/archives/2021/page/3/index.html","d5d085222e2259b9c42fc0041d3be61d"],["/archives/2021/page/4/index.html","7feda4582dce6fbfd1ac7c8dc80d6182"],["/archives/2021/page/5/index.html","3607bdbd8603f9567632678f70198788"],["/archives/2021/page/6/index.html","1a98afac6cc737d962129ccdbdb4d0c9"],["/archives/2021/page/7/index.html","9b1148fb1c7a4646763dd1217d9e9c12"],["/archives/2022/01/index.html","5ec8799b5eb6b3da6da59e2ae3d03152"],["/archives/2022/04/index.html","3775147f04c8f6a34d1c02a38a08b8f6"],["/archives/2022/08/index.html","967b4a62468847cac8f85012c7db8fc9"],["/archives/2022/09/index.html","cdbdd1bf04bf68fb39cd11e3fa25b9f5"],["/archives/2022/09/page/2/index.html","10276a8d2953d828475523fb822a6bcb"],["/archives/2022/10/index.html","47ccaf405e3b524d2a0fea9b045db7b3"],["/archives/2022/11/index.html","41959898515a4e090b0d2bf2a4d27116"],["/archives/2022/12/index.html","23c3a5bae4acf55beba35d7a171e2872"],["/archives/2022/index.html","cf2c5b0eb473f615d709ede0caabe1d9"],["/archives/2022/page/2/index.html","f1d08eccb6eb0600fb87aa086a1020da"],["/archives/2022/page/3/index.html","e73f55489965bf8711828ed20598ca9f"],["/archives/2022/page/4/index.html","5050bb8796eafaa8b952fd7592d1203a"],["/archives/2022/page/5/index.html","1bd9f6e6a93671d923c482ffc3d33221"],["/archives/2023/01/index.html","adb72ddb194ab472daf5f4a7b6ba0f12"],["/archives/2023/02/index.html","a3b5acbcdbd911b8c436271ba7e0225a"],["/archives/2023/03/index.html","2285424fd969b71ed4c66ec5b0462a25"],["/archives/2023/04/index.html","a01ae593c1ae040d1634fe4b02974d63"],["/archives/2023/04/page/2/index.html","e4e0b4caad01f9cee611ac4b026f6675"],["/archives/2023/05/index.html","637c557e60ad33944acfce459258dbfe"],["/archives/2023/06/index.html","06a5dded6a9f63879423a9b11545b384"],["/archives/2023/06/page/2/index.html","4688d60754c8b6d0409c378dfb6427f2"],["/archives/2023/07/index.html","2b4a22e46d4c858bd4a24702d94091b3"],["/archives/2023/07/page/2/index.html","7cfb6697de5b5efacb858a88c03dc657"],["/archives/2023/08/index.html","bad3ca539973af555526f3a43515d182"],["/archives/2023/08/page/2/index.html","d9a8f3109f5a47b5e90a0332c25b890b"],["/archives/2023/09/index.html","31e9216e14c31aabbb54a7d1bd2753e9"],["/archives/2023/09/page/2/index.html","ca63e7fb65686e74be2e1f30105f1218"],["/archives/2023/10/index.html","8ba9191f35f1a8795f7ba53aca8d8674"],["/archives/2023/index.html","d5e008b8f77ff4f3ccccd72b00fcc2c0"],["/archives/2023/page/10/index.html","4ba97d66f0a3139f4130acd7314e4874"],["/archives/2023/page/2/index.html","f67d60b047dd67f3b602f491cc4edcdf"],["/archives/2023/page/3/index.html","bd13824c47db4da98b105540dfce4696"],["/archives/2023/page/4/index.html","48ac5fe61462a4cde45bc7033ca4b4e3"],["/archives/2023/page/5/index.html","cd7a0877fd0b5c5a090528fdb0015ad6"],["/archives/2023/page/6/index.html","9e7460642c6782622e1252b776a4ebc0"],["/archives/2023/page/7/index.html","9a7ff35e2ea6d4f08c3bc6a033677e05"],["/archives/2023/page/8/index.html","c6abbd7987e704188b98751481e52cf1"],["/archives/2023/page/9/index.html","410bf8f6bc5b3dc5ece2ad1761411069"],["/archives/index.html","515a57ac3bbd6b1088dd08e1e8407c97"],["/archives/page/10/index.html","fad2e586f0aba777c4add6e334219842"],["/archives/page/11/index.html","e9e2b94564bbeffbcaa4cb401510515b"],["/archives/page/12/index.html","3b2dae1b9f9e94b9dd073a2ee6658f89"],["/archives/page/13/index.html","7a19db1a3f176a6b5ee0095c6db814ec"],["/archives/page/14/index.html","fff7d26089702b0793ef053a8913bed2"],["/archives/page/15/index.html","e317b62b46dc0e4b7d2bba2a7d31db68"],["/archives/page/16/index.html","2bdfe73fee9718a88d6554847813613a"],["/archives/page/17/index.html","bdfa00f7c4a5739f4ab7c5dbc4972fcd"],["/archives/page/18/index.html","d8f5cc02f3d484b6a83ddc267158b10f"],["/archives/page/19/index.html","0e98e6692eab568f20ce6387cc3861d3"],["/archives/page/2/index.html","845c9ccbd1fe5b3928dd6fe1c8f063d2"],["/archives/page/20/index.html","31c3388d7e4e9f621e13c5246e73bed1"],["/archives/page/3/index.html","da35ac0841deecc329cc79fdcc5bfde4"],["/archives/page/4/index.html","899580ee0774d48813fefd84c963637a"],["/archives/page/5/index.html","784405ce9f54bb1a077b56246e907829"],["/archives/page/6/index.html","0c5153d8e06600957340781c84b7e8be"],["/archives/page/7/index.html","f2fa97dd1a44fc2249e656b50c7adfb6"],["/archives/page/8/index.html","12f0452f2c995af2fc2ea661aff7d283"],["/archives/page/9/index.html","72b0d048ce79fdc425200ff82742db52"],["/categories/Devops/CICD/index.html","f0d85e9acca58cc2ce63b6cce01152ae"],["/categories/Devops/Linux/index.html","98daa1fffee38051c4117bf1ec8798ea"],["/categories/Devops/index.html","10defdf87a63fe0112c1da8ed94abcf9"],["/categories/Java/JVM/index.html","5c6c94ee212c721a3e522e33540f835e"],["/categories/Java/Java基础/index.html","3ef5e665d1f717c91562608a1a7be8aa"],["/categories/Java/NIO/index.html","e62b6781bd2adcd0c9c4f0b1cca56f45"],["/categories/Java/NIO/原生NIO/index.html","9cb3f3b8118d93668a85dfca70b63a40"],["/categories/Java/NIO/文件操作工具类/index.html","7a3b43b4ccb1828fc7e17cdf9030a4ed"],["/categories/Java/index.html","f65a60ff88a5abb021d5fadbb4991958"],["/categories/Java/page/2/index.html","ed0a82884d0ebbbec15a70e709f9386d"],["/categories/Java/并发编程/index.html","b461066b1794c79760990875dd839580"],["/categories/Spring全家桶/Spring-Security/index.html","e6df2078ba032a9add8b19cd2d506e4c"],["/categories/Spring全家桶/Spring/index.html","dc25886df23aff34b582c671e4b2f859"],["/categories/Spring全家桶/SpringBoot/index.html","f2ab620e10547f3126e5259430b33c87"],["/categories/Spring全家桶/SpringCloud/index.html","b50b6cc2d96b63706aa2172049ddc5a7"],["/categories/Spring全家桶/SpringMVC/index.html","2eac5893835290777a7adc6fadbc94b7"],["/categories/Spring全家桶/index.html","9304f763e24525b6c34ab8eb50c2ef13"],["/categories/Spring全家桶/page/2/index.html","709ecf2d71bf3b95e564128e0a3a3036"],["/categories/index.html","b15308d2d4976729aa635250a86f9b0e"],["/categories/中间件/ElasticSearch/index.html","52c514b94b7fe53dc9b46bc881c6c152"],["/categories/中间件/Netty/index.html","101e7c971d3c1f424027b37fb20bc12a"],["/categories/中间件/Redis/index.html","3edb270d1a21c1b073c52e8b856bf836"],["/categories/中间件/Redis/page/2/index.html","6c9af2891d02b68f85f0b1523a8b86ac"],["/categories/中间件/Redis/page/3/index.html","bcfc4a6bb1c47ec3bc30c1ee9fe7f9b2"],["/categories/中间件/index.html","8d0c033872d66f58e7312bb91c156ea9"],["/categories/中间件/page/2/index.html","320431c76872de6b15739a46860c076f"],["/categories/中间件/page/3/index.html","41ef044f0d8b544a46d5932d14c01f5a"],["/categories/中间件/page/4/index.html","66d2311a155dd16aa5145fece67cde32"],["/categories/中间件/消息队列/RabbitMQ/index.html","652d58bebee5406dccf8e498cf3aef2f"],["/categories/中间件/消息队列/index.html","814185450a8ad15da9e1545356253b45"],["/categories/前端/Mock/index.html","f5b72b5ca1ca904db19723c04b71b689"],["/categories/前端/Promise/index.html","d054b0ba7968460dbc8a74c894cd914e"],["/categories/前端/Vue/index.html","7a9d9336cbe504d1eedcb7eff6ca4e79"],["/categories/前端/index.html","3ae2bd2396afbdb474e72ab875e1bb75"],["/categories/前端/jQuery/index.html","47a6b5ba87c0743157dc1af2b2fdda8a"],["/categories/前端/page/2/index.html","51727e3dd097b4e3a3451c5cce8d3a82"],["/categories/前端/原生基础/index.html","b6499d8d38ebe04c099bcd357c707ccb"],["/categories/前端/异步通信/index.html","4036f6ab2de3dfe0647792d27a1f2eb3"],["/categories/工具使用/Git/index.html","1233e1b2b54441e860af3433c00528b0"],["/categories/工具使用/index.html","e7e35817bd6316c9a3be969b91251a24"],["/categories/工具使用/markdown/index.html","90ed6b10e457885aa015a9489c9f5d0c"],["/categories/工具的使用/Docker/index.html","0a45513767d914aeb7c96bc111b4048c"],["/categories/工具的使用/Nginx/index.html","f30440b54fa27a7f3451684cebec1854"],["/categories/工具的使用/Swagger/index.html","0887c1249970e85305175b3f8daa3203"],["/categories/工具的使用/index.html","a8f68fce4b1003f5bccd7f3cd525e588"],["/categories/工具的使用/博客搭建/index.html","58a04afa5dd1517e94fb495490651751"],["/categories/数据库/MongoDB/index.html","29878aed29fdbb95a01cb59a06c2bde7"],["/categories/数据库/MySQL/index.html","f7292d1873ba2fd6eb5270460e381714"],["/categories/数据库/MySQL/page/2/index.html","2cefcb19256032002929b863db70eaf8"],["/categories/数据库/MySQL/page/3/index.html","f20f883152212abfd6a006e57f81b8a1"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","a62ac1c3f87e8de8977ea6a5c9108062"],["/categories/数据库/ORM持久层框架/index.html","c40e11a7a33a9677c043faf8bbcef315"],["/categories/数据库/index.html","8807aaf8da04f27a0a3d8b2adc59d85b"],["/categories/数据库/page/2/index.html","3e258190a5d55e510777a56fe3c0cf97"],["/categories/数据库/page/3/index.html","60029da85154a9956eced99b758f431a"],["/categories/系统设计/DDD领域模型/index.html","f33fcd58f19680f648fa772ea41842f9"],["/categories/系统设计/index.html","51004db5cabd1131260b52d043fd1a81"],["/categories/系统设计/page/2/index.html","c2eae1f09b472ee3ebf0e6a84968ee3f"],["/categories/系统设计/分布式权限认证/index.html","2176574d68d9b2d0001899a86017c016"],["/categories/系统设计/设计模式/index.html","deaa284926ef8af18e4dc58d4ed6c815"],["/categories/系统设计/设计模式/page/2/index.html","79485b0e80d9d1aae7c576b285a1c9f7"],["/categories/计算机基础/index.html","5b15510d55422405e17753ea7663a9a2"],["/categories/计算机基础/page/2/index.html","306559d735447151ca8ec2d62d6f3926"],["/categories/计算机基础/page/3/index.html","5b6f8711c949ad7a02ba42e26265e01e"],["/categories/计算机基础/page/4/index.html","4b2acd468aafb3b6506b7b33ce702de4"],["/categories/计算机基础/page/5/index.html","b03ac7920d88330b7a2048c3d7b1fe6e"],["/categories/计算机基础/page/6/index.html","73f5bdc0b49403d5e2863bbdbddda203"],["/categories/计算机基础/操作系统/index.html","75dbb3769796461d546f3cfa84eb7a92"],["/categories/计算机基础/数据结构与算法/index.html","ed7f2013debc8b7b55fd5ca970d27356"],["/categories/计算机基础/数据结构与算法/page/2/index.html","2084f8af38047414107ed89849c26fc7"],["/categories/计算机基础/数据结构与算法/page/3/index.html","3705dfa5a50a10b9ace72f1ff762132b"],["/categories/计算机基础/数据结构与算法/page/4/index.html","d62a434e3ba3b8a80c58ca1f0d74bf72"],["/categories/计算机基础/数据结构与算法/page/5/index.html","6ad58d949a8cacaf0b4266feb430d60e"],["/categories/计算机基础/计算机网络/index.html","ceff6d65907a8059aa73be77188b10c6"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","6a72ffabdd0e403ec65375d01ed5de24"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","72ef891662ce8f10d5cc47b1c3566779"],["/messageboard/index.html","ab0b520c659c869f85669a886b03a31e"],["/page/10/index.html","a185b30ff0255d67b262bb2a5ae84999"],["/page/11/index.html","df59d01638a0452b2f1c2621c0f3580f"],["/page/12/index.html","31e318d9e431eb16f14a613267d1d155"],["/page/13/index.html","02fe7294ad00ba9c685c9ad6db72d338"],["/page/14/index.html","797e42cfe47121d5131ad02861527993"],["/page/15/index.html","7bb8f27ec72eefbed5b29600ecf26100"],["/page/16/index.html","327440f2571a87f319aa938ddf79bdc8"],["/page/17/index.html","c06d0a70d3668c53517364908a28ba12"],["/page/18/index.html","7b1eaead968483436121dc08f029ae9f"],["/page/19/index.html","740a905e8342c634f9a836736a9dddc6"],["/page/2/index.html","ecdc8a52077a39dec05bc77b8db9bca2"],["/page/20/index.html","5694453a15c6b58fe7596281df58b8aa"],["/page/3/index.html","224e954725b3af2cfdb19bd25806d423"],["/page/4/index.html","5fa620033bc40870b3efd80a27cb57c0"],["/page/5/index.html","a06d0b411da504d1a89d13ff905285cc"],["/page/6/index.html","0c4e9f2f94546630756b7eb12f38900c"],["/page/7/index.html","da86fbf677019c7865b0744e89d8f325"],["/page/8/index.html","3e03608290c6c2b02c0648ff00516705"],["/page/9/index.html","2eb879534b8766db8f14076e2345e9aa"],["/sw-register.js","7f4be9e6c309f3273f5508f6cd1c9125"],["/tags/Ajax/index.html","53843542c201223f165f6e9cc242de7b"],["/tags/Axios/index.html","01364e9f86eb1d6a326266877782992c"],["/tags/CICD/index.html","e1cfee22d6a46f98cf74e4566205d899"],["/tags/DDD领域模型/index.html","800f0935618c5fdd47eb6c3f533d6c90"],["/tags/Docker/index.html","817f568b4318e9b1b1e426f1b6088fce"],["/tags/ELK/index.html","46b5b03ec9679dfede5f305b8a7b3fd8"],["/tags/ElasticSearch/index.html","b8c29073c0beb0ab5e2c4b757479bc7b"],["/tags/Git/index.html","ee7c3d088102e4ab8d6fbba998df10dd"],["/tags/H5/index.html","7f2b78a52e95fb48f578b11b87b1f212"],["/tags/JVM/index.html","50039f022198e249d2b2cd66948a9bf1"],["/tags/JVM内存模型/index.html","a3bb2896ac066dbf4ad61f5df5b720c4"],["/tags/JVM执行引擎/index.html","7fedc9192283192b8e61bd480ec5051b"],["/tags/JavaScript/index.html","534438d8b4cf5ca1c653752596e612e0"],["/tags/Java内存模型/index.html","073a895aad7bf583486ef198261da63c"],["/tags/Java进程线程/index.html","42bc1f23f4fe5fe5a5ba06a793271445"],["/tags/Kibana/index.html","0085508dbf20170d92030196e0657b85"],["/tags/LeetCode/index.html","12463808e611b7216761c45937a78bf2"],["/tags/LeetCode/page/2/index.html","ab3eb7fcbda31e3c1c1a8545016111cf"],["/tags/LeetCode/page/3/index.html","f4c69eda2d88828d7c318668fbba9180"],["/tags/Linux/index.html","bc79a74b8bdaa702cfc3fb0dbfbd3465"],["/tags/Logstash/index.html","82e70ee81448030acb89956b727377a4"],["/tags/Mock/index.html","f1174ce4eaa826dee9ec51117e7c353f"],["/tags/MongoDB/index.html","39b2b960dd3c51d7e653d63c39c1fcd9"],["/tags/MySQL-事务/index.html","a33a78b0d8a63b742d933f9ec3f2a1b9"],["/tags/MySQL-数据类型/index.html","3c2ba68de085dc2037983c7ea58308f4"],["/tags/MySQL-日志/index.html","15f119356f509d21d00fa21dbc868bcf"],["/tags/MySQL-索引/index.html","bcf1c013e5ab877887b2e9bd323d1908"],["/tags/MySQL-锁/index.html","8e4313462e1c9a5e1ef1c4a32efb23b2"],["/tags/MySQL/index.html","ed3584d4595e0738f20d53a638240f54"],["/tags/MySQL/page/2/index.html","a459bf64a55f4b9690a8b365f9d5c6e9"],["/tags/Mybatis/index.html","b820aeccf3a5ffd95f692a4e664975ce"],["/tags/MybatisPlus/index.html","884ff8289bc03bd493d225bfe205949e"],["/tags/NIO/index.html","1dfe84dd09cf2771de71aef9ab4b1562"],["/tags/Netty/index.html","5ee275e70540d2edce5aa5e225808341"],["/tags/Nginx/index.html","68f1e233dac49211d0aec0ff2291dc3b"],["/tags/Promise/index.html","69919fdb7715f1515b19667e49247f92"],["/tags/RabbitMQ/index.html","db1d23ff3bc7e7f2b5dc79803710d98f"],["/tags/Redis/index.html","2befb9d2969dddcb721d5f2f1cc97a89"],["/tags/Redis/page/2/index.html","cb6fdf42725f5a715ae0cfa0487d850e"],["/tags/Redis/page/3/index.html","f6a78a95e50f6fff681d60973123d014"],["/tags/SSM/index.html","cf687e586d3d3e57aea755aef187d7ad"],["/tags/Spring-Security/index.html","0fbad9e43a87232f2d1e08504e4ea3a2"],["/tags/Spring/index.html","ee2e689fda4b18b5c2ff0a37cb24629d"],["/tags/SpringBoot/index.html","e8104ca9e2873f1a853f55790779c7bd"],["/tags/SpringCloud/index.html","8ee7d6f3482bf285c56e79c04eeec690"],["/tags/SpringMVC/index.html","930539e21dceed72121aec228c25d141"],["/tags/Swagger/index.html","41c0a17bbd03f5560a24565c5370e10f"],["/tags/hexo/index.html","4d407ad97a6c28b329ecc0cf87e5ab54"],["/tags/index.html","32729c22f435b02895e8f11009dec662"],["/tags/jQuery/index.html","2ae8ec3ca504732587ed2aa7a5a18f03"],["/tags/java/index.html","0e7981386e4ec42102669658c1b28758"],["/tags/markdown/index.html","c3bb29112af239bde3b4cdf8f3342cde"],["/tags/noSQL/index.html","cc37340b649c9b0aa6e3e21b30827b18"],["/tags/typora/index.html","5e73d53c457b733aebacf4c5dcf9f5ed"],["/tags/vue/index.html","79ee561d399f57105c1b72c04aa1d88c"],["/tags/享元模式/index.html","fa650f65664683c528a9e7900966bc33"],["/tags/代理模式/index.html","907a50d2ba2772f12adc54f167e02df3"],["/tags/内存管理/index.html","61101a48b232ac76b77a41baec5741fc"],["/tags/分布式/index.html","1bac9ee3554afbafbbbeea536509ae5b"],["/tags/分布式系统/index.html","2b2d0c201253d3873484074fef1c105c"],["/tags/前端/index.html","72a22cd156322f21bdd357fd6e911942"],["/tags/前端/page/2/index.html","73d97b87d59b1ae121e79009db0d8cc8"],["/tags/博客/index.html","fe78fdaa4cd2c3348dcb98ad3cc727c1"],["/tags/后端/index.html","493068caf2f308a6f3812621e63523d1"],["/tags/外观模式/index.html","abca1a32d3755b1061cc468844be96dd"],["/tags/容器技术/index.html","a3571035ae8b7d6628365ffc4f7c56de"],["/tags/工厂方法/index.html","4449c20a43a2be966f3511097db9550b"],["/tags/微服务/index.html","50aa5e00ad8f65b7809a89e9bfd03b08"],["/tags/抽象工厂/index.html","3ec985fd9995569930077acb9a4afe2e"],["/tags/持续集成持续部署/index.html","8fd3177a828e1d4fac01ab54e39909a1"],["/tags/搜索引擎/index.html","ef54b679ff7cf5e7eceb312910a8a8d5"],["/tags/操作系统/index.html","4e02c88a9e9a43c2f9897f301ce33770"],["/tags/数据库/index.html","20001a272f5c0691f9fbf94b9f25eeb0"],["/tags/数据库/page/2/index.html","c974c8c4637339cf0f35e955d2cc4a75"],["/tags/数据库/page/3/index.html","a1e56d156a3fc0fb1708fb9455f40f26"],["/tags/数据结构与算法/index.html","7e80496c1d3f92ca4f272439bf2274be"],["/tags/数据结构与算法/page/2/index.html","a9343c30a3391a26b719a80a5871f7f0"],["/tags/文件操作/index.html","d223177af6b729faa4042f8489dcd82c"],["/tags/日志/index.html","0b4a7ce568db07bba21e7f4493018c8b"],["/tags/服务器/index.html","05fe90e32ed58189cbaec65b689296a8"],["/tags/权限认证/index.html","f740dff65a9a6baa59a803cc293284bc"],["/tags/桥接模式/index.html","ccf04f3c8fe117e89155e211a53bc387"],["/tags/模板方法模式/index.html","9793b512bafab7b5dc1e5a37aed25c73"],["/tags/死锁/index.html","fe996011d4e4af7420bf247ce3796fa8"],["/tags/消息队列/index.html","c7f525eb76d2bff0a5dd8c707257ee2d"],["/tags/版本控制/index.html","9a3f3e1f16ac1cb4b1c9d90fed7490e4"],["/tags/策略模式/index.html","06d480ff022346d09e80f1ea5840201c"],["/tags/简单工厂/index.html","f87ebe19842628efde1b62d27e628093"],["/tags/算法/index.html","819968b1e22ad77c5f9e512bb4ddf964"],["/tags/线程活跃性问题/index.html","e29c18ade2bbb6e2bcee4ebb8fae6744"],["/tags/组件化/index.html","2648fc900fd3c65c028f471024d2e8c1"],["/tags/缓存/index.html","f23e9036b478237cb9f174293a2cc4de"],["/tags/缓存/page/2/index.html","11958105156f5ebe150bd06095b094d9"],["/tags/缓存/page/3/index.html","cd16d8859278e852c2bd7da27fcbd6d0"],["/tags/观察者模式/index.html","2ccad87927f6b05f5b1c099756edd92f"],["/tags/计算机网络/index.html","73fd3df502f0179b0c7b3051f9a43b6a"],["/tags/设计模式/index.html","ce815997d2c8f40aafcd616ed907ddef"],["/tags/设计模式/page/2/index.html","bbf7bcec5d348fdca49f0ad968883b11"],["/tags/资源共享问题/index.html","8ef5a9ef28691763739e90bceb0c74a4"],["/tags/进程管理/index.html","fd63f2d9692996469cbd02bc6ba4c579"],["/tags/适配器模式/index.html","976c9e420b50c2189e41bdf2c1c55a5f"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
