/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","55e6267bff1889bcf6374cc2464b94e1"],["/2021/02/22/工具的使用/博客的搭建/index.html","5c59c6e0f47ffddda83408b63b8f3e5f"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","c135eb61ee0527c9eaf1104b084f1013"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","8ddca8d5670ed15fdd91ee11bafa7aa8"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","366f50340c3aa3b281405f98fea71537"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","7ec0c7ca3cee567c022dc13aa0a74677"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","2118e754dc6f5e7c6a1951ba25767799"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","c45f7b3cdccf0b596f842f292d235857"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","4bd28a7adfe04b64bf5e9bac1f6e5fc2"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","f323b3fde9e8c586fa52d311770544cb"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","4b59cbfd2cfb7bc10867085a1b80806c"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","1ffa8d10c7a6c75e0bbb5b1d9350706c"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","18ad9a91604ca937e01ca4134e3d5156"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","6ddf216fe66fe70e0382ff0ac30ab339"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","5d71bda48cad13513adac8bc7f1d606a"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","f97a046c37ea076ba4b28ae6adf2704a"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","5adbfb99752a0a5c90ddfc06722acea9"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","d19a0c8bdf4f0ce156e6ac2c8d0caa3a"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","e87f4d3d76f2c0ceb103ce07485bf3bb"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","45b97aca05bb69493b1c6e96a1fa5a11"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","111027a9e7db4827f1169ca2ab34e200"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","293f1133fb34c077176c53691cf33a48"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","dc94ee8516d5338bd61c8fd9975cfc67"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","7b1b494d037fe13db8f56e832bc0f3e8"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","05dcb91081c446289320d2416f03a7ca"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","ef18673c0053ddc3f40c5daaa4950785"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","4a5da97243c3c89138a414945a40ed8f"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","2e8b570da08fd75cb33362a4f1c382ca"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","18f8a35bbec5d2327833fb351ed5e614"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","cc2a087aa9414c680fa50cdd2d55ba3f"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","48dc76e8e5b744b010bbd0da066456d2"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","aeb47e48aabcc5ccd8c1ad10c50ce254"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","3182c75ea644fe47e551bfaab2888127"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","6b3ca060fd5fd3d2aae43cc101256f88"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","cc86258c01e66ea7212afb40fecf662d"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","d543f7a4dc20962780d9e780595945b8"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","cd7c98aa325a13e2d4565407530174e0"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","312ed2fa61445f75ec29f5bc3e2e71c8"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","bdc5890514124ed9af558a881a71dbc5"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","d465991b8656b9eb605bdd0b63b65692"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","33cbd92555a6574d1c6f44eb5397e31e"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","c8d6926cdf120f10f031fb9978a650c8"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","7496d80681e06aa23e03afe90838e289"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","4deae18364629abc00c7ec5188d5b265"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","53a4e0c038574ed93fb179801477ac4f"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","21861735a3e13e966408722d70dff578"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","4fde088a30484a94b1adf88b7c56027d"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","b9ece0d0c88c6f6dea58781ce232714b"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","1ff4a90bb17eeff9bc0caff99ff06bae"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","e575fc295be620dfd1d9e86c689ec5f3"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","35d08c7e4f80ebf8604c16c8b6d63864"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","148aa873aaeaa4f31219b538911c3265"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","22bbd4697bd8d65ebcc3f2c2bcdb8dd8"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","de1a0c667164466a978e8a51bd779c38"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","62afcb60c397a87223ad00321a9e5278"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","b72f1aa5d247c77dec932c7e7f06144d"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","9258a9bd828521cc92dc6c9dbc96777d"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","7da9d1f661174be8b88a9f546099cbe5"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","d00b5ac5df59b7e317445794fcad1c41"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","2cb4fe671f62580d72f9b4269922ba4c"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","ab53bf88e7761a30e2e327f29885ba7b"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","66deb22000524440627b46d324452212"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","75591f537ee35f83710122365a89e1ac"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","8f05e998db1ef2700f8c17cf906e5dd8"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","d99f1a4da9223fbfd96f59e5af162a39"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","a3c769bbb92a9549fc4c3dcd84ede798"],["/2022/08/17/前端/jQuery/index.html","66f2aee5415459538f79a31327acc5fc"],["/2022/08/19/前端/JavaScript/index.html","5dbc6cdefef11d13723042834e56c17e"],["/2022/08/22/前端/Ajax/index.html","8f02c68c59655dc5c2aace1fc67ed021"],["/2022/08/23/前端/Promise/index.html","82fdcd438202ad61b65dd1909d9fe222"],["/2022/08/24/前端/Axios/index.html","15d1e27407437593fb1b3c37a211eb8a"],["/2022/08/25/前端/H5本地存储/index.html","78383ce89f9f7d0aae5f96a35651445a"],["/2022/08/26/前端/mock/index.html","da0ae52949a87987d3afbe2907ef8cef"],["/2022/08/31/前端/vue/VueJs/index.html","0e035e2c646092c2d38764be262aea67"],["/2022/09/01/前端/vue/vue组件化/index.html","c87d9296ab5d7d82abc474d0325efc58"],["/2022/09/04/前端/vue/VueCLI/index.html","0e2af73098c66adfc644b012f7f54a67"],["/2022/09/07/前端/vue/vue实现动画/index.html","e63028e66ab2c35f68c1c48b14341fff"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","6688044d588dbfa056e06b9b082bef9f"],["/2022/09/10/前端/vue/Vue异步请求/index.html","b4b56ac6e52af9a9508134a71c1ff0b0"],["/2022/09/11/前端/vue/vue-Router/index.html","e5cfa1686ee550973ab8b884fcd2dc21"],["/2022/09/13/前端/vue/Vuex/index.html","dd034db7d00c5ed8b5a1b09a83f1df64"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","0d27396ee3d2bf6f5b1bb7e172b578a1"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","3df41ff0a9b690c1c0f5445b123aa103"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","c90218c38a7ebc9a3e89117bf985ba61"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","6d9858cb899039e34259efd3c9b5871c"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","9faf522dd11b2a7f9c56cd9742a9c2ee"],["/2022/09/28/DevOps/Linux/Linux/index.html","117421459eaf01a7a47db43b6ed67b9c"],["/2022/10/02/中间件/Redis/redis基础/index.html","5b63dba6ecbf6523920ba5ff0b214f6d"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","63b312f7777d5716baddc117deb17153"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","b69311bece942bfec6f84545dc55db24"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","bf084dac9443ba750c4f0eb6ac99f627"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","0172559f077356339deff585abe23d1e"],["/2022/10/17/中间件/Redis/Redis集群/index.html","560da5e203054651a8d287d2d7105001"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","bac5a3f1f4a960b90f97e73a9c2ea12d"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","c7ee55687cb018b4da6f86badba70312"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","ab49e852d84dd5e3e452d6b53c540d1f"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","05e0d81df76cae224db6e46afe518272"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","8e0f8c3046b4e24e6c72e89d261fe28b"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","13f91a05d07361609ff5789e3edff215"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","ab1b997c0ac783f6a73f230cda70b5ec"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","d2bcd16b9ecd9043129b5aa96883016f"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","d0450f83e0d43dfad2ce0c2ac03c8c5f"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","c647ee73899377956b73bc6c2674db5b"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","33b6ff257b9a71db28676d7839e01eb1"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","88de154aeb021769feb45355d67264b6"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","fcb4febf851d0bceeb3e12dba62b8585"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","89401836f83afc3b0f15f7b8b9bb3546"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","c10a7c6fb338e55ff5d7bc91017dc093"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","0ab3165cdc4d80c800e595f167a7688d"],["/2023/03/10/DevOps/CICD/CICD/index.html","a1de162f8c182c596973a7713909da16"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","071106e07bdd6a7a142f9a1549da8c69"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","de2f82541dd9eb6ce2ad720ba79d206a"],["/2023/03/13/Java/NIO/NIO/index.html","67341e4c99e313be9b6dd57e1907ee5c"],["/2023/03/14/Java/NIO/Netty/index.html","2883d2d253d4709a78ca2e6626a7d209"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","00579948fea8a738eafd1dc61e22b657"],["/2023/03/17/系统设计/分布式系统认证/index.html","35bbd0a6093d7c3c65fcbbb2bd5aa274"],["/2023/03/19/Java/JVM/JVM概述/index.html","b6cce154c7b0c34eccf383ced990179e"],["/2023/03/23/Java/JVM/类的加载过程/index.html","d087eccaac02d01967cfad52ad0d850b"],["/2023/03/28/Java/JVM/对象的实例化/index.html","dc13f0cbdc7cbe985b4a15c8c6382149"],["/2023/04/01/Java/JVM/运行时数据区/index.html","37fa618ebd27cf9f3fb7f22142c1bc0d"],["/2023/04/04/Java/JVM/执行引擎/index.html","c9fc90c902f000c9a9a08a2bd190475e"],["/2023/04/06/Java/JVM/对象引用/index.html","96563aaac964d16699673cfe77ef6eab"],["/2023/04/09/Java/JVM/垃圾回收/index.html","815b2e8ced0c8dc24e96fe526f2593e4"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","63cf0293239ac5e0ec8a746728f96705"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","526d2070d1a9780ca2cae87b6d9d0954"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","55e3144c66bf5fda3d3cb49e88518000"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","15596a9cde3bbf041f6201fddcfe3bea"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","71ce67cf1744ca2012067ebe4b0ede34"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","42fc49ba4e800604978cdc6ce0f24ec2"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","055e2d6a5424ece9554dedc334b7f303"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","1c369d19468d62353655fe2fcecabc40"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","e1942bc8e00f4c461a039026d315187f"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","fe38c521d9d22d2f4d1a48398286603e"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","13b1983677a085dc3762ba0d3164fd18"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","8109d5276141d281dcc413639a4105d7"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","0e1d8fcc060c72c34bde857424fbd6a8"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","94eed342d9e8dbba8c05d898c03df7e8"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","d37a4c2708f1385917452fbd3a6b7be4"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","c8d0d56813c550b8297c04e324e72f95"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","7c67d933f78a459dad237798434a03a7"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","070ca219d74dbbb334ad035a54b24719"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","f6c32a52fc7d7f4fd7af433d1de51934"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","58cc45fc0710c8704d62f446a7f9ac0a"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","ce3cc6af70fc3704a756f5042bb6d074"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","881f558ce4146a6dae987c0fad69ac3b"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","0bd4a5e0e8494abb96d2deeacc05e30a"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","8b2f82f0ffb30b7091355d19f82abc39"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","7d86451cb90c45a67effe53c95eb0b30"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","bf370201287b4bc24b7b3920aa20bc39"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","ade0683b6bd3d6ff90086fca2ab75082"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","078e609e53bb6db0da8931ec7c88d9bb"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","8a5428965a7b979f9c9308bca0da473c"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","05af98f34f81af94cd8e6212d8f4e0aa"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","440583b2fc2ccd4d8efd9fa03dfd10cf"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","d8fbbff2f067e23f9ee692e352588f38"],["/404.html","c9687cd04a7cbdf929a4ecb08753d7a6"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","255b22240922c757b7dad49bc1fe408e"],["/archives/2021/02/index.html","838f9775725a040821c87ab3009ebd4b"],["/archives/2021/03/index.html","b23161562543408ea66a8a59368ffbaa"],["/archives/2021/03/page/2/index.html","16225dfadc71261ab55cae407203fca4"],["/archives/2021/03/page/3/index.html","559b38f9a93847eddbfae785c3cdcf0a"],["/archives/2021/04/index.html","eaba0dbd6f45280a93118addb4d2bd13"],["/archives/2021/04/page/2/index.html","7ec14c56319653b93a9f096dc0cdf1a7"],["/archives/2021/05/index.html","b7b7e75c9c054c0cb617b083626d0b1f"],["/archives/2021/index.html","70a6061b089d48c9dc3d08a46700cec3"],["/archives/2021/page/2/index.html","a1a8fc3cfb5bb173edce25414e56d9f5"],["/archives/2021/page/3/index.html","c96af1260f7ee7c3ea7a859545ff4c7e"],["/archives/2021/page/4/index.html","9ec5d1639d998eb5ab2095083d1955f6"],["/archives/2021/page/5/index.html","08f665a77c7a5d65274f490e5709267d"],["/archives/2021/page/6/index.html","bc85ca2fe264cd2f95ad75db95d7c672"],["/archives/2021/page/7/index.html","9e843bc378dc19f177772c161aa5ec1d"],["/archives/2022/01/index.html","94111859d3ae7ab62b0ee6b75ddd18c1"],["/archives/2022/04/index.html","693ccff8dc845652ad0ceff232b7ec12"],["/archives/2022/08/index.html","c91698ddc4663b8558f0333c1e4929f2"],["/archives/2022/09/index.html","e494af86f259c286edc56c4c80953960"],["/archives/2022/09/page/2/index.html","3930db8a8812b215989aa77a20eadbcc"],["/archives/2022/10/index.html","c51d79c9d6f281ee7caf1961b6a2d72a"],["/archives/2022/11/index.html","c06a5d22f3954a5632ceae57ac64c1ba"],["/archives/2022/12/index.html","325b5e4a0b6832f03eed7c60ce4e6a4c"],["/archives/2022/index.html","d9f43b46d5a82d862a90519ed7c59732"],["/archives/2022/page/2/index.html","f9655a9c309aec6255afc527f65566eb"],["/archives/2022/page/3/index.html","5fe5d727d62c1f505211e8c1242272ae"],["/archives/2022/page/4/index.html","2adcc95581663ce3ccfde7b6885cf66b"],["/archives/2022/page/5/index.html","3c8044c8515bd145f7f0ba33b9d55249"],["/archives/2023/01/index.html","6c5e8fb23db3c8de4322ea70a5861883"],["/archives/2023/02/index.html","2404d52cbbe1e37592391b6fbd9510b9"],["/archives/2023/03/index.html","9d4e7acb9d322df6192bbcff8a88c77c"],["/archives/2023/04/index.html","1fdf661ede5cafea21b1df282d31be45"],["/archives/2023/04/page/2/index.html","cc757367e6dc6c6ef4453bf690195716"],["/archives/2023/05/index.html","f141927022b39ef6470e4fd6e6b45eeb"],["/archives/2023/06/index.html","dc11748a9280707eb56a7dda8ac08aa1"],["/archives/2023/06/page/2/index.html","ea4a9c88b0e2c7661f5558437598be7e"],["/archives/2023/07/index.html","abf38e5799b8436fd89d1ae78c9ab03c"],["/archives/2023/index.html","670a7f94d8e2e24f683957f18c40114a"],["/archives/2023/page/2/index.html","a926c71d9e76a9f4ffed553c798fdaf5"],["/archives/2023/page/3/index.html","9d5b5f37b6fd5725059b7b69a41fd6b3"],["/archives/2023/page/4/index.html","a81410d75d4c60ed3803fe5952cba44d"],["/archives/2023/page/5/index.html","900976ff9190be9a6f0741ebc9ac057f"],["/archives/index.html","126976be276a466e3e16bbbcc2b30e5a"],["/archives/page/10/index.html","ff311cd0ef34e2a8f5f090e051de3110"],["/archives/page/11/index.html","2bc15252c82a461fa38c46767b351447"],["/archives/page/12/index.html","a36e00a1ddfe7e6fc66b2acdafa244a7"],["/archives/page/13/index.html","888674f9bcbfb4655c197988d542b907"],["/archives/page/14/index.html","3b84cb7e3b5c749a7bd3036e97df332d"],["/archives/page/15/index.html","e2e38511bc806bf770391d9b3e667a2e"],["/archives/page/16/index.html","c0eac7b2de482765ab2d8affbaf73f1d"],["/archives/page/2/index.html","723accf6e5dad40f02f76b91741ace00"],["/archives/page/3/index.html","ca5a144757467ba1fcaeb3ace8c52cf1"],["/archives/page/4/index.html","cb51acd7335602baacbd6ec2a2d12b8d"],["/archives/page/5/index.html","cb77dabf5b37d8882dd774a0f8e1a2a7"],["/archives/page/6/index.html","587f6eebba04125cc04395fc254ae6af"],["/archives/page/7/index.html","58dde9692d93c868a73b22511c0e7b54"],["/archives/page/8/index.html","579dde768bfe5d8463312616e91c9157"],["/archives/page/9/index.html","38cd33ffc94610ef9b65febffece2cc4"],["/categories/Devops/CICD/index.html","f64cd28f3d87268e4ee6df6530837bfc"],["/categories/Devops/Linux/index.html","ce2c35ba40bc426ae1daa07bc9cb236b"],["/categories/Devops/index.html","33b4c6f8ec14d233d9e1801c33b3e83c"],["/categories/Java/JVM/index.html","14a30ef0fb07c8e30a69574bb121d792"],["/categories/Java/NIO/Netty/index.html","235be13fcb80765657ad2996c86bf261"],["/categories/Java/NIO/index.html","ea909f28d13829338c4dfdb17b0584b8"],["/categories/Java/NIO/原生NIO/index.html","f4bc73988a85f7032828f6a608c163de"],["/categories/Java/NIO/文件操作工具类/index.html","bc115039b20471ecc8d5f609f3ac488d"],["/categories/Java/index.html","e3bffe881d53a434062f6d40f7dd8e48"],["/categories/Java/page/2/index.html","f4ffe741d1c8d2af5a44e3965f428d42"],["/categories/Java/学习路线/index.html","bc35fdbae218e27036b21f68f9eefb26"],["/categories/Spring全家桶/Spring-Security/index.html","49c8f94134b87f5d3f3755b8c76e4a56"],["/categories/Spring全家桶/Spring/index.html","c474ee2ae46454e7f3a83be0a234deca"],["/categories/Spring全家桶/SpringBoot/index.html","298405388f13a874d54758b557e3c249"],["/categories/Spring全家桶/SpringCloud/index.html","33e50dad74d8a71e4570b3bdfa713c7c"],["/categories/Spring全家桶/SpringMVC/index.html","0243b706e81dbc1ef5950f689638a677"],["/categories/Spring全家桶/index.html","537968b734bc926fa5ab0b96fc4edec3"],["/categories/Spring全家桶/page/2/index.html","199b6fc00d6aa74ae1a657694f2d52b7"],["/categories/index.html","48176f44b389c5c22fe56c904ce609cc"],["/categories/中间件/ElasticSearch/index.html","f2c846834ee36ff1fde2e76044555306"],["/categories/中间件/Redis/index.html","57a3e0153a31d82f52fd6dd94614f8d2"],["/categories/中间件/index.html","d038d15c194034244f0758b9f7ba5b75"],["/categories/中间件/page/2/index.html","1577da4a9d8d76a0a07ea0a56b3e21e9"],["/categories/中间件/消息队列/RabbitMQ/index.html","24d28ec38b679a21c8cce4061cacf134"],["/categories/中间件/消息队列/index.html","4ddd3beb60601087a3070ffb98e17da4"],["/categories/前端/Mock/index.html","401de1dd0932a24f042d8a54c648d1b0"],["/categories/前端/Promise/index.html","51920a7d37546e1cd706c5ac292247de"],["/categories/前端/Vue/index.html","fa56d6e4eeb3697846d27cb7d227db3d"],["/categories/前端/index.html","93f94e55bdc00385e9ee987422af2f51"],["/categories/前端/jQuery/index.html","96b709c211ba00c8715581f0d3d4527e"],["/categories/前端/page/2/index.html","455d8068a0a407c6f39cb70313334ad7"],["/categories/前端/原生基础/index.html","d19822a4a07a314397832f5c52a98596"],["/categories/前端/异步通信/index.html","cf80cf8cca07a101cb1bacb44b8c2196"],["/categories/工具使用/Git/index.html","10766cb91c9f90875cbcbf43735dca1a"],["/categories/工具使用/index.html","2be4b0f3cddb3e721a216e9dadc46501"],["/categories/工具使用/markdown/index.html","0001518be6c48ec9ff843395e569dc0c"],["/categories/工具的使用/Docker/index.html","3769c201858f10ec83847dd762d6ae26"],["/categories/工具的使用/Nginx/index.html","b85d8b7f30b79ebf57cfafc015969688"],["/categories/工具的使用/Swagger/index.html","6f18393f5f08eb025fed82e9f8e9527e"],["/categories/工具的使用/index.html","19c2ea402368441c0debff4ab6e2d14d"],["/categories/工具的使用/博客搭建/index.html","66184d59efc71e424225ba20b6247216"],["/categories/数据库/MongoDB/index.html","3b940cc2040c8f4829efa28ac0c6273b"],["/categories/数据库/MySQL/index.html","f4c194ff8087ff2c4ee0fdd4e3ffd68a"],["/categories/数据库/MySQL/page/2/index.html","a50c0903fda685ffd3b4e7e89d1811a9"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","0378dcc63c0439188f1d8abafc1ee795"],["/categories/数据库/ORM持久层框架/index.html","1066e264928b719954c22075a9ee5245"],["/categories/数据库/index.html","d9e1e052c99d472d5e115b0ec72c065d"],["/categories/数据库/page/2/index.html","c8c9156bf33351cfc80cc14859ec3dae"],["/categories/系统设计/index.html","a43a5694f43d78bc4da580961ecd9528"],["/categories/系统设计/page/2/index.html","79109ee8311ffc676efc6ae64a7d5222"],["/categories/系统设计/分布式权限认证/index.html","d554a75839ef30771980ca4db628405f"],["/categories/系统设计/设计模式/index.html","bf2ce1039a90b795fa1dbbbf1672ba0b"],["/categories/系统设计/设计模式/page/2/index.html","9997ae4967907cc876b7a887c3ff1703"],["/categories/计算机基础/index.html","5be629bbc1957f5c80660c4b7b208d13"],["/categories/计算机基础/page/2/index.html","cd4704d58521930d8d5c5d416674cb15"],["/categories/计算机基础/page/3/index.html","0d0c73d38072180ffe543cb370e19c5c"],["/categories/计算机基础/page/4/index.html","2f4f6f8047eafe68d5ed7b94f0248d0e"],["/categories/计算机基础/page/5/index.html","b84934542f0b94eb1d18145be3ab2c34"],["/categories/计算机基础/page/6/index.html","1fb0093cacb5090852e70c993f085a5a"],["/categories/计算机基础/操作系统/index.html","b3d346a182a7665e3420ba84541dd9ec"],["/categories/计算机基础/数据结构与算法/index.html","eec6acb47deeaf1691375ee52a7c7195"],["/categories/计算机基础/数据结构与算法/page/2/index.html","ab5c82b7a6d81ad6a40e02791deeea1c"],["/categories/计算机基础/数据结构与算法/page/3/index.html","b11ec6cb0875078eda2568aa560c2fab"],["/categories/计算机基础/数据结构与算法/page/4/index.html","15402e54a926c09e204b01243a2a6590"],["/categories/计算机基础/数据结构与算法/page/5/index.html","50e532cb55edde99a20e3361f06d906e"],["/categories/计算机基础/计算机网络/index.html","421ab4cff04fc964ecea6e28495323be"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","00697beaca2d8d1730bf1022cdd8846e"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","165148a36cb19cc7bb26ea8793500c92"],["/messageboard/index.html","87b1f570fb98048270559971fd4654b6"],["/page/10/index.html","cad5bc67410de6feb2b5f6a8e463bf09"],["/page/11/index.html","5dee5feaa63c3ef0958e30fc0ecb7934"],["/page/12/index.html","22b661e874f7d8176b2da1092e927ab8"],["/page/13/index.html","25f7b66361c1132adc9af5464dde7d91"],["/page/14/index.html","6bcd11516138541489b0bd602579a6ed"],["/page/15/index.html","5f5f127f5222c4b6cee03eadc58f9c6a"],["/page/16/index.html","cc096d23aad642e22c5449a73a44863b"],["/page/2/index.html","3df315477e139723e1c9228a8622b4c2"],["/page/3/index.html","0bb0d81895736d7b2c1919ed5f077b17"],["/page/4/index.html","ef2fa00afd645d3252cbd85b960d7ca7"],["/page/5/index.html","372b6351ef00d99d922bdbe509115441"],["/page/6/index.html","ee051337977bb5b3b8d36ff711cd1e60"],["/page/7/index.html","da7835fb919c93645929000254af1bf3"],["/page/8/index.html","fe0167a5363dfc5bdabd1b79639fa79a"],["/page/9/index.html","15903c61b2a4d03f0f5029ef26e39203"],["/sw-register.js","b1c0372fe4c2baca213b1730fe3d84a8"],["/tags/Ajax/index.html","26087b5298902cd647eafe8e2ec13b6a"],["/tags/Axios/index.html","15692cf65edc835a4e9bd8e1c2a06ba1"],["/tags/CICD/index.html","05db8cf6a61fc9d9e5bea682ee1e5900"],["/tags/Docker/index.html","729ab5395e59c74c608abbed70b591ec"],["/tags/ELK/index.html","ee9cb87af2b9e05655e23b1786c80850"],["/tags/ElasticSearch/index.html","e6bce7a268fc5e95c4b1cc0b484e75bb"],["/tags/Git/index.html","ac27e920fb2b86f793a96d0a76ca1fa2"],["/tags/H5/index.html","a72927ab5542748af200c8bd41e91fde"],["/tags/JVM/index.html","9cbc7d02301282062c2183e221679bfc"],["/tags/JVM内存模型/index.html","e189dd148d01567c5107a1c9ac2b2a33"],["/tags/JVM执行引擎/index.html","57e5d8c116479988973459e137f03519"],["/tags/JavaScript/index.html","c7e92694c03ebac6bfae71316828f3f8"],["/tags/Kibana/index.html","0eb10870b22a396d7648cb7d7d9e3ac9"],["/tags/LeetCode/index.html","3a6ea4c69e5b3f401e25c0732a1a0462"],["/tags/LeetCode/page/2/index.html","c3825ea8e6ce9de8d9c358a52d27eb1a"],["/tags/LeetCode/page/3/index.html","14f0a3b70ecbdc98663f34af121a7b30"],["/tags/Linux/index.html","9bd0eb993d5efcb7cadc8e97c7f43296"],["/tags/Logstash/index.html","0b1c3399610e5fdfc687eeb09e4e4f52"],["/tags/Mock/index.html","3a87421a7afdbc5a29b3ff678dfbeb15"],["/tags/MongoDB/index.html","57668c176bcb1b75563f361e5a9794a2"],["/tags/MySQL-事务/index.html","44757bad1edbf20ca561544cb96e9df2"],["/tags/MySQL-数据类型/index.html","7a3f9e8d3a3ab6b2a19a52318c713a26"],["/tags/MySQL-日志/index.html","cf3fd377bf77e7ced61172c96e306f4e"],["/tags/MySQL-索引/index.html","7f1bda533f7581f0460e0696e2bd5a49"],["/tags/MySQL-锁/index.html","5a80938715abe9393a0c7031e512c4e6"],["/tags/MySQL/index.html","eb2fd7692c4a80ddb99f7ec84b1394ba"],["/tags/Mybatis/index.html","4945a011907a1cf8ec8a3855729736c9"],["/tags/MybatisPlus/index.html","c40fb00c597f4882853f4be4c4ddab42"],["/tags/NIO/index.html","31a19eb8b4ca66bb457e475d71c828ff"],["/tags/Netty/index.html","d8e556538238a99d3b797739fcf5d4cc"],["/tags/Nginx/index.html","0d7cc44fa8b85838628602c1d1293317"],["/tags/Promise/index.html","24b6bdddc4ef9c2ec251bfd60cd891ee"],["/tags/RabbitMQ/index.html","5e4a4567592835fc0326f4fa52ae2167"],["/tags/Redis/index.html","baaa62dc441cde5ccedd14ed91d31b67"],["/tags/SSM/index.html","c82954877dc9afbf79cb432764eac6ed"],["/tags/Spring-Security/index.html","fd01be0da493249a6018094e0af1bd22"],["/tags/Spring/index.html","dd181a8031c492d7d5c6b09e40d580b1"],["/tags/SpringBoot/index.html","215771b2bb95b15b742d2986cd6864f0"],["/tags/SpringCloud/index.html","087cafbbff4b1febea0be17bda26f9c0"],["/tags/SpringMVC/index.html","2a764541219384af07ea36063a351ee5"],["/tags/Swagger/index.html","dc3a6145e1815b3be765bf55698dd86d"],["/tags/hexo/index.html","f67ae2d2c9e920a37934dc083b0020ae"],["/tags/index.html","a080cc3ecb3dc3944a079ab307005c7d"],["/tags/jQuery/index.html","f02562fe7e54111950763f86e11c08a6"],["/tags/java/index.html","566e1d40e5c8cff42bb774f0c2c1b103"],["/tags/markdown/index.html","4b448502bd706bf1dc62405df248ed28"],["/tags/noSQL/index.html","936a9328b9746065ba0f8016afa0df4e"],["/tags/typora/index.html","2962926e7d59b102ae1fd2cc79e28aa8"],["/tags/vue/index.html","78d652d48fc8e229aff0aec9240b0b62"],["/tags/享元模式/index.html","369931ad0a1a0d211a55f941990c44e8"],["/tags/代理模式/index.html","89a449e2315e7c43dc1ec59883f89606"],["/tags/内存管理/index.html","b5e8125ad59d3c2714119732c7b45020"],["/tags/分布式/index.html","c2dc0cb6d3b5ccc7c78e1f42086e59e0"],["/tags/分布式系统/index.html","e9f3cf1c896f1ee24bc917e74b71aca3"],["/tags/前端/index.html","a3fb4969ff913c6ad9a1bd99170ebd3e"],["/tags/前端/page/2/index.html","c7249a545f3959b1b5b88797d9fe8d6e"],["/tags/博客/index.html","a79b55baa47e73bd9e11aebaef07eb7f"],["/tags/后端/index.html","44680d55b89c4db9fc280a86e2c2713d"],["/tags/外观模式/index.html","f8145bad331d30b3fd2a1ea335de3d7a"],["/tags/容器技术/index.html","ec287fa2762880793dc2c9c4497781b3"],["/tags/工厂方法/index.html","5bab84ca81e1a57fe21de91ad14d1a4a"],["/tags/微服务/index.html","bd57205327863dfa96193fdd86a7a6a3"],["/tags/抽象工厂/index.html","ffd15d96b4d91213fee185ac6e9fe81d"],["/tags/持续集成持续部署/index.html","c54a32cc17ab386cc7efb53bb11fd632"],["/tags/搜索引擎/index.html","37c7cf98a654e963e52325ce87b19876"],["/tags/操作系统/index.html","a965c5cffde46374a45f1471f2a15020"],["/tags/数据库/index.html","9640564628da21d8208d5d9e5469fa2d"],["/tags/数据库/page/2/index.html","d905c0c17dee27b967517c9cef2b0653"],["/tags/数据结构与算法/index.html","2acf193631be7b207fd966fa03c3e92b"],["/tags/数据结构与算法/page/2/index.html","afacacdfe1d7b1c56e6d83e54cdf8acd"],["/tags/文件操作/index.html","7ba9f20934a40ef71c9eaa8962cfedae"],["/tags/日志/index.html","5da10209f0f530235a4047c548ccc8d1"],["/tags/服务器/index.html","7d65ac99ad5fc48cd3d687c0c85a9dd3"],["/tags/权限认证/index.html","3643f78d0741e4c246d8db8cf3f5cd53"],["/tags/桥接模式/index.html","40be33eb8061c9e328ef514c65461630"],["/tags/模板方法模式/index.html","68533539e3d9516c362f3c4dcd68a3a5"],["/tags/死锁/index.html","b06b3e0fd4a11b55a67f9c9afa0d1027"],["/tags/消息队列/index.html","52f850d186697f2b572395f7928172c6"],["/tags/版本控制/index.html","e2998d24da7bb9fbf60a6fa96c36efb4"],["/tags/策略模式/index.html","11666ab178b480d4d6f49d4fc35abdcc"],["/tags/简单工厂/index.html","3730097e6af45f483252a13629381437"],["/tags/算法/index.html","ed87194356a3421591544dc275ff680e"],["/tags/组件化/index.html","b7f400a6cb4024447eae6f3eaf179bea"],["/tags/缓存/index.html","394717ad3aeaa5fe9a0d422d157f73af"],["/tags/观察者模式/index.html","97ffca45e65df685df9b42bdeb192b64"],["/tags/计算机网络/index.html","1129fff93ec1fa0d78e99d2976f32b33"],["/tags/设计模式/index.html","407ab37e5452ec1c1a8251ea00a0c402"],["/tags/设计模式/page/2/index.html","15d92b9f82a208b3e9d95830a7d254e9"],["/tags/进程管理/index.html","b83fdfef6ff0db9ef82318a68c4d7872"],["/tags/适配器模式/index.html","316616c582159cb01d28a0efa6278615"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
