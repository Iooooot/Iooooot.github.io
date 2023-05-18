/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","0201069499bc29878f5189b9cdb9836d"],["/2021/02/22/工具的使用/博客的搭建/index.html","3778b796a9a272a7f4da55b743898a50"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","5b428a5c3caf34ddf14550dcbb52712e"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","79dab8df219350c2bc0a990b83e7a3d8"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","6fcdeb98418040e56cbf9669ec3a2e65"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","af90b389ca3fce75a9ba869af62db6c5"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","6c94775e9b538f779a53da88835ff9e8"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","2df7c75c19bd12fb9cb668b40b7cc1f6"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","1b46cd5d6e1c9ec4b947acbd6cb7a4a4"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","a631965e5c79e2c501907d2f7f6d0962"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","f40915cab294a6d000a089ca321e2cfd"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","0a70e6e8c6706cd2dbb8241eb4464542"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","38142ac17a561e68e3d42e4683cbdbcb"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","3338cf504ff676162484fb26f66b59c1"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","05a4d97ef452281831e96cea6d2058fe"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","2c768de4ff30d0b4b25d46d2039782ca"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","e15404289c891f54ca07cc90cefdee54"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","9ec2f449f4afb8b90ac4a3549722bd9b"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","5e29cf994c86a4a049be55fb39493d26"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","e141986a0539a8f537dfb4497a78e443"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","c8acd64cabdac17bb21242ca80b5bc3f"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","a65ee972daea9d876a4182de66c0ef9d"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","dc3fad46e8b7ee19dc947b53b4aaa32f"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","6c582f69c86b231e2eb8658c05825736"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","e63a9b8c97d99821d6045f623d7561d6"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","7f47f9371ba928ec956821c44d71348c"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","b661eac904e6a7f8eda8a27e7ca81d5e"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","a3ad9067d6f47740f80463d831702042"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","697c555681b04ca0e85284bfb1512fca"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","a8028cd724412efc8dc1823e798b8256"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","411f4e83f760ffa599ef28d304d3f28c"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","779f0c6cb43180e473097167600e090f"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","8d7d568a678df33757550697ce978839"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","fb68bb66a333639fd7ff1fda13bd8d15"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","68550c8683aba669d53e2509350c6c74"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","69fe604a7571498ec78e9fe2eb38b935"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","3acbe628a008f81f9eadf12806436d8a"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","e3ad78de4850aa9d4c63f028539b3dd1"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","686f8e8fc7f509a99fe6b6c423739fda"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","30f8e213e62d9add876bce31579009bc"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","4385d0fc0d6b4b2bcd0a90296f839214"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","eda72e2562c34f55ca744fc3392db2e5"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","ee5a45fde640192808becf15b48ed22a"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","60055c7b057b521033fc8cf0c1764ceb"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","adc39fedb7bb873a36c178c2623e9049"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","069154370bbaa2f6fe64f7a903b409db"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","ab065cd55d265f660c22d51c17d0ff44"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","16e1e94fffb5895e8cac00fa2cc00827"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","8c5f6111bc73fe97fa70a27330f9bbab"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","af39c22f65409da78d9a04af75ec2829"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","550b0838b345145ecabba2414a3a9ac5"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","08ee90528bd9d3d3ccb4a34aed71bdcd"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","eb0d977a6567387acb7bd78b01c9b6f4"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","970529966c852764ab76a8e54d33a017"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","2025b3e1f36e8fab99a887f326979f92"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","cbfc62fd125d19a394f299d5323c90a7"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","13e55b0955c527cdf3e4cf84cb458615"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","f70598f98b0ab31b4c77d1ac14c93947"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","471d3679c2ac5c5ec1cfb1a27b0af21f"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","950f5222a663c3be9433d3065619847c"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","1285449d8ab01fe5fd7aef5965db621a"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","3b3e0a31edf4156e4546782b6d3ab34f"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","29c50200e82c7a8b512586025a3901dd"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","03ad1fa44513f08ea972a32e86aa6c74"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","06cbdcb0f55f3d7a64af59312b5f930c"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","4f19bd0872e7abf3e429b44ad4eb1c2a"],["/2022/08/17/前端/jQuery/index.html","3ab8472229f128e3f85057030ae359aa"],["/2022/08/19/前端/JavaScript/index.html","04ff584d597892f94dcd9bbcc00db629"],["/2022/08/22/前端/Ajax/index.html","33e62fdc2c9c10e49c74f8f8bb2b26d1"],["/2022/08/23/前端/Promise/index.html","84e3edd8f52aa5706d705ca6a7d497a7"],["/2022/08/24/前端/Axios/index.html","be425fd42c3c96932b53540cd86dc39d"],["/2022/08/25/前端/H5本地存储/index.html","81dc3e985292ef8f9d544f634b08c406"],["/2022/08/26/前端/mock/index.html","caf109244383efcb741ef2d153dba33c"],["/2022/08/31/前端/vue/VueJs/index.html","cc5224235db13fd599c8874ef72af79e"],["/2022/09/01/前端/vue/vue组件化/index.html","d203b326d78bb6b448f3912233cd4b43"],["/2022/09/04/前端/vue/VueCLI/index.html","d06e74e9ca892b7bf4a030ee05742dba"],["/2022/09/07/前端/vue/vue实现动画/index.html","b4754bd39fa4de0a09d5f268310dd05c"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","964340255b046408c7ab2f5776344b0c"],["/2022/09/10/前端/vue/Vue异步请求/index.html","28dfc40e63b1a9245d930062bb8ead16"],["/2022/09/11/前端/vue/vue-Router/index.html","7e71c9cb4b134c64280661120b8e0502"],["/2022/09/13/前端/vue/Vuex/index.html","687df712915716e69d6199249a6649de"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","733d65e454841d9d95e00306615f2be7"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","f3f8a51818abf99c5b3e7d3a00117a58"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","098ce822690b46fb0bbf5e4c1ccb16a7"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","b5c8cd9479a309edc9b9523b7892bf8f"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","dac2bd52624702c598988eee8500363a"],["/2022/09/28/DevOps/Linux/Linux/index.html","ad2e60e75a6bac7d8ca6693ee1bf88c7"],["/2022/10/02/中间件/Redis/redis基础/index.html","49bd05f54d11693a5c438568af7f38f4"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","2cd82e3ccf4254b65b2bdd4d9ffdd0d4"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","5b57ef552a81b7db15440d76547ed531"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","3a276e591e91edcacb6ad0e2898fa438"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","28627c9fc4746f066057f39b120533a6"],["/2022/10/17/中间件/Redis/Redis集群/index.html","9dbbc99eb9ee0eaec535e16af32fe413"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","6f23b8052a6def4eab33ac6b503908b0"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","8ad5ad74785b7a3091df45b02585b33e"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","3da8a9aadb70d069ac96724bd92a38e4"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","c5c25400bc94a379fa713d9aacfd4bc9"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","f02675d378b385074bf07204f4a6d7f2"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","4f30063ba1b30733ee58a36f375f8b72"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","645f50acbe7e3168bbb8c3def7084c31"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","15ad1f23ed7795585d1bfe1516dff6db"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","ef4761742a6259dad9fa93355fc01e74"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","94e4405d72275d239ae6ed64a0c10624"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","5f322946f3b886ec362fd8feacb28993"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","4b166a756fef8caf8b3cb6c366e7213d"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","486664e9054a59cf047f6a04d4fe9045"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","0066ac638f615e8c7846a830aa87665c"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","9760a5006bbc31847ed1c25d503137ff"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","4b795ad015775e06a225af32d6745dbc"],["/2023/03/10/DevOps/CICD/CICD/index.html","ec16e045aeeb0fe4d0a5cdf892a17210"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","259203206e718261abfb4639298b003d"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","954d08601442e0c599ca51701ecba70b"],["/2023/03/13/Java/NIO/NIO/index.html","72ef130b62a1dd61827aab9176f6126c"],["/2023/03/14/Java/NIO/Netty/index.html","7c461e624c0f81db60de0d9a7b5d0b23"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","5d03ee6ecf16d7e5ad77efc243aba514"],["/2023/03/17/系统设计/分布式系统认证/index.html","5feebf1ec6d6ad109b1a19413df531d8"],["/2023/03/19/Java/JVM/JVM概述/index.html","339b0745644a3290c3f42ea66e3c6ba4"],["/2023/03/23/Java/JVM/类的加载过程/index.html","f5173e640dd25634d051bfbe6d920212"],["/2023/03/28/Java/JVM/对象的实例化/index.html","f5c0e29b06b324e557923221e3276b4c"],["/2023/04/01/Java/JVM/运行时数据区/index.html","6a71380cbea49f418cc562827cc23cc0"],["/2023/04/04/Java/JVM/执行引擎/index.html","8934e229f0ca8313eae0902f8bab2fd9"],["/2023/04/06/Java/JVM/对象引用/index.html","044bc972581604c8dd8892fa8ae735ef"],["/2023/04/09/Java/JVM/垃圾回收/index.html","e437e8645c2bb5ec70bf2c037857313d"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","6274a65e384244918d928399a8d97352"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","c19e33771763351833239220c8e7e34e"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","d9d43b8de413b530e0d78d7a77969344"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","e77f8177c14447acd805527667f152d6"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","0b6b79170f790ad7b5ce889517f43a50"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","24415955a78dcf4ed7432e82811eb1fe"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","404662d9754ca8d19419b2585b479cba"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","be619c01482bfaa2a3280870a4dad6a0"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","b42aa3313facc9214dd7a0bdce00d3c2"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","972bbd0cb7d37106d77420b119263614"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","cc166ca31d3241a255ff4e261ad31073"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","006bf6184d015eee78076d6b844e2c0d"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","b3324cead6c51cc0a047303bbf4d13ae"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","deace736e2e4e309f3498110c9e21c4c"],["/404.html","041b1486d4bbaad4614a6fa40ca89b94"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","96bacd44fed8dbaef9ea7568ba574c04"],["/archives/2021/02/index.html","a984c5e703e12dae45c2a7694a42e099"],["/archives/2021/03/index.html","f3af3f7fbc50eccce2bbce3eb98c8c24"],["/archives/2021/03/page/2/index.html","c71787725968c3bd6182740f5f36dc28"],["/archives/2021/03/page/3/index.html","c92b4771c34280d3c298588690156c17"],["/archives/2021/04/index.html","df4d223989fe82df2f5067c25bb097a5"],["/archives/2021/04/page/2/index.html","a186f0726c596756f1af9b57fecdcc22"],["/archives/2021/05/index.html","9695204be76ca43213efd7b570e9639c"],["/archives/2021/index.html","3aad05abdbec84c987c6b3557b218896"],["/archives/2021/page/2/index.html","72f20f02ee5f1a59593ef28008d0d427"],["/archives/2021/page/3/index.html","045c0d391f65f4e87446694135a57728"],["/archives/2021/page/4/index.html","766455cac03216bc4db4f664839dc35f"],["/archives/2021/page/5/index.html","b64458430cb07c307b9ba32bf2dd1d28"],["/archives/2021/page/6/index.html","763f9682694a1ee6c832afd9e1e98dfe"],["/archives/2021/page/7/index.html","10debd8de5c3cc29d7ee5dbb373cb58a"],["/archives/2022/01/index.html","80ef381a4c19ab08841505028c1a013b"],["/archives/2022/04/index.html","78eada1cdda7ee7fc6251cd18394c1e4"],["/archives/2022/08/index.html","4eee0be4053d30dc71675a0655e401c1"],["/archives/2022/09/index.html","4135ae948d3c622520c0cbd966e3fc15"],["/archives/2022/09/page/2/index.html","e9a013226bf61a7c492c2c07f7f17ab0"],["/archives/2022/10/index.html","b92b7fa058a79b20147801bc8eb24a7a"],["/archives/2022/11/index.html","005aed7e036ce99c9023f2ff9f40e4a4"],["/archives/2022/12/index.html","94f50b515820cc864d5ccd52f20b12fc"],["/archives/2022/index.html","39836726c8e37b12592fe602f83357ed"],["/archives/2022/page/2/index.html","b172c6ab00d04ed5b44874694135b776"],["/archives/2022/page/3/index.html","fe3c77db53227826c2409eab76b547d3"],["/archives/2022/page/4/index.html","2e55c719be47c9fc9ccd30ef2b53d72e"],["/archives/2022/page/5/index.html","591762bd7461ddccaabbabc66a7a4e46"],["/archives/2023/01/index.html","27210e3ec8ef7b838747c9cc1f21131f"],["/archives/2023/02/index.html","961dbd3b500e3e5484df6026a10deb81"],["/archives/2023/03/index.html","03d371b33c6b9b5919e1e25bdb6fb488"],["/archives/2023/04/index.html","b3831d5ed659cccba048c3235ecbeeb9"],["/archives/2023/04/page/2/index.html","59e306f1e481058fd3fe27fcfdd37951"],["/archives/2023/05/index.html","4b33663a95429bf34753379c65588d28"],["/archives/2023/index.html","f46209d1cc51d11ae59838c408b6350f"],["/archives/2023/page/2/index.html","f8323344b66183e5e5ad69aa9ce2599f"],["/archives/2023/page/3/index.html","5954010101f30e6c8d95e88ea0c4f6b0"],["/archives/2023/page/4/index.html","a23c7f9b28bcda0006e27c6caaea4299"],["/archives/index.html","5d2ef67aed919f8b0fc8c7a5b8024fcf"],["/archives/page/10/index.html","d361344e68c2f20ab9365ac937d8626f"],["/archives/page/11/index.html","eca73028863ff34b431d79f8be077c77"],["/archives/page/12/index.html","2145de2c6e2c97b9d85909bde5e0ec92"],["/archives/page/13/index.html","73745e7c18422f5546f19dc4245912ac"],["/archives/page/14/index.html","703027589996c44cae9ec796f2fc6217"],["/archives/page/2/index.html","f5e39ec93446a97274dd5fd310dc413b"],["/archives/page/3/index.html","4fa6be7ab6923ad9ae93156ddc6af4a0"],["/archives/page/4/index.html","351879d0e9febbf4cbee176bd8c38b4a"],["/archives/page/5/index.html","323c799a2056260be0d22c63c3a62e27"],["/archives/page/6/index.html","67186513447e38b8c4dea2bcef16bbd5"],["/archives/page/7/index.html","4c24b5cff724212fb6634ba550e030ff"],["/archives/page/8/index.html","c27a3e50f6b11b6d7c8be20cf2a6db62"],["/archives/page/9/index.html","a6026df07a0c656e0195ff9efb4c8966"],["/categories/Devops/CICD/index.html","c258a28643f89520081c835b8bfe2751"],["/categories/Devops/Linux/index.html","14ead46c1af76e4ba2c70fdf9abd57bc"],["/categories/Devops/index.html","10bf155e8998b6f22575b3f82e1a543c"],["/categories/Java/JVM/index.html","070e6a0d7f6ecf8dcaded0f589da5072"],["/categories/Java/NIO/Netty/index.html","0f45cf75aca3a53c06171def66c92250"],["/categories/Java/NIO/index.html","3448807b86c2b2766363009498c875ab"],["/categories/Java/NIO/原生NIO/index.html","7b87a3d220824352ccb3c4b982c9e86d"],["/categories/Java/index.html","9eb18131f0c2a5649e2d67b8a111cc96"],["/categories/Java/page/2/index.html","66047658967ae7ee55f25f3dcfd31e38"],["/categories/Java/学习路线/index.html","9bc1fcd046cd3ce98fc9b9899815efb2"],["/categories/Spring全家桶/Spring-Security/index.html","349b49efa17f6d318f2e1906ad945a68"],["/categories/Spring全家桶/Spring/index.html","ba771b07028ba9f824e6c9e4e57108b3"],["/categories/Spring全家桶/SpringBoot/index.html","700a6bccfc08dc053aaa4e1c5a97b43f"],["/categories/Spring全家桶/SpringCloud/index.html","3ef6d1334bedcedee4160c056825b0dd"],["/categories/Spring全家桶/SpringMVC/index.html","42fd12fc5a2ac7a75e7dda992d37a4d1"],["/categories/Spring全家桶/index.html","fe6afcc4521b26d62fc80b6992263a98"],["/categories/Spring全家桶/page/2/index.html","06673a4538e7009313d6e89fdcc4c5f3"],["/categories/index.html","438339d1048d24678dcc0a6252ea6bd2"],["/categories/中间件/ElasticSearch/index.html","dce13143d4b869f884a42334b183feef"],["/categories/中间件/Redis/index.html","9f7b1eda991e38cc7406d50d1c46aba1"],["/categories/中间件/index.html","a84ac9d4c8491bba56adf996f14a298b"],["/categories/中间件/page/2/index.html","fe8883611ab218841adb5eef65e05633"],["/categories/中间件/消息队列/RabbitMQ/index.html","cc62e84392c553baf9c6a996a4de4b1d"],["/categories/中间件/消息队列/index.html","2dbdc775d077cae7865939a565e9dbf6"],["/categories/前端/Mock/index.html","ceea891125b4a32f9a923d1a168149b6"],["/categories/前端/Promise/index.html","465af5dd22375585638a008b6411c3b8"],["/categories/前端/Vue/index.html","4eb6f4a44dd3613423481d505d43e2f2"],["/categories/前端/index.html","f6beaa02cd3129204575a16e267476ca"],["/categories/前端/jQuery/index.html","d6f7f11a452e654a1c1544fc08f09ba4"],["/categories/前端/page/2/index.html","2870a20d6cc10003471a4cf1c5ae9c12"],["/categories/前端/原生基础/index.html","5ac4838147be0568f9b9bb21073b4ace"],["/categories/前端/异步通信/index.html","aa25d2c75e9d32126a1d0065979af9c3"],["/categories/工具使用/Git/index.html","c353f05e206b48a6cef1fde21f4436d8"],["/categories/工具使用/index.html","0700416d257f4b3e539cbe8abae80c9e"],["/categories/工具使用/markdown/index.html","dd9b69ef33641292632851dc17cf3ed9"],["/categories/工具的使用/Docker/index.html","cdb2627ca4a568081b3869cfecfed0e6"],["/categories/工具的使用/Nginx/index.html","431078abbe68f921ed1b5eca15e6f31e"],["/categories/工具的使用/Swagger/index.html","534b57ed25d3e3f587875a32644d7b43"],["/categories/工具的使用/index.html","be117a0f156742967eb056bd26576d89"],["/categories/工具的使用/博客搭建/index.html","65d76b4618e713fa51a9d3dc51f9bf87"],["/categories/数据库/MongoDB/index.html","24b5ab20df1bee1db08da8fb99318ffc"],["/categories/数据库/MySQL/index.html","defb6c2f8fdc0bc07503a4c72be1ad7d"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","c4c893cb777e893fabeb6b631e338490"],["/categories/数据库/ORM持久层框架/index.html","eaddb85026106c5546f2ef31f4527abb"],["/categories/数据库/index.html","dbd9c81855bb62faceebd83dab626b59"],["/categories/系统设计/index.html","cad264a16403318715169fb023915006"],["/categories/系统设计/page/2/index.html","68ea9638b6d6bea289f1c3ebdbeb3229"],["/categories/系统设计/分布式权限认证/index.html","50f3efc87708b4d0ad537946bb93eb49"],["/categories/系统设计/设计模式/index.html","91b1afcb54edf3d0aa89ddd7bb0247d6"],["/categories/系统设计/设计模式/page/2/index.html","559d7b9af6657c791fb31f8c1bd16b93"],["/categories/计算机基础/index.html","589bf48f45d3c2f51c1c973377fe346e"],["/categories/计算机基础/page/2/index.html","b196b45f2771249634d105b5ddfbe799"],["/categories/计算机基础/page/3/index.html","cbe56b27d83a1f5ec376abbdd51b29c0"],["/categories/计算机基础/page/4/index.html","c3a1d76cfdca58ef8e1eab9315d85a45"],["/categories/计算机基础/page/5/index.html","abde85276ca3d6824de56601a3386cc9"],["/categories/计算机基础/page/6/index.html","ac2c1b98c428bad919508be7e6250bb5"],["/categories/计算机基础/操作系统/index.html","bc980e73744fb81d605166e75453b0a3"],["/categories/计算机基础/数据结构与算法/index.html","b59ff836841b602a5d75f7e317610a0c"],["/categories/计算机基础/数据结构与算法/page/2/index.html","40efd8ef7f492e7bf9472dd84d07a5d7"],["/categories/计算机基础/数据结构与算法/page/3/index.html","9858e5efc534e8e669716f60c46288cf"],["/categories/计算机基础/数据结构与算法/page/4/index.html","fb976b0ac609bf8a79b39a18eaed56d1"],["/categories/计算机基础/数据结构与算法/page/5/index.html","546e58a7c58520c4e68323cc85a94f13"],["/categories/计算机基础/计算机网络/index.html","7b23affd67d0c92a4826c4bb1d4a7152"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","aef93e95af0f58c93371a1c503559bee"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","8b0e723478ed9fd213b5505933ee8c31"],["/messageboard/index.html","2cdf92641ba988ec27985714b9d96bb0"],["/page/10/index.html","f1eecf33165508f15d0dc52ac37f3d8f"],["/page/11/index.html","7d9674075b83bb3bb069c28e5d2f210c"],["/page/12/index.html","4a26ab54f5e575d7ab96ef31c0530063"],["/page/13/index.html","b4da4a241701fcbfa0f66fe216d3f5be"],["/page/14/index.html","1968adb050aa9b9c841ddedd71896557"],["/page/2/index.html","652f88a66d4cb548b0ca12b121ec8392"],["/page/3/index.html","6a8b444d7636c9be09a25c7b5e08fcc8"],["/page/4/index.html","306daa2d94f169dcb7a98e7e8d2c8616"],["/page/5/index.html","9a9b4654f50f3b44ab7a2c76601e79a6"],["/page/6/index.html","eeea802246f3a2e868ad5d54f7ce1b51"],["/page/7/index.html","1cd00407274d1199dd13c4bb256d8745"],["/page/8/index.html","abe7cc2a5355f4866e43c092b541faa7"],["/page/9/index.html","371cff1163e5c4c4855d821bceef0bea"],["/sw-register.js","ca2707a4d17def9e0b71a08fe71c44ed"],["/tags/Ajax/index.html","bd05496825c2a0f797d5f2c36a0f6569"],["/tags/Axios/index.html","973fec070a646d3fb74090966cc91702"],["/tags/CICD/index.html","edb72d6c36e0beb3eb6f3d4d5d3aec7e"],["/tags/Docker/index.html","33f14f26cb22c6c20719889a9c256494"],["/tags/ELK/index.html","b3125f57bac0e4abb05d16139cfc3ae2"],["/tags/ElasticSearch/index.html","0ebf81001331b1f4596c1190af7ce9a8"],["/tags/Git/index.html","3d26df4aa3f17ee1a15f03451a3de2ef"],["/tags/H5/index.html","83754f12b41313ebbe2f91dedb239331"],["/tags/JVM/index.html","d66653140ff303f7677ac66b3ab760de"],["/tags/JVM内存模型/index.html","1db22d2c81e2563cc8b46ad1bc4eab28"],["/tags/JVM执行引擎/index.html","c20b58850ce3f633bb26dc4039b44daf"],["/tags/JavaScript/index.html","701ed6a3af4a0e969990b179d5401df2"],["/tags/Kibana/index.html","a01b6526780c6a0043b56e2ba9ce932e"],["/tags/LeetCode/index.html","90838f970e98cb8a97bd22061b691e23"],["/tags/LeetCode/page/2/index.html","f0aa5ed8d38c7b514fa335c9726c8911"],["/tags/LeetCode/page/3/index.html","a6ca3e44652e401fe8340a89fedbebe3"],["/tags/Linux/index.html","e8d3fb7dd5f5014f7f94c261a54dff18"],["/tags/Logstash/index.html","aac9a359651a60c1d288a7283dd7b463"],["/tags/Mock/index.html","67c3f373dc0d07b5ca9c67038442b22a"],["/tags/MongoDB/index.html","3dc79bd9cf99a830d37904867e7c3f6c"],["/tags/MySQL-数据类型/index.html","fdf5d01ffc9284d93d75295fa5a372e2"],["/tags/MySQL/index.html","44575a876ab65a90bd055d9b3f1040f8"],["/tags/Mybatis/index.html","016887665904b3889bccd46e2a829347"],["/tags/MybatisPlus/index.html","40715aeca0d3f56ed595390443d83130"],["/tags/NIO/index.html","9155eed3b16d536bbff5939ceb67eddc"],["/tags/Netty/index.html","d7adb71975c9c2b24ccd8a4540a7c146"],["/tags/Nginx/index.html","0bfdc18a6ebfff409e76f8734126e762"],["/tags/Promise/index.html","88777e9cb75da5486f9ddbe60d7db8d1"],["/tags/RabbitMQ/index.html","447a925e0979a56f146e6957e4caa7e5"],["/tags/Redis/index.html","7a5d5918e5fe13bf6adc584441ddc5e7"],["/tags/SSM/index.html","1c7b652a118c7eab38bd178a8d97dcd7"],["/tags/Spring-Security/index.html","a236cbac11081f080391fe67fcf75bf4"],["/tags/Spring/index.html","cf7e7c979d2714801a56ad4d02ea2d71"],["/tags/SpringBoot/index.html","bb794d76f922a25f43b7ec4e700c9503"],["/tags/SpringCloud/index.html","f69a2659710c1ab2f8a646fc6775b7b4"],["/tags/SpringMVC/index.html","8ef0bc4aca11a87f39687890cf6db947"],["/tags/Swagger/index.html","a861b6b84ae0e88e68e358394edbadd0"],["/tags/hexo/index.html","3189ecf3c474fb0ba2a97540c3c98ef4"],["/tags/index.html","d5428e68f42dd338f7936424a9b8868e"],["/tags/jQuery/index.html","43c73b6398bf933095e83ee2a39c0886"],["/tags/java/index.html","509606ce206f8bed8695f5af611ccd84"],["/tags/markdown/index.html","4872dbd6a12e591d18bc8076e3caa5a2"],["/tags/noSQL/index.html","84373867b0b5545a20a0b81cca4c14d8"],["/tags/typora/index.html","9216a7bb832baefa93f761e381d54e82"],["/tags/vue/index.html","9d807c8462512b3f885929232f565027"],["/tags/享元模式/index.html","2ada4b8c748020280a33eca65c4a500c"],["/tags/代理模式/index.html","b5d9687c27132a35bcddd43f9f75d34b"],["/tags/内存管理/index.html","f42e7c5594d729339b4f5a959e3396fd"],["/tags/分布式/index.html","98a64abdc8c1f5515ba61cb2a7243ea8"],["/tags/分布式系统/index.html","c0e114239fb407a805fc597801acb1ad"],["/tags/前端/index.html","2a51e97e53e256646b9a5964956cf843"],["/tags/前端/page/2/index.html","33741def08d0a0f5bbfad03ad8474a67"],["/tags/博客/index.html","364aa7d59a59a1f62f662fe62dce7cde"],["/tags/后端/index.html","6c6a053bd7c6f3557120103f377e78f6"],["/tags/外观模式/index.html","7119a9cd351ee9600f88cdea37a137a4"],["/tags/容器技术/index.html","f15b123340bbcc82d560cdbef22fc8ba"],["/tags/工厂方法/index.html","5eeac62aa1c97335ba013e8f171193d7"],["/tags/微服务/index.html","7ccf21850efb402b0ed90a9f654a2520"],["/tags/抽象工厂/index.html","8a64235b8c0fcd7e5ffe6d5466685b9c"],["/tags/持续集成持续部署/index.html","1bcc8b4aefaadc32bb02c87aac201db3"],["/tags/搜索引擎/index.html","eb9ecd8fd3224be6f1477fc23f19132a"],["/tags/操作系统/index.html","caed237eec612f90c28be6321c3be174"],["/tags/数据库/index.html","414122c1c6f51b2d8c1a43a3a33f0470"],["/tags/数据结构与算法/index.html","e600dee7db94a13a113a235765c6e419"],["/tags/数据结构与算法/page/2/index.html","53854497d8c60b9a50ee33f6be95ecac"],["/tags/日志/index.html","e1151c130e9b1b83c920ae9dc632cfc8"],["/tags/服务器/index.html","3469420f63c220d5670c4c3409d2432a"],["/tags/权限认证/index.html","d5a74bebb65df815da563d3527565692"],["/tags/桥接模式/index.html","e3a698327baba51f6058e2d0c23c140e"],["/tags/模板方法模式/index.html","71ae129c7311a836cdd13b6dd1b49ae9"],["/tags/死锁/index.html","91482c16eae9e6f89cb34bb30bf52e8e"],["/tags/消息队列/index.html","3a64d3544009800094b6cdcfeeb85ab5"],["/tags/版本控制/index.html","d0613fdd60cd4c402100578839303a31"],["/tags/策略模式/index.html","86c5ffa23392849828741bb392a21b83"],["/tags/简单工厂/index.html","cf2e760ff878c35dd571ad6067086b77"],["/tags/算法/index.html","54aaccfcedc29980ccbc31d65b177878"],["/tags/组件化/index.html","e8ce791f9842b861595fa3fc724a9d8d"],["/tags/缓存/index.html","460ccf296d5f674d92388905c070a0ef"],["/tags/观察者模式/index.html","b6f52e91c357bbf4325c2c72ed73358f"],["/tags/计算机网络/index.html","45fd96958d2a2555cc0e4da82670d883"],["/tags/设计模式/index.html","fa2745c47dab28c88e48580ee6ed841a"],["/tags/设计模式/page/2/index.html","46e6362e9009d000d5089796bcdcfacf"],["/tags/进程管理/index.html","48110776def84786f9628b68b63f15fb"],["/tags/适配器模式/index.html","ed8319d0d6cc03e255e130831754d70a"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
