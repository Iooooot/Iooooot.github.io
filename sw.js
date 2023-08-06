/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","6eab075f1dfbf872775cc6baa25b475f"],["/2021/02/22/工具的使用/博客的搭建/index.html","7eed0d277743488454fd1466897e049c"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","4a6b952c792c62b658cb3c8176411e6d"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","885007aff99dcadb8b0355cef0e15c44"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","ca53db55483eec59e6b06ca9fb8c29e8"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","16e09f845d1a77ab3c81c52bfcc7ea77"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","6cefbab4263fd80469c91a49e39567c2"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","64340d2d9cf789e9a73998e315063038"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","73ee2661cb07c649398d705a9761b87b"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","44aef11d6567ba5956648ddf5ab6c56d"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","21287c2cd88a3454cbf630a810c225db"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","c17d259379d94019c2d12d45ec03f2ee"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","31dc724919d26991bf578fde02b40ff0"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","774f6d8e464e23c59ca8eb9c2d0ad729"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","cd55f346c43ba2bdc37460ffc3ef7822"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","f4da17d67293aab6515ea013c8e28d42"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","e08cf72ba0565a02f294d6edcf7e7f04"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","9d452df2384ba0b98d50b9c96750b83e"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","d7c97bd4f53b9ce9eeecc5da63713ad1"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","194319d70da79581afd5a01756ee98b7"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","f4a499ee52aa2a3a6db11da739780ee5"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","169dee4895e059bda395b1c21455596d"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","39aa1e888b28248e9736f54d3c0288b8"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","06c3b79796c8762a42892bc215835688"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","7851a50030021ed7c4cad4dc33a0ca4b"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","5f4d79226e121cc898f1115648d06971"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","218100ee59a9fac18d39760bb7be53b2"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","f52fc3b49c1986eff2fe461b274ca06f"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","d1f2727a181be0f8de02a3d14825d1e3"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","6b813a3cf4e343df997f7648f4398d07"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","27900d3b8cd036e9dad8de4fdeceb147"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","0b3c82c3401c7eeaa6820a3d46ec7870"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","036f9edcebbff39c955733b58f8ec923"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","08a21de6422abb312fe9c3d05d3513e2"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","2448cc644b796f5ea198fefadb4b9600"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","3ab5e6ab759189c917a065e24bcbaa7e"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","16a1481ebce28ea9e2666303a32addef"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","935dc142ff4dde112fd3bf677a9d5015"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","25d8a194f1b49ce08e0f3a04fc12017e"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","021bdad2b0b950bc18fee326f706ba4c"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","81bfb303fe4bba6af952f8072d7b4d69"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","3b66f422da99cee16edf10dcd8f6526e"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","9402456c9cb5597b264db646eebdeb85"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","5a06b3bfa2b8114f2504d8cb07da4dc0"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","9f4148e85e68f0a7195fb110b6b269ca"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","375af2915f96e66a341d759e349afe30"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","0e909cad9743bdd092c18c7f73e345b7"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","f0e29cb9eaa97839950560e84b3caedf"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","6973072585465b3b82a68705a89c3eb8"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","6a7f5ab6bc126aebfc6d99e0a22002af"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","6c4a106eacd7e0baa0a1d9fb90a9a10a"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","67d18d525d7e6f8a4aa01fed4387adbd"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","c2ebef279daed5c1f14f46126439aa48"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","051e85550c1771a1918bcd972db0ad43"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","27bff21a4e0096d9e3f592c836aef6ed"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","988f7dfd8117c6436cb4b7dd9e3c29e0"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","acac6afde7f9add3bdc5e734427b7676"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","c23d7fa563f6c62350c7545d0763c9ea"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","edbc08638aa087ca80d83a6b2e4e4378"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","efc635b49f7bf50fa83ef9aaabc72985"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","47187b52c85638af533b6dbbf7af93ca"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","62f8969ce2659331062a2c0dd384d730"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","d6234d985aa6d24aea0f9dac240e26b6"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","1f4a9ab6645021d7e32774fc179a516d"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","a5d825233d95211bae95a9a825fb2df4"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","c5b3f185c2ff8ad13cb2c5207d384471"],["/2022/08/17/前端/jQuery/index.html","21312a7d5b608a2ef7964f19e387bf9f"],["/2022/08/19/前端/JavaScript/index.html","e9a854ce48cd6350c97dcd10ef7e8954"],["/2022/08/22/前端/Ajax/index.html","1a2cfcf8f1bbd01cb8b597ec211e6390"],["/2022/08/23/前端/Promise/index.html","0cb4803b816df484c8c1c07f541cbce6"],["/2022/08/24/前端/Axios/index.html","4231ac543396a82fc97f4fc655316765"],["/2022/08/25/前端/H5本地存储/index.html","44fbde3289480a84613100846d9a533b"],["/2022/08/26/前端/mock/index.html","9f55466f4ed6dc5c1ab5531f8026475d"],["/2022/08/31/前端/vue/VueJs/index.html","1480f27c5657556cdfe9849e6b408d4f"],["/2022/09/01/前端/vue/vue组件化/index.html","ee0a610b0da3447708cf32c327a865ad"],["/2022/09/04/前端/vue/VueCLI/index.html","63acaf7a079c17392e0edf626de958c0"],["/2022/09/07/前端/vue/vue实现动画/index.html","4bb5e695cac033125e005df1f4e04a19"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","f1529ed4425aa1f84106b7449ab064e4"],["/2022/09/10/前端/vue/Vue异步请求/index.html","db181d8865c89bad61a25455043af9ac"],["/2022/09/11/前端/vue/vue-Router/index.html","624559919d1ed16abde89ce9c2e18cf4"],["/2022/09/13/前端/vue/Vuex/index.html","1f4d3c1f72a7f0c9122a229345bc3e1f"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","83d8d3715d5de5bc688fd91bae62d37a"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","66afd94d360fb610d491183477a0c954"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","76a4c0ee5a14de9c183d9a3730db3a05"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","42427ede8125084c474278f419bbc23f"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","277c1ba2c6e706ee40d01b3b805a3ace"],["/2022/09/28/DevOps/Linux/Linux/index.html","de92b792be1fc4e18dd2aa2df27311f9"],["/2022/10/02/中间件/Redis/redis基础/index.html","5228387868882c1f6d1f7188b404edde"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","ef6a12ae3c7257a0cd49fa4095ed928b"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","998a4d0ff357c008c8746a716bb409d9"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","c46fd82ae78d8a1935be8e8a3f013416"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","4228157967701471f2e246ee0c596f19"],["/2022/10/17/中间件/Redis/Redis集群/index.html","42e75eefa92094a91c78a43cb06f944a"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","2ab8563fa0eae960b2f71bacf1f5a5b1"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","b43da2daefde9569a40c959987ae85b7"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","a856fd7895e194a2b898aad353846250"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","d3e72f534e113dfb9f9f55e40987221e"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","91e7b209ed8b9aa4c22a5894064d0204"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","c9933acf3bb9e318f49af7f98d813ed1"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","e707c2358837855ffddadb257d8252be"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","31855aaa73706b48d80df1c477590b0e"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","a35a79ee8e7c6a65e4fe815bebf76485"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","d0b21f25ca1200b9fe426cde641b9a3d"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","95d09d35abc22b804a9545bb59f9b1f1"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","02c45ef15d0042fe231cca8896b83684"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","430f8c76f60a82ff860b36c957a0ae60"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","bf5dd1a4b908234d32d3772efd67cda8"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","d71a78fa5970ec33b2428c2ab8be42c7"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","9ae5f2c2b04dae76dd907a1f8bb85189"],["/2023/03/10/DevOps/CICD/CICD/index.html","35e6e7d832358b2d62bfed49a424f601"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","c48202034e13af81681b920d25f3b6f3"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","31c6b3b29cc2b83ea3c302461d01ad59"],["/2023/03/13/Java/NIO/NIO/index.html","1a0fc161e9404ba009c485cfbc54b1af"],["/2023/03/14/Java/NIO/Netty/index.html","a0b66c83d56ab710e39f4fd2277ac71e"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","ef2df026d66e067950aff50df0df981a"],["/2023/03/17/系统设计/分布式系统认证/index.html","cdc22275ef7d337241aeda2389ae7b35"],["/2023/03/19/Java/JVM/JVM概述/index.html","585049a06806ee70b0c35c6b3c84f279"],["/2023/03/23/Java/JVM/类的加载过程/index.html","93f68b99db56dc23ee5fdbfd509ab248"],["/2023/03/28/Java/JVM/对象的实例化/index.html","a384578b8b952d3011b39112a618bb66"],["/2023/04/01/Java/JVM/运行时数据区/index.html","ebbd5b21bc758add40e4b5278b64b6f4"],["/2023/04/04/Java/JVM/执行引擎/index.html","9572dc2d367bf6fdfc14249f7b3f5f94"],["/2023/04/06/Java/JVM/对象引用/index.html","83969f02735d39690b2c127e775bf57d"],["/2023/04/09/Java/JVM/垃圾回收/index.html","25867166b7ae593b5a881e43ff661b38"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","b7adecacd8879738b733d23a8e89575b"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","d542b75c37c3070e5bfa84e3d24d43a4"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","751d259534449277295020491a27d5ef"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","975d520872df4a2030d30bcb65dd8bae"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","1aefa0ea803da46dfb6d3404162a06d3"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","be98e1995000c009236cd61990a5d178"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","b6d33fe7a76253c95e4954d2c1ce2766"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","579bfaf0126affc87d84110b97be9180"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","935dbe646dee71df6baf1d08234b1e5f"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","d8fbf730e15549da10ac80cca532747b"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","062fa96f921c9480ee442668df41db6b"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","92478d4df14a9785c3883a0be487dc9a"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","ca3e3b2a962e41df9af6b9866ea67c18"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","4d1879d858e658225864605e7b0c69f5"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","79814f1d10d308c8ba0922663e7bc491"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","f7421cdcb85ba23bec8c2857544d5625"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","2a4e1e552f1923d1f923ee47a03371f2"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","4404398ea0c10d71c878b5f15f5750e6"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","5babd32c35b339b96e820d70f17b96a9"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","ab804e4536314df06ec00710da91acc7"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","621c483bbb1e52bb8884e449f8fed6a7"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","8fbaa80f701129578dc88e0732037da4"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","0fa2ac5743804c813bf9a67a8f7616bb"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","c0e3d2541e81c960c356ecce34d70760"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","e68c5da7d1e15f2798a6d821e6f17ce6"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","e071bbdd2097b725f07013da64ee3b7f"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","2b47d536c7f35ba7757e17c313061df8"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","ff182b11df56cb2fe5361f2b73b1d40b"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","c8c75adf3424985ba8df887497c4a33c"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","cac0bbc29dda8efde4f80cf3f9c040bc"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","f5dc48ed5c6fa356497756c26b588431"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","4bec1cd7fb141d62d6d2a77b269cd1b0"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","32a99e709dde040bda026416264de88d"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","753fbf5b71b477a62968db30c2d7cf32"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","18ac69cd3de0753d3aa91540c3f492b8"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","e43b07ea740fc7bcb56f77759a937cbf"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","b63fb646a53c16e9a329a9212ee5ac88"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","46a613e243ed383b312b11a1d33cfb3c"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","074b1a74948db3b5a8bdf6da86853d89"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","a4db33a5f6119b82ed1504529e47a28c"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","b8cbd71d3ffc6acac2567dd1ce575d14"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","0c59ed6f3452350929b74a878fdaaa6d"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","adaea3a22732cf29c3fa528179fa813b"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","0d6edc4a1ce9a8f11f72f9a13a3c1ae2"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","7b25a0d390f89d899b0081133009a58e"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","aed870e2e6bd8062cbba67360d090984"],["/2023/08/06/Redis的常见的四种统计模式/index.html","c2053bf0f82c672044990c2552e40c95"],["/404.html","a354a0f46f35d2d922a55b556e14296d"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","dc0c36e46f73604c6b1bfae8f0db660c"],["/archives/2021/02/index.html","06fe8bb192c91b636c7e79701dcc7339"],["/archives/2021/03/index.html","feec6897424bfb70c84c29c71acb4dda"],["/archives/2021/03/page/2/index.html","fa2483d120796b376a60989f33ded50e"],["/archives/2021/03/page/3/index.html","26df403d8f2a1c5eb2f6bd2c9ff82f37"],["/archives/2021/04/index.html","1f68a8747fb5ab0015b6a78c4c3becf0"],["/archives/2021/04/page/2/index.html","023047759750406f47757c7d2229ebe8"],["/archives/2021/05/index.html","9ec399610676d8fc89133d0146f02548"],["/archives/2021/index.html","047d204a4f14cf917880caa27d66272d"],["/archives/2021/page/2/index.html","11c3f52743c09dbecd22cef24145b798"],["/archives/2021/page/3/index.html","06bbabed6502a6202349f19e97da1634"],["/archives/2021/page/4/index.html","d7fa41622626f51625be623bc6ce0549"],["/archives/2021/page/5/index.html","b8a3c61557bed4e56a48a4982f852bf8"],["/archives/2021/page/6/index.html","3aaf3130d347bf24df380d0c039a7bdf"],["/archives/2021/page/7/index.html","a73bd372267f66e7621852ea07b36657"],["/archives/2022/01/index.html","09c488b5929fedda6dfe81426d9a70a4"],["/archives/2022/04/index.html","bc194eb985f98a1cdb6a5056df5c5864"],["/archives/2022/08/index.html","13f7bd8fa5180db178bcd6c24af49df1"],["/archives/2022/09/index.html","fe5cab85ecd32b0284ffc7d4de8c96e1"],["/archives/2022/09/page/2/index.html","842d1cc03e39a6d827a9140ad90fe84e"],["/archives/2022/10/index.html","c7b8fbb31bbe8a9d275bc25c9d6df166"],["/archives/2022/11/index.html","a510980a00e3042e61a8193127700c8d"],["/archives/2022/12/index.html","877c8f7d2589176aba85227b9757dad1"],["/archives/2022/index.html","320d5f4e517032ba1a5b5bb006f027f6"],["/archives/2022/page/2/index.html","8fcdcbc31dffbe95cbcc1682cd5edb37"],["/archives/2022/page/3/index.html","0fea0076261a9be510b0a19a15c59e9d"],["/archives/2022/page/4/index.html","633f9b9800a4c8c6eeabdfc52f479d36"],["/archives/2022/page/5/index.html","cc3ec55df0dbb526b91f7e04ab06969b"],["/archives/2023/01/index.html","76eee8a944ac8a13434949e537eb6bb6"],["/archives/2023/02/index.html","223615477e315a690a0bed074705ae80"],["/archives/2023/03/index.html","c91b45f2880952a2de36972a7ce96ca0"],["/archives/2023/04/index.html","1fc520bbe8c02d3417dd0433ee19076b"],["/archives/2023/04/page/2/index.html","00a3719ab3b7dfc7ce6549671c0591a1"],["/archives/2023/05/index.html","364dff717b7860a449a1d6284b16fa71"],["/archives/2023/06/index.html","d236a419286d1481e0e38b1e4e9b9f8d"],["/archives/2023/06/page/2/index.html","a377a69e2efaf489e6a701655c861370"],["/archives/2023/07/index.html","aacde6ba8729e666a1b0ccf6cd2a1abb"],["/archives/2023/07/page/2/index.html","49721bed8ae8f548180ee52556d27bc1"],["/archives/2023/08/index.html","1f10d04b0e73f171d74d0ee2b427e3f3"],["/archives/2023/index.html","a9bcac09e2873714cb9242b2eebd836c"],["/archives/2023/page/2/index.html","54b72d64d7f0a25d621193f71c901ecc"],["/archives/2023/page/3/index.html","e08a1ce33bf32754cdd558f2d58c26f6"],["/archives/2023/page/4/index.html","861a53b9a4ceb43138372409353214fa"],["/archives/2023/page/5/index.html","d3413893241c71514d31446bf77fed5c"],["/archives/2023/page/6/index.html","15dce7db37b238893291c08c0a6b1f64"],["/archives/2023/page/7/index.html","1713faad03660379f213d80912114f72"],["/archives/index.html","17ca88ae7cb81adef5e697a5145536f0"],["/archives/page/10/index.html","285859e1430d338f97783d8e12bc9ba3"],["/archives/page/11/index.html","d2e68e87412634ef8f30de4c4f6ed976"],["/archives/page/12/index.html","f35f4252a0910f3c45455ab2ceeaa67f"],["/archives/page/13/index.html","ac1f2d27f742e3c4a71a84766d852cf4"],["/archives/page/14/index.html","1a0fed4a1ce41507942fbed39c3ddaf0"],["/archives/page/15/index.html","fb7b3967208f1aa45dfe5800b8397d46"],["/archives/page/16/index.html","ed8e604fbf370e62013b192ef6d30d2a"],["/archives/page/17/index.html","510640eff7d4525becbf8ec1f08f5500"],["/archives/page/2/index.html","8b8d3332e178be21d8eb12a544b05dac"],["/archives/page/3/index.html","e8ab972eb2cf4dcea0c4b51c3f2694cd"],["/archives/page/4/index.html","67f6b396a9166b40a8703f995ea40348"],["/archives/page/5/index.html","722233311c9f18622981961fddd4746e"],["/archives/page/6/index.html","c53fcad0c7bf904f946f08d4a6970e02"],["/archives/page/7/index.html","b93f3cfe08c45ce435c7944e976d0cba"],["/archives/page/8/index.html","93e9ec9467f37d6a13ac00b211327192"],["/archives/page/9/index.html","29ae3389e5f1663a039eff84e69252c1"],["/categories/Devops/CICD/index.html","70937e5ab2be57c581f2dfadacbe9f35"],["/categories/Devops/Linux/index.html","8b761c3f693b2a5244ca5e3487a6ec09"],["/categories/Devops/index.html","36c62d908c16e1d904b2df625d58ab41"],["/categories/Java/JVM/index.html","8958fdab701121d52b61f398333de7aa"],["/categories/Java/NIO/Netty/index.html","46d11b42d055aec4bc5e077a60893b5e"],["/categories/Java/NIO/index.html","1c717010b41912eb4d9955805d82c95b"],["/categories/Java/NIO/原生NIO/index.html","31b54df8c9f55bb07ed16e6d38be84f0"],["/categories/Java/NIO/文件操作工具类/index.html","d5a22b15e601f80e2105960c04b06c0b"],["/categories/Java/index.html","b21ad9ad3f1b0d87d4954bdfb188a92b"],["/categories/Java/page/2/index.html","b51ffaa299749e7882de65faaec4e6c4"],["/categories/Java/学习路线/index.html","317a47e66eeb69b3f71e1e6aea56c0b4"],["/categories/Spring全家桶/Spring-Security/index.html","c4dd98cfec1840c90b815c25fec20eff"],["/categories/Spring全家桶/Spring/index.html","08fa4dafc2fde952a9a045720663f556"],["/categories/Spring全家桶/SpringBoot/index.html","4230909001e13d208307c2d4de88849d"],["/categories/Spring全家桶/SpringCloud/index.html","ef527603b766eb7c4064c079404cbd2b"],["/categories/Spring全家桶/SpringMVC/index.html","ff40c10af3eb3c250fd6aeba273981b6"],["/categories/Spring全家桶/index.html","e27499465c7e92a04e8a00bfc4c0e60e"],["/categories/Spring全家桶/page/2/index.html","8d40002687cbf766643f41990d230527"],["/categories/index.html","3dd7a8cfa80a2cfcea7f0f7c8d3f07d2"],["/categories/中间件/ElasticSearch/index.html","a178c9a7fddb23b9ee6f8760df3da418"],["/categories/中间件/Redis/index.html","13dd99278e3ca39d6801fdcfe77d9648"],["/categories/中间件/Redis/page/2/index.html","b2514a379d13a10e495402426e77fcd3"],["/categories/中间件/index.html","fea103b5d6af8041151b54adb8a428d0"],["/categories/中间件/page/2/index.html","ec591eea176085de4b5748d32838f37d"],["/categories/中间件/消息队列/RabbitMQ/index.html","efff3f5baa84f715e54eb5f6f137ab3a"],["/categories/中间件/消息队列/index.html","987f7e3f0562a16dcff2f24b648f70fd"],["/categories/前端/Mock/index.html","31760b98131bd5ff743b3ee265ec6f6f"],["/categories/前端/Promise/index.html","b6709f927ef15d2c8580be8a491e42d3"],["/categories/前端/Vue/index.html","a0164a56cffc3e65e6b22c932d8ed348"],["/categories/前端/index.html","1f1753232b4d89407ef8898d245feb54"],["/categories/前端/jQuery/index.html","0924490aa18d97440f8b64835798e5b1"],["/categories/前端/page/2/index.html","942d94f1603289e22228cd61883e814f"],["/categories/前端/原生基础/index.html","563ace5e809519ca2b4f495a1fb7340f"],["/categories/前端/异步通信/index.html","37c3f488a14f8eb6eaed862801f46e06"],["/categories/工具使用/Git/index.html","a3c61fe9c769f6d88d261f4336bad13a"],["/categories/工具使用/index.html","e0737dad4ed2e723333f05819a5e1088"],["/categories/工具使用/markdown/index.html","e14b1e64641a270aaa2d950a302c064a"],["/categories/工具的使用/Docker/index.html","f898754e9c7f79270d84d79d76aa8212"],["/categories/工具的使用/Nginx/index.html","8b67c6b52b03220f0e9946b343acb98c"],["/categories/工具的使用/Swagger/index.html","e71083f7e129253746aabd6fd2ad9db8"],["/categories/工具的使用/index.html","ea4e2f605a8568d38dd38cbd513ce440"],["/categories/工具的使用/博客搭建/index.html","fbfa41d5fd8f940c7ddca4ca14a3689e"],["/categories/数据库/MongoDB/index.html","681f396c2aa6a49f55cbdec8a2a6c7b9"],["/categories/数据库/MySQL/index.html","91c4695012b34cdc57f4f0332029ab70"],["/categories/数据库/MySQL/page/2/index.html","e893f676d97679830c3b9ffeaf99d503"],["/categories/数据库/MySQL/page/3/index.html","44033f5168ccf40e4b0eacdf315f90d4"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","582739f3311ec18a60d7eb4beaaf91d2"],["/categories/数据库/ORM持久层框架/index.html","eb8b6098c22a777142d1919c3e89b0db"],["/categories/数据库/index.html","b6bb1050fa791906e8a92a5ea4844f67"],["/categories/数据库/page/2/index.html","6442923b50dcfbb2fdb25186265706f9"],["/categories/数据库/page/3/index.html","cf3228fb2e2bf8b87af15cf24e12c616"],["/categories/系统设计/index.html","afd8f240f12d58273f51eced4c5f302d"],["/categories/系统设计/page/2/index.html","a3734b8b1a5b5e5074f6019c97610bb0"],["/categories/系统设计/分布式权限认证/index.html","d734aff7f9c9d19e655497e300156651"],["/categories/系统设计/设计模式/index.html","ce69af06e803a4e3edda7c16af8ae927"],["/categories/系统设计/设计模式/page/2/index.html","af5624611aab3e40821c0ace1c77fc7e"],["/categories/计算机基础/index.html","0641103293264e92e33b390b7aaeb9ec"],["/categories/计算机基础/page/2/index.html","551b88822b23aeb5129e5116d62677d7"],["/categories/计算机基础/page/3/index.html","ee798261f1cfbf7d25bbdc7c27d200f7"],["/categories/计算机基础/page/4/index.html","e93f19dbcf26bd7df0e493b46dc74632"],["/categories/计算机基础/page/5/index.html","1f9cb822aeb2260075ba25b19ae8b97c"],["/categories/计算机基础/page/6/index.html","b0335836bc78c44892fd6aa9ec6bde1b"],["/categories/计算机基础/操作系统/index.html","3782e665d28849e88c9d828f81b2b437"],["/categories/计算机基础/数据结构与算法/index.html","40024d15373f0c1aeb58ff4b4a2fe40f"],["/categories/计算机基础/数据结构与算法/page/2/index.html","9cf61c41dafd934cdf57b349a478bada"],["/categories/计算机基础/数据结构与算法/page/3/index.html","227a8fe7426c0ad0f77b3ef1211f3e82"],["/categories/计算机基础/数据结构与算法/page/4/index.html","af38ebc2a36d81fd1588261e1deb065e"],["/categories/计算机基础/数据结构与算法/page/5/index.html","972e01eb646fce5e719e256c7b66e2d7"],["/categories/计算机基础/计算机网络/index.html","91246ebe320af4e66ef7eef0c017b6a5"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","699448de7418060e1a30abcfd7507c8c"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","ef90e2c272baaead1c35fb96b70556a4"],["/messageboard/index.html","e501c928eebaf3c533be4a6e4c51abb8"],["/page/10/index.html","89c78f3c9a1a8451c25d9bffef3187ef"],["/page/11/index.html","59251da345f88adc71bc222b6fbf1288"],["/page/12/index.html","e7c4eb7abc6d5ce2014a1095121adc24"],["/page/13/index.html","095ce2e6d10862f0d147ce5e3565c0a6"],["/page/14/index.html","4ee46a0fd8fbf8ce0582948b26dce533"],["/page/15/index.html","a64d5900e1ba8e2e16c44f6d41fdbe8d"],["/page/16/index.html","2d46eee7f0c19968fa938c4852dedeac"],["/page/17/index.html","d4af04fbd8bbf9a9dcc6e912c934c119"],["/page/2/index.html","842e0ee4781243777795570e1d8ef93d"],["/page/3/index.html","ec52b78b0c3a77d23ddc2c48850b9dd6"],["/page/4/index.html","e0f49017a9bfab09a21133d2c657f027"],["/page/5/index.html","04a328ce658e557cabb29dc436c47494"],["/page/6/index.html","891ae04537fbfeabf10315fe19f82049"],["/page/7/index.html","b1f83ac58bcd463873056138e5064e36"],["/page/8/index.html","214461cd42f0113189254c3fb087eeab"],["/page/9/index.html","58c30b8fc68fcd4606d22dd5ef38d4f0"],["/sw-register.js","52f008bcec63842b73102bd3526e422d"],["/tags/Ajax/index.html","bcc40cf63a1a0fc4599e670aedd58298"],["/tags/Axios/index.html","587f031f31ed8245d5974ad148305a42"],["/tags/CICD/index.html","51698fa00ed9fa0f03b5cd1ad766478e"],["/tags/Docker/index.html","90633551f5a62f3d0abdf880ff1732dd"],["/tags/ELK/index.html","2bc703b8f2b864f8201462ed76e9d9d5"],["/tags/ElasticSearch/index.html","bd12201adc9aa23e8bbdf67828bc48cb"],["/tags/Git/index.html","5644475e8b279a8ed29a01397a33f4c8"],["/tags/H5/index.html","8f53f8ecc653e4a40631ae5acf2d7bb9"],["/tags/JVM/index.html","a6b52f920173485aa4749b85ad24dd0b"],["/tags/JVM内存模型/index.html","a640cb5a0a3f58b0f2caa15fe541e97a"],["/tags/JVM执行引擎/index.html","8095ebc8799490247434f3acfbef0781"],["/tags/JavaScript/index.html","3fd0091567e28808badb8a9ceb09007d"],["/tags/Kibana/index.html","acd96a157bbefb9e246a768099700bcf"],["/tags/LeetCode/index.html","0f81b43099fc0790d8f2d3a7f750ffbd"],["/tags/LeetCode/page/2/index.html","0fa6228bfb77a238b4f81fe3b8ce1bca"],["/tags/LeetCode/page/3/index.html","2a970b888a254e4d07b14c8f4d33a6f6"],["/tags/Linux/index.html","048d179288708ef24f0b6cdf9dcde743"],["/tags/Logstash/index.html","99f4af05b90f8ebdc285cb35c6c0bd51"],["/tags/Mock/index.html","b974ad05c3f9ada601a9bbf767cc68ea"],["/tags/MongoDB/index.html","91c7f678662571e9a867079784e911c4"],["/tags/MySQL-事务/index.html","d1ca70b61ad0776130358c505222b4bf"],["/tags/MySQL-数据类型/index.html","3b54eb138723830b840d58da14b1e270"],["/tags/MySQL-日志/index.html","64481c69f684535f22b28be306e1a1cb"],["/tags/MySQL-索引/index.html","aae6c597c85505004219232844f49179"],["/tags/MySQL-锁/index.html","c2521766c17044e3388033213995dedd"],["/tags/MySQL/index.html","82ba8477916a5a28a6b2ad44ebe90799"],["/tags/MySQL/page/2/index.html","db32432a596e9edfad957cf9401d11e6"],["/tags/Mybatis/index.html","7ee29072dce9496f623cb817ae01ed15"],["/tags/MybatisPlus/index.html","02a27216cfe27a47e846480a5192fec0"],["/tags/NIO/index.html","f3602cd04789f3d3ca6761663375ded6"],["/tags/Netty/index.html","7c8b44b3be03ce6950f3339d0a356f0b"],["/tags/Nginx/index.html","899ec39b0764ff27ebdb67594fdc4e03"],["/tags/Promise/index.html","70c068a0f8536c10917f413c53df5dde"],["/tags/RabbitMQ/index.html","a28a556a16d167d82eee2b410314233b"],["/tags/Redis/index.html","02f54da1b482b903c9030e3bc1787aaf"],["/tags/Redis/page/2/index.html","66aa6b410f62a3cdbe1cb3cb916155a9"],["/tags/SSM/index.html","50c0826c1929ce6677a1478d5662910f"],["/tags/Spring-Security/index.html","3585424652f9ebd1647a1386bb3372bc"],["/tags/Spring/index.html","e55456fefcf69ab7ff686448adade3a8"],["/tags/SpringBoot/index.html","f6a84e868c076668d1b74a54bbdf7409"],["/tags/SpringCloud/index.html","ae4ea93c16f3b109561d8e3c6cd8bba6"],["/tags/SpringMVC/index.html","627ac4215a87c2bdd7b8934c6f26242a"],["/tags/Swagger/index.html","2f51da8ee90cd44f69dd940036cee46c"],["/tags/hexo/index.html","09befd69e011f85ec24d372ec6acfd56"],["/tags/index.html","cb382aed43d55128e33b34b1f331f888"],["/tags/jQuery/index.html","f1999a5816732a641182c06563eab19f"],["/tags/java/index.html","be556bc55cdce495e6ffb76e15759efa"],["/tags/markdown/index.html","c56447d94bf31a62bdf95e01fc3b2262"],["/tags/noSQL/index.html","21113604d58d6af82bacca32b4ea3c2e"],["/tags/typora/index.html","dde3840f26a41fc3a8c33cd673a846f2"],["/tags/vue/index.html","d45539bba0b8d664684f7dc9244dbe80"],["/tags/享元模式/index.html","602f510e239623aa413d1423959dd650"],["/tags/代理模式/index.html","eda61383e494b015bbb14ddb9922f8ca"],["/tags/内存管理/index.html","56370833f5ef2c98c2b94372fa64473c"],["/tags/分布式/index.html","9d6c29025dbd3a339c51316f676a8099"],["/tags/分布式系统/index.html","0b1940cd046c568369aa5490a52ea771"],["/tags/前端/index.html","97cd1812313670de18ba6e715a981c6e"],["/tags/前端/page/2/index.html","f5a018b75f81d4698b6d8473212fa0d1"],["/tags/博客/index.html","b57ccd5e5a7c5ee91a9717b796582c73"],["/tags/后端/index.html","0cc07185735a0d0b3bee33677c5bfd8f"],["/tags/外观模式/index.html","6a06e5a44144af12858f979cd92d20ee"],["/tags/容器技术/index.html","5992b6c56a51600f1318a4d9b0870092"],["/tags/工厂方法/index.html","6995add8d3574309cab0a542ca1d5d3b"],["/tags/微服务/index.html","f021635a786bccdd8ec14a52ab17f9cb"],["/tags/抽象工厂/index.html","2df86ef9263a12be32811d8d8e055f0a"],["/tags/持续集成持续部署/index.html","f6665ac9d36942be60ed66b6fd482549"],["/tags/搜索引擎/index.html","8fb21dc687ed8e0f885ea8713e1e9abf"],["/tags/操作系统/index.html","6a9f7ad48beab9fe1e9dba80ff0fd83f"],["/tags/数据库/index.html","076d56144280a84c014dff579942c380"],["/tags/数据库/page/2/index.html","80690c16b88db188e76f66b3ce3b72ab"],["/tags/数据库/page/3/index.html","57a3782a8ff8f154e412c75551a20df2"],["/tags/数据结构与算法/index.html","c7940ce5e63f1e94a1b0318cf8b3aa9f"],["/tags/数据结构与算法/page/2/index.html","50d07b020fc38b380f4c1342e542ac1e"],["/tags/文件操作/index.html","1c21de74f1870d5f07c2c9e42d43f04a"],["/tags/日志/index.html","52ce141951727039d58eae04c9819647"],["/tags/服务器/index.html","43d10e536eed1f7287cf0d328b6c98e4"],["/tags/权限认证/index.html","44c9ab632241cd779f6e061a8bbc79d0"],["/tags/桥接模式/index.html","0410bc4d8c1d4785c77f579526dcb749"],["/tags/模板方法模式/index.html","403b4f25de177f7616311fe934a6bd45"],["/tags/死锁/index.html","df6054cef8c10ad49c40e763fc2e03e6"],["/tags/消息队列/index.html","5e96a699d9a706496350410ed7289664"],["/tags/版本控制/index.html","783638a863b8859e69af7f21e4a9a4e8"],["/tags/策略模式/index.html","87ddf9825a2b910fad5682b57bb59bd1"],["/tags/简单工厂/index.html","0a5a2248ed3bc8ff5d63b3adf820f61c"],["/tags/算法/index.html","9291519f9ce6f6ae30477b16d6a7914a"],["/tags/组件化/index.html","ce6767ec6bbc8726072f6d70bc3cf90e"],["/tags/缓存/index.html","59bb1fd1ae65259af2b02ad04320b7b2"],["/tags/缓存/page/2/index.html","3cebf352da56771deeeb7aaff602176d"],["/tags/观察者模式/index.html","62a0b457cd89dd2f0e39b15b1e138444"],["/tags/计算机网络/index.html","ce3756f282dc33162250f43328a5f164"],["/tags/设计模式/index.html","d302aac38e593361ab3416252ceb849c"],["/tags/设计模式/page/2/index.html","eb2d6ba797882a6bfb93721a098e7e22"],["/tags/进程管理/index.html","b633b55e5c913fec08004beccd5dd6c4"],["/tags/适配器模式/index.html","583e35a266b2750f5b946fd0d98c3d25"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
