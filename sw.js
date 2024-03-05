/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","d143a8d67dd24e19305745b992d397cc"],["/2021/02/22/工具的使用/博客的搭建/index.html","f900b6a222980541dcea347d44c09457"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","1c01baab91aef7357d19c83396323c00"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","65f3a4f46893e39d439d5f57a47f692f"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","9f8aa59d54c34bf46d4757ebc0ce35ec"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","0529a82c657ef8b920ec0ae8300e4b8b"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","5d8d82055acaffa39442038e1a807372"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","9cdc91e996f181f5581d63b10de3e23d"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","b5afcdfa42786edd8453549eba921d73"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","72b6434006077e3bb25bd5c3ce9bddf3"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","fcb684a6a78f88bc4fa3814ec1d41273"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","ec6bbcdf94aaa445806d6048a54401e1"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","8b40f2177552bfd819b76a34d73ffe07"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","8b32822f878ed1dbd5e3dda3e19e123b"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","4b965b22215b11a824af46331496a596"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","6660359101f2cd445ebab5abde16f385"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","053f64e7218a1c0b6d2c90db4121b0be"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","7a2ca2e7f2c71f3d6093d40f09694559"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","177a18cd8dc5815bdf95ee19128a9d00"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","91652179f9e1cf8149fe1c0054596c1c"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","79928993bbb2e3a97275979922646c4b"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","2d987f67b1e12ee605ca3ee3327ffbdd"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","afc6b252b55c2d8939092e476a669292"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","607652deb186a078209f91ba3a6b59a8"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","f7c519df3bcab1bbfec4d5fe59d31cae"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","f8e3c7e7efd12b99822c38ba479aa019"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","e49be411d032a2508ecde7c7106a8d0f"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","c8ad432efdf275b5830324d97e7c191b"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","38a8839fe39ec0516d2d0505280379f4"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","9f11e5745c4d6e888752378d03b59071"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","7da71189b1a9e34ddf77e50c9ba8132e"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","f889c0b454e8b6e03b512077d7656280"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","89c2d981ae2f03eef6613122a988cb15"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","11eba034d2d0c0ba35125118c8688520"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","c53d8e828630c327db282bfdb2326888"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","1f637c81d53b05cdcc8162cb9087b5a2"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","84b6040d4ca7edcccc4e0909b45a1ba3"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","08579b70377b6517ffec77903b581142"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","116e0311c210ebc59cb1f647e0509690"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","58644962f5286f2a09dbc41f53f8118a"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","2fdf351de893a14a799fb07547320f03"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","35428e3576bf06af09f56bc32b414462"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","9f17c06a70fff82ae6ae97ba216888d7"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","d4fd0c914283d2769b6b0af62c54ff75"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","3d1509bbd6d30a21ebd5ddb4104d9aee"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","84457d5b8469a3d57a842b225ad1463e"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","68173f8783434767979a889977187ed9"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","ffd4b279600b94ff6d0ca0caaacae0f1"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","693e436485888f15d2aa3ed4d6848094"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","b13b43d62c60615e888f9db23672e063"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","86669d738fef2302daa77fbe9dcb217c"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","8ec993275bd0e0ab437a19860b08518f"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","06b8139c647148a2c6aeaebb530db163"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","f6ac66a875f6c78ee5902bdc13dff188"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","ec727a047beb3229ed4e7d3578e28d48"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","403832c3c9a9ecbd0f90c9e52b8956b0"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","c54ef30ffe11878d1003bccb8b3ad368"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","dc31613fd0420af5602fdf85ce732cd4"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","17decc370cca22172ce2f9afbe56d222"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","2a039d78ff856598ca9f963bf0f533ba"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","cba520a3acf08a62609d6183e69acd3b"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","ad04b1782d4c999634f85f7cd6e4367c"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","a8678ef5efcef7b454dd553ff299a0f0"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","939ce295536018b83a993952de9a13d6"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","a009147b0c342b3b094862ff606facc9"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","5e404810cf343c507a76405f86adaa8d"],["/2022/08/17/前端/jQuery/index.html","5d217f251783b89c06c4eec5d02b55f1"],["/2022/08/19/前端/JavaScript/index.html","737308df6e62f0d6def70f9834789e18"],["/2022/08/22/前端/Ajax/index.html","b53ec7186533d770cef916e5a03422b1"],["/2022/08/23/前端/Promise/index.html","fb2050490b4ded3eb30658c80b619034"],["/2022/08/24/前端/Axios/index.html","3cdc1e7f169daa5ad59774ab932dc518"],["/2022/08/25/前端/H5本地存储/index.html","22819d24eedc570fb1bf313864e6a9a8"],["/2022/08/26/前端/mock/index.html","2de3f250e013706a8e6716685b822035"],["/2022/08/31/前端/vue/VueJs/index.html","fc53c2022484cecaf0c542bdef82f1b2"],["/2022/09/01/前端/vue/vue组件化/index.html","1f02ebd3f807030823d1630ec135c6b9"],["/2022/09/04/前端/vue/VueCLI/index.html","9a0d7a6197e00715e73b60373dd6f577"],["/2022/09/07/前端/vue/vue实现动画/index.html","c3e7d6adfaedcb8018a04b65777f7c39"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","19bece40a649fc10bf3b75897d33dace"],["/2022/09/10/前端/vue/Vue异步请求/index.html","4dc9863da7a7aa1119f2f1bfc9caf969"],["/2022/09/11/前端/vue/vue-Router/index.html","7bae85c8a9b7868b64d22be55659d4d6"],["/2022/09/13/前端/vue/Vuex/index.html","31c0a1271c16f72b2d62eb1d9cbd2d50"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","3b6fd5dad39bf7a6c704054ef7944d46"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","c4b1a288cfcbfe8951c0f5ff8efddb3b"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","489aaeb478c6b1857b0d8fe0185da487"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","56a359336bd2580f144589ab4a325aa3"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","230e2a237d6fd24ba26ce1fc82134870"],["/2022/09/28/DevOps/Linux/Linux/index.html","d168e7ceb2f2e1b45a140d0233a8f98c"],["/2022/10/02/中间件/Redis/redis基础/index.html","112d0c209808248a604f0a399625858a"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","910df28d2064f3d0971c80c8b61b999a"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","020c9a0e674e013f1ecd9925e4bace3a"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","e83934b6c014f45026d35008ee145d25"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","18a65fe62a6e9144db8c6f4d3ef3eede"],["/2022/10/17/中间件/Redis/Redis集群/index.html","e04b95a1fefd5e758cdcef8a45ffe1f6"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","147ad36f856aa2b5f2ab877412a3db59"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","e7e67e672b0a320ba8e979bfcf42cf9d"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","00da6f35f0d269d646c415060f469cd7"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","cf561232161707612a8af77e04627683"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","c79ae3140cdd901325d70750dc7d9e4d"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","1de42e144e055e61c6b8673eb056c3be"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","ae6146b5375f86d1d349f8df2b1a3591"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","529b2341959fd72189832340c3288c65"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","cb5a6d8ac987493ad0fe5c94aa28c8ca"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","7fc51f5b5c567e01d19d28e4dccc120b"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","96f481df46a2227aa19a1ab758d7dde0"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","0bd1a041beec789c8bea2e659c2fa8d2"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","3d6af5a45bccd5ba2e141aabe17e31d8"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","8f00b8d836fc491e348269f7c112b14d"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","c405ac49613e39bb3a4fd6e404fca1a6"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","0411ee56b9216a6292f3b53b3a38474c"],["/2023/03/10/DevOps/CICD/CICD/index.html","ab16be9d83c7b95733f74f11b6fc61a2"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","6cf76c24aa6bb2ec1b32a122b36cf407"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","1274be8078a58879d0b00ad8c1af0fec"],["/2023/03/13/Java/NIO/NIO/index.html","e00386736d76aff6fd23eef9245f87ec"],["/2023/03/14/中间件/Netty/Netty/index.html","90891181b4b746531c08c06274600490"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","418b001ac47afb066010b8fa25302663"],["/2023/03/17/系统设计/分布式系统认证/index.html","c25a1a63a5b6056103bdb17723350634"],["/2023/03/19/Java/JVM/JVM概述/index.html","7f41b75f2b655289d8b19f3e59cd55c2"],["/2023/03/23/Java/JVM/类的加载过程/index.html","be0e8efb3e6fb74723d1adecad9178fa"],["/2023/03/28/Java/JVM/对象的实例化/index.html","23b7f663d9f6f27068e05c27595457ff"],["/2023/04/01/Java/JVM/运行时数据区/index.html","a0271ae61d8d6665ce55f4c4055a4f31"],["/2023/04/04/Java/JVM/执行引擎/index.html","04002def002b2ecd9dc1330f86677b7b"],["/2023/04/06/Java/JVM/对象引用/index.html","74f8859a1b07f223e72a23e0fb745bc5"],["/2023/04/09/Java/JVM/垃圾回收/index.html","c3e15d3fecbceccae647e549006b514f"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","fab05e74dcb6637c8580ec0e4503edef"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","fd277b0c715abb82a270092d8eeeae23"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","04f792bd21fd46d64393f821d5ec09ec"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","885a5f35983e8d4b2d4624d177dbf403"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","e142710fefe6fb47f37a93ab9cc4de40"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","0008bb0637312038616a62b62ccc3393"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","7881fbd1bb3cd5df94f336b463ed4691"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","bfe18fbc103e08cd2fc5ee4d12469afa"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","4edd8c8cb5f51fbec85944dd5e03db3a"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","7be74e85e3c6f70bea51e5bcecd83055"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","35797dc931f8924abc35ee079dfd3190"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","a778683ddaedd878874762e6f27a5e48"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","58023cc02a295062b7f0e7b229861d9f"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","5b979328d67190c3ff5826a6de8093ca"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","00801eeffeda3dc89d2c71a6c8a51069"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","42ab7e913b503edce953da278fdc2806"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","8c4379bf607d4b57b14dcdf75ab6b4bc"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","839b8f1a0e2ef5c86eb15ff2e3411425"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","a0a5c7a547a0021e0f67b45ff708030c"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","e88479856380801dd00908e73783c398"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","0b592cabc8f67d603a5af71eed4eabdb"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","cc0ca1bd712fd6f8ba06e88e92d9e621"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","88f61cfde4ab95f2a351fdfb11c6c1f0"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","3496a4e9d8202095e26861316241fa38"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","0aafe023f66147790764fb2a2ea5996a"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","5eca864bbda6e92159dd88477c676314"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","f5c6c8127c808f460e59e1b6ecab4981"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","c4d796b9d792e4462baed6a64c9acd45"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","4ec8170d3cba962aa0b891be8fea81b5"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","d286198bfc2294e3b43386ae6cbe7c16"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","090e84a501d28dfee4a0ed56d0847129"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","e2d937881805e4007042403106b27439"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","551125131597c7af4b6a16190e9fc164"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","7947ef3330da05720d30db4cc6f258f6"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","ba4fe4954256e09b09fcbe4d6e68fdea"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","7c30be5261e5badff4a80bd093fce185"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","6e765c447dd06375e96ef4f626e97576"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","759123bd17e8c37773d9953ba695caf3"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","484a40c212ead6285b7cb21720c81c8d"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","72edb2620a27da85eb77fc4248f06b5a"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","5e17b6503b392d5ff0e9b4451dcbe248"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","41cbc49dab006db0acb34818c10efdb6"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","f79c2baf3d52c24caeaf54c533a7ed5a"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","2a4f705c2f8e66e2009792f1ee3efe3a"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","c853b510f3e22bff62585df59303688d"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","56fc9d4e8890e462830ca8f356e0aa86"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","183d401ef615ba5760b86f98ed1e976f"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","9dc443eb1e0704d9b05689326a5e9d60"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","4809f0b879e906c5da6b17208d843efc"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","61544ca333d1d55375c21d6cea9a7c9c"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","dab994f6eae6d486881228f3b52510c4"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","e1dde54bc479b2baac915236d0cdb196"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","ddcd14b126d95823f1bdb81f0cfa1fd1"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","b75421d5fad21ec281b1fe7174dee7f8"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","8d181b9552fcb9891ac10ebef27c2f0a"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","895123135fa7cd79ce1812ae7e1a9bb8"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","3684e0a4e2573b7119d9eba83abf8502"],["/2023/09/04/中间件/Redis/Redis事务/index.html","acf76f277ed3fe6ebceda1c4623ab4b8"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","b4fc62d410c6f4b68b41119ae4db8f68"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","00daef055f0cbb6b5c40eb80544456c7"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","60159243036570163d04d6df896e3c9a"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","18893537dacb77556f590fdf3501ab7c"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","1c59cf1b9d2c7b7d6fd64bea6ef64443"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","d5b131b223e3adbeda8c26be312ffc6d"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","3e9687de9c0cc0cf4c10fa1550a1111f"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","5dfe6aea349a1db2ee922e9118284109"],["/2023/09/22/Java/NIO/零拷贝/index.html","0c90d91bee6246d61dc410ea0dddbfef"],["/2023/09/24/系统设计/JWT认证/index.html","b43151662ecaf4f2b92a900b02b256f5"],["/2023/09/26/Java/NIO/Reactor模式/index.html","6f0ecd582dbf7e10b2e04729306d6c5a"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","4badb63d3b2b5c7bf73431d6bf5b9d3b"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","ffea89b435e1c9d7d5f0445766df0c71"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","a1230ed08af99e62058f3cf9917b7361"],["/2023/10/09/Java/并发编程/共享问题/index.html","ba97b9644cd2157f029972355d553883"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","450f47fa12d6046bf1e05c3aa983b3eb"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","6d982f6aad7a1c0837b2d0a7106af287"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","d6eb46008951dcf0a170da9e7f04b5fa"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","07a92b9b5fe854377daf9ea468d2db82"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","90eccf792a9e6a7b898a10579357cfe1"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","aa699e24c202f00c3449c0bde04d2823"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","99ab223c37c2013e8ff6128d23488558"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","df6f37f8f28043094357616e0a54a40e"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","c1ce0527c10523da8039624a36de5189"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","a9f68df6c2927c7d2ba5338758ce80c4"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","52375f31ba75b15cf5867a364eb14b69"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","cba484ddabb609971c85869db2e9d4cb"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","1c0c5cef2d0e47748294404b1d9317ce"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","ce6f1e0e42bd3f87184ec8e1a9fa82b0"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","e7958422f096d49dad6f13d74c37cf92"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","4525ded915f3eac14866292f66a88c1a"],["/2023/12/05/系统设计/开源协议/index.html","b5e96eca75825a16382e1404e5cd5f86"],["/2023/12/09/MockMvc/index.html","7556fa92017e49fb837d4b8bc7c3e134"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","bb48c30661dcb028f748bb95e4eb15c3"],["/2023/12/19/MySQL读写分离/index.html","bfc0146195711339014c80de485e14d1"],["/2023/12/22/MySQL分库分表/index.html","0e56d503030de1f4fab167301794a8e0"],["/2023/12/27/利用NoSQL优化数据库/index.html","5eec16777b69d21138b8bb38c19fb81c"],["/2024/01/06/缓存概述/index.html","4cdcce7196faebfbaa2829912a9c7697"],["/2024/01/11/缓存的读写策略/index.html","b8c6cdd118a63c6b5eb303e876290b51"],["/2024/01/14/CDN静态资源加速/index.html","3c158262d40df5a2044b826fa5cfbe69"],["/2024/01/18/消息队列延迟问题/index.html","db121cc7d283e75d2de5af7dd2085045"],["/2024/01/22/高并发系统分布式服务方案/index.html","33abb24a4113b32b6e2a7ffc06326a29"],["/2024/01/26/dubbo/index.html","ab95f699f48dbd52de5efb74556f7b3d"],["/2024/01/30/微服务基础/index.html","d55fa1eb1eaff821faaf9a9b992a5fc4"],["/2024/02/02/监控微服务调用/index.html","cb0fb5d26a8536e743704d6d5ab5a80b"],["/2024/02/13/微服务治理的手段/index.html","20e499cbaa86780034d347743d4b22fe"],["/2024/02/18/微服务治理的手段-二/index.html","16cfd25936bd86738820ff87fc8116b7"],["/2024/02/22/计算机基础/操作系统/epoll、poll-和-select/index.html","809f2e5287ed5b4324a2251a86cedc6d"],["/2024/02/26/Spring事务/index.html","f43145044b9d4b1bc4183bab182d78ce"],["/2024/03/01/HTTP接口安全策略/index.html","50cf090c3653fe40720eba0767ad4b24"],["/2024/03/05/HTTP优化策略/index.html","c2b4d2d1e419fb5bf5eba9b64e286401"],["/404.html","c1debe212418c22361d25a678cf1eccb"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","668b82b244c7f1a8ae73963a6e306764"],["/archives/2021/02/index.html","db2587329c19d99036b9e2708db5d605"],["/archives/2021/03/index.html","9a172e260fe580548a48a46d3613c77d"],["/archives/2021/03/page/2/index.html","e5254a6c7b237a407517c2bbb9f8b6e3"],["/archives/2021/03/page/3/index.html","cb6159e355843e4b377586f36afd2d52"],["/archives/2021/04/index.html","88578e2562705eeb506d81bb2385319b"],["/archives/2021/04/page/2/index.html","b619c0ead8d1fbca1796663a783a19e2"],["/archives/2021/05/index.html","691f76a4975c0127ef9ca5f4324e35bb"],["/archives/2021/index.html","f2161c5bd0a79c59812ad352daecc976"],["/archives/2021/page/2/index.html","70512e8109875d80d1f5beaa9452103e"],["/archives/2021/page/3/index.html","646688aa0125cdb6e1ea13c06cf3213e"],["/archives/2021/page/4/index.html","345692f9311bfed2b53b0445414621cc"],["/archives/2021/page/5/index.html","a354a07d5b1876bb25c4cfa6d6426656"],["/archives/2021/page/6/index.html","eb3c7bf200516206ad35b75a3ccd2fc1"],["/archives/2021/page/7/index.html","991cb56b393f0b46233f9b1c07e7411b"],["/archives/2022/01/index.html","8d3c88efe35640f5ab8784f964de7d9f"],["/archives/2022/04/index.html","b93a39cc4b755be7f7a9a7025120c660"],["/archives/2022/08/index.html","fef176223744ca679dc7bdec1842c400"],["/archives/2022/09/index.html","1ebed08ac6ee4efaca04ef95173f3750"],["/archives/2022/09/page/2/index.html","9505ad2ae9f37632616c2819f347b9fd"],["/archives/2022/10/index.html","f922e094bbed60372395f7b689893293"],["/archives/2022/11/index.html","00bcf29487d8c7802028cfafa38c5420"],["/archives/2022/12/index.html","3d3005726dc9cd04ec308bd0ae100003"],["/archives/2022/index.html","7cc11dea6b97be71f679fba0d42b08f2"],["/archives/2022/page/2/index.html","ebd7597f0d27a92cf6a495997efbabcc"],["/archives/2022/page/3/index.html","aac314a9f8209f8d96603652288d41a5"],["/archives/2022/page/4/index.html","4db07c449e9f6fa14e994d7977569643"],["/archives/2022/page/5/index.html","dadc314dcc9d05af157a7015a1b20c0a"],["/archives/2023/01/index.html","56d7fcdbd51cf53fe1dadc953662c856"],["/archives/2023/02/index.html","4ed4c72bffa20ce79ddec82c8cad6895"],["/archives/2023/03/index.html","451ad8a8c3b24a67c31df5c1d7b16b27"],["/archives/2023/04/index.html","847733af31b4cd684a5c7a31f9566477"],["/archives/2023/04/page/2/index.html","87b697ef7a7a3c6d5090501918ea91b1"],["/archives/2023/05/index.html","238df9afbb22f958c53d102e8508904a"],["/archives/2023/06/index.html","ef1429b37ee26899c3e8b6ce7ce6c100"],["/archives/2023/06/page/2/index.html","cbd785d2e5edd5a77551c10a411a4406"],["/archives/2023/07/index.html","8e48e0aa7746048fb4e43ce13550ec8a"],["/archives/2023/07/page/2/index.html","1c3e535e8dc4b4be2b8f83a765f6185a"],["/archives/2023/08/index.html","79d7964bd9b96b809f77b9cce26d0093"],["/archives/2023/08/page/2/index.html","64bb555fb8afb3a5585a71aaa1fb8277"],["/archives/2023/09/index.html","30f9980fde68a73dc300f98e8ecead93"],["/archives/2023/09/page/2/index.html","9e8517ba73df0c92075ca8aeae106da5"],["/archives/2023/10/index.html","b834936f065308e424cedce2334cb128"],["/archives/2023/11/index.html","22df2d0fff5ad1a20a11b61bf6d0745e"],["/archives/2023/12/index.html","e25ee7a62c598e76f7da126cb8b3a73d"],["/archives/2023/index.html","d3f92e79c5ba6a2b106bdb231987e3c0"],["/archives/2023/page/10/index.html","6e496c602af968bceea8951a283b55aa"],["/archives/2023/page/11/index.html","86c484b2598ee4a67e3e74adae56a2f8"],["/archives/2023/page/12/index.html","24a47ebbf282ee27149936f36a908489"],["/archives/2023/page/2/index.html","33d83fce18062d0b771e65468566c57f"],["/archives/2023/page/3/index.html","508c28e5ce355bdbbc613926a7ec456c"],["/archives/2023/page/4/index.html","b937c9e5973df22eb0ddaac24bfc2ec2"],["/archives/2023/page/5/index.html","fa5899a2e69130993162e49d6bcbecaf"],["/archives/2023/page/6/index.html","83a89eec231703eb282be34458ec00aa"],["/archives/2023/page/7/index.html","cac51411630e41ddb0721c10c2db7db7"],["/archives/2023/page/8/index.html","8f3bb10e7cb93a493758a26abb5813a8"],["/archives/2023/page/9/index.html","296124689d95ac98d9d794e418dc6951"],["/archives/2024/01/index.html","53b0fecdf8ded70defb53f429d53f188"],["/archives/2024/02/index.html","1de8e58e703a2700427074dca1717770"],["/archives/2024/03/index.html","a3c91c59433a6d7bf5e8443ccb51eb0f"],["/archives/2024/index.html","fc036f873db38f4db8bf23385a9098b7"],["/archives/2024/page/2/index.html","bc01211c22e7a72b631fe55731ddfc6d"],["/archives/index.html","db6a17facb89672c4a634b1b0308e1b2"],["/archives/page/10/index.html","c25853a3f9cb8e4b966a928f3b84b68b"],["/archives/page/11/index.html","f383c61f15c645e446c9ce89ec717705"],["/archives/page/12/index.html","565827e0ab1b8b5ae26343b8a03cec24"],["/archives/page/13/index.html","e65163a5910056283812f8d6abe39567"],["/archives/page/14/index.html","3c15fa6619ffc2b6facdcae2bcdc33f0"],["/archives/page/15/index.html","4448a0ad6f0fc7c8e6b964d70be69e55"],["/archives/page/16/index.html","8420fbf252dde851ef91c995a45cbcf6"],["/archives/page/17/index.html","498b204f174626d5644a5d1ed55ae466"],["/archives/page/18/index.html","0bda1a3300cd0a837537965d8f3c240e"],["/archives/page/19/index.html","8252646351247c499c7803faa492bbfc"],["/archives/page/2/index.html","61678f0490db12711ad84bdad9a874ab"],["/archives/page/20/index.html","72cf8243ac690aa8d5234ec3967aef2d"],["/archives/page/21/index.html","21ae6e58cebd753c2194a516d13f9066"],["/archives/page/22/index.html","a27eb45ea60e39ad7d20f015624a9172"],["/archives/page/23/index.html","a8db769e55c5a2cb89bda1cf87a3c217"],["/archives/page/24/index.html","54e58c763fb63833bf6809bd8ad376de"],["/archives/page/3/index.html","e3f568dc5ab1928547c1f9061ba9cb0a"],["/archives/page/4/index.html","623565251e71b96aa6e07b6a3cca2184"],["/archives/page/5/index.html","408ae17374b215d4c4250feb8e6a10d3"],["/archives/page/6/index.html","c038de5241624fb2edc5cab261ab2536"],["/archives/page/7/index.html","3f05cb6ce2b4e9cbb9bddc602a5cb06f"],["/archives/page/8/index.html","5b65c4f1aa71c2e7a3a31acb073a0606"],["/archives/page/9/index.html","6ed826e09e9daec251067956c05c803f"],["/categories/Devops/CICD/index.html","28a04a5669d81044370b4fa04a70e652"],["/categories/Devops/Linux/index.html","ef3a5768859a8be73447466f015f0e2b"],["/categories/Devops/index.html","365440872b6080c07c1536076207f98e"],["/categories/Java/JVM/index.html","dc22a5bbff7fd5f316d64af510cea8cd"],["/categories/Java/Java基础/index.html","485ab7240f42de825d66969e0d1221a8"],["/categories/Java/NIO/index.html","ffd066a2ea7746e80c00f6e996a356c2"],["/categories/Java/NIO/原生NIO/index.html","e78fb341c024e436480f94deae552203"],["/categories/Java/NIO/文件操作工具类/index.html","6ab1f33eeac5e9940a0e402c35fa6f60"],["/categories/Java/index.html","ddc090766eb8764729290400e6ff7d32"],["/categories/Java/page/2/index.html","f54e8dc53870babb16e2057478d8ae3e"],["/categories/Java/并发编程/index.html","6407b262b1a46d1a9a48ec5faf016ff9"],["/categories/Spring全家桶/Spring-Security/index.html","ea235877b5e226edf42c3874078f8764"],["/categories/Spring全家桶/Spring/index.html","ff7ea3eae0c12786b5fb7253145e76d5"],["/categories/Spring全家桶/SpringBoot/index.html","8f00329f076981796fa6cc570411dfc8"],["/categories/Spring全家桶/SpringCloud/index.html","c3db47d588d5ef904ac10207a8ac3ccf"],["/categories/Spring全家桶/SpringMVC/index.html","1254d2570c3304664a390f47b7c335ec"],["/categories/Spring全家桶/index.html","160b108eb958a79a3efcbf7a1ad4e024"],["/categories/Spring全家桶/page/2/index.html","4827858250fff13d9bd6cd55b9d54dd1"],["/categories/index.html","e26f9a272d738d3b05d07df5feb87294"],["/categories/中间件/Dubbo/index.html","e6ed019dac80522111cf6a839850f138"],["/categories/中间件/ElasticSearch/index.html","f89610fc3b5cdb49f9c777e505e7a6ad"],["/categories/中间件/Netty/index.html","20af9273181f66ebc1682b4ec72eab43"],["/categories/中间件/Redis/index.html","b21a519377bd1f73c308da1643c59e82"],["/categories/中间件/Redis/page/2/index.html","ef3c4b0f31e22687d858b9aa76c8d6d6"],["/categories/中间件/Redis/page/3/index.html","76d55ee5e043cf699577cb3f6b25ff51"],["/categories/中间件/index.html","5c24ca97cde942bebc645c2a36ab45cf"],["/categories/中间件/page/2/index.html","2c3d2dc770f4fdde3d7b3e4da906979d"],["/categories/中间件/page/3/index.html","395490ab8fc8b39f7b3685f53932254a"],["/categories/中间件/page/4/index.html","21e4e3020e598501bb9313e02e2d52e7"],["/categories/中间件/消息队列/RabbitMQ/index.html","eb818c884cdfd8db5522b2cf9f5965cc"],["/categories/中间件/消息队列/index.html","4027d15dd69bdba17a1dee05c97e8f2f"],["/categories/前端/Mock/index.html","eedee8cedd5d271eb17586354a6de0fb"],["/categories/前端/Promise/index.html","b6e36ba576d59be8594d549b08bfcfd4"],["/categories/前端/Vue/index.html","59827cc89f5a0eb0a3125a9b62813670"],["/categories/前端/index.html","17750d1e23016ab72d9e443a97d08023"],["/categories/前端/jQuery/index.html","349dc5708ce83f881983bd2dee0fa666"],["/categories/前端/page/2/index.html","6f4dc966f11650042aee26ae924e4f82"],["/categories/前端/原生基础/index.html","54a5e03a2ae69f3d718d061567dcbb9b"],["/categories/前端/异步通信/index.html","2318944b8f7b0dbba89cb2e8a113963e"],["/categories/工具使用/Git/index.html","2d69d588620b6578ee9b47df4a31d13b"],["/categories/工具使用/index.html","43cfca13ba655a9e23379c9c21f20b17"],["/categories/工具使用/markdown/index.html","e06fb4fc03d54e52ff27f3eba4648615"],["/categories/工具的使用/Docker/index.html","094a2fefef547a0f231d666c0d580dba"],["/categories/工具的使用/Nginx/index.html","7c385c3a61ddd2ec380c859fdb6998e9"],["/categories/工具的使用/Swagger/index.html","cf2b70e08b31b4be1c94c6c131df8ba1"],["/categories/工具的使用/index.html","58229d6f25ace31714e770b60fb1d1b8"],["/categories/工具的使用/博客搭建/index.html","2087ecfb4fb593dd0f95d27571a56171"],["/categories/数据库/MongoDB/index.html","5761b0dc654638608800bca92bfa5b05"],["/categories/数据库/MySQL/index.html","93605b7c853ee2c86929553afded6378"],["/categories/数据库/MySQL/page/2/index.html","9915eb6c0c1579b2512ccb67d7783a43"],["/categories/数据库/MySQL/page/3/index.html","07cbaf13f4b5f8fa1057031489a0a30b"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","7737146f24d32b3ef123adaa90d243a2"],["/categories/数据库/ORM持久层框架/index.html","d4573821fc7704d066a6f30f6dc1f324"],["/categories/数据库/index.html","07eafbd94a4f60f89b4e62b505cd0f2e"],["/categories/数据库/page/2/index.html","89c8cf0c1b4b2687a89196458758bcad"],["/categories/数据库/page/3/index.html","8ad7b98856541de9bc85ad69a8317d6e"],["/categories/系统设计/DDD领域模型/index.html","9f4980de08f98a4151b7058007bf4317"],["/categories/系统设计/index.html","37847df28a33e165689f88847880d0af"],["/categories/系统设计/page/2/index.html","f75969ce462f5319066bda306ca7cf70"],["/categories/系统设计/page/3/index.html","78f1daaadc64705629c98a6288184d24"],["/categories/系统设计/page/4/index.html","494787cfba95398396851919422e81ed"],["/categories/系统设计/page/5/index.html","a1f6d1a9332166ee59ecae1253dc78bc"],["/categories/系统设计/分布式权限认证/index.html","79315c713ebc130c3558f332060934cf"],["/categories/系统设计/分布式系统/index.html","4a8362ec345bc1e056b361882e10264d"],["/categories/系统设计/分布式系统/page/2/index.html","2b228342d128d031e04383ecbe70dec9"],["/categories/系统设计/分布式系统/page/3/index.html","6053b434d40b55591bf88840a6fb6aed"],["/categories/系统设计/微服务/index.html","ee33a665f14b34d5a75fdd6b3e96fd9e"],["/categories/系统设计/数据库优化/index.html","a1d22d4e4a5132762023d64c16a1c968"],["/categories/系统设计/设计模式/index.html","655fe714950090397d9aa2f5b1254fee"],["/categories/系统设计/设计模式/page/2/index.html","f2f8ac30c646adb697c1d9c01a225a52"],["/categories/计算机基础/index.html","cf46706324d12cda170a542c201b9a61"],["/categories/计算机基础/page/2/index.html","c9f35119606049c4e468a54991fdf46a"],["/categories/计算机基础/page/3/index.html","b3eed2a9b002b9ac17204818f2eca68c"],["/categories/计算机基础/page/4/index.html","e514112c36816e625743c02c22866fb5"],["/categories/计算机基础/page/5/index.html","1010ed21c30ac07a464a36e8564d2d96"],["/categories/计算机基础/page/6/index.html","1ef9ad92bc2df973e396d3afd561f7c6"],["/categories/计算机基础/操作系统/index.html","8501366f54eed0dfacb9d4da2243bddc"],["/categories/计算机基础/数据结构与算法/index.html","791742f548de0d4b7ad7b439f70a739f"],["/categories/计算机基础/数据结构与算法/page/2/index.html","b58bdfb7d77cd829544ef710a95f6bb0"],["/categories/计算机基础/数据结构与算法/page/3/index.html","7be55a570c88663dc332f7d54438c3b7"],["/categories/计算机基础/数据结构与算法/page/4/index.html","639a4476f5d1302ec5d8771c4d272c95"],["/categories/计算机基础/数据结构与算法/page/5/index.html","451abe3b7d259e15d40fafb62a9bfa57"],["/categories/计算机基础/计算机网络/index.html","2f6580a533e26f9fe892b86af81fe81a"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","3b23133d81eec3bf8cc3b378db06684f"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","0b1c2699bd1db474362a0a75ae52bbd1"],["/messageboard/index.html","8f52f1e85fb1b3db3ce78ab39161b4e6"],["/page/10/index.html","8c74cdef1b0fe4f1833b79c2032b5feb"],["/page/11/index.html","229a5a9055927a5fc609999fc6504c15"],["/page/12/index.html","3a18b0717e76d48704781c62a42b4953"],["/page/13/index.html","2dbe75582e0079b1f5eec18dd39ae06c"],["/page/14/index.html","61b8999a51818c246a366fe5e4767c8d"],["/page/15/index.html","7b71a2e62fc22607b81e3836771d1a27"],["/page/16/index.html","1bb3c08000f67cb6cfd4eed6c29743bb"],["/page/17/index.html","24201a4ab786eff8694dff2f98a7e94f"],["/page/18/index.html","7277945f4ef2f266f3a2bc033d939512"],["/page/19/index.html","cf959c38d4368e560bef80ea271c5d8d"],["/page/2/index.html","3a4473ce5f9062270886216f463d0c0e"],["/page/20/index.html","c598e2f915cd2fbb195b32c02adafd3f"],["/page/21/index.html","66af52449f3811aeca26f838d351a632"],["/page/22/index.html","a84647d05e041adae48dabbe21c4eb3d"],["/page/23/index.html","5468118fb8e773ce85e05ed8df1c7c10"],["/page/24/index.html","c1d3820622d4eb9679723a1ebf775ab3"],["/page/3/index.html","220f2956b82f2c61368de5571e763657"],["/page/4/index.html","fb1668fb9e6a20c80c9aabc91313eae2"],["/page/5/index.html","0bf5cdbe9cf7b5f0469d150c873f18a9"],["/page/6/index.html","8be7718be21404a47912eb4da3cced0b"],["/page/7/index.html","8b924636ab189e6581d926b5b8714218"],["/page/8/index.html","db5faa0c2c4b9d90bb2e57eeb0f60c76"],["/page/9/index.html","f61a041d4f6782459bc6eadbce363b2c"],["/sw-register.js","47347df1b7f547accbce470cf6925a91"],["/tags/Ajax/index.html","b8dbf142ff6f64cfc0eefbfae4ce15e6"],["/tags/Axios/index.html","63933f0b912095506b1515c25aa17b76"],["/tags/BASE理论/index.html","fe946a4cd41a0051739cab4749ca9317"],["/tags/CAP定理/index.html","ba53f5628fa79b12919b904c90710dfc"],["/tags/CICD/index.html","d45144a2032ba29fb75224e0b82024a0"],["/tags/DDD领域模型/index.html","4ab93ee59f749e6ab30de3c3d49ae0ab"],["/tags/Docker/index.html","cfcb11b33032ea522988c878e385de6a"],["/tags/Dubbo/index.html","36d897c04ea39a3347b4390b0322b225"],["/tags/ELK/index.html","4feede3d212ba3a86743db75f42f29ab"],["/tags/ElasticSearch/index.html","649198d4e102cf79115c28ff069fc7b1"],["/tags/Git/index.html","bc276ec765f1591f33e1dc04f49ddcdb"],["/tags/H5/index.html","572f0a701c88622d9d81f0c9568e8c53"],["/tags/HTTP优化策略/index.html","10375dcba8f16c7d4f5ba15015a3b11c"],["/tags/JVM/index.html","6381b3951c453bec549a4a8e944e8a0e"],["/tags/JVM内存模型/index.html","6522832481f414ea11e7bd81d38bfd8b"],["/tags/JVM执行引擎/index.html","73eb98e87c61e6fb8bddcccbf6c5903d"],["/tags/JavaScript/index.html","e56f0ce2ac2af8de1a44b7b37b5fd089"],["/tags/Java内存模型/index.html","36755aff349d095f2303ab853eb1bd22"],["/tags/Java进程线程/index.html","bba9bdbfd4c19bbc5fa2cb2991a1ede8"],["/tags/Kibana/index.html","950ae0db69316647f58feba1cf8f6018"],["/tags/LeetCode/index.html","7890a422b9caee95305442534669739e"],["/tags/LeetCode/page/2/index.html","388287fe98d5bffbe196c99dbb5ecfee"],["/tags/LeetCode/page/3/index.html","72d88c7634eb76c8c61412e1e99e3870"],["/tags/Linux/index.html","8b9f49a625df05b6adaa0f4a1e422f3a"],["/tags/Logstash/index.html","c64a7502605c7bb77f755b162619e7b2"],["/tags/Mock/index.html","9dc88ef9ed640c9b2372270af82ac97b"],["/tags/MockMvc/index.html","0c38f5c77aa954943662c2b927aa110a"],["/tags/MongoDB/index.html","8666bbb57f254b563edee56797c5f3a6"],["/tags/MySQL-事务/index.html","84b6b5638581af761f3af574d3d731d0"],["/tags/MySQL-数据类型/index.html","5a8e9d269606c64cfa5e99a96f396d24"],["/tags/MySQL-日志/index.html","cb32020d6ef6307dcbc3b8b1aceb3e28"],["/tags/MySQL-索引/index.html","1bd469c48a61ac4afe0efab6153ae3d9"],["/tags/MySQL-锁/index.html","d3517d9c5dabb29deeb2e81d5ee8df55"],["/tags/MySQL/index.html","f303237b3aa24b4f5d66d9d2dfb03668"],["/tags/MySQL/page/2/index.html","05442e7393156493ff0526d9a32af1ce"],["/tags/MySQL分库分表/index.html","e7293c788da25c6dd42225120e7719ea"],["/tags/MySQL读写分离/index.html","5d509c4e6099331343e3224cbfe7cbb8"],["/tags/Mybatis/index.html","ed934cdd55312ca5274527755cce1e20"],["/tags/MybatisPlus/index.html","6aae003ec098b750e65f6cb3aa5a2a8d"],["/tags/NIO/index.html","6efd67c838e37bb3b153c0a2bb7ff806"],["/tags/Netty/index.html","5592d46e345165d412c3f89623ff7e92"],["/tags/Nginx/index.html","72aa561cb0c18b5b82f618c6bbbf87e3"],["/tags/NoSQL/index.html","77af2c28fa69a9c1a543d77ff702415f"],["/tags/Promise/index.html","14dfcc423ec62028b34845008fe2d3fa"],["/tags/RabbitMQ/index.html","f75d896a47a3b9be271d5395af4c3d36"],["/tags/Redis/index.html","320a54ba45ce29b10a90878e46719de8"],["/tags/Redis/page/2/index.html","1b4bf4662ae0d89f0dd8c2b8504bbfb5"],["/tags/Redis/page/3/index.html","e93e4bd2fbf9f381eba8a3370c53d588"],["/tags/SSM/index.html","d7f66be442d59860fa1f989539964827"],["/tags/Spring-Security/index.html","161ba625a12d18db214eab0d1c87d6f2"],["/tags/Spring/index.html","753b3f6d59e950ac7445688c35b21044"],["/tags/SpringBoot/index.html","6e64c857675bdeb72a11a544a0b70a2c"],["/tags/SpringCloud/index.html","31fbcfeaff63f715078850560e1b7e76"],["/tags/SpringMVC/index.html","8898d5d44a04dc0c3eec205dbcd7f533"],["/tags/Spring事务/index.html","5d675a2b44570604a315731524c0fdf3"],["/tags/Swagger/index.html","2fa39248f8a06cd328b5f2c4dd66ee89"],["/tags/hexo/index.html","5c101b5170429432dd10779a5e449a3b"],["/tags/index.html","359158480cfec5683a5beddcadd6f95a"],["/tags/jQuery/index.html","1b87b59521ec6cf8ab325f05a3de528b"],["/tags/java/index.html","6ffdc8d34bbca666865de5aef221226d"],["/tags/markdown/index.html","a11eede2c8ef38d194d68b756b17c6a5"],["/tags/rpc框架/index.html","129d4f47c5abde3006e19e86b3cdeace"],["/tags/typora/index.html","c29ac1911332333b2eab382df23aa566"],["/tags/vue/index.html","e0adfc409f51b42412a1ad26bcbc3b50"],["/tags/享元模式/index.html","6a22ab650866f1c623148cf928472114"],["/tags/代理模式/index.html","d4ff7043ec590a25625e12489d69a1c5"],["/tags/内存管理/index.html","3154d0462fd1fd825792af44c0cc76e6"],["/tags/分布式/index.html","18ff280e75b033e610b5a1b95f78f9c7"],["/tags/分布式一致性算法/index.html","f88cf187921c945257be5708a71da9d6"],["/tags/分布式系统/index.html","b5a0be7aa5e9409b4ccf190ad3b64116"],["/tags/分布式系统/page/2/index.html","9810b1ea2be043a7520863f74340f20b"],["/tags/分布式系统/page/3/index.html","08aea20521e4b7781b6a535dafb6d2c8"],["/tags/前端/index.html","7630ca2f854ca435b427dbee782575c7"],["/tags/前端/page/2/index.html","e5224e7b6d0a887b87613bff1ed3b181"],["/tags/动态通知/index.html","1398b717583ea06633561ee668b5ad1d"],["/tags/博客/index.html","dc98ab06e93adf7e3c81fa36be3ac124"],["/tags/后端/index.html","fb6d2fdcad210967d075302305c2b6f5"],["/tags/外观模式/index.html","dcf9fb2c4a0be0a82b23b22c47fe42d3"],["/tags/多级缓存架构/index.html","73d14139ed6c97abb2d0a719ab3f1e7b"],["/tags/多线程设计模式/index.html","dd909afc85931e44109da4c9e372c2d7"],["/tags/多路复用/index.html","16a215a1f2ac59c6b548e796f83098d3"],["/tags/容器技术/index.html","f0e0949df7a497effd242d1a0009a44c"],["/tags/工厂方法/index.html","383b69fa624f40ee0a58d364938459aa"],["/tags/开源协议/index.html","599f6d9032a0d8efb65546217b8985d4"],["/tags/异构同步/index.html","2ed283708915576440c8501813a25f84"],["/tags/微服务/index.html","f206a82b1bcc06cb4e9a5f76987ed051"],["/tags/微服务基础/index.html","88d03c16d27ea23e913f9a7bc0850bb5"],["/tags/抽象工厂/index.html","a14c801dffc7fb45d6d594792d625f69"],["/tags/持续集成持续部署/index.html","7a2129b85bd9efce36d0b68195c91170"],["/tags/接口安全策略/index.html","67b4515af70d3dc8be670169c381a32a"],["/tags/接口幂等性/index.html","e1c297bee6c62a8a4f0a29738764e2e9"],["/tags/搜索引擎/index.html","8d8b13669017635cdbc6117b6077d200"],["/tags/操作系统/index.html","54fad960f5c5beab22461dcc0f8abe4b"],["/tags/数据库/index.html","fd290be4408b8df310dfd9b41d4b1738"],["/tags/数据库/page/2/index.html","09ff2aff5345ecfc3f4bb76a42e272a9"],["/tags/数据库/page/3/index.html","3dbc56e60ad51683b3d824dcbe01d1fd"],["/tags/数据结构与算法/index.html","3ac8d7aef1b568b82c9ed958459c4563"],["/tags/数据结构与算法/page/2/index.html","873cd134739f37e6537dd9f2e1668d84"],["/tags/文件操作/index.html","06acc3713ad84fd4384f76a7a8e0b8ce"],["/tags/日志/index.html","b33527321c03345456e717df3e4aa1ef"],["/tags/服务器/index.html","9b41d6a3271bbc1cb5f376b58eb18924"],["/tags/服务治理/index.html","11c7362c2e02d3d0fe164c42f1d08505"],["/tags/权限认证/index.html","2bdfce5d27d1ed56f14631c706529d48"],["/tags/架构分层/index.html","38ff690461f57a5da18c98e05c8aa575"],["/tags/桥接模式/index.html","0e9303039986352966238773eb4d7fb8"],["/tags/模板方法模式/index.html","63009d0e1a3ab5a84b97bb7326de846b"],["/tags/死锁/index.html","6df1e9dd0ac41fd9fae2ab9fa3d7bf9e"],["/tags/池化技术/index.html","bb776bcedf0b6fa55208fe85602684ce"],["/tags/消息队列/index.html","49b0734aab1d726cc760f322cf40b4f1"],["/tags/版本控制/index.html","0617fbcfc9881860f284b31a3f41cc6c"],["/tags/监控微服务调用/index.html","e988ad9065f2331d5c74d55134d623af"],["/tags/策略模式/index.html","0e2cf4791c6cf3f86a485d3a6d563147"],["/tags/简单工厂/index.html","2676b80cfc1f91c381b2b66d33537dba"],["/tags/算法/index.html","0920927a088e9cc338cac38d50e982d7"],["/tags/线程活跃性问题/index.html","4155738b91e185bfa43109786771bf1c"],["/tags/组件化/index.html","2c4d87c6dd04796b43d044e19096308b"],["/tags/经典限流算法/index.html","070a1bed479302d86504876c0fc0657f"],["/tags/缓存/index.html","2ba144036326bf5624c6fb9ae5edc44e"],["/tags/缓存/page/2/index.html","f20bca848547506a851ac7740ab67f8a"],["/tags/缓存/page/3/index.html","7e8ed31ae7767bf244f7c0cba5c938ad"],["/tags/观察者模式/index.html","2e77db24be8ee81b09cd95d7b1ebc306"],["/tags/计算机网络/index.html","56a953bbe0f512fdd7295ab65ff9e853"],["/tags/设计模式/index.html","f261d3f2ca9af00a1c9fab6252e3200b"],["/tags/设计模式/page/2/index.html","526ce9dfd6f0acda4d45937dacce7e13"],["/tags/设计目标/index.html","f7edad9e52c55c661e798ce31a4aadcd"],["/tags/资源共享问题/index.html","a69bb306774b719f192f0ac6014c13ee"],["/tags/进程管理/index.html","fc4cf86cd9d6d2f379e6d004e898389f"],["/tags/适配器模式/index.html","bfd7d316444a001d942f1d910665f0ab"],["/tags/通用设计方法/index.html","a862f256479442992a3923ff5fdc2e2a"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
