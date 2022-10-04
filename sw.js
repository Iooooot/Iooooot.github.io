/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","9c194d88783db7608c74586a72241a9c"],["/2021/02/22/博客的搭建/index.html","96d3a419917640c1cff2dea1dd3d4711"],["/2021/02/23/如何使用markdown/index.html","335251aec0d06962910ae0b3462b4071"],["/2021/02/24/mysql命令大全/index.html","ac3668907e4163e56aef163afea782aa"],["/2021/02/24/mysql数据类型/index.html","1c73242b607d257fcd16bc03f63bf57e"],["/2021/02/25/Git的介绍与简单使用/index.html","efcb290de1839746ef9ebe8b728f96e9"],["/2021/02/27/简单工厂模式/index.html","89d4be6c8db57110e355ed4e03173aa4"],["/2021/03/01/工厂方法模式/index.html","eec897450618149aad75fba8af283ef1"],["/2021/03/02/抽象工厂模式/index.html","ad5b717898a073c09f3f54c80899ebb6"],["/2021/03/03/单例模式/index.html","e715dab82e4453ac4358ab94d6f4990e"],["/2021/03/04/观察者模式/index.html","e070ce1db9a74db56ff772bc56174a7e"],["/2021/03/05/适配器模式/index.html","93dd729aeebb6ea9679250f21d112cab"],["/2021/03/06/模板方法模式/index.html","1aa57871a60b27251df637d527e72a22"],["/2021/03/07/责任链模式/index.html","527df7969eeddf0b21a4b254d4f226c2"],["/2021/03/09/代理模式/index.html","fab19eb35ba4b387a55e965e634e6f33"],["/2021/03/11/享元模式/index.html","76140e359fbc2065c50ea7413165e22f"],["/2021/03/12/外观模式/index.html","d3a4ac49c9b146cdf4fd7c37ef0f573c"],["/2021/03/13/策略模式/index.html","767bfea0058da8c641b101afb2daa452"],["/2021/03/14/桥接/index.html","01cc6bd3c6fd4a6d0f3a43f8c3ab745e"],["/2021/03/15/LeetCode-多数元素/index.html","3350e427698f5d745b237eb5d8c4a2cc"],["/2021/03/16/LeetCode之汉明距离/index.html","7495d93955a79435ab69b2eb88077055"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","96a8ed244ae1a56d1aaa76341b935180"],["/2021/03/18/LeetCode之两数之和/index.html","2fae777bf761d96892e106463be43657"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","03c7ba8e4903f76f25070e7600174058"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","e0f1752ce13da3a074e0d81ab6c0116a"],["/2021/03/21/LeetCode之有效的括号/index.html","986462b3f9b15ff56e0b0868cde2534d"],["/2021/03/22/LeetCode之移动零/index.html","7669f5b51871b35a2bd90c7d8ba93946"],["/2021/03/23/LeetCode之爬楼梯/index.html","63d939f76acee702c3b762e1476c5d19"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","402a478de1d9eb66da1c18b2d5fb84dd"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","e512a6fad4697390c1aeabd822789420"],["/2021/03/26/LeetCode之最大子序和/index.html","d639543adb72e0bb3f903aae82190d09"],["/2021/03/27/LeetCode之子集/index.html","ac0253feaf7128ebddd17bc6469f9f9d"],["/2021/03/28/LeetCode之合并二叉树/index.html","ae80b90bfa1669c299a7bdd7c7b956d9"],["/2021/03/29/LeetCode之翻转二叉树/index.html","81cece9f7587886de45ba68ec62f772a"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","095dce815f60a7fab844a00eba274631"],["/2021/03/31/LeetCode之翻转链表/index.html","457108a58489b68651307062b9125af8"],["/2021/04/01/LeetCode之相交链表/index.html","a4b81d78d09cfc398b50c1e51bacc5b2"],["/2021/04/02/LeetCode之最小栈/index.html","4f60d1c21b916ae7bca3647ec7fb5196"],["/2021/04/03/LeetCode之对称二叉树/index.html","3694eb3f673c3db31990f392ada73d2b"],["/2021/04/04/LeetCode之环形链表/index.html","5018299cc5597f779bee9f8bd6a933e2"],["/2021/04/05/LeetCode之二叉树的直径/index.html","516923b7f9084c799ad5d2c65af1fce9"],["/2021/04/06/LeetCode之回文链表/index.html","3ba5f41faf80d39b3efcffbed32ccb06"],["/2021/04/07/LeetCode之比特位计数/index.html","52ca4657e5cef34b710fe34c7e2cac01"],["/2021/04/08/LeetCode之全排列/index.html","bf6fdad2a89779f5b2c51e8cc3ffe2e0"],["/2021/04/09/LeetCode之括号的生成/index.html","2c5048b80dc7d742ab3d6abd4a022e76"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","201dc30a0c5cc842aa5bb2b71eacacc2"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","39a61d9dc953f817bf56e2c99c3c405e"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","676eda5647beb69ceb3066fe447bfe08"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","aa2029553538f0951dcf4ccd3e4aab93"],["/2021/04/14/Mybatis/index.html","559e339e16f6aa4c1d8eacdd001fd76c"],["/2021/04/15/Spring-1/index.html","ce4e6a33a0cd878127b95c650c517307"],["/2021/04/25/Spring-2/index.html","e8f079e242e3f3c24d5d360c97956d68"],["/2021/04/27/SpringMVC-1/index.html","1bc7f92d5a5d5a786548cfb0b444efb8"],["/2021/04/29/SpringMVC-2/index.html","7a50bd0504e590f1e7e9ff0ff78efd08"],["/2021/05/03/冒泡排序/index.html","8a29e6df046550b503aadaa2b1636971"],["/2021/05/08/选择排序/index.html","c4c4a0593f604306ab1895a109890b20"],["/2021/05/12/插入排序/index.html","03970f3a1753b7c077a0762d5c64277e"],["/2021/05/15/快速排序/index.html","b54518ac9b9ab61d12d9f85eb2cfd1cb"],["/2021/05/19/基数排序/index.html","db51eea0fb28b12e716493060e159186"],["/2021/05/20/哈希排序/index.html","9869f0576eb09a96265f70430dd16a34"],["/2021/05/21/归并排序/index.html","f1acf5f1c2fdf53e1f8c78807756886d"],["/2021/05/22/二分查找/index.html","1802674f548066bbd5f1427bd7b1e26b"],["/2021/05/26/差值查找/index.html","a4783baf3ff027210ed06b98093769ba"],["/2022/01/12/高精度大整数计算/index.html","261a56292248f75af8c49e0abdfbcde1"],["/2022/01/22/前缀和/index.html","ab77c1bc2df95e385e4b5af66b1c2a9c"],["/2022/01/23/差分/index.html","5f07687dae84c08299f2a89c81903401"],["/2022/04/04/MyBatisPlus/index.html","794f5f7151b4d079acad63bf8459fdc0"],["/2022/08/17/jQuery/index.html","63b79c340e4c7e909ac79cf7675bab38"],["/2022/08/19/JavaScript/index.html","1a7dfc1b4f0d8b798758e9a40bd68644"],["/2022/08/22/Ajax/index.html","de19afe8fce8308527f2c9bf0d37321a"],["/2022/08/23/Promise/index.html","a39172f4e5053eae8eb60cf788e8d872"],["/2022/08/24/Axios/index.html","2477f7a15d61059981199c0a63343e13"],["/2022/08/25/H5本地存储/index.html","fec8a0085c790a0b226f0fba2797493f"],["/2022/08/26/mock/index.html","d58ccb27b8eaab3ff2a9474dc84b8695"],["/2022/08/31/VueJs/index.html","346ac7afe925d62eaeabe73f80e760f3"],["/2022/09/01/vue组件化/index.html","ac2f10f1744ac3fc1c7935a722bbd681"],["/2022/09/04/VueCLI/index.html","6b7e2afe40f03a30fcf0eb376f680b28"],["/2022/09/07/vue实现动画/index.html","32a309ef7c1e66bb7999c8657c92ffc6"],["/2022/09/09/Vue响应式方法/index.html","d31ef21e01e3c3f0b486d1549099a819"],["/2022/09/10/Vue异步请求/index.html","5e93a587c9c5040b479c31b2b78ddba8"],["/2022/09/11/vue-Router/index.html","52c66f89d77b8aa1098d472dd4dfb3e5"],["/2022/09/13/Vuex/index.html","27b6b5c5d7b716ed8c368565a6ef79b5"],["/2022/09/15/SpringBoot/index.html","05c1e6460c967ba837af2148fffa1e64"],["/2022/09/16/SpringBoot配置FastJson/index.html","e7a9a59b11cdb994d0aaa5197b200e6d"],["/2022/09/19/SpringBoot参数校验/index.html","a5873df2023971b8ac4b34a81db4fe4c"],["/2022/09/20/SpringBoot的异常处理/index.html","4ca7c0b03ada967ac8bb0a2d398ec2f6"],["/2022/09/21/SpringBoot统一响应处理/index.html","5ce6aee244b2aad08cfe4bc97fd1ef73"],["/2022/09/28/Linux/index.html","27e63c0599f13c9dde45bddd12968d2f"],["/2022/10/02/redis基础/index.html","ae4cfd2c72f2acfa1503a6f950aa61b0"],["/2022/10/03/Redis缓存/index.html","13bb2f2048a953501807660483e58520"],["/2022/10/04/redis缓存穿透/index.html","223ea6e9098985ad541d7cae7f229fd0"],["/404.html","13d160d8d7d5aa2db31c3bb606c77f07"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","03c73ed54a148f2f527c70660fea6487"],["/archives/2021/02/index.html","ec6704203ed14798c8d7b13ec6c96983"],["/archives/2021/03/index.html","99f31cd5ee57c1e8a612ad2e98448e78"],["/archives/2021/03/page/2/index.html","9f2423fdc42ebad863e1e57b83b8bab4"],["/archives/2021/03/page/3/index.html","488e03ab00744c77ef0d60e77f5e17fb"],["/archives/2021/04/index.html","9bc7b3ec47a6da0f0015d3ab852b739f"],["/archives/2021/04/page/2/index.html","ce669beb941e7f99721c58683dfea7ce"],["/archives/2021/05/index.html","a6d2ced8005cb79b567b98a51d7bb670"],["/archives/2021/index.html","f884b8dbe77d0e392387cf602431a0c0"],["/archives/2021/page/2/index.html","4d019144327a226d272f8de5ecdbdbb9"],["/archives/2021/page/3/index.html","86a0a89c0b99aee21f2c69424c37449a"],["/archives/2021/page/4/index.html","501d3db5fa975793bd41fe407a165509"],["/archives/2021/page/5/index.html","42e2c31f8e08ff954ff53bdd2d72c356"],["/archives/2021/page/6/index.html","d3017e8fc62efea56bf1b84849f505ed"],["/archives/2021/page/7/index.html","e0121743351ed5cf5d176e7fb947206f"],["/archives/2022/01/index.html","49114bcef68112f674cc1ab863f13263"],["/archives/2022/04/index.html","8d3094fe1ae1209a8284be9f8e0c9c1f"],["/archives/2022/08/index.html","92587b1071c11e1ec86a4f89625ee727"],["/archives/2022/09/index.html","f12aa41d0ea61d44294c88e91d9bd626"],["/archives/2022/09/page/2/index.html","98955965491d3af322338db586df9afd"],["/archives/2022/10/index.html","d7dbe3fa8a82486ab1cbd83663c1d071"],["/archives/2022/index.html","0129f07021b8400646c63a472caccb55"],["/archives/2022/page/2/index.html","b5f06a3c7229be1fcaecc389538a2b87"],["/archives/2022/page/3/index.html","ea134cf3caf7246a9b96c7570b099231"],["/archives/index.html","f096ccbecd43e49886c31ee1102454e5"],["/archives/page/10/index.html","0c500e89ed3373f1c42fca87e06b0f93"],["/archives/page/2/index.html","212ede2ccb07e7b49be8d5c91c71e5b0"],["/archives/page/3/index.html","31b05889efdcf42a6c55f90c567e09ea"],["/archives/page/4/index.html","c0626c71ec8f6ecfe762553e552e4678"],["/archives/page/5/index.html","cdd6cb093197a41f5879c1a08665bfa2"],["/archives/page/6/index.html","27d8a1e591070512f28bca0e9d5835ae"],["/archives/page/7/index.html","315593476760939ece655c2a99fb8cce"],["/archives/page/8/index.html","7bc89451e543de8bcc2708e665b78508"],["/archives/page/9/index.html","1fc28733e1bee0b0fdaa419a6621b0de"],["/categories/LeetCode/index.html","4aa50b0050845bc03df030f8b29b1cfc"],["/categories/LeetCode/page/2/index.html","7fae8bb8c85677533f7f3156ca1a0fe7"],["/categories/LeetCode/page/3/index.html","aed1e48317e8d274e9b1c01523fa525b"],["/categories/Linux/index.html","6b60b72c965c953d960b45f8668bf413"],["/categories/Redis/index.html","d790179d2c186bd8d2b2807eaa44aacb"],["/categories/SSM/index.html","f1790ce3c06294be144b35783f4bd619"],["/categories/Spring框架/index.html","1f2953388b6118d93f6cde3346fc36c0"],["/categories/Vue/index.html","fc4c731e8db14b87faddb62642b8bc24"],["/categories/index.html","e46a3fd9852397f665ad7689e4a969d8"],["/categories/前端/index.html","789cb0ae349c96307437d56cd1212d38"],["/categories/博客/index.html","3af3b03c6a6ec231bceb2ec156452b15"],["/categories/学习路线/index.html","8f81514b8c1211d04b79ec4948b51a8f"],["/categories/工具/index.html","27b8f168ff083ecb81b2e627cb078f92"],["/categories/数据库/index.html","6c4f5bdeffc0a1d922d808634b29681f"],["/categories/笔记/index.html","5a62b71870259ef56669f9a98222d315"],["/categories/算法/index.html","4405163d12dd77a88df2050fe201d8d2"],["/categories/算法/page/2/index.html","b109e618aff8fde0f525bf59471bd7e8"],["/categories/设计模式/index.html","be4af7890fcf26288d0c1a06e59e1127"],["/categories/设计模式/page/2/index.html","96722bab3a50585ca902c0bbe8659eb1"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","304b49d095d55e11fc51d1db5e0ce186"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","ab74f72c3216418f3949126016da39f5"],["/messageboard/index.html","35daaa25ba0b8fa6fce7a2604967dd89"],["/page/10/index.html","499c4964726f589ad705cfe68800d148"],["/page/2/index.html","7dbb551c664c00127066e087a7cf9206"],["/page/3/index.html","069c5d4a235f92b08b040b329c6076f7"],["/page/4/index.html","81a9599b233cbf0208a1bff52171bb9b"],["/page/5/index.html","6e96b88d93f04bbf51500b270960f8f0"],["/page/6/index.html","f4241ff3fefd02a95bb48120a95c283b"],["/page/7/index.html","d617e8e532ad1a56cd50096c4a400475"],["/page/8/index.html","bbf77bd7cb5efec380a5e7ab9ee51f02"],["/page/9/index.html","c1ed867ed6736d0d0381e62309503eed"],["/sw-register.js","d5e0beb3fa1323732ba535cc45660a60"],["/tags/Ajax/index.html","92dfa195a800a7cd7513eb20c894dab5"],["/tags/Axios/index.html","275ce3be647e1aabaab8eeace1998b8a"],["/tags/H5/index.html","8a4aeadc2a25e5e5d406484855e11f29"],["/tags/JavaScript/index.html","e08569bea27e9bc1c3527893b336ee72"],["/tags/LeetCode/index.html","0c3e8f0ed756e92128d9e026c5901855"],["/tags/LeetCode/page/2/index.html","65272064b8b7d54bbf5b0eb2271a0d5a"],["/tags/LeetCode/page/3/index.html","8e535d51440acf3b43df02a5ea0b23ca"],["/tags/Linux/index.html","bf1c321c1c07953d365332c6eac0623e"],["/tags/Mock/index.html","14e0fa573d5d37106380c04bc72ab35b"],["/tags/Mybatis/index.html","cc2a072ab223fa9ae24bb78485d7a9ba"],["/tags/MybatisPlus/index.html","3f8e49f60f956104b87e626ae5ab62bb"],["/tags/Promise/index.html","696a08e19d8f96bcccc9a6df1b57f0b8"],["/tags/Redis/index.html","0e861fefbae514abe5a81a251229d14c"],["/tags/SSM/index.html","c6aa00bc3e7315708b7837b313410fce"],["/tags/Spring/index.html","69962cca446b33658655c0ea7cdf199b"],["/tags/SpringBoot/index.html","4cb8c25dafe19578dd35b35f412499e9"],["/tags/SpringMVC/index.html","934587a9892a0a1ccf66f1137fc635bf"],["/tags/butterfly/index.html","fa556a416d8901bfdab164d9621de895"],["/tags/git/index.html","44cdbc832274b5b5e7f4e24c3311496e"],["/tags/hexo/index.html","b0e223a09cb61614e09a2822733856e1"],["/tags/index.html","c164fbd26e19c0b57196403c3bf58025"],["/tags/jQuery/index.html","aea2dd79a13bf68cc3fc5420b71540cb"],["/tags/java/index.html","71488ac00cf3656cef9fa1416df78907"],["/tags/markdown/index.html","8b17b095935c8761a64bfe46e315bb2b"],["/tags/mysql-数据类型/index.html","5b25768a6d3dcbe372cb5013d069dfb0"],["/tags/mysql/index.html","40525adb1a87957d2c67e12b0aae4f85"],["/tags/typora/index.html","f16f67d2f71b87bed862b903d92b6040"],["/tags/vue/index.html","964812908b8a95e8885aa77380cd06bd"],["/tags/享元模式/index.html","3be1ea6ddeddb9796d26b6d80d9f8246"],["/tags/代理模式/index.html","6ed7b2e5143894a182838cae55260057"],["/tags/分布式/index.html","b001f9cab3aea5618f9db39882d748c5"],["/tags/前端/index.html","f7daeb6f7b73a459af65ca8caa58deb0"],["/tags/前端/page/2/index.html","942de44ece3ea94347b9239285373225"],["/tags/后端/index.html","d713e1c42f8ac02b92828a84348dd831"],["/tags/外观模式/index.html","738ba398d80344327aeff77dcf0b7667"],["/tags/工厂方法/index.html","d2e286254065cc3681a35dbe6e3dfee1"],["/tags/抽象工厂/index.html","c6491009cdfb3811e23db85f6be6d88d"],["/tags/排序/index.html","8209f066def13dfce503809827db863f"],["/tags/数据库/index.html","9be35a191df95dbc5870171524e5598b"],["/tags/查找/index.html","6ae5472abb1ce4b531145dfdcdc8d134"],["/tags/桥接模式/index.html","3f4e9203faab1b41962792c878fbdcfc"],["/tags/模板方法模式/index.html","2e9dae6b7d8c7d08ba57150a23f7a139"],["/tags/版本控制/index.html","bb0f7f4952bcc51952661705f779644a"],["/tags/策略模式/index.html","5c7453594734f95567bf8c3957f1aefd"],["/tags/简单工厂/index.html","751c531cad668441c14f85ff2c737181"],["/tags/算法/index.html","c2efadb70e741abc2bd0058afea50eab"],["/tags/算法/page/2/index.html","5cbb87197f3b9d182525a091e8840fee"],["/tags/组件化/index.html","77c4b0840b5eac7b51f1f9ce8fb97595"],["/tags/缓存/index.html","12b543b27a12ebeac4b52a8117189c4c"],["/tags/观察者模式/index.html","091ef654f0ff2ed63af8b37c822a7708"],["/tags/设计模式/index.html","9b946a0750ed74dcd4b2d5952b5532f4"],["/tags/设计模式/page/2/index.html","5a08ca3e1838db72ac5df6dd8263bd33"],["/tags/责任链模式/index.html","36d395f635f242cc6497b46b7b773077"],["/tags/适配器模式/index.html","0dd193146426f4c7d4b196bd9432b2a9"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
