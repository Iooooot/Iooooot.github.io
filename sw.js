/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","05ab7573ab3c01c77a64bad7d3a541d4"],["/2021/02/22/博客的搭建/index.html","c74aa52d958919f005ad0c9e6c9ad104"],["/2021/02/23/如何使用markdown/index.html","52fb632052d38d663f9d9d90d3566e60"],["/2021/02/24/mysql命令大全/index.html","289ff9e0dcad084fe2179c68a5f9a885"],["/2021/02/24/mysql数据类型/index.html","e1905fa2f21bce5cf4876e48cc77404b"],["/2021/02/25/Git的介绍与简单使用/index.html","67408fcaac1861d7b86229e55b7d2e97"],["/2021/02/27/简单工厂模式/index.html","43783963c7c4b5f3a2c9b6bb751d5ed7"],["/2021/03/01/工厂方法模式/index.html","93fd249fa6c95c3d2bbec7819dd0ce51"],["/2021/03/02/抽象工厂模式/index.html","11340c75016a9053e00d2f4d67193834"],["/2021/03/03/单例模式/index.html","ed5aec7c7470dac0f21072b02f92bcb1"],["/2021/03/04/观察者模式/index.html","a8f48599273834a191ce63cb15c94413"],["/2021/03/05/适配器模式/index.html","56aa6d55847e1cba1a94d2e3df0f1597"],["/2021/03/06/模板方法模式/index.html","4c2574e4ff8f541b23c8d0abb856d3bb"],["/2021/03/07/责任链模式/index.html","c8bc7aa8acf64ad4c8d3051edcec98bd"],["/2021/03/09/代理模式/index.html","000e8002ef9708d91232019993f41498"],["/2021/03/11/享元模式/index.html","6e69ad40cb0670360d69c9550e9d7975"],["/2021/03/12/外观模式/index.html","4453cec6bdeee44be2f2e5961ffa2c58"],["/2021/03/13/策略模式/index.html","860bbb62bcc5ef9414790d8bb032ebaf"],["/2021/03/14/桥接/index.html","b1934cd0f5ede8763686ec20ee44d276"],["/2021/03/15/LeetCode-多数元素/index.html","a2e58a043941c8a734783cf075680da1"],["/2021/03/16/LeetCode之汉明距离/index.html","acd80a82be29138bf696e41a5d12c7ac"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","782336bcc09e6b2b45d03c444be46cec"],["/2021/03/18/LeetCode之两数之和/index.html","76d6e7ef9069b6cee0ca39464566cc02"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","c16b318b2b62b391a0fca8c9bd3ec1bd"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","11519dac2b3dd7195f1bb6ffa911c139"],["/2021/03/21/LeetCode之有效的括号/index.html","9e21307f29936ab3e5f89525f5e68fde"],["/2021/03/22/LeetCode之移动零/index.html","611d2e374acb01a326ad51ff541f7154"],["/2021/03/23/LeetCode之爬楼梯/index.html","54bdd693bc5ef46a33a0c63134b8ccfb"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","4f5cb42bb73381774b16ec08e4395bd6"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","898ec70f9ec705c0257f9f3fc0d0fe5c"],["/2021/03/26/LeetCode之最大子序和/index.html","0c193c487fbdf0ffffec3e2b00f3a323"],["/2021/03/27/LeetCode之子集/index.html","eb14864771c81a41ef1cb1f7d0cb35bc"],["/2021/03/28/LeetCode之合并二叉树/index.html","74a1252afe59036a8f6f27c438346167"],["/2021/03/29/LeetCode之翻转二叉树/index.html","bd7da3b4eb31df6a6d5c294e2b37ec71"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","83110bde9d4f902ba7c90432a799527e"],["/2021/03/31/LeetCode之翻转链表/index.html","8b9691620dd2510ce3aa7612e7850425"],["/2021/04/01/LeetCode之相交链表/index.html","c382424d4ef7e160a63a840daf53be15"],["/2021/04/02/LeetCode之最小栈/index.html","624efaced9bec620ed561c5000f17bae"],["/2021/04/03/LeetCode之对称二叉树/index.html","3266e57bea200d6e8c94191188288d17"],["/2021/04/04/LeetCode之环形链表/index.html","896eb84cea18ff054101b2926433f86e"],["/2021/04/05/LeetCode之二叉树的直径/index.html","5dce5c34eb4017188c317ad834e42864"],["/2021/04/06/LeetCode之回文链表/index.html","9dcde831fecee21f27dddb1e495c8706"],["/2021/04/07/LeetCode之比特位计数/index.html","b5d5d984210400983a38fa5352e76c01"],["/2021/04/08/LeetCode之全排列/index.html","a9fe99134a9f8369cd6f2957c1fa7757"],["/2021/04/09/LeetCode之括号的生成/index.html","bb3cb649e61882c832ee90530645f36f"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","2547cef6669872ef7d5056c852a64e5c"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","c2d898249d09d57e13d2321b1d64aca4"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","0e258b78d7f2169b984b410d5d5a2347"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","4cead8fc1148672ff9205dd64f1e529f"],["/2021/04/14/Mybatis/index.html","03a598ba9abddd6857d5daa9338204b0"],["/2021/04/15/Spring-1/index.html","873c6e7ff92699f731dab278fb8eb427"],["/2021/04/25/Spring-2/index.html","3cff79e3922a0bd46f13094a8f94a6c4"],["/2021/04/27/SpringMVC-1/index.html","5bc8d3b9a4f1406093de089e5e841486"],["/2021/04/29/SpringMVC-2/index.html","6a4121c415b162a8b4d9def6cbef5f22"],["/2021/05/03/冒泡排序/index.html","b34ef1abc061bbef22432202adc77a6c"],["/2021/05/08/选择排序/index.html","637346054ea2d0d301976d6fd6d0d35f"],["/2021/05/12/插入排序/index.html","19986c9beaf9352289fdb638021980d9"],["/2021/05/15/快速排序/index.html","b189451cd93350d42ca7a3af33f00bea"],["/2021/05/19/基数排序/index.html","cdcdd5e83db52727580db844b099a711"],["/2021/05/20/哈希排序/index.html","eadbe0dc734bf9b395b98f7f56be71a0"],["/2021/05/21/归并排序/index.html","7ab5221607b3f5a1c4b21606a8f39501"],["/2021/05/22/二分查找/index.html","4e4f3ec0e1173e7dc95e44a1f063d1ca"],["/2021/05/26/差值查找/index.html","0fdfd993910b2e00d55f405ce9b217fd"],["/2022/01/12/高精度大整数计算/index.html","6e04f328dcf95697b1937cc7a20a1633"],["/2022/01/22/前缀和/index.html","3c365a62ea61f4c572527e4bf261006b"],["/2022/01/23/差分/index.html","6c6ab3cb25422311bbad2b11260944e2"],["/2022/04/04/MyBatisPlus/index.html","17b8f8c8ff75b6c95f3f17641f6b1f8d"],["/2022/08/17/jQuery/index.html","a55d2b8160ad9f30533a9d7994b2458f"],["/2022/08/19/JavaScript/index.html","17e3e8ede234365919a5605ea71c226f"],["/2022/08/22/Ajax/index.html","9b0a9e56a66a6ca2e5ca7b6da04a54f8"],["/2022/08/23/Promise/index.html","7ff5c9bd62ad896f2ea16c30fa4308f7"],["/2022/08/24/Axios/index.html","9b984bd4db254cbc78e7a443ef6c5735"],["/2022/08/25/H5本地存储/index.html","52830248f5921dfca9e7f8f5262deab4"],["/2022/08/26/mock/index.html","ff5a5c3a90d2476dc5a406460ca7330c"],["/2022/08/31/VueJs/index.html","68959f4c048f236cea151203fbedd71a"],["/2022/09/01/vue组件化/index.html","0cfd785e899873be9de7da1f8ae33561"],["/2022/09/04/VueCLI/index.html","c0a80da5a83eedf06c1e2a65165f3d87"],["/2022/09/07/vue实现动画/index.html","070d6a9517204a9f6cf84abe21ba2c25"],["/2022/09/09/Vue响应式方法/index.html","c1b07c8102533bbcaf6c43cb90500d18"],["/2022/09/10/Vue异步请求/index.html","9998eadc6eb3aa663163d9687001416b"],["/2022/09/11/vue-Router/index.html","05d4a5aaab4d9c5c81093b3d6441f715"],["/2022/09/13/Vuex/index.html","3d91531fb6d5766a9dffc2bb805697ed"],["/2022/09/15/SpringBoot/index.html","f4ae154b6ec55eeeb5946a965e67729e"],["/2022/09/16/SpringBoot配置FastJson/index.html","643591d54374beefbf9e077dfd9c2b22"],["/2022/09/19/SpringBoot参数校验/index.html","3da5c97f4b2804034f86d2d9a110a8ae"],["/2022/09/20/SpringBoot的异常处理/index.html","4ef431a0463e2a6dd342ef33570e5d31"],["/2022/09/21/SpringBoot统一响应处理/index.html","7a0657b3f251134df713406c4fd8b738"],["/2022/09/28/Linux/index.html","0b60420f623bc219648e08a884777da2"],["/2022/10/02/redis基础/index.html","12936a1b4a7a41703d97bd9b20f2c634"],["/2022/10/03/Redis缓存/index.html","efaee71e12abfeb9dc2ac2bd147caf6a"],["/2022/10/04/redis缓存穿透/index.html","8fd4e884b05f08a080296421c6507046"],["/2022/10/13/Redis缓存击穿/index.html","f5a535e19e9d4643b107e46a8000802f"],["/2022/10/14/Redis缓存雪崩/index.html","df3b6caa2f03fdabf853c825ba0353cf"],["/2022/10/17/Redis集群/index.html","fb9489892487ffcbcdcff3b953bee3b0"],["/2022/10/18/Redis哨兵模式/index.html","e4462f22680deeae66b0b770bc356ada"],["/2022/10/19/Redis主从复制/index.html","e8e6b04348e8df431836b47fde42d947"],["/2022/11/03/Spring-Security/index.html","5245ba09a825ee0baa560b4f246adf12"],["/2022/11/08/SpringBoot日志/index.html","2b74e1d3fb1568b4db0ee5140f6c6ba0"],["/2022/11/11/Swagger2/index.html","9fb01fee3f98d3ac069421c4e65c9108"],["/2022/11/21/Nginx-一/index.html","5255e3b593a739e7c9737f94d7d3cbcf"],["/2022/11/23/Nginx-二-代理服务/index.html","5c52d2893c8ca4ef2cf3eac70ee4b7c9"],["/2022/11/24/nginx-三-负载均衡/index.html","f7ed5e679167c6db854d2288b99a650d"],["/2022/11/26/nginx-四-缓存集成/index.html","ce204c9fa79efb3c0db1d1df51fede9c"],["/2022/11/28/nginx-五-动静分离/index.html","d7f6303a65e6a0d6d86d74459b3a6629"],["/2022/11/29/nginx-六-制作下载站点/index.html","9ade42d58968669d40ad40e427c9de84"],["/2022/12/06/docker基础/index.html","9f4bc57f0a5deec8ec21394c86e65bbe"],["/2022/12/09/Docker高级/index.html","06a77551d24d13ca3509b0e2a02acc96"],["/2023/01/04/MongoDB/index.html","f9bb6a5fe0a44381ee9a5fa99fa33230"],["/2023/02/05/消息队列/index.html","da71de4e57dc9357d77358fc3fa126ac"],["/2023/02/12/RabbitMQ集群/index.html","471452a160f276adfd63ee538db707cf"],["/2023/03/10/CICD/index.html","72d811a20f1bd0bdeaf7255d9cd458e7"],["/2023/03/11/ElasticSearch/index.html","f70063fe6c05efb1ced7cc78683930cc"],["/2023/03/12/ELK日志平台搭建/index.html","f3fe43fa952f07aa1191cd49bbfe161b"],["/404.html","a743f7018cea63f516f606a5a262259b"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","74dda7eafc4f4b12bea806583875aa19"],["/archives/2021/02/index.html","3e21406cd96c00fdca7d47f951430f5e"],["/archives/2021/03/index.html","e2763481e8b18091d1264e0ffaf57fee"],["/archives/2021/03/page/2/index.html","2181d051ef3ce809cab3943ccaad81ec"],["/archives/2021/03/page/3/index.html","3d5285f90c857177e49b3e5b7bd6f6af"],["/archives/2021/04/index.html","a503b28169e9a285d99a3ad32e90d977"],["/archives/2021/04/page/2/index.html","0fba26118b6e85206856a9ab4ecd832e"],["/archives/2021/05/index.html","3c584562bbdec9cf6685f5b69fba9fc3"],["/archives/2021/index.html","ce3b8edc1a81ac0ca1c690a07090d079"],["/archives/2021/page/2/index.html","0d9b630651344470fd449f637519c74b"],["/archives/2021/page/3/index.html","33e2498907d03ea6e3cc7306631f8557"],["/archives/2021/page/4/index.html","afd266cfd0a2713a2c675fdcf82d9177"],["/archives/2021/page/5/index.html","40631fdf45e8f9816746be3ea7135475"],["/archives/2021/page/6/index.html","e6067ae1c84f787f4afc9e543cbb87ac"],["/archives/2021/page/7/index.html","348f15314fee7a0a1245478d593da10a"],["/archives/2022/01/index.html","3cff13eafd4d1628a78d1a6a7b3f7883"],["/archives/2022/04/index.html","af67e16e089f019c2e3b34acd374cd6d"],["/archives/2022/08/index.html","7b95f90c9e7acc05d6e8e35aba193123"],["/archives/2022/09/index.html","d2a4911c2ac00792eaf09f3644ff1f83"],["/archives/2022/09/page/2/index.html","7c3b9e26546ca5dd80d923de04b8f3f3"],["/archives/2022/10/index.html","134cdc56af920f1480b53e24ff70df2f"],["/archives/2022/11/index.html","096a99f2d7abc0cffcbed1169b306368"],["/archives/2022/12/index.html","825e14902e5d179140f155414af41d9e"],["/archives/2022/index.html","2ff559c4cbd7f8dfccb2d24985e871b3"],["/archives/2022/page/2/index.html","ac3f3fbd61f7923a708de4fba90ba78d"],["/archives/2022/page/3/index.html","22d90e8edd8f7b0f569f196a63989273"],["/archives/2022/page/4/index.html","b476af9111e735f52cdaa4c79eaf3206"],["/archives/2022/page/5/index.html","a4e5cfb3e3f6ba636d8129c924b8baf1"],["/archives/2023/01/index.html","0e273491f0704e4b3d925172493f2a97"],["/archives/2023/02/index.html","16f8c952aa53c3d3927887f935171c9e"],["/archives/2023/03/index.html","5d961895acc7b9ac9fb412f6ac31a112"],["/archives/2023/index.html","a190979b3018eb214f618d765e78ca4c"],["/archives/index.html","445e55ac46a9b7d9be2d90e360af24d0"],["/archives/page/10/index.html","485d7bdb567747a3df6e4486f311385a"],["/archives/page/11/index.html","7bc623cdcfe4f019c97dc2c7eae58d58"],["/archives/page/12/index.html","82234bc6f124af881ce645792cd53ccc"],["/archives/page/2/index.html","e08930ed75d0431b30f0d325f94c191b"],["/archives/page/3/index.html","16ccbfe0cf7d2565925d33a16de02f99"],["/archives/page/4/index.html","d9c127bbbb21d49ec7cae5f87c2b661d"],["/archives/page/5/index.html","349e45fbad23d5675e7643946894a0b6"],["/archives/page/6/index.html","59e437ee05602b5ea4d9ba52699df0db"],["/archives/page/7/index.html","a2704449216c9087b6d2148ad486535b"],["/archives/page/8/index.html","482248a9f103c58c6bd7407b19375bdf"],["/archives/page/9/index.html","27c09be09dceed456c47d2b8646c1ff4"],["/categories/CICD/index.html","95f2020d7a4157603f7fde1d63ada2f7"],["/categories/Docker/index.html","9dca4d846c76e3d83be57bcddd6184b4"],["/categories/ELK/index.html","5f4f179b90b51e96030bae27365e2cab"],["/categories/ElasticSearch/index.html","4d5266d13de4121ab6967a9b414ac0d2"],["/categories/LeetCode/index.html","6e0193a66a663bffeb99ddee7279676b"],["/categories/LeetCode/page/2/index.html","20831447c5e47745a85936ecba99ddc9"],["/categories/LeetCode/page/3/index.html","45755f4559f338329570703c2bc9ec3a"],["/categories/Linux/index.html","71768ceaf73e5c752ed43460a9c33df1"],["/categories/Nginx/index.html","4c6acbb78e641850be8aea362ab02336"],["/categories/Redis/index.html","d3760ac5c6000b0d87f11e6503a4edd4"],["/categories/SSM/index.html","407d9dbd59ad488c514085fb395ea5f1"],["/categories/Spring-Security/index.html","f19dabe2603cae974490f2d54e4497f6"],["/categories/Spring框架/index.html","71c74192cd67ef7435b67ae267b19de5"],["/categories/Spring框架/日志/index.html","baaf5baf672d300e13579508cd74aaad"],["/categories/Swagger/index.html","86b326508908f8ae299987ede798e7d5"],["/categories/Vue/index.html","daf17bbf194bd5e8dd509c19dd8c027e"],["/categories/index.html","32eed23dbf381650a8dc01f509b10bce"],["/categories/前端/index.html","4d607bfd9d44e276cfd048c1500db5d4"],["/categories/博客/index.html","875f5dc6ae1a7d03f2d81955363d0bae"],["/categories/学习路线/index.html","dc90b315c003a4e8b8bd989dcd12291e"],["/categories/工具/index.html","5c8ab3d470419b0b5c3376bc3afbc686"],["/categories/数据库/index.html","2f57ec0a8c24ebaa97685e5eba091670"],["/categories/消息队列/index.html","8418e47a5f2e640623126c51313c5881"],["/categories/笔记/index.html","025de1989ded3f8c1116e8e9a86b573a"],["/categories/算法/index.html","bf855571b864992afa54bab9a871d3c4"],["/categories/算法/page/2/index.html","cde0bf852675e2ad5549fae93e5b156c"],["/categories/设计模式/index.html","333de18953ba950eae41f3476478e195"],["/categories/设计模式/page/2/index.html","406fb5023b1b07e43a0e29fddd1f5299"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","4320f8dd27c1edc645f7a2005a1f9289"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","d041b7b48745f3bd4a453ee59dbe9d0c"],["/messageboard/index.html","a2bec256b80429d3aaa3433848bf515e"],["/page/10/index.html","f0686bbbffd166709097fb352454d631"],["/page/11/index.html","6d09262f4c60943b429edd5e591c28e8"],["/page/12/index.html","78451c12d71bcd610c242a6961eac784"],["/page/2/index.html","18ce659131cd2669261597af9d027b64"],["/page/3/index.html","35aced89da59448197bdf932f51f9b31"],["/page/4/index.html","70d848687d8a0e6df6ed07dcabf73cd5"],["/page/5/index.html","70ef80c375aab4a3b53e0b2900852f5e"],["/page/6/index.html","72586c63657d92dd0d24b7bd6cf39429"],["/page/7/index.html","9375e91626af32fdead4322ab013fa50"],["/page/8/index.html","2b9017a217c905e065d1c992d0eae5b1"],["/page/9/index.html","f880bb9221d88a35ba59eb88a10e60a6"],["/sw-register.js","0e15a4c874b16c05af72203e9b335a8d"],["/tags/Ajax/index.html","d9044ca98d960f437ab6a9a79f145abf"],["/tags/Axios/index.html","7363d399d2d2de28cd691791ea620918"],["/tags/CICD/index.html","fdaa6d8ffa5057a74e72dfdfb97c7aec"],["/tags/Docker/index.html","d86bbc13f3124628296a78585411e0f2"],["/tags/ELK/index.html","5f1ee317284771f1f7069eb079dfdf69"],["/tags/ElasticSearch/index.html","accdd3829900420135e8fcb5d063dfd0"],["/tags/H5/index.html","5eb6f57c33b093a77ae2cb5547260f88"],["/tags/JavaScript/index.html","56c22e88c9206460422f918bfaf48fbc"],["/tags/Kibana/index.html","8a77ac0030673a70931fe36383e1aaf1"],["/tags/LeetCode/index.html","2e59a6405504197516931805e28b29a0"],["/tags/LeetCode/page/2/index.html","1c6d253bcdef7f178c7e4113370bc7c8"],["/tags/LeetCode/page/3/index.html","3ea3c7429464859eb65a1f526a836b8b"],["/tags/Linux/index.html","3c6ac9fa7db3516f3bb6dc7bfb0ee094"],["/tags/Logstash/index.html","88cd8219b261104b16c74820b6f3c116"],["/tags/Mock/index.html","9b9f5700f484441cc3d61bc9c1ba5f8d"],["/tags/MongoDB/index.html","141763c75d5222d5fd1e1aa533921e76"],["/tags/Mybatis/index.html","242c7d170648b9c2d97643857daf5829"],["/tags/MybatisPlus/index.html","277ba367d8817c995e36cdfd8ab0e8c8"],["/tags/Nginx/index.html","a2e8a66481e268fd84ab195280e0ce43"],["/tags/Promise/index.html","42544eb264a766c962aaa967af61b395"],["/tags/RabbitMQ/index.html","f8b2778bd7bb94590689508161857add"],["/tags/Redis/index.html","433d8f0719a4304c88f8195be6889d2e"],["/tags/SSM/index.html","7ccc804952bd066069b154fa1d4a69a5"],["/tags/Spring-Security/index.html","abde842144eb29a1d49a5939cea27f8c"],["/tags/Spring/index.html","983340b19d1c890f549f493f24a21116"],["/tags/SpringBoot/index.html","f7141300083aa40c8c777e149135185f"],["/tags/SpringMVC/index.html","df090d629d1f0302651d5c79afd6854c"],["/tags/Swagger/index.html","65c66b1425a6c067bafc2e626aafed1c"],["/tags/butterfly/index.html","d23742ed67c3eb175070ab9022da1b7a"],["/tags/git/index.html","82ec877e1f699e4de0d8b22e5e2658e7"],["/tags/hexo/index.html","a2749f1175baabbf1c4db3e11473d8bd"],["/tags/index.html","1a3004e2be8e175e5770767d74d37123"],["/tags/jQuery/index.html","e2df076bf02e3908efc6a2668ccafb48"],["/tags/java/index.html","7ef945f9c6f0a7f88ba811292b041cd1"],["/tags/markdown/index.html","42e37eee5b731d5ff61b6f6838c662c4"],["/tags/mysql-数据类型/index.html","31ccb5ea3d289142aa0c8ff16c97aa8a"],["/tags/mysql/index.html","dca1209023bee005499a8a782ba7b41b"],["/tags/noSQL/index.html","1ebf56b66b0754a043de8bb0c71593ca"],["/tags/typora/index.html","907f7521723417d123590bb6197a9d07"],["/tags/vue/index.html","031156cb43a3239c7ee6a9ef09a3f678"],["/tags/享元模式/index.html","18552b99e50d4a37adaec432fd9f077f"],["/tags/代理模式/index.html","a58ef5d68aaa03baa1113f3e6ac2e593"],["/tags/分布式/index.html","b473d6dce158d1d743548ac900457d4f"],["/tags/前端/index.html","ea3d53b6279e77d32a3215dd38d2dd27"],["/tags/前端/page/2/index.html","8b6c531d1ced002a681e78d15e776484"],["/tags/后端/index.html","f1e2848e765db17d2e7d89ce1ba99da2"],["/tags/外观模式/index.html","f78d90d2000c6437ac53e71d4c9d29b8"],["/tags/容器技术/index.html","4731b0aa02a73e9b249e2fbf2e29d5e0"],["/tags/工厂方法/index.html","51073c466bf4c4bd4fd883d7a55b048b"],["/tags/抽象工厂/index.html","8d2721a4cd75cb7c2af46e78bac620c8"],["/tags/持续集成持续部署/index.html","7301965bbc6e8126a6250288bbf374b1"],["/tags/排序/index.html","4900dbd2822d370193e402c95b0b9251"],["/tags/搜索引擎/index.html","b16da27ba430fd2bac5bcc456fdf101c"],["/tags/数据库/index.html","c138bdc676ed6822f6d9f5ba5099930f"],["/tags/日志/index.html","e7c47ccbe322e2b8691d4e0674212593"],["/tags/服务器/index.html","31d88b85258ebedb4a8a81032c39afe2"],["/tags/查找/index.html","12defc7462bee51dbe016c378a0628ae"],["/tags/桥接模式/index.html","2a5193871fee3604ed049e0e0f70f24f"],["/tags/模板方法模式/index.html","856daedacfc69c02ec5e17cec30bf88c"],["/tags/消息队列/index.html","b1552afbf27d2d420f195532e3c9b028"],["/tags/版本控制/index.html","d337035a403696a031b02c2a851516da"],["/tags/策略模式/index.html","46f5e910072aea32861de35b138eb5dc"],["/tags/简单工厂/index.html","fb9447d6405608e9f61df44ad482e20e"],["/tags/算法/index.html","6287d1b583ec4b2c2d61b8bf0c944a59"],["/tags/算法/page/2/index.html","706dc20f4da586ff09abec4ccf111aa7"],["/tags/组件化/index.html","b121950c70c50835d6e982c587348cb1"],["/tags/缓存/index.html","08f62ca557569611bfb26066873b0e5a"],["/tags/观察者模式/index.html","920c26eb68c52e9e05b9d061ee4249c0"],["/tags/设计模式/index.html","a42e2bb573a56da0f7a671959f1f0052"],["/tags/设计模式/page/2/index.html","9ca72d23c681d0907c153be5e1cfd35e"],["/tags/责任链模式/index.html","131cdce9bc7c499098a9b8cf1f6286d5"],["/tags/适配器模式/index.html","c6c1fd407f5c5381c5e2878e02bcd429"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
