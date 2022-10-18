/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","e4d7e39e16636adcc61bc25bff96f145"],["/2021/02/22/博客的搭建/index.html","8a1eda624d66130d18b69670babf8cb3"],["/2021/02/23/如何使用markdown/index.html","dd931d319ac82341a9e6c1cb9f696e96"],["/2021/02/24/mysql命令大全/index.html","d41bc76b8aba1c5ae6fec1dac4f74814"],["/2021/02/24/mysql数据类型/index.html","b92c323eb953103a483b029bcf447d6c"],["/2021/02/25/Git的介绍与简单使用/index.html","84182c99ad30e00473f24843df990480"],["/2021/02/27/简单工厂模式/index.html","fbf700f57ead3bd6b28655170b8eb6b0"],["/2021/03/01/工厂方法模式/index.html","6c882c2ce518a31a9a5b013b17ac006c"],["/2021/03/02/抽象工厂模式/index.html","a24770eb5efebda87d78c95b76c5a22a"],["/2021/03/03/单例模式/index.html","420cfffd7d401ad1083d731a16cd50ec"],["/2021/03/04/观察者模式/index.html","33305934b62b9f304203af1239e11b16"],["/2021/03/05/适配器模式/index.html","ded6d226fa45e17053562b7057723061"],["/2021/03/06/模板方法模式/index.html","4e7cf9996e18a3ae77c280e21b204023"],["/2021/03/07/责任链模式/index.html","079e9fe99f578e0192ca21e175f38b82"],["/2021/03/09/代理模式/index.html","369ee84679cba8b8bbd1756d8eb6f436"],["/2021/03/11/享元模式/index.html","f63135282a1b27ce80ccb4b90cef8518"],["/2021/03/12/外观模式/index.html","117beebf958aa9228237525db8270d48"],["/2021/03/13/策略模式/index.html","aa2a71dd35c55261de1a5221d11b2324"],["/2021/03/14/桥接/index.html","cbb9f79fe25493e0f90dc72bc9fe8c72"],["/2021/03/15/LeetCode-多数元素/index.html","7576222c73305264ea89a4445fc686b1"],["/2021/03/16/LeetCode之汉明距离/index.html","470d9cade49141f62839cba27ff73876"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","d9f86f780850605efe6a5d7741361684"],["/2021/03/18/LeetCode之两数之和/index.html","2f53979fe603a2cb33da76a2669cacb4"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","b75a699da44d48ef0c086a80862e83dc"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","c1b79bd294e1901cbf8c3548335070df"],["/2021/03/21/LeetCode之有效的括号/index.html","af2c654345b706610516786a831a062a"],["/2021/03/22/LeetCode之移动零/index.html","9181a2b610f791f5abfec8e56dcca3b0"],["/2021/03/23/LeetCode之爬楼梯/index.html","daa0c4c78657b8ead236a653355bda95"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","ee6079445f15d8f30fddaa544b6b2651"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","e5048224c441faf93a2a1ee2fa37e076"],["/2021/03/26/LeetCode之最大子序和/index.html","340a6dddf1da7eb0373d1aff7e7fd109"],["/2021/03/27/LeetCode之子集/index.html","3c946794e81b7c1656c589fb786c74f1"],["/2021/03/28/LeetCode之合并二叉树/index.html","1dac8e0635687d9347d9dabc864d1155"],["/2021/03/29/LeetCode之翻转二叉树/index.html","e08a8a9c8ca5982a9a271656241b3263"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","b9d6fcbe9c343af1ea191fc414734c14"],["/2021/03/31/LeetCode之翻转链表/index.html","9ad1c41e3700911dc0cde3f71d5ae51f"],["/2021/04/01/LeetCode之相交链表/index.html","3d37f7f1ec78395c7b496ae7eb552d44"],["/2021/04/02/LeetCode之最小栈/index.html","a76277bc4a013be9f88ef2041823ff01"],["/2021/04/03/LeetCode之对称二叉树/index.html","b7a781de609405ce49a6e34844037182"],["/2021/04/04/LeetCode之环形链表/index.html","3170af6c726aebc2d1c465c4d19369f2"],["/2021/04/05/LeetCode之二叉树的直径/index.html","d94bb1ce9043f6c7aaa64c8b378827bd"],["/2021/04/06/LeetCode之回文链表/index.html","6ec04493c16b28b26b1287f193fcae24"],["/2021/04/07/LeetCode之比特位计数/index.html","78444e1f76ddff14938a576b25f75789"],["/2021/04/08/LeetCode之全排列/index.html","050fac76ed841d64e74b75ac0b08d83a"],["/2021/04/09/LeetCode之括号的生成/index.html","30e4f2796589282ec9b80185068f5909"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","9684b682b6eb7388f05f3c7d772c94db"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","d41af14c69e0c1c9c7b5025be6734082"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","857ff42e4bdc11238e42c912444e98b4"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","5de3e0931aa8160680dea98c9009f337"],["/2021/04/14/Mybatis/index.html","c05ee67311c744e2de543d389e7838c3"],["/2021/04/15/Spring-1/index.html","900fcd6a3dd8bdd6a891d1ee312076a3"],["/2021/04/25/Spring-2/index.html","fdf6fd0500f90964b78799db3d207600"],["/2021/04/27/SpringMVC-1/index.html","2b9e5260c98737b39660dd6ed1ca8199"],["/2021/04/29/SpringMVC-2/index.html","85e89687287c6bce2d315fcec34a843d"],["/2021/05/03/冒泡排序/index.html","6c93a4a68f2c96bae778077f79321ffc"],["/2021/05/08/选择排序/index.html","02f1975a5e3c6a69d5e2188ab8024ea9"],["/2021/05/12/插入排序/index.html","1e08c3119f29b4ce8d139f8387e4b06f"],["/2021/05/15/快速排序/index.html","b5a8313ef3cbb64d314f6b00ecc7e539"],["/2021/05/19/基数排序/index.html","9f6593ddb7df7554af63d865127fccfa"],["/2021/05/20/哈希排序/index.html","6b42abda59bd7a85c370eb2d94f76ddb"],["/2021/05/21/归并排序/index.html","6fe1427b7d64cd7dc3402309792d8848"],["/2021/05/22/二分查找/index.html","c6faf7c78dd76dcc8bac89601981bd02"],["/2021/05/26/差值查找/index.html","82b1ced00cfb489333fc49326a7d8546"],["/2022/01/12/高精度大整数计算/index.html","d0189e39bf8997bd3a723c899277ed04"],["/2022/01/22/前缀和/index.html","0c0167171dd3a13b648061e5204803a8"],["/2022/01/23/差分/index.html","96be21006085c39c3c1eea4128353f17"],["/2022/04/04/MyBatisPlus/index.html","492845a476b919941259be1504d7e867"],["/2022/08/17/jQuery/index.html","078f49e5b3073e246d8fbd9d7bfecc8d"],["/2022/08/19/JavaScript/index.html","cf592a47d7f7df5b3c6647f20d0e2157"],["/2022/08/22/Ajax/index.html","09f60c0bbcbe48030508bc541b456fa6"],["/2022/08/23/Promise/index.html","776067ca62852abccbb1073983cbe25c"],["/2022/08/24/Axios/index.html","336d68e5caa1eb9fab593cab960d96f4"],["/2022/08/25/H5本地存储/index.html","adef7797889c5570e712a51b0dc4470d"],["/2022/08/26/mock/index.html","564c3e26b197773f2c60a855fecb9a5a"],["/2022/08/31/VueJs/index.html","6eb9223d83d85879ed7e7bd1a6b36786"],["/2022/09/01/vue组件化/index.html","08e6c667903c3d321d998ff8b8cb5d85"],["/2022/09/04/VueCLI/index.html","45a888467150f322d4208a32cba12d51"],["/2022/09/07/vue实现动画/index.html","1b22194d1946cec41bf66c0e88b926e1"],["/2022/09/09/Vue响应式方法/index.html","8fc082b7b430af655cb03b92a335f630"],["/2022/09/10/Vue异步请求/index.html","d696ccc6066eb57acd18d403ee12b326"],["/2022/09/11/vue-Router/index.html","d26a773a4c9dacaedc82235f00f03390"],["/2022/09/13/Vuex/index.html","a31e52314dee0f8829c55953ede7d889"],["/2022/09/15/SpringBoot/index.html","7946efaea04e3d834b3223439e1f0cb5"],["/2022/09/16/SpringBoot配置FastJson/index.html","1f251c037d9057da04012c247fb689ce"],["/2022/09/19/SpringBoot参数校验/index.html","cbdc63a47a68fbe6e34c3183ba62fd1d"],["/2022/09/20/SpringBoot的异常处理/index.html","ec108b9ae4ceeda6afea0be6778827fe"],["/2022/09/21/SpringBoot统一响应处理/index.html","b6ac597c909de11deb6e95118ae93589"],["/2022/09/28/Linux/index.html","7c193a617cb22110d3532f525ccf5781"],["/2022/10/02/redis基础/index.html","67cc873f4169f65e0556c8e79a87c744"],["/2022/10/03/Redis缓存/index.html","8c7338e72fb8c18841c4b1f133f0598d"],["/2022/10/04/redis缓存穿透/index.html","0d1baca5720ff7098e57df80fc52cd05"],["/2022/10/13/Redis缓存击穿/index.html","6f21806112d5dd72fa1011677260be3d"],["/2022/10/14/Redis缓存雪崩/index.html","420f196e9091a3897bd507510dd3bbb4"],["/2022/10/17/Redis集群/index.html","adcf091608362fb7e744ef50fc06fd16"],["/2022/10/18/Redis哨兵模式/index.html","8f07b7b6f6b095250607eddf48b57668"],["/404.html","76076793d8303311f7dcabcc23d8b072"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","32672cf61d36af31b7a1b00295ea0909"],["/archives/2021/02/index.html","f3fbc84061b692148eff07a1e9e2eea5"],["/archives/2021/03/index.html","6d716e56205422e4e49571762ad6aa3b"],["/archives/2021/03/page/2/index.html","37c921012621b90a19128ec8f242b9a8"],["/archives/2021/03/page/3/index.html","a41d7814ef6688fd73be7e5f641d0d8e"],["/archives/2021/04/index.html","fb13c23913f99fa7871d5a27a55f6d09"],["/archives/2021/04/page/2/index.html","a7852c4bfc57290786276a7dc05e6be8"],["/archives/2021/05/index.html","600c98d82013415da2b0efd5f1c2d68e"],["/archives/2021/index.html","781012f34fbfd185edaf101e79bfb09a"],["/archives/2021/page/2/index.html","b857885518959e157f9fe3eeabd17dbd"],["/archives/2021/page/3/index.html","6201f118a876be469ee9e19d750aa693"],["/archives/2021/page/4/index.html","828319fb947f4c44f1169f86f4757fb5"],["/archives/2021/page/5/index.html","2c1c54b3188f0af4cbf6eeca5e8966df"],["/archives/2021/page/6/index.html","6816254b3ecbeff371148e02e73d4027"],["/archives/2021/page/7/index.html","6aa3546bd77ac884cfc5e9a51c089d72"],["/archives/2022/01/index.html","01e5db2274c136b0aeb16f79341f2e02"],["/archives/2022/04/index.html","15785cd3ccaf2c27738527b9c5c72ea7"],["/archives/2022/08/index.html","35b5c53f22497cc501f6e6b78574a43f"],["/archives/2022/09/index.html","f354072c867724c34b93b0ec0dcd3fdb"],["/archives/2022/09/page/2/index.html","db4e8c47244c9d44b8b67604dce4e39d"],["/archives/2022/10/index.html","e2efe2ec94d3c8c01e0c6b3461fd7b03"],["/archives/2022/index.html","398f99b2827e59ed35a6cdcb0a31030a"],["/archives/2022/page/2/index.html","964207398a7f9a0d39ee859ea2318037"],["/archives/2022/page/3/index.html","e6bd48a3ce8197850f8fa094072ffeb6"],["/archives/2022/page/4/index.html","bb2400c9f373f900298ea556461b5311"],["/archives/index.html","fd0d8bf06782396af094fe6b4f563da4"],["/archives/page/10/index.html","403c8f5a44e652999ca9a7c78befca35"],["/archives/page/2/index.html","6bd75b702bc06a4951c0acb8471c29ce"],["/archives/page/3/index.html","990e0b162339f8112883b28503af4a94"],["/archives/page/4/index.html","3a4e52c401af89245ef4fd91d0b2b1aa"],["/archives/page/5/index.html","674a84eef01298a8be8ce9f9f780876b"],["/archives/page/6/index.html","94b17622f1c3300a535dc28c576b7085"],["/archives/page/7/index.html","d44feff8ae7acbcfeefd4f3443e6e8aa"],["/archives/page/8/index.html","bdeaa0c79262a5fc8afb56a9772d907c"],["/archives/page/9/index.html","a2ebf4f78bd4b8984d175ab551c43896"],["/categories/LeetCode/index.html","737c62344647372341a5a74e4416948c"],["/categories/LeetCode/page/2/index.html","6df35b01a7da79ab86cb9fdd294ba1e5"],["/categories/LeetCode/page/3/index.html","006f496591d2c11829b670e32feaf938"],["/categories/Linux/index.html","3338dbe6a450ae57b5b6148cadf0bf8b"],["/categories/Redis/index.html","a27e85183eb2b5f3dfa12300bd553677"],["/categories/SSM/index.html","d83ddb13c9b8364e6e48f7d68e8b8ceb"],["/categories/Spring框架/index.html","676c462f71a808c6f6f6be252ef8f414"],["/categories/Vue/index.html","e34461e34d4c4298dee57a892e42ca7b"],["/categories/index.html","a6605c703511867de03fcaa50db14fea"],["/categories/前端/index.html","45372c3a1707f49a013380976eb6d8b4"],["/categories/博客/index.html","40df67537b1000a09734ae799390ca09"],["/categories/学习路线/index.html","480d5eb445cbba434bc8da67363a5b3e"],["/categories/工具/index.html","153702f7e16ecc6de2a6d8f67f46a77e"],["/categories/数据库/index.html","6bfba421ac1cfd3ed120d38a321d28f3"],["/categories/笔记/index.html","a6dea285fde7b8d5c81dd26e7874080f"],["/categories/算法/index.html","68fbbe4277115b96be6d8a0a88b25e8a"],["/categories/算法/page/2/index.html","821bdc110f754ff174c83fa12305cf1c"],["/categories/设计模式/index.html","8511a006f60515095c8b3bdbb87b4a59"],["/categories/设计模式/page/2/index.html","e9603bc7df9811dd213f8a1d9c76e765"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","2fe647cd80f3a289fa9a4b4d13bdcffb"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","9dfd84479bcbe662d9213fe513257e7f"],["/messageboard/index.html","3c4833aa7cb2e81adddba22fd5479066"],["/page/10/index.html","0835192d2a55e9e998267d59e0cc9a2b"],["/page/2/index.html","d808f53fc83f377af98d1b599d4edb2a"],["/page/3/index.html","ecd105ab7f0372a1b12fe62e1e65db4b"],["/page/4/index.html","45a182a185b0360d57a32634b9f18e7b"],["/page/5/index.html","4a5d712b25d6bc75606bb87221f60556"],["/page/6/index.html","033371525e53226b9bbda875e1bccb76"],["/page/7/index.html","29a4761ec9610105edf0726ca4caa1ce"],["/page/8/index.html","68686fbd4f1d3eb77f8acb37405d270a"],["/page/9/index.html","2875eca95605c83a2fdea83efb5d139a"],["/sw-register.js","c028ab69ec1d3c6a8b2ad3aa0f1eb9ff"],["/tags/Ajax/index.html","5ba1929900b84064d87b7c55e84b9e0c"],["/tags/Axios/index.html","9714427202ce046ca0239fbe43b1192a"],["/tags/H5/index.html","321e0bf1fbe3075d74f69b261ef07011"],["/tags/JavaScript/index.html","6925195cc42e92c5811585ce40875572"],["/tags/LeetCode/index.html","27791404ab23d4ce1a0bd08f4044b0e4"],["/tags/LeetCode/page/2/index.html","47f005c7bb086900e6f21088b1319040"],["/tags/LeetCode/page/3/index.html","03962a010d1c4b44513ebca8de9bf078"],["/tags/Linux/index.html","e83d2ff828aaa582f58daf560242751a"],["/tags/Mock/index.html","ee376700e8d447a13d35102e28625d38"],["/tags/Mybatis/index.html","4160792bceccaed7577b73ecddb6423d"],["/tags/MybatisPlus/index.html","05cf51c10f956df017b1bbdbfdae4760"],["/tags/Promise/index.html","5506cf33d75311cf9a469560484fb542"],["/tags/Redis/index.html","14867193625d555c07f6223ee371b501"],["/tags/SSM/index.html","b74e7ad5825ed776d6d73f47a3ad0b06"],["/tags/Spring/index.html","df52fdc03752812dc57614a805071670"],["/tags/SpringBoot/index.html","9b65ecbd747af6af059459d836a4515e"],["/tags/SpringMVC/index.html","5115597d82965821775506c226b56982"],["/tags/butterfly/index.html","88fbb16f8386884c3b90901f314eaf79"],["/tags/git/index.html","75aea81dcfa0b7e6f3a6e4867f4ecb86"],["/tags/hexo/index.html","c233c015c88920e8e8d6b0496b701ea6"],["/tags/index.html","a57cebd071e39e7e3dd30ff97660c3ca"],["/tags/jQuery/index.html","e89205d3a0a4b2857809d2aa440b5fc8"],["/tags/java/index.html","76f1e3a4916d0f30b050a28df4b24006"],["/tags/markdown/index.html","4322ed5be93d13a2191d0a372d00057b"],["/tags/mysql-数据类型/index.html","64ab3fd637a48f347b0fae67c7edc126"],["/tags/mysql/index.html","caf56046b75136d7981a0d821d0b8a4d"],["/tags/typora/index.html","637b35d87123102755117f7e13090ce1"],["/tags/vue/index.html","3af07c4d93660d6ea32c09ffd6b94a92"],["/tags/享元模式/index.html","3377c0f1ebc0ec2239667932c902729e"],["/tags/代理模式/index.html","adb3fc4286659b7acfab275f88f2faed"],["/tags/分布式/index.html","b087b9363df8d466b90349cf91aad3fa"],["/tags/前端/index.html","eec329a262d73665c395e16f48d08557"],["/tags/前端/page/2/index.html","fdac54d023cfd4b8d020f730366690c2"],["/tags/后端/index.html","cc21cc9616c31b46d2e5ae8e0c4a7e31"],["/tags/外观模式/index.html","8f1be5f6d8da578bccd08d5c8588e41d"],["/tags/工厂方法/index.html","cea5f5d5123cd1e0b320cce9d1008ac3"],["/tags/抽象工厂/index.html","e28e0a4732339a755b983cf56a06732c"],["/tags/排序/index.html","525bcdba780fe65f893d3394792b1995"],["/tags/数据库/index.html","e01f4c2f9030a9f997d13598d2f7a6e2"],["/tags/查找/index.html","dff31abdc1da26acd5ef9ef46b98fff6"],["/tags/桥接模式/index.html","afa4159781c38fcdac691ce1cf1ceb72"],["/tags/模板方法模式/index.html","a01a3791204d2b0f29149cc2b998d76e"],["/tags/版本控制/index.html","9ffd42810fd3195d7d5f7de061f6bfb4"],["/tags/策略模式/index.html","d131dca5f335018282f9c9b0594f8c72"],["/tags/简单工厂/index.html","4171196f9bd6c4506894386d45ef6e0f"],["/tags/算法/index.html","b57b6398aeea24543345a724299bae5c"],["/tags/算法/page/2/index.html","2450c31d7b3069191d47925a1e52f789"],["/tags/组件化/index.html","0af28e91186c6d9f288619fe1120d6c3"],["/tags/缓存/index.html","1ade84924ed833e56e7beb65c15a884a"],["/tags/观察者模式/index.html","1b52b74f882d6e4ad9d92fd446f3ab46"],["/tags/设计模式/index.html","6167a5ff8450f2e0456ec1d8201134f8"],["/tags/设计模式/page/2/index.html","1c69f80468fc465b42a82e2d1c77c986"],["/tags/责任链模式/index.html","069a74867f968ad16b5b06484f75ea40"],["/tags/适配器模式/index.html","9fb44c140ed888fe88fc591e828d1ee7"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
