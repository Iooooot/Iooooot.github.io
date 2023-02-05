/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","6ed68ff526b29a93c3cceec11b1a0786"],["/2021/02/22/博客的搭建/index.html","81889484a12c76be855172d942cde6ac"],["/2021/02/23/如何使用markdown/index.html","a08517f8c8a04f340f43b5d977dd9f93"],["/2021/02/24/mysql命令大全/index.html","9af78334c3de921d0732c1de89ebb5b5"],["/2021/02/24/mysql数据类型/index.html","d06f1d3485683d5f5334b9d7a96a912f"],["/2021/02/25/Git的介绍与简单使用/index.html","486241918ecfe675139b8dfc17fce59f"],["/2021/02/27/简单工厂模式/index.html","717f8aafa0232dca263ddf1c5f95ea10"],["/2021/03/01/工厂方法模式/index.html","eedbf73c1abeac8b0d393de89da775c0"],["/2021/03/02/抽象工厂模式/index.html","6501152fe25f4689e45e2a85f089f841"],["/2021/03/03/单例模式/index.html","2ab9dad30dad9acfbd530247893c6ff2"],["/2021/03/04/观察者模式/index.html","55bae47bd5ce4ed68a7f9ffabc0bbc1c"],["/2021/03/05/适配器模式/index.html","8c50c95131a72b66479c03ff99df5601"],["/2021/03/06/模板方法模式/index.html","44227f8fa01d6b9425ab545577056be1"],["/2021/03/07/责任链模式/index.html","0ff79ddcce427f80fea2380de2250e5b"],["/2021/03/09/代理模式/index.html","cf35bb4b15a61a97846098fd172ef66c"],["/2021/03/11/享元模式/index.html","ef665a81a0b037ab1b5126f6e6486e20"],["/2021/03/12/外观模式/index.html","d58a9d737819bd2ebbd1a821166bb82d"],["/2021/03/13/策略模式/index.html","d2a1f2bed3b6b7493988a27d4a427761"],["/2021/03/14/桥接/index.html","29155ba1636e9f6658958d5a39e58e3e"],["/2021/03/15/LeetCode-多数元素/index.html","912318ca8ac086b9bec5e740379c8764"],["/2021/03/16/LeetCode之汉明距离/index.html","8d5521ab7b9caace16838df06c0e0100"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","c963d62619775b0e88e51dc97dab8a01"],["/2021/03/18/LeetCode之两数之和/index.html","3d0eac952da0f985c005bcc6fa621fbd"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","c1b56eac52fa0d39f128db8878b55073"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","3c6a2c19f687ffe17feac1535e1c26e0"],["/2021/03/21/LeetCode之有效的括号/index.html","918d26b07f62ce940c44bff0e365c119"],["/2021/03/22/LeetCode之移动零/index.html","9a70a9d643f0328f80b90c917b82895d"],["/2021/03/23/LeetCode之爬楼梯/index.html","1c565a8d623f1ec26fb6f2948a0f1765"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","2245baefd89888edfd3e43052dbbd4b2"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","9a5f6d036c12e0156bb002dac735a0f2"],["/2021/03/26/LeetCode之最大子序和/index.html","49292a21bc78f5d892d2ccba0946f87b"],["/2021/03/27/LeetCode之子集/index.html","21b07aa578ce83bc9ddfed299ddd5afb"],["/2021/03/28/LeetCode之合并二叉树/index.html","d213a0b583e09aee5921ee1a04fbde68"],["/2021/03/29/LeetCode之翻转二叉树/index.html","a036d79d84f260f9fe10f67a0e10f1e2"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","107fee4c1978dab6dd39d13b0ebc493f"],["/2021/03/31/LeetCode之翻转链表/index.html","62d85291207dc575713506507022cd89"],["/2021/04/01/LeetCode之相交链表/index.html","d1a8fb6865ba0a5ad00b3eee89bf42f0"],["/2021/04/02/LeetCode之最小栈/index.html","7b695becb73877af43ec6efba0847093"],["/2021/04/03/LeetCode之对称二叉树/index.html","3ee0ca76dcbd339fa272a7a234f02071"],["/2021/04/04/LeetCode之环形链表/index.html","dfc03203b254779f2e2cbec5de96f37a"],["/2021/04/05/LeetCode之二叉树的直径/index.html","f859ae9bec04d9b8152c6e33dadc00e7"],["/2021/04/06/LeetCode之回文链表/index.html","47f9dd43728edab7534a3e81d94efe2d"],["/2021/04/07/LeetCode之比特位计数/index.html","00a84b30f9a872f95a7d8735531dff4d"],["/2021/04/08/LeetCode之全排列/index.html","97f8809de97fcec389a1e0ea3bcf320c"],["/2021/04/09/LeetCode之括号的生成/index.html","6e6173e528f8aa15bca065336a9fb79f"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","93f933b62d09bd6480467aed83495f9b"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","a5c249e83b141dcb3f1dd1e3b1c6221a"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","9a8fb2c73a17202a72057353c26e45d8"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","b67f1ea7cb0061bb2fbfb7d47cf6aaef"],["/2021/04/14/Mybatis/index.html","3c0b246f8efc3460ccd8b1e2a878df40"],["/2021/04/15/Spring-1/index.html","33ebcf177b06a68bbe4daf883688992c"],["/2021/04/25/Spring-2/index.html","2472276c86d7283f9784963a8b89e581"],["/2021/04/27/SpringMVC-1/index.html","6e881c3b04dfa21fc358c65348eb94c6"],["/2021/04/29/SpringMVC-2/index.html","f5181a4c949971c12056dba280f374f5"],["/2021/05/03/冒泡排序/index.html","b10226ea3d24ee0af0f73aceb18520a2"],["/2021/05/08/选择排序/index.html","e493a5df803937683cdc852d37c710b7"],["/2021/05/12/插入排序/index.html","a371ada5c952ad22ff1dd976901700cc"],["/2021/05/15/快速排序/index.html","2c710786f62f85371fbe2303763e5a4b"],["/2021/05/19/基数排序/index.html","f7047ebdcd6d34828efc001ef8975bca"],["/2021/05/20/哈希排序/index.html","c6225fb6c6cf6e7968fcf931e92637bf"],["/2021/05/21/归并排序/index.html","dc1dc18b0c92e58d5ff669e01ae17504"],["/2021/05/22/二分查找/index.html","b0d629d4b135fa5f280a4b4f2fd2c17a"],["/2021/05/26/差值查找/index.html","0c7c8898edb4f4fd6aea823b889140fb"],["/2022/01/12/高精度大整数计算/index.html","5de921b46da3f96b9c38442b8bcaaaf6"],["/2022/01/22/前缀和/index.html","ba9529a9605333845b6eced716f82835"],["/2022/01/23/差分/index.html","9abcf51b18b982b3d3b9057302d8a91a"],["/2022/04/04/MyBatisPlus/index.html","26edfe4225fcd0ac35385634f5c9ec81"],["/2022/08/17/jQuery/index.html","055de22347592efeb0f1c96f447c815a"],["/2022/08/19/JavaScript/index.html","51d7216793a7769e115c1b22def74ad1"],["/2022/08/22/Ajax/index.html","9c2e211d3c4ea848f2f6f13433dad25d"],["/2022/08/23/Promise/index.html","137c339059ec38ab45d4fc7a7cae44ab"],["/2022/08/24/Axios/index.html","651096eab64120227932be0df29f894c"],["/2022/08/25/H5本地存储/index.html","35e97584943dbb048842630b86279cd8"],["/2022/08/26/mock/index.html","5acf4ebf42e00efa0985d02bfdbf39b0"],["/2022/08/31/VueJs/index.html","cb289d8c925a7459feb9b3b66e530c4c"],["/2022/09/01/vue组件化/index.html","29adef6f1eefe7381ed5015ec40a5245"],["/2022/09/04/VueCLI/index.html","41de4601ce665920b49b199cf0f6582c"],["/2022/09/07/vue实现动画/index.html","8e0e83eb1c3749a9d6091da3691d31ec"],["/2022/09/09/Vue响应式方法/index.html","8fa61d6d6aff81da4c46f69a30be522a"],["/2022/09/10/Vue异步请求/index.html","2e0684010bbdf1add9e4144df855b37f"],["/2022/09/11/vue-Router/index.html","b9ea834a04b048d0123923362c815ac1"],["/2022/09/13/Vuex/index.html","a87f8d3bd7c75dc62eb7d94a9f8e6b63"],["/2022/09/15/SpringBoot/index.html","3e8055441147b3e3a87e30263d9198b5"],["/2022/09/16/SpringBoot配置FastJson/index.html","9b9904547892d56d55125fcfc72fa92c"],["/2022/09/19/SpringBoot参数校验/index.html","9418be0bd9941767959908112ec41f9f"],["/2022/09/20/SpringBoot的异常处理/index.html","6beabf716c1dcfa311a23a0c6da66d8f"],["/2022/09/21/SpringBoot统一响应处理/index.html","cbdf49fc42d2e0d5b31d48eda66c3152"],["/2022/09/28/Linux/index.html","575a21cac18aa0e38392efb6b07ff15b"],["/2022/10/02/redis基础/index.html","a4f238ec849cbacd77ebaa2e3f87cae0"],["/2022/10/03/Redis缓存/index.html","44b91483a2852102eb5f6178b7d37363"],["/2022/10/04/redis缓存穿透/index.html","cf1ddd798843de4787d10baf8ea0f21c"],["/2022/10/13/Redis缓存击穿/index.html","a9ea399cab05eb8444bb6fd6e8ae1038"],["/2022/10/14/Redis缓存雪崩/index.html","a74b55cfceaf2ce4557c6e38420378b0"],["/2022/10/17/Redis集群/index.html","40437a3b3346e83f9084beffaf54c639"],["/2022/10/18/Redis哨兵模式/index.html","c9be2a28db80da302663403f193b2120"],["/2022/10/19/Redis主从复制/index.html","de33aa4b606435687df7cd3af5bbc5ba"],["/2022/11/03/Spring-Security/index.html","d9221bbe4c62bd5880e5b99301911c59"],["/2022/11/08/SpringBoot日志/index.html","fb52698ab927a936c3f86e3809c8c918"],["/2022/11/11/Swagger2/index.html","98d5c03e012811f74ccef349e63c7eb0"],["/2022/11/21/Nginx-一/index.html","309cf0eacdb4fbb33634111854778e8f"],["/2022/11/23/Nginx-二-代理服务/index.html","b7c35945ae823938337946afe1289731"],["/2022/11/24/nginx-三-负载均衡/index.html","b1ed91eaa19d63ceab854c17c6563d00"],["/2022/11/26/nginx-四-缓存集成/index.html","f9243667fd7abb754d97b59a916986eb"],["/2022/11/28/nginx-五-动静分离/index.html","19fa3f50c210ae46456a663cced89c7f"],["/2022/11/29/nginx-六-制作下载站点/index.html","c0e6e1f85df0df8c8724c5274cc38119"],["/2022/12/06/docker基础/index.html","9683105ee897c29bdce179b9add33f1c"],["/2022/12/09/Docker高级/index.html","1bb1f4e7e5711cf98dc9932d24ed9769"],["/2023/01/04/MongoDB/index.html","1d32c1341821e467d5932693ce28fe30"],["/2023/02/05/消息队列/index.html","a0d9070771ca4634eb8ba7a592d05898"],["/404.html","0eead6d4bcd908671e7aedd6d83e995b"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","c08bf1288949f6f4dbd96a2dc6ffef5f"],["/archives/2021/02/index.html","9dddf192f48a4b8b31ac372b3c548a60"],["/archives/2021/03/index.html","26cbd8c8612afb8f1834eecd88490a3e"],["/archives/2021/03/page/2/index.html","017ff53830d2c9190834ed5c0738e29c"],["/archives/2021/03/page/3/index.html","a4eb5e41bfd104c73a094127acde9f63"],["/archives/2021/04/index.html","5f5aad2518b7c3ecae7d26b6adcf8a6f"],["/archives/2021/04/page/2/index.html","f1c38be09251086ad06009a4bcfdc471"],["/archives/2021/05/index.html","704983a2d5812ec51ba5f19a22dec396"],["/archives/2021/index.html","7a8bfedcbac42c73af3bbe73eaac7389"],["/archives/2021/page/2/index.html","df9cc6f6ff511b352b1347feeda5f329"],["/archives/2021/page/3/index.html","230a1c5414aaeb2bb57bdf621c792591"],["/archives/2021/page/4/index.html","d3e761102b1efaba48c6d616aa443162"],["/archives/2021/page/5/index.html","4aa3fcf89188faa57455decb1c31f754"],["/archives/2021/page/6/index.html","82c54a3a690b5f2eefffc76743316f15"],["/archives/2021/page/7/index.html","93380100e400a5ed2f3085cbb8d310e0"],["/archives/2022/01/index.html","61b83adce7f6349dcf8dbbc563a723a8"],["/archives/2022/04/index.html","fc3d7066dd1944af433c9c359314818a"],["/archives/2022/08/index.html","1435b46033051b638515b24e4374d822"],["/archives/2022/09/index.html","423abb4c55ecb14d35b2d75b254d3be4"],["/archives/2022/09/page/2/index.html","3215596136a2e6bd1ae3746f72815c6b"],["/archives/2022/10/index.html","a2c3aa56e695bf6b69691314c26a0858"],["/archives/2022/11/index.html","b27ce9612d7ad75768cc3432adee119f"],["/archives/2022/12/index.html","754dab436a329a22aa6baa4d87718268"],["/archives/2022/index.html","f50f87a7b936a2dd95dabf035074a9b7"],["/archives/2022/page/2/index.html","ccd26a86db343da0fd4f41a16a504577"],["/archives/2022/page/3/index.html","82fa03db7db7d7eecadf698131b92796"],["/archives/2022/page/4/index.html","7d12d1cc55a010692db530f025e53447"],["/archives/2022/page/5/index.html","4e41a1553bce2ea9e4aa59ede2be4a14"],["/archives/2023/01/index.html","2710bec697d815e896b81325e7bbbf7a"],["/archives/2023/02/index.html","09e0d1e680b26533b4e8ace1b4d5ef64"],["/archives/2023/index.html","ac14ae014b621064f887ba74ae84c6e8"],["/archives/index.html","59ee5d7f34b47ab19313c5d6074c7692"],["/archives/page/10/index.html","3dd3081b0c4387616e56942c969bb913"],["/archives/page/11/index.html","6562a16d69d46996669b63efee5fa660"],["/archives/page/2/index.html","5978d1aeb34a9a3564df24ce78d378f1"],["/archives/page/3/index.html","bb6c9ea3e1f694b19d27b463711af16d"],["/archives/page/4/index.html","8abd1a9187fe1f9dedf32fc8346bde01"],["/archives/page/5/index.html","8299fe4de3e4d3e9f448fb0c316b008d"],["/archives/page/6/index.html","a04c6be7fa17f0a1b57848f6b2b1edb6"],["/archives/page/7/index.html","a00e663f6e14b19f5aabe08c6e2c2165"],["/archives/page/8/index.html","e4f0d3801ca94066a3b80c21c3c2a975"],["/archives/page/9/index.html","e14c70607dcc5926f13ac8becebe6320"],["/categories/Docker/index.html","458f559007db57a054be125029dd5c41"],["/categories/LeetCode/index.html","c313448db30e5e2b56c63a101f43d2ac"],["/categories/LeetCode/page/2/index.html","92a00ebb5f9115c1ebba25cb79911047"],["/categories/LeetCode/page/3/index.html","1690324b1ac3a588796e301ddf5b907c"],["/categories/Linux/index.html","f0be3f051326b92ce9382873ee52aa9b"],["/categories/Nginx/index.html","e3b9ba2bb0605237073193b6f37493f9"],["/categories/Redis/index.html","0b46ec67d7f9c36dfa205c44cbd118c2"],["/categories/SSM/index.html","1097769415eba66496d07d8799328ce0"],["/categories/Spring-Security/index.html","aef132c77ead8a984cfee7e36c6f4f95"],["/categories/Spring框架/index.html","e807396f01a7dd18f383f1bb391a1274"],["/categories/Spring框架/日志/index.html","741bcf1abfab71d399665a63fcbdc411"],["/categories/Swagger/index.html","a6c3f6408d3d537330cfaedaf4afe378"],["/categories/Vue/index.html","76ab7465b00081d2126a68704ec77f2c"],["/categories/index.html","2118190cc88b43f315974dc5fabef255"],["/categories/前端/index.html","11f1d6f3dda6a82465cdc17e4fd80533"],["/categories/博客/index.html","04f23a98f8e0b7401c2ff7d0bef3e7dd"],["/categories/学习路线/index.html","b803349e928abc2ae60a2aa76fe81f33"],["/categories/工具/index.html","539e53abd5b6f3ffb0a26a818bb954c6"],["/categories/数据库/index.html","ecc20c074eb9990c56653c12d7362542"],["/categories/消息队列/index.html","47eac3d10dcc7c2bb14995229c2ec70f"],["/categories/笔记/index.html","e0a3b1c22e44653dedbf23b4ed9e6be5"],["/categories/算法/index.html","e76ea4770f5ded6b3f6ebbefb7cd7930"],["/categories/算法/page/2/index.html","c632c399a189e4d320cb198e889b3883"],["/categories/设计模式/index.html","9113beb93517413bca4d3dbc29a6cb26"],["/categories/设计模式/page/2/index.html","b7fd60c631524f09c1d632f0f6d7ddcc"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","5a4f3d90b8920a4f79098618bfd8a359"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","ec0a11a249daf7fe4031de631dd2ef4c"],["/messageboard/index.html","5c5c1090ae3211f7ea7ff8cef83e5019"],["/page/10/index.html","a259ca89ae84e23e4d8ce18e010b484b"],["/page/11/index.html","d3f9f618f27bf7097cffd8a5ae6a7667"],["/page/2/index.html","db168c05366759884b9cfbc0eee861f9"],["/page/3/index.html","ad869762f7d24d69fbae19634d3c849a"],["/page/4/index.html","5b1a9e7894fb3392160e8501bb140b35"],["/page/5/index.html","a4bcc6c388463f5db1e505527369dd85"],["/page/6/index.html","6f6673aa9589e20613069dba23d61ce9"],["/page/7/index.html","332d67b2641c7df9d0f2b7c8dd480ae0"],["/page/8/index.html","17b4f8d3e1b55858dde9d8ced9c6ae2a"],["/page/9/index.html","46801e7a571ba3c918df28915bc9cddb"],["/sw-register.js","60e680a47a5372795ccc93895ec0fe3f"],["/tags/Ajax/index.html","bd3c0f82fd68fe24adb83af4569b8317"],["/tags/Axios/index.html","37a74d94472a399313bde60d3190b410"],["/tags/Docker/index.html","3e231340d9df53b6bd192c5e20723e61"],["/tags/H5/index.html","a63f8616804def2cd63de275321aef66"],["/tags/JavaScript/index.html","6cd5e2d1ad2c87982004fcfbb24a46b1"],["/tags/LeetCode/index.html","a21f0c67cede1946e1ff386856e747c9"],["/tags/LeetCode/page/2/index.html","2282cad794b85f09fd43f52b15853dd7"],["/tags/LeetCode/page/3/index.html","ba0869c0d99904458de1c7973fe01986"],["/tags/Linux/index.html","ac1c319c1083617b8d678063379b7aeb"],["/tags/Mock/index.html","77be0f012ead7d5ae36d90cf24ba3be5"],["/tags/MongoDB/index.html","ce69ff015c84c381d929cc19ab8a1ef2"],["/tags/Mybatis/index.html","c7d02ada8e8cd65e917031c6b550463e"],["/tags/MybatisPlus/index.html","a918764d6f9cd068331e8e39e4d4efa5"],["/tags/Nginx/index.html","631909c504196289caa15eececa71928"],["/tags/Promise/index.html","67c9631552f18e78e5628f6bbad4fcf9"],["/tags/RabbitMQ/index.html","28bc746f810298b3ff70bee57d0fb1a1"],["/tags/Redis/index.html","cd80c756562090677749f58ee1c93be9"],["/tags/SSM/index.html","9299fd787e0db67a348ab15cb872ec6a"],["/tags/Spring-Security/index.html","99062b1054f788f2be3192ec0433fe16"],["/tags/Spring/index.html","1a7337bf3acde23909b53e4f354af148"],["/tags/SpringBoot/index.html","702da117eb46e81c6b9f4054089a5f96"],["/tags/SpringMVC/index.html","ec74f407dd22420e05959c649a29ddbe"],["/tags/Swagger/index.html","65c8c6f9df44df0f557ddc26c8e696cc"],["/tags/butterfly/index.html","f3fa151eefd9715b89a3e4affb0897b6"],["/tags/git/index.html","8188c87d488461dd26d94966a1e48f0d"],["/tags/hexo/index.html","888e2e562ba58cd633a8e8c0ae585f79"],["/tags/index.html","1924810d74c96f7e26197313fd389353"],["/tags/jQuery/index.html","e4a31d8612909180465948f516ccf90e"],["/tags/java/index.html","8aa4e4f4e75e1b5f1f5d68b3dc674e81"],["/tags/markdown/index.html","76176a881a824ead15a3cd2aea5c1092"],["/tags/mysql-数据类型/index.html","98c4cda9d96252c47fb353503b1f8e2a"],["/tags/mysql/index.html","d1987210eb3d1f6724b3649c77e18720"],["/tags/noSQL/index.html","4992a68dc2f6820499384286d2f4f56e"],["/tags/typora/index.html","18d17ff0dbfd03b69860fe48a2569cdf"],["/tags/vue/index.html","2e5af0f4e9a36914a8527ae178b97c09"],["/tags/享元模式/index.html","4cad7154e69b8f5b0bca954f5eb5adcd"],["/tags/代理模式/index.html","5ce68579a8cede7f07395c8df82f45f3"],["/tags/分布式/index.html","9942f795fa8bcfea394e04d9affc6fba"],["/tags/前端/index.html","6d4e01534df5c8a88c591da0317db809"],["/tags/前端/page/2/index.html","371519000783e21d58dfe2815584e766"],["/tags/后端/index.html","77eeba45b5fe47af13b217ab126bc651"],["/tags/外观模式/index.html","8f1bb4a9cf6091c582040442789fffad"],["/tags/容器技术/index.html","4a16026055592a071216219042fdb900"],["/tags/工厂方法/index.html","f86383dc9a28164240bd567633728ed8"],["/tags/抽象工厂/index.html","b194694bad5688a419b7f5bd8f657adf"],["/tags/排序/index.html","b80985e4901bcd202c1b9ff2e5ed45d5"],["/tags/数据库/index.html","bfaec5e69284fbc10f3c6b929f089b2c"],["/tags/服务器/index.html","b37698a647cbeedd29ed5c9b0c87e713"],["/tags/查找/index.html","a7ad0d1e8c007357ab98cdce2cb2405c"],["/tags/桥接模式/index.html","36aa5c8e8dfaa28e9f1680345de7b966"],["/tags/模板方法模式/index.html","47bd6df625903bbc241b553115370537"],["/tags/消息队列/index.html","53095891f21afdf3c38e0c6e8ee84557"],["/tags/版本控制/index.html","77990e2d46884b9f9e65c7c1fee6704f"],["/tags/策略模式/index.html","00c422a12931d1e30e414d02674b8686"],["/tags/简单工厂/index.html","243c507150adde513119111418cfc4f9"],["/tags/算法/index.html","6cddbda55ef7cf4c3e3511dfead6d758"],["/tags/算法/page/2/index.html","080152e81548c80a538dbc677f05b223"],["/tags/组件化/index.html","f2f92cd760ea0613c117ec677670dbd7"],["/tags/缓存/index.html","094996c889a4a0bf356229734c6dddb1"],["/tags/观察者模式/index.html","a4e39cf9e1d38c26c87e8cd5410f3ded"],["/tags/设计模式/index.html","6e320ba4d97881d5198720872bd78fbc"],["/tags/设计模式/page/2/index.html","4e7e354340fed000a47099be108c56f3"],["/tags/责任链模式/index.html","78e031e17684167fbb1b27fe4bfb570a"],["/tags/适配器模式/index.html","5e0484ffc500d354c58d6b8464705c8c"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
