/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","c9ca56944c27b4a2b277a94f1b22a692"],["/2021/02/22/工具的使用/博客的搭建/index.html","70451c3170436139e0507613cf7691e8"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","97258a2d0a7b9ee0e45fd8862f902086"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","80a4b36f220855d52f0dd42ab55d9b4b"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","4de1277a85fefa51cc264ae097ba4921"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","f4f33327323a76ac1a22a55031d832f1"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","837978f209a9888959e1a624972d7584"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","dca5f70ca0f94b65e72939a69e0dd2e7"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","ef7dc56f441dc51fdc9baea68440ccf6"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","7f7e709db45a92516337bf5e7cd3b404"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","446a9c611dc5dc4a700e109b0c9eb7fc"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","0f364eb99304d7387d3f49174053b309"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","7a5198e7239f6bf2105258439df8de91"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","8a5eef040703cf7aff9aafabac3bd9dc"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","a3a54796f72f3f6f0f72c19c2df12327"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","1663e4e80d243f1c62fac5c3c510bf5b"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","4d1a090fcb9f21f99ac10877b14889f7"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","0172b5d111bf0c1558453f3505d2b3af"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","f6bd83197ca3e24d537202e1b55d6fe5"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","63f4b7046d76995d224b8ba8a1b77e69"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","52b9ff28f6023e6a3f144dc034d9428e"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","ba684af5d5ce56bcc5d6cc75a7fa9d0c"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","0cc25f0a9712a189d06857a966f70d9b"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","bce4cf1d2a4afcd01b21ba03949a6ff1"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","0acd666d62dde9bd676864bf313697da"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","a0aa3fdc5294691f4af8de8476241f32"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","3b5e867c819987f429eb39d172cef388"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","f1089ccb2d62d22884175ebff94aec87"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","d476ad435567629566afae0946e382dd"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","9561847473ff9d743b1729f32365b374"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","4e74752f48c03fc646521b09d2f39995"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","0a2fa29da63df5c971cc410976f99abe"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","d52f6cdf2234606b5acae7d775372767"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","763c3a7429de37df8e26d20e17148672"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","f297bb7bc3a6a3c7fa07a15196e30b43"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","431f18780379b7e8d7d221fd94b91874"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","c61991a0635bb2c87d2e38654cb5bcbd"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","2d23c28b1888525bf7672fb9d2a19a39"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","8f1ee89e443a222aa9e895a5ee935c34"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","995d72c512fe8170f068c63f2705c659"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","e68327a313605db9b88bcc0da7f0a2a6"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","6e63f24ebb743ec96c2bd8c49a56c8ee"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","15df87f700e4b483c4df05da9c6c102c"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","62116fda78d1c3b79b8fb8c54cba92f9"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","9377b735d0d0c1af25adb2125e53136f"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","fd77beedfb24c62f578c8d89b1491259"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","69b3da4a2a876462540e1984a2d3502e"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","e675da9e64730d082f6c2dc7968570ed"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","2ecfe97fb2d3b73b69a408bce714353a"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","60a8039eb8524477dd075943ba86066b"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","a8439836c1c46c69adc599d5b060cd16"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","b56b4e43642724980ff3981c7b488126"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","5b9227b8a9a1a1235ffd03049349ee05"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","6cdc62fbce199987bf27c55640f26cf5"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","eb2ee37d18153e07375224137f90c83d"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","191f7e369ef48143ff7af03033f193f6"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","906ca16dfdbc3332fed1806c9881df90"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","12ffc257e62a33655bccabc2d629aec2"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","f0519bfc92d2b14d24ae8bff3645c556"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","50b8153cfb35add1d21357317bfc9aa0"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","71c8200e07c4732b8969409c811460af"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","a089de5d3150be9e6ba54f7ae632284b"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","6c46ca2451844fe337199043fc8e7aa1"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","db5b3a3bf4ed848ed8268990e280a065"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","c192584829b709846903c05549fa109f"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","72befefd6276e1dd7b413da8430a32f3"],["/2022/08/17/前端/jQuery/index.html","ee77ab85378f8e21593f720e187cb7aa"],["/2022/08/19/前端/JavaScript/index.html","89fdc35088ca751fe7b82804bacd1ed3"],["/2022/08/22/前端/Ajax/index.html","689a5ace910ea910871826ccb9010b7e"],["/2022/08/23/前端/Promise/index.html","60d455d187e8b66cdb08626377171f64"],["/2022/08/24/前端/Axios/index.html","a87214860da61515b92e6b6e9780b191"],["/2022/08/25/前端/H5本地存储/index.html","c2a674103dbad10f99b649001bd19b73"],["/2022/08/26/前端/mock/index.html","57886972c25d43a6062f67e7e90079c4"],["/2022/08/31/前端/vue/VueJs/index.html","4de118625c372b2cb6da8e2ff0118dae"],["/2022/09/01/前端/vue/vue组件化/index.html","83b15db35b240dcb8ff270ff72a17a90"],["/2022/09/04/前端/vue/VueCLI/index.html","a9882d936a40fce6fa44027fb3267133"],["/2022/09/07/前端/vue/vue实现动画/index.html","0b4843a26c93aa977ce463a716cf8071"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","7ad0a76072d9e6c688c764fb987faaef"],["/2022/09/10/前端/vue/Vue异步请求/index.html","61feb0b3627fc635ae5155f3c4659aeb"],["/2022/09/11/前端/vue/vue-Router/index.html","3018d4c082669c0c56a42c9f96cdd000"],["/2022/09/13/前端/vue/Vuex/index.html","d9dfb78c7863889f01ac72af4bbb989f"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","d46639031b4162ae871bb23590cb6549"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","0e0f949671e2170a09a8e590ed76fcc7"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","94ad5d4d8fd21650096b5dd32527d38d"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","ac69d3df187483ae3aaafb01d37c2cba"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","2359e42d2895ac8054aa2d8d3f3afd0d"],["/2022/09/28/DevOps/Linux/Linux/index.html","3653b40c5c29ad4465d648143e5de921"],["/2022/10/02/中间件/Redis/redis基础/index.html","4a8e1ad6c48a3f51e369861726d56da2"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","fe9795d20a96be75b690cedef56106df"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","d29ad563c669eb35d3a95ee5a7dbeadd"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","86627fd54c23607d54e7c80a1a2c88aa"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","79a03633bf45ac23253dee6db8bd0e33"],["/2022/10/17/中间件/Redis/Redis集群/index.html","d03451e13127fb20c47175350da05b2a"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","29d2296bdd4e85da609f0693e4c9c5fe"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","d470f1156ff8a4cf2697ad88619e0ff0"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","69f692479a9a18bf6727f2832a231826"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","aeda528bda737e8981be7eefa1786c55"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","b30317ef7b16c0a89572d76f924d9c8a"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","4b189794889bd4e7506cf4147880e5e7"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","de120d69c0c2aa9954501f0280cab41f"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","3a94fc57223712177c7a262dd0a3359e"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","a26d6796473ea9458bf0c114a840ca73"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","97ff2e5a2837f9d60080f2228f074d26"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","a496d41c3b17029956623ad465f792d2"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","cd92899f2e9bca693dce873088d59076"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","230b8e618697e4da67b1fe5de20b3255"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","3a591cbed461ef1e2026991dd9339f24"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","f35feff5dd1f3e279bc0cb69de895a44"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","30603c469389dba4ab73d1a263f00793"],["/2023/03/10/DevOps/CICD/CICD/index.html","31485ee9cb9c9806c642225c66c3c488"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","0fc65b5b51a4041817a50e2910cf8802"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","6ac89cc413ef545ec35c3aa3a07e6fb5"],["/2023/03/13/Java/NIO/NIO/index.html","a65a011400ec45a6427e004d32088764"],["/2023/03/14/Java/NIO/Netty/index.html","7e24487f6ac4fd7a9c55076aa3c2158d"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","75ab9b875bbf4521dbae6fe42ef3af46"],["/2023/03/17/系统设计/分布式系统认证/index.html","40e242abcdb90982ea0206f1c1b1554c"],["/2023/03/19/Java/JVM/JVM概述/index.html","0b2540a852bdb36fc51cef2544b40080"],["/2023/03/23/Java/JVM/类的加载过程/index.html","ef4526a4bfe488bab3bd12b8ffea13f1"],["/2023/03/28/Java/JVM/对象的实例化/index.html","c233912c3d0fefc33510ab6619df1d4d"],["/2023/04/01/Java/JVM/运行时数据区/index.html","2a8e792dd9ecf093f6c8b26e8b9ff14b"],["/2023/04/04/Java/JVM/执行引擎/index.html","b01703878cd10958f22d5bf2ac5a042a"],["/2023/04/06/Java/JVM/对象引用/index.html","4bcb96db7e5388c4b1acdb886f841418"],["/2023/04/09/Java/JVM/垃圾回收/index.html","63adeef65f2e56d367c5ea7951072880"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","46195a76b139418cf3a7238239a230e8"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","71cf92ef325b698abf5828d79cae7533"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","cb65b6313c3ab316c80a881183ead66e"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","4b3c8f33f4cec6925cd77ae069d41f58"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","d0ff9f33865107ea4ab55ed7e82e5c31"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","586f09758b07176732b799c71bc50080"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","f64fd04fceb11b13cb5e4a755d6af6e4"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","4897a3b4bff625db4b8db1da0f600198"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","4c4e81d8853db9268af6b38df7900dda"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","86d2f681524a5eaeef53f80496aa14b8"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","6c7cc17fbe6fbe47505ab97fea4f402b"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","7be4b4ddc3fd1ab482ea216dabfaa5ba"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","0b0819de12480f20e2282953384db956"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","5976a030d22203f3085bd9417b39d75c"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","fd60bda0b60e4d94d11f8dd6776736cd"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","5089bacbe00524f4f236f42dd096d40a"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","afa2a10400ee45c6ac1cd5520e13cf86"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","65f0318ec554e13f738236dad01a6d4d"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","6c77ea913f6a742abf529b66bd83bf88"],["/404.html","af38f5e566d13a3e09533ed60606f42a"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","98b60bc32f46b399635df21f2030cb0e"],["/archives/2021/02/index.html","89924fa83cd200f1e9a0288853cd5827"],["/archives/2021/03/index.html","7d0622cd67b6056bac8743de7ce76f45"],["/archives/2021/03/page/2/index.html","34880184582339fa3510497d0111e148"],["/archives/2021/03/page/3/index.html","7a78433f9b8af10c75c15476f3cb9bc9"],["/archives/2021/04/index.html","7fe649bfe532fb0d040448fad34f2b7f"],["/archives/2021/04/page/2/index.html","a60ab35a77b8f0e98ab00912858354f7"],["/archives/2021/05/index.html","c4ae38d6cf35f5ef5a31eeca5eadee85"],["/archives/2021/index.html","b971a65ee946eb8d9ea9aae1d506b0e2"],["/archives/2021/page/2/index.html","4672d627a24a6b74f49f2d491e264cb8"],["/archives/2021/page/3/index.html","962feec0558f62edbfd5a825f1e0db2f"],["/archives/2021/page/4/index.html","0da0469e09d9895e969db13fae584518"],["/archives/2021/page/5/index.html","b3a22a35e566b075cc19496814b3dc54"],["/archives/2021/page/6/index.html","482b02d4bef5c48a22361aa02482c238"],["/archives/2021/page/7/index.html","06486cc1638840ab3430c1aaafbfb167"],["/archives/2022/01/index.html","3f110b3a19dc6c27b25f791ebbd34445"],["/archives/2022/04/index.html","07eba607e6fbfd31041f312b94045779"],["/archives/2022/08/index.html","3b90a32e141aa0ac318b3d7a5cc436b7"],["/archives/2022/09/index.html","912850ea20297f4ad11d8e3126732238"],["/archives/2022/09/page/2/index.html","0adc49afa83ccaaa6a2ecacb28d31312"],["/archives/2022/10/index.html","553617833a97d74c6935661b55ab598a"],["/archives/2022/11/index.html","fda419971b05478d5b030ebd197b9976"],["/archives/2022/12/index.html","99f44130fcad924d87eda3809dd932c4"],["/archives/2022/index.html","3f736cbb4c73a50407795958f403fc16"],["/archives/2022/page/2/index.html","f33db1669a1df2f314ad7e6245da363d"],["/archives/2022/page/3/index.html","47f52b7c83be116169cf9a2d58ab05d1"],["/archives/2022/page/4/index.html","9933ae9334b8e64a416303283d5386bb"],["/archives/2022/page/5/index.html","77ee0c0f34f13db3342edede806fe4d5"],["/archives/2023/01/index.html","4684d0041b2c62cd8da182ee16a27b76"],["/archives/2023/02/index.html","acc929d80ef8e292dc29ad65d27eaab8"],["/archives/2023/03/index.html","a3197f6e1d2800d39c7b5e14c9faf95e"],["/archives/2023/04/index.html","42f886eeb984e490de7406e5d4ca736b"],["/archives/2023/04/page/2/index.html","1efd65c36a7661c72eb21448068d39a5"],["/archives/2023/05/index.html","62c2297f0af9a8279ac03100c78d42d8"],["/archives/2023/06/index.html","d0d824371d9db885eb2af258ae864928"],["/archives/2023/index.html","8807abbf71bda87d21a0f3d3654087d6"],["/archives/2023/page/2/index.html","2677345da136de9fa5d2c877b68d0127"],["/archives/2023/page/3/index.html","2647831a524e2a23eaf000eb5eacaea2"],["/archives/2023/page/4/index.html","a061c0115008de2677ceef0d74b7b06d"],["/archives/index.html","9d43f620eca1227802e377243a3d5f68"],["/archives/page/10/index.html","154d97eb182758876801145f9c9ff01d"],["/archives/page/11/index.html","8eef229a8c158f6030cf0c08e0b4f3dd"],["/archives/page/12/index.html","ebdb3699e671d0c821336523b4d387ae"],["/archives/page/13/index.html","ecbfd3c0129fc48e81663d6b6d90f92d"],["/archives/page/14/index.html","80121a3af1f11e711ebf1913f5e83089"],["/archives/page/15/index.html","cea70a4730e2e23a18c51dd1974db60e"],["/archives/page/2/index.html","43f4eb1caed432c0abc28be2a6b3f63d"],["/archives/page/3/index.html","c1c3e19eeb34a0435f6c6f3be8aff409"],["/archives/page/4/index.html","c6f9b03d2c27860e32e286688acc2057"],["/archives/page/5/index.html","2ed2d6a94f0e5cdcbf8b9a6c87745dfa"],["/archives/page/6/index.html","2bb0ce55dc9b855a8d60019dc93a0c14"],["/archives/page/7/index.html","51245548bd3ee78e5b249a0d27f705b5"],["/archives/page/8/index.html","777968ab46e617e42b5d5d069673a7b9"],["/archives/page/9/index.html","f973828c97ebce0def933f0ba9a7d4ff"],["/categories/Devops/CICD/index.html","5312ddf5a8b716de98039aa8f7b75f3b"],["/categories/Devops/Linux/index.html","886e792fc834b97dd78eec0fdf21a110"],["/categories/Devops/index.html","ecff4484dde910c13d74681922e8d692"],["/categories/Java/JVM/index.html","16d4f8265f6fddbbf1ae8e99d0bf1001"],["/categories/Java/NIO/Netty/index.html","179e56ac99405c8a2b338c09c7fd79d0"],["/categories/Java/NIO/index.html","22be90db8c16567bb128dd0a3a93324a"],["/categories/Java/NIO/原生NIO/index.html","506469e482deeb87f8e24d0c29b69249"],["/categories/Java/NIO/文件操作工具类/index.html","b2859d036c65692cba0cb7c237d653fd"],["/categories/Java/index.html","39bc7e6fcab33415e0e5f0710e466fcf"],["/categories/Java/page/2/index.html","4d0d376139e90422278b85c0ed7fbaa7"],["/categories/Java/学习路线/index.html","e197f1a01b2835a7cd6db5578205a82d"],["/categories/Spring全家桶/Spring-Security/index.html","6b0ccafb778c07b1f4b8b37264729c41"],["/categories/Spring全家桶/Spring/index.html","c8f1cc3f6223e4a6532d3ff5d898e043"],["/categories/Spring全家桶/SpringBoot/index.html","15dd66b8cda406ad3cefed5aa10d94fe"],["/categories/Spring全家桶/SpringCloud/index.html","7994b741e31d80a261bf34e27e5fce7c"],["/categories/Spring全家桶/SpringMVC/index.html","cbc0a1c318f8d06f832937121c46ae52"],["/categories/Spring全家桶/index.html","0ad5b9a7c2e1440e4d3243982c805a4f"],["/categories/Spring全家桶/page/2/index.html","6a0c037240b54a28cd06bd9e0761af00"],["/categories/index.html","006b44483cd623c7f1885d4bae4f9773"],["/categories/中间件/ElasticSearch/index.html","a4c4c1027c81e04b0322e7d12d693aff"],["/categories/中间件/Redis/index.html","ecc757573fa84685e7b9f543cc9e2831"],["/categories/中间件/index.html","1adcb06c284a490b2189d5cd709fa52e"],["/categories/中间件/page/2/index.html","5954fedd350d0141370e2d91466abbfe"],["/categories/中间件/消息队列/RabbitMQ/index.html","f69401c43ad832c1d7ddde39e15d598f"],["/categories/中间件/消息队列/index.html","eb12b096a2d092359f56d259a243aba0"],["/categories/前端/Mock/index.html","16cf77c1a54a3a7d4f3a2501c915501b"],["/categories/前端/Promise/index.html","53c9820e051386671895bcd8ffa96c1e"],["/categories/前端/Vue/index.html","f54de37e7d36b6032b57d305f3433a67"],["/categories/前端/index.html","9c7793579b3a97f8ab7b897aaea60eca"],["/categories/前端/jQuery/index.html","89b6ada8a8ffc9ef42ff3d1431dfc82e"],["/categories/前端/page/2/index.html","ca5bceedd8b842ce59cf6f39cb9e93d5"],["/categories/前端/原生基础/index.html","61f6d4382ff4637ba5df92833a5fa008"],["/categories/前端/异步通信/index.html","4303612f032101f3117319d094d59f94"],["/categories/工具使用/Git/index.html","6e2b1130d922f14c3cf010705570877c"],["/categories/工具使用/index.html","f5eb820b16c250b12e809b034f2380f8"],["/categories/工具使用/markdown/index.html","844c46891b1bb826ab9be489af948cb6"],["/categories/工具的使用/Docker/index.html","d1316aa725bc384e893dcd7c0039103e"],["/categories/工具的使用/Nginx/index.html","03ea6343c115e9cc95b3f4c25af51cc8"],["/categories/工具的使用/Swagger/index.html","3ff1d65981fa85725bb98737ad85d339"],["/categories/工具的使用/index.html","5d0d5c3df3bde0c9e5d65aca1a873802"],["/categories/工具的使用/博客搭建/index.html","16553d6a0f579eadefa46a356568d61c"],["/categories/数据库/MongoDB/index.html","a39ca3c95547220fdcb03f8198e69002"],["/categories/数据库/MySQL/index.html","0cf9f214aad8ca6dad33052700dd61e4"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","d647461106c26174162692e39b1fa4c8"],["/categories/数据库/ORM持久层框架/index.html","578cbf38e56b0f3a3366bc1750aa26d2"],["/categories/数据库/index.html","57fe2f0322913b2c59016e179d8e436a"],["/categories/系统设计/index.html","65d040312864218fdb0e6ef06436d5c2"],["/categories/系统设计/page/2/index.html","113894ea8df9cfeed0e904f14218b26c"],["/categories/系统设计/分布式权限认证/index.html","7f3694c4dc33e0ac5fa8030b2fc9273d"],["/categories/系统设计/设计模式/index.html","d4bd8e8d523c279f56d613fc7d478cd0"],["/categories/系统设计/设计模式/page/2/index.html","8c8f27832252d4f4b5a07c82d57c0514"],["/categories/计算机基础/index.html","1eea75d0d8e92e320aa100f895def4b9"],["/categories/计算机基础/page/2/index.html","f08c078579ed57a987009063db7d9b98"],["/categories/计算机基础/page/3/index.html","1dc0ebbb1b574ee441f129d66ff3deb8"],["/categories/计算机基础/page/4/index.html","8b3667c76a42c47496502fe73beee525"],["/categories/计算机基础/page/5/index.html","11f20c441334acbd16ac6343652597eb"],["/categories/计算机基础/page/6/index.html","54aef2f9f43cb5fe233d42c42188881d"],["/categories/计算机基础/操作系统/index.html","98c1fbfc3dce3ce5c2c68a0bf56f07e5"],["/categories/计算机基础/数据结构与算法/index.html","cf3356558e343bf4adc66885f11287e4"],["/categories/计算机基础/数据结构与算法/page/2/index.html","ed4d5222e8417fc49dbbbca8d53be181"],["/categories/计算机基础/数据结构与算法/page/3/index.html","ef35d01e6e71e73bbd204e67d7888d89"],["/categories/计算机基础/数据结构与算法/page/4/index.html","efcfe79c567bbcd2d1846b0e52f27084"],["/categories/计算机基础/数据结构与算法/page/5/index.html","caf5ef7bec59fbc878594c8a9b6d5e4b"],["/categories/计算机基础/计算机网络/index.html","8e5daaed378dff46558171daeba691f9"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","a3329871dff91cf64f8f1c1ddf75c8ef"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","c5b75079ab5fcc60854ec86e26f7d2b4"],["/messageboard/index.html","60ee1cac04f7c66ae8f4db614cbea6ea"],["/page/10/index.html","dece4aecb8d991bcb80dd02499864bcd"],["/page/11/index.html","62db177c9e15ddbafb3d6b26139a0311"],["/page/12/index.html","f0dc3b6f41cdbf3fcfff94a0cff35765"],["/page/13/index.html","545a421e70401ea4961832c30cc13b1e"],["/page/14/index.html","083e17ca57ac3bcd286c7519bcca1f2e"],["/page/15/index.html","268ed2f4c529e8a25c96e9b48937b670"],["/page/2/index.html","d6f64e9cf1c8a4e424608d59cfd5733a"],["/page/3/index.html","6425c240e510a4a7d0fc04a5b9934d5e"],["/page/4/index.html","cd93259738cca33551f4c0fa7d04f418"],["/page/5/index.html","50b739e92f2741be7ba084ccc0cf3ce5"],["/page/6/index.html","d3c38889c54fec25b639f6247ecb7b94"],["/page/7/index.html","30e7f6eb3cc71076e356574130081f37"],["/page/8/index.html","a2482b964059aa37a311054cb03f9118"],["/page/9/index.html","8093cdf484ec3b4c95b5c88fd30a3ae1"],["/sw-register.js","331b0318bc3b5bdad718664e402b4553"],["/tags/Ajax/index.html","d5a60468220ca8f515676914df9fd339"],["/tags/Axios/index.html","6a857f637ba18028ad1da3a3d34baa7b"],["/tags/CICD/index.html","646926bbda3f12c2ba68bb20ad62957d"],["/tags/Docker/index.html","af9168181ce3609a23e385609183121f"],["/tags/ELK/index.html","af7374760343b685ec4237005d0a33e7"],["/tags/ElasticSearch/index.html","5feba95649ec08ce62407270ea49589e"],["/tags/Git/index.html","826d641aa358cad90115bf28a5f07161"],["/tags/H5/index.html","204e8f3b2321e2fbf723afc24b126ccf"],["/tags/JVM/index.html","9bc228793c086fdeca24dfb6c3e490fb"],["/tags/JVM内存模型/index.html","61868da151a6b21803475fcfd0e99da0"],["/tags/JVM执行引擎/index.html","32478bbf6c11c6cb077523b36e2f10d7"],["/tags/JavaScript/index.html","d1a09f83b77d4346877eded758d733ed"],["/tags/Kibana/index.html","4b2598805ef11ecee6883fde470b5578"],["/tags/LeetCode/index.html","472c17e2edc106af86c9fa45b3b49b82"],["/tags/LeetCode/page/2/index.html","f4145a760de39072d4b10e3a323a01e1"],["/tags/LeetCode/page/3/index.html","8a8c015e3e4eee0cc5f90d1adb6a48e2"],["/tags/Linux/index.html","376742abd1f0e4314a03114862ea649a"],["/tags/Logstash/index.html","9e2ab4d81365e122c9b4465c095243a1"],["/tags/Mock/index.html","9c391c3cac1c5d4a841b1d03e47cc081"],["/tags/MongoDB/index.html","a2824eb9fab2eb291bb413310d279eec"],["/tags/MySQL-数据类型/index.html","a87ca24a9efbc0d22019626589651e31"],["/tags/MySQL/index.html","34aba50c884dcacd9e0fae4376426ddc"],["/tags/Mybatis/index.html","7dcdb695d99c36c7b41f4382953bb5f1"],["/tags/MybatisPlus/index.html","37ce051685e54f35b89ada8ebdac2020"],["/tags/NIO/index.html","7f9dc5fb8672b0da805a29bf6aecfad3"],["/tags/Netty/index.html","d9fae0cfef9cef4240e0278006ce8064"],["/tags/Nginx/index.html","4be5e434a245731ba5af33f64798a975"],["/tags/Promise/index.html","91d5415e20e58c261d2914bf4a88ce78"],["/tags/RabbitMQ/index.html","55de272fe0ee63d41108e5be33b2499b"],["/tags/Redis/index.html","c2ea8a79e08c7133de5f3c3bafcac653"],["/tags/SSM/index.html","8f6539f6f1439c336bdf070254d2989a"],["/tags/Spring-Security/index.html","36b3a4feb17f6e479fd062dbbd67ce40"],["/tags/Spring/index.html","135add68f36a6ba22f7d8e5019ef9daf"],["/tags/SpringBoot/index.html","06c7f6b6a048dad8248ab257676d0175"],["/tags/SpringCloud/index.html","1c5892cd8b9bd3f0c9477739fbda89d5"],["/tags/SpringMVC/index.html","5e485eaecea46e5b691a139285c9e2db"],["/tags/Swagger/index.html","0734c0ccc7a06332204f815316663db6"],["/tags/hexo/index.html","f7d3ab3698eaf083427f2ab6a3830ec0"],["/tags/index.html","803bc9f568a986560130be839e7818be"],["/tags/jQuery/index.html","d905b3d47b971d92ab4398caf5e6e8ce"],["/tags/java/index.html","cd2783fcbb818b56dd9d24fc9e8d77da"],["/tags/markdown/index.html","e958e4367f0218cf1e8bae15a3eb0850"],["/tags/noSQL/index.html","9fa77856b0b9897e32f9a5ac2dff57fb"],["/tags/typora/index.html","8575f90d109ddcaa4d0a6e4f61a6ffda"],["/tags/vue/index.html","a28f079b0c8fa1aaafb37c166ba17a57"],["/tags/享元模式/index.html","0f323bc1b58c10119b07cf44d61998d1"],["/tags/代理模式/index.html","704299fc852a95533e28fa2973e2fc2a"],["/tags/内存管理/index.html","93b7b4a5017a3987e8dc987623b2f993"],["/tags/分布式/index.html","fca051154cbe0261586ba43b8d91ef60"],["/tags/分布式系统/index.html","5f200749916cefcb59a93ff8d1122dca"],["/tags/前端/index.html","8bf114efa63b03323a565ac704d45292"],["/tags/前端/page/2/index.html","b73e5bd772452d5eba19c9a8a51fd699"],["/tags/博客/index.html","038b7426510e92dbb04122606e4380cb"],["/tags/后端/index.html","78b9822a95a10458cd519205422f0eb6"],["/tags/外观模式/index.html","c3c5d2d18e780ef2bccfcdbdad3fa894"],["/tags/容器技术/index.html","f9ed086f381d6470086ad1f112c14d37"],["/tags/工厂方法/index.html","af7c8e9fd33109576828d8c5cf73a4b5"],["/tags/微服务/index.html","2fef3475746a4d12b22886f5687070e7"],["/tags/抽象工厂/index.html","6690f8ea26072c3dd05f66eca40461f1"],["/tags/持续集成持续部署/index.html","4f99af8d18a4c6fc3ee1a1a1e0745240"],["/tags/搜索引擎/index.html","80ed6a18afecfaed780216d768042711"],["/tags/操作系统/index.html","42ee1e84eef330cae50f62af7945e432"],["/tags/数据库/index.html","b29c3153ccba1f4cf2a3bedf3d0479b6"],["/tags/数据结构与算法/index.html","c0671c4571a6b85348a25e75283b4006"],["/tags/数据结构与算法/page/2/index.html","fd675cf41361f30fbd093c410cd2a43e"],["/tags/文件操作/index.html","eda9ae6a5bbc3324dedce3ce9a1ccc8f"],["/tags/日志/index.html","3e3ebf8a9bae399b38100dce5190f163"],["/tags/服务器/index.html","d88f74a88634ed5b11330f429fe010dc"],["/tags/权限认证/index.html","b12730f0da90ff9e9eec4e0710380de1"],["/tags/桥接模式/index.html","ce1ce59aa988ec11cc11512f479aabf0"],["/tags/模板方法模式/index.html","ffd54dc0dbdc8a29507d51824828007e"],["/tags/死锁/index.html","2bf54481392647a917caab27e22c736a"],["/tags/消息队列/index.html","edb6bc98fd5d4b7f5821b6f0910e28da"],["/tags/版本控制/index.html","e1b3e237f74ff6f2fcc6c364c9b1d768"],["/tags/策略模式/index.html","99432bfaf3ba163e110b1459b9b43305"],["/tags/简单工厂/index.html","2db0118522f255dc8089f3e0da892af8"],["/tags/算法/index.html","d27290a8797b6ce40b26e455e0a8dbb9"],["/tags/组件化/index.html","c94bf3ae56dc3e2cec52dd68443a889e"],["/tags/缓存/index.html","3a6e5fa0393e685d3eb42dc6ba19cb51"],["/tags/观察者模式/index.html","156b5404f5138244bc9caff5645720bb"],["/tags/计算机网络/index.html","33a3ee42e7646012e266e795b8a6e827"],["/tags/设计模式/index.html","16ce74591464ef5dff75aef1e007ae4e"],["/tags/设计模式/page/2/index.html","b8b3cd44e169df17e7cf05d696d67c5a"],["/tags/进程管理/index.html","1ee0d614dc433dc05b7d03c16aa9f01c"],["/tags/适配器模式/index.html","eba581189be13e93996cd8fa42dfb111"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
