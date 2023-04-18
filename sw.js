/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","a459fe2e449145d06b37fa07c7215710"],["/2021/02/22/博客的搭建/index.html","322ac239ccd41e3288bdd73c46aca059"],["/2021/02/23/如何使用markdown/index.html","2ef14bdf9b356341b727044f67dc754b"],["/2021/02/24/mysql命令大全/index.html","fa8d45fa774583ad4780de80843da9d2"],["/2021/02/24/mysql数据类型/index.html","a8ae299b926de96e5984b53e4f0931a1"],["/2021/02/25/Git的介绍与简单使用/index.html","454cbe43d1857b6dece49ae336f4b191"],["/2021/02/27/简单工厂模式/index.html","0817b353069fffd286e458841bd7137e"],["/2021/03/01/工厂方法模式/index.html","5b646cc523002526ae32b91db9227c6d"],["/2021/03/02/抽象工厂模式/index.html","4f031f37ee56c795299690e3f02c3a73"],["/2021/03/03/单例模式/index.html","2da13dc4b755c1a1dd4e7f4dd2c1c1aa"],["/2021/03/04/观察者模式/index.html","6de9dd347a9ce9366fab1c3c6f2af625"],["/2021/03/05/适配器模式/index.html","2676403243160b9451693f9d72742946"],["/2021/03/06/模板方法模式/index.html","8f65ba15a1b7466b133f0e52e623963f"],["/2021/03/09/代理模式/index.html","342fe8415defe2e802ec3982846e3bac"],["/2021/03/11/享元模式/index.html","d8ee62cbf2c94ff4c64e7d99ddf16a39"],["/2021/03/12/外观模式/index.html","0b25c42bd82978082bece8d7456739a7"],["/2021/03/13/策略模式/index.html","b858b201b5bc8fb49b98e0715e6367c7"],["/2021/03/14/桥接/index.html","02ee3da56bbca3e2541d987d2dfcfeda"],["/2021/03/15/LeetCode-多数元素/index.html","f474010089be55eb3f5804e1c80e8af0"],["/2021/03/16/LeetCode之汉明距离/index.html","a09a3b7ffc724f2027e532c667a83f92"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","0db791e297824f4d70db47b58bce180f"],["/2021/03/18/LeetCode之两数之和/index.html","25bb596a264996b4166f26f7cf3fdf61"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","0cd79e81f5718def795db239aa894ee3"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","61581c554a234a1474f9171fc23c6f4a"],["/2021/03/21/LeetCode之有效的括号/index.html","1ea0ebe77dc36ca4ebc105ac3d2dc313"],["/2021/03/22/LeetCode之移动零/index.html","71b54c225592827fe6ba4159c2947ec5"],["/2021/03/23/LeetCode之爬楼梯/index.html","9b42bb95934f0290870dbcf32090d72f"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","fd8fbca6dfd450d6ca91c4c8f3ae34f0"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","1a50e4a97d4c626f0ec37593c6bfe284"],["/2021/03/26/LeetCode之最大子序和/index.html","7f955ecb5b052c808d55039b2760b80a"],["/2021/03/27/LeetCode之子集/index.html","95d307aaa6929b6826614370612c90a2"],["/2021/03/28/LeetCode之合并二叉树/index.html","8df7ced01125a1c70a4a236432d0dd36"],["/2021/03/29/LeetCode之翻转二叉树/index.html","bfe8bbc74cffaff5ae42eea28684217b"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","f817685645986738b31665c7703db4f8"],["/2021/03/31/LeetCode之翻转链表/index.html","a683fea5be520308b5a67ce883d5294b"],["/2021/04/01/LeetCode之相交链表/index.html","417e6ebf041292d920b8602acc7238ba"],["/2021/04/02/LeetCode之最小栈/index.html","d063ff34b629813657c463f0d6b22268"],["/2021/04/03/LeetCode之对称二叉树/index.html","809f693c3fdc54a1a3ab713319a35228"],["/2021/04/04/LeetCode之环形链表/index.html","c0d005429324aca2565aa7d1d6b9e220"],["/2021/04/05/LeetCode之二叉树的直径/index.html","56270369d21474a4200f0472fff9dc61"],["/2021/04/06/LeetCode之回文链表/index.html","02481fc4710f75331f7860a3149f32e8"],["/2021/04/07/LeetCode之比特位计数/index.html","ad1cd54db9e028f880c115aeefc0f8ad"],["/2021/04/08/LeetCode之全排列/index.html","85e8deb9231f6ecf6361c564de50bca2"],["/2021/04/09/LeetCode之括号的生成/index.html","ada8debf524ea74668a4e6d13d41e05c"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","20ea130e7b045009ed919bb8800fcfaa"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","51f395ed327e6f5da11aff2b091636e4"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","8d17fab5d53bcdd7a54a6195559c06fa"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","fb7498c105b904288a72d261f5119acc"],["/2021/04/14/Mybatis/index.html","d2f8e54c4f7a44225116be96d3492299"],["/2021/04/15/Spring-1/index.html","68e773438b4c1aa5eb74f74aaec206a6"],["/2021/04/25/Spring-2/index.html","5f8240ee2705cb684f75f28c7e4d70ba"],["/2021/04/27/SpringMVC-1/index.html","8382b5501d9d10ff206dae4044866da8"],["/2021/04/29/SpringMVC-2/index.html","97ce716e04110ad8bfca8a8aa00f9c8f"],["/2021/05/03/冒泡排序/index.html","57b6f3d9085681bc1449a32564315474"],["/2021/05/08/选择排序/index.html","ce3339bb87715385e2b49e9f1d538938"],["/2021/05/12/插入排序/index.html","ed1cfddbd52e239bdfae21e547b51d97"],["/2021/05/15/快速排序/index.html","c2db3c99ccb682467692cfcd7eba9fb1"],["/2021/05/19/基数排序/index.html","1cf707905e77adb0ca7c60f0e5d6401a"],["/2021/05/20/哈希排序/index.html","ad12f45a0a912bd9c88a25a4fedf1d36"],["/2021/05/21/归并排序/index.html","992a3d38ef470d9e38a2547bd11df5fc"],["/2021/05/22/二分查找/index.html","b609ab926853fa573d3384256016874c"],["/2021/05/26/差值查找/index.html","fc00fb62857695beb79a501c4eb3b547"],["/2022/01/12/高精度大整数计算/index.html","c404ae9d747d7c6a6db21bc9c1f8fb21"],["/2022/01/22/前缀和/index.html","f3e33f894923f798cdb0bc41f0fb7060"],["/2022/01/23/差分/index.html","2e0f4f468e3923483bfdda65d7a15b43"],["/2022/04/04/MyBatisPlus/index.html","4cd967ebe114697aca52f5b0a1291444"],["/2022/08/17/jQuery/index.html","e485fa6aa4ea8b718a3a5e84c270f0a4"],["/2022/08/19/JavaScript/index.html","2742b7805e8b72b0ce711c8abdba8f4c"],["/2022/08/22/Ajax/index.html","5bc22af18c30b3984169ff404fdf0d82"],["/2022/08/23/Promise/index.html","0fbbfdf0e2a5cdb49f1ba7e6c8e8c5a5"],["/2022/08/24/Axios/index.html","c7b7c8d9dbcbca9ad27028f17f272c08"],["/2022/08/25/H5本地存储/index.html","d30d7440f6972cdeba1350f978833b14"],["/2022/08/26/mock/index.html","dc721af654f5e3697c24d2215836e961"],["/2022/08/31/VueJs/index.html","e8f0f32c8b9f29fa9b9d48cb46ce3eac"],["/2022/09/01/vue组件化/index.html","2aca6a5007a883c9bc659ce6a53c10b4"],["/2022/09/04/VueCLI/index.html","54fafa124a73a141aeb43a5b2aca9b1f"],["/2022/09/07/vue实现动画/index.html","5e24751200f40fc63c86bfbbbdf7aa2a"],["/2022/09/09/Vue响应式方法/index.html","5a68c27c9dfb30b01d86fdf771a2700a"],["/2022/09/10/Vue异步请求/index.html","59fb3e46b3d4ab7b44f08efc8adff576"],["/2022/09/11/vue-Router/index.html","7439d28886d57e80a847db7d5274ff9c"],["/2022/09/13/Vuex/index.html","d1643912051117796043012661c53cff"],["/2022/09/15/SpringBoot/index.html","5e5854bd8308e4a755a2003d400c8abc"],["/2022/09/16/SpringBoot配置FastJson/index.html","99de44ae88503525195c419d3c172ba3"],["/2022/09/19/SpringBoot参数校验/index.html","feb43508217709a2dbc1c8ef656722be"],["/2022/09/20/SpringBoot的异常处理/index.html","4815e3ab6690bf3f0e330d618614afb5"],["/2022/09/21/SpringBoot统一响应处理/index.html","a3f3ecc5ded9b4e6949c44b384006574"],["/2022/09/28/Linux/index.html","23d90bffa9cfc99f5275f2095030bfe0"],["/2022/10/02/redis基础/index.html","fb4bdc8b064f6d7b43e6318ee3610052"],["/2022/10/03/Redis缓存/index.html","afe1687f3c863c2925fed127a209a768"],["/2022/10/04/redis缓存穿透/index.html","1622fe4d3608f9db95b1bbe22220c25b"],["/2022/10/13/Redis缓存击穿/index.html","8665fae823515a9eb1bf04d920718834"],["/2022/10/14/Redis缓存雪崩/index.html","4b67cdf9b4b8573d1e335c5e8fc9fe9a"],["/2022/10/17/Redis集群/index.html","a7b6f52ff9a2694715fa537e1bba94a8"],["/2022/10/18/Redis哨兵模式/index.html","f55572c6808f26ff54e91c44fb6336f5"],["/2022/10/19/Redis主从复制/index.html","7d099dd5df809bf8ffa95a6c1a005f18"],["/2022/11/03/Spring-Security/index.html","ed06b81f387e7d7144574a3576c0ee5c"],["/2022/11/08/SpringBoot日志/index.html","bbfd870396c2c355f200d7a24c07c5f0"],["/2022/11/11/Swagger2/index.html","0c032eab66bc8deb8319ff46f08adc4e"],["/2022/11/21/Nginx-一/index.html","af96562ad558125ffbcec5e46fb7b251"],["/2022/11/23/Nginx-二-代理服务/index.html","bac3ca52dc68e56f5bf7ca10662450e8"],["/2022/11/24/nginx-三-负载均衡/index.html","f27056d86df301780eaa43085ca18640"],["/2022/11/26/nginx-四-缓存集成/index.html","8c3c07690c584d86becc870afcfcc77b"],["/2022/11/28/nginx-五-动静分离/index.html","9ae585e5a60c4c17019339dc001c351a"],["/2022/11/29/nginx-六-制作下载站点/index.html","3be105961035e12b676320adc43bb611"],["/2022/12/06/docker基础/index.html","bd3c0432725e69b1932d7552e20e8f73"],["/2022/12/09/Docker高级/index.html","098408d5817bffb1a5aeafae5fdaba09"],["/2023/01/04/MongoDB/index.html","343888ecd941b2e4f0d22a7f9c272d73"],["/2023/02/05/消息队列/index.html","5f3e2f5dbd71a92e8bead8c0be7cf708"],["/2023/02/12/RabbitMQ集群/index.html","bdcefa1986a9cb1515b8ed56cd0b6dcb"],["/2023/03/10/CICD/index.html","ee4266e1215d7670158817ccf69fb4b2"],["/2023/03/11/ElasticSearch/index.html","866f2787eef9f49bdbb46cb7ca006174"],["/2023/03/12/ELK日志平台搭建/index.html","bff8f3ea493bf29a38e477ed62648050"],["/2023/03/13/NIO/index.html","a3c23e046756c22bb9d0aae73fdbb590"],["/2023/03/14/Netty/index.html","ac89b01507b7a21de85b232a7ea188e6"],["/2023/03/15/SpringCloud/index.html","9b5d77ffa2ea6ee6b54b479507e6ee37"],["/2023/03/17/分布式系统认证/index.html","d39edf8731b3f447d6f2270ad3e9ba8d"],["/2023/03/19/JVM概述/index.html","23906ee90299ca1ea55140ab32da3431"],["/2023/03/23/类的加载过程/index.html","f8cf6b1e85d26550ea7bd7edccccf6c6"],["/2023/03/28/对象的实例化/index.html","6209f945a2af12dc5569d4d3d0c7ab5c"],["/2023/04/01/运行时数据区/index.html","36026cca02ee6441650e267e7274bfd1"],["/2023/04/04/执行引擎/index.html","ddbbad65ecec09b17d7db29e48f56682"],["/2023/04/06/对象引用/index.html","e38afe281e8a1802b9047c58da801700"],["/2023/04/09/垃圾回收/index.html","9abf5b9d72e3af9afa6ff3293facf9a2"],["/2023/04/11/垃圾回收器/index.html","ac8f7b779db3b3ddb778dd45e48cc05c"],["/2023/04/14/Class字节码文件/index.html","72d788e38211c5140e99a87913713a83"],["/2023/04/17/设计模式总结/index.html","614cfc1719251c5adf0fce005bde766f"],["/404.html","e45fa10db4050acd9ec48a3a707ee88b"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","3ecfb01d9963219f563192a9dc0ef97c"],["/archives/2021/02/index.html","d062d52bd4e227fd3da1cd91894ec7e5"],["/archives/2021/03/index.html","b28673dc74800ef5fba2828664610da7"],["/archives/2021/03/page/2/index.html","550770ef90fa5e5e0aba9eb10843a4e0"],["/archives/2021/03/page/3/index.html","f1c7cd2b3cbfebed006ff907323131e9"],["/archives/2021/04/index.html","b5de23dc1677ce49e72bb34ab5ff2d11"],["/archives/2021/04/page/2/index.html","6cd29bc5e300c9ec586633ce220f0f01"],["/archives/2021/05/index.html","1f10bef78aebb1fde1f8b2bcb35534d1"],["/archives/2021/index.html","303a6d63278b167d6c48a6c0e3453a36"],["/archives/2021/page/2/index.html","401e284408a435b97f0268b912dc95bb"],["/archives/2021/page/3/index.html","91e6250c15d5cfe8e529e4207de021ff"],["/archives/2021/page/4/index.html","55185248d4206f6535512cfb92809880"],["/archives/2021/page/5/index.html","e44cbbcc5f0c1104a81a532d380b1dba"],["/archives/2021/page/6/index.html","ab7f0cde881aa861a1e5601635bfb9fc"],["/archives/2021/page/7/index.html","67b4f67cd822362e8e1dc6c0876ee21b"],["/archives/2022/01/index.html","a2cf8b57103ff9812445843343c0e3b4"],["/archives/2022/04/index.html","a4437642b9af98588237ee8109acc73e"],["/archives/2022/08/index.html","beaf1e3b10bd9a983fbccdde8b7f90ff"],["/archives/2022/09/index.html","33ca351d90534f79cedf35d292660295"],["/archives/2022/09/page/2/index.html","4f07a2d48251431849a2ce5e7e6cd992"],["/archives/2022/10/index.html","2e1209b50f90edee4aeb5a77731155da"],["/archives/2022/11/index.html","98d6f95edc82df02b6c42bc52f392d7e"],["/archives/2022/12/index.html","03164c3dab1fd92523cf71b50265a848"],["/archives/2022/index.html","2e0280dbd8bc4ca0502c7a3f21676bff"],["/archives/2022/page/2/index.html","68d2d965201f048c711ea171b225e196"],["/archives/2022/page/3/index.html","7175d32928615bc8ad7f50354892d3ea"],["/archives/2022/page/4/index.html","e567e67b5979f761dbdcd08a1aab8ebf"],["/archives/2022/page/5/index.html","06b4df5c43c132c60a08ca92d58453ca"],["/archives/2023/01/index.html","aea6b0500b32dbdc3582425a3583b364"],["/archives/2023/02/index.html","cc4914b77c75485ac992a6d6a9f3f9ef"],["/archives/2023/03/index.html","bd786ff70d2e48066654d203b8593ec0"],["/archives/2023/04/index.html","9e16c3d1d69dd6253305d7bcab3a4629"],["/archives/2023/index.html","cefdf9df711692efba8deb38631043a6"],["/archives/2023/page/2/index.html","190afc4d58e04a5550016a4b41de27db"],["/archives/index.html","c8d89976f9c4010cc7f14dd29b3a1253"],["/archives/page/10/index.html","c1ed8f8cdb69ffe208eb50116f59cea6"],["/archives/page/11/index.html","2af023015f4f6e42a93a3ce80cf9e920"],["/archives/page/12/index.html","5d17aaea656ba6d40212c5d7c8da9798"],["/archives/page/13/index.html","999b223b1a6b8e795d9829aefeb9569a"],["/archives/page/2/index.html","d27ae3ec967dd1f4b2e7d7966b2ef89b"],["/archives/page/3/index.html","88e19d1be58f2ec1172791900ec2ec52"],["/archives/page/4/index.html","db724b20ddca8242c38990290e09cf69"],["/archives/page/5/index.html","df24fcc50e2785cc3a41d71ea4f8c4d2"],["/archives/page/6/index.html","a387abf9112989dd995d91dfdad896bc"],["/archives/page/7/index.html","2c19c4a8bbf33c21e7f7e45438be68d3"],["/archives/page/8/index.html","421ca95651bc58d3ae272b9b18dadcf5"],["/archives/page/9/index.html","eee48338e973341035e9b853db0ce7b9"],["/categories/CICD/index.html","3ce80b799f240ba4259136d96758fa76"],["/categories/Docker/index.html","2d429d350ac10615f8cbb806a8c18fbd"],["/categories/ELK/index.html","a4f8bf54998974fc261bc1b729c2aaed"],["/categories/ElasticSearch/index.html","1e55c63298811dd212440b31cb4ec73b"],["/categories/JVM/index.html","64d6b93416c0608bb154dbc7e5b362d6"],["/categories/LeetCode/index.html","47b562f049fc607fc2a8a95a41d2bcdd"],["/categories/LeetCode/page/2/index.html","a0bd3eb14e6e10401bf8521f288f8422"],["/categories/LeetCode/page/3/index.html","c10075a371666a596e108c9c22b13a9c"],["/categories/Linux/index.html","c100c7e45dca6c89fc09fe32dadba179"],["/categories/NIO/index.html","71b1acd1ca2bb9595e5198d6e0c598f1"],["/categories/Netty/index.html","7613a37b5869da7c13ea2e5cb2b6c059"],["/categories/Nginx/index.html","cdf37a630fd1201bbbcb45e6c2153d77"],["/categories/Redis/index.html","758b37c17ef7dfbe12620f2672322125"],["/categories/SSM/index.html","c55f98951386130f90abcdb38c1f9d9c"],["/categories/Spring-Security/index.html","f4b021836549f07b447c5c515d734687"],["/categories/SpringCloud/index.html","bf7fdce7a6fb4865e65eebfe3f370448"],["/categories/Spring框架/index.html","1902c985380c726ba950b2cab74eac8e"],["/categories/Spring框架/日志/index.html","e7daf017ee2428a908504c6847a41b6a"],["/categories/Swagger/index.html","632278acc46d984ed28f557fbe4a3999"],["/categories/Vue/index.html","4d0ca657d992f2bfe3c602ed74ec02e5"],["/categories/index.html","495980eabdeea9f8d60d9aab75f4fce4"],["/categories/分布式权限认证/index.html","56f14890bb02ee948eaa02b16c2caf26"],["/categories/前端/index.html","c984fe8278fe061475873ca807300197"],["/categories/博客/index.html","79161d9e0fd262c4fa581736a164af78"],["/categories/学习路线/index.html","7ef34cc63ed00c7545b63b97afc3aa87"],["/categories/工具使用/Git/index.html","3a87ae4e50943c787a3d06d076ab287f"],["/categories/工具使用/index.html","4cd13f51dab2d4daae65043858fe9d8f"],["/categories/工具使用/markdown/index.html","2f7a511d15175b5bb23ae5b5d26b30bc"],["/categories/数据库/index.html","a16bf71063296be7458854020595fbe3"],["/categories/消息队列/index.html","94b4a457c23ea462bdf4f2c1fb080f66"],["/categories/算法/index.html","6c0b201cb1ad5c52373f59133fe23147"],["/categories/算法/page/2/index.html","c93b16b52e7e9b23f3d21f29e10fd1a0"],["/categories/设计模式/index.html","89f9b5b0a029f983891f04f6d4b551af"],["/categories/设计模式/page/2/index.html","7d2683b3a5e4474b36c87bbcc6bdb708"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","32f88b73dadd9c005f360ba87c935eb9"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","1ade54f80416ed5580118768c52ded77"],["/messageboard/index.html","07bd76e9b5c3afcc1e8070304f19e514"],["/page/10/index.html","f55fdff4e1682f61d96794b18eb59b5e"],["/page/11/index.html","92d34320dd6f56863510481ad912180e"],["/page/12/index.html","8895e9719cea5279628e5bd7cb07b03e"],["/page/13/index.html","ef7db948f6d9f9998b818c1de03dbcbd"],["/page/2/index.html","2d8ee9eea1ef86de781475581f7de6ed"],["/page/3/index.html","827ba95875448524202805340da75b1e"],["/page/4/index.html","bab187618dc016a4c6aef3377621255f"],["/page/5/index.html","dd4cb7998e0b17458ec64b2036438586"],["/page/6/index.html","bc1abe41b880dc1fe4e39e28f8f6f009"],["/page/7/index.html","abe0b1ecbc24181d2c413f986a74f827"],["/page/8/index.html","f33cb72be0a379b3d2acc74006604e89"],["/page/9/index.html","5d75e90022acda8f4c334d0a0d960fcc"],["/sw-register.js","05fb5b2c3f25942a2b7f050f2936cea8"],["/tags/Ajax/index.html","01a57552eb0e8d714efaa7fc77d07433"],["/tags/Axios/index.html","7e97eb16425828587c2aaf5f27a77c1b"],["/tags/CICD/index.html","649583aaa6e89a5841fc452285d0bba8"],["/tags/Docker/index.html","455c78c52ea80f6aa196158846883239"],["/tags/ELK/index.html","9ca4643af2f52570b69dc393ffe5c9d3"],["/tags/ElasticSearch/index.html","d1b4030408db5535d275b8ba963c1b3d"],["/tags/Git/index.html","19c19bf40ea149d453bc9db343812b9e"],["/tags/H5/index.html","6e2b4f642d57ca4b51068f3b82d5c618"],["/tags/JVM/index.html","d77730440bf9f4cc65c97ba9d83aaee7"],["/tags/JVM内存模型/index.html","f4f9afeb27c54f0995233dda541cf8e9"],["/tags/JVM执行引擎/index.html","b0443813ca34e5f81dc0f00fd37f8ead"],["/tags/JavaScript/index.html","b45cf458743c18bf5821943998a070f0"],["/tags/Kibana/index.html","0e5bc836cc66097c6de60c1edd3fcfd2"],["/tags/LeetCode/index.html","2ea5c053f45ef8b46bea03e8537a90e9"],["/tags/LeetCode/page/2/index.html","a526929cb19c6bb573bc20a426fe51e7"],["/tags/LeetCode/page/3/index.html","ac95d7a877bdb693233e07797c36146d"],["/tags/Linux/index.html","61661bd483b190d8fde01c77613677e3"],["/tags/Logstash/index.html","ecc5d6259f78c8f83521fa8d37f4b92f"],["/tags/Mock/index.html","7f6b8f94fcb3453a64c288ae59a7eb74"],["/tags/MongoDB/index.html","a354b404147c00fbf7b107bc55e891de"],["/tags/Mybatis/index.html","bb9ba5f1e60f7722a4f6c9e8a5364796"],["/tags/MybatisPlus/index.html","00b96950f7e3e38cae063359a642fac2"],["/tags/NIO/index.html","31b2217a7e0c2df24a15794e068ab0d0"],["/tags/Netty/index.html","f693b57c837ca398009ab60cd037cad9"],["/tags/Nginx/index.html","bcd18341ae61c6398474a72fefead1a0"],["/tags/Promise/index.html","b0595fa084e2b9be3ae8c910aef64ea8"],["/tags/RabbitMQ/index.html","971392dd52987b5b39ea2c66506b38d1"],["/tags/Redis/index.html","2e84d2f3acc36c4949956d51dac85518"],["/tags/SSM/index.html","58acae70bca29318f5556e1b1edc82e3"],["/tags/Spring-Security/index.html","5f7395ff5f894e52fdd66e407bf8b318"],["/tags/Spring/index.html","af3623b4d23a3410e3ca56662145169a"],["/tags/SpringBoot/index.html","bded48a8fed16540c69c9ed253c6ac38"],["/tags/SpringCloud/index.html","27e5822217e68d3f714ff6306f9086e2"],["/tags/SpringMVC/index.html","84d8ff07facc3e374f38f7c7e654f514"],["/tags/Swagger/index.html","598fe95a8369df55c184844d83cc42c5"],["/tags/hexo/index.html","a1f157048112a701b71657526087d21f"],["/tags/index.html","5741139ed0c6f4151c3314984e1e0763"],["/tags/jQuery/index.html","3cf7bf798e14c417fc4e0225071c8928"],["/tags/java/index.html","b6def4dbcc5e4021e8b042220482c157"],["/tags/markdown/index.html","1be7e40741d3ff6293a6412f1bcdbc41"],["/tags/mysql-数据类型/index.html","e6836c8d0c7f54c8ace2c59bd6a8d81e"],["/tags/mysql/index.html","feb70881c3dceb12d118b4bb318b6060"],["/tags/noSQL/index.html","4523f20fc0a3b63573b15252274b13ea"],["/tags/typora/index.html","9c4c285e04eba2ce1bd90c40311dbfbf"],["/tags/vue/index.html","8f46d276733d26e5c152e5ddeefad2fb"],["/tags/享元模式/index.html","88e109393044a7a46c022d75c5c46a8c"],["/tags/代理模式/index.html","0a24cd9e3db72f0222bf923d8bc5158a"],["/tags/分布式/index.html","1f103208be9bd5094161fe323d613dbb"],["/tags/分布式系统/index.html","4c958132abb0d64db9376f3c28ea31eb"],["/tags/前端/index.html","5f4f4a04a8e99aec9bf7ee8512dfc776"],["/tags/前端/page/2/index.html","49249d5c265b95e23d143f7d361e0562"],["/tags/博客/index.html","80d6b416f60fbb9544b7df8a104b90aa"],["/tags/后端/index.html","091635ab6e1edce819ce9a84829e166f"],["/tags/外观模式/index.html","5a385b6bcf15f7f7e192a7238c9aa6b7"],["/tags/容器技术/index.html","b58ac0ce37d4c239adb05cc03fbc5217"],["/tags/工厂方法/index.html","2db3fbd008f227e9eda5500bd5c76ea5"],["/tags/微服务/index.html","c568c98499dc4b8cdf4013040b48fdce"],["/tags/抽象工厂/index.html","434113fc7ee0ffe800630d6e614713a3"],["/tags/持续集成持续部署/index.html","a7c399edc9e3a18433bbee4187ae5b27"],["/tags/排序/index.html","df3388224fa2ceec7d308769b644ad68"],["/tags/搜索引擎/index.html","79fa78354976144e14228fd08ab96e16"],["/tags/数据库/index.html","788c67c8a9f78b4c9938b91778d94f12"],["/tags/日志/index.html","6ec986f961312f1859cd69bfd2a83bfb"],["/tags/服务器/index.html","633b105b9b84da845e7bc1ac78b43cc4"],["/tags/权限认证/index.html","9c80c2e0206b0f35824ef58c54c538c8"],["/tags/查找/index.html","f05fea394bb4cb90d77810ff8f6263bb"],["/tags/桥接模式/index.html","fdf235d61ab6432e480c68dfbe45abbc"],["/tags/模板方法模式/index.html","5bf6cad259ba0e3093cf6b143d6fa80b"],["/tags/消息队列/index.html","f47b8e28f2e8caa32dec0bb56b8c4a1c"],["/tags/版本控制/index.html","2408d4fdcfe87ecbaeb8aa81047d36e8"],["/tags/策略模式/index.html","d19576bcdaa35428e95583c59b67d788"],["/tags/简单工厂/index.html","8d2819587048d411107bc343907e50e4"],["/tags/算法/index.html","c9641c815a8ff34e5ed014d2f1523c70"],["/tags/算法/page/2/index.html","3325afb71c2c3dceed0a3725227044bf"],["/tags/组件化/index.html","959236b2352bf620215e2ee5d22571bd"],["/tags/缓存/index.html","e6f94053c0541b00a152d2a4da58f045"],["/tags/观察者模式/index.html","fbc1e830cabdaf1a249e65e049a1113a"],["/tags/设计模式/index.html","055127d33ef0c1ebca31947d7ac564af"],["/tags/设计模式/page/2/index.html","09afb960b21f71296d8b148813c6d678"],["/tags/适配器模式/index.html","68d0e3ca0d184d5ee7e497968b70c2e1"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
