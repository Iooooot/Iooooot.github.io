/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","7e6e6f6c8181896f5176e4af3fc810be"],["/2021/02/22/工具的使用/博客的搭建/index.html","7ab2fe789d0749370e813c977adffc35"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","ec6aa9530371f636b415637cbda71db8"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","00b8092289b804266db138efb1a920fa"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","71cb65ba1c3243746de10ae7e8b6334a"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","12068a05e8888df8badc1a7b8bb67ad6"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","bceb47997676eb5f3fe00a790206735e"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","04ef03a8624d6c8fe55497c3fddf1b8b"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","7afdd737957dccf45fe331d2eaee30e0"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","e00364c74d528d14520d11f5f04c8848"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","b3fc98be40c2963cd42b36ae7417dcbe"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","0ee7ae7e20bac86618513e3749f82aec"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","5c827e8d88599e01df1f63c8d950ded5"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","f9b2e2dd2b03e2d665eeeeb9b2fa0708"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","efb309cd1c338913a45509774c1a0fae"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","d177829a18f9de5be06b41524b5c8a3d"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","178a6ef32993272e222be8fa08417fc6"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","57688c2f3ca3f2a9eddd14268a9eca1b"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","f98984bdc00d1a729afabc482f6f2f10"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","d9be5870f661a74d48ea7b827ba4efad"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","209812dd166045a7e5c92781294f2b15"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","5eb68df1c58805dc1e4ec9135286d36c"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","95a471892f96e4613c99c90189d74179"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","0ff0c5780797078b2786f487618324d9"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","abed5c1b48c87c06de183bae32af6b74"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","b80c3cb770e363654c5831e879731ab6"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","747fd494260659c5d859bb5020a6fdd2"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","019dfffeb80d4c79f880e85ecb66b4a0"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","5d091ffdf606b2cdcc64fed98d056ebb"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","dc7f76b2803e39b3535bad28e8dde108"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","265aa88dd4ed671f2ace7e6d58695512"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","158a2cfdac69f06caf190cc93a5fb4c7"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","72baee3e2cfdec5b04c718712d3fd44c"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","f3810693ba06512dfca6ea1a387f18cc"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","900e9f6f4d2bde1531ff14daac761794"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","80ad8616a78012cd854670326e9c03a3"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","ce275827126fef46f3d1593d2a7df285"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","4270963d78454aff6294dcc6cb25190e"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","8f9d2d967eea55513ad6407237d8388f"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","588c74552d7e57d54e5e418adf476a0f"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","b79d33ecb33ca3cbd488a2b630886ccf"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","81a863d57964d75fae4cd8ba825786d9"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","4afaf2e66bc1516595168f18ac004233"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","1b2a8d45be4c039ac8e709f4e65f88cb"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","925378977cf7eb515d2efc98f367cf23"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","c59d81f78c7c86ffb1dd140f1db74166"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","bed677fa36df3c86a53138d9d1418109"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","22532b3621e8b423ef7e9b60ed11c92c"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","0b0966d4cbc2abce87dbb5f10fec55a3"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","7d7f8340b4a806eb14394cb323780082"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","cc7ab7f6e6623f94593b2d141eccbb8f"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","005aff3555ec241a78bc3c1dacd117ab"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","c492f2eca824000df726b9c3cd6473be"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","1e95937fb619034a9a4c2f84a11eb8d2"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","24f2d72424632d7a98583e2ca2a85253"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","05306cc5de0cca16dc77508dfbbdd3aa"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","62749520ed62b0ca4cc0d37b30bb27bb"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","c505070ff661d2c31bc14bf04899f323"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","cbc4825ce261d222ba68cf717c573baa"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","adaae799ae47badf495c0553f7d1cd9f"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","2c080d33a746aa0677332108c853d64b"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","5022329d15a754cee4426718a345a463"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","d4006a4a32b993b547445874ded00070"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","a25de2e072dc1b1dade3c62dcc62bda9"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","a6081478977cdd32b708febacc87ba51"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","c16b62e5882fd6dd4fab333f3e9862e1"],["/2022/08/17/前端/jQuery/index.html","64c845cfa54cddf3fb6eff5d3e49713d"],["/2022/08/19/前端/JavaScript/index.html","c6ec51efc7a43c3a72bb252f7aa89e50"],["/2022/08/22/前端/Ajax/index.html","062dfe0fd33f80f7722d1875885034ad"],["/2022/08/23/前端/Promise/index.html","52aa9c30df44b18d4c102721c4e2f4de"],["/2022/08/24/前端/Axios/index.html","084653d7f0129ff6fea6b118a74a6f5c"],["/2022/08/25/前端/H5本地存储/index.html","ddc0350c384b208b75093845712a0995"],["/2022/08/26/前端/mock/index.html","d3f443b96f08be94c75161ae12e853bc"],["/2022/08/31/前端/vue/VueJs/index.html","0b2d6411f7dcefbee3bbbfa522b7159e"],["/2022/09/01/前端/vue/vue组件化/index.html","79ed272af9a8e1f770fb0e12e19f0c02"],["/2022/09/04/前端/vue/VueCLI/index.html","abd5c124c1b90dca64cb182d7b74ded2"],["/2022/09/07/前端/vue/vue实现动画/index.html","f83c8d8d6c45d9295fb53313ab83c0bb"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","744f16fd75cd95856a31f37c643be2f3"],["/2022/09/10/前端/vue/Vue异步请求/index.html","6c14f269c102541ab292a2ecae4a270b"],["/2022/09/11/前端/vue/vue-Router/index.html","4bfdaaf592f76f1293e9933aeb47a1eb"],["/2022/09/13/前端/vue/Vuex/index.html","a3f5dd6809d5541ca01fc3a850f197b8"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","be81d4c698dff4b9c0a790a3ed9e4bd8"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","dc1c572db46ee504e478de56da477fc5"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","7d03a1ea37780f9f21c7925eb376647c"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","19f004420a8cde1837fbf7b070fd373a"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","d864631354d993f649bae271ae3888d0"],["/2022/09/28/DevOps/Linux/Linux/index.html","af6e6fe48e84a383f1548e9ae1675607"],["/2022/10/02/中间件/Redis/redis基础/index.html","b474a72e64c1d42479ac194790807d4d"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","b05a13b189d4150407d7b704bd449fba"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","9df4b513c516f8052dfef810ceda0c56"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","318de7fca3c010703072496f94e02c4e"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","a51e10eb4ef54413f17086aa6abd9e89"],["/2022/10/17/中间件/Redis/Redis集群/index.html","4a2b430d70e90d2e4e3eaf0c1225e10a"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","f41405effc5954240ed1f72923effcdf"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","f94ca0d8d91117d5538450e51d2da100"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","5c6bcc7944e052e5982912580671f5bf"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","4c3a64df869c7db8375cf0bed4a581c5"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","7a7f468a76559c0d7f4f9e1ac27012e8"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","4324c4c77379cb83ecd685e440f2db82"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","b5a5cb6b07a2eaae1a8cfc374d36edf9"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","63b018690f4e82105bd4e9b9d7dd6184"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","d5ab543e01fab7242b333dea01c8e225"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","09bda5a02c67b71cc035088acefc7a32"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","5473277191998c3b8f187deb1ea39b86"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","991d5675a9c2b3bd5f684d952c70c0da"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","fe04d7cf71112ea59155efb397e2b257"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","9eed3ae895c4dc505c16048d110475f7"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","a1560f7314f01ad0071a95c6b329e484"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","03dd2593e35f9b992412e9671a120859"],["/2023/03/10/DevOps/CICD/CICD/index.html","b59cb86772c0987e652cff51650b2396"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","a0c7d940f83dfa8c196a4dd069bcc253"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","d9dab56ec40f015239b3af438e6259f3"],["/2023/03/13/Java/NIO/NIO/index.html","bec862101d10a8eda85b944a484a2007"],["/2023/03/14/Java/NIO/Netty/index.html","82902131f835a067288bddf4a7688a28"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","6c277729dc58563c5551831dd44fafc9"],["/2023/03/17/系统设计/分布式系统认证/index.html","97b8f539ee3636c3984a31c617dd214f"],["/2023/03/19/Java/JVM/JVM概述/index.html","9897fa8731caa5f5225a045a5e6ec3d2"],["/2023/03/23/Java/JVM/类的加载过程/index.html","c5a42246512d03142a5a23dad1800dc9"],["/2023/03/28/Java/JVM/对象的实例化/index.html","5e66eca4ecd91011ef63b200fd8eb3da"],["/2023/04/01/Java/JVM/运行时数据区/index.html","0366af1cc88f7820289c887e9a664573"],["/2023/04/04/Java/JVM/执行引擎/index.html","4be08c5688cfd12119258f0aa2a0546d"],["/2023/04/06/Java/JVM/对象引用/index.html","fc2958fdc68d0a5d81afdf196a0f6e42"],["/2023/04/09/Java/JVM/垃圾回收/index.html","47f990b2d768e0e8ab0fcf9d026c51c0"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","554e0a2b747ed90ef1046cbc95d74da2"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","17dd707d48098ec6910778f1462dc2ea"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","b6eba62c02fa6c1462f1dfd1562e94d0"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","c3149d6218c5d7ce3fe773f0bc407034"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","b784f99d5dbe3b761cdeefb57808c0fb"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","714adbaa3153765d2f3222fd7dabae4a"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","c166cb591f43790f14848d8282fee97f"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","bf4b195cc7221d1daa3ee90edd612cc3"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","22767cc6d5eef82ff0902fe5afa04ce3"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","0f6e5b2210f5e4aa78e8572ced604178"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","31dcb4bc62644d8c6e454f9fb00af569"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","0446765a304d1fd0f317fb702b4d99aa"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","5b661ed61888fab5c1ace70f8b4bba91"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","a3405f5829544bb2bbb0bd3374a05171"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","9c29d26eccaf53cac43155422d4c9d9c"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","f529ea6d1788c8a5360dab9822d8384b"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","98f51712384009714de5f2fd43bc0327"],["/404.html","cf893e02fc1828fbebb6482f9260c384"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","afe5c8a0b8a7d6f11a72a002d4f70e5f"],["/archives/2021/02/index.html","6623426a4e46ca35692cc9cc3657af1b"],["/archives/2021/03/index.html","25806e0358203468ee31408d78a9711e"],["/archives/2021/03/page/2/index.html","825caee03fc2ee335588208ae7335eae"],["/archives/2021/03/page/3/index.html","cf405263047e3f813e3dc1b6b1bb2099"],["/archives/2021/04/index.html","80a92965edefa2408ef3faa47073c96e"],["/archives/2021/04/page/2/index.html","2ea634429b40be162ef51bbdb9baaf9a"],["/archives/2021/05/index.html","2e524950dbd1ec2d8c31fedb45ebf94f"],["/archives/2021/index.html","53f9b2100d10cfb4018a7fcb2d53a05a"],["/archives/2021/page/2/index.html","47ef0708038615fe90c7a076a3e221f8"],["/archives/2021/page/3/index.html","d929b26995a70a370e22f6bbd36df5b7"],["/archives/2021/page/4/index.html","ff77d412a3409c3f5756db2ce645bd1f"],["/archives/2021/page/5/index.html","d09ad5ed8be9185cec6b23c63e431164"],["/archives/2021/page/6/index.html","b5d6beb7ec8b2bda530e3b45af32c98c"],["/archives/2021/page/7/index.html","f71c5a3ecdf8be34c944d7775de6e912"],["/archives/2022/01/index.html","80347447c4cc9b042c8fa4f78f8db6c3"],["/archives/2022/04/index.html","1d28eeb576f7f64cbd2b88ed27643aa4"],["/archives/2022/08/index.html","f639b2fd858bb7bd44e955691bbdfb48"],["/archives/2022/09/index.html","60734d6578c43930a08b9aa401e5575b"],["/archives/2022/09/page/2/index.html","5c02d23d2c5a0e90a5cfd3c001c08908"],["/archives/2022/10/index.html","5cd2710bdc2c77efd840f39d12f2ee28"],["/archives/2022/11/index.html","7615312c4cc4556d0fe88c60bcdb0af9"],["/archives/2022/12/index.html","fe1974d9a5487d89e28151b99142413d"],["/archives/2022/index.html","1ac5fa331ee8eefd28b41d8a8e6483cb"],["/archives/2022/page/2/index.html","2bb42ef35d5488053cfe78dfd763f4cc"],["/archives/2022/page/3/index.html","53d72d902b5034cdc6f9b84c2b073abb"],["/archives/2022/page/4/index.html","48ac27072d995190971bc368fcc177f1"],["/archives/2022/page/5/index.html","13a23db334ab4c886c821b8e4802b9f0"],["/archives/2023/01/index.html","c0a789a90f752f5c8a84444f1f7008f3"],["/archives/2023/02/index.html","7bacf365b4ab91bed8f46cca845ad07a"],["/archives/2023/03/index.html","d2daec3492714a8f28b46fdc50875f62"],["/archives/2023/04/index.html","08b849a4f4d7ba5f67f728d4533cc710"],["/archives/2023/04/page/2/index.html","711b46cc73cc5460bc2d33a1db06ba64"],["/archives/2023/05/index.html","394e3a1f58c8b54c9ea2c8ccb5b76900"],["/archives/2023/index.html","ee985c5cc67c89aecaab09431333f069"],["/archives/2023/page/2/index.html","e582705ea04907387828cc90c45f6e83"],["/archives/2023/page/3/index.html","831c4fff19d969967429754d38967197"],["/archives/2023/page/4/index.html","b48cebe6ef4ee5a69ac7ba8908fc7e82"],["/archives/index.html","6025d4479ff1a95d3646a3508db307dd"],["/archives/page/10/index.html","69c64b98259e26b0a3fea41590e996a4"],["/archives/page/11/index.html","01dd9d20a42ccc307a8f08b40e74d5f1"],["/archives/page/12/index.html","6d48bdf1dfe252303d66ed202e1b9415"],["/archives/page/13/index.html","0bf250559cda398218d771fe6655ac45"],["/archives/page/14/index.html","fb692d42a7136f79739195f915534ddd"],["/archives/page/2/index.html","702827c8f94de33229f67f73b73c5f5d"],["/archives/page/3/index.html","ea5245fceb594b2503b358b79483c7df"],["/archives/page/4/index.html","1aa8323ebbb25a290a46f1f488ae6323"],["/archives/page/5/index.html","b45ccd69ffa4a31ce37b12d93bc04ee6"],["/archives/page/6/index.html","7e6cda57cd26dc69a6c6ce1a321f6a6a"],["/archives/page/7/index.html","5c79a6773510fa8dcb18fd3fdaabcec5"],["/archives/page/8/index.html","e535bb0e69a0172e8e7af7102bf27743"],["/archives/page/9/index.html","9e2f6e660f3ff40592d7fa78a5385618"],["/categories/Devops/CICD/index.html","4bc8a298403641789acd40148e084481"],["/categories/Devops/Linux/index.html","2333b8b4d1fbcea25e5627025d6b9bab"],["/categories/Devops/index.html","fbf0aea8c9d86b0e66760f3ca5ab7092"],["/categories/Java/JVM/index.html","e78def4636b25baa7d13255589738c5d"],["/categories/Java/NIO/Netty/index.html","75dac1a1231925d04e76a9bb01d159bb"],["/categories/Java/NIO/index.html","1640e69e89b265fce7cd7b6cf5eb4c43"],["/categories/Java/NIO/原生NIO/index.html","f058c98ca3f49640cf7638bf2e3c5522"],["/categories/Java/index.html","82865cadfecf6125ca437161d27952a8"],["/categories/Java/page/2/index.html","fe4e4be817158e3e40a75c16bf64a509"],["/categories/Java/学习路线/index.html","0e0bbad3372afeacb7c7dbf281c229f7"],["/categories/Spring全家桶/Spring-Security/index.html","eb536303e98780bfc0eea1043ec340f2"],["/categories/Spring全家桶/Spring/index.html","04fb26276751348d4be8bd39b92848f0"],["/categories/Spring全家桶/SpringBoot/index.html","f9517662bc49c258427318cacdb17374"],["/categories/Spring全家桶/SpringCloud/index.html","5f2b2b9d8d47144c8acc0a02129b5349"],["/categories/Spring全家桶/SpringMVC/index.html","070ea4aacef1fdf95876d01feea85ef7"],["/categories/Spring全家桶/index.html","ac56172a0977f6812385539c883ee22d"],["/categories/Spring全家桶/page/2/index.html","48df49b7ca544c520de46858190db917"],["/categories/index.html","d45dd68c34875c6cbf66dd1abdc7f4dd"],["/categories/中间件/ElasticSearch/index.html","821477ab87a620fe1be9b54ba1c22b4b"],["/categories/中间件/Redis/index.html","062ac9034de93de56baa8f7f4e7fba35"],["/categories/中间件/index.html","a7a5db947c5a2acede65341458f4a8fb"],["/categories/中间件/page/2/index.html","b9b9b068139465a35ae798b9b848d5de"],["/categories/中间件/消息队列/RabbitMQ/index.html","2ef20e7a3c8fe99cae65606a5cb55e8f"],["/categories/中间件/消息队列/index.html","b66eb912038c52c4280d7586a5260eb9"],["/categories/前端/Mock/index.html","7b01f856005229acf6f0cdb111c26bd5"],["/categories/前端/Promise/index.html","8e3fe0b177331fd24e4516ee218f26ed"],["/categories/前端/Vue/index.html","f5be436b89d44a3f6cbc93a898b01b82"],["/categories/前端/index.html","b57f39131994683398760a1f326d1575"],["/categories/前端/jQuery/index.html","26f3dce6f2ee3ead56a38846a78df8b3"],["/categories/前端/page/2/index.html","dc74b8f3d2662a11d05de1b38416a651"],["/categories/前端/原生基础/index.html","3aec042b0c316ef9c7d7385bb129af40"],["/categories/前端/异步通信/index.html","244144de7135839035cbfe921e576062"],["/categories/工具使用/Git/index.html","89a342805420689844d8a25a8f4d5660"],["/categories/工具使用/index.html","d4b845d08ab0e8f5394037efa2b1d13f"],["/categories/工具使用/markdown/index.html","9a9c713b53d7a19d256155c0e0361ec3"],["/categories/工具的使用/Docker/index.html","2acd97b6919a3e56570e6ab23c386543"],["/categories/工具的使用/Nginx/index.html","a65c8e31b8598938d84d22ee55e2a0f5"],["/categories/工具的使用/Swagger/index.html","f0b07d57d884087d04115218827eb2ba"],["/categories/工具的使用/index.html","dec9cf4ba5d0e2b0310bcfa4623c6cd0"],["/categories/工具的使用/博客搭建/index.html","aca6a9131f5021ee6bdf54be8812b6d3"],["/categories/数据库/MongoDB/index.html","4d2a8e15b2fd39181f093aecdcaa80e3"],["/categories/数据库/MySQL/index.html","b2f38ef5cc734020c9627b347f355ca0"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","e322167ad8b30caa7319b87b72ce1f68"],["/categories/数据库/ORM持久层框架/index.html","42994d4766d44239e146e572f05b6ac0"],["/categories/数据库/index.html","210d8114fe33e56f7fd51f73e981f1c5"],["/categories/系统设计/index.html","38533f06694e8d63ccd864368a192bcd"],["/categories/系统设计/page/2/index.html","a0e04800be75e15c7e00347a1e233187"],["/categories/系统设计/分布式权限认证/index.html","fcd1572494ef9569964e03daea6e3b89"],["/categories/系统设计/设计模式/index.html","206de64acc61aa0126a1c89e06934d23"],["/categories/系统设计/设计模式/page/2/index.html","163892ea4ef9f7d90a3c77e47a4dd509"],["/categories/计算机基础/index.html","9970f6c561cc789e0453208b062a4c6e"],["/categories/计算机基础/page/2/index.html","52aafe0fe73456a8bf906786feadb688"],["/categories/计算机基础/page/3/index.html","c30cdd186bdde2acc84d62abca60311f"],["/categories/计算机基础/page/4/index.html","e3c36fb1b78400e0a5d428e805e16aa5"],["/categories/计算机基础/page/5/index.html","7808491b5c44d0822b491eb00839ee72"],["/categories/计算机基础/page/6/index.html","21225718b55d88fc304345bc1ad8f8c9"],["/categories/计算机基础/操作系统/index.html","6301742b06758e7a86d211983fe29eb4"],["/categories/计算机基础/数据结构与算法/index.html","0991ceef7bc6bb51a2063c16d6aa42bc"],["/categories/计算机基础/数据结构与算法/page/2/index.html","cbe2e3f91e89abc2fb6bcd00c69dc571"],["/categories/计算机基础/数据结构与算法/page/3/index.html","ceff3679e6b88c38f7ef624bafa3d247"],["/categories/计算机基础/数据结构与算法/page/4/index.html","9cdf360a9106ad34c11bd40b372dc9be"],["/categories/计算机基础/数据结构与算法/page/5/index.html","dbeebdf90494a614dc7444554af17785"],["/categories/计算机基础/计算机网络/index.html","f746bc06680b03d55aa27add9baa0b3b"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","b7cc4ec02e528a06103c84747d1e39e7"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","f778f3cbcb114a497a37c0912880970e"],["/messageboard/index.html","780534cdc1ca1c08caa13a8e70ec49f7"],["/page/10/index.html","69197b1cfebac5c2f54daf1418d05011"],["/page/11/index.html","dcad3b2138b7f67695d26505bf3ccb2a"],["/page/12/index.html","b30285bb5c477bc0dc95ab072adcdd94"],["/page/13/index.html","68b60674811610ff374213364d630a62"],["/page/14/index.html","6eda8c5c8d7402d68697f0c589a1f188"],["/page/2/index.html","9c9be6091a866d9fc8ed7c49e49dd32c"],["/page/3/index.html","b6eb3993c9201ed1b6624377e96b13e7"],["/page/4/index.html","321f3cc253eb6b706bbb9dd32ca83329"],["/page/5/index.html","d75bd3f5dfd05361c75f1cbc1124b352"],["/page/6/index.html","78d51cd46353856c5b93e128c2f23960"],["/page/7/index.html","4e0eeb2e36f2f808e945e221175f3895"],["/page/8/index.html","de9d5ae023f4f03ad01389d145c46272"],["/page/9/index.html","3266796d9171077827ecc1613957440b"],["/sw-register.js","c9dc03eb3e946687c978ffbf3ac50321"],["/tags/Ajax/index.html","1628ef48685082edb8ef7c313cd280e1"],["/tags/Axios/index.html","9cd9a42b32ad520315a45efe5cfb2e8d"],["/tags/CICD/index.html","21396cd40e16a085dd5e747027931928"],["/tags/Docker/index.html","8756fda04107c410f01f1073d937d0c6"],["/tags/ELK/index.html","5e5e247ec2a2e967bac9828a42509558"],["/tags/ElasticSearch/index.html","f04e0a73d2b19d53c3d68bdc0c3be5d9"],["/tags/Git/index.html","29273e4edfcd1b052d898fe857ca681e"],["/tags/H5/index.html","c86a93ba2b5d78b8766a3c713983875a"],["/tags/JVM/index.html","a1523e99714b5132110c176ced8b070c"],["/tags/JVM内存模型/index.html","0872fb678e89276e96646f7ad4690181"],["/tags/JVM执行引擎/index.html","b093ceafb9031a7864b2728d8daa36ab"],["/tags/JavaScript/index.html","278a16a4c3d51d57ed4b2f3ef2e8dae4"],["/tags/Kibana/index.html","dc5086c831ad3f8107d620eb2cbe206c"],["/tags/LeetCode/index.html","1bb620b14685990d75adcf6e77581c79"],["/tags/LeetCode/page/2/index.html","4167d655d79bf160202fce3add27d9e9"],["/tags/LeetCode/page/3/index.html","c42dcabd06d4df04538f9639e672bf51"],["/tags/Linux/index.html","7d07567a1920043add84b2dae3125fa7"],["/tags/Logstash/index.html","51eb5e39e04c9f5a4b7ba4526671c2d6"],["/tags/Mock/index.html","9b3a43c9c48bad1d9dd10550c84db2c6"],["/tags/MongoDB/index.html","5d1552c3233e6b7a3408b3cbfab7f3e4"],["/tags/MySQL-数据类型/index.html","2bab44560fc2214ee2ede4b92e30703f"],["/tags/MySQL/index.html","fbc117e3317cf37c11bbc117bc8b4aef"],["/tags/Mybatis/index.html","a8177ddaa2937d306aa8ccd31a7f5a52"],["/tags/MybatisPlus/index.html","7e5f804f151d7b29d1050b25f5665ec0"],["/tags/NIO/index.html","a35fff1f02257a1faaac184a8e93c8ba"],["/tags/Netty/index.html","71978670d6c21a70fa491ec4ecd26ca2"],["/tags/Nginx/index.html","927548c58c6a5fcfb9b5fb96fb8a8227"],["/tags/Promise/index.html","4a34ece4a33a775509a26b4ca5725d87"],["/tags/RabbitMQ/index.html","e9b869b4187acf4ab44865e066d8739d"],["/tags/Redis/index.html","f5d64089eeaf8c83202f31052c02cf59"],["/tags/SSM/index.html","4f90dbfb2ad4b4d1f20cfbbf78987356"],["/tags/Spring-Security/index.html","f78697fa4b4cdc98e5a1679f525a98aa"],["/tags/Spring/index.html","8de19bfabd8fb97d654f40cb410142a2"],["/tags/SpringBoot/index.html","a944e7dfc3b154536e6efb95de16d361"],["/tags/SpringCloud/index.html","4e83c64068e77f338e155bc27d135535"],["/tags/SpringMVC/index.html","0eefa5169d8b886c66de3f6e99f93caa"],["/tags/Swagger/index.html","87c4a10ea6b74640b147703e20b93a2f"],["/tags/hexo/index.html","4ccad2c666404b557f835b8b853021f6"],["/tags/index.html","ed46ff301a4d26083d2f1bce6370d6f8"],["/tags/jQuery/index.html","f1696e8f46e52a3dcc0bc573d68656dc"],["/tags/java/index.html","4ee5227926de877ff1a8cf45a324fc78"],["/tags/markdown/index.html","9b399ef930ff0c1bd1199ea2b21b0109"],["/tags/noSQL/index.html","425075fa6cb56832e3ee2cfb1173914f"],["/tags/typora/index.html","b6d30fd9868e468d141d7e6e42b44ad6"],["/tags/vue/index.html","c82c84af6a92f66c7dfcb0cac4690207"],["/tags/享元模式/index.html","511d2d88e6265e4115ac3d4de0c3ba0c"],["/tags/代理模式/index.html","7ea73c5cd8ce906af547a37ece0075ed"],["/tags/内存管理/index.html","627dbbe3cce764c2077d2ca1fef3d803"],["/tags/分布式/index.html","1dc3aae80d9bc8587cd43716bcece75b"],["/tags/分布式系统/index.html","0e48b2ad20ddd4c339fb3d4738969634"],["/tags/前端/index.html","37412c27caef00ac0f7bbe8de3642641"],["/tags/前端/page/2/index.html","ca193658755292612855a465dedb25d0"],["/tags/博客/index.html","f8de56051a35650a942afdd210cecadb"],["/tags/后端/index.html","f5dba10e936ae2939f97f8c41182f41a"],["/tags/外观模式/index.html","a2ef2e3e0413c2dd1d98b4bd3474663d"],["/tags/容器技术/index.html","d405a3e78dd5eeafbb37c4631dec862d"],["/tags/工厂方法/index.html","7c2812dcd9c3880872dd2485b4dcb36f"],["/tags/微服务/index.html","85be58c99440ecd088661e11d06e6983"],["/tags/抽象工厂/index.html","65ed09755708ac4b447bd2c9a43c5e26"],["/tags/持续集成持续部署/index.html","d69e41072c88401748add47950ce7dcc"],["/tags/搜索引擎/index.html","c2e9c776d45ca6849c2c1f17f8304531"],["/tags/操作系统/index.html","0a3f24364a02fa894b7540366f1d9151"],["/tags/数据库/index.html","7d085473c311cffe1af7c46b1e73326d"],["/tags/数据结构与算法/index.html","5c7a5ee0e5b0dddf5dcb3e7b869c1e13"],["/tags/数据结构与算法/page/2/index.html","705a0235a2408ece2efe4d371298e744"],["/tags/日志/index.html","d377d5d3eac70a99c0b96efaf48160c3"],["/tags/服务器/index.html","b934e4e40dc063e53d86800fe87a848a"],["/tags/权限认证/index.html","527baebbba4db208b5126ebe2e076d7e"],["/tags/桥接模式/index.html","a8cfbc9614632f94049204c8493c0b2e"],["/tags/模板方法模式/index.html","e863906c59bed2ef3c0ad367f4e16398"],["/tags/死锁/index.html","f4ee4fb7b0cb4a33e72d402819426614"],["/tags/消息队列/index.html","6f3a80dd3e608046dd53fe1a8e1aa84c"],["/tags/版本控制/index.html","0ea52c672773a795f85355a89feb42c2"],["/tags/策略模式/index.html","6f518d2e14419a25630ae559fd4c5df4"],["/tags/简单工厂/index.html","f8722119af799bd26e5d6c6b3d320573"],["/tags/算法/index.html","e3c67d03f22e5af54997521f875b8cd8"],["/tags/组件化/index.html","254ae33631849ebc124e3f99d39d67a8"],["/tags/缓存/index.html","4624712e277f77e445d08e3f99b2592d"],["/tags/观察者模式/index.html","6cce5b069c210f78ea8afdfd4ab14d79"],["/tags/计算机网络/index.html","61e53cee7fccf935905864542d429498"],["/tags/设计模式/index.html","0a8294e4532e1b6b383d984ccaee939f"],["/tags/设计模式/page/2/index.html","bbbbb48913eb0763add9d7b665ab6ffe"],["/tags/进程管理/index.html","3d55069a944e5cc62c599ea264f28e7b"],["/tags/适配器模式/index.html","d85a3c728ddb09ef05a9f3dfd70cd48b"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
