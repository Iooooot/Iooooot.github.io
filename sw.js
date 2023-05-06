/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","8118d4317967328ca6ca805c3b6de374"],["/2021/02/22/工具的使用/博客的搭建/index.html","b8ec9067e7eb8ef08fa089387f9ca365"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","7fda7b549c28d76f504792521c13a3d3"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","14cc98309a057c0e2377a9f195969f15"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","3fe27b7c470f2ef2a0c0807ea1fa85d2"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","cc20a9eff529bbd247662453772c55b1"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","2d0e995f0bd962dd0e3d312d36fe31a7"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","f7fdf9a3d37c8cec6f9d776a43d3a38f"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","83b836725b15433bbb4bf128e401601f"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","e8960441015aa02352e318110eaed090"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","524db27e5d6ddfd2307a8c7912401f18"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","c5f656aef641decff73403857250c536"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","58919c2ebb9b19c0afa70f83951d5bdd"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","07fe92c3a050d3991ad2b93e7c725991"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","ac44d9dbb967b10ac9b093166787b5f2"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","02ba5e0e57639d6f02936825c23a6a2a"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","4ee8b67841919429ae878c798364972c"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","1a38d49e67285ef7de3130146f0de69f"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","ac28c5868f9159a65237198479179ce9"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","fd34c2c3f54d23fe813ddec2561d36b2"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","49461c4ab66fddc9b02130ee0aa20d6e"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","80a64a8ef66761d420700884575a828a"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","8162918de4956a790552bc020ba2c9d4"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","3991cc4c2937ae9f8402b7608bc95493"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","4a25a536f320e021fbcfdb5f228eea0f"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","8afa96afd3492359eaac531ea2b095c9"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","f560f06045f3e5b6331c858d36a8e987"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","506bd735009b33725f7f31be9101a9a6"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","f7b2e41be9bcf8c13845f55b0e283e7c"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","d9a17840980c83591e3f38853ef3f02e"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","4240d513d8aa6b0a2b9135a93cccdb85"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","d71489fd169e4e59d3755b2832f0cbdd"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","839a93768e731bd3bc1d8df33d76c08a"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","28b028fe39b3c62b1e80e213b00c7ac7"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","064bb855e1daae0f5fcad6f2989299f9"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","dc4c0c300196164eaa6f135ba1e0a225"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","b56ef11d6fd927f138f972279bacc81b"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","84e9d81924de1f471a6955c8964e4bd8"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","9ab8cbba95e92e12783ea3d21133b74d"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","f46b8ee7283ed4a455a1226b76ccee7e"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","b0196a00766292ca3d422fbe407cb5ef"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","53b157a9ff8882844262b190706c975c"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","badf523703ac0fcc73b9df1874ff3ce9"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","07505f5e0873cc90186b3d62ab3f28fa"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","82f324da7b868e1d4957cde51ccd3dad"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","c68b1eef394568543c158d83e2873cd1"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","fef45a573ed98eda515563e8eb45fccd"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","4704d9519051de3ce0f176a9c5359289"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","277531e2f725130c1374fb5a3c3b453c"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","501221713f3917cac03d931440230c2f"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","86b7271a8bf1a2ce74a15fad2f0cd13e"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","ae00c83f9e141a868388f25e8f9c8380"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","8a536dab04595a07e98512718ba9299d"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","ca9db2d9e32533ebb436bea952debee5"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","cd8dcb1f6415a9c9d2ad459f0c7ce2aa"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","aefa57081118df0a59c3d6cacc6afe09"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","6053f09a20e1db4dcacb202e7991c9b9"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","1fc91e90e1a7eddc32d2223d81485f3d"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","48567c7ebac0b83382ee84e1bbb2e7b7"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","146d6d55b7cb4cb26fdd3640e6d571c2"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","abc322d172a53e3c8ddd54482a95bf20"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","0e7c09e585ff4f9b72d1bff3a8f5a0fa"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","5a40ff093804aca5a122cb74f2a3c6c8"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","1d20238c93236f8b194177c082ec34e9"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","ad9ee08de6a30ff56181243455e33f06"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","6270bceb2459ec5fde80026dc76dd293"],["/2022/08/17/前端/jQuery/index.html","51ef760d3c73d7cfcbef964a3daa42e4"],["/2022/08/19/前端/JavaScript/index.html","528207fc83735bfbb89256ebad88081b"],["/2022/08/22/前端/Ajax/index.html","4f84d5e6169bb849de0b3970ae20f0af"],["/2022/08/23/前端/Promise/index.html","149145e5897ce9c922760c6649a11b9a"],["/2022/08/24/前端/Axios/index.html","a943c131518e8d952f4e3e4e2e5a59bf"],["/2022/08/25/前端/H5本地存储/index.html","92ed6513dc145683c1f93ceb6323daed"],["/2022/08/26/前端/mock/index.html","cdf1cf223a642eda785da0b019322def"],["/2022/08/31/前端/vue/VueJs/index.html","2cc8e23f8087caf90752b7f9d673598c"],["/2022/09/01/前端/vue/vue组件化/index.html","8b8cbb1570790642812bb8bb446a6622"],["/2022/09/04/前端/vue/VueCLI/index.html","1a1eec2c118198f4aa168dd9f305b6d4"],["/2022/09/07/前端/vue/vue实现动画/index.html","4d5af90dbf4f23d6062108baced624b3"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","d261911b2d49e00322f68245b2cabdf3"],["/2022/09/10/前端/vue/Vue异步请求/index.html","4ebc3b224b19b23deb65729ba866ea1f"],["/2022/09/11/前端/vue/vue-Router/index.html","a900a034b3c3a76ad811399926bfb621"],["/2022/09/13/前端/vue/Vuex/index.html","e18ae1c81f70d051e3f0607dd0a28edc"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","197e5dfdd9cef6368b9ce63b04ecdf50"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","dfccd26dbd7ad66f2c092255f5e12508"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","4341cc891d7f04793ed1feaa29509a2e"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","364cd1dd2350ea40a7db87d5c91fe38e"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","cee40ba34569d5e71c29020dd55463c4"],["/2022/09/28/DevOps/Linux/Linux/index.html","6eb52ec5ac2f552e2a0cd9c67999d5f1"],["/2022/10/02/中间件/Redis/redis基础/index.html","3dd4e7660c109ae66c7d1f272af46eed"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","81aabf13a1fa531638f3024d86f1f4cb"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","fb1c936f2000567e6bc3c51a040747a8"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","dfa767a1cce4957ae7b84bb2fd282574"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","8e2c8d4d05450918529a803f47568514"],["/2022/10/17/中间件/Redis/Redis集群/index.html","0f8e1d77a59af4a53ce450bea81ea809"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","a7fa634b6c2ce50d88fbc7a1db5ef507"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","d8ad5d8679aa0f82a66ec91e51fc7768"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","86c77f9955b5cb82ad146eaba08c0499"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","7c6c0a2df3990e4679f148b37117e1d4"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","5441c33413dcddc3d5baf0d6d7dd711f"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","a9baa2bf437c10b2a8d6c36846b8fcb2"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","4603faa6e3e8f21952bb89fc4de1e9a7"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","384c17dcd20d5bbe0849566572613fcd"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","c75b7f789b383fa742bb1b84d0a3d4b4"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","cc9241c6d621edea97229cc7508dae54"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","cef3d7075b27f169820365d0eb7e644a"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","9b7dd6bbc1f8c125271ca2f34bf53d68"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","1494de3e0fded5fbc8934988d2b1f27f"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","2d4f22137904153c941f7dbfb1bfca86"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","73d5453d81062af90afa7954926ca803"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","f4fe4409890459f1df1edeef0d925c10"],["/2023/03/10/DevOps/CICD/CICD/index.html","f3942df02a598a5a290ab80d29ade3be"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","4bf37da5cffde8bf790d1fe23dc11e54"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","e5c9ecaee847250c1c47599ac5aa5a1e"],["/2023/03/13/Java/NIO/NIO/index.html","c484fdbe8bd159304b29b963dd9e4734"],["/2023/03/14/Java/NIO/Netty/index.html","b34f2985063028bfebdfde1fd00846aa"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","865296364aa5a6700eb62e57698d6d4e"],["/2023/03/17/系统设计/分布式系统认证/index.html","4bbe7cec47f67abd699f68af16e5bc5a"],["/2023/03/19/Java/JVM/JVM概述/index.html","ccdab7e7c0e385858f5474841d184bef"],["/2023/03/23/Java/JVM/类的加载过程/index.html","22d215108b91b09ca3adf0563abbf482"],["/2023/03/28/Java/JVM/对象的实例化/index.html","a80e3ff983fa2dc7719798ead1a11ea8"],["/2023/04/01/Java/JVM/运行时数据区/index.html","f2d676ca2ed8047616fd27b29476d640"],["/2023/04/04/Java/JVM/执行引擎/index.html","923323162ff9f67d7d53684a7d4a6f87"],["/2023/04/06/Java/JVM/对象引用/index.html","a5af6575ecbb7ac53a7f748ed9364adf"],["/2023/04/09/Java/JVM/垃圾回收/index.html","49cade6469398ee395546d4ff16e255a"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","3e49eb62765dc074ba694e91ac170d74"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","c0e18310c5daf3b0281784f207e5d618"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","ac21699f624a150f7dd9d125a6e5dca9"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","86a2c35f044b2639d0efd26620d3afc5"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","a971bf6598fb43325471980496643d28"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","c9a32f6362f7fb8179759e7f087ae218"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","791191f0266254c67f83bf2ed5df6882"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","61d07816323cc0f56fae76ece3a3f316"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","b3764f5ca860a5195d1da50dc1c3dcf0"],["/2023/05/05/计算机网络和因特网/index.html","6be3f96c10a3dee0118a2370ad188680"],["/404.html","c42073b2f034d8af40a8247cc453d4d4"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","2a7754f9ab0d7f1c59aaba1b0f944e0c"],["/archives/2021/02/index.html","058a29e4eb46630a7f33178dfcdb5daa"],["/archives/2021/03/index.html","f27dda3f70e41abb3acdddec448c29c3"],["/archives/2021/03/page/2/index.html","c03663498b5dc42c97fec49815fc3270"],["/archives/2021/03/page/3/index.html","89f08bce426e275d7cf4f3b0dc3a69be"],["/archives/2021/04/index.html","d6479899216ac10a390cc4b42cf5d1fd"],["/archives/2021/04/page/2/index.html","413efba883a7e8a3e5a146f68428d751"],["/archives/2021/05/index.html","1484ff44261a2754f2285ea7f9fa02af"],["/archives/2021/index.html","eb4e571250e3c4a44c326a21278bdcb1"],["/archives/2021/page/2/index.html","e9646f38a7a111c1c4cdf0f509787400"],["/archives/2021/page/3/index.html","664977cebff0500a747691763823b73d"],["/archives/2021/page/4/index.html","b7317864809093852af4bec83e88e0dc"],["/archives/2021/page/5/index.html","ed987a5845b0f08f18d95e4f8b125bff"],["/archives/2021/page/6/index.html","f147a8cd028338c0d449b432ada14f3c"],["/archives/2021/page/7/index.html","b0ecbe39e756029d9940d6ba553bfcf8"],["/archives/2022/01/index.html","79c2311f7b92fb7ee3d0426c406488a4"],["/archives/2022/04/index.html","227c3729940bef3284bae295e5fb2631"],["/archives/2022/08/index.html","da3814131446280f41d3b452d9f86dda"],["/archives/2022/09/index.html","8a967c4174c877608c1889360da13860"],["/archives/2022/09/page/2/index.html","de9b39634ba93c38d02a53e5226a455b"],["/archives/2022/10/index.html","cac7d386670edceb50dffe4bdd58f2b6"],["/archives/2022/11/index.html","8945e5266f1ac7ab635db84ecbb4b7d3"],["/archives/2022/12/index.html","b2d3060442a82b7f0589f3b1fe416585"],["/archives/2022/index.html","a3edd554e10762662416efd781ae08f1"],["/archives/2022/page/2/index.html","f71657fecae1f7f481ced45109e147de"],["/archives/2022/page/3/index.html","6eaa3aa6c5e24e013bcb76871ccc7518"],["/archives/2022/page/4/index.html","9dccab4e33dd4be0c4e8c2d98f7854d6"],["/archives/2022/page/5/index.html","e0fd057105615d98d7ff9d1509776eac"],["/archives/2023/01/index.html","a5fe41682011dfb1300aa8d6e55af6e8"],["/archives/2023/02/index.html","179311076bf7b95e40a558886753cd5c"],["/archives/2023/03/index.html","7ffc586a04dc2d48aaf940ee64259771"],["/archives/2023/04/index.html","f1197101f0a8c0138612855db5c4426b"],["/archives/2023/04/page/2/index.html","b2647897b9dabe16a20907ae9e45c1d0"],["/archives/2023/05/index.html","430cde454a98bef195d152392bc98e88"],["/archives/2023/index.html","d880c71490d72705f0d8a49cb59df49e"],["/archives/2023/page/2/index.html","ae16d78ee9ae63c4ee0077723a35beac"],["/archives/2023/page/3/index.html","a1db027d65356164d7df4414a3c506f5"],["/archives/index.html","d3c360a9735dae5c01e58736fcca2ad6"],["/archives/page/10/index.html","f61d33a11223661f066622c821d172b0"],["/archives/page/11/index.html","136147100fcf0b0459aff87b3c70fa8e"],["/archives/page/12/index.html","909ef5471515fc00036e38bd4e982c29"],["/archives/page/13/index.html","e6997dc699706dfb483a7d3f06715b01"],["/archives/page/14/index.html","9bbfdb23515b0f02505b920ba7c18b45"],["/archives/page/2/index.html","7b735aff3af3ad0f7295b3adae11431c"],["/archives/page/3/index.html","55a38b2a514694c5c2e74cc70736e21f"],["/archives/page/4/index.html","90ebfc4d7558f42dbe32d61e013664fd"],["/archives/page/5/index.html","b9e958ee47825864353055059d1848b5"],["/archives/page/6/index.html","af6cd157dc9a1f9262c2cf68a8dff955"],["/archives/page/7/index.html","b47eb77503de7e2d9c80594f14920df1"],["/archives/page/8/index.html","faf8842c836473a4ffbdbb420fdeccc3"],["/archives/page/9/index.html","6332711c678495a1b1d93ae6c10754b6"],["/categories/Devops/CICD/index.html","66c151337a6553523a6a724774291e44"],["/categories/Devops/Linux/index.html","5e2c31ce5514fe6a76ea3c3220ddde49"],["/categories/Devops/index.html","cb750b470320e6cac3442586f82d5147"],["/categories/Java/JVM/index.html","9780e56c7aaa5a399b7316d6355cecd2"],["/categories/Java/NIO/Netty/index.html","95716da5de49182bd351ce3077a3265f"],["/categories/Java/NIO/index.html","dc1265de9363c77b0aec76296a67c226"],["/categories/Java/NIO/原生NIO/index.html","c8c17fd93605b94f3b9971ee18dc9efb"],["/categories/Java/index.html","3043c95cd3764995096aee35eeaaf62b"],["/categories/Java/page/2/index.html","3b8aef775ef346026a868b4234a4f0de"],["/categories/Java/学习路线/index.html","bf4583817c248efaf527febd0512f799"],["/categories/Spring全家桶/Spring-Security/index.html","61ab02a4867431de60a7edab85b94915"],["/categories/Spring全家桶/Spring/index.html","12a1bc527561bae674b3ad5e2c3b8e08"],["/categories/Spring全家桶/SpringBoot/index.html","67898f08168e4d7e528b08c00ce6a87f"],["/categories/Spring全家桶/SpringCloud/index.html","2ca48c4bce9c039cee81bb6aa583cd7a"],["/categories/Spring全家桶/SpringMVC/index.html","187ff8cefcd742d12bf0031bb4e67775"],["/categories/Spring全家桶/index.html","f14f51778fca16a811492c977498cb86"],["/categories/Spring全家桶/page/2/index.html","fc036b3af4a596debe95cedf1ae7db99"],["/categories/index.html","990fe82e5283693f2881b9a1bc1bf148"],["/categories/中间件/ElasticSearch/index.html","f09f2cbda9ba965f68feb0fb2006db7d"],["/categories/中间件/Redis/index.html","85203067859c7abcd3b7b293d70ad46f"],["/categories/中间件/index.html","fe033586c1d9aea4ae20e5bf143ab08e"],["/categories/中间件/page/2/index.html","1fc156b3d801428e3af7f3598ef35052"],["/categories/中间件/消息队列/RabbitMQ/index.html","b43e1bc8d51e71b7c05460a490b677d8"],["/categories/中间件/消息队列/index.html","dd4aa7397b9f547fbf314b19255a9f82"],["/categories/前端/Mock/index.html","0cdee1f7a6db5eca3073a330921667ac"],["/categories/前端/Promise/index.html","0aa38895dfd06fe48dc192d6b7c783ac"],["/categories/前端/Vue/index.html","e9abf836309fa1164658b3990f6de4dd"],["/categories/前端/index.html","05084ab72ebb19f234a2cc288cf81880"],["/categories/前端/jQuery/index.html","debee368a55f30bb8b9b3ac691f91a66"],["/categories/前端/page/2/index.html","b4949b1ac941d12a378dba1cd4d6b206"],["/categories/前端/原生基础/index.html","3b466a1cf4a0283b2d9b9b5022029696"],["/categories/前端/异步通信/index.html","571a4219ee32b34c8d67d0e3d36bff6d"],["/categories/工具使用/Git/index.html","9f6f381629fe2f592fac649411d4d2fd"],["/categories/工具使用/index.html","3f1798059ebdcdf8379830fb7b24fb43"],["/categories/工具使用/markdown/index.html","6a41631832c9d2cd65792b436a1bc4e0"],["/categories/工具的使用/Docker/index.html","bb5bdd8ba48ff3facbddc3a3f0dca8bf"],["/categories/工具的使用/Nginx/index.html","19354869ffa69dee196e292e1ab56dbe"],["/categories/工具的使用/Swagger/index.html","6e96d271fcf2e5f670aa63068e22e987"],["/categories/工具的使用/index.html","8c04c1a78a561ed7f18f8d25379329f0"],["/categories/工具的使用/博客搭建/index.html","c77387bb3437369cb78dbef4cc97d48a"],["/categories/数据库/MongoDB/index.html","aae53d2b375b970dfb569b041ce9e74a"],["/categories/数据库/MySQL/index.html","89300648422d5fb04473b01def7d7217"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","69a9c033676eecd2bc717cd7fdb5a4a3"],["/categories/数据库/ORM持久层框架/index.html","4ed3721a9abf85ce8d885a61f447995c"],["/categories/数据库/index.html","5329f139db84aa71a5fde3b7050eba8f"],["/categories/系统设计/index.html","1a5d6741107d37e4c0f8276189e654be"],["/categories/系统设计/page/2/index.html","64acffc4b5246a6fca2ea4785c1cc41e"],["/categories/系统设计/分布式权限认证/index.html","c40ede10b7fcc9a5b9dd95500d8dc4d8"],["/categories/系统设计/设计模式/index.html","47aaaf86d2b9fa3eed982bd7b2b00a43"],["/categories/系统设计/设计模式/page/2/index.html","70f906eb4bf62494e0d676d24d6cc6f8"],["/categories/计算机基础/index.html","4b7dfc44e398d0be8b239f5d7bac03b1"],["/categories/计算机基础/page/2/index.html","558feb4d68b6d431169248cd07a16a7f"],["/categories/计算机基础/page/3/index.html","b57e1449b4dc47aa41a1631b897d1218"],["/categories/计算机基础/page/4/index.html","866b90bdccb181e322429a6bc57dd70c"],["/categories/计算机基础/page/5/index.html","9c8ff37f5620d810ca61043049f9c1cd"],["/categories/计算机基础/操作系统/index.html","7113649461783fab3a01e22d8e45015c"],["/categories/计算机基础/数据结构与算法/index.html","a24c5f4c53ba0fd44a747e28a1cb8191"],["/categories/计算机基础/数据结构与算法/page/2/index.html","ea5b9184f3a54fda492673b9b06e86cc"],["/categories/计算机基础/数据结构与算法/page/3/index.html","0887b4dd3e6c28cf776d344c89f5707b"],["/categories/计算机基础/数据结构与算法/page/4/index.html","9b9cf5de243b8d73dec38265e059d1ac"],["/categories/计算机基础/数据结构与算法/page/5/index.html","120ca64ce6784dd80b1ea7569f0c07e8"],["/categories/计算机基础/计算机网络/index.html","b23ef1e4d3cdadbb9861a5c1ed9d9f25"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","6219427cb56f8a2088d22ec69389d676"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","25d4509cb625e56ebc074418a8fd721c"],["/messageboard/index.html","cba662d88c2627db782e6c0ca0c88426"],["/page/10/index.html","92d878545208e36643fa86e9e38798d4"],["/page/11/index.html","9d7658dc633b52038b7d248b8c8175a1"],["/page/12/index.html","47fe2af898cb893bbbcfbd0dedc34eb3"],["/page/13/index.html","d22166c084519f233887c00a24ceb11c"],["/page/14/index.html","89fa45eec04ecbb9f9b6c4569fb64428"],["/page/2/index.html","0c955ab7287856d3da1ffdc099e47b01"],["/page/3/index.html","87dfd2a2b8c85676741564cc30eabec0"],["/page/4/index.html","34fcab9480c7fbcbd2f27b583525c84b"],["/page/5/index.html","70c0a77901731753af9a04050937118c"],["/page/6/index.html","1377de7e3a450ccfdb2930abb627c014"],["/page/7/index.html","9ffd599ebe1b103d24db4ec2489886c1"],["/page/8/index.html","bf62447b156b5077119b6e1d4e19fa5b"],["/page/9/index.html","1a19c58755318fdd8acb009acabc9313"],["/sw-register.js","b488ec0c7bd2254d166cb2e24dd2ee90"],["/tags/Ajax/index.html","67134d85f8d5cfd1c47bad02991b9d41"],["/tags/Axios/index.html","2b7630c483bc57ff72647ecc8dd31767"],["/tags/CICD/index.html","7b1d879cce53e3620504adf0c9868d3b"],["/tags/Docker/index.html","a1db2e63228c3471aaf769b9e38606eb"],["/tags/ELK/index.html","7b568b3dd83db885fc15ff8c362c4647"],["/tags/ElasticSearch/index.html","4c08f899205500aee904e552c8ceb1aa"],["/tags/Git/index.html","640086643d4bf7e014b983b6ca889e7b"],["/tags/H5/index.html","47ee0298f73acb48a7f4f32200534e58"],["/tags/JVM/index.html","247aed17ea8330b151c8018081ae83d5"],["/tags/JVM内存模型/index.html","bceec576ae1deff832c9a40d0baa0082"],["/tags/JVM执行引擎/index.html","dea447a0c8108d957b785241bd32968f"],["/tags/JavaScript/index.html","89f22f1b44da39807c6a9aaa1a2ea387"],["/tags/Kibana/index.html","971be977e230d49012277a907032af02"],["/tags/LeetCode/index.html","642ea80933b03007137585df9dbcc532"],["/tags/LeetCode/page/2/index.html","cc71c24769b2293ac24875c059335631"],["/tags/LeetCode/page/3/index.html","447bf047e5f7007ed92765cd5abefd38"],["/tags/Linux/index.html","7fea99a4e0205cae3585cf5573da787c"],["/tags/Logstash/index.html","d6aafd886368b35628d7077de1d7a027"],["/tags/Mock/index.html","252fbb32be95d3826f19a193d5c694fd"],["/tags/MongoDB/index.html","36613888410ec96be9ed3c1b343053ce"],["/tags/MySQL-数据类型/index.html","6837ba3c1058e6e87d1d7dbb944fd2d7"],["/tags/MySQL/index.html","e6bf78f9f76423e1d8f2bbceac89fb30"],["/tags/Mybatis/index.html","0c35cb4bb968788d6352c6f54723f31b"],["/tags/MybatisPlus/index.html","24a56c11a75ce09e1af9fc8edfd8fa9d"],["/tags/NIO/index.html","c9b60f5018b792b078fe8c8340e2b8c1"],["/tags/Netty/index.html","73687bff2fee2c5e8e1a85634472f2c3"],["/tags/Nginx/index.html","a68586da87f10f7ef7b4cc02dec13f10"],["/tags/Promise/index.html","8a28e58ef7d98078fcd1aa1453937c65"],["/tags/RabbitMQ/index.html","937fd9ef7c41558428f24ee13999cb14"],["/tags/Redis/index.html","adc20b545de4ef13d6182598ee65410d"],["/tags/SSM/index.html","2f9b3d7587d6ee929648ae0a5648c61a"],["/tags/Spring-Security/index.html","5e24c6865218158db771f5d747cbe1f5"],["/tags/Spring/index.html","c11642ddc6ad806b07e5c8a2267edd1c"],["/tags/SpringBoot/index.html","e461ae743172e50b6410006c03aba6f5"],["/tags/SpringCloud/index.html","bcf4a81e78cc35e9b8dd197b224f63d1"],["/tags/SpringMVC/index.html","eb7478dfe4f739faec95aed9d0e61f4d"],["/tags/Swagger/index.html","04fdb9c19dec053559ae45ae921d047b"],["/tags/hexo/index.html","2d25ee197747a5f57f657d2b80c2d862"],["/tags/index.html","1b4f83bffc57139c89fd8da6515350be"],["/tags/jQuery/index.html","a3ec44e0a52cc003a121ce7ca53c55eb"],["/tags/java/index.html","ac49cc23ff732744e37bb6aaf557ea28"],["/tags/markdown/index.html","ace59f1dbba5a4717079d78e866b3726"],["/tags/noSQL/index.html","ffa6e2ef48c009814a089f89b00f1bfc"],["/tags/typora/index.html","990b3e6db218fe2f9fa25b3ef438ebb5"],["/tags/vue/index.html","11ac587483fbf4090bdcd75380ae14d3"],["/tags/享元模式/index.html","bf74660723498d9c6a602b4fd2c1e518"],["/tags/代理模式/index.html","8cbcf8079f9e1a60bea1b2543b3cacb9"],["/tags/内存管理/index.html","51f53869ea5049eb553c88ff1779334e"],["/tags/分布式/index.html","3da7da073d34c1fa217c10493346e115"],["/tags/分布式系统/index.html","80f2f3685ae2f8a43fefe1371e0d1f51"],["/tags/前端/index.html","404d554c2eacc22559c5ead27581d112"],["/tags/前端/page/2/index.html","d5d332fd58eaaf8457c028a33bd3acfc"],["/tags/博客/index.html","746a7d734e4ab000b8c960297e549763"],["/tags/后端/index.html","adc0ec32878bf259d790ffc136372d97"],["/tags/外观模式/index.html","354ae57838101b24b64817bd8cd25a5e"],["/tags/容器技术/index.html","c5fd3c0fe630a5ef785b3141fc5bcdc4"],["/tags/工厂方法/index.html","c2cc3f5bd5430f2ec72dbc4cb38a29f7"],["/tags/微服务/index.html","1ac0cd4c3923c6c20c9f3bd7403a2f08"],["/tags/抽象工厂/index.html","9ee6d82d64250eb8556ed0f8d43a4503"],["/tags/持续集成持续部署/index.html","3db41effc26f25ad0e5631735d25c497"],["/tags/搜索引擎/index.html","4ae173b4a13655cf9d6454068136c00f"],["/tags/操作系统/index.html","2ba17462714367785102da505412dbb8"],["/tags/数据库/index.html","518b400928519543c3fbee97ba621e0d"],["/tags/数据结构与算法/index.html","424beb6d7206bd322eb63d901bad3003"],["/tags/数据结构与算法/page/2/index.html","50b3d96e7e221f17aed86877a7e4ac70"],["/tags/日志/index.html","bd6ff64412c5a41d5e626ec04a1e521a"],["/tags/服务器/index.html","777b44bfcc8193a8df7dfd798983928b"],["/tags/权限认证/index.html","bf4b859dbb5c6d7c0a4ccb5f85e9e34c"],["/tags/桥接模式/index.html","2fc53fbd505b3ba74cc65a68387c0c89"],["/tags/模板方法模式/index.html","63016aedf65e3ebd9d2c91ecfe03a736"],["/tags/死锁/index.html","31c92d39c9dc472a7f69690a1facd44d"],["/tags/消息队列/index.html","a2f3b40104d5fb79e2fc93579c123297"],["/tags/版本控制/index.html","1da86d4061879dd834cbefb50ebeb6a5"],["/tags/策略模式/index.html","76a6d5c45880399a6ab21ff6c5b76d37"],["/tags/简单工厂/index.html","6a03a82a4e51c9ac6f6c45be82c7fba6"],["/tags/算法/index.html","c19685f7c761a577fcf6a8c82e09d726"],["/tags/组件化/index.html","bff1e8a3d58455bef678b975390ad7ca"],["/tags/缓存/index.html","f8c8dbabac0e2e3d6868b2ed557539d3"],["/tags/观察者模式/index.html","d25fa71ea3e49310bc831bcf28332866"],["/tags/计算机网络/index.html","6f11272276e7b144821bd0af6897fcba"],["/tags/设计模式/index.html","42577da129869de0caa1bde066a1f630"],["/tags/设计模式/page/2/index.html","eb2685b7370e3ed0e8524b7ce316d16d"],["/tags/进程管理/index.html","0b6338875a2aa453d80125dbe1e6c26b"],["/tags/适配器模式/index.html","15529bed9541b8bb6ea2206df18d7630"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
