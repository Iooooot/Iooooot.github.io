/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","6fe7adea93651890930cb34180975872"],["/2021/02/22/工具的使用/博客的搭建/index.html","88ece90e2f9f3078cf3d5517f2e3af37"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","c1f7e399afc70a83e1c5f0a0aa3720f9"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","0331e0895aa721783a04591d29a8b8c9"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","9768fae2cda1435da134736dbce4b670"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","e13af62c83d233c2decb04a1680739f5"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","494e202f9526a514d2d38b8ebcf7f3e3"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","1142db20d59c1a6b1842d7e95bce742b"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","8338b369ea23143fc32923c9c859c177"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","b7481756219f2681d3ec0aabb785f259"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","62a2713c90c7c7e6db51cf386e055d50"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","10404bb566e6572932082125101d5b63"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","8302b5aa93a540ba6934afb4677445e8"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","8e4ffebe212193e21b6802a8c34fd0b5"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","b656f16b0d0d0bef123573ecb217f065"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","3f994f3400ab16b62c2b07f9a00b1ab5"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","beb04059fec474d935e42fb50eb1437c"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","43a7e5fd99e6118a74333bd588ad0479"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","723d3169efa6ce921b72dd9e84d0d149"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","307b757f3780c36cd9bd74290a26499a"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","af5420b40d6162b7bc1540d8ac625b7f"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","99a7d9e906f92b5d0c267e8afa2597fa"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","bf5fb53d583b38e31787ba405d07cf93"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","a71a6199d9ce25e8850a3551465fe608"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","62cc36e718532a38a23f441def62cd22"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","34346eb2afa5600aa1d3772d51e4d1f4"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","90eab0e3151a9aeb9306bca41353fa92"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","d6a4e80a558674aa9f5435c15c287c86"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","e9e314dc5526a053080d8c76db6b1f30"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","8339b94648cc6a08ade396ff746350e1"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","dfa607ab03a81860a8e77ae6ab74d208"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","2f47082dd783620f5c258099614d3815"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","3bb5a5d154cb275660cbe87e33221e1a"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","a9cfcd7b80d88fd84b6672eb59f3a947"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","cf31e7b50692a4f7488005c0ea08b5d7"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","ee5c967251a005e010428143c0d54286"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","08c3e87d97ed03cd282194271ab6eef4"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","053a57a4399c11264fac6ebb6e62a4b3"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","48469149502bd42a8d387e2e17401fd2"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","acf65cd5d7b45a11cb855a3670042308"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","5a7e363ae71e8bc5fe313174b0bf0647"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","a856589b66be8ec041c9b7a28efaf878"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","64a2384a74d5d4eb4bbace53652ac6ff"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","5afde5e27ecb35e98aaba049a3142152"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","e7cca5de1d572b0c3bef2c86dd304bb6"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","d5e83896100f26837102b44798aeab7a"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","f3f10ed821548c1c1d23858d629879f3"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","ccc498e9a9981081b815f4736e33c4e5"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","f194438d9512187dd0222aca8062fc70"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","e88a7b86b835ca5ef8db76091dbea35d"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","ba48294a9684119f7e11a42a9f5fba5b"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","84ca953880382606824fba8dad06e965"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","7d028e856700862f737cf90d979cb36e"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","5b31f9c90a975febf241eae7203e2d79"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","fe15d57aa96f1e2a95c2fbc1cabda2d0"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","7a99b9a80be68bc196223f52d7524f91"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","b764e85a637f7e64b29070d97d0a8ebd"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","c029ba788eeede4885341d6d67a6b882"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","bbcb22625f78b911774586c49239de0c"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","ed2fd59ab933231dd4e54124514196d9"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","0d0a6e342da516a6498be6be13f44448"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","87b02ab4f356a834531aab1b2b7b51aa"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","8c2c0716c0bd51ec38afda5ae91ee81b"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","bf41d1120266a4d1d12ce2a3fd21b65c"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","a3db01f21c6dce9f9207f237ee7b9d10"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","566f87c7e54999664ca329c53953e4ae"],["/2022/08/17/前端/jQuery/index.html","54b1f2374a48edc78872a2480ee62ec9"],["/2022/08/19/前端/JavaScript/index.html","d19074b2791ba985b69c8b27992a50c2"],["/2022/08/22/前端/Ajax/index.html","18c1b5e1d3dce3c5553f6b52376f5ccc"],["/2022/08/23/前端/Promise/index.html","eb211abaccc522523bb84b8f0d6d1285"],["/2022/08/24/前端/Axios/index.html","846de43aa2d3dca4337bc2e09724e41b"],["/2022/08/25/前端/H5本地存储/index.html","7d264431834f440d96cc9318e0db07f1"],["/2022/08/26/前端/mock/index.html","156fa5cf36afa45e9a51f5435f491601"],["/2022/08/31/前端/vue/VueJs/index.html","dbcdfeca5f73b384bb89b3ae2c3f701e"],["/2022/09/01/前端/vue/vue组件化/index.html","3512fa09a39a95acd41d4d63df97b5a4"],["/2022/09/04/前端/vue/VueCLI/index.html","accce6d9ebc243a5fc96dac8226fe974"],["/2022/09/07/前端/vue/vue实现动画/index.html","8076c5fc26fed62f00dfb92c2254a45a"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","350ea33167559821fd7cbe307cc3f176"],["/2022/09/10/前端/vue/Vue异步请求/index.html","e79b9e5f1de6dbc7e5bd5d9fcd1e080b"],["/2022/09/11/前端/vue/vue-Router/index.html","eca295c46e3f27059d68a9c43acafdd9"],["/2022/09/13/前端/vue/Vuex/index.html","d85e22e716bac936bdec992891758036"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","b93fd278c9d949055ad58cf644c5eff3"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","6e535e78aa72163a2e1defce442c1161"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","153bef6d9d0cc38d10a3e445142cbfec"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","11d70d5c1cee417347d0dfc7ba2a8eef"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","db4416ecf7752b4fbbe771cf1916e2b9"],["/2022/09/28/DevOps/Linux/Linux/index.html","46ec07b59289b7ae307405352ea15bbe"],["/2022/10/02/中间件/Redis/redis基础/index.html","745321254b106d1f9d7141d3755180b4"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","85d7d08a9fe18cc63d8dc672e2fbd973"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","e5f3eeefb12ccae2b086419107d54179"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","93555021c1952b7f7b1e3f63e0154171"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","8954be2a2af41e6baeeee07f00f915d3"],["/2022/10/17/中间件/Redis/Redis集群/index.html","ccda88c5ee5e8b272aefc5050b0ed72c"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","dd70eeb8e1d70bb0318b69dac7008523"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","7ee8ecd619d7b4d17348316600f23d44"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","917893f1a0a7e86c0a23c409a4db22b7"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","6a4449223832a5fe1d702eb72fc1d0c3"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","0a4ce718d8d01fb3370f3b4a81e13b22"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","510f3d03dad9ad0e9ea2ca20c5ee66cf"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","4c3332c1d20ee19ef2bc1440a79de7a9"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","9cdf19b6beb057f9f0b8f2b2942b9678"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","14aeac55a8c7a61a54c4adb21e6bcce2"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","47dcb9ada64dabd6731c13c291d40ccd"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","d00e9aad13f3aafcbc483cf49a0d8210"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","516714245a75db27e843dbbdde014ba8"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","58fada0a5dbdbe987ccabf58ddb4a985"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","4378dd3f88c663920489f89a8cc9c367"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","a20e49cfd11fb0df19170b3d273ccabb"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","8fc6b035dbe1ba4bacb4c0247ebbb57b"],["/2023/03/10/DevOps/CICD/CICD/index.html","e537edeaac480e442e8bd3f0a8f781db"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","e8e7cb1fde057931445ab72ecd46daa2"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","820fb1d0c623bc9fbfbe37810d36b5f9"],["/2023/03/13/Java/NIO/NIO/index.html","04af052cb7e3b109686132bfa9d3c5a1"],["/2023/03/14/Java/NIO/Netty/index.html","0851c84f68a51ec13285daf03252500d"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","d055856c6de691761096cfafc88e8abc"],["/2023/03/17/系统设计/分布式系统认证/index.html","97d3fd4d4ec4c43518015196b97249f9"],["/2023/03/19/Java/JVM/JVM概述/index.html","6baba0a18b50f8469afeeee5bac1a3ad"],["/2023/03/23/Java/JVM/类的加载过程/index.html","7de7b76804455c3e3a913de987b10ade"],["/2023/03/28/Java/JVM/对象的实例化/index.html","0d71515341a2648a45f513e32195e215"],["/2023/04/01/Java/JVM/运行时数据区/index.html","84af2dfd51ae627970bff8f95c210225"],["/2023/04/04/Java/JVM/执行引擎/index.html","0a699e681f6e83a2c8553386fbc23cc9"],["/2023/04/06/Java/JVM/对象引用/index.html","7802f32be1912d2fb88453d2d0038300"],["/2023/04/09/Java/JVM/垃圾回收/index.html","0b318a65942d24aea4cffe4cdd99b494"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","2dc076a931abac471659df9fd46a4c93"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","5b43cb5972b83105291c724ae39cfda6"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","bd4f1cdac3fbb61e71169a1d5e08d306"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","27dcdbe6d57a533eb2d63ed102569859"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","661a33b54735286b03f66a04275b1157"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","398d50f1abbfbfbb77817fd4612fa0fc"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","220383cd27e7661786e24e5c84652eb5"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","1ef7e574f7159d220f2b28c32e8824c9"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","b876c731a306f5d37363550de9be9366"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","af2ad8a4b06039b206aa056cb2533d6b"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","0b80ffa7d358ee08ab2a7c517b510524"],["/404.html","264584a15a414d21b5583e1f563fd6ad"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","dfc7f2a6a96c9376f051d9962f07679e"],["/archives/2021/02/index.html","74a70f62e1acadf7bfada7454bf15f8d"],["/archives/2021/03/index.html","bd2727912f14cfc9c84d80b4dfbea00e"],["/archives/2021/03/page/2/index.html","3a46bf9fe578a93b7ac0a60748036079"],["/archives/2021/03/page/3/index.html","6381ff002ebaa75bad9bd2f9bde3c3a7"],["/archives/2021/04/index.html","5eaff8974a4a4838e4ef595529a377df"],["/archives/2021/04/page/2/index.html","a8d29efa9e5406f2e58ab6fa972afc30"],["/archives/2021/05/index.html","cf3d616b396889f663ca2cb3795e86f6"],["/archives/2021/index.html","b60b6036286fd3ee343b56f3768d5861"],["/archives/2021/page/2/index.html","e53c2f2854474d3cd88a8b8c7d37e9fd"],["/archives/2021/page/3/index.html","0815bb4bb4cb71e99bf6f4bd26b0eff0"],["/archives/2021/page/4/index.html","f06fa124cb056d94aa160d1347d0fcaa"],["/archives/2021/page/5/index.html","865493d389e5e9222a57902224b1fa6c"],["/archives/2021/page/6/index.html","07f569fbc17c93d05c7e7f2dbb6c2ac2"],["/archives/2021/page/7/index.html","985f0c682bcb40b8b80d9f5d228bf792"],["/archives/2022/01/index.html","521833988645bdfefb66f1b59535e9aa"],["/archives/2022/04/index.html","2c78eaa476dc3f0167f362751afd4abf"],["/archives/2022/08/index.html","cfc461d1e1a4a26350f2f10f2d141f9c"],["/archives/2022/09/index.html","6e68e8e693fe490d70b6361ee6c74e76"],["/archives/2022/09/page/2/index.html","71468d6f6c4e45b94e2e81ad1c8d720a"],["/archives/2022/10/index.html","995e3dc06482413e5494f8d80f1efe7e"],["/archives/2022/11/index.html","aa21dd0cb0eab14dd1172d3bdfb8c15b"],["/archives/2022/12/index.html","97a01fdf1137756ff27c9e9af2504a51"],["/archives/2022/index.html","347a87c61d3d6881a656cae8620d0e9b"],["/archives/2022/page/2/index.html","1cd854a0d571c3daa04cf6b07b0ec22b"],["/archives/2022/page/3/index.html","6ccc821f8bc451e29ff947c7174440f8"],["/archives/2022/page/4/index.html","0353823659947abae2094e5939a04dd4"],["/archives/2022/page/5/index.html","a162d4d7282747c10f6ba2061c269e3e"],["/archives/2023/01/index.html","a30e0b3411a9485e5ab6646a7c99c70c"],["/archives/2023/02/index.html","a2cb0ccb05d66b58d33b1d845d8210ed"],["/archives/2023/03/index.html","544b50fb87e522106186ba93f39aeae3"],["/archives/2023/04/index.html","9ee25a3ccf08dbe5636049a56f0e3743"],["/archives/2023/04/page/2/index.html","628ac8138555291b2109295013894414"],["/archives/2023/05/index.html","b914e835599b12280c9a3025968f44f9"],["/archives/2023/index.html","7f74639832ef3146c374381152dbac32"],["/archives/2023/page/2/index.html","3fdb8dcac135cf0ac6dc36fca1986621"],["/archives/2023/page/3/index.html","c238d318399a04df200f74dd5587b51f"],["/archives/index.html","b5b225e8d72bf6c9443a268713891038"],["/archives/page/10/index.html","5e056c950f44f70461d836d4480cdbf0"],["/archives/page/11/index.html","820b8312eef207a5d02862627136b66f"],["/archives/page/12/index.html","3fb1c36018e6cce345b5a05df153677e"],["/archives/page/13/index.html","d001c548b1e88028cf8534962c804626"],["/archives/page/14/index.html","3cddddca80d9a43abfacdf03217bc0f0"],["/archives/page/2/index.html","371544022d446c1ba2155b7ddc663ae0"],["/archives/page/3/index.html","5d7345f8d5ac7b630c8eea909f0b8c16"],["/archives/page/4/index.html","c7dcfb72d1efba819a6b72adb9447ed4"],["/archives/page/5/index.html","6386b9b02fc24587275f1bb30bbf8f4d"],["/archives/page/6/index.html","14f8ba1e92052edbd78b3024eaf74dcf"],["/archives/page/7/index.html","90664e1c47269ad29a660520363ee7d6"],["/archives/page/8/index.html","c929905c3436866aa8b2398cd0b4c3e5"],["/archives/page/9/index.html","054316442811cac79dcc8789010e0db4"],["/categories/Devops/CICD/index.html","a5e99dd16cef5dea3cd9953687b64ea3"],["/categories/Devops/Linux/index.html","efacc880aa6257da7e2677a79339dc6d"],["/categories/Devops/index.html","37c426b7198eb2fe17af65cd526ed160"],["/categories/Java/JVM/index.html","cad2938312aa7f9bd9b32fb36199de5c"],["/categories/Java/NIO/Netty/index.html","2a56d882bdc64a9eaa92159cab546ae3"],["/categories/Java/NIO/index.html","2f013bc1f3b54c5fcb97c7372a12289d"],["/categories/Java/NIO/原生NIO/index.html","29f5441bd17472b6c77e54994e8e8166"],["/categories/Java/index.html","31134f996e9d82e46c41d0d109a31677"],["/categories/Java/page/2/index.html","b84a50479f8ca05fe33bc5c6706e4de8"],["/categories/Java/学习路线/index.html","26345d71b75cbf424176ae456bfccedd"],["/categories/Spring全家桶/Spring-Security/index.html","d5902b22dc4089c52d2a18fc66f266bf"],["/categories/Spring全家桶/Spring/index.html","55d268bd4b862c27c22302a5d739ceb8"],["/categories/Spring全家桶/SpringBoot/index.html","a1035ec971aac4a199bc67e94802f027"],["/categories/Spring全家桶/SpringCloud/index.html","2554702115237e138cb1f7d31ac8b8c8"],["/categories/Spring全家桶/SpringMVC/index.html","d8feecb1a497e48b4ea4a1c50385d0be"],["/categories/Spring全家桶/index.html","e6ccbc8a5baa2202cada0a12d0510902"],["/categories/Spring全家桶/page/2/index.html","5027d548fcf244582c434990630a150c"],["/categories/index.html","683c9dfb8709477331452b517f633be1"],["/categories/中间件/ElasticSearch/index.html","5fd359f3a55427c7704692eadcd4cfa3"],["/categories/中间件/Redis/index.html","7ad241ef29e0cbbae82afc0fecebd6cc"],["/categories/中间件/index.html","640ac95e3b79c7a038de9a229a0f19f5"],["/categories/中间件/page/2/index.html","8f99f1eb92c48014a14713a24ed18d4d"],["/categories/中间件/消息队列/RabbitMQ/index.html","80c9704b9b0c27eaa5047cc7d4eb5155"],["/categories/中间件/消息队列/index.html","af9f08496e4de4e58dcbace4d502b574"],["/categories/前端/Mock/index.html","c34aa7bdfcd4e6a7cf4d30a29df243bd"],["/categories/前端/Promise/index.html","c819c70d6c5996537953821dc076b90b"],["/categories/前端/Vue/index.html","2dcaba6de744662bf49c91cc05939200"],["/categories/前端/index.html","0967c035de68dc254fc58c228e1bade9"],["/categories/前端/jQuery/index.html","4c2304b5beadb05eafa1ea2d3004a611"],["/categories/前端/page/2/index.html","258604c34bc7adee364e5364b3b409f0"],["/categories/前端/原生基础/index.html","549e62d8e7429d1ce5f177d05df914af"],["/categories/前端/异步通信/index.html","1ecda847afe16ac1f7f6609eed8d5740"],["/categories/工具使用/Git/index.html","ddd4057727ee47f9836d759c79d43094"],["/categories/工具使用/index.html","2429ffca8f4dd6c32f08c74d3be2ff8f"],["/categories/工具使用/markdown/index.html","2560bf25c10417e7c3609b19f9bb0834"],["/categories/工具的使用/Docker/index.html","3888bd8d7c2050efe32fb2a1c2d514b3"],["/categories/工具的使用/Nginx/index.html","880220eca4e7831373602d10835f1c1e"],["/categories/工具的使用/Swagger/index.html","70bd00c924ba535d03b6e388995967b7"],["/categories/工具的使用/index.html","b7715cdfe923a9ea947e36538a17ee1c"],["/categories/工具的使用/博客搭建/index.html","18496bb3e10f59286e45e4de327d9a38"],["/categories/数据库/MongoDB/index.html","81911873e52c3608cd83b26bd5a68cff"],["/categories/数据库/MySQL/index.html","7ec0673c1487c58016009f2cd526e4a4"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","35f6fe0e0a5c2cc872a5537c8a47813b"],["/categories/数据库/ORM持久层框架/index.html","15552ddc86288646e105ff007d1ff556"],["/categories/数据库/index.html","4fcf19c5f8df98bc50b908e0f19b7c82"],["/categories/系统设计/index.html","a734dc55cf14a3b551f7113d103978b4"],["/categories/系统设计/page/2/index.html","cecd0cbe3650a642c1c585408225a3fa"],["/categories/系统设计/分布式权限认证/index.html","b227ae2ee58b5ce6969a0d7ffee45622"],["/categories/系统设计/设计模式/index.html","fde9af197c0f643fb4fd4fe05debef83"],["/categories/系统设计/设计模式/page/2/index.html","419c42556fa5f6f26d9b249069fdff09"],["/categories/计算机基础/index.html","4a9819015555da1252a893240eac03c5"],["/categories/计算机基础/page/2/index.html","67a6f955fac69fb20cafd3ea174379a2"],["/categories/计算机基础/page/3/index.html","02b644a16378faf35dc98a32ad88c707"],["/categories/计算机基础/page/4/index.html","80e33639832889fdb5a6c14203219e64"],["/categories/计算机基础/page/5/index.html","4563e6c6f5d0d000f7b894c0a4fab787"],["/categories/计算机基础/操作系统/index.html","6e4039c0a679a151fad38c29a5e7de31"],["/categories/计算机基础/数据结构与算法/index.html","3c26d2e2e3ace207b419708a661d1640"],["/categories/计算机基础/数据结构与算法/page/2/index.html","cbf8fdf38b749468255a954099130f50"],["/categories/计算机基础/数据结构与算法/page/3/index.html","6beb54080cb64c39303ebb1bbc9953e1"],["/categories/计算机基础/数据结构与算法/page/4/index.html","aed679f3508f6c24960f3fab6b74a588"],["/categories/计算机基础/数据结构与算法/page/5/index.html","ee92059bf0926dd335958d70b1194d26"],["/categories/计算机基础/计算机网络/index.html","9337c043139da8c41d4cae105638b486"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","eb9fab0c3ae57d9f6fc61889be376a19"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","0b86639387cdae6908c737b88c192e77"],["/messageboard/index.html","cb14c8d5db9dcfe65e7a71e8cd5d3b42"],["/page/10/index.html","8ae799301cb744896dd4759997796a66"],["/page/11/index.html","eba1529d73e4e56b665b055c4e4c2586"],["/page/12/index.html","cf648e32a711b6f0a7abff9f3371c12e"],["/page/13/index.html","e37c531962eb640f133f040706dd8096"],["/page/14/index.html","a5a7e3cdedb69d0ed300b6d73d8a08e6"],["/page/2/index.html","d68b6965442baf7ee1ffea1b6008dc2b"],["/page/3/index.html","5499bb0d79bc9c00af961515a48d0bf6"],["/page/4/index.html","6092e1ed78e0d1ecbc888f8517197edb"],["/page/5/index.html","6590a6103907fb86a2193330520b1633"],["/page/6/index.html","770d33f22dc79d2b07d68d86c61b8054"],["/page/7/index.html","1bbe766dd8c6eede1824bfe3c4ec98c8"],["/page/8/index.html","68b618e34dc29cb237ccd49ae075f3a5"],["/page/9/index.html","b2347de54a85aed3fe45b289efd71759"],["/sw-register.js","22f2fa66fe33c2b08cdd7de24bc2c0bf"],["/tags/Ajax/index.html","326a55523504910cebf4a6dc5c1e64ff"],["/tags/Axios/index.html","cb93828e9e0710927f0c2b5a0561154b"],["/tags/CICD/index.html","6872ab3e5663e1421cdc10bb2ff73197"],["/tags/Docker/index.html","c9671e1d5bd25a6d10629928904c3e29"],["/tags/ELK/index.html","c531e6e19685e95a33842b47f5b075a7"],["/tags/ElasticSearch/index.html","212bb5c489c7fd458fa76dda5290bee1"],["/tags/Git/index.html","6986a8ce6eeed3a683d7768e71ce0eda"],["/tags/H5/index.html","28d4883dc122f9bf40fa37e5a19af8e2"],["/tags/JVM/index.html","b6e5d658e62caa090d741bdcf37aa153"],["/tags/JVM内存模型/index.html","209e9f8e5b554f5c6b28c44d6168bbc7"],["/tags/JVM执行引擎/index.html","8f9a9308950eb0494d6e71221fc6b873"],["/tags/JavaScript/index.html","77155dd82d5b7c4c17565fbc9778d578"],["/tags/Kibana/index.html","da598035c726fdd8c0bc3d536a186bf2"],["/tags/LeetCode/index.html","730ecc7dcbf23b895c4259cbe9d9d382"],["/tags/LeetCode/page/2/index.html","406b946ca506efc27626ca5895ccac03"],["/tags/LeetCode/page/3/index.html","f373b6415ef01d386057dfbae4382632"],["/tags/Linux/index.html","22f12de3a56e555c79c0eb9ae49eac91"],["/tags/Logstash/index.html","6b248842f0f415f668fba63cabfbd415"],["/tags/Mock/index.html","7a66ccb83a0a396e447b86a4de4827f8"],["/tags/MongoDB/index.html","a8db58b930488041ac86f91c046cf3ac"],["/tags/MySQL-数据类型/index.html","3d113b09aeac00fed4555d4b95373ea4"],["/tags/MySQL/index.html","a420f32fe47760d868f3550783a12c99"],["/tags/Mybatis/index.html","e6e4a099e6f5333590a09cb60ffa364b"],["/tags/MybatisPlus/index.html","a0c2a51315d39652a3cd758bd2ea089a"],["/tags/NIO/index.html","68d9cb8a80e671529b7746093e9f0a41"],["/tags/Netty/index.html","17ae27eb27216f25fb03e087f40003b3"],["/tags/Nginx/index.html","3f0082b12e4c4b7778085a5f18868f67"],["/tags/Promise/index.html","ec3aa517845a8e7e371f1fb1bdd95fac"],["/tags/RabbitMQ/index.html","45caa60e5dceddc0d418052c72323f88"],["/tags/Redis/index.html","238903f9c9b5ad2974f6c84e8d033747"],["/tags/SSM/index.html","a9eaa320acdddc5047e5420018aa6dda"],["/tags/Spring-Security/index.html","3c250dcbf4d2104abfd48933f92cb47d"],["/tags/Spring/index.html","1425452f6dce7edaf3847c9f9ef6ac11"],["/tags/SpringBoot/index.html","3fffd67ab061e629c8adb8b08a6a6eb9"],["/tags/SpringCloud/index.html","06bc5e7f1a7eac2301a966e1f73a6526"],["/tags/SpringMVC/index.html","637fa9b3ad049eb66577cf367c781f3a"],["/tags/Swagger/index.html","9c6703239bbb8ead77f9990e54dffc8e"],["/tags/hexo/index.html","d551d90b85db7e244007bab4fdb13ddd"],["/tags/index.html","56f0bfb4eb7e91baf93e83d756d8a70d"],["/tags/jQuery/index.html","1575894f7af06cf889fc5d17d5333adf"],["/tags/java/index.html","5f0b8d35b7fdf8b1f6ff32843c666ca2"],["/tags/markdown/index.html","06d672c5066f7bf3254e4ce7cc561a22"],["/tags/noSQL/index.html","e6aa8eceacb2a01260aa02fd5fad2537"],["/tags/typora/index.html","3b624bc8759fe5ac715c2b5f938ddc2e"],["/tags/vue/index.html","684e395d5fac7fc40062085ffaa39a5a"],["/tags/享元模式/index.html","a98e9579259ae7a149d69a8df6bf8ed5"],["/tags/代理模式/index.html","4cb81db4bf87f709e4fbe0805df816b0"],["/tags/内存管理/index.html","3e0cf3e6a5e6505da0a37576b63743c0"],["/tags/分布式/index.html","796db27ff055d3cded1e4b1a2c9109db"],["/tags/分布式系统/index.html","04f43ce4be20e9ea722833fbf9b4808f"],["/tags/前端/index.html","447b968e4cfd49944b044682d564aed7"],["/tags/前端/page/2/index.html","0278c1811d8e73bf87425c2e7742b622"],["/tags/博客/index.html","1344bc65200be4a1eab84238448d1029"],["/tags/后端/index.html","a6b30938025d8c2395ea09bb0861fcf4"],["/tags/外观模式/index.html","1a4704c244def25722239f021d3797f5"],["/tags/容器技术/index.html","afecd83e1a3f63f2da9bad2a65c1de2a"],["/tags/工厂方法/index.html","8dc13f33857bb650185b6f193cdb568b"],["/tags/微服务/index.html","51f41c378a93400d4b8af17ff4f22810"],["/tags/抽象工厂/index.html","d36c138afda5e07cce9809f8be24be11"],["/tags/持续集成持续部署/index.html","8b3b8e5ac4a01a32416d4fa70423ff13"],["/tags/搜索引擎/index.html","fa29cf0f467dfad902157e0fea8f35e1"],["/tags/操作系统/index.html","f4dc83fa25cf34e7f903459326112da7"],["/tags/数据库/index.html","07d18e5fea0db9c9bac97ea8025ed9ab"],["/tags/数据结构与算法/index.html","c6a00e8c664336e542a5172eace4f5c8"],["/tags/数据结构与算法/page/2/index.html","023047d8337f252fbabb991fb623356c"],["/tags/日志/index.html","81f85ff6742bce68852f5615c15a0785"],["/tags/服务器/index.html","3ba16d15b8de15409fbe544bef652194"],["/tags/权限认证/index.html","7e569d35fce339a347520ab7beb27232"],["/tags/桥接模式/index.html","662f573e3d54b142a36afe0d4551fc0e"],["/tags/模板方法模式/index.html","1d0f7e10bec9d070a2b8edf16e4e6db0"],["/tags/死锁/index.html","f9a71927e8a965f699143aeafea12da9"],["/tags/消息队列/index.html","593a9c3c34b0eec132d409d5decd18ab"],["/tags/版本控制/index.html","3d54d0962120a27276ddd17f463fa3e9"],["/tags/策略模式/index.html","8d9e46b208ace76a81ba7fcb8542c69a"],["/tags/简单工厂/index.html","87a9877f3386bb145d42d2ca605f4755"],["/tags/算法/index.html","08c492507077e265c2edd89c37d53eed"],["/tags/组件化/index.html","834073548360ec8b67091a754e34dd94"],["/tags/缓存/index.html","4965185981bca4b028ad3368b431823a"],["/tags/观察者模式/index.html","23bb0c1e8220e66618cf7c15bd459290"],["/tags/计算机网络/index.html","6c7b96119a9ecdf0d14aac72c063bd0b"],["/tags/设计模式/index.html","152300a7fabb3233ac7708b6f64098d2"],["/tags/设计模式/page/2/index.html","06b418029a74abfc101e779ed900e265"],["/tags/进程管理/index.html","82147fb0203c3f4ec27f720216d4c73e"],["/tags/适配器模式/index.html","099825c9db6a6f2a4710e864d2ec0c2f"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
