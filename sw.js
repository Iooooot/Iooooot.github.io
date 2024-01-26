/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/02/22/工具的使用/博客的搭建/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/17/前端/jQuery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/19/前端/JavaScript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/22/前端/Ajax/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/23/前端/Promise/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/24/前端/Axios/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/25/前端/H5本地存储/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/26/前端/mock/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/31/前端/vue/VueJs/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/01/前端/vue/vue组件化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/04/前端/vue/VueCLI/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/07/前端/vue/vue实现动画/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/10/前端/vue/Vue异步请求/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/11/前端/vue/vue-Router/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/13/前端/vue/Vuex/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/09/28/DevOps/Linux/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/02/中间件/Redis/redis基础/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/17/中间件/Redis/Redis集群/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/03/10/DevOps/CICD/CICD/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/03/13/Java/NIO/NIO/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/03/14/中间件/Netty/Netty/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/03/17/系统设计/分布式系统认证/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/03/19/Java/JVM/JVM概述/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/03/23/Java/JVM/类的加载过程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/03/28/Java/JVM/对象的实例化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/04/01/Java/JVM/运行时数据区/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/04/04/Java/JVM/执行引擎/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/04/06/Java/JVM/对象引用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/04/09/Java/JVM/垃圾回收/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/09/04/中间件/Redis/Redis事务/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/09/22/Java/NIO/零拷贝/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/09/24/系统设计/JWT认证/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/09/26/Java/NIO/Reactor模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/10/09/Java/并发编程/共享问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/12/05/系统设计/开源协议/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/12/09/MockMvc/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/12/19/MySQL读写分离/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/12/22/MySQL分库分表/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2023/12/27/利用NoSQL优化数据库/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/01/06/缓存概述/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/01/11/缓存的读写策略/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/01/14/CDN静态资源加速/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/01/18/消息队列延迟问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/01/22/高并发系统分布式服务方案/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/01/26/dubbo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/404.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/03/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/03/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/04/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2022/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2022/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2022/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2022/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2022/09/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2022/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2022/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2022/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2022/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2022/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2022/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2022/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2022/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/04/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/06/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/07/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/08/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/09/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/page/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/page/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/page/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/page/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2023/page/9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/13/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/14/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/15/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/16/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/17/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/18/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/19/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/20/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/21/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/22/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/23/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Devops/CICD/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Devops/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Devops/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Java/JVM/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Java/Java基础/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Java/NIO/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Java/NIO/原生NIO/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Java/NIO/文件操作工具类/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Java/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Java/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Java/并发编程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Spring全家桶/Spring-Security/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Spring全家桶/Spring/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Spring全家桶/SpringBoot/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Spring全家桶/SpringCloud/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Spring全家桶/SpringMVC/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Spring全家桶/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Spring全家桶/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/中间件/Dubbo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/中间件/ElasticSearch/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/中间件/Netty/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/中间件/Redis/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/中间件/Redis/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/中间件/Redis/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/中间件/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/中间件/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/中间件/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/中间件/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/中间件/消息队列/RabbitMQ/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/中间件/消息队列/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/前端/Mock/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/前端/Promise/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/前端/Vue/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/前端/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/前端/jQuery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/前端/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/前端/原生基础/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/前端/异步通信/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/工具使用/Git/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/工具使用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/工具使用/markdown/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/工具的使用/Docker/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/工具的使用/Nginx/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/工具的使用/Swagger/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/工具的使用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/工具的使用/博客搭建/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/数据库/MongoDB/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/数据库/MySQL/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/数据库/MySQL/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/数据库/MySQL/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/数据库/ORM持久层框架/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/数据库/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/数据库/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/数据库/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/系统设计/DDD领域模型/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/系统设计/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/系统设计/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/系统设计/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/系统设计/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/系统设计/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/系统设计/分布式权限认证/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/系统设计/分布式系统/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/系统设计/分布式系统/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/系统设计/分布式系统/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/系统设计/数据库优化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/系统设计/设计模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/系统设计/设计模式/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/计算机基础/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/计算机基础/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/计算机基础/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/计算机基础/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/计算机基础/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/计算机基础/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/计算机基础/操作系统/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/计算机基础/数据结构与算法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/计算机基础/数据结构与算法/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/计算机基础/数据结构与算法/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/计算机基础/数据结构与算法/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/计算机基础/数据结构与算法/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/计算机基础/计算机网络/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","9391a2ea5b7ff7dbd84aa1da372f6724"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/messageboard/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/13/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/14/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/15/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/16/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/17/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/18/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/19/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/20/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/21/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/22/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/23/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","321fda0f1f803dbd04326b270d336f85"],["/tags/Ajax/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Axios/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/BASE理论/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/CAP定理/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/CICD/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/DDD领域模型/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Docker/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Dubbo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ELK/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ElasticSearch/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Git/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/H5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/JVM/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/JVM内存模型/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/JVM执行引擎/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/JavaScript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Java内存模型/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Java进程线程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Kibana/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/LeetCode/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/LeetCode/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/LeetCode/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Logstash/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Mock/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/MockMvc/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/MongoDB/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/MySQL-事务/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/MySQL-数据类型/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/MySQL-日志/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/MySQL-索引/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/MySQL-锁/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/MySQL/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/MySQL/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/MySQL分库分表/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/MySQL读写分离/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Mybatis/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/MybatisPlus/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/NIO/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Netty/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Nginx/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/NoSQL/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Promise/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/RabbitMQ/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Redis/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Redis/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Redis/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/SSM/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Spring-Security/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Spring/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/SpringBoot/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/SpringCloud/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/SpringMVC/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Swagger/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/hexo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/jQuery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/java/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/markdown/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/rpc框架/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/typora/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/vue/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/享元模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/代理模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/内存管理/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/分布式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/分布式一致性算法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/分布式系统/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/分布式系统/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/分布式系统/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/前端/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/前端/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/动态通知/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/博客/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/后端/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/外观模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/多级缓存架构/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/多线程设计模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/容器技术/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/工厂方法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/开源协议/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/异构同步/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/微服务/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/抽象工厂/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/持续集成持续部署/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/接口幂等性/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/搜索引擎/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/操作系统/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/数据库/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/数据库/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/数据库/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/数据结构与算法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/数据结构与算法/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/文件操作/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/日志/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/服务器/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/权限认证/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/架构分层/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/桥接模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/模板方法模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/死锁/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/池化技术/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/消息队列/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/版本控制/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/策略模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/简单工厂/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/算法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/线程活跃性问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/组件化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/经典限流算法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/缓存/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/缓存/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/缓存/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/观察者模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/计算机网络/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/设计模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/设计模式/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/设计目标/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/资源共享问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/进程管理/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/适配器模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/通用设计方法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
