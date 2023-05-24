/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","66b2188d2eabbf98054bd6e2833f1bcf"],["/2021/02/22/工具的使用/博客的搭建/index.html","13190008d9dde8bf35bc4e864361fc10"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","f74584929c4873d277e58667fc946048"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","dd2ccd40b018a16613d41d0accda15b4"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","e9353a1865413a773c86d68aaf381e25"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","a26434d26e63eb796cbe9cd238592178"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","9c013ac4c3da452224a728337bb0a9d2"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","45755133978250f170f7b297bb8f81da"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","a7d66cc1b156f43049918a387ec26c83"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","0f10e708741a3805241dd338ee2a2dcb"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","9208fd71dfa07ecb883b26c0ce579687"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","d03cc004eec34cdee5b0fa19a28ea8b8"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","4513eb1f16629982885cefa5bcc7291a"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","06b1665ec7d404004e7ded53dea8ee61"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","b61c53687040be9834af6b57bf06c866"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","5cce391f16800b9878d6fa4182008a7a"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","e0120e83581cb8cf67277065aa71f85a"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","cd37fba92aed65807b450c748a778eeb"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","6156fcc5f7a224677d62eb1512f4dc60"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","2f22e96f42314b823765bf26f3e1eab9"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","662d88f2512dfa2d09a371af688d54df"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","204c2c25fd6e55b44f277bf4e5c7b090"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","5d3c9d9696eedb437b08a2c39024fc1c"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","bbe8f152eed7157b714e1b546004b46a"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","fc8d53854e925bebf9471a805ff9f873"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","8ea862cd523e0288758f83b20cabde68"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","9138503a23676d739fad4d32dee97416"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","3d537a3cff98e99e96410c815d1a3827"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","3778e1572a2da35b9f62fedc02226adb"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","672af5bcf942bdc9b517abe071c56d44"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","1182f8f4ff0e57bb618f3680dbf9136d"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","7b724ceed6d05ce45c0033005a689a98"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","1850c5ede35dffb289a2f7bf6464904f"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","7301807102f891ce47feb79f2ef8fa13"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","1353aa7b033be80cc86b0c1236bfe4f7"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","ed8baa2e6a8c82ae528b894df12a1825"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","f293648e9ea36d2248785b9b71ac2777"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","9a8a8f2e5a1a0338d28cba4441d8da71"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","d9e0996963d42e42b827bd50c7ce126c"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","f90652280da8d20d4643e265ff14a931"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","31c76af16a1943c3b44d374c8285743d"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","651409785eb7b741d256523cda607305"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","53625ab4709d6bc4b9d865729fbb920a"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","838a09efc71f8e361b5ece6946242f39"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","015638eecc90b9f8619c91dfb738b70c"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","8475427bdb57487d016de43e2409d1eb"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","45e75ee0692ed4c6f37b8c8835333a7f"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","d2468f02ff90c0788d37034b90bc9827"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","b10556638efe327dca37d19eda08fde4"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","1f59985585b560a46f1ac9c743a01f26"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","813a79ae389355c8b7908bb8d5acee33"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","81021db09bf5a200ba4a628cf1cef26d"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","44d5e844b1ddba61da06d9cc40a4c2de"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","e3ef26dc45198e8494cab4275c87d2ea"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","31fb6b15b43e1ef6286c7ac5a4096309"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","5c436ca03c3fcba5898c006f698ab143"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","94ed5f98adc63361aa4728848005cd8b"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","7a1f86407215f72454d0b8e369a068f2"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","e8b2a9acec3f200020c9a8ef588de9bc"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","794da16a10bc6f9244e83e3acbac70cc"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","07bb7490ae6b3af7ca04ff9e6287d1d4"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","ebe56b10b23fed5af1559efc82bf2f25"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","03b33c625ee84c2c55b11e124a5fcfb7"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","8f67a6ec0fe4c47a02e1cf81d21d0876"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","534b9fd0170f80a8b5c5304b4166bd57"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","f832165d0c4a01a0f5103ab03cf42fb4"],["/2022/08/17/前端/jQuery/index.html","02f1863f8c3a0889bacae29d825f1873"],["/2022/08/19/前端/JavaScript/index.html","c5c943cf58dd63db395230cf1ea9cbf7"],["/2022/08/22/前端/Ajax/index.html","6c96a61bbf2e0058594deeb6ef5209ef"],["/2022/08/23/前端/Promise/index.html","33904ef78fa8e885e49a242e47e23387"],["/2022/08/24/前端/Axios/index.html","288acc93f38605fd4a083817898ca543"],["/2022/08/25/前端/H5本地存储/index.html","dca09f666652887f2b0760b0bb2459fa"],["/2022/08/26/前端/mock/index.html","659e5dcf913b7d81281d605faba57a5a"],["/2022/08/31/前端/vue/VueJs/index.html","4593ebed5e0899da4e9832eed0f9f70c"],["/2022/09/01/前端/vue/vue组件化/index.html","fed785b733f4986bd8980e7fef76d8d3"],["/2022/09/04/前端/vue/VueCLI/index.html","7d75314c3f5c99dad60b4e5e8353cbb6"],["/2022/09/07/前端/vue/vue实现动画/index.html","010eb7ecd8a9ab73a8e6987305a0e7bf"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","c1a0498582233c5f7d100d0db8bf193c"],["/2022/09/10/前端/vue/Vue异步请求/index.html","b74403c76bff0afba43bb62db0ce4a6d"],["/2022/09/11/前端/vue/vue-Router/index.html","d65e7775eb33c1416460f70e0cbe35fc"],["/2022/09/13/前端/vue/Vuex/index.html","25496c243d37c6b75fc7dc4dc9476808"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","6e197711ef08df93987f0b3b8348c239"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","c846922a65f99d1a9057a6353be9ceb5"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","62e37aff1ba178f452312e016308f333"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","36257c15bd0bd1f6796da5b8ae2a1b10"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","cd9fe0240eb3f16b45ad7b04887b7e05"],["/2022/09/28/DevOps/Linux/Linux/index.html","a1ce039e787f2065a277b5ad08d4b74d"],["/2022/10/02/中间件/Redis/redis基础/index.html","44289eb70bd63e984bd17b8babaa5f54"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","4b2336f1f1041287a0d8c64f5168aeae"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","16ba87d0af62c2478b4722f652f3e7bf"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","be36b4a0d016e15ee45093e9ec2fa1e9"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","cc52329b98d06bf6f60165f84e632814"],["/2022/10/17/中间件/Redis/Redis集群/index.html","2382ceb27c86cbf52dd5af72bf564778"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","7c37edea1383fe79a320cead91e24ce0"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","5bc6655f70f3bb0368ac9f33999631ae"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","35550dfa7c9c81647f08915685b92cc9"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","dda24ea2f2af7da2def94e36e1fd351b"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","464d9544c468335ff95cbfd187722297"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","7a744ea8c5e076d609ffde7a08d90667"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","9d00013465c3bf123090f4e0f76720a9"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","b389d936acc3ae5a8260a576d0f32ea8"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","c01b8e973bb7c204a36926c495b86fe6"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","fb37f7f2418f726e5a2f05e43cf56f1b"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","7bc39cc0b7a6862de262fad76818883b"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","fac2ecc03787521c2108454d74af758a"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","1e21fb7de5e3826df628c6ee6c18797f"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","64c5c785608b14c42e86b34010cc7fe9"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","0bb5671b5bcd9cfdf5da7c267af5fdc4"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","fc76acb9c43d4e8b88901ec4d8c260fb"],["/2023/03/10/DevOps/CICD/CICD/index.html","9ad794a14902cd57d555e37469e9445e"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","d248457e99722f1173b889ab90d00d36"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","3de6a98b9e4c35584d72361b96cc344c"],["/2023/03/13/Java/NIO/NIO/index.html","718efe4085081bb3d25e0a2f36f6ac9c"],["/2023/03/14/Java/NIO/Netty/index.html","9204a73dbe402d00597eccd433e709c3"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","a0232be79b9f811c981849413f32d1e4"],["/2023/03/17/系统设计/分布式系统认证/index.html","9a6df800e28909d241c175ffc408b724"],["/2023/03/19/Java/JVM/JVM概述/index.html","ec2fec4d6b60517360f3b8c640f15ed3"],["/2023/03/23/Java/JVM/类的加载过程/index.html","dbc0cd0b337b6c44c86f0b0be4b4d145"],["/2023/03/28/Java/JVM/对象的实例化/index.html","b85ea98380567a5be7042a074dd4b262"],["/2023/04/01/Java/JVM/运行时数据区/index.html","866bd643ce7a174aaf0618fc0f45a40e"],["/2023/04/04/Java/JVM/执行引擎/index.html","4e28767574f24bceed60485cf9719cef"],["/2023/04/06/Java/JVM/对象引用/index.html","6cf5160bf43b4aff57be2f172350ff8a"],["/2023/04/09/Java/JVM/垃圾回收/index.html","635e2b78d38b42ee624b36526c592c47"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","32676ebfd318a45959166c38f726595f"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","762ec822c1500d498f6dea23862577fe"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","a8071f1daec52aa34144955673b231b3"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","9c8fdc3268bf08d34113625f4f7299a3"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","a5e69de37783b3d0830017c2013bc506"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","4dc7f09df2311b4f2d75dc9e8a33e11e"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","a511b44adc449d470bf2240ba8479046"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","6fdd1da1dc8f24b2df0d9550c3d4d81e"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","d8846c752584e28ec0659251a90840d2"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","64ae9ef0ba0305e61cb66f1babb49028"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","9c8f986d79b2c466f0c8d476c614f90a"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","da479632c7545ffd9e38cd9c46f7737d"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","e60b5f969bbafcaf06203c2632664551"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","8f564560d2717be2b4f7d2b51f206025"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","a42bb88309b4f6b148c6af03779eb016"],["/2023/05/24/面向连接的传输：TCP/index.html","e6b7a6c2d4d409e517888c7825f0e43d"],["/404.html","ba9c348632f8f4013c639db2a243b560"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","a6e61b2b7d188f71b1f0b7801f22edeb"],["/archives/2021/02/index.html","4f57fda628f6bf49538947f2d303007e"],["/archives/2021/03/index.html","3130ac5febbac7154bbe1d7047e60561"],["/archives/2021/03/page/2/index.html","eb77882b175c41a1d72c59b26883f07f"],["/archives/2021/03/page/3/index.html","5a8aad19018da718371a8d4276d80497"],["/archives/2021/04/index.html","bb48ac3fb17b3a66288aa8cd05daa985"],["/archives/2021/04/page/2/index.html","95da1c4027639214368781da69c88df9"],["/archives/2021/05/index.html","f86e0826934a51e10dccdc6942abeea2"],["/archives/2021/index.html","bb884d5b6d3f578f7148b0e210c2b0fe"],["/archives/2021/page/2/index.html","1c1e8393168b268ffd6441c03ce142c4"],["/archives/2021/page/3/index.html","e8cfaf12792f16f213166c1e37dda077"],["/archives/2021/page/4/index.html","9fb0dff6bec9da18dcd435a4452aa7b7"],["/archives/2021/page/5/index.html","a1a8e268c4db3c88cce8d549bb1bfe18"],["/archives/2021/page/6/index.html","2d4ad672378bdaca142ea243ffea34a4"],["/archives/2021/page/7/index.html","c0f1ace9b1a441f99000cff460eea652"],["/archives/2022/01/index.html","a70ba4361c7b72d55d8e7efc0c14d965"],["/archives/2022/04/index.html","5d3637a4327d86d90cde00d9cf597d0a"],["/archives/2022/08/index.html","c8691bf2d3ff3e5809723ce048cd9b0c"],["/archives/2022/09/index.html","9ccbef43aee49e566d2008e79a2bb167"],["/archives/2022/09/page/2/index.html","9d5072cc72f8adb99076fe579f377d9c"],["/archives/2022/10/index.html","3320de6f7fff66b22d21207248515476"],["/archives/2022/11/index.html","ddac4aa612b23fbbd9be02d6799e7b16"],["/archives/2022/12/index.html","45a5a49e18dc57f7dca753a90b231732"],["/archives/2022/index.html","b4e33c6418f77ecf4229d00a387ce2da"],["/archives/2022/page/2/index.html","69cc0dde9e682de1718a7344bf7451e0"],["/archives/2022/page/3/index.html","c2a1a7b163f81aa5b425de5168ac37e2"],["/archives/2022/page/4/index.html","d981075dff545940142d713345373f97"],["/archives/2022/page/5/index.html","fe3001c7d1a8ace3555c0c2167eea01b"],["/archives/2023/01/index.html","26e1789232384d6217cfddb9e4ce7f79"],["/archives/2023/02/index.html","c0fb5eb499f912a169cf420ad488c0d4"],["/archives/2023/03/index.html","0257ebe7d56dcb744ef1aa35f9abd1f8"],["/archives/2023/04/index.html","d77fd466a21b0b2bf0e8e6e8ffacfb81"],["/archives/2023/04/page/2/index.html","ce74800a80c4a9866eaa40129fdb1a8c"],["/archives/2023/05/index.html","0f2646892522c84c5184b98a06fe86af"],["/archives/2023/index.html","860f18536b15c5666906feb859617993"],["/archives/2023/page/2/index.html","597f50c3628dcdf88fe09bc1ab955480"],["/archives/2023/page/3/index.html","c0448fa2a57b5cbd4e0ca52c440c6333"],["/archives/2023/page/4/index.html","4558bbec70fb70122b81cc2867578eec"],["/archives/index.html","5793148248d6b7b5372dd0efdf8c6d5d"],["/archives/page/10/index.html","8fc3f0414b431a9973897257d78e4a28"],["/archives/page/11/index.html","eb007bc0bd0023cd17d4fcba1ab78140"],["/archives/page/12/index.html","f806e7d78b25362c14f67de47460bf10"],["/archives/page/13/index.html","31f12b74280eea562598583c1586d977"],["/archives/page/14/index.html","e1a850951feb17ecb7b65ca125f647d6"],["/archives/page/2/index.html","65cf44c1bbeea99614788b3931a8a8a9"],["/archives/page/3/index.html","835bd1d8f546cc904385150fca953c18"],["/archives/page/4/index.html","c9f80d8f3e0c6afc150fef55a4b8d221"],["/archives/page/5/index.html","3b8ec8429ed402a42f28eb205fd50585"],["/archives/page/6/index.html","5c24ac6c6bee15aa82ce2d0c7bfbb13a"],["/archives/page/7/index.html","5adfbc894729938c309cfda0116ef6e6"],["/archives/page/8/index.html","4dcdaeda2c41f8db9fdc0f4f05a88230"],["/archives/page/9/index.html","698cab3bb39b8bed2d3595eb427486b6"],["/categories/Devops/CICD/index.html","9a38e4e90ba6bcfe6355149cd05a4dad"],["/categories/Devops/Linux/index.html","cdca7cf0346e925205d253da3f485282"],["/categories/Devops/index.html","1389bc41aa0364ee42edfd899521b5c1"],["/categories/Java/JVM/index.html","82cf0aa4221ca7ae3822a2f629b9cc10"],["/categories/Java/NIO/Netty/index.html","199f766c88fd644e6ce5a6f8d5ba2215"],["/categories/Java/NIO/index.html","5ca1d9cf25fda803528b686e1a596cb2"],["/categories/Java/NIO/原生NIO/index.html","00c539004ab57d962eff66fd11247af0"],["/categories/Java/index.html","ef4a84fd1c6b31cca4275570b8ba342e"],["/categories/Java/page/2/index.html","1feba94c2ffc4c35058672658a11b106"],["/categories/Java/学习路线/index.html","7677e74c4292b65cc4793b6cb0b6dd7a"],["/categories/Spring全家桶/Spring-Security/index.html","2c91bf32182fd5a5d1c15b67effacdff"],["/categories/Spring全家桶/Spring/index.html","647ae5ca19bcd65ef58da5fb337ac3e5"],["/categories/Spring全家桶/SpringBoot/index.html","62447e586d04e6f6f62119f06860577a"],["/categories/Spring全家桶/SpringCloud/index.html","156078bd38f148dd367b85ef76267029"],["/categories/Spring全家桶/SpringMVC/index.html","1dc8e9a5f3023eb80f1c1a9f2ce04b54"],["/categories/Spring全家桶/index.html","71777a2756c1b4c5e57c7cf2ff2d2195"],["/categories/Spring全家桶/page/2/index.html","640d329063cef0fc3073c783e51f33b9"],["/categories/index.html","1c707032dc2ad01d807c77bb6be3a953"],["/categories/中间件/ElasticSearch/index.html","79e52a2ac6f5db1f09b40971f5a5e54e"],["/categories/中间件/Redis/index.html","8f83b6a6e7826d21686d409c68d369aa"],["/categories/中间件/index.html","e5e2a193cc58083651bc0bbd8533e2df"],["/categories/中间件/page/2/index.html","87b146b63624a09d47e6aecd3964879a"],["/categories/中间件/消息队列/RabbitMQ/index.html","de39384beeefc9cbb4515f204cdb1f71"],["/categories/中间件/消息队列/index.html","30c84d423105c4edb18a51d89d9ea060"],["/categories/前端/Mock/index.html","01b47570bfa91c10336b18baab60488f"],["/categories/前端/Promise/index.html","b63283284e9385ba2a8139cc031894a2"],["/categories/前端/Vue/index.html","d5712df2c2cd4271f74a5286bf75f9c1"],["/categories/前端/index.html","d718f3fc7f550745de5ecfd6dd099688"],["/categories/前端/jQuery/index.html","e81f111f733e1208916c6413b4873c04"],["/categories/前端/page/2/index.html","f613936a9ef9c63bb069b1da8f4e7067"],["/categories/前端/原生基础/index.html","746936b1eaf919fe485f2b39242c6d13"],["/categories/前端/异步通信/index.html","2a770816c11951aeaf2ac92bd885bd65"],["/categories/工具使用/Git/index.html","f6503aeb182eae40dc4535fe1a9df4f8"],["/categories/工具使用/index.html","9dc78932ddda704ba8bf0e71f4592789"],["/categories/工具使用/markdown/index.html","c0dafc2083ebc5ebbc028a933268a32a"],["/categories/工具的使用/Docker/index.html","466cc66a8d0e7c86b4d09fa1c339d7e8"],["/categories/工具的使用/Nginx/index.html","8e95b669553cf038f53995e5410ac81a"],["/categories/工具的使用/Swagger/index.html","b5431a5c61efb9ea9cc0df8448c65862"],["/categories/工具的使用/index.html","ef568ae9a1cd259e54887de8e0cd1616"],["/categories/工具的使用/博客搭建/index.html","90056b63eed21180987bea4f534f0f7e"],["/categories/数据库/MongoDB/index.html","be2c7badeabfad99fd6759ee27db6f35"],["/categories/数据库/MySQL/index.html","252e5e5c0d7a186d9c2ece096904dd23"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","efba0dec4df7e03a161095c2373dfb40"],["/categories/数据库/ORM持久层框架/index.html","d37a46c78c26092a21ecb5deb6008b41"],["/categories/数据库/index.html","104a8b75a896a9ca502825c15135af0e"],["/categories/系统设计/index.html","a6d1e7bb54f22e2a9ccf9f311198a08e"],["/categories/系统设计/page/2/index.html","15076c6bd359398b740fe1d0682ae7dc"],["/categories/系统设计/分布式权限认证/index.html","fee70a5bd4b72b2698dd6b47d41c6715"],["/categories/系统设计/设计模式/index.html","a9508371de2219bf059000e46810af64"],["/categories/系统设计/设计模式/page/2/index.html","e384d132401497f73293f5e092648187"],["/categories/计算机基础/index.html","183a76f89ffb910bcab90902abd251b1"],["/categories/计算机基础/page/2/index.html","3ee6a7aff671d7a3adee99ad7fe5e125"],["/categories/计算机基础/page/3/index.html","13dde454ca077fd794d4065a0b8cd80f"],["/categories/计算机基础/page/4/index.html","065d4951e016698abc3a858aca7c18be"],["/categories/计算机基础/page/5/index.html","5dac95ad6a3c0116e7e4351a400f45b9"],["/categories/计算机基础/page/6/index.html","42ef718c7c6250e7f8a73d8c750cb2aa"],["/categories/计算机基础/操作系统/index.html","a26365330a313ad9e0e6815fa511b742"],["/categories/计算机基础/数据结构与算法/index.html","a24db3a7e13831ca4a6e6b31c433895d"],["/categories/计算机基础/数据结构与算法/page/2/index.html","54c5be4612ef8f508a91f75b9f7ce8f2"],["/categories/计算机基础/数据结构与算法/page/3/index.html","240256f0346302e9fd0d1fd454355a77"],["/categories/计算机基础/数据结构与算法/page/4/index.html","c852105b5396cc8bdeb83e57975bd85c"],["/categories/计算机基础/数据结构与算法/page/5/index.html","2acdff7db0b31a789a470d78c26fe22f"],["/categories/计算机基础/计算机网络/index.html","1d6d1119a65b872b922042293bb7c514"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","86c6285dc77ecaa3d2ac3945b580b28d"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","95024f7264e0e3bcf35c271618ac9ce3"],["/messageboard/index.html","478005d5decc50045d860fa4668f4df0"],["/page/10/index.html","c5e60ec0f7b512355b630255c4225464"],["/page/11/index.html","fb4579a7668839bfdca13b74e08c4522"],["/page/12/index.html","7aec86c801639828f30bddbded50bac0"],["/page/13/index.html","5556f762c756dc20c5b7a7307370a437"],["/page/14/index.html","f94691be8f837d99f840c63726f48d9d"],["/page/2/index.html","73ed69c72170613a5d7411aea2a93adc"],["/page/3/index.html","8e92205419ddf7e8d8b9c6ccd56618ed"],["/page/4/index.html","4ebdf4a3ac98ec1b3d8ebd3419d53f5b"],["/page/5/index.html","df221d822d813439d771845b37bd73ff"],["/page/6/index.html","d662220bfb2c531ffd27fb6d879d429c"],["/page/7/index.html","b062a1d066842a5e545739a29938b9c8"],["/page/8/index.html","e23abce31413c209491d9869f3050078"],["/page/9/index.html","f7ccb5f6a1bea4aa0afca8e25598dcc7"],["/sw-register.js","fc48a486546aaafe0c2da1d19e7aeccd"],["/tags/Ajax/index.html","65db51d536bc0a4613398919a458e89b"],["/tags/Axios/index.html","375fd4f30816513b23d4beccf6cd096b"],["/tags/CICD/index.html","de323561ff86a7cb28db4a59c628a968"],["/tags/Docker/index.html","a972e00d35447cbc4ec1b959c2489f75"],["/tags/ELK/index.html","63f3f0e5e650ba52382a628668d4f9d7"],["/tags/ElasticSearch/index.html","c18f79faab3b48f9837dbfffcdaecde4"],["/tags/Git/index.html","4663775bd0f8102a0ce508973ecd3e8b"],["/tags/H5/index.html","95a235d2cf658c2269f5f9a7c2cbd781"],["/tags/JVM/index.html","26e7440dfc0e6e5569ef22a25d524d96"],["/tags/JVM内存模型/index.html","5fc928501a33bfa28e572e53727ac222"],["/tags/JVM执行引擎/index.html","c43b60fa5cb1768591137adf70356a22"],["/tags/JavaScript/index.html","a5deda83124a54c865dc02702d0686c7"],["/tags/Kibana/index.html","74916269af74b1a87f110eb93ffba094"],["/tags/LeetCode/index.html","b37bc92268f11216d9fe3633ca088c30"],["/tags/LeetCode/page/2/index.html","15f7bd1469a2ee9f7a1930a9524ea3b0"],["/tags/LeetCode/page/3/index.html","52c091001806987d83a394ab7d21e3a5"],["/tags/Linux/index.html","d1a75ba45669e8e6aa4b816f23b6cfa8"],["/tags/Logstash/index.html","b61dc9733cf5283085c8909467760c86"],["/tags/Mock/index.html","f3e9c1eb2f708783c4017ab5f8a3a10f"],["/tags/MongoDB/index.html","6fc9aa083fb27ee7b86d3b2d43be0845"],["/tags/MySQL-数据类型/index.html","ec178a1f5d202522e8b958b884166832"],["/tags/MySQL/index.html","cc36129d4cfa4436d261b76334f78f9e"],["/tags/Mybatis/index.html","c1eacc18bac7a78c06dd598c28cd00b4"],["/tags/MybatisPlus/index.html","1f17d6872fb91274a3f0d29f75b4cd9e"],["/tags/NIO/index.html","d0a32e535c15a5b1065dadadb992d43b"],["/tags/Netty/index.html","14929cf7bcc65f1405872e878993c003"],["/tags/Nginx/index.html","fd29769626366a7abc96a1ab46c4c5ac"],["/tags/Promise/index.html","2793b257b089d1ff728bf209ad8932e6"],["/tags/RabbitMQ/index.html","431ff6ea85f50dd0ccc34d0483837bc6"],["/tags/Redis/index.html","b9b5bf84d40e3f411f2f3b5ef67c1d07"],["/tags/SSM/index.html","a7125cd45ce277e6fdd59023139563a7"],["/tags/Spring-Security/index.html","aeef46f805a932ca211e290c5bd807a3"],["/tags/Spring/index.html","021437417aade33a2d61f8c1188588e0"],["/tags/SpringBoot/index.html","4bea92002e37f5b7434a54f5b1f16a05"],["/tags/SpringCloud/index.html","3781a071fb88cd8c5e3822ba3f67382a"],["/tags/SpringMVC/index.html","b561633795269b4f15f3774c220e9c4b"],["/tags/Swagger/index.html","04e74882947189fcef2917576ad10182"],["/tags/hexo/index.html","aba39325cbe1edfb60df99c70567613b"],["/tags/index.html","856e8cbc110e3e5cce79094bda8a2396"],["/tags/jQuery/index.html","4b34a5e8cf362cc8e38deda0b9d3ab39"],["/tags/java/index.html","80afc54159e00e2c582b98f387b0cadd"],["/tags/markdown/index.html","bd5c253ddab99d3f5913d370cafd4fb8"],["/tags/noSQL/index.html","4b740fe8074f251ddd4462ea3f6d8d0c"],["/tags/typora/index.html","41d245667e33ba532b486672d00e6d7f"],["/tags/vue/index.html","ae8902e27408a565f856361ddbaf3817"],["/tags/享元模式/index.html","6b77ee01cd6f9c8bcd0f9d3a06ff3409"],["/tags/代理模式/index.html","9e3909461243569115e3fce76d7319fc"],["/tags/内存管理/index.html","153b80087730e36712416000eddd6593"],["/tags/分布式/index.html","bf4eb3749aba3ada1b59c6acc83bfe70"],["/tags/分布式系统/index.html","a78a996775790c9c8faec42b499815a7"],["/tags/前端/index.html","ee25750197c5a97dbeb22b2165b14d58"],["/tags/前端/page/2/index.html","81432206c3df086747469de444f728f7"],["/tags/博客/index.html","8fe539db685028f10c3bc7341e21764b"],["/tags/后端/index.html","e10f837baf2a3bf1e4722804ccce99a8"],["/tags/外观模式/index.html","5df68ca74ed0ae46ad77a00a723cc424"],["/tags/容器技术/index.html","f81c33d6324a0ce23c3a550b1cd0ac65"],["/tags/工厂方法/index.html","f3f9b5f39905a9ea2495f821e28dda5b"],["/tags/微服务/index.html","b48a233edf77268c3a8203db9ac1309c"],["/tags/抽象工厂/index.html","de06bbc16c3c61dc30b0b3adf0f17ffa"],["/tags/持续集成持续部署/index.html","68f39316f43ead3b1315ee2e35bb9186"],["/tags/搜索引擎/index.html","28a5df834da3da8388d702f1433a2ffd"],["/tags/操作系统/index.html","d4d64ee9647bb8ba130f64f1b99c3f51"],["/tags/数据库/index.html","5f177d7d3f19c5f9df702c5e4c528cc1"],["/tags/数据结构与算法/index.html","a80ae6a13c5933e7ee4d4842a96a8b9d"],["/tags/数据结构与算法/page/2/index.html","e4133198ef82a6893bd1552744405a54"],["/tags/日志/index.html","e4f3814ac947ff27533af152018662d9"],["/tags/服务器/index.html","2045875748d6a15e9a330be10ee9e13f"],["/tags/权限认证/index.html","2a928362dc3e1a1ddd653a21cb69a697"],["/tags/桥接模式/index.html","063078ad2ef8cc44df7aceec9e1f7dc4"],["/tags/模板方法模式/index.html","625d267bf04ef9455c484269b80672af"],["/tags/死锁/index.html","64c8b683aff37cfbc4b09ebcbb6ac3d8"],["/tags/消息队列/index.html","c349f85d11855bb0f9152584115a46e2"],["/tags/版本控制/index.html","ec685862369d1178210f5e5b50c2c55a"],["/tags/策略模式/index.html","45efa4fd8070822e7965c27e48aaa6b1"],["/tags/简单工厂/index.html","b3d9dd9d384f176be80335418936b44b"],["/tags/算法/index.html","f3b32fbaf9a32091ed441bcf2092134d"],["/tags/组件化/index.html","818989b6c639c36e2edb0241f75ed6de"],["/tags/缓存/index.html","9d68c514d0f54a7aa0442884e3944b77"],["/tags/观察者模式/index.html","65a730948fb3f4076c7e7625f6e2fbeb"],["/tags/计算机网络/index.html","324e896ab3fb58b46bf416493db8ba4d"],["/tags/设计模式/index.html","a82546809111e2e9ce09c8c06514c4fd"],["/tags/设计模式/page/2/index.html","0470abe893603848a61cf9c409eb912a"],["/tags/进程管理/index.html","4de53fa51342bc31917545f1509d1668"],["/tags/适配器模式/index.html","9896f8c10d9b5653c976094faca9bfb0"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
