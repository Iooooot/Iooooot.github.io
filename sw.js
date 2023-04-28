/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","b6fe2723dd4e3a1ccac0e47287189f5c"],["/2021/02/22/工具的使用/博客的搭建/index.html","d46fd92f314e1ebc92a0a2cf069f84df"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","a11a7f6dcbbde4e3ffe0bc721e9ddc29"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","fec56f3ac7e873844851ac7671cfdc48"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","bced8b757677d32dac47ca97cb9ac0c3"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","4e3f5f98665e27323bd25929a3a5234c"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","2eaeef2bb42b035bcd13be42fb041c5f"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","bb996a8ece8059f6d818e26deac32578"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","1716e2010fc3012e601ed52cc574fa3c"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","c60da52f7a3dfa9deaa90300dfcd6f74"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","de4307f33f247a941e4e12249b045baf"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","59b0e5afe3f4bb05c9aef41ebca38e70"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","f341a807ddb24c931ac9f1072711c28e"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","16b25dacaf0353746bce769ee7483193"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","29948cd4e07973b90cf0505813c83580"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","b7ce26d91339d9e1067182a0f10153b8"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","0584374dc098161b77db04e7bdb710d7"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","6efebfc404cd10a38561694c68e420cb"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","6ae0ae29538ad3e545fbf996eb136f92"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","4e5c1b70a83e8178b146d70862e36b2a"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","173f43e50d2ea81ed6cf47ce626e28f0"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","80f553141767bedf9eb60d7323e571d0"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","ab393340ce03be97a205a2db1b3a0543"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","a57157c72eda03689526b3e33898b663"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","32df3cb497557d2b856e31b2c31a3114"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","4e0701c96cf37fcb1763452d7ec1b790"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","228da6c495575d7b0b0b82b3f65f6d6d"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","e9f83daadd86627f0c63adb44283c222"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","309e2c40436f54797b017822d8c035b2"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","91ee8bb3752499562672665059e6f9cb"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","9437ecc5e4ec8c2e7ebd9da6e314d043"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","28a2cbce31c4651cdc518cdaf094f0fa"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","25191b304146154ef2b38fa7002935bc"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","d568d80e1e1d7adfced9febdd73c3ccf"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","bdc2575c56239de1b296437e13dc7ef5"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","4eec93518fb5a0fd38bf5e11e581d694"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","c0e81dc80854ab5830da6c294a729279"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","9c8b47e93b39d2c186f39661e5fe6af7"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","52f2e0df5f86468160e29389e06d36be"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","3423cec12e67f12a07d457d210e3eff5"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","11bbd05134976927ae806d67576fede7"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","0d7b6f00b16b515a73686f4144aa5352"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","068a153cfe782d704928feb8aafcb76a"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","5b28129e3a8c238e9a5a41439b7f5913"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","64dc67913bd9dbbc660bd3aca2cfdd1f"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","8163793c89aa4bfdeae5b3220b85d872"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","74ede971262d493a638e07c30ec9841b"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","5aff13569cf81fc226709ced27d370cf"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","d6b7da5593edeaa731e8329d58300220"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","6083840c176a5803522240ddd81f4d57"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","efdba4e9e5d19e10262a557c10419c86"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","7d6603319c2fd9ff9d62a0c746f3233a"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","3a199ce942d7217bc90d22c01ac26eb0"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","2297647d03888a3566099cc5f1af4956"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","f3b78d0df059888b79c7e1af61df1d13"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","e1c9e9c7244c7666c1c06b0995f0b351"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","a1e671e078e4bf88eb3c17b29acbfbb4"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","6d3c371c94239bfb3b6dd3d7bba9a979"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","afeb0da1ce425bac16b24dd391af40b8"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","b4e0882c281ba48628cc98df15ef5d61"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","50db064b546991cbe00b6beec7cb9d06"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","65fb06253b0896b171ce596a208efdbd"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","6a7e1abb48ceb837ce84a5ab8fd85062"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","8d6d4ef522b5a7d2cae844d66fa6afba"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","322dea8b329fae3b108950d89672bb55"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","c6ab32b6872f6c53d2cc0953e0c1cdfb"],["/2022/08/17/前端/jQuery/index.html","8d02dfd6f03041dd0323d4c0d297ec70"],["/2022/08/19/前端/JavaScript/index.html","4678634d657883d6afb917021c50788e"],["/2022/08/22/前端/Ajax/index.html","89fb0c37223f9824a120e4a75899dd49"],["/2022/08/23/前端/Promise/index.html","f468dec355683353788b4753bb487233"],["/2022/08/24/前端/Axios/index.html","1d0cd2cd1bf28cbd5f4d6d4033021594"],["/2022/08/25/前端/H5本地存储/index.html","7fa082270cd3a668e8997464f0756be4"],["/2022/08/26/前端/mock/index.html","394b8a7a304c1336767c46a643221293"],["/2022/08/31/前端/vue/VueJs/index.html","f906147ed2a4c4615fa3fbdbe8ee590c"],["/2022/09/01/前端/vue/vue组件化/index.html","1eca3c0e58aae441c7b413799d49e1fc"],["/2022/09/04/前端/vue/VueCLI/index.html","13a433460338d3fa756fccc30085c3a7"],["/2022/09/07/前端/vue/vue实现动画/index.html","5195b83ecda03eea84d9492589fc1a79"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","ef735a0bb907b98fb8d4bccd94ad11ed"],["/2022/09/10/前端/vue/Vue异步请求/index.html","d9e6af66834647fb709289b7ecea8fd1"],["/2022/09/11/前端/vue/vue-Router/index.html","0386e2caaa475673968ec76a1f53dace"],["/2022/09/13/前端/vue/Vuex/index.html","0f84d8000b5ae7f0a07b18a48cc0c97f"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","3db90eed4a889516501667cbbed1b656"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","a01e17c188abae560d9bd91a0ab1a449"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","9235db86bd8508c04a797c4f8cbf3ea3"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","1236b676be71b314c0896fb1c7f56a6d"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","ef665dec7e8738f29678e1db2d877eaf"],["/2022/09/28/DevOps/Linux/Linux/index.html","4af3d478a993aeff7bb1277f4323413e"],["/2022/10/02/中间件/Redis/redis基础/index.html","32979b014206e8cd138821398a713d28"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","0bf76400c096b6f01822cd8744aa44ed"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","a38a34a0a467d2d069aad84a00fd321b"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","40063d9dcbd951a613e616927a80cbce"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","2c98948092c8ae0fc591135913803fb2"],["/2022/10/17/中间件/Redis/Redis集群/index.html","94bdc30946e7343ad3922b9ba62d0e8d"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","4d2f1c49aa1b82cdeb6ea80e4e88ce5d"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","0b4edf735fcb8e2b0d0757f3ef6e50cd"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","8fed3da7f7b96bdafa57811986b71a17"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","79d355c5bf747d23a5e9d91e1ae03ef7"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","c1fd6c2dea20a82a5ba9dbeb9504e72d"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","33ed8b5ba435966fa742706c5b64b69c"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","fc22cd37233bb01d9225a9bf9b033e2d"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","65923124350b061a37dd7691f24d23e7"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","da7f1a9e1f6b2f4b7a2e72132e612a85"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","dd598712363f1c82bba98ca293c71531"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","a9f463e107cae24e0832df4b967a0a02"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","42d7084f99907b1b29f9032d0d5bc44e"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","a968a0fc295b7628a0e95bdb977c9e9a"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","b08d2c38d6f0688f054479dc4514bca8"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","0e6d788593d607d80a35d9d50ca71944"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","0631c523c6c4b5c891281a4b3b944c83"],["/2023/03/10/DevOps/CICD/CICD/index.html","099280de54b0db56c9e5e4a8ea896334"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","793c6aaa3813c3d2b8aff23f6302e938"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","7f023828bc75365b09bab06b4052e5aa"],["/2023/03/13/Java/NIO/NIO/index.html","534f4e2d3af273616413f4aabf3b9a86"],["/2023/03/14/Java/NIO/Netty/index.html","a38c7419e4ed80fa9cd9a62d2d3d2d47"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","7bc14980a7ea2fe6feb81460a78d602e"],["/2023/03/17/系统设计/分布式系统认证/index.html","32175772761746cd8d988c1b997537b2"],["/2023/03/19/Java/JVM/JVM概述/index.html","e9f8261d61594f3eef7c1ea2ed8d4899"],["/2023/03/23/Java/JVM/类的加载过程/index.html","12dbc3d9c7632297ec89b3cccbc29e86"],["/2023/03/28/Java/JVM/对象的实例化/index.html","80086c5395bafece7b2e1fde24904d97"],["/2023/04/01/Java/JVM/运行时数据区/index.html","7f718e4e025c6545a7241d93211a37c8"],["/2023/04/04/Java/JVM/执行引擎/index.html","55cb2894cca9926e01ba85b1d1fc3243"],["/2023/04/06/Java/JVM/对象引用/index.html","b2ef52dc6b156fc90a408c830e1002df"],["/2023/04/09/Java/JVM/垃圾回收/index.html","09c2308268f90753b7b9269ede697ab5"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","4daabe20db1ffd36ac6447a220a0ac1f"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","2aa2c338215ebdd07fb0b79fca1e570d"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","2e172abac52afef283887e76b85e001a"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","7304cae0031c6b0f75c55fbdb3e66597"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","51f62e3fe3cbf1af444c41f2f2170bd1"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","1d39120314f8f859d628763b170bd0f2"],["/404.html","bc1d884036f341aab438f7cb758a506b"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","f9486653e291eb93302146a2eacab749"],["/archives/2021/02/index.html","1fa1e69008a752c1fbef1905607e0959"],["/archives/2021/03/index.html","95a7c22351fa83adbc9e1387e1751725"],["/archives/2021/03/page/2/index.html","68390a690c5b3e70e11d45b77c5d7f7b"],["/archives/2021/03/page/3/index.html","5198ac44ced704d364cfda7a7f19f258"],["/archives/2021/04/index.html","cafe0fb696384f51a439f3b3de00f12d"],["/archives/2021/04/page/2/index.html","fc2a612dbfc5f712833454a4a5e5310e"],["/archives/2021/05/index.html","e6ffb6eebe5ac378e19e7a5dd0cfd989"],["/archives/2021/index.html","13958103f65ad8fee0c4355a262bfcdd"],["/archives/2021/page/2/index.html","0e64d0ff5cafb0cfb815d6f854e402f5"],["/archives/2021/page/3/index.html","2267dbda714561883729142425bb4461"],["/archives/2021/page/4/index.html","03d7d97ff1cac4f432ca55a7314f2ebf"],["/archives/2021/page/5/index.html","7b29daf0a97584c621bbafb1fd7cfc0c"],["/archives/2021/page/6/index.html","f6d26131daba44dfb2f35f63bb8412e4"],["/archives/2021/page/7/index.html","cc7d7a8477293afd11ad40a1f73f179f"],["/archives/2022/01/index.html","fd6a98660b8ed1c3129f6c3223fda5ec"],["/archives/2022/04/index.html","ff0795a0d3ee91772c27c6aca674c00c"],["/archives/2022/08/index.html","a8b83ca33c389821b273c45d0eedf5df"],["/archives/2022/09/index.html","aaac462c718b17542d584e457da2ffee"],["/archives/2022/09/page/2/index.html","662dbd4dfa93de36b743c23e19c92962"],["/archives/2022/10/index.html","5102cc8319f252be63334e317446900e"],["/archives/2022/11/index.html","b7e1db199e035f228c6fada92364a51a"],["/archives/2022/12/index.html","88f031ff3ce159a746a0e48d46d30162"],["/archives/2022/index.html","3b4b7802cae5357a7bb3af8fc8678cf3"],["/archives/2022/page/2/index.html","6c167ee75b19eb72df3d15204b6c6220"],["/archives/2022/page/3/index.html","beefaa073c2ba147ac2f7467f6af4ebf"],["/archives/2022/page/4/index.html","779e0a93c66e71d786713698acc9c2f2"],["/archives/2022/page/5/index.html","c91b4b5c08dff92b4d83d8bf655e9d16"],["/archives/2023/01/index.html","2f11088ebb7d5ca808566894ea75f8c3"],["/archives/2023/02/index.html","6442f50fb262f6ff59bea742663497fb"],["/archives/2023/03/index.html","27058a9a341ef700f280c836e0cffbf1"],["/archives/2023/04/index.html","491b5ee7ec893931f026b00392073b15"],["/archives/2023/index.html","de01c09600c7ce2a1e1a817dbcccd3bb"],["/archives/2023/page/2/index.html","a373192fcda0e262f674d0c7679f2ab2"],["/archives/2023/page/3/index.html","79fc2239bc85269c77d80eb44f3921b8"],["/archives/index.html","b8c38639c289b0a1582a215923c6039b"],["/archives/page/10/index.html","335074b24b883fc7d608ab0796457885"],["/archives/page/11/index.html","2dafd85074f8408e5f31e8951953ce01"],["/archives/page/12/index.html","a8890352a59f4f7bea96170e3c873c90"],["/archives/page/13/index.html","5ec36627f5a1a82fcc6a5c01d7af6f3a"],["/archives/page/2/index.html","b0282060969951cb697a0eadf40a1bde"],["/archives/page/3/index.html","548cb1bad1b2d3377b5bfaee106b2711"],["/archives/page/4/index.html","26c2baf7b3ee1ec2ceff522743a9cfb1"],["/archives/page/5/index.html","cef532bd600390d257fd4f7d0db36d40"],["/archives/page/6/index.html","48acabb708d59dff39f14b19f8962226"],["/archives/page/7/index.html","dbc576dd1e24e8edb4724cc9128f88ae"],["/archives/page/8/index.html","ecca1ad2e7da90c0135fa738e43551f5"],["/archives/page/9/index.html","a6c53989f288fb3bf7043d8b88e779f5"],["/categories/Devops/CICD/index.html","98f30b90a225ebc41105b43473e0b0ff"],["/categories/Devops/Linux/index.html","394a3f03e4ccf1f54ed85143806e7b0d"],["/categories/Devops/index.html","1076d22482caf58c7fd70fa517b0991c"],["/categories/Java/JVM/index.html","0aae64d27507f4492bd9502cc8e82101"],["/categories/Java/NIO/Netty/index.html","3539b8e057b9ef2f5b8b725d99ef2e26"],["/categories/Java/NIO/index.html","884b89a0c19d9a33f3c8edd97d7c1cb9"],["/categories/Java/index.html","1a4348d65c0d4e0e0a5eecd6837f8122"],["/categories/Java/page/2/index.html","7e080b2de8086fe63cce3022658660fe"],["/categories/Java/学习路线/index.html","5dc316c8e4b37ae751239e5ff1c1bf9e"],["/categories/Spring全家桶/Spring-Security/index.html","08935516ace2e291784f8f8d935d1ee8"],["/categories/Spring全家桶/Spring/index.html","cd33bc759e60fdef610dd99d7e6ff05c"],["/categories/Spring全家桶/SpringBoot/index.html","e3ab56bef8b5e4c54b5cc6af2705a8b2"],["/categories/Spring全家桶/SpringCloud/index.html","8af7bbd4dab42f677ab3aad4cfc912fb"],["/categories/Spring全家桶/SpringMVC/index.html","698115dc6600f011aebec9b84979004b"],["/categories/Spring全家桶/index.html","d606b8aea1dc2fa7444fcc37623a0a0b"],["/categories/Spring全家桶/page/2/index.html","ff710c9aa2ee41d54e0ba62c5074c12b"],["/categories/index.html","d582401d23292bb9160c0fc879d5660a"],["/categories/中间件/ElasticSearch/index.html","91b19a99de56ae1974bc5175efe45352"],["/categories/中间件/Redis/index.html","da4c2b09c1ab3dc1b84352337d9c0f6a"],["/categories/中间件/index.html","791b8a931bb386825be2ebf1b3e8b7dc"],["/categories/中间件/page/2/index.html","996da5214306675ab68c4771d938765d"],["/categories/中间件/消息队列/RabbitMQ/index.html","445eb8d1b2f0ad666b5126b0856b89f7"],["/categories/中间件/消息队列/index.html","325ad2ddee5850604cc0fed0550ba848"],["/categories/前端/Mock/index.html","ee2bb6eb6555c8ad4cb684e39b64e076"],["/categories/前端/Promise/index.html","2f4d249aa49fda07f6482249d7b5c6bf"],["/categories/前端/Vue/index.html","70c586a0073b9625c4e5288886078685"],["/categories/前端/index.html","a9096de2f0f73a64918eeda9ed7b503a"],["/categories/前端/jQuery/index.html","3c25e4887be08185f88cc0e180f303a5"],["/categories/前端/page/2/index.html","506fbb5c1890ebf8e6f2bc7a1547f5e1"],["/categories/前端/原生基础/index.html","33f907662ce977e0164b3a58045c5c38"],["/categories/前端/异步通信/index.html","5a46d7ec45ab02a7d599a7f5efc373da"],["/categories/工具使用/Git/index.html","1edb5e8d322c388e2a9d0c6b7fa59f7f"],["/categories/工具使用/index.html","aaeedfe0bb7c1c152284be9633cf3121"],["/categories/工具使用/markdown/index.html","4821e9c2ab98db549b9bfb3971c92c29"],["/categories/工具的使用/Docker/index.html","fb82859bbe9cd3fd552081e308c7cd67"],["/categories/工具的使用/Nginx/index.html","7acfdec76ee86c0d67bd8140a7dcd2f3"],["/categories/工具的使用/Swagger/index.html","80e540e866046a83bc437eb7f7ce4fe5"],["/categories/工具的使用/index.html","ae9f4dd798d9de20f4097c9c5b034e01"],["/categories/工具的使用/博客搭建/index.html","9381d39549f71b7875f9306719a3e00f"],["/categories/数据库/MongoDB/index.html","64ae6635962e37897e9e609f7d0ab935"],["/categories/数据库/MySQL/index.html","999e00e6df89a37f47a08b2850ca3470"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","f634c1244342c0ef99cd1133f2156a56"],["/categories/数据库/ORM持久层框架/index.html","5ef8b7020a3a58e619b7784937ee3cff"],["/categories/数据库/index.html","29c3a431e32a1debb1e7d4ebcea2f816"],["/categories/系统设计/index.html","8caf276ecc48f04a46b231bac74fa8b3"],["/categories/系统设计/page/2/index.html","72d0e649d9c0b0f32528dc61e1512c23"],["/categories/系统设计/分布式权限认证/index.html","4d2c81009d7e21d71ef83a54fd67b4a2"],["/categories/系统设计/设计模式/index.html","fa0a96d1452e70f7e5a5de8cc624463a"],["/categories/系统设计/设计模式/page/2/index.html","cfc3f84efc02380aca8ec30afa47ecb9"],["/categories/计算机基础/index.html","1bb4b3c6232d3f3c85bd0e2b8e8483f1"],["/categories/计算机基础/page/2/index.html","f33533d049a7f34dbe73a48f985193e0"],["/categories/计算机基础/page/3/index.html","6c9cca9a142fec0fa2300028a3a66c02"],["/categories/计算机基础/page/4/index.html","a41b9e96fa00da1bf69ffc0cd616675a"],["/categories/计算机基础/page/5/index.html","b5b68bcebf7c430e3e1cdeeccbc25234"],["/categories/计算机基础/操作系统/index.html","44a47ab96a1b382db8b5e10121b48c24"],["/categories/计算机基础/数据结构与算法/index.html","22c795a4d477f5a345a05891fbf3af9b"],["/categories/计算机基础/数据结构与算法/page/2/index.html","c4f0dfa6a6618988e0f62f762a7782d2"],["/categories/计算机基础/数据结构与算法/page/3/index.html","dcee77155b4728792d0fc8605dc77fa2"],["/categories/计算机基础/数据结构与算法/page/4/index.html","d63523571d1950357a6dcd7150355576"],["/categories/计算机基础/数据结构与算法/page/5/index.html","41ff80004155d3ea02d2f0bd074b9be9"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","e9932a72cc11cfd37466ea00c7bda413"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","c6b107f7f6faa0e2636c8686a0349610"],["/messageboard/index.html","48206ff4baa8c579c3bf49fea0cce69d"],["/page/10/index.html","9623c42c542c5eeea7d312cd9dc8d4c7"],["/page/11/index.html","dd3b207fa7d83abfbcf59891a3f2b66a"],["/page/12/index.html","7407144e90bcab52d08861743c64a8fd"],["/page/13/index.html","6998af9edda3168c85d856747abaa634"],["/page/2/index.html","dc8fa8de8a910aabfe66cb8f7940e419"],["/page/3/index.html","878fbafa253f77e46da3aec475769145"],["/page/4/index.html","34df873cd77aae31f85e6a01b34c2d63"],["/page/5/index.html","4cccdf933f2be3580a46121786d5784d"],["/page/6/index.html","7c93b134050790a093d49ad1842bbad9"],["/page/7/index.html","781f5d1e2b4ad2bdfa3f861c4e8425cc"],["/page/8/index.html","ea1a166f944b6efd23220172b3631873"],["/page/9/index.html","26e4ca5940fd69f0f0a3d48e93947b35"],["/sw-register.js","bb2f52046d13c28b55c5336e020bdd2d"],["/tags/Ajax/index.html","d2be0fd4367cc4399c9a0d0ca3ba754f"],["/tags/Axios/index.html","bea41bb7461bb9ac315762f9fb0a3e83"],["/tags/CICD/index.html","e34bc30fa21ad09bb44c0375dc2cea59"],["/tags/Docker/index.html","6c2b1d88646712b810817972e959aee7"],["/tags/ELK/index.html","f0988caf2191a4d3ff7c890fa55834f9"],["/tags/ElasticSearch/index.html","a2a84a6c835565653db32c4ec5993073"],["/tags/Git/index.html","cf27e3a0cea8b6ee04d680ffde88bfdd"],["/tags/H5/index.html","58d11a10618b585c1dda2fc1d64b8dd6"],["/tags/JVM/index.html","05284b2cdce6136addeca06d433a7e51"],["/tags/JVM内存模型/index.html","62fc966703639323cc3b8031e81cfc50"],["/tags/JVM执行引擎/index.html","700d3a96bdc6a4391c03f15880fc6bd4"],["/tags/JavaScript/index.html","b825a730d4bbae323591310c708b74dc"],["/tags/Kibana/index.html","05ced856d5cc7019ac48bc193dc7041f"],["/tags/LeetCode/index.html","44861da7f9609543f54fb9c4f53d1360"],["/tags/LeetCode/page/2/index.html","a24eecf01f26d64ba069791f501680d5"],["/tags/LeetCode/page/3/index.html","6e58ae3bcf25568db50d24488c926e9e"],["/tags/Linux/index.html","5e954709569b206e76a7362615829671"],["/tags/Logstash/index.html","f75ec7d6aec5521ab9ec56a7316d9e1b"],["/tags/Mock/index.html","7caa90ababf8932a1c2b7a6f6f342ef3"],["/tags/MongoDB/index.html","6c673886ab4390099255cd02a30c7f44"],["/tags/MySQL-数据类型/index.html","122045ee090da5ec5774545e83d7262f"],["/tags/MySQL/index.html","dfd1aab1377c2cb1c7870d17324109f7"],["/tags/Mybatis/index.html","449e059d2fadf12a1d71b18d508f9373"],["/tags/MybatisPlus/index.html","5999bbd3c22aca39e889af6dfc109560"],["/tags/NIO/index.html","72bda831b7c79b8993ef2b9f9039e883"],["/tags/Netty/index.html","69965a713b857e955779292073dd0b3d"],["/tags/Nginx/index.html","28c9107a5f5a1d89e9d97eef8eb69fc7"],["/tags/Promise/index.html","b1541e80329955eb682c220a43fb10ea"],["/tags/RabbitMQ/index.html","08fa4ffc6a91133f6c08acf823bec04c"],["/tags/Redis/index.html","6259896e10685da46b7bc1f1b858f61d"],["/tags/SSM/index.html","97be163778ae6ccc90fa49ccf8f21fe9"],["/tags/Spring-Security/index.html","76c44ca8be025c13c30e4e314b4aa15a"],["/tags/Spring/index.html","4406069745ca35bb429a80c09d011414"],["/tags/SpringBoot/index.html","02cca8da96a701abb45020968d225790"],["/tags/SpringCloud/index.html","120de041f90da877358148c42f1ad0dd"],["/tags/SpringMVC/index.html","aedf799ce150241fa088de5c79864709"],["/tags/Swagger/index.html","35f564b1d61565a9ec61a68acc6944f9"],["/tags/hexo/index.html","31d785c891fe7770375bd93671b36a0d"],["/tags/index.html","818ca69134221222aee410c1f816a68e"],["/tags/jQuery/index.html","433968c6348969fef4c786efab731eca"],["/tags/java/index.html","2c5dfdcc4086cc56a1547a4e5098fb30"],["/tags/markdown/index.html","ff32c330a35c0fd4bb06c81f57c20f7b"],["/tags/noSQL/index.html","26236c0120861ee4441f8a721d21ae78"],["/tags/typora/index.html","2c76fcfae238afea6af58f9c1629734d"],["/tags/vue/index.html","b7ae1a1a472eede0ab04a88117b16f6e"],["/tags/享元模式/index.html","a59d86bdc23171878a785e4105ff7197"],["/tags/代理模式/index.html","4436c1fa6296b0457b6c8b3a31e6c751"],["/tags/内存管理/index.html","ef6311316557ce650ef5279a7c568df5"],["/tags/分布式/index.html","f8c7a8a27aeede583667e5796d6b2246"],["/tags/分布式系统/index.html","4b7419d04d9232fa0346e1b0791014e1"],["/tags/前端/index.html","7ee5ecca55ddac848e46f4e8d951820a"],["/tags/前端/page/2/index.html","4c8403143f75350e4667444f089faf94"],["/tags/博客/index.html","3ebbdaa3e1a0f33c8dcc306dcfacd7f1"],["/tags/后端/index.html","431a197ad4b5b6506faeab607bdf8423"],["/tags/外观模式/index.html","89cde8a35aa8f502f5b4fbbcca67ff0b"],["/tags/容器技术/index.html","d080225f7b38adc80030fde36dbd34d6"],["/tags/工厂方法/index.html","577d0c43e69920433623e1a4833f8265"],["/tags/微服务/index.html","0e64cac1501fe7a15859ebbd85e79a84"],["/tags/抽象工厂/index.html","d0ffb6c03d0b451b4088dfadea93fd0c"],["/tags/持续集成持续部署/index.html","61da6c56252485c2cd9a918183228a6f"],["/tags/搜索引擎/index.html","07ea346f489e3a68c2474e5e1d8a8205"],["/tags/操作系统/index.html","7a3b95e632b704875a8dff97317e05e6"],["/tags/数据库/index.html","f79e1ad904eb53dc3b204629ac9121df"],["/tags/数据结构与算法/index.html","84eaf57deee8f6ed790a3728787c9d09"],["/tags/数据结构与算法/page/2/index.html","a74504d20cfa9c8b8be1694a6eb49232"],["/tags/日志/index.html","9245093f54dbaf44416a1bc1ddab23c7"],["/tags/服务器/index.html","ce042ea1fd18a76897395fe1d1dfe7ba"],["/tags/权限认证/index.html","504dbf2a52318953c9195822b2bfab25"],["/tags/桥接模式/index.html","3004847f485de7df485dd09d3bf76ab0"],["/tags/模板方法模式/index.html","6ddd1457d1d91324c4d15b0413bf7550"],["/tags/消息队列/index.html","8a28e1f08cc1ac674b37bbd816309931"],["/tags/版本控制/index.html","57051ffa3156f6d67712eca5b92d101a"],["/tags/策略模式/index.html","91e5c8e956a9afc86ae789bf2194ceb1"],["/tags/简单工厂/index.html","acecf3003befbd451cebdb1284586e93"],["/tags/算法/index.html","0c6793eb116b1f265fd3176cc692fa25"],["/tags/组件化/index.html","1e8bd554f60a0eb20f0b7b4958dedf0c"],["/tags/缓存/index.html","62ef9e7c6a9c22fde9ac1f2bb9bbc0ed"],["/tags/观察者模式/index.html","ac01fbbc7ae69d18a65b36b8022fcf0a"],["/tags/设计模式/index.html","a98ab1c777bbf93e8413e56fb3132684"],["/tags/设计模式/page/2/index.html","fc25e6586ef1a109181976552fe507de"],["/tags/进程管理/index.html","95b81871b63eb2c6f2528c36d34bfd3e"],["/tags/适配器模式/index.html","9d6bdedb547cb6939f3518b04d675ded"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
