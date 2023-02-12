/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","c9e58b227165e0541d76a8db7414ff9a"],["/2021/02/22/博客的搭建/index.html","21ea67d0df4a19d62c879108a4931afd"],["/2021/02/23/如何使用markdown/index.html","1880e1ec097803dd44880e8622a6a285"],["/2021/02/24/mysql命令大全/index.html","302cc289d7af91b084dba6459551e598"],["/2021/02/24/mysql数据类型/index.html","2403f0f2bf47c3ec14f945ba04d7945b"],["/2021/02/25/Git的介绍与简单使用/index.html","4ea47328595e71fc8ee20ea4c56f2be2"],["/2021/02/27/简单工厂模式/index.html","360ab517ef265ed3e0d13c5548fc29b7"],["/2021/03/01/工厂方法模式/index.html","f9173f467db6cb357dca8d7674f6e13a"],["/2021/03/02/抽象工厂模式/index.html","12a2a07fded8aa3a9dd4ed79ed29de52"],["/2021/03/03/单例模式/index.html","0f6aa2e23c666d89bc3fa0151f0f3294"],["/2021/03/04/观察者模式/index.html","d7649964f31a39cc752dc69d2f6453ee"],["/2021/03/05/适配器模式/index.html","2b6dce2511a8419a54912dfcd1c6bb80"],["/2021/03/06/模板方法模式/index.html","00788a8a72cedcb4821ec5106a399c4e"],["/2021/03/07/责任链模式/index.html","862bc450876abd72b156f0fabb28e053"],["/2021/03/09/代理模式/index.html","e7681a903e707028b5bdcdb109691edf"],["/2021/03/11/享元模式/index.html","de39679b70485081020e06ab6660e997"],["/2021/03/12/外观模式/index.html","d06cb4bfcafb99d3ca85b47dfba5bbba"],["/2021/03/13/策略模式/index.html","537e053959f9aa0a60cabf4cf1ae7e09"],["/2021/03/14/桥接/index.html","0adff6e1a04ea2eba424715acc5f54f3"],["/2021/03/15/LeetCode-多数元素/index.html","4f176417de398586463bb98b3dee3e11"],["/2021/03/16/LeetCode之汉明距离/index.html","6d0325b52c88ba46bc8cf27c251eb56b"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","2ee7cbfe723dd020a2c62cf5529e6944"],["/2021/03/18/LeetCode之两数之和/index.html","a485afee0e0e7656cc0a0aad81ebbf86"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","bb8fce3ad116f45884c8b6c5be5d205b"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","aac743803b952a90681f7574f986eb24"],["/2021/03/21/LeetCode之有效的括号/index.html","2eae416aa2eaaf70144e5f5b19e6d52c"],["/2021/03/22/LeetCode之移动零/index.html","0281cf96165bcceeddd155e003fc2602"],["/2021/03/23/LeetCode之爬楼梯/index.html","822e6c9c91f47b8de5fda7751e45dc39"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","fa4546188643d08638f3fcb00550e977"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","573a4bfd0fd8e8bf2387badd483c7052"],["/2021/03/26/LeetCode之最大子序和/index.html","f54165fcf4b1f9cf7271a54357bcd4aa"],["/2021/03/27/LeetCode之子集/index.html","d689aa7cfa7960924af60a2cfe19d5df"],["/2021/03/28/LeetCode之合并二叉树/index.html","58b3fb5cb3037be9037cbfbfe08afabf"],["/2021/03/29/LeetCode之翻转二叉树/index.html","6ca4cbd1d7c20c5fce2ba95f114178e0"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","dced61a00b33e2dfe5c8df56d68f5751"],["/2021/03/31/LeetCode之翻转链表/index.html","edc2a679732b24e9cd7acf48a237015b"],["/2021/04/01/LeetCode之相交链表/index.html","cf3222701d655321481ff956fbae1fd7"],["/2021/04/02/LeetCode之最小栈/index.html","ea33da48dbfc6f49cebb89f56884f118"],["/2021/04/03/LeetCode之对称二叉树/index.html","9c3ead98556e6e559af9ed56a7f32045"],["/2021/04/04/LeetCode之环形链表/index.html","d1f921bcb91085b617d92c8ab8ac5204"],["/2021/04/05/LeetCode之二叉树的直径/index.html","d3edb28bfe53a691a1560e8a9b14428b"],["/2021/04/06/LeetCode之回文链表/index.html","58e60a88a47711dd5ff1520c66549af7"],["/2021/04/07/LeetCode之比特位计数/index.html","d4c47a409549ed065949b913d72a58e5"],["/2021/04/08/LeetCode之全排列/index.html","9038f48bb4db520378ff39b385bcb5c1"],["/2021/04/09/LeetCode之括号的生成/index.html","f0d2a0c9a0613b5bdd5a64a3433bd0e6"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","df21485088f825678d712956f968148c"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","9b89358ffa33629aed70a5d177f6d00e"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","5719b0662d06dc200231804c17861ccb"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","80f230073998bb765acdd0ddb40791f8"],["/2021/04/14/Mybatis/index.html","1076fd868b429143c4ac1ae66d17e0bc"],["/2021/04/15/Spring-1/index.html","6014db39da89ce77b5b74c4a6fd8c4d1"],["/2021/04/25/Spring-2/index.html","7c99edfe30209e4bef542f3c2e05a816"],["/2021/04/27/SpringMVC-1/index.html","04a91d69a01727789b3787dec4ee278f"],["/2021/04/29/SpringMVC-2/index.html","5eff2db45c440c37039d70d8eef49f3c"],["/2021/05/03/冒泡排序/index.html","7a74ca83b5f26c3da470418c69e821eb"],["/2021/05/08/选择排序/index.html","d2380ef716dacae37c62b843951750cf"],["/2021/05/12/插入排序/index.html","0f9f4f14850b899d1b8739763689b5a7"],["/2021/05/15/快速排序/index.html","da0bed72c76594d5f392e621adf384ae"],["/2021/05/19/基数排序/index.html","fa778e8e857477dee38943e3045c7ad0"],["/2021/05/20/哈希排序/index.html","ff5e491205ca65f0b4ecc96b6860bafd"],["/2021/05/21/归并排序/index.html","e8e5974c00c484316dabf9af08dfe1dc"],["/2021/05/22/二分查找/index.html","7ccce61e719e3cfb30030ae030d13533"],["/2021/05/26/差值查找/index.html","ca3a7979dcdc295edce2e3436f7fd3a9"],["/2022/01/12/高精度大整数计算/index.html","d3a3fd75f313ae2fe1c3c9695e121b7b"],["/2022/01/22/前缀和/index.html","80cb810a4d8db2c102321ea8d2101339"],["/2022/01/23/差分/index.html","ecd393db000273007353ab76b3608757"],["/2022/04/04/MyBatisPlus/index.html","7a7160e96229572598c283bdad6b10c3"],["/2022/08/17/jQuery/index.html","8ce4b904ed4c480e04444d003a00895f"],["/2022/08/19/JavaScript/index.html","f6d6dec49f7582cf82e3568ec58e0211"],["/2022/08/22/Ajax/index.html","97f3e6bd64d4181df2b585115abdf823"],["/2022/08/23/Promise/index.html","f64f81bb345e17b7dffb24263b00408a"],["/2022/08/24/Axios/index.html","8f31be812324288829d0c3d7aefffc8f"],["/2022/08/25/H5本地存储/index.html","8c9ba4f54bedb478d3fa571bd4318247"],["/2022/08/26/mock/index.html","65f219a844a2d3740d64eb16a8510214"],["/2022/08/31/VueJs/index.html","bafe36c89fa3864a7722bfe9a2f8fdd4"],["/2022/09/01/vue组件化/index.html","606ffd88a544eaa67744012587a2f49b"],["/2022/09/04/VueCLI/index.html","ef19a547f12b3514de2ed908ca1dbc08"],["/2022/09/07/vue实现动画/index.html","dc213761657a3b6b0a2167c1f866a7ec"],["/2022/09/09/Vue响应式方法/index.html","cb4d0407272c5ed40ee4bde6efaee276"],["/2022/09/10/Vue异步请求/index.html","39f148606f5c85d617c59761b9755681"],["/2022/09/11/vue-Router/index.html","6d41562493440472d605f54a7f986ef7"],["/2022/09/13/Vuex/index.html","d8a7c14deb2830079185596c55496f44"],["/2022/09/15/SpringBoot/index.html","a09aa5101cc7ee06eab81633391dc499"],["/2022/09/16/SpringBoot配置FastJson/index.html","db01f5ae57e7f6373b14494230ef0154"],["/2022/09/19/SpringBoot参数校验/index.html","7cd9437c4d69925913d9b3f7c0737752"],["/2022/09/20/SpringBoot的异常处理/index.html","5f4d5786bd0221ef500b842eeaf1bc37"],["/2022/09/21/SpringBoot统一响应处理/index.html","15c51ded9df1bc74876378633f1ceeda"],["/2022/09/28/Linux/index.html","ea69ab5f96a6880fd4b41990d7f37939"],["/2022/10/02/redis基础/index.html","b06a698d4fc13e2b8677f2766677ed24"],["/2022/10/03/Redis缓存/index.html","6493e182f2a48fee1d93f2f66aee0e65"],["/2022/10/04/redis缓存穿透/index.html","54c41b6bf4d60b6110db09d3515bcc85"],["/2022/10/13/Redis缓存击穿/index.html","bde052d84df7f149711cb31ef6018f5a"],["/2022/10/14/Redis缓存雪崩/index.html","bbd9edd4a4cd05dd20fc7d973419add3"],["/2022/10/17/Redis集群/index.html","040452f40bc1ba8ba465713d0bd63b19"],["/2022/10/18/Redis哨兵模式/index.html","598a9ac3e7321737a8da9f730616917d"],["/2022/10/19/Redis主从复制/index.html","e31f72716deaf9cc33747ffa6601c022"],["/2022/11/03/Spring-Security/index.html","a5992c1a8e0801e536d4d94c63b882e5"],["/2022/11/08/SpringBoot日志/index.html","3bfa13703740cb1fa5310e9dd64823b9"],["/2022/11/11/Swagger2/index.html","2082902638b8774db96ed551671fba97"],["/2022/11/21/Nginx-一/index.html","8b82eff4a70a4a1e69f83b98d6d73007"],["/2022/11/23/Nginx-二-代理服务/index.html","9d46579c858efb231db7ad9837114e11"],["/2022/11/24/nginx-三-负载均衡/index.html","50b4978171508a0e66d977f65e8200cb"],["/2022/11/26/nginx-四-缓存集成/index.html","161449d4e17b133e2baac0786c056bcc"],["/2022/11/28/nginx-五-动静分离/index.html","90a20506e0b8b6a1a1ce14399c2400b6"],["/2022/11/29/nginx-六-制作下载站点/index.html","0e3281133a03e3c46176cd405e7936e8"],["/2022/12/06/docker基础/index.html","f115b9eb28a35776f33e8a1985e3fddd"],["/2022/12/09/Docker高级/index.html","7006bd259e86abd33667418cc516761f"],["/2023/01/04/MongoDB/index.html","0b925908d93badbc495c0423a43d96ff"],["/2023/02/05/消息队列/index.html","3b6fcc35377e715ca9002cd4152614cc"],["/2023/02/12/RabbitMQ集群/index.html","044b5c1ce98af2bc41df1751f2910c0e"],["/404.html","f3332edc3853bd276b34dbd68931dfa4"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","dd5eff6d111fd65ef109fdd1d9bb1993"],["/archives/2021/02/index.html","2728e8f06f0f860eb991d147199b58d8"],["/archives/2021/03/index.html","1f681284eb0255cd84a7ece613b3b32d"],["/archives/2021/03/page/2/index.html","773f54e50d05d509c3e7defec03b458d"],["/archives/2021/03/page/3/index.html","29e365d73ae75e63be5b81dba6be51be"],["/archives/2021/04/index.html","b5c1057ecfa879c9e8758a4e36bf8a51"],["/archives/2021/04/page/2/index.html","a722d1e1db6d9307cb2482851dcd94fc"],["/archives/2021/05/index.html","d1f5db15533bc480dbef042faba664d4"],["/archives/2021/index.html","bc5e58ea4cb420e24e985d988678aba7"],["/archives/2021/page/2/index.html","f542970af660eeb475e9252bbecbe51c"],["/archives/2021/page/3/index.html","f07f53dcc52fd8e6202c4bf3e6fc0368"],["/archives/2021/page/4/index.html","5bbe9d95498c7e6580fbd2201dd1d2fc"],["/archives/2021/page/5/index.html","fc8a80fb21b0ebe03df3273d27310124"],["/archives/2021/page/6/index.html","530873a287bbbde9f117a1fe76b8bc79"],["/archives/2021/page/7/index.html","e77c8ca37c21b84ce36d0573e0394b59"],["/archives/2022/01/index.html","e87f070608ab26bfd6dcb14db625afc2"],["/archives/2022/04/index.html","be69a3bac3697f2b020513cb8357a7f7"],["/archives/2022/08/index.html","18e352e4492eb14dc7542dafa6e8528b"],["/archives/2022/09/index.html","aa69ed253a10b2db347cf0a2a298187f"],["/archives/2022/09/page/2/index.html","a931c2fa1f1ab6f78bb1e0500f4cdb6f"],["/archives/2022/10/index.html","e14ca94d890d0a8a811282fb7e7f389a"],["/archives/2022/11/index.html","f9010268b7e07c7e288f5326817a9c33"],["/archives/2022/12/index.html","5908369d8e5c9acf231e9e264a33454b"],["/archives/2022/index.html","734f4252d7a4d5947ba7c471b6cf0dfa"],["/archives/2022/page/2/index.html","414d01bcdd9ea7ebe81e32557b40351d"],["/archives/2022/page/3/index.html","9b2e56dea57d768d3b497048281e99a1"],["/archives/2022/page/4/index.html","13474b1ff9e931c79cdaa739480fba87"],["/archives/2022/page/5/index.html","10cd9562cc8b4d2ef4dd01ced0eac220"],["/archives/2023/01/index.html","59dd7b10f2ee6ccfa5e207699a978065"],["/archives/2023/02/index.html","0a36c0bf4d6703bd9b489afc90ee2f53"],["/archives/2023/index.html","963a7128ea00b59065106f1e4461422b"],["/archives/index.html","979eb14616c945760092453155b74c29"],["/archives/page/10/index.html","881dc3e427bb42d889727fdffa1b1e1d"],["/archives/page/11/index.html","0f2eb779b3c79f01e3f08baa418a675f"],["/archives/page/2/index.html","333c7a4782c5384cf14b406bbfd1dc04"],["/archives/page/3/index.html","5e319980d43e6055064c969260dbfc39"],["/archives/page/4/index.html","0fca6bb253beb4cbb8e35463b6e96c63"],["/archives/page/5/index.html","9c03713a7dc9c3bc9190577d38f3de7d"],["/archives/page/6/index.html","d6c8c2df62759c6118028336732ab164"],["/archives/page/7/index.html","f72eb3d2280802a9d4e8073934844473"],["/archives/page/8/index.html","7bbeac3ba6b0dbbb0f8522f30cb44216"],["/archives/page/9/index.html","418fa543e6164abc9a22837d674f135e"],["/categories/Docker/index.html","e5540fe5b040264c2cf831f13974ca6a"],["/categories/LeetCode/index.html","d1fb9debd1f3dc64d4a895282526d218"],["/categories/LeetCode/page/2/index.html","d617082d8e3ba657433224940bb1b4b8"],["/categories/LeetCode/page/3/index.html","a7c84d4d75e00768b98b01e229ba1f17"],["/categories/Linux/index.html","b023da6ac04e7fd18b6154afabff095d"],["/categories/Nginx/index.html","6a9eaa355714bc049786aa6ff62beb8e"],["/categories/Redis/index.html","1146402506f6ffc28e401be25d3f24c1"],["/categories/SSM/index.html","94f9053bbd0b71d874857f600f1afc77"],["/categories/Spring-Security/index.html","e708e0dbeaacac9dcfd31b8d9dcd72a5"],["/categories/Spring框架/index.html","3d60e4fa434e3659afe77ce435323bcf"],["/categories/Spring框架/日志/index.html","1665b379aab770010b8b310771605bd1"],["/categories/Swagger/index.html","b372edca6051f182ace8ac18e5bc5081"],["/categories/Vue/index.html","56a62258a622148e81af6841deef0268"],["/categories/index.html","638357c3f14bb2bb2dc02a98679f8e64"],["/categories/前端/index.html","753ffb80adcb19e25a74aece398ad7e2"],["/categories/博客/index.html","243e35bc22200c367fe3bd1be7632ea6"],["/categories/学习路线/index.html","32b2f30392b90bf2e788f70ad51c1d07"],["/categories/工具/index.html","f5db81830d051b77b7ddf4256d85e3bd"],["/categories/数据库/index.html","32b5089f188f67c43c7062a0b98233ed"],["/categories/消息队列/index.html","c1fcebe4b3d69b41906dc413c2a6df50"],["/categories/笔记/index.html","e4f6c3ab4cc54cb5dd506dcc077fe89e"],["/categories/算法/index.html","1a2954600938bbbb66762533e937e599"],["/categories/算法/page/2/index.html","d2dcfb6811787832c76b46bffc49adcf"],["/categories/设计模式/index.html","313d96cbfff698a949f25026891d55a8"],["/categories/设计模式/page/2/index.html","54b37316c7acbb26378bb629cd60032e"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","3dc7e47570bb4c66e14cd6b4e2e02b07"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","d32362c78760ca23732783220519865a"],["/messageboard/index.html","3bf92708d092b315af04ea85e43bcaea"],["/page/10/index.html","741a7bbc9d9a6e46cbbf81d4f0e8dd66"],["/page/11/index.html","ddb922f3f94f674b33afd2231d01fa4b"],["/page/2/index.html","55bb8d51d515d0949702db9fe6fd0309"],["/page/3/index.html","0f5f023cef0089147a565ee89e7562fc"],["/page/4/index.html","d8f39a85799b6dc3b03cd80f11e1bceb"],["/page/5/index.html","6e2dc07c98905d5b76646bc46cb28220"],["/page/6/index.html","658fe1b2251f215ebd539d842e9d5fce"],["/page/7/index.html","d6f748f58af148b51ca6d5c810513643"],["/page/8/index.html","98a6fb17251a27df3cede6fe80edc928"],["/page/9/index.html","07f277dfbd984d05ed9f70c7ef4eb30c"],["/sw-register.js","0a7d6f763de746d7d434beb6670eea95"],["/tags/Ajax/index.html","f06b0d345b97aa69a1b0c014c15d1346"],["/tags/Axios/index.html","9ea8dd0687e4a89d262a1d527c5dc952"],["/tags/Docker/index.html","cac1d7eb787e9da23eddbe8db7212153"],["/tags/H5/index.html","adf3a831453b470ae5a0f61c389f023f"],["/tags/JavaScript/index.html","b89b98537a8590127cb0c911ce3c6a81"],["/tags/LeetCode/index.html","e26775def1135940f3c9e1085b2935bc"],["/tags/LeetCode/page/2/index.html","3007f6ead9425e55b2ba4431dff1f6fe"],["/tags/LeetCode/page/3/index.html","2de290f4a789396a0ba3b3ea6a0b75eb"],["/tags/Linux/index.html","e33df40ba196c0c269af8b9f670c93fc"],["/tags/Mock/index.html","8a089c38c7265516a1897b29726383f9"],["/tags/MongoDB/index.html","bf2465731c8c77485621f565e6971e7f"],["/tags/Mybatis/index.html","fb6b6f7e7c647922b730e8899a03f182"],["/tags/MybatisPlus/index.html","b97b5bbce9ff4470e76f6e53efaa8005"],["/tags/Nginx/index.html","59c54925a2c325056fdaab1d66094dff"],["/tags/Promise/index.html","7dffb539a8f34be1a4528ca0dbb74e87"],["/tags/RabbitMQ/index.html","044de5ec67603af4b86351df871b7ed3"],["/tags/Redis/index.html","fbc3c5de3c4763ee1bbd70c2f9c0d56a"],["/tags/SSM/index.html","47638e2e7c761724143a7514ad7d73f6"],["/tags/Spring-Security/index.html","c79dba9330660b2ca34a3a4cb0cb47de"],["/tags/Spring/index.html","bbe8cac4bdbbf604c029805d65c9d16e"],["/tags/SpringBoot/index.html","e31d50d848c4df73d549d2f9379c77db"],["/tags/SpringMVC/index.html","3ca8cef51578317b8ffc5b45ae88e698"],["/tags/Swagger/index.html","ecb491ab98f79d921f2f3a9316e9eb80"],["/tags/butterfly/index.html","8fd4fd37f26514dd1ab8a009b0f80f90"],["/tags/git/index.html","f7bc3420e225a05a170a67f5829500be"],["/tags/hexo/index.html","456b8f796eb3ce1ec5952b109a77e6be"],["/tags/index.html","f2425b4aef2e00532fe9c6b79d13a63a"],["/tags/jQuery/index.html","b5e735da6c54b9ae1e16bc437cba832c"],["/tags/java/index.html","d5019c7c53100267fc16c39d3ced328b"],["/tags/markdown/index.html","34383676144800fe805fb1d45c6642ac"],["/tags/mysql-数据类型/index.html","7882fb48e31d778e695a9f391c3507a8"],["/tags/mysql/index.html","40d2196e07bf718f2eeb2c634cbb7335"],["/tags/noSQL/index.html","5d58c300e6b92f528db2c2bc7e7b0360"],["/tags/typora/index.html","dcb6f12bc449773fbe512a75ad6b9391"],["/tags/vue/index.html","bce5ae87ec94b2b0fe97eeb1d43615ce"],["/tags/享元模式/index.html","8aab2393e38ed9676e1f8ecbc8799907"],["/tags/代理模式/index.html","b985596afe34c77d78885ef46f8f0deb"],["/tags/分布式/index.html","44a1c9cc005e0afaef50ffe65b4b842a"],["/tags/前端/index.html","8a507d27eed4ddbafbd4a59897372f66"],["/tags/前端/page/2/index.html","d08a855f9df3cb155ce691ef614d4f65"],["/tags/后端/index.html","4d0cfdfd5b33a730bbc1230d61fef7e7"],["/tags/外观模式/index.html","f4e89bfb1898238dd1e777daab3a7649"],["/tags/容器技术/index.html","44b1c8bd0cf0f9a8199f83ec7699c91e"],["/tags/工厂方法/index.html","3def3d90d44c4da407accb060e9af708"],["/tags/抽象工厂/index.html","294dad1d844d8b74fdc17472c38abe2a"],["/tags/排序/index.html","fc840473d9d89495287c768de74feedc"],["/tags/数据库/index.html","31bb86f9a3a34b70b3a3cc7ac64809d6"],["/tags/服务器/index.html","63fcc76abee4aa0f83dc4de3f6de75a6"],["/tags/查找/index.html","fa1f84092a3909c6a3714567e3c8eb10"],["/tags/桥接模式/index.html","de5c6e402da317006b3b471b5c508873"],["/tags/模板方法模式/index.html","ba9732821a7b71dbf0ad0dab15d26a6d"],["/tags/消息队列/index.html","af24914127bba48db05d38cabbad492e"],["/tags/版本控制/index.html","757d49c954f47b90d5132670d4774df4"],["/tags/策略模式/index.html","1f46be4563295e3f52b4b5649e06e5a8"],["/tags/简单工厂/index.html","25e55074954f8a71b11365e9b94720f7"],["/tags/算法/index.html","083db6fd5db0ce52a9bf0ca87b092b83"],["/tags/算法/page/2/index.html","6a37dd63a769e1f47c5b920020d5c358"],["/tags/组件化/index.html","7a2471d93d5fde1792fea859bee1cdb5"],["/tags/缓存/index.html","916a7b27a17af830b83c1bd5657be62e"],["/tags/观察者模式/index.html","a6d38dcf0d899494e1f758cdddcd392c"],["/tags/设计模式/index.html","5877e08c1d80599c10dfa17b91f550bf"],["/tags/设计模式/page/2/index.html","c40f394d21e80daad7e44da69f6a71b5"],["/tags/责任链模式/index.html","05bd44d3784559d503d8af2dbd9e23b9"],["/tags/适配器模式/index.html","0a025092be77980abad45b4f2cc820c6"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
