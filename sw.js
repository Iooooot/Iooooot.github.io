/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","55f0929e1710828f8f7ecbe3d5a25223"],["/2021/02/22/工具的使用/博客的搭建/index.html","223e012b2677ceb97a062329e847b71f"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","66985f7d005e87eac97566af5f402330"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","82d6b6347c65ac6df5cd1ab09058993c"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","8cdc578f47a81f1dc7fcc22b45b16382"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","54a96c6fe1201045302717510a8d3cfd"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","97b997cceb47ab4df310d18597cd1196"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","3ed33617128b7dda05b8425a9581642f"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","1668b692423f983aa8633c27738121ad"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","4fe4313a791821a850c7723d168a9763"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","d623a9a238aca55fb0003fe415abd2ba"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","4160e17c7da18f499b91bcd5587d3f36"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","2fc289a0e37c64cc339e473e23f290f6"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","1e5ab4680530435807b793c402351476"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","f7493cae4074a3ed3ae61817bceae441"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","ec00dbb8a4faa249d3f8f0d0e313cd08"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","264bc20f1e218b34332bc22765166c56"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","147fb51da86ce1f901798116264b2288"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","cdea8e14968fdd39a3ea3abc0b62e044"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","92c37e70373570b533229e414dae3bb1"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","d6907b714357e965975d16dc9e60260c"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","aed8ac0cf80106dcf4f316aac5c7acf8"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","caf6af5597bc73d5bee49ac02640da0b"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","796d56b18b1fabcc488a1926f420f152"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","3a19f3bfe9ed8d4b2fbfcf92d14b170b"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","409bf2b7ce34dc63b9487af263f5d190"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","8aabee0d819bb4cd83eaf6312deffa66"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","f01594dc033077cabde02cb2458ef030"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","cdbbc2d3d0a690beea21f83a4494f130"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","9fbb3d5eec7407cf3f973d1b4c2a5c94"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","c63f809884585c0f5a1182fb500b1230"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","41a5414211d1b82e461d6c60b1c8fcd1"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","8d3a420695d8008952186d6869f7c5e0"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","a886f3d2a89c5e33ef306337135cbe7c"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","9bf357c0b5dba4163f386ec57b1cd99f"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","4a8fdbd206113a8d2934c037636adea4"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","5301689306374d0bdc68bb35d3224639"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","b25afe489ac0a63273b03d28382ca754"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","27cadf40520ff8ee62fb21ddf0e04f2f"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","536d59e8e621c0ec9b2d8ebb9614e138"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","e0467458f75ae7712b4cdb424ee885bd"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","71758b80f927dd69ffaff549ca25608a"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","dd975ef2eea1a586ed7a6000fe04d228"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","333b3f2025668d57f68e96c61a5f6e61"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","fc8702dc9f376f6e738aa091c7346bd5"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","c78eca1b257ad399c5886d2de183eede"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","f41da7330221440873603cbcee87f97a"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","a0ba8d354241d9643cd68a7347f9d5bc"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","d1c4e4196ac0df31990eee00d8420ef9"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","19e947a542726957dace413c056e94b4"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","96a38564befc92536836ef8b17d3453b"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","a32ac21b2097076eda6d082fd5350f51"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","c44e4b6d92337beadcb6ef08ad12b10d"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","dc287089a20a1aa635248af1f32f22bc"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","a01fa9bbc970a9e2759a81ba7fd68b00"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","32229b780fef94f6ce53e8c21d096609"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","d744955d65a2b7e21d0bd4b0bf93ddf8"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","faa8c2d5e58cd83ba84270576be8ae10"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","cfa26e56024a6479a8a760fc1e7c20c0"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","8aeefc7a5038f9fd8c03d0401c882007"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","c1b67cc304fa825fc2bcec9b26328b87"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","6d4a5fe719880eeecd80bbdecf052d55"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","9d5aa82a40093f44e443f55ae6b8d45d"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","3f05a4acb1322a5a395ad637c7af723c"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","9a0b65c751eec2d20ab57ee972ade789"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","400aad0367de8545d5e63e9656794816"],["/2022/08/17/前端/jQuery/index.html","492ca85175ff734109dc4fda181103d0"],["/2022/08/19/前端/JavaScript/index.html","cd40d247be0ff7149475f252247ef6d4"],["/2022/08/22/前端/Ajax/index.html","da112718dd91ab13080e1852388a5c1c"],["/2022/08/23/前端/Promise/index.html","4898ad927f43d3adb8fa019961efacb6"],["/2022/08/24/前端/Axios/index.html","207d0731e726e1820c1cb60745e6dfda"],["/2022/08/25/前端/H5本地存储/index.html","4ecf8454e7c6ca36b92b2c801faf7f4f"],["/2022/08/26/前端/mock/index.html","d3f6a9bb887f38b7c4f9e72262dd3b99"],["/2022/08/31/前端/vue/VueJs/index.html","dcab81cdb84a92453bb9c898e20c03e4"],["/2022/09/01/前端/vue/vue组件化/index.html","6808886d5b65d1b0ad37b0925d388127"],["/2022/09/04/前端/vue/VueCLI/index.html","cfb530f0457d33fd9034754a1a886d91"],["/2022/09/07/前端/vue/vue实现动画/index.html","a9d03eb04de3ea6a5fe4d75093cbf75b"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","c75b1012e8f5d9533143d64f32239184"],["/2022/09/10/前端/vue/Vue异步请求/index.html","7e4f085e8c798943fe32ba7a9b774147"],["/2022/09/11/前端/vue/vue-Router/index.html","e241e710a5c75f588d29ca39c6e55d63"],["/2022/09/13/前端/vue/Vuex/index.html","2dd6b60196c57ac8654163b240a43108"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","a245fe98f0f155142075e62ed6ae5091"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","5d2367862e25a796e5c2d64dd04b1001"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","6eeb4ab836eae0d49cdbc35a5e46f43c"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","fc6bd9ede76756aeb766c7d192204017"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","b58f57ef2dd8c28b3de921c374d3417e"],["/2022/09/28/DevOps/Linux/Linux/index.html","a7eabb3d66b30cff0583874d4c776bad"],["/2022/10/02/中间件/Redis/redis基础/index.html","0254a8bc66803edd5dbaf3e507608562"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","6c9f228fd65c037f28559d5a5f4fd822"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","179a6b8f64dccc6f4681c2b5d1b1874a"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","d2277440f332c3ee9b028aebe50bc2ea"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","e0349f633980cb0b56e41cdcbed80dc8"],["/2022/10/17/中间件/Redis/Redis集群/index.html","92fb7bea03f62b338c4157052a2df912"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","e5b511adc4cc7cee4ccd7d95d4182045"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","5c4a16080f94605c45ca7ea94faa47a5"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","ea788183edee51a7cd7cc559332f9f7b"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","7b822fdbb194bd3aec2c2c74c8182f7c"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","db6413cf22a50d4f3aeb419491284627"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","d0a8f602b31bfcebffc4e36198a2b151"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","6f4f12d8f0b3a7aa7bd5c7dead5d0942"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","276ed2d9c99d7a1b9089c6eca61bc4c5"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","82174931641e974b06a4ee7e6c48fe6b"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","156863c206c1c504f7fc3927d1a4dd6e"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","dfdbc879c953a837eacc2fc30d506200"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","381aae531d3192e995c0826e82ffef48"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","1761b63c51aa790846f19c7133a22aae"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","e11fe03328efa00f14f7ab35879d84aa"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","ab5c12d683a2a11a9a74e28db34198b5"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","5845f27fb24c076a18aaa28349de22f7"],["/2023/03/10/DevOps/CICD/CICD/index.html","cd1bec223130d01f47462966ec50f9dc"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","b5fe40e953f091f6e38739636197afe3"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","482446e4f456106dabbab40c689bff2c"],["/2023/03/13/Java/NIO/NIO/index.html","4aeeee73f63a94547f2faa526bbf0e8d"],["/2023/03/14/Java/NIO/Netty/index.html","8a53a8636869a47436448ea82afa0188"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","9dcb129e024e1e0f8af0887b7703b047"],["/2023/03/17/系统设计/分布式系统认证/index.html","e641be68c2da7a0de2abf498e7f60092"],["/2023/03/19/Java/JVM/JVM概述/index.html","e6ae280ba01e9f3e09d7805184389ff0"],["/2023/03/23/Java/JVM/类的加载过程/index.html","7318ca97f1c6342a88b7de182164e1ad"],["/2023/03/28/Java/JVM/对象的实例化/index.html","921c4d676f2bcc68ed43f05828dab90e"],["/2023/04/01/Java/JVM/运行时数据区/index.html","51621d0b683ac495ddf1cdf4a9177c45"],["/2023/04/04/Java/JVM/执行引擎/index.html","a5fbd74548ed8b775115806ecfea28db"],["/2023/04/06/Java/JVM/对象引用/index.html","f44c8a68d0e0d8aa9644182600aaf548"],["/2023/04/09/Java/JVM/垃圾回收/index.html","64a5ee8ae6ec407d9519177cbc89946d"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","77925eac6af99fa035554f3a5c4d5c2d"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","ea65157389802d2d00e3f6464495bbd0"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","7456941a4188746647619c5eb08b14fd"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","e1b20cb43c0cf99ec8f4972e12899ab2"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","57e0a6f1b327cc93912a1d123271415c"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","b8d031287dce048e2a3d82cd7e9a2c30"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","ec8b71d735dd4b1d5378117a4b7b3c6b"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","a1e0be6c6a1dace89349bf5d46551bba"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","3f105a63dc48f294ae3820c354d89a41"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","0ba356c298a197c2a577ffffbc7f4923"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","501c56cb70239448d090a9f6a24152c7"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","9a8218372898fbb36fe81102710dcbaf"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","1feca34bb1156d4703ef597b42637a7e"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","6d91c53f6c52bc89d5426e06d24db9d4"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","6ea343707365a3c1d8da30aeb30fd7e8"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","de6b1c6d2a2a011448b01ee231190b79"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","b1b7caa2a4420ca7dc104bbe8d36a0dc"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","cffb58345f4a4d0ae470426f87e38590"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","ce833ed088a86cfec081fdae67f14b89"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","61018e269cbc8063e0ad41b1b11446e3"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","da8be969663c65849997630e0c7c691f"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","75d2fbe51512ecdd079b409b7d68af38"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","4fa58886bf9e34763ba8a29b0007d811"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","843d3253f0b2368222e3feb069eb2efd"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","83a01f3715c373ae8562d30b46a88ed5"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","7710686d056b5147e88689808e88837f"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","6141149855178ebfba668d483ef35611"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","220a0e228c53a518c0d5da012985224a"],["/404.html","5585131bb2670a2acbed550d430b9d51"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","44fcc2d5e058afaf4c8836e409059daf"],["/archives/2021/02/index.html","eeaf6b809e4dfe115a59300c3a02e871"],["/archives/2021/03/index.html","78963dcd8e9b6331fbca044b59c9cb6b"],["/archives/2021/03/page/2/index.html","4d13aca03d6a704c4c3c0a3989c081ba"],["/archives/2021/03/page/3/index.html","d0461f9bf0dd244fb00e30fa07f3f43a"],["/archives/2021/04/index.html","edbb1005ec6abd2057d2a1d50a1e1ad1"],["/archives/2021/04/page/2/index.html","d2f74200bfc219d93f91bbd2063f856d"],["/archives/2021/05/index.html","ab77097e79ca53ea6c28f089cdabb6b8"],["/archives/2021/index.html","273ad9bc0707908433c0bfcb1a33cb04"],["/archives/2021/page/2/index.html","28194448858f11a7ebd3d02542b28e5d"],["/archives/2021/page/3/index.html","44629d640c161335365b7e14c0597656"],["/archives/2021/page/4/index.html","0b4a36d481dffd1d9c9fabca9cdd3c4d"],["/archives/2021/page/5/index.html","1918f0d2b7ed26211787dc20906683df"],["/archives/2021/page/6/index.html","de728a1a63165b551fc6542783027ec7"],["/archives/2021/page/7/index.html","36953c2ca11f250fef11143f3cc386a3"],["/archives/2022/01/index.html","c3cad5652109ab177ba70f6fc9b765a6"],["/archives/2022/04/index.html","2de36647e27fa0ce939183df3821a981"],["/archives/2022/08/index.html","a610c9bfbd471fec0df4fa33f2af50d8"],["/archives/2022/09/index.html","1b31438b3511b46f4f448ac45ecb7824"],["/archives/2022/09/page/2/index.html","59d7f249b949464b94c2e6dd1b9c2ef5"],["/archives/2022/10/index.html","9fe846ddfc6a729aadd9d9d36a25ddd2"],["/archives/2022/11/index.html","3a87deb6761df4bed4573cdd43e00ad6"],["/archives/2022/12/index.html","52d1dc089d87a118921cab0ca4a01a71"],["/archives/2022/index.html","67b732075baab86908d3d2fe525f362e"],["/archives/2022/page/2/index.html","057e3dced79c64f717a60762903dbc7e"],["/archives/2022/page/3/index.html","222a937da194080127ad5826f8b2b852"],["/archives/2022/page/4/index.html","ee397686205620191ddd0450aa2a7aef"],["/archives/2022/page/5/index.html","e235b0f438d89802cbf66bf14cbbee5d"],["/archives/2023/01/index.html","596c544c5b4c377b6f1eff4a5b7900ce"],["/archives/2023/02/index.html","b543992ee3a3d78fd01fa0725b2ae448"],["/archives/2023/03/index.html","f84cdabe215c03346a4d65ee160eb047"],["/archives/2023/04/index.html","fa77d180185ddfc8f4828f76d906c235"],["/archives/2023/04/page/2/index.html","fbc19e5d87c41f10317eea8a1a1ecfa8"],["/archives/2023/05/index.html","88cde6eb42cbab84523dc90a1c858867"],["/archives/2023/06/index.html","3994c92843d68a0e31d8ab50f15209dd"],["/archives/2023/index.html","eea0ff1f1722f582d1eedde16dd9821a"],["/archives/2023/page/2/index.html","6d52e3b48f5a82040600dc2bb76d4f72"],["/archives/2023/page/3/index.html","0bb2df31ae2d7bcaeb7962aef69927d5"],["/archives/2023/page/4/index.html","d38872be8bc8283dd8df28efbb39fcc6"],["/archives/2023/page/5/index.html","812340ce1a6018e0ba170883807a8f91"],["/archives/index.html","dc1beb89f272563ca6d264b0edda2de1"],["/archives/page/10/index.html","5d49591627fb51a0fb4931af1cceba43"],["/archives/page/11/index.html","7c03fc22aef140a58c1afc688d0e8135"],["/archives/page/12/index.html","0af9d7351fd886bff40d3d8135fdaf07"],["/archives/page/13/index.html","d40fbf29d9a4d18fe7b903f4cf9b3c9c"],["/archives/page/14/index.html","a08a8b08d29e787a3fdde483c534ee21"],["/archives/page/15/index.html","2d7a0ee9384b0d77f99c26720fb1639f"],["/archives/page/16/index.html","b82899834961f49e7576bcd31cd26b87"],["/archives/page/2/index.html","6e0464149157f21f1ff3d3ffff9c5b64"],["/archives/page/3/index.html","6fda116c31ca082abe65074c62da69fa"],["/archives/page/4/index.html","302fdddd9db05e2e7e0ad558ea4d209e"],["/archives/page/5/index.html","6e50b19d0406e9757b26c4c157cd2740"],["/archives/page/6/index.html","ca5a6f6e56a851967b918a0758c48ff0"],["/archives/page/7/index.html","079b9f83f0e0e0cafc5e59ffc02c9fcb"],["/archives/page/8/index.html","cebade466197af536a53b9c9c3e0f204"],["/archives/page/9/index.html","6756e0cae0a9b9b8ac958c3da67e70d7"],["/categories/Devops/CICD/index.html","5b90ba4e2abd977a43805365b793bfc1"],["/categories/Devops/Linux/index.html","e340274594152c626f28ae0e5dc8921e"],["/categories/Devops/index.html","6ec73dd5f44a76ba1433bace8c976789"],["/categories/Java/JVM/index.html","764f99477ef8d028364c657330bb4e4d"],["/categories/Java/NIO/Netty/index.html","c08f29fa1f7eaf926cc435b366d41840"],["/categories/Java/NIO/index.html","d5911e536b5a69ec2e0c2f09cfb2fe55"],["/categories/Java/NIO/原生NIO/index.html","7a67065776e42ec30a380d2fe0f7c81a"],["/categories/Java/NIO/文件操作工具类/index.html","a03a014dfbcd58e6b082d5e4e40b5916"],["/categories/Java/index.html","0949342a84db7db28f9d47b0148dda6e"],["/categories/Java/page/2/index.html","3a4815f923d5456e7557526dec3486de"],["/categories/Java/学习路线/index.html","d9fcc651705400274a3089a46b4cf92d"],["/categories/Spring全家桶/Spring-Security/index.html","d1db1c001a929531db0f6a58fb003bfa"],["/categories/Spring全家桶/Spring/index.html","997c90469a3c404e0b9ef366c0d35717"],["/categories/Spring全家桶/SpringBoot/index.html","b1355958a5bff9824f52e6a6bcc68909"],["/categories/Spring全家桶/SpringCloud/index.html","dcce0ba54b354581a30947ad202d132a"],["/categories/Spring全家桶/SpringMVC/index.html","6504a33d815bc106dbe97557ad8355a6"],["/categories/Spring全家桶/index.html","2b2e98186046b630b7ed4103a2a5b8c4"],["/categories/Spring全家桶/page/2/index.html","9376fd1f1ff8bd96c73637f3bc4ecf01"],["/categories/index.html","14f0d8bc8387c21a82bfe8a0b43defc8"],["/categories/中间件/ElasticSearch/index.html","d4bb93b3ca8a7aff1601eb0a1dd13ff6"],["/categories/中间件/Redis/index.html","2c35bbbebfa7a2ca3968e1f44fc1aa1c"],["/categories/中间件/index.html","0d54b7001c9dc1519d8820ef29fe3f45"],["/categories/中间件/page/2/index.html","2caf29d5d633f5c37dfb23cc9e2524f6"],["/categories/中间件/消息队列/RabbitMQ/index.html","ced7b7c2701899f28209dfd2831630b4"],["/categories/中间件/消息队列/index.html","bea418f6565987ebda4cab95a1beb6a5"],["/categories/前端/Mock/index.html","eea2e76bdfa465f9df35980f5e23626a"],["/categories/前端/Promise/index.html","b158cf6a5c10839d1fa336fe41d2378e"],["/categories/前端/Vue/index.html","8e814f13f2645cfd96a96bb8c44a34b0"],["/categories/前端/index.html","b6a84d5879ba52409a5e070d139c83b7"],["/categories/前端/jQuery/index.html","0484fbba41b7d33336ad5e719f3ac94b"],["/categories/前端/page/2/index.html","03f15a01a48eccdfde3de5fdf55570bb"],["/categories/前端/原生基础/index.html","59262f28df276c182fcbbddc9e4e2990"],["/categories/前端/异步通信/index.html","4d1b687209eb335f40df9f41882803eb"],["/categories/工具使用/Git/index.html","7d1743a8bddbf0bda03700728d7f6297"],["/categories/工具使用/index.html","2a2bfec94b0c8f80d3170fe5e6d6a591"],["/categories/工具使用/markdown/index.html","cecd1a064ea68d528e29fd7e7e5a0285"],["/categories/工具的使用/Docker/index.html","def69705aafd31b05e0e856180780dcf"],["/categories/工具的使用/Nginx/index.html","904f329e860ae70e68133e36708032fd"],["/categories/工具的使用/Swagger/index.html","38a1c55432c220fc556baae35cebcf0d"],["/categories/工具的使用/index.html","0e869865e8375348135d2dfd7365c840"],["/categories/工具的使用/博客搭建/index.html","6cde235f76f2d633d4e7265db4f9c8a2"],["/categories/数据库/MongoDB/index.html","924dbe6419b1c68219e456da105965e9"],["/categories/数据库/MySQL/index.html","a5a67e119341c87eff771fcc1ddbae34"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","311a64cf15ea4e2d68a44e65cbdc34fb"],["/categories/数据库/ORM持久层框架/index.html","e9f38a4b45d1153858f1a402cd59df2c"],["/categories/数据库/index.html","65897c170ad72a68fad23c333b0082bf"],["/categories/数据库/page/2/index.html","b4cb851307b6b33c1bf17ae3d29d21ad"],["/categories/系统设计/index.html","82b0900f13b95c8ebde15221cc54042e"],["/categories/系统设计/page/2/index.html","b2b9e3a53479c114cb9aacff37f9fdba"],["/categories/系统设计/分布式权限认证/index.html","2a92aa562a3897e4a77bbc67fc98e667"],["/categories/系统设计/设计模式/index.html","2e127e654507fbb7fcc7d83b0ea4f6d5"],["/categories/系统设计/设计模式/page/2/index.html","4e914a8be6001a2d8b15cae3811f0686"],["/categories/计算机基础/index.html","9dc36adc70265899f9428b9997390690"],["/categories/计算机基础/page/2/index.html","e9684283d1a031ab864e731defa3302a"],["/categories/计算机基础/page/3/index.html","2fe865ab791a013828338256cba5fe73"],["/categories/计算机基础/page/4/index.html","9aa7936868bd0c0a85cc355c938bcf93"],["/categories/计算机基础/page/5/index.html","be18c6581545f94b9282f450a8892845"],["/categories/计算机基础/page/6/index.html","5cafbae8d7a5a684d750097310420a91"],["/categories/计算机基础/操作系统/index.html","682506619ff709b61aa8898fc0c01560"],["/categories/计算机基础/数据结构与算法/index.html","06c8ca418bb56b9bf439a95a9d62f3da"],["/categories/计算机基础/数据结构与算法/page/2/index.html","0e480d1b648b17ba9b696c557dcc3d33"],["/categories/计算机基础/数据结构与算法/page/3/index.html","e5c77608772b54aa61b4ac8dd0c227e2"],["/categories/计算机基础/数据结构与算法/page/4/index.html","ece255ed256605b2dc16f5a3eeba2ceb"],["/categories/计算机基础/数据结构与算法/page/5/index.html","2bf3e426a30eeb195192b0f496ef8952"],["/categories/计算机基础/计算机网络/index.html","8464bc31a2df9f0a11ca0c90e449d955"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","a7e0451f0bca4a77db9fb7a01afe7da3"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","941a3522ea01240edc109550f40869c5"],["/messageboard/index.html","33d93158a9f4fd3f5175ec4893dcd989"],["/page/10/index.html","68999fea40c121d50f45a96b6b63a323"],["/page/11/index.html","7bf0caa41a90a3d12785251f9c5fcd48"],["/page/12/index.html","e306a5477c16dd340e10adb2008c5c9b"],["/page/13/index.html","c52e925429e91ebeef4eccab11d8de0f"],["/page/14/index.html","6741ca44e39437ce2d54e16fcc6938b3"],["/page/15/index.html","8b85502a2d849a7d59517069b6b7aade"],["/page/16/index.html","00f5c907bc2bdfcfcc6d787f4fb02907"],["/page/2/index.html","b55304d8b171568320f5f0150a0d22b7"],["/page/3/index.html","48db13299a7ee8601de3611573f46d43"],["/page/4/index.html","6bf56529477a6412e08ec47df96c2fdb"],["/page/5/index.html","ec1edff20ec72f8f83de2d90b89194fa"],["/page/6/index.html","25e7ef76a8a23ad5eb9b77c013fa410d"],["/page/7/index.html","40af47bc78f1298b19eba7f289cee102"],["/page/8/index.html","171a26375add3d1c29c11fdb33cdbf55"],["/page/9/index.html","cdb975ec43ba354050b24daea6293ed0"],["/sw-register.js","1b1366660aaf56750025905b0ccb19bc"],["/tags/Ajax/index.html","976f55d1c7fec74e559690bfd9540331"],["/tags/Axios/index.html","22a31d80d029399163dd8c42e118ffe5"],["/tags/CICD/index.html","683be565714f9e3e0efbc60543b72d09"],["/tags/Docker/index.html","4704c072242ae94fe5eab3d383fbe478"],["/tags/ELK/index.html","d2aa03455650714d16bcd0419c53e30c"],["/tags/ElasticSearch/index.html","0fb1a99ea52b31b07d6b6b122bc582f5"],["/tags/Git/index.html","484e67e290ef7f90594ac137f47765d0"],["/tags/H5/index.html","e4c97ea158188f2828c9dd536afb1bfe"],["/tags/JVM/index.html","517c88e2b7925895d7cd63a2b131233d"],["/tags/JVM内存模型/index.html","b13757bcabb6c75a125c47f778699b92"],["/tags/JVM执行引擎/index.html","bc8860a505be0e581dece22540cb1a16"],["/tags/JavaScript/index.html","213ef4032ddfe84dca531c72f32564fc"],["/tags/Kibana/index.html","ae1e28eff070322dc6ddc77041f7dabb"],["/tags/LeetCode/index.html","cdd77470fa06b84af10aa833383cd3a0"],["/tags/LeetCode/page/2/index.html","d6f5bbeccc28e5764101868b019bb64e"],["/tags/LeetCode/page/3/index.html","60af76ddeffa6ab3169fb27966f89223"],["/tags/Linux/index.html","a9a89db588d9112ed6d0ae088ad18349"],["/tags/Logstash/index.html","19648f4ca96e785c0524a8b851748610"],["/tags/Mock/index.html","249b4b7ca822ba07664540b7a2381c20"],["/tags/MongoDB/index.html","ae1fc2c5cbafd4fb84076570df0e131f"],["/tags/MySQL-事务/index.html","0081d4c89dd302f6fb4cbfd8fd6464b1"],["/tags/MySQL-数据类型/index.html","5e066c903e99914fb440bd79d3614ce8"],["/tags/MySQL-日志/index.html","999c18c56ae6a54e244308d7a793a340"],["/tags/MySQL-索引/index.html","ef7395da2822c8d0c3b9f112c81cfee2"],["/tags/MySQL/index.html","bd1e25ba1406e37c16928ba7fbb6c923"],["/tags/Mybatis/index.html","6ccc900f6c22380fe6764b80dd5c8e22"],["/tags/MybatisPlus/index.html","7daf5ea77b29e5c9d453c929e97cf442"],["/tags/NIO/index.html","dbb4f88fe4cad45d8221d2ec9e68cbd6"],["/tags/Netty/index.html","d5a7ca1e4342ed01599b529306a570a7"],["/tags/Nginx/index.html","627b3e2da4e55a62037eba7c29d2249e"],["/tags/Promise/index.html","fcc6c85f0de57cc442211623887a15cb"],["/tags/RabbitMQ/index.html","e6b1ceb978d9518f86cda25a653ead76"],["/tags/Redis/index.html","4c854f534c52284f9b19d1330eed75c0"],["/tags/SSM/index.html","4c30b7429c6787424d87855445ea723c"],["/tags/Spring-Security/index.html","415becf94d9a7d932c2bf4867804911b"],["/tags/Spring/index.html","eb5069f6fa64526a34de7c8e1499406f"],["/tags/SpringBoot/index.html","7a7e955ae5c27789efe78d88fe6381ad"],["/tags/SpringCloud/index.html","70fd3c0eef2041b7aa647a4aa4062200"],["/tags/SpringMVC/index.html","22c454a6fa31ffb15e6a4a90a7c2c75a"],["/tags/Swagger/index.html","34711b2c1fa06ed3096609f2dbe93183"],["/tags/hexo/index.html","d2574063a2ec4c6d3ecec1d3d9c78263"],["/tags/index.html","e7ddda9ac59626f0a7d0288e770c29b3"],["/tags/jQuery/index.html","496977c5d7e8da949fb42b68ca8e4c45"],["/tags/java/index.html","e00c4b31048fde18eca4c3533f7432a1"],["/tags/markdown/index.html","2714afd221823f746f0f8ea07c834063"],["/tags/noSQL/index.html","2624f5dc473f1ae8ab772c0a2a9cf06b"],["/tags/typora/index.html","b3820c8d43a602a597602cf9eabeb337"],["/tags/vue/index.html","b5c4ca3ed478ba0e020e9471f97e3de2"],["/tags/享元模式/index.html","c63935bdb741a4e725d64a96495935c2"],["/tags/代理模式/index.html","e8ebf8fad28b5db4673183bf4d075041"],["/tags/内存管理/index.html","59ca5f42a1e87708d5f48097f00a0534"],["/tags/分布式/index.html","b3a53b12d92871713e64eca744529f70"],["/tags/分布式系统/index.html","090e9c0b183cafbfbe9bf14b8aeef281"],["/tags/前端/index.html","7e170a402aa747587f71fc3bf44073cb"],["/tags/前端/page/2/index.html","45d5d8f9e6b02d76222dcd407099656b"],["/tags/博客/index.html","c657a2c3bacf968b7a97275a16076614"],["/tags/后端/index.html","3f5d644ab59aba4e3eaac649ff3d7c8d"],["/tags/外观模式/index.html","91480e532353eaf5b8d5c13252092aae"],["/tags/容器技术/index.html","ab23c44bb18942085a1dde5331a28f4f"],["/tags/工厂方法/index.html","5299e0bc2ef9264b126be81b299ba33c"],["/tags/微服务/index.html","d3abac480cb6a17b975a565f3ecf1c4f"],["/tags/抽象工厂/index.html","d877da606b51457a878174d0ae409fad"],["/tags/持续集成持续部署/index.html","93bc7f6d57e4d7058f241d6d4ea7ba92"],["/tags/搜索引擎/index.html","03cba2ef632f4ce49538bbbe1971fd4f"],["/tags/操作系统/index.html","07ed777f640ec3784616d0d8d843ab11"],["/tags/数据库/index.html","02558e9b318dc1a721dc7a6434d26d85"],["/tags/数据结构与算法/index.html","423c3a24f1c0a0184d3ed31d4517c822"],["/tags/数据结构与算法/page/2/index.html","675e10a06bab4ed545c1075b009e6f94"],["/tags/文件操作/index.html","b8d840c7321dc5b214b90769d8b851f0"],["/tags/日志/index.html","7a49469fa5aaea38ec65e4efbcf2574e"],["/tags/服务器/index.html","e1056930233d2558da495509fbc1f419"],["/tags/权限认证/index.html","eba6b039aed4ffd37d9e0c587ad45b12"],["/tags/桥接模式/index.html","d8f747f2d901a3453645242a8b6afdfc"],["/tags/模板方法模式/index.html","098805da5b8ba3598e8c3d8b76cb2e64"],["/tags/死锁/index.html","983eaee10fb942f9adfcadeb743d5f57"],["/tags/消息队列/index.html","8aa060b6707bd62e0602b8a9ee3af96e"],["/tags/版本控制/index.html","20634fcae0805b6df454be4db0433848"],["/tags/策略模式/index.html","b7e7db341cccaf725e8fe0f694a97c32"],["/tags/简单工厂/index.html","8b2abd7cdc0cec14b866e503bb2f4aa8"],["/tags/算法/index.html","364d709b6f17aaf0e4a99be117a75409"],["/tags/组件化/index.html","cb184d50fc9fa5a2628422755755ae4f"],["/tags/缓存/index.html","7a1c47460f983432d4441ef6470e114c"],["/tags/观察者模式/index.html","5cc0b3cd083e99cd5d103420d7e65969"],["/tags/计算机网络/index.html","9ed387524bf73cd2876b9e26437e2db0"],["/tags/设计模式/index.html","904456e867b07fbc6f27c9dd9c50d0bb"],["/tags/设计模式/page/2/index.html","4fe3cc39e6f5d915ebd3fb51a42ce6aa"],["/tags/进程管理/index.html","e7f14d1ef40ae4549fa557b65ff385f7"],["/tags/适配器模式/index.html","b0dea81d5e3845505063e4a26bf03a6d"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
