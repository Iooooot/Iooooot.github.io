/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","b097c32575e1b9507701f7ae69adb638"],["/2021/02/22/博客的搭建/index.html","4b29d8082f03c652f5e8376cf48c9719"],["/2021/02/23/如何使用markdown/index.html","7374ae19a828ed2df8d180bdf5287a0e"],["/2021/02/24/mysql命令大全/index.html","5caf775c3305e626760dc21e02a3ed94"],["/2021/02/24/mysql数据类型/index.html","4e022f0336b657396881a0400f6e1ddf"],["/2021/02/25/Git的介绍与简单使用/index.html","24831bc49edbc5041008ba9122565cd3"],["/2021/02/27/简单工厂模式/index.html","5f529fd56d398f30f7e2bb8f7693326c"],["/2021/03/01/工厂方法模式/index.html","c09f1ce35388493c5920a9e0f4d1a9d8"],["/2021/03/02/抽象工厂模式/index.html","2e548797fd3a976bb84a305bbe2b15e5"],["/2021/03/03/单例模式/index.html","39f64c228c6eca9855b60c9c6af10ee7"],["/2021/03/04/观察者模式/index.html","9767ac710fbc7abbcd750c4b87f2b736"],["/2021/03/05/适配器模式/index.html","fa3d487bac0c7e4e633bb4ef04288da8"],["/2021/03/06/模板方法模式/index.html","99a52afa23bfbdd73ac2548df503d803"],["/2021/03/07/责任链模式/index.html","ae08caa1c427fa7d413d016e6694fd93"],["/2021/03/09/代理模式/index.html","7f554a6b1d2054f358b6d1385b53b9f6"],["/2021/03/11/享元模式/index.html","153f931e03c96b5c3d5d554322041acb"],["/2021/03/12/外观模式/index.html","89c12938e6af99dbd4d3fbcabbbc4fac"],["/2021/03/13/策略模式/index.html","319ed7fa28009afeb075447143fe4fc6"],["/2021/03/14/桥接/index.html","16994fc05bfe11a4934467a9e49b37ab"],["/2021/03/15/LeetCode-多数元素/index.html","06ec06a2bfe0e224023bb1a15f73ce79"],["/2021/03/16/LeetCode之汉明距离/index.html","91c198a2a25186ff7dd189aa7043b0e4"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","2f21c1385103d0373b06374ae960e989"],["/2021/03/18/LeetCode之两数之和/index.html","4df95150c17f5468902f30d413197b93"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","a83de54ad4338bf03169c2b1b9f7fd85"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","95fe0c397eec4d8c32337f428f18d46f"],["/2021/03/21/LeetCode之有效的括号/index.html","a2015bd620a6c5868f7dc9c6fe65f2f6"],["/2021/03/22/LeetCode之移动零/index.html","cebdf5cd0f95d48be8b66d9a9f4d612f"],["/2021/03/23/LeetCode之爬楼梯/index.html","65692a3cc9cba07d17ec9e0f2a414710"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","5390b3eb9c5bd72103d31be15cdf9ed0"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","5969e15c2f11d159f144260d867e2f9e"],["/2021/03/26/LeetCode之最大子序和/index.html","fcef537d15524c957ef35dbeeee5fc6b"],["/2021/03/27/LeetCode之子集/index.html","95802f056bddd24904ab34149493fc9b"],["/2021/03/28/LeetCode之合并二叉树/index.html","c6fa3e55e45bded4b81769955668c8ac"],["/2021/03/29/LeetCode之翻转二叉树/index.html","62e485a72fc3be55a271e124e6089104"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","e270a78035f343d700db879ace94673f"],["/2021/03/31/LeetCode之翻转链表/index.html","caaf195f1664384225de1e076de2ab0e"],["/2021/04/01/LeetCode之相交链表/index.html","908c9ca44275b7d90fbb0e798ff889fb"],["/2021/04/02/LeetCode之最小栈/index.html","4cda11409809d537a7a320c73573f5c3"],["/2021/04/03/LeetCode之对称二叉树/index.html","7b2ed2646c24c640830a6f51b5a5358a"],["/2021/04/04/LeetCode之环形链表/index.html","cde0fb91949ed5264e66b940d99dd5b3"],["/2021/04/05/LeetCode之二叉树的直径/index.html","aeab28d3b0277a254466430645b97bcd"],["/2021/04/06/LeetCode之回文链表/index.html","468b5ef67d970a404d2001ac4e372589"],["/2021/04/07/LeetCode之比特位计数/index.html","cd89ca5bc81b7304adf4bdd53f56f76f"],["/2021/04/08/LeetCode之全排列/index.html","89fbf3390dc4c2b620821df5c5c9fed7"],["/2021/04/09/LeetCode之括号的生成/index.html","28c0afe76b76062b42826bf0fa495cbd"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","3023281cd90c735d3539ede2b2585e28"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","2504653574a5c959bdf797be0de795f4"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","68514460bcbf9c78d464c419f32566dd"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","20e660f906d41024bfabbaf448fb79d7"],["/2021/04/14/Mybatis/index.html","abf980d54652c69efca4a2b495d86930"],["/2021/04/15/Spring-1/index.html","fd913fca6596edcdf68aca30d3634004"],["/2021/04/25/Spring-2/index.html","539c25e73b6e23929cbe01e1631e5164"],["/2021/04/27/SpringMVC-1/index.html","c2ad58c1df3ce469a4252026ebe1504d"],["/2021/04/29/SpringMVC-2/index.html","35bbcc8824f7b25a31d90f9ce11934d1"],["/2021/05/03/冒泡排序/index.html","b176ecf2679038fecb220c8cb89b2925"],["/2021/05/08/选择排序/index.html","971f8a27a5ef11a8fc21386d4ec88a44"],["/2021/05/12/插入排序/index.html","4420862aaf55b48663d6bf5c317050e5"],["/2021/05/15/快速排序/index.html","f012c34d41e346e46151b83ca3ef93a4"],["/2021/05/19/基数排序/index.html","d200dba021fb1e873c12b4f5bc75b624"],["/2021/05/20/哈希排序/index.html","46ee81e9ad5422d26520af4f96b942f1"],["/2021/05/21/归并排序/index.html","d434b54418a6f1f6fac6e9905c4f73c8"],["/2021/05/22/二分查找/index.html","5d93dedcc07f1c92f5de4fc4ad833fef"],["/2021/05/26/差值查找/index.html","f688d7ee447799be9ef5739400ff35b1"],["/2022/01/12/高精度大整数计算/index.html","210c421ae79f0d767a53048d5f474f06"],["/2022/01/22/前缀和/index.html","473dc0a61bcbf9cffc622ba913c184f0"],["/2022/01/23/差分/index.html","6d4005c52787723c01c846bb867ca4d9"],["/2022/04/04/MyBatisPlus/index.html","0fe798b45e4fdba93b9e4b913b7101a8"],["/2022/08/17/jQuery/index.html","4d9ccd8b750ee20f9afb8755b8052ae2"],["/2022/08/19/JavaScript/index.html","5384ce83172414638ce5d8aedb6bfbbd"],["/2022/08/22/Ajax/index.html","401de8b4be51e642972b47fa1eca029c"],["/2022/08/23/Promise/index.html","6187031e1c6cd08ae229ef6e36b8c8a7"],["/2022/08/24/Axios/index.html","1ac7a0dc4d38592764d2e48836a339a0"],["/2022/08/25/H5本地存储/index.html","456d4664f5a26fa595898e22b08cbcb1"],["/2022/08/26/mock/index.html","b37027a59d1db3e6120ebc1425acb183"],["/2022/08/31/VueJs/index.html","b7dc415f9405e0d6ff1a771d4e2f2a1a"],["/2022/09/01/vue组件化/index.html","8df6cd303f797175ffb6cb4f3005582d"],["/2022/09/04/VueCLI/index.html","9ff03347364604bbfb0088dc2eee62e8"],["/2022/09/07/vue实现动画/index.html","7eac2d26d90709e4bbf9dc2c19886477"],["/2022/09/09/Vue响应式方法/index.html","d47cf7d3f8f85ef4c28ac8f9711a0b00"],["/2022/09/10/Vue异步请求/index.html","6806f1526541ce291dd42cf2caf8533b"],["/2022/09/11/vue-Router/index.html","98ad312ed5363c10000df5be9da9e3bb"],["/2022/09/13/Vuex/index.html","6b3dddf5708000181d2b4e5436b74f3c"],["/2022/09/15/SpringBoot/index.html","56d9606805ca8f15bce973a19289a166"],["/2022/09/16/SpringBoot配置FastJson/index.html","2e444a6d3230fcf23e44b2d23c98437b"],["/2022/09/19/SpringBoot参数校验/index.html","99a020738b0c4a2f21ca9f7a1c806a95"],["/2022/09/20/SpringBoot的异常处理/index.html","0bcf5d72dde3fa532dc632437b26d332"],["/2022/09/21/SpringBoot统一响应处理/index.html","ba2fdc1bcb197a4529b35debf84a72ae"],["/2022/09/28/Linux/index.html","cdbe2fd94717339758756a36ef4c78bf"],["/2022/10/02/redis基础/index.html","b1c292f284cc1923734fb2befff1138e"],["/2022/10/03/Redis缓存/index.html","b1d80c866a6e861c4ab611eef1422c86"],["/2022/10/04/redis缓存穿透/index.html","70dc41b5c2769ca5a7dc52b7007a7a88"],["/2022/10/13/Redis缓存击穿/index.html","5359b50c68eee9bfb953995414eb9756"],["/2022/10/14/Redis缓存雪崩/index.html","3bed440cca93901a31bfcd88cb44b51f"],["/2022/10/17/Redis集群/index.html","364e30ba64c3d2543db429d543ca7f50"],["/2022/10/18/Redis哨兵模式/index.html","476100781f935f7c78e3ddc87d2ded2e"],["/2022/10/19/Redis主从复制/index.html","6a478d838ef59af6ad1f6f571ba4240e"],["/2022/11/03/Spring-Security/index.html","978145d38ba3b1acd573efe458df83f2"],["/2022/11/08/SpringBoot日志/index.html","7727ab77936100c819595c3c8be52151"],["/2022/11/11/Swagger2/index.html","a0cba7d08b47781e07595e4803e7a9bb"],["/2022/11/21/Nginx-一/index.html","6c1992e1d20838916e8f947530d72ef6"],["/2022/11/23/Nginx-二-代理服务/index.html","0034d557424d8a8b9eadc7ee87e144cf"],["/2022/11/24/nginx-三-负载均衡/index.html","1668515a821d6f8f96f3458d10f27127"],["/2022/11/26/nginx-四-缓存集成/index.html","c863ad4a8f15912d92031fb17c1b0025"],["/2022/11/28/nginx-五-动静分离/index.html","9bef868e0462670d55b734a109e44581"],["/2022/11/29/nginx-六-制作下载站点/index.html","f4099f2698d1298e76229a291962fc19"],["/2022/12/06/docker基础/index.html","fb5a8a4f5590754ca241fb7688d1bcd9"],["/2022/12/09/Docker高级/index.html","a5bd651c1bd0a09d261f8a4732576f99"],["/2023/01/04/MongoDB/index.html","aa75a4b5c9a860ecbd39e6d78acfc2bc"],["/2023/02/05/消息队列/index.html","31e093ab032031473bd8ac8506af6824"],["/2023/02/12/RabbitMQ集群/index.html","2ac54524c58e2a04286ac4c94988db14"],["/2023/03/10/CICD/index.html","fe8fa7a9e3cbc7405142b9e9db900b2a"],["/404.html","c0f25d60693eec6f6ad92b981eb7b744"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","cf20ca87a88c742cd18ca4eea4d75e0e"],["/archives/2021/02/index.html","6a021e953f8d6687604ace1ed0ddf3fe"],["/archives/2021/03/index.html","2b212c7c6ba6f6e56ccac7c000f8dc29"],["/archives/2021/03/page/2/index.html","b9ada534a799f9de769aa55cad31ca1c"],["/archives/2021/03/page/3/index.html","9850fc474671d9f2b55c94b89d43e59d"],["/archives/2021/04/index.html","bdcfdbe51416efeb1e59cbffc0fe3fb0"],["/archives/2021/04/page/2/index.html","e09fdd80e9b05437a517b8ce84b1316b"],["/archives/2021/05/index.html","47fa562f0bdfe9ca04b24b0883105a9e"],["/archives/2021/index.html","38a5711983c72b75a5b30087ae4a8e3b"],["/archives/2021/page/2/index.html","cd8b146be0dd00c5888399cbc512901e"],["/archives/2021/page/3/index.html","f7bbcc55ee83656aff8d2267b0fc35c8"],["/archives/2021/page/4/index.html","bb9b69789f40dd667def4803fe90af3e"],["/archives/2021/page/5/index.html","3ead4458398da178469ce73ceda15cc5"],["/archives/2021/page/6/index.html","67b6e68c74f6f339c6789f86191a16e8"],["/archives/2021/page/7/index.html","8718a111673342752a3e8f933ba3bca6"],["/archives/2022/01/index.html","6d392374f0e7962fa0e5621db469c41e"],["/archives/2022/04/index.html","2bda85c7f8566227d39d46cc654a5c79"],["/archives/2022/08/index.html","24b3adfe12c7e49b98bd56688d1bdc7d"],["/archives/2022/09/index.html","a7f8d13371b08bdf820e7d78004c1ff7"],["/archives/2022/09/page/2/index.html","0c0f8f03449aabe8359547b911f4a4ca"],["/archives/2022/10/index.html","3e03bf2afd3bde07de2a8b700a07770d"],["/archives/2022/11/index.html","8dd02a4910f2144768b16115ebbf50db"],["/archives/2022/12/index.html","84f24f50183aeff2bd450602562433f0"],["/archives/2022/index.html","95b802d6d75ca4676238d144697e036e"],["/archives/2022/page/2/index.html","d6dd7e1dce0cf642c8349c7d458da385"],["/archives/2022/page/3/index.html","814d577ef12cec161380b79908b95249"],["/archives/2022/page/4/index.html","013f2564cff4c1f8b840d83a3855cf1a"],["/archives/2022/page/5/index.html","fc12ff31277189764b2280cff563d8ad"],["/archives/2023/01/index.html","f252bae9c7520e9b3367876b3b3ea3b5"],["/archives/2023/02/index.html","ce950b3f99f866e286107815c4253421"],["/archives/2023/03/index.html","4af06d3dc4807e97d94f57662c2f82bc"],["/archives/2023/index.html","08348c8d5427c9f38ecc445e281c3895"],["/archives/index.html","04b29a6cd34a43586666dc11ba8d02fe"],["/archives/page/10/index.html","b89c51543f7f8cd20a621877d21f8cf8"],["/archives/page/11/index.html","e869f00f58570ce5a15e88569ac986c0"],["/archives/page/12/index.html","4a1b0ede060219c4ef0a56da498a38ea"],["/archives/page/2/index.html","3b6b1dcbe395dd532eb2543206eac0ed"],["/archives/page/3/index.html","ccf03f15e4f0bd483728b3b8619d6492"],["/archives/page/4/index.html","489e80d2ea22cc69152920509e939c86"],["/archives/page/5/index.html","6ffccf28c55d5f4a8890c2eccdd44b5b"],["/archives/page/6/index.html","6ce90272f5ddd90d09f8ee07071adeff"],["/archives/page/7/index.html","916944a9257b2e37770a2dbe62a15aea"],["/archives/page/8/index.html","496da8ed31adb767a85880a2b44d34b5"],["/archives/page/9/index.html","81039a30d1646f807aa6576dccfb2c7d"],["/categories/CICD/index.html","fb05bb1fbaec796235e12b8b1738ac33"],["/categories/Docker/index.html","526374f0ee99af7dcaa6f6161b301738"],["/categories/LeetCode/index.html","2586c4e34796ed8e0ce9865b8e83ce3e"],["/categories/LeetCode/page/2/index.html","1388b6ca91dd728b48c40c5a65fbd98a"],["/categories/LeetCode/page/3/index.html","e613c387355ee4e441f44e7503f1be86"],["/categories/Linux/index.html","35f5aca7d6a5b1184ca0ef8f836ae325"],["/categories/Nginx/index.html","e229aed13fb8904a4beb17329c863d48"],["/categories/Redis/index.html","3131d6da04cff0a0244c573c3cd46416"],["/categories/SSM/index.html","d7027f0df90b27b264907f5d337806e1"],["/categories/Spring-Security/index.html","76d8d0e16cb8536f5ee270c101f7eeb6"],["/categories/Spring框架/index.html","a6b2df7e15e361be8b7fd849a056badc"],["/categories/Spring框架/日志/index.html","af96bf93de90a427cfc195a7ba91cd7f"],["/categories/Swagger/index.html","8fc95b2a367996f37f04e6e0c7638743"],["/categories/Vue/index.html","37f2272eb3f2d7f825872842b19228b3"],["/categories/index.html","9b911dd6aa851179c330f0894372dd02"],["/categories/前端/index.html","85ad058456360c7ca2d3f5dcbb22cc3d"],["/categories/博客/index.html","2371928da167566216485463be8a35c0"],["/categories/学习路线/index.html","773c92435147fcf4deee7f28a4c02e5b"],["/categories/工具/index.html","69723c2aa17a542a7f34c810e54a0641"],["/categories/数据库/index.html","452295209ab5b0c636ed6af56999cb19"],["/categories/消息队列/index.html","1786ffa2304b6023cbcc89de6a085c23"],["/categories/笔记/index.html","3d16336fd3b36b145ee5de0c3b265e02"],["/categories/算法/index.html","a27fa2b5f768b2ebafc0b8d75db05b51"],["/categories/算法/page/2/index.html","a7f7f21ae41a189674d3a5ce59806c6e"],["/categories/设计模式/index.html","841cf5ea0dcfa51a7186fd0e2b36ee21"],["/categories/设计模式/page/2/index.html","88e80421374ec9b49d3b99d8486236a7"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","47626493da4ed11fa3a9c04aa4e0566f"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","cdb752874d94b08cf4a1c769e46fe36b"],["/messageboard/index.html","3f5b6fc723ffaf5876309a59d4ba9c8e"],["/page/10/index.html","650bae917fd5035d0fc016493c4c7a82"],["/page/11/index.html","b73adbc68f7d627cfd39047e5ac3b418"],["/page/12/index.html","5e6a32d80f8cfab12e1a54bbcb9ee009"],["/page/2/index.html","a616a94ba8a98b7eb4e06f4f652724df"],["/page/3/index.html","37677c99a80aef636aef82d23bedb739"],["/page/4/index.html","c432f7d03992e12c00e93245bc14ffa4"],["/page/5/index.html","9eb05ba59d8eb728b175a2bac4986fa6"],["/page/6/index.html","10ccc06a3ee49c507ae77e02e4947292"],["/page/7/index.html","0897d295c4b0d097a81ad9598ecb8e58"],["/page/8/index.html","95e27148f1511ee9c0287719d0fb3b0f"],["/page/9/index.html","0d57867610e223fa6cec9e2bebac3a32"],["/sw-register.js","92ea335e0bdb9808950e26ae3430da65"],["/tags/Ajax/index.html","9a6581151b37f3ae1a99902c937ef69d"],["/tags/Axios/index.html","383419610cd04f0c23226f0e486505dc"],["/tags/CICD/index.html","50cddcb8679530d014d6da11a0236eb7"],["/tags/Docker/index.html","676a98d7394c0ee72aa7e2389967e3f7"],["/tags/H5/index.html","a5d73ffe967a5d0ddb81b4558b2d855e"],["/tags/JavaScript/index.html","7e0639f2be091418f2097a96784707f9"],["/tags/LeetCode/index.html","17ba1e9025bfa7f62faa3848bbba2c28"],["/tags/LeetCode/page/2/index.html","8f7763d91e6afbaf9c14789a0d6dd91d"],["/tags/LeetCode/page/3/index.html","5c1db5bfed45afe7d253cd7b9fba5dc3"],["/tags/Linux/index.html","1cd68ffc92ae48f106607f9be9aceec6"],["/tags/Mock/index.html","1d6a90a1c1c903660896c5043664a96d"],["/tags/MongoDB/index.html","3b68e6fb18bc84aa92a905bd23bb3308"],["/tags/Mybatis/index.html","3eae11ba8cb76370100d0efe97ed6d32"],["/tags/MybatisPlus/index.html","1b6e80482a5e1b60d12c704b36972589"],["/tags/Nginx/index.html","c1b3e060ba308f35e4d43e7d75b4cdf2"],["/tags/Promise/index.html","e21c4e2a0eef3242ef6a85b617752f08"],["/tags/RabbitMQ/index.html","13efe7df6ee09424ab6fc38e12204f16"],["/tags/Redis/index.html","82c3fcf66971e1cf170f3934d7291d93"],["/tags/SSM/index.html","42f284e329ea5745c733a4dfbadb50e4"],["/tags/Spring-Security/index.html","94f361dd62830b26c2704d1157cdb266"],["/tags/Spring/index.html","d68becd8c38ca15d7a7cbfc1765aa106"],["/tags/SpringBoot/index.html","3d3d3c6e8ef0aeeebc45edc2e218918f"],["/tags/SpringMVC/index.html","e5b0819f972c04b1797ca63965131ae3"],["/tags/Swagger/index.html","f07a5402db9cd29fae41c539f63a53a4"],["/tags/butterfly/index.html","616282a7541c2fb308c73278c58336cf"],["/tags/git/index.html","0f0781bc8c7b9db43f53a602981fae2f"],["/tags/hexo/index.html","66f1275b642a6892c8bd79ea3bc631d3"],["/tags/index.html","36c263d2f687ac751cd2cb6b4e7dcc90"],["/tags/jQuery/index.html","f2394139524636f6484d9fb2095cbf9a"],["/tags/java/index.html","d36d0de44e08379f2391c99676ff0ffb"],["/tags/markdown/index.html","81f05ebc1e9c2ad0592c1b940b07a99a"],["/tags/mysql-数据类型/index.html","c36195b4ace819c864650294f10029e0"],["/tags/mysql/index.html","96ca39359e5ec06ade6af770d6d123f8"],["/tags/noSQL/index.html","d5a7a42f898fb5c861530ae55b8c3fb5"],["/tags/typora/index.html","9fef5f8b4c1e5567920f04450d019fe1"],["/tags/vue/index.html","63fef1a68e34baa9dc22682a388c0f8a"],["/tags/享元模式/index.html","2d83965c6d64e2fd3344bdc6b5226f3c"],["/tags/代理模式/index.html","a8b3613c4e23ce67475c69759990f652"],["/tags/分布式/index.html","3dd9ad8d6ed2129edae3e7a69bd6c357"],["/tags/前端/index.html","459a424f8609af645483e55a9f4663d1"],["/tags/前端/page/2/index.html","ef0a725b6b34c4fc1eb7016aa5811605"],["/tags/后端/index.html","b20ed604b50e5b4ced7acb5058b84c6b"],["/tags/外观模式/index.html","f4fe7caa3d9e2900b1c48a585450ad33"],["/tags/容器技术/index.html","e220ac26cc85ee2a8c8f8eee6a727d15"],["/tags/工厂方法/index.html","d52b3f98cd494cc935f605c4a838c897"],["/tags/抽象工厂/index.html","9f5c0308154523b209e45bd9d8baeed4"],["/tags/持续集成持续部署/index.html","8d6ea8dd9deef015d259bd169238912f"],["/tags/排序/index.html","2cb85fb3a35a15088eaac2dff4c517ce"],["/tags/数据库/index.html","863784aa0262dbe432e487bab23c79a4"],["/tags/服务器/index.html","82755152b71ea907edc6113e66263aec"],["/tags/查找/index.html","2d2ad8edba85940a7d04e7907e56238e"],["/tags/桥接模式/index.html","49becfafd2d2e9c819f533e312135e14"],["/tags/模板方法模式/index.html","3ac8847b788ccddfcb751d764e6d23a8"],["/tags/消息队列/index.html","0ff33e3951b97f4d993c537bc25fee26"],["/tags/版本控制/index.html","dc0fa3958951105372f0e56f5fbf7d33"],["/tags/策略模式/index.html","fe118de9019f2b2923ff3a8344699a21"],["/tags/简单工厂/index.html","a794612969c41345827d268cd7c00607"],["/tags/算法/index.html","e9c7d6bb5a9aadccc7e12bc7945aeb67"],["/tags/算法/page/2/index.html","b6a17fc5d140695b8b4ab904c5992d01"],["/tags/组件化/index.html","088da7f1d33b118bc69430c7a6dd9a86"],["/tags/缓存/index.html","59df5054487c2bb1d867337b66e19639"],["/tags/观察者模式/index.html","88be7e322e7418d4f9caba5089309f55"],["/tags/设计模式/index.html","85fa3a63dab4e90c7d21f684a02c21a4"],["/tags/设计模式/page/2/index.html","63c2a49388b855769c9726641c6c01a4"],["/tags/责任链模式/index.html","bb98d60dba4cd56303a611093fb3a525"],["/tags/适配器模式/index.html","32e6328797ae3e01c85fdd044579246a"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
