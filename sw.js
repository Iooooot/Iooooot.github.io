/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","ee0f17e0d12068dd72151d6c7ec80b28"],["/2021/02/22/工具的使用/博客的搭建/index.html","64cb24d963d17f63bf00fd3bbb92ca61"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","fe177971bd2fa5d609ce652effe1d30a"],["/2021/02/24/mysql命令大全/index.html","bb9f67f5434c72eb60322c157ad39942"],["/2021/02/24/mysql数据类型/index.html","d4b8e6b8e2809df01738fa01804bd3eb"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","714cc153f692166d428fd976953ea916"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","c18ad431c0391b51dc37ba82c1d7877b"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","38bf1325b72cc26ad7901d1696bff24e"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","22293f0d47f96a931f397bd5060c37d3"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","9b0c2e9622d76ce3825eced3adf45618"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","4c86447340be74083246d9cfc20a5aa2"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","ea7d2495c06ee6fadbd222cbb6f629d7"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","3cb07d168b5c5654fe491cd42eba3ee7"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","f1cfc43e0bf6728dc210c395485d720a"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","0f626d15a193ebf1ad957c2556e236ae"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","e33a74812707cd4c19ca8a4b043d0d18"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","f98cf9453c4a4bc34f481335c1885d13"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","e5c1d61b1d8694b9155a0199b9b247a1"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","45d0e62817837155d1e5020ba199f951"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","ee6e566be58d6f3a6e0806fc3e88c2ba"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","a60f29e05108ecf1aa9867a7adb8aa22"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","3d878c68c1c894f6380e2fbecd1b66ea"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","46eb07ab24343e2e4263ebeaf2436b4a"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","c9c9ae73096f0310202deb104c411b35"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","8071cad99be7430063437cfa5fa1b619"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","3f6f7d7ba9f82fa058fffc06f1b4b5aa"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","c42bb58157a5bf132a8e080b2f9a5f40"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","1ba4d5f3409ad4e73cc6893c2a998c54"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","c342879713fc7f39a6d9d3112f1f49cd"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","e1c8fe8051bb8a774dd8fc5bc498f6b1"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","8bb2291873d1a42994791c4688af2609"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","ea2565f1a7d76d8f36148600ce3a93e6"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","663d727965d47d094ab5822589c66944"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","19ec9ddde7b37bfe809d5c6744b81395"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","784b4953e77b971eae23a364cc1a81da"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","080369059766cdb56c0896682296d0e5"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","697630c47d9e77c292981d3dc6df9f37"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","1a2e9dfa64cb14407b8bd0717a9ace1e"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","9c06684c5a24a6cae5181e960ab750a9"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","d6f963f911d46e679534aa118d7d73dd"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","eb0f1ebb0106066272e72a8a1f5f7ae9"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","a460775e5f6c9b79e243c35a81c34736"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","a64f290d2275b98d29e082de4054403b"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","afd85eb7d8cd5a25e7fb611a4534cc55"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","fe009a1bf448b800e293968873630212"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","de483eb57b6ea36d7ac9e6121d6d6156"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","5b1da32293c0e0c8bf7ea02aafdef3a7"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","af9fb9220b40ca8d8ec13ba5f892bd0f"],["/2021/04/14/Mybatis/index.html","60849e12dd804d19d5d4db9d458f187c"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","09886d1500e187c54c74e14f1e200cd7"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","a601688e42db97fdf44f234dbdb4d197"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","9bac161b39e7826345860a145195a3a5"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","dd7045dff7c38a1a7d433201c12fe77d"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","b0a0a4c2b055a9a338ca38117c13620e"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","835e8e67c4c1ded3a866ef7b6a5f2ee5"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","d2dfc25b80383662c05bfc888eea94c6"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","8e9f9b4a9978b1bd6822fdb29177895f"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","369cfa955ee856fdd95036fbe9d9d202"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","13b5597535329cc4e6d5bab84e7ef4db"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","905456a4875f38ccf2222fb49fc568e7"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","2d28f1e4e854a9ff06c72d6a8c626f9a"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","1dde486cc08673321bfc41d680318747"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","a9ad42066269730a06f4917acf55f203"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","171274801efd75f7a2c58710038f0e35"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","e6043f09ccf594161ab57211e0ea44df"],["/2022/04/04/MyBatisPlus/index.html","b678eaa0840ec972ad4f2f5cb3c03413"],["/2022/08/17/前端/jQuery/index.html","a7b2a286dc55c05aab7eb5d15d886197"],["/2022/08/19/前端/JavaScript/index.html","38c4259e9c02ebad70c2effcde7bfd49"],["/2022/08/22/前端/Ajax/index.html","3409bf98452bee49f019f95c001f76a7"],["/2022/08/23/前端/Promise/index.html","9034bf7e3f2b8111a18040fe2cec93db"],["/2022/08/24/前端/Axios/index.html","9af5e3fe2da2ad1e5b640e1974ba79c9"],["/2022/08/25/前端/H5本地存储/index.html","36c1a379dd95e73f2f7d5ba04d3c25a8"],["/2022/08/26/前端/mock/index.html","ae1425f9cec38711379592b750ee7e1f"],["/2022/08/31/前端/vue/VueJs/index.html","7d2a82fd07587b907be6faf53706af46"],["/2022/09/01/前端/vue/vue组件化/index.html","6d8da8c804705c99e999a8f0a504df51"],["/2022/09/04/前端/vue/VueCLI/index.html","64a67fffc9c53da321f1b876b28f91b9"],["/2022/09/07/前端/vue/vue实现动画/index.html","7df2954cf985f701f56a3933b631ce7f"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","4b2f61c1f64e8f47b7ea5a418770fa66"],["/2022/09/10/前端/vue/Vue异步请求/index.html","8d6308aa084c06b2a1bab99a61c2439e"],["/2022/09/11/前端/vue/vue-Router/index.html","d37ae806cff030826e38187abe0b49c2"],["/2022/09/13/前端/vue/Vuex/index.html","0e6ce6b833ed7920a4ec71ce77633d57"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","e11a1241ebec181d692e8191a8ee6d6f"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","571302490b8468ff9efd254a76c2deb1"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","c090016e460dfee88e1ae17b10435498"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","c248c155db8e2159fdd047901c2d09e1"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","5868b959df5bce4ed35bfa0e6e1a21e0"],["/2022/09/28/Linux/index.html","20c36035fdd7850998eedebe8c22edc0"],["/2022/10/02/中间件/Redis/redis基础/index.html","f1b341c8e844a915edf99806330bb899"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","fe6583a8dd02671b666748d471887d8a"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","95f5d57788299cd3eae5bb17da7043a4"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","571dad01bd6db256d9383b028c03b5a6"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","d3558ce1b626b8f44142fd6e48187644"],["/2022/10/17/中间件/Redis/Redis集群/index.html","d946cf12cf5e8502011efcfb539ae8ae"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","4128cb2ceb0e6dd610f27ed66c4695dc"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","9e7d58d900ddf1c082dd011f59585f4d"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","f7cbbe8312e9d22f4d767f47e43f3926"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","3c5e682d3c41326557a64a7c6055d4ee"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","a5f3bfba53706dc2662240570df888a6"],["/2022/11/21/Nginx-一/index.html","199deb1575e59f2707db7693e343a4d7"],["/2022/11/23/Nginx-二-代理服务/index.html","da58d67a5521f675c052c2ccb752ac11"],["/2022/11/24/nginx-三-负载均衡/index.html","8da5621a74b0cd28d002bce35816535c"],["/2022/11/26/nginx-四-缓存集成/index.html","363cd608fa103b7073def8e70721e558"],["/2022/11/28/nginx-五-动静分离/index.html","0cb9c6edcbcc76774b475a685a27c51d"],["/2022/11/29/nginx-六-制作下载站点/index.html","358d4cd90e0f7d4d12a0136fff81510a"],["/2022/12/06/docker基础/index.html","e5eab44a6334a380a5a0467770ad2cf6"],["/2022/12/09/Docker高级/index.html","3ffc6397ea85f120cbfd40d9ed74d1ac"],["/2023/01/04/MongoDB/index.html","4673280239b5d51b4e0bcad78bccd6ef"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","1cf9c11fbf9f68c252b354a95316e7f3"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","a5fdd2abde3cd960b9c90af9af22e94d"],["/2023/03/10/CICD/index.html","471d3bc357a03194de6072e84c6a243d"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","79aa7170316eda80943da546dad2fc08"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","c73d00424f7a33fcebec100543ab6c34"],["/2023/03/13/NIO/index.html","349e1cfc563227de47d5e2056f232e5f"],["/2023/03/14/Netty/index.html","fd88d466939c9b95eec888346dcef54d"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","7aa5f673c18eb529124b650ca10c2596"],["/2023/03/17/系统设计/分布式系统认证/index.html","f59ad7090a0b4a9669db4572fe52cf00"],["/2023/03/19/Java/JVM/JVM概述/index.html","7a9f4e249ac823606b40a8ac5033240c"],["/2023/03/23/Java/JVM/类的加载过程/index.html","f92a3f2ff23ae2242e133f685a950779"],["/2023/03/28/Java/JVM/对象的实例化/index.html","602737a397fc142fb019b325c7c419f2"],["/2023/04/01/Java/JVM/运行时数据区/index.html","f6b3954efc5a1b3add88d04f2aef9d1b"],["/2023/04/04/Java/JVM/执行引擎/index.html","f968e9fa89aeee7730ac2a3f78253e34"],["/2023/04/06/Java/JVM/对象引用/index.html","08164fe895a1f51cd8cd0cc0cbc97816"],["/2023/04/09/Java/JVM/垃圾回收/index.html","43407f78538bf923a3e2952c3af46b30"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","7044eaabb649244d1f1d7087837dba8a"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","e286ec57878fd6428c197792e9fa401e"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","81e52e493ecdd5be49b8ebe81e9d437a"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","1b6895a47eb40c0ffad8ff3d8bf31e49"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","2f083f7cedb7a5a28e40e0e9b86f8037"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","2de6fe0146afd5ad40fb6a3ba38fb165"],["/404.html","5cae0f7047170341cc8d7f5f5affeb50"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","d44ad072768437588d346e23886e0dee"],["/archives/2021/02/index.html","250da6e2d4b66704a754ace802ec2af2"],["/archives/2021/03/index.html","aec3a17c27316b83b303a6ce45edd8f3"],["/archives/2021/03/page/2/index.html","63bb3b67fc8d3ac9069ab869cd571717"],["/archives/2021/03/page/3/index.html","0e5e5134d9ae2209f5784c34ffb32258"],["/archives/2021/04/index.html","f66b9d026720c8459bb451ce02ab377f"],["/archives/2021/04/page/2/index.html","0c9505002a083f4ed0f277360142b06c"],["/archives/2021/05/index.html","9998be89a2bfede0598a935198efddec"],["/archives/2021/index.html","1d0896e375003adb29d4a0dfdb29ed78"],["/archives/2021/page/2/index.html","c8538d78d7eeecbb21cd8c6984013f82"],["/archives/2021/page/3/index.html","febbea45d7c540eefede070761629456"],["/archives/2021/page/4/index.html","cab5d84cd7944b06269f44d7a28c09f3"],["/archives/2021/page/5/index.html","4fca2baac2317dfcc722d3f2f9742523"],["/archives/2021/page/6/index.html","29fab1cac44b51b9363c6f0e40f4331c"],["/archives/2021/page/7/index.html","f5cba396eca24a2959559f63b94f479e"],["/archives/2022/01/index.html","11e4c6571c95444feb10880aa2ba186c"],["/archives/2022/04/index.html","b7bcd162237ec254fd6b9c14cab8cfe3"],["/archives/2022/08/index.html","7e96d0dc95ea0c1bd44b1b8d863ddb34"],["/archives/2022/09/index.html","af9ac8e4962bbd8f5cd75f2602344f1d"],["/archives/2022/09/page/2/index.html","2ea5b0e4ffef0965d43e62b588ff5de0"],["/archives/2022/10/index.html","705f8645d69439dc652f243bfa0333d4"],["/archives/2022/11/index.html","1c09bd9c2547b37afc2f44e0bce2f378"],["/archives/2022/12/index.html","9fb5573ab3cd647b73b0e1aafa7c36af"],["/archives/2022/index.html","4e6adab67a77f7da34526aa7b0a2b487"],["/archives/2022/page/2/index.html","c6b8362192e61f54349e5b331425ba62"],["/archives/2022/page/3/index.html","ea8f4d1757e25de382ed7510b9651136"],["/archives/2022/page/4/index.html","e25692582cf65e832fbb4b5c7d23355a"],["/archives/2022/page/5/index.html","4a78330eb4b1eb8e1d30243e61822ce3"],["/archives/2023/01/index.html","e80af4d98d0ad18128b82b80222bd36b"],["/archives/2023/02/index.html","149cb893a15b94634a66a5929cd21e7e"],["/archives/2023/03/index.html","7c3b8a2ebe6c46886e55c155cb6a9fcb"],["/archives/2023/04/index.html","a8770a27c060d139b726f9b7e36989ae"],["/archives/2023/index.html","9dec5000180df1ed23754290a5c56955"],["/archives/2023/page/2/index.html","ed4ff7fa9a38f2a5661b779c77ccdb2d"],["/archives/2023/page/3/index.html","527d12445bedde5e25cd4ecfd624deb1"],["/archives/index.html","1b6634d9ad0e6dbd08600bfdc6e11ef4"],["/archives/page/10/index.html","fe90961fd2884a989f3b4905bbc1ffe6"],["/archives/page/11/index.html","767c7845f6e6fcd123749852e43c8ce2"],["/archives/page/12/index.html","c174873ce230d526b79036cd31dc26be"],["/archives/page/13/index.html","a544c162d9fde415425641700a00b0cf"],["/archives/page/2/index.html","85aebb68234feefc4f5704f25d25bd38"],["/archives/page/3/index.html","62f8a1d62293f66278c938dede9125ac"],["/archives/page/4/index.html","026eb8600769f0a5cefb5b85c466d15c"],["/archives/page/5/index.html","b548e9c0f1ea64b7725dd6890789393c"],["/archives/page/6/index.html","b5a0074182900e8fcf6d76c1450cd068"],["/archives/page/7/index.html","285d563cf4c349ba14ea7770c12a7234"],["/archives/page/8/index.html","e127da1f16ecf8e8db5013403aaff268"],["/archives/page/9/index.html","95dd94ace8c0cf642c244d899b557e39"],["/categories/CICD/index.html","03106e9700ff9037795ce230425d9250"],["/categories/Docker/index.html","3603720fef83b79354ab8867c03422df"],["/categories/Java/JVM/index.html","bf1f720e43222a0261ddc6b6bcb7cb06"],["/categories/Java/index.html","bd5f3197f199360e7de84ae403087483"],["/categories/Java/学习路线/index.html","ddb6c4a6e815071ac96be8586b9856a8"],["/categories/Linux/index.html","f08a990a1e483ba930a9496f34c8a1ab"],["/categories/NIO/index.html","baf23e101c27745d45ae1d3f7adb8d91"],["/categories/Netty/index.html","0cf3188457327b8445e211600d91e5ae"],["/categories/Nginx/index.html","d21ce35bb62c4dda62f295ea8f037c68"],["/categories/SSM/index.html","1ac125650a521da8648b65029df9f056"],["/categories/Spring全家桶/Spring-Security/index.html","e1b3bda27d94a1ef9be925af738d8db5"],["/categories/Spring全家桶/Spring/index.html","db2453558db91ffa2e98b824da863555"],["/categories/Spring全家桶/SpringBoot/index.html","cfcb1b81d80905b2673c336de9ab0687"],["/categories/Spring全家桶/SpringCloud/index.html","8a3f54c5d4cd4a95c140fbaf384ea223"],["/categories/Spring全家桶/SpringMVC/index.html","c799125a0843a4c9fb14fe99b4fe1d49"],["/categories/Spring全家桶/index.html","ca4a7b5f7f5420e78b68acaca3fa2e29"],["/categories/Spring全家桶/page/2/index.html","068251e83aaf57b45994007b4827ab68"],["/categories/index.html","cbec759d4983def41aa9369b51d2b7f6"],["/categories/中间件/ElasticSearch/index.html","31129edad8738c433140844099d28277"],["/categories/中间件/Redis/index.html","614e809571eda0344954734ccaa27868"],["/categories/中间件/index.html","0d2be0ac5b4c4515d1090c3f81cb29ae"],["/categories/中间件/page/2/index.html","16169f875026e4f9d7acd80bd34119ee"],["/categories/中间件/消息队列/RabbitMQ/index.html","659765c9a452f62163a8eb0e51cf4d3d"],["/categories/中间件/消息队列/index.html","9b361df4dfef1ab9987301e621281ccf"],["/categories/前端/Mock/index.html","fba01fd13540efd4360c719a2c7c1cee"],["/categories/前端/Promise/index.html","b03fd2a03a7d588ff1d217371192f4f3"],["/categories/前端/Vue/index.html","2b02e892382bbdfd516ccd2650219653"],["/categories/前端/index.html","55a62a838902b6f1eeb105377d363221"],["/categories/前端/jQuery/index.html","e224d8c60e5039e660995a6d15d22d36"],["/categories/前端/page/2/index.html","6084a453dd74fce987f7435b3768d35e"],["/categories/前端/原生基础/index.html","daf6e9274d89c50293ce2cfacf36e998"],["/categories/前端/异步通信/index.html","2ad6ead0e20cf5390c896621276673aa"],["/categories/工具使用/Git/index.html","410d376939f7bdab39dae19cad12cfb8"],["/categories/工具使用/index.html","1185ad8b21bbd9a5db5525a6a531a216"],["/categories/工具使用/markdown/index.html","102d27e965ace2f098c2df7eb023803d"],["/categories/工具的使用/Swagger/index.html","43a9fff1aac70c71b1ca06f23b32774e"],["/categories/工具的使用/index.html","03bb53dd52f5c09630536aa9e8f51e05"],["/categories/工具的使用/博客搭建/index.html","4ac49c678bd5a8f2b2c3b1b0334d4ada"],["/categories/数据库/index.html","cb4caf01e530fbbddbecc61c0208bba8"],["/categories/系统设计/index.html","06dd63cb95dd809a7e8dd847759e69f9"],["/categories/系统设计/page/2/index.html","58b6fcb88eb61d119bc05ebc249fb018"],["/categories/系统设计/分布式权限认证/index.html","ab724d7a7e5eb80ce30cc147dd025a58"],["/categories/系统设计/设计模式/index.html","b1902f688e0a81788a593792b1fa8312"],["/categories/系统设计/设计模式/page/2/index.html","f9411fe670a458b32235a9ead4b8e4b6"],["/categories/计算机基础/index.html","284ec890cb0e1bd4da344c54a1f5369d"],["/categories/计算机基础/page/2/index.html","d9c5bbbd3163509db304be01035dc35a"],["/categories/计算机基础/page/3/index.html","f9b375cee1b58f7ef307fc3397fb3516"],["/categories/计算机基础/page/4/index.html","6beef9817e5e3de94e66bc5b9f079d86"],["/categories/计算机基础/page/5/index.html","f3a7b4d2c27122909e695dcfc7c182fd"],["/categories/计算机基础/操作系统/index.html","158c77c7e1b516c2545fe4405894632f"],["/categories/计算机基础/数据结构与算法/index.html","f6f7f154c0f31b7e6d94a1b414abbd16"],["/categories/计算机基础/数据结构与算法/page/2/index.html","30c8e920e26291b5728c476b89f687f3"],["/categories/计算机基础/数据结构与算法/page/3/index.html","94959eb102503f2166ced0155896402c"],["/categories/计算机基础/数据结构与算法/page/4/index.html","98c0f80ae19186a0c4bb762df0120a9a"],["/categories/计算机基础/数据结构与算法/page/5/index.html","92f064e3131555937b87a609011a4633"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","e76afc61795991b4b6445b34181bdbe4"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","d3db9f356d72738a85ee09b27434f81c"],["/messageboard/index.html","b723ccdc828d0f684215e1d3bc7d9cfc"],["/page/10/index.html","430461c5da32f2debb9d76066e3456f9"],["/page/11/index.html","7a46a4f14ab29b3130f1c8d9b0117a6a"],["/page/12/index.html","6a066880648692bc5f956a5c488db0ed"],["/page/13/index.html","19520aefc88bfb4935f1c591076cb790"],["/page/2/index.html","e38c6b69be0d4152c0e52e2b27666a3c"],["/page/3/index.html","0b911d93bab5d44835b2200b698284bc"],["/page/4/index.html","ffde8c7a4a3e4c926fa5ca667e785644"],["/page/5/index.html","d7715da9f8d1c94601ff4372c2da64f1"],["/page/6/index.html","e9d624769ae1b89968db62a27dac77e0"],["/page/7/index.html","507b5da6358d6d3208aee08b880f35d5"],["/page/8/index.html","7bdc97442578181e48a3866e9688a6c1"],["/page/9/index.html","fb18d3606b8c7630b10b006b60c75b2d"],["/sw-register.js","cf039067d155fc41b936635a0d6dfeb2"],["/tags/Ajax/index.html","57399f39469040c32dbcd2c741d11a72"],["/tags/Axios/index.html","86c8cde6b2c9114fe94cfc871d1c43ba"],["/tags/CICD/index.html","b705c0c3ab62a2f90e88a50b829d74b5"],["/tags/Docker/index.html","5151cae18384ca96e3f4f27ea71b5e5f"],["/tags/ELK/index.html","f3a893ee9eb5811a0379de904d00387b"],["/tags/ElasticSearch/index.html","ceed91e99d37dce1f92b105f9a973d00"],["/tags/Git/index.html","ee3eacca480ef323434ef25b88b82fe6"],["/tags/H5/index.html","25059b62257d0148d8708c1d1ded1bf4"],["/tags/JVM/index.html","622011aa5c7587cfdbc38fb994ed41d7"],["/tags/JVM内存模型/index.html","d38c0ce48b7a19508907b3adde6cc487"],["/tags/JVM执行引擎/index.html","ff4b1b71d3a4e136e1cdfdb65c10977e"],["/tags/JavaScript/index.html","144f639401ad2c6b396ea30ae696f0ee"],["/tags/Kibana/index.html","7870eb2bb7693dd8ecbd3087920369cd"],["/tags/LeetCode/index.html","5ccc1719e6e46b8ad1d4781be24bbaf8"],["/tags/LeetCode/page/2/index.html","f5d534a93a483f4a81c7390a9472d0d3"],["/tags/LeetCode/page/3/index.html","0f4bbbdc1752f09e22dadf348a2f19e1"],["/tags/Linux/index.html","bf3e44e098537771c097cb36a13824fd"],["/tags/Logstash/index.html","417b5b8cfe256a28c08b71f2d1457499"],["/tags/Mock/index.html","1fb9243e819e196681fd3a4c3281d59c"],["/tags/MongoDB/index.html","4e2b884de0ff85497dcea86e8c57c32d"],["/tags/Mybatis/index.html","41e0f691715b4877bac566a4c49713c3"],["/tags/MybatisPlus/index.html","e98b3f5cf0199dbc0596ae6831dbff98"],["/tags/NIO/index.html","f281b3337530a24e75b90792f216ff29"],["/tags/Netty/index.html","356732f92a1d9cc3bc62bf7c4b8b8b5d"],["/tags/Nginx/index.html","d82e018ff8df0de81426843805546ff8"],["/tags/Promise/index.html","1137a98e82ff4ab5da651b5c1a492b42"],["/tags/RabbitMQ/index.html","7a1488a866521b36f4f285b52d1e5e1c"],["/tags/Redis/index.html","dbb283b275f3e5415a4a04f7e8862176"],["/tags/SSM/index.html","1acb7c57bca05337c8523950dc54018b"],["/tags/Spring-Security/index.html","218796b4edd7cd4df21cb45fe1d99be6"],["/tags/Spring/index.html","2c41f9774d5c3f363a1f565056765740"],["/tags/SpringBoot/index.html","78412984238174d61c9189f277f0b1d9"],["/tags/SpringCloud/index.html","419f47862cbed84eff9aed8ff0edaff2"],["/tags/SpringMVC/index.html","97388a542caff9703f12be3f527cf0d4"],["/tags/Swagger/index.html","f983b50c8b912278fb78118a28b4d7c3"],["/tags/hexo/index.html","6442ed604c12c8b8189ff6b0ed27eda7"],["/tags/index.html","04b9db0a1f14eb65c8ff7af009c5a0f3"],["/tags/jQuery/index.html","7211fba3104edb5eeb53ff0632518fb9"],["/tags/java/index.html","456aa8df0b14211507fefda0dd9b62da"],["/tags/markdown/index.html","9d6628fcd65bbc24fec7eb4b5c895e75"],["/tags/mysql-数据类型/index.html","c4fa6cf18392c2bad9bf60101e8bfae7"],["/tags/mysql/index.html","c7ab04f5e146f06746493000bf2c2527"],["/tags/noSQL/index.html","66bf9a54c2a7be8f0d103910d37cd4a4"],["/tags/typora/index.html","cb5b8bbd0c58b03af6d40b46ab7ed4e3"],["/tags/vue/index.html","b49630e84e8fc51d6335fb936b170ee4"],["/tags/享元模式/index.html","9fc50af90efa66dd3d047e0074ff9ade"],["/tags/代理模式/index.html","d645f6f7dccec7cce174aa92804463db"],["/tags/内存管理/index.html","f3314dce5840e107bc6b301cbbd59d8a"],["/tags/分布式/index.html","104997c681306ccafa4ec93240d5ad20"],["/tags/分布式系统/index.html","ba6273e50944300d045c3f9731feb8c7"],["/tags/前端/index.html","d7b005f81d6fb5f5fd3a5adbfa9bdc92"],["/tags/前端/page/2/index.html","09cfea487d267c7c3d5c57bbf91efb07"],["/tags/博客/index.html","74d31676156e3057440dd51115e83b3a"],["/tags/后端/index.html","0a94262e53be163a5c6bce713fbd3566"],["/tags/外观模式/index.html","b6151e2d0c1e66366d67e1eee1900717"],["/tags/容器技术/index.html","3ec1a02c9c98e8b096710dd64e124b1b"],["/tags/工厂方法/index.html","1e3fe42e4a98dd99aebd1bff0081e79c"],["/tags/微服务/index.html","7f30c2f53b026d8574772e5635668bc6"],["/tags/抽象工厂/index.html","0bba00ab5771f386c3cf15fd4b1b7aa7"],["/tags/持续集成持续部署/index.html","327e30574718dda97c9228acd0b5bb4e"],["/tags/搜索引擎/index.html","fb0db2b3f358fe15bf1d3999c895eddd"],["/tags/操作系统/index.html","34a3314bd1f8492dc9ed6f0fcef9596e"],["/tags/数据库/index.html","242451fa36db2b97cb8543fc2bee86fe"],["/tags/数据结构与算法/index.html","931fb9db76c6113a5e49b580d6604cbc"],["/tags/数据结构与算法/page/2/index.html","46e25bff39212f1d752c4002f868bffc"],["/tags/日志/index.html","0a99103eafc257526f277bed1c77a16c"],["/tags/服务器/index.html","b7de3c690a64a24a289a88c4f7ce9afc"],["/tags/权限认证/index.html","bbd16bd5362d9f793edbcaf6ffb6b313"],["/tags/桥接模式/index.html","2b6b5778c14173149d1c9dff9b06466d"],["/tags/模板方法模式/index.html","1544a769f2482ea5015af904944e2329"],["/tags/消息队列/index.html","abb401d70125288fc4b7c80b0b35c2d5"],["/tags/版本控制/index.html","4647e48f7732ae0a115c14ba0cddf0d2"],["/tags/策略模式/index.html","7beca5252f08b46fed8d83e524c1fd7c"],["/tags/简单工厂/index.html","a191c0ec9a2fe567c396680ae79a3ce3"],["/tags/算法/index.html","9332fcf85825373560e1f3995c773cc7"],["/tags/组件化/index.html","60e16e3502c795dbd16b77aab909ceb5"],["/tags/缓存/index.html","6bffb942756e079663dfcc4518ee6e78"],["/tags/观察者模式/index.html","11925a933cc9d7aa51a719abb16ee252"],["/tags/设计模式/index.html","51302ff5a8b7fee6f0069ffde1cccaec"],["/tags/设计模式/page/2/index.html","f943d6ece117acac14b58fd722922574"],["/tags/进程管理/index.html","77b47c59bb2d5a6fa316ccdc17f98b66"],["/tags/适配器模式/index.html","20a3296fd2954776956ac1f3fa33700e"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
