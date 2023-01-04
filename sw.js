/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","10509b5524e9daa12f46e017dd86b753"],["/2021/02/22/博客的搭建/index.html","8f9260caefb35a51f1250306aea91ed0"],["/2021/02/23/如何使用markdown/index.html","a711dc883fe972a5ec5d903c86c1fe66"],["/2021/02/24/mysql命令大全/index.html","f8993327e75f942fe6650aa3964c4fe4"],["/2021/02/24/mysql数据类型/index.html","6e2307736645164954c252b3460af933"],["/2021/02/25/Git的介绍与简单使用/index.html","a097cf439d8dbcfade7a11687bdfa313"],["/2021/02/27/简单工厂模式/index.html","c2d7de8490cc11120da02c881edb0ff2"],["/2021/03/01/工厂方法模式/index.html","2e3fefd6667963d4fb00514abf4424f9"],["/2021/03/02/抽象工厂模式/index.html","69e91a5649c69f60d453ce550d4adfe3"],["/2021/03/03/单例模式/index.html","860e5edac9c37d522e21042c67cdc03c"],["/2021/03/04/观察者模式/index.html","2b433ed568edce5c59b7f017f33fa70a"],["/2021/03/05/适配器模式/index.html","e950e8fa750535e08d4b6ac57f8d17a8"],["/2021/03/06/模板方法模式/index.html","c3a507b93171732aa5861e622fab2aef"],["/2021/03/07/责任链模式/index.html","197dc3ba1d8a0de7f5f5744a68a3b9d1"],["/2021/03/09/代理模式/index.html","91aa622e8b58ad196cdc0d2724969c55"],["/2021/03/11/享元模式/index.html","975d4e236c682b5f35bd7db6849c9ebd"],["/2021/03/12/外观模式/index.html","1207bcfd9daec197af3fc8c90bd07985"],["/2021/03/13/策略模式/index.html","4bafc92bc97f139fc8f9b03c7ce7a2d9"],["/2021/03/14/桥接/index.html","17dd90fc620b5cfbf20d68a8c2f20291"],["/2021/03/15/LeetCode-多数元素/index.html","c51734b984beb0c2cb01d65d0ed1e253"],["/2021/03/16/LeetCode之汉明距离/index.html","3cd7a5c873f9dfbc7b61d14db6e97df0"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","db3736b8a0edccc535c27647187ddfc7"],["/2021/03/18/LeetCode之两数之和/index.html","3813c3026364159989c56ebfda41c792"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","b6cbb306d7eb8f39c7a99c6afc463bb4"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","3457cc366b30019ebb39c5973dccb49f"],["/2021/03/21/LeetCode之有效的括号/index.html","cc5d957e801bee57001b2b5d6fa8e052"],["/2021/03/22/LeetCode之移动零/index.html","3fc4f7c07dc0e825491c4ad3b1908c91"],["/2021/03/23/LeetCode之爬楼梯/index.html","674a6f90e7c47459761ba5c7ad8df377"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","2674331363b2a4f491f4d66dc4e01e54"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","43fb7a828f3ce7c6e87fe1f8c51453f2"],["/2021/03/26/LeetCode之最大子序和/index.html","59f341b704f7be3d792c6d66b4f4916b"],["/2021/03/27/LeetCode之子集/index.html","a25affeb120a054be063d69a6d3c2766"],["/2021/03/28/LeetCode之合并二叉树/index.html","6545e6c73aafcd05fb64ea6743ff1c8f"],["/2021/03/29/LeetCode之翻转二叉树/index.html","a7d3e0e15d56539cce8755ed8b49fac4"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","f39af69245623ca52d8385b78177f5d3"],["/2021/03/31/LeetCode之翻转链表/index.html","81d77c701545b98419c71368b6c96eeb"],["/2021/04/01/LeetCode之相交链表/index.html","16f281e5dd2438ad8cfd064c30e882ed"],["/2021/04/02/LeetCode之最小栈/index.html","e0780f328216d8194570b840a198cd09"],["/2021/04/03/LeetCode之对称二叉树/index.html","6432232a22545145622b9cbc62b0bd18"],["/2021/04/04/LeetCode之环形链表/index.html","05da95ea854b25b65fff21a5d8f91f7b"],["/2021/04/05/LeetCode之二叉树的直径/index.html","cb42cfcc4170ab60994fe12d469e022e"],["/2021/04/06/LeetCode之回文链表/index.html","68225d6f48c13136d09b658368b4506f"],["/2021/04/07/LeetCode之比特位计数/index.html","7eb5e1103b8753b98566fdc680263fac"],["/2021/04/08/LeetCode之全排列/index.html","bf79b85a42ce5ec9cd88ed92d58ed82e"],["/2021/04/09/LeetCode之括号的生成/index.html","bd7274408959d80d9499d290f004c153"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","4ee08386e290c7476e768bee455f86a9"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","485dbb678fb113ae5123582c73935605"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","fea6b70582a8c51b898de7238f6d9b26"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","01ebacf0de467e8c42ce5684a85cae0d"],["/2021/04/14/Mybatis/index.html","1eb35b29bd15cb645c3e3a6655c4d4f6"],["/2021/04/15/Spring-1/index.html","9ccf3803409b6c172b27c4b7835c02c7"],["/2021/04/25/Spring-2/index.html","05988e988ed997217024c4c73758aa42"],["/2021/04/27/SpringMVC-1/index.html","cb2d99b556392a845265b676f3000115"],["/2021/04/29/SpringMVC-2/index.html","4322a571f6084506a85c75e76eaff1de"],["/2021/05/03/冒泡排序/index.html","03d84dbdbe9913ebc0b43fc59d55d45e"],["/2021/05/08/选择排序/index.html","74faa06a8f5d02200e9924df2d79dd01"],["/2021/05/12/插入排序/index.html","64a4308ba9b5776731e5bece09821823"],["/2021/05/15/快速排序/index.html","7b85559c5d39cfd9cd3a171c5bd5eeac"],["/2021/05/19/基数排序/index.html","075e95938a6fc768ae61a3cda6037697"],["/2021/05/20/哈希排序/index.html","60dd7202521e6e1b83ad850db4e65a2a"],["/2021/05/21/归并排序/index.html","65b06abfdde059be4a7bd886df201538"],["/2021/05/22/二分查找/index.html","b1e4cb51adaf0944ed88f4dfc38f56b3"],["/2021/05/26/差值查找/index.html","81aa52456d3e5584a11aa10369dd1166"],["/2022/01/12/高精度大整数计算/index.html","c45e32db2612ee4d86f86ca88be3097d"],["/2022/01/22/前缀和/index.html","103aa535cb644e794778edb30d50f06f"],["/2022/01/23/差分/index.html","80782e4857925d54d443fdd14c813e75"],["/2022/04/04/MyBatisPlus/index.html","ce7caae337656056078b58c8bbc63af7"],["/2022/08/17/jQuery/index.html","3f9dba5cb8bc941db00415105169929b"],["/2022/08/19/JavaScript/index.html","4cb9daeb1817788d258bf1431a1554e7"],["/2022/08/22/Ajax/index.html","4026d9a71ac87a629e6b005c8c282605"],["/2022/08/23/Promise/index.html","ac3a56ab241ea8324445d1379821382e"],["/2022/08/24/Axios/index.html","828ddaa691d7cbaa6ae81b005bdbc37a"],["/2022/08/25/H5本地存储/index.html","b09dac1f9d801f01197716b57b07a78d"],["/2022/08/26/mock/index.html","dd5465e996228dd1d23637334e7fc4ee"],["/2022/08/31/VueJs/index.html","15fc366886c49127e695974e7238e29b"],["/2022/09/01/vue组件化/index.html","cb1c8a42d1b5657fcd787d8b0e7bcde8"],["/2022/09/04/VueCLI/index.html","11dced0063c16c1e58fe9aafdf3f6916"],["/2022/09/07/vue实现动画/index.html","0ace89c5bcc64e14c867b79a8931651f"],["/2022/09/09/Vue响应式方法/index.html","d107c037f69d24616ef75a5bede97184"],["/2022/09/10/Vue异步请求/index.html","889956d8b3ee99dde878cebfe89e6714"],["/2022/09/11/vue-Router/index.html","a4e675aeeafd0df5981fccb8dafa07ad"],["/2022/09/13/Vuex/index.html","18b9a3d34b53863227b4d377aaf84ad0"],["/2022/09/15/SpringBoot/index.html","3a9533447a019c228e638f567d0a286f"],["/2022/09/16/SpringBoot配置FastJson/index.html","00124a93932d77c8be8655f41bef172a"],["/2022/09/19/SpringBoot参数校验/index.html","658bce072a0eef98d9b21c37a20cb15b"],["/2022/09/20/SpringBoot的异常处理/index.html","73b897617aae82d913be3c335a4ae678"],["/2022/09/21/SpringBoot统一响应处理/index.html","6aae8a66b1d778fbb3d5981578d7fe94"],["/2022/09/28/Linux/index.html","3daa80e25aa5643a098bd820e614f12c"],["/2022/10/02/redis基础/index.html","ed66d6192b16dffe76cd44c0ca3aa713"],["/2022/10/03/Redis缓存/index.html","f7ecaae5e00b4b0a64ab6b5ac633d673"],["/2022/10/04/redis缓存穿透/index.html","47ec77e818c87d30575013c58cb08b73"],["/2022/10/13/Redis缓存击穿/index.html","24fafd53351a8c9d48faa241f9b84b12"],["/2022/10/14/Redis缓存雪崩/index.html","df09acc0e12407051da156437c8e2d51"],["/2022/10/17/Redis集群/index.html","690751989cd90a802b1648ed7a7c6647"],["/2022/10/18/Redis哨兵模式/index.html","494d9da6b098d0ae5c8457c9a4c46e5e"],["/2022/10/19/Redis主从复制/index.html","ad7ea5ddb498b8a3bfdd1508d1ab886a"],["/2022/11/03/Spring-Security/index.html","33a948fa425cafb3283823146cefbee0"],["/2022/11/08/SpringBoot日志/index.html","f30ff52f5350315a671a7ad0d58b4cea"],["/2022/11/11/Swagger2/index.html","cf2a1c0ae7b7508987443ee6f24f197b"],["/2022/11/21/Nginx-一/index.html","b77c9e227f03f9058e540b7393dce088"],["/2022/11/23/Nginx-二-代理服务/index.html","77768b5d3b5cc37d3dbc95654638cb62"],["/2022/11/24/nginx-三-负载均衡/index.html","b417e2ecf2ff6aa1797fa23ae544a8ff"],["/2022/11/26/nginx-四-缓存集成/index.html","fb602961bcdec870d8074a2cec19028b"],["/2022/11/28/nginx-五-动静分离/index.html","3d895fd5ffde2e29012fed5f9f216ab7"],["/2022/11/29/nginx-六-制作下载站点/index.html","1cc7806064b74d8dd0b9855d48bef20f"],["/2022/12/06/docker基础/index.html","8892ae227bfb438d2fc9722289790619"],["/2022/12/09/Docker高级/index.html","09a78e4206af30c3b8b810d7f5ff8168"],["/2023/01/04/MongoDB/index.html","bb4960a5bddc1095be367474c64ac2fb"],["/404.html","c119f261787ca2eebe937583ff31dc2d"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","fa7371fee9fd707bccdf7ff44a253835"],["/archives/2021/02/index.html","cc212dc6baac2bf593d0f0cb16efac78"],["/archives/2021/03/index.html","d8f5f3e121a326d05d1c78b96f7fd578"],["/archives/2021/03/page/2/index.html","de4e169af36d2414cc252626b5082410"],["/archives/2021/03/page/3/index.html","92aa83fb10ced474cbd588e0e6bfce71"],["/archives/2021/04/index.html","e568ec8286291e1cc8c07b51727a4c40"],["/archives/2021/04/page/2/index.html","7a9fcea41494cda50ec87d9c12d26ca9"],["/archives/2021/05/index.html","0aa3ca53f4843ae5ea6bbe3bdc396c4a"],["/archives/2021/index.html","28a8a6e6867b4b024994c4897625e128"],["/archives/2021/page/2/index.html","80712d393662728f30b52a1bb593e073"],["/archives/2021/page/3/index.html","0681442cc3b41afebb443f2885fee517"],["/archives/2021/page/4/index.html","2f9f94721083e4004e6159dbf579b2d2"],["/archives/2021/page/5/index.html","4e24697dadddc76b4127f73774f4cf77"],["/archives/2021/page/6/index.html","65d5c173ef913350af08dc8912307dc5"],["/archives/2021/page/7/index.html","958b424cfe0004fcd075ed5156f2ec05"],["/archives/2022/01/index.html","2cc6e29a3aa50aead64f811623356617"],["/archives/2022/04/index.html","ad1f93553baf2920cf4a4eae7c787b96"],["/archives/2022/08/index.html","31eb0ae9666e83a9ef1a0bad887d8e1d"],["/archives/2022/09/index.html","72b4bb5182c489da0da2506ddfd296a1"],["/archives/2022/09/page/2/index.html","6847d447992945314532664269d1db11"],["/archives/2022/10/index.html","fb2d6fe7e6f7c155f7019f85fab5265a"],["/archives/2022/11/index.html","5618ede79c177b3105a77f6b4b049408"],["/archives/2022/12/index.html","929e1a71ae5f59d2f7769a9bf28c9014"],["/archives/2022/index.html","a68e13c51bd7170f2bc799069e63c7eb"],["/archives/2022/page/2/index.html","d55ea710629ef1815314136667ab6fc5"],["/archives/2022/page/3/index.html","51f0ea5214c5dcdcccf2083901795360"],["/archives/2022/page/4/index.html","e6a889e749cbbf3b0614744c40f747fc"],["/archives/2022/page/5/index.html","fb0ef736fda354d18b94951e2c1680ae"],["/archives/2023/01/index.html","c6db38c3eef1f984ddc51360e0643f52"],["/archives/2023/index.html","3384e9ba90f6dbb4cdffdb210a0c15ff"],["/archives/index.html","8b4bc6c450140dd519c29f12517c1a26"],["/archives/page/10/index.html","786379b087cf805e79be1c3e65c88ca0"],["/archives/page/11/index.html","92723bf42f584f6493466e53cae95e8b"],["/archives/page/2/index.html","ee9a76c9a77d48ec5bcd40b9db6d0da1"],["/archives/page/3/index.html","3b944ddb22766d0487b3a6defe7f004e"],["/archives/page/4/index.html","5737420d49a1ef9f5739fc5940f8fa65"],["/archives/page/5/index.html","695332b29cc5de99c90cfc48bac4e98d"],["/archives/page/6/index.html","abe54c44776b9f426ea90172baa7973b"],["/archives/page/7/index.html","41a32fc3f6f76dfd925bc251f1ee41c9"],["/archives/page/8/index.html","5abe891d4558ba0cb8c4280b1f487498"],["/archives/page/9/index.html","e1bf41dbf93dad14bd551f7dfbabdc0e"],["/categories/Docker/index.html","bd61540a5392800980b788619411b2d4"],["/categories/LeetCode/index.html","7f287d5da9c997bb88f4610f9892fbf1"],["/categories/LeetCode/page/2/index.html","b054452831d39f2c1526b023b0cf0f68"],["/categories/LeetCode/page/3/index.html","fc6163c97daf0dbb19c46a4a0f0fb1f6"],["/categories/Linux/index.html","70b41275db9e7ff8c3b99214068f544c"],["/categories/Nginx/index.html","11e4cec7f583b2b1d6203090197638f3"],["/categories/Redis/index.html","0dec3009bf39af39e06349c6cf238bfe"],["/categories/SSM/index.html","c62695b59f35df854ab0f7cd2b3a664c"],["/categories/Spring-Security/index.html","519e8acefa90da46291ea7c251f4d0a1"],["/categories/Spring框架/index.html","5434eedc2ca946788f7407cadd6f2419"],["/categories/Spring框架/日志/index.html","5d89413f8747e768a381414e8a51c7a1"],["/categories/Swagger/index.html","6ce8c9bfd81810be046809d44f5e2667"],["/categories/Vue/index.html","020abb7e6b02d61ac2264a3692965be7"],["/categories/index.html","4fede915f0f928e1d6d61b57b4f42683"],["/categories/前端/index.html","e18035d19763e2a141dae66cde568d3d"],["/categories/博客/index.html","897f402feef8ef1b3a2336aae393a86c"],["/categories/学习路线/index.html","bd3e5dd1a2bad50021d895d599f0f7c7"],["/categories/工具/index.html","d66a799accbf3305c9227bb1424fe404"],["/categories/数据库/index.html","98ae12b10402637383a4effe15cc1978"],["/categories/笔记/index.html","02c8fa8f40a28294adc03a97d63b591b"],["/categories/算法/index.html","1a084202aa3fe3d975ba4bf12cad7b8d"],["/categories/算法/page/2/index.html","dd6e3f886514099f79a2e7894fe3e3b2"],["/categories/设计模式/index.html","76e79445527a514d62bf661c5fe472a9"],["/categories/设计模式/page/2/index.html","910302f1705365b2112f6f98d0218418"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","9c7194a612c15a7c14899ec9ce8d7ec6"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","93507f9a6aa3ff55bbebfddc442ca32b"],["/messageboard/index.html","63d0a60f26ca592ab729b7030714f9fc"],["/page/10/index.html","7d626a401844e633c9edeeeb47b535be"],["/page/11/index.html","108a0e8078c921d842cd1a9ef975952f"],["/page/2/index.html","1d65bb0e307fb47e5e695c7a8d66469e"],["/page/3/index.html","9ffcce92943c7b2ec26bc8b56a7effa7"],["/page/4/index.html","700861902dccea9c6187598c298cdf60"],["/page/5/index.html","67784a83f353379e41a73bae0b8b2422"],["/page/6/index.html","576dba4b2e168e831dcc331a98a0c8fb"],["/page/7/index.html","1a683ed174511b94e1e8ea8a80c0ec5b"],["/page/8/index.html","162ca224aa08f7c7f0d9cea309943801"],["/page/9/index.html","4ffa4fce5147c8b431a3902ac62c9d82"],["/sw-register.js","ad76a08c13746dc9294654d46aa3b832"],["/tags/Ajax/index.html","7ae55904d12022f6f7fa32388e3306b1"],["/tags/Axios/index.html","6abe75234bbfabc98791da4faf69e71b"],["/tags/Docker/index.html","bcdc630c05790e35e54d3d060fab2752"],["/tags/H5/index.html","fe5f4e48bf0aef632c37daac3c794ad8"],["/tags/JavaScript/index.html","336762daca874ffd9b646b13ae17df11"],["/tags/LeetCode/index.html","5d17fe9782e5dabd10f26b92b4872fdd"],["/tags/LeetCode/page/2/index.html","2eab711e2492c4c45f165754835eebf2"],["/tags/LeetCode/page/3/index.html","830e991a09760cc2aba90b5e148fbef0"],["/tags/Linux/index.html","82f5e0597cfa861efb153613c50a5e3c"],["/tags/Mock/index.html","f3a3cbc57bb7be9c46e17fd83f40843c"],["/tags/MongoDB/index.html","9110c148d19ca301039b743f1388312a"],["/tags/Mybatis/index.html","fd7799320af0487579e2d7e9e91a5389"],["/tags/MybatisPlus/index.html","d5ea9d67a4b2ae06842eab6bf1ff8511"],["/tags/Nginx/index.html","431e307ba05222567cb0ec84a5d3b8b8"],["/tags/Promise/index.html","3a8bc6b17380b7628534131bb82a77cb"],["/tags/Redis/index.html","6a275b52f09036441e3e4be5d65937a6"],["/tags/SSM/index.html","0cb2ff5e8a0be54d78f88fa3e7fafbc6"],["/tags/Spring-Security/index.html","4c07359b48d38f762db3a00a8ce1e02f"],["/tags/Spring/index.html","ba31f55f810fa794702030057c01f3fc"],["/tags/SpringBoot/index.html","4cb8d3d14ad17cc69e070455d2856247"],["/tags/SpringMVC/index.html","133164636cf85d737962ca1815b69f7d"],["/tags/Swagger/index.html","7e379b98b3bb0b4cc1a370913849b85c"],["/tags/butterfly/index.html","e4b59aaf2f0c43b7541a62fa64fbb8c1"],["/tags/git/index.html","333e1479031c07c9647d2332a2c242e0"],["/tags/hexo/index.html","2afdffed8e1db041f00440894933d4fa"],["/tags/index.html","e0c7a35b51451d9439061d4dac08e768"],["/tags/jQuery/index.html","209c49e484e5571845efd2e8d0a49809"],["/tags/java/index.html","d993e09a9226e6efd877d060735bacf6"],["/tags/markdown/index.html","08f4ff278ad326eaae7fde028fee7a3a"],["/tags/mysql-数据类型/index.html","dc17979485f3df8b2fdceefb00561dc9"],["/tags/mysql/index.html","10ef7882b46341f73716284cb43e778e"],["/tags/noSQL/index.html","305beff89beb12de10f7766de214dd7e"],["/tags/typora/index.html","34cfacf8f6d5b58a222007febc256a1c"],["/tags/vue/index.html","8879bf15b47674f96fae72913f0e0fb0"],["/tags/享元模式/index.html","7dca961c52ec7c9f8b14a0ff27b6de47"],["/tags/代理模式/index.html","d5300b2c4ba985d49894cf58af64fa72"],["/tags/分布式/index.html","2651be565843e639ac4ba1e2e3823a90"],["/tags/前端/index.html","ef69b5b8c17a54613ace030c1cda97cc"],["/tags/前端/page/2/index.html","68023c9be6832291eddbb1b1ab52b3c8"],["/tags/后端/index.html","14aba19986cbdf22d433ea4156ca8adb"],["/tags/外观模式/index.html","e74065b3423fc60f440f06cbe4717630"],["/tags/容器技术/index.html","34ce1fc81ef2d047dabf75e40d6ec4d0"],["/tags/工厂方法/index.html","6987067e22cdfec17ed2768d8df79ad0"],["/tags/抽象工厂/index.html","5329ff8a5e00e260cd4769f17017697e"],["/tags/排序/index.html","27c2d64c7f85518e046953402f0e1b92"],["/tags/数据库/index.html","20aa8613f22dfeb7553305b3ebd95853"],["/tags/服务器/index.html","cc515bed2192d27e2eada06bfc5bb996"],["/tags/查找/index.html","dc90e9e47b813dd4e73d5af62b826e99"],["/tags/桥接模式/index.html","b004b91ebace44aa647363380c152244"],["/tags/模板方法模式/index.html","635d76356cc0363ba086defc1385dca0"],["/tags/版本控制/index.html","e67e07c32f5e397ee0bb7ba6424fe7bc"],["/tags/策略模式/index.html","6aed625f1fc7b805e7fc5d5fa5a9aca9"],["/tags/简单工厂/index.html","4adb92eef709c315dfa8f2d12332cf64"],["/tags/算法/index.html","d2e3075867d06007a8086ce9f6254e56"],["/tags/算法/page/2/index.html","f57271f67fb0c178fbc8564f7f472cbf"],["/tags/组件化/index.html","f50f051037dc9dbc0dee767a13a37f93"],["/tags/缓存/index.html","5f760b617971d2e70a67b93cc5b1c6c8"],["/tags/观察者模式/index.html","44c5764fa44f646c35d099b6695137da"],["/tags/设计模式/index.html","819889c948c747b5fa4d1bc1a1366f36"],["/tags/设计模式/page/2/index.html","b0bac1cdcca167657324206717e030a2"],["/tags/责任链模式/index.html","03bc78b9ee07d31fd4d721991ac6a348"],["/tags/适配器模式/index.html","1db560b864569b9ca399d32a1573bf77"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
