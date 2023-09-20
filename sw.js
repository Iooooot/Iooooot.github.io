/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","c45aa5a061acb055b4cd1bcf741eb7bd"],["/2021/02/22/工具的使用/博客的搭建/index.html","f3b6f455fff4965fc6fc7c107b318b73"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","5c0c34fe8cc225e4066223aef8a74a93"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","1030a6e6955d48a97ea35ff407b7ad50"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","9e090eae5a38c034d96914f65c920bdc"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","4872523592b9644383b652cee568fcb1"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","64ef2d157a014ddde296c7f0f0b8684c"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","096628c02444db4a4c5d760d2665eba5"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","ad7d1b5bc55bb8aea1854b384dd19864"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","bb4448528b84c5ec9e89813b26a3cf5f"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","ddf88ce1c3f744aec85acc2117f4ebfc"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","564c98b1c6df9533d6ae098821de171d"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","ea6be2cda28458b7ac99671ea32befaa"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","c5cd90a22f21d527e6c6d32cb22c7ec0"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","ed8baf5d9fd17b541bed833206ed98dd"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","732db44d5e30db0f51d2fe5f73e78177"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","05016ac00f0fe8ac7bc92ad7197fdd27"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","241974b64662d96f2a73081646a5e13d"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","08e1b69f47b40e25227f026972b4ecec"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","412b4966563011d9a6b29e73adf59fe8"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","6cea2b5ab4fdc78d7205cf93929ac2e1"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","d63dc65b56934d8b3d95fd7d8c3564ee"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","c7552b223ebdf2edfbc108dbd9c9ffbd"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","3bd0db62a9f1ab8e7f9ec0595e83212b"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","a4569bc5e931bf24f672d8301310cacb"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","2e6bbc1fc23b2a47829dfaa314e2d79c"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","f40d369d0daf4ed2340fc3169e86f857"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","a5682c849685ffd86b3cff54ba257d57"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","a23b1796e6ddd014b156195ae833a551"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","aca2ba84c10dd6aca93431a8321ed1ef"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","75def0c15054c2d01403173ae4dc56f7"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","a4c89894f44cea1e3884f6e2b58bf4ec"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","4c3679f60721ac69181c3ffb5558e430"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","e307f72739ffbb5c612aa1adb7915865"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","989d7395a9f6ea2c5db801599d16029b"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","b5d5834702961f6162b69af1e3e545c7"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","78f52d0a860e557b915fab9a3baf489d"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","79b998def817be9c16ef20fb25081bdd"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","4017dd6dd78c72217abce002f0f1fac4"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","79411cba3296ebca68cc8df75c929865"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","796f7b883198052ceb81ff6507972c47"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","4076c7ba91eee69c1f9570ecaa5a2429"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","06b89030a6dbd6d2135d7d8ec0d78f40"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","d024bfccbe8028b56757d8542dc3cd91"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","9290af2409a9193aa9b250ce98d9ef63"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","50cb045966e70b61e940e96ab4c060f5"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","2f76d899194bec347b6c8a2ca7bd321f"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","4d7671f26478f4c8398564aedbdbcce0"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","5431871b334a97b559a22cd9e7d13739"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","b0874913b239817a47ef3be9ec55412b"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","1ab20a939220c75d704f27495124d34f"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","878a243613824809b0aee3b8b1e735d7"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","5cd60f92348967ff97612fadef8f0be2"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","533d20ac07dc5a973b9156ae8b7aef2d"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","ed91b3e67d6b53eec4479fa00cbd77b5"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","dda3dfd772475acf416d9e75703d33a4"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","a0454c5faf13521c23e4d7a07c290cd5"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","bb79a08bef7d712bdf338e0283764f61"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","a2c1aafee9da35a6a70fe51157bc716b"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","04aaa7fc682bc954bfff6ae2665ed582"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","f1ca82a2f77630e36c053877010f3b56"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","41fc9c97463a42f483bbe97e1f9861a4"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","fe64f23a8dabf82b8a2347ecd699cac7"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","7773764832230d049453ed4835539c78"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","e15808ff7e65cc13a5df2ae073c59ca7"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","33afcf5deb2f334aa010f508be0d0fa9"],["/2022/08/17/前端/jQuery/index.html","e641c9aaf734ea57fdb805d2b88f9cbc"],["/2022/08/19/前端/JavaScript/index.html","e2f8d160f5a024c8e2e0c05c5df8025f"],["/2022/08/22/前端/Ajax/index.html","833af9eca4e7e79213d3cadbdf2c7826"],["/2022/08/23/前端/Promise/index.html","2aef2d1c3be574f51a8a0c738cd13223"],["/2022/08/24/前端/Axios/index.html","f6fdedfb942d4a263b04acd1cb13c581"],["/2022/08/25/前端/H5本地存储/index.html","2590f49e3474c8d0599380dfafcc2223"],["/2022/08/26/前端/mock/index.html","e1e424d2512a981670824c45f7449fc5"],["/2022/08/31/前端/vue/VueJs/index.html","09e944fa2ad2cc1a2bb4a6f3168f9883"],["/2022/09/01/前端/vue/vue组件化/index.html","863802c1e502ed11b154825a9f35caab"],["/2022/09/04/前端/vue/VueCLI/index.html","1521e16ccd929dc9e7c4243f2b474589"],["/2022/09/07/前端/vue/vue实现动画/index.html","ce4eca88f1357466033e4e3386ece888"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","f1dff0d67d9367fce121c1cac62cb725"],["/2022/09/10/前端/vue/Vue异步请求/index.html","249acac0426229ba0ccc409990f94c70"],["/2022/09/11/前端/vue/vue-Router/index.html","8ae05109dcc75322bf877b85b07c21e8"],["/2022/09/13/前端/vue/Vuex/index.html","c6547b13e0cc07cdac86219bb02fb3dc"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","e60d3abd088bdd55b8e056fbbfdc6e44"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","5db023faab730bd26eb43677218dee6f"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","a1878b2b62b7fcecb2558ff99489f540"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","16e6f9b48c8f3d5d24eb779f442f710b"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","03ed0240daf0f5323e9a975980984fcc"],["/2022/09/28/DevOps/Linux/Linux/index.html","1b1bd9dcb65f56abaa72ead28c3e236b"],["/2022/10/02/中间件/Redis/redis基础/index.html","49ce0ca27dfe79223382dd7bf2253e3b"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","f29e0d6fbf5e00b04bbb363cc3eed7f5"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","3a235aff181d3bcbe982a55da09eea48"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","8ec122ab1b598886b52f130275d5a71a"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","7dbaea62db7a5d0b134f915beabc8291"],["/2022/10/17/中间件/Redis/Redis集群/index.html","842f25d5fdea3a6b445422fea009d55f"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","96f8568379cafc3c1390b7843fe46cf6"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","3328c82756ae9bd2ff01027368192b6f"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","8290b5d44cf7a6df38ca10a7ce6eef06"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","d930a0c4c6cd86bcb51a47dea1c9eeb1"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","1738aecf38b67e8d188c82b7eff04603"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","107e3782795c73c2457f46a9773d9d09"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","b8f7ec299d02a5a34184fac8cc6c84d3"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","22381bc39b24fc575ec1f54738e767fe"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","116abc8c129ed8d235f4b747e4811b14"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","b81716859dfeda5a6178a93d69bfbf22"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","b91ac253d46784f58198e6dd1646aaa5"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","1bb4e2a25b4daf1745fe3c59694845df"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","b996eddb283508e29d05b3d5b31a94e1"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","8d46f2aead57e29549bf94fd8c2466ec"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","eb57a89daf2aca39976e4c3dfa495f97"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","e0edbe059a49c90b16d5e0164f0c4909"],["/2023/03/10/DevOps/CICD/CICD/index.html","b30568f08509170078e465adc3840761"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","85fd2d1efbc783cd53b2978753a7f0cc"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","8ace4aab2365dc46d5bdaea322bad64e"],["/2023/03/13/Java/NIO/NIO/index.html","b4e6ffdb91a5d1264bf6d110ba203e94"],["/2023/03/14/Java/NIO/Netty/index.html","7ddfc3593c7c956465c8009ad9722db9"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","22d487304f63fd29de405c189799c47f"],["/2023/03/17/系统设计/分布式系统认证/index.html","67854aeffa36049a73ef006285b427b9"],["/2023/03/19/Java/JVM/JVM概述/index.html","42519aff217ad140cd05e45af6f919ff"],["/2023/03/23/Java/JVM/类的加载过程/index.html","cd2873dc44641ca14122b02f8fda9c7e"],["/2023/03/28/Java/JVM/对象的实例化/index.html","0f4d7902ff9147e23bfaef4ec8827473"],["/2023/04/01/Java/JVM/运行时数据区/index.html","f623c94ff36bac4d89e223c490d1b27e"],["/2023/04/04/Java/JVM/执行引擎/index.html","038947451fbc1cebe0ce42f30427b0d7"],["/2023/04/06/Java/JVM/对象引用/index.html","c25bc5b195975d9d77d628c488f3d417"],["/2023/04/09/Java/JVM/垃圾回收/index.html","0a7b2f00fcd98c91e7e1ea7a15e5fcaf"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","e5c1982e2eca193660e9af96f2c4cb02"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","01088596a89a0ff9d34dbefffdbd90a6"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","21396d9c77de5f4ac539524b33deb6e6"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","2eb57e147c99d4d80a224826e0b988a7"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","307209b04e4f5be88d0a410c13c46b59"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","34312224c7fbcc8087d56c61dbac9cc9"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","d60a7be1e17c566ef3c40c0832ce9cbf"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","01322e6cdc5e14fdd4e76dc54e288bfb"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","ee2c5895d40a196faef9386c6ffad32f"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","3fab6143eeb39bfb6a481b44030333df"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","c30ea639f45870a870690590b971960d"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","16796c31aba2228df790f7f3b08bb2eb"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","046f697a460ccdc4e719ee276146b88c"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","4c9a9ad1e786b3424d808a2dc15a69a2"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","de1242ebdb4e52d4d119b9e56e5a5f91"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","986dc36bd8465fa9b26848e7156d1fdc"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","65f84017802380eb5b794fa73bb2a5eb"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","cf2cc6c50644f50a72a77dea75badcfd"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","47c030eef019aa4b222cf9c98bc778e9"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","b1cb595b240aa159971261e082cb4408"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","e259064e35127f744b3fc0554836a8d8"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","07492628c9b8185af9f3b8234c145343"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","d79bd0a50af9c5fffb2513ef2889fbeb"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","40854423eaebc26efad1e5f2d88be4ab"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","0ab92f2b7a38eb86544ee035b148a8c2"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","d552190081dd7d501e531d57d8d60eae"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","0717b43088b6ac575c5d20f5b09cf5f1"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","5d893d51b0e063e2dcad870fb2393040"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","075d30b74ae9a18fa7aa79a72e8f1c82"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","545ce31eac23ff73993f375f35f78249"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","1b1974f85da7177e22ecfa61b13b848e"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","4d1e70c0729843e535414b9b5890f13b"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","8f8078f0c39763b8b4bf3518087b95d0"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","3c5d7aa94c0f8d81f115ba756d5ce9a5"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","c1d3c34fcad68eaef184d418c832b937"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","a0d37a8521cfa51e340ff3d3c216db67"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","4a6f82f98b486510edb7cdd5b40342ea"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","2d5b3eb89887ab2314f283be8f546bdc"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","0481fac2d5c17b830e393cf613e08c93"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","c21d15ae9760a49131333332951e2c6d"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","8afbcfefae1a05612a16730890ddf1c1"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","84a591ed5dca53f3fc488f49eda0976f"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","32c5b121d5857e659101c51ff529b261"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","9b5ea61bbccc37f44a84e5c086f40b18"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","00a0f54caa55b2e9f1e3b17ac3069777"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","c84631c822cf70d53e045d70bb659fd6"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","09d8268d33bd99e78307e200f6b51f82"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","31d4b65b43c4b9cb4a4dcccd6ea09126"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","541872f2761908ce8bcb6a63e803dba2"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","62d756a357695c8d625876fee9d853c5"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","1d195a881b8656641b0d1304bed900e3"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","16d3e953456869e394bdeaafc934759a"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","09f0093868cc9814c7e7fad940abaac2"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","141554cfe8c6f083a8bae8a990b159da"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","f48a5a7cb714c4b9aaad9c2382b51bc3"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","280a519a60b6d5e4023cbd55e4b8ee6c"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","ba2dd1a6a0972d0f0e9863b06570b15b"],["/2023/09/04/中间件/Redis/Redis事务/index.html","6ca3af9af5e5e7d7d6a3fd34954717a0"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","dbd3c4cef402081df2dd946b2d6eaa08"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","5e17f706680300f489db3b7048c44381"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","832facc8bb99727b5b78f9a84a9a1128"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","8250fdcdfd65c8dd9b1333fcb250a32e"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","da84d1998f6543163cfec35a9fa6da6c"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","9857caa35138834a8cc6dd13a0a635fe"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","c774f3f4ffd1eb650481bf9a67ecbe0d"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","774679f07ab0dfe6d16d74078b1df483"],["/404.html","a4201eda2c4ba17bd58c4c3c2cf3db5a"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","b24bb60f6822b631f0a4530316f65c8f"],["/archives/2021/02/index.html","c0597516c25df4e93b577a9401a2e06a"],["/archives/2021/03/index.html","aa6f5e148c17fc8c4a39d7eaf3094f3c"],["/archives/2021/03/page/2/index.html","26f53ad2b6ee2beccbf985bc1bf75731"],["/archives/2021/03/page/3/index.html","9456d6bf2c49f4c3e7eb4f8256dc1243"],["/archives/2021/04/index.html","012bfbe3b57698003faf0bae5a7b8599"],["/archives/2021/04/page/2/index.html","6f46cac5326a9cc6685e2a061d5efc4a"],["/archives/2021/05/index.html","32df5d28fd1ff7c17ddbaf8cab0e90a1"],["/archives/2021/index.html","132c143d339f6a14c9626588920a7afc"],["/archives/2021/page/2/index.html","77a6b2c59d4b0ff7ca22279fc771126a"],["/archives/2021/page/3/index.html","f058918b5486680561c8ff0d442ca866"],["/archives/2021/page/4/index.html","373cc35ed89a45fc2f85aaf4af55aba3"],["/archives/2021/page/5/index.html","6ad530ecd0a5fb4957ccde4130f8bbe1"],["/archives/2021/page/6/index.html","a89bce255974550f544360089a2f4868"],["/archives/2021/page/7/index.html","26e755a190773fb3f06baa8107547a51"],["/archives/2022/01/index.html","5fe3dce80cca7e8b83cf91fa753e0883"],["/archives/2022/04/index.html","f1662baf93b91fdabc0d81cbbe98af0a"],["/archives/2022/08/index.html","9dac280659ffceab0a6360752002f486"],["/archives/2022/09/index.html","9ae1e6578d38637e2b7258529f5b5afb"],["/archives/2022/09/page/2/index.html","39f5061dbd3d8ed523ba85a4fa1c9618"],["/archives/2022/10/index.html","77ed164307ac41a8a00947e568c5c59a"],["/archives/2022/11/index.html","af605b9afae53dd10e4369865996757e"],["/archives/2022/12/index.html","2ef861437f61fba93464ac444239a996"],["/archives/2022/index.html","5772752e33005aa1703cfab9b036ff7c"],["/archives/2022/page/2/index.html","a1ec51c796b6b8028984958ea9065608"],["/archives/2022/page/3/index.html","d4bbf6592553f2fb3bd2618cf92eb454"],["/archives/2022/page/4/index.html","0ebe176c89f7f6ac90eaa74a274ad973"],["/archives/2022/page/5/index.html","de0e5944f22fe15c42cb2f2f4d6914ad"],["/archives/2023/01/index.html","80b6bc261084dbad6b9f396948f33d0b"],["/archives/2023/02/index.html","942a214c9341d532bee6753e9ff57679"],["/archives/2023/03/index.html","963cbb0fbd1b847aff5c396aca4a7d2f"],["/archives/2023/04/index.html","4de16610f95a9b04f4f46c188026d2da"],["/archives/2023/04/page/2/index.html","dee44bd255a57cb898d846fd810b139e"],["/archives/2023/05/index.html","161c08c700f3baa905be130684a2ebba"],["/archives/2023/06/index.html","7b396164a232c452354ec2bc3fa5bbad"],["/archives/2023/06/page/2/index.html","269e900fb7adfdd873f5272c876ad78e"],["/archives/2023/07/index.html","d1556b5ca98dffba3c24a38b9737be03"],["/archives/2023/07/page/2/index.html","f3ae2cc7db372ec7ff2cb13d31d4f52b"],["/archives/2023/08/index.html","3bc7647c04c4559a90c5cc51e23674b6"],["/archives/2023/08/page/2/index.html","2a9f9df0a45df342eb81df89c88896b6"],["/archives/2023/09/index.html","9ff37a09d5bcde85c6fe779dba8a444e"],["/archives/2023/index.html","fe9b0a1c74f2f2c19d0cfefa9fd7c7bc"],["/archives/2023/page/2/index.html","a8245e979af6461eb9d416d9fc9b60a2"],["/archives/2023/page/3/index.html","db3a4f0a204a7da872ffa00f8e58cb87"],["/archives/2023/page/4/index.html","b08ffc671d7509bda7a55d6fcb324edf"],["/archives/2023/page/5/index.html","e092e153550421b3e89adbae63c9bfe0"],["/archives/2023/page/6/index.html","a2683d3d7a1a9e9999e6908bd7409c49"],["/archives/2023/page/7/index.html","d651b3e6c5adeb312a7baaa546fad578"],["/archives/2023/page/8/index.html","a375f697c0b8b7c2a241bb2d81a1f8c4"],["/archives/2023/page/9/index.html","c9ad8f1650a34a8b37b875580e3de60f"],["/archives/index.html","d5a6fecfb0fb9b277d8cf57d4463baca"],["/archives/page/10/index.html","9872d1e57df6fe5eb85de9e359053c23"],["/archives/page/11/index.html","f9e095f14ce28de12ddcc5491faa2312"],["/archives/page/12/index.html","854bd723ffdcc8f1e2013f7465e116e8"],["/archives/page/13/index.html","c6183cd22fa2de8df223bf81096cc028"],["/archives/page/14/index.html","576441134e1c473f8cc62a9c1c2f185a"],["/archives/page/15/index.html","a5e71ad69cb0e96d3faa92b66965297f"],["/archives/page/16/index.html","a78026e9a86942b4d13adf17a94dde5d"],["/archives/page/17/index.html","b33376a4dfe69b7088d07052eb0741ae"],["/archives/page/18/index.html","993a16adc4f5bd1d91fe29f1b996315b"],["/archives/page/19/index.html","9585f7dfad85166629b19e6c36e3bd50"],["/archives/page/2/index.html","64429a1bcd0c297e9625947ff4c6bad4"],["/archives/page/3/index.html","0385c434c0f824a28fc34943e41992ad"],["/archives/page/4/index.html","3628369555dfd03d176a28960e6f73f2"],["/archives/page/5/index.html","faf53cc4425e9ab8ea43b309915adc51"],["/archives/page/6/index.html","b4322e1e4942d86714d72248b40dd796"],["/archives/page/7/index.html","4567d67961a5e08cbb20443956a6bff8"],["/archives/page/8/index.html","2fefc92e3132d8ebc2864afcb2b33c62"],["/archives/page/9/index.html","cbfe88e54731e131f05f4ae1b5640f4d"],["/categories/Devops/CICD/index.html","d82270f1044344b2b7f26cebfe7e43a1"],["/categories/Devops/Linux/index.html","44832623fb51f8c4ddac0132d926aba3"],["/categories/Devops/index.html","07c7da2315655148b24488c8fed675e7"],["/categories/Java/JVM/index.html","3a2148e2fd47ff639d5c6138359b0e4a"],["/categories/Java/Java基础/index.html","a9137cfb1f2d7ff74a8d15223a6a18ea"],["/categories/Java/NIO/Netty/index.html","e3e8df531cee9ae0c4e519cd3a009859"],["/categories/Java/NIO/index.html","de70805c5ea94cc72dbbafecd91e54fb"],["/categories/Java/NIO/原生NIO/index.html","57b147fdd9cf694139e9c15862c6a3d0"],["/categories/Java/NIO/文件操作工具类/index.html","5a79cd59781ed68f55a70f8bb8639107"],["/categories/Java/index.html","29dac4f640c7c5673612704959ce8f3a"],["/categories/Java/page/2/index.html","b7188fc6cbbfb19ecd5f7116da9b0c5d"],["/categories/Spring全家桶/Spring-Security/index.html","073428c2a8b809218e27d38d34db81ab"],["/categories/Spring全家桶/Spring/index.html","276ad9c2eed72d74bea6a124cfb5e557"],["/categories/Spring全家桶/SpringBoot/index.html","6760b71ea2c972bb2afe50129fb1910a"],["/categories/Spring全家桶/SpringCloud/index.html","fc0e76c9c0a12b2228a281520b6838e2"],["/categories/Spring全家桶/SpringMVC/index.html","6740381dfcaaa01beea8737f3d082009"],["/categories/Spring全家桶/index.html","0c422fa2f1e05292f59dc54845e0d4d7"],["/categories/Spring全家桶/page/2/index.html","9e6128fa760f7963ae107eeb28a2d0c1"],["/categories/index.html","5befbcaf48d06282428356590b19c032"],["/categories/中间件/ElasticSearch/index.html","44086fe64054e8eccb3bd1e954f76c9e"],["/categories/中间件/Redis/index.html","63d97fa24c485febfb9b1371dc1c5a2e"],["/categories/中间件/Redis/page/2/index.html","312350eeba29c4d064539ad1bb3547b3"],["/categories/中间件/Redis/page/3/index.html","e802afeffc450749193e1f7c202ddcce"],["/categories/中间件/index.html","2ff1b8138ab636ef3a9d79ba70ee6912"],["/categories/中间件/page/2/index.html","3812d809552f6a03b906b8f722f5fed6"],["/categories/中间件/page/3/index.html","f07c156f811066938723639d3bd9f882"],["/categories/中间件/page/4/index.html","c88ed792f64b14f142198add22b52155"],["/categories/中间件/消息队列/RabbitMQ/index.html","7706da1d7f284d81153619182b2adc61"],["/categories/中间件/消息队列/index.html","06c33a0a14303f7d49a5962279a46dcb"],["/categories/前端/Mock/index.html","f126e34373da1b0ae3327bb7ca3c821c"],["/categories/前端/Promise/index.html","f1b5a4efe63032e446a3de131e594263"],["/categories/前端/Vue/index.html","6580666b49310cb7dd29320e4ed5042b"],["/categories/前端/index.html","3af7c54e32c078118839ce33ee48a227"],["/categories/前端/jQuery/index.html","147fb8c86918695e55c186b48f348f93"],["/categories/前端/page/2/index.html","d9605136ea5db3374632844dc8d21e00"],["/categories/前端/原生基础/index.html","09608f5e3cd3a7c882ed061d9c34915f"],["/categories/前端/异步通信/index.html","4af4d839bc41783d11cc97c3777938c3"],["/categories/工具使用/Git/index.html","ff275541e37009573d4667526cf6b2c2"],["/categories/工具使用/index.html","d4a9a0a043e4e020e696472d55a7867a"],["/categories/工具使用/markdown/index.html","5821171007b5ab70b2f6b0d1dac7456f"],["/categories/工具的使用/Docker/index.html","95ebcfcaa92347bc13ab2fb392daa326"],["/categories/工具的使用/Nginx/index.html","bf0eaefe55c3891a696dd3e5f1e4e810"],["/categories/工具的使用/Swagger/index.html","8140364bb228020e5bff9a227d10d71b"],["/categories/工具的使用/index.html","09388f2c1f8b9130e901d9c21aa5818b"],["/categories/工具的使用/博客搭建/index.html","fcdd3dc0e0b6bfa622c81c6e39ef9124"],["/categories/数据库/MongoDB/index.html","37da958d029e079ebb455f11f60982ea"],["/categories/数据库/MySQL/index.html","124c336e3846b674b6b02d79bcf998a0"],["/categories/数据库/MySQL/page/2/index.html","9ecf09b90ac378b2252d3649bce5ef9e"],["/categories/数据库/MySQL/page/3/index.html","28dfaf7451e3e812bad13e519a779d0e"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","205274263783f297ec43ef044a241b4c"],["/categories/数据库/ORM持久层框架/index.html","6696cad20c50996544fa11bad2293ccf"],["/categories/数据库/index.html","bb9c37b9564c4de8c663cd3ddc84ab0e"],["/categories/数据库/page/2/index.html","9fc00aec906242fb6894b026e8317c40"],["/categories/数据库/page/3/index.html","50dafe697979f955d4e9d39e32292656"],["/categories/系统设计/DDD领域模型/index.html","a923e64612949a7998d0ee9bec8e6660"],["/categories/系统设计/index.html","d531c13352c622631d87b2f8ead37a3c"],["/categories/系统设计/page/2/index.html","3d7d04c312c204721462db71d70ee4d6"],["/categories/系统设计/分布式权限认证/index.html","651a7344efa2c8417e6746d54ea817e0"],["/categories/系统设计/设计模式/index.html","ce58b7b9f6746e1e26ede08b1f29dc9f"],["/categories/系统设计/设计模式/page/2/index.html","5a5fb4e224ea70ef4a61ff5fbeb4a5de"],["/categories/计算机基础/index.html","0f7560c601967e596a6b7d8b91dc098a"],["/categories/计算机基础/page/2/index.html","217248383eda59956b5e2ede28f8f49e"],["/categories/计算机基础/page/3/index.html","b47fbb9d4bdc502718d4a0cf356a05d7"],["/categories/计算机基础/page/4/index.html","be7dc7e31a41bd0119aae888a7f5ff6f"],["/categories/计算机基础/page/5/index.html","6bfd583ee3268f7c4b157db13fc26b4e"],["/categories/计算机基础/page/6/index.html","ad1e614b664056d58b72eb081c3ec1cf"],["/categories/计算机基础/操作系统/index.html","5585d3b273efb789ee1534eab6bb7739"],["/categories/计算机基础/数据结构与算法/index.html","ff687cc3753ae645def07c7f91292540"],["/categories/计算机基础/数据结构与算法/page/2/index.html","7c82efe989e8e60cbe99aa6b32bf261c"],["/categories/计算机基础/数据结构与算法/page/3/index.html","ac0f68a5f1c5cf059124741b22159df7"],["/categories/计算机基础/数据结构与算法/page/4/index.html","229a0545c5b87e48dca986d24a1dba37"],["/categories/计算机基础/数据结构与算法/page/5/index.html","685942240adf9b3600e446da587a6346"],["/categories/计算机基础/计算机网络/index.html","198be74885e9aac304d7f77af75d48aa"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","63a84121d16e7ef7f2bfe7d97f76dbfd"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","871c7e161facb4cb02b9f8636ede3f37"],["/messageboard/index.html","8fb658165bf093c661ffc0de4d7a89e1"],["/page/10/index.html","2d6106c40e43b61ed3deb680ae070a71"],["/page/11/index.html","a5dd9292e258627067500d9a5d3094bc"],["/page/12/index.html","0ab487837b7f6a95b47b8a01aaf48de6"],["/page/13/index.html","d69a8ab27598984182e79f804053cfa7"],["/page/14/index.html","ca3dd87df9bb01e2f1e4d6fc921bf1dc"],["/page/15/index.html","ed218e5016c5e30b4ae7e0e61289b72c"],["/page/16/index.html","f0335e24fb5f90213dff72da0697b6c8"],["/page/17/index.html","54d95ffa8ba97aa0a805d2da7c759416"],["/page/18/index.html","aef778e32ace5fc66823a7b4ace30d0d"],["/page/19/index.html","1de92ba7e3d4205a5b1bd6350e09a2d8"],["/page/2/index.html","c9a4751080a593ae1736e20efdc481e0"],["/page/3/index.html","ba63d3a72b9fdf3d6b79786a33c5c0b2"],["/page/4/index.html","ca5703c0271fa126199c5c5963388ee9"],["/page/5/index.html","b0b302fbad3363892cc211a8c0ea1432"],["/page/6/index.html","bc7b3af686ee8a122e949a04a4420a53"],["/page/7/index.html","e52e88ac0f1868ded9606357e878816f"],["/page/8/index.html","27e9b3029764c46afd2eae7e2d5267a9"],["/page/9/index.html","48b6f9b459028a0274c442ec7497db48"],["/sw-register.js","a348615d4b835d86aff09aff63d9bf2f"],["/tags/Ajax/index.html","140bc19670383803afadfe6a29a0aa53"],["/tags/Axios/index.html","da4f9a06bc08f496a61075ded9afe605"],["/tags/CICD/index.html","8aa34c3bd2031d87025a453a214f7ac0"],["/tags/DDD领域模型/index.html","51731b299aff40b0884782d9039483f8"],["/tags/Docker/index.html","01b0276b2cd318f03ded880c01fcb747"],["/tags/ELK/index.html","d55aa9cf10c3015c35a6edf8172b5ad2"],["/tags/ElasticSearch/index.html","a9fc3e9b4bb12592fe5af03bb1814f97"],["/tags/Git/index.html","35de730272becae6c9ef17f9a2043a29"],["/tags/H5/index.html","41871eb132b9f27d2d380166f1af7ff5"],["/tags/JVM/index.html","8a51796a7f25a7ab94c1ce858039f4af"],["/tags/JVM内存模型/index.html","d869a556020b58bb0fc01e1db9527175"],["/tags/JVM执行引擎/index.html","fa46a938b073797422668d06c01bbd12"],["/tags/JavaScript/index.html","04a0f5ffdbe75ef86e9c3237cefe4f4e"],["/tags/Kibana/index.html","4186ba3b408efc9ddbf453bcd8589212"],["/tags/LeetCode/index.html","115153b2ecc38f9840034eb1d8308043"],["/tags/LeetCode/page/2/index.html","c5369415be8e3e0360f2f38b460adb8d"],["/tags/LeetCode/page/3/index.html","05a9906197b6134e18febaa48958e7c7"],["/tags/Linux/index.html","6ca9c3768eb9ff91617c18add35ef1d3"],["/tags/Logstash/index.html","2d8401abdae73ea79919f747f806f213"],["/tags/Mock/index.html","6c2300ad3eb4d863143a4545ff3ea78c"],["/tags/MongoDB/index.html","680f1deaab605b1a29cb5009b49851b2"],["/tags/MySQL-事务/index.html","06f66ed6546b1d70c1f36244ff0ec6a8"],["/tags/MySQL-数据类型/index.html","745e7c54bb8763564258b4e5750571ed"],["/tags/MySQL-日志/index.html","06acc05520229dadcb13a0c951e01005"],["/tags/MySQL-索引/index.html","45a53530f5abf1b82fb43a27363d7d7d"],["/tags/MySQL-锁/index.html","d42249fdefa0009f51640ad9d92e66b0"],["/tags/MySQL/index.html","ec983662e404a590665e7bcc74c0ab8a"],["/tags/MySQL/page/2/index.html","284bdd588f88a007dceccac72321600c"],["/tags/Mybatis/index.html","4bffbe8893505cf6f3a1e5e57a2489d4"],["/tags/MybatisPlus/index.html","72e0b02611df191b4886bd3b17968a3e"],["/tags/NIO/index.html","9f0f314720aa54da6173a159eb1cee01"],["/tags/Netty/index.html","8981cb7ce28a4bcf897e81501b05066d"],["/tags/Nginx/index.html","90c9a418413c35359eb5ef6e04f521de"],["/tags/Promise/index.html","e9605e4d61692d855caf70e7bc8e4556"],["/tags/RabbitMQ/index.html","75fe0e23d5e8064085ed9f9a4509716c"],["/tags/Redis/index.html","5d2a8ab2ae888329fe8078c039ae51af"],["/tags/Redis/page/2/index.html","45fce355d76fd674cfb3383b26f2e6dc"],["/tags/Redis/page/3/index.html","722378fb2a0e189ed3c26cfe2081010a"],["/tags/SSM/index.html","ddd63d8f06f6bdf41e97384803719afc"],["/tags/Spring-Security/index.html","05d4c37df539717c5c4ea56571a49ced"],["/tags/Spring/index.html","0aa2953fd2b2e76f02662bdba719005b"],["/tags/SpringBoot/index.html","29893e23794b400e96e1c86f471c6506"],["/tags/SpringCloud/index.html","bb188e2c5c2d89dc543bcc4ed263a78c"],["/tags/SpringMVC/index.html","66cf117f28d74492a3e5c8ba31af888b"],["/tags/Swagger/index.html","9ae9a82ca135eef00d4dbff95065df48"],["/tags/hexo/index.html","5749da926fa8d40f74d157d009abe5cb"],["/tags/index.html","37d24008819b2a7fe924670ef06484b4"],["/tags/jQuery/index.html","65333f4f074a77ac6202b936c0871fce"],["/tags/java/index.html","4d4ff5af453de28d24199170f4d8af26"],["/tags/markdown/index.html","5d4593ed41dbf1e0242d9cb8ae6f5673"],["/tags/noSQL/index.html","42dd8e89dd8543375725635f5f3641e4"],["/tags/typora/index.html","d00cc923930b33299a85b2568f300205"],["/tags/vue/index.html","caeab449d612040938276285494e7f02"],["/tags/享元模式/index.html","f7628d01bbed96565935ba273c5d4bee"],["/tags/代理模式/index.html","4648c68e406750d4867f954f965f0b06"],["/tags/内存管理/index.html","4029a9c440a284a9037971bedd33bf6f"],["/tags/分布式/index.html","0a6d39ed02bcc9147e1747fe027fb524"],["/tags/分布式系统/index.html","ead7ad7b140938b32b5e84936845145f"],["/tags/前端/index.html","d499a91568c8ff4c4968bdc3e109a5f9"],["/tags/前端/page/2/index.html","1e3d213d0d984d51e15b911a7ce5e112"],["/tags/博客/index.html","d2005e351ca7791c4db818cd2faa57d6"],["/tags/后端/index.html","3e04eab7c2dc87a8900b29fc2894c39f"],["/tags/外观模式/index.html","1887c3a488380c45c18a90cf3d423d08"],["/tags/容器技术/index.html","5e6d9fc8042899d5ac15b24a56de3c21"],["/tags/工厂方法/index.html","041f80e32f910105a0d37c03fc78877c"],["/tags/微服务/index.html","bcfe0d890b3e4150d86ef6d821884c3b"],["/tags/抽象工厂/index.html","beb030eeaef4c8284d7378255beaff33"],["/tags/持续集成持续部署/index.html","9603a1e498078a93bd666f98267f1e79"],["/tags/搜索引擎/index.html","d0c9daa217cc2cc63bf383f259f461cf"],["/tags/操作系统/index.html","0922c9d213a01c20fce85cbfd07e3a26"],["/tags/数据库/index.html","82386f13a13681ff0630fb2e99379672"],["/tags/数据库/page/2/index.html","7aac0370d195e958627ea1a113d16e57"],["/tags/数据库/page/3/index.html","fae1ecfd5d29e4c7745b92cf7b288e12"],["/tags/数据结构与算法/index.html","8ae3ff2293231410f4ce54e0dc222989"],["/tags/数据结构与算法/page/2/index.html","f2589965d3a358c18374b2c3df1e739f"],["/tags/文件操作/index.html","aeca6ff8cdb0cd91468ae3031ed05ce9"],["/tags/日志/index.html","eff32d79818ea78b3681b303b4760acc"],["/tags/服务器/index.html","fea0a693a3033ba2c97de4a9061af486"],["/tags/权限认证/index.html","0c57fb86ab0242c18b0d983d3987cdd6"],["/tags/桥接模式/index.html","7b8583ce4a8a077f071d1fd69a546d99"],["/tags/模板方法模式/index.html","d70433e28a3de177c7fc5a9b726d3561"],["/tags/死锁/index.html","98b4e9b66f70415829753fad99488250"],["/tags/消息队列/index.html","c30cb9b238feb1d9409746609d916b7d"],["/tags/版本控制/index.html","a5149bef1917df30ba8aa123b54a6a81"],["/tags/策略模式/index.html","fbbc1cb708774219a5920b7390984ca4"],["/tags/简单工厂/index.html","9483c03c4070f845689c09b14a76b3c4"],["/tags/算法/index.html","cc1c484abffc56a4aedbf5ff9c63a000"],["/tags/组件化/index.html","852416b5fb66d0dfe817fe49aca58b45"],["/tags/缓存/index.html","571ac35555830b0f62658963e29944e2"],["/tags/缓存/page/2/index.html","dc596993259e6f8b14544bfadda2ba16"],["/tags/缓存/page/3/index.html","c8ee55e125dba0f89933d3079efdeaab"],["/tags/观察者模式/index.html","27deb0d9b264e602774899a23a2e0c3f"],["/tags/计算机网络/index.html","20d403af3d81ebb810c78586665c79e1"],["/tags/设计模式/index.html","d5d426e278135a8287d8c2e441322eb7"],["/tags/设计模式/page/2/index.html","f93dae4645c73e78ee46bb36feff44d3"],["/tags/进程管理/index.html","8847371ceb8e67e9196e2ddfae1ceb7b"],["/tags/适配器模式/index.html","7b25d819d119fe34d68d768da5ead58d"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
