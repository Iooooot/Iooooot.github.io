/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","6e1181a966e93b67b31bfeac80fc6698"],["/2021/02/22/工具的使用/博客的搭建/index.html","02b39bf07f805ffe2387ef0b61c60700"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","510e238249c73503c34c03de8e0b83a1"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","9e9c676cff43f73359668b866d6b569f"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","b6459fafab22f6423e8fffd6284d2cf8"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","97416cb086bf8faf3d903bbec934c290"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","2f0456e6d8b232c8bf8bee8b2c9d86f2"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","a43d8faeb7a9bc444501bb6e00b8a748"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","296bf156c9c8b86166068973fe07073c"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","b523cf00cfa13bf14d30a103d9807a74"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","fc4358e8d806b2f99e1831c869ae08cb"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","f7d97cc88aed3d43504b55abfe1403b8"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","56deb1a9ce4eeadc11fede7491398de0"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","52c0631a4e1afb78256beb5e66417ff3"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","9cf9e25ae7446877b9dd053757ec3a4b"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","8b612c4c71043d3929e84ed2f2cef9ff"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","ed4dfa4ba736462bb890bef79783ec95"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","2f850edd141a313d6d740bae61037409"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","9db9c3eb845c5e1d1cad4a4c2415a348"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","d1738d155dd77c7ec911fa2abe97e16c"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","13174917e2108d32cd32335ef35eed84"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","e7c1443c72795d8c02ff1f43b011c957"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","191b65ebc8d1135acfcdcc4b61fb3725"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","371287d76f89546dd24bbccfdab81ab0"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","136f47782f19f70400345867216364b7"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","11747e1df8160fcb585b53c294eb5750"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","e49afcc22bdf0bbf957bfcca7ed877fb"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","c431f173dbee8e61449a6cfe4a9df01c"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","e51c9db307bac024ec32522a64c19337"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","2cd7c4d28489af35ef5d3c8f7eac0971"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","7bba79119522fa96724080a82accdb1f"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","940aaa0b253aa6fde52bee668d0f056e"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","8eed785811f434432097053ab6798052"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","88d54e67680dd1c3c079351f5b4657c6"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","9d5938cb9513802e499a50692de57f92"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","9e6ab7937100622917271df96604ae78"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","cd26262b24bfb54465b5d5bd84bef98e"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","394f7ee84fffdf6a65963649a33aeef5"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","2a12fb8c265e3fd5623dfbcb0fb3ff21"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","da2eea574b265fd25c54e23eaead7001"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","50bc2b2bf13ff4d94bd926d5379972cc"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","08196a06af4358985d2bd13410ab9026"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","3817806c720fbafd170a8eb8b37bc7f3"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","654dd3a1ca25bdfea010665d1f43ce0b"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","decc5d98d1fbf5b111fa1e8affb6f0ec"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","3c97b3502e7be5cadf57ed732e24f271"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","ddfb81559ef06f0f07185f914047e3ca"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","75b25325040b9a5dfc416d414d0fb790"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","a5ca0fece50bf43be7f51d87626f7607"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","c236023117fed0ca5fd4c5f039c29008"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","4105734afb1ad7863c9e949d216f2897"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","30ae6a8fc65e388079acfc7047822845"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","601a5e5cdb62b70b2a3dc9f7f72bf4dd"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","fe5fc3918252984fda6fcab5453df99b"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","9f5c935afc6bbabf70e32376d113df64"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","cefd647739f62fcddab47d55fbeefbff"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","ca85095434a9a325e0a944202f8f89dd"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","7d40d72237d29c40c7e1d63739c2dcde"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","9f209ab489a2cdeeae0eff760d64dc56"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","f06d5c0ed7c4d6535d7c23e574be3c53"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","6208eb184d3b3d1f4002c2444b562aae"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","04b74de7d5095fdc2c63f8e63c84306b"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","d2936240464d0609b888468c200fa7c4"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","925f90c6af3563f5d343b8b8677afb56"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","010e9b8df2fbb854b42ba9bc340e47a5"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","1e747dab1d63ae3fd48641c103d1e5d3"],["/2022/08/17/前端/jQuery/index.html","064522123852db569639a2dbabfe46ca"],["/2022/08/19/前端/JavaScript/index.html","bff1a7702023e331c690ed33517bba41"],["/2022/08/22/前端/Ajax/index.html","b1977a0affc1a804be4b61c06879d9a4"],["/2022/08/23/前端/Promise/index.html","46bfc2fc796652e20fdd363d9e2b4087"],["/2022/08/24/前端/Axios/index.html","90b947da812a7d851f5a6a0e7b6c6ade"],["/2022/08/25/前端/H5本地存储/index.html","e0674f283561b4608a86cf0845802b81"],["/2022/08/26/前端/mock/index.html","247b28ae5801548f0df9b0d1562d2797"],["/2022/08/31/前端/vue/VueJs/index.html","8cd992fadde021bfc053a7774b8f914f"],["/2022/09/01/前端/vue/vue组件化/index.html","d5b672cf50bfc2e1f972568a3b23ae88"],["/2022/09/04/前端/vue/VueCLI/index.html","f1189eb17f0fedaeb2b0a95541bace77"],["/2022/09/07/前端/vue/vue实现动画/index.html","8fcb155b5b1a2e75658ebb5aa373ed48"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","7a26f94be2567231fba8f19c5447c791"],["/2022/09/10/前端/vue/Vue异步请求/index.html","c2d81ffac3acedc7cbd51a56fa94f77c"],["/2022/09/11/前端/vue/vue-Router/index.html","890415305c38bdac75549cba040fc897"],["/2022/09/13/前端/vue/Vuex/index.html","47a51c747a51ca089d948418923e89c0"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","a4c4dcb0f538d48cffd016def5933a55"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","2026fc782c8962c113f226393e703a29"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","71afacfe7155150fe72e6efeedd19885"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","eb73252c007511869f089e5f94be3430"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","9f90140651a971125ab21dab126d80ab"],["/2022/09/28/DevOps/Linux/Linux/index.html","49ed88abfd796f64919f5a84b63c0adf"],["/2022/10/02/中间件/Redis/redis基础/index.html","98633c120ea4983bc64672c040a44425"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","6b9900416161bf2f776848e7302bf1db"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","9c07c7a686c412172a75be7a7d884125"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","7eda59f1b7d7463a60780d5498b4a908"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","c8af6bda7f8db913889ab8d101c54876"],["/2022/10/17/中间件/Redis/Redis集群/index.html","d46a943a4914b869b91c3f4d3b5cb5a8"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","10c3e29265abceba8d2725fbad5f6d3a"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","2a1c7b8c2aa948ae57b8c5bbc9f3eee7"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","dba89c8b801fd33b3ab278a29f96ba54"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","42f910f71fafdb38271c3e49407d015b"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","0ef1371572892ae7a042b0e4ceebfb42"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","f01edbc175324365bde702e4c5271155"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","572706288f50eefeeb161f0d717a25a5"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","276f2b00b128974fa6b05941f83984d3"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","19725c3ba3960257fc78df55edfe36e5"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","57406d32f638a35a47ff66de14cefd65"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","20815c7c15d94aec7fdaf7d7d983f298"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","bb289ea011e4f66576a10ee890721b7b"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","1af036951e269f60f0efcac0c6882160"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","680404b2252024c985e8855fb05d6a26"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","3c1dec2b2aa23b4b6d3f7c9327ba652a"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","382f8f7a84a1fd3df16575bcddde7bd6"],["/2023/03/10/DevOps/CICD/CICD/index.html","04cf08c1e67015c01c0991cc998833ae"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","d912f927082d30277b6238548c062513"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","ba245ccc5ebf0e4ad854302de165bf31"],["/2023/03/13/Java/NIO/NIO/index.html","443b4946c76e648568463e7c8dd08aac"],["/2023/03/14/Java/NIO/Netty/index.html","56380129e84ad1207ee3fb489de116ca"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","ffd79d508ce722b578d0d4d9775cf5ea"],["/2023/03/17/系统设计/分布式系统认证/index.html","33a65c637438a133e4f16bf3ea9b3897"],["/2023/03/19/Java/JVM/JVM概述/index.html","c6de122fb9842f8414984ef9c03861bb"],["/2023/03/23/Java/JVM/类的加载过程/index.html","cdf7af4bfbcac6c78634634177969557"],["/2023/03/28/Java/JVM/对象的实例化/index.html","31b98924d26307a25c0a977a1272469e"],["/2023/04/01/Java/JVM/运行时数据区/index.html","f8f291e146d2520fb14b315ef1e8ec78"],["/2023/04/04/Java/JVM/执行引擎/index.html","f6f9161e4d238370f5d35e4362d068f2"],["/2023/04/06/Java/JVM/对象引用/index.html","bf48079cc18165310ce5ed09eccf1487"],["/2023/04/09/Java/JVM/垃圾回收/index.html","29c203d8852d8ff31aab0d48e1c8b11a"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","bb9c64213ee219db71bf3c66e1379df1"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","366b23bf916cdd6054a77b014f9a0683"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","cf7bb9bdcfda8b8b5dc7f277554eb215"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","85c9e555c6df3b6e01d329e73535810e"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","5cf4f7865e606148563c3528adeaa634"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","99a8ceffb8e16794e7e4b7c2ffa8abe8"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","90d1b257712a20036af0fcfd77791a07"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","7b15f7aebaf4249245b48b7a969a6c39"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","baca5c3ee9cbb93d428ed67c1f3ba730"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","b404b91b71a228d00f8c040bddbe539b"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","65b0296533959ebe3f6c07af2c073fe2"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","422866432f637c6271294d2f0fcf65bb"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","45925781dcb5e0e14523b57c47afa74f"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","2f16a18f7f7e79957586c404ffffe015"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","7bbc185fb40ec6bd93786f6ff457ba1f"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","0bdc3fd944b8146121b14055807c1623"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","75ed97f5d6445ac9eaaf013c313c5809"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","638f4f8db19caec0e8dac23a6bc6b3eb"],["/404.html","90553a090089887fce84cca77615bf1d"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","b2e0ce0e8a7e1576f4b5ed8b42a180b3"],["/archives/2021/02/index.html","e6f557d6c0962b33f87f7a33a8570a88"],["/archives/2021/03/index.html","68a9f0816063dafd510db0e7436a73cb"],["/archives/2021/03/page/2/index.html","5ddb896379a51396d5fc4bbb12f8dc5e"],["/archives/2021/03/page/3/index.html","1552c4285ec2dddff5d61657005901f6"],["/archives/2021/04/index.html","d0cf934d8d82f4503d72a20fa9187119"],["/archives/2021/04/page/2/index.html","5604dab3501dd57c490c817bcc971eb3"],["/archives/2021/05/index.html","0650336109dae37c3a92f9655d9bc7f0"],["/archives/2021/index.html","e1b0269523e3161074d08e28dcd0f640"],["/archives/2021/page/2/index.html","083c28a8294b166d017f75b772bd7af3"],["/archives/2021/page/3/index.html","5f1a365ba4352dce8894552129e7883c"],["/archives/2021/page/4/index.html","f74031e23f2e8fd214eb5b1ae06884a9"],["/archives/2021/page/5/index.html","22bc96e604ad472a4011fb9903778a26"],["/archives/2021/page/6/index.html","03b0efaa24e039297573bc741246793d"],["/archives/2021/page/7/index.html","22ecbf7f43e118656a0f0c0eeef9c2fc"],["/archives/2022/01/index.html","1331924d1357d5f41770bc1d86140591"],["/archives/2022/04/index.html","15bec52533911229a52fa3b3ece1c562"],["/archives/2022/08/index.html","a0fd1b44c4f7a074e3c61a318d5baa2b"],["/archives/2022/09/index.html","56b128543330128de1aff6276a349e3b"],["/archives/2022/09/page/2/index.html","dd71bd846941b34c25846555b376da96"],["/archives/2022/10/index.html","a1a51a06b9fa564aee017b38b1de8601"],["/archives/2022/11/index.html","d993af7b456305c7f2c69b4e499f1b44"],["/archives/2022/12/index.html","a69a69d3f73bbff031d8e6ea58d78cf1"],["/archives/2022/index.html","ba216e7b314c957428396b6df4291de3"],["/archives/2022/page/2/index.html","e81e232c16483209838635bf208db399"],["/archives/2022/page/3/index.html","dcd7f005fe72e7f35a0dbf059df1a6b6"],["/archives/2022/page/4/index.html","d89b4226a5dde3f1931cbf929e418772"],["/archives/2022/page/5/index.html","ff48631e07a8a531e689743df161dec8"],["/archives/2023/01/index.html","e6a974b952b17408f71190cc44034e49"],["/archives/2023/02/index.html","375762ca88d1e0c0cc3736bf64f0e190"],["/archives/2023/03/index.html","33dbe3071feb35fba43eb9724c501d49"],["/archives/2023/04/index.html","a1207f0e48de2a112c9bc0829398ea7a"],["/archives/2023/04/page/2/index.html","fffc74d3cea7cbbb278a5788f537f3f1"],["/archives/2023/05/index.html","dcd5a08ade3177907f41ab42c04b9d1e"],["/archives/2023/index.html","f6f05ee15bf3ee99c9620944301e6b64"],["/archives/2023/page/2/index.html","6c0cdd47a07b05f2b1418f14f47bb149"],["/archives/2023/page/3/index.html","e976861798e06db04ea3477da7a9f586"],["/archives/2023/page/4/index.html","c9c1bf0a28993b53358c4a805100be8b"],["/archives/index.html","c8b8590cc82269c0412a466bd53a7fd7"],["/archives/page/10/index.html","4f392f0e34d42b5c63650555a3168dec"],["/archives/page/11/index.html","32da624a7aa5c8bf7e0910c1d7f68078"],["/archives/page/12/index.html","4e4d5b71ad01c9fef49e234e4aeab770"],["/archives/page/13/index.html","39f555bc8950a6705bc0a62afe08a3b1"],["/archives/page/14/index.html","624896fa6c2db49c26c8769bb835bd90"],["/archives/page/15/index.html","bb3164e8e43396f89c4db9565ecdf084"],["/archives/page/2/index.html","f0b80d4e6f8c046cbc02926dbe8a865f"],["/archives/page/3/index.html","58a9a7a96be03cc57bdb9b7dbb835cbb"],["/archives/page/4/index.html","a438acddfc77bdfe15e7dfcd31f36e5b"],["/archives/page/5/index.html","4f86bd06fe21ca8b78a867a59a173388"],["/archives/page/6/index.html","46f2091e6a150e34918de84922c4a2ba"],["/archives/page/7/index.html","1ca62d5141a438618c2199cb842e6258"],["/archives/page/8/index.html","e67cccc7e9e79697961a17c0a5cdb1d4"],["/archives/page/9/index.html","75ba373f2d997ef9105585cd4ddda1d2"],["/categories/Devops/CICD/index.html","6a78497d6dbe03b22e9035d44f99720a"],["/categories/Devops/Linux/index.html","44bedf32c5b78ee84351f116502fef0e"],["/categories/Devops/index.html","68340fa6ae5b3b85df4e9628b88dad9a"],["/categories/Java/JVM/index.html","37e2e522848b1547b366cb319d9d948a"],["/categories/Java/NIO/Netty/index.html","16cf4d8f2563ee44768147dd798ce98f"],["/categories/Java/NIO/index.html","e906c36f2d22bd90041309de116388bc"],["/categories/Java/NIO/原生NIO/index.html","b90d245948cd514382233331cc923896"],["/categories/Java/NIO/文件操作工具类/index.html","77ab1fa9ac72432f8732b2ed545f04ea"],["/categories/Java/index.html","98ba5b520ca61b43b1a9dfd2a4275d5f"],["/categories/Java/page/2/index.html","e13a8fbd2bef7458260ef7b2237ae606"],["/categories/Java/学习路线/index.html","4c19ae9f90ea794cff1fdc08904aa755"],["/categories/Spring全家桶/Spring-Security/index.html","ff281fe823a3c8ca2f644d5fa9722fd8"],["/categories/Spring全家桶/Spring/index.html","85453f7c4816836e651be7aed269bab7"],["/categories/Spring全家桶/SpringBoot/index.html","e1c72818f470c99a40fca21627b66e3a"],["/categories/Spring全家桶/SpringCloud/index.html","3e306b8201d484d639fcf38c15474463"],["/categories/Spring全家桶/SpringMVC/index.html","76efe74abf9311af09abec324bda9ab3"],["/categories/Spring全家桶/index.html","1a6e1dda2596469e17ee3d6326fdc6a6"],["/categories/Spring全家桶/page/2/index.html","5d62cc2d79f2a51372c4e962c34c2baf"],["/categories/index.html","f888577def1f00863b35e80d1c8524d8"],["/categories/中间件/ElasticSearch/index.html","cb5216125f75974ad02691311a235938"],["/categories/中间件/Redis/index.html","95d87c8412ba672b1c3c2ddc392b936e"],["/categories/中间件/index.html","e4064f8f1a23011c53083e39047bfdd1"],["/categories/中间件/page/2/index.html","604316532f5e8c2f7fafd5eba4fd9106"],["/categories/中间件/消息队列/RabbitMQ/index.html","c115ca811031d0e4057ef4fb60aa677f"],["/categories/中间件/消息队列/index.html","143d70f20c90e82e42b5ffd3f1668235"],["/categories/前端/Mock/index.html","62932c922b6bc4cb8d8d0b530fe251ef"],["/categories/前端/Promise/index.html","d1365c284dca2ebb54984013771ddb03"],["/categories/前端/Vue/index.html","a0949e3fdb152a1a5582749c1c6e447d"],["/categories/前端/index.html","ce40c163a1c2722498efaf087b38a5c1"],["/categories/前端/jQuery/index.html","6b4936fb07b4b97be8cbb1505b2e66f0"],["/categories/前端/page/2/index.html","c20f8bac12ccf6c96d056605ad18b575"],["/categories/前端/原生基础/index.html","a70990f1722e733ba315d766c0197339"],["/categories/前端/异步通信/index.html","c14b9e1b5701f348c8031383c73972e5"],["/categories/工具使用/Git/index.html","f9ce327ce0e9a8d6a07509f2edba8fce"],["/categories/工具使用/index.html","edc13f1e147d864dcde3b76ed6cbc6f8"],["/categories/工具使用/markdown/index.html","0fc7d4abca8ff681809afb95e5618a58"],["/categories/工具的使用/Docker/index.html","7daa02f6c1942bf1b35a9b0de21d17e1"],["/categories/工具的使用/Nginx/index.html","cee4021fddfe3d8f03e252e6b0eef322"],["/categories/工具的使用/Swagger/index.html","14cab1b9a459012f2bba2d7ad4a344f4"],["/categories/工具的使用/index.html","56c12758d9316070d01907aba6b8579d"],["/categories/工具的使用/博客搭建/index.html","d0b6f4254797497723667ff80cf96eed"],["/categories/数据库/MongoDB/index.html","42c0282f8af71b36413de6fcd49172c3"],["/categories/数据库/MySQL/index.html","cf0ad938e5d15426fa9ef111c2a5b3c5"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","346ccfc9d0c66521ffc13a4fadb03429"],["/categories/数据库/ORM持久层框架/index.html","5beef889cf888d2c13ccfd4ec117c36b"],["/categories/数据库/index.html","847e5630858240d98a4223b60dc85c1c"],["/categories/系统设计/index.html","e17ff649813fa8e0a5dcc7b03af4f545"],["/categories/系统设计/page/2/index.html","cbf0b45840373b059b1be0417ab2cf4d"],["/categories/系统设计/分布式权限认证/index.html","365ffafe365d655036c845745be47e2d"],["/categories/系统设计/设计模式/index.html","6cf68ca8b6e2a6188d8432ca052be77e"],["/categories/系统设计/设计模式/page/2/index.html","b9ccb164435089547978804f4c8f47ac"],["/categories/计算机基础/index.html","6c2591a7b79fbc207571c5119e38e53e"],["/categories/计算机基础/page/2/index.html","e32e02bd319095a5a77f829880f7e903"],["/categories/计算机基础/page/3/index.html","622ea038d8c2708e5dfe288a4ecd6042"],["/categories/计算机基础/page/4/index.html","8c2b63540627d32ad6cd99f28a7df643"],["/categories/计算机基础/page/5/index.html","4cac16246d039f2ea98dd3a33a5de333"],["/categories/计算机基础/page/6/index.html","863e9d31eda8889bddb8f3e712fd6707"],["/categories/计算机基础/操作系统/index.html","60f1218d452781e652e04a15777d135a"],["/categories/计算机基础/数据结构与算法/index.html","23367f49e5a16602852ba7e3a18e58f6"],["/categories/计算机基础/数据结构与算法/page/2/index.html","dea11e7bea564ebf6f31bec54706ae7b"],["/categories/计算机基础/数据结构与算法/page/3/index.html","0db9ee42c40e74ff32eea149190e4d4c"],["/categories/计算机基础/数据结构与算法/page/4/index.html","b007fc35257b72421d335a167a56ad61"],["/categories/计算机基础/数据结构与算法/page/5/index.html","1a47867870eef428cf3b592c2f10c33f"],["/categories/计算机基础/计算机网络/index.html","0e0a646d7469cad586d5ac06bec5bb4c"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","2ef724e754b7a52db2ad441d868cb566"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","b86d06d84b49227f23dbe0ef3b84d88e"],["/messageboard/index.html","1d4317107a1bf44b7dd7b1280cc541fd"],["/page/10/index.html","e6d0bd3d56faf421d2425b2e9ede337d"],["/page/11/index.html","117f9c406ec8f3fb2ab4971c6905d13b"],["/page/12/index.html","ed1d29423fa926594e8a099c8764ee4d"],["/page/13/index.html","fbd750bb8adcab73128fd843d476c2a2"],["/page/14/index.html","2789c8a34548bfd1a4c804f6bbc0dbc4"],["/page/15/index.html","10d7239fce260fe013cefea153919eac"],["/page/2/index.html","b0f2bfeb3a11397157e8a46eef66bfba"],["/page/3/index.html","6a98898abc98ddc4732b7b551a0a1638"],["/page/4/index.html","c3da4fb41f53af9a9274361745e007be"],["/page/5/index.html","c636ec4dffe5f63edd125eae7f023fd6"],["/page/6/index.html","1cc89c52b36eb5b3705f2269680d0e1e"],["/page/7/index.html","fd034f4d4464a02f59f221147e814f58"],["/page/8/index.html","7bd584e3ef1520bcee796798cce5de46"],["/page/9/index.html","7ffc448907e1779a840557b70a7d3774"],["/sw-register.js","f1c324efe4cd084235b2d7e7224c63a1"],["/tags/Ajax/index.html","7662dd9159d4f9454f131a5e26eac40c"],["/tags/Axios/index.html","d7ba1bbaa985ec11e59e141e794f515c"],["/tags/CICD/index.html","83ed2d7695eb27c382ac7486e71064f7"],["/tags/Docker/index.html","916a3587d712aa3588c03b629260323a"],["/tags/ELK/index.html","f83c767b7b97ad81f48aec0c11513701"],["/tags/ElasticSearch/index.html","4a269405dda776d84759bc7b24f98c9f"],["/tags/Git/index.html","6c4a4f438fa506423d1317e21c3b14a3"],["/tags/H5/index.html","3c4dd34285925fd20c894cc98dd05f82"],["/tags/JVM/index.html","001a0f8cacc345ea2dffa71a3c6de36b"],["/tags/JVM内存模型/index.html","491752ffd68668d04b32faae0bad5b34"],["/tags/JVM执行引擎/index.html","c9dd201d3d8ae27cfb87496631b2981b"],["/tags/JavaScript/index.html","2af706cd959d6b4adeab341e6251abb1"],["/tags/Kibana/index.html","fd669f1e6c5d05e3adc521f868a03277"],["/tags/LeetCode/index.html","cf576a6f3a0d9837ea85e0884a9cd8bb"],["/tags/LeetCode/page/2/index.html","ce9e0ede6adabf18834a6e5684be059e"],["/tags/LeetCode/page/3/index.html","4563f4c9c3c3627f2eae15db13e19906"],["/tags/Linux/index.html","d826c09f027badef3fcc0125a779ef54"],["/tags/Logstash/index.html","c5d5281b3eada1cb2822ec545d0d310c"],["/tags/Mock/index.html","6f59a32d287d80e36f1b19ee0503858f"],["/tags/MongoDB/index.html","e2fd7c946593eae4541b385806229313"],["/tags/MySQL-数据类型/index.html","4062e18a25b70451378b493d775a04c4"],["/tags/MySQL/index.html","d36ac531dbb074927aca924b2ebb2d03"],["/tags/Mybatis/index.html","4805e03fa02b939dffe29425dbbc4890"],["/tags/MybatisPlus/index.html","2b58047facf92d4dfec586d0f95467f1"],["/tags/NIO/index.html","97be34a63003e96388686e941e7dff61"],["/tags/Netty/index.html","c70e7ab1ef3e01588c1abecafe639c5e"],["/tags/Nginx/index.html","2250415336f9359988d1e1231fbdd2dc"],["/tags/Promise/index.html","e5e447329965c44e4851909b51ffba47"],["/tags/RabbitMQ/index.html","27fb9522dc630e8b2e3ee25af4b0114b"],["/tags/Redis/index.html","17ea212f8e7e53e37d4d923f87682b86"],["/tags/SSM/index.html","c82b3113b0307481a90b687838a2bb8a"],["/tags/Spring-Security/index.html","ff95e0922edb6deaabc92e49bfc75dee"],["/tags/Spring/index.html","3c7c97745387d5b6554a0ace78611195"],["/tags/SpringBoot/index.html","e3355bcc2356c468533631bceadc87d6"],["/tags/SpringCloud/index.html","785cfc6362591f3cbf074451219305b4"],["/tags/SpringMVC/index.html","7ce07ab8567e3e23b81a2042dcf93516"],["/tags/Swagger/index.html","b20b477af318472f6bd0dc430acd6a7b"],["/tags/hexo/index.html","65acad061707281a144dc97ed26eb697"],["/tags/index.html","2c8ae174b1cfb23907dcb8a980edd5b6"],["/tags/jQuery/index.html","98b21a4caf08521d40fde43549c08f9a"],["/tags/java/index.html","20756a55cf701f20a402be24387f8487"],["/tags/markdown/index.html","f886a3de304e45faa988987b3ffc51e3"],["/tags/noSQL/index.html","eb9d4c56128b1917cf802e0cdbe2a438"],["/tags/typora/index.html","3d842b0d6f831660f1d9f86f97487f0c"],["/tags/vue/index.html","ac032bbbe6f0d0bcffaba4e277b04945"],["/tags/享元模式/index.html","8873c645293caf4bfdb8aeac078a3703"],["/tags/代理模式/index.html","a6e1c83ceb12af7a8e6a58515734b5e2"],["/tags/内存管理/index.html","d053d84cd6f88ad16ca255827150515a"],["/tags/分布式/index.html","47d0de7323b620890c0db9c295f0036d"],["/tags/分布式系统/index.html","1d4bbfa6b10f4540b9407adaf155b787"],["/tags/前端/index.html","23844c9b79997412bc75141996f50606"],["/tags/前端/page/2/index.html","605e35ce4c152ea48f338c83228e2624"],["/tags/博客/index.html","8a1c0ab8ff559e1d45d008e177ad3bd5"],["/tags/后端/index.html","8c71e5e554ac12cb77bfd42941772754"],["/tags/外观模式/index.html","e1dd83c224521b542692ea1ea6f4d7d6"],["/tags/容器技术/index.html","5f63202fa44e8a8085570db1ef6078b5"],["/tags/工厂方法/index.html","6e114ad17706b08281db4024fad40409"],["/tags/微服务/index.html","77976603b5da8aacea3546f1688aaff7"],["/tags/抽象工厂/index.html","9eefab89b64700636226ee283e264ce1"],["/tags/持续集成持续部署/index.html","cf9dace5473af65c1901f665e4b89ed2"],["/tags/搜索引擎/index.html","f9915ce09736626740b0fb551898de9e"],["/tags/操作系统/index.html","16afc55d23dd29342606dbd527a6153e"],["/tags/数据库/index.html","eb279669ef93d8afed0158209062cb39"],["/tags/数据结构与算法/index.html","efa874db9b21eff5dc0d8e79c0b50561"],["/tags/数据结构与算法/page/2/index.html","4bb0b6ddad0c70c20a3a3eb17801f4de"],["/tags/文件操作/index.html","10e08d81441fe5e0ad7ea8eb38976dd8"],["/tags/日志/index.html","471926a6ada110c651281b7dc0c7d58d"],["/tags/服务器/index.html","39c19edec12120491c12fab0644bbc13"],["/tags/权限认证/index.html","b9064e779a1b02cfaaf05b2cc8a8cd06"],["/tags/桥接模式/index.html","c7b19b19d9a2c4391b1a00f7425c199a"],["/tags/模板方法模式/index.html","a1655f2a10a1ab4c6f925a5b7e28356f"],["/tags/死锁/index.html","cda2de73b825f513d6d918df46fa0e31"],["/tags/消息队列/index.html","8d3a5ef28caf78155168a23701317cc8"],["/tags/版本控制/index.html","6076e2a5ff3a88c3bc3a59d4b942a0be"],["/tags/策略模式/index.html","6d749e39b58c2eea1c100a7f02fc389c"],["/tags/简单工厂/index.html","ee7d63e7e9aada73f8329b1c5f8482fc"],["/tags/算法/index.html","1e2c5cf7f837bcff657daed24479ddc5"],["/tags/组件化/index.html","0cf06bdf01dcd7fde4f010301bacfa56"],["/tags/缓存/index.html","5c28adb95dc5025070270b3af4cc6d03"],["/tags/观察者模式/index.html","b9187808f1c3e547e4208ff010f6ab0d"],["/tags/计算机网络/index.html","ca03fd94bcf1d726ef5e961d5e3c300d"],["/tags/设计模式/index.html","d2678608e469687152b2ad537c097e7b"],["/tags/设计模式/page/2/index.html","0e1300aabcbfbebb66eb6607eebe4458"],["/tags/进程管理/index.html","3c2d352a2a41e992d1f3a0d0df952300"],["/tags/适配器模式/index.html","f0edda43685e4b88abdf6a4182c81066"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
