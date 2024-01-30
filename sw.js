/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","ab0ce39a927165e87086cbdf73c9d233"],["/2021/02/22/工具的使用/博客的搭建/index.html","89d5a52a4243ac1d784ef6b155d8aa7c"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","73c1f094b1380a7874df1dab3255c912"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","baf54d519d676c1fc3150bf2da840086"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","581dcc1d5885b7707c6a59478a692889"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","e105df41d638870598edcbde8a5a7014"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","5ac0b6b8b7923944406500ee5e14f0ad"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","94ce1f99214395e1017e28891f22f547"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","726b2986f7c0347ab9a3686367830d8f"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","9330a0b654f2526c1efc3bb92a2ad80c"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","6ba010f3892ac7499a5b89f3aed9bff4"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","f98828f4ec9e663adc79739590072a61"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","870a79b8ef6132e7a64746ed9ef850fe"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","62215b360d332ab4c24abe91d1437b7d"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","29f63f28b016021a6891e5979698f031"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","756f54b652fcea661b66d2c241238623"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","fdf453972a2eb17e3d8b707bd397b4b7"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","137343198b1dd8e9dbf1e98ef01e51db"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","1b84e3d6ac1f74223e8d857374596c61"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","14da933d300e07df2e31a939bb86246d"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","9a0a42b531f61819cda5e024e104812b"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","419e90b067bfd117541fcd74b51b07d1"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","13c88dd47dd0de450e4ba54b03bfe9e6"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","669460858841cfabea4769a4badc5d40"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","19c811aa912f0a6b167145c76d43c5a7"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","55f2fb1f9138808cbc7f1464c1722a86"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","b38a53bbaefad1adbca6230c5f15205e"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","36f3247c8b7b0fb803d8db4f933a52bb"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","f2ea41ba1efb269d20950986db718735"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","21a559812fb8217e7c53d140667c0c3d"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","0c63be3f8bd51de70d08c336cf339a35"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","c0f6928abdd641244b5f2de392299da4"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","81dc35e98a4cfa2768b0ceb9d8fc1c0f"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","b07d7309263be119edc2ac2398cd908d"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","c8a4296745a809206535ef92afec5a9d"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","218bce21c521eabc1985e3e3aa11acb6"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","4738c03526fa07ed8c4b9bb170761bc9"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","5308df92c0d21c103b27f48d44d56302"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","c97f2b9a6d17a6b2b03aa71123621ee8"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","1a4e217268c248f4d915b013080a72d0"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","4f961f9b25c20743b35f1b2e8934a17a"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","eaab0e66deb682e38275dd1952ff217b"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","b92c59b2bec3947ec3ebeb668271ac8c"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","be2465c63040b74917b936c60af4ead9"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","60d51d8c4f6e04fa779c9f91909ca66b"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","9e3026b151c150765b7a592afdcd5ee0"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","80a6fcb71b208318843791cecf80077b"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","bb59bcf2a24c8b444210c3be386d1c9b"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","be89dda01b400a4dff29d74193db1426"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","daa67e9713aade6e63520190b4006d65"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","b7214a17c970979cf8b509b2f62c7924"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","53f03385052095fe4c68959dd3d7d36a"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","8f4acc96a6199661bd95ff751695984d"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","3947623971c5ec062c976d1025e42462"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","8ae88ebbb5f029b4c341ede5f3fff50f"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","9cac0e5ff68258c1f065ef3bcb6ff8bd"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","119762a4dbe67fdcc2d4ca4413453427"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","9ed5eafb519c7dc8dc496afe3f8ff0ac"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","15d42e5b08a97ea5245a4e4fa0f80136"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","880dea3378bfcefa9c336a7bf86536bb"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","dc6cf38aa9fd62562e4d958afda0ac0d"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","ccf55390ee5697ef2a7ceaf67f0a4736"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","dbb11955258a66c452eff9b467d1f84f"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","06ea78de289553960201bff9dc397c17"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","8732d86436bb33ce54346ab5b2a61a56"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","639a2a71d123f95cf3f0d1872ff0ad58"],["/2022/08/17/前端/jQuery/index.html","b872f012a22c34d398e4a40f702282fd"],["/2022/08/19/前端/JavaScript/index.html","5d16d6b50fc8bb1fc721994a24285d66"],["/2022/08/22/前端/Ajax/index.html","0898a452e5bf3cca72655e2f2c0fa539"],["/2022/08/23/前端/Promise/index.html","b1ba4f278f034aecb7fd917cfdc210b0"],["/2022/08/24/前端/Axios/index.html","3a4adaed50ddb16cbbdd95c67c9ac227"],["/2022/08/25/前端/H5本地存储/index.html","e2b3d807d09f4a50ff76a3181470d7e9"],["/2022/08/26/前端/mock/index.html","3ec3029e93a1d4f79c2240f1e92dfb5e"],["/2022/08/31/前端/vue/VueJs/index.html","5daaaee872ce429160a4da1b6e7eef21"],["/2022/09/01/前端/vue/vue组件化/index.html","2efde09ae1867f1450373648dd746440"],["/2022/09/04/前端/vue/VueCLI/index.html","55231107caec9083b1a3064a6c81c2e1"],["/2022/09/07/前端/vue/vue实现动画/index.html","2f5486a2df967cc3901dc7f4440c75af"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","e77b3dcf51d2d3ee302eb7b0ac51481b"],["/2022/09/10/前端/vue/Vue异步请求/index.html","b475fc429db1fe94d3129be664c3e5c4"],["/2022/09/11/前端/vue/vue-Router/index.html","83d244c9b6cf26fbfab5982ea7fefdf6"],["/2022/09/13/前端/vue/Vuex/index.html","adc62627463f3e50d72d2c2fec18ffda"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","62275c487df660f592e60c5885f49924"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","0a2d4531cce6e63e81da18d36b614945"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","51ffbc074e848bc15e60ee30f01efb07"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","20cec5893c75eed8fb4db2b89f7a1082"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","903cf2a172c3a4f1d64ddd173edf1169"],["/2022/09/28/DevOps/Linux/Linux/index.html","c07e32645497fa0f678f06221f6c9670"],["/2022/10/02/中间件/Redis/redis基础/index.html","27d4ccec3eb90297f182677e766e8b92"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","866e1099ae248b7d18e52387bb3b89db"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","f1ee3bb9de317bb7ddb9f249d4b11de5"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","0cf50a91a9d119498d5fbb229e27cf27"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","dadec1e98bf2f8010533d6996846cb67"],["/2022/10/17/中间件/Redis/Redis集群/index.html","b2af50e9c7c0e5233534368da8597625"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","e26cf361d5f3ca9e40513d3d00724ed3"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","8c6a5b0fabeeec45b127a0ac2afcf022"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","54b514ef26edbbded5ed198995b9c511"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","54d9009ccb60b3aeb4d975bb8c83a4c0"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","7bcf0fe36815e21d867c68b7a7676e5a"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","363f5004716b8256e28c382ca0a0fcb9"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","962f48a61ce2dd1f2df196735aa3b7ac"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","517916c500e6455d279e70559cbc4a1d"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","b38cac8d31b423f4302fe09d11354330"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","ac94b6844c6dcf44238d03f55fd267ca"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","b5b64fdee6b2b6b014a3d59d9b0b9da8"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","faab412e97506474855c91f7cc6688c3"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","62a4f9cfbdddbe68c0c82e9196f878a1"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","76dfe092bc842bcf12e4af9459b6a10d"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","449b81bd3a5138c7163aa2b511e8858a"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","e03c1fad24cbf5b2e3f22417fd8517c0"],["/2023/03/10/DevOps/CICD/CICD/index.html","09b3d9488c422ebd66830defafae2598"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","268e11525cffda424ee65eeec54e8f21"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","86085facd5d3b4792372a62baead2fc0"],["/2023/03/13/Java/NIO/NIO/index.html","f48c27a4b9f660a726cbc455fd8e8ea6"],["/2023/03/14/中间件/Netty/Netty/index.html","6ae0b5e87b3d29e17c216075db4f9cbc"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","676be07990e364c0dfe7d0821c70c5de"],["/2023/03/17/系统设计/分布式系统认证/index.html","2b9a67158f19936945d768fcca57ef0f"],["/2023/03/19/Java/JVM/JVM概述/index.html","5c0fad13f7b2859c886b118c0e6e0098"],["/2023/03/23/Java/JVM/类的加载过程/index.html","59e84862f32d58f078df45213aafad1f"],["/2023/03/28/Java/JVM/对象的实例化/index.html","85000c56ee03c275adeca22c69fd26af"],["/2023/04/01/Java/JVM/运行时数据区/index.html","6322898827107402e1544e96ed89230f"],["/2023/04/04/Java/JVM/执行引擎/index.html","3c34834de3a6d06370757787763ee823"],["/2023/04/06/Java/JVM/对象引用/index.html","40af9445999e54422531ebbda8c78b27"],["/2023/04/09/Java/JVM/垃圾回收/index.html","c9ff7b1baaa046b55cf298aa70106f16"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","13471e9b37990684f2bd59c2c7e05b3c"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","d720dbdd3799745041350b04befbe5b0"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","5f84abe7353769f1c4e85bee3d667b7e"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","3da094ca822fa999edadaf55beed349a"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","a282ce4a2222a5e7685adb4bd11d18ae"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","b8188100c032c9f8059c998d99b247ce"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","476fbfd254f77c5e07ab3b0e156acdb2"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","025f152233447b9c21d5909367fad039"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","b9194db08c59ceef3f7680e82435623c"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","47ef9b3c9ea3aaad1e0369c7ec9e4c80"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","a6419fd6576f419e89889fddb59eb6d6"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","f9a9e367a31610b86bdf9ffb4d3f596c"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","44ceb8ba2d46e9024087c2caadbed402"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","92d2ce4a2950326d2adc77132c7ec0b3"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","04b1426bcdb356f04c2e7d1e0ea44bd7"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","fde0fe69fe79e15f27138dec0c68798a"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","a9f750902c91d7870187bb7cb2b12b1f"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","31feede0d7c84f6a6980e43254362195"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","77cfc6c63a79128786cf943d02d5d441"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","d58886aa3895c7408c37524211335b2e"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","0140464dcc4a8e1a72f6b5aa6fa917cc"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","4b90c2c3da01d605a483c3854b1b7a10"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","9e0872c51a2a8d311e1f1d11b28e11e6"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","3bac42b4f74cdfc7f7508ecdb978dab2"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","7e145b6da10cdabc626be31d5fe4fef0"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","f6d4745c5ce6bc0204de4b7a15d92d3e"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","4bc54c143e3226703e0b7ef2018a9be2"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","b01aabd5519836e87616dc51c0b8664b"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","be2b08b9faedb82192bae2c9f7c33c57"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","ded42eb162da141838cdb12ee21f9619"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","c31454cbf66d9208191191291a2a581a"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","ebf92c618d1e5ddffe654fa4e43b6039"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","6909a51cc6c3c832ddaa3ace48353a13"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","e6fa12b4b3364b8d67f98795189a2dc1"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","8c5cf03cacade66e17a47b5f4e932d56"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","b59ca8bc92eb1df1b30ada5cea8305a6"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","7c2c43331f861aae82f7aa0860a4b2c1"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","d5a0b75a32007d89c95b1027c6581474"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","4227e857ef17b633e4268f6ef73a57c4"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","3dd1d30e340fab9bb6209b08db5dbee1"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","cafc98c2417e889bd92ce936365dfe2b"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","0be8587bbd903606fd0d63532a774f57"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","d65c40dfa3e58ba0b206997390cfcb37"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","3cb61f9b71374de410def057c4d7137b"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","d081c3b29efe1acc873b332056618a27"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","66280f581d163329a35e2b86ef309596"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","6c2b699bc201ce96960d2de01ccdef95"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","cdd3707034230a9515172595044bc15b"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","ff91437fa7d2c1deaa6c35c90e3204ee"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","8f3ee76eec7c37a93a42980a702e86c2"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","9f3b52559b09ae7f8857e3a5a6a16d5c"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","230ea54d2beb567eed5c7dc41ccefb2a"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","90fc3f57a7d9cf7671fdea4a4478457a"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","e7bf1ba2dec262685a555827ecaa615e"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","df806af43e5b54cd8418875a6d53b002"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","bfcc069e96cf6bab2f7afca687d54b29"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","20b0b1279b8caec0174b39c711b348df"],["/2023/09/04/中间件/Redis/Redis事务/index.html","f60989b9608ccec386e94c258d7c9351"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","a438cd5c83a4283621bd82b7910ec9ed"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","d432074007e929559f152dae49c8ae67"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","ebc7fdfae1c6fbca9f2219d3afeb40c0"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","503a8dd64bf14947e67bfeb312638cbc"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","c7629b87a048c8b073f6f351f78cc62e"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","92e2eeb75d4efc178e914166631356b1"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","23bee4aa07e5412ce61e4594a4a0a9c5"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","9a94b3ba1dccaa4dc10f2588bab44c5e"],["/2023/09/22/Java/NIO/零拷贝/index.html","1e30abe601b312474f46ecdfbf89045b"],["/2023/09/24/系统设计/JWT认证/index.html","654d0617a5ab047dda3caaeb858b44ac"],["/2023/09/26/Java/NIO/Reactor模式/index.html","57d3c034ea8c8508f66bbdf8171d56f3"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","6e139891385e8d0be2ea3ea9ba6fda61"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","7566414ad6966beeb527bc4aca2ad0a3"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","e4ea5ab2fcfd938f1b7cbe218ed0c66e"],["/2023/10/09/Java/并发编程/共享问题/index.html","f31fce097e9bda9cc22d4b5a4937119d"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","1019ca78e44f8e627cfefc18b52df591"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","c0f117888ed09dc72cb687ae38e594ef"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","948e46ab04b4328238d9437a6453d440"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","524417816a03d34fa0ed87030fed9d8c"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","d059315a3cd3d5b95acad79e78d78a2b"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","b34735002be2fa23aa41533f2a3ea98d"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","4a881432c42c50cacad94afa47ed8602"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","936f3564b6fe58c7810dfff0f01d1e52"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","14d963e42377c0ff73a160eddf6cece2"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","074527f53cc5891dbc8ff7f7dc1e89d3"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","16610771129d389a53258fb58d22b183"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","634cb3e18bd18474a1beb06351f570d9"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","2a82ca9133f12bc7921f0300bd9e7141"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","de5e9bc6b45c55a71dd45c4da4ed1586"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","aeaa5baa6c3b9fbcfbb23c2655d34948"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","afbda2479a38009bdfabb5fc3eb0ed64"],["/2023/12/05/系统设计/开源协议/index.html","c4e47a5822763f5e78819e354bb2ee93"],["/2023/12/09/MockMvc/index.html","a11e397b1cd9668de807226a59019abd"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","a5c426f95bb265eeff47a94402504ade"],["/2023/12/19/MySQL读写分离/index.html","e515211b2a651002b982f0e11e5ce73a"],["/2023/12/22/MySQL分库分表/index.html","572ecfcad24f06298e3d1586ecf74afb"],["/2023/12/27/利用NoSQL优化数据库/index.html","3e5c35eb0a2db58988c37ebb0f270f61"],["/2024/01/06/缓存概述/index.html","8a1e0f50357191d7b496935d443b9bf1"],["/2024/01/11/缓存的读写策略/index.html","896ead395508260432f4ffc5e6a5fdd0"],["/2024/01/14/CDN静态资源加速/index.html","0897c3613c7ad35a500e7102feea226f"],["/2024/01/18/消息队列延迟问题/index.html","c98b5ef69f6eb9a2c19779f24ec94bd5"],["/2024/01/22/高并发系统分布式服务方案/index.html","6a3ccd6fccc5f96c0aef8ef30e671bb9"],["/2024/01/26/dubbo/index.html","d97895f43e63fe59151d86643ca89362"],["/2024/01/30/微服务基础/index.html","98e964e3c4049dd7da9d50d7cc7ace1a"],["/404.html","2f799194074ba319f8bb80e8820cd0a8"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","4864f5857672495d4cc1362d49f7e18e"],["/archives/2021/02/index.html","9423c0c7dc8dadb55ef51e57049e21f9"],["/archives/2021/03/index.html","f9da76371567c06eaacf3924e6f83b06"],["/archives/2021/03/page/2/index.html","ae511e94603738947be9ca45a69bcd25"],["/archives/2021/03/page/3/index.html","cba1d0921eab9dcc1d4d8b793241effd"],["/archives/2021/04/index.html","3f41d1a56a3d0712528290b88b008019"],["/archives/2021/04/page/2/index.html","2e310de3f9839aae0135560210d3b40a"],["/archives/2021/05/index.html","7e604006d80f6241e6ca246bee2ce72f"],["/archives/2021/index.html","f551016c19ba58b95b1dea806cdd77f1"],["/archives/2021/page/2/index.html","afbb08f68bdb1b03c99d8e179e88f3f0"],["/archives/2021/page/3/index.html","fbe250cf4f404e77ce3508cd1b66799d"],["/archives/2021/page/4/index.html","85edd5013a4b579969d371b4143d6c15"],["/archives/2021/page/5/index.html","77bad4164e8da513d3757c20b0d76f1e"],["/archives/2021/page/6/index.html","07f4511b358384520f1e982c1ef931a2"],["/archives/2021/page/7/index.html","1966a4088c2ac81139f0746390b08fd6"],["/archives/2022/01/index.html","5e86069a0977eb0467718b1c4fc5ebef"],["/archives/2022/04/index.html","b7ace8be87704d3516a5c35d2a3a70ac"],["/archives/2022/08/index.html","ec8a8b6d0c1be11e81aaf70d73d30730"],["/archives/2022/09/index.html","b9d7fde64f1fb8d92be6e74e53ac4062"],["/archives/2022/09/page/2/index.html","ff1ec63c8e8a052577fbfe8567ccaf13"],["/archives/2022/10/index.html","f681666b7b688044805376201b50e60a"],["/archives/2022/11/index.html","5af66773c4fd77ac6bd75cf2976f2c4a"],["/archives/2022/12/index.html","f6308c56701176835f530e9decd7974c"],["/archives/2022/index.html","11a84426ad0c80f2c5e107770674ee5c"],["/archives/2022/page/2/index.html","2479f8e7ae7a2a0aa547ea884a77fa54"],["/archives/2022/page/3/index.html","22c5de4ea324e5c182032fa0c39d6d39"],["/archives/2022/page/4/index.html","4ce6a780ff5290c0c51ab533972505fe"],["/archives/2022/page/5/index.html","ccb12e650ebdb208ced9f855ec7bd13a"],["/archives/2023/01/index.html","00d467ecb346b3ab290acfaf48274ff7"],["/archives/2023/02/index.html","7c41a5b39497b5369252afe1cca3d6c1"],["/archives/2023/03/index.html","4190c6dfcc3f1fad3fedce878957a0e7"],["/archives/2023/04/index.html","c265a9858ff62a0cf59a70882f354a7e"],["/archives/2023/04/page/2/index.html","51d7ac461337b849aa5a0bef74839be1"],["/archives/2023/05/index.html","781f738fc8cdbc41ccbfe523ec6fa8b6"],["/archives/2023/06/index.html","7ab5407cc3fe907937029a55cc8ccdd5"],["/archives/2023/06/page/2/index.html","636348093bbfc2257689b20f90d4d2c9"],["/archives/2023/07/index.html","e1adf77d57c9304e2e3022c07c4df0b7"],["/archives/2023/07/page/2/index.html","c85f9559699f4440f9158223418e472d"],["/archives/2023/08/index.html","1071762cb379c6c063a4dd9796fc309d"],["/archives/2023/08/page/2/index.html","6f9bdfd8957e9ab31b77fdbb959f7077"],["/archives/2023/09/index.html","9355f41d227b4d1e16d75698fcfb04c3"],["/archives/2023/09/page/2/index.html","5f487cffd9b82868c99673e9681ab9da"],["/archives/2023/10/index.html","31e4b7476b7f9868969de36f63692323"],["/archives/2023/11/index.html","48da26f9b6b7a82888b44701452b4d35"],["/archives/2023/12/index.html","5398f91ddd50ca9e3ed76d543b60114f"],["/archives/2023/index.html","5fe6e8337c7addf6620f962aafcf010f"],["/archives/2023/page/10/index.html","4b246f2ec2a3b0f647171d640a8b8754"],["/archives/2023/page/11/index.html","63b93dd0a6d0c74caed00b5ad5c4802a"],["/archives/2023/page/12/index.html","51f973a1cf4055aed9f4e89e5ffe3d3b"],["/archives/2023/page/2/index.html","8a980a7787b8df44f280d9e35872204a"],["/archives/2023/page/3/index.html","b960bd630c79bd7d9e8fa86814566c5f"],["/archives/2023/page/4/index.html","9cb271963c2a5e682c124ffab7b0a401"],["/archives/2023/page/5/index.html","343bdf29268dd3dcb09bf0777968bb58"],["/archives/2023/page/6/index.html","2a53d4fc506d9a151e52ef7bd7a7ef37"],["/archives/2023/page/7/index.html","2a216662f0a6afeef420d6fb91e1a30f"],["/archives/2023/page/8/index.html","c2cb77c00855a1c49ec3903f2e46f948"],["/archives/2023/page/9/index.html","9a531cf6fd8ef49c434b3924b33aa932"],["/archives/2024/01/index.html","fa0f4b70e724dac07a3dadc0a45d930e"],["/archives/2024/index.html","e7158b6365b484d053e298db2ab32947"],["/archives/index.html","13f21090586c553fab05476f7e9df9f5"],["/archives/page/10/index.html","b19088e9eb907f33f3e6e246187154ec"],["/archives/page/11/index.html","e53a1c68ee7086bb03d042780ef7298f"],["/archives/page/12/index.html","bba1a1bc70187ea66c771065332ddfe4"],["/archives/page/13/index.html","b8854fbcb2062efd97e2551b497452ca"],["/archives/page/14/index.html","4f5635c6b1177abcc3788c501f5d5b8e"],["/archives/page/15/index.html","eba582d0a3ef0b0f0018bac7a5730a07"],["/archives/page/16/index.html","eab08380c176a479d928caf718bcf57c"],["/archives/page/17/index.html","3234cc1e68e89ec9417e3ffb61d28f8a"],["/archives/page/18/index.html","b0e608cec3159fe48f1e1e11881adddf"],["/archives/page/19/index.html","18cc7f9616ae5805533e5944f8fa1b86"],["/archives/page/2/index.html","148bb189a853da4ab897c80d1b1a064a"],["/archives/page/20/index.html","2020d40409d39ab880d81be85ab63717"],["/archives/page/21/index.html","abc6efcddf996410af72d406d8992a68"],["/archives/page/22/index.html","133d389b244b4b0218f90ea287d90d81"],["/archives/page/23/index.html","380bdc390d7ba89f17d882ba17e0d9ce"],["/archives/page/3/index.html","d634f224a260b5b88207b5222e2f654b"],["/archives/page/4/index.html","d5af9add08069d3fa21afeec4a48e905"],["/archives/page/5/index.html","1c0e0e970fc18e3ad8755ca101cda76d"],["/archives/page/6/index.html","66dda522b3b14a57686d228c3dd68e64"],["/archives/page/7/index.html","3a07539dc405fbb9c42203ab258d75e2"],["/archives/page/8/index.html","82f60b1123f75cfb6928f7018c62f924"],["/archives/page/9/index.html","471ae280f5688857afdffec22879afdf"],["/categories/Devops/CICD/index.html","8ca3b3424f3e5ef820df1059084738c9"],["/categories/Devops/Linux/index.html","f5e4f4b9ffacc83d370237b890845f02"],["/categories/Devops/index.html","c2aeb429196cc4f9297adb7db86efe15"],["/categories/Java/JVM/index.html","9fe6961d782d185fc16a48f330e146cf"],["/categories/Java/Java基础/index.html","c9db33489fd0db4b9c339ee0ae73e655"],["/categories/Java/NIO/index.html","e55f0bb57c58db2678a07f54757d6f73"],["/categories/Java/NIO/原生NIO/index.html","6baa6178fc1ee3ee67dd2aff3fe2cd18"],["/categories/Java/NIO/文件操作工具类/index.html","115a3863100c009c3c01db33d6f98de3"],["/categories/Java/index.html","97517c820095599a793d5c80fcfd98b5"],["/categories/Java/page/2/index.html","7f6b89a00448a149af91b8dc7c83e244"],["/categories/Java/并发编程/index.html","732a61ec06b966ecaf154b3cf0492884"],["/categories/Spring全家桶/Spring-Security/index.html","59610cfbe3b29b7bfba4a2172e657729"],["/categories/Spring全家桶/Spring/index.html","27e8b5ef44a85d540e8ec9142306d893"],["/categories/Spring全家桶/SpringBoot/index.html","32329158828e1d070b42ca32d75f26e1"],["/categories/Spring全家桶/SpringCloud/index.html","af720529cfba8e9da8411e13848ffa8a"],["/categories/Spring全家桶/SpringMVC/index.html","4e4616cd293bb6b2c539c57b7236436f"],["/categories/Spring全家桶/index.html","627b16dc76b10375e11cc21ea6aa05aa"],["/categories/Spring全家桶/page/2/index.html","c975623b62b341a97413e0d3d9f45963"],["/categories/index.html","deab4ac33939688906a444f963349425"],["/categories/中间件/Dubbo/index.html","46d33757c3cf896e408b77de8e8d31c1"],["/categories/中间件/ElasticSearch/index.html","0808af494dd0534e9025d84d2dba3e8e"],["/categories/中间件/Netty/index.html","65ee6317d033bf2f698e6f876efc0772"],["/categories/中间件/Redis/index.html","982c18f532f5e09ed2ea65fefaf0443d"],["/categories/中间件/Redis/page/2/index.html","f48f4f1cda1faf3b24856107926fb3b3"],["/categories/中间件/Redis/page/3/index.html","a22bf480d6e91c5c51dbe381cea64449"],["/categories/中间件/index.html","eed3428ebd76892584871ef57d472a0a"],["/categories/中间件/page/2/index.html","895013adca5d713ab9014bf5ccf2ce5c"],["/categories/中间件/page/3/index.html","b3225949b8368a1794826c14571cc5b9"],["/categories/中间件/page/4/index.html","6294da90d9e75ca9003767f3c04a05f4"],["/categories/中间件/消息队列/RabbitMQ/index.html","9e7ea885c49507bdcf849386c8a361e5"],["/categories/中间件/消息队列/index.html","31f3e9640e0985d628fd2fcc2743a386"],["/categories/前端/Mock/index.html","5e65fb6f62333d4956ce2e83e1facaeb"],["/categories/前端/Promise/index.html","c5c7b6cbb7e5395cab59d04f19ec9b0c"],["/categories/前端/Vue/index.html","a16633d42e7666331acc9e75f61c702d"],["/categories/前端/index.html","04e10609be396796e61d66e9f965ab76"],["/categories/前端/jQuery/index.html","745334e714285c48b2d76e61e1f527c9"],["/categories/前端/page/2/index.html","f8c9f2d340cb2514b9a0b6191793ec00"],["/categories/前端/原生基础/index.html","16968f4c267a2916e107e8ad2bda8e85"],["/categories/前端/异步通信/index.html","4f78142841d77bc640560bd3bff3b2c3"],["/categories/工具使用/Git/index.html","eba7fb6ee9fc7782c8d77cf41b53a3a0"],["/categories/工具使用/index.html","d89ff4771b5510ed8f990851169cca08"],["/categories/工具使用/markdown/index.html","831f8b4a17981a7d12c03e354d39d496"],["/categories/工具的使用/Docker/index.html","1414e993db327ebab263722142dbc84b"],["/categories/工具的使用/Nginx/index.html","50922be00ca87f6d4bd7408774948108"],["/categories/工具的使用/Swagger/index.html","3040bf92ddc1ab0f91088cc09f116c83"],["/categories/工具的使用/index.html","d632fcb3591e650317b591aa8bcdb982"],["/categories/工具的使用/博客搭建/index.html","2f231f87265334922aad3f5b2269ce30"],["/categories/数据库/MongoDB/index.html","c8034f6b0c5eae157475cb01f5db3b9a"],["/categories/数据库/MySQL/index.html","bc012f03e72e923a02be8383df742c88"],["/categories/数据库/MySQL/page/2/index.html","8d894ca238d7241bfa9a6908bb128781"],["/categories/数据库/MySQL/page/3/index.html","3ae858c1fd64b204be2ed60d1ce95fe5"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","cb1795ee71732a6ceab817f491bf9d2d"],["/categories/数据库/ORM持久层框架/index.html","a29e3f4ca45d8092404f675c6085b4ec"],["/categories/数据库/index.html","c8dbb31df4381c0435639d06b69f5634"],["/categories/数据库/page/2/index.html","5d1c2e8e88abea0c09c770bb30eb4cde"],["/categories/数据库/page/3/index.html","8d42775167e7a10350314be9f6f82092"],["/categories/系统设计/DDD领域模型/index.html","adea111e7422e878706af9509aef8be4"],["/categories/系统设计/index.html","d36e1b3f8addf7a7b667dd6c5bbe7e4b"],["/categories/系统设计/page/2/index.html","e4bb737e23fbaa3d53f7f56cb842298e"],["/categories/系统设计/page/3/index.html","227f7b253910a1e94fab1aa4fe0248f1"],["/categories/系统设计/page/4/index.html","9d0188156deace048ec6c72848944425"],["/categories/系统设计/page/5/index.html","d74d59f21c5aafa070b2efa220a8ed54"],["/categories/系统设计/分布式权限认证/index.html","b63eb0f337af6e24e07339d2f099b5fc"],["/categories/系统设计/分布式系统/index.html","f550421b3b076cfc8223cd7bdba94d8a"],["/categories/系统设计/分布式系统/page/2/index.html","ed850130bcd05a98ad9af701bcea4ce1"],["/categories/系统设计/分布式系统/page/3/index.html","e98176e0dce89ab638220c102c8b1929"],["/categories/系统设计/微服务/index.html","7034f9c75bf2ce516cac7763c1cc977f"],["/categories/系统设计/数据库优化/index.html","e3d6c2e18b1918ca99e6f370a76d5cba"],["/categories/系统设计/设计模式/index.html","f6db2099282f14c43f3b43eb5bc86ae9"],["/categories/系统设计/设计模式/page/2/index.html","2e52f9ee6be9f91cd774c98f6fc4b6e7"],["/categories/计算机基础/index.html","20b4c3aeb505567de338b476dd452c8f"],["/categories/计算机基础/page/2/index.html","a1773dc6db3c2b54d99217711e6d81ca"],["/categories/计算机基础/page/3/index.html","e033af74158c94ec0af96880f14e3e90"],["/categories/计算机基础/page/4/index.html","68900549b9ec99567f2cd17e32da5e10"],["/categories/计算机基础/page/5/index.html","9f4d1d1c596600d13ea45dabfed65d03"],["/categories/计算机基础/page/6/index.html","1b19fb37e8ebf2699efc5666729f17fc"],["/categories/计算机基础/操作系统/index.html","2af9812085da182d48b68515c9135580"],["/categories/计算机基础/数据结构与算法/index.html","d5c2893f0b5e8389cbbdd99dacc46b8c"],["/categories/计算机基础/数据结构与算法/page/2/index.html","89a6543ec9fab2fb02be72630f1217ea"],["/categories/计算机基础/数据结构与算法/page/3/index.html","033d8e33eb8cfb17ebd5579446a044c4"],["/categories/计算机基础/数据结构与算法/page/4/index.html","480fc3e91ebf0dd00e0ca82668fafaaf"],["/categories/计算机基础/数据结构与算法/page/5/index.html","1d4381b2a683e329f89e5d35000a4a09"],["/categories/计算机基础/计算机网络/index.html","ee0aeacf4b3a24e5859ec0e755ca4375"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","b8f2f64161990fad0bfa0c1dadcc3361"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","654dad0c6db6838feccc49663d337d3a"],["/messageboard/index.html","8f2c9580dc6f1156aa1fa964a3e73884"],["/page/10/index.html","2b6e3a6102060f5cc563263b3934cc80"],["/page/11/index.html","b0cb7b83bc3f79fb2f65703024c1fc81"],["/page/12/index.html","a22fb48a8f1a2f4d2b0e2f4842e76e8f"],["/page/13/index.html","dde0207a21953d99b7360e3cc6c334d7"],["/page/14/index.html","663b36c88ca493d2161b04e7804b68a6"],["/page/15/index.html","c5bfb3178d8faf0daaa45efce3cf57c3"],["/page/16/index.html","96248a2208ee7a221ff6dc2f7e48b5f0"],["/page/17/index.html","f9854740dd5076a5f535438039c36312"],["/page/18/index.html","7667d606c40bc6434209789062521718"],["/page/19/index.html","c1805c2f620eb257c400510c888e4e56"],["/page/2/index.html","7cd52db322482b8e5885e03379a5d09b"],["/page/20/index.html","2d5085837d7ab19a3753b6f610b588dc"],["/page/21/index.html","9668e2f637faa53561168efc58418425"],["/page/22/index.html","7ffcba6c28b5c5613dd95e9891ecec24"],["/page/23/index.html","db8ca2e726b0e5572bdd8c034cd4a16d"],["/page/3/index.html","fa9711b8b59020433501b7e6c6bd4397"],["/page/4/index.html","beebc8450dcd5e1eac8ab016edb1e1fc"],["/page/5/index.html","612e4873772ebda2cb82fb7bfab1d110"],["/page/6/index.html","a062fb5264bb8609af1ca83591372983"],["/page/7/index.html","048df7a4845c39496ecc4a57f5487276"],["/page/8/index.html","2f9950b2aa7e4ef9834bab76a1b2c807"],["/page/9/index.html","5dbe544d071b57908ad3b694cc444dbf"],["/sw-register.js","05dc92d513b281042f2b624e7d4ba229"],["/tags/Ajax/index.html","2c177fa0ff67f14432c0b832440d230d"],["/tags/Axios/index.html","5017ef4c879ab8220e29aa530de2c454"],["/tags/BASE理论/index.html","bffaa6cdd4d6bdcd5cba1db018b8c66f"],["/tags/CAP定理/index.html","38aad4b2849469b5d96229923107dbb2"],["/tags/CICD/index.html","1c8b4ac7ed4c75c7ebf9e3c00ee8f150"],["/tags/DDD领域模型/index.html","5392fd31768300cf46d110c6dc3f4126"],["/tags/Docker/index.html","69d682df1a551e38c943f6a858098c95"],["/tags/Dubbo/index.html","33c9e9eb86a2a38014aea59cf10bc948"],["/tags/ELK/index.html","d919e85f931d95328372d99747a88b33"],["/tags/ElasticSearch/index.html","d061ae373a3b98d1ebae7a741a720b06"],["/tags/Git/index.html","c48ef80193cc0eae666e357226307b18"],["/tags/H5/index.html","ae8075201ad47d916b72d8a405b3c282"],["/tags/JVM/index.html","ab9f18dcb64ee0f3bc62018afff562ae"],["/tags/JVM内存模型/index.html","9b97603d3c032d6e2c01fa0d93c8e19a"],["/tags/JVM执行引擎/index.html","4b813a1ff415356679e30706990405a0"],["/tags/JavaScript/index.html","4cfa3304b50ad6c6ea1494346cf4afcf"],["/tags/Java内存模型/index.html","c0ccfe2249452de510c8f7f1e1f2ca6b"],["/tags/Java进程线程/index.html","9236c7224fd2345f7844e625f1f4cc5c"],["/tags/Kibana/index.html","d48746ce8ef4548867584cc68d86d090"],["/tags/LeetCode/index.html","369064c062e44d19e48c65c6c03d4a84"],["/tags/LeetCode/page/2/index.html","4d8c51e89234f0681cb9c0c0df46063f"],["/tags/LeetCode/page/3/index.html","3e3b22b65c56b6797e72ff6ef60b1555"],["/tags/Linux/index.html","05b7c9ce37a23139cae0e918ae903e37"],["/tags/Logstash/index.html","85d113f9b7c7bd362b046719d5305278"],["/tags/Mock/index.html","327c894817abe81c1bfcaf9a973ab14d"],["/tags/MockMvc/index.html","45827d29eeb8a0b0bc9cd331100adc26"],["/tags/MongoDB/index.html","2eb4c726f542b6099451243be206b241"],["/tags/MySQL-事务/index.html","fd61b69bb675361a68530d25387bb1dc"],["/tags/MySQL-数据类型/index.html","5b3781b56a3a607a925ac966ad6fdca1"],["/tags/MySQL-日志/index.html","84d20bc3e124f4a191e1d07553f1defb"],["/tags/MySQL-索引/index.html","0f0f5ade9506bc2edbb102da925eb327"],["/tags/MySQL-锁/index.html","ee3cccda7ee81a6e440ecdd28aa44d02"],["/tags/MySQL/index.html","7e365743c58261f2cf21077a91666627"],["/tags/MySQL/page/2/index.html","c06b66a20dd0dfbe5a6ffda6b382caa2"],["/tags/MySQL分库分表/index.html","758416aa4d020b0f5e154d3eaaf9cb78"],["/tags/MySQL读写分离/index.html","8f7a7133cc6d75f6eb8cf2384148cd9d"],["/tags/Mybatis/index.html","464e94d99d252d9fc9a1ab8334aa08a3"],["/tags/MybatisPlus/index.html","627f25465df61268ba7ecfd486c998ef"],["/tags/NIO/index.html","a1cd7aea50659270812a8d5169f7fb9d"],["/tags/Netty/index.html","c1227dfec906b634e3dca4bc2feabcc1"],["/tags/Nginx/index.html","6fba89e14a79574af5583bfaafc3a088"],["/tags/NoSQL/index.html","427d6fcf42513ebd0e61e30477d1260f"],["/tags/Promise/index.html","ffaab7d40116156cde6fd30411421a48"],["/tags/RabbitMQ/index.html","7de45776441cbb91b56d891b0ecfdb42"],["/tags/Redis/index.html","6b2d6ae3b43e519336082ff153ff3a74"],["/tags/Redis/page/2/index.html","4763d8b88982a5314263cecfd7977986"],["/tags/Redis/page/3/index.html","04bc8a1d6e6b636b6360e75fb8526370"],["/tags/SSM/index.html","2be6243f64f00cddb8579776e95bcf3a"],["/tags/Spring-Security/index.html","51f52b54b7cdfebd227974e04c8f6af1"],["/tags/Spring/index.html","a13c2d94711557dd23973ba8340f776e"],["/tags/SpringBoot/index.html","4fd112703a82023121cbe5e7fca6f093"],["/tags/SpringCloud/index.html","9b4a6fe6b2e3a79aeeee913777a2d6e0"],["/tags/SpringMVC/index.html","c5753754564f2dccd9fdc548e5023ef5"],["/tags/Swagger/index.html","71881726960e3b0b5563643bbbd90554"],["/tags/hexo/index.html","36eae7df1e11c5b0fb2d52c2d2d2e522"],["/tags/index.html","973b1b0862caa552d4442e66706a97bd"],["/tags/jQuery/index.html","efd3068bc47b571c2276c372bfafe0b3"],["/tags/java/index.html","1bb7ea221487c6cba1cf61dd77f9bc43"],["/tags/markdown/index.html","de120a88696f33b0f2ef3155a1e18b37"],["/tags/rpc框架/index.html","40d243fe54d9e97fd7d628b5d424d21b"],["/tags/typora/index.html","80f4fad96a5c610d4eba05f8217e4926"],["/tags/vue/index.html","5a9cb31dffdbb81cd7962adcc222893d"],["/tags/享元模式/index.html","bc7ab7d305227885922c9edde3579834"],["/tags/代理模式/index.html","d06fd3fcc04241f22dfc206463379454"],["/tags/内存管理/index.html","7e031612c7dc0120d2cd4a003bc4eb7d"],["/tags/分布式/index.html","bda14de57b11fa68e2c840a8c8bcedb1"],["/tags/分布式一致性算法/index.html","b67ab064b845473f5bd9a635243fe689"],["/tags/分布式系统/index.html","99d360516c829921d3e9122f92595a0a"],["/tags/分布式系统/page/2/index.html","dd35154815d4febab50a486a0e084263"],["/tags/分布式系统/page/3/index.html","0ff1ae0c3395f556ef3633117f847b84"],["/tags/前端/index.html","35de4531a5d030781a6a6c9538ba3342"],["/tags/前端/page/2/index.html","d392030f8b219135596c01c442f7c3ad"],["/tags/动态通知/index.html","7503e602ff4ef3817caedf91700cd013"],["/tags/博客/index.html","3e420cd9821ed5ce2e66758fc513a646"],["/tags/后端/index.html","d1aba19ebd4857adff7a8999a86f1ea0"],["/tags/外观模式/index.html","98e4ff65246c9a6a6a106224ace17000"],["/tags/多级缓存架构/index.html","d31e69880075c5fd55ee1894ca396502"],["/tags/多线程设计模式/index.html","60589707f0a4997d93900cbce1585ce6"],["/tags/容器技术/index.html","8171327cb95b8e09ffa3d7b4b3c56679"],["/tags/工厂方法/index.html","4940912d8e25633b2677964b2ec07c1b"],["/tags/开源协议/index.html","e99836417bb45d5b4fc138ef380168f3"],["/tags/异构同步/index.html","06021e2542577d9b288092ff5df463b4"],["/tags/微服务/index.html","da5a78b676e96041e69dfc20b5673dc2"],["/tags/微服务基础/index.html","19212fd145173c05c1897a9cbf2c0f11"],["/tags/抽象工厂/index.html","b5f656bc4f096ed564e7fac6cee68d07"],["/tags/持续集成持续部署/index.html","c41844b665ce9b5ffdf448f662559d2a"],["/tags/接口幂等性/index.html","07ec2b877618d900ba2e9bda07f5f8f8"],["/tags/搜索引擎/index.html","9bc2a04d7b5224ef9f06809879207b8a"],["/tags/操作系统/index.html","f96c58d6f1f26550aaa706ba47e38419"],["/tags/数据库/index.html","7190fea81319a8a12a6aa2f80c46f4ee"],["/tags/数据库/page/2/index.html","c4b02178c1d2a846282d5a28a29178e0"],["/tags/数据库/page/3/index.html","e73869e3d6f51d2a4be59fe04feba03d"],["/tags/数据结构与算法/index.html","f35d6a6b1086db5bb3f8f30b9fba1491"],["/tags/数据结构与算法/page/2/index.html","174c4f1b8dc9e40512115dcb1314edca"],["/tags/文件操作/index.html","0eca5aa500f8480d47643887d0f7242b"],["/tags/日志/index.html","5c42413bd2a184bb645f21d0919b54c9"],["/tags/服务器/index.html","2d19a8e22fab96d93f2b22bc1e5b9d8f"],["/tags/权限认证/index.html","2eba765e11cce438f1a9f897abbb494d"],["/tags/架构分层/index.html","7995a33c2846b4acefda755a03f0f271"],["/tags/桥接模式/index.html","048854c24d6812d2d96023bee39839be"],["/tags/模板方法模式/index.html","cbd8cea0aa64cbe7c10de7864a75d663"],["/tags/死锁/index.html","39b74e4ec00530c927221e06071db63b"],["/tags/池化技术/index.html","e1b673a963ab3daa63c4b9ccbb3cac49"],["/tags/消息队列/index.html","0e2af31e016f5a73a756247a6b749ad5"],["/tags/版本控制/index.html","ef1b8ebed0623ab91414760891d2b5bc"],["/tags/策略模式/index.html","d0295407bad60ee8c3ec7bd82b096b34"],["/tags/简单工厂/index.html","3e74a144cfddcb94133fbc37c398773c"],["/tags/算法/index.html","84ff98fe423c52be6daf25cad918b6e0"],["/tags/线程活跃性问题/index.html","3e6a3bd4d4dad4fafd665b01d3065fe6"],["/tags/组件化/index.html","963fa38f00c34907cc5eff136076e45d"],["/tags/经典限流算法/index.html","cff750bacd767d34806659f67b7dc1d9"],["/tags/缓存/index.html","d59b4272327097ec0109b3785695038f"],["/tags/缓存/page/2/index.html","123a2a68ab305b6bd4235e2d1d0f4779"],["/tags/缓存/page/3/index.html","b83395f0313c6d86980dd846e9f36c53"],["/tags/观察者模式/index.html","6ae412f9a11edd471c5c7e0faaa1e966"],["/tags/计算机网络/index.html","970e6c8180796b02d6bf3dbf27a1243d"],["/tags/设计模式/index.html","ed97b39c7834e90b1386d855ee26d691"],["/tags/设计模式/page/2/index.html","4c44d4c3fa013eb8dd4b936ac63a7133"],["/tags/设计目标/index.html","78ea65329f9b0f27d63b314b3192a144"],["/tags/资源共享问题/index.html","6e12c6dea00b383c53e288be7e63ccdd"],["/tags/进程管理/index.html","d19bd54393c1c8a3d1b9abdceb099b84"],["/tags/适配器模式/index.html","b63e3625d48a0c467f4758ec6f8cc235"],["/tags/通用设计方法/index.html","aa34f7ae06a32ff13aba4eb3a1ec57df"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
