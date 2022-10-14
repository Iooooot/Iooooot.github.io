/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","9a78ba4369e2a3a6f2eae1ab408063b8"],["/2021/02/22/博客的搭建/index.html","ab806a9e5fee406b7bd1d8454d169c7d"],["/2021/02/23/如何使用markdown/index.html","06f62c17b78fe677277629e6f5ab94e3"],["/2021/02/24/mysql命令大全/index.html","c2ff8cc310f59fa1ce30bdbaba47c78b"],["/2021/02/24/mysql数据类型/index.html","8ae250c7e173e296e593a51f31f7012d"],["/2021/02/25/Git的介绍与简单使用/index.html","412fe1703d33883b351a665c2405ec7b"],["/2021/02/27/简单工厂模式/index.html","e3d2b82ef27edc7ecbddd6bab3f88cc4"],["/2021/03/01/工厂方法模式/index.html","a04c1083145734533976f48910057eb3"],["/2021/03/02/抽象工厂模式/index.html","80f7a0ad0374ff7f2a7d2d553ede8c10"],["/2021/03/03/单例模式/index.html","9f4b3993accc43bcc48c2b2872816768"],["/2021/03/04/观察者模式/index.html","978789922e8f01bada4ed18bff0258c2"],["/2021/03/05/适配器模式/index.html","101fdab154e3d418274bd41908a0e27a"],["/2021/03/06/模板方法模式/index.html","753ea7074f8aa24df4c5411124267b19"],["/2021/03/07/责任链模式/index.html","c3c386646e16e171f6d6e051fa6c5858"],["/2021/03/09/代理模式/index.html","ada31014fe450dfcebd2107f84f6f6c0"],["/2021/03/11/享元模式/index.html","63b3ccf70c4bbb1a60afa3bd926755df"],["/2021/03/12/外观模式/index.html","c66bea0e87ce69d3aee16eca6b502fb6"],["/2021/03/13/策略模式/index.html","7a55b9fe19f4a2b157f6c422a18cedf6"],["/2021/03/14/桥接/index.html","f72b8d0c08390e8e81eefe42f26ca7f1"],["/2021/03/15/LeetCode-多数元素/index.html","8c7ed026d54c9f62c5a5480d09632f63"],["/2021/03/16/LeetCode之汉明距离/index.html","f3517cb55d1b6d587afdf2ea5fab4ac2"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","3e7ae4198229e0a45e93743a443e45a0"],["/2021/03/18/LeetCode之两数之和/index.html","beb0bcccb862f283828c209f85cae213"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","a5d12f2bc8e20140cef934e5b33b6229"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","ac4099f480301fd43437e3a007d82692"],["/2021/03/21/LeetCode之有效的括号/index.html","30c6047b545e067364526661ca0ad5c1"],["/2021/03/22/LeetCode之移动零/index.html","973627552c5387758f6d138a4ee43f0f"],["/2021/03/23/LeetCode之爬楼梯/index.html","6d7b8cfe161158390b952c942eb2c833"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","b7c14d2f1fcab6be00432eb149ea0584"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","0595e7191926027b21b97d7d833b27d1"],["/2021/03/26/LeetCode之最大子序和/index.html","463d06841df5446b204e25610792c81e"],["/2021/03/27/LeetCode之子集/index.html","6ee171ab7ffc599c32d6f916ceb80749"],["/2021/03/28/LeetCode之合并二叉树/index.html","b34939ce67351654d4f921b0f0e896e0"],["/2021/03/29/LeetCode之翻转二叉树/index.html","d350c0d9230616d87f62d4650acb2563"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","01bf52c4af040a3cb44399039a53278c"],["/2021/03/31/LeetCode之翻转链表/index.html","12ce79c83378d9ec968400ba861f7733"],["/2021/04/01/LeetCode之相交链表/index.html","a1715725a752b4d9a73707d0e9226c69"],["/2021/04/02/LeetCode之最小栈/index.html","c9b7e0334d75bd67eb0939ba9dc5b597"],["/2021/04/03/LeetCode之对称二叉树/index.html","5c5928512b3ded655e7826427497c807"],["/2021/04/04/LeetCode之环形链表/index.html","baf3b3640fc1d50aa41c2429ef0a83e4"],["/2021/04/05/LeetCode之二叉树的直径/index.html","91641585eae64035ffa8b896e5106deb"],["/2021/04/06/LeetCode之回文链表/index.html","ff6d3aba62db42e5abd90a9b7f6ab65c"],["/2021/04/07/LeetCode之比特位计数/index.html","1aa99b824383be1dd87a08b87aba079b"],["/2021/04/08/LeetCode之全排列/index.html","33629cd4afe306cef80f6e37a4e19bbf"],["/2021/04/09/LeetCode之括号的生成/index.html","59b10e32471e604e41e249d79760410c"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","7476221e7fd84e6f47356a0ded0096a9"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","4177ac0075423243a6d29e593c2e4486"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","2ccf68bb885dc743f0935b56829f77d0"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","d6ad407fb87201f64405de45594e7f66"],["/2021/04/14/Mybatis/index.html","37e416c390c9df308493d960ba9c3a5a"],["/2021/04/15/Spring-1/index.html","c37050107d0c0ff56f2a2356e3354413"],["/2021/04/25/Spring-2/index.html","18bd4ca5f898e90f3e402a76d4be5b63"],["/2021/04/27/SpringMVC-1/index.html","0d73bc314071f297cbaaffeeeadbe538"],["/2021/04/29/SpringMVC-2/index.html","a3b8462a4465f0a2fe6e0d088098291a"],["/2021/05/03/冒泡排序/index.html","f112bb8660a6dd6c6a5e10129884327b"],["/2021/05/08/选择排序/index.html","2fab886591c849e52fddc479283847ab"],["/2021/05/12/插入排序/index.html","7fa1406c2bc1630a7cc766cac748603a"],["/2021/05/15/快速排序/index.html","853431c3bd42e0201303de9927e0ca23"],["/2021/05/19/基数排序/index.html","512a23bf969c1391c5556b47e2ba5e23"],["/2021/05/20/哈希排序/index.html","e02721b5fa6e0abdd65122c54498d2b1"],["/2021/05/21/归并排序/index.html","0ccc00b85c9a2f715f23d3e1bb6a9b37"],["/2021/05/22/二分查找/index.html","60e8002ec89e1e4fc99b9bbe4755a3d7"],["/2021/05/26/差值查找/index.html","582470d326b3db92ee71c93eec4579fc"],["/2022/01/12/高精度大整数计算/index.html","912636c5c69c0b70c3c0d2b3acc23c6c"],["/2022/01/22/前缀和/index.html","b8d4dc35df5bb8b284f7083ede1a7270"],["/2022/01/23/差分/index.html","a99047dd17a3fef4b0253c7649616947"],["/2022/04/04/MyBatisPlus/index.html","dce9b9106c7d1a2597de5e8c258fc8f2"],["/2022/08/17/jQuery/index.html","3fbab60552c1ba5283f9ecc3d9c015a0"],["/2022/08/19/JavaScript/index.html","7339f7614f8f9049f1a2f13ec1bea797"],["/2022/08/22/Ajax/index.html","24a88e0faaaaf3fb57c78d5fb0a11363"],["/2022/08/23/Promise/index.html","996c02c8c01fb55197131fcceb9d28d3"],["/2022/08/24/Axios/index.html","4fdf060eb7798ce4a63d6af77c46b871"],["/2022/08/25/H5本地存储/index.html","3bcdaeec76805afc772cb4d921a365b0"],["/2022/08/26/mock/index.html","2a9c91a91121acbb26898cc66d52344b"],["/2022/08/31/VueJs/index.html","7cb6bbfc3af0adf39bd498a0d7273df6"],["/2022/09/01/vue组件化/index.html","dd04e440842f52ea61636b72d3414f06"],["/2022/09/04/VueCLI/index.html","4cc075f59f1b81bcb478ea4aa9336271"],["/2022/09/07/vue实现动画/index.html","f8997e4c22c26d64199321676feccde9"],["/2022/09/09/Vue响应式方法/index.html","3cef046d17ebf38ac040fe7a0fbef189"],["/2022/09/10/Vue异步请求/index.html","64f9f15644734897f27633e948d3bbed"],["/2022/09/11/vue-Router/index.html","490f022dbaa768f96d8aa8ce570d46b5"],["/2022/09/13/Vuex/index.html","c4ff1356cb17475f0abedf5e3c98bbaa"],["/2022/09/15/SpringBoot/index.html","d3610e9b4f989d244cf7034b7e04b5a6"],["/2022/09/16/SpringBoot配置FastJson/index.html","cd58f143534e21ffaee1a6a9e5dd66f5"],["/2022/09/19/SpringBoot参数校验/index.html","79576498918dcd8ebccb7cf10b6f6737"],["/2022/09/20/SpringBoot的异常处理/index.html","65932bf10bce3c0b8a3987b4893710fa"],["/2022/09/21/SpringBoot统一响应处理/index.html","ae66125c066ebf72be739641305b43f5"],["/2022/09/28/Linux/index.html","21a943f806cca891900ccea17444b658"],["/2022/10/02/redis基础/index.html","bd5aa1b70398664a1f3b56540c4c8bbc"],["/2022/10/03/Redis缓存/index.html","fdfad38a4befc6db91f23f095ec50d24"],["/2022/10/04/redis缓存穿透/index.html","483023f074b1a70c693a7abdc3394320"],["/2022/10/13/Redis缓存击穿/index.html","11e7f5ede5d2cdf314c9268642adcd47"],["/2022/10/14/Redis缓存雪崩/index.html","dcd1b4908db57128221fd662af410023"],["/404.html","ae05783fcd9763c600949e7b12720ffa"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","be7619e94158b7b749419c269cef8d3c"],["/archives/2021/02/index.html","97e076a63faa8aaede85b7fae0ff04cb"],["/archives/2021/03/index.html","0a42242aa877548c85911a6d459c4fbc"],["/archives/2021/03/page/2/index.html","0ff14412ce786686c64b64cf9dd09e16"],["/archives/2021/03/page/3/index.html","15654c171473eb0fbb60c91a84c7f21c"],["/archives/2021/04/index.html","7a8f05df4ab9e0e56a17142fdefefd4c"],["/archives/2021/04/page/2/index.html","0d2291a18f071a1f1652badcc124c9c9"],["/archives/2021/05/index.html","df72fe8a51c1396ceaeb9d4b7376b139"],["/archives/2021/index.html","24ed3fe3a7f9dc5a91d9545b637f9c2b"],["/archives/2021/page/2/index.html","ac13c5f3edaf71c2afb23b40e313361e"],["/archives/2021/page/3/index.html","315a2f97e1c6720dd83df1ea23231aee"],["/archives/2021/page/4/index.html","81ceeb980f4cfb64c1bb1f9f9fb1a036"],["/archives/2021/page/5/index.html","fff339f5ac777fc33f2045c8c5685b61"],["/archives/2021/page/6/index.html","bdb0d649b3fd985ce66061b83bbba75a"],["/archives/2021/page/7/index.html","50047f314e418b58d415ce7e274c57e3"],["/archives/2022/01/index.html","840d1e3c10bd6d24ac2cccb779463187"],["/archives/2022/04/index.html","ae8569dd94160bc82a990c7f11319de5"],["/archives/2022/08/index.html","625941885da49a30e54ef3ac51322a20"],["/archives/2022/09/index.html","4a93fcabc339700024aac2437b34fb56"],["/archives/2022/09/page/2/index.html","6fff15560dfb90048d9d16bf2d26912e"],["/archives/2022/10/index.html","1cdd48ca1963d3394e7b6008fc810e5e"],["/archives/2022/index.html","ed7ea20df038a7afde55000f73c31484"],["/archives/2022/page/2/index.html","d19434d301dd6d78ea1b92cf7ed85ef8"],["/archives/2022/page/3/index.html","8f5b250094502a99641affd11b1e73ce"],["/archives/index.html","530bcc3d045d283b132c2ef66732d266"],["/archives/page/10/index.html","deada6d8d69f410873cf27eda4e6979d"],["/archives/page/2/index.html","af731db5df7d58d7181cc9b5e9674a62"],["/archives/page/3/index.html","dc0233c6dc8e0cde58a5ec57339d3eba"],["/archives/page/4/index.html","717898c9303d2e06509cf79f42b7ca2c"],["/archives/page/5/index.html","64b7d2c8db8d44532113725464c4cdde"],["/archives/page/6/index.html","b953a00b6936108268c419e645decadc"],["/archives/page/7/index.html","4f630a6246d8d6cad5d34da3886eb902"],["/archives/page/8/index.html","119870f523e35d500b166d51a05c08f2"],["/archives/page/9/index.html","8cbe107cb21827c2e607a4f825c0f15a"],["/categories/LeetCode/index.html","7942d5c427c44b998cddaa2dd05b3e35"],["/categories/LeetCode/page/2/index.html","d3bc941b203f260d7b2d30a60064297c"],["/categories/LeetCode/page/3/index.html","655a5f09134a5c1e6ae72c55be2e13cb"],["/categories/Linux/index.html","41b771296b5c369ad5dfd031608a9922"],["/categories/Redis/index.html","cd74f927378ddf82f5b306980b9e54b0"],["/categories/SSM/index.html","92c75d78c415fd4a598635c5d2bb364c"],["/categories/Spring框架/index.html","e60d3b8d61ef965738584b9f1a4bbff0"],["/categories/Vue/index.html","f21a8bc2733d8e98043019a04ae0fdce"],["/categories/index.html","7c8a9ca531c359f16d14955b5c7bdeb0"],["/categories/前端/index.html","759d0b174a21961df1efefc37742e66e"],["/categories/博客/index.html","dd5cb5397ea511f0a88a4ffeef0cfac9"],["/categories/学习路线/index.html","cd1ae2238fd42cf20d005d5e108c434e"],["/categories/工具/index.html","7b30793eb16e4d97377bd298872a7df1"],["/categories/数据库/index.html","205dfc9983fbc0db8113b8c31fc1d983"],["/categories/笔记/index.html","e4ba79611b05dba62ca66c6a79d6fd71"],["/categories/算法/index.html","b006bd22e6d8c669561aca0f508d7ea4"],["/categories/算法/page/2/index.html","e52770d3de611ccef266f7c908fa50cd"],["/categories/设计模式/index.html","97d1e5bf23c32ca3faeecaa97b5b9e86"],["/categories/设计模式/page/2/index.html","58ce0dd1a52bd18de4e610a714054da8"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","21c5690064e33a69b3f74f13f7254da2"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","5bd811b6d0a1e3f5dcd5823fd4b3e82e"],["/messageboard/index.html","3646767358ade066bb904ca52414faf1"],["/page/10/index.html","3f19361d0dd9ae3fee13aa8b9688c15c"],["/page/2/index.html","4ef6596aa368460fd44c97805de605ef"],["/page/3/index.html","6442908d06ea350a3f199337e7e934e6"],["/page/4/index.html","7027183619527e619c3298cbc4d846c3"],["/page/5/index.html","05218bd6b5f2e80f11b3c19f87e49f90"],["/page/6/index.html","7393e541b0c9664e9641d347592866cd"],["/page/7/index.html","57859bfae2cbc04a1bb4ab7e973e0924"],["/page/8/index.html","595be19429b273444b98392a72efbfa4"],["/page/9/index.html","9b0273b8c186bf2d0fb79117c81f2cb9"],["/sw-register.js","4e99858a448b821a8605985ac9bc52ec"],["/tags/Ajax/index.html","45e4f2a647fe870170c1384cd3ee6762"],["/tags/Axios/index.html","a04c56259e7e1c0216aac03513c02700"],["/tags/H5/index.html","a72319a7fb7fd6fd69d7f76516f19b4f"],["/tags/JavaScript/index.html","acee944ff8152477d43b39a28900ffc6"],["/tags/LeetCode/index.html","45f7b1d680132226b283feef5abd1671"],["/tags/LeetCode/page/2/index.html","67a3329bce54feffd21a6520e988fbc4"],["/tags/LeetCode/page/3/index.html","9d4f1342211c3c151b6b3a51ca2bd3fe"],["/tags/Linux/index.html","b36df90884f67f7548aa0c207a12efa3"],["/tags/Mock/index.html","bff1aba33a962acd648e64fc0349c721"],["/tags/Mybatis/index.html","c43a89ef29bff36a6cbba9eed1d34d1d"],["/tags/MybatisPlus/index.html","a9d360eafaf3423b602944cc0ae6df4d"],["/tags/Promise/index.html","2782b69c02b7775955cf6d72beb64c56"],["/tags/Redis/index.html","d3b42ac3626bfe6b10cd8d1c4926a3b8"],["/tags/SSM/index.html","f374d84df6999834f659671d13ca3078"],["/tags/Spring/index.html","daea73f7900177dadb66f94f216a61b7"],["/tags/SpringBoot/index.html","f5e3f66dba0d8c6d12117e2fe51e4ef6"],["/tags/SpringMVC/index.html","35a22c4d9f9284ae5b83828314711ff9"],["/tags/butterfly/index.html","0c94bf920e3417536fb883b71471167a"],["/tags/git/index.html","a1e0c18174aa27a0e0ebc39af43c674a"],["/tags/hexo/index.html","9c77621aa4ce3ae2f78dce253dfe3c3d"],["/tags/index.html","0abfae5b87c5d7c6cb35215c06a36be6"],["/tags/jQuery/index.html","2004c4788e3c12303687681865c8c521"],["/tags/java/index.html","5f480248b7752b29ca4fb7217e90d24c"],["/tags/markdown/index.html","56ce49027a51ea181e19cad27a8db4df"],["/tags/mysql-数据类型/index.html","d5179e2ee3b4c2c809fc6a96b983173f"],["/tags/mysql/index.html","d0098d64afce56ab623f1583bdf41d1f"],["/tags/typora/index.html","c71e400fd6804cef8a10fe8701c1da14"],["/tags/vue/index.html","3fc8ce3b74ac583647e1ee9b2dc22683"],["/tags/享元模式/index.html","834d31d6788ea48374d8f120f77cded0"],["/tags/代理模式/index.html","310a0bdcda33390ee9b0d0962beb620c"],["/tags/分布式/index.html","2d5b8f2e64d85025c4c5ca9195ca5da6"],["/tags/前端/index.html","acdd4d5fae5a40044ee2e03cd67da1fc"],["/tags/前端/page/2/index.html","d3e82d17f8ba981c72622e9f7e9bdcaa"],["/tags/后端/index.html","d1ae27e214c7e4e5e0f58fc33cc69d91"],["/tags/外观模式/index.html","50a28617066c1f5261922bbf5d76e691"],["/tags/工厂方法/index.html","ce24e7b48e539cac6d3a407252d199f5"],["/tags/抽象工厂/index.html","26db2cf91918dbcbf0a2bdf18f9e2d70"],["/tags/排序/index.html","3d7868f24ef1ae2e873ff5b92694359a"],["/tags/数据库/index.html","e680aece1d4635026b4a03c796466403"],["/tags/查找/index.html","00bab006c93aa11623b1774e2eb5e4ec"],["/tags/桥接模式/index.html","2c0a08737674f7f9b334ec58f669ca1d"],["/tags/模板方法模式/index.html","efec04fae6b33cb30f1cabb1f0f28a2e"],["/tags/版本控制/index.html","00fe34376ebd29f47a74e6f4cedc0e72"],["/tags/策略模式/index.html","700cb7f716acd4658c5c755c304c2d5c"],["/tags/简单工厂/index.html","fb8b1bfe76e725f7bb672e583cea29a8"],["/tags/算法/index.html","edd166e5c2e4d98b2814b21942942512"],["/tags/算法/page/2/index.html","097fa1036b98c77fe683d1c88912ef42"],["/tags/组件化/index.html","ac214a9a0263b935eb5dd7a675f07d30"],["/tags/缓存/index.html","88415b804136b1d15af1ec7a1c58d178"],["/tags/观察者模式/index.html","f038df44458744147ea2daa299aa0a68"],["/tags/设计模式/index.html","5b5ccba317182319b479dd3eb1eaf145"],["/tags/设计模式/page/2/index.html","7850beca0d9fa4c7a8442f0cf30dff1e"],["/tags/责任链模式/index.html","8e8e7511d53f1c89437aa77726da0581"],["/tags/适配器模式/index.html","38a48cc703072cdf602115bf21dc6ed8"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
