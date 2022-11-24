/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","fe9b640dc991e04694c8052e3d5bdda8"],["/2021/02/22/博客的搭建/index.html","c4c6283e7791ee950e0ad3e31496aa7b"],["/2021/02/23/如何使用markdown/index.html","1e757cce903d583a6110cc23604357c7"],["/2021/02/24/mysql命令大全/index.html","fc3a91923be5b7544999c8208fd3a382"],["/2021/02/24/mysql数据类型/index.html","93917b3dddc40f08cddfd81c9316764e"],["/2021/02/25/Git的介绍与简单使用/index.html","f93a6ba456922630eeae7c2cfa9016be"],["/2021/02/27/简单工厂模式/index.html","a043483531548b421721c50bb4a4993b"],["/2021/03/01/工厂方法模式/index.html","6b0d0720f8bf43e3864b1b66ee1b5481"],["/2021/03/02/抽象工厂模式/index.html","dc12997b743f2d8914089f2f835a131f"],["/2021/03/03/单例模式/index.html","1cd9ed9768544d35786037bebe72e781"],["/2021/03/04/观察者模式/index.html","4917dcf9a70883f2bdc5eeee6f90aa42"],["/2021/03/05/适配器模式/index.html","91d8a10e3370a35ae49aa349430cd676"],["/2021/03/06/模板方法模式/index.html","972e5b426e8bcf1f635967f05093f169"],["/2021/03/07/责任链模式/index.html","cf55545526bd7dad9ca220c0cc51f734"],["/2021/03/09/代理模式/index.html","a88c89a36a42997914b811bc0dab9faa"],["/2021/03/11/享元模式/index.html","7286e1b2e15d00a88ac8b6af3ac37cde"],["/2021/03/12/外观模式/index.html","5b650079c2012041f8f5c18e297d56f5"],["/2021/03/13/策略模式/index.html","82df1faca2b761fd976f50c66d546ab6"],["/2021/03/14/桥接/index.html","340f2f3a086e576f5c3563a0fd997987"],["/2021/03/15/LeetCode-多数元素/index.html","75f8d6297858ea3865b637145f05e808"],["/2021/03/16/LeetCode之汉明距离/index.html","fec971d09071c269e78dfcf97753e5e0"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","7eb761bd2f51d8a15f816c8467f76ef6"],["/2021/03/18/LeetCode之两数之和/index.html","4a27f4c5d758b1a371f3271dbde6dc07"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","27b832694f519bf18bb6b046e7c5a8a5"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","25340cb6a91630bbef1eb20a2b46f0aa"],["/2021/03/21/LeetCode之有效的括号/index.html","961773557886e177666c6b59f17afb89"],["/2021/03/22/LeetCode之移动零/index.html","a3f30796bcac5e33bce1996514cd015c"],["/2021/03/23/LeetCode之爬楼梯/index.html","6f5def1d449271961b941fcdf8c8a3b5"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","4f68112b327ca4e1384a0c130614e9b2"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","07ee18c9588f1529c90b5fc650d6b75d"],["/2021/03/26/LeetCode之最大子序和/index.html","91e960bbed3cff35f86b05507194fb41"],["/2021/03/27/LeetCode之子集/index.html","3c53cb3aa02e15cfd7cc85ea344673a4"],["/2021/03/28/LeetCode之合并二叉树/index.html","c2772f5159ed9321f792e2524e74edf7"],["/2021/03/29/LeetCode之翻转二叉树/index.html","f86f034f0997497d85d842ad96c87f1f"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","3913b30b58c10a70c6d855d620f4c8d1"],["/2021/03/31/LeetCode之翻转链表/index.html","8619713c27d217d78670ecc5dff8a4df"],["/2021/04/01/LeetCode之相交链表/index.html","a58dd65a28b3bee12d4ff9dda0d269f8"],["/2021/04/02/LeetCode之最小栈/index.html","0269992b5636e712b6f4a7d4292a9ae7"],["/2021/04/03/LeetCode之对称二叉树/index.html","563e202366fc3a4fe0fd6f95d2b877a5"],["/2021/04/04/LeetCode之环形链表/index.html","be02390ffce18f55696de6e8af8e9945"],["/2021/04/05/LeetCode之二叉树的直径/index.html","b45f54a0b08f64acb0259c04676c4252"],["/2021/04/06/LeetCode之回文链表/index.html","fab85385918d91f4ef531b974564e017"],["/2021/04/07/LeetCode之比特位计数/index.html","1ad95e512bf13112d46a86452c03c73c"],["/2021/04/08/LeetCode之全排列/index.html","4bdfab3146a7e1b762228f0894f75413"],["/2021/04/09/LeetCode之括号的生成/index.html","948fe310346036b70a4e76a940432d56"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","047fd388f353af4238265ec1d9c5985a"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","1ea534a37d4a8a3c7df0ac018246aaf6"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","68c0b18655411ae51ae354f40835028a"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","3bd250dac37305f2b658444ec9b6790e"],["/2021/04/14/Mybatis/index.html","7184d0d69f6347c9ebf24b59f7b5be5e"],["/2021/04/15/Spring-1/index.html","7f09a76b536736283b683c1078c5298c"],["/2021/04/25/Spring-2/index.html","bddaecd38f8a4c3f93ba0b6b40be50f3"],["/2021/04/27/SpringMVC-1/index.html","65225a85b59853e300fd4d0efbf8b53a"],["/2021/04/29/SpringMVC-2/index.html","64d29facb8baef43929c2a8b7f188d51"],["/2021/05/03/冒泡排序/index.html","d842cb1123c3d40a5e0b508c745b9d73"],["/2021/05/08/选择排序/index.html","356c6a186234d966ff8857f296982af6"],["/2021/05/12/插入排序/index.html","fa41af98f7848ddabf5e9743bf42c722"],["/2021/05/15/快速排序/index.html","622ad17034c26ab23f642d5dce2800c8"],["/2021/05/19/基数排序/index.html","2edbe2a49c566c5b482a52bca1746ea4"],["/2021/05/20/哈希排序/index.html","63c151a3a279a35f2ffab766b0eac0fa"],["/2021/05/21/归并排序/index.html","8478f9ad6b6dad5bc8b4db056acea834"],["/2021/05/22/二分查找/index.html","1d60acce5d42d8cf8d113ae49f16ca76"],["/2021/05/26/差值查找/index.html","93f024299df2d7cacffd279656c20a00"],["/2022/01/12/高精度大整数计算/index.html","51851b423ece61e083aef85a6254d8f5"],["/2022/01/22/前缀和/index.html","8396ce580d46dc17ca91f19b497821fd"],["/2022/01/23/差分/index.html","b630ccdb5c34f1767f346373b0e0158d"],["/2022/04/04/MyBatisPlus/index.html","5fd9f0eb31a6604bbe517678d10fa8cc"],["/2022/08/17/jQuery/index.html","cac0aded051c471a1c3224b42b81d8ac"],["/2022/08/19/JavaScript/index.html","be67a2bfe173435835a85f3d439d5f66"],["/2022/08/22/Ajax/index.html","44fe2375a90e2cf48a1834ffef07432f"],["/2022/08/23/Promise/index.html","a0c361f5ac8c5cf5e9440379d28f7bce"],["/2022/08/24/Axios/index.html","17e99806358f58770a6e0c4b850f6ff1"],["/2022/08/25/H5本地存储/index.html","fcf6a37536e2949b3760ca74e3d01d6e"],["/2022/08/26/mock/index.html","921017808b405c59c070868a8fe0d253"],["/2022/08/31/VueJs/index.html","e910833b3fad56d8f2bc9c9d9b884e18"],["/2022/09/01/vue组件化/index.html","0c3f36e2499f78da3b0299b1a531f338"],["/2022/09/04/VueCLI/index.html","5b3342b889b10a340aa592afcb8a0087"],["/2022/09/07/vue实现动画/index.html","a37a636aa1e59d1fcc0604bb0efd2d00"],["/2022/09/09/Vue响应式方法/index.html","d2aab26b1c9c4d3f05b7f6017e038b8e"],["/2022/09/10/Vue异步请求/index.html","08ccc1cb75b281d65a53094740f6e350"],["/2022/09/11/vue-Router/index.html","8ab2eadf5b907b14c8d3191dbfc67a44"],["/2022/09/13/Vuex/index.html","541d164632ed6cb03ba4367af00695d9"],["/2022/09/15/SpringBoot/index.html","90dc3889949715f5e268f4cd5dea4e24"],["/2022/09/16/SpringBoot配置FastJson/index.html","ec0d66bd369a896a4c1d0aa6b4a40448"],["/2022/09/19/SpringBoot参数校验/index.html","e844b0e4b81c2f4daaab7da8b6d25364"],["/2022/09/20/SpringBoot的异常处理/index.html","6ea8a2fdaa580d27e693bc0dfd12a687"],["/2022/09/21/SpringBoot统一响应处理/index.html","73a0ad80e684cefe8331ef5769adba0e"],["/2022/09/28/Linux/index.html","8f48b29ecde700e78d38288b479a7380"],["/2022/10/02/redis基础/index.html","2c60395cfdc1a88b0ddc7aac5bdc4c85"],["/2022/10/03/Redis缓存/index.html","e7368c393573d1de1ab96d8c3e936a18"],["/2022/10/04/redis缓存穿透/index.html","5ce470a7c21229f2e4baf3c9b8c95481"],["/2022/10/13/Redis缓存击穿/index.html","dea43e2bb43f5173dd494ec60c22f1f6"],["/2022/10/14/Redis缓存雪崩/index.html","c6540effad64e1d966b1753a644999f5"],["/2022/10/17/Redis集群/index.html","e3d0c4ec344eddd2f155bbed0e1fcd59"],["/2022/10/18/Redis哨兵模式/index.html","7e1d5190075a30e60064922c61ca1622"],["/2022/10/19/Redis主从复制/index.html","359837252fe8af6868383bc9d863dbab"],["/2022/11/03/Spring-Security/index.html","13f00f8a5b685742414e7cc2dafb8d45"],["/2022/11/08/SpringBoot日志/index.html","b5825d521d8602da3c310cd64b38c178"],["/2022/11/11/Swagger2/index.html","282390eb2ec2014c2e34fdc68d9ea799"],["/2022/11/21/Nginx-一/index.html","f9d0e8f02aae9f4fdb93a482118b6884"],["/2022/11/23/Nginx-二-代理服务/index.html","d07d85dd4a753f00d21dcd4eda325344"],["/2022/11/24/nginx-三-负载均衡/index.html","47a7d5eda085ff04d62da733f37587ef"],["/404.html","de4fa0c5fa0f5b212b9d3c9cead81eb9"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","ff1b9a818057f3cba57d50e10390317f"],["/archives/2021/02/index.html","10245cc115ccaa1743eda8120b3dd2a7"],["/archives/2021/03/index.html","4e08371399fccf48228570e422cdbccc"],["/archives/2021/03/page/2/index.html","3620c244b9f86e719c7d34a949afd4c9"],["/archives/2021/03/page/3/index.html","8aeae9b305d7fd90e20090175e961583"],["/archives/2021/04/index.html","d4b99236d99b91174aa445d7439fc679"],["/archives/2021/04/page/2/index.html","edc1b4cf5d44f3775f54eb17f95b1b95"],["/archives/2021/05/index.html","7dd4f72e4dce0b6a82378ecce47f2b65"],["/archives/2021/index.html","e6c2febe4f69a57c5bc8b98cefb3e539"],["/archives/2021/page/2/index.html","1c88692b9cd2b9b84a4b208a763b9ecf"],["/archives/2021/page/3/index.html","b3fc8b7831fa853b74ce61891ac7ebd8"],["/archives/2021/page/4/index.html","9304d2ea781eb1205c8a24b7cc8c8d92"],["/archives/2021/page/5/index.html","16e7a7329082a4b040b9763800047cad"],["/archives/2021/page/6/index.html","e86e4d6c6a7adb635ed87c013929e2b3"],["/archives/2021/page/7/index.html","cf8ad049c04c3fd71016f11559c5abed"],["/archives/2022/01/index.html","f09cd798fd057d7f04fac1907251e496"],["/archives/2022/04/index.html","3b0128eb0832a84e7c1030bf509914ad"],["/archives/2022/08/index.html","f7ccde775ed4cf0d40e8819a4943ef1d"],["/archives/2022/09/index.html","760ce315d366e31df7f9ab944145b93a"],["/archives/2022/09/page/2/index.html","7b80558fd1fe473c095b89939cb2d85e"],["/archives/2022/10/index.html","121c94b3a2b725c62fafac379773f1d2"],["/archives/2022/11/index.html","a745cfefaa33d8a19b8b055d60bbb2bc"],["/archives/2022/index.html","52db82f7c33123178dc727a4fd73bd1a"],["/archives/2022/page/2/index.html","9b6f3a54c26bd934ab089014bfd9f524"],["/archives/2022/page/3/index.html","0f832928e6338848eae1135173a61d59"],["/archives/2022/page/4/index.html","c2e129401ffa1677f0db604b3d370da8"],["/archives/index.html","fa70bd2163d180587bb30241a32e21fe"],["/archives/page/10/index.html","ac2e46a2ea8a64685f52663854820651"],["/archives/page/11/index.html","483e5abe0f5bb685a67eb534c59a2bdb"],["/archives/page/2/index.html","53c7a81db553f0875d75db4baa8890da"],["/archives/page/3/index.html","2a7247b7f8fd96439c8e256c85cc8b1f"],["/archives/page/4/index.html","68c1a5267b849ee5af56c2cadaad62d0"],["/archives/page/5/index.html","009d5451014d17d401ac3e5a6e56cab0"],["/archives/page/6/index.html","bebb8c74748e983e74f47afaf5c516a6"],["/archives/page/7/index.html","3b15b625d614a972ad653cfd15dd06bf"],["/archives/page/8/index.html","6f3f56aa61d200ddee7d34ea4eb9b2ae"],["/archives/page/9/index.html","b6170d4f3f4da283315243e516752932"],["/categories/LeetCode/index.html","2e44f49c31ee519d6aafe973ec88c587"],["/categories/LeetCode/page/2/index.html","09856991d395e32693eba6127e3547f5"],["/categories/LeetCode/page/3/index.html","c90ce12771419f36724636e515eef4b7"],["/categories/Linux/index.html","4c543c9baf5141aa36d3030512b3b843"],["/categories/Nginx/index.html","f43b3abf99e66985a19b8e7a4413c3fd"],["/categories/Redis/index.html","5e658d4cf76d51ff2fa1593160db3cd0"],["/categories/SSM/index.html","894f9782910d0b4080325d5aeca8d4a0"],["/categories/Spring-Security/index.html","a936a37145ae555485693f4b7e515226"],["/categories/Spring框架/index.html","bf24288f709106910018a76c057097a3"],["/categories/Spring框架/日志/index.html","e6adf503faa2d50238cf22dfe064b692"],["/categories/Swagger/index.html","19cc3ba2101d05238f6c645698fdaf51"],["/categories/Vue/index.html","c3a516b589c14be4ed987a65d64b0ce4"],["/categories/index.html","2d2cdbb9ad927b75e7bd7add05005688"],["/categories/前端/index.html","fbea52da06dbfc70e694791cdcb3cd23"],["/categories/博客/index.html","2cef472be79b3893ddee7e1efa10fafa"],["/categories/学习路线/index.html","e3e7eeaf8d567339ee95a20d78ae79c2"],["/categories/工具/index.html","ae7d95340e05c75b977dde9fa0506275"],["/categories/数据库/index.html","1918d0cc51338b22e95ce2fc4aba6663"],["/categories/笔记/index.html","ee4ce8ae296e8c9c4225e58ab8790f23"],["/categories/算法/index.html","f7dc20b3643892c293a453a38502ed58"],["/categories/算法/page/2/index.html","b4a6c14139e7f846836ff1c915a0357a"],["/categories/设计模式/index.html","2f95330b7fbfe8725e92cbfc4afbe978"],["/categories/设计模式/page/2/index.html","4b145c395a8c126cfc9c9622d63f994a"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","f269fee7186ae95f85889781592dfb8e"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","8070360196b3229bc987957b9aa0a1cf"],["/messageboard/index.html","6f327e54337c37d6fb642996fcd2d64b"],["/page/10/index.html","43c66135364d7583715c833899bfb707"],["/page/11/index.html","ebb2f037246d46366d5e595a18680531"],["/page/2/index.html","dedb67dbb165d7299e82b2202877fde5"],["/page/3/index.html","11a855070c802aa5fa81aac079b1b544"],["/page/4/index.html","14b01978ee0b2e5036ed5a9539c15a36"],["/page/5/index.html","af876d1a43f14d280b26db46680a20bb"],["/page/6/index.html","b286b617806afcd89705fec4cf879cd4"],["/page/7/index.html","8629c904bd44b30043ebd0fb140c2e6d"],["/page/8/index.html","4669622179b7805745a2ef34be14de24"],["/page/9/index.html","b8b46cdb34b0424c16f805a447f0ec33"],["/sw-register.js","41af73a036103cdfc8308ecd05bf5c4b"],["/tags/Ajax/index.html","8d2ba16fb280ad1fd2ccfd0142382c00"],["/tags/Axios/index.html","03b2d0405cce0482ed923df10bdc772d"],["/tags/H5/index.html","dc80c25510ec5447b0ac8ee40e21e587"],["/tags/JavaScript/index.html","d91aa1037549941f9da5e9bb6c71a572"],["/tags/LeetCode/index.html","d449c6283a7465a28114f749e1559457"],["/tags/LeetCode/page/2/index.html","35027bc92a9cbf0827b88514de7102ab"],["/tags/LeetCode/page/3/index.html","b34ffa25075511836626e8e8ac45f4c8"],["/tags/Linux/index.html","997a8eac6498f8073ea78d5a83b5853f"],["/tags/Mock/index.html","1c8a6aebc70aa62a75a4bc96ace50877"],["/tags/Mybatis/index.html","fa1f9f390cc45097f28166b1bc8a10d8"],["/tags/MybatisPlus/index.html","9d21b032964477a35c7a48b5eb99e345"],["/tags/Nginx/index.html","073c4e2755a5cbad1e029dad5bdb2253"],["/tags/Promise/index.html","60999334ea7d3f6f7026bbb5eb4857c4"],["/tags/Redis/index.html","064ac794553e0bdb0bb0a3d7ad9b3f55"],["/tags/SSM/index.html","5e88923b0cd90de26f8ab1b159009844"],["/tags/Spring-Security/index.html","675012760d0c374883e8b9d08a5415e8"],["/tags/Spring/index.html","f00a7abcaca3a78baa9cbe52d5976da3"],["/tags/SpringBoot/index.html","aa7ca2d3c5735996749ad481b1034cfc"],["/tags/SpringMVC/index.html","5ccf2907983d9753bec10f9357bcf9b2"],["/tags/Swagger/index.html","423fa28effb5ca1818574bde60dccaa1"],["/tags/butterfly/index.html","6c1a070f0e3987f690b3ba982dfad52e"],["/tags/git/index.html","4d8cca2577186eb2f2b13121ebc48629"],["/tags/hexo/index.html","ab1ef03630e2312cbe14d832c2223a7a"],["/tags/index.html","e1757a3a1e39363a26814adf50377258"],["/tags/jQuery/index.html","486a5dd977b8d5dc5272be472dcd5a01"],["/tags/java/index.html","855bb16fad7a9e365c672f8149acfadb"],["/tags/markdown/index.html","223d3ed2ae52208033499311d024701e"],["/tags/mysql-数据类型/index.html","e480c6da000ec4cf55a3065f829d1ef4"],["/tags/mysql/index.html","a0ac462ea6bb427f053b8bf0b16661f2"],["/tags/typora/index.html","da9771eb39f66e59172ee89055a95118"],["/tags/vue/index.html","449c3412e8f433bc20e90f6120918336"],["/tags/享元模式/index.html","269b5d710d34116e4b5525f8792b86ad"],["/tags/代理模式/index.html","187abf5aa3092e2651c5795fab07ffe6"],["/tags/分布式/index.html","cb98fff9159ef26bbf7623174a315cdf"],["/tags/前端/index.html","91c47039e2d3697e28cbfff13c8342a3"],["/tags/前端/page/2/index.html","937c4231d72bce94ddcb6b99b449e8b2"],["/tags/后端/index.html","72311d1229a6c24f93cd97b4317dec53"],["/tags/外观模式/index.html","491a27e329d12554d5bfbf0380a68164"],["/tags/工厂方法/index.html","1ddd433bed019dc20a830fb4a208a3ce"],["/tags/抽象工厂/index.html","4733227f22074f8e8f73306aea9b9bed"],["/tags/排序/index.html","603b46a279d35fff8957e0e9c5aa05ce"],["/tags/数据库/index.html","3e0982bd5dbdc4b96c40f8e96a63f417"],["/tags/服务器/index.html","9640906c674426a4a39d593ab80bc480"],["/tags/查找/index.html","a657b27f5a40cf8a57183e44e9bd0aef"],["/tags/桥接模式/index.html","d24417574a8311f1eb7d7fc3cd5993d4"],["/tags/模板方法模式/index.html","5e6f280211cd725b5f5784be0dbf4171"],["/tags/版本控制/index.html","2b86295e3ad3ad87d597aef01853c39e"],["/tags/策略模式/index.html","1a604f03994deb7af91d149b578e3873"],["/tags/简单工厂/index.html","95131b09a46da0868a2ed3abbda454fd"],["/tags/算法/index.html","fec6fb04c9ba9af99c028345bcb9d129"],["/tags/算法/page/2/index.html","e49b457ef87d53c8ac7894ea3fdacff3"],["/tags/组件化/index.html","a8146e012b0a6e98f35f92458d88d0ae"],["/tags/缓存/index.html","1c4996863246afb05260cfe63ce39d06"],["/tags/观察者模式/index.html","8e79451796884337cee66b931a7fe8db"],["/tags/设计模式/index.html","d3b81757ae0313ae5d380e2c2744126a"],["/tags/设计模式/page/2/index.html","9953390c3a0b9e162a8bbd967c01df9d"],["/tags/责任链模式/index.html","7322e23f5ffec073ab2b9de68986ce09"],["/tags/适配器模式/index.html","440870d77adac047f2ba10e9a0b8e71a"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
