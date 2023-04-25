/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","5cccbda8bbe5c1ca6ebec95bedb00ce6"],["/2021/02/22/工具的使用/博客的搭建/index.html","4ab932eed40b3f1f3b0fa41264d062c1"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","d5093d907d63d8bfbbcf462880cb05d6"],["/2021/02/24/mysql命令大全/index.html","17d83e35f431094516b930b1c1129f2f"],["/2021/02/24/mysql数据类型/index.html","a353343308837b538fd2d94ad945b93b"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","8fe50ab23b30da65256d17fed634eabf"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","33de728c2afca24e57f5e32f616af322"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","0ddf2ee11bf581cc73837ccbe37c76ff"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","feea21b112369fe2c0f12f6ea85b2fc3"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","cb9fb98decb9e5163b86dd74a49e5c9b"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","38635de75626bc97f265c0dbccd3d86c"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","b4f792462e4a19b2d0e1b713f12eb22e"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","5a7b5ec9a7cf36fa9f967dc102ac0c36"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","8b0390edae45de96378caaef81b4c244"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","276cb7a5a218eb8de1432617e8244205"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","d7278f129ba6425e8dbdcee241f7c8f7"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","23c6673a3ab1b1c6a7e54f5a63cb6eea"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","328bec4ff9f33b41ce02ca3a369003bd"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","675c05b4d7b9c98c439e3344ada0e0b8"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","eb585ceaea27f0400b008232ba389c05"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","63176d6cdfbc81402d52f328f0bdcf9c"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","01b2b8455f95f2a9b202210998ef5766"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","d8b889ed5d83f1e944afed9224a794c2"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","f3d7652c2efb27f2ece92915a6fcd2b6"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","8234b8a8743b81d84fc654ce4ed1c639"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","1b53b221cbdd664f2232ca7e6235f1c8"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","2e9142c3826ce336e3d24c1eab2d3ffb"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","50b195da7e1d912a573d0ba77a78db7d"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","ccd8b9487dedba446d2e149b76d2d6b4"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","e5baafc297fcc3e341eab582d90894f3"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","63ce3e78dc11bac16e857d9fc733c635"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","493579edd535657fb89835368de07324"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","1b21e7559e2d11c6d3370d199a3201ad"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","ecff8d80d5fb60e5a66cea13c1b3dfeb"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","33b0c877a871aa42eade43acf84229df"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","7288bf9c9b5dbc65cd71b1b852405cf5"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","bad558a4c940c92ef4e3a5c55f4746c4"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","f4287cfab684ac1cd22416df4d7c08cc"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","866f95ad8ef6534a211578c713dfcb77"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","0887c1b290461b69c3356de0e3f625f8"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","87af7176607091c94457c78ca9d89f99"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","5ed4e4ec3665cb39147d3bb292051887"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","9e7e6254404788f7bbb9517356ac0a6f"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","98637963e73e0feb1d14beec906037de"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","0a41d2689fdf653c6391b1727ee4c3f3"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","76ad4137cb69d191dafa6d5343f6cb77"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","66afdf72341f8036cc802dcab1e910e4"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","e4d2a68fdc55594e5b360fc779fecdaa"],["/2021/04/14/Mybatis/index.html","57b336f8bdead09ad42bfb1b4bd8536b"],["/2021/04/15/Spring-1/index.html","544455d70ab5509c866da3d5023f2fd5"],["/2021/04/25/Spring-2/index.html","ceb2a86dcf458a9e11a0382889e9c1cd"],["/2021/04/27/SpringMVC-1/index.html","99bbc048452902b852fcf45f987e28b0"],["/2021/04/29/SpringMVC-2/index.html","376b538905ed99b9118db664d9377ecf"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","7a0e6d248a3a95f1ce36b14cc53948be"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","2882bb4f05f272b072d9c3b470e03fdb"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","42fafdf0e1c0afe10ea8c63f10e387a4"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","c155dc3a34a829b2a0996c54c8051e1b"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","b357589647e58b4675414615abd8d1c4"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","ae46730f26ac269e88c4c21b76f944ad"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","a26deb8ed51025b234f7d3f5509759dd"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","a9b66d749e9aa27653ce99c254a4051e"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","6796dcf144bcee6a71816cd3d4d95d88"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","c21df31807f8b4ceb4d7177ca3f3c463"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","7ad5d459aacaaefc1e920641761de045"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","626b5b71e3829d419c3ef7fa63772ccf"],["/2022/04/04/MyBatisPlus/index.html","06af24302deaefdb8be506764518a6bd"],["/2022/08/17/前端/jQuery/index.html","76e5b7861d93559a724f9e324f04ae15"],["/2022/08/19/前端/JavaScript/index.html","0ab737c49e6dcfa761b983758b355ed9"],["/2022/08/22/前端/Ajax/index.html","b430d429276bf6b6bcaef1f1231d16b7"],["/2022/08/23/前端/Promise/index.html","9c06b68bf6d07ce7f47c80c0a60f5c70"],["/2022/08/24/前端/Axios/index.html","7fb8a6e4077328c1ff4bbb9ee3c1d010"],["/2022/08/25/前端/H5本地存储/index.html","707ef8b9b7e01be8c4fd0776565f3495"],["/2022/08/26/前端/mock/index.html","a143cd53922fd9afafcc07b24677ca0a"],["/2022/08/31/前端/vue/VueJs/index.html","6e176fa41ccf88c16adc7362fcd8a8d1"],["/2022/09/01/前端/vue/vue组件化/index.html","3c7fe97795b0a30830c1f542eb4ecafc"],["/2022/09/04/前端/vue/VueCLI/index.html","9ed2281f2a85bbb9b5818cf6fc7dd3e3"],["/2022/09/07/前端/vue/vue实现动画/index.html","044ba474d5862efb43f0b8be566a05f0"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","facc0337fb839cd950cd4140f550442e"],["/2022/09/10/前端/vue/Vue异步请求/index.html","49dfae5f498841781a55e21384752857"],["/2022/09/11/前端/vue/vue-Router/index.html","b9da3d6838a3245c4258f6fdb50b8ca0"],["/2022/09/13/前端/vue/Vuex/index.html","99ccd59a9f11524212b3eeb45aad355c"],["/2022/09/15/SpringBoot/index.html","0572a887b61d7e299b6669d6fc089664"],["/2022/09/16/SpringBoot配置FastJson/index.html","bc526ec75bef05cdbb94f02154c64dc9"],["/2022/09/19/SpringBoot参数校验/index.html","17bde0823d13131d6d917a0141fcdd55"],["/2022/09/20/SpringBoot的异常处理/index.html","6eb44fb3047bd586886b7f8116c05400"],["/2022/09/21/SpringBoot统一响应处理/index.html","b8e17af8f8388540140514d52545e3f5"],["/2022/09/28/Linux/index.html","941d994116759c3dcdafa5e57645b3e6"],["/2022/10/02/中间件/Redis/redis基础/index.html","6a10cce30c550ca5b83804bbd39383c3"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","2b830fb4b6979b976e92c9a4af4163d5"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","26e0906964ee62246e7a88493593ff0e"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","85f03db4723eb97e43ffe50eb243dcc4"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","4dc49721b7a93bbab9f24aadb6fab3bf"],["/2022/10/17/中间件/Redis/Redis集群/index.html","81de2cc5865ba2cfb68c31925294ccb4"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","55c7b421886d2d7615944b42fa5a91d5"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","59e7b72539deb4586d6308b1d9382e37"],["/2022/11/03/Spring-Security/index.html","3b7d42f6221df329211ae2b238b71637"],["/2022/11/08/SpringBoot日志/index.html","8c432cfc9d8620f3db299cb9f48fb6d1"],["/2022/11/11/Swagger2/index.html","91c1ffc2581625bbb1e42ef98bf08f96"],["/2022/11/21/Nginx-一/index.html","a8b4a7d03c5e43fc6617488de7ba0bde"],["/2022/11/23/Nginx-二-代理服务/index.html","8a0561ceedb702a15019f9fd0d67bae4"],["/2022/11/24/nginx-三-负载均衡/index.html","f9827d060bf1ff799b6e293c1f67a7ed"],["/2022/11/26/nginx-四-缓存集成/index.html","9b477cb796d41e59b2d012f77b4fea2d"],["/2022/11/28/nginx-五-动静分离/index.html","1d8691b7d72360eb6fd5c7c774b29712"],["/2022/11/29/nginx-六-制作下载站点/index.html","bc74c045fee2619268fa7c84b417d375"],["/2022/12/06/docker基础/index.html","cf8f960963c483f15eb9eae694fc2943"],["/2022/12/09/Docker高级/index.html","fec6e7c5de94924cf8c56f6fd0b64a0c"],["/2023/01/04/MongoDB/index.html","60b0eef61d550964fca667316ace6b41"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","2fb916af41199700292c71808acfd1f8"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","1e6cf8d87544670bc24120c9a32f3fae"],["/2023/03/10/CICD/index.html","c09b025aaae97e7081a28e0fb8a0d685"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","afdbf8717a193e0c9041bbb5cb142aae"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","971cfa241ee46cd92c29369187af8287"],["/2023/03/13/NIO/index.html","543e92d20b38cb6726b0e5b02cd34b86"],["/2023/03/14/Netty/index.html","eff9e474f76ccce59984ea358a7d243d"],["/2023/03/15/SpringCloud/index.html","83733dec97de2b6e107bdf205047de35"],["/2023/03/17/分布式系统认证/index.html","7427460335fc723301f95fe9c2571902"],["/2023/03/19/Java/JVM/JVM概述/index.html","fd7fbb81b38dba2cf8fc65633cadf9be"],["/2023/03/23/Java/JVM/类的加载过程/index.html","c7ae7eccce8db8923d6aee70305b82c0"],["/2023/03/28/Java/JVM/对象的实例化/index.html","699d187222062beacad684e8fafd7ac8"],["/2023/04/01/Java/JVM/运行时数据区/index.html","d6d4b67ed117cf6850d1de1faabab356"],["/2023/04/04/Java/JVM/执行引擎/index.html","855d1e2eefacb1febfc6794df167838f"],["/2023/04/06/Java/JVM/对象引用/index.html","8bf209d63714f1592b540e22c5a154f2"],["/2023/04/09/Java/JVM/垃圾回收/index.html","c3b8f27d8d4749af4dd2cda87e95dd0e"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","85fb3f4dac56809a8c8a53b795ed34ac"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","b1b427cda33156a37890bbf76e826b78"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","cad69d8364b888feda3da6c84740bcf2"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","512bee0b13bb065729381af9ccc1ef2e"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","b08f271710dc27aa87ef15b023f204b3"],["/404.html","140724c8266c5b565243214a49d1b883"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","a4c7822a9ec650a5e4cef73e624fbec7"],["/archives/2021/02/index.html","43ef4d95b9e3eb9a268f4f1668f90113"],["/archives/2021/03/index.html","74abb76014f958020c24eab073499628"],["/archives/2021/03/page/2/index.html","992ab0b404cd7434396504b72174ce3b"],["/archives/2021/03/page/3/index.html","bdac6e487f8b3f1420c0abefd0719ed2"],["/archives/2021/04/index.html","c299de725715a8dd07beb2927ba1403b"],["/archives/2021/04/page/2/index.html","8ff098d93bf39d937c87e0d84a73c245"],["/archives/2021/05/index.html","5ad3955b16b8e5bd61fe6847d1a84959"],["/archives/2021/index.html","fdebc2f358099b653e1e18d4222731ab"],["/archives/2021/page/2/index.html","19607e2e46b1a0ddfd06831b345fd5a7"],["/archives/2021/page/3/index.html","cc6b7b6d528b12c58fe17f617a579021"],["/archives/2021/page/4/index.html","bcaf449b3722eb507868abe187ebb811"],["/archives/2021/page/5/index.html","13f26ee5014f77d6890880c6da7b8735"],["/archives/2021/page/6/index.html","81d8c2feca5b36dae8a889aba7738db9"],["/archives/2021/page/7/index.html","70a0e88f8eee716571eaad4597357014"],["/archives/2022/01/index.html","a849c7c064f26871d3a60d39d8013eb7"],["/archives/2022/04/index.html","1aa0a9866d5403ddf79e246e0aa91ab5"],["/archives/2022/08/index.html","27bc78d9f473085100ce0d508c4f4eff"],["/archives/2022/09/index.html","7e861698bd38b3b1b960a05d62e18d44"],["/archives/2022/09/page/2/index.html","7893e8ee5f4c34ab49ae3d207ed6b8ac"],["/archives/2022/10/index.html","f22e3c1e68ec1341dab68637cc51c6d8"],["/archives/2022/11/index.html","9e84db7691a6ae1e34471041fa7d5887"],["/archives/2022/12/index.html","f7a080cda5048d83b8fa5cc4b21c2f50"],["/archives/2022/index.html","5e4a3e016cb0468b2a39f18db9d2d360"],["/archives/2022/page/2/index.html","2e5a1652c0200df42b0afe03aa768dcc"],["/archives/2022/page/3/index.html","bb0451395d48007eaf35b2225114f774"],["/archives/2022/page/4/index.html","b5df9d6909b88f0019dce29f7ad3ba7b"],["/archives/2022/page/5/index.html","94e5ad4058e82bd9b700be8b57e0f08f"],["/archives/2023/01/index.html","34a3759656aacdf4d65656fb0ec2e6af"],["/archives/2023/02/index.html","8648d79a67752b3792f325965f15c44a"],["/archives/2023/03/index.html","86a88339d93d4bf6e0e513f41b6ddd0c"],["/archives/2023/04/index.html","7df6ac146d2f8627985320a3550d1c71"],["/archives/2023/index.html","717d07b115f84b681eb3ec00a84d9176"],["/archives/2023/page/2/index.html","651417f41534f5ce206ff5ce9e9c918b"],["/archives/2023/page/3/index.html","197001df14400aabfcc298f319560d12"],["/archives/index.html","dd3aaddb693c00a3a67df8cdc524fb3b"],["/archives/page/10/index.html","41480e635687522e5cb8c3c0ff18cf35"],["/archives/page/11/index.html","09c0f15c4e900b4fbd4aca4ae38e66db"],["/archives/page/12/index.html","8369783f79b9809a6d4153d7cdfe0abb"],["/archives/page/13/index.html","496b713ef76d2fbbdc482ed70f584bf7"],["/archives/page/2/index.html","786b84323566dc481868aabab67a3039"],["/archives/page/3/index.html","cf0759d2b8910cb2e0064ded429452fd"],["/archives/page/4/index.html","79f11f9b870c3fffa6813cc9c020bc75"],["/archives/page/5/index.html","804ef31ed0cfcc1480da24fb81974a87"],["/archives/page/6/index.html","510104e878b1685b351c6a2088e3cc06"],["/archives/page/7/index.html","0901d1fcbdb654d75936f40fa8c945c2"],["/archives/page/8/index.html","549296fdf830f039d858511686a96b64"],["/archives/page/9/index.html","f2fae4950a1044e5ec4fa2a9628d0aa7"],["/categories/CICD/index.html","58431acc892656c71d23c8267fcbaf27"],["/categories/Docker/index.html","36fbfb6e918c843fa2d9767331e17323"],["/categories/Java/JVM/index.html","5b6de6c3ca8690d6a390f4dcf3b1c3c6"],["/categories/Java/index.html","f2e8444c7c9b0be755b9011bc757647e"],["/categories/Java/学习路线/index.html","e724edeb69a87dc731627e5871c05641"],["/categories/Linux/index.html","d22430186ca0916f6ed642225b93e0aa"],["/categories/NIO/index.html","8cd161bdec8e3b3cb3fd69b854b8359f"],["/categories/Netty/index.html","750b91b80204611862625ff81766df29"],["/categories/Nginx/index.html","362f485619e0b06d4d457711bb31756f"],["/categories/SSM/index.html","daad74a48c8de8463db57c29cbae61d4"],["/categories/Spring-Security/index.html","485f0349c6d9791b3da23eb3b36b1984"],["/categories/SpringCloud/index.html","3084579e78b5a131d9ab41f3114dffa1"],["/categories/Spring框架/index.html","8680bedc12c6071ed53441500182f918"],["/categories/Spring框架/日志/index.html","c73403b2860429bc08775adebe362108"],["/categories/Swagger/index.html","35bf8d77cdd2b30c2c6ae09ae18cd0db"],["/categories/index.html","69130fa50fe692eae0d37238ec518125"],["/categories/中间件/ElasticSearch/index.html","8a7f32b1623bf2b0dc13aa6c515a68ed"],["/categories/中间件/Redis/index.html","43e2a53080bf8276cfd8d61192e6e82b"],["/categories/中间件/index.html","9afe53e75d9cce0e7799ecebeb3c0c9f"],["/categories/中间件/page/2/index.html","41f67a94c4293bc0db439e4658c5472b"],["/categories/中间件/消息队列/RabbitMQ/index.html","204b1e85d986024bcfaff11433a772d2"],["/categories/中间件/消息队列/index.html","2c281f275a8d5976129c99c6da453eeb"],["/categories/分布式权限认证/index.html","9685de27a4bb5151e71bcc1363ac6050"],["/categories/前端/Mock/index.html","0aea454af986dc8f20d72b24c68c306c"],["/categories/前端/Promise/index.html","d9e478658b578f45e9365f75917e2ab2"],["/categories/前端/Vue/index.html","fff4def83a0afb0ef6192ff4d76ef0d8"],["/categories/前端/index.html","f4f145e5ccd5f4d7bba2836339f2fff0"],["/categories/前端/jQuery/index.html","0a70ddc3d6c8bee52d536a2aec675775"],["/categories/前端/page/2/index.html","ce2d745b0c6ad7b9c997417df2739a1c"],["/categories/前端/原生基础/index.html","ac32c3930e850b71f9c4b01f2a46b53b"],["/categories/前端/异步通信/index.html","e1f17bc25a0241f425515f83f5e51b94"],["/categories/工具使用/Git/index.html","ab1f76358427bb8913e3b98be8b250d3"],["/categories/工具使用/index.html","17a0078d9fe1c624b3cc2c0a0c34054a"],["/categories/工具使用/markdown/index.html","365bebda5836536c297ff02dc4aa05d3"],["/categories/工具的使用/index.html","119832172c028b404b7d6fc98e22f0d5"],["/categories/工具的使用/博客搭建/index.html","549d19b31cc2c399499a5f2421996d37"],["/categories/数据库/index.html","d9022a5166d9a2417025513ac3c0f358"],["/categories/系统设计/index.html","3d99965970070510a235a48e710d206b"],["/categories/系统设计/page/2/index.html","b0885335fef4b2d0971fc7516c32315a"],["/categories/系统设计/设计模式/index.html","6a42a71eb47ac09f49249a9c6a618f29"],["/categories/系统设计/设计模式/page/2/index.html","90edb24aee05c626a369e88045244e6f"],["/categories/计算机基础/index.html","6590bcc142d0ae4723c059ad1e736189"],["/categories/计算机基础/page/2/index.html","bf40ce85490f24fd034fab7887e53241"],["/categories/计算机基础/page/3/index.html","54677e709dbe5fd68183ab627734e7a3"],["/categories/计算机基础/page/4/index.html","b468c55e526c8bc8130b048c668dabc5"],["/categories/计算机基础/page/5/index.html","e2c2ab086523974d37a544994b57335c"],["/categories/计算机基础/操作系统/index.html","1ee12696449a4d21e30f2dd66a0bdbb6"],["/categories/计算机基础/数据结构与算法/index.html","d9971a3f8c19ed7d56d7db6ef6bf8e2c"],["/categories/计算机基础/数据结构与算法/page/2/index.html","8fe113df5ffe0fcd8ceb4098801b80bb"],["/categories/计算机基础/数据结构与算法/page/3/index.html","b33a4ce773a5b401e037bc5fd9b8e723"],["/categories/计算机基础/数据结构与算法/page/4/index.html","a5c1f9693363a9a8af117eb93532fd70"],["/categories/计算机基础/数据结构与算法/page/5/index.html","3712291870383eed7c11907ec093efc8"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","80a2d0c8dda122989b438c22f244b750"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","e95cf93c43599e8cbeaeef46ed0fdc93"],["/messageboard/index.html","759e9e62da65d1beb935ed8f69efb6b7"],["/page/10/index.html","b12790ca9f74f20f9fdd100b74216b03"],["/page/11/index.html","18df41446bc6d68f0de4776e744cdbfa"],["/page/12/index.html","52515218ab94258327c259e046d4e04e"],["/page/13/index.html","e51c2c1fee2f891188beffbe33282eb9"],["/page/2/index.html","5660e0bfd920e726f119d859cd907610"],["/page/3/index.html","5da8f9d3ead7724f3eb06a274d073eb1"],["/page/4/index.html","bb490491bbe2ec1855a35b4fc4976bd1"],["/page/5/index.html","b1fd63f1b7d3a892442b36990cbd58c2"],["/page/6/index.html","e6f4bcb628628cd0631440bede9cb10f"],["/page/7/index.html","5e9d211729717ccc2dc83a0592b27aa1"],["/page/8/index.html","4db2de680c2ecf6a668f73886f916f0e"],["/page/9/index.html","5722d358ea1b6aa42a2e04639ef73fd7"],["/sw-register.js","d67b9d2b525e424eb2b805761dee9929"],["/tags/Ajax/index.html","951510f6570f90652b6dc902b6dcf89a"],["/tags/Axios/index.html","4b4565768dae11e5644db4753419c8f5"],["/tags/CICD/index.html","17ebc679f27cf63aa4d5a4ef9920dc3a"],["/tags/Docker/index.html","a92c3eaa142caae91c106faefcc1f259"],["/tags/ELK/index.html","29303db0554d8868f2c57808da01d0fe"],["/tags/ElasticSearch/index.html","fe3a016916d11b4b3e5aaa4c4cda49e9"],["/tags/Git/index.html","1fb56ffff58ea34c3472a250b7123dfb"],["/tags/H5/index.html","aa2c29ed4296fada7413b5d9cf2d2ce1"],["/tags/JVM/index.html","7c169f2ae2859d8dbcc8a375447727eb"],["/tags/JVM内存模型/index.html","8f9146ce7139877fbdc441f71be9bae6"],["/tags/JVM执行引擎/index.html","e5de3a5c70cdf9923649b382def55729"],["/tags/JavaScript/index.html","ce759b3de36aa0042e40474a730bd0ba"],["/tags/Kibana/index.html","2aedee2e624ed99bc578a1c7ff449e30"],["/tags/LeetCode/index.html","2185e7b4d4b8c5de4c99bd04e5e21083"],["/tags/LeetCode/page/2/index.html","583e25478f1cfb4973fbe8a776157fff"],["/tags/LeetCode/page/3/index.html","76a023e10630d696d780d8f015eb6ba5"],["/tags/Linux/index.html","bcfa11caf0376d9afe9d840efbb532a0"],["/tags/Logstash/index.html","b89bb1f87b2bf6b3b6fcb9bf28b2a971"],["/tags/Mock/index.html","4ad2ffe366bb9ae0b23132247c0f8099"],["/tags/MongoDB/index.html","6f959ed52277d45b1961889cdc54afe8"],["/tags/Mybatis/index.html","8e9abe5216c268397597e7720e189b49"],["/tags/MybatisPlus/index.html","6d5116665d0d22e6a620fbbf8ca55045"],["/tags/NIO/index.html","ea5c18c95c3039c35b731f1c7c9dd5e1"],["/tags/Netty/index.html","6d9308606812771591af1dbb998067e6"],["/tags/Nginx/index.html","46235a7dd9e3ba5b55c5612bd495ce43"],["/tags/Promise/index.html","cdeb3efb872d6a6ffdcbe2ea9a2cd2ce"],["/tags/RabbitMQ/index.html","9dd2e3e528875cf1500138f9f1580fed"],["/tags/Redis/index.html","6b10773d5f87ecb9b411056cce4f10ef"],["/tags/SSM/index.html","a9d855a42dd2f21601d8b8746241f135"],["/tags/Spring-Security/index.html","aba8028dfaacb7624dc4d525949a4404"],["/tags/Spring/index.html","033b2994240e95c2316a16c00a62c148"],["/tags/SpringBoot/index.html","c6a29d8c1b2fc2706a0f815c738ff182"],["/tags/SpringCloud/index.html","7683ccde88112b4beedaf54ee5b52b3d"],["/tags/SpringMVC/index.html","7e94e2bf0403f76792eb9a7d042c35c4"],["/tags/Swagger/index.html","c8b68e0289e0bbe1374f5d7687e73ea7"],["/tags/hexo/index.html","aba482c3a973882f46488ac1d093bece"],["/tags/index.html","c533eb38ea71edff3c2dd50e958ee342"],["/tags/jQuery/index.html","2e19f941c4303fb38a2fdcafe91220a6"],["/tags/java/index.html","f80e99432120bff34b1b243438c7bf22"],["/tags/markdown/index.html","1dde4918b47c977ade2704e6725cafa8"],["/tags/mysql-数据类型/index.html","8ee6e0937ab38b09f4c42bfdddbb9d78"],["/tags/mysql/index.html","4bea55ef1220e86cfb2a1f17fa9eca2b"],["/tags/noSQL/index.html","0fcf9b3159faaba0567eebec38861ea5"],["/tags/typora/index.html","f77fa3e4be48ce60e71dc2f577be019a"],["/tags/vue/index.html","de8e48bada378aebd0afdf1b95fbfbe0"],["/tags/享元模式/index.html","c49a53bf417eea1855be97c3d5c939ea"],["/tags/代理模式/index.html","f4065064ce806e1a23dd7e90004a7ca7"],["/tags/分布式/index.html","dc703e849896af2f5c05e283e32017c4"],["/tags/分布式系统/index.html","ee90b9b06201b9374c95c423ca7acd21"],["/tags/前端/index.html","5a6c033818c314d5c6c5983220e2c05b"],["/tags/前端/page/2/index.html","659ac7bdacc8dcea206aca167a3f4180"],["/tags/博客/index.html","be01f2d862cf0d5d5a91c00f767dc0a5"],["/tags/后端/index.html","230735de1934de3594ab84553dcd92a6"],["/tags/外观模式/index.html","08effa9e62cf52e46323a75df66f6018"],["/tags/容器技术/index.html","96ba2cb2ab75a66c1dfde57de2d701e6"],["/tags/工厂方法/index.html","ee0802082324d6cca38d86f289fd6b76"],["/tags/微服务/index.html","0534d3716184e60b10d9853445139c50"],["/tags/抽象工厂/index.html","e22bab2390fc141fb129d1867907dac1"],["/tags/持续集成持续部署/index.html","69d847f3cba0f260b1e4d01c9053ce40"],["/tags/搜索引擎/index.html","143bc6c9f6a1653706a72baab5169238"],["/tags/操作系统/index.html","fe0810550d37c662ca647069b6574181"],["/tags/数据库/index.html","1cb7e750c6b46fc64be233fa25b68392"],["/tags/数据结构与算法/index.html","75ff84d7e31aa42e27309faefdf75188"],["/tags/数据结构与算法/page/2/index.html","7989b379dc69dd33c23e060eb88671ca"],["/tags/日志/index.html","b35de7e02f95ae643759e2bf583310fe"],["/tags/服务器/index.html","60188a53517dc5f52a82ea2d744b798b"],["/tags/权限认证/index.html","74e75e9cc104f85eb21a5ac6de42e34e"],["/tags/桥接模式/index.html","f83770633084fbcb23190267cdeae023"],["/tags/模板方法模式/index.html","4cea6402b72251093e7034e34deec116"],["/tags/消息队列/index.html","8c9804b44911bb6b8157965f4c18ecad"],["/tags/版本控制/index.html","ba684420fa2aa44b9b820cb04ac5d4fe"],["/tags/策略模式/index.html","c879bd8f78be344088556f07f9a15756"],["/tags/简单工厂/index.html","3c0c81e65c121493f6ca0a2f9746bc47"],["/tags/算法/index.html","40aee3ff192f17989564cb6d6dde22c3"],["/tags/组件化/index.html","438a488df1aadb4fa0dea2e7c19e98f4"],["/tags/缓存/index.html","1ee69a8a8a32a81c90d2cee3ef0fc09e"],["/tags/观察者模式/index.html","4d11830563583d0bfd0a9f60d4dbd26b"],["/tags/设计模式/index.html","d3a2171b630cfcd6c239f73c97e7c855"],["/tags/设计模式/page/2/index.html","d41b94563597844361f82589bea5cda5"],["/tags/进程管理/index.html","051e2c6841f8045e1b4e618474ae7af8"],["/tags/适配器模式/index.html","16a9e41c50d6137831d09b9e9e8f1c6b"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
