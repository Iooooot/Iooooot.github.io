/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","a459fe2e449145d06b37fa07c7215710"],["/2021/02/22/博客的搭建/index.html","ca0ec829bef3b8b95613f8c30a830487"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","aa7601a6c9445ff8d1cfc35fb26e68cc"],["/2021/02/24/mysql命令大全/index.html","7fc0d4f7ff4bb2d67a10a9b0d56cf61e"],["/2021/02/24/mysql数据类型/index.html","3140ea6ca602960959d781551d05555c"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","95b073303b191267ab74a192be3cac2f"],["/2021/02/27/简单工厂模式/index.html","0510ade8a113f77bd7ee23445234b1b7"],["/2021/03/01/工厂方法模式/index.html","3872d30c3321c9f34c29bac6a32aa082"],["/2021/03/02/抽象工厂模式/index.html","494e13167bd75ce2ab315c0e732c1749"],["/2021/03/03/单例模式/index.html","2da13dc4b755c1a1dd4e7f4dd2c1c1aa"],["/2021/03/04/观察者模式/index.html","9a3a379e93b35705d55a3260cc9d7a44"],["/2021/03/05/适配器模式/index.html","868f0e542ce703f0326082314cdfa6b8"],["/2021/03/06/模板方法模式/index.html","40976d568aebff9eb1ed584bdfa12335"],["/2021/03/09/代理模式/index.html","789ebaa628c5e913bc59c76c7add96d9"],["/2021/03/11/享元模式/index.html","6746921d35e0fa1aa3de3f5bd223b243"],["/2021/03/12/外观模式/index.html","524e3c99feb7517820d32e011fa8c00f"],["/2021/03/13/策略模式/index.html","801fbc5f6042c9dbff636a202a8b98cd"],["/2021/03/14/桥接/index.html","33f24f66c616b5b11d0f8b2b37de4ed0"],["/2021/03/15/LeetCode-多数元素/index.html","19de229b2bcd3fe5a44b4a170e5c9529"],["/2021/03/16/LeetCode之汉明距离/index.html","3633f989b5695878dc16e47951a01a0e"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","5afa3390754c9184f81cf7c0020be738"],["/2021/03/18/LeetCode之两数之和/index.html","25bb596a264996b4166f26f7cf3fdf61"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","8a4194d612aee6926de6b48a110f8c0c"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","2331f6eb232124684f4ce2cd5b17c53a"],["/2021/03/21/LeetCode之有效的括号/index.html","27490ecb5994d499b303ddacd217058b"],["/2021/03/22/LeetCode之移动零/index.html","2c9d1182f20b8191ab71d84c3fef6d40"],["/2021/03/23/LeetCode之爬楼梯/index.html","1f7956b863533630248284895125daae"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","8e74312df72f85a10d8c223c2f42d5fa"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","cf24c21b3547a968c9f360c8e3e20b07"],["/2021/03/26/LeetCode之最大子序和/index.html","993df3116cb69f4c5b1aab58cc2cbfd4"],["/2021/03/27/LeetCode之子集/index.html","e70970ac23e09d9c081c2f6e614409e8"],["/2021/03/28/LeetCode之合并二叉树/index.html","8a5c9d24d90880fcf794b1fd140f023d"],["/2021/03/29/LeetCode之翻转二叉树/index.html","be15e25be0cc39c51d0435f94e5ab0b2"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","1d51ac71de229e05a6996067fff5d358"],["/2021/03/31/LeetCode之翻转链表/index.html","f4070b8292c9da91cce81433046a5b70"],["/2021/04/01/LeetCode之相交链表/index.html","a10574958ac4c2d338749f46e8b41c99"],["/2021/04/02/LeetCode之最小栈/index.html","6da518a1c99fe881fab54ee015cee704"],["/2021/04/03/LeetCode之对称二叉树/index.html","f2f658838277b31c9bea9a65c113211d"],["/2021/04/04/LeetCode之环形链表/index.html","ecb066f4a8bf460b277d013910c95b88"],["/2021/04/05/LeetCode之二叉树的直径/index.html","6a60fcea854af589024e76843d53f241"],["/2021/04/06/LeetCode之回文链表/index.html","d1e6323f0c1b699afe531480195f5c42"],["/2021/04/07/LeetCode之比特位计数/index.html","7119e1974731d451d5a21ed9bdf7e50b"],["/2021/04/08/LeetCode之全排列/index.html","e409bcb7c57558b1e6e11a2e193ab733"],["/2021/04/09/LeetCode之括号的生成/index.html","7db1b9349dbf3d086ace918446f51bf1"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","746b075afa4c12d85f9d36d9db2b4163"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","4f92920967abcf93826e9b0835879383"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","0fcaf7ab4eeeb55303df35d28886ba3f"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","7d3305d8f07a28b4d70381d52ccb7832"],["/2021/04/14/Mybatis/index.html","d2f8e54c4f7a44225116be96d3492299"],["/2021/04/15/Spring-1/index.html","68e773438b4c1aa5eb74f74aaec206a6"],["/2021/04/25/Spring-2/index.html","5f8240ee2705cb684f75f28c7e4d70ba"],["/2021/04/27/SpringMVC-1/index.html","8382b5501d9d10ff206dae4044866da8"],["/2021/04/29/SpringMVC-2/index.html","97ce716e04110ad8bfca8a8aa00f9c8f"],["/2021/05/03/冒泡排序/index.html","57b6f3d9085681bc1449a32564315474"],["/2021/05/08/选择排序/index.html","ce3339bb87715385e2b49e9f1d538938"],["/2021/05/12/插入排序/index.html","ed1cfddbd52e239bdfae21e547b51d97"],["/2021/05/15/快速排序/index.html","c2db3c99ccb682467692cfcd7eba9fb1"],["/2021/05/19/基数排序/index.html","1cf707905e77adb0ca7c60f0e5d6401a"],["/2021/05/20/哈希排序/index.html","ad12f45a0a912bd9c88a25a4fedf1d36"],["/2021/05/21/归并排序/index.html","992a3d38ef470d9e38a2547bd11df5fc"],["/2021/05/22/二分查找/index.html","b609ab926853fa573d3384256016874c"],["/2021/05/26/差值查找/index.html","fc00fb62857695beb79a501c4eb3b547"],["/2022/01/12/高精度大整数计算/index.html","c404ae9d747d7c6a6db21bc9c1f8fb21"],["/2022/01/22/前缀和/index.html","f3e33f894923f798cdb0bc41f0fb7060"],["/2022/01/23/差分/index.html","2e0f4f468e3923483bfdda65d7a15b43"],["/2022/04/04/MyBatisPlus/index.html","4cd967ebe114697aca52f5b0a1291444"],["/2022/08/17/jQuery/index.html","e485fa6aa4ea8b718a3a5e84c270f0a4"],["/2022/08/19/JavaScript/index.html","2742b7805e8b72b0ce711c8abdba8f4c"],["/2022/08/22/Ajax/index.html","5bc22af18c30b3984169ff404fdf0d82"],["/2022/08/23/Promise/index.html","0fbbfdf0e2a5cdb49f1ba7e6c8e8c5a5"],["/2022/08/24/Axios/index.html","c7b7c8d9dbcbca9ad27028f17f272c08"],["/2022/08/25/H5本地存储/index.html","d30d7440f6972cdeba1350f978833b14"],["/2022/08/26/mock/index.html","dc721af654f5e3697c24d2215836e961"],["/2022/08/31/VueJs/index.html","83b33ae12f45db96d88d39eba27b455d"],["/2022/09/01/vue组件化/index.html","1e5ca8e6ea70d51c95575cf8af767ce1"],["/2022/09/04/VueCLI/index.html","8a5041cb3a5960e81e51a9edd2cbbd65"],["/2022/09/07/vue实现动画/index.html","23c4ae5760bdf8caea8703c918d96749"],["/2022/09/09/Vue响应式方法/index.html","5a68c27c9dfb30b01d86fdf771a2700a"],["/2022/09/10/Vue异步请求/index.html","2c5900714d22400427bdd6d2181acda8"],["/2022/09/11/vue-Router/index.html","5341d389970f1eac2145b48e63bcf24a"],["/2022/09/13/Vuex/index.html","d1643912051117796043012661c53cff"],["/2022/09/15/SpringBoot/index.html","5e5854bd8308e4a755a2003d400c8abc"],["/2022/09/16/SpringBoot配置FastJson/index.html","99de44ae88503525195c419d3c172ba3"],["/2022/09/19/SpringBoot参数校验/index.html","feb43508217709a2dbc1c8ef656722be"],["/2022/09/20/SpringBoot的异常处理/index.html","4815e3ab6690bf3f0e330d618614afb5"],["/2022/09/21/SpringBoot统一响应处理/index.html","a3f3ecc5ded9b4e6949c44b384006574"],["/2022/09/28/Linux/index.html","23d90bffa9cfc99f5275f2095030bfe0"],["/2022/10/02/redis基础/index.html","fb4bdc8b064f6d7b43e6318ee3610052"],["/2022/10/03/Redis缓存/index.html","8bd040e1f3d27a8692a88dcd233486a6"],["/2022/10/04/redis缓存穿透/index.html","1622fe4d3608f9db95b1bbe22220c25b"],["/2022/10/13/Redis缓存击穿/index.html","3dd0e05cde1c7bba87f1d4e284501d3a"],["/2022/10/14/Redis缓存雪崩/index.html","626c100c82c2c4029230d4ce602f9b73"],["/2022/10/17/Redis集群/index.html","982ec26a16b0f35363bb4e5c7d63992d"],["/2022/10/18/Redis哨兵模式/index.html","38c799c3cdf5e5be4650d6852a8734a8"],["/2022/10/19/Redis主从复制/index.html","a9a67846a8afdf555e9a3d1e66731ae1"],["/2022/11/03/Spring-Security/index.html","ed06b81f387e7d7144574a3576c0ee5c"],["/2022/11/08/SpringBoot日志/index.html","bbfd870396c2c355f200d7a24c07c5f0"],["/2022/11/11/Swagger2/index.html","0c032eab66bc8deb8319ff46f08adc4e"],["/2022/11/21/Nginx-一/index.html","af96562ad558125ffbcec5e46fb7b251"],["/2022/11/23/Nginx-二-代理服务/index.html","bac3ca52dc68e56f5bf7ca10662450e8"],["/2022/11/24/nginx-三-负载均衡/index.html","7ec36e3b11edb4f048b6f46d4be58ef5"],["/2022/11/26/nginx-四-缓存集成/index.html","62593401515ce779f89b80f24b800f87"],["/2022/11/28/nginx-五-动静分离/index.html","320124a9547171fae46337244cb57e2a"],["/2022/11/29/nginx-六-制作下载站点/index.html","2948e1cdd3c907cb29047f0b69036d7a"],["/2022/12/06/docker基础/index.html","bd3c0432725e69b1932d7552e20e8f73"],["/2022/12/09/Docker高级/index.html","098408d5817bffb1a5aeafae5fdaba09"],["/2023/01/04/MongoDB/index.html","343888ecd941b2e4f0d22a7f9c272d73"],["/2023/02/05/消息队列/index.html","5f3e2f5dbd71a92e8bead8c0be7cf708"],["/2023/02/12/RabbitMQ集群/index.html","bdcefa1986a9cb1515b8ed56cd0b6dcb"],["/2023/03/10/CICD/index.html","ee4266e1215d7670158817ccf69fb4b2"],["/2023/03/11/ElasticSearch/index.html","866f2787eef9f49bdbb46cb7ca006174"],["/2023/03/12/ELK日志平台搭建/index.html","bff8f3ea493bf29a38e477ed62648050"],["/2023/03/13/NIO/index.html","a3c23e046756c22bb9d0aae73fdbb590"],["/2023/03/14/Netty/index.html","ac89b01507b7a21de85b232a7ea188e6"],["/2023/03/15/SpringCloud/index.html","9b5d77ffa2ea6ee6b54b479507e6ee37"],["/2023/03/17/分布式系统认证/index.html","d39edf8731b3f447d6f2270ad3e9ba8d"],["/2023/03/19/JVM概述/index.html","23906ee90299ca1ea55140ab32da3431"],["/2023/03/23/类的加载过程/index.html","f8cf6b1e85d26550ea7bd7edccccf6c6"],["/2023/03/28/对象的实例化/index.html","6209f945a2af12dc5569d4d3d0c7ab5c"],["/2023/04/01/运行时数据区/index.html","36026cca02ee6441650e267e7274bfd1"],["/2023/04/04/执行引擎/index.html","ddbbad65ecec09b17d7db29e48f56682"],["/2023/04/06/对象引用/index.html","e38afe281e8a1802b9047c58da801700"],["/2023/04/09/垃圾回收/index.html","9abf5b9d72e3af9afa6ff3293facf9a2"],["/2023/04/11/垃圾回收器/index.html","ac8f7b779db3b3ddb778dd45e48cc05c"],["/2023/04/14/Class字节码文件/index.html","72d788e38211c5140e99a87913713a83"],["/2023/04/17/设计模式总结/index.html","4f88cb00f8487081a5abf2402aef5608"],["/404.html","5d9e9f9a20141a32a81845a424dd3c0a"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","67782c8c534e62a0ddaa66c0bcc8f171"],["/archives/2021/02/index.html","60e8dc4b368bfe815e635869a6ed6776"],["/archives/2021/03/index.html","9464cbe9cdfd2bc150293b5b23691a48"],["/archives/2021/03/page/2/index.html","6e5fae7100a616acc2a93b0d0834a1e0"],["/archives/2021/03/page/3/index.html","5ce0ba1acd521eecbc9e3f4238fc5f99"],["/archives/2021/04/index.html","56993a0ca835df2c571c60f98440fdf0"],["/archives/2021/04/page/2/index.html","5b5f5e3f564633554dcbc63a473be940"],["/archives/2021/05/index.html","41a37fc30a8804b305075d6ba410bcc1"],["/archives/2021/index.html","4530dbd1d1e54b792ee343676ca2d278"],["/archives/2021/page/2/index.html","c64cb915d93914c346ff173ada58930a"],["/archives/2021/page/3/index.html","d9781ab9975fac9d966dda2ad3da92e9"],["/archives/2021/page/4/index.html","4ac575350c453541dd382abf9f498f47"],["/archives/2021/page/5/index.html","f640de7f24594fe3bc4f59f90c67a8fc"],["/archives/2021/page/6/index.html","910916772f2d22b3d94b1f2ee1481617"],["/archives/2021/page/7/index.html","b8a56af578af81eaee49c8e296d5fd85"],["/archives/2022/01/index.html","fd5178da5a45a932672b4949c1491e08"],["/archives/2022/04/index.html","7ceee1db683af0b80d9a962cdf3b4fcc"],["/archives/2022/08/index.html","b1f7f1046eee49449a181d171880d859"],["/archives/2022/09/index.html","970ac6247695f56d0d8b2a0ad36483b7"],["/archives/2022/09/page/2/index.html","bd47fd416caea6acd454937e52907c33"],["/archives/2022/10/index.html","a806a17f40c47000b0c86270b5e93905"],["/archives/2022/11/index.html","6faa8d6ff2148cc6081dbd61225c52db"],["/archives/2022/12/index.html","34f31ff243c781285d6e4f412da955ac"],["/archives/2022/index.html","6988ed1171e3c33003e26935915703e7"],["/archives/2022/page/2/index.html","7c242ce0ab38c8f2ac1001f57a5ad3e2"],["/archives/2022/page/3/index.html","0545971ab27b46ff6d723690b3a4e313"],["/archives/2022/page/4/index.html","1caa14e5ae4dbf63b90602ecdc470be5"],["/archives/2022/page/5/index.html","c35b5235e4dbe071a4251ce58f7dba16"],["/archives/2023/01/index.html","dd245061f4c3012a5d890a58886c443f"],["/archives/2023/02/index.html","9e9516c85d53753fd14a83d51ed6af14"],["/archives/2023/03/index.html","344ec03c9299c004bb4a2415d8175e00"],["/archives/2023/04/index.html","03dac604543977fabac11a7f39ceffb7"],["/archives/2023/index.html","e0b6a2d666ecad19f92dea395b91b67c"],["/archives/2023/page/2/index.html","b94b7e8dbb0b6b277898b53bc487df1c"],["/archives/index.html","dbf9e9731989bbee9d26ed489980a020"],["/archives/page/10/index.html","2adc688e8a1e5a87941a62c4b52585c6"],["/archives/page/11/index.html","5df318038070d2819e23bcbf015a4a18"],["/archives/page/12/index.html","be2f8c430b759be934248de448be64c9"],["/archives/page/13/index.html","a3871d2be1412254a54d66f33be958e1"],["/archives/page/2/index.html","3310380040786730e739f5d5735806a8"],["/archives/page/3/index.html","a92b243182b2624e4905c1159bfe7bbd"],["/archives/page/4/index.html","03ffb470ea0091facb98cb76855f4cb7"],["/archives/page/5/index.html","21aa83af14293db773a1d7b34230e374"],["/archives/page/6/index.html","6805dc757de966389244e1aca2dd17a0"],["/archives/page/7/index.html","843762240be4c7286d6299e4d14d7bf1"],["/archives/page/8/index.html","059f00d9151b54399d609e015d7e3f63"],["/archives/page/9/index.html","9a3baea17de1bfc4fa89d059d38560d9"],["/categories/CICD/index.html","af95d7acb2bff5c6a491d105a9ba4387"],["/categories/Docker/index.html","01afa0f5c62392e6f9391acb139a5a24"],["/categories/ELK/index.html","9684e8d236307f2923a7389771a4c0d4"],["/categories/ElasticSearch/index.html","6ebb1226b8e291054b991ec321a35140"],["/categories/JVM/index.html","fe542f6fd4676cbc87099197ca96ac82"],["/categories/LeetCode/index.html","4eab15e5fcd5e43904f175238b24b60a"],["/categories/LeetCode/page/2/index.html","736699260d8b3e4411a90792bc87bba5"],["/categories/LeetCode/page/3/index.html","e0ac15e6c4f80b3c80217eaaf92d0b8a"],["/categories/Linux/index.html","c4a5be7d2b50b1821bea6408482bb2a2"],["/categories/NIO/index.html","424d435a752cd2cfd9b0ddb80d44656d"],["/categories/Netty/index.html","d3706117a5774eb336ddad6eca3ab405"],["/categories/Nginx/index.html","ba64f418d3f97a4e3283ba610a63c9e0"],["/categories/Redis/index.html","1ecc8320aba93928ab9154b98b23139e"],["/categories/SSM/index.html","78cf010d5ea9e55f98244d0f700cc076"],["/categories/Spring-Security/index.html","3536ad9b671173eee411c43e7125edfc"],["/categories/SpringCloud/index.html","5d1c573ef47bc4895727525681a06190"],["/categories/Spring框架/index.html","9b1637385918a34c708b01e520ca7699"],["/categories/Spring框架/日志/index.html","ae7aa206f29da457bde7e4632dac0f87"],["/categories/Swagger/index.html","a0bb2f41efc57a4f5b22103cb9ffa03c"],["/categories/Vue/index.html","ad6eae5e9e510f5a91a8dd0afdee2f4c"],["/categories/index.html","a78da295b5bad44b209242af6139eb5a"],["/categories/分布式权限认证/index.html","3e91a976b0ac062c1eb6e092a2187fdd"],["/categories/前端/index.html","59ea9e87ce90681050e1bac2e507d9f3"],["/categories/博客/index.html","3b8ed69bc2c94b8060b161b0fe955e94"],["/categories/学习路线/index.html","d5cdbaa2aebbcb3d905900358b02512c"],["/categories/工具使用/Git/index.html","6e45f803fd2048fc988aa57bd5ada468"],["/categories/工具使用/index.html","9532b47a13f2ff50bdb0149f73d371f5"],["/categories/工具使用/markdown/index.html","ee2c82552c512e7ab46b2d61e1b04e51"],["/categories/数据库/index.html","0f199709356566bfd7bdb3e9c0508096"],["/categories/消息队列/index.html","d6cff91931006cc53e6ec3363b6cb9ac"],["/categories/算法/index.html","4bbf10182440912760a0aba76dfe0267"],["/categories/算法/page/2/index.html","61844d32de56a85657d4fdc283513d80"],["/categories/设计模式/index.html","f8aa40e747a4e8b2bdcfef6cb56eaae7"],["/categories/设计模式/page/2/index.html","79aeaad6dbc092fd4cd773b41be954a4"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","74ae8c1e4bbc8ebb5a6bb02670775e17"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","9ff318891782d7db14fe65fb2a1ab240"],["/messageboard/index.html","94fc08af44c0065dc87d002813b76257"],["/page/10/index.html","90f8a486252d3829f0dd78ba979bf1ba"],["/page/11/index.html","d99626be95800a2cf90752e95f5935c1"],["/page/12/index.html","cb7bc2353200bf8d41b6e6e2c421aa14"],["/page/13/index.html","07f79fa8c1c9af1c7a3a5b4d7d032e8f"],["/page/2/index.html","39653c98bf1d6c878e72a8072fcca7f5"],["/page/3/index.html","bb06eac410774a93246c1b2c83a08955"],["/page/4/index.html","6dc01f36637afa7f325bdac571b28699"],["/page/5/index.html","315ef85c271cd4bb692578833d9b9170"],["/page/6/index.html","bc5d74dfd032e1afa319c3579faa4fab"],["/page/7/index.html","b051372e1fc198be91885da8facede93"],["/page/8/index.html","f56e13f183dc04608cd46995970f42de"],["/page/9/index.html","b0dd61131d30d93ee139b677665ae2f2"],["/sw-register.js","708ad441015a0af2eff2bbacc2e7dd27"],["/tags/Ajax/index.html","c1a00ca8704d133a1898c943e70fb7a4"],["/tags/Axios/index.html","547c5de8ce652b9f7447097614f30cfa"],["/tags/CICD/index.html","f282ba8e91591e8783d87b29c95bd126"],["/tags/Docker/index.html","7b5978e6ba76577e2b1bb4d639962879"],["/tags/ELK/index.html","fc185170ee0e673f55cd840b03c36332"],["/tags/ElasticSearch/index.html","847fa49c44741553feda3c0c94324e7d"],["/tags/Git/index.html","78e1c0e57bb33de6d2df6742a742f017"],["/tags/H5/index.html","47557343b9213db953d2c27dc2f648e5"],["/tags/JVM/index.html","b904f944bc7b4fbb902a04b229e14aa4"],["/tags/JVM内存模型/index.html","bd287d3dbae2babb98e67eab72391d80"],["/tags/JVM执行引擎/index.html","6498045bb2e1c1ee72fda289b723e860"],["/tags/JavaScript/index.html","14d27afb7213c8b68511fb725ae95d12"],["/tags/Kibana/index.html","6598ccf3c244a3582eb65350e844b2a8"],["/tags/LeetCode/index.html","6fc6c0114cb94d5da5972efbd5452bae"],["/tags/LeetCode/page/2/index.html","ce0675ef02589ddcdd2c51e7c1e74850"],["/tags/LeetCode/page/3/index.html","00abbae874b56b175dd7fcda2639f524"],["/tags/Linux/index.html","87810b15d97d4f52d1fd5e9ca5900890"],["/tags/Logstash/index.html","233783070208e58afcc32bf057ad695b"],["/tags/Mock/index.html","70f32038b00cc97499330ee5a8637b81"],["/tags/MongoDB/index.html","5526ceda6997511bce7f69953fd85801"],["/tags/Mybatis/index.html","c4126ec1ee3a2b96f196e65e7bf55f86"],["/tags/MybatisPlus/index.html","a4a35a4bed4ffa80aa19b64fc7401180"],["/tags/NIO/index.html","871f40f3d3db5db48b997cfe2a483399"],["/tags/Netty/index.html","8cb9911cd342d898af64786ca44add6c"],["/tags/Nginx/index.html","f48bdbb4b2698a0877563b67fbea2adc"],["/tags/Promise/index.html","49444ce9ce7c8da09a3792dd3ceaca24"],["/tags/RabbitMQ/index.html","65632e5a6ecd4e8c622eb2de79ec9e10"],["/tags/Redis/index.html","244edf26a764c45f1a8a79938c337f05"],["/tags/SSM/index.html","03cd25d2bb700acaa8e2493ede2a8ac2"],["/tags/Spring-Security/index.html","a901e6e0710f4b6daf124b1a09ce0700"],["/tags/Spring/index.html","260348ae6244f06b02432df2454991cc"],["/tags/SpringBoot/index.html","abf7af677951dcfd6330a0a2d4b53525"],["/tags/SpringCloud/index.html","a42fba0c7a746601bddca3cc1e3f4933"],["/tags/SpringMVC/index.html","a17c2fc95dc01c895e8e461460aaebdd"],["/tags/Swagger/index.html","fae0909f962074e1a35956027c9a0956"],["/tags/hexo/index.html","d735f385cb06a35854160409546b1b58"],["/tags/index.html","41868165390bda2f1d4255d57f9cc5f5"],["/tags/jQuery/index.html","60304d063c44ad9ac70c4b30efc98e9f"],["/tags/java/index.html","eddd408768f6424f8f4895d6bef43f46"],["/tags/markdown/index.html","4c9eac079511b197a9fb337da8b0a6e6"],["/tags/mysql-数据类型/index.html","df53d7b14207fd456ecb0ec3e4067f84"],["/tags/mysql/index.html","04f7bfb917fe4e7f0c142a7cfcd519d5"],["/tags/noSQL/index.html","0f00cb91ef5373794a62b93ce36835d7"],["/tags/typora/index.html","032c7bbd7031b7424e1928eb005f10fe"],["/tags/vue/index.html","bf10550142ee0c3269371bcda23972a1"],["/tags/享元模式/index.html","53f4886b4c64a3339752d7105adec51e"],["/tags/代理模式/index.html","fb224f82e511a383f47535e193c4f5cb"],["/tags/分布式/index.html","9ff02c0658a8ef5f18eafcc4a75221ab"],["/tags/分布式系统/index.html","da626bf93bf846ebd1516de9a4286430"],["/tags/前端/index.html","fa027d699b43d54e8caa36b45fceb49c"],["/tags/前端/page/2/index.html","2a3bd480cea3810636daadc0ca415563"],["/tags/博客/index.html","a7d935cc955cc665dece8b0d467f995b"],["/tags/后端/index.html","0d8c48741c4b4121a9e014d152a5f4f7"],["/tags/外观模式/index.html","81e070fbff8d36c496030d34988b6aff"],["/tags/容器技术/index.html","d7b0cbb4050021028d6bbc3ffd09c43d"],["/tags/工厂方法/index.html","418752f457b4df91505e7430bc8f8af3"],["/tags/微服务/index.html","e760127d48ec404f117d0eea37013388"],["/tags/抽象工厂/index.html","c42949959ca61fcfd6fa9df4e584a40e"],["/tags/持续集成持续部署/index.html","82ea015e738762408c7d1d3ecfbf742c"],["/tags/排序/index.html","d3a112a0c2f5223e091a24183dce3cdf"],["/tags/搜索引擎/index.html","d51c8b768082e495bb8c493f4d83b620"],["/tags/数据库/index.html","bb6f5727c8936c0a61e4cd83ba1d25a7"],["/tags/日志/index.html","9554dd7242d8ccdf38a546934d597072"],["/tags/服务器/index.html","d718f6a2ea534a988e137612ef8972ec"],["/tags/权限认证/index.html","433100cb1d28414356e1013d2fc345c5"],["/tags/查找/index.html","cfd1451c4c91dc980aa384376ce5a638"],["/tags/桥接模式/index.html","93591d479fb8c79c9679df559b68400f"],["/tags/模板方法模式/index.html","4ae766e4f928b083469acc9a685965cd"],["/tags/消息队列/index.html","47946cec8476bf179778bc6b23a7175f"],["/tags/版本控制/index.html","0dec16896f366cb59b869061240edf82"],["/tags/策略模式/index.html","7535ec933fe8fc7b7602e0b8e42df5e2"],["/tags/简单工厂/index.html","a98debf7f1eacaa624c6e38a2ed8cc57"],["/tags/算法/index.html","653d0d231f947ce8afee271829a9b09a"],["/tags/算法/page/2/index.html","03b9a3f3df508d8d7b859d359756a3fc"],["/tags/组件化/index.html","cec5695505e1b7b25e228bb97a46a25f"],["/tags/缓存/index.html","4320630fc2f511ed4ff3a598ff35ffb1"],["/tags/观察者模式/index.html","e0a36a8a93a3b03933096bc7f3aabad3"],["/tags/设计模式/index.html","d7eae5f02810c8b236b9d246f3e615de"],["/tags/设计模式/page/2/index.html","e58d476c647bc7feefc31617ff8db69d"],["/tags/适配器模式/index.html","cd26c03673c143ea119c978156ef66d9"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
