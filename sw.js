/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","92b8a7622efebc287a8ebdd803cb2177"],["/2021/02/22/博客的搭建/index.html","f6589feea54d4efcc8bcedc8530b2553"],["/2021/02/23/如何使用markdown/index.html","da6302a6321e8e3e929c579a8df622d1"],["/2021/02/24/mysql命令大全/index.html","9416c54d2eed079faf8d026b017f75d0"],["/2021/02/24/mysql数据类型/index.html","7109329611c0f3cfb0dc982f88be0828"],["/2021/02/25/Git的介绍与简单使用/index.html","ed6e82de284a00f30bc91898b6dd0475"],["/2021/02/27/简单工厂模式/index.html","b60f124ae550448f6f90bb8fd350eec2"],["/2021/03/01/工厂方法模式/index.html","cfa049fa734d0fbb4c82dd89bac489f6"],["/2021/03/02/抽象工厂模式/index.html","0c329f93546e554b2391dd2a8967b011"],["/2021/03/03/单例模式/index.html","a1074eefaa90b1cf3af87d8cb90a67d2"],["/2021/03/04/观察者模式/index.html","d4bfe9f6c9d2eb17b9f1b5461464075a"],["/2021/03/05/适配器模式/index.html","0ae7e5a20b72e9b75fc815142c7bf1f4"],["/2021/03/06/模板方法模式/index.html","5dae74ad07b69e91c71a0f5265a31220"],["/2021/03/07/责任链模式/index.html","8cef9ec0fe70754a1de4f0a48ab60899"],["/2021/03/09/代理模式/index.html","6d7fef6a112240c04009a783a4e589e3"],["/2021/03/11/享元模式/index.html","75f02fe0e5ae627c1357752f811bf2aa"],["/2021/03/12/外观模式/index.html","b55d5110ebd938bff9c6108dde11536b"],["/2021/03/13/策略模式/index.html","fa92238158832eae91734346707eec80"],["/2021/03/14/桥接/index.html","7a1995143a784b184125c6cf92ffd7d6"],["/2021/03/15/LeetCode-多数元素/index.html","7fa522bb8612a5cedc5a7fb35be00fb5"],["/2021/03/16/LeetCode之汉明距离/index.html","203a020d2ac68aed7e3313efef309e39"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","26b116ed7e289587ee1b7a2b39a8d7ec"],["/2021/03/18/LeetCode之两数之和/index.html","6de0fb1ef1b4e4a33326743f0429e293"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","4d470d5e0714372f5a975446487458fd"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","3bb45152019f20e097f0507a36ac0568"],["/2021/03/21/LeetCode之有效的括号/index.html","6c4c17d3d8fa3fdaa888ca689ebd61b3"],["/2021/03/22/LeetCode之移动零/index.html","631bd42fc9377f7c680569d26594ef0a"],["/2021/03/23/LeetCode之爬楼梯/index.html","28ed265f687e1f7afa6d0ac320084965"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","0607e3bf0dfa5f3135728ae163d6c39c"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","e69d0fe82ded422b9358a6620bd7f5b0"],["/2021/03/26/LeetCode之最大子序和/index.html","778ba5669666a9157e56f861d2a1cb4f"],["/2021/03/27/LeetCode之子集/index.html","75019b733d81fa978ca58df67bfa10bc"],["/2021/03/28/LeetCode之合并二叉树/index.html","17a3ca8b90b320150376edfbc0de8e31"],["/2021/03/29/LeetCode之翻转二叉树/index.html","6a6518a2d0ee0e4390e95f273ca2f308"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","4f7ae4f78c264aa95e50a625c48f2dd6"],["/2021/03/31/LeetCode之翻转链表/index.html","340dc52f179d14d66e701b113d5d4f13"],["/2021/04/01/LeetCode之相交链表/index.html","bf0d20930baca95e559639d42e5537d2"],["/2021/04/02/LeetCode之最小栈/index.html","38f767978c16c29d7bc7bb8c877024f9"],["/2021/04/03/LeetCode之对称二叉树/index.html","513a352c8bac3a8bdefa5d1d7709c6c3"],["/2021/04/04/LeetCode之环形链表/index.html","c46c3643efc1f159b7af63d654795eb0"],["/2021/04/05/LeetCode之二叉树的直径/index.html","8bc4dafc7490e834011af22a47817377"],["/2021/04/06/LeetCode之回文链表/index.html","cb6e80f5df61f9fe81da59afd4044cbf"],["/2021/04/07/LeetCode之比特位计数/index.html","d00107af9f9f47895a768af9a5d0ae46"],["/2021/04/08/LeetCode之全排列/index.html","9e87bcb0e8f8e0d219e962c481aa38b8"],["/2021/04/09/LeetCode之括号的生成/index.html","30a07d44b0e15562a884d55cebc0dff7"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","a0d4edd223960379a44d10aee6f53939"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","62f7ce92ded9a0fa3bdb2fc80f3de25c"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","e063dca27be9bd4657b5a6ef69b11d50"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","6c492e858aeadabf28b2bee17915d945"],["/2021/04/14/Mybatis/index.html","5f7266308348d5bba23d3f4bf5dbde23"],["/2021/04/15/Spring-1/index.html","44c568d1add729ae10230f16887da6bf"],["/2021/04/25/Spring-2/index.html","e907f34d28a7a6c980bda0551cdaf879"],["/2021/04/27/SpringMVC-1/index.html","b049c2aa1e08b693679f56cdf488bb93"],["/2021/04/29/SpringMVC-2/index.html","5335903cdeb5c752b90fb3bec4f33625"],["/2021/05/03/冒泡排序/index.html","30efe84108908062da83a34e0c87c585"],["/2021/05/08/选择排序/index.html","29c521308955c638297e1227f8759110"],["/2021/05/12/插入排序/index.html","05ccf86e598ae7b23078e7c3117f3a8f"],["/2021/05/15/快速排序/index.html","265ed334fb06fcff22763a484eb9abf5"],["/2021/05/19/基数排序/index.html","7a8e0721912d14d0de663e0ec5b0ec13"],["/2021/05/20/哈希排序/index.html","c66fb3cf8d7e907b431f386bd69b869e"],["/2021/05/21/归并排序/index.html","9a06332fa53077e28dd8ba4893bbe3a5"],["/2021/05/22/二分查找/index.html","c15ce97d5cf1db60fa81566f6c76ebd9"],["/2021/05/26/差值查找/index.html","e1746e428b4a5f85a702c101cbfffbed"],["/2022/01/12/高精度大整数计算/index.html","d206027c7f5ad60d348cfb0b0551ece5"],["/2022/01/22/前缀和/index.html","9a85e2e8b2802475879248fbbcec55d3"],["/2022/01/23/差分/index.html","1dd9ffe09ccc88fc7bc74fb757baa247"],["/2022/04/04/MyBatisPlus/index.html","fca6a611dfb4fd7f5e75933b4e587676"],["/2022/08/17/jQuery/index.html","45763c0d44ab363897889f0bcc46265b"],["/2022/08/19/JavaScript/index.html","f4a2a78cd392bbcb89670e67f4a3fab2"],["/2022/08/22/Ajax/index.html","be8b591e02d0af379c4f6958bb037274"],["/2022/08/23/Promise/index.html","e049b5baf1b89b15b25cf72789f36982"],["/2022/08/24/Axios/index.html","e4b1e9fa52fd2cbcf10b84e21a2ee813"],["/2022/08/25/H5本地存储/index.html","3782bc420edebe567885c8ba6f1cbe01"],["/2022/08/26/mock/index.html","529e736ee0f1d2c04887c907425c95bd"],["/2022/08/31/VueJs/index.html","c145dd86f6896a426ac58cdb7e20397c"],["/2022/09/01/vue组件化/index.html","e5c7f6a2b61e9f684471b3263664e0df"],["/2022/09/04/VueCLI/index.html","4387ae73f5127b2c19a5e12402cba073"],["/2022/09/07/vue实现动画/index.html","f560254d9422c758d5de1bb5f54afb0e"],["/2022/09/09/Vue响应式方法/index.html","7ad38c1192c51f65a4822e33bbfb3cb5"],["/2022/09/10/Vue异步请求/index.html","6ac25f0b4de2170f6f164e26762b5232"],["/2022/09/11/vue-Router/index.html","d32e04979a3bf9c3ae4331a76bcbd435"],["/2022/09/13/Vuex/index.html","8955279e1981760a29bfb920910f710b"],["/2022/09/15/SpringBoot/index.html","51dfea0594731373c8c557940e380e70"],["/2022/09/16/SpringBoot配置FastJson/index.html","b7b4dc0b500b04aadf9848dabb0bd6eb"],["/2022/09/19/SpringBoot参数校验/index.html","e48a04b1f899bcb166ec4200dbb46b22"],["/2022/09/20/SpringBoot的异常处理/index.html","73788150551abbb5fea5003e3067f70f"],["/2022/09/21/SpringBoot统一响应处理/index.html","5b73b322100bc3e087acb7dec29790ff"],["/2022/09/28/Linux/index.html","578c00078fe221108ef0dbd94d1287e1"],["/2022/10/02/redis基础/index.html","db769c8af45c933e2456e94778f31e25"],["/2022/10/03/Redis缓存/index.html","63c670850748f54218bb754d856852f6"],["/2022/10/04/redis缓存穿透/index.html","e72059c0c4250fa666eab300095477e5"],["/2022/10/13/Redis缓存击穿/index.html","60495caa30c2f9865228892a3da25f3c"],["/2022/10/14/Redis缓存雪崩/index.html","7e8d3ebde161517b6360f35b0cbafc67"],["/2022/10/17/Redis集群/index.html","99f6ba057c20f8985fadab113668dce4"],["/2022/10/18/Redis哨兵模式/index.html","238e0b29e2193868721fa0afebec11d9"],["/2022/10/19/Redis主从复制/index.html","240684627d90e2526e98d2ed4f2ffbf6"],["/2022/11/03/Spring-Security/index.html","ff94c0329c635bafe7dcf7605d1e5ffa"],["/2022/11/08/SpringBoot日志/index.html","f03a339a621bed1fbef154f73f89cb76"],["/2022/11/11/Swagger2/index.html","3408959ef87bcc580523e178c1296110"],["/2022/11/21/Nginx-一/index.html","9710bd650c2dad2cd9b282d89cd02892"],["/2022/11/23/Nginx-二-代理服务/index.html","c9faf7cae4a9f42537d979abf1ff10ff"],["/2022/11/24/nginx-三-负载均衡/index.html","2f86a3486a6ffaddcbb1c4d114aeeb1f"],["/2022/11/26/nginx-四-缓存集成/index.html","62adfa08406058425fec2ad1f1730c0e"],["/2022/11/28/nginx-五-动静分离/index.html","73d52b1d4f0302463ecc2a35a480b51c"],["/2022/11/29/nginx-六-制作下载站点/index.html","f410fda413957b0b9525356a849d5556"],["/2022/12/06/docker基础/index.html","d64429031ba639f466e302b065b41af8"],["/2022/12/09/Docker高级/index.html","080968a8783f0f972087f4f3219b98d8"],["/2023/01/04/MongoDB/index.html","73820b54315a5df0473682e4150162ae"],["/2023/02/05/消息队列/index.html","6a44d4febe51594746754828eee49837"],["/2023/02/12/RabbitMQ集群/index.html","59e67adb1763d75d9733901ce999b801"],["/2023/03/10/CICD/index.html","ddcb05ba35ba073c1cf306568fba5918"],["/2023/03/11/ElasticSearch/index.html","9b8319089407e34dfb1aa7473e1af443"],["/2023/03/12/ELK日志平台搭建/index.html","7ab2eb662d274ac57ec523c8191b51fe"],["/2023/03/13/NIO/index.html","83b585b0d167f7dd8a7cc3b602731934"],["/2023/03/14/Netty/index.html","ac2061c507c92e79df7f7df65080b9e3"],["/2023/03/15/SpringCloud/index.html","8e7e0e62fe65ee856de0cc1359b930fc"],["/2023/03/17/分布式系统认证/index.html","9df523581caca3bfefea8a1709993d7c"],["/2023/03/19/JVM概述/index.html","be910dcb086ae49fe8a90bc989525bf9"],["/404.html","db96b86ee6731ad4ea1de470019e7d10"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","aa894378d9435b8578d8a1c95f12aeea"],["/archives/2021/02/index.html","3161b8565fd0fa25f0d24c047632e0d4"],["/archives/2021/03/index.html","6ff2fe91185f21f7fa20dbad9123d2e9"],["/archives/2021/03/page/2/index.html","955a463abde399c5c267aa9654733e4c"],["/archives/2021/03/page/3/index.html","783af696386031acedf7ca26765af760"],["/archives/2021/04/index.html","b418bce790ee44a7add8c4b5d5f9e00b"],["/archives/2021/04/page/2/index.html","711639fb0f38ef48009f28df67dc8913"],["/archives/2021/05/index.html","786ef4f276038ecc40445e0e0cf9982e"],["/archives/2021/index.html","b5cc770d20401c215a5d7d628bd44f5c"],["/archives/2021/page/2/index.html","b83c3182460f14b8443f2e5a04b0a91b"],["/archives/2021/page/3/index.html","1d2f01aa304b65b82b8dd521621ce7a3"],["/archives/2021/page/4/index.html","53a7962bc3ba9538782e148f021295f2"],["/archives/2021/page/5/index.html","ddf3d024d31a5e1cc6b1d7da961e20e2"],["/archives/2021/page/6/index.html","a3e5f80eab43079f24e139f10937fd5d"],["/archives/2021/page/7/index.html","9b241aeabb8a2e4df9bf8116d360a11b"],["/archives/2022/01/index.html","777111efa9c7025cc5aef6268a628954"],["/archives/2022/04/index.html","94cd8433e61a58d5fcb0241d8ecb0f5f"],["/archives/2022/08/index.html","09e8836a3ebd50de6de6aca2ea93c0ee"],["/archives/2022/09/index.html","b3ac8b6419265554cbb6616291d14d67"],["/archives/2022/09/page/2/index.html","ebd0829dee53a9eb58eeee0517c1e24d"],["/archives/2022/10/index.html","0aa450f41e63524baf919450489a4fb6"],["/archives/2022/11/index.html","30b8810a063f083709fb41dd159fc3c0"],["/archives/2022/12/index.html","d7eb69c036111a45b319e340f601f9e7"],["/archives/2022/index.html","cca615a47cfaa9104f2b582a20823f1d"],["/archives/2022/page/2/index.html","dde3bebf6277f1fe8f37248de32b34ff"],["/archives/2022/page/3/index.html","a8d579a16de35a18f5536a9f602b3821"],["/archives/2022/page/4/index.html","79ec935ebe22c3f19eb23fb76caf3e66"],["/archives/2022/page/5/index.html","4fe35f6c240d35c1f82d846b9ee53149"],["/archives/2023/01/index.html","8c418b3213b3f56ec49b65652859f1b7"],["/archives/2023/02/index.html","569f59bec1c9e1c9e52cec933cb66933"],["/archives/2023/03/index.html","aa1637a033f4a43550063d8f094de294"],["/archives/2023/index.html","7acc146a851cf44b40daa03606478944"],["/archives/2023/page/2/index.html","9f57a9513498413a9acb448faed3043b"],["/archives/index.html","7e9d6450aa09bfc8dc34f8385b75d0b4"],["/archives/page/10/index.html","6e4ad7059f0e4f2a0ee70ccb085931f2"],["/archives/page/11/index.html","89e9c023169d229586b575a4cb77346b"],["/archives/page/12/index.html","d36045fb2f267b3c216b21b55e91202a"],["/archives/page/2/index.html","fc2c0e9cd518ec9de62e2901a69d34d2"],["/archives/page/3/index.html","8c639a065f0e17e289e3707e963a9022"],["/archives/page/4/index.html","b14a7fa471a63904112c00cda680c5f3"],["/archives/page/5/index.html","8c42a02ee766b4aa7ef5aa22a19c39d3"],["/archives/page/6/index.html","d1c32061cbeb8f1159817a357f957823"],["/archives/page/7/index.html","2164059320089d180227a845053eb4dd"],["/archives/page/8/index.html","50fda3bc2d062da6af01a23dfbb02992"],["/archives/page/9/index.html","a92e37f01c2381af192c0c0b55aad7f4"],["/categories/CICD/index.html","73263bd0fa45b6872ee0aaa88c013dba"],["/categories/Docker/index.html","0b0a62fd500853ac62ab853b2318b7a9"],["/categories/ELK/index.html","21b7a492ff69d505bce28513f577a21a"],["/categories/ElasticSearch/index.html","a6ceb9896c74d79d0588638c3300d0ce"],["/categories/JVM/index.html","0f353e36df1e2a688560b86b30e3ed86"],["/categories/LeetCode/index.html","ecd8cd037bccd01030a8b1b2c3fc7816"],["/categories/LeetCode/page/2/index.html","fbb0f2635d82f281165dfdcc1e121935"],["/categories/LeetCode/page/3/index.html","e22f0d1d9884e4a8b0293855a2163c1c"],["/categories/Linux/index.html","43d8af8bba921966ffbaa965ee1e9966"],["/categories/NIO/index.html","3409edd8343d330160d2566ae061a853"],["/categories/Netty/index.html","3136fe97626af93278ff5ba496aef890"],["/categories/Nginx/index.html","c5cc75cd65390dc7560433b2f6d13a53"],["/categories/Redis/index.html","8dca5280a34b331503c4137986217511"],["/categories/SSM/index.html","cda96c81a76f5e6522ef6b37262d8736"],["/categories/Spring-Security/index.html","a2b8f107c07752956d8d8bc5931e53d7"],["/categories/SpringCloud/index.html","272fbbb7a9e7073fcee7afa090ea3faa"],["/categories/Spring框架/index.html","5a3a642608d02677eaf0b3d1c5b9c629"],["/categories/Spring框架/日志/index.html","f8f3f46d1e471f1f1416da05af19e2b1"],["/categories/Swagger/index.html","ff348b8e09f540278bfd4fba190f9bec"],["/categories/Vue/index.html","1dfa6b79c214c02b9b030a94831642cf"],["/categories/index.html","f262de3506def15bbd3cd9460ea0da83"],["/categories/分布式权限认证/index.html","f443109e7703a93f6f9ba92ad37cec87"],["/categories/前端/index.html","86d3ac34f2069899774249bf5193d2a5"],["/categories/博客/index.html","57e68a79885a0362a26f0cf8b1d25107"],["/categories/学习路线/index.html","f5225b3c6d1d81314a1f6548d094cfb8"],["/categories/工具/index.html","127b72bcf33e2b660bb8cf31fae2aad0"],["/categories/数据库/index.html","94a749edcfb291176f5b157e6013e02e"],["/categories/消息队列/index.html","399bc93e19f7978e03df5d253309c1df"],["/categories/笔记/index.html","4c833956aebaf946904c6d3f0020793a"],["/categories/算法/index.html","372302f0a244f14835f74564d2506951"],["/categories/算法/page/2/index.html","0ec910ccfff3183b920e43188cfe57b7"],["/categories/设计模式/index.html","9284466b5ffc3fc380eb7146cc9a078c"],["/categories/设计模式/page/2/index.html","7f6ed84d26275f322c815f5d04cffdc3"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","3d02144e0c8839102c40e17b0f7669f0"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","f9706063ab0c46d66269647f8c56d9fe"],["/messageboard/index.html","c23c81c4779b96f219b22644ff931369"],["/page/10/index.html","455e30875366db1eff5a21d070c72b56"],["/page/11/index.html","cf73d5831b3f802ba8090921061568f9"],["/page/12/index.html","89afee9f39facfc76be93b4a2c4b7158"],["/page/2/index.html","08fc0c194a39a8f39200b88d32c29662"],["/page/3/index.html","372f14da3e8c0bd17b7b104e442d407a"],["/page/4/index.html","33d6091aaaab4182bb7ee5bcb546f89c"],["/page/5/index.html","4610ac1459ed6ef465c04d97725a7a8b"],["/page/6/index.html","df5540bd11db5f1e78389f59410f4612"],["/page/7/index.html","a220c534a0a2797e8fb6fd453d2bc59d"],["/page/8/index.html","5e6ebf3235bf340fbb6e739c51e428bc"],["/page/9/index.html","67f13a5ee47a123e010f8c13e8ecc44c"],["/sw-register.js","b596b8347eb0051c6c72bdabd6ba6e7d"],["/tags/Ajax/index.html","de9efff50ff8f2250ac9f9002e5927ba"],["/tags/Axios/index.html","2af9203e377a94a5f188a1db25ef24dc"],["/tags/CICD/index.html","af762b3b058f497d83b3c5b67216fddf"],["/tags/Docker/index.html","e3768af4e5835f15559e93407f0dddf2"],["/tags/ELK/index.html","3b8a752ff0eca1fd807f37efa6b8609d"],["/tags/ElasticSearch/index.html","f52871f0bd5f1ed2187956719ea7ac52"],["/tags/H5/index.html","f94b960aeaa5e041ec4b632d9585007f"],["/tags/JVM/index.html","ffb017a2db6eebc3c950915fd18504b9"],["/tags/JavaScript/index.html","6c81259c7f7b8e5c3d36cc7af289bd9f"],["/tags/Kibana/index.html","88804deba658480640e2fd06cd1b72b2"],["/tags/LeetCode/index.html","1ea09a66af85084abeae5a68ce3a8ebb"],["/tags/LeetCode/page/2/index.html","f3e1bdc227d31e6c949c3b326b7fe2f6"],["/tags/LeetCode/page/3/index.html","c6f2b481e26aaab94c614636da4943ca"],["/tags/Linux/index.html","a1c44d1ec10a5c417daafa0dc4af877d"],["/tags/Logstash/index.html","d7e88435dcc781c3e6e553acbaf3cc17"],["/tags/Mock/index.html","61b6b416797a2ddaf125c1af44d70362"],["/tags/MongoDB/index.html","08d496bae26476e92124a17c13db8f16"],["/tags/Mybatis/index.html","4595e6defc6004bd557e774cbcb866d9"],["/tags/MybatisPlus/index.html","d631c145edd6c3554d6c9deace3c0a55"],["/tags/NIO/index.html","292585706c90fea98f7446a329905496"],["/tags/Netty/index.html","3c7f250c342e4785886c60a22e66b939"],["/tags/Nginx/index.html","e91c7cfa37e02796771c5eefecfa962c"],["/tags/Promise/index.html","d04bdd529e8a217b95d2b238321ab8eb"],["/tags/RabbitMQ/index.html","df2bda98035e17d4aed28233e15f1a63"],["/tags/Redis/index.html","87a63f33f66abb28e87440bb3a9ab517"],["/tags/SSM/index.html","5091c9dbb9dc4b5d4a490981a27d0761"],["/tags/Spring-Security/index.html","68ef5ef71974e4ebf91ce707dc6e781c"],["/tags/Spring/index.html","482fafab533244e194d5779f48e65b94"],["/tags/SpringBoot/index.html","e0d120a9a3b42d98f4052462f0da6dfa"],["/tags/SpringCloud/index.html","d2853f9c2cb299bffb0fdb978c787dc4"],["/tags/SpringMVC/index.html","b309196a40bd7148534906d166348f55"],["/tags/Swagger/index.html","36c4a6db17f8ce9b01bd1e5a87864c20"],["/tags/git/index.html","6ec0e3e262b45642ebedc361f00b31d8"],["/tags/hexo/index.html","2f98d3d2fc40b0d6e1e894896da11d2c"],["/tags/index.html","2e1f1640626c2ad88132811449844bdd"],["/tags/jQuery/index.html","e05ffcebe598326cdd9d8bcd254a81a5"],["/tags/java/index.html","b453eb0bd0f18df2ab4c7bb552ddcba4"],["/tags/markdown/index.html","d0d4123e5130c44a2c894d7ebaf20258"],["/tags/mysql-数据类型/index.html","dac8377443551c20b2f0c968db1d45e9"],["/tags/mysql/index.html","9be656d623a1ae12b17b9bb5e0086425"],["/tags/noSQL/index.html","ace5cbcf7183710dbadca3e93095894e"],["/tags/typora/index.html","776c823dab7accdda12606c0209501e5"],["/tags/vue/index.html","59cfe3d7455e9125c16248a61f748ef2"],["/tags/享元模式/index.html","b34ef258b18426caca05101ec4524bcd"],["/tags/代理模式/index.html","88a843c02b3b5b017a83cc2fba52f39d"],["/tags/分布式/index.html","dbb52856adeaca5a36016974e9879c01"],["/tags/分布式系统/index.html","c405cb60af09fead18c43e2b4218365d"],["/tags/前端/index.html","47428fbe6fb068727771461ae39b92de"],["/tags/前端/page/2/index.html","bcb0dff90cf2a7a396fb37ebf698509f"],["/tags/博客/index.html","df89dff11693276dd57be214703391a0"],["/tags/后端/index.html","116bfc68cf5725a66bb1f303728ae56c"],["/tags/外观模式/index.html","3236a8b0a7fc824a2e29f59288040dfd"],["/tags/容器技术/index.html","164cd7ec38b7683ec3a69158a317957f"],["/tags/工厂方法/index.html","fc483d270d5ecfca4193c07869c8a766"],["/tags/微服务/index.html","d1306ab94f4656e2f43d8b932bbc6304"],["/tags/抽象工厂/index.html","0c588bf8162b96b2ca642742f7fe936a"],["/tags/持续集成持续部署/index.html","6d2200abba4f7d6f9a99a51efe036a72"],["/tags/排序/index.html","355ed6b5152e9fc0b5a2b62c0f5f687b"],["/tags/搜索引擎/index.html","89144756a3a525c6726d768f7a0de2a1"],["/tags/数据库/index.html","a6c5b7692063f5a2bbec2bfe1e4eca27"],["/tags/日志/index.html","74e9def3ca6d8a76868006ddb1f0f3b1"],["/tags/服务器/index.html","40d383bbb832dc16db136c4f48f6249e"],["/tags/权限认证/index.html","48496b21943eccb77f2b7c0a6fc87ffe"],["/tags/查找/index.html","14aa2602c7d32b7e2e930f0c20541536"],["/tags/桥接模式/index.html","d2772ff15ddb34acda53a799ebd4b70c"],["/tags/模板方法模式/index.html","b1f5e2fc51a518218ca6eceaa762aea4"],["/tags/消息队列/index.html","6528b5d61dd15e814581bb35fe0acb02"],["/tags/版本控制/index.html","14acb36795c6ee5cd34857d69c1d68fe"],["/tags/策略模式/index.html","64112a480e98c7fa505b8430f085b6a0"],["/tags/简单工厂/index.html","aa7db9060c24b7f4048b385dfb5825cb"],["/tags/算法/index.html","176d279d2d5cf79e8e0f4fddd182de91"],["/tags/算法/page/2/index.html","f975fe6b1322fd334abbf666fc730e62"],["/tags/组件化/index.html","54dded1eeb746420e8e4a084840b216f"],["/tags/缓存/index.html","8b38110b01263af9c140dc97a7051d9f"],["/tags/观察者模式/index.html","6578c3d1aa17d0bc55986d02d14c1865"],["/tags/设计模式/index.html","81cc29c74dc9dba25e330a5cd40cadd0"],["/tags/设计模式/page/2/index.html","6efb2376120f1ad4cc980bbb9c848697"],["/tags/责任链模式/index.html","880a24487809cbf2c42c0a1482034603"],["/tags/适配器模式/index.html","547be87e51ae61f03d587f23956a75c2"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
