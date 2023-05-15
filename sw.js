/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","e8bcc99170eeaf9654487e87b2c67264"],["/2021/02/22/工具的使用/博客的搭建/index.html","0b3abf9989dc01a624d7f908712508c2"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","2443acf6b2f978f9252f6a0ca2d40c4d"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","b8d5a7b6ac3aa9622747ee3d58c3f0a9"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","069bbb9d6dd29680662203351f0c8275"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","6f708a753c2f71ff4782490b19eabb14"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","ad52967c7e313c185df5326e5277446f"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","8871f6124b99c6a9ffd1f50f49310f64"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","377ffd585a288fe1ebf81e883c6c1fd5"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","81e3ac8362420b6896cdbdcdc31ea22e"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","4b051d8a5b18b2854cb6d4f6f1301b95"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","eac9008b9bdbe97b71b335d2ae05171c"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","b8849cb6d1e586135693d841681c3204"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","fd9f9045d34f0699d3a209babda91a4a"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","3a44a32088d3decc96e4039389d277d0"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","d993bcff672132ed7b2eb08d4820123b"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","0509483cf14de44d962ad664cc9a4ee7"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","0a9ce94fb3be37966cd6504ed19d591e"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","3c91ef4cdb98b58a5f2949990eedfab6"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","3f32653ee3887b34cea8b083d77e21c8"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","21e720ef00f4bc6a864dca6628794b55"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","1ce7db538aba80a6a0c32b2225c5fc79"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","c67272e015b4e5dc43b7d610c6c3947a"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","062cf8c91cdf4cd81e0100802defb8bf"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","34bc6e3c2cdff68481fd02d716e384dd"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","5c02ab239d468d9345adf0ef6a09f0c1"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","cc31a3b33f15f9c1464f0bebdab0ff17"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","370c2df5abf4fd18270fb4c1c81ab90a"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","adec8aa00e9cfc519834bb8df739626b"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","3edb648b20f4b85a8ab929f6632afa2f"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","207446dab1eb9187c56e1051cf62bda9"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","c5f82e7e064ae53edb2b99b6595bdaf1"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","5ea35cae364da203a1ba0f7ac6c5d4d5"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","0f9f59c2f6b70041e2c6e0e197d01429"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","8d989b953e833c3850da7aa0fa1da1b3"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","fa60f9aed3b3cccf95c9a93c0ee4d716"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","db0459011afba809d96d7f810081d8e2"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","262c5ef81624a8d3a5f94c5e0ef7bb8e"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","50f7769ab0d32cafa656086bce8991d0"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","aded82be915576b730099b4fa3756387"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","4f2c3ead3519bef99a9b69fc88af8903"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","c5d496b8819ade7d37bc32b5ecd0ba62"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","e33dc2554108ed30ef23ebdeef8f94fe"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","031baf3a6001793f32c98159371c8e73"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","25a2fac8db09f14971562c33fcb8a452"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","2fbe2e086ebda2737cd755b21592f3fc"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","cefda2e266728ccb91948259de9790ee"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","b1025596ec123dacc7d8af1f6cb7067f"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","5b944404f56222dc53b5cee325a99cdf"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","05d12268bb60afea6490efc8d34715f0"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","0dc3e3777b208c17d1b3729d4c56a8bc"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","1f87b165b42414198fd767bc350213f4"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","1e9bd99c38c1d93aab01817e13c2070e"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","c0cbe6e20ca3893658d222202621f01b"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","c7d77a7146666ec39b486f05e3fc5a17"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","24ab0717975131abe309ad879556a443"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","d07b1a156716d98b80cc2978eceee242"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","c073c1c8193101d6ecd127c81ca652f6"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","8b012b65676eed8336e9fb3a54751186"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","24c365b3628ec76ccadec8b508fdb90d"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","ceb24951c333eae8f52067d8edb71551"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","1f749871f24f229e9f5f948f676caa5c"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","e391d0a8f917625debce587a7ab763e0"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","e475e2f272b9c3abba5190c863d0d5bb"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","c7ba4e984fd24293035f9d3e7f765a34"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","81487fa38b16dc7d8c2dd554d39c2fdc"],["/2022/08/17/前端/jQuery/index.html","0e970dcf148372bf1cf15cc9acf7d98e"],["/2022/08/19/前端/JavaScript/index.html","1168113171571ec8ba37aa4c2cddebc0"],["/2022/08/22/前端/Ajax/index.html","66c8709ccec11e6f5fccd9ad23fe038b"],["/2022/08/23/前端/Promise/index.html","10bb78c3eae1edf6728f9ccccafaa79c"],["/2022/08/24/前端/Axios/index.html","bf58a3e2ce7affad3c5a70888026bebc"],["/2022/08/25/前端/H5本地存储/index.html","17f5ac87811b5fdcdd2a2622b37dcecb"],["/2022/08/26/前端/mock/index.html","2599395aec6e9447701c5f96cfc504de"],["/2022/08/31/前端/vue/VueJs/index.html","aa12c60852d563e4b2f20cd703e86720"],["/2022/09/01/前端/vue/vue组件化/index.html","698e9615eec5c9ed26bce3420794bd2a"],["/2022/09/04/前端/vue/VueCLI/index.html","f717a772ceceb55d530feb821d05d0eb"],["/2022/09/07/前端/vue/vue实现动画/index.html","2e52d6b072f42492ee68f8d2d5411e3b"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","859261638564cb9fa51b994a1e1c97da"],["/2022/09/10/前端/vue/Vue异步请求/index.html","ce1810ba0ca87447caf835dbf6472e68"],["/2022/09/11/前端/vue/vue-Router/index.html","500e178c56b3b10f9c9aa2ad44a7ea4a"],["/2022/09/13/前端/vue/Vuex/index.html","97264263ae6a1d3cfb8680cf31762573"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","b22b73c266aa17b75668da375cdeee85"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","47f036d3d3214e731a50cf7fc6880d6e"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","7da05dc2b6cf89cf3e8762df00819caf"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","0dc642617fdce670c6626017bb87efd5"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","2a73bdec3260a48baa42cb1e06bfb730"],["/2022/09/28/DevOps/Linux/Linux/index.html","fc8c163a214fbd7983e4ec9a81b3145f"],["/2022/10/02/中间件/Redis/redis基础/index.html","e12ba6e68db07bdafadc41cd498d9018"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","2abf4edef64738b0666ba4bdc00690dc"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","198a4e04f5cf9eb5e557faf1f146b077"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","979303df6907081bf9cc336477bb7976"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","5b5c04814e63541b3e1507157c5e2ba5"],["/2022/10/17/中间件/Redis/Redis集群/index.html","f787c52312c7b4bc27e5c615f0e22266"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","f916ac5ecbea702e4c8ac11e53eae258"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","ddd1d911f5b1c406e129ac4444a6e6f9"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","478c67fefbb19fb4969c60ab4748d092"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","93c8039f0355845742a3c09b51d1c2cb"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","1b689d463c1c53a6b207fb76dce08c57"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","1b0d4ef4c953d20160f903416d31e5d9"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","ced9ba75cf98e8deeed80e9781a194c8"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","b12f771a73a3efe0ddb8d0745b9c49c7"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","ce8c41ceef56b5d5a1a18f88813e34ce"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","6f735b5dde2f381a5b66b0910b0fa9e9"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","6658085ddfde5f67eb97d83b3216580f"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","4d26a3c14a05d6441204111f7d5c60f2"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","1b1821d9923cd896aae491bc275e75e7"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","52a2583eac1258bae9abfb37da6760c9"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","d7e43b0561ff1af1294eba6134bff401"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","61536554457e11db299057862d20e29f"],["/2023/03/10/DevOps/CICD/CICD/index.html","9326f2245929d7c7e7601b7b0d2e8b55"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","356438e998b9a4f600b9ecdb90db52f6"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","f3deb4507858f6f4b51efaba72bf37d7"],["/2023/03/13/Java/NIO/NIO/index.html","245cf485382825cc313e7fcef3ff82a9"],["/2023/03/14/Java/NIO/Netty/index.html","d28de2ecd59b1fc3733d3dbe2383563c"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","0d07022e731a15c77f7c9ad54b5ff985"],["/2023/03/17/系统设计/分布式系统认证/index.html","07d443799f1fb5eb0a9edd7923bb6c36"],["/2023/03/19/Java/JVM/JVM概述/index.html","acd2f9ef682c1542f81a2d518004fdab"],["/2023/03/23/Java/JVM/类的加载过程/index.html","7773df6683dc2d91ca3dab0e32282754"],["/2023/03/28/Java/JVM/对象的实例化/index.html","680f7b5078d9213296bd270540366e2e"],["/2023/04/01/Java/JVM/运行时数据区/index.html","7adc0303d12d83dffe599047b370bc54"],["/2023/04/04/Java/JVM/执行引擎/index.html","154cf16ef6e3804c4653a5c6f8bc50b0"],["/2023/04/06/Java/JVM/对象引用/index.html","77fdf2d76cc1b45888bbc0a6711bc229"],["/2023/04/09/Java/JVM/垃圾回收/index.html","cd5af104593a9ffc2a5521f75890a16a"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","08915a2356d6363ce7f1974122d85ab6"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","7bdf0b6338ccc5b7251921b68d29ae66"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","bdf0a78163145c59bd230eac0abeb96d"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","ddfb36f22a5a6cd77d7d4bed92cf4a67"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","09f0e24721b91fdd20c7f540c2d10dfe"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","04be80e0c480809a2625046a47591e81"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","3677367dd7af63f0c50699b282aa3cfc"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","000866507c2ecfecf720b47e78f5c262"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","e98852f3dd705c3bd56957f14165131a"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","cd79e0b1f1c148f5d62cc3e7d860fd75"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","d1fb969ffe70e48bd10b90da9384181c"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","c78f8d1472901e9e1153cab06b9680fc"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","e5c8b60c95a9806e3c59ad05f6d6f206"],["/404.html","3c580cf550eccc413b3d48ea38ac7dba"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","2ee2a9baf39e3a4830e0a7eb6967d835"],["/archives/2021/02/index.html","630e501fbe5b6fca51002cd8efa9e68a"],["/archives/2021/03/index.html","f67e31d1931f25d8ef7f6df97c4bfd63"],["/archives/2021/03/page/2/index.html","625ce96e9e58989216e915cfd97d1b8f"],["/archives/2021/03/page/3/index.html","5974ff362e75b438e80c79014ef74a92"],["/archives/2021/04/index.html","33a98873a68daeb30ade4cd4c60f3b97"],["/archives/2021/04/page/2/index.html","e76abbcb94fedd556d5459beab54f92b"],["/archives/2021/05/index.html","945a39c055e843d8435b6aa9e299713f"],["/archives/2021/index.html","58e9203cb8339fb00858bfc517f580f2"],["/archives/2021/page/2/index.html","0b2caf9366e116d6f18a581a9933d35c"],["/archives/2021/page/3/index.html","92dd69064ae0f61a577fcc5b3c0d3c6c"],["/archives/2021/page/4/index.html","d9a5db6929e71259bc7213939818cdeb"],["/archives/2021/page/5/index.html","b2acc3820cc530fac5a3f88e6dff774b"],["/archives/2021/page/6/index.html","7a68ff662164072b79063c3eb229cb56"],["/archives/2021/page/7/index.html","e7a410238e2c875f05bba1de7ab7bf40"],["/archives/2022/01/index.html","c71f3878f4849895df7355af2ec89f93"],["/archives/2022/04/index.html","c4547b48aa8d9d11eba10a5fd2833b7b"],["/archives/2022/08/index.html","1bffd2898785c60048b9586c8df2d7a8"],["/archives/2022/09/index.html","9423e77616e297f75e40e68e64b26164"],["/archives/2022/09/page/2/index.html","a57e864b19559266b9f33ad7fda6ec3f"],["/archives/2022/10/index.html","a23ce1d5204bacf9fb18b738d8bb8b98"],["/archives/2022/11/index.html","573fbce763e979fe079413464bcae446"],["/archives/2022/12/index.html","23156a35766ba9342d4dad5d5e42827c"],["/archives/2022/index.html","8c80205f5678eaa3aeac73b186cdf22c"],["/archives/2022/page/2/index.html","e7c04e5b510ebdfb726bc058af8f8771"],["/archives/2022/page/3/index.html","5a51c73540b42461bc1239937ff32f8a"],["/archives/2022/page/4/index.html","46de5470641a837503d8b985328709e1"],["/archives/2022/page/5/index.html","9343472c9027456850b11c89b2015b6e"],["/archives/2023/01/index.html","7fa0b29b01774bc9ff8c386b00e0b1da"],["/archives/2023/02/index.html","ddabc043ef869ad92d75b0010040bca7"],["/archives/2023/03/index.html","1d344af4a28e2b691175ad7f335ea5dc"],["/archives/2023/04/index.html","fce8bb0756efe48e40848d0668c101da"],["/archives/2023/04/page/2/index.html","86486be0ac77b6399d534d1d7677f8b3"],["/archives/2023/05/index.html","7362e3f199364a3aeda14d16c3e05c2c"],["/archives/2023/index.html","3a83324d78d9901a4a2501648db6e621"],["/archives/2023/page/2/index.html","f791dce2c93ff6827150464faf50fa15"],["/archives/2023/page/3/index.html","0b2e0c37af08539653be1daa5c2672de"],["/archives/index.html","d5fda893aaa9bf4e5cc5a6f9efc349a1"],["/archives/page/10/index.html","ed1023c2223a0dff585a3c27b757eb8c"],["/archives/page/11/index.html","ca95e591254be786a5bffbb19301b7f1"],["/archives/page/12/index.html","d76526842e7c3109385cdb84acfdf9e6"],["/archives/page/13/index.html","c448f6c0ea53a8e168145ad1ef785331"],["/archives/page/14/index.html","6fcb7897d83ae074202a142c61b66953"],["/archives/page/2/index.html","e70e34be4ef0cfc778a5e9187a63a046"],["/archives/page/3/index.html","b126e9e44b0c3c9f2c228c6d1293428c"],["/archives/page/4/index.html","e7e2765ef50b0b1d3dc725a9fed29a79"],["/archives/page/5/index.html","388bb31928c71f66476b29d1659e67f5"],["/archives/page/6/index.html","444aba993fe53ffbcc87f9d6eb922769"],["/archives/page/7/index.html","df023617eb4ffd3469bf8b5feead3de5"],["/archives/page/8/index.html","3932a867fc2b1d58237ca5f025948813"],["/archives/page/9/index.html","fa9bd15f66bc2ed461c67a0159ec5540"],["/categories/Devops/CICD/index.html","65b4dcc7a8720ee05f885aab29282764"],["/categories/Devops/Linux/index.html","93a20170e835c72a4167cbc6356d7898"],["/categories/Devops/index.html","84ac723e689804a5daf170672421ee5c"],["/categories/Java/JVM/index.html","735160a20d4e3b698c8e6fda32222575"],["/categories/Java/NIO/Netty/index.html","92ee32bfc3f3744c9e0fe7ae57e4d7e6"],["/categories/Java/NIO/index.html","2d24b688e41cddc479945e97b794cc64"],["/categories/Java/NIO/原生NIO/index.html","186b3dfde47ff81833e97c0aaf2b6a59"],["/categories/Java/index.html","f35075f39f0a5703469448e39054a084"],["/categories/Java/page/2/index.html","1f3fd2fd564ed81bcd8d25fb04e7afd8"],["/categories/Java/学习路线/index.html","fbb513db6395dd689accdf998fe87691"],["/categories/Spring全家桶/Spring-Security/index.html","3d59d5565daf31b79c630df3798bf4e1"],["/categories/Spring全家桶/Spring/index.html","67cfe0d1637452fd02bfdf7e4ec816b2"],["/categories/Spring全家桶/SpringBoot/index.html","4ea8ba5141606115fc15f6a6472ed685"],["/categories/Spring全家桶/SpringCloud/index.html","f79c8723c03a2eef2bf14a245cec8b58"],["/categories/Spring全家桶/SpringMVC/index.html","5c145e2cd5b54f22b456253aebf2d405"],["/categories/Spring全家桶/index.html","285ccda2ed6cb1cf42d51cbc66105bce"],["/categories/Spring全家桶/page/2/index.html","cee8c85b9e0da65d1ec5ccf91127083a"],["/categories/index.html","c58a98243d6f259521ec6625b58117f3"],["/categories/中间件/ElasticSearch/index.html","d54b0ddf7ec9f575470df184d9ef1c29"],["/categories/中间件/Redis/index.html","d036c9314a6974f21ae818faed81d658"],["/categories/中间件/index.html","034b51c718e117933b8d77c3eb1a63e7"],["/categories/中间件/page/2/index.html","57d5b5319a5fb9eadea4f2c8e8dd4e61"],["/categories/中间件/消息队列/RabbitMQ/index.html","96382213259f2b4c8820050384bbcfb7"],["/categories/中间件/消息队列/index.html","afabbb0b4047d49ed25f7c713d574e71"],["/categories/前端/Mock/index.html","3088698e8e6c70f71a990ef5f518ca9a"],["/categories/前端/Promise/index.html","ab7fc210a522c7b4ee0544ad5e63e55c"],["/categories/前端/Vue/index.html","0d9899f4075811b53cb4b1472a1d586f"],["/categories/前端/index.html","0d65af2ac04ff0f7107449a2914b40b6"],["/categories/前端/jQuery/index.html","fdcf7102ff7bc21014a4199fa3f96c6c"],["/categories/前端/page/2/index.html","1194f845a320e6ce06e25ebb78cea95a"],["/categories/前端/原生基础/index.html","41df39c2c2964da8a21c48b25e060a1a"],["/categories/前端/异步通信/index.html","d1f0fdb4a646fdd8ecd48087b0dc5cde"],["/categories/工具使用/Git/index.html","4cfa89156ccdaa1ea30df197c6b8a823"],["/categories/工具使用/index.html","35b968c5d88b4e8311697bb64ca99e1d"],["/categories/工具使用/markdown/index.html","af4910acb53a8bac52c7b5fd8703e321"],["/categories/工具的使用/Docker/index.html","d8f19253cbd54516cec0c41840be105c"],["/categories/工具的使用/Nginx/index.html","d46c39eff30503ef2832a4825af3d416"],["/categories/工具的使用/Swagger/index.html","9195d63fbc99e36a8087c552db9c065e"],["/categories/工具的使用/index.html","64215dbeb7beeb81b4f40f7aa900a853"],["/categories/工具的使用/博客搭建/index.html","19915a82dc5ad31ab51e484090402127"],["/categories/数据库/MongoDB/index.html","5a38b4e7d019819b11c39b8a48a88e27"],["/categories/数据库/MySQL/index.html","74fee3a47388203b4886f5758bf8baec"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","fa454d638b2e7c56d9e2ef2609263fd9"],["/categories/数据库/ORM持久层框架/index.html","1f34e976b9f080d9a6aef4d99c6fd8b7"],["/categories/数据库/index.html","d92b6612797bf126a4abda2bc5c93c79"],["/categories/系统设计/index.html","945b7f06fd11efabed1270648e71da84"],["/categories/系统设计/page/2/index.html","4256af65a607bea6cb312f5342cb786f"],["/categories/系统设计/分布式权限认证/index.html","684d596b6d6f141b3efa2066814ad8a2"],["/categories/系统设计/设计模式/index.html","ec9026309c8e58ffbaa0c383ffbe8634"],["/categories/系统设计/设计模式/page/2/index.html","89a994176cb2f33f6e8b36876b2c188e"],["/categories/计算机基础/index.html","950755ea4956822c40df29b6c8b81198"],["/categories/计算机基础/page/2/index.html","46650dc0fca963f237ce1426f8a0f6cf"],["/categories/计算机基础/page/3/index.html","2e04052643d21cbb23dfbd7eff90e0be"],["/categories/计算机基础/page/4/index.html","fcd24196c54ca0c308ae4a8609b5aea6"],["/categories/计算机基础/page/5/index.html","24fc927bc293c4bbc606bb7427a4e5ab"],["/categories/计算机基础/page/6/index.html","aabaec51c84455bbf4c05feecc480e79"],["/categories/计算机基础/操作系统/index.html","905b4d66256b66561ccefcc7e20c2549"],["/categories/计算机基础/数据结构与算法/index.html","029bb6d5038d48c0e9255bbaf885dce0"],["/categories/计算机基础/数据结构与算法/page/2/index.html","b77f8df6041573c67ddce95c8b9bca99"],["/categories/计算机基础/数据结构与算法/page/3/index.html","2982f787b138d9df0fd95478da9c78a3"],["/categories/计算机基础/数据结构与算法/page/4/index.html","87c206f4106367aaec8fd97ce1e5ebb7"],["/categories/计算机基础/数据结构与算法/page/5/index.html","55f38efa7a5b8b27af922d973990e32c"],["/categories/计算机基础/计算机网络/index.html","7d3f0a507dd09bae54a4823e5b360fb9"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","31015d453e43d36acfb3399d350c717d"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","97370f5183e9f66da8e920f2949ccd1d"],["/messageboard/index.html","cb8bb72cd6f148c49fce43a4b4dbbb61"],["/page/10/index.html","205d27dbf5729d186d2ce13087d1582e"],["/page/11/index.html","4afaabe9621c8878dd3763891cb6fd97"],["/page/12/index.html","21f212675c230d366fc8ce7b93904efe"],["/page/13/index.html","f52237feef6af2ef89b4131b1813cc1a"],["/page/14/index.html","66cc4b0c02a6c11ab965d6eb0295be94"],["/page/2/index.html","229cb7f998a3a4ad6193b08f35196368"],["/page/3/index.html","f976c9d8a06358b1b1a6258d76b6d0c2"],["/page/4/index.html","9b79d340d5e6ad49fa8214f6f996729a"],["/page/5/index.html","6bd6852edd96d8ca25a961c88bdc7c18"],["/page/6/index.html","4909c0b6f356fda8d3f167ed2de62550"],["/page/7/index.html","a1430567f7f16bda4a9e9ea89a603e7b"],["/page/8/index.html","9ee33cf49e417c712711677b7ed2e795"],["/page/9/index.html","1826045a252047011b29a18aee2c7355"],["/sw-register.js","844f8b6344cc574502ea4add3dc1973a"],["/tags/Ajax/index.html","36968e9e806eb577e8356ff2a9ba5703"],["/tags/Axios/index.html","29506ceead545a029d5000586b921f72"],["/tags/CICD/index.html","25a1b6b01cb055ea53e93cacbbf7a064"],["/tags/Docker/index.html","ce1c95c0c0ccc2d5a02503579f569000"],["/tags/ELK/index.html","737b6e2d34242ee085102122523eae57"],["/tags/ElasticSearch/index.html","e057fa295e66e2a12b86d306b385abf6"],["/tags/Git/index.html","446b4e9b73f1dec308419cb3efea0156"],["/tags/H5/index.html","4e4b6b2647bd543ab583022ea4f0697b"],["/tags/JVM/index.html","e6f451c840089f3075db7ce75b9e4f23"],["/tags/JVM内存模型/index.html","b8a950c4371d3b74b7d660e8c8e5f6e8"],["/tags/JVM执行引擎/index.html","02d7e60839a12dbd683bf7cf30af9614"],["/tags/JavaScript/index.html","c8f16434c7194c902c51ab24646a8780"],["/tags/Kibana/index.html","453d87f09376b399e247b8b6bd1f673d"],["/tags/LeetCode/index.html","48577aad6e899cf2e4078cbb718ae850"],["/tags/LeetCode/page/2/index.html","fd794144bf3ac9accd1ccd2a71aba307"],["/tags/LeetCode/page/3/index.html","9c74305623785a0693073ce1ba6b093e"],["/tags/Linux/index.html","b859fb02c562c2b136c1ea6f4dccc26b"],["/tags/Logstash/index.html","aec85a78b49182d89c8a94d894fae152"],["/tags/Mock/index.html","fd8cc318c77eac8822e4f0ad49c97c20"],["/tags/MongoDB/index.html","b6ff0212e072ba764316e2bac43e354e"],["/tags/MySQL-数据类型/index.html","bd062c887d56cca7d20f1809d3594b4c"],["/tags/MySQL/index.html","a4f99f19bfa3537837aaf0eeb7a0aed8"],["/tags/Mybatis/index.html","bf0ea75b438b124789a83bda0433e5bb"],["/tags/MybatisPlus/index.html","51041b410507e2bf099b0a10269dd22e"],["/tags/NIO/index.html","20a37ea39e61d5e5dbd110f0819c089d"],["/tags/Netty/index.html","de2c14dba461e847ea1cea0e8162171f"],["/tags/Nginx/index.html","da3253ca413f4a2e61ac2123fa87c244"],["/tags/Promise/index.html","61b0a42fab121f7fe3e1880f4f4eaf78"],["/tags/RabbitMQ/index.html","460e79f5b36136638ddafb189d4b977a"],["/tags/Redis/index.html","30bf99308e944e4b7fe9ea85cb079db2"],["/tags/SSM/index.html","67feb4812ebbb24000c1cab834573cf0"],["/tags/Spring-Security/index.html","fb80c530b647d5f951cfb615e12404f9"],["/tags/Spring/index.html","467232d6c1b410c915fa3faa93033a3e"],["/tags/SpringBoot/index.html","f4a474e284d8645b40f2f3016450464f"],["/tags/SpringCloud/index.html","f5fdc0d7b624ac530968bd61bdb4b4c9"],["/tags/SpringMVC/index.html","120c27833ad3738bb2a27854cb38030b"],["/tags/Swagger/index.html","ad15eeabea73fbd6eb367aba1589945a"],["/tags/hexo/index.html","6da2bdfe75692b3a8702a1d25a12d95e"],["/tags/index.html","16aa3b3ae56659d772a7cb2736f28298"],["/tags/jQuery/index.html","a94c49344b3276aa550b465ac5804a11"],["/tags/java/index.html","fa862f73e7dca5a0d71f5ad40d57031a"],["/tags/markdown/index.html","e95c2ef8cf750509151382e0164f9371"],["/tags/noSQL/index.html","58384a10f8fe7ba536c18cb7e3b8b1bd"],["/tags/typora/index.html","dcc10e8123b984138c4ccc111f7d06cb"],["/tags/vue/index.html","3b702f84852be65b346aa6d2a4a00ab3"],["/tags/享元模式/index.html","49d1528a727efd3bc9bc6968978de280"],["/tags/代理模式/index.html","d476cd567dfa3703d54115986a3b3a07"],["/tags/内存管理/index.html","52e593fb38cc3966c761e6545ba6c861"],["/tags/分布式/index.html","01c54d894ead0d5342611cea276c2247"],["/tags/分布式系统/index.html","cd606b8e951cf5ab9ed95694b662b198"],["/tags/前端/index.html","ff87eea6b2f617aca53cae215e301642"],["/tags/前端/page/2/index.html","38c465b7c1528fb2dea2e092fc2fb940"],["/tags/博客/index.html","247e65923e296cf1963534a182076a50"],["/tags/后端/index.html","4dab97b05e04f633a79c3a7fdbd12180"],["/tags/外观模式/index.html","9a0a3c38b03eaf3ed5935ba12baaa159"],["/tags/容器技术/index.html","7ae42aac99f55db5fab5ae32196d3fa2"],["/tags/工厂方法/index.html","0b89ac3ef7bc99953ec0c97ceb0ee8c8"],["/tags/微服务/index.html","c2cf881deacebfc2d42e7d37010e65dc"],["/tags/抽象工厂/index.html","caf4018b55bc6b31f4506c0f8feaae6a"],["/tags/持续集成持续部署/index.html","ed9230c0e2b2711e57e68bfea517db8f"],["/tags/搜索引擎/index.html","ee16649047563a7576921a023d7f8c57"],["/tags/操作系统/index.html","a695b56f54a385f1b4aa24abb9220e8e"],["/tags/数据库/index.html","6679bec8871dff5e5fb42a1bde7ffda4"],["/tags/数据结构与算法/index.html","ca2c6278032595b212e7a1ade3ccbd8d"],["/tags/数据结构与算法/page/2/index.html","f8242f6867d1852148344fe88d386be2"],["/tags/日志/index.html","4bbd07b24956d3e855d6406ef6444a3f"],["/tags/服务器/index.html","803a6ec02306eea9c322b1d8516b2e88"],["/tags/权限认证/index.html","39e1ce0cd6e20e0fa00b034116f7436c"],["/tags/桥接模式/index.html","6b2711627c1655c57a59042e9d03ac50"],["/tags/模板方法模式/index.html","30ac98e4c99227a2fed873906dde9615"],["/tags/死锁/index.html","21b0316306edd2f99a140fc6cbce293e"],["/tags/消息队列/index.html","fac2d81802e34050fbfdad5ce0f11139"],["/tags/版本控制/index.html","cfb8c098e6e82d10c0cbae6dd7bf46e6"],["/tags/策略模式/index.html","f42c16088b99dc7f2ba18eb80968b21f"],["/tags/简单工厂/index.html","2ea2066cb39210aefdc229391114cea4"],["/tags/算法/index.html","75e812f49840834d1ed5a81e0ec8f521"],["/tags/组件化/index.html","d0d5d2352b9b6d863174942b6a360e37"],["/tags/缓存/index.html","7eb27db4e372c6efe4a6613e38cbbaff"],["/tags/观察者模式/index.html","f2de117006cd0641f8bc9f6ff597da65"],["/tags/计算机网络/index.html","3eadf6b05b4a3dc9ca414b6fda1d7c53"],["/tags/设计模式/index.html","707e00dfa25b4b2709a655423e45fe26"],["/tags/设计模式/page/2/index.html","1fd228a735f2121dd7f53d82d2370171"],["/tags/进程管理/index.html","208c8613077293bc358e02ddf2cae50b"],["/tags/适配器模式/index.html","56994143fd37bab035f1a0c883f336e5"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
