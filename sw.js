/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","fb9352e7ba88479ed3297553fb538e3a"],["/2021/02/22/工具的使用/博客的搭建/index.html","61f928674d58a3b6a3f4986bc18d4f16"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","dac9e18cd62d79f5cbf4f2be709bcdc5"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","8aec83b18ca4d5aef4e567a5bc00b5b5"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","77b27f4bd959246c914289d145d3c7a3"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","dee20d05abbba829b3b52d8674dc14b0"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","3e3089dd1dcc35f9389cc1b977bf2a57"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","465ff76321f2e607bc4f7b580bc353d4"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","e4c533e390476c6597baac6101d90a4b"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","4b6750b95c2625894ddeee12ee009cfc"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","25ec83dfe078f33c70cb5a8a692a5ba0"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","c8be27a45840ed4980faab6a45077135"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","0cb6f0f2814a17b245e2a9b58e127651"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","a4a2c7b55e6e41e27c0aa3d488a35d20"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","c3ac640873a619566bce731bc69749e6"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","a3437a5b51c2aec34ad62753b1039110"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","44d7fcc96a813e6b59c53dbd8adf2dd4"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","6eed6ed2016038f19faf0d7b99a58a7e"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","cbc50f532c6a9779adef4323471e0838"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","a86fd9b445986815fd93cb67deb288fb"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","8436da9bd22c39859cd19d1af4a0e700"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","44736130972612ad048afc11c65120f2"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","1921718c887095a25ec9baa67c4e83e5"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","21da95f732a4ca8756047e7e86e583ee"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","b889ffeccbba8e51baaf533f422f3ae5"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","ae0d9e1687046cf20a0a4d22f7304715"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","898a3f4af3e171fca8e1d4a4bba69916"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","7e951aab97ec9e2caeeb0b83c8465d56"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","aee58c8b2da822fbb1f8ac6cc17ff84c"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","8f1c0f63edd2bc4b953949f9605292ab"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","fcb256991e4a8b282051c335e356a70c"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","d9c2ca43fd6d9004eb6b0021460524b1"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","7df0df635965d62ee608716821339269"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","1441bed537ffda2516ecd79b57f10ea6"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","b9b28ee5c773985110b2bafc9416fabd"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","01604dacb4ef8e0716660557db6c5ccb"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","c5f272769e91263486bdf212e67b1cc0"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","a83cbe02f1a0549530ed550529d79462"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","440da89a9065720b802f58abcf2f7f7c"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","228c739482457b4b915789c9b4ee1589"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","2490a13fa6dd0ea323019f255a9c3c01"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","35e04092d5818852eea6917b57c89c92"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","c49c3a89a6586745ff84941ac78cebcc"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","0f889770913b540a70480229438f6c08"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","af4ba4f5be9df6c834858864d201d367"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","956bd2e6a2a57b7e5cf0361257d763a8"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","b269c7ffa3cc5dcdaf5397d8e8b2a45f"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","57ab9585e0481f0d01091d0e71e2dcbc"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","b0eceae214c74aea2bfddda30b1c79cd"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","e73b282478344f2b5add17bf02ef4661"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","ec64c7337ff4c0693b6b9fc4b73c160b"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","38136cf1a61ff5c6ffa6c5692f0f9f06"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","833c40f68110d28055320f6c3c942219"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","c90b8b5e679b30f7200d48e5c428cdab"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","11c6928508b32d4de6539bc85a3c2ccd"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","2db96235ddf5087dcd4b03cb5140406f"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","450335eb8dfdf776977f52e2a6e356e1"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","1460307cbd16613c71ad3e767cf85e16"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","444c635b72a52c652183727650134e45"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","eb42a2d08acbe4dd1df32e4f198e826f"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","9263d9f6784d5fbd84d0021f97d14950"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","5deac7bfe84018679c1f4a1d9fedcb1d"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","2c442a9bec0077a69d75940c9558ef55"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","798b6ea9b6518d3292fd9893827fe809"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","d212fbcd2333765732ecc5d8362d83aa"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","fac3c56394cd2ce180eb150b5fa9194f"],["/2022/08/17/前端/jQuery/index.html","3adfecc91f8aa82248500767e7775c07"],["/2022/08/19/前端/JavaScript/index.html","66c32afd715dc76e86a5f63fccacefe5"],["/2022/08/22/前端/Ajax/index.html","f70fc7e281c43e4f3afe7b8d3632b423"],["/2022/08/23/前端/Promise/index.html","3f75e8750105f2623bcc09de37329a82"],["/2022/08/24/前端/Axios/index.html","f2e1080623a60cbdf13a80ebf1a8c6e6"],["/2022/08/25/前端/H5本地存储/index.html","6d52fff191b12832c5cc748994d4c43e"],["/2022/08/26/前端/mock/index.html","8cc594d056406690384719d4e3a27e5c"],["/2022/08/31/前端/vue/VueJs/index.html","4635ef721c524f4480ea6e748f850dd2"],["/2022/09/01/前端/vue/vue组件化/index.html","3c326a1a09f03d73db902be5b82fc9b0"],["/2022/09/04/前端/vue/VueCLI/index.html","b00314b36e1c672fd3ecba8e13abfbc0"],["/2022/09/07/前端/vue/vue实现动画/index.html","ede8d23080864972618fd07a0ee3ba03"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","349cb05d97f154ad856a8183fa5cc734"],["/2022/09/10/前端/vue/Vue异步请求/index.html","f84529530da6238369b4ebdaec6dd175"],["/2022/09/11/前端/vue/vue-Router/index.html","45d6d3e24439f52dc9cb72a4ab62d6e0"],["/2022/09/13/前端/vue/Vuex/index.html","a7fa9492f8e532a0cf8ee3588b74cd67"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","485e943108418ad93d76f9c74746a1ac"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","41a2ce980b2daa7291a4732e9395bcfd"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","3d49891da033b7d368e0a2d4afcc0624"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","98d08b91ef00bc089c8ddf7ff279b94d"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","427efa118567b8ab86ebf0a3ec3ea01e"],["/2022/09/28/DevOps/Linux/Linux/index.html","57062f5ba98499342e5a7c322b01b248"],["/2022/10/02/中间件/Redis/redis基础/index.html","85425d50c9e69af2a0c72974de850afa"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","1bd22db60f9c7d4294b7780b0fccd872"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","7af35d0442d403d203c2921c305bdbef"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","d5d2605d519f9d84d09538a41a8b8715"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","757caddc46adb3cac2e9298aea4f741a"],["/2022/10/17/中间件/Redis/Redis集群/index.html","f9c7daf8add35e4b5547e79fbe89c2b7"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","d7e6993fd5400beee82c29236c3eefe0"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","8309151e16ac5b939b240d4eefb3f680"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","43b120693d3b7fcc4aef3eb690fcae35"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","a7655830012947207d550c4d52e73790"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","f6fd02a6c4b4519e2960be63b7bf9137"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","833a817a1360072cd9115a8cf177029a"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","6d19b022da6f9ee214aedb68bb6fe081"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","7699d45f2b5ea165c0c491ceabe56fba"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","9eded7e69f50b5cc42f8aca356d9b3e1"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","7b997328b77bf60574eefabe41e2160e"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","d5296d1c59e95ec6292f2239d82499e4"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","c5960548ddc1f2b10ea3d54ed25151ac"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","c354a8965ace66730f5c5560c788ff43"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","9c18630ca29a2aadb485ece788df052b"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","0b9f5cf8e4e80f86b52ec4549faf1fea"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","bdbc9f82879410fc2fe369695006edd6"],["/2023/03/10/DevOps/CICD/CICD/index.html","421d48527d419d2cf370c22daed474a2"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","efe1a9a96f1a6a7d0b598fbae8e85340"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","f413b87096f695129c109a7815643042"],["/2023/03/13/Java/NIO/NIO/index.html","b19c13ddcbd443a8d316b5a92ae961ba"],["/2023/03/14/Java/NIO/Netty/index.html","fb5f472081f21310402c166ce57db96b"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","9ec4acf3b7c2d9ec50f7199834bac1ee"],["/2023/03/17/系统设计/分布式系统认证/index.html","2f18a27fb05dbfd628f232ccdf3138e5"],["/2023/03/19/Java/JVM/JVM概述/index.html","e22a485c34881db3feba1f4f78db9d3e"],["/2023/03/23/Java/JVM/类的加载过程/index.html","68be3b4905bc0a3da18dc61597cb8b0c"],["/2023/03/28/Java/JVM/对象的实例化/index.html","bd5df38aec44bca04926e80c66f99cdd"],["/2023/04/01/Java/JVM/运行时数据区/index.html","f2c4f1b548a405d3e98287d6231465d5"],["/2023/04/04/Java/JVM/执行引擎/index.html","93e2a2967bf4e0826a438eb5f95048b9"],["/2023/04/06/Java/JVM/对象引用/index.html","a5c7d37d899d72f1ff12dbe1789b8679"],["/2023/04/09/Java/JVM/垃圾回收/index.html","f091f32e4226911a5d9082699b240eba"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","5f8b7bbbb8ec5793d16a5bf5895be5c5"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","11ba39c6991f4a0fbbc3ad9522bb9cc4"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","ab63c5d98d91a9603cfd9e3e74d83988"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","e3b68fc8c970ca8bebeba07f9e424d3d"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","26f8ef021ba4e581149c5e3f0fca6b3a"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","18330a8b6e2c77cf07a9af35246aaef0"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","f1efb36d05e8db181ebd68119f21c662"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","c02de3ca310b46674f20bc1a4cac355b"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","311f29999f5ed588a1678df08f868660"],["/404.html","835afe9089f60a3271e81147cdae1121"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","11e57dfd6d4b321ea5b54f47ad7d5bf4"],["/archives/2021/02/index.html","a4fe40eef048e49a8d276ca46e625f07"],["/archives/2021/03/index.html","88c83ad4f4cd84ae71b0d8a08789c755"],["/archives/2021/03/page/2/index.html","fa6961e814d27039a9a9fd0b87accc82"],["/archives/2021/03/page/3/index.html","5efe30252ebf24bde7058f30bfc245d6"],["/archives/2021/04/index.html","ddc6f9680ccf0ab1c00787ae2ecbe4e3"],["/archives/2021/04/page/2/index.html","2d3383d9e2ce3112449cc84a01740f24"],["/archives/2021/05/index.html","ae32155a7aaa061de34654be39c817be"],["/archives/2021/index.html","ef7a2bffaa52155f6a484aeb60266fb6"],["/archives/2021/page/2/index.html","230e538dacf1ba3b32314f78678a489c"],["/archives/2021/page/3/index.html","2a973f4a7c9bf612971a7f8142b16979"],["/archives/2021/page/4/index.html","1e52fb2c0a40718f78cf71a658ecdbd6"],["/archives/2021/page/5/index.html","91c5d24f96ad48cbd798f204b2831e29"],["/archives/2021/page/6/index.html","93a04fd6b25832fe6e566dc2a65d2b70"],["/archives/2021/page/7/index.html","692b816b5f19c7a53e4dbcf15d960545"],["/archives/2022/01/index.html","76f475eff0711a19c55a62d5583b1508"],["/archives/2022/04/index.html","be18dba4fdf9d8f3800a487fc7931bb9"],["/archives/2022/08/index.html","d4b85c23a2060205d70ebfa2cb80a4bc"],["/archives/2022/09/index.html","89887cfef3d7b2449ccc4b6eef756616"],["/archives/2022/09/page/2/index.html","19e854e04c17930c10a24768d06414ff"],["/archives/2022/10/index.html","3e029c782435096e5be6f2eb7cc63bd2"],["/archives/2022/11/index.html","a98d6a74864606adf2eb38a667413463"],["/archives/2022/12/index.html","2450dfc470a8843eac49cb1b73c65ef1"],["/archives/2022/index.html","252f5fa956757be71a9f92c78629127f"],["/archives/2022/page/2/index.html","f6c0cdc97afab4677d587a83f20e0c6e"],["/archives/2022/page/3/index.html","bf932e84df8be09c16e398bac773cd86"],["/archives/2022/page/4/index.html","047912cc66e5e7f39f6010e2ababfd80"],["/archives/2022/page/5/index.html","e8ddf735a1c546740c47b441591aff7e"],["/archives/2023/01/index.html","58c093d0b39ed668b0549c7090ff927c"],["/archives/2023/02/index.html","1592762d228cdf3b9c1cb78f09ea48d6"],["/archives/2023/03/index.html","4d3a1b99b0694c0e6cf0df966ea1cd54"],["/archives/2023/04/index.html","d977e08d9692f7d53572cbb02b5a3f80"],["/archives/2023/04/page/2/index.html","ddfc55a91e1ff97f736b41848cd1791f"],["/archives/2023/05/index.html","6a096290d33bca1b9f4b7aecd016e1dd"],["/archives/2023/index.html","6a4b89a5e29c4eff0aff818777fa1304"],["/archives/2023/page/2/index.html","7d86bc4d626898ffab3d23c21d6ec5d0"],["/archives/2023/page/3/index.html","fe062f3b9b1e364638d9fd6f7c6314a1"],["/archives/index.html","2dece736168fd668927e9efb6c06f712"],["/archives/page/10/index.html","275b3cb90a529054507ba0d4ec197934"],["/archives/page/11/index.html","9a4234d4913219f72af7f1ac50c73a9a"],["/archives/page/12/index.html","d94005458fb430ea61c928b75e9f8b49"],["/archives/page/13/index.html","e27aafda5fe528d7a850c1a00c83086e"],["/archives/page/14/index.html","2dea6ec49858c86c86b9ea3584935e90"],["/archives/page/2/index.html","83b01e482a87f84593c030110fb4e6cd"],["/archives/page/3/index.html","ca9159eae0b6759bbf382c1d538e01e7"],["/archives/page/4/index.html","9fb4776427fe695966f525f55af12819"],["/archives/page/5/index.html","b0f61179e9248ef6909f85772f7d26d9"],["/archives/page/6/index.html","28ba722c1039f2fdd101fd54a45d1dc6"],["/archives/page/7/index.html","a0a8dfa3398beacbf1f34b469e5d1f0e"],["/archives/page/8/index.html","1a0d4f5fd35354a2f042b30b548def67"],["/archives/page/9/index.html","d933eb68df76268a34bcdfc838a47d61"],["/categories/Devops/CICD/index.html","d87377c506135092a2b4e84467d5891e"],["/categories/Devops/Linux/index.html","add12e2933de85c628ef2cd36cab3f2a"],["/categories/Devops/index.html","2feaecd2b1a4bc1228feb96305bc869d"],["/categories/Java/JVM/index.html","cd46b3070115ea29ba91e464bd2f2c33"],["/categories/Java/NIO/Netty/index.html","3969ce4489f422fb9904e5ade4f70810"],["/categories/Java/NIO/index.html","a184c092688bfc74c9255f346e071877"],["/categories/Java/NIO/原生NIO/index.html","111fc7ed9f5198ddbcf71dff7a79b445"],["/categories/Java/index.html","fa1db8944eca418355458a3e5e7a588c"],["/categories/Java/page/2/index.html","235c07cb02f3a959f69c30cb49205699"],["/categories/Java/学习路线/index.html","60089a22230d607f9289c1eb9dabfa6a"],["/categories/Spring全家桶/Spring-Security/index.html","23ca583fe78ac37faf0d42846a5596fe"],["/categories/Spring全家桶/Spring/index.html","5bff115bc4d3b98c89f7aad5b99929fb"],["/categories/Spring全家桶/SpringBoot/index.html","c822fe36a7401c4021c5fbe6ff41212c"],["/categories/Spring全家桶/SpringCloud/index.html","202195774970d3e0bad3963954476af8"],["/categories/Spring全家桶/SpringMVC/index.html","48c46f4703bed426d4012b671cf2ca9c"],["/categories/Spring全家桶/index.html","a7a7aa81413b03101d128c13a650c7a4"],["/categories/Spring全家桶/page/2/index.html","80a01e3ff21848cfcee90d59e168a65c"],["/categories/index.html","f1f2f7bb97cdcf66371d16e1490d2a8f"],["/categories/中间件/ElasticSearch/index.html","660d8ffda9170bd57943da8c79f67922"],["/categories/中间件/Redis/index.html","3170e64f1ae391d49c60815ffda1a7d0"],["/categories/中间件/index.html","581a8b70f1744f32bf84adbaf01ee69c"],["/categories/中间件/page/2/index.html","091325ff4e3d89bff33cc278eb7e93b2"],["/categories/中间件/消息队列/RabbitMQ/index.html","c867f35b0ca7288286fd08702ac03005"],["/categories/中间件/消息队列/index.html","557b5b41b0a912446056323c6f559cb9"],["/categories/前端/Mock/index.html","a8a58381c74d9d89ac99fb8ab8405b5a"],["/categories/前端/Promise/index.html","25f3363678704126f4e098fb22b22a04"],["/categories/前端/Vue/index.html","4d312b7662d777209c455b46511db9b3"],["/categories/前端/index.html","3165c029f54cfda4dfbf415ba66a2285"],["/categories/前端/jQuery/index.html","e8bdd3ed762fc0571bef130d1ae1eb51"],["/categories/前端/page/2/index.html","f2433b18059274b0ae858d144034835a"],["/categories/前端/原生基础/index.html","976e5456587a63920df674dfe75f3dd9"],["/categories/前端/异步通信/index.html","14c50b3867c21df583b26d5794cc28ee"],["/categories/工具使用/Git/index.html","376a6b0839d6624ce7b5e278fce35a40"],["/categories/工具使用/index.html","011ea820fa5b15bcabd700ab56e11a4e"],["/categories/工具使用/markdown/index.html","712796f092d6ff54114a27099df6d4dd"],["/categories/工具的使用/Docker/index.html","a853d46e5557716d9a5bc504b26507a4"],["/categories/工具的使用/Nginx/index.html","235871213ad63b4438801a10e8cdfd5d"],["/categories/工具的使用/Swagger/index.html","6034fef2aed104f11b451b9e74982062"],["/categories/工具的使用/index.html","accee981b6d694c6721736468550b62b"],["/categories/工具的使用/博客搭建/index.html","2d566961b86f0085673d18a384aff5e8"],["/categories/数据库/MongoDB/index.html","994027a4b4415d0f0e073c3497e4225b"],["/categories/数据库/MySQL/index.html","30e869ac946f2333e8f93419f951b334"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","f7776114a754c78e086c221a56950635"],["/categories/数据库/ORM持久层框架/index.html","4f4abc6ea49bbe31bbf087d671fa7e90"],["/categories/数据库/index.html","017a653c027f3cd90db135e9e9fd9cd0"],["/categories/系统设计/index.html","a0eb89d2a84079dc84e6062a76627eac"],["/categories/系统设计/page/2/index.html","6fb7bde4111b29c99f9f97ce9f3e624d"],["/categories/系统设计/分布式权限认证/index.html","41988db623369734f89dddea0068d296"],["/categories/系统设计/设计模式/index.html","761fa6cc88f0cabc96f97c40ab1b10fa"],["/categories/系统设计/设计模式/page/2/index.html","e69f52369b986d43ab63d380e539baeb"],["/categories/计算机基础/index.html","7a05b9d2ab193596878f7148d26f6f86"],["/categories/计算机基础/page/2/index.html","46e74d7f2e029d934ae4b060dcd6d42d"],["/categories/计算机基础/page/3/index.html","0199d70ab33ea5870cc86317e4a37e45"],["/categories/计算机基础/page/4/index.html","a88d71a25a1cbf5d0531544f9741d6b0"],["/categories/计算机基础/page/5/index.html","8562ea75a30fded767e28876b7101ebe"],["/categories/计算机基础/操作系统/index.html","caa4e72e406bd95b7855dda31c3a77d3"],["/categories/计算机基础/数据结构与算法/index.html","6d6c96e9b987acc5311f62abae176c3f"],["/categories/计算机基础/数据结构与算法/page/2/index.html","8de586fb02e6c9d96cdab0a67bef9010"],["/categories/计算机基础/数据结构与算法/page/3/index.html","8eb905747591d489c34eca857b7202a5"],["/categories/计算机基础/数据结构与算法/page/4/index.html","ca589ee9098eef3a0eb0adfe490c06c6"],["/categories/计算机基础/数据结构与算法/page/5/index.html","e6c25e68366e1b46698ca5f474f7d5c5"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","810ebb704400995e50185450fc8098ac"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","0df801973f7cc273193ba5f480974a5c"],["/messageboard/index.html","93a85d2865fe2357ad7b2e0f14066b45"],["/page/10/index.html","f8e285eb2c7cde985db382f555136fea"],["/page/11/index.html","505387acbe59649201d726565c1653b1"],["/page/12/index.html","418754219c84c2df572af64105f2fd5f"],["/page/13/index.html","d63413fe5ce565dfd568dd0fecdbbf8c"],["/page/14/index.html","672d77cc55aea87362f1742a32a6e6fe"],["/page/2/index.html","4e68cbf0ec5a2b3a1fc63fc2ffb11882"],["/page/3/index.html","6dcaaab1002f49b62fb2cbd0228eebcf"],["/page/4/index.html","b892dae48ae3717e80c26762a12478ec"],["/page/5/index.html","a084e7ea74513c057b6f81fa54c68023"],["/page/6/index.html","d8cebb5ca2c6681e4ce279ecfba6a078"],["/page/7/index.html","0f0069f4eae83deca3fb5695fe4c534e"],["/page/8/index.html","d660908b9924da8f345510aae974ee4c"],["/page/9/index.html","80ccbf589ca3116fdd48e35d49418463"],["/sw-register.js","e09c0df04b0c5aa93ed82475327db19c"],["/tags/Ajax/index.html","cc80f672059dee1a6c04bb9cd6b4f95f"],["/tags/Axios/index.html","6e550ba708a4a657e44e61bdecf2c724"],["/tags/CICD/index.html","8518725709001cb77be2b4b404271609"],["/tags/Docker/index.html","5c5ff7798c779a1c910020bf34b33825"],["/tags/ELK/index.html","4b11ccb44d9624973fa9a2cb8cb8a689"],["/tags/ElasticSearch/index.html","2f9de1f5c7dcc6b18ac017b1c69e8d5c"],["/tags/Git/index.html","aaca1479717e72529d6cd1f38e334720"],["/tags/H5/index.html","c5312e5cd981a9431d1220b04a60b253"],["/tags/JVM/index.html","654be43aff98f952eb73dcf5e2f90354"],["/tags/JVM内存模型/index.html","b88560983c89711b4edd3b19ddd41f7c"],["/tags/JVM执行引擎/index.html","faaaa0a7f083ed5804612e6002949509"],["/tags/JavaScript/index.html","c0bfd6327df8500b3dd2ffc958ddf9d1"],["/tags/Kibana/index.html","f996a9ab7efe12972760a578454b586a"],["/tags/LeetCode/index.html","290ab26ca40981f26ae87bea2cfe9418"],["/tags/LeetCode/page/2/index.html","69794176b0efb461e82fd68bf4d6f4a2"],["/tags/LeetCode/page/3/index.html","f8b97c933f8aaf687467a5465e7c618f"],["/tags/Linux/index.html","c193ebc5ad191b56ae67fb64e0152294"],["/tags/Logstash/index.html","79027e820b115c83d17b1db400ac2dfb"],["/tags/Mock/index.html","bd2f6509386696a3f7420dbfe0ae6857"],["/tags/MongoDB/index.html","b09a2c39b2a3cef2c92c5e9cae43c02a"],["/tags/MySQL-数据类型/index.html","484516ead814453a78f475d3ef5ddd61"],["/tags/MySQL/index.html","49855ea2c564f70400c509ddc3afde5e"],["/tags/Mybatis/index.html","c782db2ebd146ace570b1a68778276cd"],["/tags/MybatisPlus/index.html","3d93555e7913091448ab2201292d4a35"],["/tags/NIO/index.html","1de809fdc3634cad4152b674d1191b53"],["/tags/Netty/index.html","8b1a0130230f31758f40f049b827a911"],["/tags/Nginx/index.html","e15afbf050317b2da3f93277f98fd628"],["/tags/Promise/index.html","78d2a6dac9cde5b962855179b2c118da"],["/tags/RabbitMQ/index.html","d6104d0563b504c908dfbd899f044853"],["/tags/Redis/index.html","0619d6af9fec28b5097c7724d6df4e3f"],["/tags/SSM/index.html","4b2baca079e6c368c8163257df26a9a0"],["/tags/Spring-Security/index.html","1eb46bbad03f55bfc7d8dc5db79ab590"],["/tags/Spring/index.html","f4137d09dbf90dc500fab6cf38b78eab"],["/tags/SpringBoot/index.html","e286e10aadc97f895e453cdff27c6360"],["/tags/SpringCloud/index.html","ec62fc28705932131500f20c9a9d90aa"],["/tags/SpringMVC/index.html","635755d12de7748cbef38ad9301a4336"],["/tags/Swagger/index.html","0e67285e4f79389cc8570b878f9af4dc"],["/tags/hexo/index.html","7fc37ac8149bcc2c0903cde53a382aef"],["/tags/index.html","19f2364e0db22030705e6bcc8d58319d"],["/tags/jQuery/index.html","74307e5640763e2a5b8b849f847dd207"],["/tags/java/index.html","35905af23de59e9078801c4e5f33ba67"],["/tags/markdown/index.html","171e75c83fbb709fb46248919a86a7cc"],["/tags/noSQL/index.html","0664dba6e97990266e1c8625a2af6944"],["/tags/typora/index.html","3d513d85800aefa0a9ced5b3da0ae2b4"],["/tags/vue/index.html","93d8867e4a6404d811fe389c4da8b441"],["/tags/享元模式/index.html","d292ad6b3e3f54b97b0e9f0330fd6dce"],["/tags/代理模式/index.html","0fe93e76f1480098cb0b3275cec4f752"],["/tags/内存管理/index.html","bec484a6cdaf6b02c3a68bc3d52fc205"],["/tags/分布式/index.html","de0e8db2a68e2bc8bb1329bcae51a8bd"],["/tags/分布式系统/index.html","c1168edd2068b6d1b6e6e01ae3d12548"],["/tags/前端/index.html","6cfb4430ca9ee66728bd6b9828ac96ad"],["/tags/前端/page/2/index.html","13238ce526fde008f0daab1e984b7928"],["/tags/博客/index.html","1e1bf2b8dfeb15caa0370ce1f21214c9"],["/tags/后端/index.html","cf823c3a92d5125a6ad96092e8c55835"],["/tags/外观模式/index.html","88e7eab6ff00d457e5db1359f9cb9bd5"],["/tags/容器技术/index.html","75afca0aee433a2f3ff500258c170de3"],["/tags/工厂方法/index.html","52f21b0e1b6455365fcc9fe9668777e7"],["/tags/微服务/index.html","2e48e10116a1d4348ccc1f41250ff654"],["/tags/抽象工厂/index.html","67c44acf758a9e1628a7fd5a2db9e2c1"],["/tags/持续集成持续部署/index.html","660a1831fb5a633c5c28c354cab73ae4"],["/tags/搜索引擎/index.html","0e7a0f292f6191a36b350d854ea236da"],["/tags/操作系统/index.html","a06b974a98b18060df11013507131a58"],["/tags/数据库/index.html","df9d71c2484f14ce05833a6ea51b1e9e"],["/tags/数据结构与算法/index.html","764e63627b52a7a008b63cf5f9e959d6"],["/tags/数据结构与算法/page/2/index.html","c5c937c5c9e763c06171feca8330ca01"],["/tags/日志/index.html","e610a4e22e2ba0a4729c5c085b0f60a4"],["/tags/服务器/index.html","3849f0b1dba7f5fc59984297421a306f"],["/tags/权限认证/index.html","ff44a12d64eb1ca283b9c77b8d9ecbb2"],["/tags/桥接模式/index.html","d872041c710dd78cd215b4bd27fdd0d6"],["/tags/模板方法模式/index.html","959368f27c3701582ae709d1af13c614"],["/tags/死锁/index.html","7014a38df27e82978aa6b3fc568727f7"],["/tags/消息队列/index.html","60c6bbd20560c061b0586982d9f5e6c6"],["/tags/版本控制/index.html","e52537b5735d05fa46b6709331924eaf"],["/tags/策略模式/index.html","b721760e68b770bed2844a58d970815e"],["/tags/简单工厂/index.html","4174d286b956d26877f82d140058acf7"],["/tags/算法/index.html","6ac538f4ab813ce23f48ec6c14287897"],["/tags/组件化/index.html","6a06f56e6b91ed6b46ed097eb1bb1764"],["/tags/缓存/index.html","85d59f7e208a14b41357400cbb306376"],["/tags/观察者模式/index.html","a5f0c2bcbe692be9c0bc4b00db2545e0"],["/tags/设计模式/index.html","7c91416cebec4ef36e6d3d21ee159025"],["/tags/设计模式/page/2/index.html","e0536cb60f34f516afac600943b44aad"],["/tags/进程管理/index.html","8fd9e9d4b2a1ec14a48ba1420e5ca90a"],["/tags/适配器模式/index.html","6d7b8ccb9a2589939cfac7155af6507e"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
