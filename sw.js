/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","2345f6df5efa0b461af21cffc46e53ec"],["/2021/02/22/工具的使用/博客的搭建/index.html","0ec077fc530deacd185b4a148a68ae38"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","0724d34c39ce22eb10bac7ec7cf013d9"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","05137d2e86ec61af5e2b10a68bbd59e3"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","4eaba6755322ee5500d03047fedc1842"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","82daa741be9b3fc56ab5e8fb05897800"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","a3bebccac14e655983d50c3d4fca7f6d"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","ccb1363ef248e30e200bd83c12de49a5"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","1711f9c5c258047906412244d4276b0b"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","c236ba903d70244d761a82a79cad13a6"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","42f0cc20625cc383a094e348e69b0ca6"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","fa36e2efcc83da7b39d1a6acdf1556cd"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","4aff53a49210b25826073b6d31a3bdbd"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","b0f99afc9743f118d20b9b92a285e01f"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","80a27f16d166a8bd426d289dd43f6af0"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","9a2852d666a605e80104da663e03a994"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","031ba49e4c122e92bbc082b01246dcd8"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","a8c7eced20c7146ad1a0ab78bb1d0552"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","58d82a9790a3afd5e7c2837b62b1ee03"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","0f260c47a8822c9d059558eaa4e96bad"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","c0df668c1ff57450a24da600b9de67ad"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","8a1b8225fba675e9796bd52969a79343"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","6b1f726c97b308727bbc78d8bcd64a17"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","ee4a8e0d1af502be73be527be2d366c2"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","69f354ba81788ff66bd98b060e0244c2"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","4db51cf854baebcf1e028d151d68f46f"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","063ddaaa4b3f2b78bc83e0d4134bbe1d"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","6e7522975636c8f7ceaec1c5f9b8ccfc"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","e8cde3b8e314356787e3d7887c45c6af"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","8f5f4b1f27dffae6f555c74ce13d83fd"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","63cf0a67003f19a0d00cf63fc23f1775"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","e30914168e95877b34345ea2e7665a50"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","d757669b7b991b2bb055a17eb634870c"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","fda4350b032b940def6e2f0f7c9daaff"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","16bd4d6de3b8c0737e88ceb356b86440"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","c20437600aff7922224b08dbec59dccf"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","da00e30775d4ce7a8dcca008bfaccec1"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","7c070475572151707b4c17b53060239e"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","0997af9e77bebe336355e3646ff30085"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","f95b1801303f0952b8b65ad7eb88f612"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","07f3b2a44243c2a363951d93fe0c2999"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","84ffc72b3bb0993dc738ffc9c3fb19c7"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","d13c0d0e698109d48e3c0e4bd265be16"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","ea989da6e2b01fd6582a1a9441bcc635"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","0d1649afefe4a5136898b98ed3dd7af8"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","9994111b3a720b50ef4fc104d2e69f92"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","23149a2741d6a892db979b3295b9afac"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","dcccf3e50fd6558d1bd4988a5e58274f"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","f40178d367b2ff91c1684229e6dc190b"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","9e7ff0ad62ecc034448e5f2a66bbb074"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","80317f320900bce1288758e50e35554c"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","1198a67c9b779507896b298abd3f20c1"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","1b3d2090f605e6086a89421b019f5b35"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","cf8cb2304fa554e73a1074a17c2f62d9"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","035e86ea05bf0453abd07905017f6bd2"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","89f303cd00b0a1e2ea60e6a336245979"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","785a28c5597fab321ffd26d13260b9fe"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","3576769778dd3e72850fd0ce7932603d"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","e0d1df0492802ac4b7d3a0ebe83488e6"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","cba162f444d5dceb7b465fca7552e749"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","9c3b1828c7324b514b07d769bfc52882"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","c1adb528fc8ef4dc162a1b2de252b69f"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","b4f73f0b004271c3ecb6930c22a4f88e"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","ad76903cb903ba34b6b857a9536956ce"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","6257e5650d9b376c910e56b1ad6456de"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","80ad1a1eaf525ba2aee793b7a5227093"],["/2022/08/17/前端/jQuery/index.html","b937341f0479096b735c7b2d22262021"],["/2022/08/19/前端/JavaScript/index.html","ba25a5a2437a01b8dccce1986308f700"],["/2022/08/22/前端/Ajax/index.html","6c06be1774a9c2b3cb7d0660e687f8ac"],["/2022/08/23/前端/Promise/index.html","05828ee411d25d90149dc4af6773c34b"],["/2022/08/24/前端/Axios/index.html","2982582ebab5a7c03904830a10c68927"],["/2022/08/25/前端/H5本地存储/index.html","59cf31397261e39a218c85a2e05b6425"],["/2022/08/26/前端/mock/index.html","20c58e36eff400b14b82b75e46bf72e4"],["/2022/08/31/前端/vue/VueJs/index.html","678d793663ecddb67243b835321c8783"],["/2022/09/01/前端/vue/vue组件化/index.html","db2049da4779b8a5146b0cf6523eca0b"],["/2022/09/04/前端/vue/VueCLI/index.html","e6d8a4f62483d4814a5fe221b519e16e"],["/2022/09/07/前端/vue/vue实现动画/index.html","38cd24d5d72721d15e86f019ca7860ea"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","127251744b339b248b8380ff81c436f3"],["/2022/09/10/前端/vue/Vue异步请求/index.html","4e82a3d394d48f8793b48777e6db43c8"],["/2022/09/11/前端/vue/vue-Router/index.html","765f71d83f1df077f46dcea865c473df"],["/2022/09/13/前端/vue/Vuex/index.html","3301d2c1ff0d72d23aa9a8bc0d992ced"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","976cac5d2cbcc394a0369f61196461aa"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","c209463d2f2f4715360ac228bf3c4ecf"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","0623d6824c460cd8d3692f4890a04e78"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","c56509b12bcf02ff5b999a881704ba03"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","855da28e81d4785f1c770ca50084957b"],["/2022/09/28/DevOps/Linux/Linux/index.html","ee71c17190df3491cbd7aafd27ff1569"],["/2022/10/02/中间件/Redis/redis基础/index.html","9e24f7332ad0458899cce8f5235ab9d9"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","1fb198d0de7359cc52c94bd9017f22d4"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","e88c7a705538882a55ee021686ddb0c5"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","c8d9bdb282f47564f1328b68ec7fcd15"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","206fa3707a313bef5e8c4234f41fe19c"],["/2022/10/17/中间件/Redis/Redis集群/index.html","215dff2f7bc26dc1f65ab00cfc484658"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","ce133c5b441110c94de9b3a43822cb6d"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","0669747ee8b44a15870bd84687287949"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","d4390adf48c6842b2ade12d3d30d83bd"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","6fca55936b25dddb99be0209d5873b17"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","d7505659700f31238027b9e0cf21b16b"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","6c61794a644571a0c167e58f2aa7decf"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","51038278b43c2138c0a147a3203e9e56"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","5a0564f3d8126db2e1f6ce2ae574c227"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","501fb3795a334ddc1d9c15457ba14c63"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","c393838fedf6ae75304d4ce16da9d7c4"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","d9950fe6edc5ec05d2d54ef2110d3614"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","f40de522b55807257ecb8509bdfa21a6"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","8f460508a1ae1081c2cd73b4b910089f"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","2acc45aa491d878f14d3c2bd0925a319"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","74f0ff2b3f60238f6dd27e635f97f252"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","ecde5b167fcae9919d8651f6a1e40f3c"],["/2023/03/10/DevOps/CICD/CICD/index.html","7ba2a3bec9d7685d863ffbbd8d2bc846"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","2d4186c3b7159bd88d532e76e0c6ff5c"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","a8affeb3b61f39e0cdd6cdd1b8ec2866"],["/2023/03/13/Java/NIO/NIO/index.html","bd711f9a72b3d2f813d9728f4602e196"],["/2023/03/14/Java/NIO/Netty/index.html","3ac7e6605b2dea07cb49f908f696bddf"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","6ad1bb00ec79400679977ca8d6eb4ee6"],["/2023/03/17/系统设计/分布式系统认证/index.html","b331b8364bdaf08f32602b9efb12726c"],["/2023/03/19/Java/JVM/JVM概述/index.html","43085a6d4ed44c8eb0ff89aed5f16c84"],["/2023/03/23/Java/JVM/类的加载过程/index.html","27e89006d8dbc99a914525614cf32180"],["/2023/03/28/Java/JVM/对象的实例化/index.html","33351280beabd048a3cb019b4eda6c38"],["/2023/04/01/Java/JVM/运行时数据区/index.html","ab640ad772781f83ce8388e67f5f2e45"],["/2023/04/04/Java/JVM/执行引擎/index.html","e3db31994d5ffbc103ae5137de100412"],["/2023/04/06/Java/JVM/对象引用/index.html","c217e40cd451e6ab896cbc4e76c795c5"],["/2023/04/09/Java/JVM/垃圾回收/index.html","79ebcb458905c6d115b1c35faaeca400"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","ac200e9f9fcb52d58406a02a219fb8d7"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","36c56910205087f79bf9c852c7590ed4"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","ab878c728f0da986e755c5d7bfc2fc6f"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","d7ae38a3630b0366cabb3d7b9923304b"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","a32abbfff7dea3924bfdf882fae861ed"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","65371d06ed1a4da8619c4714707587e5"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","6742d9fd588676073817c0c77b9791e0"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","6a3640d361bed0fe200921244c7dc779"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","c2c8e5addeec9baece325fe096e2b180"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","c3ff1ec9db9580bb112fca25826ccc07"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","8ec1dc6679d5c9a32a922dc44afd7f5a"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","1c9e51ab25d7ce9afbb5343f5e0c0a6f"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","df81973b5eed3e06b8d2d9a603736311"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","6740c75db1a4c418ec6f84836f787c32"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","c34e2533f2fa23a942788b78aef45ee1"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","e7fda572b8e588b227c3cc820413395d"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","f8025be6b1096a6c87cd210621baa170"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","5e25ec428c033b01a954e841f2e908a8"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","76052b640cffdae187ef26e7c00acfea"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","aba28c37d51da427d5a3e2d1fbc06d45"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","ae97f92f20ac59f99a73e8e787f7ec0b"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","aa93d748fb8a0723d8e4b6d1ea887657"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","c1c7c535492d3a461caad35d7e4beb1f"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","c417584265b49f3264b7e642632fb61e"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","f09ba396b2b8de674187b2842150f2f1"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","9d8124b36ddac033a993892fa8df22aa"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","326feb004579068956eede66fe74e785"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","b8fcb11eaf73fa7b739e4afc18e89734"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","b8b3ce2d9bfb61f2f9f6324e01910bb2"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","009fcd45372f39ecd221a292c56bb4d9"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","a5f0b18e12970ec7a129ce5b7b002db9"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","861553b22bbeff5a9e656581f7e2d65c"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","4f75732dbd3855ad0d455b6029aa72b1"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","6b9b7d6962a5ee0897610e8e5bb8257d"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","67317ab7dacb3e94ed559f46a2624b6e"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","39a8e10eff4e0aa8b4fadaf8c51fb4f8"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","639a40324753cef248672c53fbcec369"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","784848c7e4bd93b88105ea281ae24953"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","77fcf68a10782f6c472f0dd2e8e844e5"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","4b6118a55f0034dac13fcaf21090f785"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","10d85ed425eaaee3531c0c4416819761"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","77e31b7aa37be960d2b78374bb70dc10"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","3acaa60987dcd7c652b7d560744461dc"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","8e9ca48fc797a91da11079454708ecc3"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","03777ca58e92be8f4befc2c7f0154ae9"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","60d029bce0d7470f7303e7cbbee7b0fd"],["/404.html","30ea3efdd7eaf91d87b28f13e648113e"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","4618021109ddf3fe2970e7e4871434e0"],["/archives/2021/02/index.html","178864bf3789bee13902356b52e3a812"],["/archives/2021/03/index.html","cb6585c1fba6f4074e0a44835dc9c3b3"],["/archives/2021/03/page/2/index.html","b95286841b7fbf66f81ee6f01f29cf9b"],["/archives/2021/03/page/3/index.html","b6a6cd590430243ba6c38670f27750c7"],["/archives/2021/04/index.html","d817b16366fe3053c36e1d091a4e9817"],["/archives/2021/04/page/2/index.html","bb2b06be688caff9dadaf816f0a0ea95"],["/archives/2021/05/index.html","fb85365a6cb011486b2da314aef27363"],["/archives/2021/index.html","5dedfe9b07aac5fa7e783a6f4c28a420"],["/archives/2021/page/2/index.html","86684c1a48ae4754056b4e4d39e75493"],["/archives/2021/page/3/index.html","6fe6a525b2c6183668e23e3143c92b0a"],["/archives/2021/page/4/index.html","bae779893a160a298e0a3799d5fdb8da"],["/archives/2021/page/5/index.html","9fc1e8d3cf0919d8401658fba9f69195"],["/archives/2021/page/6/index.html","cd75aae78e0ca474fb518bcad66da1ea"],["/archives/2021/page/7/index.html","edf1772ab9caba47b26fdbb97ae3f761"],["/archives/2022/01/index.html","da423bafad43728db2877b1aaf117db6"],["/archives/2022/04/index.html","731a673008a899138dd25320d8cd36fb"],["/archives/2022/08/index.html","79ed092993388d84c53ad8c90ac04b76"],["/archives/2022/09/index.html","79dad1f94f0f9f7e856f92696aeab87b"],["/archives/2022/09/page/2/index.html","dbc8c83c4d7302df9fe76266c33b0f6f"],["/archives/2022/10/index.html","d42d364247a8486048aef8a76150ffa3"],["/archives/2022/11/index.html","bc49b2c03f074644ef1e4bab834e2dec"],["/archives/2022/12/index.html","8e9916cf9ae97ae117b01d81b577ec5e"],["/archives/2022/index.html","81da2cd9fee8f5727880a34249dd6210"],["/archives/2022/page/2/index.html","236b0b9def2e3e94f42e1ec61272b0bd"],["/archives/2022/page/3/index.html","d1a22e0fe00dafb4465fdacbad61454e"],["/archives/2022/page/4/index.html","7ca6fbc3db58e0e14e4b2adf212767f4"],["/archives/2022/page/5/index.html","a1df8ea40c4aa37566c7fe98a4e7b99e"],["/archives/2023/01/index.html","308a2370c32eb12f951928ff462595c1"],["/archives/2023/02/index.html","5cebe003446af1d03eefb33ce9f060e5"],["/archives/2023/03/index.html","a95597a2bfec5f36ea361ac780d370a9"],["/archives/2023/04/index.html","9bf7ff935c6b366973c6e513ceb198e6"],["/archives/2023/04/page/2/index.html","2e816294ddd04fa81102af0c0bf7760f"],["/archives/2023/05/index.html","3af4dbd3f06bee6550bb45ad4186fdc4"],["/archives/2023/06/index.html","0dc3153da653b5215b21256955a8a563"],["/archives/2023/06/page/2/index.html","10814c6fc94def095b6f22c523868007"],["/archives/2023/07/index.html","2d22abc65a25a580808d7fecefe2bd55"],["/archives/2023/07/page/2/index.html","5f8dce84ff72192be4259c3f26ed6090"],["/archives/2023/08/index.html","bd2271b51f6c248a8f45a5f00027e0af"],["/archives/2023/index.html","3a1b6a98f0bd7b074768d1ba08bf4de7"],["/archives/2023/page/2/index.html","863b8767bb5d189965e9ce3141676024"],["/archives/2023/page/3/index.html","3ce4104cdf936254edbbfb7340d19f82"],["/archives/2023/page/4/index.html","0291f2da7a8413006e0b48223d0342a7"],["/archives/2023/page/5/index.html","b6fce8e81a7c21804fe43b952d401654"],["/archives/2023/page/6/index.html","4819235cb554054f3e13e0df5ef6488a"],["/archives/2023/page/7/index.html","be584268b5292fe0ec6e61708e60f161"],["/archives/index.html","1ef8b7634c6f275f05e96299901e912e"],["/archives/page/10/index.html","5f207375b82feadd87e430fb018bf5b5"],["/archives/page/11/index.html","452cd600efdac74492a60aa8cb6b1e84"],["/archives/page/12/index.html","2b3c4656f94a1bc5844e51e0916375f8"],["/archives/page/13/index.html","d303710005f873eec3bcc15be26b2ee9"],["/archives/page/14/index.html","35df2b9c5065156c75c026bbec138ad2"],["/archives/page/15/index.html","30a8ed047aec0500eae6ae41c99031d0"],["/archives/page/16/index.html","e4159fda162e7b3bbc55f4ef3f5c0e4d"],["/archives/page/17/index.html","a3b5eeeb5e22f249117c4effd641e654"],["/archives/page/2/index.html","c30429c145b7d3064e90ce05707005a6"],["/archives/page/3/index.html","971cae977676fb6520337ccdba33db14"],["/archives/page/4/index.html","9cf7fb75e02f4a35f6557af28eb66fa6"],["/archives/page/5/index.html","14968821869c2ec9dfc1276fe2621e24"],["/archives/page/6/index.html","3b5691017a0f1d5befb3c6202fa27651"],["/archives/page/7/index.html","5ea23060c8311bef02eee392c337908e"],["/archives/page/8/index.html","bf3d04a1b59b3026f4c047d54c4ac17e"],["/archives/page/9/index.html","b7a279f6464ffb61b9fa1dec84443a71"],["/categories/Devops/CICD/index.html","07fd9102a192d088b1c414119abbafeb"],["/categories/Devops/Linux/index.html","889a1cccff8aa805c3b969ce47e93d35"],["/categories/Devops/index.html","1c7d99c4cfbcea54aa7f5c4a9a8f7487"],["/categories/Java/JVM/index.html","58c2c4a46f8e10206772f7f53ab05e80"],["/categories/Java/NIO/Netty/index.html","6b29dbdee4584eb10a86929bc7942e7d"],["/categories/Java/NIO/index.html","0482ae2c69a2998ab56d350448d17704"],["/categories/Java/NIO/原生NIO/index.html","fd23bea3068a42c0b1f4380b059e2053"],["/categories/Java/NIO/文件操作工具类/index.html","f4650c81e5acabe16738b452358a6785"],["/categories/Java/index.html","be866810a768b48faf7e5d238ceb1b7c"],["/categories/Java/page/2/index.html","c92ed491fab9a3381daadaadd65b040a"],["/categories/Java/学习路线/index.html","378ef9f42c1e0d316998c8d29bd16457"],["/categories/Spring全家桶/Spring-Security/index.html","633cc7967e21e00789935d2f4eed0705"],["/categories/Spring全家桶/Spring/index.html","4f90e1176142d1ad50404434cd75a6b3"],["/categories/Spring全家桶/SpringBoot/index.html","06c198441bfa722129187f8410d066c6"],["/categories/Spring全家桶/SpringCloud/index.html","53a365effff3ca0b66bbfae19823214d"],["/categories/Spring全家桶/SpringMVC/index.html","23e596ac3dcdc0c9f39cec9d4d33b0fa"],["/categories/Spring全家桶/index.html","88d4115044260749bac48ceef211d6bc"],["/categories/Spring全家桶/page/2/index.html","7a59c60d41939a6d479bc9684d68ddfc"],["/categories/index.html","109bcfadf309b21bc9e9be522855c232"],["/categories/中间件/ElasticSearch/index.html","74b4876f1e76cbb96bf8088ba78068bd"],["/categories/中间件/Redis/index.html","d55a18c3664d15a70f1c536770670d64"],["/categories/中间件/Redis/page/2/index.html","b81749c0a79aa9cb111823c494773c57"],["/categories/中间件/index.html","a20a2c3e562fdff333fa1ed19ede8c25"],["/categories/中间件/page/2/index.html","0d18358b2d8ee180daf7584ebed9d9a6"],["/categories/中间件/消息队列/RabbitMQ/index.html","da8b407dfc685c089355617e045d17aa"],["/categories/中间件/消息队列/index.html","53794f39d1a10856947c7320ac9cd4a2"],["/categories/前端/Mock/index.html","3669a21117ce729809e0948fecd8cf4d"],["/categories/前端/Promise/index.html","de1a7b9cf9914af3b9c9a41a6c08774b"],["/categories/前端/Vue/index.html","666f8f8e5eebdc4014ef6cb68d6fdca9"],["/categories/前端/index.html","860e8df1ebb9feaf0e6d288068389937"],["/categories/前端/jQuery/index.html","3ad547258159f5e7e94982898e36c938"],["/categories/前端/page/2/index.html","f467f0f758258ad3f452d4877f66ec6d"],["/categories/前端/原生基础/index.html","37a9d227a696ccf61725a7b0a6b87d25"],["/categories/前端/异步通信/index.html","eb807a74a3eae6e08a5faa3bbf1de1ee"],["/categories/工具使用/Git/index.html","a35187736c398a2bdaae6a0d7a133cf1"],["/categories/工具使用/index.html","f6d60e2a57a89b6989c3723844924f6b"],["/categories/工具使用/markdown/index.html","80d72909a7860f454bf8d508402c5271"],["/categories/工具的使用/Docker/index.html","a2a6227cc00c8c9fb573ca701aed2d84"],["/categories/工具的使用/Nginx/index.html","e45fb4e11263f3e8a8801d5f1f97c272"],["/categories/工具的使用/Swagger/index.html","8de530b473b7b901b74e0e35dec843bd"],["/categories/工具的使用/index.html","b3ddf12fadaa4f3c15dd772ef6eddc21"],["/categories/工具的使用/博客搭建/index.html","c63d8a5c8053c14a2c214b1c0899ef6f"],["/categories/数据库/MongoDB/index.html","d631a5656b13438a615adcb22e173001"],["/categories/数据库/MySQL/index.html","14e8941207c5cf249f44e50d256276a9"],["/categories/数据库/MySQL/page/2/index.html","7555299de94db45a9ba01ca298e8cdbb"],["/categories/数据库/MySQL/page/3/index.html","4c9a93316b05ee5b98cd356ca7789208"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","4b832799713a11c5b49edcdca44f33d1"],["/categories/数据库/ORM持久层框架/index.html","1a1d44af825f1d47429eb2e175e64f63"],["/categories/数据库/index.html","11efcbc32bbabd1a2fb80b3d2a2b8da6"],["/categories/数据库/page/2/index.html","114a197117b358edb117d93185e91e84"],["/categories/数据库/page/3/index.html","9ddfbb3fcc6fc5bd16812d776fa7eb18"],["/categories/系统设计/index.html","71e1ccb5a4285e4c088ad91947db52c7"],["/categories/系统设计/page/2/index.html","757054c71d04d46233d03aa4fc5d5d96"],["/categories/系统设计/分布式权限认证/index.html","a7c2104f938664bba61aff8d30d21d36"],["/categories/系统设计/设计模式/index.html","ece6ec3a4c513c521437f613063edd60"],["/categories/系统设计/设计模式/page/2/index.html","cf00086c91c50237ea33f46448ebc6ed"],["/categories/计算机基础/index.html","f1d7dc356f8b2b1d4035a4aadf78a2a9"],["/categories/计算机基础/page/2/index.html","4b72ca3237fea0bb0ea834a50d8d4970"],["/categories/计算机基础/page/3/index.html","137156609e015449dfc82335a2736bac"],["/categories/计算机基础/page/4/index.html","fbe9d75d8406a2dd4ef64737e18f298d"],["/categories/计算机基础/page/5/index.html","03f8d76d2b0c99d3515f9ee9959d2f7c"],["/categories/计算机基础/page/6/index.html","8710c48b385e4b3693965bbf6a21fdee"],["/categories/计算机基础/操作系统/index.html","80467abb35a0a76ab4375095f91ecdb4"],["/categories/计算机基础/数据结构与算法/index.html","f86aeb1c62e64571ada7ae7ff95729bd"],["/categories/计算机基础/数据结构与算法/page/2/index.html","f5d7946df3e1e6e5b47e3ed648ec5b0f"],["/categories/计算机基础/数据结构与算法/page/3/index.html","9c409746cf208dd6b7a2c46183c80c65"],["/categories/计算机基础/数据结构与算法/page/4/index.html","43ff379d81ad9e4efc735f043816df26"],["/categories/计算机基础/数据结构与算法/page/5/index.html","fa949ddb1aeb59e9bbeb837d1bc82f53"],["/categories/计算机基础/计算机网络/index.html","7474abb09b168164af6dd510e712374d"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","50b48dc6f685fe7ea2efa7094ed67ead"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","5361817d84f7251f1ed955f46dcb0c3c"],["/messageboard/index.html","0d18957195cc1a533e285ea5451ccd1d"],["/page/10/index.html","3a38e9edebdba7287be96049f5a9813d"],["/page/11/index.html","7c8c2ec8c877e6533d01b3126a0df859"],["/page/12/index.html","a23684b97bc3f016477a51cd92f80b34"],["/page/13/index.html","4a770cccf31d1f1f3c1038c707f8ed0c"],["/page/14/index.html","be99cb8aae0248ec73973ff59ce61a76"],["/page/15/index.html","ce467e075b614c04dd293649c76c27b3"],["/page/16/index.html","7a36fcccd8930e0797ddf3e9d6670f47"],["/page/17/index.html","dbf0fc11381ce78df8482038ceaab45b"],["/page/2/index.html","de2ef4e5e8df7b128bc46d2c6efbacbd"],["/page/3/index.html","709f47e9c44cdcd3990806eae773161b"],["/page/4/index.html","e168f8105a7a1f666ec5d1069178cb2b"],["/page/5/index.html","a909a797f6876a1ff1f6f8aca8fbf6e5"],["/page/6/index.html","fa3acee0283cff09e38202e395dde6bb"],["/page/7/index.html","12b66a0fcbc256549b75d6393683ab84"],["/page/8/index.html","115071e12cdaf58677cde270fe8b3e35"],["/page/9/index.html","317ae2ffef2ca428096bba1c36549224"],["/sw-register.js","8c1eab55bd6e7116afc4a9f3ddf36b39"],["/tags/Ajax/index.html","a44c8f8f99dcbba8057482d0d4e3eebd"],["/tags/Axios/index.html","1ff3de6d4569f3a30d7aa4f809c100ad"],["/tags/CICD/index.html","2616e370302aace83ca21f5e3a6ac06e"],["/tags/Docker/index.html","edb0870440ced0bd762344ae349bafe0"],["/tags/ELK/index.html","5a328ae44b379f76f6cea780c0d5440f"],["/tags/ElasticSearch/index.html","fea3b4ae1b872cae3db2eb5715118ff1"],["/tags/Git/index.html","fd8b45d193acfab1a6d0b69187dd8d68"],["/tags/H5/index.html","7d4f6bed4493adc9d79d59363aff47a4"],["/tags/JVM/index.html","4c49d3c337cb664258aa554b760aa799"],["/tags/JVM内存模型/index.html","6eb4dac4ffbe665d1d31b1023ddb5431"],["/tags/JVM执行引擎/index.html","8582e42dd728578bc42fe4e65cef700c"],["/tags/JavaScript/index.html","f2c17e402c2a0f327d0b4bb20dddcaa7"],["/tags/Kibana/index.html","93a9eb7a4ae53c35e473fd89ef4e8ffb"],["/tags/LeetCode/index.html","5c2110c18fd66b50371687538fbce5e6"],["/tags/LeetCode/page/2/index.html","d2db32a3734772158a374afedca653c8"],["/tags/LeetCode/page/3/index.html","b2a7212f4b4f982879b4ee38f18f0d70"],["/tags/Linux/index.html","3c86f811694eea6f7a034a54052e1052"],["/tags/Logstash/index.html","516b530c7a27342bed13b99b964b459f"],["/tags/Mock/index.html","eecc419a8473032a4fc57afbf3fcdc4e"],["/tags/MongoDB/index.html","20a732b7fc6292ddc7c830ff2d33ad22"],["/tags/MySQL-事务/index.html","7e760319d8ba22697867a13ec4c29cf3"],["/tags/MySQL-数据类型/index.html","5ad2053ae10f95da19e419f9659b3980"],["/tags/MySQL-日志/index.html","b19bec6f3156ca7d478417a88532b4a9"],["/tags/MySQL-索引/index.html","4119e92f31304d70756b9013c1b4baeb"],["/tags/MySQL-锁/index.html","14f6242aaac1d9036cc74be3cd855f40"],["/tags/MySQL/index.html","808db201bdd6c44f5084cd21eff0427a"],["/tags/MySQL/page/2/index.html","9172d95cd8de8b697f115dc0a41a64e2"],["/tags/Mybatis/index.html","6d5ee1b210ba2a7705c2011eb023daa6"],["/tags/MybatisPlus/index.html","8f5764c58c76c4ede4d2d83757bcda77"],["/tags/NIO/index.html","5ce600640913c891894eb2da0865723b"],["/tags/Netty/index.html","6569afa8d21f49a845cfb20d40bffff9"],["/tags/Nginx/index.html","e7823aca09713bb7e9aebb2cafe4a0b3"],["/tags/Promise/index.html","7a4e49555c9739db864130a91cc1d783"],["/tags/RabbitMQ/index.html","6d1b949a2a398a71b6a2b9771324bbd0"],["/tags/Redis/index.html","e0c99dfc7dc9a7c144e604113ae51812"],["/tags/Redis/page/2/index.html","1fe032c1e115e8ad09476184b0931272"],["/tags/SSM/index.html","1ff9b869e25e2895238cf4106808ccc4"],["/tags/Spring-Security/index.html","59717c5907250a17fe0eb930fec9115b"],["/tags/Spring/index.html","36b9c803a7fb8fb47047a31ff0ebe591"],["/tags/SpringBoot/index.html","e51b94228f2995e8f3e87a062034b664"],["/tags/SpringCloud/index.html","c377efbb9b6c124c5dd75e5ce6904cdc"],["/tags/SpringMVC/index.html","2eb6e1c91a1060efb45d9002db1002ed"],["/tags/Swagger/index.html","f92e7e711f24753635e6665920208691"],["/tags/hexo/index.html","b9f6319f34d3153df99d9e072f2ca6b9"],["/tags/index.html","6108457a75e7caccbcab1d4e2700a011"],["/tags/jQuery/index.html","1a2d51c01c5caa8d54e1a27e925b3e91"],["/tags/java/index.html","bd47ada76aed8404c29a0154ebaa9e0d"],["/tags/markdown/index.html","3da646c998b1e324d196c80ce582a85a"],["/tags/noSQL/index.html","b26eba9d3b4b47b42b08c3eb2f9ed10f"],["/tags/typora/index.html","0461b543978c6845a3bb23aed1f42a4e"],["/tags/vue/index.html","834143d6a7d41a2f30c8ab9a20365a7a"],["/tags/享元模式/index.html","7725387e266500b938b557ba56daac4b"],["/tags/代理模式/index.html","f523f26869fbc7f719c1b4ba3db388aa"],["/tags/内存管理/index.html","1d46f9df7d77d1b4a784ae193242946c"],["/tags/分布式/index.html","18df60b76d541f7b7b77f084f37e38aa"],["/tags/分布式系统/index.html","f4f2c150a121952c1cff49a0354e7d0f"],["/tags/前端/index.html","25e63293638efd16531e54ca45625631"],["/tags/前端/page/2/index.html","5990f6009415aabca99ebfe48fe1d5e0"],["/tags/博客/index.html","5a82fdc6876b310a002cae9c7d13b2de"],["/tags/后端/index.html","140060502323d6166d16dfc64dd1f2de"],["/tags/外观模式/index.html","52f6eddc8dc8ec71328f1abc76904b60"],["/tags/容器技术/index.html","648e6bcd53314b16b3b3462f477afabb"],["/tags/工厂方法/index.html","d14d7becb2cf625050e76eb92761eecf"],["/tags/微服务/index.html","dc20a8e33d858fef9452b712a9ed88e5"],["/tags/抽象工厂/index.html","39b3b8d749faeaa848a507388f193ce7"],["/tags/持续集成持续部署/index.html","b38d36ceef4b76156c9efe98be63619c"],["/tags/搜索引擎/index.html","782b77022baf22fdfe4c886cb41c55e6"],["/tags/操作系统/index.html","684b46a5d37e7b4da7e1f37d6b1373f8"],["/tags/数据库/index.html","88a8a3abeecc17a551fe50a4cf573d46"],["/tags/数据库/page/2/index.html","3a80554692fb75fa1e461efb5f401863"],["/tags/数据库/page/3/index.html","39b8ff5e31c429f1c579b3cea04bba0d"],["/tags/数据结构与算法/index.html","0b2676acfc12b8018950d0f5adc75eef"],["/tags/数据结构与算法/page/2/index.html","054926b5a7285059e05a329a4fb12d02"],["/tags/文件操作/index.html","050bd60ee04e196c2ea1a8e60c578a1b"],["/tags/日志/index.html","237434a4ba569ef24bc2b7be5f0cd5a9"],["/tags/服务器/index.html","9b107a6e445d1ae4b22fc69cfcba5c7a"],["/tags/权限认证/index.html","b04e87af31073e2cec41b853eb59a9b1"],["/tags/桥接模式/index.html","e7d8f9a989627b7f397b715257b525bc"],["/tags/模板方法模式/index.html","f13d7735296571cae444d38ffd754f36"],["/tags/死锁/index.html","3e254520997156fbff25915a868ef093"],["/tags/消息队列/index.html","267b223c51b793f3ab7a17e454a9daab"],["/tags/版本控制/index.html","9a1c31ada089919e461b829ba931d1bc"],["/tags/策略模式/index.html","4841cdaa81ce618a97dfe1e2a22c883b"],["/tags/简单工厂/index.html","a1104d9cbb01050567b0b777b6b10720"],["/tags/算法/index.html","c36cde867ab11af45f775260854a5a55"],["/tags/组件化/index.html","2bad3d38f9bd83b4184791d543b96c98"],["/tags/缓存/index.html","83d8db75c5ba3491cd7755e1478e5a0c"],["/tags/缓存/page/2/index.html","c075aa4ad3a30e45bb9cc33351266fc7"],["/tags/观察者模式/index.html","dee862a77ff2a880d5de6f78e9250f3f"],["/tags/计算机网络/index.html","49292ac546b8fe71fdf3e63540dc8ef7"],["/tags/设计模式/index.html","ae9ea8e58aeb35808819a40321b71345"],["/tags/设计模式/page/2/index.html","d7dc9c96e3a6b0cf0b6cfcbf9b395ed7"],["/tags/进程管理/index.html","37da94a913ca6c6d4c019a852cf67010"],["/tags/适配器模式/index.html","79fe120655bcec886cc942a4577400c6"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
