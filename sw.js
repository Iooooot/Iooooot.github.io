/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","4aa8e757ee7a08fef30c2336318f7f9e"],["/2021/02/22/工具的使用/博客的搭建/index.html","730432ba77cb4a08ebab701e6ef620d7"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","bc5d4763f71b4bc32cd6485d57605965"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","c592c1e1ee5a3623d3e1fb10d79f9ef7"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","70725b5c78832034f1ad58c06c30f622"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","95d13b4a1c403628e3d1b48091deb701"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","739c5b79f438700bca4dbc8527d05571"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","e03bb018b868217afae575401743ae9f"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","27b2edadab9472003e8c254a6c5c8e46"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","d0294cd3f5722eacc691a29cb5620311"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","5cc506fac19751ecadff4bd0ccc3de72"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","9e4636dc0a18c25eb621ac77608e2222"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","ab400fdecc06d3e0a21795b4c4fa3b83"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","4a79315b8a048ab13082426e4d67a2aa"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","e5ebd409e99d92ebbe5f95da1b49fc9d"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","2222da90a4c38417e096150ded7d0008"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","977fdf18071220743a786eb0399a0820"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","0158053fb59d00733775b8f91164d672"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","7061368d883d86e2b49c71207d84a0ed"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","275370609f159dfb18e0c11b97ed790f"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","813833fb3b018c2e9a312215c9b8bb46"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","5314b91e017e5965f94548ff1211e223"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","1fdbebfe1da181633f32657c1e7a161c"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","0a16719a0923b24ba8bda3b0e0c4f3bf"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","6aa5735a1cb0aa883af00854531d25fb"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","97f2005014230ee0a65be986c895a2ae"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","b869fe0161b5ddb1fd75d0dc337cfed5"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","17a8118030abd385b03c8f211f0eda9b"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","0dcad462bbf7caef181625b1bc93cd9c"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","8b762f81604b4325270209a0808bd213"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","f86e041ba519ef622ee0fe298abde00a"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","b0e50596650e6a209ea96d28f79d5de9"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","8976a8ccfe098526b4c3082522bee14f"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","cae518bc964d7968cec03aa84b28e6bf"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","5c75c3dd6d33d442bf1d2acbb92f0ce3"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","dcc73c5a9d9dba46841f0beab36c2a73"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","a151a779e2cc1bf3059a918b8ab16ae1"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","24c0ee945e03f965689457f5681d4fc5"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","b55db9659ce352f78b895202fc97955b"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","25044167a670a6b10a04b3aaf7a4551e"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","8bbcbd6b4ee25180372ae4de542ea8f6"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","abe6924a4f47839c71e5885f39125f9b"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","85a8ac680b714ecc69634f0f7605d924"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","b6b2c574232e3167f321a6255ed02f0d"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","203262e1324432216e5944a24891fd0a"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","e3114e9277459941ce1e555522771638"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","92a87c75dfda0efa03b9044de49a4e80"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","52af0c395890283c5af3b79a4426d000"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","0bc12e2814a458190e65050cf1c923d9"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","be43bac018a76660949881d8b562d73c"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","fe194083b1c803248423e36c81db6173"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","50c66f3ffa07318e19fc15b3f9feff14"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","b865d1d10d8628ae23f9956e6a9df839"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","f47e3350113ed4987ea2bfac8d8c7bb8"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","57e9d00cccd71b277835d07a8fdcf82f"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","d1e3a49d2e0ceeb0185caed8acefec25"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","1b80b8353c9b8416787cc1d861bac4c0"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","70556559eb1f6105ac3845b76171116a"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","b6b2e30dfc3fbc01793fbaa76d67f8df"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","8ae8412d417caf55b18651c7190af3c6"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","b2f10c7cb418798e9738cd8f96e406ab"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","1294e351da9f2965d8ee6da47f1ad511"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","11e9b70d88b2d8e30253369fcd66bc63"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","878d3421220622d72d3a13cc3bc8d6ad"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","8a59d4c115b4df217f8b21786c199360"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","3e0931a778c278162ebe70707ca0751a"],["/2022/08/17/前端/jQuery/index.html","eb2df89d3eda82f6f970261f01acf924"],["/2022/08/19/前端/JavaScript/index.html","c4de17bf5f90a2402a723a6dc63edaca"],["/2022/08/22/前端/Ajax/index.html","d32950d9c33f03138524c0ef97e20338"],["/2022/08/23/前端/Promise/index.html","67f2624535b6e76355bd0ba9c4bf8303"],["/2022/08/24/前端/Axios/index.html","add13d97a794aca281250d8f0a35743a"],["/2022/08/25/前端/H5本地存储/index.html","c02a52649a15417dea93b50f928d7a3d"],["/2022/08/26/前端/mock/index.html","408d040f9508e1d588871b421dcd2498"],["/2022/08/31/前端/vue/VueJs/index.html","8640b176f2575545afa18a0c186000c8"],["/2022/09/01/前端/vue/vue组件化/index.html","43ae26c5995cc1c17d20f5139b8561a8"],["/2022/09/04/前端/vue/VueCLI/index.html","d3207e64311537890b2c777866eb300d"],["/2022/09/07/前端/vue/vue实现动画/index.html","7fd40aef98484bd9daeb44ac646d256e"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","909d76194172f77889e29c536e593144"],["/2022/09/10/前端/vue/Vue异步请求/index.html","f3c16428a603f4ca98eee49b83e3736e"],["/2022/09/11/前端/vue/vue-Router/index.html","3d5658e0f6c189f60de6d600be2d43cf"],["/2022/09/13/前端/vue/Vuex/index.html","e944a7bb733f3723567fa13b43634a16"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","f13945cef82f5c2109f6259e574f35b2"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","fb44a9fd077562cbe7ac0eb97e98ce1b"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","5c73e366e3812bf7e0b9dc4dfdbe2516"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","934d886b286217123c3e8fbeb49ef270"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","d373437c26248f112c62c32c717c7151"],["/2022/09/28/DevOps/Linux/Linux/index.html","96340e3fa087d235875d1cc84f3bfc8b"],["/2022/10/02/中间件/Redis/redis基础/index.html","49eb18167880e502b631598f1a798856"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","f384a48c938eedb2a9121ad2019c2eb5"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","ed14526c655fc26f3bed2267d75a5182"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","357d2d41eee17ec936093c2a27945b81"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","329fb65e5b13280310b527a37b85e95d"],["/2022/10/17/中间件/Redis/Redis集群/index.html","441e90398a1dd7e58a04d18fccb51ce6"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","ba8880e7ede9c080010016140add489f"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","d7be3b610397e7a263ff73d2413afd73"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","082b9e081fbf51098cd4552ab6929b0e"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","8d00f6a1b27d666ce319400c85561553"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","b7485f93d22928239a0e4afd1ef3cdda"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","8fa9f31dabf7a3428d3c8b082d59c45d"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","e503bab298f55efbed379369d3e13f4b"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","34b31cec5b4e2051c6e6022f91f984d0"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","b456b4f6de4ca9c4aeb320fcbaa9aa40"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","c87b92279a1c7b36caa3470a1a1eac84"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","b1fe75f1db9a8a8833d908c1f22b143e"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","f8a67c31869f1cacdc66051e22f73eb5"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","cf031c45cb98f5873997ffcf591d0cd6"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","f9621d43a5ee0d1fe7f1e101605908b8"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","34c5b84a0aae1d6d6eb26e6de6a3a3f3"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","bc223236287b5de7e2c753bda90f2843"],["/2023/03/10/DevOps/CICD/CICD/index.html","9a5a62f000f5982d61b7283097c1afa8"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","e5b896071ff68ae6de3fca59c340ee74"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","31eae439f2971c10d4bc82a113fb4cfc"],["/2023/03/13/Java/NIO/NIO/index.html","6810a6d809439d8a3e54b7cbe0ff20aa"],["/2023/03/14/中间件/Netty/Netty/index.html","113ea8bf357e9f08551c540ed0c2953e"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","f51934a41faa3c0bb17788e61a5eee6e"],["/2023/03/17/系统设计/分布式系统认证/index.html","0f28590b4094eda579e4cc21fff35f2b"],["/2023/03/19/Java/JVM/JVM概述/index.html","2146726340f77ff18ce0d97476094af2"],["/2023/03/23/Java/JVM/类的加载过程/index.html","a78f28d99d62521b01e7e5740b369608"],["/2023/03/28/Java/JVM/对象的实例化/index.html","346ff80516cba3af3a16bff16018a768"],["/2023/04/01/Java/JVM/运行时数据区/index.html","8a1fe3f19e41834e7491eeb42200224f"],["/2023/04/04/Java/JVM/执行引擎/index.html","cfea8aecc0a0a65f3a8ff4c47f6eca2f"],["/2023/04/06/Java/JVM/对象引用/index.html","bc23682cd69d1a7c97b374ea191a2f99"],["/2023/04/09/Java/JVM/垃圾回收/index.html","5ee5694de2da1e7efac3a4c88e965be7"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","1dcd091852b81b80f4dbc9c0b93ab383"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","a34d6c490826b684aac39e30c2478c21"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","48602088681386c14add0366328c7f74"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","e52c84dab66f23ab157ee3379f716fe8"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","382f03e9b8e50ae0a4ce426b57430236"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","0484c6fe26f741b185a430db972cd492"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","10d24444c6f4beaf7a101603e0ced2a1"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","a35d3748e3f12cdf24a796370d457d55"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","dec7df382ba925b4ab56a2b32b721181"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","360a2e092122f66cb5ba225fd334d0ed"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","c848f7fb47148536fcf58429c6e8452a"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","6498054f4999416b8771a2e3ba1ffa22"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","0e9643a4835763b6e5f54428737464b8"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","8dc6a779a0354a941a5ccee41c9b63dd"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","8cce07b3c2e734ea7622a8bae477f811"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","e5283b13010e9d1a8d248ec4b8af8224"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","bb461a91739eaeaf0e0040ad2c1c2e82"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","0c4dbc436610f02aa46bae962543989c"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","729989ba27e3c0f95c223a7606f4602e"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","131dd46eec8b9cc62cec3261d6bbbdee"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","45c913ae954df502b53f851aec3f6873"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","d70a704a9f8af17cbce880ba152f708a"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","e44efc919fb5eac27bc7c90108162feb"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","afae336aa9c99ba3afaf5c096c0ca562"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","f78f8711ef95f38a011a61b03607168f"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","60f127c2c13e979130345701f07e65a5"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","538fbfd026d2325d6b65978a8ec6fec9"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","6485592286cb2e971ec8ebebd1975f26"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","19da8aff1b7336d59db63d8d59ec29cd"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","272d4cea035047fa91e8c00ef6d8a8d6"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","263667e94e93a2838d216eb6eeaf8a2e"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","e235282556551eb625249716ef19e781"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","be9f006709179bbdecee70af600b73c5"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","e8fce3e45dd58a94f95349cc7f5fbac6"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","4083db116901feeb77bde32de010d3d8"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","13633954f38294a7197e869d0cfba728"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","0a02d9182021ccd3cf9a6a9003d3171a"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","668be0b6069f4cee795137d567ac27c1"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","e28fba16054e9cb6e2d2571599e151d5"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","b0c843ad9ab59dc15df5fcc1ccb058bf"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","4dd08c427c032a0a67cb68fff90319ab"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","54cacd2be179b6a8b7032dc3651361e5"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","45d666b4060d86fbcb2614999a7987c0"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","62581e57a060d1b4089728f655691f8e"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","9fae704755966d36c391372501c091d8"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","6e5eb59b26b7b5bd6f909514bdd1e28a"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","20100287f461108d81f83fb52bdcb7e2"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","f67adcb4c19dc5435521d8a683d93ed7"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","f96bf9b8054140194b77768d7870055c"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","261a298662babebdeb2afef28f8f9a18"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","e18e25db53123b0714617250615b9ee7"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","6ee179b4f395eba4039224d358f56146"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","6c03a125bb417632c87a1446c74c8e47"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","3ff84c68071eff4b24ac4b9b6b90dcc4"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","fe0c5837672477879f0906cc7d2a0dbd"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","ae339ccf4cce06b65497451692d1a351"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","0f8c9ca4caa5c0257bfb5766d71b399c"],["/2023/09/04/中间件/Redis/Redis事务/index.html","8cca310191337878ba78d2a177232e50"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","07772235d2f7263e5e16c8efe6c9d1e0"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","4d2d723866c3785af011694eb4b9fdcb"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","448ef6fd5cddb93a86b797a22e109670"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","9be8abed3bf92540b655f923ab9f2189"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","a884d6092d58c2c612c55ae2497a2a3b"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","e8c551254947c74f12d86796b5f92415"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","a4ffa1f5d5538b5d8d5a1a9d17b68182"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","9ae5a6d1bc1f06d6c36b78851830e18d"],["/2023/09/22/Java/NIO/零拷贝/index.html","f97ea045d1f2d304754b55086c4f284c"],["/2023/09/24/系统设计/JWT认证/index.html","478b8d2f7d762bf096b9aaea7790234e"],["/2023/09/26/Java/NIO/Reactor模式/index.html","6f37ba292dcf2f8257361d54a29b5def"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","9a17f2841518565f8659db0453aad92a"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","1904b89ed018d861433a5e0b4dcbbed3"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","a25f30a367838c264f296d7f9bdc2325"],["/2023/10/09/Java/并发编程/共享问题/index.html","a730bda7ea7c3110d66fa1aa58183ced"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","9fbfd1474027becf7c7e6aee50bf4094"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","80d904ad0a016e845e73a324c7817062"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","863fb62748b339f8449d81385b48c978"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","06045933b84fafc6e01b066ee3de95e7"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","1bba2dff4d2383a47db64dbc33bf9ac4"],["/2023/10/23/MySQL数据异构同步方案/index.html","58be8d48e0a7a5bcf5ada7b27bcbdf5c"],["/2023/10/29/动态通知方案/index.html","994c5604ffb6c98440f44b13a4205e8b"],["/2023/11/01/多级缓存架构/index.html","189a0783a74b5265a6eb408ed9a62948"],["/404.html","5f15457495643898f517b9ddbda7baec"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","6efd43a23f7ee2b9a3db4453cf6e02b2"],["/archives/2021/02/index.html","a5a09b24411da1053b45322390f8d163"],["/archives/2021/03/index.html","04c5389627e55e83c400befe77a487cc"],["/archives/2021/03/page/2/index.html","b37488052cf0c8f39ab9e93240ec5f88"],["/archives/2021/03/page/3/index.html","a745811fbbc952e62db208b6db8c07ab"],["/archives/2021/04/index.html","dad830f42addc4cda0d1a635c5875cc7"],["/archives/2021/04/page/2/index.html","67929bb0e6d8d630deaf687e98f80fa6"],["/archives/2021/05/index.html","30b7a4fa4a92b5d70a0efb319c6e3a8a"],["/archives/2021/index.html","ed4002bd0e16d55121ad56fa20bd07d8"],["/archives/2021/page/2/index.html","0a5212978e39670aedeae156445dfb21"],["/archives/2021/page/3/index.html","d7d6e67538f4d7fc20ca246f3681d2e3"],["/archives/2021/page/4/index.html","669c4751a4e8d7c28c1ddcb9a6459c10"],["/archives/2021/page/5/index.html","80a39ba9645aca0d5ea2a871576f9872"],["/archives/2021/page/6/index.html","5dee1f8dbd887120576a1231acbb99c6"],["/archives/2021/page/7/index.html","cf5884b4a3cb6ff567e96a85bc01e395"],["/archives/2022/01/index.html","f284a52a17e5a5066d298a368251ffd1"],["/archives/2022/04/index.html","e313fcf5856c87aa2bbdae81762e54a5"],["/archives/2022/08/index.html","601b9def2abc967af02105832093a6e3"],["/archives/2022/09/index.html","be49289eac5c6a18a5fbd03a0fa5c83a"],["/archives/2022/09/page/2/index.html","c92e85cdbb46764fefc461ec4908ca85"],["/archives/2022/10/index.html","41df8f5ce85bfdedb93c63b75a2aa4ea"],["/archives/2022/11/index.html","233553c04913c6469ba074eaf01926fe"],["/archives/2022/12/index.html","4c35cc6058bfca3285fd382f01a289c6"],["/archives/2022/index.html","a9144b714e6d0fe3dd2486269f7a0d0e"],["/archives/2022/page/2/index.html","53243a6d7cb00abece57b681c12de61e"],["/archives/2022/page/3/index.html","97690bd045ffc7beb5067d62464f701d"],["/archives/2022/page/4/index.html","d146437536417f8f740fdaa5e8337196"],["/archives/2022/page/5/index.html","db6e5964be310cd714d3b74b0d804b41"],["/archives/2023/01/index.html","c42d311dc6741b81d536e7e73bb6b4c9"],["/archives/2023/02/index.html","1b08bd691da1cffd9ff5e5d452032d30"],["/archives/2023/03/index.html","d8d87d6748e41f82ab90fc00e37e3ada"],["/archives/2023/04/index.html","a3bdbcdbe005f269c445051d3e5ad80a"],["/archives/2023/04/page/2/index.html","83b1f8ef91c0eddd23c219fed25feb71"],["/archives/2023/05/index.html","bbecd1612d1f50cd0cd90525bef31788"],["/archives/2023/06/index.html","841022097b9d87234f2543956584414a"],["/archives/2023/06/page/2/index.html","5ec7c27dbf4e3e7f0eb0259280e9aa7a"],["/archives/2023/07/index.html","bea6ef3fd3dee7050292b5cb39029363"],["/archives/2023/07/page/2/index.html","ba6bb366d364627d025c74af7dbc8ca2"],["/archives/2023/08/index.html","014fc4bdc2ff0aae7f4f1f50225375d9"],["/archives/2023/08/page/2/index.html","a6a31d1ca6970c5b44357b9e69157535"],["/archives/2023/09/index.html","72fc30b213fb11b287e8ab5d854cf3fe"],["/archives/2023/09/page/2/index.html","8d8dc029e13c82f0a3621f673cec9d02"],["/archives/2023/10/index.html","80e20ec168975219e10e17b608a6af75"],["/archives/2023/11/index.html","3fd5cee8902ba55c676dff781a887a79"],["/archives/2023/index.html","9ce36b96df353e14cb8e57ad87996018"],["/archives/2023/page/10/index.html","c846eb256780c092a0399cf62fcde4c7"],["/archives/2023/page/2/index.html","a9a8ba1382ef66edea097db15395b377"],["/archives/2023/page/3/index.html","1780b6606b8246779fc6d36c9958cea4"],["/archives/2023/page/4/index.html","de65f376160baf00ccdf611ce8a46863"],["/archives/2023/page/5/index.html","9a47212daf6188f883bb584632a63169"],["/archives/2023/page/6/index.html","4769525dc2074fb4f41df95177842874"],["/archives/2023/page/7/index.html","608d16c3e5555eadecc50c3c61e888cc"],["/archives/2023/page/8/index.html","2d317d41b56da541993d7f1c8408cb6e"],["/archives/2023/page/9/index.html","07ae09fe0ae4012f8a321436799eb07f"],["/archives/index.html","69fbb4f5d1b1e688e5295e0557fe3cf0"],["/archives/page/10/index.html","308bb9a969fd90f033fb8a67b0b760c8"],["/archives/page/11/index.html","66cf73f1ce4f5fa09ec974c90191acf0"],["/archives/page/12/index.html","49a656538d7b5fd3caaff4f042c2ad05"],["/archives/page/13/index.html","32c27934223901c91f9847a0f175e82f"],["/archives/page/14/index.html","2d3ed19b8117ad2f7a47704aabef6b2d"],["/archives/page/15/index.html","6c8b31a2afefc79a82d3bb377632d4f3"],["/archives/page/16/index.html","5eabb887ceda30489759880ee0933474"],["/archives/page/17/index.html","039f1d83f83eb98037f33b58fd9580f8"],["/archives/page/18/index.html","924d3312d5e8f480cdf7f882759f540c"],["/archives/page/19/index.html","c0022eab9acf227f9efc93ba7d985f2a"],["/archives/page/2/index.html","e4de1470a9b478d2ae0820123ad9dc83"],["/archives/page/20/index.html","31dc09611f9ce7d69db90f9424ca6ca0"],["/archives/page/21/index.html","b4aecd698b56f24610b2a5a42ca3918d"],["/archives/page/3/index.html","f43039a7c52e3f19e8c49214027190f3"],["/archives/page/4/index.html","92cea2fbe03f8c0c11ae87ca850716be"],["/archives/page/5/index.html","0b009fdb19d2802a151b7a2a16d1620d"],["/archives/page/6/index.html","fe201fcaea436cf17978d18199884413"],["/archives/page/7/index.html","0f79ffc2edea27e50563f7fc731923d7"],["/archives/page/8/index.html","a96ab7247e94b88b302f4d5ab2e18865"],["/archives/page/9/index.html","7dbbe63cd1ed65d238d043d10d65ec59"],["/categories/Devops/CICD/index.html","dfcb2f3a33afd32dc133686291d16b67"],["/categories/Devops/Linux/index.html","cdede4f4f88c8797b3918ba6a3ed1f02"],["/categories/Devops/index.html","f630e9cde0e2959f4a8ff3922e48435d"],["/categories/Java/JVM/index.html","27b995fc0c2bcc7029540c93f96819a5"],["/categories/Java/Java基础/index.html","6f28e787247581ca6d8c6d4b609fd9f5"],["/categories/Java/NIO/index.html","d99d57edacac94d6e42dd12e4f0af86c"],["/categories/Java/NIO/原生NIO/index.html","e4e4b3ed123fc5083b04e3a69030978a"],["/categories/Java/NIO/文件操作工具类/index.html","c96dcf362d7a802ff5ad6228b1159656"],["/categories/Java/index.html","3f5a3ce143a9024fee23501be99f9100"],["/categories/Java/page/2/index.html","44a42c0577ba1956e82786e7241c9824"],["/categories/Java/并发编程/index.html","23243f9d5d0783b2292cc31233b8638b"],["/categories/Spring全家桶/Spring-Security/index.html","10d46e44015fdceaf8944b1bb4b41b0a"],["/categories/Spring全家桶/Spring/index.html","71f93f4098915e98eddea84edcc623c8"],["/categories/Spring全家桶/SpringBoot/index.html","f6c37600b21e76663bf51523d1f749c9"],["/categories/Spring全家桶/SpringCloud/index.html","38a0cb3535b008424909f6943a22bf70"],["/categories/Spring全家桶/SpringMVC/index.html","09ffdb017f10969a1e1ef838d5113aec"],["/categories/Spring全家桶/index.html","940f2b90b505c44b7a723b3f5f93cfc1"],["/categories/Spring全家桶/page/2/index.html","03fceaacbd6c303bdda5b5fa1c4aeea2"],["/categories/index.html","5018052c602c64895d1ed3af5e8d12c0"],["/categories/中间件/ElasticSearch/index.html","d52b4920f6f7265ac17c5d1eeaa39ace"],["/categories/中间件/Netty/index.html","e725fa612dfe7e6e798c3b5d087762af"],["/categories/中间件/Redis/index.html","a1d614f537e7714e79979a4162df74f2"],["/categories/中间件/Redis/page/2/index.html","9fcf217f51ba960e2b55525c0eceebdf"],["/categories/中间件/Redis/page/3/index.html","630d29cd5c59e0e565b049f855c5a1aa"],["/categories/中间件/index.html","08f486d8889aab317a864ff43561b8eb"],["/categories/中间件/page/2/index.html","a5435a0e351e12f474070b353037383a"],["/categories/中间件/page/3/index.html","fe4d6ba14a1b7a096571483216213e1d"],["/categories/中间件/page/4/index.html","006e6f94514d929b98c319b57c279e99"],["/categories/中间件/消息队列/RabbitMQ/index.html","f14ab5cce3c5fe5bb7248cabce1b1cf8"],["/categories/中间件/消息队列/index.html","05ed6ea745861665d55906b66b7581bd"],["/categories/前端/Mock/index.html","074e8e30469878f3659b54a8f4dfd92d"],["/categories/前端/Promise/index.html","0f068ecd23ebe7485d997a0b3f08582b"],["/categories/前端/Vue/index.html","4b38a8c761dd00946a6ba92393746b0f"],["/categories/前端/index.html","5aafa071135f6f502439d176c2438efe"],["/categories/前端/jQuery/index.html","31b162ea2d3445259645c5080a2ba4ab"],["/categories/前端/page/2/index.html","3ff87b4dd020e30842fd76eb70c7edf3"],["/categories/前端/原生基础/index.html","942b77914d9a265e05f6880b4359369f"],["/categories/前端/异步通信/index.html","2b2e9ba68dc509d5d8b2dc3bf39788dd"],["/categories/工具使用/Git/index.html","f82e959780396b59e070ef04192bd0e0"],["/categories/工具使用/index.html","6d1cbc79b7d434aedbc021f34a28ac53"],["/categories/工具使用/markdown/index.html","3ed58e11d610d0d6980928becbd14fe7"],["/categories/工具的使用/Docker/index.html","60518111ff3c5491ffdd8a1505368d4e"],["/categories/工具的使用/Nginx/index.html","9c448216063382e99b6585e707680184"],["/categories/工具的使用/Swagger/index.html","618d2433fc7561408ec839c03d4df828"],["/categories/工具的使用/index.html","045691bdd2109428dc66e9150ad7c650"],["/categories/工具的使用/博客搭建/index.html","699b7d289f37e40e363150c9a77928a5"],["/categories/数据库/MongoDB/index.html","e2b4219d40b65e4105318c6c746fadcb"],["/categories/数据库/MySQL/index.html","d0ddda556e72e83d16867440b8ffde48"],["/categories/数据库/MySQL/page/2/index.html","c993e64cb85a6162f77da87f17ae25d4"],["/categories/数据库/MySQL/page/3/index.html","9d0376ae9c8b126bd5671ad64473eb92"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","fe3835489664d3b09c1e570b577b62d0"],["/categories/数据库/ORM持久层框架/index.html","c1475f0542a663879f0fe865318d7e9d"],["/categories/数据库/index.html","0d6035f6a3cd87deb51b7321f972ddf7"],["/categories/数据库/page/2/index.html","215324c1e3341aac78d79dadc19e8e28"],["/categories/数据库/page/3/index.html","fd3ae303cf9d51d19bf5db55a67cb071"],["/categories/系统设计/DDD领域模型/index.html","db6c3bc1623746e62364de2b8c9a0fbe"],["/categories/系统设计/index.html","4a0b1694aafd519002785738abd1f655"],["/categories/系统设计/page/2/index.html","3dd3699c00587f3879fdda6240842f89"],["/categories/系统设计/page/3/index.html","67c7baaea1907fd892ec241ceeb6c4b1"],["/categories/系统设计/分布式权限认证/index.html","11e89d7bb086c840b55547ae93edbb91"],["/categories/系统设计/分布式系统/index.html","e788d57703257839c0412c5b7aa47427"],["/categories/系统设计/设计模式/index.html","f94169d6ff75122d2b64966bcaa208b5"],["/categories/系统设计/设计模式/page/2/index.html","70296b60ced80988f78fef13e9abafbd"],["/categories/计算机基础/index.html","bbbe5fec5e140462faa61791f8cd2b9e"],["/categories/计算机基础/page/2/index.html","7511848e6e2ba4c966377e585e4d6660"],["/categories/计算机基础/page/3/index.html","c82a809c78ee7e0ba8b89faa127bbc97"],["/categories/计算机基础/page/4/index.html","4ef6abb9bb34a63a3ca3a8453318c9f2"],["/categories/计算机基础/page/5/index.html","e628a709f66219cfa83dfb1f7384e755"],["/categories/计算机基础/page/6/index.html","2b5b3a4f06587ba21968f08c51626c19"],["/categories/计算机基础/操作系统/index.html","82f99400700e1dbaba994c7309ddcd00"],["/categories/计算机基础/数据结构与算法/index.html","f6b2dd2b243a3c91f290a7d82deb4a89"],["/categories/计算机基础/数据结构与算法/page/2/index.html","df925f0e13964fbe9eabfe9f61864810"],["/categories/计算机基础/数据结构与算法/page/3/index.html","fe2f109f4711c7981d3f73c7d12abe4d"],["/categories/计算机基础/数据结构与算法/page/4/index.html","a3e665a0e0b79411faac0d2b9926abfc"],["/categories/计算机基础/数据结构与算法/page/5/index.html","3ca6855cf2889e5d1a3469ee1ea56803"],["/categories/计算机基础/计算机网络/index.html","42f3c53eb5741b2d7e96c1bcb76771b2"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","59747c468c1cd5d0c810da7e8966e86e"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","d8a546e00d5664fdc3ab65126cf0ead8"],["/messageboard/index.html","24c757bbdcc75c776b821682b83af5a4"],["/page/10/index.html","0d941a3ec21f5f8424a092acd58cf75f"],["/page/11/index.html","3b66244662de664a285c070558b1270d"],["/page/12/index.html","8efedd82d16b1c1516db7cadc32425e7"],["/page/13/index.html","5d0bf651921d6f32b76282f3378feaad"],["/page/14/index.html","1e0da2df32763d0042dde0b70b7757b6"],["/page/15/index.html","766d77cb8471bf73f8aadc1ecb0b65c4"],["/page/16/index.html","8f9500f31b0bb3305d257c37604e8143"],["/page/17/index.html","fd0af239884c0430b32a38131bd9b9c2"],["/page/18/index.html","6bf362b1bd3f314eab9c8e5f70367c16"],["/page/19/index.html","adda7cec48da01bc013ed878ecbce91e"],["/page/2/index.html","60752ac972dfdfd49b6c8716c9846b83"],["/page/20/index.html","fe31e5f81008a003c28c0a1247714209"],["/page/21/index.html","25e6f239e3d32a6f73a6f5cdd82e04b6"],["/page/3/index.html","ff832fba07913ce4db1f719f9f236d9b"],["/page/4/index.html","3799fedea07d8da6b22d418fefaa78b8"],["/page/5/index.html","a2973835c16577b46b012d675643adc3"],["/page/6/index.html","46bf3a4a6109f6bedd8501702e754421"],["/page/7/index.html","67d0305bdba09183dc890be2028a5f49"],["/page/8/index.html","aab547474a8a40f1bf61469fa2f7d316"],["/page/9/index.html","2d28d9ed1a54fc6a06860ea5f1ae3c56"],["/sw-register.js","0b6404e2b2daee1b29419d7e4fe7a87c"],["/tags/Ajax/index.html","8ebc2660a636b39ebb119e4b74f1a5d5"],["/tags/Axios/index.html","45751a8958288caf28099b1ec94de251"],["/tags/BASE理论/index.html","f1c7a2bcdb9db705ee1587bd76228395"],["/tags/CAP定理/index.html","41e2b926913b1c89ca36fcc38faa234f"],["/tags/CICD/index.html","966ab172628f78ff7f455e55a5e27fcf"],["/tags/DDD领域模型/index.html","db1d94bd319a9cf8ee79e19515ff3fc3"],["/tags/Docker/index.html","8fa1894d7b68397a02b1377f2df4fb3d"],["/tags/ELK/index.html","4e85677c6221b3c8c5791dd6f07282ee"],["/tags/ElasticSearch/index.html","b8ea973c351cbda3cb3cc17822992cf4"],["/tags/Git/index.html","969f6fe4c3dbb654509b42e3e70f289e"],["/tags/H5/index.html","463820cac9f2db377dc60f6e451110fe"],["/tags/JVM/index.html","0b935c2d748065dc994837cd792526b0"],["/tags/JVM内存模型/index.html","70d94448cab5ff895ad859b5c8f4fad6"],["/tags/JVM执行引擎/index.html","1b3168f182a2354dcd86562cfb445955"],["/tags/JavaScript/index.html","34cd943c53899bf6394c7bfd4592e4cc"],["/tags/Java内存模型/index.html","e4c9006ef09400a206df6b2e04b71fdb"],["/tags/Java进程线程/index.html","df8388c378c3f4e4939bcd7e31b89e68"],["/tags/Kibana/index.html","a8e12a773c1e5e0723bc62a335afe1dc"],["/tags/LeetCode/index.html","8a2e71baf4739c2a94b11d87ae391474"],["/tags/LeetCode/page/2/index.html","1fcff02c8d92288e9bfe3b7ea4c99da4"],["/tags/LeetCode/page/3/index.html","6de7ff6c8f38ad12e46eaf55e1f5c97c"],["/tags/Linux/index.html","985230e9f1b865c2eaca95a03a9b7bfc"],["/tags/Logstash/index.html","7bd7dec270d65e641eb071487584d48b"],["/tags/Mock/index.html","aec1d2ddeaddc15c4e982236a1db9095"],["/tags/MongoDB/index.html","84ad0baeb9e93e47ccb75c363f89a8b2"],["/tags/MySQL-事务/index.html","2309a6c674b9ba6071eb5eb5fdfcf02a"],["/tags/MySQL-数据类型/index.html","c6f5cb62f7ba29a691ae6e68553d0271"],["/tags/MySQL-日志/index.html","0b2dfd9b3e129c38264dbd8b76cfcaee"],["/tags/MySQL-索引/index.html","38e42d4d7d8b2fcb758ed43dc2c641d2"],["/tags/MySQL-锁/index.html","b076fa42b66dc78b978c41a0a729f3f3"],["/tags/MySQL/index.html","c90fa4ecbd873e3f67ddefc2b24a6d6d"],["/tags/MySQL/page/2/index.html","fcd90193444a7f256b26f3445bf1452d"],["/tags/Mybatis/index.html","44b3db0007252e3ee17475c99833b576"],["/tags/MybatisPlus/index.html","30cff5709161a72d4dd30f1d990c00ca"],["/tags/NIO/index.html","60a5eab5cb0626aa21be9b5730b23b16"],["/tags/Netty/index.html","e9e9789bba352b0863a51c200fd04cfb"],["/tags/Nginx/index.html","a8703acf7e9d6dafe53b83ae6df04f2a"],["/tags/Promise/index.html","13488dc25108fc461c11b79fda6273e1"],["/tags/RabbitMQ/index.html","8c1b08e8545688a1b945c95b2875a9e4"],["/tags/Redis/index.html","b773458e7fadfcce9ff14964fb8cc373"],["/tags/Redis/page/2/index.html","215de8ff5540ef6bf1504d5ea3536bab"],["/tags/Redis/page/3/index.html","49cef518dce371e58f5130988b885204"],["/tags/SSM/index.html","8b818cc8bd78e44b6e9855092a72212e"],["/tags/Spring-Security/index.html","2db6aef7acc935528e7046ef81920e9e"],["/tags/Spring/index.html","9a5674d287d99d9e59fd3535e9ba5e5e"],["/tags/SpringBoot/index.html","7c8376aa07566b819e040fb74f8ad0d9"],["/tags/SpringCloud/index.html","6c721fce2bb28969a81cd916050947ed"],["/tags/SpringMVC/index.html","fcbcef4fce0baa3748ab16dfb9f70273"],["/tags/Swagger/index.html","1b53b147fd76221fa41d89ca3f2c2590"],["/tags/hexo/index.html","91e66ea66bd26cbcc13f862391216035"],["/tags/index.html","28b95825410a541b5c747334d9b50a9e"],["/tags/jQuery/index.html","34a005b2175b2efd9fd75e9d972d43c6"],["/tags/java/index.html","7dddf3e6421ef79f471ee2a3ba293a8c"],["/tags/markdown/index.html","dd44577c908bc453fc36cb07f55f65d2"],["/tags/noSQL/index.html","fa185b0673f5f4a205debb4c82b1775b"],["/tags/typora/index.html","db7ce4942cb504f2963834e70661a81e"],["/tags/vue/index.html","6baf1fac4225d5148fd5c9faefe87826"],["/tags/享元模式/index.html","b88eac08f32be9b797c0f240f18cb3d0"],["/tags/代理模式/index.html","4853a248bb55f8a21b1f3e529e18a7cf"],["/tags/内存管理/index.html","2954e25f6f27c5596bdbe69506017097"],["/tags/分布式/index.html","95aeed2d23231b7d35f280e55b0f1a6f"],["/tags/分布式系统/index.html","cb65b96c0ba016de22f89fbd69c49617"],["/tags/前端/index.html","d2b8d13f529064360e2f30704741b286"],["/tags/前端/page/2/index.html","a2f0648f15c8bc39c6e8cb619a2d743b"],["/tags/动态通知/index.html","449ea805516b85236614736dbcc3257c"],["/tags/博客/index.html","0f8633e91c1f8f7a1a406ce84bf0a1d1"],["/tags/后端/index.html","d1263452d36abe8d78c55705131ee422"],["/tags/外观模式/index.html","e952a983d5b503fa5ba2fa9d58d5ef14"],["/tags/多级缓存架构/index.html","271858ba4e067b458889a9164f81d164"],["/tags/多线程设计模式/index.html","1bbbdd7634198c1a1a385099ea791a33"],["/tags/容器技术/index.html","0326e14093b3dccc42e3118e6ca2e00e"],["/tags/工厂方法/index.html","e5b1fd66933a752c263bced99c6444f0"],["/tags/异构同步/index.html","2acc7070fa0b9078339ff5e533c094a1"],["/tags/微服务/index.html","00ad0ab49b54d1981883f82958716978"],["/tags/抽象工厂/index.html","f9450de6c3da98f3311233503f118f1d"],["/tags/持续集成持续部署/index.html","a6a92e37a0330c427e2cc68a8ed44144"],["/tags/搜索引擎/index.html","98670b354adc155e258213f572110b3d"],["/tags/操作系统/index.html","40670d687f83e441a004ff1283fb7d9d"],["/tags/数据库/index.html","eb7b2223e266b7ad22210f2d2e2463d3"],["/tags/数据库/page/2/index.html","d155c668a8e57a9b4448c9ff82fd5d9e"],["/tags/数据库/page/3/index.html","b8bd428171db14c10cd447bb11c21988"],["/tags/数据结构与算法/index.html","b513fb5fd6a6beb18ba0eb8d04f55e9f"],["/tags/数据结构与算法/page/2/index.html","9fa4d055c972a1edcff9ee28e5f34e5b"],["/tags/文件操作/index.html","96157dbe5d55029c02a68e3a7df865ff"],["/tags/日志/index.html","1be5389050fc7de22a3ceeb0e5ae0968"],["/tags/服务器/index.html","c1d5d562409308e1cac7a466aab0b5e4"],["/tags/权限认证/index.html","09df9f7f74ff8db3104aa5675cb9658c"],["/tags/桥接模式/index.html","e26cf56a23a9c5abeae7ce8f648fb9af"],["/tags/模板方法模式/index.html","9a2f61d2e899633b3b86fd6cac4f5e45"],["/tags/死锁/index.html","2f41131619c8208435147486cc50033c"],["/tags/消息队列/index.html","5bb7c9dbbfb6ee4589db25e3acaaf408"],["/tags/版本控制/index.html","bc19983d6d7a6031faaaa3b816ee0996"],["/tags/策略模式/index.html","90c25a1c4d226f9f67df07c1174e6ffa"],["/tags/简单工厂/index.html","63414a8a4ac5ba5ef17de59a4e521393"],["/tags/算法/index.html","fcfc24b1bde4caea232fe20a852bfb25"],["/tags/线程活跃性问题/index.html","1d4f76424e2ac70626178ad50d163dbc"],["/tags/组件化/index.html","e3c7426be02392e06e95bc0c3c398399"],["/tags/缓存/index.html","cc9f278e0bf0d6d29b8b94d2f4e07b2c"],["/tags/缓存/page/2/index.html","69e2b217cb11a71b398fe05bdaa9f33f"],["/tags/缓存/page/3/index.html","8d6bcccf5715bdf9e57ca4ea9eedfd97"],["/tags/观察者模式/index.html","ca47a99951d4c3fac4268a79bc8f5cfd"],["/tags/计算机网络/index.html","cc231e614d6477a3db0417fe8ac760ca"],["/tags/设计模式/index.html","ef4a069a45b5daec694ad843c4a769cd"],["/tags/设计模式/page/2/index.html","08c06ae972be277090b0f212c4956614"],["/tags/资源共享问题/index.html","721581dbbad57f2bbe3df3e49948a194"],["/tags/进程管理/index.html","607cecb9e38f0ac6f529428777ee14df"],["/tags/适配器模式/index.html","f1128b206c6c3dfe8ff6f2740a267ea2"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
