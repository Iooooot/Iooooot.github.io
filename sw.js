/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","a947b51c6806943e299e73e623924df2"],["/2021/02/22/博客的搭建/index.html","485147f88cc25f350e3d13375840eac8"],["/2021/02/23/如何使用markdown/index.html","ccbab4bb753c1dfe5a23c0262accc8d1"],["/2021/02/24/mysql命令大全/index.html","9b72d0d10e8953a0c24c3f35ac59e51f"],["/2021/02/24/mysql数据类型/index.html","ac6305b077d56a36a9b9e9c2781fbac0"],["/2021/02/25/Git的介绍与简单使用/index.html","864d27af3229ffc63c539fdf527e6722"],["/2021/02/27/简单工厂模式/index.html","bc4b7750a7f412f10f7d0158490f0312"],["/2021/03/01/工厂方法模式/index.html","06cd21da90785b25647a155015f39708"],["/2021/03/02/抽象工厂模式/index.html","51dd86ba1ffacd3ed5ea28085f2dd244"],["/2021/03/03/单例模式/index.html","209691cc8d4d5287960b0d9d1f56aeea"],["/2021/03/04/观察者模式/index.html","199469ae45bfdac73503524faa1b4985"],["/2021/03/05/适配器模式/index.html","4b8ea2c124ae925dcda4f84d06429c24"],["/2021/03/06/模板方法模式/index.html","45d1df3ae7f7c1dbf716a4d84fb0cdc0"],["/2021/03/07/责任链模式/index.html","9f93396f08f07163e15a8625fe29a565"],["/2021/03/09/代理模式/index.html","79758fc6bc4ad3a0a5b07c385e6f2310"],["/2021/03/11/享元模式/index.html","9bb4ca453893bf6fde4a3906ed563a5d"],["/2021/03/12/外观模式/index.html","c1f4cb4eed4896529f70b75dd7d4fce4"],["/2021/03/13/策略模式/index.html","c1a466b2a48732311227e4034ea947cc"],["/2021/03/14/桥接/index.html","0417624d2a201d885cdcf99efe075555"],["/2021/03/15/LeetCode-多数元素/index.html","828539cb4b14e307c0071c5a28d974ef"],["/2021/03/16/LeetCode之汉明距离/index.html","1a0a66399b1faf098edf1abf2eb2f00f"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","954cfa0691e19070c076d1966d5c5437"],["/2021/03/18/LeetCode之两数之和/index.html","007dfd2f533dc134beb782f73a28aa4b"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","50864059d50f0ef6545a55ea43fe3fa0"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","3d15b140e0ced253f86db5df53e3e15c"],["/2021/03/21/LeetCode之有效的括号/index.html","ae390cb826b9c7b977a9079b51e1d477"],["/2021/03/22/LeetCode之移动零/index.html","cf4455d01f35687e0c636622d6d2d9bd"],["/2021/03/23/LeetCode之爬楼梯/index.html","5781539dafdb2a9acf15e35c36fe816b"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","3c11dd1dc7d215fcc62423fe2df52f7c"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","cf6e58e9f91e5911f7616819e315f196"],["/2021/03/26/LeetCode之最大子序和/index.html","83ebabf3e980b22ad107da7f3d2f883e"],["/2021/03/27/LeetCode之子集/index.html","444170672ea7daa690a58a6cdba1fb1b"],["/2021/03/28/LeetCode之合并二叉树/index.html","e4ad4b69e17d875fe9b24d767b90df8c"],["/2021/03/29/LeetCode之翻转二叉树/index.html","69373428f0435bd3e63e56ae3ff53cc1"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","449dc166420aaeef636ed8f8865da5b4"],["/2021/03/31/LeetCode之翻转链表/index.html","3ce6f28b1db098920d7d17da02b8a102"],["/2021/04/01/LeetCode之相交链表/index.html","502fb310cd7b6ca76c90cb19a52e1ad8"],["/2021/04/02/LeetCode之最小栈/index.html","54e08e659af7013a5ee99a7ee1829fd4"],["/2021/04/03/LeetCode之对称二叉树/index.html","93620ab6fd0535be053d21f8a209a72c"],["/2021/04/04/LeetCode之环形链表/index.html","340814f38dd876f75d2a3c11af46ce5e"],["/2021/04/05/LeetCode之二叉树的直径/index.html","bedf674be7bb89960837b913233d5364"],["/2021/04/06/LeetCode之回文链表/index.html","f000184f3feafcc49becc69761386a60"],["/2021/04/07/LeetCode之比特位计数/index.html","08b442af1d02e5d4fc112cb80fc94443"],["/2021/04/08/LeetCode之全排列/index.html","9cf2920ffb16b08a2c29036b8ea851fc"],["/2021/04/09/LeetCode之括号的生成/index.html","f97082f35341b464b019aac4e3f80d67"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","fb77bc39722d4af5d76ba348596d3cf3"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","8b5a74fa1055ad8ffeedd3747b7023e8"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","108e4f3d48a0cd3c366dcd4e1aa473b0"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","e2b7670ff786e0d7bd1275c4e0efe4e3"],["/2021/04/14/Mybatis/index.html","6de82e1748c69cda1cdfc222d6ff0520"],["/2021/04/15/Spring-1/index.html","1fecd59c46ad5e200c0ab839652a5f87"],["/2021/04/25/Spring-2/index.html","1e459184a04e46f8a4ed992e2930c24b"],["/2021/04/27/SpringMVC-1/index.html","4d02d076791bd07d702a401021162507"],["/2021/04/29/SpringMVC-2/index.html","c4b60a29573b0b5596fa765655ce4a81"],["/2021/05/03/冒泡排序/index.html","92fcee5ffd1aa0f2975e10ebb3037e87"],["/2021/05/08/选择排序/index.html","97e9703335f775628a28a2ce097647a7"],["/2021/05/12/插入排序/index.html","51a0391745a4d8c296d8c6860e69f2cc"],["/2021/05/15/快速排序/index.html","a35863dd0de5750497bf36912ca91a18"],["/2021/05/19/基数排序/index.html","b227dd08a1e30e45f363e3c3bb33f359"],["/2021/05/20/哈希排序/index.html","5b7309114433d0ccd3fd41d31682435d"],["/2021/05/21/归并排序/index.html","82632350d744f2acee720ba63ccf7d85"],["/2021/05/22/二分查找/index.html","1c98a22854416a907ef4e718fa4d2c5f"],["/2021/05/26/差值查找/index.html","2f2bc9d7b5349221fe0f4ad13552ee13"],["/2022/01/12/高精度大整数计算/index.html","304a0433c5b02387c0af842eea39fefd"],["/2022/01/22/前缀和/index.html","fda90bc71883e901de93e79876fdda90"],["/2022/01/23/差分/index.html","2d922c1b59ce0468a5bc26f29ff2831c"],["/2022/04/04/MyBatisPlus/index.html","3bfaed4e26e0037b13ec226bceff79f6"],["/2022/08/17/jQuery/index.html","be1db04532181058c06dcd1ed5879956"],["/2022/08/19/JavaScript/index.html","f5ebdd8262e9ad64735d4dfc35c21f02"],["/2022/08/22/Ajax/index.html","3011896c220581e23254dc2c6604f263"],["/2022/08/23/Promise/index.html","4ff8811dd58ca0574508f628f1912496"],["/2022/08/24/Axios/index.html","8cbbe2c07efff99bb1675ee0cd0e63b3"],["/2022/08/25/H5本地存储/index.html","4a2c2972b265d791d369a6727ac413c4"],["/2022/08/26/mock/index.html","48f521e2391645dd550542d61a638063"],["/2022/08/31/VueJs/index.html","93be53fc0f51d303ad95230af231b488"],["/2022/09/01/vue组件化/index.html","5818171d0e0b36cdcc8768671754c1cf"],["/2022/09/04/VueCLI/index.html","0c207080c4416f4896de4f22af210a1f"],["/2022/09/07/vue实现动画/index.html","c242f975dc049977b13e00053f92a768"],["/2022/09/09/Vue响应式方法/index.html","663e687776e028116f6971f39112e8d5"],["/2022/09/10/Vue异步请求/index.html","b5be86a2e18ce867efbbac1c4818ea54"],["/2022/09/11/vue-Router/index.html","d968043f4cb5460a3dbf3d395717fcaa"],["/2022/09/13/Vuex/index.html","64786f5f44332aca4d09db3acc426ad7"],["/2022/09/15/SpringBoot/index.html","78b164ac3f0ce0e71e3c63021dd7f414"],["/2022/09/16/SpringBoot配置FastJson/index.html","8a2c88a53fff29b97c8efc31061b47cd"],["/2022/09/19/SpringBoot参数校验/index.html","03b7913870a2f12bc3de35e173f54b04"],["/2022/09/20/SpringBoot的异常处理/index.html","fd1aafdfff8e71b056a7cbde6b5f7624"],["/2022/09/21/SpringBoot统一响应处理/index.html","c6736cb9e0898a422949055fc3376361"],["/2022/09/28/Linux/index.html","c38a3dbbcb5f055fc3e528d5136109a9"],["/2022/10/02/redis基础/index.html","9b8fc52f3affbc85b9932127bd3506cf"],["/2022/10/03/Redis缓存/index.html","901f6bb709fc946d230d81df465b4e1d"],["/2022/10/04/redis缓存穿透/index.html","be8783b230cfa8763c7928a31f5558e6"],["/2022/10/13/Redis缓存击穿/index.html","7c12bf9910219df265f2248d9ef3d5ee"],["/2022/10/14/Redis缓存雪崩/index.html","4f899a45c42c43d2566d26bb157f9450"],["/2022/10/17/Redis集群/index.html","8dffd6257e95c74ec12004a6cb9786be"],["/2022/10/18/Redis哨兵模式/index.html","b1ea72fd64db364145562e326b1ce98a"],["/2022/10/19/Redis主从复制/index.html","78ada65f561293ea596e33fc7e7b1c8a"],["/2022/11/03/Spring-Security/index.html","4d3c532952678f68709561297ba773eb"],["/2022/11/08/SpringBoot日志/index.html","388f7c92e8c11cc2b57f9dbaf07d6fc1"],["/2022/11/11/Swagger2/index.html","97edc0ba37bcb639eb151d9c2a18dd4f"],["/2022/11/21/Nginx-一/index.html","2bfe13c5b2f454b614f22a44b4aec4b0"],["/404.html","17e2ea920768de8a5e5dd3b705ac498c"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","a4276547adafbca29d5f3d65575a1724"],["/archives/2021/02/index.html","222cc1835678d7b5e476cc747f7c1406"],["/archives/2021/03/index.html","8bf240cac6e09d3b66108184ca16eeb1"],["/archives/2021/03/page/2/index.html","05ad729e98bfde599944cfcd3e1311fc"],["/archives/2021/03/page/3/index.html","dee4922914e20ede97b51d6e13473224"],["/archives/2021/04/index.html","82a2b8dc03385d42e8f8499f85003ca0"],["/archives/2021/04/page/2/index.html","bb460927634dd175ab2a9560944f17a5"],["/archives/2021/05/index.html","39c3eea71e1bbd4ceec8156c8471703d"],["/archives/2021/index.html","2bb5512d2e6f664a7d6745a3edc174b5"],["/archives/2021/page/2/index.html","6ba695e6651ec2019ced8110c7670402"],["/archives/2021/page/3/index.html","d14cbde265e16d49e3bd792260dc9d09"],["/archives/2021/page/4/index.html","d2890584fe291df2512606112a7f08b6"],["/archives/2021/page/5/index.html","47d4ebe2162112a647bc55f7a9de44df"],["/archives/2021/page/6/index.html","9757d2926c6eb17c79725f82594a262a"],["/archives/2021/page/7/index.html","103f959e2bf9557b8c6306f8c2a6d2da"],["/archives/2022/01/index.html","31f9076979bdc1b8e9e22237fcbff457"],["/archives/2022/04/index.html","97376b9a07ec87816d474cd21426a7bf"],["/archives/2022/08/index.html","01f118050306009d9a78958710d6b43b"],["/archives/2022/09/index.html","05dacc3ea657737694778b11c0cab313"],["/archives/2022/09/page/2/index.html","a94d19920f1129e8a93f23011ca53ee5"],["/archives/2022/10/index.html","fa9ae102a46a3ed1c39f293ff6679e70"],["/archives/2022/11/index.html","c5d77378b20ed025f2308dffb30d47bb"],["/archives/2022/index.html","a343858b4f8c84db88d6d90a9b0234ce"],["/archives/2022/page/2/index.html","a4dc8153edb3ce6a66dcba999f006dba"],["/archives/2022/page/3/index.html","8b5ecc141521eee983618356c6235fe9"],["/archives/2022/page/4/index.html","e63bbea73ad0f8d3b59eb154ebf4dcd0"],["/archives/index.html","dba9e49f284932e6258537a4f63f19a2"],["/archives/page/10/index.html","b47d3542893be8749851d5226a8141df"],["/archives/page/2/index.html","f54f04c09dd226329307057503598eaf"],["/archives/page/3/index.html","93c669a19cf5cfeaff40ac376e0ad583"],["/archives/page/4/index.html","b081b70dc4e26e32f935e9717c933acf"],["/archives/page/5/index.html","9f63915a3f4dd6a7acc0fb7e789bba51"],["/archives/page/6/index.html","8e224bc38e6acf483c17a2fd9948949e"],["/archives/page/7/index.html","4962a3b0c032cf34d7b20c856c315f0d"],["/archives/page/8/index.html","beeb415ea2426ab1c8340c9fbab39d0d"],["/archives/page/9/index.html","219fe7e2e813613eb8f43604bb107365"],["/categories/LeetCode/index.html","150a11fc40e2bf5c25348c85b80955d6"],["/categories/LeetCode/page/2/index.html","3df465ebe2d8e5232360d1bbb018d8d4"],["/categories/LeetCode/page/3/index.html","d4c0d67b13f0f92e145ea85b7331a936"],["/categories/Linux/index.html","d99bdc45866657ed23516b44e8def9f5"],["/categories/Nginx/index.html","f851edb32207f711c73c6c699663eb79"],["/categories/Redis/index.html","0af44a81128da4897fccdd4203b7798a"],["/categories/SSM/index.html","a280c9fb5458d3ce4e64977795193d2a"],["/categories/Spring-Security/index.html","e24c144f4b5245fc7d7bcdd3f81ff57c"],["/categories/Spring框架/index.html","ea27577426083e7ad4ddb87fd351bdb5"],["/categories/Spring框架/日志/index.html","5895d7db11f895f0e55516e6bf2ce708"],["/categories/Swagger/index.html","b7eadc1fa2525cecf07f24e42b268811"],["/categories/Vue/index.html","b789602b8919477895b65aff13469d6b"],["/categories/index.html","dfae9df9dd158a381a40cdd888ea85c7"],["/categories/前端/index.html","dd86737dbc00dcb37faf07530e3e0294"],["/categories/博客/index.html","9eff417e87a4928f7bdf887704e1d54e"],["/categories/学习路线/index.html","08ed9fc98f783d4859879e049a054a99"],["/categories/工具/index.html","3dd1463cb303f4e78dd171a3c41ad802"],["/categories/数据库/index.html","da5e5795e09cdac14226199bc08b7c04"],["/categories/笔记/index.html","e9e5e1694118fcbdce995042abb8a651"],["/categories/算法/index.html","9732e3bd89fb9a782369e0fb4d616250"],["/categories/算法/page/2/index.html","4a5b4620fd133931ec9ba7ef0380a774"],["/categories/设计模式/index.html","68052f5268ef1eb09e91ae3261d7d3a8"],["/categories/设计模式/page/2/index.html","4227a7b21a3a89644529b292bf1fc2d3"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","0b0113c058a45202b91058f47e761b23"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","eb85910da38d278e31b756bcacfa7936"],["/messageboard/index.html","a4089a68c9d95286d5e4515cb34289a5"],["/page/10/index.html","c7cc6ed92ef16c6cff66021990ca4210"],["/page/2/index.html","f308620c71361dfed47dc5e1d31a3727"],["/page/3/index.html","6c654177283fa145f9fea160960e1146"],["/page/4/index.html","9186b257e38557b5493006b27530d030"],["/page/5/index.html","a2dbf71d1cd7c9c359ad595bcd6d4771"],["/page/6/index.html","a41f7b692baac8d6bf521f0bcc951a26"],["/page/7/index.html","e54db2368cc2257f8bd945d4fb222d5f"],["/page/8/index.html","7c2cb4562675f1241c618d355b3d391e"],["/page/9/index.html","50ad9558a2ae749a018d7e8204bf9703"],["/sw-register.js","356e28d436187ac7d761836dbfeb73d6"],["/tags/Ajax/index.html","c82f8a160cad02412cb3e8bf29167517"],["/tags/Axios/index.html","28eb9b3a13120a8764c5f55e03d9e0d4"],["/tags/H5/index.html","2da38c5dcdec29b145b0df398b644157"],["/tags/JavaScript/index.html","d9f52b048badceb8595b2a918b1b9202"],["/tags/LeetCode/index.html","bec90aab582833a6991b846e49f2f9e0"],["/tags/LeetCode/page/2/index.html","86bee77c2b661cb95fc710947decfec6"],["/tags/LeetCode/page/3/index.html","c7663b11d0664f4ecb83d86be8a96132"],["/tags/Linux/index.html","fc093d63bf34fd367798885f0132c289"],["/tags/Mock/index.html","01d682eacdacc6320b5a1c3b47afa9fc"],["/tags/Mybatis/index.html","10c58ab17d9413332cce167e68b3a559"],["/tags/MybatisPlus/index.html","fa065f74d97d266b7cbf317ff3a665c6"],["/tags/Nginx/index.html","d244170df82109c86823dbd2cac56f40"],["/tags/Promise/index.html","645e58aef68dd4ec8708cc953115c39f"],["/tags/Redis/index.html","4027b1b4f0274cfe9d071f6f32743ef7"],["/tags/SSM/index.html","418b706b38b748a838cc872ffa5a0682"],["/tags/Spring-Security/index.html","c7a3b37c9745c06ed0b12a69ce4e5c59"],["/tags/Spring/index.html","6b67ab4b479bded13086df5dd2cf05ac"],["/tags/SpringBoot/index.html","26828124a2f725522b3bdb3b6a779ffa"],["/tags/SpringMVC/index.html","a141d236eb5d00b5e689162c47c4cdfe"],["/tags/Swagger/index.html","4529ca8cbfc4a188bbd93d0a035217ce"],["/tags/butterfly/index.html","df7e5136e003d0ea72144fd213cf649f"],["/tags/git/index.html","cc1c253febd7b38fdedcfbcc2db3281d"],["/tags/hexo/index.html","d998bd4984850c14ccb29123a722e56a"],["/tags/index.html","4558319a4bc9052029c254cd5d12900f"],["/tags/jQuery/index.html","91d558d673e58c7ec2777a42b5266d6e"],["/tags/java/index.html","c2db2df78cbdee3f5c901fbad931ae54"],["/tags/markdown/index.html","6177476f277367816ff55ab9a0a952bb"],["/tags/mysql-数据类型/index.html","c67ea9197d19ffa7bd1c4077569eafae"],["/tags/mysql/index.html","44d699e6ca718cfd8dc5d9e24e0e2366"],["/tags/typora/index.html","ca5e9df7af9fc26e3e727a87aa87ace9"],["/tags/vue/index.html","2690495e66ba897d571d323b291e63eb"],["/tags/享元模式/index.html","ebd06dfbe75d9443091bfc837f73bb3b"],["/tags/代理模式/index.html","4899daa7ab61d4d6a7d7877553908c3d"],["/tags/分布式/index.html","360f0902842061cec5637945d0a8b6ab"],["/tags/前端/index.html","388fb43431a038d99302b01637940837"],["/tags/前端/page/2/index.html","4ea2a4855defb5f09980367a625d3b36"],["/tags/后端/index.html","5075a157abe5f95445736c344858ea0b"],["/tags/外观模式/index.html","f8d932f956462ae91f3ad4c145a6b859"],["/tags/工厂方法/index.html","c0bf627318b5db03d40a3c80edcee0ba"],["/tags/抽象工厂/index.html","00ead22af62d061dc38b88dd57b876b3"],["/tags/排序/index.html","d9a43c74a83bf53c6230714d299b62fd"],["/tags/数据库/index.html","5f6106e582cdc1a3584645a25814dc4c"],["/tags/服务器/index.html","770736c15785aef169689288b95e5e69"],["/tags/查找/index.html","dfdac4ad30c26f714e9a99b572add2a4"],["/tags/桥接模式/index.html","79346c5955586ef20392e2b71aa70c8d"],["/tags/模板方法模式/index.html","1044661172d27c145cf0f77aba453876"],["/tags/版本控制/index.html","2ad82a6374e3af9f3831323dd2f35c74"],["/tags/策略模式/index.html","880d21dbaf1856deafe666ec053f17ea"],["/tags/简单工厂/index.html","7fd7763c66e171a51746f87bb0770f75"],["/tags/算法/index.html","9dafd374e6a2fe4d30cf9fda6aa6c8b8"],["/tags/算法/page/2/index.html","c8166cee9ef02b6e330b6afaf7b076d2"],["/tags/组件化/index.html","1e823978ebc91791d737cead09d5375c"],["/tags/缓存/index.html","8cbc16450a29256a7e098d6d30d5cef6"],["/tags/观察者模式/index.html","030a40398848b04602b9510bf2be7296"],["/tags/设计模式/index.html","049820c2c0ad2c3a2b4eb14490a6ffe3"],["/tags/设计模式/page/2/index.html","7d11397509e36287cf1e98bd8f9116bc"],["/tags/责任链模式/index.html","d626276bd5647457eefa8bedd4ddc19e"],["/tags/适配器模式/index.html","7342ae38bdb5c932f84d16aca9e5428f"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
