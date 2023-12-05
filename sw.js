/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","a157cc3a4568c489b50949a7bd6c9965"],["/2021/02/22/工具的使用/博客的搭建/index.html","b8b3585af6fe58c2b7857e391574ffb2"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","cf3a5b4cdad6c10e3f0dd337e64c6f84"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","1e0734709fa206f485cdab1ea9a9bd62"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","b38335ea963d91f884c44b0afc348b46"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","552130f2282709825a05eaa00efea632"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","5e7768495330ef28f03dcc04b444c0c8"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","2b5a5b284eae67b31571bd64b019e01f"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","aaf2c4673c211d54d5b2db84716f626d"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","297c20c61043b48b5c77e1564e39d6b7"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","03541f1c260dac9a0f4e7806b8dd3bb5"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","09c369e2b1580ea432665e08a21b8477"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","8689eabefd49ae62a7d5382366c3d060"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","b3b333eb4842d6949a8b761d34669a68"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","df605fa760be4b4d8be8c12a7486defb"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","1b3b253f0a15a9b909f83437d6524a6d"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","97bfd3a1506f5286c6c7395c9d90918a"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","bd9d39b2866bea2b6ac9f00ca0072f9d"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","f9f9ec84da7615747ed6e5cc41edfd4e"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","78b0e1f0381785fc2bf9798d69ae51ff"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","dac12c2b6002f4e4752f4285fcd0eb43"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","bdba0d2d71d6cd84d3455b6607452a6c"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","8e2ccf307aaa9abc3b39b8b20fdb9fda"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","afc756a00e20357ac52d839d79af37e8"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","5d4a084df48897ee95c425d095cc82ea"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","7b9cad7f23ebd40ae0f728ea15b630f9"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","c73c694e1c10825cc870e98cfc4db37c"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","f4a445bd0096b5c58de621f91caac3ec"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","543989c57d20094895a0ce921d917229"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","c471091ca354a8c33ca12114ec5ecfaa"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","bce2a8792a25699c8d40c9e9f9a73b25"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","7282e6627d7cb896a8c144ef4e4ab765"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","1d86cc57358938957fb3b8fc622c3119"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","982e021ae312d7eb99d808a94374c270"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","89dd8439f1672517af4b36a13029bfe2"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","c18f96d7df4687c5f71a66955fa46246"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","3800285dd7734010e273dc387f983d41"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","499438bff14022247cc857a96aec4723"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","e40c7f8734138797432c538ee4a875ee"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","672c4cd19c2edefbd16b2b885a304172"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","a2ff8df4648c00b1656b302a4101a91f"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","659b65d6fae4a6f279a466c61a41ca4f"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","7e333fd35ad881ef96cec2929ac57912"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","42c8224b2e8be11f14515140c8b63e48"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","1859da144617dacdd337abc00800f608"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","c059716a23f367aae7b55bd576ad27ea"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","ea1cff01eb4e82f3f52a8cd7c06337c5"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","09ea883af47a8f69d64e1a8423d2ad3e"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","5867398d4e5f63dc7716311e56d420a1"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","66cd08b949d12caab235e43f2d0b4489"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","7c523d5f4abdac579fead28f2111b75b"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","17b2816fa7b077daa5dc07694898d6ee"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","d870f5b97273127d3f880a9165b85ac5"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","4dd1f405761e47d3195984b4e83b22d7"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","3a9c8aded4fb0e711abc89fcfb83a4f8"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","ee22193d344016ea4d99c21151e25060"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","0d382557e58ed7f2e75b490984eeb892"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","5b28ce18540458638b97599a78b49002"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","5151bfc87a63abfb6d97be982d341e65"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","049da396d62ff607a571b78f789d404e"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","b8644781edcd093fb3157724a0ca3043"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","606c0a6a7323149af0c26499dfaa52c6"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","ac6a4d2d1040191cca9c0407fa2d9dfa"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","47a958d575e5ae7e7cbe1b5837d166c7"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","b5a7a1df6a74f0201a94184dcbf37deb"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","efdfce5e029fdec0c80e785bb7aaed35"],["/2022/08/17/前端/jQuery/index.html","81ec0009486351de8fc4659647135cf9"],["/2022/08/19/前端/JavaScript/index.html","8a50e908034c057e6980a1ad41735e89"],["/2022/08/22/前端/Ajax/index.html","eccb313638be20da6c012a04c036fee2"],["/2022/08/23/前端/Promise/index.html","3ea0c19bdfc41a95e72c382574a63406"],["/2022/08/24/前端/Axios/index.html","36c0eec950afc36e22b18bd147b07930"],["/2022/08/25/前端/H5本地存储/index.html","a288cf60e83e8d68e1fbc068d526c1ca"],["/2022/08/26/前端/mock/index.html","a3bde6676b552ba1794e5f7ef060b839"],["/2022/08/31/前端/vue/VueJs/index.html","c20e02c132eea1ffceee23af3d328f80"],["/2022/09/01/前端/vue/vue组件化/index.html","0ee5029424370b1d86153c9f0295c1a6"],["/2022/09/04/前端/vue/VueCLI/index.html","3d3bbff3800831f322fd1fc0d7faf42b"],["/2022/09/07/前端/vue/vue实现动画/index.html","0df33faa6bff69162619ec86c0859afb"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","81d8f6067806aba8ab6714ad14955662"],["/2022/09/10/前端/vue/Vue异步请求/index.html","1b0e0a8322853e375b1f5eb742777ef9"],["/2022/09/11/前端/vue/vue-Router/index.html","74af2b53f1d13f086cd753a5fe1ff80a"],["/2022/09/13/前端/vue/Vuex/index.html","1c2d7edea8c443397288dfd6bc1b65ac"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","80a5e64a8a95f2027ea8f51e9956fce9"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","6cd016ea6216f9e8f55c69f89e54e51b"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","fc02c2ec7ec3fe1b47ee81632878047d"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","344ef177f4ff127bb821bc53de15bef3"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","f921b986d7b95877254ec4ab19b283de"],["/2022/09/28/DevOps/Linux/Linux/index.html","f01b79dc89410da1a69ab1246d4397aa"],["/2022/10/02/中间件/Redis/redis基础/index.html","6e269364b64ed6f5086e8ad2b6b239f0"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","8ff596923f4267f60ca75692e7d7077d"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","6d57951dc1e7a3f4c7103f0f2a4b4dac"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","089b31f956c42738cec554a9547089d5"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","2702737d206b094f2d560f03a0e7de5e"],["/2022/10/17/中间件/Redis/Redis集群/index.html","d7eb5f903b6c0c3e60cf719a890ba2d7"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","43c96544e976bb242234c14544597f70"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","d2301a226ce9e14311cafffbe9893c8e"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","fd6ec4b7c11416dd667c8ff8e3ab71e7"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","7d85e48c25b6f9454f4ac1e49fa78036"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","eb165e2e281535c7e80fc79781847cd8"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","7486d54eca7e4505b45b659e1fafb2e5"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","09f939c35ab21fe7c5393e2cdc1db7ab"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","9a82612bff34c5a7657d064a635a5292"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","a834b8f4dcd0b05928a448164c99124d"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","4671ed31eed4c14027c3bd3818edc504"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","7d24531d3c7659aff6b58d75f437e59d"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","d531a27df93446f091515a3f754c36c8"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","801631d951c5983e76aabd5d9e1c2392"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","29867710d5da3d8a0d1f55bd52a6fef4"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","ed209e8f3b8064a3d846348cb0d3f360"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","74e267d078fb15d513add40b1d55018a"],["/2023/03/10/DevOps/CICD/CICD/index.html","a9714d0d64778b5d381b32a82b01ebba"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","6a96d7f5dce5194370d6be8f5d5cf9c7"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","4b728ddb63ede84421603dcb68d06340"],["/2023/03/13/Java/NIO/NIO/index.html","40608907eb54c20b689f9bee7f157f03"],["/2023/03/14/中间件/Netty/Netty/index.html","de30785cb86a4f0fc13b111384892143"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","9ab1d05aa10ec05c9c7f1598bc1516dd"],["/2023/03/17/系统设计/分布式系统认证/index.html","2b68632cb5886deae34c5a4ad199971a"],["/2023/03/19/Java/JVM/JVM概述/index.html","42e5a8f702d24f40c4f49edc2ac7735c"],["/2023/03/23/Java/JVM/类的加载过程/index.html","36da32648c526733ab82de8c237cd6b0"],["/2023/03/28/Java/JVM/对象的实例化/index.html","3a463b8444d73045b69a5a0f54eeeb02"],["/2023/04/01/Java/JVM/运行时数据区/index.html","79227a791341bc46c9537048634ab643"],["/2023/04/04/Java/JVM/执行引擎/index.html","4ffe22a79ab0e6d16dcd037aa9eb9f7a"],["/2023/04/06/Java/JVM/对象引用/index.html","1b86c47ee9af23e5245dd65667117e76"],["/2023/04/09/Java/JVM/垃圾回收/index.html","8c0d36be9c57c5e5b2b5fd1199eaf7ca"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","caf9811e4cb9519e3088be80e02c2ebe"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","56d5264dbdef6d96ee9d8c62a8bec6ce"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","7e34ad06288be3a2b6d8b9a1625570c7"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","20268f8524ceb32f77b2283a98252cf7"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","c02286b58fa13059a4a42467a0d1b68b"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","0e2c83be544f03a1b66570501fa872a6"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","0530fe75c161d02b3d5b44ce5883f74c"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","37f993917cdb42433fb3a952bd063de4"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","489b6da80c39796fff2ddbecb6b794f8"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","25b1de3c41c6f3dc5c8708eae80248ae"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","c0140f6ff3fc0dfb54b8d1db6c91bc3b"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","103e495edaf68b7083fd361aa47aaeef"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","45189cdcbd719e0420f71245613c0380"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","d1e0669b83bf7ffc094a7f606baf3e71"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","032a35fba698f423f8f741c61e971a84"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","572242e4201cd5cc3b39e4e7c9fcb0e0"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","89e6e8fd7ec578fcc1b628dfa5800150"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","d941442f47da3e619f23a7f3237d71bb"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","de7260c8fea6aa97d9f8f6249314a900"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","cbe096148f7fd246b097d67bc0f050b8"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","59bd863237ccac6446f50f3e3218f45d"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","65eb8ea7c6f034fcc4747111ba405832"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","eb1ae82e43dde404c75ebc354ab30b2e"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","7da3663c2f893f4e4876e0f46d3cc07e"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","63ae1c8934f31def6caab635130b3d28"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","abf84ac6c24f97ab19b5bb391bbe80ac"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","161e5e3ddbdc7129299a388c2ec71514"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","7d95458bdde398d75b45231c5ba90297"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","61197dda52b9ef6b26259dad0205a474"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","f4f7ecb5ebd9f408d938af4efa9ea20c"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","a254176d178084366ea4e7788d805b90"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","d82b61c010924dc8a25a841f218efaec"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","01d4ae9e32f7ff09223514155e4ee21c"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","e2a33138306b8f727592cba27cef7136"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","24f6f57ee5b4f5feb7457f2141d3ce6b"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","f5687c8478e313cac5a652fdd732acf3"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","3eeb5d9e5a04a70223550f4cc8998186"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","ac238e19dfcaf59b7326e272b2134ad6"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","56dd52e2d981deac09f693c5b1387822"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","280c1b925f06ec2f3800b451284d7dd6"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","dce0367c29e3e100f609f3dbbbcd1f74"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","7bab3d312c85501b66396f9a47ab4d94"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","d984b95f01226b07068e1ed621c6b43f"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","92174354275202668c5e51652523911d"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","79a9aa1655c0d733160bd3823a787911"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","57935436ef041694d9aa00beae2f2483"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","5f3f939f4e6e1d93b731347cd96aac2a"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","2620b06db904567ba3dc00b749ff0ee6"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","3604a019d91229e982ca176690890986"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","c7db5be2cd020857728c62cf62d8f788"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","0df788ae5378cf82d2d22fcdef2686f7"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","da627f79f9a4cecb0ff06c4c29fcbe87"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","e75e6a31188fd868e61b4ddb7ee593b3"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","a3d908b5b1bf6c206b6cbd3c78735559"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","e6610343eef5816275d9b1f1d37b8d2d"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","5d00618096a0c02da1119e5ee85d7db2"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","d549fe61725932cb62700f4593120c23"],["/2023/09/04/中间件/Redis/Redis事务/index.html","3f10da9d810aea06a7b956246c9aad4d"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","7dd9913a9bab93d2ad4cafc2411723f1"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","5c073bd6beb3d0154355584c7ae69373"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","b0610173675ceb543275c568db3cf148"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","d67610c41e3c07f92a036f08ea5d608c"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","4b1459b6781603779612e7907b55af0c"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","f36490c499c1ebc295098d2578e681a6"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","4a01c930bd7ca82ef33bd193810996cd"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","015b61767b8d6f2e58e0454596313d77"],["/2023/09/22/Java/NIO/零拷贝/index.html","8846539bb25c760c62a0ec74801f4f66"],["/2023/09/24/系统设计/JWT认证/index.html","27ba371c1646617a552cdc78ea2b3e67"],["/2023/09/26/Java/NIO/Reactor模式/index.html","4fde280a4acdd476413922522b8a216f"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","640e77f92c590c58afa40d5f7260063d"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","9f4f6ee96ff9bd84ac46d99d04f49e8f"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","adf5fe74a098d42ff6793c77b6a97c72"],["/2023/10/09/Java/并发编程/共享问题/index.html","9b9641e8874ba795055dc6f0da7a85be"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","26eab4880d2eb3f702170afe6bfd295b"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","5ba11b7b234fbe8ea10f7eee61fd16b8"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","22bb372a861c6e62c60354697043c3de"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","2d3825c184663d76a680e9d2107e4c8f"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","d89963a8dcc93fbc1005d3280875d17b"],["/2023/10/23/MySQL数据异构同步方案/index.html","a28be61c0a75f788f176358c4616b5aa"],["/2023/10/29/动态通知方案/index.html","b540aa53f22424fcab1c67eba7df9d47"],["/2023/11/01/多级缓存架构/index.html","aad025c3cfe1990acb7c077ca45705f8"],["/2023/11/04/分布式一致性算法/index.html","7ba20f0e11c5da62d83d6296ea4822d9"],["/2023/11/08/接口幂等性/index.html","e33badbc80b3473151b9fbeceb038484"],["/2023/11/12/数据迁移/index.html","83033af31b26b45bd4e264ad4d54873a"],["/2023/11/16/经典限流算法/index.html","e667951f418d62bc07d42f1fbe89c59e"],["/2023/11/20/高并发系统通用设计方法/index.html","d1c3e3e6d1e7da2c98c1a269a0d3560d"],["/2023/11/23/架构分层/index.html","e0f6141bb53127c2952c2c8fef0aa1b4"],["/2023/11/27/高并发系统设计目标/index.html","1d4ff04a3000034703bd5a5bfb8be25b"],["/2023/12/01/数据迁移细节/index.html","d8ad4d9d8395e55c09625b4e77b4e763"],["/2023/12/05/开源协议/index.html","3f9489edf8847d591cf63b81a16eb947"],["/404.html","52400209515a98da1bf8cd2025abbb2f"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","68afba0ccddf929dc6238e399406a5e1"],["/archives/2021/02/index.html","cb848ed777eef8085beeb68c2edac51d"],["/archives/2021/03/index.html","c7c27cbb3b525db8781e5d44377404b6"],["/archives/2021/03/page/2/index.html","0487c67186c3f76f7114b99a7e59341d"],["/archives/2021/03/page/3/index.html","d5e558f8fda874ed098ed843cf3f54e8"],["/archives/2021/04/index.html","4ec96d0107f7c20905c3a0e8602c2fba"],["/archives/2021/04/page/2/index.html","b0c66f207eaacd14322530cc70a324b7"],["/archives/2021/05/index.html","2aa71b9971f313908b18eb9f5ebe83dc"],["/archives/2021/index.html","2762c7cddd73f83f8c51805a5727af82"],["/archives/2021/page/2/index.html","5ac1ba69d6aafd2852fad7f1635998fb"],["/archives/2021/page/3/index.html","508a880828fa5db2f7912e7885966487"],["/archives/2021/page/4/index.html","2ad1003961f96c7cee6bbbef570d4e0b"],["/archives/2021/page/5/index.html","bad93140a6a4092f0506ff07c493ebf2"],["/archives/2021/page/6/index.html","19ee4e2826b1f3bc15ad5905f00e57e8"],["/archives/2021/page/7/index.html","ca6cbb9be9adc11c9ee656fe4720983a"],["/archives/2022/01/index.html","bceedc0ca654ccd961785807c5137142"],["/archives/2022/04/index.html","a87d25b5e51c66666c7230e0275b5041"],["/archives/2022/08/index.html","34de7d4b7599a4ad7a07a63d1770992a"],["/archives/2022/09/index.html","0db765080826e7e14906c5ea45f5f7b7"],["/archives/2022/09/page/2/index.html","893f8162828c2be6c84f171b060a6f05"],["/archives/2022/10/index.html","96f7a8a2feefa38d66bd3c8fcc21f6c7"],["/archives/2022/11/index.html","1d06d774d5a971a191892a7e22cdb6e9"],["/archives/2022/12/index.html","b079102a8fe08a03fa9d1abd842bbe18"],["/archives/2022/index.html","c8615f7927cfb7749cd848bde8c4978d"],["/archives/2022/page/2/index.html","ec3b76c39d523f58a6712174628c6f4b"],["/archives/2022/page/3/index.html","d4338b10e05eaf91eca97d0c581eea80"],["/archives/2022/page/4/index.html","1b3bb08886f7cea3a6858cadf4c328ee"],["/archives/2022/page/5/index.html","e0ab052d62ef7a9475f2f741bb083cef"],["/archives/2023/01/index.html","eec47400c037bfd58d5b0746f2e920fd"],["/archives/2023/02/index.html","43ce3601b389c03a60982cd59ae21d56"],["/archives/2023/03/index.html","a81239d3463dac528314513fdc21351b"],["/archives/2023/04/index.html","f6e8b544849ec1afb259b5448832e9e9"],["/archives/2023/04/page/2/index.html","1e7c5f1ec4c50f99d2a3a81026d279ec"],["/archives/2023/05/index.html","5b6dabbe85c740c1befb1f53be0bb089"],["/archives/2023/06/index.html","8390d50ea63dd23bdaca0b47abe23fd3"],["/archives/2023/06/page/2/index.html","df341bf4f36608f78fe1f4e0dca2b3fe"],["/archives/2023/07/index.html","db81892474fbaeae4897318330a01216"],["/archives/2023/07/page/2/index.html","f6631228427282d92f4bd74556d7b189"],["/archives/2023/08/index.html","a1995717492f6cefa67d85356bd5dcb0"],["/archives/2023/08/page/2/index.html","b3fe7512a43b062601ac93001b92ace4"],["/archives/2023/09/index.html","8aa3463b2d6343be723c8dc32f8a7da5"],["/archives/2023/09/page/2/index.html","cf532dda2873562c008020780446ede9"],["/archives/2023/10/index.html","02ae52c958e5096557fe99b6732ad33a"],["/archives/2023/11/index.html","85979673078cb31bfee032576e5181c1"],["/archives/2023/12/index.html","dfecb357af8d4da9bfd1f4084d852eb8"],["/archives/2023/index.html","a5ef4c61c81531f0a5f93ff24882b757"],["/archives/2023/page/10/index.html","a663c9bcb3ac7b1c1f0e37324bd788b6"],["/archives/2023/page/11/index.html","d76ca67cf9045fe93805f3153e0fff76"],["/archives/2023/page/2/index.html","735d0729c2f83f0647ddb40c1c2a54bc"],["/archives/2023/page/3/index.html","9875007fee33ffb3fab45c0a8ea4ecd7"],["/archives/2023/page/4/index.html","4121603a89ee48ffe59f052520033708"],["/archives/2023/page/5/index.html","bd0d180c37d61a11022350e6a8140202"],["/archives/2023/page/6/index.html","50b7b50d26b516bb1be3f971a0236627"],["/archives/2023/page/7/index.html","96afc1d55fb91961aaa464840ff5d8dd"],["/archives/2023/page/8/index.html","7859cb9be191bb87f4cff79598e57e5a"],["/archives/2023/page/9/index.html","f992fb8a97f14a9ef1de7ee2417787aa"],["/archives/index.html","c984bd62ba57917357565b7e077bd0b8"],["/archives/page/10/index.html","9bec818fc2f0c729a664bc6025b784a0"],["/archives/page/11/index.html","0363bf2a28ddcf8e510edfac52b7c793"],["/archives/page/12/index.html","88d8e55a68e614f0ccc1ff7290dbb923"],["/archives/page/13/index.html","81eea35dd0c4fe54c8cd2bf27d68ecac"],["/archives/page/14/index.html","72f45f22f20f7830034841960aeb8a41"],["/archives/page/15/index.html","7d3cca10e52b79e176c0edb0c602c410"],["/archives/page/16/index.html","c6e576ef37b15a0aa0c989b385cde25e"],["/archives/page/17/index.html","ba0d32e80374ce378bdd9c4ec90bcaff"],["/archives/page/18/index.html","24ef61ae6d4e674af38e49aa491d6ac8"],["/archives/page/19/index.html","d116808c1e03147ac99158585b75190f"],["/archives/page/2/index.html","4333a71c96d18aadc788e85c400c04e1"],["/archives/page/20/index.html","734d7cdc7974d5b6a781811aaefc2960"],["/archives/page/21/index.html","092b9378d5f197951e462a72f89d22b0"],["/archives/page/22/index.html","f74b75d3df788c30f837fc08752740a0"],["/archives/page/3/index.html","3e1e9af753cf11090dd259730481413b"],["/archives/page/4/index.html","93260c59400cfcdbb0ab3ace92dffe35"],["/archives/page/5/index.html","501d34982bafb7b6dbe9bb7c5e0ec823"],["/archives/page/6/index.html","8922a55b79f1e3034ab374be3b956f6a"],["/archives/page/7/index.html","0b2acc4ca8f69b0179690b7ab1122f92"],["/archives/page/8/index.html","3798a3b73218c9093d9c46347b5cf21c"],["/archives/page/9/index.html","9c513444b385f742e543f65b1d294cdb"],["/categories/Devops/CICD/index.html","f01e68ad2209e4ea7562a6ee502336fb"],["/categories/Devops/Linux/index.html","dc347900415eea6c3095e840bf7a970d"],["/categories/Devops/index.html","23aeb7a2197dda0b85de926f233da23b"],["/categories/Java/JVM/index.html","5915c3e16ce0bd71162ef933a84f63d3"],["/categories/Java/Java基础/index.html","6356b954adde13e31ecd348caad59f48"],["/categories/Java/NIO/index.html","696dc47517b9a73da527b3ebc7eb4868"],["/categories/Java/NIO/原生NIO/index.html","a9ada1d590a592786080abd685df1edf"],["/categories/Java/NIO/文件操作工具类/index.html","d1f518c277bebe61890f2b0e0df9d299"],["/categories/Java/index.html","11c10aede32b7d1ca06d58ef76df605a"],["/categories/Java/page/2/index.html","fe672ee89917359728013ba3e4a0aae9"],["/categories/Java/并发编程/index.html","7a3534dcd180a3582cb3e4ed6bbdf0c7"],["/categories/Spring全家桶/Spring-Security/index.html","6ccbf30f1ad018985d6f7992b0a975cf"],["/categories/Spring全家桶/Spring/index.html","e429f1481cc91b26b794deada5154342"],["/categories/Spring全家桶/SpringBoot/index.html","7ca89fcbc2c58e1826a9ddd5dd8d3e25"],["/categories/Spring全家桶/SpringCloud/index.html","e258cbefc449eb65bb021bc9901c8d0d"],["/categories/Spring全家桶/SpringMVC/index.html","5d726879925627175cfb6202e4021b43"],["/categories/Spring全家桶/index.html","e6617e749bf9e6b772ac5240191a2d56"],["/categories/Spring全家桶/page/2/index.html","2989d00c8a8761af48b0d9a974a9e535"],["/categories/index.html","ba532d5811577d1e58ba675a77915d43"],["/categories/中间件/ElasticSearch/index.html","7681c0832f66c6c25125c3d4181dc58d"],["/categories/中间件/Netty/index.html","44a5ea1bb185035108eea5efaeac96fb"],["/categories/中间件/Redis/index.html","9f6a4d208704c84a7577c1efb27c4894"],["/categories/中间件/Redis/page/2/index.html","35ef73340647323ee85f91b5f574b14e"],["/categories/中间件/Redis/page/3/index.html","e093a179040297da3ac4e3898b3b0d7c"],["/categories/中间件/index.html","9f04ade53e487b06e70636844e0fbcdb"],["/categories/中间件/page/2/index.html","d5a1d77c50467019d8bdec65a0a048d3"],["/categories/中间件/page/3/index.html","e6fedc06c4d973090d7a88ce2a99cb18"],["/categories/中间件/page/4/index.html","cc7b3c62dcff8360361123a39bfbebc3"],["/categories/中间件/消息队列/RabbitMQ/index.html","6f5a125cfb61b788142e84009a46aa64"],["/categories/中间件/消息队列/index.html","8be06f66e940c22b00022e6bf4a49643"],["/categories/前端/Mock/index.html","a1a69058c375bac19b40ee14240ff753"],["/categories/前端/Promise/index.html","24b9f0deeb43006adb4bf584049b5795"],["/categories/前端/Vue/index.html","d58296d5a60de047ac33636f50e02c12"],["/categories/前端/index.html","3bd1605daf5240f1d60b642b9aa6e2f1"],["/categories/前端/jQuery/index.html","fae26a59e4409ffbb765e9b171ac04a0"],["/categories/前端/page/2/index.html","c09fc006fc4fabcf555d994457eb2a91"],["/categories/前端/原生基础/index.html","fbe9aac1e2bb6ccd0ba87b10fefe14fb"],["/categories/前端/异步通信/index.html","b4f5add68c2a7675b961a07c9831c448"],["/categories/工具使用/Git/index.html","86f81fa510a30ac812bf4535a04f4089"],["/categories/工具使用/index.html","a6b18a966103bd4a0e43f3ba63d769cf"],["/categories/工具使用/markdown/index.html","731360666c46c63b68caf87d3e47e0ec"],["/categories/工具的使用/Docker/index.html","d16ff1f5bea669099d76f09847edf3c4"],["/categories/工具的使用/Nginx/index.html","e967ae27a07bc2d286fca5b3269f4356"],["/categories/工具的使用/Swagger/index.html","17005ee8ce1d9578146bac875ae27165"],["/categories/工具的使用/index.html","8990ce8f739a7deb9a5df20ed341ca64"],["/categories/工具的使用/博客搭建/index.html","71261f050ecf86d5df575b93e79f429e"],["/categories/数据库/MongoDB/index.html","242b31c48dc3af2435f397d20d7f54f8"],["/categories/数据库/MySQL/index.html","331122f80edccf72ff2b53a00e3b5607"],["/categories/数据库/MySQL/page/2/index.html","8b8dd58731f8c91f0f67f6c3e294a006"],["/categories/数据库/MySQL/page/3/index.html","1ef9eb7f1d9ed1834b1bb1687aa06b2c"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","72e6f3f661e717cd46dc06601f3e907a"],["/categories/数据库/ORM持久层框架/index.html","827d896b99bc0d620206a4278348b4b5"],["/categories/数据库/index.html","9f33241c90508e7db8ed8c1f6dbbbe38"],["/categories/数据库/page/2/index.html","e1e4bde806a39f54e070c9e5082150e9"],["/categories/数据库/page/3/index.html","2c2c3f46d5a610a9c6cf155c2a3c0dc7"],["/categories/系统设计/DDD领域模型/index.html","daf73a0a7ebd30974272ad08be50f322"],["/categories/系统设计/index.html","7fccd1c38607c51eb39b100073becc7f"],["/categories/系统设计/page/2/index.html","a1309abc2f8f1cb0104869c475f1c257"],["/categories/系统设计/page/3/index.html","17892c608553922da1e818b13f382f9f"],["/categories/系统设计/page/4/index.html","78ecaad7ff6459ad249f48ccf167ed3f"],["/categories/系统设计/分布式权限认证/index.html","24885587186fd0deffcdaebeba8dec61"],["/categories/系统设计/分布式系统/index.html","00d9fbf848878cdd7566b9d9bd410c1b"],["/categories/系统设计/分布式系统/page/2/index.html","18e028154a27db7810fff1cc33337d63"],["/categories/系统设计/设计模式/index.html","a048c316b0cda41dd0464ac328598280"],["/categories/系统设计/设计模式/page/2/index.html","c20023d6c7a15f19770917af6c741ece"],["/categories/计算机基础/index.html","64a668d1e52228f0a7bbaccb8d43c4c4"],["/categories/计算机基础/page/2/index.html","d8de8d6648f039d3197cd22083d01682"],["/categories/计算机基础/page/3/index.html","f352dd24b17de6882d4a3d09f85a6dc3"],["/categories/计算机基础/page/4/index.html","0a7c10313c856c03e617945e3f1b43de"],["/categories/计算机基础/page/5/index.html","0e98fbffa80f41b58571fdc5863067de"],["/categories/计算机基础/page/6/index.html","e239e63f3f6add0a9a9e9ff25e6c85a1"],["/categories/计算机基础/操作系统/index.html","046476feb4559c7a2f44dedaa503fd76"],["/categories/计算机基础/数据结构与算法/index.html","970e38b03d28ee716ea458c7c318f003"],["/categories/计算机基础/数据结构与算法/page/2/index.html","196603101632cf18d86d4de876bd14cc"],["/categories/计算机基础/数据结构与算法/page/3/index.html","ad138009398a5c4efdc0896afe95e8b9"],["/categories/计算机基础/数据结构与算法/page/4/index.html","3e9844340b30078913170b84fd08f17d"],["/categories/计算机基础/数据结构与算法/page/5/index.html","6636209de313e81f80d4a40c61413de3"],["/categories/计算机基础/计算机网络/index.html","e11d371af3541827ef543024389d78ea"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","fd33f548a805faf23adac6e3094081ff"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","922e3f361f04192b08bb77071bd301a9"],["/messageboard/index.html","2fcf0d39ddd97cde3902030434f7df73"],["/page/10/index.html","62ee13dbeb6d7bbd91856269e1295544"],["/page/11/index.html","0b65b8eb1680517a50ef74b7c74c30b0"],["/page/12/index.html","155daa07fea781a41f3a46905ea84032"],["/page/13/index.html","a327441c725bbcf266826766404fba3e"],["/page/14/index.html","3973dffd4d94c4759db4d1d53856d799"],["/page/15/index.html","99643b6e509307e8ad69d5182a3d3708"],["/page/16/index.html","b5e1904e35a69978b9630e3de3b940ac"],["/page/17/index.html","fdb193272d5c686ce69d8613484d7567"],["/page/18/index.html","53fb3b5df8f119513f7079e5e00814b0"],["/page/19/index.html","6cfb535c5bf1e05d1a0fd284c3ced170"],["/page/2/index.html","53300d4b38fe7a69df6cba06e68f3c7c"],["/page/20/index.html","f9f334ec8886331bfe5ef7be0e4423b1"],["/page/21/index.html","8bb2a040d162b7f7f44478439bd9ccff"],["/page/22/index.html","11690a0be186662fe0f9e4f4df19e352"],["/page/3/index.html","150fb943e656a24da8f0e8b7c059bbc4"],["/page/4/index.html","6905c63ce5df831d2b0557ec44103d7e"],["/page/5/index.html","04e03a3b3c2138aff603648328b45296"],["/page/6/index.html","ba780029674286fe2ea7b35689af8b29"],["/page/7/index.html","9cce266db3854f3148f52115fca3be7f"],["/page/8/index.html","ff1ff07571b62de3c82f533ba0ca3c8a"],["/page/9/index.html","521b28f31e671f86b0bbc4b43c88c92c"],["/sw-register.js","e22ecf29530cad9e7f83b3ea8496eb8a"],["/tags/Ajax/index.html","619b1cb3c96ad174ab9718e5c1e3750d"],["/tags/Axios/index.html","26be1c09e348d1dfb514f51a8ec50a63"],["/tags/BASE理论/index.html","9538b065a8cc962c74f6ff3a44465615"],["/tags/CAP定理/index.html","856d2eafd94081110833faaef5afac3e"],["/tags/CICD/index.html","e3b940f881a40c523f3eba3062bfe893"],["/tags/DDD领域模型/index.html","ef81ee03344a915b5eca878c1c9d6d5c"],["/tags/Docker/index.html","1138fe8517200f718a2620e779eb2fd9"],["/tags/ELK/index.html","164fa909dc731fa9a56c70c79283c73b"],["/tags/ElasticSearch/index.html","334afa2363389838607a2764689c3e47"],["/tags/Git/index.html","f3d3222fb07b388ff73e40bceca7309a"],["/tags/H5/index.html","aba611a801b6a5a1f20c788fc3e495a9"],["/tags/JVM/index.html","19bb20fd23f835aac70cbc524308b7ea"],["/tags/JVM内存模型/index.html","51ac7e423afc8827f9d2fab58f0677f2"],["/tags/JVM执行引擎/index.html","c6050a36d47821dfc54054421527ad37"],["/tags/JavaScript/index.html","bd33fb4b14b7fd2e2c5fd9e708f0688a"],["/tags/Java内存模型/index.html","28f47b92e60fc17296d6711f60772237"],["/tags/Java进程线程/index.html","73f5306c8f43222c7c982acb264e91f3"],["/tags/Kibana/index.html","eb114d8abec94bb57941b4d3646d3136"],["/tags/LeetCode/index.html","bc5527e1d0dc69bbe7cca680962220e2"],["/tags/LeetCode/page/2/index.html","73ee5609bd4171bfa5dc39f15eeb291f"],["/tags/LeetCode/page/3/index.html","76e38a569d31a573a5f9bc730dc9152a"],["/tags/Linux/index.html","b311df4da832e5af4a61d81c21f5e6b3"],["/tags/Logstash/index.html","2b8f44d956d1075377e3adcd3a5f755c"],["/tags/Mock/index.html","da60c7d6c4d377ae4828511115bb9eae"],["/tags/MongoDB/index.html","1e850d850ff4475fa9c5420f82cc42a2"],["/tags/MySQL-事务/index.html","f8917a0baaf894f7cef10c565472557e"],["/tags/MySQL-数据类型/index.html","f1675904627b00de1019c70723fbea0b"],["/tags/MySQL-日志/index.html","b7dccb185a6c097bffe5e255a85b1bba"],["/tags/MySQL-索引/index.html","2fefe9ce9cde56ac431989302d76b1ca"],["/tags/MySQL-锁/index.html","fc1ec187854900a18452c442a7362f6d"],["/tags/MySQL/index.html","376779aa15387e03fe4675813930c8ab"],["/tags/MySQL/page/2/index.html","481172566102428900d09868bd3fbeee"],["/tags/Mybatis/index.html","819a7180aadd538db95b38f598fe26f8"],["/tags/MybatisPlus/index.html","c93a05a6c20b53488e6ee981ab5c390a"],["/tags/NIO/index.html","7ff3c761051e90b04aa7cf1045a1d4f8"],["/tags/Netty/index.html","99c83b9012e6baafb19ed682db382007"],["/tags/Nginx/index.html","32979804d5b7758630c9031616c6472c"],["/tags/Promise/index.html","a84bd41990ecb5484e7a42626281f9c9"],["/tags/RabbitMQ/index.html","532c65bfe6c43163ef9e28ff37cae29b"],["/tags/Redis/index.html","8188cd06f59ad52e8f3f986c2652edb5"],["/tags/Redis/page/2/index.html","2499ef725c4b012dd5d10d3c3ed6fab2"],["/tags/Redis/page/3/index.html","f583ef819f0feba2f309e6857cf32db9"],["/tags/SSM/index.html","53d07529e64fda0b3cba5c0181eedce9"],["/tags/Spring-Security/index.html","1405285390ec6474520dceb0c7f55093"],["/tags/Spring/index.html","5eb29bd695351df186cc0137624c483f"],["/tags/SpringBoot/index.html","33f77d9059d612fa701d73acbab03909"],["/tags/SpringCloud/index.html","90dcc2f7af54f16e4d57ccbea4d9f493"],["/tags/SpringMVC/index.html","992a5ddbb93f5e8e5b5d13daa97c86d2"],["/tags/Swagger/index.html","a4dcb71b4ff7d6918043a4ef7a75563f"],["/tags/hexo/index.html","5715548aae6c52213afb7d8ae38e1c1a"],["/tags/index.html","04af8e6c949536c4371b30ac563bc00c"],["/tags/jQuery/index.html","888b2ad0425fca3890071274d3752059"],["/tags/java/index.html","cb4d965aa752a69645ec20ebb2db5275"],["/tags/markdown/index.html","0c92453d24c0a259bb1895488f306a64"],["/tags/noSQL/index.html","c3ba276fec48f5ad70efe11e8ff24b41"],["/tags/typora/index.html","2df5767cfa84918c2a66c4d102c369c2"],["/tags/vue/index.html","7360370ff02179b47e3d715c75b72b82"],["/tags/享元模式/index.html","2cae000fb668f8b37f32cff88a9e096f"],["/tags/代理模式/index.html","5c106fc52d54d55273cba466e202c59b"],["/tags/内存管理/index.html","ebd87994c3ba0c6c90eea7a84dea2c2b"],["/tags/分布式/index.html","9e862c6f81679af2574632fd0d178d58"],["/tags/分布式一致性算法/index.html","d15dd7ae43824d40595bd3bd8fada27c"],["/tags/分布式系统/index.html","b51e5a6088a7331be11bfb8c352c4da4"],["/tags/分布式系统/page/2/index.html","4c5733231faf9412eae99236ff4a60e3"],["/tags/前端/index.html","12d8f67e93693b41858e9d9ecf5f4cec"],["/tags/前端/page/2/index.html","22eca5994dfe5e255edd5d804d4551de"],["/tags/动态通知/index.html","9897fef02dcc003abe7e1ca5c89973b0"],["/tags/博客/index.html","2414ac8b314268b5fffba012689b2857"],["/tags/后端/index.html","5e339c78f776dd599b440ab52210e58f"],["/tags/外观模式/index.html","3bb8b08dff5787caff8d6c2d7d7e5246"],["/tags/多级缓存架构/index.html","eb31ea11590a861e7217b42126c2a68f"],["/tags/多线程设计模式/index.html","d83641cf9b247f6b28b781e52c6ad029"],["/tags/容器技术/index.html","157e1d3ea830adbd9db4e8bc73e81441"],["/tags/工厂方法/index.html","63e90a9b734a2d1a3155e1c36bbe1262"],["/tags/开源协议/index.html","5e5e031eb57d522aa488686de350505b"],["/tags/异构同步/index.html","bc32d19e349099f147943fdff0037433"],["/tags/微服务/index.html","553351f13c38ea893b55b79f8eded0f2"],["/tags/抽象工厂/index.html","a4f80c74230e008641aa81f46e472eaa"],["/tags/持续集成持续部署/index.html","1157dfcb41c06a96394b0ebbc67c8d7c"],["/tags/接口幂等性/index.html","fcab56c11377b52b15f2ea50b43e7f74"],["/tags/搜索引擎/index.html","dc1de1ae994971f62f269e9abcaab053"],["/tags/操作系统/index.html","70dc6f28c4ea024d435a8196ea52ada5"],["/tags/数据库/index.html","a3c3546edcf11e4072553e32a1260e09"],["/tags/数据库/page/2/index.html","6d972833c7b43e952cb93b86b183346d"],["/tags/数据库/page/3/index.html","44eb11d94022c65f45095e064d671caf"],["/tags/数据结构与算法/index.html","fb2219a0dc52177db0b11c5703568532"],["/tags/数据结构与算法/page/2/index.html","4515741f13f083fcf62ebd3c1671c640"],["/tags/文件操作/index.html","6da5c50395ff8aec0a6a38546937ad09"],["/tags/日志/index.html","595945ce6b3582eea1e056b48c818c1d"],["/tags/服务器/index.html","3f5f01b3146e6611fbb01e6f351014fa"],["/tags/权限认证/index.html","cd60d108f9c184cae101574d26cb6072"],["/tags/架构分层/index.html","f7d8f15ebb90fdedee383f59da04c161"],["/tags/桥接模式/index.html","a6462a30abe547b27070993e508fdf24"],["/tags/模板方法模式/index.html","5bb36b4a821ab4993effaf9379363616"],["/tags/死锁/index.html","3842e61b337b2850b36876faf8d06a9d"],["/tags/消息队列/index.html","d9c5cea8be17fb878c72be2717c31cc8"],["/tags/版本控制/index.html","1b910265ef87b149b5ca7823ca9f1b7c"],["/tags/策略模式/index.html","efd17c9a435be220f2dbf0b6348923cb"],["/tags/简单工厂/index.html","c1dc1212715da0ff45b4d70e6c1a339c"],["/tags/算法/index.html","56fed1f189c40232c54b54d27a5e5c50"],["/tags/线程活跃性问题/index.html","eefaf50351f2a2b06a1a2d15a617ca66"],["/tags/组件化/index.html","bf8144cd7eeaaa8c2604ee6b45728b49"],["/tags/经典限流算法/index.html","d66db2e9b9caca3d842c7df3329aa54b"],["/tags/缓存/index.html","a4096e5feb1cc3e5cea6503bc43a7079"],["/tags/缓存/page/2/index.html","2e25f0bc57e7c278f09110f7ea37b13c"],["/tags/缓存/page/3/index.html","4ad5ea9fdb9c9e5344f7748ede8cc661"],["/tags/观察者模式/index.html","02ba001ff32ed4d7d3aa79ff0ea748b1"],["/tags/计算机网络/index.html","98ba883b595329c647cc3def7b69bc36"],["/tags/设计模式/index.html","c5da634c7aaa85df5a57f450beb11305"],["/tags/设计模式/page/2/index.html","8abfa41e18c780c854d6651bf3d7d7cc"],["/tags/设计目标/index.html","29bd8c9be344dd1b79d7913c59fc7b85"],["/tags/资源共享问题/index.html","06b8105c69d2923efe980f474b6933bb"],["/tags/进程管理/index.html","984e614f478094e7cee5107fdf57b410"],["/tags/适配器模式/index.html","a2e2f0c436861d344c8453f993851701"],["/tags/通用设计方法/index.html","ea84d6bb1d684316030540e598ccb279"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
