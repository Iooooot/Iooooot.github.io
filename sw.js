/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","7e6e6f6c8181896f5176e4af3fc810be"],["/2021/02/22/工具的使用/博客的搭建/index.html","7ab2fe789d0749370e813c977adffc35"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","ec6aa9530371f636b415637cbda71db8"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","00b8092289b804266db138efb1a920fa"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","71cb65ba1c3243746de10ae7e8b6334a"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","12068a05e8888df8badc1a7b8bb67ad6"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","b41984401c35a09acece86ffa1c38f5e"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","7c2f06acc99579caca67f79410c9efff"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","2813f6c9b6c000d9c073e2d962ab4538"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","e00364c74d528d14520d11f5f04c8848"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","fd3d477c0f3910336c3e96ef41aa73e0"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","0d1f3b9d1fb8ac050490873a21e5f0e1"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","d4a182627e13f695dc40f6ee76d51112"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","1d899690588c0df60dbc0e0d6c365ca4"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","dd35f31a900088f115d0e1a1dfaf7b18"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","4a06725227def262c1591dd9f6852997"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","3958ba7ea822fb509b541c542005d54a"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","1f88f4306c9dbb92c366ac7cd904c703"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","c618e2da02a1905f9ae142b10f8759de"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","0040c64744a9f10dc21f5e66dd92ea17"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","12e4358f6e9f9718ab11490342e01ab1"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","856712c66d18fb0e89ca4c1d1060f2f0"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","5e2758bfaf66a8905b3d8c1b3ac4b34f"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","aca33b1b7e224b607a26f0d57a0f19c7"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","c9d2082ed82b1e857b211ff3f336c4fe"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","462d8e5547c52933da2cd07d1cd81868"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","8cd418c53d83f1c174a60c07dc589a84"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","e31b0839208987a9101144aeedfcd473"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","b268171c52af0b422092d8a8fe7e4274"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","072367a5bf4a8cf5b3a404f89a13686d"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","f8a1549cfd2e696dcde6a95e2122f550"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","6fe265c11777f118efd52873d06e9b95"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","fcbeaef343822ef1983966cccdde5b23"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","fe5205194d84cc7142ac40dc6afd6a70"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","f0c1c4819d4e4746880703f5be35d54f"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","a21d7f2161df16ca27e51a1cacccb1de"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","c04e74ca6c05db36569a3e488724d81b"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","9132b8a22a1d5d38a78e60339f44c1c8"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","355f001f070ba76a96ea3bd127903bae"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","f76cc33e3d7ee464e63c47111598d22e"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","59338a46ae5e3249e95fc1ff80b3d358"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","2dc43d6feda20ba6a46e9b1440133b77"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","a5396da55402941d154a7eefb79497df"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","f3030fe94438df0fcb7e3dfff6828423"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","184acb0b371f71b8ab2ce6c6956606b8"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","5f7425325eaf8675841fecd560ba1206"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","38c613bbaa44104f10369c33657627ec"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","907ba0fc1b0a92e834d3744d0bbdddc0"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","0b0966d4cbc2abce87dbb5f10fec55a3"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","713989e2cdb4d82808bd42d39bb37814"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","5028d219d280a9b51a96f0b433b8a065"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","005aff3555ec241a78bc3c1dacd117ab"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","c492f2eca824000df726b9c3cd6473be"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","1e95937fb619034a9a4c2f84a11eb8d2"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","24f2d72424632d7a98583e2ca2a85253"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","05306cc5de0cca16dc77508dfbbdd3aa"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","62749520ed62b0ca4cc0d37b30bb27bb"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","c505070ff661d2c31bc14bf04899f323"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","cbc4825ce261d222ba68cf717c573baa"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","adaae799ae47badf495c0553f7d1cd9f"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","2c080d33a746aa0677332108c853d64b"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","5022329d15a754cee4426718a345a463"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","d4006a4a32b993b547445874ded00070"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","a25de2e072dc1b1dade3c62dcc62bda9"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","a6081478977cdd32b708febacc87ba51"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","c16b62e5882fd6dd4fab333f3e9862e1"],["/2022/08/17/前端/jQuery/index.html","1cba67f7207263adad44d2140a9b9587"],["/2022/08/19/前端/JavaScript/index.html","f55ae8eb065880b545ed3cd9c3fb2c40"],["/2022/08/22/前端/Ajax/index.html","377b3000238abf9215f1b64d53979d4a"],["/2022/08/23/前端/Promise/index.html","6bf816b72023b351d17ba57a5bc62dc6"],["/2022/08/24/前端/Axios/index.html","5fc1a6fb7156354ff7f5dc0d1ae9a460"],["/2022/08/25/前端/H5本地存储/index.html","58955941b1b721eac221cee1dc6db3ff"],["/2022/08/26/前端/mock/index.html","fda2298ce04446916c719cd898948ea8"],["/2022/08/31/前端/vue/VueJs/index.html","02bfb72d713977e13ec78b091b5cb83a"],["/2022/09/01/前端/vue/vue组件化/index.html","f094447f6bda9a075dd7ce0cfa56b7b1"],["/2022/09/04/前端/vue/VueCLI/index.html","aedd4314b21f7d051d0f4009358e007f"],["/2022/09/07/前端/vue/vue实现动画/index.html","5c4aeed4cfd14701c8cf92334689b2d8"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","fe076e436844d791077fc59f84248825"],["/2022/09/10/前端/vue/Vue异步请求/index.html","bae84c357afcfbf129d38f4bf0d9c0e0"],["/2022/09/11/前端/vue/vue-Router/index.html","b931ce3d71afa9405ba18f977627b155"],["/2022/09/13/前端/vue/Vuex/index.html","64c95a7af6c896c2ac86d1cfd7716b0b"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","21bd713b92797b461ad8831ae9220958"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","85258849bb6b20c54cc3f563145cd8ff"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","578d59605b45548cbe1744dbe2cab8c5"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","c28d848f2b00aeb0ee35061c89e4f72d"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","bf7733c9b0641fbcec43b1756a80d41f"],["/2022/09/28/DevOps/Linux/Linux/index.html","af6e6fe48e84a383f1548e9ae1675607"],["/2022/10/02/中间件/Redis/redis基础/index.html","e801126e47166f32e2dedadcf34ac167"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","3a7884e04a906eb8a3d63a324cb14ae6"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","68c5d87e736fbb94b24b640db80e74fa"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","6017a754254fa6008c6db447c413d4a7"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","29f13f1fe90d3235ae4dadc149f3514e"],["/2022/10/17/中间件/Redis/Redis集群/index.html","03f9d6a46d16d7ceaf8075bbca4df5a8"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","c7f09f17af7a6c1d11b421dd0ad99638"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","bdfc5f6f154a953a06b0baadf9768e88"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","8ec0a7688bdfe01894fd47cd288affd0"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","d578b721c10cb24327f01754558ff44c"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","f36fe6c0afc761b33b28985f9f9c4ee0"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","2592f6823cf498f4f670c5a3266c230e"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","136220024c6f8ada8f0be50950a5fd9a"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","da1410030d3fdafde8f72500538571de"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","5a51aa89359385bcad383f7478cc3257"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","37c98f749ba93864f77c3d4ae7d076e5"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","c60e3ac257fae7a113ed3f7bd9411a20"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","991d5675a9c2b3bd5f684d952c70c0da"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","fe04d7cf71112ea59155efb397e2b257"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","9eed3ae895c4dc505c16048d110475f7"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","a1560f7314f01ad0071a95c6b329e484"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","03dd2593e35f9b992412e9671a120859"],["/2023/03/10/DevOps/CICD/CICD/index.html","b59cb86772c0987e652cff51650b2396"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","a0c7d940f83dfa8c196a4dd069bcc253"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","4799063125c80b44c6462e41a1c8fd4a"],["/2023/03/13/Java/NIO/NIO/index.html","13ce565fe94e81b4bb661ff7e728e098"],["/2023/03/14/Java/NIO/Netty/index.html","82902131f835a067288bddf4a7688a28"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","6c277729dc58563c5551831dd44fafc9"],["/2023/03/17/系统设计/分布式系统认证/index.html","97b8f539ee3636c3984a31c617dd214f"],["/2023/03/19/Java/JVM/JVM概述/index.html","f216c51b864d9a887700c52f89bbb40f"],["/2023/03/23/Java/JVM/类的加载过程/index.html","916417ec3be82dd114c80afec5e5f8f6"],["/2023/03/28/Java/JVM/对象的实例化/index.html","53a1d1c206278d0cc45cf09c47ae2f4a"],["/2023/04/01/Java/JVM/运行时数据区/index.html","e65f5c1ab168c63450e179bb80bb9694"],["/2023/04/04/Java/JVM/执行引擎/index.html","4be08c5688cfd12119258f0aa2a0546d"],["/2023/04/06/Java/JVM/对象引用/index.html","f9d3875b5e00fdf5abc841594bad7fd4"],["/2023/04/09/Java/JVM/垃圾回收/index.html","5ccf94f0421bc79f0baea57768c99743"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","c1c5e62bf32ba169c530fd20f9016ceb"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","07b88c236379e9fa30cd755d12ca9912"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","5f19620b283661446b278cd8cdc65934"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","c3149d6218c5d7ce3fe773f0bc407034"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","b784f99d5dbe3b761cdeefb57808c0fb"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","714adbaa3153765d2f3222fd7dabae4a"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","c166cb591f43790f14848d8282fee97f"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","bf4b195cc7221d1daa3ee90edd612cc3"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","9edc95f894ea1df87347a90f076ce656"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","0f6e5b2210f5e4aa78e8572ced604178"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","31dcb4bc62644d8c6e454f9fb00af569"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","6551444a9eaeff9cb0984fcc9a19439b"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","51ef7b444d7e724250e88829add0b0b2"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","2e633aeb8a15a1da84685cd367d742dd"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","8aa7d74b89f1dfa94de60aacb0a1ae5a"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","7c08a8eabdfefec5cc5e36ffa6225408"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","6b21cf43822d604fc6f38eadf2620122"],["/404.html","5b5d93a402b17e724da0b9a1a9b6710e"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","a49b34462667e40632b28f6f04e3483a"],["/archives/2021/02/index.html","d730fc8fdc166820b823f6920478b3d6"],["/archives/2021/03/index.html","06b5cb3cd65d96b632d3b5261ee85caa"],["/archives/2021/03/page/2/index.html","5c7903652a2efd27b76a728d7c0b31da"],["/archives/2021/03/page/3/index.html","9711a46c489003efcf03b5fab34a38a6"],["/archives/2021/04/index.html","2a5e8b6b2b1f7bbf249f56c9f965a3f5"],["/archives/2021/04/page/2/index.html","6db44ba5765517c9987054af0dbced34"],["/archives/2021/05/index.html","e64cbdca74d2aac8302cb1ffb8aa0dd0"],["/archives/2021/index.html","cb7887a3b98f4531323cde864eb8ebf6"],["/archives/2021/page/2/index.html","a742a4df42460a72b65a09e916477f6f"],["/archives/2021/page/3/index.html","a30e97dd8f0cc396b63af3574dfd02f8"],["/archives/2021/page/4/index.html","33a1e111d48e7e546210a38f0ae36802"],["/archives/2021/page/5/index.html","9475d5382c424c739d5ad09753f05747"],["/archives/2021/page/6/index.html","da357a689250bc884c5a6a6aab823f2f"],["/archives/2021/page/7/index.html","9644966a8a417800d3a04d319276e270"],["/archives/2022/01/index.html","9f63e108a435004639e44565c8104255"],["/archives/2022/04/index.html","cae24d9f27885786b5a151c437b941ae"],["/archives/2022/08/index.html","d8fdc00920a12a8f7239a3172e055624"],["/archives/2022/09/index.html","f2bc8addedc35c0248f178cfa336e507"],["/archives/2022/09/page/2/index.html","fb0cffc8e2231f06e126441bbedf8dbb"],["/archives/2022/10/index.html","bec38d90b0a2972f21f111ebbc7719db"],["/archives/2022/11/index.html","cd2929a018c5837666f0bde63cd9cf5d"],["/archives/2022/12/index.html","d941224ac692efcee16796c680130cec"],["/archives/2022/index.html","3e664c5f9a83bceef1a083960c629f0f"],["/archives/2022/page/2/index.html","0e7d310c21b7022ca72d7ca6a71fbca8"],["/archives/2022/page/3/index.html","c43a8c36e10056125da0786bc27aa143"],["/archives/2022/page/4/index.html","88d47f70dc56b980649823a0220f506f"],["/archives/2022/page/5/index.html","9bc548d122324f9cee4fd7bb47dbc181"],["/archives/2023/01/index.html","0275af3b43539fbbadb122fa4a0596ae"],["/archives/2023/02/index.html","ccd407479511c54bf4322ce7c51dffc0"],["/archives/2023/03/index.html","b734988feda620e7411363dbdf40c3f8"],["/archives/2023/04/index.html","5505b4bf05d7d1aef0bedb1ff646a802"],["/archives/2023/04/page/2/index.html","dae334cc705621521ccba2531c8afa51"],["/archives/2023/05/index.html","eb07b65c43ef78c4a6d597a919c2f9c7"],["/archives/2023/index.html","cab7814b0fca97667064fd1914b13938"],["/archives/2023/page/2/index.html","f138655cf9c9ddb644557e148c3ffbbb"],["/archives/2023/page/3/index.html","c2eae7eb3c7db2ce77cb76a06422e7b4"],["/archives/2023/page/4/index.html","f8eeffbb25d4f099cbe95c962218756e"],["/archives/index.html","c5b8d266d711e2562f3ff939c575d812"],["/archives/page/10/index.html","161ba70cf853aa57d749c73a9a7aad85"],["/archives/page/11/index.html","53fdf8a304966126c92841d697d61452"],["/archives/page/12/index.html","a82ea025e470a68c075c32c9d4e6dc9f"],["/archives/page/13/index.html","5970e0d9546d263665c7d6dad476b9d6"],["/archives/page/14/index.html","9a839b0c012ed5e8dfc0cc7c6acfec22"],["/archives/page/2/index.html","c38e784df699932cebc6ccddc94e63b2"],["/archives/page/3/index.html","4c41f78abbebc1a1ae25f975f3dc059f"],["/archives/page/4/index.html","705d2978b66e3585089f2e169764ff14"],["/archives/page/5/index.html","a2bec4ce2dd38adb895bf36cd6e2bb8e"],["/archives/page/6/index.html","d5c766f8a3b056ba7f2b42658cd5ecc3"],["/archives/page/7/index.html","f23c1928e06cc752e394a8b2ef680134"],["/archives/page/8/index.html","864612dcd2b4ed9e11a0b22cf4b79538"],["/archives/page/9/index.html","891666e97c6ef1613cacbae7aafd5f87"],["/categories/Devops/CICD/index.html","4b23537ccdb2477e23f72d44cfdc7a0d"],["/categories/Devops/Linux/index.html","bd7ef2a336ac481a0aa73bad0ceb1c79"],["/categories/Devops/index.html","df36fe782262203996b33bbee4f0eedc"],["/categories/Java/JVM/index.html","4d9bf8fa412b70776c3ad0f9960229a6"],["/categories/Java/NIO/Netty/index.html","888df450d575ac2c032cdea6e50547bf"],["/categories/Java/NIO/index.html","eb82c9b314ff4e41885fa03958bb988d"],["/categories/Java/NIO/原生NIO/index.html","8f8076b0a4873b910322cc12643f41c7"],["/categories/Java/index.html","ed0af75f3fd7e011f2ee9c660f64697b"],["/categories/Java/page/2/index.html","37bee1ec0959a81527b62f03264471bb"],["/categories/Java/学习路线/index.html","b95432edb8c1e98694098a552bef8e01"],["/categories/Spring全家桶/Spring-Security/index.html","563c99ee1e4b3c8728e30786d4f5a6f6"],["/categories/Spring全家桶/Spring/index.html","0c61fa32d8c508eafb6f7e53463fde19"],["/categories/Spring全家桶/SpringBoot/index.html","2c89550e13929a650b26029d28956057"],["/categories/Spring全家桶/SpringCloud/index.html","508b8b3ff14df7d1868a1a392fd8b88b"],["/categories/Spring全家桶/SpringMVC/index.html","86aca1ebeb83444d9cd661fdfd933fc7"],["/categories/Spring全家桶/index.html","810c744c81bf279cc9465f7c43b1fc76"],["/categories/Spring全家桶/page/2/index.html","4e3cd340b6d98ffe549feacaf298865b"],["/categories/index.html","d59195e1bde797515877f536ccfb9ac5"],["/categories/中间件/ElasticSearch/index.html","6dd0cdbd3179fd178116904abf879185"],["/categories/中间件/Redis/index.html","ca0be4616313612d6548f7d99f5544ef"],["/categories/中间件/index.html","59babdaba2a0980441537cd9f89b846b"],["/categories/中间件/page/2/index.html","5ba9256945fc3cd1703c70e5eddeba4e"],["/categories/中间件/消息队列/RabbitMQ/index.html","00b677fd41bef8f75112f7dca53d9205"],["/categories/中间件/消息队列/index.html","7a2614e71ab23d924cca24d558e7644c"],["/categories/前端/Mock/index.html","d1aa7debb6a1ac754ccba96a5eba92d3"],["/categories/前端/Promise/index.html","1e409673e46a39fb3fd28ede2d48632b"],["/categories/前端/Vue/index.html","78d848a9eb0430882575b5b8c41df664"],["/categories/前端/index.html","413daec7aa2d8e184e28e226283ad292"],["/categories/前端/jQuery/index.html","964c58bfa975561e042f813b386b135a"],["/categories/前端/page/2/index.html","8d1a755b900e272321e16ef12b7fb44e"],["/categories/前端/原生基础/index.html","daddedf957b94742fde34eb63a8c6ffa"],["/categories/前端/异步通信/index.html","8a2d6f991812b47022406010fb55a780"],["/categories/工具使用/Git/index.html","b250947e180a4037f170741ab6974c76"],["/categories/工具使用/index.html","48df2dd66ba18ffef22b33847c25b231"],["/categories/工具使用/markdown/index.html","bccd87e055f9bf248cba897cf1e2403d"],["/categories/工具的使用/Docker/index.html","5ce429eaac2e86b6118aeb7f12746c27"],["/categories/工具的使用/Nginx/index.html","e834b61ef391aa8e38c1f71133ff2ece"],["/categories/工具的使用/Swagger/index.html","4c0024c7af584f48518e02721ad8b8bd"],["/categories/工具的使用/index.html","76e3125d19fbabe3262bad60b1d1f185"],["/categories/工具的使用/博客搭建/index.html","d6b00eb645c855ca51218889fd67aff3"],["/categories/数据库/MongoDB/index.html","18bfde04dde400e3111d8cd1fad47238"],["/categories/数据库/MySQL/index.html","77565339fe3e3376cef71253df5dc83a"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","2f95c2cc3e6d63cc71b3083f9f00f8ed"],["/categories/数据库/ORM持久层框架/index.html","fd8495b7b7db946d428e5dbc2521274f"],["/categories/数据库/index.html","d540d9ed55474090e0b4ca8cc9bb89bb"],["/categories/系统设计/index.html","043f656fb7ee62e5c23119167b845c02"],["/categories/系统设计/page/2/index.html","1e61d7fa70c523c836bf4f3579d7409e"],["/categories/系统设计/分布式权限认证/index.html","7f799b1a41de923a9fb2823822c06284"],["/categories/系统设计/设计模式/index.html","0f647cc651dba1415cc98fbe5fbe5013"],["/categories/系统设计/设计模式/page/2/index.html","5c5a8afa41812252e12a1b4bf0f08efe"],["/categories/计算机基础/index.html","49da795769b00ea20f2f877c5ee60180"],["/categories/计算机基础/page/2/index.html","a141c43d400d59dde397f04448c35ba5"],["/categories/计算机基础/page/3/index.html","b3f9ebd2ec7d49b7631bb3fdf6bd1243"],["/categories/计算机基础/page/4/index.html","1b9de0157580aec0f18ea98dbc29dc19"],["/categories/计算机基础/page/5/index.html","3827421819eb3a62522845db234da59f"],["/categories/计算机基础/page/6/index.html","fcacfad6412b033e29d8b579e5b813af"],["/categories/计算机基础/操作系统/index.html","51bbbf8c36ddc58a3e3b91320987af20"],["/categories/计算机基础/数据结构与算法/index.html","1ca1b887a3c6711e4db7e9e393977a61"],["/categories/计算机基础/数据结构与算法/page/2/index.html","27378153296066b8925e43142be5bbcf"],["/categories/计算机基础/数据结构与算法/page/3/index.html","29082a2f41b765e48776b5686845327d"],["/categories/计算机基础/数据结构与算法/page/4/index.html","8388f231d8622584f68f6ab939e4db19"],["/categories/计算机基础/数据结构与算法/page/5/index.html","46cfc29daa0d9d0b0dc2301e55b1be6f"],["/categories/计算机基础/计算机网络/index.html","c64dd537029613f8f2693842ecf56e50"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","eaeb8653b4e0ea94f654c53388c9498c"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","a88a914eb27e735dbdeb762bd7031fd6"],["/messageboard/index.html","8ca991ab1d10a8843525b5bc1a2545f0"],["/page/10/index.html","be3f21231d96743cd05df0ab07431959"],["/page/11/index.html","f65e9bab54b1727059bb6c288fc41db5"],["/page/12/index.html","2e5b717db51ac06637506b014835a5e5"],["/page/13/index.html","8144229bb3bf9cb4ec91477eaec2de02"],["/page/14/index.html","c9d2717248f02ab27a25db578043956c"],["/page/2/index.html","c08a55da48334ce24fb15e0127e1bf88"],["/page/3/index.html","d41207d639254e166b8616e2c4b2b9b3"],["/page/4/index.html","70bdbe6835af8b1ccd7c0420f95f9cbd"],["/page/5/index.html","6abcc8496977373c88c75f0d3db11eae"],["/page/6/index.html","14d563917448c41d639e967717b9a595"],["/page/7/index.html","7e132b4d78092b874942f35e0132a34e"],["/page/8/index.html","4edaf072b52388fecd123e55ec9f2c49"],["/page/9/index.html","82946049c5e42e6ce9da3a973e38463b"],["/sw-register.js","fdef3b8d33e672680bebe1abfeda4853"],["/tags/Ajax/index.html","37cbc635c1191d5fa8c2f968a66e612a"],["/tags/Axios/index.html","ed2980fa0532d8b5669aadc5f93a76f9"],["/tags/CICD/index.html","9b9dd23a3b65cb278bdcb737879b1574"],["/tags/Docker/index.html","d5e94ec8d2cbbd975d16afc977695dc7"],["/tags/ELK/index.html","7f159adfc4596ffcba54c20c9e043b34"],["/tags/ElasticSearch/index.html","ffa80f0353a1e5674f739e66112bcb29"],["/tags/Git/index.html","6be93a9398a9786e0bd08611a662df7a"],["/tags/H5/index.html","e22e5da5de8f87228be6fb7c0cab4c96"],["/tags/JVM/index.html","65216754bf88c21365581870c82fa257"],["/tags/JVM内存模型/index.html","a2abae49e4f3d7c732adcf86295f0ca6"],["/tags/JVM执行引擎/index.html","a824a4e141eb643bdc19338336904c68"],["/tags/JavaScript/index.html","5026b2b6a61e4f88be2426a1eb449343"],["/tags/Kibana/index.html","c78286b55e29d8a71f464088fcfe51fd"],["/tags/LeetCode/index.html","2a3fc230d3f3a5adee24470fb69ab89d"],["/tags/LeetCode/page/2/index.html","0640bd4bf4f25d9a9304c6f50f5ddbf0"],["/tags/LeetCode/page/3/index.html","e47996ad60ac6319dbffb1f598074612"],["/tags/Linux/index.html","e3ffaae548b63e72e7bfcc2714b5b3c4"],["/tags/Logstash/index.html","37e88f2c5f6a3a82e9649af93595a8e5"],["/tags/Mock/index.html","1733caf9f963412abbbd8ee11c2cdcb6"],["/tags/MongoDB/index.html","1d4291bd2b9fee0557aa2ec07248961a"],["/tags/MySQL-数据类型/index.html","3180376d6f69d8675102f97dec629955"],["/tags/MySQL/index.html","0eaf7e219689d63a1f6e67349612055b"],["/tags/Mybatis/index.html","af27a4675a7bca86d816be9c118f65cc"],["/tags/MybatisPlus/index.html","3658ac940be58ace5be83de89d8d6efe"],["/tags/NIO/index.html","af6e3a8fecb08f43b03375d76c37a2b4"],["/tags/Netty/index.html","6600a7045ee1b8bde24502a19162567f"],["/tags/Nginx/index.html","1f13c62603c5b74ca3811551ccc25b62"],["/tags/Promise/index.html","64442d3acdb52e5f397fa73113fc7233"],["/tags/RabbitMQ/index.html","2195a1dfeff14c3d71c4f00765ac0052"],["/tags/Redis/index.html","98bca6f700cac95b32d5c43e3c122375"],["/tags/SSM/index.html","1cf65c8d2771ea19f3896cd874a2e929"],["/tags/Spring-Security/index.html","634ebe4fd7a1c11358b19c60c07a5a24"],["/tags/Spring/index.html","d1c753346897108d4960a48d814beaa8"],["/tags/SpringBoot/index.html","01dd3c8e50633baaf0772f81fec1102d"],["/tags/SpringCloud/index.html","05613d47a6f148dcffdd7e252141064f"],["/tags/SpringMVC/index.html","126aa47b73be8bcb79e4a5035f5f0b73"],["/tags/Swagger/index.html","83e45317064675f62fa5fceffc5e68ed"],["/tags/hexo/index.html","35eaca8db97ffe5004b027796f5c4469"],["/tags/index.html","0454f5680e14d00f35c5f21d84c84a5d"],["/tags/jQuery/index.html","538af8d7a331b3b8416bf3a9151a85a6"],["/tags/java/index.html","ef6b4a8420e623a7dbf478c5c999d00d"],["/tags/markdown/index.html","2837dd1e7b6e3b2fb79a831673710922"],["/tags/noSQL/index.html","df78a561ee1b523dded03bff3ea8b7f1"],["/tags/typora/index.html","d95a2148f8137eee4ae0071bc2f09964"],["/tags/vue/index.html","b6b0a2f7f54ea9e2fa148d3953983c52"],["/tags/享元模式/index.html","43dbf7cebf8a29ec21360af76b2a0fed"],["/tags/代理模式/index.html","bca1ba827416a301f564c469c78a8fd9"],["/tags/内存管理/index.html","292ec88a22dd20168a1ce4980324214b"],["/tags/分布式/index.html","ac946edfb36806e1882d7bfa7fd9671e"],["/tags/分布式系统/index.html","537feddbed04f8f1755436320f6a408b"],["/tags/前端/index.html","4f5e2e5d5182658aa45a540c98daca6b"],["/tags/前端/page/2/index.html","518b19ac14765dc80c39e7595de1c1b9"],["/tags/博客/index.html","f627abd47e68f56ae76ac5edb113b3fd"],["/tags/后端/index.html","9a7fde47708eb066f203ebad7932aa6c"],["/tags/外观模式/index.html","4d625abbaa932d07a7abe0b1c901ee56"],["/tags/容器技术/index.html","9ba0e92f639792a13a5f56acb5444c81"],["/tags/工厂方法/index.html","f3fdc68d9b296f6c4a8d0ba412bdc6fb"],["/tags/微服务/index.html","bfc7cf786c79d45afc92f28f3dc52ae1"],["/tags/抽象工厂/index.html","a26f867843781899ac2f73c6eca357a5"],["/tags/持续集成持续部署/index.html","03289369e627790f4c31b27d24e5b155"],["/tags/搜索引擎/index.html","0c35d35cd48249fa46935f5627645ab3"],["/tags/操作系统/index.html","48720f2f26c0a2ecdbb4acc473283287"],["/tags/数据库/index.html","313791ca0ff54365e37cded462eea1a9"],["/tags/数据结构与算法/index.html","2bde685eb17ebe94f1292d31462402d5"],["/tags/数据结构与算法/page/2/index.html","0b38485c260c59378f7f2d9ad028ee60"],["/tags/日志/index.html","a4ea3f1309a96feab5244eb6deddb38c"],["/tags/服务器/index.html","cfbb92da96d815fd4a536a7474c8d9ce"],["/tags/权限认证/index.html","3fcd87c144d4b72570c0ce364127503e"],["/tags/桥接模式/index.html","3c99dc80effa29cba0032f1ecd6198a2"],["/tags/模板方法模式/index.html","36734a018eeeaa98fa83a26f70ee32c1"],["/tags/死锁/index.html","5185d9588b5b55302a5531c29517bd4f"],["/tags/消息队列/index.html","fe5b70da536a52daf64b0ff8788c5474"],["/tags/版本控制/index.html","819f43f2de0cbc9e890dfa9b422af92d"],["/tags/策略模式/index.html","e7d4bbc756197c7016d414a3ac3ec009"],["/tags/简单工厂/index.html","7b3cbee069cc360f43e2c03a57ca0f08"],["/tags/算法/index.html","f9dc129e29b27e3eb2ef06fc43eb2813"],["/tags/组件化/index.html","94d1ab5ead10bdc85a476128b993c06e"],["/tags/缓存/index.html","54d5cbd17f09242c2cd40b3678fe4e3a"],["/tags/观察者模式/index.html","b17597fa109a93be02d06f662d923d3f"],["/tags/计算机网络/index.html","d769007bdaa4c4696e89339d2bb856e1"],["/tags/设计模式/index.html","d317c4cb560deaa1984cff48eb55efdc"],["/tags/设计模式/page/2/index.html","c84704d7cfe765619eed9ecf2ba86b27"],["/tags/进程管理/index.html","9e6b0c66cbf3c924643cae373de5967b"],["/tags/适配器模式/index.html","afaed609dd3f16b87981099e559d1e9e"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
