/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","8118d4317967328ca6ca805c3b6de374"],["/2021/02/22/工具的使用/博客的搭建/index.html","b8ec9067e7eb8ef08fa089387f9ca365"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","7fda7b549c28d76f504792521c13a3d3"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","c6c25bdeb0bdc55f86f22c01cff7a1c3"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","51469482b8a12fa5f822741ead8ae933"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","cc20a9eff529bbd247662453772c55b1"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","2600636381a249f3c674d4f6ec75e1a5"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","f5277679e6a21afa29edc06136e232d5"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","f3d10ec1246e81ab50bb2087a4a076c5"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","e8960441015aa02352e318110eaed090"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","a77b507fabdef7ed3434e889d9d70c21"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","2c2a684da2c254e0f0ceaa652cb3d4d4"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","995748e4bfb2b632f24ab1d86197eba7"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","cec6b657545e0a5b8b7e34bfded836d1"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","9d13daec195b46be1d929dcb6179d19d"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","fa365efded1b003489bf8f6c849023eb"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","b47c3a728326e26e5f37158db9898be1"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","c7c2d707efd16514be50fab700c54673"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","afbfb9eaedc440dfcb1a90eb2a2f9af2"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","308fd8f320c443b07e481b92c92e381f"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","4abf5be43f404705c557f72c47cab22b"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","173a69268a99efd59bc476c3b492b857"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","a24a964a4240828ef2e80c752cee65e5"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","efbb8e321366a8aa47282a116a5d0bc1"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","2d48d47e7024c7ed8e04b2fa72e5b6a9"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","53d9b8466d1acdb74682ad28b6ba0b14"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","4882d8fddf579df3cd033943f652196c"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","604e8c60546bdafddac06f27e4622637"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","0aa6a248bd489120fe6f575d86a4df4d"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","05037d84395f8890add281861b184cfb"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","77836693c3994fdde913205055cd351c"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","2da56d40ff4bcbdebea9ce9cc9aeeee2"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","462b70e8b8f9d13d272e488858b75064"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","28b028fe39b3c62b1e80e213b00c7ac7"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","a25bd7f3a7a1385fa3a6a10afd006ca2"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","1e9add858a9e4d3a75e30a5cb2c1243a"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","c45b944664cfba25aef39afc283d67cc"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","90a8eaf43910b56482ab4689c980858e"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","a1affc7f75b87d961cf6eb811d7a9f85"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","cf579bab17a94a2737bb7f241ae5242a"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","362f7152d47203ba6cd32853a5f851e7"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","c565b29fb2bce7ed880154dd360a83ba"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","249d02b072f75993125c4354fafed262"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","2ee22ce31e006214c6d742a395636579"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","a04be3c9504b8b50087802ce2d6a7745"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","f6d43f43ec962f1bca9a94be2a2d550f"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","fef45a573ed98eda515563e8eb45fccd"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","9ffa713b382ddc0798b891dd61db8e00"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","277531e2f725130c1374fb5a3c3b453c"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","85bd446db738e4386ba3d37d916244b8"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","3410ec0b8296012e82a6adc8e18862ef"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","ae00c83f9e141a868388f25e8f9c8380"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","ed3fed3c1bcfc1f4e371944f335b3ef0"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","daf576e20827c6741a1b9060dc3c655a"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","7150f029c010d7e62f0208e5d1495ebc"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","a0be355ce3ff80a8cbdb3e6a63a5b125"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","f29f4b62d59212e46d5aa1a622a0aeb2"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","86e83cb3f964c112e60debb4c51fce53"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","18fb5a094a2ed39101ddc85dd6509ba4"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","e212b4c0b0747c5cba59739deb709e5a"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","9eab695dee35c18dc9df7cf47d383153"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","282da71415970e7afd0703a340986541"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","723230f148e0b4f44ceb506e90491ee0"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","2f6de49c863ee59e005b48c1de483037"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","9789422ee5434b9e0aef49481739e835"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","868718be9ea89a5e42596f53a45b6f38"],["/2022/08/17/前端/jQuery/index.html","3e27319bb19bd45787f09d3eacf80e16"],["/2022/08/19/前端/JavaScript/index.html","392ab2e8819f0752bebf85086d24abce"],["/2022/08/22/前端/Ajax/index.html","ba05f9bcc36c824a6657a5ebd9de26d6"],["/2022/08/23/前端/Promise/index.html","af10dd183d02f51e5fc77dc7449b7941"],["/2022/08/24/前端/Axios/index.html","a0ea084439d5cbee6ba6e8a0c1536290"],["/2022/08/25/前端/H5本地存储/index.html","3c30e7a47875c6b213d5a72848923f86"],["/2022/08/26/前端/mock/index.html","e56878c74e1224b4b90beb09ef1087c9"],["/2022/08/31/前端/vue/VueJs/index.html","9608bb93e4997ee319ecaa3056f1b017"],["/2022/09/01/前端/vue/vue组件化/index.html","8f76e6694421301def232a1b86cd9631"],["/2022/09/04/前端/vue/VueCLI/index.html","61ee5f60c955b21608486fd997d62ff5"],["/2022/09/07/前端/vue/vue实现动画/index.html","6d85131e3ceada1c9a26ba1183243e9e"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","d261911b2d49e00322f68245b2cabdf3"],["/2022/09/10/前端/vue/Vue异步请求/index.html","a08cbd9b60b6fb0abb642a7f5f857f95"],["/2022/09/11/前端/vue/vue-Router/index.html","d7eda85d8bea580eddb83959eba6315a"],["/2022/09/13/前端/vue/Vuex/index.html","e18ae1c81f70d051e3f0607dd0a28edc"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","21c4fadf34d5b2515881c5f2d7dea45d"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","336993d3537ad0fadf7cf6dd52fd0b4e"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","a8eb3c34bc77171ba95f5c7fb5f549dd"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","364cd1dd2350ea40a7db87d5c91fe38e"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","cee40ba34569d5e71c29020dd55463c4"],["/2022/09/28/DevOps/Linux/Linux/index.html","6eb52ec5ac2f552e2a0cd9c67999d5f1"],["/2022/10/02/中间件/Redis/redis基础/index.html","15d72943ad7062f29581cfe215f373e4"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","f9e68610e67533abdfe37cb9d575d60b"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","cdb8f7ed97b02e3125634be1c94a45b4"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","72817f107eb37b1f265227c7cd4d1aec"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","cb74596aa4008156cd1e366405f86422"],["/2022/10/17/中间件/Redis/Redis集群/index.html","4cd1139f9d34323ac742b3dcb57edb7b"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","96d318c03204027e7ec52cbc14e10069"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","d00a24f2d57f55b077f30f7420ba33e9"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","d894b4058bb7bc8f9a200799534a30cc"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","74ba3f387eed9d9d2ba5cac53a6f0cde"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","3164676f23f323a4cb52fcb1b7cba277"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","169dd901e38ab6ea2dc9ba8c14cc7268"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","a59bd8cc8d84d772ff98d5489a08b60f"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","4a1da87b9a0e0261727718f20c197d1a"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","08a8d62309b9b80013da266216dbe831"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","694a718b6b6f05c4c3e768d91be7e122"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","a49d5b601ae51d5169b77dfb1d02580a"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","9b7dd6bbc1f8c125271ca2f34bf53d68"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","1494de3e0fded5fbc8934988d2b1f27f"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","2d4f22137904153c941f7dbfb1bfca86"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","73d5453d81062af90afa7954926ca803"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","f4fe4409890459f1df1edeef0d925c10"],["/2023/03/10/DevOps/CICD/CICD/index.html","f3942df02a598a5a290ab80d29ade3be"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","4bf37da5cffde8bf790d1fe23dc11e54"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","e5c9ecaee847250c1c47599ac5aa5a1e"],["/2023/03/13/Java/NIO/NIO/index.html","c484fdbe8bd159304b29b963dd9e4734"],["/2023/03/14/Java/NIO/Netty/index.html","b34f2985063028bfebdfde1fd00846aa"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","865296364aa5a6700eb62e57698d6d4e"],["/2023/03/17/系统设计/分布式系统认证/index.html","4bbe7cec47f67abd699f68af16e5bc5a"],["/2023/03/19/Java/JVM/JVM概述/index.html","a7c3bbbd72b730231361e3f533eb7b8a"],["/2023/03/23/Java/JVM/类的加载过程/index.html","0e1f1c8cf409c4d1bf459039917771dd"],["/2023/03/28/Java/JVM/对象的实例化/index.html","f2352ee1a23d3e77d1f94316122bc521"],["/2023/04/01/Java/JVM/运行时数据区/index.html","8eda846b67b1b36cffe5ddc7af72bee0"],["/2023/04/04/Java/JVM/执行引擎/index.html","80ef66a47f15c93296e4973436fa749e"],["/2023/04/06/Java/JVM/对象引用/index.html","3a16680b55f6df0939876174323edf59"],["/2023/04/09/Java/JVM/垃圾回收/index.html","b531ec5721b4683e3710892155e31a28"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","962c52c8d6a791f00271e61d9179a70a"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","0aa020cfae93c7e589eaf6a04a64935f"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","66ff0ff55993aa7bd20b7637e8b0852c"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","86a2c35f044b2639d0efd26620d3afc5"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","a971bf6598fb43325471980496643d28"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","73c3dac8bc59ff73c8e8c33e2eea941e"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","b6b27ee6451ec4812810e9c3e2e9d18b"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","3aa5bb6e88c55e8e41995f56ecc89de2"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","b3764f5ca860a5195d1da50dc1c3dcf0"],["/2023/05/05/计算机网络和因特网/index.html","6be3f96c10a3dee0118a2370ad188680"],["/404.html","22630e9f7801354e7eefea83b87a8359"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","d6e948339376eb7a70b32807d10792b7"],["/archives/2021/02/index.html","e08f49755a853a2ec9acc0bc367c096f"],["/archives/2021/03/index.html","667bc304854ca6684aa42e3e9f307e38"],["/archives/2021/03/page/2/index.html","118cbd0ca5df920983c794e56863ff69"],["/archives/2021/03/page/3/index.html","cdd783b5265a28a863e379a4d719bdcd"],["/archives/2021/04/index.html","267e2a577e3dde7f664cef0816dc6eb6"],["/archives/2021/04/page/2/index.html","4d5cde25e10646aac4a29de7076e6ab0"],["/archives/2021/05/index.html","d83e32ad4cc37b6f4959a7301713eb34"],["/archives/2021/index.html","0a4f664f36b0ace289b0f8983eb7732a"],["/archives/2021/page/2/index.html","96ba3930751e9bda371045ee918ff244"],["/archives/2021/page/3/index.html","3434b84e9cd2b959c33d158cb8be8723"],["/archives/2021/page/4/index.html","ed1f123044516f125a10bd1a8ee4a26b"],["/archives/2021/page/5/index.html","a3e63c31ec13d56c1d1f0462c8bd8bd1"],["/archives/2021/page/6/index.html","001f5235c42c75bcc11fbc2b21c85b10"],["/archives/2021/page/7/index.html","c667e2efa8bb334df559151fa580a87b"],["/archives/2022/01/index.html","b14f581550bd7e594d3b1a3487b8fcc1"],["/archives/2022/04/index.html","6ed0b200df6fae49be17f2b692cde3da"],["/archives/2022/08/index.html","e2561098bfc969493db04d4c04e3788b"],["/archives/2022/09/index.html","a0c925d56a2bcd558ea57b46440c5f85"],["/archives/2022/09/page/2/index.html","76df419659808599b2d1a077b4a9ced8"],["/archives/2022/10/index.html","91630639daa5f53d6834d7d0cd5fbde4"],["/archives/2022/11/index.html","8abdfbb8fe02ed85fd7239f06e1f0b7f"],["/archives/2022/12/index.html","763cf56ac7125d1886803f0a71007e05"],["/archives/2022/index.html","9dba66282144424a8d209698437a9901"],["/archives/2022/page/2/index.html","e58238dfc5051d295d627730803f6351"],["/archives/2022/page/3/index.html","a4f2ae447e9dce8777eabf8308ca9e65"],["/archives/2022/page/4/index.html","4ccd3a76716402327a23f4e65ee233f3"],["/archives/2022/page/5/index.html","114e2a72128d6a94af6f57bf62a69557"],["/archives/2023/01/index.html","4c9e3dce6af79a5e8058feb27915ddab"],["/archives/2023/02/index.html","78b4d58cf165253f4eb251186706ea6c"],["/archives/2023/03/index.html","60a7e41b319ff399bbda63dce830ad54"],["/archives/2023/04/index.html","76d292d415c3fb2dc44afee85cfd09ae"],["/archives/2023/04/page/2/index.html","a807a2ab3d892a03bb59cd204ea2a124"],["/archives/2023/05/index.html","5bc1e554ccddb51d0aa1c00885afb602"],["/archives/2023/index.html","ce3aa48a420d2d7a6892d567c40bda58"],["/archives/2023/page/2/index.html","262ae39f306154e33104bcee1a20b2ae"],["/archives/2023/page/3/index.html","fcbfb8641b954e28934df316999cfe6b"],["/archives/index.html","68f525b823053e151400fc9708e3a4e1"],["/archives/page/10/index.html","c19ecb32a9af78e3dcc2fc421995bb2c"],["/archives/page/11/index.html","b9845bb1c067bfc5e10bb06717ff48b2"],["/archives/page/12/index.html","b334d5e14db73cdaa7095a82bbbfaaf6"],["/archives/page/13/index.html","512bd32eb9c152c708f54ddf42847541"],["/archives/page/14/index.html","7f5f188ec705c73005b684bca24648ff"],["/archives/page/2/index.html","91ddc7adbc3aabbb08a078f88be19af1"],["/archives/page/3/index.html","ebb8d3d0274c26d22d89d46922f3edf5"],["/archives/page/4/index.html","205f3266bc2cc38b1e4347b81c88e745"],["/archives/page/5/index.html","ecb9852b3a2807d2f34f34ecb68e227c"],["/archives/page/6/index.html","efa01deda3d629669db273c3ee320d50"],["/archives/page/7/index.html","7bc82413ecdc317dbecf7b5b7bfeef83"],["/archives/page/8/index.html","7e20bf113d72f844e8f75edd5e88db03"],["/archives/page/9/index.html","6e6914dcecb439a599df6a7ed443175e"],["/categories/Devops/CICD/index.html","9781068767a798249d3d615b7c267ecc"],["/categories/Devops/Linux/index.html","e4d582fcc68fa1b68932146692bebb6a"],["/categories/Devops/index.html","eb55ee8b45e8fd8c0301b806b28a31df"],["/categories/Java/JVM/index.html","6b33f87064054c17c015f0855de92952"],["/categories/Java/NIO/Netty/index.html","51b847defea9daea1b04ac5f29f5fd07"],["/categories/Java/NIO/index.html","03a934c9bc4a52d54079717370bb5fa3"],["/categories/Java/NIO/原生NIO/index.html","57946460350756da09e4045b741d7ce7"],["/categories/Java/index.html","4b0e31dbbe430da0ee519fe24a3dea65"],["/categories/Java/page/2/index.html","bca6dfc4579712765f6d34da859f3374"],["/categories/Java/学习路线/index.html","737c4cf95ee31c4e9c76c2609678f3f6"],["/categories/Spring全家桶/Spring-Security/index.html","759be403b1ee41dffe64349d1b393eb3"],["/categories/Spring全家桶/Spring/index.html","565e08d68c4848c64739258d8bbc8c39"],["/categories/Spring全家桶/SpringBoot/index.html","f688849cf83705af199625301def120d"],["/categories/Spring全家桶/SpringCloud/index.html","b56b5783c5ed6aa4c3a22de12f7f0eb2"],["/categories/Spring全家桶/SpringMVC/index.html","81d01d5502bd649431583ead719746ca"],["/categories/Spring全家桶/index.html","00cc7fc4c4dae05043e5f75cd5dde0c8"],["/categories/Spring全家桶/page/2/index.html","5f01f15bec60f14d4187d1e02f438269"],["/categories/index.html","2b47a783f25beea907bafcf38cb3bfbd"],["/categories/中间件/ElasticSearch/index.html","f2b42899571ef5e8f46012e99e064bf8"],["/categories/中间件/Redis/index.html","b687b16384c3e28d36c1d187e74c0634"],["/categories/中间件/index.html","0a6396e3d3db0af9b9420e25544316b3"],["/categories/中间件/page/2/index.html","0701b5be08a1a42b06549dfd6e50649b"],["/categories/中间件/消息队列/RabbitMQ/index.html","e719c75896f6a320eac3a152a4040e50"],["/categories/中间件/消息队列/index.html","dd8dcf27a0eff79432a55c02e58922ba"],["/categories/前端/Mock/index.html","b15c668f9ba4e84a89f423883311fe8a"],["/categories/前端/Promise/index.html","0b02a682bd054cb3d215e922b4333435"],["/categories/前端/Vue/index.html","f0235e14161b2fcb7ca6563639775b4d"],["/categories/前端/index.html","80cc0dcf3272cb7b97045ee582ffea1e"],["/categories/前端/jQuery/index.html","9d997155fd0ca5c8a146317c02d1997c"],["/categories/前端/page/2/index.html","e2f4adf16ca9c42587dd9789a4f34095"],["/categories/前端/原生基础/index.html","5d7a18f1f3e8c5e5500bef649da65bba"],["/categories/前端/异步通信/index.html","db38b663ccfb30a28cc6357630b5b919"],["/categories/工具使用/Git/index.html","05fd657c563d5f6075f310734427fab2"],["/categories/工具使用/index.html","7659f7d0d2bb62a9dee5cabb1b2b490b"],["/categories/工具使用/markdown/index.html","2da0fcb5c08866f4e2fa1eafdafe5af6"],["/categories/工具的使用/Docker/index.html","2346699e3c3d4f314df98778be46c46d"],["/categories/工具的使用/Nginx/index.html","ba40aeb6c6ba57a4f44915fd319e99e0"],["/categories/工具的使用/Swagger/index.html","580c5fd41218c8bd9b46718ce8110b4f"],["/categories/工具的使用/index.html","7b51a2e9551b747a25ff01228c58b1c3"],["/categories/工具的使用/博客搭建/index.html","439eac06bf94e612b5a3408ae37aee36"],["/categories/数据库/MongoDB/index.html","d67a1d47c2e549e8c3101c6b2dbb4cc6"],["/categories/数据库/MySQL/index.html","e8fb502dfbfc670bfddc49ea733bed1b"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","db5a0be53c2577ec829519d2bb64b8a0"],["/categories/数据库/ORM持久层框架/index.html","f722fdfa4110bfc976c3cd9bfe16fe60"],["/categories/数据库/index.html","b566438962f0fa3585fec2f6a09aec32"],["/categories/系统设计/index.html","3bdecd4029e82c901246e2ea135bf0c5"],["/categories/系统设计/page/2/index.html","ae55eaf252f06a8717619911b5095c80"],["/categories/系统设计/分布式权限认证/index.html","c4fc7982b444e000321d509a7d27e803"],["/categories/系统设计/设计模式/index.html","e4fb715ca907719e15215ca41eeed553"],["/categories/系统设计/设计模式/page/2/index.html","8f8ca3af84038a026d00c2ff4a85bb8c"],["/categories/计算机基础/index.html","0c38673bd28770ed1a896420fc2dae2b"],["/categories/计算机基础/page/2/index.html","6f0d2fbd1fad4e4379b09e8acd983ac5"],["/categories/计算机基础/page/3/index.html","0dc16c81a5468fc601674f12fd4c9d07"],["/categories/计算机基础/page/4/index.html","cd5707fa37cb0f6ee199cef1c21f0a33"],["/categories/计算机基础/page/5/index.html","9ef5936529c803cc32057fdfc104a5a8"],["/categories/计算机基础/操作系统/index.html","ff5bd77e33fa2dad1acb21a2d1e4b743"],["/categories/计算机基础/数据结构与算法/index.html","e1cc31ec4879fcec54dc5ee9e166d68c"],["/categories/计算机基础/数据结构与算法/page/2/index.html","2467dc57efb5da9bb6d2f3b6ac86679e"],["/categories/计算机基础/数据结构与算法/page/3/index.html","89efda30a71198cac345b4c0485fbff8"],["/categories/计算机基础/数据结构与算法/page/4/index.html","588028c65eb898e6d3c6ef6b44d616fe"],["/categories/计算机基础/数据结构与算法/page/5/index.html","8118561df14fe115729a4e8a79509faf"],["/categories/计算机基础/计算机网络/index.html","8a4d5590ea92d4a6abbf5801daa2bf41"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","dc644c9d5a49cc19ab326373005e7aad"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","57473181b91a5dc519283698da8cb86a"],["/messageboard/index.html","11b43961fbd5c9054f8b65c557469c6d"],["/page/10/index.html","cf515f359b012e52ec06c9bfbd4ba148"],["/page/11/index.html","5c5c2e3aaf0d14ad43c739f22c8950dc"],["/page/12/index.html","2c9804f7784a628e302fb2ee3257a690"],["/page/13/index.html","f734e2836bcf5435114fdb46797ef204"],["/page/14/index.html","8e78295b0f1e5fdb0a06e875b40936f7"],["/page/2/index.html","7c8c940b9564b1659136a467bce164c2"],["/page/3/index.html","b7341fe16f6d039e990e8695c0044bcf"],["/page/4/index.html","9055b5caba3db5193f931840a78d6415"],["/page/5/index.html","bee75c0991403d7e5aa431bb27e88d6c"],["/page/6/index.html","db36fc513f881c519a8fc46684cb7ddb"],["/page/7/index.html","e600cf2a389d0d97bb0e6bf349a8acb8"],["/page/8/index.html","e99fc926984f5f42402361f8bfbf0cee"],["/page/9/index.html","755324b5ccf705b436a9e146d99bca4b"],["/sw-register.js","39a91c43e655aeea418b56dc585b16fd"],["/tags/Ajax/index.html","f4182fbe81eba48406d3163a330ec9ca"],["/tags/Axios/index.html","b88b51af540a566388e0c11f6e9f63a8"],["/tags/CICD/index.html","8e2b29bd1b4c1ef6cc137a00ef5565c4"],["/tags/Docker/index.html","d6dc6f4ca28b3ca47cc38f6303e6ba2b"],["/tags/ELK/index.html","648eb3ea33f671e3ea86f27453bbce41"],["/tags/ElasticSearch/index.html","94faa32deabde4ae851df783abd849f0"],["/tags/Git/index.html","a6d148fba06165f99f32e3e4fd6c674d"],["/tags/H5/index.html","fea3d4a3a70c51c67d86cd749fd629e6"],["/tags/JVM/index.html","81d5c69c11922b6aaaa33828a9f9c4d3"],["/tags/JVM内存模型/index.html","83128038f59256b5df1a18c518486fdd"],["/tags/JVM执行引擎/index.html","ffd02c15609d3375695551c703b1d49f"],["/tags/JavaScript/index.html","4555776e08261ab46c291e8abcb6fed6"],["/tags/Kibana/index.html","09c0bf0de5096cd8e828f04aa0eb32c3"],["/tags/LeetCode/index.html","d6ef7a7017e973e475e4714bbd6d0b73"],["/tags/LeetCode/page/2/index.html","89fc2bebc91a151f4be099830189001f"],["/tags/LeetCode/page/3/index.html","be70bba7c44a33678aabeaefcee2779d"],["/tags/Linux/index.html","50918ee4c243c1cfc4c3b6e287129d08"],["/tags/Logstash/index.html","ba756025e34633d441ba2c99f06880d2"],["/tags/Mock/index.html","27602f3b904aa63db071058f7ee7ee8b"],["/tags/MongoDB/index.html","6d069d9538912aa881146d96565f7ebf"],["/tags/MySQL-数据类型/index.html","832a4f8132da880abcb89693ff48e96c"],["/tags/MySQL/index.html","31e427abd40fc828f3bc298f3d773434"],["/tags/Mybatis/index.html","3b59db18f3ec1eaee9647928b05fe5ea"],["/tags/MybatisPlus/index.html","6262dfda6e431e254d8861503cb3eb8b"],["/tags/NIO/index.html","d0f9ce27bd564071a0244acf6a64167b"],["/tags/Netty/index.html","b5f1a8cad3c4c39b9da2c9d0769f00ae"],["/tags/Nginx/index.html","440fcb35bdd5f52bb4a796047a53336e"],["/tags/Promise/index.html","f5e1145689f15e4239ce32ac63eae42d"],["/tags/RabbitMQ/index.html","518a4702e9ee4def971b34cdbaccdd71"],["/tags/Redis/index.html","2630a936306b13c24336fa105a04cbb0"],["/tags/SSM/index.html","4eda8bf2ba2c3f04e2c27a7c5e1853e2"],["/tags/Spring-Security/index.html","d4791ed8eeb78ad3c5fd80b6570eecce"],["/tags/Spring/index.html","fca730d9f3744b708e11179e8c9b0e10"],["/tags/SpringBoot/index.html","2c8194d1dc7815baba4c4f8c9aae510c"],["/tags/SpringCloud/index.html","a5fc25595ba5cf81a103e7f16169cc53"],["/tags/SpringMVC/index.html","eb959fe3220e9a699bda47ea4e686b86"],["/tags/Swagger/index.html","d3778211b11eddb5134c2c79a923eda2"],["/tags/hexo/index.html","8618c40a530b4db3e48a4b5304033c52"],["/tags/index.html","c27b9d27ea029ba712b4e49b0805596a"],["/tags/jQuery/index.html","6dba835c28dcfa90c6781cf6e35cd7ca"],["/tags/java/index.html","41a52572ea3e3f5b30203faac28ab821"],["/tags/markdown/index.html","4af5c64a0e23a602c2afece7e619ab8d"],["/tags/noSQL/index.html","17b03f720c92ad6f19c9260165f71621"],["/tags/typora/index.html","8c025d85e419ffc4e435e612554440de"],["/tags/vue/index.html","647d8e87e9f57e17bc102f89d915b03c"],["/tags/享元模式/index.html","3c39372b91cf062d73666c4af4a1e1d0"],["/tags/代理模式/index.html","af10d06abdd05589fdf57da398eee81b"],["/tags/内存管理/index.html","48c168e8e97d2502096c4dd9c6fa9103"],["/tags/分布式/index.html","6c6f8992e4a25e372b5dd23deddd121a"],["/tags/分布式系统/index.html","8798d2206f4c582df93d36b46a0ff237"],["/tags/前端/index.html","b2629a5dd6d9e9ddfdbfcf43515c99cf"],["/tags/前端/page/2/index.html","db9ee49e480a676104582cdebc3b3840"],["/tags/博客/index.html","72cbbd74172f7987a27f8987fa4dce03"],["/tags/后端/index.html","757924abde6691277d8a32505edaa4f3"],["/tags/外观模式/index.html","f77b56fff445945d1f3e850da0db6c54"],["/tags/容器技术/index.html","cf0af86bbd9b1b2965914d2a4ddf635a"],["/tags/工厂方法/index.html","617189a659ff130af23fdf1bad1ff22c"],["/tags/微服务/index.html","a9aaefd39074aea381e7b76f6c811d8a"],["/tags/抽象工厂/index.html","6a570288a22881476def28f93e27e59f"],["/tags/持续集成持续部署/index.html","e3a1e9eaf0bcb53106373d0039eaecfa"],["/tags/搜索引擎/index.html","e3b231d60d62bac7bbeb9afb59380036"],["/tags/操作系统/index.html","0f2388e5456868fe7bac08963c1ba9f1"],["/tags/数据库/index.html","a59c3d84e42a76cffcabf5546d5f92d7"],["/tags/数据结构与算法/index.html","35f4a0f68767efab642912475d8521bd"],["/tags/数据结构与算法/page/2/index.html","6561280a88c70bd5bd7da65f644dce8c"],["/tags/日志/index.html","4842cac4c9ac1da31a9601afbaf89382"],["/tags/服务器/index.html","5bb19fc9a669ac3ff3215a3ac438a18a"],["/tags/权限认证/index.html","daa48a0d7e8163dd9bd9a594e94a6f2d"],["/tags/桥接模式/index.html","3b41f45735acb32321f275ab5b4a4578"],["/tags/模板方法模式/index.html","284c070799af10a1c92860289a216fb5"],["/tags/死锁/index.html","a3fab5c3d6ff52eb3a892afb80c1d6f8"],["/tags/消息队列/index.html","2fa51873f004f87baca1bf773a3c2b40"],["/tags/版本控制/index.html","7174887aaf26e446c08f0b485c48e2dd"],["/tags/策略模式/index.html","8d0f200f274b43e53ba33e1b59a93c6e"],["/tags/简单工厂/index.html","0a6fc850780aaabdb4118c354d670db8"],["/tags/算法/index.html","f37492b32f4ca19ad04c8562ec3cb7d9"],["/tags/组件化/index.html","9ad97bf79e50cd630bcc934ec7a81762"],["/tags/缓存/index.html","808e5af67ccef6500a0e5decd060b628"],["/tags/观察者模式/index.html","77063836107db0f4703997ce841bccc4"],["/tags/计算机网络/index.html","a38e60986fc38d2989d8d339332c83e8"],["/tags/设计模式/index.html","903777d84c6a521eac63c38fca380e16"],["/tags/设计模式/page/2/index.html","35e5b19b416fd0cc21fc44b16ad57e2e"],["/tags/进程管理/index.html","091abcd50e3d1b356f0e34f9183ce09d"],["/tags/适配器模式/index.html","a3a539107c3e2e8982028832cdf84278"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
