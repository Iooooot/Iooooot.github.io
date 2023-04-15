/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","04e2b4807608b4af51cb0335ec594cad"],["/2021/02/22/博客的搭建/index.html","4a18d8294a8435d9bbc385f512dbf811"],["/2021/02/23/如何使用markdown/index.html","75bd80e9b19f7aeb927e236b8b6d70bd"],["/2021/02/24/mysql命令大全/index.html","471bb465191c5b14ef7c1d93f003355f"],["/2021/02/24/mysql数据类型/index.html","e44f196aaf8a83ffcb24060651edd599"],["/2021/02/25/Git的介绍与简单使用/index.html","9799e5ad2e0303946038dc5d5885cc0e"],["/2021/02/27/简单工厂模式/index.html","5afb1daf87be7b7821215c3b2771c71c"],["/2021/03/01/工厂方法模式/index.html","669aa86a58431319a60a9ee85f5a52bd"],["/2021/03/02/抽象工厂模式/index.html","9f60dfabdb66780a70274c3979105f39"],["/2021/03/03/单例模式/index.html","b9e1219a67cda39216e91867b9fb5032"],["/2021/03/04/观察者模式/index.html","e2a0b60812e20e73583e00718efab62a"],["/2021/03/05/适配器模式/index.html","daf88db1609dfd2295d5f5228b68705f"],["/2021/03/06/模板方法模式/index.html","4c0da97874b3969281e7db96d21d451a"],["/2021/03/09/代理模式/index.html","0417a90ebdf5beefcbabffc192597dbd"],["/2021/03/11/享元模式/index.html","bc7e257cb263a8be0ca249ddd907ec7c"],["/2021/03/12/外观模式/index.html","9b9a44fefad2f572293348cbd88e6373"],["/2021/03/13/策略模式/index.html","393497b2c6669cf0fc744c4e8d2b84e8"],["/2021/03/14/桥接/index.html","d1e1cbe95b00dc70c07082de2c9fd88d"],["/2021/03/15/LeetCode-多数元素/index.html","c97682778a9329c469eb43e9434414fc"],["/2021/03/16/LeetCode之汉明距离/index.html","fb3123a046b79bc98b5befb502d8f010"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","c9e309512c92f79345cbac401a7c5c21"],["/2021/03/18/LeetCode之两数之和/index.html","fadf12129edfc296613ee231b5b20cfa"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","5d4b0d2950e2a7a9d131bcdddf9178d4"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","27a68fd4c47d0887d462a6fd85974fb4"],["/2021/03/21/LeetCode之有效的括号/index.html","defeaf34dc1670b04cd725629adb5f33"],["/2021/03/22/LeetCode之移动零/index.html","9941cc3c7d63292b50438174436420de"],["/2021/03/23/LeetCode之爬楼梯/index.html","c6387f2442ab05d593723c5dafcf1733"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","aba5d074e3c7a4d451a7787567daff42"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","2c6c5066066046145249d51531c1530d"],["/2021/03/26/LeetCode之最大子序和/index.html","34eec1db3b1b3d2f58d50bf58d25d033"],["/2021/03/27/LeetCode之子集/index.html","93be6c021d7c3dbe1f85285367ee42aa"],["/2021/03/28/LeetCode之合并二叉树/index.html","58eca39dd1f984f3df80e1105c1de55b"],["/2021/03/29/LeetCode之翻转二叉树/index.html","a164085eb6dfd37f3c09acb9fae7f633"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","db806753d2d9ad11bbe67e71486a9f16"],["/2021/03/31/LeetCode之翻转链表/index.html","b30b6fd4095dabcca05717c862920c8e"],["/2021/04/01/LeetCode之相交链表/index.html","d153c403ebb76912c9d492d8c08e03a0"],["/2021/04/02/LeetCode之最小栈/index.html","897201c97cff132fe665f8d4c5b36842"],["/2021/04/03/LeetCode之对称二叉树/index.html","de2b848ec0bd2b2409d2ef4c12c03775"],["/2021/04/04/LeetCode之环形链表/index.html","e79265ff410c7908fc9845d4a328d360"],["/2021/04/05/LeetCode之二叉树的直径/index.html","fd34d25e14d016a41a825efece587eb8"],["/2021/04/06/LeetCode之回文链表/index.html","107803023d80824babbf55bdfb1d859f"],["/2021/04/07/LeetCode之比特位计数/index.html","aa21fe80213675854f3fcf2b549bd241"],["/2021/04/08/LeetCode之全排列/index.html","df5e4be146f0af29d10c13dfb6333ebc"],["/2021/04/09/LeetCode之括号的生成/index.html","3614568501dd5baeeef94c0f5744dbb6"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","23cec442428ce1ecabed9ef79859f44f"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","3c2137dd145620b93cdfa7c7aeb2ac2e"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","df93ee7872c82ac212c8bc7700b9ef83"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","a214700d4992a2bcea33f6a0ccdaa4bf"],["/2021/04/14/Mybatis/index.html","dfba89705914ce8331e6ded8a1cbb67a"],["/2021/04/15/Spring-1/index.html","4b4ebdcbaaeb852d0a640246ca4fedcb"],["/2021/04/25/Spring-2/index.html","36fc9c85f7d01391570c48d85799b11c"],["/2021/04/27/SpringMVC-1/index.html","8c9cd9f912268d2f1b34caa340036b64"],["/2021/04/29/SpringMVC-2/index.html","019dd6847f7ba5d7786c615e7643f195"],["/2021/05/03/冒泡排序/index.html","fc19a8083adea55986a7d615d2d2bcd9"],["/2021/05/08/选择排序/index.html","293124f384b485a05427751ed5002816"],["/2021/05/12/插入排序/index.html","435c8643ff24aaafac97d3aa323ace1f"],["/2021/05/15/快速排序/index.html","88302ff7f5b67c890ce78bffcf6fe857"],["/2021/05/19/基数排序/index.html","a95a89557f360c66750679d479ea222a"],["/2021/05/20/哈希排序/index.html","ed817359ccf6bbbb0446a07def0d2aee"],["/2021/05/21/归并排序/index.html","b0eb3a0f827683d2514231225d3ca576"],["/2021/05/22/二分查找/index.html","c2aa3d6e425e3f29858e9159627a674a"],["/2021/05/26/差值查找/index.html","7fefc613554e4e8cfc81aa3c67262bea"],["/2022/01/12/高精度大整数计算/index.html","692d086bbf771063cc68a646171ac3a1"],["/2022/01/22/前缀和/index.html","e7fc27174a0f4af92137de3958abba82"],["/2022/01/23/差分/index.html","013e867de7745fc78538517ee6ee7d81"],["/2022/04/04/MyBatisPlus/index.html","bed2f7462643ccd147b65332a96ccdb9"],["/2022/08/17/jQuery/index.html","2251d90ed07e0cd2451cbec0d615f9e9"],["/2022/08/19/JavaScript/index.html","7a14eb00460e02d4daa8854c0b528ff2"],["/2022/08/22/Ajax/index.html","305568e598ee5ecf12f35b60eb192737"],["/2022/08/23/Promise/index.html","ad8aa0a44f533dfa9fed0adaac47a9a4"],["/2022/08/24/Axios/index.html","517e19484796d75611ef3355d94c17c4"],["/2022/08/25/H5本地存储/index.html","d73f588c73a956a46892785e5dc16c15"],["/2022/08/26/mock/index.html","fcd232d7e8bd519d96dbe90e0791cfcb"],["/2022/08/31/VueJs/index.html","30509b2a6e36a2c72479979be0cc6c09"],["/2022/09/01/vue组件化/index.html","dcf918808f94b538ea86042d09d9917c"],["/2022/09/04/VueCLI/index.html","a238883a3e1ba6ea2bb3c242c5140e33"],["/2022/09/07/vue实现动画/index.html","4b66db9183035d1d3931524f08a9e1dd"],["/2022/09/09/Vue响应式方法/index.html","1d9e56ca65ea73c22fd4f38aeabae1f1"],["/2022/09/10/Vue异步请求/index.html","3d4017bcc7207535326ebe74957784d1"],["/2022/09/11/vue-Router/index.html","41a4173d5d73448ec882f84a02d18e6b"],["/2022/09/13/Vuex/index.html","68f5572fc11fecd2e78714520fc8c397"],["/2022/09/15/SpringBoot/index.html","dd8f3da0c554ee21146ca9cbc8d6950c"],["/2022/09/16/SpringBoot配置FastJson/index.html","88ca182581ec3ba3f5056c9b80dbde92"],["/2022/09/19/SpringBoot参数校验/index.html","929a6efd24e7ccefea78520a7b2b59ac"],["/2022/09/20/SpringBoot的异常处理/index.html","cbbed987c467d28470838f7c05da35e4"],["/2022/09/21/SpringBoot统一响应处理/index.html","3487e2e187361c542e64212178fad755"],["/2022/09/28/Linux/index.html","fc1e723e2472fa61563d0f6860fd960b"],["/2022/10/02/redis基础/index.html","67440bd73f24e98ec8e9a7f0b18d6be4"],["/2022/10/03/Redis缓存/index.html","65ad75a5f1e29fe34b2dac019ea934fd"],["/2022/10/04/redis缓存穿透/index.html","a1a234476d2cb628527a81564fdc4716"],["/2022/10/13/Redis缓存击穿/index.html","e0fb4ff4744a3f58e048fb2f1b41eac2"],["/2022/10/14/Redis缓存雪崩/index.html","83c053f0f1913795353af989cb9b1da5"],["/2022/10/17/Redis集群/index.html","074dd522a7a870b1c61f116b95f186bc"],["/2022/10/18/Redis哨兵模式/index.html","05167cfb19201ad4ca5d61d2fe5c9b36"],["/2022/10/19/Redis主从复制/index.html","797986513ddcb27bf181cc86c3e0d1cc"],["/2022/11/03/Spring-Security/index.html","801e9ad77fa4f9fae15429febc53b899"],["/2022/11/08/SpringBoot日志/index.html","812e93ac9cc26d4a1aaeb99027155e38"],["/2022/11/11/Swagger2/index.html","bef296659c3ea1aa95fe47f7110c8eff"],["/2022/11/21/Nginx-一/index.html","481824c94644c798a2bc513dfa0e246e"],["/2022/11/23/Nginx-二-代理服务/index.html","5a136af4e5fe12f4ee6753e97d027bd4"],["/2022/11/24/nginx-三-负载均衡/index.html","ef0c0904bec8fe0fec65b0f853359520"],["/2022/11/26/nginx-四-缓存集成/index.html","c46e3af714493977d4d37a5603c1ae78"],["/2022/11/28/nginx-五-动静分离/index.html","8177f886979765287935afb955bc9442"],["/2022/11/29/nginx-六-制作下载站点/index.html","81f140d24f1b18bcdb62a3705c78a975"],["/2022/12/06/docker基础/index.html","708df86503a8bf452c31afdd66fd02fd"],["/2022/12/09/Docker高级/index.html","5046ac1930c2c186cd867921afac73b8"],["/2023/01/04/MongoDB/index.html","8788d3db87dbfec50d2509db75e34f75"],["/2023/02/05/消息队列/index.html","59b7eab453b6343e06d0185f87e049a4"],["/2023/02/12/RabbitMQ集群/index.html","d398ef70cd753816b0b6721536c838ba"],["/2023/03/10/CICD/index.html","3fede0b937a8b8543d2e202d56fde8c6"],["/2023/03/11/ElasticSearch/index.html","4d3252b78a70ab64a1f3bf630777bf33"],["/2023/03/12/ELK日志平台搭建/index.html","4af609784eeb0a339ac8cd0a1247f477"],["/2023/03/13/NIO/index.html","e23dc7d308584179fa2e2c5e9e2ec0ce"],["/2023/03/14/Netty/index.html","45210d09bd6b99e1893c72ce1c6361a6"],["/2023/03/15/SpringCloud/index.html","964ad49eb877050f86b445ee719efca0"],["/2023/03/17/分布式系统认证/index.html","9bdefc5076afd17ea2a2453a1b602522"],["/2023/03/19/JVM概述/index.html","0adf08a8e09f1155d582dadffd849359"],["/2023/03/23/类的加载过程/index.html","800f7ce274dcb9347a93c82743fdd915"],["/2023/03/28/对象的实例化/index.html","927faf7e1221eef1aa13aa312d86ec53"],["/2023/04/01/运行时数据区/index.html","7f155cd1bc4e6a52f37b66b22326f8c5"],["/2023/04/04/执行引擎/index.html","c2f1ad32a6a8d6a9ce2b4bf963908e1c"],["/2023/04/06/对象引用/index.html","946855bdf090408a6946ba8eba4d3041"],["/2023/04/09/垃圾回收/index.html","d62000c5b68f845b052464f9c27c6b42"],["/2023/04/11/垃圾回收器/index.html","264da1e17b6fcb2261e9f7c11abb8771"],["/2023/04/14/Class字节码文件/index.html","9c9aad385b2228c20273c0cf761f2060"],["/404.html","d4532a73244907f45f0742e7ee29accc"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","5ec25ae18765d1403e08dad3c4c3cb4d"],["/archives/2021/02/index.html","75da3e54ba2a98db667a2caab3d94d50"],["/archives/2021/03/index.html","103fc45bcd51efba91d04582c23a49b9"],["/archives/2021/03/page/2/index.html","9018afa2d45520fb1fafc157f1862219"],["/archives/2021/03/page/3/index.html","0283466893f8ad3feb93cb8837b5e703"],["/archives/2021/04/index.html","9d9a50352775624aa96fbf5b59250688"],["/archives/2021/04/page/2/index.html","83efb8beee5117fb24c2e4db873b0ac0"],["/archives/2021/05/index.html","69ef8e7798e565bb9b67355fbd4e0f18"],["/archives/2021/index.html","0ed3202b2b9c62841e589251a1e695f8"],["/archives/2021/page/2/index.html","6824eff54cce867c205a3773cb5fa668"],["/archives/2021/page/3/index.html","6948a07f3e5e8792bcd012c56256679a"],["/archives/2021/page/4/index.html","23b1826ca2187cd6741366ce79792687"],["/archives/2021/page/5/index.html","84eb697c17f14322cb1d77a885a29d18"],["/archives/2021/page/6/index.html","8d2d8ada954402f659c2c9a28d0f1856"],["/archives/2021/page/7/index.html","7676b1fd701fa38ba499c4dec7690235"],["/archives/2022/01/index.html","ed9e563cdfdba17372ec27c7e58c650f"],["/archives/2022/04/index.html","0fb376bae0e4cabae7a60a0f622dd412"],["/archives/2022/08/index.html","804cd265e189c4650f6ab3dbd7cd0184"],["/archives/2022/09/index.html","928681bfc8df89a14f39542239e68e25"],["/archives/2022/09/page/2/index.html","42e1bb7fe93060cdbdaef9f8e485e186"],["/archives/2022/10/index.html","a6c1cb0fecaaebda539e3afd12b53cc4"],["/archives/2022/11/index.html","acd37855fdf537e00c979747889a3616"],["/archives/2022/12/index.html","facd4fe6d4a604087382aaeac0570856"],["/archives/2022/index.html","c3f138604fe4afd4daab16fc08dfc220"],["/archives/2022/page/2/index.html","4425345ef72ee6053e30c0dcb61dbb6d"],["/archives/2022/page/3/index.html","93aaf75731e5cfb1f7de44465a823570"],["/archives/2022/page/4/index.html","efbfe7e77863e5a905ed2ed68c49f33e"],["/archives/2022/page/5/index.html","aa52705fee22df0503372507ae6bbaa4"],["/archives/2023/01/index.html","e57662a4f40ad5860ee6cf016be528b6"],["/archives/2023/02/index.html","1b13a61f4085b1d36dc20cc53347bdbf"],["/archives/2023/03/index.html","fa989a4c59ef9f69003b8fb27c04135a"],["/archives/2023/04/index.html","0137024f58dac9919c1d8d7b6647cb9a"],["/archives/2023/index.html","5784a63f3982dcef3a625d72663525bd"],["/archives/2023/page/2/index.html","e82690404eff225fd5b52f6c92a9664c"],["/archives/index.html","c7a8322a0be3302a18ad95ca970f6d31"],["/archives/page/10/index.html","81cc5660c4597600d378b28fa6290083"],["/archives/page/11/index.html","29e7f7229f192ecf3b3d718a7a593aaa"],["/archives/page/12/index.html","06034b3a9b50a70e70c4284000a8d0b1"],["/archives/page/13/index.html","b9d9ac085e31492cabbad90deefea4e5"],["/archives/page/2/index.html","362e4627084f08d60896602dae555768"],["/archives/page/3/index.html","c4615f3d6112fd790b958b465daad5cc"],["/archives/page/4/index.html","f58f489385dc9f08ea94c60a52968c88"],["/archives/page/5/index.html","891a5cf1a574835184315afad8d4043c"],["/archives/page/6/index.html","bfd7bdc474bbe75d64dd2abfc7a403e1"],["/archives/page/7/index.html","e21b1beec7e334c3a50e61b729fc9911"],["/archives/page/8/index.html","39bbeacfdf1cef8f57b7dd7d55f0ed76"],["/archives/page/9/index.html","5972d44f3517c6355573202403f9fb55"],["/categories/CICD/index.html","95b79bde20e1cf403f90f790853428b0"],["/categories/Docker/index.html","e41bb0d081c1e42a6f5f6691ad1022a6"],["/categories/ELK/index.html","7f8eb7fc819e33ea9248cd3f28f1032c"],["/categories/ElasticSearch/index.html","eca3dd5e26345a236f3196eb313e1a2a"],["/categories/JVM/index.html","f7b46c948c496591744e1c36139bc47a"],["/categories/LeetCode/index.html","ef2fa8cfcc66295eac8e010ba4e9417d"],["/categories/LeetCode/page/2/index.html","9ef11a1fa510b1e85769ef7a86db65eb"],["/categories/LeetCode/page/3/index.html","789f6ba7e541f82f3a6f79f3e11eedd1"],["/categories/Linux/index.html","1d6088ad137b427e474da44eeb64c1c2"],["/categories/NIO/index.html","b14ad80f7e3130bfc8a8d49b7ceb86ef"],["/categories/Netty/index.html","072e1887c96b2fe904de50fd1a4d0e23"],["/categories/Nginx/index.html","5ea278998dd74579d6fc16c7f8481f8b"],["/categories/Redis/index.html","48de55fa1c46faa660b7046008afbbec"],["/categories/SSM/index.html","41632b6cc8af1c93c0a90d59869ad604"],["/categories/Spring-Security/index.html","f705927e7f060b3c2974ea01975a4ffa"],["/categories/SpringCloud/index.html","cb9c74b56f0ba340b9adb59557cc412c"],["/categories/Spring框架/index.html","9a509b5da39124593423717d1f2d6d21"],["/categories/Spring框架/日志/index.html","cbd4c5d9b5396799bd38e6c97f2c42a1"],["/categories/Swagger/index.html","093ab7e39f9d950b2bbaad95f9e09db0"],["/categories/Vue/index.html","c89b8851ce2908861b223f532993886e"],["/categories/index.html","313303d0f01d41f38f312fafacd4624d"],["/categories/分布式权限认证/index.html","2dea6328cbcf06fbae04d4ed4c057d9f"],["/categories/前端/index.html","9b6e96cd4429eea526c428244f2c787f"],["/categories/博客/index.html","2c938aef1e2960730cd25d796fb8ec88"],["/categories/学习路线/index.html","ce73789e831f446e80b5cf2a85f56b4a"],["/categories/工具/index.html","caa8402f67e08ede999726ce9dd7f865"],["/categories/数据库/index.html","2f86eae463fcb230847bc373b2a2b208"],["/categories/消息队列/index.html","04ba867295b684d17db5ceb9573c717a"],["/categories/笔记/index.html","2ece27913f8375f636ca96d23a61a55d"],["/categories/算法/index.html","bbaa26e5642364124123e54a4bf35ed6"],["/categories/算法/page/2/index.html","3dded3edf9a1d1e5f3dbb7baabe59dd9"],["/categories/设计模式/index.html","e8b1bb00a48c835027bf6e8f5e544d9c"],["/categories/设计模式/page/2/index.html","0804f500a1ad8124583d84ae046a8147"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","aaac7f5e1ed3c5de9422a947a410a012"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","fc3e2303704c171ece91a1de69150b69"],["/messageboard/index.html","cbeea14f30c79197876545ca7b6df8d4"],["/page/10/index.html","209919d43277d2ffe67f4e461ab25335"],["/page/11/index.html","4eeaec875e1d50b7f7d5515fa2b1668b"],["/page/12/index.html","83b70728a742a910d819a0cd662e1e2b"],["/page/13/index.html","90e85afd4bb20d0d8f17cb252ef066de"],["/page/2/index.html","759cb36a5c547635e32b87fa33fcba00"],["/page/3/index.html","4e6b44a46d7096d4260eb29ce8e866f0"],["/page/4/index.html","6d059c7f949f07211d97e5450e241f1c"],["/page/5/index.html","f567e286029f64564cf3ada251b602bd"],["/page/6/index.html","b2589d2f0969003813d0a05728879d3a"],["/page/7/index.html","86b9f34e261348d7d57bbd11e32198b9"],["/page/8/index.html","b66cb4d822c8efff6baafbb53e082afa"],["/page/9/index.html","c902f5b42b07fc98eee5373cc67c403c"],["/sw-register.js","f50eecef7b3026b81d7132c0c01ae360"],["/tags/Ajax/index.html","942dba4e736b4f757fdf4928d324803d"],["/tags/Axios/index.html","b8b2a1ba53c5a5873f0e8ce52b790d58"],["/tags/CICD/index.html","e5827b8580e5aaf537c35a68bc3d98af"],["/tags/Docker/index.html","03d46201ae45e74b1f020a48855d118a"],["/tags/ELK/index.html","8dd7c33385730609773b66ceded40905"],["/tags/ElasticSearch/index.html","549604cffaa0f06d3383531a14bc8993"],["/tags/H5/index.html","55ece5a78ca1ad5d44fcec0625b0921b"],["/tags/JVM/index.html","ee3438c67642f5d8f416a75182d9b8d4"],["/tags/JVM内存模型/index.html","a08d89d179c862fc92a17eecc05c733a"],["/tags/JVM执行引擎/index.html","f539452249abfab95df544683fb0d72b"],["/tags/JavaScript/index.html","467f0a544df089c6e14a351143dcf2e9"],["/tags/Kibana/index.html","36e885273a914be6508361415713367b"],["/tags/LeetCode/index.html","e583bcd382c51db92dd34f69c17cd791"],["/tags/LeetCode/page/2/index.html","fddad0e08839afc04b1b13c4beefdfee"],["/tags/LeetCode/page/3/index.html","cc580c9068b279d25754fc6c860e85f0"],["/tags/Linux/index.html","b27506ddbff3da25e5a5c64f722c0fe3"],["/tags/Logstash/index.html","d7a2e46b03701e59a1e8275fffd9f0e7"],["/tags/Mock/index.html","ccb73482faa05ce71d88c62f1b96745a"],["/tags/MongoDB/index.html","53caeb0b0b1e01ea68638c3757020a6f"],["/tags/Mybatis/index.html","b8bdae26447a7f730be143878268d220"],["/tags/MybatisPlus/index.html","b0ee0e9d0753cd4cb3a33161cad6120b"],["/tags/NIO/index.html","bfad9468d518910e836c8a34477a28c3"],["/tags/Netty/index.html","85f5dd4dd2def7466047093420efe467"],["/tags/Nginx/index.html","7ff926453edc6e3b9a5140284daca086"],["/tags/Promise/index.html","59ef070e22abfdf51025b7f6ae74e317"],["/tags/RabbitMQ/index.html","45358e7bf9a3193d3c86de19c399d50a"],["/tags/Redis/index.html","bf532e3f52ff7e7f30d97f4f422ef508"],["/tags/SSM/index.html","25c2afbd143af8bdcbedab7a29cc36bb"],["/tags/Spring-Security/index.html","2fe64dd94f68ffdade074733213312ae"],["/tags/Spring/index.html","5b53347384d78e983dfc0648de3b510b"],["/tags/SpringBoot/index.html","c170cff90d297bda8f741263d51fc411"],["/tags/SpringCloud/index.html","33fc84a3a1f0b5b9b53c19945e593b59"],["/tags/SpringMVC/index.html","6d55998b8fefc76aa2bb65351c56f350"],["/tags/Swagger/index.html","2a90efea83e55ec65c4b572db378545b"],["/tags/git/index.html","fcab8703c206633393024f5b7ef31cc2"],["/tags/hexo/index.html","babea2d594744d5befea430cc8df6f9f"],["/tags/index.html","360411c64baab3b99a29dac7c6ce7345"],["/tags/jQuery/index.html","206466405d3e800c26ac0a8118480312"],["/tags/java/index.html","ae0de25d569b5717d831b5ef7f209b3c"],["/tags/markdown/index.html","97c0251474cebbefc5b0e62c96c14f64"],["/tags/mysql-数据类型/index.html","09d4f7d4855f5490142cacbb4c6cdee5"],["/tags/mysql/index.html","26460553e8a0f924117ede1f9c4b0e66"],["/tags/noSQL/index.html","8e52b323808d5dbf634423a6c8a8c82b"],["/tags/typora/index.html","b219973b7c10f5b1b5636b8f623b7219"],["/tags/vue/index.html","33d1b1a9e015ecadf8c6db3054403fa2"],["/tags/享元模式/index.html","8d1cd31d86705d801b8da4b507dbfd60"],["/tags/代理模式/index.html","a4c076d959021427942d8a18f7f7325c"],["/tags/分布式/index.html","882ae71dd3887f67fc3bc1db845de126"],["/tags/分布式系统/index.html","aacb71f64da13bdedf12f1b662d12209"],["/tags/前端/index.html","3680f993d93eeeede9d4507e79347eba"],["/tags/前端/page/2/index.html","1aa7ca484805fb7237367531ab0cd187"],["/tags/博客/index.html","0a96ad618d3aab058e14fb0043a62728"],["/tags/后端/index.html","2f368c88b8e7f5fa57432dc035b2d42d"],["/tags/外观模式/index.html","d7b443dc79690e317fe70ff0a4709218"],["/tags/容器技术/index.html","24e724b8103a07c57b06f82ba8ae99de"],["/tags/工厂方法/index.html","14405c3d71d83d3b9d1d8d8388bf1347"],["/tags/微服务/index.html","4a712f2e5bd00f4a9fd15fd1d5d2bd1a"],["/tags/抽象工厂/index.html","375608522706fcaab4a5e6decd87c28b"],["/tags/持续集成持续部署/index.html","88370e275f74e1a7be8e6cfc50e54a44"],["/tags/排序/index.html","d8fc92833a8cc0199287775031b17f4e"],["/tags/搜索引擎/index.html","0bdc166916f4549d85b3291c25fbfefd"],["/tags/数据库/index.html","9c65024bb9778b71bcbdfb19c0498714"],["/tags/日志/index.html","7f6c28d7405ef68c5eaf148e1ea25f81"],["/tags/服务器/index.html","aa08f43432c5a78dc510c304e4c7db15"],["/tags/权限认证/index.html","35d79cfd506f628574f70953f99ec241"],["/tags/查找/index.html","61e7f6ec09d423cd8d0ec2b1f3dca0f1"],["/tags/桥接模式/index.html","807d46cae2417b06bbb2be713b79ee01"],["/tags/模板方法模式/index.html","2d662c1d60033151bb96b1c2467f6c82"],["/tags/消息队列/index.html","073f32def6088bd40e4b9e293b6fcc3c"],["/tags/版本控制/index.html","14bf2ca2364cf92af65f78a1a9a3107c"],["/tags/策略模式/index.html","961948e4578ee175c6a3d6ace87db3ae"],["/tags/简单工厂/index.html","fc0cf7de0601de277adc8d58a65aba72"],["/tags/算法/index.html","4819cb17785ff9050fc23a4b21b2dafb"],["/tags/算法/page/2/index.html","4897bf9c2ba5497f1335a71ccbb8cea3"],["/tags/组件化/index.html","d3646e68edb2541faddcd2d7d295a557"],["/tags/缓存/index.html","e3ca2dbe7f213b3b369c5480803397ac"],["/tags/观察者模式/index.html","b6970584534b7193c84b96d3d2ed4c36"],["/tags/设计模式/index.html","751e9291f38cff4168a6e95ef5500edb"],["/tags/设计模式/page/2/index.html","5812abf1ca5d046e7015c1956a2d737e"],["/tags/适配器模式/index.html","4db4fa2144905d579abf1792b470e886"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
