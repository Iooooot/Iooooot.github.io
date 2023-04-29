/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","f5b50991e84786944e515b837ccf7853"],["/2021/02/22/工具的使用/博客的搭建/index.html","b5d1a18f9bc1ac17686b3752783034df"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","7fb4fb58649afe957b3bb4ab240ea8a6"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","0d5d0bf67a717967e3cc8bf0ab84e295"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","173fdd4fa0d24d004496d8ccfe89f3a2"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","3201d58416b4666684162e2fb08806fc"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","a9b6d93e564ffcfbd48faf95ec5a103c"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","20da8696a260bd26b21458361bc68de5"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","6c6ca6055370c347f5345fdffcf4907f"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","df5c963223773a6e5b4bacaa860860a2"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","fdfc7e84d086ffe4581540ef60e11197"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","779bd044e65e9ce313fdf947337ea659"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","9cbae9d05200b8cd7ec50c5d4598c6da"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","5e674c74e3cc5eda5ec7696c9c1ae95e"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","6ec78bc58f2928b67e14995dc74f39a0"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","724d1f9901c659dc8b584b364a298b5b"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","6ad4a9987e18a6bbbb1b53a6918ee16c"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","45fa061c07fb3e307431baadd8a52f9b"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","8738e2fd654516f8c50dc911446e5801"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","0c053a6d692030daea51ee5a09cf9779"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","6698f797ead22ad9dedd47a88f36872d"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","31f038afe7cb99edd0798d50186ebf40"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","f720ccba8705e9a5f1a373638e5ddefe"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","26b59459ea3c4eb31cd97944183eaff4"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","f885f0299f564d6469f24b78e4f1ca5d"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","b8dac41161c1779ed772693ecd898af9"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","273c3b9f2b245ae51c17c27f3f9ce57a"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","3dd5fed2e66ed1e32d2aa2fa37d39378"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","044b96bffa28ca1b2d800667ef8c4291"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","9868b3d829dd8f1f4a0dafdf85527103"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","5b10cfd68ad6d3373e8d8d8fb9426a73"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","0ad7d1c24912e6d5672c0680c7c255a9"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","545e544df67e84d3fc5741ed51c270a6"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","3c6583b7a9c0cba752ea1f7e4cef0908"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","e1ceb72a62089f39406fda284948b7da"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","6280f7700d508c5cdaacfde26e7b6425"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","a5c6765df5dd8aeefefab6b4e632bfa3"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","c9379a64ce6442af5727a29fbb035423"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","7e54e5ad6c33baa6f50a38db65343eef"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","538af3f411c8c2e418a4c4ac0cf7fbac"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","16e5ed45501331c3ea9a7a3bf090dc47"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","457f5af3395979a4e0ddba286d05305c"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","b3ccd7a5accea51b14ffbe15a5bcee71"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","d174bc75c329d18fac98b9ead38a42d0"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","14320f2cbbf9e438f75522ff69670dab"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","77b4739f6bd883ac526625c479e6855b"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","705c8f285e31f2379fe0fa19835f16f8"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","e55d31857da98d83a6e4f3ed6e654fa4"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","0722f09646e2520f2e000e38302bec52"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","a0d945982d24d70dc6dd40b0c50bdb20"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","85e20bd70255a2016be378f6a0b2c0e1"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","4ef3829bce5ad17f2fc52cf873002aaa"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","3e7ab14e707ee75d05dc4c0e8ad792a1"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","59439ac93bdb2b85674320fca2a276dd"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","159b78d595abeacaa3638cea9d007079"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","a9bdb8e39b35199ea06e420ad368dbe3"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","17fec7b0bda2a93f50ea62c352c5c09a"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","31f869995ea71aa3c11be4466665d901"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","339e84765410e8e357633120d1a13482"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","9500b1c45e633034baae14125e9dad8f"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","07219bfef4de34790c2b67d9f206fd88"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","672bd7aab70b183ae99d5c0545fd495f"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","273bf476ccb56d3bb30cef1340e71d15"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","0b4363782f1d4f6c8537b4a60574ecbb"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","74b2f21c7d7acc0eb92353e51e7b0d59"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","648ba76f4d318f4a7b416527accd8333"],["/2022/08/17/前端/jQuery/index.html","d1e2be13e4226044bf8b7cdc999506d0"],["/2022/08/19/前端/JavaScript/index.html","6c7a26bc1f2dd9f23438bb29d0090f0c"],["/2022/08/22/前端/Ajax/index.html","79bd2f7855cadeddfb23e44854394c3d"],["/2022/08/23/前端/Promise/index.html","e86bc3eafae642e04980d1dd1a2a3d01"],["/2022/08/24/前端/Axios/index.html","f84dfad36dded5481f523584c5b9627a"],["/2022/08/25/前端/H5本地存储/index.html","c6a84e736d7baec0d8cdcf724759a194"],["/2022/08/26/前端/mock/index.html","31e81c2156b9639a83c8733c504e082b"],["/2022/08/31/前端/vue/VueJs/index.html","f0b52e363ca981246daf8d877b9b9a7f"],["/2022/09/01/前端/vue/vue组件化/index.html","80fb335e918a49bd8560dbcda00416a4"],["/2022/09/04/前端/vue/VueCLI/index.html","b92a2c728920ce9db9f35f589fb3cbe4"],["/2022/09/07/前端/vue/vue实现动画/index.html","f9b7ab7847c9569c06d2a8471d63c541"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","104d79db56eae0c7ad75cc1547421f2d"],["/2022/09/10/前端/vue/Vue异步请求/index.html","45bceddaafb28e5df1a6125a1a600103"],["/2022/09/11/前端/vue/vue-Router/index.html","7fc0b51818c99da2a4d2ffce480cab3e"],["/2022/09/13/前端/vue/Vuex/index.html","3f09d2a1e1c2e92ca4931e2f5e55c20f"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","e54ba13055f41dccefbd7e3fbc573b89"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","176a1baffbc5a2f4cc0a337d620dd038"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","a2f0e6d69a0baca19e54d922475ab0ce"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","0784a9fb5db7ed3b8da0fd8d7da9c1f6"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","cf95e0b90e581aba1d3509e6f5ae7384"],["/2022/09/28/DevOps/Linux/Linux/index.html","b14dd3f2715b30b8a029564e56765499"],["/2022/10/02/中间件/Redis/redis基础/index.html","7206ce111b278dd149120e1a42357e68"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","cd0ac90208b27f396505f13f9a5b2031"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","0c6da952db80b75ecf197851c8b1c9d7"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","18211427a87d7dd3b307e3d6d11c66b6"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","5698b9e8ec025d1aa3c629625249dcbd"],["/2022/10/17/中间件/Redis/Redis集群/index.html","001a21dc3b17ade833198da2fd245867"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","feb1f79c7c833d840d3a824b10203c23"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","916b79c37d185d9b73d5f88af5ce3408"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","425e31c4f89a06a14db99fff4aaa3bdd"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","49403d3e1df0bd2089ca91a1778ddeba"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","97f3621cfe579327f2bb1f5cc6306b0d"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","8303174ee8735053d26b4387e0746919"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","128cefd49c34dddd8eb4a4c462c976e1"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","581a23bb901c7720ef2b2bfb4ee2276a"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","74a124d2f3c962fd24808be40345ae50"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","f924e3fc3b382cc4476f0270e515490b"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","736b4d94f5d1008480a286f93dea7e7d"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","54ab632f246533c26ccfa3a0a5259e65"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","32e89de1015dadee8e22507bd86c4f4e"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","fbb52fb9d7bc49eb6621735d68733133"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","1c82c240e9e9b2eead817d6dcedf68a3"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","b7496d1177406b2b4d18ad7572c71de5"],["/2023/03/10/DevOps/CICD/CICD/index.html","58c310df70b11799238fef5a981a73db"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","993210c9c3430203e8f965f53115ac15"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","eaa092101b5fcfd4ebfd67364df30f26"],["/2023/03/13/Java/NIO/NIO/index.html","3acba694ad7e2b7c299ebbb11565fa58"],["/2023/03/14/Java/NIO/Netty/index.html","e3d5f2762d92024b1a0efcb2b6d1a5d5"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","ff2db7f898b302f6ba14aba3ae951e94"],["/2023/03/17/系统设计/分布式系统认证/index.html","5fc86d21c8c8d3f1e13ef4b766d15c12"],["/2023/03/19/Java/JVM/JVM概述/index.html","a89d6ebb9a3b2e4de394c567a7bf2a4d"],["/2023/03/23/Java/JVM/类的加载过程/index.html","0086fe08856ee7a526a3984890312612"],["/2023/03/28/Java/JVM/对象的实例化/index.html","33439e2739af0b60f57c8e3866b1aaa3"],["/2023/04/01/Java/JVM/运行时数据区/index.html","f6855aa772ccd96c0ebf35e49149a375"],["/2023/04/04/Java/JVM/执行引擎/index.html","99da7d272a4edab7b8bb9b0a6c9f9dc8"],["/2023/04/06/Java/JVM/对象引用/index.html","009f30654aa707c2976fd771e6194185"],["/2023/04/09/Java/JVM/垃圾回收/index.html","551e313a5ab76ff7a262419583a25d88"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","e9d9d043596a200f6f7723d7179de58d"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","98c215fb958d17e888a2fc0edc398bc5"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","397266d2b5f20df14e8cfff44fa2de80"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","de984ccb3daefc07d7a32cc231e98969"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","f93cdc85f97ea9b45e608540d94f7d80"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","af3cb390f33f85fab7aad0fa3fb4480e"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","2ce7970c5ee2d9411817a3113f806ebb"],["/404.html","a19d6d8ed47afdef41d20bcaef485475"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","28fd7bb70504ba619ea5b4bc7707dfaa"],["/archives/2021/02/index.html","8e546bec66778baf503b568f7ebbb7ef"],["/archives/2021/03/index.html","2be3f05a09e75e9123bfeae6af00570d"],["/archives/2021/03/page/2/index.html","a973acaf85f4076811b6efcfcd70ab77"],["/archives/2021/03/page/3/index.html","d1ade8b9cc187e3346dd1ecd52b900ea"],["/archives/2021/04/index.html","6ea83e4da1717bb3dded22d5a63a7086"],["/archives/2021/04/page/2/index.html","bf5db3cac3f13d5f584e64d3cc45d6cc"],["/archives/2021/05/index.html","4dcb3847844641b6c6d4ecbe589e5656"],["/archives/2021/index.html","35fd31af46a184bf58c89b7a88b7ca33"],["/archives/2021/page/2/index.html","3829afe67f6ad3078ddc4b136b417a1c"],["/archives/2021/page/3/index.html","2c194f6e1b5a392b8fb50a52c0792047"],["/archives/2021/page/4/index.html","4fc5235ec86eff15cc8b8759831587d9"],["/archives/2021/page/5/index.html","6b44ccef14fc3c1e8a75b5559dea7d87"],["/archives/2021/page/6/index.html","8d020995c9b67cf599a84ea185b4a5f3"],["/archives/2021/page/7/index.html","23d5ab96bd5f374edb8e7f2e10876472"],["/archives/2022/01/index.html","0b688fcfdb7b93da5244b2dd9af32379"],["/archives/2022/04/index.html","42f58f6551f13c8a1ec1a1fcd99ebbc1"],["/archives/2022/08/index.html","6b0244e2c56ed44577ada29313d8a242"],["/archives/2022/09/index.html","900b9808a71b72dbcc5c77f05cf81031"],["/archives/2022/09/page/2/index.html","27d8f5248e5c4470fa5129b36e99461d"],["/archives/2022/10/index.html","a34286ec540d6b5ccf61c81447276bbd"],["/archives/2022/11/index.html","825bcfdeb08e55d72976a9da5502df85"],["/archives/2022/12/index.html","33925fd8ab2bb5ad695b1350a5c041cf"],["/archives/2022/index.html","52e5294c9d13eb770e1d0b71cf5950f4"],["/archives/2022/page/2/index.html","d95d8b65396294abe284e6baaac3e66e"],["/archives/2022/page/3/index.html","3f4853145e22ea299db0e9ecc20c7d86"],["/archives/2022/page/4/index.html","a91b194f0b2c1dfdbca7c8251c0e71e8"],["/archives/2022/page/5/index.html","d20e65997e680d8b8091ddcd2aafa301"],["/archives/2023/01/index.html","274e04cbcc90a28fff99b6337b655d17"],["/archives/2023/02/index.html","8be3abe00a4575b7d4f311ca21984b8c"],["/archives/2023/03/index.html","6420e02d474c88c17d0dc1cc2913b8ce"],["/archives/2023/04/index.html","abce065558a3cd63e5e32351c95e3468"],["/archives/2023/04/page/2/index.html","d16117652430d6e568b584d7c9020810"],["/archives/2023/index.html","77e744e75fb3ad48ea0192d48c22e3f7"],["/archives/2023/page/2/index.html","89a0cd300852ac5915e1e38ca84c9d8a"],["/archives/2023/page/3/index.html","e9e25b85f41902e2980b2ce2e1526813"],["/archives/index.html","b8223f18036a073302cb851a10426acc"],["/archives/page/10/index.html","1de5a27e5af114a1c8144a6d9399090f"],["/archives/page/11/index.html","e6a94d4b72a3a3991a9cfdad1c0c8bef"],["/archives/page/12/index.html","47dba60c809f0a616a38257309297403"],["/archives/page/13/index.html","f21bf1b259083086f7e0403d69653ada"],["/archives/page/2/index.html","35b65633badccc15ccb971f9ef95fdc3"],["/archives/page/3/index.html","dd14f19aff38ecace64c64c0584aeaa3"],["/archives/page/4/index.html","8797e635e790268d5d5420bb172316a4"],["/archives/page/5/index.html","f38eb7b455edd5407b486e8185a6b12a"],["/archives/page/6/index.html","9026d565b755aac9a1fd58873f3a2115"],["/archives/page/7/index.html","10e75e1a80af9656510518bf6eea1010"],["/archives/page/8/index.html","afc9ccc0f14f55df6dfca0cbf34ad27c"],["/archives/page/9/index.html","7f48edaef0fbba7e5da6312a4cb1b501"],["/categories/Devops/CICD/index.html","efd68ba5294122b6341ad232396d6360"],["/categories/Devops/Linux/index.html","5dba9e390ff3059e9efcf04a8b105467"],["/categories/Devops/index.html","b17a3b14bee83c4030660f522e7c9490"],["/categories/Java/JVM/index.html","9c3e54f1621fe04dc2801e4537899cde"],["/categories/Java/NIO/Netty/index.html","013205a8c81c0d4750dc2815665785c7"],["/categories/Java/NIO/index.html","df0cc93dc0e1ee426757ad9bc15e349f"],["/categories/Java/index.html","e047102fa3c7beeb97e8cf8e857ea467"],["/categories/Java/page/2/index.html","f94a4ac54bda32e3fb5ce76e51e387b1"],["/categories/Java/学习路线/index.html","c4fdfd20a25f5b079ddf6b783dbd1795"],["/categories/Spring全家桶/Spring-Security/index.html","22e74d637fc57dc5bdd425f2f4e8e387"],["/categories/Spring全家桶/Spring/index.html","01ba34d9d51b57634ed788c38af738b7"],["/categories/Spring全家桶/SpringBoot/index.html","51cf196edd2e62e426a648b4dc237183"],["/categories/Spring全家桶/SpringCloud/index.html","698e6aa69e28ffcdf93cb92404db1c11"],["/categories/Spring全家桶/SpringMVC/index.html","9a2647a56a29c8137ba2e09f3982c053"],["/categories/Spring全家桶/index.html","d3cca6e0705a4e76215e7af5f8336f29"],["/categories/Spring全家桶/page/2/index.html","d30b4c80388c975be93ef644b86eb37b"],["/categories/index.html","3a241d295fdc4d4ec8435cf4c6d1bc88"],["/categories/中间件/ElasticSearch/index.html","9cfa7ba60a6be8d98d1c60972001e2ad"],["/categories/中间件/Redis/index.html","8202970cabb64c12c1b0dafb9e3d8914"],["/categories/中间件/index.html","b0442fc864c6d5b6dc118cba25f274d5"],["/categories/中间件/page/2/index.html","10b8c53217c89eb43ce4530586ec5069"],["/categories/中间件/消息队列/RabbitMQ/index.html","7c7b1fc2e0c2b8ea39e59e0cbe61f4f7"],["/categories/中间件/消息队列/index.html","6e869b905d5bde7860e2cad08e7a81ce"],["/categories/前端/Mock/index.html","5939dcb88c2662f25ba522c0b2040647"],["/categories/前端/Promise/index.html","5b483a9abcb6dc2bb41b47de7981123c"],["/categories/前端/Vue/index.html","6e4c8f23adca4069b9ff95d639df9c8d"],["/categories/前端/index.html","bb4df3f8de42d796dfd842b987ea0861"],["/categories/前端/jQuery/index.html","8a4c86aca8a6a8cec77ee650e728b1f5"],["/categories/前端/page/2/index.html","e790381aa51d30353271917f1e78b9a8"],["/categories/前端/原生基础/index.html","55ed4403c7ae461c8ac2096acc231ac2"],["/categories/前端/异步通信/index.html","10bbbfc3302b8e60eb51d3bcc5be1094"],["/categories/工具使用/Git/index.html","191fcab128d7ae59b9517d88f0e71552"],["/categories/工具使用/index.html","dbd02d4688d2992c3657c855d753db32"],["/categories/工具使用/markdown/index.html","793ccf8d570b3e392690b77d0373e2b2"],["/categories/工具的使用/Docker/index.html","d93c4f67d5c5288680440d0b5f7569a0"],["/categories/工具的使用/Nginx/index.html","e430c128ea521b93975efd4c7bf90db8"],["/categories/工具的使用/Swagger/index.html","f477821afdfa71c82229a2cedb6b487e"],["/categories/工具的使用/index.html","4883799817678205d479f106ed111d1b"],["/categories/工具的使用/博客搭建/index.html","4ba0551c6b51641416875208840d59a3"],["/categories/数据库/MongoDB/index.html","30360366fc1eaeacd4876ea416684da5"],["/categories/数据库/MySQL/index.html","bcede37a01127c23cc8b87f44c684488"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","58a558efbb179e150fb36c874d992019"],["/categories/数据库/ORM持久层框架/index.html","dc8904c9f54336fdc5a13ec26a139b24"],["/categories/数据库/index.html","8ce509b6c563bdd70b6b3876c8770e83"],["/categories/系统设计/index.html","a5aef42c5385616f65d539d5a5edddb6"],["/categories/系统设计/page/2/index.html","8d60fc611ce2f4e3f07e9df5fc24501e"],["/categories/系统设计/分布式权限认证/index.html","6d1446308b361445d3ede913036228fe"],["/categories/系统设计/设计模式/index.html","6f0aeb7ff5983fa4d688ad3689fe96e9"],["/categories/系统设计/设计模式/page/2/index.html","cdc515e88ee3eb02fdf92cf916c6a37e"],["/categories/计算机基础/index.html","2dce1fee9b3db07a79dc1b796f615519"],["/categories/计算机基础/page/2/index.html","7565a7a2aa3f8f797a2110f988e15fd2"],["/categories/计算机基础/page/3/index.html","f5dd6b33dc48a91d57bf6a1e11676dbf"],["/categories/计算机基础/page/4/index.html","f7112cdafb957becc8db7c17b891aafa"],["/categories/计算机基础/page/5/index.html","7941da03bc6647f3a762224020441f98"],["/categories/计算机基础/操作系统/index.html","568436813d4b66b7c32a562c8be0d6e8"],["/categories/计算机基础/数据结构与算法/index.html","04b3a5f6fd964253b1de85280d501da8"],["/categories/计算机基础/数据结构与算法/page/2/index.html","77edcedaf7dbd76a719a7f975084be36"],["/categories/计算机基础/数据结构与算法/page/3/index.html","a4a4813794b35ccdbfaa2383b6705592"],["/categories/计算机基础/数据结构与算法/page/4/index.html","e859943219d21a825544f7a333495bb9"],["/categories/计算机基础/数据结构与算法/page/5/index.html","1d736db8bcee44d9bc120d64a1ce3d07"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","b50c7489f8ab5f56f0ca2cbd25c58e39"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","de8f756dae711eb1bd8a06a4b64596f2"],["/messageboard/index.html","5efbd62cd606d7e3834ef049c8a2b31a"],["/page/10/index.html","1896924c1391b522d55f0ea092cf30a8"],["/page/11/index.html","951037d07dc28db57b062b7c483c2410"],["/page/12/index.html","f04e77f4f5018bb1dc241c0c8c1643a0"],["/page/13/index.html","1f3231875d2bb967836e4b7094cf442d"],["/page/2/index.html","ffb4f40da9bf541822fcd0eb37bd479c"],["/page/3/index.html","e916b7c3fff47683adeb5ed9a83cb20d"],["/page/4/index.html","75bd9ca5edb33b4b13d34c01bb5d439b"],["/page/5/index.html","21ac5e6a7f99de776d48cb9b05ac45b4"],["/page/6/index.html","73264f2917d6155cc969190fcb9ceccf"],["/page/7/index.html","4ee0b114e66d742926d246e7fe63e41d"],["/page/8/index.html","6acbbe8845cf9040276cc29459cd4232"],["/page/9/index.html","1845df4f61583a5ec97fb791d91c4309"],["/sw-register.js","7534810f4b54ea2e1a5867b7953be635"],["/tags/Ajax/index.html","77e75bc342c812310ce3a397e8eecdc1"],["/tags/Axios/index.html","be6c36392c2a292fde7ab19f111f64b0"],["/tags/CICD/index.html","ee0a2e89be6770aa3bc156d46af514eb"],["/tags/Docker/index.html","bcf4ddf2d4a3ec8d484b430dce90a67c"],["/tags/ELK/index.html","b661e5610952502e515c295534901ff9"],["/tags/ElasticSearch/index.html","6e48a4f4fc7a55cc4b723ed67b919171"],["/tags/Git/index.html","99438007a7668c1c922338c3110937a9"],["/tags/H5/index.html","5e3ae52c0944c9b21c8471bfc561b94e"],["/tags/JVM/index.html","64748e74b721ce82f93dd31da26f8ad4"],["/tags/JVM内存模型/index.html","7b6bb8738d205c87ca32901681b00322"],["/tags/JVM执行引擎/index.html","a61264fbe85f49654e980af66fb6ce1d"],["/tags/JavaScript/index.html","54868eb2e3e1fb23f91e09678653aba5"],["/tags/Kibana/index.html","3a0dfca9b14fff1e92e8fb833cbd6269"],["/tags/LeetCode/index.html","1c32d35726aa2e936f5e7651f3f92a06"],["/tags/LeetCode/page/2/index.html","3b600d63c8ddd51d098a7a2574c84a6a"],["/tags/LeetCode/page/3/index.html","77aadf970fea60970f4a7e0464c157e9"],["/tags/Linux/index.html","bd585d60a6dca0212e3b4bfc884458c2"],["/tags/Logstash/index.html","7ce8c7c6c1a3cdd01b138e150dbdcdad"],["/tags/Mock/index.html","9eeb47845eafb5e9d7642a88f1564d90"],["/tags/MongoDB/index.html","fd3519ec5a5310b0d5fd95b01727fef7"],["/tags/MySQL-数据类型/index.html","e97d594abd45e44f9e6f3648817c2fbe"],["/tags/MySQL/index.html","38171d338df186382a3b020fbce9c1a3"],["/tags/Mybatis/index.html","277a8a15031139ef99f1ac4c6edc1a40"],["/tags/MybatisPlus/index.html","3594a4e1a7ab6228f093b55025ba8611"],["/tags/NIO/index.html","87939ed05ae173bbff7f4a602e4abed4"],["/tags/Netty/index.html","8586b50900658a523e4e2ac1efc5e0af"],["/tags/Nginx/index.html","38218b045a16bcd30c24be7ac9f31567"],["/tags/Promise/index.html","431056d932b4a03f8a4f8863f0c36c49"],["/tags/RabbitMQ/index.html","82efa6ab774c5242368055a18f22050c"],["/tags/Redis/index.html","b2ad3ff00d9aa7387202212445ddc4cd"],["/tags/SSM/index.html","8048d4361037a3e3f15ba4bd94892a74"],["/tags/Spring-Security/index.html","9451e69c36505319f94dadafc34d4c7b"],["/tags/Spring/index.html","e83ace950a3df13ed091308d20697bef"],["/tags/SpringBoot/index.html","097c58aa01e12a86d87590c8f30a13fa"],["/tags/SpringCloud/index.html","3ef1a7a264e71553f6c3d21c12b57521"],["/tags/SpringMVC/index.html","f6067c2c3c609d8cfbfa356a6f5ed93e"],["/tags/Swagger/index.html","0accbc71524324cc1936dca324decf8f"],["/tags/hexo/index.html","a304309bc1a91fc79240e48c54ea1f14"],["/tags/index.html","dc5302f44c837524ded61940c23c1dd2"],["/tags/jQuery/index.html","a3614b4aac648cc7e74020b368716951"],["/tags/java/index.html","4f2125f9c582a244172fe31c8a141362"],["/tags/markdown/index.html","82aeabfc38c9edb89ad7fff130cb023b"],["/tags/noSQL/index.html","5b8919827170f569ae49b2132861df8f"],["/tags/typora/index.html","1a385fd23577938958b3de9957aef78d"],["/tags/vue/index.html","3231dd64bf176edd8a917ec3b827c41c"],["/tags/享元模式/index.html","b85a5641a852070703fb7f8ae59ea803"],["/tags/代理模式/index.html","c50ee249fbf98046a105cf2876d19738"],["/tags/内存管理/index.html","884508f5c16969cbadf88fae89fdee83"],["/tags/分布式/index.html","f2174ed72898762c939fa5b65e2faf92"],["/tags/分布式系统/index.html","d30361b8b475bb11f1a00b64cb03b670"],["/tags/前端/index.html","81312bf03c9ea5db9b920766f113271d"],["/tags/前端/page/2/index.html","cde3c3b0ef27234cbeab123e6f1d91e7"],["/tags/博客/index.html","e14691e943fc5af821ad2006cad6507b"],["/tags/后端/index.html","14ec08e2e1befff1f93a45874a1bca55"],["/tags/外观模式/index.html","978ae46f68f9f882b79596a9ff68871e"],["/tags/容器技术/index.html","40fa07732761b052f68f07c1dac66f56"],["/tags/工厂方法/index.html","365321bfc25714a3917fe55ff850a71b"],["/tags/微服务/index.html","10b0372e51245b664d288f25b1c43f1a"],["/tags/抽象工厂/index.html","4f2392ff4d0a60f46c84fb53937806bd"],["/tags/持续集成持续部署/index.html","89cb95b10c953cc080c64cb7c9868f86"],["/tags/搜索引擎/index.html","fccff5ca8a308e3812e99d46514d7ef0"],["/tags/操作系统/index.html","97ace5a544176a9785ae600e711f3ccc"],["/tags/数据库/index.html","14d4718c2d9f1fa9fb2640aa5103b94c"],["/tags/数据结构与算法/index.html","7562f1e710f6b71fa57d3381763ace68"],["/tags/数据结构与算法/page/2/index.html","5faa155548f2e0d3ed4d8d10664ecb3f"],["/tags/日志/index.html","845d7b5df72bb200da8479c2978b1e3d"],["/tags/服务器/index.html","ef58a180324844a606ed69de9120a7e2"],["/tags/权限认证/index.html","5090a082e462e46a5944064d4936524c"],["/tags/桥接模式/index.html","00296514e8da55aa1b3a1cf9763931a4"],["/tags/模板方法模式/index.html","d35250d8e6fd1e0482fe577355821130"],["/tags/消息队列/index.html","afa60295525b79ebbd76ba66ad860710"],["/tags/版本控制/index.html","7d15a19423c9e7eb6e36d82fcce6c35e"],["/tags/策略模式/index.html","e3166dfae6ed0eae579ebf89dfd98c28"],["/tags/简单工厂/index.html","26ce9b5391f23036c2337ad5d75a0e9d"],["/tags/算法/index.html","33182af88494362e5da6a797ee4b77c6"],["/tags/组件化/index.html","8ec07c7d8b8e007a72e79ec84fcbb56b"],["/tags/缓存/index.html","1dc1b7feec2dc2d94b6df23714254110"],["/tags/观察者模式/index.html","20e00d846e4bd48ca4b7922560c00218"],["/tags/设计模式/index.html","f731f31d582ad7dab1245d4f16ec5092"],["/tags/设计模式/page/2/index.html","b7c3bf968e7efc383ed35e203602ad47"],["/tags/进程管理/index.html","aa78214c8efce92f73a9cf2516b109c3"],["/tags/适配器模式/index.html","af3b06592858e360ce5093e1750440c2"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
