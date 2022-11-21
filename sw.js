/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","a947b51c6806943e299e73e623924df2"],["/2021/02/22/博客的搭建/index.html","485147f88cc25f350e3d13375840eac8"],["/2021/02/23/如何使用markdown/index.html","ccbab4bb753c1dfe5a23c0262accc8d1"],["/2021/02/24/mysql命令大全/index.html","9b72d0d10e8953a0c24c3f35ac59e51f"],["/2021/02/24/mysql数据类型/index.html","ac6305b077d56a36a9b9e9c2781fbac0"],["/2021/02/25/Git的介绍与简单使用/index.html","864d27af3229ffc63c539fdf527e6722"],["/2021/02/27/简单工厂模式/index.html","bc4b7750a7f412f10f7d0158490f0312"],["/2021/03/01/工厂方法模式/index.html","e5dccb559e2b5b9717570c06e9bf7049"],["/2021/03/02/抽象工厂模式/index.html","dcb61e8940623c177c2e746687046d37"],["/2021/03/03/单例模式/index.html","209691cc8d4d5287960b0d9d1f56aeea"],["/2021/03/04/观察者模式/index.html","199469ae45bfdac73503524faa1b4985"],["/2021/03/05/适配器模式/index.html","4b8ea2c124ae925dcda4f84d06429c24"],["/2021/03/06/模板方法模式/index.html","45d1df3ae7f7c1dbf716a4d84fb0cdc0"],["/2021/03/07/责任链模式/index.html","9f93396f08f07163e15a8625fe29a565"],["/2021/03/09/代理模式/index.html","98a5c7362f989943658c36ab49dae38c"],["/2021/03/11/享元模式/index.html","afe05e363acb87d67fc05943d031e246"],["/2021/03/12/外观模式/index.html","8ceb7ccb023fec8339d495e0fb9486e7"],["/2021/03/13/策略模式/index.html","c1a466b2a48732311227e4034ea947cc"],["/2021/03/14/桥接/index.html","67a8aa8a8a0a1aa8900d46beb8ec15fe"],["/2021/03/15/LeetCode-多数元素/index.html","0cfc798f39f4d645cbd18529ff3bdcab"],["/2021/03/16/LeetCode之汉明距离/index.html","ca627e142a1107fe4b6eb5206a68f826"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","1e0e594dcbc0a73ca03ae18e29c6d6bb"],["/2021/03/18/LeetCode之两数之和/index.html","68b083038ee32bc7eac1a97394040abe"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","d91fd1c992a9cd0a709351fc768f87aa"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","350a8bc52921a560bb6bff4897442e98"],["/2021/03/21/LeetCode之有效的括号/index.html","f3927e8fcaea14283567f38d3ee8b0c6"],["/2021/03/22/LeetCode之移动零/index.html","8856e182d936bd47f781d179382ddb09"],["/2021/03/23/LeetCode之爬楼梯/index.html","899aaf8549991e9a5d51c6608274241a"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","68cd89bf8e34738ce309bb6b38570209"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","8e0e13029015fc0d2a211219c2f46aa6"],["/2021/03/26/LeetCode之最大子序和/index.html","91bbf6f9b8509c834a4b6a35e091e49f"],["/2021/03/27/LeetCode之子集/index.html","5a0334788ee3433dcfefff74cd99f1de"],["/2021/03/28/LeetCode之合并二叉树/index.html","5ce2b1e2a4b3f5a7594feb99f220d705"],["/2021/03/29/LeetCode之翻转二叉树/index.html","6f2066f7fe9a0c3fcb336f30e65e1031"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","bad5424844b37d9a53de51f241f15024"],["/2021/03/31/LeetCode之翻转链表/index.html","80e3ad81986b6f102480582b1c390012"],["/2021/04/01/LeetCode之相交链表/index.html","f88204811c8cb16b29ddff17ac5843b8"],["/2021/04/02/LeetCode之最小栈/index.html","7c46775c83515ec816980a0c40febf3a"],["/2021/04/03/LeetCode之对称二叉树/index.html","1d1f23e004a7afdc5c08c5405eb12728"],["/2021/04/04/LeetCode之环形链表/index.html","9201ffda033fd8fd1e0c62b718a44da7"],["/2021/04/05/LeetCode之二叉树的直径/index.html","bedf674be7bb89960837b913233d5364"],["/2021/04/06/LeetCode之回文链表/index.html","3a41080c16c6a912fa4cb083a237ab0b"],["/2021/04/07/LeetCode之比特位计数/index.html","d5ab63f8626556ec3efe9f1069a864c4"],["/2021/04/08/LeetCode之全排列/index.html","2120173a326e1c241e8c4697b5f0b72f"],["/2021/04/09/LeetCode之括号的生成/index.html","d66a3f2f9f7d9a7b6c3f001b83f4473d"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","e19fcd4c08a9fef6f915a1813918dc98"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","73081537eaf40294993c8ed04c466d61"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","4c621863e8de2e4a417eede11280acba"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","aa5cafa1cdc023217a9f2a9ac2a1151c"],["/2021/04/14/Mybatis/index.html","6de82e1748c69cda1cdfc222d6ff0520"],["/2021/04/15/Spring-1/index.html","dca873780574e930c4c820b21cbedd1a"],["/2021/04/25/Spring-2/index.html","5e19ecf68ab4f8cd38dbdd2d38fc84cd"],["/2021/04/27/SpringMVC-1/index.html","4d02d076791bd07d702a401021162507"],["/2021/04/29/SpringMVC-2/index.html","c4b60a29573b0b5596fa765655ce4a81"],["/2021/05/03/冒泡排序/index.html","92fcee5ffd1aa0f2975e10ebb3037e87"],["/2021/05/08/选择排序/index.html","97e9703335f775628a28a2ce097647a7"],["/2021/05/12/插入排序/index.html","51a0391745a4d8c296d8c6860e69f2cc"],["/2021/05/15/快速排序/index.html","a35863dd0de5750497bf36912ca91a18"],["/2021/05/19/基数排序/index.html","b227dd08a1e30e45f363e3c3bb33f359"],["/2021/05/20/哈希排序/index.html","5b7309114433d0ccd3fd41d31682435d"],["/2021/05/21/归并排序/index.html","82632350d744f2acee720ba63ccf7d85"],["/2021/05/22/二分查找/index.html","1c98a22854416a907ef4e718fa4d2c5f"],["/2021/05/26/差值查找/index.html","2f2bc9d7b5349221fe0f4ad13552ee13"],["/2022/01/12/高精度大整数计算/index.html","0ef9e52ef967330dc7fa084c343b37f2"],["/2022/01/22/前缀和/index.html","fdc4f15cfd63f9535596594716c91bfd"],["/2022/01/23/差分/index.html","2d922c1b59ce0468a5bc26f29ff2831c"],["/2022/04/04/MyBatisPlus/index.html","3bfaed4e26e0037b13ec226bceff79f6"],["/2022/08/17/jQuery/index.html","3dc221aa4f3dc64216644962dd8f01f9"],["/2022/08/19/JavaScript/index.html","779b3b63d9ec5f8c9089fe1d8d52aa88"],["/2022/08/22/Ajax/index.html","4da121b51b5b540501dc6b4f5f757fa2"],["/2022/08/23/Promise/index.html","fea64a25fbb8af835c4bbd2c746a0bfb"],["/2022/08/24/Axios/index.html","cfc6618554d5606a95c60f269819988e"],["/2022/08/25/H5本地存储/index.html","4f8a3f8e6ad5cd823d0464a1c1acfa27"],["/2022/08/26/mock/index.html","2d2c1be62f1f836bb6ae30f863767cdd"],["/2022/08/31/VueJs/index.html","d9c563af01acd56f6ab5dcbcd8ba3130"],["/2022/09/01/vue组件化/index.html","0fbd1259cb1bbdcdd29e94617c9b2673"],["/2022/09/04/VueCLI/index.html","96ea8926c7313e604e89715502d03db4"],["/2022/09/07/vue实现动画/index.html","2d82495cd68f01f4bd699ffa762f32ff"],["/2022/09/09/Vue响应式方法/index.html","6417bdf9311530cd5aab97fdd3f3fa43"],["/2022/09/10/Vue异步请求/index.html","c4c2939220abe2f468fad0157911722b"],["/2022/09/11/vue-Router/index.html","5f7bc64e85f3d28266880fc39ccd22c1"],["/2022/09/13/Vuex/index.html","45929b070ea90cded92e0c98dd4f4ab3"],["/2022/09/15/SpringBoot/index.html","e1599505c56dc2b7ff4c1f0334683a1c"],["/2022/09/16/SpringBoot配置FastJson/index.html","02fe9f5ee151ee08168000d447fb574c"],["/2022/09/19/SpringBoot参数校验/index.html","253ef8ccf0ef5397d26d7208b5f7f8ff"],["/2022/09/20/SpringBoot的异常处理/index.html","3eefbd7398d6713cacc702466695bc3f"],["/2022/09/21/SpringBoot统一响应处理/index.html","5b73e8ca45c2b3c597952ea8370c4e7a"],["/2022/09/28/Linux/index.html","c38a3dbbcb5f055fc3e528d5136109a9"],["/2022/10/02/redis基础/index.html","1616cf6aa5f439b137d37b092ee838b5"],["/2022/10/03/Redis缓存/index.html","513b36f235dcade9bfe72da9466c8697"],["/2022/10/04/redis缓存穿透/index.html","0205f61e630fe8dd02e4e6aa1fb127cd"],["/2022/10/13/Redis缓存击穿/index.html","4a01005b3e80995b758a265076057dd6"],["/2022/10/14/Redis缓存雪崩/index.html","6f24e3e454431b53dc7fdd7ca89903c0"],["/2022/10/17/Redis集群/index.html","1bfa1e1523f15bdb09254093fe660af5"],["/2022/10/18/Redis哨兵模式/index.html","e81f9a8dc9e9f9d5ac915daf95c78684"],["/2022/10/19/Redis主从复制/index.html","8f338d0569a068a5effe253af3780c2e"],["/2022/11/03/Spring-Security/index.html","ee4f9015bec9f3b96271436164cc1a3b"],["/2022/11/08/SpringBoot日志/index.html","90bd4249d252db326517f0007e7c8568"],["/2022/11/11/Swagger2/index.html","04df5288650b26f14eab6df45b613cef"],["/2022/11/21/Nginx-一/index.html","2bfe13c5b2f454b614f22a44b4aec4b0"],["/404.html","fc9e5d7c75a349229e351ad9921eb0f5"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","25697d0465c680ed5941e1466a838309"],["/archives/2021/02/index.html","3aee3ab7cf0812c44c3d12884177dd4b"],["/archives/2021/03/index.html","ee2f7972285e14df6fa08b3339e49445"],["/archives/2021/03/page/2/index.html","103abc5a223e622d356fa913859d3e10"],["/archives/2021/03/page/3/index.html","d6980e5628c0b1f77d69718c3bc40f83"],["/archives/2021/04/index.html","9da8b8caf54ee3d67f07d5301c89790b"],["/archives/2021/04/page/2/index.html","c79fac3c3281dd78d42c95a0bb45d284"],["/archives/2021/05/index.html","bd7f28eab5fbc1c6ddb637488c5bc8fe"],["/archives/2021/index.html","353bb67f8768fdda1d8f25b79022f316"],["/archives/2021/page/2/index.html","6086997a87b7f5e8d184e5b0602a5336"],["/archives/2021/page/3/index.html","6411d6d91e965e565122b2bfb04a1e4d"],["/archives/2021/page/4/index.html","fdf401463bff46e227165c1249f3f982"],["/archives/2021/page/5/index.html","5dd5767e1b2ec70875fa9e30dc5a81fc"],["/archives/2021/page/6/index.html","765f5e76d6a7ae1b54fded75d8e2efc5"],["/archives/2021/page/7/index.html","dc93243f9937c3c9ab37aaefab7336d4"],["/archives/2022/01/index.html","588f26b360612baab27c0b5778b048aa"],["/archives/2022/04/index.html","e94ef15f90c5b27cabd637b57e578416"],["/archives/2022/08/index.html","6b42766fb8ae76140665d58e0a0e949b"],["/archives/2022/09/index.html","e297ecac9de1c80cd2df068de2f5a1ba"],["/archives/2022/09/page/2/index.html","b5b2e42e3ae14be374e7a8ec20a3ca71"],["/archives/2022/10/index.html","5e5e1183ff3fa78047a06983624370ce"],["/archives/2022/11/index.html","a6f8eb536c106117b8314073f861b7ba"],["/archives/2022/index.html","8bf0475dd8ce2242fd22e0b9b6784de7"],["/archives/2022/page/2/index.html","2b02a30e8f0984d003fdcb9b69528b6b"],["/archives/2022/page/3/index.html","31afe31192cafda0d36ff1dc3dbcf5db"],["/archives/2022/page/4/index.html","3189a44a99d0f0b20a082378b8414183"],["/archives/index.html","19f3b82ff7bc145b86ac7414a7c08861"],["/archives/page/10/index.html","10642b016ea49d326fcb2c40cccaa00b"],["/archives/page/2/index.html","aa77f9a4cbcc62629da327d5782a2dfa"],["/archives/page/3/index.html","572669a0198a155f7ac9abd12e712640"],["/archives/page/4/index.html","881298b04bc5425be1c0d3efec1e5dc2"],["/archives/page/5/index.html","aa2e6ef041cbfd704cf0ff1c7ba0b409"],["/archives/page/6/index.html","74c9ea9a414b2e3d8548234a86aaf3ca"],["/archives/page/7/index.html","572413388a0875173055512c06e6c0d5"],["/archives/page/8/index.html","559251c22aaba600f012fef68b96cf52"],["/archives/page/9/index.html","e70a6b2aa4e4b936992fb622f42eed69"],["/categories/LeetCode/index.html","5966ce5c5014a5bbbf50d397f3c5d692"],["/categories/LeetCode/page/2/index.html","b41462708718c28d549b2b278d080e0a"],["/categories/LeetCode/page/3/index.html","ca6c56ba86b83980d41e999eef0e2770"],["/categories/Linux/index.html","29bb0f53b58d1038621bac326a7e948f"],["/categories/Nginx/index.html","e44329995af96c5152389771d8e892e7"],["/categories/Redis/index.html","9b87ae6ff492af76b8bc721bf7b810a7"],["/categories/SSM/index.html","8184433d47777708e6f4bdbeb3539f45"],["/categories/Spring-Security/index.html","5f31aff1745b2d0b044f334c90fe22d8"],["/categories/Spring框架/index.html","7928e0877a3dd8043e784d5576c75bdd"],["/categories/Spring框架/日志/index.html","9897911066e5ba3eaf3d747995f563b8"],["/categories/Swagger/index.html","0a303d331754e9def78684769820903e"],["/categories/Vue/index.html","abb9dc21cf4412619bad0921d82cfad6"],["/categories/index.html","bc1fa6d154c917ab47aa3ea8ab76167f"],["/categories/前端/index.html","3e37efa9630b619cb4f755ce07f64fae"],["/categories/博客/index.html","bccf24190a0c189bc7f44759008e07f8"],["/categories/学习路线/index.html","f6efdefea9a0508759793459ae0e89c5"],["/categories/工具/index.html","fba6d47ad7132fed57fc20e3ab961140"],["/categories/数据库/index.html","e3a0987421cb44d9c1793c2391b5e7c2"],["/categories/笔记/index.html","ef755455fb539445416cc5dcf7633efb"],["/categories/算法/index.html","3fe8e55ae827a958ac9997ef54affeb4"],["/categories/算法/page/2/index.html","ad68524d172c760bda41ac89f6962acb"],["/categories/设计模式/index.html","86b1a70628e82fc0d5440fac08079b14"],["/categories/设计模式/page/2/index.html","cf441b1cce162148b61d53eb607125f4"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","69503242b2aa2c3dbf7a1811100f50b7"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","85af9f94a8b9088e6f427e0e9f7ddd66"],["/messageboard/index.html","5ffafd9093abaa318d2e893c730139d6"],["/page/10/index.html","de3b90da9e7db778fa772636462977e4"],["/page/2/index.html","2075d4315462117592b37371403a5a80"],["/page/3/index.html","27b8922d7c3f216095349848a8ba2a31"],["/page/4/index.html","3f7ee2fa16a3bc60b4cd32b24b8bb317"],["/page/5/index.html","d10874b5a00574e938b6c484e8ec568b"],["/page/6/index.html","b29e935dbd10dfba6fa2bd6e2e235124"],["/page/7/index.html","39c6948e748fa8c4186abb3022db03df"],["/page/8/index.html","f518ba992693bf904c45ad7222be0312"],["/page/9/index.html","4804aac4b3ce44f5a435bffcaf351964"],["/sw-register.js","724fd36153d79d842f3a85f53972ccde"],["/tags/Ajax/index.html","d443ecff398b0c56676e53d274744cb0"],["/tags/Axios/index.html","a7b389bcfcc9f6bbf4638b916fdd4543"],["/tags/H5/index.html","9bd68496e7d4318622df87e832aa5fbd"],["/tags/JavaScript/index.html","8893001fc698f98db5203f2145d97e95"],["/tags/LeetCode/index.html","e540c7de483486fee8d4a1cfe6f0b806"],["/tags/LeetCode/page/2/index.html","d2d2a9f1b785a210de45cdf156f0af07"],["/tags/LeetCode/page/3/index.html","8099b36d2517be3584d55fec7a8332c4"],["/tags/Linux/index.html","0f6b23c73513a8a291c4ceae3b240e9c"],["/tags/Mock/index.html","63df007eb78d29f8c0f5b7e42f3cfcfb"],["/tags/Mybatis/index.html","3c3abeff78cf411e96e0de63ac89e68d"],["/tags/MybatisPlus/index.html","d9af0f260f2eb4b8864857aad981db8f"],["/tags/Nginx/index.html","23372c6d51a682efabeacb7ae4136c8b"],["/tags/Promise/index.html","06c729c91fc969cd39e218591e89ee97"],["/tags/Redis/index.html","80b1e65886e506dfec515315f6cb9a1e"],["/tags/SSM/index.html","c24b4bf23a6c508f3ed5280cbc294863"],["/tags/Spring-Security/index.html","cad9a65ce852027e27d808ef7f083713"],["/tags/Spring/index.html","e70e6c6c1ccc12be8082a88298077d89"],["/tags/SpringBoot/index.html","ee7d4ff4e6d70a7d2f44a632eb125abd"],["/tags/SpringMVC/index.html","599859a415a6b1cbd180eaa11f994197"],["/tags/Swagger/index.html","dfc5f03696a40f602114ca135c7e832a"],["/tags/butterfly/index.html","adcee340543fdc1701468f72c82bca34"],["/tags/git/index.html","de3839c6b9bb9a2a96028ee7898b0c18"],["/tags/hexo/index.html","c35c429c84adabfe7d88ab9c9f451714"],["/tags/index.html","52e0d8b0a02a5bcb3fee812d785e6f47"],["/tags/jQuery/index.html","a0d6f962cfc205136cdbabb4bdcf4525"],["/tags/java/index.html","4dffca8eea23c2825d36b6cf1783309f"],["/tags/markdown/index.html","b6fec64dc748152e1b875e8047e79180"],["/tags/mysql-数据类型/index.html","2ab475b6d2ffd986beb253c1f912bc27"],["/tags/mysql/index.html","51a1e443891cce205b267533f65e5673"],["/tags/typora/index.html","24630ab829c532354d94236aac478922"],["/tags/vue/index.html","16e6032598001fe0afc59f22801eabea"],["/tags/享元模式/index.html","b0f6ad7a71459c394544b702c3d9c090"],["/tags/代理模式/index.html","d2a5ee573dd52e557ba231130fea290c"],["/tags/分布式/index.html","06bf27f641be03ecc24b9d69d66ed0ff"],["/tags/前端/index.html","956bddc1afd2d2960f3b391eef0359c4"],["/tags/前端/page/2/index.html","eb660166cefa313e870a4ea18315348f"],["/tags/后端/index.html","c64accedd0514e536f4acf55bc8d8515"],["/tags/外观模式/index.html","76e8904d0c65ea7c2f7e23a80385fc00"],["/tags/工厂方法/index.html","5eececb94205a70eb16ac28f3ad32096"],["/tags/抽象工厂/index.html","c0e9b006b11c64511aa9976eac2e8001"],["/tags/排序/index.html","87ad3c7e3ef5e32db90e8736f9c14920"],["/tags/数据库/index.html","c45d601688384be584f8626083fd0585"],["/tags/服务器/index.html","82b2055bafa304f652f99e8067b9e312"],["/tags/查找/index.html","6a8c7ae0649cb12d9978ef2c14a34725"],["/tags/桥接模式/index.html","82b8cdacce4cdd8bc1272169f9f09247"],["/tags/模板方法模式/index.html","cdc8a7fa960452faa86f7814c1aed1f2"],["/tags/版本控制/index.html","a3c89da8ebc496b2cf48010040d09d03"],["/tags/策略模式/index.html","6ea912f39d17650ec848909080dbaa28"],["/tags/简单工厂/index.html","bf6321ed8ca619c94d0c2f1a166b9ddf"],["/tags/算法/index.html","4506f68b11305163ba7fa6294c0ede33"],["/tags/算法/page/2/index.html","5f3893b91d47febb5055353787bfe406"],["/tags/组件化/index.html","0a960300d4f16c58eb2d68f2d5809822"],["/tags/缓存/index.html","b8caec87c677c897b21776f99cc6ec51"],["/tags/观察者模式/index.html","e277895678e8916fdc6e2fe9b860404a"],["/tags/设计模式/index.html","4303c0c836ac45a11176b22c2e7a3ebd"],["/tags/设计模式/page/2/index.html","b538c6ab9541a2ef2ba7d33814fdc88f"],["/tags/责任链模式/index.html","48980315cdc72bd509f402c04d0250d4"],["/tags/适配器模式/index.html","a440dbaf5edb96fe589c8a5e5dc55ec3"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
