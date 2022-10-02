/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","1cbb0fd0ba9b9a49761c0ba270ac2caf"],["/2021/02/22/博客的搭建/index.html","2b022ea0ef885120656245a7b83594b8"],["/2021/02/23/如何使用markdown/index.html","b2db985ceffcfe793aa1756ca978fefa"],["/2021/02/24/mysql命令大全/index.html","de1614dd5f4e46aea7665be3f69d3abe"],["/2021/02/24/mysql数据类型/index.html","8b03c4e52138218c3b895dd1256e5768"],["/2021/02/25/Git的介绍与简单使用/index.html","4cdd60e406d718829b500b1a5ac9bba4"],["/2021/02/27/简单工厂模式/index.html","27f544d3ae956c5d60ea0576721d0a01"],["/2021/03/01/工厂方法模式/index.html","b06963127e9b9b5d4e404b29433cad94"],["/2021/03/02/抽象工厂模式/index.html","1895195c80c463b4225131595f0aa892"],["/2021/03/03/单例模式/index.html","aba91378633a1fd7f64a0d8c19cea9f0"],["/2021/03/04/观察者模式/index.html","f3b4cff2d4fd31abbd5a36e4782b3924"],["/2021/03/05/适配器模式/index.html","2d4680037ef98c5a48ca7ab6b5586e9a"],["/2021/03/06/模板方法模式/index.html","a5da179ee2d1e7a5716a8db2a24e3ed6"],["/2021/03/07/责任链模式/index.html","1e936b3be54262a41e574dea889e7778"],["/2021/03/09/代理模式/index.html","cc0e98f1f5c91b6557d17b7f45e3369c"],["/2021/03/11/享元模式/index.html","2868a522a9051903eee1143818cd3ca1"],["/2021/03/12/外观模式/index.html","4079e54b24342f419c612d86fee0e259"],["/2021/03/13/策略模式/index.html","d9fc99fefc2eb4a0f9abab76783cfb05"],["/2021/03/14/桥接/index.html","f4fa3560cfd70ccbb8c5e73eaceada04"],["/2021/03/15/LeetCode-多数元素/index.html","6c72a179c1b6108d445f35082d6f6f0b"],["/2021/03/16/LeetCode之汉明距离/index.html","883cf55a38fe0e08ea1e095eec9946bf"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","3c37f2b8a019e96405d3029bbe0b8c6b"],["/2021/03/18/LeetCode之两数之和/index.html","810dd99a900b99d69d7a95ef224497ee"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","fa318e5204d1d8265e0c3b4be35d3c69"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","91ce6c9cfc586b0b060f6c645134d15b"],["/2021/03/21/LeetCode之有效的括号/index.html","c425ae47681f6e37e1d5d81e9f5c1765"],["/2021/03/22/LeetCode之移动零/index.html","59d28bfb43339df02fc77e0ff7034d77"],["/2021/03/23/LeetCode之爬楼梯/index.html","301886c5fde373cf1fb2741fc0ccb18c"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","8909c0eaf0b7cf8aea2d602c81aa2eb9"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","fcab9cef27b53f02a52cc852d7e92f5e"],["/2021/03/26/LeetCode之最大子序和/index.html","31314e158ebc11e93a7f2465200c3263"],["/2021/03/27/LeetCode之子集/index.html","0bcc06b78fc31cbf138c4c73c012c96f"],["/2021/03/28/LeetCode之合并二叉树/index.html","cd248fe2c1619ca0a4eee963abd49cef"],["/2021/03/29/LeetCode之翻转二叉树/index.html","ebcfeadd4de95c29bd96e324b6f03458"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","0b29a538e96bf6424a8c1fcd0601d52d"],["/2021/03/31/LeetCode之翻转链表/index.html","51f33901caa024580bcd76cd5d33e6e3"],["/2021/04/01/LeetCode之相交链表/index.html","a86378fc3cfabde02d6ab8181a58a091"],["/2021/04/02/LeetCode之最小栈/index.html","7322bcf4e3b0fcb25d151be7b6f4a20d"],["/2021/04/03/LeetCode之对称二叉树/index.html","bfe8f0f8e0678d61a133cb80ba33daa5"],["/2021/04/04/LeetCode之环形链表/index.html","35842aaea9a4ae91d56fd37545e28d09"],["/2021/04/05/LeetCode之二叉树的直径/index.html","36e49f4954ffb074bf5e41f6f3689c3c"],["/2021/04/06/LeetCode之回文链表/index.html","b70bc425bc0629d6ea87cbb43cf98d66"],["/2021/04/07/LeetCode之比特位计数/index.html","2bf6b744edcae8b64ab474b3fc8b5a85"],["/2021/04/08/LeetCode之全排列/index.html","87bad6990971f1cdb517c6deb1b7e8f0"],["/2021/04/09/LeetCode之括号的生成/index.html","46fb90940b7bbea68703c5785f694bcb"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","f4e8de57f818660d932433ac0f83abc2"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","782986e050bbb48ce2059f0e5b6419ca"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","58ddcd0e80c5ee04111729ee51a3059b"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","affca48915f72708f18e64c55672ae01"],["/2021/04/14/Mybatis/index.html","743ac787b2d12002134432e66956612d"],["/2021/04/15/Spring-1/index.html","76c94f0e6f57960ef73e55e3e514566e"],["/2021/04/25/Spring-2/index.html","e727ee08e5cc4bb4fed152bd8e01e9bf"],["/2021/04/27/SpringMVC-1/index.html","35c500c4176ee92f81c164e703a6f6f9"],["/2021/04/29/SpringMVC-2/index.html","ea92501882ac692578ca673d50a03132"],["/2021/05/03/冒泡排序/index.html","f433038efae37786db468e79383dabcf"],["/2021/05/08/选择排序/index.html","a20cb275915494dce8f75f90f61e6475"],["/2021/05/12/插入排序/index.html","848538ef3b19bba35355168b75c3b320"],["/2021/05/15/快速排序/index.html","3f13636528f850c0626e1eec148a558a"],["/2021/05/19/基数排序/index.html","6930250a007dd00a413517b040b341ba"],["/2021/05/20/哈希排序/index.html","627e2d29ce7cab34d07c06ced140fcf3"],["/2021/05/21/归并排序/index.html","4436c6684fb05b0befa3099518d330cb"],["/2021/05/22/二分查找/index.html","6135ade04cf1235b4903c5ea85f3f275"],["/2021/05/26/差值查找/index.html","8e7315bb0d354190ab1b0f057faae217"],["/2022/01/12/高精度大整数计算/index.html","dd6d1b5dc4dbbdb770261fc5566f95f6"],["/2022/01/22/前缀和/index.html","8cc8afad9cbed9e4f0b24db1c28f98a9"],["/2022/01/23/差分/index.html","c25a8177175d92ae8a517338f7294097"],["/2022/04/04/MyBatisPlus/index.html","d32a7c55f448782064b5e1ff21e21926"],["/2022/08/17/jQuery/index.html","57927333defc23e4443103c8b98e2042"],["/2022/08/19/JavaScript/index.html","c50e29f295ac26f87e447e7cdd51cad5"],["/2022/08/22/Ajax/index.html","19d0cea1720df51375bd00009dc46f55"],["/2022/08/23/Promise/index.html","098a82d635777f2b2a48b1eff304d753"],["/2022/08/24/Axios/index.html","a9f06071cc5344a0610f5af77f5bce71"],["/2022/08/25/H5本地存储/index.html","1c531fa494dfea64e48de1e9148dbba7"],["/2022/08/26/mock/index.html","cb9df64677c526bc2fca25fb5d826dc9"],["/2022/08/31/VueJs/index.html","22a9e04ca788c9542869ee4e42e35827"],["/2022/09/01/vue组件化/index.html","72ba1e649f6bd14fc1e7e4467847ed4c"],["/2022/09/04/VueCLI/index.html","1700bc206cb53dc37d0682f0ad830c24"],["/2022/09/07/vue实现动画/index.html","bbe35438f05e620d3e5feccae0d8a70a"],["/2022/09/09/Vue响应式方法/index.html","dfc9d59648c0c61c7986f624a491ee2f"],["/2022/09/10/Vue异步请求/index.html","25adf9c4ef891758733e228c8b575581"],["/2022/09/11/vue-Router/index.html","95d6cedc4a91ff1a83e3fd15d9e301ee"],["/2022/09/13/Vuex/index.html","af8c60d58f2e6e9e4bc7fa2f9faca440"],["/2022/09/15/SpringBoot/index.html","91261f1d121d83587bc6857bbd2cd4ad"],["/2022/09/16/SpringBoot配置FastJson/index.html","6323c31c2ff98f693485d629eae74bc4"],["/2022/09/19/SpringBoot参数校验/index.html","cee975b72557f1ddc0c49b952bb3df57"],["/2022/09/20/SpringBoot的异常处理/index.html","23a74513426542e8c400383b03239e33"],["/2022/09/21/SpringBoot统一响应处理/index.html","4659440b7517b0568ccd71e412a20522"],["/2022/09/28/Linux/index.html","6663abe524803635c75a8c65f4ed7ae1"],["/2022/10/02/redis基础/index.html","7b843b8b86e5ce88162143a59bfc468e"],["/404.html","d2468dde101f51aadb87ead60ff272b4"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","64e36d11432e6bafa5f7e19d33d9f0f3"],["/archives/2021/02/index.html","110b661e6efed1ad104df23c64931f24"],["/archives/2021/03/index.html","7add8f714bcbaad2881a6510983d28f3"],["/archives/2021/03/page/2/index.html","6461a5efbf2fdcb2c2c6b7be897a0e90"],["/archives/2021/03/page/3/index.html","602ae1bbb5887f991a32f9ffdde5a35a"],["/archives/2021/04/index.html","eb15f7cfff4d43df6d79372a7943ef78"],["/archives/2021/04/page/2/index.html","051fcebc21106bec1869c870c228a2df"],["/archives/2021/05/index.html","60ea172078ca73433be72bce20ad2aad"],["/archives/2021/index.html","e4b3f25727a4269f6c7c2d3cc073bd4f"],["/archives/2021/page/2/index.html","69b01c77f8eb46346086197fa0662d5e"],["/archives/2021/page/3/index.html","e3922f9d06e8b5716572579ab42f5b35"],["/archives/2021/page/4/index.html","cd588d559fabf5ac23b5e6ef9711c1be"],["/archives/2021/page/5/index.html","af3fbd3721dcfb641253458336f1383f"],["/archives/2021/page/6/index.html","016525bb4f5eeacff4ff728d07c335fd"],["/archives/2021/page/7/index.html","0e85e022068e4b1de70273aab7f9a9e3"],["/archives/2022/01/index.html","606d4e481f1dfd88188ca27b8f9ffb6a"],["/archives/2022/04/index.html","1ade7ba1a219c6c463c82a1a68893d68"],["/archives/2022/08/index.html","0371c71b2723ee219e82d2133731fea1"],["/archives/2022/09/index.html","4c9360ee4a3dac6e262c25903438f154"],["/archives/2022/09/page/2/index.html","1f298333f6a4e6aa5a5e932ca65ccc9d"],["/archives/2022/10/index.html","bf131f337e61707ef7cd74e33e0b7afd"],["/archives/2022/index.html","326cd5c4d33646afd0ddcf859b364644"],["/archives/2022/page/2/index.html","f51ede57746923d0fbf627029e378e9a"],["/archives/2022/page/3/index.html","e3327fdf72fc7a24ab926836b5263794"],["/archives/index.html","8dca18c7a4604baa08c6b0822e157d91"],["/archives/page/2/index.html","16f633b15b9939c66479db214b50e2e7"],["/archives/page/3/index.html","5353c35212d58d56f03ed42cd88ede8e"],["/archives/page/4/index.html","e84dd440bb436c5ebee3958e202c3bc4"],["/archives/page/5/index.html","e9fc9ba0a5965bbf569a958e70b1aa6a"],["/archives/page/6/index.html","e34235a81e24d67e46e4637e21e8e366"],["/archives/page/7/index.html","32c21f71a8a515d915ffc57a1ec9cd64"],["/archives/page/8/index.html","87bf6405d668157f29772ff836235a51"],["/archives/page/9/index.html","0a5806f87f45942ce0fa59cbba4c8424"],["/categories/LeetCode/index.html","33fce8742ca3cf60cdb79597698fab80"],["/categories/LeetCode/page/2/index.html","b5ea3029246530959391558310a650cf"],["/categories/LeetCode/page/3/index.html","49c19943c0e16ceff6e723e79624c567"],["/categories/Linux/index.html","b0d1b68e73cfae11772c59d4392e5862"],["/categories/Redis/index.html","5136b3105427a5b904b836d4b6d4b107"],["/categories/SSM/index.html","f6e4acefa9e89f1e41d5a3c3bf4208c0"],["/categories/Spring框架/index.html","feb8955f46137683e82a5323af3df1a4"],["/categories/Vue/index.html","a2bae0b36071fbb0fd1643a38de0ad2c"],["/categories/index.html","3fa2b394d443c5b97f7c9a37d4baad39"],["/categories/前端/index.html","65bb1649ee924e9dc31df9ea4b9e977a"],["/categories/博客/index.html","c015b6f94aed0f4d86a6ea7470229f2e"],["/categories/学习路线/index.html","405f6768ea93f25a3ecddd10ba68aa4d"],["/categories/工具/index.html","70ceec6825672e681e2db7476eb6068b"],["/categories/数据库/index.html","1e66a85007ebe58151ed240afa7df1a3"],["/categories/笔记/index.html","2d32e7b84a049b8fa8fcae84feba964b"],["/categories/算法/index.html","61f265f28c3fd276ba943a6249b9072a"],["/categories/算法/page/2/index.html","1aa696708ebd69321a844202e3d2f74b"],["/categories/设计模式/index.html","12470470b926fa227bc11af2729b9628"],["/categories/设计模式/page/2/index.html","fb0cb3bb7b50ee06f04d8979bf2a18c7"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","9d519572a3de8f44423f978e80af271a"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","56ec3497d75ccd267f62f2452fc7d837"],["/messageboard/index.html","f9592c931993314b0857615c248a3aec"],["/page/2/index.html","1b32a2e83bc669c84dc82b4a99952f42"],["/page/3/index.html","2f3a98a240346c7d6543c8f895f5da2f"],["/page/4/index.html","be16e7fb283b91af66db0c61dbce97cb"],["/page/5/index.html","66649d215dd69e89487bc2a4a22c69f8"],["/page/6/index.html","832da5af12a276e41f6ac56cd472a9ea"],["/page/7/index.html","f8833ce14c6a689181d20a22d9c4dc5d"],["/page/8/index.html","6e4da1c3be2dbf5dd03cb87b850462f8"],["/page/9/index.html","3fac4a60e071411f45bfe5319e23993f"],["/sw-register.js","cadff350f7f8606b83c27bf3b935ae48"],["/tags/Ajax/index.html","192b03d23732f122ce8de5da3d97347b"],["/tags/Axios/index.html","f605775cf7050fe680251af21a34e46b"],["/tags/H5/index.html","d03788adb2a4d1960974c444115e9e52"],["/tags/JavaScript/index.html","92442ed6215be31c3d68e927ce69e0bb"],["/tags/LeetCode/index.html","81c9eca078e4aaa6ffaa4750a21f65b2"],["/tags/LeetCode/page/2/index.html","64ef4244315386cc414b85c9005fc6b1"],["/tags/LeetCode/page/3/index.html","51bb6647a85125305578f7570c62b96f"],["/tags/Linux/index.html","74845519db2405955fcb1215aa4116af"],["/tags/Mock/index.html","06819d856021abdded14886b9bde1db4"],["/tags/Mybatis/index.html","ca0718f4c4cc3942b26a649f07e72f87"],["/tags/MybatisPlus/index.html","3cb0fe217d1947e5756ce553f216e1c7"],["/tags/Promise/index.html","5641a19da55a9d1e3f6d7d77add2883d"],["/tags/Redis/index.html","755bbeaba9c4cde8fb80c77de4d5f4fd"],["/tags/SSM/index.html","af692c21eeebf7f67a58935123ae591b"],["/tags/Spring/index.html","0fac061c407f8f0c04f1903b50f34b67"],["/tags/SpringBoot/index.html","2aa93726e4ca8c97cdfbadc2be973673"],["/tags/SpringMVC/index.html","5ccd9e674e8548b1f0e032879d9609c2"],["/tags/butterfly/index.html","4a1515c14bcac5c0fa11760a6c665b84"],["/tags/git/index.html","4e31fc46a0e5fa452cc3e93cdbb1343a"],["/tags/hexo/index.html","342d0a4a3319e573a4ae86e31648ea81"],["/tags/index.html","2d37197756d4f151cf2e6653184ed490"],["/tags/jQuery/index.html","d9fe534483be4c83c8844ff8cc5ee252"],["/tags/java/index.html","cd5155c6fda767db738c3ae8087d91dc"],["/tags/markdown/index.html","46f970e5ec8f55eb4b50297d5f8e3dd7"],["/tags/mysql-数据类型/index.html","fcf36fbec838c68f0a1705f339498f54"],["/tags/mysql/index.html","663c78c735a31b11a1a191a54be68126"],["/tags/typora/index.html","1cdddd2e5a2e9ba99ad26f66056f134c"],["/tags/vue/index.html","81d993362bfeac807752720f4236e374"],["/tags/享元模式/index.html","16522131cd3fd177a31c396aade8df09"],["/tags/代理模式/index.html","c28b156ecd2ab40796d47d83f41fc010"],["/tags/分布式/index.html","8d959dba782f13f4c1aa082bb6773e9a"],["/tags/前端/index.html","79f156c7508b76fbe11d9104f3a0adb2"],["/tags/前端/page/2/index.html","4b73ecf58828b415fd5798694c11622e"],["/tags/后端/index.html","0bf4d42b281d1c768fc03ab5ef9aec3f"],["/tags/外观模式/index.html","322aed4c41630ca1476fc4e2c7ce8d3d"],["/tags/工厂方法/index.html","807f2066d48ae3125ba2dca08146123a"],["/tags/抽象工厂/index.html","fad53636a68b092f43ad368f28e03c19"],["/tags/排序/index.html","656742054156809eeb424823e24d2a37"],["/tags/数据库/index.html","bda2da8f74826eb90125685bf486218a"],["/tags/查找/index.html","23ff964f3c28eb255ddc2e642977742f"],["/tags/桥接模式/index.html","9725fe101fc9ac467838711d44e3c76d"],["/tags/模板方法模式/index.html","930ab4ea7baddc067d52fbe86d9b1b4b"],["/tags/版本控制/index.html","2237b4e6d9848283f3a55911a2993d02"],["/tags/策略模式/index.html","1f693198d3415fc0014e3eb5e41fbdf8"],["/tags/简单工厂/index.html","d5bbe7d1c3dfa4175ebc23b4f1acef7d"],["/tags/算法/index.html","296c06fddd9a7db5be014f34b34f33f7"],["/tags/算法/page/2/index.html","8abfc29d80e9c4a4bb268f0f986f53db"],["/tags/组件化/index.html","122a0696b191669d509a28c6d34be028"],["/tags/缓存/index.html","eb5feb09b4a94bdc2d960ccfd9fddda0"],["/tags/观察者模式/index.html","6ded4573d5737fbe8d10730abfb94dda"],["/tags/设计模式/index.html","3703c41ed3ddf602a9727ee306ef8dc0"],["/tags/设计模式/page/2/index.html","1b06896e6217868fb257ee026e02760a"],["/tags/责任链模式/index.html","1653860fe740d09dddb1dce4def8f326"],["/tags/适配器模式/index.html","cd336ebaceed9d4cb7f74124113a6b5d"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
