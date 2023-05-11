/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","41b6c3cb33c9d88916f25167e6098f53"],["/2021/02/22/工具的使用/博客的搭建/index.html","5f981ba420551067f30c5320fca8f874"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","6332e465784f69d279168739c0d3a71b"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","7f6a0a0590aa5def0e6132a3006aac45"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","327b26081b47a3cef2733d7f0f8dee5d"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","e87235bd844d1291a1734f09031a89cf"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","7a2a5fe3c2ecc2b238624e7233e1e055"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","9590de680cbb0013a3e7387bd8a634ad"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","94890ce4a822eb5dbe98462f033c8a41"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","100e20e7589ed876b06bd419578fbf47"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","37850a968249e6715055368f4f504eaa"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","d22892e0713b7a5bc5d67cc7a2065277"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","cefc28a532afc65c4b6f641c8d015d90"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","de59a89b573a33a5384b374541849720"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","a8edbf2432cf0551e50ae31cab8c3943"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","948783e7d3064593231ec99bc8d689f8"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","f57d6c60da2e2bfa9f4002d3a7aa7817"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","f689a7db59f6b28ab095f0ebff4e9b5f"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","b4363a009d32f7974b10fc0295757a7d"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","27c61a5f0d775c0b4b0bcf8fb17e736e"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","85bd310f97995220ffa9b4d305c67a9d"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","8cdc3280f9d9ab4e9228926e07ab805b"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","bcb72b0c558a87a8ef8752e68e475d3c"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","1ecb742ad979f27abacfeb8426fcec9a"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","7438461a6ad281464530341801e4bc02"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","769d63b0fbc3c4ae5a3fccee2623fe58"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","142f8537634afe5a21fad9dee3bc05f0"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","0ebc63f70dcc2d01bef5ca6ac746c17f"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","8cd8e0da7780bdbed1710bd7e28501ed"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","2b399ba02f468fdfe7345c40356234cb"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","8f511590b50fa4279eb85e4a462170a5"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","c27bbcc5060bf0a0f6d4222f0523d2e3"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","77d2717cee2668e419191d3a0c374d3a"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","bbfea9d8f6c83729dbf8a23760c4fe25"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","9c308b9a67f85ad2c5cf982d02733810"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","36a8c8a40fbb7fd5bc0087e395911e7d"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","554698951e3cb6973fba7c561b906426"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","0eb7de89d916fc4648904a3b1ea4b419"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","d178b2eb205b1684b87661b8eb0585d2"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","0260b651682b70ef3b27fe0cc5d986f5"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","c60d552d7f9fed557780c56dae35c865"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","e85ffc58bda6bfe58efe9b3fe0dbf200"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","d3452e081e64c9b4a33b15bcf5b45a2d"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","63f61d6109f935d0239491b5a46eb1f2"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","8328817af1eabdd849600467b317e2aa"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","1172c5d2740853d78178625fe856b404"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","b37e8d6aa72d4f2f9b37318f1197d54c"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","7cec4ef911c8359dbd071a8aa8f05fbc"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","80a87de9a447905d3459c6a6b6b254f0"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","34fa5a60dfa2f723db9135169a20f896"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","53d12691084d2d2f8520e83590dde8f6"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","ce3bb39b53e0844640f0c85d510379ce"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","e00c224dbad2e81e77cb58440c012f4c"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","b1b1feb59f1d0a6a6f05543a45acf25d"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","a472e157db4ae032e9b34c24f673c0e6"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","b3bbd3edc83e83795694564cea7e33c1"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","5ffaefc4a4dcf85c9095cc382358ba70"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","9370132de157ca99cc1211bade81896d"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","dc8529ebddac21cb3ecea4a5d4c68bd9"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","2ed6b57d4da8dd421e8bec7b46b64cff"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","396a90ebc0496b4ed7151875361b5344"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","552b34efd3222d9f2ad79cbe6580ad09"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","511b8d8863fa1858e6c4c34cfd97b271"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","4ec64327433ff2d5ca1dc231e356a64c"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","01a79e2da262ee29c8d9eb578d32b977"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","02951abf1df787098891412f47ae0af9"],["/2022/08/17/前端/jQuery/index.html","72466f551ff4986b663882aef8c3ed7b"],["/2022/08/19/前端/JavaScript/index.html","1c365ad9f45ce3ba13536e7e2baa7307"],["/2022/08/22/前端/Ajax/index.html","56f77ceddc5000de10182aa22e867725"],["/2022/08/23/前端/Promise/index.html","e44a20fa9bdfc1c62537555e8acf26e0"],["/2022/08/24/前端/Axios/index.html","01d05ea507453b8d368abc561017af43"],["/2022/08/25/前端/H5本地存储/index.html","3eb40e79478b3b5cfeb855f45c8ed06a"],["/2022/08/26/前端/mock/index.html","5f91782fc7d96158c55dae71f2f00641"],["/2022/08/31/前端/vue/VueJs/index.html","95c324ab5d74bdb9d1ff67d82fe4b029"],["/2022/09/01/前端/vue/vue组件化/index.html","58f3a24cedf23bd95d07fb798b3f5627"],["/2022/09/04/前端/vue/VueCLI/index.html","6904c3d8e6c0b7e7b48a9ac80e54f709"],["/2022/09/07/前端/vue/vue实现动画/index.html","de7a76d11a93bffb5de5b798305ee718"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","7bbb375b9de440bb5a49df6307261b50"],["/2022/09/10/前端/vue/Vue异步请求/index.html","70bc02314f8d8098f065e6435843f3b1"],["/2022/09/11/前端/vue/vue-Router/index.html","2328bc63827d09b98ac81017e79f529b"],["/2022/09/13/前端/vue/Vuex/index.html","754dfcf5c4966b605a936efb9515c433"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","fd649d6f1aaf75d8ce20f1a4d5ea3f9d"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","abf13daf4fb7f3b67a19adba0b519263"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","50c8d89d106a6b1e8cc483ea2c919dd1"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","6b37b27eea49fac18445c6d1cd1770a9"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","024a73e426796a964d6b9f5be42321a2"],["/2022/09/28/DevOps/Linux/Linux/index.html","ff7bcc1dc3b2c29df3999efb9f3a730b"],["/2022/10/02/中间件/Redis/redis基础/index.html","ee50e46f3c7bb2893cb66d6b20c1ed8d"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","ed9e59d1df8cf95d67bb07afe1ee594a"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","7038f9131574b4581b803de47511b4db"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","91e3ed6e2903b7d7f83b50b2144f2229"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","169de3411986713b2e7148b10c98d010"],["/2022/10/17/中间件/Redis/Redis集群/index.html","48188288d0b178bd56cedb70769a6d02"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","427fcede13fcfc740d541a4666baad39"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","79f9cc123f0d24b61915861d8010cd6f"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","122ef05c62a425c9abd396a7382d4716"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","fad627b4dd2dd450e2fd69845ddd55f6"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","2d813f0d6e61402c8ccb00603c04f81d"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","5e1fc3460bc6519a86923b05c1f34c52"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","0ffd42bccc07e66fc4e2a92bfd8f627f"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","bb894ac7c4ffefe8e29a78f5db1467d8"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","3e66384ce3970799121bfd906e2a9230"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","8f521bd854ceb6783e7238995c4389b3"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","3d27e7a75545d2b35c9636a8e0039149"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","017a462483fd19f5798faed2d268c320"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","e6ec6e33b05f201f96fc71fbc867e3fc"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","279144a44ecd5a64cfbb4f70e9cae01c"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","cabcfc1c9a81813ea8779d9f5e0d8aa1"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","49539a34691123ce6ce1f4b1cd4bff81"],["/2023/03/10/DevOps/CICD/CICD/index.html","0830676e29e4927cb9a898f64ff64627"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","3f538d767b0cd7bfce6641976f563f67"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","e4ea0f304178ed781227407d9d3e9848"],["/2023/03/13/Java/NIO/NIO/index.html","dcb969878f3f07870b199835c8338967"],["/2023/03/14/Java/NIO/Netty/index.html","c626341b72905185828c8132d75dc934"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","7e3e49bb1a45b82190deea8e7a2cac21"],["/2023/03/17/系统设计/分布式系统认证/index.html","1f3a93fb0e968eb55145e6b8977bf885"],["/2023/03/19/Java/JVM/JVM概述/index.html","93655b32c84383b7cf8e6f882a93183f"],["/2023/03/23/Java/JVM/类的加载过程/index.html","423c0947b3be74abcafc066cd0d07116"],["/2023/03/28/Java/JVM/对象的实例化/index.html","eed5b0dce1da5040dee74eaee13527f2"],["/2023/04/01/Java/JVM/运行时数据区/index.html","a6082a576d9fc4822074849a57fe1058"],["/2023/04/04/Java/JVM/执行引擎/index.html","bff4b413df9dbd2842daea05e0cc9969"],["/2023/04/06/Java/JVM/对象引用/index.html","071183889485238a51c5f8348eede480"],["/2023/04/09/Java/JVM/垃圾回收/index.html","572373599857b84414be0eb8962dc028"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","71c824994a97bfc9518d5b66599af6c1"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","9a6101ef241bb1377a0d154b3cdf1bc3"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","8e5c2aeb1fb2a1a9fef9259cc9df3750"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","0371724a96311d793494d1dd125edca7"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","865014f0d767776f8a9878647c8d5089"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","0d10c0ba040744f2a4aa9e266f7e1214"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","16aeb4cf44f5b94f0605662d2b8d235d"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","ac12c9c009e69d420351a2185a0edcc2"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","6fe25b9b501379720dad8018068e72e8"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","4ad10d183d930b010bbaee335bf6a889"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","7192b0b7c3a1ffc33e2b5baf6a23e702"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","0618fbc07bfb25f64edb991550955318"],["/404.html","ca6fc92923f58974a5e2db94e9b2886d"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","ab661777174d0d4b4c067a05446223ed"],["/archives/2021/02/index.html","9e9bda462a92447a65f0fc6f80b71138"],["/archives/2021/03/index.html","405705ad1cb1cbea270fcfaa36b22649"],["/archives/2021/03/page/2/index.html","08d8afde43ac9fbe6102373a3d68452a"],["/archives/2021/03/page/3/index.html","755446ec93f211370431302fa61ba22c"],["/archives/2021/04/index.html","31f267143b6c399192b01c4d5883f910"],["/archives/2021/04/page/2/index.html","37608311ee997c91afb86aa7674b905b"],["/archives/2021/05/index.html","c72f10ae909a52dabe7e95cf08562b21"],["/archives/2021/index.html","73a6c65b44e4a555d37c6d044b10fba2"],["/archives/2021/page/2/index.html","17fb082c73740ef040e2da162f03ef9a"],["/archives/2021/page/3/index.html","d92264894ffaf7cfae2ef0cf57d85091"],["/archives/2021/page/4/index.html","f1ed63682f347ca579219f392ccba825"],["/archives/2021/page/5/index.html","7d323f41606cf9153a0d042facd6e7fc"],["/archives/2021/page/6/index.html","e421d9f4fdc887adc540a0b9489a812b"],["/archives/2021/page/7/index.html","15cf3d1331fcbb788735ba2aa8e57ec5"],["/archives/2022/01/index.html","11029aeec695cd4973a394cccc0683ba"],["/archives/2022/04/index.html","d6ca0dfab6c13e75b26271bbec6e62d4"],["/archives/2022/08/index.html","4b3347b45cdf54b32f3de1ff747205df"],["/archives/2022/09/index.html","4d983737fd222f8319cdf4f849ea4dd3"],["/archives/2022/09/page/2/index.html","16e0b3d84c290c8e4c1257238127a421"],["/archives/2022/10/index.html","11267d316b35afa90edf5561eca8df62"],["/archives/2022/11/index.html","a876ece66413506a19e73de4ac6728aa"],["/archives/2022/12/index.html","b7eb51294946979f5e4c5bc551748008"],["/archives/2022/index.html","43e4ae3653ed292785d471b3d2a8a140"],["/archives/2022/page/2/index.html","4604bfc6772eb51101c9a925332700ce"],["/archives/2022/page/3/index.html","424cf10f0e4b04679a1b67315b980c8c"],["/archives/2022/page/4/index.html","991ff32bfe6944215c3fd12901de8300"],["/archives/2022/page/5/index.html","52e5a05a2feadcb8959ce07148f305dd"],["/archives/2023/01/index.html","edfa1b108da0f041c4cbf9e6b4ae28aa"],["/archives/2023/02/index.html","803de21fd14b115071b6df1837994776"],["/archives/2023/03/index.html","550234e05c07f2bff3da0dd37245f6d0"],["/archives/2023/04/index.html","4c16a1f4b7acf755258c1bab2f6e87e7"],["/archives/2023/04/page/2/index.html","2c334411e6978bf92dc3e0fc342d9160"],["/archives/2023/05/index.html","d7d44322e3cbef914712ec1a6abebbe1"],["/archives/2023/index.html","f3952d819ee55eb3e1d63e837313ab5b"],["/archives/2023/page/2/index.html","aa022c8d2ccb43ba8770fd75041ce012"],["/archives/2023/page/3/index.html","7ce05bf89229b54447072a0a41567f87"],["/archives/index.html","0f3393a640f114e45db526bc94aea024"],["/archives/page/10/index.html","2a2e606b462d17b5535e1dea4f53808e"],["/archives/page/11/index.html","4b8307122eee6f1b1d8a9f51f46c699c"],["/archives/page/12/index.html","dcdca03177a880d6caf9b23177b117a2"],["/archives/page/13/index.html","c0acc7756ccae397150e4694f717a22a"],["/archives/page/14/index.html","cd5e71c4249ccb132d90d1a966ecd00a"],["/archives/page/2/index.html","7f8c309b27b73a1bbcc8bca500f5025b"],["/archives/page/3/index.html","28e26814a281952b6fe1d87e21a8251e"],["/archives/page/4/index.html","c69ddbe103c96b6cca341b5ca3b977fd"],["/archives/page/5/index.html","3a6dfce22eded019a7cf5f3a212f9b4c"],["/archives/page/6/index.html","7ce6d853f58aedbefe0852dbf93c73d7"],["/archives/page/7/index.html","1839f22f9c801c583b4ad9d333952340"],["/archives/page/8/index.html","a6a22fc92fca110cb1af9cfa9d3f41c3"],["/archives/page/9/index.html","8f3f713eb910a1d4c321031071b0c9ba"],["/categories/Devops/CICD/index.html","d7025e01500bff1e38b3af0b6bd988e7"],["/categories/Devops/Linux/index.html","daba99e238f24b4f66bfebf578bc2f52"],["/categories/Devops/index.html","6e3ea487b87d03b3ddfa4d147b5ffc01"],["/categories/Java/JVM/index.html","bfd7ceacca8854fc790bacd096a33711"],["/categories/Java/NIO/Netty/index.html","03a834956f4c4d7d42043fb44c0e6470"],["/categories/Java/NIO/index.html","f6712e87c5a69bd4752c19b287910016"],["/categories/Java/NIO/原生NIO/index.html","dc8320950cf89b79847d8e42a0a756b7"],["/categories/Java/index.html","3f21749e3b9b792a3319fef7e6f045ba"],["/categories/Java/page/2/index.html","ecaf11718720016abee2bea2538b8535"],["/categories/Java/学习路线/index.html","5a06ee9b2a87ec8b0cb82fd818a3d6b7"],["/categories/Spring全家桶/Spring-Security/index.html","0b387b5b5ee443ff8101c9063fd42a97"],["/categories/Spring全家桶/Spring/index.html","0216364417b3cf99b445ec01eec68115"],["/categories/Spring全家桶/SpringBoot/index.html","489ea5e939e02c0d8fda9e3940a12641"],["/categories/Spring全家桶/SpringCloud/index.html","939102ac8e0570fe6f16fc0d63b1ad5f"],["/categories/Spring全家桶/SpringMVC/index.html","53c40d5a7f57994bf05558b27edcf00d"],["/categories/Spring全家桶/index.html","6294656c0a964724c42549da21fdfef6"],["/categories/Spring全家桶/page/2/index.html","6fc6cdc267d26c3b0549916003882b64"],["/categories/index.html","08c0d8ebb25991d5a719a37f8930b258"],["/categories/中间件/ElasticSearch/index.html","33adbc85a8296cc018a5fd16e9255074"],["/categories/中间件/Redis/index.html","0c5473b330f3be5ad8074897bf19764a"],["/categories/中间件/index.html","09c2478b09bb1a330ab4124317955ddc"],["/categories/中间件/page/2/index.html","a60009496e434a50c9f16819499c7046"],["/categories/中间件/消息队列/RabbitMQ/index.html","a9c82de478b42a2591dc06f7407c9964"],["/categories/中间件/消息队列/index.html","40d0bcc32205321807f672ea1b5bbaec"],["/categories/前端/Mock/index.html","ed4772a393be85e9030db05ccd90e665"],["/categories/前端/Promise/index.html","75ab378ba698d79a842ce3138813abb7"],["/categories/前端/Vue/index.html","9b133bdeab5d7f951a916de141e8f952"],["/categories/前端/index.html","b7133e65b0792d364acac121fad471da"],["/categories/前端/jQuery/index.html","37bf406ae6e83c0ca720b932a4f9dcbf"],["/categories/前端/page/2/index.html","10b94eca40a513d007f74d702b280dc6"],["/categories/前端/原生基础/index.html","3275778e89790f3d4a7ba13f296bb50b"],["/categories/前端/异步通信/index.html","1f78680a3ab81df109050063a3f7b54c"],["/categories/工具使用/Git/index.html","ab04c979b18dcf1d2b5c5a886170326c"],["/categories/工具使用/index.html","347a5c756c3964acf9c53bd0385c4037"],["/categories/工具使用/markdown/index.html","1d99e265f7012c065d87c61843e992fe"],["/categories/工具的使用/Docker/index.html","e37f85869bade72c6a2f358058cea94c"],["/categories/工具的使用/Nginx/index.html","d9e147b045f87192ea1a12f6bea7cfec"],["/categories/工具的使用/Swagger/index.html","ac4c8f8a23838f9de21891d103ded571"],["/categories/工具的使用/index.html","71aa667381acab3fe8409b700585f150"],["/categories/工具的使用/博客搭建/index.html","3cf19c26011e092cd59aa925be26af4d"],["/categories/数据库/MongoDB/index.html","b44336c7e3c1684c2501f8dc82035c62"],["/categories/数据库/MySQL/index.html","9aae222e7d4612ef9a5f6c9130866fdc"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","57e2a1c4ff94f54c7d12e0b6645cd789"],["/categories/数据库/ORM持久层框架/index.html","8d7a88489d374208e1ff8952e5884d36"],["/categories/数据库/index.html","5602b08b6a1c39782230827e70b42bb5"],["/categories/系统设计/index.html","4e1e52217ab177f2d31886c010870c91"],["/categories/系统设计/page/2/index.html","e31ad7789e022dd6d45ca0edcfba4edf"],["/categories/系统设计/分布式权限认证/index.html","b8789562d49d64f3b178cb9e1356a032"],["/categories/系统设计/设计模式/index.html","ee6863ccbf580458d28f52b9049501f8"],["/categories/系统设计/设计模式/page/2/index.html","6826113eda829656f8103285013f4249"],["/categories/计算机基础/index.html","fad0b489e68645b50c28c258d546e49f"],["/categories/计算机基础/page/2/index.html","0e1685fb71fe015ceebbedd71fc14055"],["/categories/计算机基础/page/3/index.html","78c443a32168161a2d9be5594b0065e4"],["/categories/计算机基础/page/4/index.html","0d7f0de06c8921b89ff772fbe3c2a152"],["/categories/计算机基础/page/5/index.html","67956f84d3b163a11de5e208f61948be"],["/categories/计算机基础/page/6/index.html","a4d27dcd9fa3e2eaed6b812d0b5b6132"],["/categories/计算机基础/操作系统/index.html","7c887576e959e376ef0a028bf001e2c4"],["/categories/计算机基础/数据结构与算法/index.html","f925a9d045b233102a2b4ce66487fdd5"],["/categories/计算机基础/数据结构与算法/page/2/index.html","cb62391d22696891bbd1fc1cdde09df9"],["/categories/计算机基础/数据结构与算法/page/3/index.html","d7b7ca0ffe275b372b5ce7e159b6bb4e"],["/categories/计算机基础/数据结构与算法/page/4/index.html","40189487580cd5e7fe96738a9d54d5e1"],["/categories/计算机基础/数据结构与算法/page/5/index.html","6ad818d18e6d05c9c490397481de271b"],["/categories/计算机基础/计算机网络/index.html","730daf9946d764801fd3d26e94c9eb66"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","3415b2ae3ba460f18d68e30ed9931005"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","2ede8d37fe49b094abfa6bcdfd20d5fb"],["/messageboard/index.html","27d3a0705c893d41978e1fa488479d2e"],["/page/10/index.html","14d6b544d93bb0f5f94675b905f3ffd7"],["/page/11/index.html","9c076108d8a56ad625d3deb9251b9a6a"],["/page/12/index.html","dbbfe9021c26f33dadbeb7e4b240fba1"],["/page/13/index.html","032cd00f1c8e7519069e15f26b99ee50"],["/page/14/index.html","1f46280c010516dc2400791026ceac8d"],["/page/2/index.html","4eac012efe4bbc8074ac64cff1be8663"],["/page/3/index.html","431e06e3d6358f988693235137ad7320"],["/page/4/index.html","64a34c1b4ae9c40a18a0c2fdb053ad98"],["/page/5/index.html","0507b61a190b3664ff6c03c25f4e0e52"],["/page/6/index.html","86a79cc59cbae73a6c0c3dffa4e07cdd"],["/page/7/index.html","11a8ca167494485054f781709e87c115"],["/page/8/index.html","79a260d252d69a8e7961fa0f653ebad0"],["/page/9/index.html","f20f2341b4379765964e17e58d791cce"],["/sw-register.js","c6d8832b46e4ef0cead1861b73cf9f48"],["/tags/Ajax/index.html","63a3037dcf17c465fd7cc0f109b399e7"],["/tags/Axios/index.html","035de975b40285d03711576674b6a323"],["/tags/CICD/index.html","69a0af7f9f70bdb28737d3c9b88132be"],["/tags/Docker/index.html","f512c8b7e3619270380730afe00a85aa"],["/tags/ELK/index.html","ce309e49a85d25592d51d95077d28624"],["/tags/ElasticSearch/index.html","bf54e2cc229d6ef4fc17f5061efe171a"],["/tags/Git/index.html","c8fb7290abd5006f5fa7a30e4f0b1a31"],["/tags/H5/index.html","15e2feacbaf0dcb9a0feae0cbc8cd981"],["/tags/JVM/index.html","e8cc4b56d1636facc733eed5be69a1bc"],["/tags/JVM内存模型/index.html","18fc626496fdf91d20a429539cc7f4b5"],["/tags/JVM执行引擎/index.html","c24a9070086354b508a0b21f3245f07a"],["/tags/JavaScript/index.html","4bb2442da05125d71827dd50a823d03e"],["/tags/Kibana/index.html","fe6674c12bc2e9dea87491894f6d6d49"],["/tags/LeetCode/index.html","4a2f86107d6686ee65ab7c8bbacba1e0"],["/tags/LeetCode/page/2/index.html","f9ea174f4bd4db8dafde981c07b23be3"],["/tags/LeetCode/page/3/index.html","ed24b7add2e5de7a3ed6bfd436666872"],["/tags/Linux/index.html","4fa4231c04b4985952701141d15c3c4a"],["/tags/Logstash/index.html","53da9c83703932e2ac88cf195d4b754e"],["/tags/Mock/index.html","9d2517b1050aad52f7244292e872e17a"],["/tags/MongoDB/index.html","a7188a14617928f0017b6bfecaa54670"],["/tags/MySQL-数据类型/index.html","5e1c77e36111c695227eacc60d01fc0d"],["/tags/MySQL/index.html","56f6fcf97d11563e9973f4254806c0e9"],["/tags/Mybatis/index.html","9365cdda975e1bc86d2064e95e2e7246"],["/tags/MybatisPlus/index.html","757f8f32fe0526943a2a9a32edffa106"],["/tags/NIO/index.html","1dbd09f8e055083970f9707e48225979"],["/tags/Netty/index.html","3f41bcc25959dbb2b4e84fb570032580"],["/tags/Nginx/index.html","a5fff4deebddcf6f5cb9595a8c6ea40f"],["/tags/Promise/index.html","66b3e6d0802a1df02ae719d65a5e3cd0"],["/tags/RabbitMQ/index.html","6a9e3b09ac5c9a892c1baa1df235d868"],["/tags/Redis/index.html","6168bc16d2a52405e99ba56d36c6af42"],["/tags/SSM/index.html","b0271c5f098ba82b5b6ec7bd4f30b2f8"],["/tags/Spring-Security/index.html","633f45cb99313ca379604a3026ffc734"],["/tags/Spring/index.html","2da0dd8415c7440bd594d945768986ec"],["/tags/SpringBoot/index.html","66c807bb281563254b61fda6c9d2e158"],["/tags/SpringCloud/index.html","4c06440814adeacb12ab1d83fbfce510"],["/tags/SpringMVC/index.html","535ecacb8d07ebfb455798f52b1c6a97"],["/tags/Swagger/index.html","06b91fb5fe3e7e136b417ad487c82b5e"],["/tags/hexo/index.html","1099dbd30f0831d1813e176d7626c16c"],["/tags/index.html","41b8cc01b64877dad063461c1a8cb3a3"],["/tags/jQuery/index.html","8882a7da8ee55ff8f9103a2c267a9a35"],["/tags/java/index.html","fcde9d1f0b9b8b979d99d72b26ed1442"],["/tags/markdown/index.html","84707b7af92ea0871df31bafbb4faa3d"],["/tags/noSQL/index.html","4cd7837d25d94b22278150e3fb7ff60b"],["/tags/typora/index.html","445f36a5ccc4264753d54aed5118122f"],["/tags/vue/index.html","e8fa6c57c016b45d344a2592fc463606"],["/tags/享元模式/index.html","dd743bc1a2aa6fb5367faa0067913418"],["/tags/代理模式/index.html","3651ec9d866766cda002c3fa0eadc1b1"],["/tags/内存管理/index.html","1a7158bf968e14aa69a26377cac235d6"],["/tags/分布式/index.html","6272c9a32800fcfa551ba5cb09b62973"],["/tags/分布式系统/index.html","328eb8571485a129b81056bc3952e909"],["/tags/前端/index.html","3b70925f5350a5e6900d7e66c1976e39"],["/tags/前端/page/2/index.html","6875686ed111bfa6da2e182a24f10d44"],["/tags/博客/index.html","14a74167f75cac10560ef7293f6a15e5"],["/tags/后端/index.html","084bb63c872d8db23ae8fbc5ba3ce005"],["/tags/外观模式/index.html","92c5596d294852867a9ecfc724468cba"],["/tags/容器技术/index.html","69cf9139a83d15271e7c9d512f85eb2c"],["/tags/工厂方法/index.html","d8b7cfab05f7cfab2eb043375e038083"],["/tags/微服务/index.html","7c727f04f522cad32b8ca3d149e7515d"],["/tags/抽象工厂/index.html","9eb827ab1a4bb5381c558a5fe984456e"],["/tags/持续集成持续部署/index.html","ff5b7995d39991bed6a3640ba06ce410"],["/tags/搜索引擎/index.html","df94a90326147ac8b4fef36525d87dcc"],["/tags/操作系统/index.html","5e4e5c5781b82625fe3ee1d74a6e0f1c"],["/tags/数据库/index.html","c1c9e93189c6bba81a1d4fdc2a5721a7"],["/tags/数据结构与算法/index.html","dbe6545b30075ca74171b1f392926fb2"],["/tags/数据结构与算法/page/2/index.html","e611def818927493049f09bf8f6b64ae"],["/tags/日志/index.html","808b1ee241900f4fe2bb3211114937e0"],["/tags/服务器/index.html","5daa07ce65db5664a5eb3726c431e78b"],["/tags/权限认证/index.html","235d38af99d8f55de23c03e012b6a68c"],["/tags/桥接模式/index.html","759e8e00877a5ecc486cfa8a1854acf7"],["/tags/模板方法模式/index.html","f816b01348996752fc01c727d15a5eaf"],["/tags/死锁/index.html","a162ef66feebd7541eed9a2c30a07a8e"],["/tags/消息队列/index.html","bbffc2060bf41c64c24f1c67d10ad1ee"],["/tags/版本控制/index.html","6dce4bdeadeff84d8a499997f72bf663"],["/tags/策略模式/index.html","2ed91838dccd6ddb112918cc42b6538d"],["/tags/简单工厂/index.html","dbe6f8ce7e207a2afda990815f1e119b"],["/tags/算法/index.html","5288e0797f2c4c0a7f116487eb2fe8f8"],["/tags/组件化/index.html","f104aa827140d284ec4287b5efa4daad"],["/tags/缓存/index.html","55ed5e0d92e149f42520399f0c31f916"],["/tags/观察者模式/index.html","38d9dc28d6d73145330cc9f9792056ba"],["/tags/计算机网络/index.html","5fc985de0076d2cd0f0fe5fc468ce8db"],["/tags/设计模式/index.html","1043dfd35e70c3a7e5a3f11a1677b880"],["/tags/设计模式/page/2/index.html","cd828d2f1d6a4dca5e2852906326a0a1"],["/tags/进程管理/index.html","dd8d3b4ff3986b5900f5085d088feab9"],["/tags/适配器模式/index.html","12970281dfc17ab888059011b842b498"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
