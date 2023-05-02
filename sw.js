/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","7ca75886e8f84c8ad2d941f5171387f6"],["/2021/02/22/工具的使用/博客的搭建/index.html","bf24047e54354589f62c2ccff1d9bf9d"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","26d75c1aabf5774998a3f5bb45c4fcee"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","72310554cb33f8fc1c513aec1727c2f0"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","aa0b7413c727e6399713c02e48a7134d"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","eea3d435a4154d70e322cad903372c80"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","5869d9610909ea0b62699761e5ae4569"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","6dd274c3d5073037e38dc4c686d1e29f"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","cd5096815e83c86feacd6271e80a29dd"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","46006dfd5fe88e58bb8f7fae35bfcd5f"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","ce5effef3e1768562d9b65bc6498987e"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","6127eb3a18b6c20d2aa211237a40b411"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","6c7dee66bddd20aebbcb5380bbbd70be"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","23b32b1d1a27327bf1a6567377eeed0d"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","8ce8cf8b3f1354cb57cad391c52d07cb"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","ba958ad00520ceb5563e80b6c3748b1b"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","fafe448052e3007a875814322642de33"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","daf2a0192960edb271b0aec856671533"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","77a0a890d906248c181b5af62ce2ce8a"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","79c02fb8ebeb0873b0b4d205b79994aa"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","816a57094e21dcbaa2ce22b6484ef147"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","39493b4fbe58583abb11e36264e6d2f7"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","09f0244f26df593a061f77934b4deae6"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","e3adf62fa03b70199ef3b8d84b610d7d"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","c29fa816fe17ffe4b45580a8c75ec62d"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","212b038160b16527c108a74983b595dd"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","104950543ff15240895e400aa1381965"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","c0c07de4019964dd97decd19658e42fc"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","2aa38a848d5866d3d78c962a3b816588"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","c5a665265c595a674c1f3acc220d4aa3"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","ec45d5d9fff395b9d23e3a086fe9e578"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","e1e5f93198ba1eee4dd47df2f1728df7"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","5f84d28052f94baffebcc4c0add6e9ef"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","0b8db0e013961aecf726769b1a8ab2b9"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","15a29e8f263078c86c43069ad72e5dc1"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","0540afe37819c3f646bae91c81167e91"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","1ee1a0bd315a2c49176b1e92c166e81c"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","afb23a252e66bed6aa4bdd982ef86ec6"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","b9d40e9312a960457a73af331fc8103d"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","30624955b449f86e4f199921fca33e4d"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","d7ec3c9e7e28d76c8bcc1b6cfe9b0f7b"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","fca0452a25cc6cbcde71822e10a10b81"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","ce5e7ffdf825b5ecfcb38be15b9582b9"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","088f86896ec879038deb132154947c87"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","a1217d093405a4ad339997212c5fedcb"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","48fff067bab8562bd84dba00950c4fa6"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","7e807f07e56fb1e182bf7e9092d90605"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","67264ec9364af82c06a1bd72e0202f03"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","56506dec70e3675784d0f6136dce2219"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","0cf727ff63a78c51a6451ab2c74c72ec"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","9bb21f67e402a4a25e1e7bebcd6fdc86"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","030d890b24fb8f0fe0d326f8bfb49376"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","99ed8efe7b331c5223c1f13c71bbe329"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","6d4f59c3cb4daa8f4f17edca781672d6"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","92f0686c5fc57274e08e534637b6e208"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","0ec3cf76c9fc3ebdaf8f968a16506ffa"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","d172e26318290c218eab67d69b05768e"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","9119b311123e170f7228d09b71f705d9"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","8b87bb3af992d06e06b81f1a1274dd78"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","76f76d59ea696e1d28ada28e57dad4bb"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","8cca46d977c3711a63ab1e0ab5a2559d"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","6434afef3e78d4f21d7edfd2c139eca1"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","5ba686edc186fb38c98cbb60c0154dac"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","ad662625f5860892780079d2e823dedb"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","12636817d95b54664e16f1f48dcdc266"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","bd4fd9784f1890acab29c3da1be7cc1d"],["/2022/08/17/前端/jQuery/index.html","7d70e78141a3335fdbac24078205ee68"],["/2022/08/19/前端/JavaScript/index.html","dcb37d925b899ff27dd0e25597ded5f2"],["/2022/08/22/前端/Ajax/index.html","82aad511725dba7e04a378a664e17541"],["/2022/08/23/前端/Promise/index.html","81d4f8837c41dfb9c34520a6dd2f6270"],["/2022/08/24/前端/Axios/index.html","0f051477b91c743b7eacc88d22a5dd1f"],["/2022/08/25/前端/H5本地存储/index.html","6840513c2c76057e8ffaffddde1045ef"],["/2022/08/26/前端/mock/index.html","76bcec055f83e9e76858310bd16b3c17"],["/2022/08/31/前端/vue/VueJs/index.html","cc70e79eab4fa30daea1c5b7283705a6"],["/2022/09/01/前端/vue/vue组件化/index.html","0015a570851a1c714855c34ddb01486e"],["/2022/09/04/前端/vue/VueCLI/index.html","c25bf4739bf61c41626a53e412836aa9"],["/2022/09/07/前端/vue/vue实现动画/index.html","b0cb5443ac11e9d41a2b427f517c423d"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","4d486817e405e6935f3b077d1e6124ff"],["/2022/09/10/前端/vue/Vue异步请求/index.html","4898765b95660c6f2e6e671e325b2eb1"],["/2022/09/11/前端/vue/vue-Router/index.html","2ec09bca21d466d529de49010110a0e5"],["/2022/09/13/前端/vue/Vuex/index.html","e07c16549ca686593d7d64a4a07197b9"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","dbedf874a368deb4ae547b6f4d0b4c18"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","e4812bde85da3edc1278452d8d1cda58"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","c32f34e25f71c2f150c05c7fe269fa8b"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","4c9703d86298d55bd39677b2cbf4cfeb"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","2cfefebbf810a2cdf0dc62616f7ee41c"],["/2022/09/28/DevOps/Linux/Linux/index.html","caeed8c92fd7fb1c3a354001f10e3be3"],["/2022/10/02/中间件/Redis/redis基础/index.html","67d619663b2a184d326bedbba9765fb2"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","e41bb5bcc95388dc8614068f658619d3"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","d7db532ffcee350a4e06451ae29b72a7"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","ade46d146304ef302dd1ca367a4c6a36"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","ecab0e1fd24004fba98c7fc3a24c2e43"],["/2022/10/17/中间件/Redis/Redis集群/index.html","3dec60bbf899dcd66c5969198ca89f3b"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","cc1d02cae5399bfe6b46b0f414e8120a"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","0dfd089ad6440eaed5ab84f29be2ca1c"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","f49bd8a201ac7dec4e19d9fc1110c6b7"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","09f92a961419ef6ed68230a07373bd66"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","d7a1428be2cf131bc8eac5ae662bd5e4"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","09ac7d0c7decdad2ef9fca9e10a13e5c"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","85ff8c6db0da34fd90b3c75138980f86"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","e58cd1275fed1fe62f5f33dd486a99fa"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","d2784b89948ee5b848f00fea2ccb4c17"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","27ae873f9594ddc866bbfd80af13361f"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","c395d48301e63a5bb6ef6abb1d5e4ea0"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","6f1c7110c6223b469744db1eb76cd29a"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","c652cb9becee7a41d262d479dec20d82"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","b4c9d729066c88263642e75b1b6d471e"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","40c91fe41e394a5bfd2b7a23b135201c"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","a144dc9af1b43a4afad932c0f16a58b1"],["/2023/03/10/DevOps/CICD/CICD/index.html","97172c462b6d4b2231fc18802cf8c796"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","aa540edf0fcdc531c07228751a720744"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","62a7ec293dd421b2bb87ab119e56a767"],["/2023/03/13/Java/NIO/NIO/index.html","3cd6f67c7494008abb099143a27fd6c3"],["/2023/03/14/Java/NIO/Netty/index.html","7cbede60cf7d9565c96829ed59d0f2a4"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","580503c2033bfb5d7c1ed1a1f4c2f435"],["/2023/03/17/系统设计/分布式系统认证/index.html","1b1874a0bbf0eaa97654badd54090a15"],["/2023/03/19/Java/JVM/JVM概述/index.html","ca850d3f92cc9c73471111affd779728"],["/2023/03/23/Java/JVM/类的加载过程/index.html","3ca252bfe512b50347a6c1faca4adabe"],["/2023/03/28/Java/JVM/对象的实例化/index.html","b8e7a74643dfa263d1ed29c297d0b1b6"],["/2023/04/01/Java/JVM/运行时数据区/index.html","ec18f7532190154608ebd92a8cac1218"],["/2023/04/04/Java/JVM/执行引擎/index.html","791ece1dc289de897ad6a3808a2ac4c1"],["/2023/04/06/Java/JVM/对象引用/index.html","8d330761b7f8c56f5f10b8114cae6384"],["/2023/04/09/Java/JVM/垃圾回收/index.html","a2f68c72746c26adf6265b6a53678f29"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","7529879cec8cdec5f2effab242f3ff99"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","1a94cf4a881be06973bf0934fd2aad5d"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","e3e3560d7a659c800bbd81350b24d3cd"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","f30603c9e8f3ca72517e82b7c1f469f0"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","e946293f4c894334cdc70f24cc9e610d"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","ac43e763671ef1cb382230cc06daca83"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","50dd1a30fb6ca61e7b1f580f86e56135"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","adb58f46832915817811cf8e14eb407c"],["/404.html","0c377da56229c8b8d42ceae331abb0f5"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","0c496df0184394425d29d7791e23e6c8"],["/archives/2021/02/index.html","4145a038a4940efc72fee2cb8f42543e"],["/archives/2021/03/index.html","b7d68ef592c7aad04dd35be309275fc7"],["/archives/2021/03/page/2/index.html","b406d6b75ec939dc6568f62249d357e2"],["/archives/2021/03/page/3/index.html","b83cfc6be52e6291553c9aaa8d949f3f"],["/archives/2021/04/index.html","dc98d2e0d4e9d71f6290794dd49f2925"],["/archives/2021/04/page/2/index.html","dfa2142b3f5af4bc4db993f93f8f9cde"],["/archives/2021/05/index.html","71fad0b3cc0058573dc3da5864e64c4c"],["/archives/2021/index.html","011474a23ba835d21365422ea5a0dbcc"],["/archives/2021/page/2/index.html","98bd025387fbad0806a3381976c6be39"],["/archives/2021/page/3/index.html","56904cac84c51b06b0f1a8993126e832"],["/archives/2021/page/4/index.html","06663ffba4820f7c002c437321772e9b"],["/archives/2021/page/5/index.html","d6f4f3cae7f66375369e441d6e7a2587"],["/archives/2021/page/6/index.html","8ec821598974b9b688cdba126a668c42"],["/archives/2021/page/7/index.html","04c298221b3e937fe1f7329f7c88953f"],["/archives/2022/01/index.html","f4edc9518b7f6b9dc2064c6a7a7cd01d"],["/archives/2022/04/index.html","1626e630d1f3fe5e6a824e61b499801f"],["/archives/2022/08/index.html","89c333fcde7157a10e585928cf2eab09"],["/archives/2022/09/index.html","b69f623a4c95f662e0ad023d24925cb4"],["/archives/2022/09/page/2/index.html","98689992e9d66a9051007d5c9b08b70c"],["/archives/2022/10/index.html","a5fdb55e8bb4b141fb9bc8df390712f9"],["/archives/2022/11/index.html","ed1ff767f9d2297c00dde573fcd339ff"],["/archives/2022/12/index.html","5ecae1922d6369034c8ca4bf5d800b4b"],["/archives/2022/index.html","d86e0681f2d14d485a9ea9eb2cb0d0db"],["/archives/2022/page/2/index.html","f4465464191e2b0683aef6ad7c4eff0d"],["/archives/2022/page/3/index.html","4eaffcb130ecfe0a40b1f75789d52f98"],["/archives/2022/page/4/index.html","b6beb54d4e91210599ba7d41cd18b324"],["/archives/2022/page/5/index.html","9ac259614f40e0a3ef5b220d1d6ebace"],["/archives/2023/01/index.html","29e0ac599aba306c1f338f7a867d0a43"],["/archives/2023/02/index.html","ac06a3a3bc79e2d9da5789ac319e351c"],["/archives/2023/03/index.html","b71d3a22035cfab85f8e48fe840c94e3"],["/archives/2023/04/index.html","6b94e1d90fc2131fbb3639cae853562b"],["/archives/2023/04/page/2/index.html","e51b42824fef313fef1403ed56f3ee24"],["/archives/2023/index.html","e163eacc207e0480ef8f942d674b400f"],["/archives/2023/page/2/index.html","f7288373fabafd318196d38370ccd4bc"],["/archives/2023/page/3/index.html","8b42787a2fab2cafc5acba477c335e88"],["/archives/index.html","d743d7624d6cf25cff53668fc871719f"],["/archives/page/10/index.html","6f3a616935f48d3f2f05a7a8ac75d263"],["/archives/page/11/index.html","a5eb4a2c9ad29b1bf018b21a279b692b"],["/archives/page/12/index.html","3d99bcd84d39a696401bf69e7f3cce43"],["/archives/page/13/index.html","a73cd8ba485f7517234b91da87dc4d96"],["/archives/page/14/index.html","d4ba3422fdcbe84a6aacebf816697f6a"],["/archives/page/2/index.html","2c2d5d9ddf26c58d9d38545ddfd3f6a0"],["/archives/page/3/index.html","dc46dc218bcc36c5bc5813c4d4559d0d"],["/archives/page/4/index.html","fee00d5a00d46507ef733a23de04f3ca"],["/archives/page/5/index.html","9265cc9755b369a71f39a075c7c69835"],["/archives/page/6/index.html","45c4370fcb6be0011c264d451537b7e6"],["/archives/page/7/index.html","b3dbb0f0605af51e8d45678bc4fce3b5"],["/archives/page/8/index.html","97215994cf894c8b7eae526afb5034fb"],["/archives/page/9/index.html","7f6ce055a731c22d19251e392a5e89e7"],["/categories/Devops/CICD/index.html","3ba2f530cf11418076cc7c0728a72952"],["/categories/Devops/Linux/index.html","4493eaea2cc10eb653f43f9f760560dc"],["/categories/Devops/index.html","20e0f6503b738177bb73282826fe9dd5"],["/categories/Java/JVM/index.html","39de3b13893a6f2e60a8cfefe5344cc5"],["/categories/Java/NIO/Netty/index.html","b9f15f97e0372a8c6d90fbcd03dc5048"],["/categories/Java/NIO/index.html","fe68aad5bb9039088bf653b02c0a52a4"],["/categories/Java/NIO/原生NIO/index.html","d14b8889c44d62aaaffb413a3ca946dc"],["/categories/Java/index.html","a6ff291d6d06d3ee06dcd1b7d8e06121"],["/categories/Java/page/2/index.html","e8bc82452293fe772c042e5276d08353"],["/categories/Java/学习路线/index.html","d25c559937196313c3024d48081e4fbd"],["/categories/Spring全家桶/Spring-Security/index.html","e53f7647384635b556831716208af8b3"],["/categories/Spring全家桶/Spring/index.html","ba4b46726eaa144b1b4f29dee01c6796"],["/categories/Spring全家桶/SpringBoot/index.html","38b56ee94a26b36fe4ba239ff2ccd1b3"],["/categories/Spring全家桶/SpringCloud/index.html","b66a8c370e1846f571035e64084b8371"],["/categories/Spring全家桶/SpringMVC/index.html","8bb15784f36e7fd4dd7ea3811f44d3b7"],["/categories/Spring全家桶/index.html","d42dae998481ff9d540c62e4c74a42f9"],["/categories/Spring全家桶/page/2/index.html","bb0152249f25219049fba0280a49e2ee"],["/categories/index.html","1636d2fa2471b1b52ae95c1c911bd62c"],["/categories/中间件/ElasticSearch/index.html","527e267e63504a11e59bace6af584a2e"],["/categories/中间件/Redis/index.html","d4e123db6d979fac62b54fee0c9bffeb"],["/categories/中间件/index.html","8b2c95e18d08f361b175fc5d7891b5c4"],["/categories/中间件/page/2/index.html","b782fb7dc09ff01470ee3875e3633ad0"],["/categories/中间件/消息队列/RabbitMQ/index.html","087f39fa3283c66774e967954e1d7d32"],["/categories/中间件/消息队列/index.html","87ac155c669fcf8cffe64f68a5df758f"],["/categories/前端/Mock/index.html","7efa4ed4e43a0ae67cda334a7ab1c5f0"],["/categories/前端/Promise/index.html","c1a436f8449ef784b8f7b7623d48f047"],["/categories/前端/Vue/index.html","daa7ac4856209285bb5754dee0a075fe"],["/categories/前端/index.html","03819f12bb7ea02e50665047783960b3"],["/categories/前端/jQuery/index.html","2724edc0c522d0c72bcf6fafe0d2e34c"],["/categories/前端/page/2/index.html","867f97bbff86cdfd2e43e4728af3a872"],["/categories/前端/原生基础/index.html","27522727eede4bc546020ef6341335a8"],["/categories/前端/异步通信/index.html","b6194b5b3c54c003e346bf327af33a47"],["/categories/工具使用/Git/index.html","7f2fc933b5e2e21a9b5f49f4865cc1ab"],["/categories/工具使用/index.html","d9c3672dd9c3955fa75548953781ff6e"],["/categories/工具使用/markdown/index.html","54ec5bc3dddda07837963a8f80437672"],["/categories/工具的使用/Docker/index.html","1b5d88f9d64d912b15370baf2fb26984"],["/categories/工具的使用/Nginx/index.html","c4790800bbcf3c005c6fd0481086ef41"],["/categories/工具的使用/Swagger/index.html","9bd424d0ddfd636073f4ca3d43a11b28"],["/categories/工具的使用/index.html","f28dc5ca2598a7b7bde45235864255d7"],["/categories/工具的使用/博客搭建/index.html","e7327dad99ebc7ab7b7b6031a5aaf2d6"],["/categories/数据库/MongoDB/index.html","9d99e5db22f8659236b4c37281d63c99"],["/categories/数据库/MySQL/index.html","465fc632ae70cddc7db075c07980a3bc"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","4179f4b281f211185c4b43ef5ba7262e"],["/categories/数据库/ORM持久层框架/index.html","9736b93e81aa25476cd99931ce257d5d"],["/categories/数据库/index.html","efa290d0bcfebfc9e3d96534c9f27481"],["/categories/系统设计/index.html","ebbf53292d97eecfb2bfc069b4415074"],["/categories/系统设计/page/2/index.html","6dab4e4bbbf1bc13bf733ed5d2ff98c3"],["/categories/系统设计/分布式权限认证/index.html","9fef13a40a14811a34f354e6a2ee278f"],["/categories/系统设计/设计模式/index.html","e15483d15ccac64dda04c068a7c8561c"],["/categories/系统设计/设计模式/page/2/index.html","ae24cafef6facb6d89bf8512f089d268"],["/categories/计算机基础/index.html","5e2ee5e84face17737d1449dec5ada9e"],["/categories/计算机基础/page/2/index.html","3ff121d6a21994291dd56ad3091b7876"],["/categories/计算机基础/page/3/index.html","c39cead99c8fcea39e15ee62f37f9364"],["/categories/计算机基础/page/4/index.html","a24ba82646e604d8780f0d29e20b36fb"],["/categories/计算机基础/page/5/index.html","a1ece65108be0123720bf3cca95bbaab"],["/categories/计算机基础/操作系统/index.html","ffb7522cd24da195ade2f04fc81586de"],["/categories/计算机基础/数据结构与算法/index.html","85ccdfd9be7bd58cea8b893e2fbe3ed2"],["/categories/计算机基础/数据结构与算法/page/2/index.html","0cdae40452e4704a730f12f9bf417d8c"],["/categories/计算机基础/数据结构与算法/page/3/index.html","cc6d76d979995c618d3f5b90a8df174c"],["/categories/计算机基础/数据结构与算法/page/4/index.html","79a473b2765bdd93bdad2dc6602d8041"],["/categories/计算机基础/数据结构与算法/page/5/index.html","2e81000a8b2a5e20a13013c52a51762d"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","69b3432d221ca8b590d57387dfc9ba65"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","24f66ad98b13176aebba3e11d1b27ca9"],["/messageboard/index.html","4d122c46cdf1644c40a2e1adb233ef76"],["/page/10/index.html","7cb914d396ca144544c14484b7c25536"],["/page/11/index.html","cfc3ae69a23e938965a818a21f0f309a"],["/page/12/index.html","a5d3f0dd9c0ef760b9da4c59f6cb3fdc"],["/page/13/index.html","6aab4935c1aca6cdec1717f71d4d951b"],["/page/14/index.html","fa4e6f3f29f216b4c21a49af3cc7480a"],["/page/2/index.html","af6275e28328892d5a6d2c08114ff2b7"],["/page/3/index.html","43b035567fa89e7031d70ea01f89ea11"],["/page/4/index.html","b531b9b213f06f03f59395bd3a7f97f4"],["/page/5/index.html","7dbc03b9017a18db8a7b5811214303a1"],["/page/6/index.html","ec0fc2ba7e6429a727adbc4b997c4e65"],["/page/7/index.html","5ce007f9094703629de6880a7bed9768"],["/page/8/index.html","54af6557b3a27966988c791a255f917a"],["/page/9/index.html","d8a73a9162ca175bd0794fe1417d4c86"],["/sw-register.js","1975abf85b1e7e85ee6033c8ac1dcdaa"],["/tags/Ajax/index.html","3e1849c9cf4b33941195585019d7952b"],["/tags/Axios/index.html","5d8b54ab08f45ba041453ab2c12d4b89"],["/tags/CICD/index.html","5d92a18293a7f93a47510e79d8e5b945"],["/tags/Docker/index.html","7421824262b29f6d8000ef7923ce9760"],["/tags/ELK/index.html","b27fa98f800d8bd0532c16f393fafd10"],["/tags/ElasticSearch/index.html","26fe8ac78fb4eabf2c090869932a416d"],["/tags/Git/index.html","6f318c4f08947ce43ffd296bf6719c48"],["/tags/H5/index.html","78bfa71378c5d884e4a060cd9b6df5b8"],["/tags/JVM/index.html","24889c8e2b56f03fe62bb5068f826fef"],["/tags/JVM内存模型/index.html","516330ba374d5d3fba6d6d23cb33a1ec"],["/tags/JVM执行引擎/index.html","1f7c6695e45e23b0bbc4e6b18b7e8cac"],["/tags/JavaScript/index.html","e4e615a408941bd9ccc7bb41724f5002"],["/tags/Kibana/index.html","810b9bfc9bbc270655343c126e0318ed"],["/tags/LeetCode/index.html","8c9b5714551873ddf53eeb20af3de93d"],["/tags/LeetCode/page/2/index.html","d35ccb292464f43b6cbb92fb97738055"],["/tags/LeetCode/page/3/index.html","9aa923f4d63f849c37069ce80b1e46e4"],["/tags/Linux/index.html","66409870eabf16531e23de6ef912f182"],["/tags/Logstash/index.html","8c25dbfe9d83aabae64147c7d0dcd9aa"],["/tags/Mock/index.html","46d0081b8281322c4b250a11fdc5a5f3"],["/tags/MongoDB/index.html","74e2f9a47162e49eb95f34e779018e94"],["/tags/MySQL-数据类型/index.html","542c310832be483744b7fa297c8bccef"],["/tags/MySQL/index.html","d48249f2e0d6f2cdbaaa979e47b7f158"],["/tags/Mybatis/index.html","c60f4013ee84f0c87ff6274ed1ce7757"],["/tags/MybatisPlus/index.html","d43fb8941f9a2cd5dcc79d951221d263"],["/tags/NIO/index.html","aab8abfd693b6f8b8a029467494b5138"],["/tags/Netty/index.html","7ff0c4505dfec93933da626c7af5c36d"],["/tags/Nginx/index.html","35cdaae75f1d94aa9e06e5a6abad6d96"],["/tags/Promise/index.html","afd0ec2a9e2a811a82bd3cc6d0970bfb"],["/tags/RabbitMQ/index.html","5bf26ba4e118214ca7c842d7f4258b59"],["/tags/Redis/index.html","6a98fee86bbc7629a27297d1420f982f"],["/tags/SSM/index.html","16233e413724a16c7e7fbcebf90de93d"],["/tags/Spring-Security/index.html","8d61da99ecb4bd72f1d821a98d6c6fa5"],["/tags/Spring/index.html","e809269d45760d81650b0809974fbff8"],["/tags/SpringBoot/index.html","046eab32122b128c5d296cd9460b2641"],["/tags/SpringCloud/index.html","32f90e18323b8bb69a7678cfa1ed9567"],["/tags/SpringMVC/index.html","0fc8d39b585394d1726487c149727093"],["/tags/Swagger/index.html","617def93c7a176621eabffd4e8aa31c5"],["/tags/hexo/index.html","4d1812f5506617c2d1c8c89efb7e5082"],["/tags/index.html","00799e629d0db0abd2de7b819fb5c838"],["/tags/jQuery/index.html","1e412898081550e26e4c3388a406717b"],["/tags/java/index.html","fbb5f0a2049551431a2309b12c06138b"],["/tags/markdown/index.html","88ac35c2dcd32f4cb972ed3f4ef30f38"],["/tags/noSQL/index.html","05d57d7c5b649145c0f4b9ca2d9cc8ee"],["/tags/typora/index.html","e5e5637a95f5ed63d541d18eada1254c"],["/tags/vue/index.html","618efd8a4d1ccb50886121df7bdc9bbf"],["/tags/享元模式/index.html","dfdcb944c1211b6993e50453fe9c1cc8"],["/tags/代理模式/index.html","e2cc258dea29d10298f1b9e6a41762ba"],["/tags/内存管理/index.html","59d7a045110c7c5a283bf6c815dbaa14"],["/tags/分布式/index.html","3696d7d947f912600536a53618d4d15c"],["/tags/分布式系统/index.html","b35a0218485eecf358273568367c3095"],["/tags/前端/index.html","e318397c1a3d6fa4b496a66199bc80c3"],["/tags/前端/page/2/index.html","6c79eeb5dffc099b4553a87252190cbd"],["/tags/博客/index.html","d5b3ad1993e58daed65f12be05cd214d"],["/tags/后端/index.html","cede9e0166dba60858d8347d794a705e"],["/tags/外观模式/index.html","c36601422401086f81d28931052c0de1"],["/tags/容器技术/index.html","e920045391e07fb649d5be7afa62e411"],["/tags/工厂方法/index.html","adf6e1fc1592a632080a41eac4ef4cf5"],["/tags/微服务/index.html","c24f9b8bbb90983eef49012396d4353f"],["/tags/抽象工厂/index.html","5e4d4346b125fb03c643887cc4035890"],["/tags/持续集成持续部署/index.html","025cacee4f6c6ff441b83364808fdb32"],["/tags/搜索引擎/index.html","d2988ad46aaeedf80a633c45246116e7"],["/tags/操作系统/index.html","5e0bdb8b8b3f17c950868e89a22e2e5a"],["/tags/数据库/index.html","8acb95f4c821005c9f5702c7e130bb0c"],["/tags/数据结构与算法/index.html","cdf0380b08c8e8b4ad395f47637752a4"],["/tags/数据结构与算法/page/2/index.html","c4cf82bd9536e00637d06143fdd11e4b"],["/tags/日志/index.html","01a4c62752dde97c281ed7da3306c33e"],["/tags/服务器/index.html","c7845de4ef63d429110e7ef8211f965b"],["/tags/权限认证/index.html","414417e87482c650ba9f32d70564d405"],["/tags/桥接模式/index.html","3f7e9f806dc406e0e4c5fb9e6c4d9b5c"],["/tags/模板方法模式/index.html","f5790cf9c413bcae849b6f422d14fd4d"],["/tags/消息队列/index.html","f744f7daeaee0fd2ab6dd31d81e73a56"],["/tags/版本控制/index.html","9d4ae32a349a1cfaf678cd37a9fd9b41"],["/tags/策略模式/index.html","fdf13374223197170c8e8e36e78bc3a7"],["/tags/简单工厂/index.html","773ca120b683a66101136a1d8b151cd8"],["/tags/算法/index.html","0a68427495f52d59c5038d7fec0ad5a5"],["/tags/组件化/index.html","e23018478a076e26d4e89332d1359384"],["/tags/缓存/index.html","fe296328d72e26d60877aa9b7de10e7b"],["/tags/观察者模式/index.html","df844cb6e70f23469c746e718e930193"],["/tags/设计模式/index.html","0417f8d661c1de05107d060c54fedf4a"],["/tags/设计模式/page/2/index.html","78f48030560ec79beac144dda244036b"],["/tags/进程管理/index.html","841f08c700eca2aeb061cda204d57588"],["/tags/适配器模式/index.html","2dcc3ec17381d64cd0ecf0e81693f932"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
