/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","45ad26ee52bdd5a7c6584dfadf7fe0fb"],["/2021/02/22/博客的搭建/index.html","2aa07ffe73edb1f5773d02722ac23c42"],["/2021/02/23/如何使用markdown/index.html","de6228404f5683d8e00d91cd4fa03260"],["/2021/02/24/mysql命令大全/index.html","22ac04c0dc55b21dc6fb0541f0b37a6f"],["/2021/02/24/mysql数据类型/index.html","18b17de0e997c46479c5baed6d16d93f"],["/2021/02/25/Git的介绍与简单使用/index.html","6502689d4700a8442351385f13e1adce"],["/2021/02/27/简单工厂模式/index.html","d3fd6870366369d15e7dc43ea02bf0be"],["/2021/03/01/工厂方法模式/index.html","e87e4683c94f68f86ce408f26cdadadb"],["/2021/03/02/抽象工厂模式/index.html","eae40079fe418d28c97ced671b139321"],["/2021/03/03/单例模式/index.html","212df8ca801f693d528ad3ee051f7b55"],["/2021/03/04/观察者模式/index.html","16d3f54f8e49997019ef925e1d225d5f"],["/2021/03/05/适配器模式/index.html","924fcb4c84379731cbac12b860f4ce25"],["/2021/03/06/模板方法模式/index.html","b17021f533e964490a4cf9869d994753"],["/2021/03/07/责任链模式/index.html","644c583a8fd43bae91726ed1129870de"],["/2021/03/09/代理模式/index.html","e5758557a1e072a3da8a2bedcb5b039c"],["/2021/03/11/享元模式/index.html","9ea0c19e359a3019cd7daf6a9164767e"],["/2021/03/12/外观模式/index.html","5854b7c6eb0ad70387e972a52ebd5003"],["/2021/03/13/策略模式/index.html","cb157019258126df4e5126225813bed8"],["/2021/03/14/桥接/index.html","a3724f38093792f26061c4cfb099a26d"],["/2021/03/15/LeetCode-多数元素/index.html","fe9e30758b65bde918dd5b5cc189cdcd"],["/2021/03/16/LeetCode之汉明距离/index.html","750794e7c28df2c5bfcd11fc200408d2"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","bc8d234fe537f5e898a02d5660b53273"],["/2021/03/18/LeetCode之两数之和/index.html","2521ad420d14765c3729ccda1ced52ed"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","d93f23323ab3da5446308ba346e2ad39"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","939b877faa9047c55c2250d06422c041"],["/2021/03/21/LeetCode之有效的括号/index.html","d4b09f1e8223fe8dcb7252c2c8715c0a"],["/2021/03/22/LeetCode之移动零/index.html","a73cfa66c41d91db5b37e1dbc6f641b4"],["/2021/03/23/LeetCode之爬楼梯/index.html","749de97c93abed29c1438bf1a2da7947"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","82a342ce357a00f57b3bed87b08c5ea1"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","a4a96ccb2df66f3c10510b6e23eccff3"],["/2021/03/26/LeetCode之最大子序和/index.html","8ebca2b251bf0da5f25449aa54438970"],["/2021/03/27/LeetCode之子集/index.html","4bf998c8d968e26afa4a01fbd7954d18"],["/2021/03/28/LeetCode之合并二叉树/index.html","5b1a68e23479da99fb58f54326afaed2"],["/2021/03/29/LeetCode之翻转二叉树/index.html","9709ef5c643e1429ddc888da33c6652a"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","eaf3c53e8107b3e60465dd6293ac3c10"],["/2021/03/31/LeetCode之翻转链表/index.html","12afa225b5f167254d7283fa8a852acf"],["/2021/04/01/LeetCode之相交链表/index.html","674492add8cd71f2fb2b07bc95097f29"],["/2021/04/02/LeetCode之最小栈/index.html","0112aceee6a84de9caeecedc89451f62"],["/2021/04/03/LeetCode之对称二叉树/index.html","496e06d4f66d0ca22839ef27334fb065"],["/2021/04/04/LeetCode之环形链表/index.html","f796dadd35cda82ba65f29861be2c33d"],["/2021/04/05/LeetCode之二叉树的直径/index.html","30266bf0fd41a53d55fb34a39fdb41c9"],["/2021/04/06/LeetCode之回文链表/index.html","36e70473b7352e536ad4f7bb4d990373"],["/2021/04/07/LeetCode之比特位计数/index.html","7a85256b4219db77074f0e518dbd9aa4"],["/2021/04/08/LeetCode之全排列/index.html","6fbdd136c825c2f28619c7e47a9a34eb"],["/2021/04/09/LeetCode之括号的生成/index.html","3027c5f70a71d016ca24337bad1ab75d"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","c3ede63c3734b5494a947dad3b6eef6f"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","30c16d691ca4b153b7d5f541b30c9d56"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","7ff35c5d49d5f3a59cd8e3d997979bc8"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","76d5a721ed6d42a2a42b7719412ae776"],["/2021/04/14/Mybatis/index.html","9fd05cdb00f4fe67234b4ef42f23d849"],["/2021/04/15/Spring-1/index.html","543a31a9a0f722405d3bcf7238807520"],["/2021/04/25/Spring-2/index.html","6b4acbb78202664eeb3725c5957d844f"],["/2021/04/27/SpringMVC-1/index.html","ae43d2ae69f1eb0f6ac97c6b897f1e9d"],["/2021/04/29/SpringMVC-2/index.html","df4f6ffd655bedcf6143b11a2155aa96"],["/2021/05/03/冒泡排序/index.html","bb985c38b58ef87ce5d5c0e274497d91"],["/2021/05/08/选择排序/index.html","25cd9ea35adac684871aee7db92db0b2"],["/2021/05/12/插入排序/index.html","776f5b2c94e436ed39f9e5a9998c3940"],["/2021/05/15/快速排序/index.html","a62eb32d976ed90fc8e5537ceb97f440"],["/2021/05/19/基数排序/index.html","49c9212c879e8a2e25700392428258c6"],["/2021/05/20/哈希排序/index.html","bc8258f259e4f153a17023ed4a8abbca"],["/2021/05/21/归并排序/index.html","e9dd0dc8db2cad95fd1d654b0a9432d0"],["/2021/05/22/二分查找/index.html","4d657b0cb4a81025a564aeb54873bb10"],["/2021/05/26/差值查找/index.html","34cb5e4482009a8d51b6333ec68b6419"],["/2022/01/12/高精度大整数计算/index.html","cd8e10cab7ddd8c70a1be437bf339a64"],["/2022/01/22/前缀和/index.html","49855ff1cb7830d8ff72e22e61a6b853"],["/2022/01/23/差分/index.html","1afb7943039b79a16720fa87be84b97c"],["/2022/04/04/MyBatisPlus/index.html","517e819d8ec9c6be359e483314c774bd"],["/2022/08/17/jQuery/index.html","257e5d1984d800269eea11a0689637f3"],["/2022/08/19/JavaScript/index.html","706140d5872b0b37459c072df5f9ade7"],["/2022/08/22/Ajax/index.html","d0a8b0aed48759de3866355fe4a7a260"],["/2022/08/23/Promise/index.html","5f9dd0f47df2a16c31319025695a0d14"],["/2022/08/24/Axios/index.html","97dbec6c095adb6dd558e985395197c4"],["/2022/08/25/H5本地存储/index.html","1a394b09bbe9d213afa08a3085411ca5"],["/2022/08/26/mock/index.html","91bd5782ba147cfba218e74b08c0b248"],["/2022/08/31/VueJs/index.html","400978ba6083a3dcd35f9be1fd687dc8"],["/2022/09/01/vue组件化/index.html","36e02f7007cf51e806aee63a21d8cebd"],["/2022/09/04/VueCLI/index.html","1b88eaaad8099984dac825654730c5cd"],["/2022/09/07/vue实现动画/index.html","af689279a0ec4a2c762374ea6f7fad39"],["/2022/09/09/Vue响应式方法/index.html","194dfb6c490dd36386eefedc30ffc0c9"],["/2022/09/10/Vue异步请求/index.html","2b2cc46da457c52d4270faa52574a212"],["/2022/09/11/vue-Router/index.html","e31f64a1d812da374c411fd8ebdbb3bb"],["/2022/09/13/Vuex/index.html","9c259af69f8b93864170a5fa2b7543bb"],["/2022/09/15/SpringBoot/index.html","c56bd8a253f6524e5ebda038db7bd39b"],["/2022/09/16/SpringBoot配置FastJson/index.html","a234d506b89b3ab3df8d28e741f67b45"],["/2022/09/19/SpringBoot参数校验/index.html","ee47aaf47418aae011c74aa84d3ebfcc"],["/2022/09/20/SpringBoot的异常处理/index.html","7e5e41ab8f33ba5ee6bdc0193ea6fa1b"],["/2022/09/21/SpringBoot统一响应处理/index.html","60180406fd0152fd60198ec764e91c5b"],["/2022/09/28/Linux/index.html","0a137aa782b6405db79307b97f28c283"],["/2022/10/02/redis基础/index.html","d1b75923d8785b3e797cac09dbaea4b9"],["/2022/10/03/Redis缓存/index.html","4cd957f116c1d5ff81fb421e9e1ed594"],["/2022/10/04/redis缓存穿透/index.html","3727b7876f43aed9c6a5f81e16d5760d"],["/2022/10/13/Redis缓存击穿/index.html","7b5f179414f04149341eb54ef8f3931a"],["/2022/10/14/Redis缓存雪崩/index.html","ff6121bd75f5b9d007865089465655f2"],["/2022/10/17/Redis集群/index.html","54ea4adc4e4ac2295ea80ebd744031b7"],["/2022/10/18/Redis哨兵模式/index.html","74c35e2862e47db9fcc3b043266c4e66"],["/2022/10/19/Redis主从复制/index.html","81070923b78e266ff575a1a6b1a766ff"],["/2022/11/03/Spring-Security/index.html","edb5dca80812990bf7c2023f487d8e92"],["/2022/11/08/SpringBoot日志/index.html","613b4a896b45ba1ef9f3ebf1a729e390"],["/2022/11/11/Swagger2/index.html","d26a6a7b99f277994ccfe9f39ad80c5f"],["/2022/11/21/Nginx-一/index.html","337941616a449b158d21352e77b2a30c"],["/2022/11/23/Nginx-二-代理服务/index.html","c6aada21ca52c3df33751a9598798856"],["/2022/11/24/nginx-三-负载均衡/index.html","ad418459afa4785bfa239e86865fd1b1"],["/2022/11/26/nginx-四-缓存集成/index.html","7967f433f80bc3da6d7bbbd51a49a50c"],["/2022/11/28/nginx-五-动静分离/index.html","651414a6856ff0a763ceda89b15e3256"],["/2022/11/29/nginx-六-制作下载站点/index.html","e5be60c06292bee2d89d38f18b7f5f9a"],["/2022/12/06/docker基础/index.html","ceebf368c944db1bc692ffcb849e300b"],["/2022/12/09/Docker高级/index.html","91c48de43e00362eee2f055cc0316946"],["/2023/01/04/MongoDB/index.html","d2a67c86035edda9670005e647de11cd"],["/2023/02/05/消息队列/index.html","53de2c974b61e2c4521db63251c49b46"],["/2023/02/12/RabbitMQ集群/index.html","8b8a4393787e4d327a02dcff950ae7f5"],["/2023/03/10/CICD/index.html","4158c94804e0a7740f1625f94b94be15"],["/2023/03/11/ElasticSearch/index.html","60bfbafe2486f3a6f1e14ea7a2f7e810"],["/2023/03/12/ELK日志平台搭建/index.html","0ef9657911cd673ab202f17ef8f37660"],["/2023/03/13/NIO/index.html","373684a37af4505862b6ac3164a4998d"],["/2023/03/14/Netty/index.html","2897cf2d38a22a856da8b984b4a68228"],["/2023/03/15/SpringCloud/index.html","5f486981567f30b4cccd242b5c617a19"],["/2023/03/17/分布式系统认证/index.html","dc8afcfc0ea57315bd7540dd04903237"],["/404.html","73b60d35d4e41551065e73509f9bdf2c"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","e8456373ba6697ff80a12b9e2aab0cc9"],["/archives/2021/02/index.html","c3af8e232c8a79ea02b27dd1f57d1615"],["/archives/2021/03/index.html","83f72921bf5a9ced25a845a2c23d72fc"],["/archives/2021/03/page/2/index.html","d993f33276fffc86953a791cf407bcc2"],["/archives/2021/03/page/3/index.html","8c0e38a7b7e56bfe28cfcd3d08fbb76a"],["/archives/2021/04/index.html","25b630a7393ef74722bfc26713c0a8f0"],["/archives/2021/04/page/2/index.html","548592585727977ff62ad4bece09be0d"],["/archives/2021/05/index.html","27cb79f2a59602a0f189b4027a7d82f2"],["/archives/2021/index.html","005d159efba44cec5e5b398c1f1d1fa2"],["/archives/2021/page/2/index.html","81fd1e825e52e80f907802f9f93c8a0e"],["/archives/2021/page/3/index.html","0ad1de20250b1a84e7ae4acaf50d7a8d"],["/archives/2021/page/4/index.html","3341cf3b14321f0964df33e5c273991b"],["/archives/2021/page/5/index.html","a0cea0edc8fa130477deab238ced8595"],["/archives/2021/page/6/index.html","27ccfaa1431dc20855b3d516222c107b"],["/archives/2021/page/7/index.html","baeea232d9582399645653c62b819def"],["/archives/2022/01/index.html","9dc478053227af17501eec0d82744787"],["/archives/2022/04/index.html","ad107af3de9c3567dc6b99bf180301bc"],["/archives/2022/08/index.html","68f3b8f1e0b88842ce9cd52b8537e8cb"],["/archives/2022/09/index.html","831881284cb6bbd61eea5d2bf94696de"],["/archives/2022/09/page/2/index.html","c6d5a644853c8692dd6050c310ffadc8"],["/archives/2022/10/index.html","b29cc28f9123dac45ff94892d431f539"],["/archives/2022/11/index.html","4dd0a29e4bd0a062cae76b3567e1325e"],["/archives/2022/12/index.html","3a7e09d4f6ca1f994b35acb6c1299982"],["/archives/2022/index.html","112d59fcc1f1b51fd7a7a5ee3b22659c"],["/archives/2022/page/2/index.html","cc5b53215c84f2e0a279af45e1c1d5c6"],["/archives/2022/page/3/index.html","03bc683a7eabfa4792fa8923f4c93d14"],["/archives/2022/page/4/index.html","09ae3979e62980ff4e3ab793eecd43b3"],["/archives/2022/page/5/index.html","cb94b724d3eb2b7bf99ac982ab65ed03"],["/archives/2023/01/index.html","e716d1fe13351839ebb8c6cefc43f994"],["/archives/2023/02/index.html","f3583e4f4277ca55d25b0b977dc67eae"],["/archives/2023/03/index.html","a72a4018a17b8566e7ef05dde52aed81"],["/archives/2023/index.html","14ea09f48cfee3c8cce751654199f6ad"],["/archives/index.html","e8b2b556818d7f0b11e8a90bebf1f17e"],["/archives/page/10/index.html","02b8914bb15548bdac4401be7623fc1c"],["/archives/page/11/index.html","c50ddf8d3043dacff9dfd1ef9250beaf"],["/archives/page/12/index.html","0b4558fe65a8267f46483fadfbb4d916"],["/archives/page/2/index.html","d11e66efe501dfcea8fc7e077904ce3b"],["/archives/page/3/index.html","68e1a50761c99d8e1f64ef1af9c6a87b"],["/archives/page/4/index.html","871cdde75ae9600ca181b7498c828596"],["/archives/page/5/index.html","c7f9873f0bc2543177d3180a4762b26b"],["/archives/page/6/index.html","7ff9c4baabb82ef1c43d6798ed7d2c54"],["/archives/page/7/index.html","190199205df5f5b1425faea1977e7b55"],["/archives/page/8/index.html","d7186b079365dedb1016ba30246b9598"],["/archives/page/9/index.html","66c4ad3b2773f63736850e3417c44b30"],["/categories/CICD/index.html","ac82a1e366c21bb677d18b317c9c6290"],["/categories/Docker/index.html","526b8bd245d20cd0ab2590f928b04497"],["/categories/ELK/index.html","b1647e3cd781fcf01b00b75428c69926"],["/categories/ElasticSearch/index.html","761805f82d0fc18ee8511f0623129b28"],["/categories/LeetCode/index.html","9b0af5976512a1f0ffef72822fa69128"],["/categories/LeetCode/page/2/index.html","ae94897f81ca57495762d63a8ca4e007"],["/categories/LeetCode/page/3/index.html","be4f3ce0b911dad6cc0ccf15c7297c99"],["/categories/Linux/index.html","49509f54c2b426fd24e4b58742baef82"],["/categories/NIO/index.html","312762c66c6a32eb998605e6106e3c39"],["/categories/Netty/index.html","3c5a5efcdbbb69f5f8b39edea345755c"],["/categories/Nginx/index.html","82912cce1f8c7e7c0c9dd1d9b49ea276"],["/categories/Redis/index.html","a26c5cf698c56f6904c7fbf164cab8a7"],["/categories/SSM/index.html","caf18e75257190effff85ddfa065aa62"],["/categories/Spring-Security/index.html","f3302bad48510357c1666ff7a1f92a0b"],["/categories/SpringCloud/index.html","95bc743b8843973dcf7094a27f12d053"],["/categories/Spring框架/index.html","b014851577a9813a4af6e9bb6fd5cab2"],["/categories/Spring框架/日志/index.html","bd9b945f313a0aceef6397cea7c915ea"],["/categories/Swagger/index.html","d1d9c31879d944143985bff09113aee7"],["/categories/Vue/index.html","d4ffe112735d95cb07bf4e9e0c6026e8"],["/categories/index.html","5157560f5ec87bd9b1f3d01c96cab50c"],["/categories/分布式权限认证/index.html","07049a5f44dc0fc885c920dc90ecd395"],["/categories/前端/index.html","5d4562cd6b3423cee11236f781d49436"],["/categories/博客/index.html","92668f9480be6cb504c1401d84be0533"],["/categories/学习路线/index.html","5dade27d446750e387bd400e268585f8"],["/categories/工具/index.html","5c67abffe59fc7ca371caef5ecb477c7"],["/categories/数据库/index.html","2b0a057e07d612984b4832fd9fbbeb56"],["/categories/消息队列/index.html","ad603587657e51610e72dca327c4fe10"],["/categories/笔记/index.html","85af4158c866fc469c4e4864d9e31dc0"],["/categories/算法/index.html","a5247fffa565325792494d3764ca5a65"],["/categories/算法/page/2/index.html","14996a3b903ea104c18d4cd0472b8cc4"],["/categories/设计模式/index.html","7bb9d5727b6e9dbe72823e42ddc8e19d"],["/categories/设计模式/page/2/index.html","c26c96ef490a17e76b79b669bb4a8e99"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","653549b3fd00a2448031e5cc14137779"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","87760f1efe7ba34bbbcb864181808970"],["/messageboard/index.html","fe6429a3f8eddb6d27c63431ee496242"],["/page/10/index.html","4d89bd1f1d8f36ab86631a1b07ef29b0"],["/page/11/index.html","8ab28d86aa1461a62dadcd230f7c6bec"],["/page/12/index.html","e1218101e978ef05e12fbf189904df81"],["/page/2/index.html","5b5f8b2b3d68774d02468b4e7e5a7c8a"],["/page/3/index.html","2da255c17dfb6c88240428edc29d7d40"],["/page/4/index.html","f2cc391888339c2b929c9594fa708239"],["/page/5/index.html","985aa43324ab16ef8c76873062324a06"],["/page/6/index.html","a58dc13ab606dc2f99d006f6142ecee8"],["/page/7/index.html","cb36eb813ea237a842c793df42374b27"],["/page/8/index.html","63584a0bd36c4df843da6acc3be93346"],["/page/9/index.html","0b31a026703d09424078ff5278e9a8b1"],["/sw-register.js","3a3701cf453eaaf63e0d427d8b1b8358"],["/tags/Ajax/index.html","552a447ae0cd649ef73d1b2eef3107be"],["/tags/Axios/index.html","3112bda5f13f2f4e3f74be7f193d7001"],["/tags/CICD/index.html","7ed487f3f51b391af2b26bdbbf791b7c"],["/tags/Docker/index.html","afb6a5b2b06bd1e0ea432c643f999f48"],["/tags/ELK/index.html","2e7d39c8213368b2d6dbacd9af6f8953"],["/tags/ElasticSearch/index.html","cf92ae51fee55bd5bbfeb743c0e0cb20"],["/tags/H5/index.html","9c0813814936c0152f1a23c4111b65fc"],["/tags/JavaScript/index.html","cb17d0233418c6e9a1b714b93cac730a"],["/tags/Kibana/index.html","befb5db223edcd81e0e7316cea3fd93b"],["/tags/LeetCode/index.html","5db182b1ffa07172cac72d7a3b6653c0"],["/tags/LeetCode/page/2/index.html","0a23189bd2f7992958ed9e66b27ff7db"],["/tags/LeetCode/page/3/index.html","bf29396403bbe5a0c70cd6ee6a5ec6a5"],["/tags/Linux/index.html","48b897adcadc7eacb8b7deeb8b203884"],["/tags/Logstash/index.html","4a31a8a57686e30c71122b47981fbe2f"],["/tags/Mock/index.html","e8570b36cc1ba5eed733d9b7578f79e2"],["/tags/MongoDB/index.html","394189e792bed0a2054328b67f0a1178"],["/tags/Mybatis/index.html","d7d5da4104a3bee194bfb4eae21e8b0c"],["/tags/MybatisPlus/index.html","187afb6caa8f5a93adb22443f6ff8d23"],["/tags/NIO/index.html","53b67dc3037e38e74b9e3c1f87c4dab5"],["/tags/Netty/index.html","0f4c6e6946c608c491efab139ee9bedc"],["/tags/Nginx/index.html","d8df4ec04ce4cf90dc06092ab54a1476"],["/tags/Promise/index.html","2bc0391c6cf9283b89986b48f7e45bfd"],["/tags/RabbitMQ/index.html","8a990d29d0653d631b7c11445bdff95d"],["/tags/Redis/index.html","62595c5fb11a9fa8f253af62d98bfaf8"],["/tags/SSM/index.html","5fdf790aaedbd0250a8db9042fc26c2b"],["/tags/Spring-Security/index.html","385efe4f8698dc47ed30066bebb2c468"],["/tags/Spring/index.html","420e9a610150bdc9a2f6d111a3324da8"],["/tags/SpringBoot/index.html","65dd6f150e6b1e3f1bd2052e8780b2fd"],["/tags/SpringCloud/index.html","f1173ce846668430c1148fd81cfd5a49"],["/tags/SpringMVC/index.html","92d4ee513a1b569c25bd363f1139735f"],["/tags/Swagger/index.html","00f3a54b1b5f1192a77c7fad6e430323"],["/tags/butterfly/index.html","1411439a8ee544d35d141bd17bc6865f"],["/tags/git/index.html","779b7910c9d2889dc42f6b8e065d69e8"],["/tags/hexo/index.html","7250b7343060a86404cd32537cb43e20"],["/tags/index.html","3a114ac37b8fa7531fe32711e77b751b"],["/tags/jQuery/index.html","1dbf8357af841e5662ef5763ac2d5dec"],["/tags/java/index.html","a66219ea98387df962cfc42dd775e8ef"],["/tags/markdown/index.html","2f196eeebddb424bc4ef5b9bec50e3a3"],["/tags/mysql-数据类型/index.html","e8841e13faf9d768a320ad7d3536e3c1"],["/tags/mysql/index.html","dc99e498b4b90125de47b79dba0d6a15"],["/tags/noSQL/index.html","3266527b4bc4bb7e92b7d688606b0a0a"],["/tags/typora/index.html","cc7d33744c3780640b03706eb414d8a4"],["/tags/vue/index.html","62771a32da4c20c3dc380771bcc7e05e"],["/tags/享元模式/index.html","5693a20c8fa12702421cb20589187111"],["/tags/代理模式/index.html","6855f7fc5e64ee75596b41b5dc9745f1"],["/tags/分布式/index.html","e3f5f4c30e92b8fffd89587cb908b762"],["/tags/分布式系统/index.html","8afeac3865e4d88d4beeff355307be10"],["/tags/前端/index.html","e59ef4ce2c6540df777c89f4fd5d2e42"],["/tags/前端/page/2/index.html","2c7a0f3ff4a8f9ffb5072717bcd05911"],["/tags/后端/index.html","98292e487ea45817a0c3a435d1f6c847"],["/tags/外观模式/index.html","1db387f63547b336c86efb8f1ae66a1a"],["/tags/容器技术/index.html","7cf416fa30e62b55d7ddc09dfa04b88b"],["/tags/工厂方法/index.html","9b7109ae07a2cf03ff267627aa7bdac1"],["/tags/微服务/index.html","e1ecb5b2fa77800c91a12ad97073eef0"],["/tags/抽象工厂/index.html","8e993de9735ba469795d2a6776063f8c"],["/tags/持续集成持续部署/index.html","e9e39baea5e4e636b1097f3ad61a9a69"],["/tags/排序/index.html","3b69b6b7328f39640b393b6a2405ddd5"],["/tags/搜索引擎/index.html","173bffc5dd0827f5b84faa0344a6516f"],["/tags/数据库/index.html","420b54b2288058d579ebf800d5c73368"],["/tags/日志/index.html","2f29e59f332f34387d6eceae73d30e6f"],["/tags/服务器/index.html","578dc57e1e84fed03d85796e92325ed4"],["/tags/权限认证/index.html","abe9c5d8c8995eb9e3fb5a5cc0f466c0"],["/tags/查找/index.html","e46b033ae738ba53e10f307fd2cf6e25"],["/tags/桥接模式/index.html","11a282d7bbedf31bfad469a4825329a0"],["/tags/模板方法模式/index.html","8ccefd769dc90927785c2654c0d63208"],["/tags/消息队列/index.html","004403dc69d56ba1fa85a310aff56d6c"],["/tags/版本控制/index.html","6a8088d25b815650845e016c39ae08f6"],["/tags/策略模式/index.html","04ff9aaf92ca26973158c9f1bad70e86"],["/tags/简单工厂/index.html","1c48ee0eec96bf20f0e7b0a28d0b5110"],["/tags/算法/index.html","38e4f8112a194a658a49dd4d884ab3c5"],["/tags/算法/page/2/index.html","c13f2c7e81c4441e8a7d550dadc8f00c"],["/tags/组件化/index.html","8f17871f52c324bd504088ae285ac3d5"],["/tags/缓存/index.html","8656325709bd076efa5e5418c07ea676"],["/tags/观察者模式/index.html","5493db0bbedadaf8bb3bcb9f78dd580a"],["/tags/设计模式/index.html","06226a40757c4113e6ca0d9c0861d68b"],["/tags/设计模式/page/2/index.html","35029b43f3a2d64864c8c16fb7106b27"],["/tags/责任链模式/index.html","a331c621fef8b047682f26c3a08d9b9c"],["/tags/适配器模式/index.html","14044b8ba8f59c0dc7233ffa5e27c519"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
