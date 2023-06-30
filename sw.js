/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","47f0c1e19648880a2c1d95acffd2d939"],["/2021/02/22/工具的使用/博客的搭建/index.html","7c3e4c759a2a6290918ef7a09fed46a0"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","be595959926e547d2ec7edd11d20da97"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","4ffb93d113e94d092c03f246aef8eb54"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","fd91d472162b2303716db090eb46e3d6"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","d0140415c50c050be0e3bdae0151e5e6"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","7e8ae2dae242cf83d402813342d2f32a"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","cca38016676311ec891eeb9a41ae0b7d"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","5fe10420fabbedcb4a804e9c3340bb75"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","fd43a09e9e0918122318e0b3e9552a97"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","d6bba2f8ee6f2a81f84c0b7720ea4cda"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","517e497a6fe4274021138ee2b5eb2b00"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","d31e2883c09de10b5638b3f682db840e"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","cd1a1d746b58e75ac1475bccf2bc0c87"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","57711a3afe0a173fcba359ce9a3f10fc"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","50189f95c4de52ed8d48f4f7ba733dbc"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","36f7d0e75349d6e4fa824bb0c0c1ea26"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","24ac80c956008afa783f469dc205b01e"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","14e5c7c5114ab8b0c70c875fdd14a491"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","dc3afa111344107047cb991303d6c729"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","f1903675e092a267f4f90b77e2075f5f"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","3a07aaaf66e21d555632c3b4c7a0bdd4"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","fb60c9fa97d8d1aeca2b255bed5339fa"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","357da98ce25cf5eff8837c8c5b9ee620"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","8508665ef1012ed857711f297a2c46d4"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","bebc6bc2aa8e685e013d972bf32fd43b"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","8a789c48e18bd5c4fa3988626beb479c"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","6d320e0d7dea25d3c22826179d7bfd88"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","93b6bbdaea30a3cca17f3b600b80e477"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","4a56de24ff3479d06c84203a972ffbd3"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","61e385e25b8b627782916a7d2b35f998"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","1d9dd14cf20b8c84dd1e86cae998eed7"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","9f0aa268a1a466ab59d5541836269601"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","b71578b3dc8078820ca2181ad4491d8b"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","86ad1998b3eadfb0203e16ddd8412ded"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","077528b3da868d8927886a27c3a874b5"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","fc908c802a7b4937f20d6a36e2eeb7d6"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","710d48dd7483a4d50c2f09eb8ba547e8"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","f8b246d871a30cb5f4dfcf577a5b747d"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","ccd34e0b826ab4e8ee7fdea050cd7d6b"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","37a3b90cdcb3d10a8eda1c3851980ea8"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","d5e50842762e6690e9d359a0a1b05a77"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","427c9d63e21acd126e4a2c3cfb8b0fce"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","07d0c5f36f60ade766a9bf3129364c58"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","6521b5d7602367967a2d1102d12be790"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","10165e5910e98413ac8dcd1df020a35b"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","fb3af3cf80a255ae5e79a44c97aa95c9"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","eeebce448de2bec1389f7056ea221dc3"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","99fccc7ca9a116664ef255eb0426cb08"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","f19144a2cbc9233ba2ec99182fe31572"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","25d3daf6e9a045f82e447bf9d1b9512c"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","06451b746bc1abfdce6d33b3daf02b36"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","6ceea9fda846b1691d83367c9a5837a9"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","fae94a2ba1449e2d7efdb95b6361939e"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","1819e5926bfe33c3b63cc16595f6da5a"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","6f39bacac92c33047225fd1b64077328"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","233f589bc81f632561ebca7b6d2bc948"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","51ff361eda3173d1b54971ac537527c7"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","ba98e1b8865d2bb9c5c0a594b6c7be68"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","c7aaf7c7ef28ca63868d12a6af0bd3b1"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","89ffea76f537c95cb996bf5ca0c37cc0"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","6945d2a557c6657a43cfff8e03281f77"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","b611feaa961cea9bb0bc5efcaa3b99bb"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","0ee3481d2a6dc9971b19f460f4702079"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","5db8e61d6f3e97b74b412e7c455818bb"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","41bb9910d83aa3f1401ba6dbb5eecb61"],["/2022/08/17/前端/jQuery/index.html","f615bbf2284669130b3bcef3b462544c"],["/2022/08/19/前端/JavaScript/index.html","3072d5e6bb5f3c0b620041dd75487c22"],["/2022/08/22/前端/Ajax/index.html","5592f527b0ff046d6ae39d4f36dd2ee2"],["/2022/08/23/前端/Promise/index.html","732afd59664510f388d0751ea7fb2b09"],["/2022/08/24/前端/Axios/index.html","bf105b8212332863416eb1484c9face2"],["/2022/08/25/前端/H5本地存储/index.html","9a30fdc9f784252c78bf309d1a825876"],["/2022/08/26/前端/mock/index.html","60a17952612c486025c1d275e66abc5d"],["/2022/08/31/前端/vue/VueJs/index.html","f980162e9f762b7ecacb79a5743870d3"],["/2022/09/01/前端/vue/vue组件化/index.html","74b9778bcaefab1195e39d6d60b5dae7"],["/2022/09/04/前端/vue/VueCLI/index.html","4ca2099b607a6cbf920983746a132893"],["/2022/09/07/前端/vue/vue实现动画/index.html","e51d3d1b43b25c73315dcade8754fcbb"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","50be5fc321becf64e68b0bf678435de3"],["/2022/09/10/前端/vue/Vue异步请求/index.html","44653e3816d62e09811d7ac9e04de6b0"],["/2022/09/11/前端/vue/vue-Router/index.html","ecf4f300c913619092aff6a10ecc5d81"],["/2022/09/13/前端/vue/Vuex/index.html","64f30c50b3ec73adaa0a6b7efd52be78"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","85da4b5967dd3b488e78663c2230a5b7"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","d97519855702996bfaa11a7bdd4a7f07"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","66a3204ebbada1d9913e15bf533a1228"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","e7b340c2e5582a90b1b7eea0dbdac45f"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","2cad2771c04553a62bdfecbcb26be9d9"],["/2022/09/28/DevOps/Linux/Linux/index.html","6843e7fe0c9974e82fb974307d852567"],["/2022/10/02/中间件/Redis/redis基础/index.html","98bad826cedd35351b9127ce92cf492e"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","bb292995fb075dd47c96b4a96002eacc"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","193ee2b0ada1d0f7a57a5777f497371c"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","a7acd271fec393c231293d5f68a78db6"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","9dc4a2d8a0ea76d9e57c8a40f0ef4436"],["/2022/10/17/中间件/Redis/Redis集群/index.html","5badcc3c5473036397dba8c9f3518308"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","f66986800f01be3cd87390ba2cecd012"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","0f93ef30248ab9e9f07b243e8a2a90a9"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","24f03fd9790bb61de575b6e9c0f4ad74"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","5a506e17d793f9d84784f03dbc2904b9"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","a20eac97d7c0c7b299ab09ad36a93b1e"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","668c337921bb0d76210379d0c7c1c1fd"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","ac120476daeb07b5fb885e8fd393acd0"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","47f613b0fcab324dbdd572f8c1ce239f"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","f213f7a4abaa1eb19def46cadfdb2804"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","76e6e974202373716341071530e26f63"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","2685ed3234403a3223f85903f561811b"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","5e97420bcbe5276a36df3071ca8fa9f9"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","364d4932b328f7aec2b9a0b2f44e0a76"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","b36bbf8f21f4e546e1280e597ccaec70"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","29f77d8bd24b2d52a225066869cb9984"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","3d92a9b58f466f45fb38082c64d42988"],["/2023/03/10/DevOps/CICD/CICD/index.html","07035df695a967b537500c9d57e05046"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","bfd5e7e2a467272db32730ceb5fd9fc4"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","0af7a88439e13a3d85f48a669432811d"],["/2023/03/13/Java/NIO/NIO/index.html","9c7988cf3b1f39f2dec5169256608d01"],["/2023/03/14/Java/NIO/Netty/index.html","6804dee21b12b4e327d19b691cd70ef8"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","a86e97408d741cd944a362ded52b77ac"],["/2023/03/17/系统设计/分布式系统认证/index.html","43d68039ad0d8b35b007dc911d83b780"],["/2023/03/19/Java/JVM/JVM概述/index.html","72d3cdb7550aaf4be1e07e7eb9365524"],["/2023/03/23/Java/JVM/类的加载过程/index.html","51515acd62cfb739e37c59a8bcc3f23f"],["/2023/03/28/Java/JVM/对象的实例化/index.html","6950414d48328f360a3ed35a2e559e5d"],["/2023/04/01/Java/JVM/运行时数据区/index.html","3be2d9f506a7572cd63aed91de31bdd4"],["/2023/04/04/Java/JVM/执行引擎/index.html","5fba12f25fbbfa0cb53fdb3996269a0e"],["/2023/04/06/Java/JVM/对象引用/index.html","c7e0a95cba1d2fc3b20d8487bf209286"],["/2023/04/09/Java/JVM/垃圾回收/index.html","73bc1d7da69745fd05ec54d30682586c"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","5fa27920d007eb2f5ae6bc2c295b855a"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","2e22d8b792465722067c500f88e638b2"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","5619a85d07803c854ccbff22d07767f5"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","c8d82f1ef936877383f91289ce03e221"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","63d8583f83cdfa8ff78d7ba14b23c75b"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","08a683ca762979ca9baec879a4320fd7"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","771697c3a4f4aff5a05a2b9a08b8fa0f"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","079353dca79afbaf4f675235be56ecd3"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","3be72e2d3d617bd7ca32acf9e0d5c5d4"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","483c370d97241d7ca898b9ddc8937c4a"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","ca4841ebfcba8b78911b8150f0a5f66c"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","ba5ef56be261969f31f384ee023ca294"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","706fb45f90986168fb3c984eae758417"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","11b930587f882a58085c2b37e3cb11cd"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","5d28cbf2d25b32f273565d707e7f08fc"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","7130b3be2622e426d2d7cf0de9ed566e"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","cc9af29fcdd437d597a09b6d1ee4b529"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","9830e8564a2da04edebed1077397dc05"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","ef135d82d181995271a594d3aaae2849"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","57ac6295d3c74cd054acf76645155f65"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","c9f920a6c87d39ad5b5de8f4c84c0841"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","61220cbf38b0ed42041666ce2029da43"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","6d6592fef4324c8ea32e5854bfc0cc72"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","61e3ddeeed64c49c267153fbe873dcf0"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","14d6ed2289735931f8c19ff36cc3c993"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","cd4d12d5bfb750fda346198df8f66fdf"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","258bb5f31e6339f00aaf9d140eeabd13"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","bcdff7805fbd1dab9e08788de7f8cbcd"],["/2023/06/30/MySQL锁/index.html","55809b30796b322458d47f8187f88fa4"],["/404.html","ffb7833e79cfd9bfdd26eb2f9f42eb28"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","0805cd29d6c387444338e9ae3474527a"],["/archives/2021/02/index.html","bf07a1bea3f6e3b50bfa87ef9d0cbdfa"],["/archives/2021/03/index.html","d33a74b8235a573ff55bbe1846ae0b62"],["/archives/2021/03/page/2/index.html","739ea98b16026e193921eb9ff560024c"],["/archives/2021/03/page/3/index.html","275901182cd1f5a1ca43452a6eafa96b"],["/archives/2021/04/index.html","a25ccf2849fad1732225e1cf9a22e01c"],["/archives/2021/04/page/2/index.html","1d4ac61f36b5d6818df1ab12f0acf3c0"],["/archives/2021/05/index.html","455417b5f77b9161ecfc377f405df27f"],["/archives/2021/index.html","f9f6833c61b6ea9e63e8da6e8f42e49f"],["/archives/2021/page/2/index.html","298a8d311ef3c8f6411f56320aa83dc9"],["/archives/2021/page/3/index.html","bbb9038e5b499234fa37a3f222c4baca"],["/archives/2021/page/4/index.html","78c0030ab768da242ac52f8169e12477"],["/archives/2021/page/5/index.html","3c9f2a9c7b28f116316f8a6ab3d66f8a"],["/archives/2021/page/6/index.html","28618edf82b5dfa3865f8bf15580f3ed"],["/archives/2021/page/7/index.html","07f218461bb0690c79ce2470b4720d3e"],["/archives/2022/01/index.html","ce03c6ca54619d3aa04e5c07a7527dae"],["/archives/2022/04/index.html","185c7061fa9aa56fdb49be0fc8d0a37e"],["/archives/2022/08/index.html","9a8e5ecd2a1a07ad7848efe35f8e9337"],["/archives/2022/09/index.html","740df3af7aeabad8c24173b288d95fdf"],["/archives/2022/09/page/2/index.html","eec85fc1fe6096142e65bd5adace7b67"],["/archives/2022/10/index.html","0cb4f9872b293391d4b92ec504e3f6b9"],["/archives/2022/11/index.html","560e6732dad1c302251193b9f6b4917d"],["/archives/2022/12/index.html","441109e07e1427645d8cfa56afca76c8"],["/archives/2022/index.html","6899f6f3a0b9151cb5b3398e05ca4daa"],["/archives/2022/page/2/index.html","5952a3eb2c6725091b5b8da89d6316c7"],["/archives/2022/page/3/index.html","fbc9c7ce9696abbe04d2e28093ef3f76"],["/archives/2022/page/4/index.html","3428e21bd83be60c359f642939df1fdf"],["/archives/2022/page/5/index.html","02f7d698e16d0f4e7e09e4d756a2b265"],["/archives/2023/01/index.html","19c9014918711154b00e7613f18e3137"],["/archives/2023/02/index.html","6e02204e6703cfdc161299ef1710fe7f"],["/archives/2023/03/index.html","f09e2c41c33a82c5b71b3204c396218b"],["/archives/2023/04/index.html","9425e83a7e64a56070d424c15a61fe01"],["/archives/2023/04/page/2/index.html","42ed13e587d94e479ed3e724c1cc766a"],["/archives/2023/05/index.html","5d70ff6ee5dfcc47d755295db69bb936"],["/archives/2023/06/index.html","e0a4ad2cdbf28e99dd190a83efdde991"],["/archives/2023/06/page/2/index.html","ef02a834cd4c0c0e904d9258498ee732"],["/archives/2023/index.html","733e33acc7c6b9ea0e729b5e8d5bc106"],["/archives/2023/page/2/index.html","630698ad51837d61ae2e4984bbf449e6"],["/archives/2023/page/3/index.html","9831a3ae2294def78af15cba8362685c"],["/archives/2023/page/4/index.html","941bad3fe154176ddcabd3b8024c41e3"],["/archives/2023/page/5/index.html","2f2e4362be360e030910d15ff8a4ec8c"],["/archives/index.html","7dfcaa543527e698e70a66492035ab0c"],["/archives/page/10/index.html","6f53b6fc2790a629c844ccf6ac06a155"],["/archives/page/11/index.html","53341e7d8009f0c015268d3cbf457417"],["/archives/page/12/index.html","e6ab02bc1a30007d2156f7c7bbae41d1"],["/archives/page/13/index.html","acd7a1ff56dcd56fddda44c224a8e8be"],["/archives/page/14/index.html","3cbb156b5c91ded83c963b26a5c468e1"],["/archives/page/15/index.html","9096a111c7d86521b093f1c4522dcc49"],["/archives/page/16/index.html","19a01b878d53e87fa17a11b34f828882"],["/archives/page/2/index.html","29b7f0968fd369400e1496a9a980c42a"],["/archives/page/3/index.html","8bda10d604b5d336399bfd22dd474794"],["/archives/page/4/index.html","276eaa5005e71c620e75faf1906b83f9"],["/archives/page/5/index.html","dd89a70f3942604239dcc40cdeb2b708"],["/archives/page/6/index.html","12068920c597102f6d38918905e3e0d1"],["/archives/page/7/index.html","bbd4f77207b97039ac2323c0e128ab52"],["/archives/page/8/index.html","5fdeaca76ec1a44db9bc34ad61806ced"],["/archives/page/9/index.html","9f501766f30042bec1ded57438abfbcc"],["/categories/Devops/CICD/index.html","9b133f75e2ad39b8522ed1caab50123d"],["/categories/Devops/Linux/index.html","d032365ee665157681c0ec3c6e686713"],["/categories/Devops/index.html","821f35a43ffbc1a017e4fd255556cc4d"],["/categories/Java/JVM/index.html","913d5d0d30fdbd2b7342032979999f85"],["/categories/Java/NIO/Netty/index.html","920d17fbc11dce9ec500a747108d5940"],["/categories/Java/NIO/index.html","0565e9bf1bf4254066b5cd2314b6bbc0"],["/categories/Java/NIO/原生NIO/index.html","a01d9bdd5701fbbe9fbc57fdc2a76d65"],["/categories/Java/NIO/文件操作工具类/index.html","4df00c7fdc0db780d61c3d4bdff0ae7c"],["/categories/Java/index.html","d276020996f2e73a116e48cc425268e8"],["/categories/Java/page/2/index.html","b9fcf2d433f9ad511d69f83a2c33d1cb"],["/categories/Java/学习路线/index.html","3f84eba9ae92625f910ae25edb8a8fd9"],["/categories/Spring全家桶/Spring-Security/index.html","9ca52324c1a46fc62f31283ff45a7e88"],["/categories/Spring全家桶/Spring/index.html","8f0eeab1753d0b4264feb5b0b8859cd4"],["/categories/Spring全家桶/SpringBoot/index.html","2a94fd188ee5052b8a21dacba8299499"],["/categories/Spring全家桶/SpringCloud/index.html","688b81194744e3b4c36b2629ebcbc0ef"],["/categories/Spring全家桶/SpringMVC/index.html","78ccd41d3be45093af81cd781363dd6c"],["/categories/Spring全家桶/index.html","b13f57d0ae4759c81babe441b2384850"],["/categories/Spring全家桶/page/2/index.html","5ba0bc4db355a8a73913242f18e7d845"],["/categories/index.html","687f996bfaba29cc65fabe429731169f"],["/categories/中间件/ElasticSearch/index.html","390dc05a019ec17a80a4267cb5f2a009"],["/categories/中间件/Redis/index.html","5411b16eb5138d9eaa913f3633cf248d"],["/categories/中间件/index.html","7296fb76e94e80a07f22c9bd40a94770"],["/categories/中间件/page/2/index.html","4b16e57ba58926ee060e2e492823a8ba"],["/categories/中间件/消息队列/RabbitMQ/index.html","71d1b6ee9687d5b4b40fc96eb42a1201"],["/categories/中间件/消息队列/index.html","a1f433becd605701a50d9ec01f15f915"],["/categories/前端/Mock/index.html","c7c83d35d738114816aebfbfa646cf9e"],["/categories/前端/Promise/index.html","2e5afc1a77bb083047290d33885ffaf4"],["/categories/前端/Vue/index.html","5319b8478c424866ea44e470786eb935"],["/categories/前端/index.html","8f2959147da27b45a75390826ea24d4a"],["/categories/前端/jQuery/index.html","9d8980a3dc60f59998fbd962a6bf7a66"],["/categories/前端/page/2/index.html","4f02e66d66b986270ff5e07cffc00870"],["/categories/前端/原生基础/index.html","bc89292b8d8e05444f5914641a7a34f7"],["/categories/前端/异步通信/index.html","67d6ac6b5e626e876ca199f02aca25b3"],["/categories/工具使用/Git/index.html","81aa9c87f549fe02a68306aae1d0601a"],["/categories/工具使用/index.html","a9e650ed3fffd814ffd549d4ba862a4d"],["/categories/工具使用/markdown/index.html","ef680c892d48d54fd097af9172d3dc2e"],["/categories/工具的使用/Docker/index.html","185e3954efdf13e63fb582de0899e43b"],["/categories/工具的使用/Nginx/index.html","f5396e87e2074f03ce22cc5df7da0a76"],["/categories/工具的使用/Swagger/index.html","b597e9066fd6ce804c1fd389fe18543c"],["/categories/工具的使用/index.html","4b54e67754c0c145a37238eeb5c61293"],["/categories/工具的使用/博客搭建/index.html","dc1cf632e02e11d0c377d12f45e57e4f"],["/categories/数据库/MongoDB/index.html","bcd3e844a55aaf35c3aa4acde48408e9"],["/categories/数据库/MySQL/index.html","fd35b8dbc3f3b0d811ee2269ec7bc885"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","6ceddabb755e49c05d69461f7c04df04"],["/categories/数据库/ORM持久层框架/index.html","6ac4227651a1e68d7ced6e785f44e6d7"],["/categories/数据库/index.html","1a8c0b85a200efc9371bdd24f9f4a13d"],["/categories/数据库/page/2/index.html","cc563dbc1aa0366c78878aaaf0fb5f87"],["/categories/系统设计/index.html","40a1077521a8150ff874bffe322d76c6"],["/categories/系统设计/page/2/index.html","ec62f57869ac2a94c46a59c09eefae39"],["/categories/系统设计/分布式权限认证/index.html","1a499c7e8231f20850e5457e2ea59e63"],["/categories/系统设计/设计模式/index.html","fb3184a0712f83bb84193fd856fa54f3"],["/categories/系统设计/设计模式/page/2/index.html","927260a2c59e914289b589e645f0b37b"],["/categories/计算机基础/index.html","e36615301498c838cd0a34541dda22e8"],["/categories/计算机基础/page/2/index.html","cff380e8cd2c9013ae3f98c3f7f3b7df"],["/categories/计算机基础/page/3/index.html","b5c51540c9356f7a74a82279482bce41"],["/categories/计算机基础/page/4/index.html","ae8231ca761911e6d2938a5521ea067d"],["/categories/计算机基础/page/5/index.html","a8899b5c6603eb7293c5219701fa20af"],["/categories/计算机基础/page/6/index.html","bfb5bea98f05c401661fff46802d9150"],["/categories/计算机基础/操作系统/index.html","e274fa6568948228b2449320559fb23c"],["/categories/计算机基础/数据结构与算法/index.html","eabbbd8e74248e79becdabcf2ddcab0a"],["/categories/计算机基础/数据结构与算法/page/2/index.html","09a317cb78d69aa0126a2d8662db33bb"],["/categories/计算机基础/数据结构与算法/page/3/index.html","ac2fee1d839d9ef3fc292f8cbeb39d50"],["/categories/计算机基础/数据结构与算法/page/4/index.html","a6f1a95b3f1993b3516e4903c881db53"],["/categories/计算机基础/数据结构与算法/page/5/index.html","b5d9b23dc6ad4d7b7e476e014746c7e5"],["/categories/计算机基础/计算机网络/index.html","507ddb1b0d5cfb30be31ce9f1e47ebe7"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","78cc39f858e7baac19e9022b324e8fe0"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","cd40f73fe007e5314e2f94a604d8fbd9"],["/messageboard/index.html","3527f59bb0801e3e4c65cea95503af4d"],["/page/10/index.html","27af3ce0967283fe0e830935e7ca1223"],["/page/11/index.html","a05922b3385715e0b65062306d300b2d"],["/page/12/index.html","eba6c774073d8679ae2ecbfe59b0d164"],["/page/13/index.html","7cf4aa807fa0ffa577a178d11d5573f4"],["/page/14/index.html","05d3820ed3e0a52996f9be08259a593b"],["/page/15/index.html","cc767e742ef6e404164f171acee68480"],["/page/16/index.html","70fd1a21446052ea2a8e8255d239be68"],["/page/2/index.html","09c189a18873e4a35f7c8614b32f72a5"],["/page/3/index.html","a6ccf258b4ab691a43a569f87c5276f1"],["/page/4/index.html","37921098f91fd13b9d1304a2975a6853"],["/page/5/index.html","c0bb32afcd12adb7ec6aaad096b8ce74"],["/page/6/index.html","f7b989adfe817b6a62b516dcb83ee36f"],["/page/7/index.html","047dfd23688aeb4b0abd5602aca99166"],["/page/8/index.html","7a368a3ee636a8c42ac8a79cd0606bcc"],["/page/9/index.html","e9d8a4db3b90d4f5a96c7b127d8c5435"],["/sw-register.js","13df42106327e1bc3d19fe1579f67cde"],["/tags/Ajax/index.html","9b28ebf4acfb38801b22c69665855761"],["/tags/Axios/index.html","de45ad8d5d7c5b20da72cc5700ee11cd"],["/tags/CICD/index.html","1180059073b78e5ff805357b23b1c21e"],["/tags/Docker/index.html","cb6105f456a2f97ad66735d1d7ab21cd"],["/tags/ELK/index.html","a9b6d79eb01c6e30ca3bb591de76bb7b"],["/tags/ElasticSearch/index.html","b161e55f2ddab9385a44fa055d793538"],["/tags/Git/index.html","d3b1f9963c3f11b8930fb605fc0d696a"],["/tags/H5/index.html","893a6e553b42251b5098c07988cc1bca"],["/tags/JVM/index.html","7425afad85946844608a07be3ed0e4bb"],["/tags/JVM内存模型/index.html","43f1bec339c6246449b6e6345659c048"],["/tags/JVM执行引擎/index.html","4d2bc37be720d812a4d307f2a126dc8b"],["/tags/JavaScript/index.html","65354a5b80057473f94e96996795c881"],["/tags/Kibana/index.html","7cf16001828d3766d4c1ea0a36185f3f"],["/tags/LeetCode/index.html","fe44ef1c0404984bb3c8dddb121b5e76"],["/tags/LeetCode/page/2/index.html","8fbd59a2aa666a711e54c2effc862c14"],["/tags/LeetCode/page/3/index.html","a999a78eeccb89be211c45ea32802fd5"],["/tags/Linux/index.html","f7dd6e0e17caeab7f7dd5a76366636d2"],["/tags/Logstash/index.html","fcb67ccec3b84a3b4d65603e9cc2bac4"],["/tags/Mock/index.html","b98df37cdc968f10e5396f6d7d2a4158"],["/tags/MongoDB/index.html","ed23915cd4b7532fe3d49afdbc5b9f7c"],["/tags/MySQL-事务/index.html","75e8cb68867c36743630a585cc4f5d6a"],["/tags/MySQL-数据类型/index.html","e69a4c5e3853c9c3886d9982c5e56886"],["/tags/MySQL-日志/index.html","701fe38074556fa8a70085bc5e1d3a6b"],["/tags/MySQL-索引/index.html","5b102f7f2874fa9d68fc00f75e8acd94"],["/tags/MySQL-锁/index.html","712ee7b1eb09af020eee2f3eedcb4643"],["/tags/MySQL/index.html","f14598525c84fcd1669f50e4d25f8919"],["/tags/Mybatis/index.html","9a52289cdc5e1858431a4fb496c2456c"],["/tags/MybatisPlus/index.html","f2d1559d8a91c75d25e0d5eba66d86c3"],["/tags/NIO/index.html","35e992e0507e824fdedbc4babcb134cd"],["/tags/Netty/index.html","4fe67a90005f96d0e844a20a0f3314f4"],["/tags/Nginx/index.html","9f0876efb3d3ee7af645c7eb188ce3dd"],["/tags/Promise/index.html","78cd80d803841177969f485fd53c8c32"],["/tags/RabbitMQ/index.html","634980e623a30b5006cc5215f28c8990"],["/tags/Redis/index.html","e7ab55a19f06a936993b787b16cfc0b9"],["/tags/SSM/index.html","66c51e053e0850f14f12995d42d6f201"],["/tags/Spring-Security/index.html","4a0f6482d3e98bb68dae4883b0ca99a4"],["/tags/Spring/index.html","beb1727f8cb06dce811b4094d13cd4b1"],["/tags/SpringBoot/index.html","6acc3937ca9569954edb26fc31c1546b"],["/tags/SpringCloud/index.html","99a4a974f6ba1f922a34cb9f6bfc889f"],["/tags/SpringMVC/index.html","59af66f37de1f88d8d2954428c74e57e"],["/tags/Swagger/index.html","99586e63a2dfc15bdff8dcc68f3736ac"],["/tags/hexo/index.html","ebe97be5ff17d256173165c4ea84004f"],["/tags/index.html","e00b65620a08a923727ae7bf76c0dc76"],["/tags/jQuery/index.html","18dbbf2a28dbc47f7eb9123fbe0ed64f"],["/tags/java/index.html","2b7e8e06401c01076db554a89f1ec524"],["/tags/markdown/index.html","c44ab2172a04bc081711719c29d0e019"],["/tags/noSQL/index.html","83aa5a50e9e9dd4d2c9be4b3be92bad6"],["/tags/typora/index.html","38d89665b79fd215519b2b957f9f828c"],["/tags/vue/index.html","1bb99016fbcc376b5b909bcf2728b432"],["/tags/享元模式/index.html","c5e674b15254f892a6ab8d3b61a4565e"],["/tags/代理模式/index.html","b7f23e2a70f8fd131409394853b9a31a"],["/tags/内存管理/index.html","6fac53a061bf358228b74d85fd380958"],["/tags/分布式/index.html","6e21046bbab41bb5bdff177db7f1cbf8"],["/tags/分布式系统/index.html","a2415b0b225874126d60d6ecbaf3d9ef"],["/tags/前端/index.html","951d868c01cb77f26c1e3bfb8f44fe17"],["/tags/前端/page/2/index.html","bc61d99272e54172b3e28993aaa0a036"],["/tags/博客/index.html","1160c092c35894e6ba6ee9b98cf20e67"],["/tags/后端/index.html","2ad9844db2a5de9a90e233d49423b1be"],["/tags/外观模式/index.html","123d2cffa6ee94d90759d5a9b2c3c7aa"],["/tags/容器技术/index.html","328d1ee4fece4d362a04833e38b456ac"],["/tags/工厂方法/index.html","fb52562192cb6f03f8349e19b2caba65"],["/tags/微服务/index.html","cb1896a3f48d95827eca15d2cddb54cd"],["/tags/抽象工厂/index.html","db35cf92db378323ffbc5ca727f37ae6"],["/tags/持续集成持续部署/index.html","dda30ab58cd5d4f96029ec7388c9dfc8"],["/tags/搜索引擎/index.html","2d7058f0bfb5e57cb676028c83aeb79e"],["/tags/操作系统/index.html","c1c3a29a978ef356ee321255735a5c91"],["/tags/数据库/index.html","fe41133ebc083f4429873bd645238e3b"],["/tags/数据库/page/2/index.html","dcd7dc5bbe29abc5d4acd507b9e437e2"],["/tags/数据结构与算法/index.html","80c8b75caa3537a43faa3533f93f350a"],["/tags/数据结构与算法/page/2/index.html","918aa13be4cf1cd3bab9317d8ba6a5da"],["/tags/文件操作/index.html","e99b1af41ab88701e8fa738e12a782db"],["/tags/日志/index.html","69c19fadc5cc7d0ce7b1da92c6713eb1"],["/tags/服务器/index.html","033ae31d776f0f7d6451e085f089514a"],["/tags/权限认证/index.html","aabd5731918af458ef819b6058f676e2"],["/tags/桥接模式/index.html","21e43759d07684d88fbe1c056474fbc8"],["/tags/模板方法模式/index.html","f2b7e9d501a0ed93d73574190eab282a"],["/tags/死锁/index.html","ff4e48dadb439dbf0afbe871a79b70be"],["/tags/消息队列/index.html","427123570460cf60195aabf577429cca"],["/tags/版本控制/index.html","144ce6a232aca06ef5720ecc83a908b3"],["/tags/策略模式/index.html","7bee75ddd735443b2f4481f6b39638c4"],["/tags/简单工厂/index.html","97c3eb3601e3393ffec0e8e40da0a218"],["/tags/算法/index.html","05937d7d7901e51bfcfa126b5b7a55a0"],["/tags/组件化/index.html","9a70c83fca071735c23c311c0bfbda0a"],["/tags/缓存/index.html","338846084d3a9da0776982ad94fc77d9"],["/tags/观察者模式/index.html","de4eb9e1ef3378bb53f2a66741a2367f"],["/tags/计算机网络/index.html","ab947220cd9e55bf867485f95c657efb"],["/tags/设计模式/index.html","16857fe078679c3f6fc9e83e214e4dd4"],["/tags/设计模式/page/2/index.html","14006bb168fdad689c5b9946a476f12b"],["/tags/进程管理/index.html","57e13e313e4400bd21c678b09d90912d"],["/tags/适配器模式/index.html","08b72f3b751aea2c4e31f6b968c05dc3"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
