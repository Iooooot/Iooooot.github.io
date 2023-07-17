/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","b30bb38340da6ba2b41d0fd90ad74057"],["/2021/02/22/工具的使用/博客的搭建/index.html","77dfde61d4c85302cafe3b91f2c34d26"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","e5f80415f34c70397ea9c6c6fe2a8647"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","413706d6ffd0ae9483a5d2af913fe950"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","289ddc1b1b46fc5ab60a0bf3f41fdec5"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","05cb1620b7355d9c04d4616d48c292af"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","88c03055b3f921ccff59306056489e59"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","7f5b623db33d6ae2fe36fe8eed484cf4"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","8c3e9bd980f9b1418582e6a5d0b6ef91"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","140d9b843cb417da322d12c5b284231a"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","1dccff60edaf95eda730e658440b040b"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","421da9d23efc24d796dbce97d7e70af8"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","44ef3212fa5213846b498d32159ee6d6"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","0cacd88705b1001997ff60691c2af320"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","cb36768ef29cfc514b818f84c6cf649b"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","d4a0598a743ce326c347456a710d4dca"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","b16630e7fb56cb476745da0912600c59"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","058a284ecdeeab38d104001a3d1f8b34"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","ca2e425a3534ad3b235b74e710c7d2cd"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","8b5caa1586b3b984d262030e30c34651"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","2ca4e0ac63a4d5959ea37f9ec5affe08"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","fad9d6e7d11a5afdfae537842125e458"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","bc57d23f730e45d75ac7b3c7705b62a9"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","fa794fe6bf5a01b9dc4f0d83dc6b7f47"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","7405c48818134ed883f12f64022d9d30"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","099165b681fa4adb3b0556b40057f041"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","f45b45a56d5ce3af150fa620eba37d56"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","a08c978c9056be74cbc2f2b6ac6ea20e"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","938c646c1b6d5e945e7d4d27ff03f18b"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","74fa857dc10acc1065cfee8ecc729fbf"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","65ea916bba7f5e1ef2a42fb8d768463f"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","878becf8e9cd95c38affe67aac2ca154"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","9601f98cf1030b55fd6021ff8fea6eff"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","85313b026429a0db03447596e1922973"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","cdd0d5de8150a73c90404615131f086d"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","461d2588ba2c808a30a23b0e83608e56"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","cc1c6f832957037907f9bee459a52ff3"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","d963dbea4042b15b8596692c7bcca1b8"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","8c7dbfee9ad27f4e82b137b4c80efd26"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","c12998001ce6a48ad8c8a5a76e6d2886"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","2b14ebe71699a626bb6e49331f591270"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","fe70447feaefe8b46ca5b491e7c1ddac"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","4525c62747406372af4c72ce982b78fe"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","ce021b8f5092459e3792ea8fbf244b2e"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","5b8c75b92ba4cd380142be620bb94524"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","791a2cde9aaaea7b94ac59dcb0bd9a02"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","1b018b3bf3dcc4dabd28a7b4daa51ff3"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","c4b3cd1b7c963ddc24bdf789f0486006"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","ab387a1dfcf2c7b1eef2b7415fac609c"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","22c504af245ee43bd4f01e82f279a182"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","b87fb6ac9443061482a5c602698bc387"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","eb38e6a4e6592371d7686a7a1e0260f9"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","4a0d894a9327592bfcb8d0945dfd124f"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","6b92a8e010faca79115cac96831c8c20"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","85f50e164a2564ec5b90d845eac4b785"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","bd59c8239c100680a5fe7b4484fbb34d"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","0aa698e40982a7538558ad85e857a95f"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","8dd1f1e6f732ad25c716154571baf7e8"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","89d674136092103caf1162153ae77e3b"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","2c61ec2522dc5136cca5c28566f6970b"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","a582126b28775b17aed12fb4c7a18ddb"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","bde5302be4d91b965f200446a5fb3ef3"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","d6ceefca430729610786326f29d3d7b6"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","892e809b7b64cf7002fa87db9a4862f4"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","ce8a7abbca800d86c28e145f955e4618"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","d94de50eed210b20d241bfc941c20989"],["/2022/08/17/前端/jQuery/index.html","5df04987dcff99a479a28be505828520"],["/2022/08/19/前端/JavaScript/index.html","6c2f5b3e5cad9a5c5bf1bc051cd6950b"],["/2022/08/22/前端/Ajax/index.html","4e12e48dd53391e4958b51935aa342b4"],["/2022/08/23/前端/Promise/index.html","6714d9ba929ecc981edfd3e9129d8e28"],["/2022/08/24/前端/Axios/index.html","0051cc104123b82835c4c2696f56732f"],["/2022/08/25/前端/H5本地存储/index.html","eef91df44224525f159370763c3f012d"],["/2022/08/26/前端/mock/index.html","f50722be7ffa8f1a1841e4a70bc3b75b"],["/2022/08/31/前端/vue/VueJs/index.html","29bcb02df7cb58b8d90bd7bf286c049d"],["/2022/09/01/前端/vue/vue组件化/index.html","d3f64c0112e290c37d0a9506d5776151"],["/2022/09/04/前端/vue/VueCLI/index.html","9305a5d651797baae64fcd77efa0df99"],["/2022/09/07/前端/vue/vue实现动画/index.html","ea48ead6246c108fc3780ec53476e9ef"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","ebd7e9f2b0c4e0820e25a3edfe54f025"],["/2022/09/10/前端/vue/Vue异步请求/index.html","a53289660e3d2d44de8a7c98442c00cf"],["/2022/09/11/前端/vue/vue-Router/index.html","92e1359450cfb2408cde161de869ea32"],["/2022/09/13/前端/vue/Vuex/index.html","d7f5ea133762ba3a7be929205b767527"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","503e60a89a8c0bd4b792900fa6616a78"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","bf2a7579409eeeae37a8fd437898b484"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","e9ce1b8bd4ed59d1ac9f48406bac4721"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","2e8dbe1c39d5ebc5902aecf20b46d8a4"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","5bd3a6e802d0ee62c4d9bd64ce103b51"],["/2022/09/28/DevOps/Linux/Linux/index.html","71e48a331f85a1722aefe786a04366ee"],["/2022/10/02/中间件/Redis/redis基础/index.html","2d4deb32118b71ebda4db5439fa54990"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","c490ee473a58c16ad164182b94759843"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","3242e8fad07077acba09c90ea929adfc"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","257ac12263e60c1228b36a4822f814c8"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","073ab2dc1b0580c367f5b271a2b48758"],["/2022/10/17/中间件/Redis/Redis集群/index.html","cffad697b36e5b19a51cb878c3646253"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","ac3c7f59e582dfba60a3fb28a5c3e42f"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","bf8b3e5b4db36478501e55a7a17b866d"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","319dbbb8c350e1017c463b94c3e82bb0"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","302cade178698152534e30865a716dae"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","5818cb60d3ef329b28ce2d47e893c690"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","d0e4e1c6a2bd936ed3c052444060f750"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","cb34223090fbe9b53c6c2b8e880c8e7f"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","21682e20ff84676cedfa58a49585075b"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","6ae75e803f74c6fdfafc30a8c177392a"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","4ed1c195d88ff2722d7e9bb935c1f4cd"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","7d8eb1bc9613e76e5af3ddba0f3a0128"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","d2bb17c73a877953e2041605717d60af"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","187c214cc17a3567662a1594fa4f4017"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","ebc93930014a9cc6e43ee20eeff0e3e0"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","6b682773881841decd4eac62e8a36969"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","f6f40ce0580f2afdaed6c84d9596d814"],["/2023/03/10/DevOps/CICD/CICD/index.html","7b75cee84341b6281ea3d61f79fd9169"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","4df19deab9dee6de49bb11a202f9acf0"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","0d04d63f05fcee35b4988ad4f202b0ce"],["/2023/03/13/Java/NIO/NIO/index.html","6f7c040e784c7e03f40d273db145b2e4"],["/2023/03/14/Java/NIO/Netty/index.html","3ec43d845a6c101b6b9aaa08688d21c7"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","60276a8d9f65cfa2f0f270db85c5df10"],["/2023/03/17/系统设计/分布式系统认证/index.html","83c3ebef467e3efa182c6dcb106d9001"],["/2023/03/19/Java/JVM/JVM概述/index.html","b5dac0a68b624f194dca8e894f83da8e"],["/2023/03/23/Java/JVM/类的加载过程/index.html","a7ad6f3335b97c8b6fc18fe8effa617a"],["/2023/03/28/Java/JVM/对象的实例化/index.html","e70dd3b8effc56d6c4e6f6831e29fc0c"],["/2023/04/01/Java/JVM/运行时数据区/index.html","4b029415f943480d1e61990eb11c1ee7"],["/2023/04/04/Java/JVM/执行引擎/index.html","9f935cee5327a230759eba4e500be732"],["/2023/04/06/Java/JVM/对象引用/index.html","dd94efbcae8e1a98ce34d7a3074ed5a7"],["/2023/04/09/Java/JVM/垃圾回收/index.html","93bbba1c6e8256a77d0ff713b9289c99"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","c78900c6d2cd91a29e74b1d26c90bba6"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","99c8205052314d7d13a78f127d4433af"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","a20b6a218e976139b7aecc339309c41e"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","fc516dfa1a49f3d55425e85050abc439"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","d113137572060c3801f4ceba1fc8fafa"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","63720e4583e531d5bf4dee4d6474704e"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","17c893a6182c057638c2612b30ec73ec"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","bcc81ced7ec223a40b7b8d107197f880"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","0f6a6228d880dbe2fa77d083b2521ad2"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","9787b6f7ff45e12ce13b67d719855c5e"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","7d70688a0ba52eae860e9040e314b6bd"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","e6ea8a4c729a474fa36cd7141e07cf28"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","b8c22f9747b7d4941ea3f184033c5acf"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","c43f3556ddc8dbf22c73a79191b6b5e2"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","6d6f4a70f1c571cd6b596d4d225e1bde"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","8d9341707eefaad12fec083098dfb3d4"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","bebdcbb5128a9e765cdbd0a789d1f99b"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","8b00b864c0f525cd125592911e6130c2"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","b0f91943aff2494e688ee3a447ade72e"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","5e1f473fb532a3364890db23fde7eb68"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","13578bbef6536c825f6cc531acc7f623"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","87c66f41e5078989cf23f9882ae8941e"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","fbb2312136c11273d680702275df3a92"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","9a3111e8f23b81714a4e7b9f52476254"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","31452eda59ee1b275567e527e5183160"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","0c9912d38f00eb189041cbaa48cb1faf"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","2683cb0289895b3325bc5afba9d4df89"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","2c342515f9d79cedbedb937c7257b1d8"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","8a8065fd7f52890ecd19d047b6e7639c"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","678f2346c0a21d5486f2f2d4ba566882"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","61125c519704da8762933206c901445b"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","496081240441670841c344a7a5684a8d"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","3f8cff5da4568963cae0bb2ad8e7080b"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","14076afcd6d0d7047d26ace832c5f38e"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","7c236030ea86d26ce2c7f963eb792c24"],["/2023/07/15/MySQL保证高可用/index.html","b9e1371af6f47756f82d819f8272befe"],["/2023/07/17/MySQL备库并行复制策略/index.html","4900ff4b48f261e72c68afcf93ab453b"],["/404.html","5fb6328ea6b907af51a519ed83d9def8"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","92ec1d7debc79d1b5c76ff2dd9d45f1a"],["/archives/2021/02/index.html","84f92e5130c0ada991d0e44353a0c5ed"],["/archives/2021/03/index.html","5a8444797279c3c4a2b2248e703c1aba"],["/archives/2021/03/page/2/index.html","a280d5b26ebe2287b73210892ce07fe9"],["/archives/2021/03/page/3/index.html","ecd98b53208f9877737c10cfc68b79a8"],["/archives/2021/04/index.html","5f34b9403eb4bdf5f7ded706d30c9b14"],["/archives/2021/04/page/2/index.html","9b214eee62d85a0af5db06ac5df8209c"],["/archives/2021/05/index.html","250f263734522f4a2873b81e7242ad26"],["/archives/2021/index.html","f5852ba652b95a5ad0c8ff6afbfcfc78"],["/archives/2021/page/2/index.html","b86a3a4aa1feab529ca221e4a343c054"],["/archives/2021/page/3/index.html","8a99b3a01ce137d76e57c5190a904743"],["/archives/2021/page/4/index.html","2e6c51f0e666feee86d9d17eebd3c6c4"],["/archives/2021/page/5/index.html","5037c10f89dd2b347141f4abcaa3860d"],["/archives/2021/page/6/index.html","ba83bcb10d94b724a47a3aeb3fb3ed74"],["/archives/2021/page/7/index.html","f82a5710e2659d4f9b26b60796d42773"],["/archives/2022/01/index.html","b781f7a5b41a536e99df7979d01b8cf4"],["/archives/2022/04/index.html","9cb5b473664db82e015e4c3a00cbc3fe"],["/archives/2022/08/index.html","a88b7773fb6a0ae8cd31cec9f79a296b"],["/archives/2022/09/index.html","b277d0b858ec7dd8758a820093135c14"],["/archives/2022/09/page/2/index.html","2967fb2d55733c695ea8e3331299ed1d"],["/archives/2022/10/index.html","f8482d8911a3019adee8c6ede388c0a7"],["/archives/2022/11/index.html","19410614875bf9a8aed0c0ba2e9380d4"],["/archives/2022/12/index.html","5d92edf1082995236cadace922a3c6fb"],["/archives/2022/index.html","610fc3b0aa82a814b503b3fde71a8f88"],["/archives/2022/page/2/index.html","0ceacdd62fa2789a9357d0c5a21d0b5f"],["/archives/2022/page/3/index.html","da4a468b3a78ba101224caf8db36944c"],["/archives/2022/page/4/index.html","bdbb550ebf0fae27aec12e8c6d554da0"],["/archives/2022/page/5/index.html","4641ac6a29abd0168fab8111bc1d57a3"],["/archives/2023/01/index.html","305df5f2c80d536b5113d1ec6f01237f"],["/archives/2023/02/index.html","77c24eb5946185c68aa736f3bbb33108"],["/archives/2023/03/index.html","60ed9c00a45613719784f056659ce2d5"],["/archives/2023/04/index.html","9c9fe466b0aed353b3be71b36750ba80"],["/archives/2023/04/page/2/index.html","23c2a9f3f7a576ec4d081d847a0e9b94"],["/archives/2023/05/index.html","cda7d5acf0bfc12d6847a7d3231bb269"],["/archives/2023/06/index.html","8fb12998e2bb77035c8956bf8ce56c99"],["/archives/2023/06/page/2/index.html","d17dd9c855c88ac42f6d90ca084f4b5c"],["/archives/2023/07/index.html","f9e6d139e2005b489ce8e1769a270f84"],["/archives/2023/index.html","bb3aed08baa0fb3cac33f6f136bc2f5a"],["/archives/2023/page/2/index.html","0053e69d521a457ea5ff3b28dcd1740b"],["/archives/2023/page/3/index.html","f822090525c361d0ae7943a779a326fb"],["/archives/2023/page/4/index.html","844400e8a19945acfc6a2670415ce494"],["/archives/2023/page/5/index.html","c8bc8b788f65e552ee0dbe22e7a5ffd2"],["/archives/2023/page/6/index.html","41b8f962708ab3e4fb55d6b19a00707a"],["/archives/index.html","0f1fbce53379b7f795eae6824195b485"],["/archives/page/10/index.html","bfb342165013a3e8c41b518f8fe5a158"],["/archives/page/11/index.html","bec91149299f3bc187262cbed7eea729"],["/archives/page/12/index.html","0a7c036309dc0ab123df8f6479370ec9"],["/archives/page/13/index.html","7a4dad5d10e4623eaddd149cc98a356a"],["/archives/page/14/index.html","6eccce48d60deb92bf8dfac717a624ce"],["/archives/page/15/index.html","0951f2ad3b22e1986d08c92b475e1ba2"],["/archives/page/16/index.html","c80bd8f1f166b58815838b025d132306"],["/archives/page/2/index.html","a3efe5e0050fc59bd82f8610b6df4413"],["/archives/page/3/index.html","2541546a26d9086f4fc8c8d00d75566a"],["/archives/page/4/index.html","9b2520f1f58c7f5c84eff22153155471"],["/archives/page/5/index.html","2e805b1691923b92aaa6b04f18166083"],["/archives/page/6/index.html","cf79a2b9bfc607dc77f8ee93dd3eda4d"],["/archives/page/7/index.html","acba20faefa4790ad7cef51ea9470f50"],["/archives/page/8/index.html","b1fdaddaac288705229f762463df0787"],["/archives/page/9/index.html","a11bd0f2efcec9ff7a4e67b1fc70d942"],["/categories/Devops/CICD/index.html","95d6c5b22dc92b442c01a0d91ee466df"],["/categories/Devops/Linux/index.html","804c8a40a47156e7ddf9b14b1aaded6c"],["/categories/Devops/index.html","caa0343383cd09a39b62943c49079128"],["/categories/Java/JVM/index.html","5a6ef33993b2279f0f71d29fc045b3ca"],["/categories/Java/NIO/Netty/index.html","262531a16f20e348f68c61a4b8b1c918"],["/categories/Java/NIO/index.html","775eb7dbaaf771ad736334de8b2498b9"],["/categories/Java/NIO/原生NIO/index.html","4dcb043110f33cb7179861b979f0cf17"],["/categories/Java/NIO/文件操作工具类/index.html","1dff062a11adec994e4ed3c303f2e740"],["/categories/Java/index.html","6d65bea577c9ff3e4f38049980f909e8"],["/categories/Java/page/2/index.html","d015265dba3f999e816fd2569968f1b4"],["/categories/Java/学习路线/index.html","28631deb9f5ba7e1140ba24dd8187c65"],["/categories/Spring全家桶/Spring-Security/index.html","a483129c4a17efaf84792b12370e5ae1"],["/categories/Spring全家桶/Spring/index.html","ce71cdc3beefe60895e420f10379e9b9"],["/categories/Spring全家桶/SpringBoot/index.html","3e5250e942fb53e423e2b8b1aa0d05a1"],["/categories/Spring全家桶/SpringCloud/index.html","43eb73fdfb98b0ed079f196a38c11c13"],["/categories/Spring全家桶/SpringMVC/index.html","edefd2fa53bf9e65aead53eeecb9c9c6"],["/categories/Spring全家桶/index.html","a74e14acf1c5daa34a229274299f88e0"],["/categories/Spring全家桶/page/2/index.html","10cbfc3a69fbf1413eda9bb4e46b1912"],["/categories/index.html","aa3192e87806c3ced9a7620b5948d940"],["/categories/中间件/ElasticSearch/index.html","617b3fe3e7962a10c3067fa8fcf96fe2"],["/categories/中间件/Redis/index.html","5a4eb960ea52b70434da2d86ce45cf33"],["/categories/中间件/index.html","0d80ad7ad32f9d3ad56617c6ce206aab"],["/categories/中间件/page/2/index.html","9781fe903f38f74196ce595a6061d5d3"],["/categories/中间件/消息队列/RabbitMQ/index.html","2c4a2ae0375f9ac3a648b1421b04350d"],["/categories/中间件/消息队列/index.html","0a0751a90bd2323f9951f01dd912bcf1"],["/categories/前端/Mock/index.html","95ec19aa50d4cc5e3f23b2b126fe47ff"],["/categories/前端/Promise/index.html","02a6bedf6fe90ff34b43b00670aca2f2"],["/categories/前端/Vue/index.html","cd67915bb9f825c7cca689caa98c9c21"],["/categories/前端/index.html","c737904fe98b8697a467713d6b136911"],["/categories/前端/jQuery/index.html","a36a91c8f377eb9cf39a82c717284b5a"],["/categories/前端/page/2/index.html","c43eff77541b35896d81dc647a91bdd5"],["/categories/前端/原生基础/index.html","ab66548edec3a5819a96ff499ca82243"],["/categories/前端/异步通信/index.html","b34bd63d806ab4cc0e8cc82a7063168a"],["/categories/工具使用/Git/index.html","0a06ac15769b888686c147bad106a239"],["/categories/工具使用/index.html","9f07e69812d3e9d80c3e85bc8dc73c63"],["/categories/工具使用/markdown/index.html","85b52242c41b490c0227356ea5c1c63d"],["/categories/工具的使用/Docker/index.html","393b79c2398b1d253c7f8f8a90daebdf"],["/categories/工具的使用/Nginx/index.html","cd11ef482f9df045ddd3f5dac992db54"],["/categories/工具的使用/Swagger/index.html","0a51c71d565f9d0751c5110c4e1631e5"],["/categories/工具的使用/index.html","fc214c6c78d0f779f5aa19851efe792e"],["/categories/工具的使用/博客搭建/index.html","9db483d42fd8c2ab7e54d39bbbf3e7a6"],["/categories/数据库/MongoDB/index.html","dcc456776c1e1a0be6dff8f16c4314d4"],["/categories/数据库/MySQL/index.html","883e014a48e834c2c881c3db61db1a45"],["/categories/数据库/MySQL/page/2/index.html","4177c3d9045cfc25aac175b6abbb13f7"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","337023a4ed99f0cdc6ee851f53e43ef0"],["/categories/数据库/ORM持久层框架/index.html","e3a8f7e8ffdb3741a3f96215c63103e1"],["/categories/数据库/index.html","d10bd43c27ad8f89a0e4f8c0b1f97221"],["/categories/数据库/page/2/index.html","630c7f8f2a2a690d33a37e9e9a1742ce"],["/categories/数据库/page/3/index.html","34e20a98d2613252d0e865fa71c16541"],["/categories/系统设计/index.html","0dc9c3e7fa13af85dce997b1c699e3d1"],["/categories/系统设计/page/2/index.html","ec6f38a5d07f233ab67cab6db98c9539"],["/categories/系统设计/分布式权限认证/index.html","9123b3beed2ca315f21bb6062786c87e"],["/categories/系统设计/设计模式/index.html","10e4d1774e5f1b7d0a27a772786b70dc"],["/categories/系统设计/设计模式/page/2/index.html","d2ebe7d93f43125f18a86547aff90f07"],["/categories/计算机基础/index.html","d791087f316c4f80457c04b0e77d0407"],["/categories/计算机基础/page/2/index.html","53b0e7604572aa362d307a4dabf2884d"],["/categories/计算机基础/page/3/index.html","103a56179dbef9dc6b712d99481a484f"],["/categories/计算机基础/page/4/index.html","a0f8d8ddc7f152b72aa1f48a2b98db5f"],["/categories/计算机基础/page/5/index.html","fc128ec3a0636e6efc5bcb19f0cf7f5d"],["/categories/计算机基础/page/6/index.html","af68ed7d414370895b15b6481f7483a2"],["/categories/计算机基础/操作系统/index.html","b7f0eb4148e0677dfdc5ea612fc01e51"],["/categories/计算机基础/数据结构与算法/index.html","eecaf8b3ffaf55aa1017d92d1a7d3c93"],["/categories/计算机基础/数据结构与算法/page/2/index.html","914c75ca30d2baa2b115636639a6461f"],["/categories/计算机基础/数据结构与算法/page/3/index.html","c24381a28a5c1a4cce72c34077e2df88"],["/categories/计算机基础/数据结构与算法/page/4/index.html","e6d8d2fba73a39798d3930f43a169b85"],["/categories/计算机基础/数据结构与算法/page/5/index.html","a3544dc78b6875457e6887ec84fada7b"],["/categories/计算机基础/计算机网络/index.html","7ae131674fa08b4507646bc5aca3bb00"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","5cdfe928708084d6a9087ca1b1e2e574"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","06138b965bad8a85bdf6e767fe5ed9f4"],["/messageboard/index.html","def06d3743106f291a42f1b9155bb5ec"],["/page/10/index.html","48eca09722f1330f218ed3c4642a60c2"],["/page/11/index.html","d9a6bad33cb6dd83445f8bf7e04e4f16"],["/page/12/index.html","12397f048c7b8dd3f0e604cb82039fdd"],["/page/13/index.html","5b0cc35dd06fb302ba1554ba889b2c86"],["/page/14/index.html","151b80192cb401eacb95980571bdbd6d"],["/page/15/index.html","73dffbb4b6530d309be65c42b4a5383b"],["/page/16/index.html","3c795124f38c0a11ed9eb40a89233495"],["/page/2/index.html","3514763dd00ad1b7eb8266fba7e30507"],["/page/3/index.html","d82bf143ab113522f39341202a3223f9"],["/page/4/index.html","8b720633ac2219efb695fd0f096ac810"],["/page/5/index.html","eda94ccaf64c3282c75806596c14c50b"],["/page/6/index.html","c5e198dff280161c5b6fe4037633a072"],["/page/7/index.html","8e9d1590dd09520aa54243e5ff8be14f"],["/page/8/index.html","f6ddc368ef67076b780ab5aca936ff88"],["/page/9/index.html","d3c029c79a1ec9e41079ca6667043337"],["/sw-register.js","b71f3b1608fcbb3525a4e9465874e750"],["/tags/Ajax/index.html","0c3b508c34092300240a67590af5ef48"],["/tags/Axios/index.html","69849e851c09cbf0e4f74115c849a9e1"],["/tags/CICD/index.html","b4ba5595a3ee0c08caebfcbdad0c3e4d"],["/tags/Docker/index.html","d5000884897aa34eaa5c5cfa742c6909"],["/tags/ELK/index.html","1d51fd957c11a897bca65a91f4dbadb2"],["/tags/ElasticSearch/index.html","8029eb74464e9f10464aecbadf4a6350"],["/tags/Git/index.html","f13c33084fd8920f447a1409c27c3290"],["/tags/H5/index.html","d228766b726292b52b69f37892cc40a5"],["/tags/JVM/index.html","8d352d53386293b2517f1da2823c1019"],["/tags/JVM内存模型/index.html","b29b8b40ae48b928960b1cbcfa6c06fb"],["/tags/JVM执行引擎/index.html","d5b4d398e1c82c196e3931fa0ebad9c7"],["/tags/JavaScript/index.html","f37ece2e67af8e6745f0cd64b35546e3"],["/tags/Kibana/index.html","8b4afad4f64c063453c4ca1b4f14d9c3"],["/tags/LeetCode/index.html","033b395107f75b8bd5b0b7983e8472a2"],["/tags/LeetCode/page/2/index.html","eb6dfed05c320cd45ad9fd8c7deadc23"],["/tags/LeetCode/page/3/index.html","cbb52afe5c3d7886f265f8b4b0b90b49"],["/tags/Linux/index.html","e1516a00757416173ed185a84d42a67e"],["/tags/Logstash/index.html","03f4ef5af5541e652d71765ac9aba8ac"],["/tags/Mock/index.html","7d565496ca43611936866cf6f9f236b6"],["/tags/MongoDB/index.html","7bdf3f9ebb05097a9a2a5f2b6cfaa162"],["/tags/MySQL-事务/index.html","a31f18fbd20b3376e01fa05f3789099d"],["/tags/MySQL-数据类型/index.html","fc9e83265228059cc3ba7f895a9a39e9"],["/tags/MySQL-日志/index.html","dab214682fe9395822dbeb34de2d3752"],["/tags/MySQL-索引/index.html","b61d767a8656e3d74840d12d9e9322fe"],["/tags/MySQL-锁/index.html","9aa42c43c20075075d9b78eb587b4cf8"],["/tags/MySQL/index.html","b8481e8ca1b2b6887abd12ea5387bc02"],["/tags/Mybatis/index.html","b660dbaae2b1990e7d9aa31a0b2a9fc1"],["/tags/MybatisPlus/index.html","58bd98aca2dca0ad84b3d01d395eee0a"],["/tags/NIO/index.html","3d80f91e5eb572e2f9c69328703c05f9"],["/tags/Netty/index.html","502549c97bd9139548b2772c1f4640b2"],["/tags/Nginx/index.html","8375f785cedc2c6dcfc4db04f89677f9"],["/tags/Promise/index.html","75026fbe8c07640120b5a3ab3cc910b1"],["/tags/RabbitMQ/index.html","58b512b60d24264db6f7fbbfd2898d38"],["/tags/Redis/index.html","baddf694bae72db4b0403ee0fa9b8213"],["/tags/SSM/index.html","2bd4757bb468e6bc306c81585eebaedd"],["/tags/Spring-Security/index.html","8e4698a107d5b6488a642967847364be"],["/tags/Spring/index.html","322a4590adbef19a2906ad1bc6d615ae"],["/tags/SpringBoot/index.html","b1af0a47218aa43bc32ab2f8416af8ca"],["/tags/SpringCloud/index.html","49f19b5bb4632482c1ba5fc973adc43c"],["/tags/SpringMVC/index.html","7862a1fd38e06aee67ac5b15f4f5bf6f"],["/tags/Swagger/index.html","37b192c8f069a8cfe956057806a47ee4"],["/tags/hexo/index.html","0c83cc2ca6cbba12c715c8d4917e73f6"],["/tags/index.html","1352b78a23f46ec34ed1f6cc934dcff7"],["/tags/jQuery/index.html","0f0f83d6f86db16b87b9cc8c58ec35d8"],["/tags/java/index.html","99f9d159933b7cb8a47563617fd95d1c"],["/tags/markdown/index.html","f84d80a6fb0469393ff80bbfbe96cfb9"],["/tags/noSQL/index.html","250b47779600ba497756146573bfa721"],["/tags/typora/index.html","47b9e64e03617bab9a49ddef84c86cb8"],["/tags/vue/index.html","35cc044c4c4da86ef7c747c717fe4719"],["/tags/享元模式/index.html","52370cd067d94c0d00860fdc3c5a97ce"],["/tags/代理模式/index.html","c8d18786aa83acde62a20017a14b9c8b"],["/tags/内存管理/index.html","499f4b52e8311c3d3ffa26762cd82260"],["/tags/分布式/index.html","bba7cf8e4f7816686234b43adefeecce"],["/tags/分布式系统/index.html","21fff38999859b43183e663b82f7d6dd"],["/tags/前端/index.html","3993a06ca428727701e240a43eaa97ea"],["/tags/前端/page/2/index.html","be7026d246a5afc960ddd986b7e157a3"],["/tags/博客/index.html","291fb935c8ace4916aae3989f9453cbf"],["/tags/后端/index.html","c3118fc26020f9823253a692e7e93f73"],["/tags/外观模式/index.html","3a3bb917bf9627c789e8bfef032dd3d6"],["/tags/容器技术/index.html","34c933b7646ca9635667e35d952ef500"],["/tags/工厂方法/index.html","a938a6048eecfc8a9e313d6260cea930"],["/tags/微服务/index.html","76293385bd687b428d6a90fb775730eb"],["/tags/抽象工厂/index.html","0542e2ddb69f55c54524ae38b4286659"],["/tags/持续集成持续部署/index.html","d663f4d4db75ac69c2d697ee1db220f9"],["/tags/搜索引擎/index.html","3688f513ffcd45a01628316973d47147"],["/tags/操作系统/index.html","1f6cb67357382b522a9ff83386760166"],["/tags/数据库/index.html","2a43abb604f7912a72ecde50358aaa4a"],["/tags/数据库/page/2/index.html","4a17282f1e76e1d489e20107fd1c9bb0"],["/tags/数据结构与算法/index.html","469230bcd2fdb2273f8d9715c00cfc35"],["/tags/数据结构与算法/page/2/index.html","ce19fc0befed148026843f369de1da32"],["/tags/文件操作/index.html","de5ea77b8149f3dd6bbb04f6edf2ca26"],["/tags/日志/index.html","2e97e00f7481a28ad1e462cb978fb318"],["/tags/服务器/index.html","7d1a44f90d1604298526ec7307144a7c"],["/tags/权限认证/index.html","bb20a6b1a1c256700a2e800f68062840"],["/tags/桥接模式/index.html","cb3dd7ca87951f0ae03a9908c4988b57"],["/tags/模板方法模式/index.html","c63fbe6a49c0e2a0ea688f666b208f32"],["/tags/死锁/index.html","4fb9a4203116d6732591dbc62aef513c"],["/tags/消息队列/index.html","1d1e5a11d43c2a5fb07c0358d3328cc5"],["/tags/版本控制/index.html","21754edbb72a5ee0c8735c74dd648809"],["/tags/策略模式/index.html","ad44224214f174159cdc5a9c7e24d465"],["/tags/简单工厂/index.html","c9748c6d8fbff035592b80502fe97a19"],["/tags/算法/index.html","48afe56235664b4262432b065b2db17d"],["/tags/组件化/index.html","706c73cd575b1a78feada6699f6b3d6b"],["/tags/缓存/index.html","224e2b215f7d78aed373e947c6af2ccc"],["/tags/观察者模式/index.html","0300591fc16fd0803c614e301f121df2"],["/tags/计算机网络/index.html","705c4efeb09267d15fffd2900fd72c84"],["/tags/设计模式/index.html","212835570d48acadd11758002aeda13a"],["/tags/设计模式/page/2/index.html","27945019b032c21bbe587a29783bb007"],["/tags/进程管理/index.html","dda0fbe51ccd3b945f45fabd1327637e"],["/tags/适配器模式/index.html","aa192df3027ef8a8989ad106f8d76d2b"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
