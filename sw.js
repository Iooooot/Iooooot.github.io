/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","8b4a545fd8d4c312fe14d1cffd75cc37"],["/2021/02/22/工具的使用/博客的搭建/index.html","3f624a17cc4784bfaa74a783ca4c71ef"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","7aa828f050c8f6c837fd96d68e707b89"],["/2021/02/24/mysql命令大全/index.html","6e3170fdea332bc37ceb5dc18ff6fd72"],["/2021/02/24/mysql数据类型/index.html","994637268d904d4e9176fc2ab157f419"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","192119218df3601aa29209d173a5281b"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","255001b0ce45999850ee8059857ecd1f"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","0ad2798b1b44b298231478efeef5b666"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","6ba397f5608138f06a1ca96c568f6123"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","8af5491ffca268167de778e9ec68fb13"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","d4160e76963bf4392e700611e77e2bba"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","9c3917a43351bb07c20b9a4e0b344825"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","0ac9d98bea2c90186eb98382b4f4279c"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","b99b865bd93a1f4f24ed5437733a0a6e"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","e4f74d3c88433a80927081f611541d56"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","f75e34731b334823a27399b5a222c081"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","f0dbdb08342933ca847db20c2af9fc83"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","e26a9621e791f15b97fb7304814e1f3a"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","9be0c7e65fb2c9f80b3e7ab405c18f32"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","c2536488816d4f13bd86d9a5941320eb"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","463322b651c2eb24cc6ad2d798ab8964"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","4e8cf24885b4375865b34f349ac3ee5c"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","abcfb791987ae9390173f7b38476ac0d"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","9b946f1193da69dd23163a34e7678a1a"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","2f8a1e50fac5c371b6d9f80ad291b81b"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","76b060307de8fd4a954a23fe1c9ef768"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","f5fede8809d184bb95e776fd35ce93ef"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","48225c2f6683d920bd877a2c202fa14e"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","f97314fc8394e25136a66ac73e608e79"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","6342a9ab48989ea91724d2f39a454558"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","98034e8eb7f15141f63244dea2c7e4df"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","87ceb864b6b4074cc2078f1d551b332e"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","6b60cb0c3a36649b69191ba77618c920"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","0d04c21162b1a333f4803ac32d130ba7"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","1d89352f7e1c06eb4eef48c2cf2c354e"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","4152a912783570aa69cfca351324e051"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","deb6015e961a091868b87e3a421a5541"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","c62757765c5100ef4a51bb544f6aebe3"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","b2b161dbe55876c5f5ff82a88bde26bc"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","6b1a99ff6e2d6e2c0fa16a340e728061"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","57e1c1ccb3380fcc73d90e856f4203fd"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","7772d1cc5f2aad20a8a3fe8aa159272b"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","5a607afaecd4528c69bd5a2220b978c0"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","4ba4c11deaaa5dc70dd714c4c90d0e7e"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","8f0ece47e7162703cdc8a7416dc64c69"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","0625d691410a225997c0b3dbe9d42220"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","622b9a29e5a977c6ec7f3fb2a65c59d7"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","6f73c8b494bf14c95e18d8f8bd13a062"],["/2021/04/14/Mybatis/index.html","39d5bb41d7106729fe1f2be3a8e43314"],["/2021/04/15/Spring-1/index.html","19b8f6446c655282748dd0c94ce3b0f5"],["/2021/04/25/Spring-2/index.html","f3957950c9c924fe10d77bd6fb1ae9ba"],["/2021/04/27/SpringMVC-1/index.html","cfa39cbbaf8e4e1d078b559f9ec0183a"],["/2021/04/29/SpringMVC-2/index.html","a1299143b2b2fea04cdf002e0bd65270"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","a074f95f0a50b8d3db664766d35a07b7"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","5fb8bd71ac2de5cf18be7212782f8961"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","a4221be50f318737b318dfad485755f0"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","bb46bce0ef54bddeef09d69dcb08e5d6"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","4846e0138a1125a90106dc346a4c2159"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","29f0bea729cdb1f67be84cdcdf67b7a8"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","96472b2516c9404ff9344d7be53c6acb"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","9ef23a5b339cd92ef4b83959ad105ba2"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","707c90996f791aeb1a72564c18e5e56e"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","7e4a31a9aca2c196db0ec57ceb78c611"],["/2022/01/22/前缀和/index.html","5e2cfdb5ef2625f6d8aab49a22ee23ac"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","570bc13187cba71723e662e061f8edf5"],["/2022/04/04/MyBatisPlus/index.html","c74761acebb3a2af4c80058cc99fb240"],["/2022/08/17/前端/jQuery/index.html","1119c8ef9fd6bdb0660c88112fa32ab1"],["/2022/08/19/前端/JavaScript/index.html","09c9952b2a4b85fb798b4686145c7d00"],["/2022/08/22/前端/Ajax/index.html","925c850ce912dcd767017e869cf3059e"],["/2022/08/23/前端/Promise/index.html","1a2fc9ab6e720558353cbf102fd8e0cb"],["/2022/08/24/前端/Axios/index.html","620b5e77d920f3d6925692cbe44afa02"],["/2022/08/25/前端/H5本地存储/index.html","ef730b7a3e3c2ce77776fa471432bef6"],["/2022/08/26/前端/mock/index.html","822e7080c2bc163863217eafdbdd0973"],["/2022/08/31/前端/vue/VueJs/index.html","dd1c76bcca171e56912be21069ad60ec"],["/2022/09/01/前端/vue/vue组件化/index.html","856b9676bd0e08522e815693d6c7d1f4"],["/2022/09/04/前端/vue/VueCLI/index.html","5710d86057f16e48ddab5858be234d1d"],["/2022/09/07/前端/vue/vue实现动画/index.html","25699fff2aa51beb7cbd93d9a5ce793a"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","3cf0f2c2e1967d9f467a5bb3b66b8d95"],["/2022/09/10/前端/vue/Vue异步请求/index.html","52018170056c356bea46684bca2775fb"],["/2022/09/11/前端/vue/vue-Router/index.html","3e835a739929f4c3977afda5beca3c7a"],["/2022/09/13/前端/vue/Vuex/index.html","8ac143dfa6f9fe2249f44cded2d04d73"],["/2022/09/15/SpringBoot/index.html","a35104bd3b896ead0113d4d210a0ca77"],["/2022/09/16/SpringBoot配置FastJson/index.html","f58ddb35052a1cb0437aacd98c266e09"],["/2022/09/19/SpringBoot参数校验/index.html","a96caec3e6176acd511cca0dcc1cbe2a"],["/2022/09/20/SpringBoot的异常处理/index.html","a8e7f28f028a1858bc71f6a68ca6e7f6"],["/2022/09/21/SpringBoot统一响应处理/index.html","6a3209d9c4e04ca9251a90d457fa9e92"],["/2022/09/28/Linux/index.html","0ac1432a87448c6a1773d73dfd34cd24"],["/2022/10/02/中间件/Redis/redis基础/index.html","6b8bb3695cd4780241c9a40c15e91b22"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","97130ebca71e5c659a03d995ba7366d1"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","bac2df8ecc338996235a7e2f9f0b0447"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","44620c5eee9f0a7f3bb589fe77d51f8c"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","c1de56ec5807bf616fde2d6fe25e751b"],["/2022/10/17/中间件/Redis/Redis集群/index.html","64c3eca66678690bbd276c6b707b2785"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","69cca8cb108286120c9a4c28b12eb8ef"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","1c30203be96eedc9ce57c5cbad42abe2"],["/2022/11/03/Spring-Security/index.html","0d88907192a584f32101e403acca5a1e"],["/2022/11/08/SpringBoot日志/index.html","aa65b87d8666be42eec83323e7827cbb"],["/2022/11/11/Swagger2/index.html","edceb146efbf8485d84a26ddca4ee794"],["/2022/11/21/Nginx-一/index.html","a6dedfe7ca8636c16c457fdbba1ea824"],["/2022/11/23/Nginx-二-代理服务/index.html","773371fa05bb376cf9fe4daa46cbd594"],["/2022/11/24/nginx-三-负载均衡/index.html","c89c10963574bc6668220195d47532bd"],["/2022/11/26/nginx-四-缓存集成/index.html","f577fb08a67f207d67e07037dbc8b7b7"],["/2022/11/28/nginx-五-动静分离/index.html","78c15465a7442303c5d1790f99feb25a"],["/2022/11/29/nginx-六-制作下载站点/index.html","a64b0b75ad5647b14f273f92c2e79462"],["/2022/12/06/docker基础/index.html","7d632cc34ecb61a09702d2b3b48d6ad0"],["/2022/12/09/Docker高级/index.html","2935ad9fa189a36e8a18149dbf2405e3"],["/2023/01/04/MongoDB/index.html","798732f377e5fedf7fa31cc3dc245810"],["/2023/02/05/消息队列/index.html","5c824d3bbb33a12bd8f62ef97c4bf196"],["/2023/02/12/RabbitMQ集群/index.html","fc2b37741fb1ef22edbe7e8a87aa438b"],["/2023/03/10/CICD/index.html","ad411efe05679eaf49db22a82d8a2748"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","afbc125bb19345c5e522a931aae4c258"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","da5f5cdd19080c3b7a7aa33169ec1789"],["/2023/03/13/NIO/index.html","7fe0aec6866a0be8c210478df422fb48"],["/2023/03/14/Netty/index.html","6e5f95730d90303a4f3ece45468cc8b8"],["/2023/03/15/SpringCloud/index.html","8ac592a845c9583f4d36b4313d9013ae"],["/2023/03/17/分布式系统认证/index.html","fc81b7d511248e38c9cf2a7405b10bd5"],["/2023/03/19/JVM概述/index.html","8eb6472bda113ffdd7edda815016b0e2"],["/2023/03/23/类的加载过程/index.html","398224c3cebcde732f49b740b1903019"],["/2023/03/28/对象的实例化/index.html","f45078d78caa0371534d461785f52d69"],["/2023/04/01/运行时数据区/index.html","79deba803466d4fe6ce23b93d3590467"],["/2023/04/04/执行引擎/index.html","4ec8179607225ab06d1e71bbc3a38a13"],["/2023/04/06/对象引用/index.html","680783f10bbaca413999e3a4918d1a7d"],["/2023/04/09/垃圾回收/index.html","b3674631c9083fb49d6567d034e7814d"],["/2023/04/11/垃圾回收器/index.html","929d6be1428cb04436718b3acf50c8fb"],["/2023/04/14/Class字节码文件/index.html","98dee1497ee7bceb8bb0e217ff9a2755"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","4ba3dae64891dae26f60749d32da5885"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","2f03067d6ed38f730004d17490a0fb0d"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","f88d137cfd2e300a57186d35158473b7"],["/404.html","772886a85d7fb4fa64d13e32f1996d9c"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","6ef8f32b599c71ca7792ccc2fdcb82a3"],["/archives/2021/02/index.html","56e2b5bab6c56ff012ca0b9109bd1322"],["/archives/2021/03/index.html","aaf62771c05bd15274529900f4cec0fc"],["/archives/2021/03/page/2/index.html","f627825af26b86e03bcaf99cd70717bc"],["/archives/2021/03/page/3/index.html","022dfe9c2da87538fb761df350b23a94"],["/archives/2021/04/index.html","040583da290d82be3c1a463a4b43191b"],["/archives/2021/04/page/2/index.html","bb5d5c3fdc4e7542c32cc40f526b0c76"],["/archives/2021/05/index.html","d46c60ab9e779c568565fe31cd225b6a"],["/archives/2021/index.html","223b0c8b2e3f49b23d1c12f395bae289"],["/archives/2021/page/2/index.html","673cd5e71361034acbf92f3b73897c39"],["/archives/2021/page/3/index.html","3afa8eb4750d75e0e96aa08762b8cfd2"],["/archives/2021/page/4/index.html","b31673fa6e5f6c8297df795a1ec71a5a"],["/archives/2021/page/5/index.html","3eb9e75afa37ce85dedf71ba54bd2b53"],["/archives/2021/page/6/index.html","0d8bca708849c7e0befa587dc4f312fd"],["/archives/2021/page/7/index.html","bdeac7a188683c4f7010f6e5f310e074"],["/archives/2022/01/index.html","9c9ab1aea0de853fc895264cf45cab27"],["/archives/2022/04/index.html","574cfe231111afd94f4a7ad4432b7cc2"],["/archives/2022/08/index.html","deb45591bc5428e17ded05e4f0201c68"],["/archives/2022/09/index.html","39860ab30f7f95260b6a3c52220fdd52"],["/archives/2022/09/page/2/index.html","81ff69e8193c6def6d2e9e68213f9b37"],["/archives/2022/10/index.html","85ad3bfa84dd0b3630802c014bb96e09"],["/archives/2022/11/index.html","e73cd5ef6057950497e046a62c8aa9bf"],["/archives/2022/12/index.html","93ccff77c9b13f0a5dce0f7d813928b5"],["/archives/2022/index.html","107702b1fdb00261d6e7d7dcf93710ec"],["/archives/2022/page/2/index.html","8b940486c6305a122a6a12c2bc9c057a"],["/archives/2022/page/3/index.html","189f699257022678d5c4d102093fb899"],["/archives/2022/page/4/index.html","3afdee0f093df3321e8a9c1a71bbda7b"],["/archives/2022/page/5/index.html","976263285a25045756c489346c523339"],["/archives/2023/01/index.html","90aabb17a7ea97ac7d44d75b2edc3ac6"],["/archives/2023/02/index.html","5b4e9c131b686cb8fe879dcf427b35a5"],["/archives/2023/03/index.html","7da0458d0494866eee17f8943c4c1a27"],["/archives/2023/04/index.html","3191a05977375237a09868634880c71a"],["/archives/2023/index.html","76de2642b4d612dcdb2fd863bedc7a94"],["/archives/2023/page/2/index.html","c7b1c0db5e60209b3832595cea580112"],["/archives/2023/page/3/index.html","76abc3a36f7795e4d3ee3502fb8fa274"],["/archives/index.html","b3771901704270da4b3ef8dd5f00868d"],["/archives/page/10/index.html","a2a6ed422c0245eee2b7162c7617a4d5"],["/archives/page/11/index.html","1d85ef2be4d4b5f02916ba5eea096dbe"],["/archives/page/12/index.html","11fe51e2ee251d2b003e8e0bf3590c0e"],["/archives/page/13/index.html","9cb86c0627bff39ea29edf8281a1189b"],["/archives/page/2/index.html","a701778fa76fa0ca98995c64fe7bd31e"],["/archives/page/3/index.html","af997224121ada095b2808e2be9e2fa8"],["/archives/page/4/index.html","f4bd0f4c7c12d7ef55f1df37402c15eb"],["/archives/page/5/index.html","fe58f309968b577195eae61f1f1639f5"],["/archives/page/6/index.html","d97077db9a08c302643ec49cc34a7c29"],["/archives/page/7/index.html","03e7203755ff25d54108ea22853202f8"],["/archives/page/8/index.html","c7c08a46ca3bfd724f2f9c7cc53acf7d"],["/archives/page/9/index.html","8ea1f032e3c7a30c775621c6d9e637a8"],["/categories/CICD/index.html","fd5d661c5ce527f451346eb1109addb8"],["/categories/Docker/index.html","1b37f2ece6df80d64414a14da5cd4e9d"],["/categories/JVM/index.html","d9654a31ba93ea2daf69be05e8de605f"],["/categories/Linux/index.html","48be14fb803b6b4a6448901cae657d41"],["/categories/NIO/index.html","29d7e9629c59333272074fc74dd1e272"],["/categories/Netty/index.html","8e35631e2e3e1696efdbd88ea5a26483"],["/categories/Nginx/index.html","c0135ecb075d4e77fbccffdefc680d8e"],["/categories/SSM/index.html","b5da4984654586a7c8b5014a32c56ede"],["/categories/Spring-Security/index.html","1bed9bc8fc9c3cda29ae995077b39ae4"],["/categories/SpringCloud/index.html","106e986faecf618bd83f00badcf61f30"],["/categories/Spring框架/index.html","46fce8d49949bf235c22add8247db4f7"],["/categories/Spring框架/日志/index.html","464e177f057f88a544c55d6003ea331d"],["/categories/Swagger/index.html","c0bb87e23a7b02cccf5ee9beb5681675"],["/categories/index.html","fe55c549408e745c16279f9435536777"],["/categories/中间件/ElasticSearch/index.html","1071ae790ba550b9fff74015740f0c0e"],["/categories/中间件/Redis/index.html","5dc555fe3de0e5451f709f119f2daa4a"],["/categories/中间件/index.html","656da0104b2a4085796a389687b5f8f2"],["/categories/分布式权限认证/index.html","980c8698182f6f128cc7b6c2127297b6"],["/categories/前端/Mock/index.html","9a403bb5e48462ae3d069c9df3316220"],["/categories/前端/Promise/index.html","edecb7e3c13b568f2d48530d631f5282"],["/categories/前端/Vue/index.html","893ebf24c4724beb1dc22089181f2d2a"],["/categories/前端/index.html","12bed22c2d472d67c08aef146cfcbbce"],["/categories/前端/jQuery/index.html","e05f96b4ad9143ddb081d506640b4d74"],["/categories/前端/page/2/index.html","ec0a6f173d76f3a80282400b96e8bfd5"],["/categories/前端/原生基础/index.html","2301847782ead461d36ce85fccd53e66"],["/categories/前端/异步通信/index.html","ac7c103d677832c9eb90e5f804181253"],["/categories/学习路线/index.html","c23c1b1546e9a7e763aab9ec0607ac14"],["/categories/工具使用/Git/index.html","666a0ed1b696c3aa9fabc88ce27b3d75"],["/categories/工具使用/index.html","6fc656fc3310dd5eef2056cd29b989d7"],["/categories/工具使用/markdown/index.html","fd69367bf40b9a2f2bdc520584cd2e8f"],["/categories/工具的使用/index.html","2a5248e9fefd71c0f3570085a8d686f7"],["/categories/工具的使用/博客搭建/index.html","9fb83bc4f1a3844d69cab6eb8965ba7b"],["/categories/数据库/index.html","e7b12d3c1f54312fd5c2ed0a9e00ae53"],["/categories/消息队列/index.html","1d4f9b54435da5a390a65ca47f74b915"],["/categories/算法/index.html","e5e530f70eafc317fa921a745e2ef77b"],["/categories/系统设计/index.html","8ec06ff90922a713f0cbe35a14d96034"],["/categories/系统设计/page/2/index.html","a6e32b9dfadf482f1dccdfd68a386c0a"],["/categories/系统设计/设计模式/index.html","08f2bef0674b8e0de12bdefb66435e03"],["/categories/系统设计/设计模式/page/2/index.html","3949e2002719a85db75ec0f506f6d4ca"],["/categories/计算机基础/index.html","057431003b34101c73f09a96398ffd62"],["/categories/计算机基础/page/2/index.html","d9a945b133fe5731ea5670708dd36f4e"],["/categories/计算机基础/page/3/index.html","185c29a3f511f11652f7f7b52da3cfd7"],["/categories/计算机基础/page/4/index.html","2f41893c6ad8f8111d78c749b34678f5"],["/categories/计算机基础/page/5/index.html","1694afeff07586c8f6555cc9f0144241"],["/categories/计算机基础/操作系统/index.html","1b2ad7e17aaba5ee2aa416fc2069f5e6"],["/categories/计算机基础/数据结构与算法/index.html","8e6a79e73f4724cc70644ce31946f785"],["/categories/计算机基础/数据结构与算法/page/2/index.html","1ffced8a94eeeb88bea2f2de68c65065"],["/categories/计算机基础/数据结构与算法/page/3/index.html","e81643d68f7c129dc86ac55d0b59fe10"],["/categories/计算机基础/数据结构与算法/page/4/index.html","991f0f67570dfbe2b2f269815d410315"],["/categories/计算机基础/数据结构与算法/page/5/index.html","f2848d791da0dfa5ad5b69eacd3a6597"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","c234c9ec670a5065b67483083584a11e"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","e36cb88b6fc60222ca547282311fc33d"],["/messageboard/index.html","65b77ae4c212d154ae327906432e34b3"],["/page/10/index.html","9694514d8eaf850cd71e5de78a3ac85a"],["/page/11/index.html","5c24d2f8116b76ead2f8585d294f9d3a"],["/page/12/index.html","68ddd04e2cd63138b91110aa016fbb77"],["/page/13/index.html","fdef647803dd86b029079eb5e2591f4c"],["/page/2/index.html","f9d92d3de9603e17cdb17b78fd2ac398"],["/page/3/index.html","5ddf19e1ff30eb26e4b0ea1f760aa134"],["/page/4/index.html","5cdfed665d04154dfee0a44e8a7156fe"],["/page/5/index.html","f7799960b3d67044dee7c8974dea6f6e"],["/page/6/index.html","622591df946059a9703419d82023ec48"],["/page/7/index.html","a54796d475327d8f708f215f7b08b38f"],["/page/8/index.html","12c6034a5f41ccd530edd7b6a87ca3d9"],["/page/9/index.html","96057c61b07d63fe30c8b2e9f7811ead"],["/sw-register.js","a624b885536d8f554b3e53f39f5ba825"],["/tags/Ajax/index.html","3d2d4a7d2855ff7577234d18713191e0"],["/tags/Axios/index.html","3b0cb972101f4370fb4664a627c72132"],["/tags/CICD/index.html","8936227c1ced69f2995a3f501665ae6b"],["/tags/Docker/index.html","65cc832dc35cc28998ca2d472efdc00c"],["/tags/ELK/index.html","74c619981ff07643d9ef447b976aee1e"],["/tags/ElasticSearch/index.html","4bc61f970e1bb5cb61b99f4e799addc6"],["/tags/Git/index.html","83ff81f8d975f28d977cf17caa3ed38f"],["/tags/H5/index.html","e827c73a20bc3866fa44976b1b536f5e"],["/tags/JVM/index.html","451af32064abf1ff65e0636d77c09889"],["/tags/JVM内存模型/index.html","2555fdb434daf7c92e1f4a51818109da"],["/tags/JVM执行引擎/index.html","2e5991b32552c46d136f6c32a7dcf055"],["/tags/JavaScript/index.html","bb21fa2ebcba45db722ee553f846470e"],["/tags/Kibana/index.html","ffea3e08f2cdf9046aa8dc0cdd682761"],["/tags/LeetCode/index.html","8b2e6fdf303dcaa62382569769121315"],["/tags/LeetCode/page/2/index.html","6e331b14aa2f80d194402c781ddb3b6a"],["/tags/LeetCode/page/3/index.html","0ddfb8a0b7351d867d6b6e2419aeeeeb"],["/tags/Linux/index.html","7eff0d4a080002d76df7169b8b07988f"],["/tags/Logstash/index.html","3606394021f402d147e6a1ab507d52c7"],["/tags/Mock/index.html","9cf44444dac64155059b521cc0fdb336"],["/tags/MongoDB/index.html","ae8bd2d7e1d7eaaa6de96ca30a01fa20"],["/tags/Mybatis/index.html","e64765757b4ea535d2c3e7171e6f2479"],["/tags/MybatisPlus/index.html","f9f99f56155c6b2549b739aa2426d723"],["/tags/NIO/index.html","e92469cee8fe7a042682ea5e5d0495ec"],["/tags/Netty/index.html","847eeec7655a6bae41d3f674a1356200"],["/tags/Nginx/index.html","e93a22108cc39b4aa9c972cece233358"],["/tags/Promise/index.html","8b032f3a2aeb423aef16fcadd58d4116"],["/tags/RabbitMQ/index.html","db406391bbc2f08485d6408c51de78de"],["/tags/Redis/index.html","f6a0abd5f63b0a3614ddb40d63d222ba"],["/tags/SSM/index.html","d7ec0da50e36672c95689cc4bb493859"],["/tags/Spring-Security/index.html","588db72baab58207d670e554ab3b9c4c"],["/tags/Spring/index.html","de2aa2a15b5b7045a658bcb8820e90eb"],["/tags/SpringBoot/index.html","b7935a34b6c3e260280a4a262d1f71d3"],["/tags/SpringCloud/index.html","f0cee9ed5da68a41b081a696193da170"],["/tags/SpringMVC/index.html","eae62e258624c8f3914e666ed105d87d"],["/tags/Swagger/index.html","66cfae6173dba44a5e3cc72ef86d8463"],["/tags/hexo/index.html","65705d431fe148f87501828c06e303a8"],["/tags/index.html","1ba39e2427a7004f51b9f95e419d3045"],["/tags/jQuery/index.html","766e4bcff8e83e5a7ff653f91051898b"],["/tags/java/index.html","c4db177ae48d61d37c06d5f1c7181732"],["/tags/markdown/index.html","99d08dc6e5a3e7b625c6cfdd5c2463d4"],["/tags/mysql-数据类型/index.html","6a8737d032414e57ddde1e7c9c5f3633"],["/tags/mysql/index.html","edbab2ba8ff773254ea696a65d80ad26"],["/tags/noSQL/index.html","0014ddb3b746fb2b47285753b465273d"],["/tags/typora/index.html","20a559427d8f8a0085100ac7c5626d8c"],["/tags/vue/index.html","ecd6cf8c8765ead988f440a85cab1e4d"],["/tags/享元模式/index.html","e07e47e2deafeabcd6b088b664176e4e"],["/tags/代理模式/index.html","7cad3006162ace964d1e9d806e4a7f36"],["/tags/分布式/index.html","a8b85a5ab2cb3e22013a9f64faad2b59"],["/tags/分布式系统/index.html","87ceef49de4e18c9b659556dd2e87ef4"],["/tags/前端/index.html","14b9e6a9c3e89a8aedf56327bb2eee23"],["/tags/前端/page/2/index.html","2ca4e42c6515e4e63df556b941c3eea2"],["/tags/博客/index.html","29d6c7178278fb7d59a3c0c38d2e12c9"],["/tags/后端/index.html","f3728278a1df59941ef99458e6ab2c76"],["/tags/外观模式/index.html","1d799dad77bdce1763c36fe7afe323b3"],["/tags/容器技术/index.html","b3de004688c831c58a4486175a434cc2"],["/tags/工厂方法/index.html","13577ffa06fcb3bd5bdb560f49a9e025"],["/tags/微服务/index.html","f09564e946f071504423a356b2d2d1c1"],["/tags/抽象工厂/index.html","3a3629632e4c5cbc2fca4525e51f370b"],["/tags/持续集成持续部署/index.html","d759d07193c5d0e955551b203e83fdfa"],["/tags/搜索引擎/index.html","292369ba0beeb8b374539d3a91b6a9ea"],["/tags/操作系统/index.html","8683796a38b4a76a0bd13a3f088d7171"],["/tags/数据库/index.html","45fd0a74b6472c524c6eb71ab89e1f4b"],["/tags/数据结构与算法/index.html","f3972de75f0a089a10b4f6ef0022529b"],["/tags/数据结构与算法/page/2/index.html","8f2561667635a781dd6b8d9966ff938d"],["/tags/日志/index.html","652dd8b305523a22671033627d0d8f7b"],["/tags/服务器/index.html","bcd27e7ccc3772782d6ec6d9575f2851"],["/tags/权限认证/index.html","6208df35173e47f30e14b294597c077f"],["/tags/桥接模式/index.html","584733d90c5c85758aaf4a1852cb853e"],["/tags/模板方法模式/index.html","eab3a1c7e60213db1255dca7a50bbc7c"],["/tags/消息队列/index.html","407815f2b576a024d46dc565dad59e87"],["/tags/版本控制/index.html","07d07fbade7d942f1443ca279eb3fa4d"],["/tags/策略模式/index.html","de8e7f7f5c965fd072622448b039920a"],["/tags/简单工厂/index.html","5eb1b2b86f8127922886651186f6f20b"],["/tags/算法/index.html","1a839539ba04185aef1e0942bd32865d"],["/tags/组件化/index.html","fdf3bb166c93672dfbc0593b2a7be12e"],["/tags/缓存/index.html","21c6643c062c53e0b9a4f5a6e2c8a60b"],["/tags/观察者模式/index.html","69bb917d2e08310f988a776cdfd49370"],["/tags/设计模式/index.html","85833c706486fe2f8b0611ba2edcdd35"],["/tags/设计模式/page/2/index.html","8c4462dc2b55eb9246770c2592f86ac5"],["/tags/进程管理/index.html","963f64efb8c236e28988ee817f7b8c3e"],["/tags/适配器模式/index.html","1a8b3c42c3fc8122ebcfd8f7a432a595"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
