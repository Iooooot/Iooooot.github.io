/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","98f5b38d277e08713f54bccf55ba1fc3"],["/2021/02/22/博客的搭建/index.html","89aa522d67c3b27ecbe579423c9c5318"],["/2021/02/23/如何使用markdown/index.html","747db4e0e2da18042f38c005424d7eb8"],["/2021/02/24/mysql命令大全/index.html","624b1a5f618d4eca3ca749288470fa69"],["/2021/02/24/mysql数据类型/index.html","75d45406354661871f66264e097d9a39"],["/2021/02/25/Git的介绍与简单使用/index.html","4b5d96f3930e4ce3122637d5b468407d"],["/2021/02/27/简单工厂模式/index.html","f9f4b02109aa17175728ad2254a9c57f"],["/2021/03/01/工厂方法模式/index.html","a29e884874cf3fe0cb39056baf69b8ff"],["/2021/03/02/抽象工厂模式/index.html","64e1e6d1a2b338d144fd981c6455e9c6"],["/2021/03/03/单例模式/index.html","53e5e4f4d6a72b0b268ef49e31e885de"],["/2021/03/04/观察者模式/index.html","bf3586f05367f25486091c88b2a189be"],["/2021/03/05/适配器模式/index.html","7a4cb8b13a916fa966dadcd48f335bd5"],["/2021/03/06/模板方法模式/index.html","766d090443514466cb9c10d94991b045"],["/2021/03/07/责任链模式/index.html","856b2b04a03e3d92b06fe12fb3f9017b"],["/2021/03/09/代理模式/index.html","f7b063a390fe9b9d638dc0eed5564c52"],["/2021/03/11/享元模式/index.html","ec675ffe9c16af08fc9fa344398f9a80"],["/2021/03/12/外观模式/index.html","ec2d969464b3827454f42e57e2c88879"],["/2021/03/13/策略模式/index.html","0fc9fd1420a63f367aea20df0482c204"],["/2021/03/14/桥接/index.html","660a8890aabcde4cb1e8c8b15844bea7"],["/2021/03/15/LeetCode-多数元素/index.html","2c1bf042a0e23346bc8e8a1bfdfd0898"],["/2021/03/16/LeetCode之汉明距离/index.html","287d401dacd569249dc144b79f601409"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","699f03780a5477bfea01d207d463a271"],["/2021/03/18/LeetCode之两数之和/index.html","e360333d09c7303e68157473e6e1bbaf"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","789e2926f39e75e7498ade360ad01030"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","4790cd3a9f07a87bf9f013f5b3e183c1"],["/2021/03/21/LeetCode之有效的括号/index.html","40fd34afa06acbbcf778f4cbdd07dc17"],["/2021/03/22/LeetCode之移动零/index.html","0def4c32763636e3b380bdabc76efb7e"],["/2021/03/23/LeetCode之爬楼梯/index.html","7009efc7860e928e686d14d659799878"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","370ff0a2e4f7b8cac5231c1ab64f821a"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","c92d2f10e22f05dc17505e7fe470b5b8"],["/2021/03/26/LeetCode之最大子序和/index.html","38519bafc03e6f8644d074d1a25147e7"],["/2021/03/27/LeetCode之子集/index.html","5b31c0f8c74d3f1bb6d0a2ce315e20c2"],["/2021/03/28/LeetCode之合并二叉树/index.html","9a9f4fe292a2e9d95a996939bc829416"],["/2021/03/29/LeetCode之翻转二叉树/index.html","ca09abc5519a0e82ca67f8c7bae60fad"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","d7852ecd5cab1ed4a85cad931f594d4a"],["/2021/03/31/LeetCode之翻转链表/index.html","dc3fa290f790d2b76648862dcf543300"],["/2021/04/01/LeetCode之相交链表/index.html","157de4b246479631c2412ae13927aff6"],["/2021/04/02/LeetCode之最小栈/index.html","f9dd671b65f7c7533acd0b8c3269960b"],["/2021/04/03/LeetCode之对称二叉树/index.html","fc6e781fb9e0d97a8e705fcca203d1e8"],["/2021/04/04/LeetCode之环形链表/index.html","f5d07b236d05473e5f38cb4654ce4273"],["/2021/04/05/LeetCode之二叉树的直径/index.html","ebd45ee20ad65b0d872fd1250f472b08"],["/2021/04/06/LeetCode之回文链表/index.html","1f69ce3b79adbb597a89dbce6cef1342"],["/2021/04/07/LeetCode之比特位计数/index.html","727a569fc4c18d7f7543917678189645"],["/2021/04/08/LeetCode之全排列/index.html","3b525734039f27a6377214c11d15296a"],["/2021/04/09/LeetCode之括号的生成/index.html","5ad7a63bba7a4803b7da9003af7f9e1b"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","ee6630e1a4988da2fe91475634c8268c"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","dbcca473e24d37b8853be57ee61a90ac"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","985bad2550853783ca43b7cd0b89ffbe"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","5c4f92f3f292f0309042ad0362f11c76"],["/2021/04/14/Mybatis/index.html","66a984981f9f0b6eb48cf98caca2a347"],["/2021/04/15/Spring-1/index.html","74c3bea164871d1016ee07cb64a63d9d"],["/2021/04/25/Spring-2/index.html","cdd4a9b62e887fb09b480b276d8ea120"],["/2021/04/27/SpringMVC-1/index.html","ed5db4a68257c3b604cece2fea4babf0"],["/2021/04/29/SpringMVC-2/index.html","67b0de1e374a16e0ab8ee3e1721b2733"],["/2021/05/03/冒泡排序/index.html","206687dbd87b4cd65edd7fa00bbcd102"],["/2021/05/08/选择排序/index.html","c6b1bc15000ee6c941223bba13cf97e7"],["/2021/05/12/插入排序/index.html","f3f6fda27fbf5f80ac47517c9269fe28"],["/2021/05/15/快速排序/index.html","b84933a2f3cd24af931e25d669961209"],["/2021/05/19/基数排序/index.html","52a3a55469a3ad1eb5421d1a1cfd2746"],["/2021/05/20/哈希排序/index.html","264fb4930cf77f244996b40160a97b63"],["/2021/05/21/归并排序/index.html","5be22104e73da2f21b03b1c6f5f157fb"],["/2021/05/22/二分查找/index.html","a09b4325202e396b966f4b7e767586d6"],["/2021/05/26/差值查找/index.html","8cb573a5043d2e624938fbae8bdd22aa"],["/2022/01/12/高精度大整数计算/index.html","d7c4e14ad3151a98d7b9af7e9a7bd530"],["/2022/01/22/前缀和/index.html","4bf9f84b5c94a46cb905b6eb33c09e22"],["/2022/01/23/差分/index.html","b5ee3d4a6842b431db69f70bf0195b39"],["/2022/04/04/MyBatisPlus/index.html","c295b5e276b438c5fb9f11454de2981f"],["/2022/08/17/jQuery/index.html","f96e7c768510f64f39799b01368b3573"],["/2022/08/19/JavaScript/index.html","f028f540f916d6558c7e98e164eede81"],["/2022/08/22/Ajax/index.html","6ac1cbef23535f32cb6141d900043e50"],["/2022/08/23/Promise/index.html","feede0e434a614e250d6cd23a75ea029"],["/2022/08/24/Axios/index.html","08d30ce37952d9450bb82faee7fe9492"],["/2022/08/25/H5本地存储/index.html","5082c67dd82adf29188d8618e29688d5"],["/2022/08/26/mock/index.html","73cf93341ddac5befbae24d5bdb74d18"],["/2022/08/31/VueJs/index.html","c3ae7a4487d7bb43e3f207b847317bdf"],["/2022/09/01/vue组件化/index.html","0507c65bbe81eccfc078deaa6e33d51a"],["/2022/09/04/VueCLI/index.html","29655c51176c8fe1a9c60e649fcaeb74"],["/2022/09/07/vue实现动画/index.html","11f2f652b8fa6b746994bd9a7c4999ce"],["/2022/09/09/Vue响应式方法/index.html","2d56ab2083ff66f7a0e708d746f074eb"],["/2022/09/10/Vue异步请求/index.html","79fee7f5aed928b2c0b25fdde7fd808a"],["/2022/09/11/vue-Router/index.html","954f6657c6365011464b6ab3db0a7ed4"],["/2022/09/13/Vuex/index.html","204132bcd530dabb095f9c8758024155"],["/2022/09/15/SpringBoot/index.html","749e6e54f8b1d4cbd2ac50680bebebd2"],["/2022/09/16/SpringBoot配置FastJson/index.html","e27354679107f7ca302417060b5940eb"],["/2022/09/19/SpringBoot参数校验/index.html","e61abb5624cc7e3f77ce5faf229df821"],["/2022/09/20/SpringBoot的异常处理/index.html","a455fff9d78c9b74d59a301f8024c41f"],["/2022/09/21/SpringBoot统一响应处理/index.html","1abc2ecd04732e1505426150e0a035f4"],["/2022/09/28/Linux/index.html","d992bef1cfe7bd29bfe42eb1613094a7"],["/2022/10/02/redis基础/index.html","395968d5071fbf934def767199b9e18e"],["/2022/10/03/Redis缓存/index.html","7403f89ad2d07a7a402c1195fab6d9cd"],["/2022/10/04/redis缓存穿透/index.html","a1baf5a36369d685b8e7c44d13c26454"],["/2022/10/13/Redis缓存击穿/index.html","000052547342ef49b403c4b62b8f84c6"],["/2022/10/14/Redis缓存雪崩/index.html","d2cdef70f5b4c4cc7fb95d1b604c6940"],["/2022/10/17/Redis集群/index.html","755c5b4e822a1bd04a3c8e4dda57767a"],["/2022/10/18/Redis哨兵模式/index.html","684fc4238b4d0c6db8483d7ca6d91fb1"],["/2022/10/19/Redis主从复制/index.html","2c798cf51aa99dc69d4c3f73f4de8f21"],["/404.html","59d34edc7a2d089a3918fdf9bb670ee8"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","471d9c2abfc326f882f0cf6c347c6746"],["/archives/2021/02/index.html","bf1a5aaf1646544cba2110176acaebcb"],["/archives/2021/03/index.html","37bd31ab9cb4f877091557cc79a9045d"],["/archives/2021/03/page/2/index.html","2cdfa816fb2e9d79aa6c3fcda5cbe1d8"],["/archives/2021/03/page/3/index.html","f12d50a711a6be16fbe654aae0c2c809"],["/archives/2021/04/index.html","32913eb159b33c362a05368e57e028d6"],["/archives/2021/04/page/2/index.html","fec9d9b1b85776f749bd8deb0cb96cfa"],["/archives/2021/05/index.html","03ec2f3ab863a20f69440c66581fab9b"],["/archives/2021/index.html","9d3506de41f975c31280191bc9cdc44e"],["/archives/2021/page/2/index.html","853275c9e38bc1faab19473bb1169a9c"],["/archives/2021/page/3/index.html","569b3b6d595cf506d84488d7b6422163"],["/archives/2021/page/4/index.html","ddbd7ead623dc16c278beeb16e65353a"],["/archives/2021/page/5/index.html","ab304e54a61740dd3a625647ce27a5eb"],["/archives/2021/page/6/index.html","f506b7d5ed9579a67beb93b943ae7982"],["/archives/2021/page/7/index.html","df8cbd8977e00fd8ea4e402cf0243d19"],["/archives/2022/01/index.html","3d9694829b7ca48a287b1210874d0b5a"],["/archives/2022/04/index.html","8cd96a8e4ff7b1158f7f2f05a07e71f8"],["/archives/2022/08/index.html","a5e9062ebbc260a14e95a3d23f6fcc35"],["/archives/2022/09/index.html","ed2fbec3b437009029cd809fa9ed913b"],["/archives/2022/09/page/2/index.html","e34a3a64e215a8d7f529585521f45f77"],["/archives/2022/10/index.html","82bc32917743e60df6dd961997564ee1"],["/archives/2022/index.html","bb37df6078345968690bbcdb03aae6ff"],["/archives/2022/page/2/index.html","4535bc70e2147b0aa4792d077c5d9ce4"],["/archives/2022/page/3/index.html","283aa514a97fa665997f9737a5ec66ab"],["/archives/2022/page/4/index.html","a8abddf762f44bc2abfcbef80b32b0f1"],["/archives/index.html","460ac7f2b54f71e73d9381161f3cb2d9"],["/archives/page/10/index.html","0449bff608a94cf4fc6d864b1f34a764"],["/archives/page/2/index.html","012cb365a96c2714c069cedc24ce13a6"],["/archives/page/3/index.html","e21a0f8eaa843a2866aa571c98f765ee"],["/archives/page/4/index.html","14c4c024ff99102c513c1ef920b4105d"],["/archives/page/5/index.html","dced4496adc967a1d35f283dca65ddcc"],["/archives/page/6/index.html","f911cf70d1daecc2ede9972a0b02b7cd"],["/archives/page/7/index.html","64f4edd02549131381ce0546e0d22c33"],["/archives/page/8/index.html","9aa2f4097aa1a8facd0163ca8bc805d2"],["/archives/page/9/index.html","a850945ba42dc2beeab5d1999f8c831e"],["/categories/LeetCode/index.html","f6b46e5b9c96cf8a755f6e0ecb6f229e"],["/categories/LeetCode/page/2/index.html","2825f08cb85c3cda9618d062715a5f14"],["/categories/LeetCode/page/3/index.html","825825f50c458c1c72291f90064901c0"],["/categories/Linux/index.html","07e2c9493d90f3ce3a6817e3f0c9658a"],["/categories/Redis/index.html","a50bee90791345cefe2b53dcd7081ccf"],["/categories/SSM/index.html","dbf087560859cf9e5f4419dc0969f73a"],["/categories/Spring框架/index.html","2ab5c8507a23beeebb292026c01fa8b0"],["/categories/Vue/index.html","889c9f31247831714cd69af6a2b4942e"],["/categories/index.html","7eed0ee8907278becf8ea1a68d57b0b8"],["/categories/前端/index.html","8f9985ea84a8dc2152905c20437d13f0"],["/categories/博客/index.html","4f21ab84a3e840df6cc0825e9f54f292"],["/categories/学习路线/index.html","c7669b1eb0101f907e66114185d6b896"],["/categories/工具/index.html","a036fe18ff142cadf288354dc8185b6a"],["/categories/数据库/index.html","f46661dd637566baf79dacc036fe61d7"],["/categories/笔记/index.html","e577d30094134a3e69aba2f9a41de567"],["/categories/算法/index.html","4666cf804978a96ffa14403dee999611"],["/categories/算法/page/2/index.html","20c88b88ac50613dc0f4027bcfcadb06"],["/categories/设计模式/index.html","307ce2865a8718300719b7e6f26f1604"],["/categories/设计模式/page/2/index.html","e097d6d5f455ec86b874a51c8b1db936"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","d57aa807f0d3dd7d79bdecdcea35d330"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","c856d9f499e215d2d58a042819255fa9"],["/messageboard/index.html","e33d3ba38a8f8ddfcc84828d40a1591a"],["/page/10/index.html","288e62f93090937c77419c618419bf53"],["/page/2/index.html","67f72f691099653a25bf9474588a6dc1"],["/page/3/index.html","8767db4cae0cb70d39f292198417e69a"],["/page/4/index.html","8352e670bd8fd418db3ac50a187909f4"],["/page/5/index.html","cbf89dd14bd87be2c1c848f0e33f41e8"],["/page/6/index.html","e3bc38625f3438af44f4695ad74dfeb7"],["/page/7/index.html","280f909d1f10ea537228314f4e06ee0f"],["/page/8/index.html","7035f9bf1afb283947ef09934b9c62f9"],["/page/9/index.html","ef9413af49f90ebe0fe5c511bbb9c876"],["/sw-register.js","a9d846e5145b775d0a583682c92eae33"],["/tags/Ajax/index.html","f937196c422785618344eda6f8be029f"],["/tags/Axios/index.html","bde4c6b47be1cb2e1a88b74fa0020905"],["/tags/H5/index.html","e630e15970b5b7d4b1e3dc0cf9f6ebf8"],["/tags/JavaScript/index.html","05414add560e404123375b6876902c33"],["/tags/LeetCode/index.html","7da87d52fa685df6893073bbaa37fd9b"],["/tags/LeetCode/page/2/index.html","ffc0e69a6cc418b927f8e5f0f10a8198"],["/tags/LeetCode/page/3/index.html","102febba281917c3f741794b652a1ac8"],["/tags/Linux/index.html","3f24204700de37ce51507b3cad15c4b5"],["/tags/Mock/index.html","5cff12cd8d77c182622d3ad3f7a94721"],["/tags/Mybatis/index.html","a256a2c9680b20a74af4c00762e55fc7"],["/tags/MybatisPlus/index.html","879fba779c7a5500fbaf28910f6c6037"],["/tags/Promise/index.html","4d493f08e7bd6e2a0fe69e333e837f55"],["/tags/Redis/index.html","d7958aeb17164682b0e75f360048b908"],["/tags/SSM/index.html","74894bbc241025f044923b4c57980033"],["/tags/Spring/index.html","ff79f8733d3a45f79f16d43f29cd21ed"],["/tags/SpringBoot/index.html","d2442e7789f8084755a093f0929e31ce"],["/tags/SpringMVC/index.html","500e715fc5251e70ad5175e588e4ad57"],["/tags/butterfly/index.html","d2ee8f6eed51aa5234e7a0a5e612a7c8"],["/tags/git/index.html","b65c971ed32ab71363166ecec8caadcd"],["/tags/hexo/index.html","8b980b222555023a066e567d87b7e664"],["/tags/index.html","2e6e3d0c525f5df26c73fec6fd7bbbab"],["/tags/jQuery/index.html","7e3d6febb78d2b0c82ddfc5bd36259b3"],["/tags/java/index.html","12d307745f7f1133f24f4e2e389ddb55"],["/tags/markdown/index.html","445f490f0e59b12c4119b3fce51dd186"],["/tags/mysql-数据类型/index.html","76573ce168302a7e92ae8eb64e674f60"],["/tags/mysql/index.html","f8e91b89fec1dee86cd290e6b05c3154"],["/tags/typora/index.html","0593ad1a4bfc4a9f9e562f655f9dc73a"],["/tags/vue/index.html","d90d9a3c52b3d345b2c650d237b94da6"],["/tags/享元模式/index.html","87967769c0d927e9b6e3209141d37ce6"],["/tags/代理模式/index.html","70959f9bff420b05615d3a2dd0d5a32e"],["/tags/分布式/index.html","3ef5f2d906fe92fd14804ca220e79981"],["/tags/前端/index.html","836334b17569982e1637deabdf2bbf10"],["/tags/前端/page/2/index.html","826fa75812213ec790bd7713b19ba7d1"],["/tags/后端/index.html","5da0c7312caae9702b743ab6c0fcbce7"],["/tags/外观模式/index.html","a33a57de43b6c741fa9593a8b456683a"],["/tags/工厂方法/index.html","ddb2ace84da77515e7751317e0e020f4"],["/tags/抽象工厂/index.html","f54a62836ce1f7ccffcba2ab5eddafae"],["/tags/排序/index.html","dc36e9a1f0640978e003ff4cfc83033b"],["/tags/数据库/index.html","b8d91a1ecc683e3e5b8216bca776a510"],["/tags/查找/index.html","5559f422a9d3173e7cf90e90c2031cd6"],["/tags/桥接模式/index.html","2cbbad1c1737d5d640aec0752bb54f1e"],["/tags/模板方法模式/index.html","0969eaa0e9c05e9ab39aad6e65df8f18"],["/tags/版本控制/index.html","6f2ebbb49b721f1d02a385aab97a1675"],["/tags/策略模式/index.html","4c5276819c79b4ecfddb1f7f8a53e355"],["/tags/简单工厂/index.html","040188deca3118695b494bb36affe3c8"],["/tags/算法/index.html","b0a1a6de46fb0890d77b014d74ef47a7"],["/tags/算法/page/2/index.html","92b0e0c3f553397b1c3f79a7e2a241bf"],["/tags/组件化/index.html","c7b26b9edf2a536e118a1a305c8ede30"],["/tags/缓存/index.html","1e3acfef084b795e23aec0563d5b8a1b"],["/tags/观察者模式/index.html","b6021472bf6530834c72d4c2f932bdba"],["/tags/设计模式/index.html","9d67c8eac8b2fd1856e855ff929f6384"],["/tags/设计模式/page/2/index.html","be83c7485761758b73dd9b9c2c209bdd"],["/tags/责任链模式/index.html","60b13957ee8d846c8adc2c751b9fdbbf"],["/tags/适配器模式/index.html","e7d52ae5b4c8ae21ee2858c8d4d6086d"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
