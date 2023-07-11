/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","a86d04d2e94dac8f0b0e814c34be795f"],["/2021/02/22/工具的使用/博客的搭建/index.html","c7d841a08fe6695be86552003f979460"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","5b87eee3ede648d308551f16ffd41c51"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","290de575ad5fefc9edd1280d7fca5a90"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","df695c58ddc4d9eb45538b4570bbf1ba"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","253e8084cf8f631f5cfacfe2c8beac9a"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","1ec529e5cdc7de24c2d13b33f8074a7d"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","784dc092779662bbf83453d0b632a3cd"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","863311d5ed0a186fd48ca4ace148259f"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","655ce4c74264b8364d1706871b2baaff"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","18b5b7dfa191a1a817382519b4a53813"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","564151ce1da0db56d8dc97a9eaedf272"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","249240059804918fba389c378ec89166"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","2e0fceca90a862ffa4647e20b98ddc67"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","0b5b0643c1bebef57790cc8beda0e4e6"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","5b5a6a3ff19d079405e67223915ad5c3"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","a63a61aed5dfdc8b88f4080ac852aeef"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","1b88d569fb1f2924d934a6feda1c4ad3"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","71db83e37e5996c24100273a2a044909"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","9ef6602a9f988622ac229b5ab16c4108"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","85b2552bcc35b9ac1e15a8be5fb02cac"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","f7cb55310a7cd72385cb2abb5ebae476"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","d6c5abada0a6958bbe5129f9e63aef59"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","7c44f2473fb1a2437909232d890d4c4e"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","74fe8d66fdf608a235ea4bb24b00fb7c"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","7087d7d1c2325a00440a731932b54125"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","031fb521c62442aa2144cdc0fcf00738"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","2d59b2cf371e8c03843ffb79696683da"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","d5b0c294c628804f48e3e9c3a01bb7df"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","d9e522b34df23c26181b4b084a6d2051"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","3d72fa6e1a8a649b833bbcb61dd9d49f"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","ca81dbbbefb4d215f17c17f4243dca83"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","3575b8ed2da2558fee7f34d618154b1a"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","5509d0613897a48b2fbf619b8a1f71e4"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","3cb25d57678b74a13eaf9307f436c581"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","72d9710e23ee6855fbd752b23e62c7a9"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","b2063a8714a957c69b0ce9cc506becdd"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","4096cdc3f0c37713226f42e551413a68"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","76abb80067575a20344fa16a031ec52b"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","86a8a16c7f67f738d38f526fbeee5c92"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","f140559bc0f4ef2098e8d32b7ae7d415"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","6f1c0218e012d30d67d21f496b45f849"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","dfea1e91d0582073c2467af777ebddd5"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","7c0432c86435409671dc71cf7f688a55"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","62345c556843ff8d86da1619673f1118"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","23b9592d50aa0accdca12243e68f380c"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","a92f1251dcb0c8743426c98964418b7f"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","f54b07c1f3508a123e4c848690464408"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","893a43473242326aa9efec6e1710d65a"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","3b9456d7618b5e55d6933a9cf80964b8"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","541335409e4a023f9eea51e6e77fd591"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","609f353fe79abe88a3ad87e841bbd677"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","92141c567ff19c25357f6bf46a2d946f"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","e67c361996f2865eed5fc68085f9e981"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","3e660dae5d7b29a2ef71c81b531b80cb"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","5027514083aae9c7861af804ecad595e"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","964023588209d4a5bc6dfe08440906d0"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","3fa403c2d5fae2a3668e435bd7ef0d3f"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","30ba11b47ff49a00518710a054784541"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","59da23ff1e76992d47d0c36fa855bb25"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","c48a050acaf506e1099bf440887002a2"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","18f94b42694ce01c8db2099a17530d40"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","029b80c71915b621607b398e2045fa01"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","8fd8f36d2a577e20a8285809281397ab"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","21d2edbf70e82f5c3f6b6b2ef96ed049"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","d8b39031292cc09250fa63be7a565977"],["/2022/08/17/前端/jQuery/index.html","7510b3a911b128edfb7ca58941fc61f5"],["/2022/08/19/前端/JavaScript/index.html","458ca2a4a337460b498bea8976dc01fc"],["/2022/08/22/前端/Ajax/index.html","6b268c85121cf251a6062745ebdd66b7"],["/2022/08/23/前端/Promise/index.html","cff34a76a9d1802e3126355044a42eba"],["/2022/08/24/前端/Axios/index.html","4109489284be95212c81ac4dfc3de8c6"],["/2022/08/25/前端/H5本地存储/index.html","464accd8a7274df5d2100d2000f6de48"],["/2022/08/26/前端/mock/index.html","48b8bb577c75dcd50a4fb28ce3687af0"],["/2022/08/31/前端/vue/VueJs/index.html","2e1e2f4a4eed905f1b76f6ca2f638e0b"],["/2022/09/01/前端/vue/vue组件化/index.html","11d8f533716ee43b7e5f1e04bb5dc229"],["/2022/09/04/前端/vue/VueCLI/index.html","174aa8a317af97c0df393b564095a879"],["/2022/09/07/前端/vue/vue实现动画/index.html","e29caef27e6ed9510ac60f65c6a7453a"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","88d3e6aa067de0fabe0acde13550b89a"],["/2022/09/10/前端/vue/Vue异步请求/index.html","90a2b6cfc6f6a1e51d2c238e6ab7b3fd"],["/2022/09/11/前端/vue/vue-Router/index.html","6622b41d65f7b65ea5a6f74c164e82be"],["/2022/09/13/前端/vue/Vuex/index.html","e6d83151a64bd36f9d7d7a2cc9fba29f"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","3cfc87605fee6e627278fc88dcc12f76"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","958068b82c39dd6ff825953df8eaecbf"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","3e93c6e8109ceb3e259a6a4cac45166a"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","193e82cf935de6b093813a08bd354e07"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","c7bc1c55d91dd0bf57d61b73c3954728"],["/2022/09/28/DevOps/Linux/Linux/index.html","6fdac8478cc9e0c0ae91ffbb359d558e"],["/2022/10/02/中间件/Redis/redis基础/index.html","3e95e032b43ee0d7cd21869b58f3f425"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","50bb03f45fd7457d8b5e10bd88f01fc7"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","37af3bc503162049a453aa1e506640b0"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","dacb0063964a08cfa06242e61fad0b32"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","febd4e7a77aedb93dd9e2f0ed8a923d4"],["/2022/10/17/中间件/Redis/Redis集群/index.html","8224ef8408734f0d47ce95ebb5c8683c"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","4db9ddfea42fd63080697e9b63ed76c6"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","6b854fc9e59d4150092f7219e02162be"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","7be944070f17c10368f2dd6fc8957062"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","a877f256524816108a01668c6c2e186f"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","973f6d05c8b0cfdc62b03b35c95ef812"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","22b3742564ab5c2bf8f8785104064e84"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","c804e27240ecae963be66f8585c62c9b"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","b8c0ebcebe16316612d2dfedd2ed3503"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","3a1a4fa585a5d421209fa172537ca762"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","36ecdad124d54c0245705a679c51ede2"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","08d5037b88c044b41f29c12e8761d6a1"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","299d72de770e6b5608d4ccc6fb3a1420"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","9a6e7543057d14c55330ee6284fc83cd"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","237f4cdd3a4f7d36363c87ca34689e1f"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","7c2182db664a36a45bbdf1c03e2a8c8d"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","497d1ea32df5b5bf0af0cbbfc459f97e"],["/2023/03/10/DevOps/CICD/CICD/index.html","2b57df9dcc1209540f2a50e71fafd08a"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","98eb8211a004b4e049f7c0c536c8ded5"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","38222539dc5dfc2514d7f430de46cf49"],["/2023/03/13/Java/NIO/NIO/index.html","8703fde192994007c6ab47b2c78efed8"],["/2023/03/14/Java/NIO/Netty/index.html","4a8c3de93eeb302771ee2a08c2693233"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","bde608e2edbae230a7654e50e59810e2"],["/2023/03/17/系统设计/分布式系统认证/index.html","ec08ae103ba5cba19ce00e378a93c8c7"],["/2023/03/19/Java/JVM/JVM概述/index.html","7e04b95444edb6c49d1a92c9e26d2402"],["/2023/03/23/Java/JVM/类的加载过程/index.html","4ee9e3b6540a187d22e8c61cf493f2f9"],["/2023/03/28/Java/JVM/对象的实例化/index.html","e5541be2cc92295ae72488dfd89f1c4a"],["/2023/04/01/Java/JVM/运行时数据区/index.html","0a05f5620d2ecd89b72f354c66e8a263"],["/2023/04/04/Java/JVM/执行引擎/index.html","a2fd56664c6921381422e371794a6bed"],["/2023/04/06/Java/JVM/对象引用/index.html","40c50d21c65f4598c84fabbadf73c198"],["/2023/04/09/Java/JVM/垃圾回收/index.html","005d33a7a7b702fb898e12c705e3838b"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","7de806278907e7e1938942726c1efda0"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","667e765ec53333a490f8b99f548de86b"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","562a6e12230f0f94cdc1a95b69a6654d"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","671517ddac349e38ad93e5ee25261dc1"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","f42ab061fa1dfe88f6c3a489aa319268"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","039ae28c27652f3b2ce1a692be52d8e3"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","01ca7e3b5cb6a0cb9f9af7ad5208247a"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","50234514bfdcd3b4ba2804c5bb6fbbd0"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","287ab333d042198dec524554d1384082"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","cf0bc3f5ec72b2475056316fd4e7a512"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","d113d24f0b677e9c9bc3a29e486d2946"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","f6da5a69d6a0deaadfde6c2df67ba3ba"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","f6704c57a084a9b822f9cd50a541a028"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","a449ea25fe5b1e1835c0e6c39905d2f5"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","1c448392eade52603aa10afb68884aea"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","ec771910c7e598108238afaff77256eb"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","f19e0646e8efc13b84cc8c32f34afd6b"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","3965f2bd44c8dc69ba3f56c5e41b95a8"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","baa779cbd8b6839f93f0ed5937cb5a32"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","d83f6b8c696d0c6c103bd598c140ca0d"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","6ecd0a514c827a3218bc43705297d6b9"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","a4038a24bf4c2f0bf7f13bd899594258"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","3d8541b48c7df680d7fb04fe7a270efe"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","73ffabce29341fafc95db6cd00244716"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","8a5ad9b3b57cdb76486251805c87480a"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","bd0e2696b821fc7a12e60d5b9bc8473f"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","77fe9a06ec44ebe0d22b112151648944"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","d4c6c94460dcc8d325dd88ad8abb0d18"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","2121887de2c9a08d1e0c2c859f91ea9d"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","0ebee9097ee648c15787fbd38c3af1e1"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","ce0806666a8ff0c4a58cb41cff5f0a0b"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","f20482d0f3aaa7cbeb99859019dc7254"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","10f3751e240f527927b75a1308e69b49"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","c2ac73589a5ea410a86f13ed9a293e27"],["/404.html","22599680c6fc24b9ad37177dbd6ebd76"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","d5d2e3ca53e4b581ea03f8a05c8edc7d"],["/archives/2021/02/index.html","8fba93df86b469d5619d6cdf7e5151bb"],["/archives/2021/03/index.html","84c990eeb2d0aec6f600f8bbd78384b7"],["/archives/2021/03/page/2/index.html","7825a201c783cf88b653c5c6b48f1023"],["/archives/2021/03/page/3/index.html","2a91523be95bb3af6fe2c7067c5a0cd8"],["/archives/2021/04/index.html","d9f34191c7c7be3432e46df1228eda58"],["/archives/2021/04/page/2/index.html","2c629b04aa909bc371ca8ec918664268"],["/archives/2021/05/index.html","c1633311435a20a04f7f72f38862a7a6"],["/archives/2021/index.html","b6b9583c89d5edb32d5f03d23b4ee7ad"],["/archives/2021/page/2/index.html","04e4a8e7050b490ec5ebbe12624d5384"],["/archives/2021/page/3/index.html","a6a1a2da7d30be9e99be15efc08a45f6"],["/archives/2021/page/4/index.html","1980ed460f981fbe3660b9a04b6714e4"],["/archives/2021/page/5/index.html","020e838ef67868b58283ae4042d38c70"],["/archives/2021/page/6/index.html","1bc2e7726531180e132fec64a55e495b"],["/archives/2021/page/7/index.html","68156604a7a38e42b0ea83c72148e82e"],["/archives/2022/01/index.html","7adb90c47e709532cccdafd141101a11"],["/archives/2022/04/index.html","0f17b0413ae2637d420d4594914d4797"],["/archives/2022/08/index.html","0dbc93321c0ebd69cdb194d3a233ec32"],["/archives/2022/09/index.html","231c743af96a8f7dbcb57b705e0edfad"],["/archives/2022/09/page/2/index.html","6aaa257bd30d7c9ab605c32f6e90848f"],["/archives/2022/10/index.html","9a4ca61d580b4756f4aed817d52a5c67"],["/archives/2022/11/index.html","e5b0928cd7f948b1976e864765ea69c3"],["/archives/2022/12/index.html","0af347d6a3eed3dff28b6bd352ec616b"],["/archives/2022/index.html","826abf198c07dc778640052d9a23c3ae"],["/archives/2022/page/2/index.html","a133e3e8ca2619ee11609aae60773e67"],["/archives/2022/page/3/index.html","7799713c239f964ce576af50a8029da0"],["/archives/2022/page/4/index.html","0f9ea8370c2abe79e82ccd94b02279fd"],["/archives/2022/page/5/index.html","ec5da0488f9364b7e4caf41bf57d64a3"],["/archives/2023/01/index.html","6cb1e3ea19b953a9f01be4d798ddab06"],["/archives/2023/02/index.html","5a50ef4d66c6df3c27322ac57c43784e"],["/archives/2023/03/index.html","0a6adaa73b6c6aeed0079fcce0073d84"],["/archives/2023/04/index.html","1db192ff73c8d2d21df262278007aca0"],["/archives/2023/04/page/2/index.html","75f60d1ac5c599aab095a15f2d8ea9f3"],["/archives/2023/05/index.html","09745c4a1dcb749831c61363edd50774"],["/archives/2023/06/index.html","ae5fdd8b31ece1717c302efc3ba869f6"],["/archives/2023/06/page/2/index.html","61896f0eb4f0d7be397d84d666f24108"],["/archives/2023/07/index.html","a40f66f79ed414e99d8960d24c0231b1"],["/archives/2023/index.html","a64da9418fb52cdbea62b7a15b221ad6"],["/archives/2023/page/2/index.html","a95c6747546ebfcab39872c375be8d1a"],["/archives/2023/page/3/index.html","aebed64e4997a30ee5c37390c30c3b21"],["/archives/2023/page/4/index.html","bc508af74c9432f36c8be1b804a9a957"],["/archives/2023/page/5/index.html","eafda48aa73e58e6283227d14fbd0344"],["/archives/2023/page/6/index.html","c08346b347c162551dc11dea379551b8"],["/archives/index.html","06445fceecf81cf7ba5344481396f836"],["/archives/page/10/index.html","f4d283167690894e1f9660cfe455929d"],["/archives/page/11/index.html","dff8a726e0175d45c8a91fb8e5288735"],["/archives/page/12/index.html","6d940fb96d8a6afcb0778e070a1d9990"],["/archives/page/13/index.html","e64020e9a47d2e5bf05c1459b64ca68a"],["/archives/page/14/index.html","bfbdc81014ecd1bc32e4d83e27098bf5"],["/archives/page/15/index.html","12808ebed0cec2a68dc1ce6ea68e224a"],["/archives/page/16/index.html","19acd6f23d9b8b14301e3e05a8aaca9a"],["/archives/page/2/index.html","d12230361e546e9c0aea7518e995b378"],["/archives/page/3/index.html","fae4de18df2ffe248088f1aef5bc4596"],["/archives/page/4/index.html","e23f1c09e974a40c6fab035f89299059"],["/archives/page/5/index.html","5acc25d39b9d0d5706e1ef477976249d"],["/archives/page/6/index.html","bfd92db023905364d484fe9a8c3230dc"],["/archives/page/7/index.html","2a5d950d34f8dbe3637837dd45f91154"],["/archives/page/8/index.html","a8735a6b5dd0ef399b2eccfdc309b471"],["/archives/page/9/index.html","317f6e954dbd914148f9671d819af44b"],["/categories/Devops/CICD/index.html","cbc9a6f89a811357ce907611eae8257b"],["/categories/Devops/Linux/index.html","b2204b0dd36533ce995bce9feef99082"],["/categories/Devops/index.html","4d985c648cc8704fbad46b23ed6a6e67"],["/categories/Java/JVM/index.html","fa1e1548239778baf11caab065fbee71"],["/categories/Java/NIO/Netty/index.html","9b8e2f99eb102c693dde22279fabfa70"],["/categories/Java/NIO/index.html","ae0458b2c17b0c37721b90c0b4cc4aa1"],["/categories/Java/NIO/原生NIO/index.html","811234aab95a81126bbeab53b0dd8976"],["/categories/Java/NIO/文件操作工具类/index.html","c29fb4c3ffaa775c5cc47ad882aaa428"],["/categories/Java/index.html","f0875612d90a3dbcb1c4820ec2648495"],["/categories/Java/page/2/index.html","b68b8250c6e8df4b5dac4f394f0d5d7d"],["/categories/Java/学习路线/index.html","6bd5b55b9dfbc2b67b8009c52c720c00"],["/categories/Spring全家桶/Spring-Security/index.html","34a1c90d94d12df9a86645adcd7a452f"],["/categories/Spring全家桶/Spring/index.html","4253d223c5c555443e15ceb88b5fc7a0"],["/categories/Spring全家桶/SpringBoot/index.html","be46dc3399a9e86b6bac6aa05648f69c"],["/categories/Spring全家桶/SpringCloud/index.html","5f3ea9768672be8982160023d6096779"],["/categories/Spring全家桶/SpringMVC/index.html","f4fdf7263829d38b8b3ea40be0b14a5d"],["/categories/Spring全家桶/index.html","311620d561f3f5550ecf450dca1fab0f"],["/categories/Spring全家桶/page/2/index.html","974ebe34b9b707fdce6f6c3295f7e140"],["/categories/index.html","ab493469cbefbad2e132c616b0db7026"],["/categories/中间件/ElasticSearch/index.html","11e254403a0e54e4db1b12340ce8ad8e"],["/categories/中间件/Redis/index.html","01acf1cb176c236622855bb595d7e6c8"],["/categories/中间件/index.html","15fbc7adae095ad4405ff1fde95654ef"],["/categories/中间件/page/2/index.html","baa78014c041db78967c139d69c803ac"],["/categories/中间件/消息队列/RabbitMQ/index.html","aba4071475e1f6406c35c994bc606ff9"],["/categories/中间件/消息队列/index.html","f02b6d48d399e68671d50b0eb997d13a"],["/categories/前端/Mock/index.html","333a28ebb29c6b8a7551335c3343cc7b"],["/categories/前端/Promise/index.html","741e60f094d43401a8d69115715cd91f"],["/categories/前端/Vue/index.html","6cc250c0ab786497553c0b0d08fbee85"],["/categories/前端/index.html","46e6f3ca89d25a71d5002a1321c2588a"],["/categories/前端/jQuery/index.html","a7550049d0078b3c21c17f68e1d8d3a0"],["/categories/前端/page/2/index.html","ef589c15f589e85df54dbbf8dc1fc7c1"],["/categories/前端/原生基础/index.html","ff19fbdc9cc40de98c34a68affebdf90"],["/categories/前端/异步通信/index.html","0b49ea3d43c263f6d326a0a7a2c67892"],["/categories/工具使用/Git/index.html","4124538a5216f97ae4a8771088df1f89"],["/categories/工具使用/index.html","501bb8a2c5faa5f1f3841af1cbcb98f8"],["/categories/工具使用/markdown/index.html","df6dd2a61f58ecb70563b74959425cea"],["/categories/工具的使用/Docker/index.html","ba8e6764b9db6d98a7ce3fae413504e9"],["/categories/工具的使用/Nginx/index.html","0ef308afb797f9dba782ec3b918be0cb"],["/categories/工具的使用/Swagger/index.html","1e535a2d5ebb2af16d034279758ac3df"],["/categories/工具的使用/index.html","1b584bca1b9ef4cb9f4e73f1ce9422ee"],["/categories/工具的使用/博客搭建/index.html","c9bc98a4153fb05dc858ddfe95b72884"],["/categories/数据库/MongoDB/index.html","cd553be974c437325dcc0b833e0e7130"],["/categories/数据库/MySQL/index.html","7037332cf29bdcacbebb65f6bc551f41"],["/categories/数据库/MySQL/page/2/index.html","575f09dc317650699554ff751624cb3c"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","99e43b3e8ce8783077797dcdfc0c3869"],["/categories/数据库/ORM持久层框架/index.html","5e8b2f15c0b8fd2902330a9632fbeb0f"],["/categories/数据库/index.html","13ccee5cf02ae7b782abd5b76fb8a12e"],["/categories/数据库/page/2/index.html","d549c134e6d0bb907fa2923e448319c0"],["/categories/系统设计/index.html","2e19ba6bd6e0f1e1b021ab4b0adff877"],["/categories/系统设计/page/2/index.html","e8a48004868e244c9cebecb3b000646b"],["/categories/系统设计/分布式权限认证/index.html","05b780ca1d2f009a74f2f16fc14f35c0"],["/categories/系统设计/设计模式/index.html","443f7b16104f577d44dc46c50223f7ce"],["/categories/系统设计/设计模式/page/2/index.html","daff560d18299b2beb08f83066827d7d"],["/categories/计算机基础/index.html","ba5c0e6a1bd58869f161b38bfd67d69d"],["/categories/计算机基础/page/2/index.html","7ded056f7c3987b32a7f150facd21016"],["/categories/计算机基础/page/3/index.html","ec1850772e4dd007699b9be4006587b3"],["/categories/计算机基础/page/4/index.html","5887424965025757570987b1835570bb"],["/categories/计算机基础/page/5/index.html","b2f7c6515a9be9a4f8913a8565254b74"],["/categories/计算机基础/page/6/index.html","291a0dc49fb9bd00356ffc887ef7153d"],["/categories/计算机基础/操作系统/index.html","18430da5ba7a02f99b9ecc7ab794f60a"],["/categories/计算机基础/数据结构与算法/index.html","a3cf8125a7c93de0ae6aba85b893e97a"],["/categories/计算机基础/数据结构与算法/page/2/index.html","46de380327ad39c731a7c5b972c11fba"],["/categories/计算机基础/数据结构与算法/page/3/index.html","96b90793008dac2be4879271c624b1ac"],["/categories/计算机基础/数据结构与算法/page/4/index.html","a22f477aaa9993cd411b581408bb8b96"],["/categories/计算机基础/数据结构与算法/page/5/index.html","eb1cf6d6597e1efb96a3a387cd7377b9"],["/categories/计算机基础/计算机网络/index.html","3c6ded784d8a7e8afb451bcd80de436d"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","7c4c09cf2a364429cccfd3f0ea8959ca"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","b578904b862f7b8b47be959702e8f1a0"],["/messageboard/index.html","c6b2df1f390f1055e3c6396c6ae86393"],["/page/10/index.html","61fb476e69cb598377d30d6e6a017295"],["/page/11/index.html","278e7379229e555d196904e68c3b1694"],["/page/12/index.html","e028aa27d3a1c20a0aa59b9a7e692cdb"],["/page/13/index.html","2163552ee7dc73fc40d6d08496051e17"],["/page/14/index.html","2d904cfa74470f79ad6be3d967214d2d"],["/page/15/index.html","0a4a7fb0d4d8f82e27476bae23dc1773"],["/page/16/index.html","889a00fd1679bc1c0e26a219caae5822"],["/page/2/index.html","aa366198f9ab9480886ce4dc286bff90"],["/page/3/index.html","9a0516758aeb9adbd47da3ad83b4f799"],["/page/4/index.html","a1827932932cd69b66aec040fe4a70fa"],["/page/5/index.html","1420c2ee41dabeddc8417b74f2ff5154"],["/page/6/index.html","17543b5287225819dae976d405e97b60"],["/page/7/index.html","3d7327053332418ad676d175b07d524a"],["/page/8/index.html","e4e0285cbbc272d83cde6e2bca2e455e"],["/page/9/index.html","2c64b38f65e0c65536be948fd43708c1"],["/sw-register.js","5621d63ad4cade1ea9774305c070427b"],["/tags/Ajax/index.html","abe72594e6b79799efb62ed182e866ad"],["/tags/Axios/index.html","a0676d5725f72111788305e089fc815b"],["/tags/CICD/index.html","be5fca9d7479a28544c36d2abf7c38aa"],["/tags/Docker/index.html","b24c7f6e57a6881781796b9d5e28c950"],["/tags/ELK/index.html","b8bc73c9982942a8e4f31cd2aeba74df"],["/tags/ElasticSearch/index.html","92efc5947da721ae8a40175ae90f7ee0"],["/tags/Git/index.html","3a0a384f67cb60d1cf59e67fba03bbe2"],["/tags/H5/index.html","bfb3fd255351e3d6b1cda5d1148cf35f"],["/tags/JVM/index.html","3e2143bed0794bddf697ede33fc476ca"],["/tags/JVM内存模型/index.html","826b70a2dc95583bddbb6ec6eee4b82b"],["/tags/JVM执行引擎/index.html","8dfcc42ca9a5eb98f9bc6f91f475b676"],["/tags/JavaScript/index.html","cd2ec327c1f4f7634eee078a338d4ec5"],["/tags/Kibana/index.html","1f28ae796cc516a1cadaa7e7ab619328"],["/tags/LeetCode/index.html","f7f0be89cebf878e90f0f64b10868d8a"],["/tags/LeetCode/page/2/index.html","d3bf24613cae9a269506f33c17c692e2"],["/tags/LeetCode/page/3/index.html","6f7b96173f2e5eca58747a3c3137dee5"],["/tags/Linux/index.html","df505f9828a6ccb7643c9d55a603a473"],["/tags/Logstash/index.html","8c63d633db9af154440e6991dcac7c0c"],["/tags/Mock/index.html","f64f4adc7a14e84f4524cc8149478c6a"],["/tags/MongoDB/index.html","bfed4f46c7a69ceaff0ac6bd656fb5da"],["/tags/MySQL-事务/index.html","adc3ac5da8909edecdb5235159d2742f"],["/tags/MySQL-数据类型/index.html","05358e29e89769b53cbda275b4f800d4"],["/tags/MySQL-日志/index.html","7a52dae7b6d0c3c799f372c31ce015fc"],["/tags/MySQL-索引/index.html","60c9daf9fc5818b3d4d27bf46e70adb9"],["/tags/MySQL-锁/index.html","8636e3d6578b037e449cbbb3d24c4ae4"],["/tags/MySQL/index.html","b750819a2f8320f28cf76529ffd100d6"],["/tags/Mybatis/index.html","1d7f643ec8822c00711e377380b73d5a"],["/tags/MybatisPlus/index.html","cedbcf2e7cc43473f5c3e77be51416a5"],["/tags/NIO/index.html","29dcbb5254f6fda99e3a760f93d3ebad"],["/tags/Netty/index.html","1fe5f4e6951eed828df98ec1bf93a826"],["/tags/Nginx/index.html","8115650135da1d032fcdd6878cc7e697"],["/tags/Promise/index.html","958c1acb5e19f03cfbd418347a5d9e19"],["/tags/RabbitMQ/index.html","dede060c8bbc19a0676f504d3a2770bb"],["/tags/Redis/index.html","d81fc59c082395ce19e29c317c10d77b"],["/tags/SSM/index.html","e0d65eb8013affdb79c586920478bb19"],["/tags/Spring-Security/index.html","0890392b355109ee29bebb75b90feb4c"],["/tags/Spring/index.html","c98ea19607920617fc4b8c4df4d45bf0"],["/tags/SpringBoot/index.html","b85b78929801dba448a6365b36a2dd21"],["/tags/SpringCloud/index.html","25eb430cc15a2419fd0ad7c93b85e435"],["/tags/SpringMVC/index.html","64aef9a0361ec314fbf62814ac07b214"],["/tags/Swagger/index.html","fe83f1caf8a426af8909fb0d9373b360"],["/tags/hexo/index.html","da61dfdf94c6504db79cf40b1626b3d8"],["/tags/index.html","32f1c7674b9d007820e5af0888e0c551"],["/tags/jQuery/index.html","fa0e22f66711d704d1b9217a84dfb1a5"],["/tags/java/index.html","4b8ff9aff8f146ac13623113f369a3ce"],["/tags/markdown/index.html","c2d10e63cc5af67dc9ba6bd1271fccb7"],["/tags/noSQL/index.html","4415f03c2de02d55e6c7540f9b42e468"],["/tags/typora/index.html","840b7a4e35afe238a8913352fb96dc51"],["/tags/vue/index.html","19ee65ba09de8656848e819d4ded22e9"],["/tags/享元模式/index.html","a328902d36809b3e9b6218e9eaebbed5"],["/tags/代理模式/index.html","40d133368a432613eac73546a7f97aa4"],["/tags/内存管理/index.html","bae68bc28a7a28736ec2d80966a2d37c"],["/tags/分布式/index.html","162937c2690e146e9bf4cb4366d42cb7"],["/tags/分布式系统/index.html","8a23e717b2b06ffe1d84da7abc40b288"],["/tags/前端/index.html","1c3fb64b2b461724f47a51cfbab05123"],["/tags/前端/page/2/index.html","cdc2c23faaf069e09832d4f2c6bcdf50"],["/tags/博客/index.html","3be4313b0a0a546c871601b87fc0fbe7"],["/tags/后端/index.html","68c810f5b00e21a6515ca30a913f6f69"],["/tags/外观模式/index.html","678656eced66cdcddcd80d31fbbeffe3"],["/tags/容器技术/index.html","1f26966c6bf485cff4956d636d61a145"],["/tags/工厂方法/index.html","f0cd56276b64b955c873504b577a6800"],["/tags/微服务/index.html","faa61c693375d9aebb5b508515eb4137"],["/tags/抽象工厂/index.html","320ae04fe5816814d5f28ae5eef0694b"],["/tags/持续集成持续部署/index.html","9e46b9510381f9414779280a25d4973b"],["/tags/搜索引擎/index.html","5b1f7b9bfdc458721a879355e7028d2f"],["/tags/操作系统/index.html","c0efd5cf6ca2dc53f952d155facee81d"],["/tags/数据库/index.html","ee991bea59a31c4a945d58ec36193eb4"],["/tags/数据库/page/2/index.html","85ed3b85f42de6854fdf6564ab5462c9"],["/tags/数据结构与算法/index.html","a5a6a5c7c6d1dd7145e6c6a12c5b6d33"],["/tags/数据结构与算法/page/2/index.html","d2ea8f86249c2c58c116f9fcf8b10f82"],["/tags/文件操作/index.html","9591669f90d1223ae2a18c9cc5698072"],["/tags/日志/index.html","84cc6c332f83f5a24c0d76c5246400fa"],["/tags/服务器/index.html","adb6ef82a4fdb33c9b1d2b1719c08ba7"],["/tags/权限认证/index.html","dbdee9c3976e421a09bdd8dfb5da6c2a"],["/tags/桥接模式/index.html","0cfdb3b15c8a0c5a09b9c6999bc0c6a1"],["/tags/模板方法模式/index.html","1c36f8772ef5c3fe7981032a0ec6228e"],["/tags/死锁/index.html","bad3a033cb1735b4d9e87aea5daa6874"],["/tags/消息队列/index.html","5c8744c6131039c913b9117dd7ab93ab"],["/tags/版本控制/index.html","f26f07fe813900b7d690d35671d111b9"],["/tags/策略模式/index.html","e494290473ca801588f69748fe3a3908"],["/tags/简单工厂/index.html","8e745d489b120bf32b0f8bb356083126"],["/tags/算法/index.html","2157917d3e2d88bdc96adfdeb4dd9556"],["/tags/组件化/index.html","b6c4dfdf0d7f08289516f1611ec1f4c7"],["/tags/缓存/index.html","687e080ad200c858dba4e8c0406dff59"],["/tags/观察者模式/index.html","93147e7de07af674eb25a896381452b7"],["/tags/计算机网络/index.html","a5a03d5d355727392a2707a6dcab6ce9"],["/tags/设计模式/index.html","dba44e4b7575c958f6dda8acfdc9807a"],["/tags/设计模式/page/2/index.html","aa634ee56e8cbd8b511cdde50c8086ce"],["/tags/进程管理/index.html","d13a11989774a5c5f4d9b2eadbf32e9a"],["/tags/适配器模式/index.html","ab2ec30094d6a9b709f3479ecf297453"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
