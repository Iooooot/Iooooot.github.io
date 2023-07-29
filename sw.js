/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","295dae1f3e763055dca1656a5ee47d56"],["/2021/02/22/工具的使用/博客的搭建/index.html","783d5463778b285551a584d2972708dd"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","1c0330f7aa7b858df3bdde86f38905c2"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","98e447739b15fd4d93a6fe8475b399b2"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","b0579f0d10aef62fff91eff0d9d72ff3"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","c47d072be3456d384416ec14a4b3bb03"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","1d250eaf1b6aee6aaa0883990b4e620e"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","c5469fb386b5ce85b41c9da62bbad216"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","e44edeffce920b5a09be27b514256bb5"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","17e2e993f9a1fd5eb38d77588daab1a4"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","e790b265548944f60e8035882152041b"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","861843a8ec2ee72c7918e02ce782beeb"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","3e3846a78cc9e9bbee1d32d4dd225148"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","c4d4ee9577dedd3f090e9dda4546c700"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","14833edaef33cafb852b9ef4a10130f5"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","bdbe18eb7845d984dcc7b3689f888851"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","0e40702ca399d9739aaf98d4d239729f"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","c3d14ce49795883861e356cdb6437ef1"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","d3d83945f00fb5b0ff7bfabf4f864006"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","0e2ae6280dac01e612b3a80164906293"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","f5ab7217273c8dd19a5b181db86a40c3"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","17923a50e28cd009ad6cc295da2d0717"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","df0a7572f7ce206c4aeb77849b8e11dc"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","67b767d043797971861c52df44272820"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","09e558dae9f14fcb2227b0d48b64a7a1"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","50ccf7614f96754417bb80fdc1e999cf"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","2dd714d0bafbcb523966eade93182aed"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","e7da9c1ab2d731feb9ac75db95ec5d64"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","e326361ec6198525a35d20853b9d005b"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","aac6c3ef187f68a8504711999320474c"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","6716ad69b835e9074674651ef38177ef"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","514a805d53b0952048d338fcf3eaaaea"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","98fe3433da1bff611b7eac44895f9ae9"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","22a47f0f2ae782ebcc973c3fb3845963"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","32451a4d5765ee6ccb070824f1cc97ce"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","38dfc3f3b3b2f37e8b677c4de595c982"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","656c20251171f3c7cc9d755f61fd34da"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","cae64fdd0c655dbb93e54b7ec13973f6"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","977c5883483a1d131a5684a53c9065b5"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","2a93fdf84baedcf1708b4d93ebb0874c"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","4c71dc50f9e1604e8af178f54079d83f"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","a4f503187916af03f6215e046972c0a2"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","472358b4e96ed5fd645af6634a6326b7"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","d74e1fc38ace073c046e3e1c8d303af9"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","e8a012cfe787bf5b6c05c04379910400"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","f51ecb8764bf98c28587256473de822a"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","076bf7b4aa6b64ef015798d8d5d65950"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","2eb2c5d2cb28ec2f521c1d0436a4dfca"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","94e0ba669e05a6afe21385ffe58de987"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","d3970a35d8a60c6fdeecfd01ba1ec577"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","a9004a5c49396e7c4d08adf4aead9857"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","761e052ded6e5c024a2c30fa3b726a6e"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","88b5231094418754d3ddfaa6b7d77027"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","dae144582cde4be55ac05db11f8074ea"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","8d20f4450967ab078587bb7d6de9d4af"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","b3aba4b75f0533a52f8ea7ad965eda30"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","165d736816c42939e25f553286991126"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","982b29ee9797c74e4dc105bdf961c21f"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","8d39fadf768bf094cf2b6975a7c1ae7e"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","e95e2339b6799b6be2ef694dd79473c1"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","e9babbe795c3e9b06a889ccf68214595"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","02656befabb0063580d3b3d1e34f63b6"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","c5b3269f49d7a9127f3686400e956da7"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","f8bc225bef61b8d56962c3baacae954b"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","dac3041ad2bdbec89d9ec3edaf105358"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","a1b289c1ddb34df95d9f4a886fe77b9a"],["/2022/08/17/前端/jQuery/index.html","e70567a75cfc384ea236cc5b2bf99209"],["/2022/08/19/前端/JavaScript/index.html","b474e88f6e3cb025cf5f9d4068f1a35e"],["/2022/08/22/前端/Ajax/index.html","b6cf298ae8f5c99ccb825a4a286d033b"],["/2022/08/23/前端/Promise/index.html","86126159401e637fbde6a055aa9c6bad"],["/2022/08/24/前端/Axios/index.html","1004ef029de37db3ec476e7fd444ea75"],["/2022/08/25/前端/H5本地存储/index.html","264c72dff239d41711ab497ab54792d1"],["/2022/08/26/前端/mock/index.html","5a5546b081723ea4b6f99abf41c26c91"],["/2022/08/31/前端/vue/VueJs/index.html","e2dff0ecb91cd3110e07007f01804577"],["/2022/09/01/前端/vue/vue组件化/index.html","d12ec730e824a009cd8a01b1bb1e10ad"],["/2022/09/04/前端/vue/VueCLI/index.html","abe83c2bcfbbf888d476417b8042ebdd"],["/2022/09/07/前端/vue/vue实现动画/index.html","e1ee4b49c8b9b0ffa4a5e1d78547880c"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","668e6a04cd91e556f732edf69ea76c32"],["/2022/09/10/前端/vue/Vue异步请求/index.html","0229f97cf450eb48f68f2f118f68a640"],["/2022/09/11/前端/vue/vue-Router/index.html","881118d553440ce7bbc6aa3ee147fa4a"],["/2022/09/13/前端/vue/Vuex/index.html","d5cfc77de639cc8fce2de580b185b7e4"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","9b6ef4008cdd314606efd9009b6ff773"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","a4a51862904e2daf8c61156104b0a372"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","7fca1eb39302936c122a35568de68983"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","aa2ecf27bc00e355594adeaa4c72fd07"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","ad585ef5c3610dac7f90e8c968ebb67b"],["/2022/09/28/DevOps/Linux/Linux/index.html","30ae27d62f227d27af439ef1ca065728"],["/2022/10/02/中间件/Redis/redis基础/index.html","6e116e7977923e8dc9db2ddf712eac89"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","c38f6798d26769ab545a1ff0ffc8d0f0"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","e560fbb0cf4b93a94807ff5bf55333bb"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","d485f834e3d9d2c51bb6added54af446"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","25feb1d1a865063d822414398b6c5775"],["/2022/10/17/中间件/Redis/Redis集群/index.html","40747256c4a0a1ea6c4027fe6291e2ba"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","8c755213870b66e8147aebdba47705e5"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","07f251ac75862ae3c5f097ee74f60ce2"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","29b1425ff52ed719ac76e2b9656ed945"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","84b259e3bdfc49a677e2cbe53b2fd440"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","d238307980b0be165ff9afbf79c75a89"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","494b0789ae2f424f514f431b0e3ce64e"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","194a5472cc56f599adfdf30abaf9cd38"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","78d500dcf6efae3d65a1f71418c52c53"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","a6a3edb3b1febe5518870242dd129d76"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","71d7e2a1d88770ef7674bd2fc4b81d8d"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","3057ae5a16df99b9bbb2b110c6816207"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","e1fce447a008ed0250dbc890b361c1e9"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","cd877897d7a120ba9a00669489be39ce"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","b810b3e715381f11785e2e1b01c3a535"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","fde3e1e4691855575df796e10c191393"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","8e6ac48c7830653dd087e56ebf4b6664"],["/2023/03/10/DevOps/CICD/CICD/index.html","c74142ca4b81ba9befad9599354fb5da"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","d17c9a2ca5c9179d02b4f9f50bd26cd3"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","1add21a712ea689ec983f8259f5b3602"],["/2023/03/13/Java/NIO/NIO/index.html","e2650861e8b5f10ba0880805f4d02141"],["/2023/03/14/Java/NIO/Netty/index.html","b193686b74f6c793e9f7d9d9c2592470"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","d85b46f3fd5f94824e01b29953260208"],["/2023/03/17/系统设计/分布式系统认证/index.html","6ac48668976d48d9f2576becc8b729d6"],["/2023/03/19/Java/JVM/JVM概述/index.html","87ae576d15ee486d0c742504ac7d373d"],["/2023/03/23/Java/JVM/类的加载过程/index.html","5f85c80db296d566b9a414dbed008d24"],["/2023/03/28/Java/JVM/对象的实例化/index.html","11fd1c40b35b80774fba5e84a1980df8"],["/2023/04/01/Java/JVM/运行时数据区/index.html","d280add4b436574b49894fcc6c50b71e"],["/2023/04/04/Java/JVM/执行引擎/index.html","990854cc61128d6b9d70bda309676624"],["/2023/04/06/Java/JVM/对象引用/index.html","c2423eb4f1eb6f1075647425d4dcad79"],["/2023/04/09/Java/JVM/垃圾回收/index.html","67002095f4c309bcfd10672ec2313f33"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","60b6ceeef6513bf414b2a2f1e5cdc729"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","5bbfd55e4acfe9c83f6ee3b29ad61feb"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","ecd1e18c137dc4e8993de47b26922b5a"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","bb7f31e244addf8d7d956fc2dfffe942"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","3eb9610a00dcbb3736c7f5417b452288"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","eefa9d442ce439ba4b4b04d6c82815cf"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","904c582f6d6e62ac59c4547339873f9f"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","ee73014c3f2afb819e92a346620c4e7c"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","84c871b43f60533bd7c167a766372211"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","f1a4c1eedb8b3c79ecd35bb56c9b687c"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","f5a08d67202d56263b7ab0047c1ff8ba"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","5b01de80afdf8504bbd2031a5e78ebe1"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","15a8af544140122552df6c45e3b72c65"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","23cea38ec4df7bcfa604d65429f9ce7e"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","a12a81f664c21c32a540eaa1244b5ca8"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","01ad09bf512b04c2ddbc4fdd77ad28a3"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","72beb4870095c85f4c04fb3333bcce83"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","3d02e88c9d03cf5827c770eabed76f7f"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","123ab352d363afe9c3587fa7919e188f"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","d994ecd2ad90739e885b3e0b9dbec239"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","25cbd3f03010de16f551bfea65cd9eda"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","bc0bd11ae6f125afc96149ec0a42fa73"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","719184c98a64ff693e44eaef78cdbc55"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","f77a0a1fb4f3076e0ae37e0e55c52c37"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","413c38fffc238b94701a158410244439"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","5a4f93fd972cdbd558eb53d14efbc6ed"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","d841aa807e0f2ded4fe3587bc38852e0"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","d2f94a1516cdebf308cd37331dd04f24"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","3764e4593516b3f5070abbae120bfb36"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","d3db37672b2e73a95bdadbb2ad2e83ac"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","6f347981b180ca8f0f2b3bb5811323b8"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","b43f32b536c31f417209f733fe37f5b2"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","daaddb4c1e2b0b5f70b25812f6476d7f"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","247a05b1e191e8979d932727c9bd6d75"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","d9fc813940b73c88f98e54548763966b"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","7a73654994edf1daaf19e1bea50684ca"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","d11c45b9c7fa71baf7fd4c5de9a84f2e"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","53d511e32ed9c13d0ecef03089b853e3"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","dd6e340487206aa8449dd6b1bb922c32"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","4dcbb515153638a9c940924648b89c88"],["/2023/07/25/MySQL自增主键/index.html","491ff9925b13d78a6ffd47afce764f9a"],["/2023/07/27/MySQL快速的复制一张表/index.html","fea51a1092c60247e1919730ccf48160"],["/2023/07/29/MySQL用户权限/index.html","b34ad710784bf3416c7a74a79dbb7e33"],["/404.html","2fbc9d4e40ce802e705baa9cfefbca2f"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","8534cb662943a67edc582cce6b378a23"],["/archives/2021/02/index.html","b8d4f3533f69cac6de06cad2ffc0cb00"],["/archives/2021/03/index.html","4ed0e7113e3da6e690492a07b911a5e7"],["/archives/2021/03/page/2/index.html","226383cef47198ad3eb3b3c41b3bd1d8"],["/archives/2021/03/page/3/index.html","be08cbe8b9ec6d4e7dd218dae6ac1916"],["/archives/2021/04/index.html","c1fdd386d3d47272fe446a25aff87731"],["/archives/2021/04/page/2/index.html","a44f6b52ec9aab5778f096173315c7ae"],["/archives/2021/05/index.html","2d2184d1edd0e5b94c1e6909acc9c13d"],["/archives/2021/index.html","55c6ae3713373abb92318c19aeae8e41"],["/archives/2021/page/2/index.html","9d85ff78d624661314865749a49a6a0c"],["/archives/2021/page/3/index.html","c95880fdaa91e7292dbd4b9169aad9ec"],["/archives/2021/page/4/index.html","5ecbe368cc5d44284a2284d9268473dd"],["/archives/2021/page/5/index.html","f6f7da7f9c3bb89e6cec34c2d4ef3260"],["/archives/2021/page/6/index.html","4d20834f3b3c57d7b9bb2920f3f7890a"],["/archives/2021/page/7/index.html","7fa49e85614acba8ed77b7c2471c0dc6"],["/archives/2022/01/index.html","da52be60681cf4791ac903b2bb6e0166"],["/archives/2022/04/index.html","3d1f8be2b639959bfcef098de28c015e"],["/archives/2022/08/index.html","4cb8d5e31fd58119adafff96040a50e7"],["/archives/2022/09/index.html","dd71ca7479a3f6582b195fbfccf2e225"],["/archives/2022/09/page/2/index.html","0b5ed6d9eda5b22fbf689f1c49b51d08"],["/archives/2022/10/index.html","35039abfd98c21ec96234c7efba2e860"],["/archives/2022/11/index.html","ba36920f74a429f3156f857d3e489411"],["/archives/2022/12/index.html","1bf1701ecf5c6c78fca4c60896e38510"],["/archives/2022/index.html","18257d6e658fc6cfb7ba812c9d92e2fd"],["/archives/2022/page/2/index.html","335ddb6355d5d968c11a45dd555c34d7"],["/archives/2022/page/3/index.html","4efdb6a39f5207ba4416fed990039319"],["/archives/2022/page/4/index.html","89b729cf279bba3947d5d960734178e4"],["/archives/2022/page/5/index.html","f3afc6edc017f16d38f51e182a0a811c"],["/archives/2023/01/index.html","2ea938632822cabc6bdde3bb5effa411"],["/archives/2023/02/index.html","38c868bf14232090b1b869cab0feb624"],["/archives/2023/03/index.html","43cb57197926e20462a458c94367fd88"],["/archives/2023/04/index.html","7d788456d6d1124bd40335fe1cb0f13b"],["/archives/2023/04/page/2/index.html","da59c76645384d5bd836eaad1684d0ac"],["/archives/2023/05/index.html","c2f29e86287afc369b6acd81aa182ee8"],["/archives/2023/06/index.html","657edcf3eb1cc344c3e92206db3be72a"],["/archives/2023/06/page/2/index.html","bbc294e0e2db80172a549f963dd0ee66"],["/archives/2023/07/index.html","cd5d3eec09a8b9ea7988f7dc60107a52"],["/archives/2023/07/page/2/index.html","c3b83f8b312ce52838e8d970aaf7bddc"],["/archives/2023/index.html","0771230b69b06fd5cf645301c4d767b9"],["/archives/2023/page/2/index.html","efc08a15a49d0f7ca7b7d4a5ec40105c"],["/archives/2023/page/3/index.html","c786e528d1b115150c7a7f8ffe8d034d"],["/archives/2023/page/4/index.html","1662b7569afe78a207df88df968f6515"],["/archives/2023/page/5/index.html","af00677ce386c71d4f2a57f08ec41b87"],["/archives/2023/page/6/index.html","5f80db16d29ec15af979d180b0f12cf6"],["/archives/index.html","bcef09fac92cebfaab08a11611abf7e6"],["/archives/page/10/index.html","318a5bc5bc14aba047669c7bcf716d7c"],["/archives/page/11/index.html","52185681c8e2cee45fe4c194a12c749c"],["/archives/page/12/index.html","0db750834b178cb96e0d5170392916c3"],["/archives/page/13/index.html","67fa67d0d5571be402bfdb0a2ed9e0e2"],["/archives/page/14/index.html","654c5937d8eaa51d03477007f323a9dc"],["/archives/page/15/index.html","8b6211d4137951294af5223aa6beb7ec"],["/archives/page/16/index.html","f96497a0faf516c1502f1969d84a9f5b"],["/archives/page/17/index.html","6c64936e87c4d80a0bb0c25f99e466b9"],["/archives/page/2/index.html","06083759184c9ec689c9d5d27a9b764e"],["/archives/page/3/index.html","11587cff458aabdc8ab124a6fdd10a4f"],["/archives/page/4/index.html","e45325994f053dbee68c1d0a7a8a9360"],["/archives/page/5/index.html","293b67ba48232e398a7f4ae7e819908a"],["/archives/page/6/index.html","7480ba235c59c2d95daadca6511baafe"],["/archives/page/7/index.html","0f60e80aa5206e4c20055805727d3897"],["/archives/page/8/index.html","2d0a6649cd1c76e81d2259c7f86acba4"],["/archives/page/9/index.html","0704b315c677052089793d95800e31d0"],["/categories/Devops/CICD/index.html","74a18a6c57c4aabb3bec5889a5befa7a"],["/categories/Devops/Linux/index.html","dc5287c75fae141e6fd293be252987b7"],["/categories/Devops/index.html","e3f9bd596bb816833612e13c7552cf76"],["/categories/Java/JVM/index.html","5dd44b02d3fc7b50a5d40c0bdc3fe25f"],["/categories/Java/NIO/Netty/index.html","daf87c870b56a60dbbbb590f3dab585f"],["/categories/Java/NIO/index.html","054c91bafc3c3fbca2f2eb7f9e453c28"],["/categories/Java/NIO/原生NIO/index.html","3fd1ce4c108206413044fb920a72276c"],["/categories/Java/NIO/文件操作工具类/index.html","1189815237e9ebbd1a6159b5b9ace424"],["/categories/Java/index.html","7116b2cec2e565d03d4212541b4dd8a2"],["/categories/Java/page/2/index.html","578a26f9e574d0ff969511824d74fc80"],["/categories/Java/学习路线/index.html","d0bccc6a38c80c6a801d15bc7d7c8340"],["/categories/Spring全家桶/Spring-Security/index.html","95054bfd55bffe07cb7105164c80a8df"],["/categories/Spring全家桶/Spring/index.html","ffc4b51b32f589f300aa1ac1a0cf3e3e"],["/categories/Spring全家桶/SpringBoot/index.html","960689dd079f40a4a9f7dd8b2328c1c3"],["/categories/Spring全家桶/SpringCloud/index.html","195968178040d9d33590823d9153fd6c"],["/categories/Spring全家桶/SpringMVC/index.html","45d3092a78371f0d44bbac35621706aa"],["/categories/Spring全家桶/index.html","7b0cfd0d532910a5452b5985da967ab5"],["/categories/Spring全家桶/page/2/index.html","059a1b02a6bb8c9315599545398e27ab"],["/categories/index.html","63a4a6af534be1fefbfb3534d4793f6e"],["/categories/中间件/ElasticSearch/index.html","92f363673c557151758bbb0a297950fb"],["/categories/中间件/Redis/index.html","b294f43d650c978bff6a40f17a34d710"],["/categories/中间件/index.html","ef0c9ea3f05f40f255a97f57a8725ca7"],["/categories/中间件/page/2/index.html","dde38b77c84f8b12620ca1d98ae886dd"],["/categories/中间件/消息队列/RabbitMQ/index.html","300866aabd1543eade7cf36d93bf1fc2"],["/categories/中间件/消息队列/index.html","50f9127d857f4722bdac411797899eb4"],["/categories/前端/Mock/index.html","6f53735e2e1bbdb9802fd513c03088e1"],["/categories/前端/Promise/index.html","c59840692f10528e70437b5ace0f52d7"],["/categories/前端/Vue/index.html","53825e13c69b7c28d698178d582c8444"],["/categories/前端/index.html","3446fbb1313add5db39590e6d15f5dfc"],["/categories/前端/jQuery/index.html","7dd07f4e3fccdd492cd7e4d98ad8697c"],["/categories/前端/page/2/index.html","753da02249d3f703f436704f711f55a4"],["/categories/前端/原生基础/index.html","6a545e0ce525f993acc57cae823d27ea"],["/categories/前端/异步通信/index.html","b1cb5590624a63e9b1c87e27b2b39e79"],["/categories/工具使用/Git/index.html","13cfaf47ac6d3dae043757600043fdb1"],["/categories/工具使用/index.html","8eeed7fed8f19c571bbbcc53cf4a87d4"],["/categories/工具使用/markdown/index.html","97e47a1f321dd939b0cc86183f2dbc10"],["/categories/工具的使用/Docker/index.html","8c67b7da5d5d1d00feb3acfa6cd2c0c9"],["/categories/工具的使用/Nginx/index.html","ba4322c415a9e4349c5332976dc9b88d"],["/categories/工具的使用/Swagger/index.html","9592959ff523550db6eac0f13877142d"],["/categories/工具的使用/index.html","107ab92c8db0114396de8a931bf3d463"],["/categories/工具的使用/博客搭建/index.html","6d9493050f99967be79e8fd9fef45e01"],["/categories/数据库/MongoDB/index.html","bda8b655ece095b9b285c039dfbb0eba"],["/categories/数据库/MySQL/index.html","cf22b66d2b043d805792ba69970cb7cc"],["/categories/数据库/MySQL/page/2/index.html","984f67c71954ef4aed4d8da384238572"],["/categories/数据库/MySQL/page/3/index.html","878e3a7f78dbfddf34e70aa87fd17d83"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","8f8e185d716367ff21ec9cbc9b24893b"],["/categories/数据库/ORM持久层框架/index.html","0b1d5feccee555b0aa29d0655c7fac0c"],["/categories/数据库/index.html","08013a82bf2d6a25dd99e44efb7be6fc"],["/categories/数据库/page/2/index.html","6cccadcbd76106b9c485ccf08d58e0c8"],["/categories/数据库/page/3/index.html","4aeefc35b447d5a87a8d7bccb899c4ae"],["/categories/系统设计/index.html","dc1f4eeeff836c533c8f1253be7a8396"],["/categories/系统设计/page/2/index.html","9785404937922200aaf049cdffffb80b"],["/categories/系统设计/分布式权限认证/index.html","f4b4ee1c7833df0d08e57e267337862a"],["/categories/系统设计/设计模式/index.html","f0e9012f3ee30f0ddbdc6cd036df7fb4"],["/categories/系统设计/设计模式/page/2/index.html","dbd817cdcaafc99b2f10bb59b79f5691"],["/categories/计算机基础/index.html","d105446d2ad95f96874f3bb7877fe05f"],["/categories/计算机基础/page/2/index.html","20ab3bd41aee27d9bda6f0a8c13539d4"],["/categories/计算机基础/page/3/index.html","e037d3f3b5ef82ef4f80d429c84795a4"],["/categories/计算机基础/page/4/index.html","ce8f4452f185e4b016cb3faad2da71c3"],["/categories/计算机基础/page/5/index.html","972c9a6596978e3dc99042b42310dbde"],["/categories/计算机基础/page/6/index.html","6d67e4f22f89d1c6acfcc3e76a29fdfc"],["/categories/计算机基础/操作系统/index.html","e10535dfb032025480c02a4312016c71"],["/categories/计算机基础/数据结构与算法/index.html","567f5a0ebab3a229a36d0e297bf55bc1"],["/categories/计算机基础/数据结构与算法/page/2/index.html","25e0a5514dd573a8ad4e130b3df7ee82"],["/categories/计算机基础/数据结构与算法/page/3/index.html","480f236565fcf5492d1cd36a7d21154b"],["/categories/计算机基础/数据结构与算法/page/4/index.html","6fd23b99009eb62971be5eb54095eec5"],["/categories/计算机基础/数据结构与算法/page/5/index.html","7b7a2fa98155776720c1b2e18daf820c"],["/categories/计算机基础/计算机网络/index.html","07098d7e13f1fa9699f770d2cf6a604a"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","d3fe307115222293574f4272c0438059"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","d123fdbc0e2dec0783270031599a0124"],["/messageboard/index.html","d50791fbcbeb172f0226bddc30b78e5b"],["/page/10/index.html","30fe600b6a2eef51cc53125b180f38b1"],["/page/11/index.html","e8f6326b00adf879d29e372b63728a0b"],["/page/12/index.html","0e35c633a14a415f14afe0f776fb4ea6"],["/page/13/index.html","88712e60d6ba7ed8376007d822103dcc"],["/page/14/index.html","87068b608ec8c07b7c2be6c167dd0a4e"],["/page/15/index.html","ac98ed7b752eb8bbd2fa4b3c5b608e92"],["/page/16/index.html","a61b5c292d5d2fbbcd286abe0e1080d2"],["/page/17/index.html","2bd3aa2d7f6b83359c4141232fb1d516"],["/page/2/index.html","852ea707d185d5dfe49e8245daac9813"],["/page/3/index.html","4d4e80ac5d40e6f4ebc44275b0be2b4f"],["/page/4/index.html","39f7eb19fe87d748439cb0d32c6b026a"],["/page/5/index.html","857691db4cebf0d8983fee81c1d1efac"],["/page/6/index.html","14629cd37aa83b4329f58a46197b581c"],["/page/7/index.html","4a283f48f1c96cf406c1bbe8e8b03482"],["/page/8/index.html","1633df5eb692b67c2d39e8ad3a4c90a7"],["/page/9/index.html","b58042da58610be560cd9b68b4c8e1e5"],["/sw-register.js","3d05a1184c21e4fdcfc237cd897885ba"],["/tags/Ajax/index.html","1c397765c1bc93841348ef4ad266f0d1"],["/tags/Axios/index.html","8dd7fac59110e50ab102caec85c616d6"],["/tags/CICD/index.html","28b890f776ab42d3a4b724127e4a305c"],["/tags/Docker/index.html","031fa471c32f63dbb99bb84a09247bf0"],["/tags/ELK/index.html","3ec98f76e966e2e473855cbb7aab57dd"],["/tags/ElasticSearch/index.html","4b3692717366ad735ce12d27d0afc26c"],["/tags/Git/index.html","52a61d12e1b3cd17fe5eae00eabae7b2"],["/tags/H5/index.html","e05f99e7e06ed4174d458716831d2991"],["/tags/JVM/index.html","0d0547ad24e85e1aa053ea649d6a5a3e"],["/tags/JVM内存模型/index.html","a64f94a66200f92aa565969d04afbb9d"],["/tags/JVM执行引擎/index.html","58d45d869c7a97e6aa7a4083cc4da383"],["/tags/JavaScript/index.html","5941aee99790de24364ee2d7e3ae210e"],["/tags/Kibana/index.html","b7b5f5a311694bea1d84164464944776"],["/tags/LeetCode/index.html","f61ff241e08bf83b3d4f83cf69deb050"],["/tags/LeetCode/page/2/index.html","dbb8e636163931183f6f26e3cdc03dd0"],["/tags/LeetCode/page/3/index.html","ebd5858f212f56077934d71a297367d4"],["/tags/Linux/index.html","abb488e3016e26ca50b4fb7fff3fce84"],["/tags/Logstash/index.html","2f8ea4ecb96aa441b42f933b63ab4796"],["/tags/Mock/index.html","437c8bd019a06579aacc21f1fce22a06"],["/tags/MongoDB/index.html","174c4ad2022320e61e295138ccdb6624"],["/tags/MySQL-事务/index.html","95cd1a28f3840fe9d24178e127c3717e"],["/tags/MySQL-数据类型/index.html","088ede8501f557dadeba1a46d86bcf3f"],["/tags/MySQL-日志/index.html","2a2425a30f67044fb6c2b69080cc435d"],["/tags/MySQL-索引/index.html","46482fa2804be7e3ba89d7430d7f6c86"],["/tags/MySQL-锁/index.html","ab10f9af52e88dd859d8ba52693b9c77"],["/tags/MySQL/index.html","d5da43e9f91e6c3e98e351ec8f12628b"],["/tags/MySQL/page/2/index.html","1090a54a25e3aef9f9836f7573442a18"],["/tags/Mybatis/index.html","905cc0f830e05a30d08924a7d205b5e6"],["/tags/MybatisPlus/index.html","13d21a90836876ece17180a919b7c896"],["/tags/NIO/index.html","b244b36d9845baa2860a72ee5363df9b"],["/tags/Netty/index.html","b7b2d8c4dabb78d7b82529096896162b"],["/tags/Nginx/index.html","4454f24ec7383065d4c90b6e27d42b1e"],["/tags/Promise/index.html","dd62e124a4135683e07d42e8fd1d8292"],["/tags/RabbitMQ/index.html","866196372f0caa3fc4f254082a806d24"],["/tags/Redis/index.html","8dbf9e45eb8c65e01a837b009a3ca453"],["/tags/SSM/index.html","604d00e19ad027dbeb3b62dae1ea346b"],["/tags/Spring-Security/index.html","8570add4965aa70a7c8d2c277a85c2d7"],["/tags/Spring/index.html","a5b6d4989f4391fe27bb0e06bea094f1"],["/tags/SpringBoot/index.html","846998d23ae19bda2a25e6659942cf2e"],["/tags/SpringCloud/index.html","ef73fa1015abe4314de2f8c07c8e1098"],["/tags/SpringMVC/index.html","edd34426433fc3251fc4d404455667b5"],["/tags/Swagger/index.html","9d0c4ead593797419b8db32a85d664f5"],["/tags/hexo/index.html","f0861d52f0fff971e685f07afeaa415b"],["/tags/index.html","27ffd6b2dcb9f1232f6b430020bef869"],["/tags/jQuery/index.html","f697b7f077e6ba4e5349895c329b76dd"],["/tags/java/index.html","015c0bee7ae2f111d5ffd1aaa8f791d0"],["/tags/markdown/index.html","65748016e63eb6e742d2c1e40f10c6d3"],["/tags/noSQL/index.html","cfe6926bd601064005e2abc8cf970bbd"],["/tags/typora/index.html","35cbacfa34a3a758619603956ee45415"],["/tags/vue/index.html","c20856cec288907342c24531eb1a793a"],["/tags/享元模式/index.html","17712909ea123021b8a814d59cda92f9"],["/tags/代理模式/index.html","b9ce8ff8a5261b0c4af65a8b2e3f1fb1"],["/tags/内存管理/index.html","adecf9bf372ed33c29bf8abdb6505c97"],["/tags/分布式/index.html","f4934b233fe0f577cc02b2e902ca1e98"],["/tags/分布式系统/index.html","7a24050afd5773f96fdc940b3931b2a6"],["/tags/前端/index.html","d7d76720a9eb308d0c4f1e6210c45cb7"],["/tags/前端/page/2/index.html","69dce197e5e7d3e3e0d1cc93a19adf8e"],["/tags/博客/index.html","f04e93b5281c3cd05937e7372ee0dac5"],["/tags/后端/index.html","a8ac1c9447642ed8198bb5ea2b447d93"],["/tags/外观模式/index.html","2ed48c5cab7ceb282a725306c37fb2c3"],["/tags/容器技术/index.html","e2849fe2f9db07c1d0c113f7b0787437"],["/tags/工厂方法/index.html","ac69e12558f6fac7fd9c0b75ce283f6a"],["/tags/微服务/index.html","f5df0edf703cdffbce347921cf3eb50b"],["/tags/抽象工厂/index.html","32988e8afad71fa4ee63cb500c10d0f6"],["/tags/持续集成持续部署/index.html","916a651197aaee0221fd8d29183c3453"],["/tags/搜索引擎/index.html","7ed5de8cf4eeecf2d445337f4913eb63"],["/tags/操作系统/index.html","fab340bfbc01ec683da3975aa9b58cc4"],["/tags/数据库/index.html","dc017333876c34edadeb362178f7c0bf"],["/tags/数据库/page/2/index.html","34bc85e4f13b1d79e67905a61b91c703"],["/tags/数据库/page/3/index.html","971c83f0b62bbf3f4b1b478622030e63"],["/tags/数据结构与算法/index.html","f6e4441b9e4ea1b90a04d054b25bc4ea"],["/tags/数据结构与算法/page/2/index.html","525556ff1db5f3ad7e380582820c836a"],["/tags/文件操作/index.html","4d6ce6395fa99fea2f80013bf33f1de0"],["/tags/日志/index.html","a76f46d06c01d978b001cbfe9b348510"],["/tags/服务器/index.html","a1658d563bd305777a4b3f024fc3b3c3"],["/tags/权限认证/index.html","85e61900e179cb1395ad606b8abb63e1"],["/tags/桥接模式/index.html","a2980d1448b2d4087bf4a1701fcf0cb2"],["/tags/模板方法模式/index.html","929e9f669467a7d6ac03429bd67d2f35"],["/tags/死锁/index.html","ee95cec2e92dae6c04db174eb26463a5"],["/tags/消息队列/index.html","d2398183e9721c6ae97467c625ce06b8"],["/tags/版本控制/index.html","c8f0f3cfd3d759e7ea5772bcb6af6c78"],["/tags/策略模式/index.html","d7816b9c48063d0302757a9b77fd85de"],["/tags/简单工厂/index.html","c0a15f1b1367c79244c2b21f4595ea51"],["/tags/算法/index.html","db8f699e4862485c38fa78d2ea24a2dd"],["/tags/组件化/index.html","dabe53d58b0330f790033819eb6f1622"],["/tags/缓存/index.html","d623aa984096477ab60c301e18f794b0"],["/tags/观察者模式/index.html","0ed96a3515c450a85912fa74cbab31c9"],["/tags/计算机网络/index.html","91905267abac1d65a34f0e2fae9919d0"],["/tags/设计模式/index.html","8560655d5ead4df5656b25c32257123d"],["/tags/设计模式/page/2/index.html","98ffaff13a97158046c468e74d83804c"],["/tags/进程管理/index.html","f0cf0ffc1ba559f29a4994d9ce7003c6"],["/tags/适配器模式/index.html","9fbce919b7abfbb7c68e22b8f5fadb80"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
