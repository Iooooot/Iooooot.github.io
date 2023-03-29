/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","07578efc388d8097b84fe9b06931b105"],["/2021/02/22/博客的搭建/index.html","897728ab78d89f798728b0c753b3d8a6"],["/2021/02/23/如何使用markdown/index.html","a64c393c635ca26760517fadbf2f23dc"],["/2021/02/24/mysql命令大全/index.html","bbb419b4d6f72c384b2578ae55f670c2"],["/2021/02/24/mysql数据类型/index.html","d6d5ce6a1d87a57e7e04b80b889587a8"],["/2021/02/25/Git的介绍与简单使用/index.html","f2e7392f9e07bce9fe170846524c9e07"],["/2021/02/27/简单工厂模式/index.html","ca1bca871d2b205905f856fbce786e83"],["/2021/03/01/工厂方法模式/index.html","099d2d664a15d604417737ca2acf3ddc"],["/2021/03/02/抽象工厂模式/index.html","707699737561121ae869582fde216729"],["/2021/03/03/单例模式/index.html","d6e85d4260cd006b1fb8d1ede1624242"],["/2021/03/04/观察者模式/index.html","06addbf6304c0ffdc5a17884d69bfafa"],["/2021/03/05/适配器模式/index.html","2437f29ec7876dc97a68545e6355d0fa"],["/2021/03/06/模板方法模式/index.html","139ed4a4abf0251f807db0feea0fdb69"],["/2021/03/07/责任链模式/index.html","17d798b1c448621a4e9e5b693d7a9378"],["/2021/03/09/代理模式/index.html","a8df3dd23135e9dca7a0464a70c45d54"],["/2021/03/11/享元模式/index.html","42407c05e798003fad42f0d49666f5fb"],["/2021/03/12/外观模式/index.html","84e3f34872ce9f424f41b8f1e0e65162"],["/2021/03/13/策略模式/index.html","295fdb7a3f05a53d85c6ff248a1832a4"],["/2021/03/14/桥接/index.html","057c813c21ed6763d39aa3f4d85dd88e"],["/2021/03/15/LeetCode-多数元素/index.html","7646f8b884451adb79e24d49fc058cc0"],["/2021/03/16/LeetCode之汉明距离/index.html","3d2b73e07e7cca57e2661fe778639c66"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","7baf2a1db327877a929184bf2e07f5c5"],["/2021/03/18/LeetCode之两数之和/index.html","340ae1f81a93b5804af33105c969879f"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","77c72b1aa651061b556873350014424f"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","a0a84dc8cd01391702b8717c33ce8aee"],["/2021/03/21/LeetCode之有效的括号/index.html","480d753406aaff37045c507c5db1041b"],["/2021/03/22/LeetCode之移动零/index.html","1cd19bdd8234ce5d78bee56008833a22"],["/2021/03/23/LeetCode之爬楼梯/index.html","9b8e21a4dcb2391d5b7f8ab205ad8f94"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","8359fd430f8c861dfe005659d379ad17"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","e14916e50347cb2bceca4a5a406f215f"],["/2021/03/26/LeetCode之最大子序和/index.html","39b90ff6b313fcf3597c188b4aaea449"],["/2021/03/27/LeetCode之子集/index.html","5843e3de7ee3513b31d54e0b118bcf30"],["/2021/03/28/LeetCode之合并二叉树/index.html","587890fa4f3e81f586c4a714bb96d8c0"],["/2021/03/29/LeetCode之翻转二叉树/index.html","c9afa8838392a2ce8b37a256fc29086b"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","eff2302fe07fe83cfeaea7739e242562"],["/2021/03/31/LeetCode之翻转链表/index.html","0597f73a9de844c48726dbd715c3cacb"],["/2021/04/01/LeetCode之相交链表/index.html","def007001ae05085514c9cdcff9a124c"],["/2021/04/02/LeetCode之最小栈/index.html","b429f5667e47897cf9cb617cdfa403ae"],["/2021/04/03/LeetCode之对称二叉树/index.html","030648f947ef04e5912fbf5d223fc501"],["/2021/04/04/LeetCode之环形链表/index.html","dd4eeedda0e155939f80ff10c3ed0bbd"],["/2021/04/05/LeetCode之二叉树的直径/index.html","d237579e4dafddb1e075dde78fca25d1"],["/2021/04/06/LeetCode之回文链表/index.html","d3a4e7c207c170e2dec3c6c61691c857"],["/2021/04/07/LeetCode之比特位计数/index.html","8390a8face1468919a3c104ba72af3b6"],["/2021/04/08/LeetCode之全排列/index.html","60d8d2744fba30e562ebf706f500d001"],["/2021/04/09/LeetCode之括号的生成/index.html","0547402925dda6ed6940cddf3b04d3b7"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","d5c726d8cc728e38fcbe483c33ebad1c"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","10aaae384dd913ed7a5df67f3c7c31f3"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","199e31e916585bcbeda393d36b8dfd0d"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","dfd91321a5fc0586c2b531ddd9e09cf6"],["/2021/04/14/Mybatis/index.html","2e959b8759d9647cba526900df9e88ba"],["/2021/04/15/Spring-1/index.html","8e0ff2df1aff77c173a925fce684d462"],["/2021/04/25/Spring-2/index.html","e95a877875f0fe4cc9e36ff7c550bced"],["/2021/04/27/SpringMVC-1/index.html","bb6cba3b7668757e9ff42115a8f1e249"],["/2021/04/29/SpringMVC-2/index.html","901d5710502e8587a91846176f1affd3"],["/2021/05/03/冒泡排序/index.html","a6b02468e0e3f2806e72911dd4914881"],["/2021/05/08/选择排序/index.html","aa81fc7181616865a75a2e48d5b324d5"],["/2021/05/12/插入排序/index.html","f19f1802c9029bb6bbddbe73f0e52cf9"],["/2021/05/15/快速排序/index.html","88caa9d74064708e4015b8b0b5eb3b0b"],["/2021/05/19/基数排序/index.html","fb78c3c96ad838e56a45ab04cab496df"],["/2021/05/20/哈希排序/index.html","58472adf150e1af98dbaf186a101ec70"],["/2021/05/21/归并排序/index.html","b648001f3940350b080fb44d7fc73165"],["/2021/05/22/二分查找/index.html","82056464ac79139f3c7661b719f7c67b"],["/2021/05/26/差值查找/index.html","b5caf1cb92245a8916dd6a98a1e70691"],["/2022/01/12/高精度大整数计算/index.html","4555753c8161d6f6716b75b3b93be612"],["/2022/01/22/前缀和/index.html","88f251b309c5a8a3339d1952aed4a111"],["/2022/01/23/差分/index.html","dd596a9884df14cc968f17565f2f36dc"],["/2022/04/04/MyBatisPlus/index.html","e20c9b274c33a6fc59aa9554b0d2fbe5"],["/2022/08/17/jQuery/index.html","f19d4827a7084f48700b45cc15ba2ea1"],["/2022/08/19/JavaScript/index.html","3fc4fe9196fe1a0672fb3fceafef8739"],["/2022/08/22/Ajax/index.html","1ea45f1369a6753b9054d3b8f31ec58c"],["/2022/08/23/Promise/index.html","321f67bf83a973be3f492bf24977e602"],["/2022/08/24/Axios/index.html","0dedde89fd59163a7e7a8e877d8500ae"],["/2022/08/25/H5本地存储/index.html","a6a26913ed0b151272ccfa976c5eb762"],["/2022/08/26/mock/index.html","dbef73d0a7d99c0a9fb233eabe0f5705"],["/2022/08/31/VueJs/index.html","d7f9e317cf5eaef376c37c02e4803951"],["/2022/09/01/vue组件化/index.html","66b839e451667f16ba6999ad563de761"],["/2022/09/04/VueCLI/index.html","8b931a855e16d12cd5db24ae885e0848"],["/2022/09/07/vue实现动画/index.html","02011d3885bb7d6f1ad6868d81fba34a"],["/2022/09/09/Vue响应式方法/index.html","781c0b434d4dd527d5253ae99e60e3b1"],["/2022/09/10/Vue异步请求/index.html","501ac60026292d7c1285808091bd9b62"],["/2022/09/11/vue-Router/index.html","a987941f0647570051395920ffea2d52"],["/2022/09/13/Vuex/index.html","6727a83dfc9c2139103bc97993b300ac"],["/2022/09/15/SpringBoot/index.html","22d396e87852023229087309cc0a024b"],["/2022/09/16/SpringBoot配置FastJson/index.html","3f33a1261e4324353ecc030f9eb55142"],["/2022/09/19/SpringBoot参数校验/index.html","e990679c2461f915abc785a96004d957"],["/2022/09/20/SpringBoot的异常处理/index.html","f590e402b16c4c9295b2b5c44cd8f374"],["/2022/09/21/SpringBoot统一响应处理/index.html","3a14571ccf4faa0785080148b90f99f3"],["/2022/09/28/Linux/index.html","73725ab564c6ba306086e19f201ee304"],["/2022/10/02/redis基础/index.html","d7f4fcc8e81419257af5442d332472a2"],["/2022/10/03/Redis缓存/index.html","f5a548513056efadc7ba66274644171d"],["/2022/10/04/redis缓存穿透/index.html","98588517c5d3f55457579b41893dba21"],["/2022/10/13/Redis缓存击穿/index.html","776b3b8927fc2c33775a374b163a177f"],["/2022/10/14/Redis缓存雪崩/index.html","ddbee0b873369368d6855a8490b00775"],["/2022/10/17/Redis集群/index.html","8e05c9b30cd86c48d3fdd03a5186606d"],["/2022/10/18/Redis哨兵模式/index.html","b4a35b8804d24cd357e6a6feff673f8f"],["/2022/10/19/Redis主从复制/index.html","a20537fefcd9d4a518adf946f9c52875"],["/2022/11/03/Spring-Security/index.html","e6a687ed52da4684690f8a7d548a11b7"],["/2022/11/08/SpringBoot日志/index.html","e1963595756eb89545917f0c06c1ce39"],["/2022/11/11/Swagger2/index.html","6869053c91e7142c8089c1c8baa0eb58"],["/2022/11/21/Nginx-一/index.html","ac77856649a9589ae8bfd32f2310c385"],["/2022/11/23/Nginx-二-代理服务/index.html","d5d64857452a3199cfaf5379669493be"],["/2022/11/24/nginx-三-负载均衡/index.html","5f10a591feda948c30399cee01de5408"],["/2022/11/26/nginx-四-缓存集成/index.html","94d4c8940e4034b2eace91271e78740a"],["/2022/11/28/nginx-五-动静分离/index.html","bb46499c55377afc45bc4a254ee6408e"],["/2022/11/29/nginx-六-制作下载站点/index.html","baba0a6f81b5e93825a3e6244f110aa3"],["/2022/12/06/docker基础/index.html","50abb8846667e59a5b7dc2f094062d2c"],["/2022/12/09/Docker高级/index.html","a3701797d111871f930e6754029cb29d"],["/2023/01/04/MongoDB/index.html","c47a93cb96afc2c0180f145a64e3b062"],["/2023/02/05/消息队列/index.html","0b5a2d6417ea17f6af1bf70b2295d829"],["/2023/02/12/RabbitMQ集群/index.html","8f90447bd98e5ca225ca3442cf04d291"],["/2023/03/10/CICD/index.html","9407795d90bad0765b55b62591eb32fe"],["/2023/03/11/ElasticSearch/index.html","a166c535f89d876c6125dd181719485f"],["/2023/03/12/ELK日志平台搭建/index.html","6c879cb2c8049d3bcf5902fb94823534"],["/2023/03/13/NIO/index.html","409ac5455cac75924bbab660defc105a"],["/2023/03/14/Netty/index.html","1db480845da44becd7b65b41c667cb09"],["/2023/03/15/SpringCloud/index.html","431f4d5e21b59f530f5853f6de69e5b7"],["/2023/03/17/分布式系统认证/index.html","ebfaa77e4957cc7669ca5b2f3422883a"],["/2023/03/19/JVM概述/index.html","1d4e7144bc87bdb8e5b58bcfff64ec70"],["/2023/03/23/类的加载过程/index.html","e88b1850da122ef040b092a6d90b5ab7"],["/2023/03/28/对象的实例化/index.html","c188ce194402ee363a87e399a68b9129"],["/404.html","465931cd696a890d88f73d94199199c6"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","ebcde8576fc1e0236d839f3d18a50cd8"],["/archives/2021/02/index.html","98fd79c52dbed6b56c107a98e249a189"],["/archives/2021/03/index.html","3d6822a77cc3db37a2a2707feecbfc0f"],["/archives/2021/03/page/2/index.html","60e6973b341e9ec116f62f5173cc2c9e"],["/archives/2021/03/page/3/index.html","9d1fd39acbbcee783e8b9aeceefe8765"],["/archives/2021/04/index.html","05c1ac4f356eb4609626945db494156e"],["/archives/2021/04/page/2/index.html","ed51c864460916b119b9c01ae98a8f92"],["/archives/2021/05/index.html","a08f985a984a9c7aa891234ad8b0ca3c"],["/archives/2021/index.html","24aa8628b568cd130df4c925bade9e56"],["/archives/2021/page/2/index.html","0c00b68c8e814bdbbd3b1fb22b7d59f1"],["/archives/2021/page/3/index.html","35b59f4a3788c59bdc3718e8e057ba46"],["/archives/2021/page/4/index.html","4f4c12ea4fb7666c97221eb38fdedcfa"],["/archives/2021/page/5/index.html","e5b2fbe700a97f1062bbe0bff1f3f5a8"],["/archives/2021/page/6/index.html","8fcb8738b5c6522a370ff91ca00578c7"],["/archives/2021/page/7/index.html","25efecc7b5944f7d3af703e0f6303528"],["/archives/2022/01/index.html","d68de841374218abdc7dda496101d945"],["/archives/2022/04/index.html","7dfafd8d888a940b357afea23a43c6c1"],["/archives/2022/08/index.html","356a21d01fefc1a54aff72031939b05a"],["/archives/2022/09/index.html","f8164a2e2b95cb89fcc1f5a00945ad8b"],["/archives/2022/09/page/2/index.html","90efe1b195bf07addc3128db258b707e"],["/archives/2022/10/index.html","491983d9848b617d06eb1ca5db74bea2"],["/archives/2022/11/index.html","5d4f01c44776e4e15c05bd66bf6fd103"],["/archives/2022/12/index.html","dc8f9a4825a127064ef1f9d91db1ff46"],["/archives/2022/index.html","0302bafb8c9c919efd67af0ace84d35b"],["/archives/2022/page/2/index.html","8d9a2ce76947674f50cbd2fdebd39426"],["/archives/2022/page/3/index.html","c493868b91876305809ce17bf5885f5c"],["/archives/2022/page/4/index.html","24686fa555162375e16f63daf9303b43"],["/archives/2022/page/5/index.html","28d294f5fdd45590082a0ad95ab89b42"],["/archives/2023/01/index.html","f5802117e663e41f28827b374ad284a5"],["/archives/2023/02/index.html","97ad8a9cc85807c4d7088f3d108f59bb"],["/archives/2023/03/index.html","bd75a60a8a4d140b8723e0b31a347955"],["/archives/2023/index.html","f177fbf3b52556db31c25a394b9a06dd"],["/archives/2023/page/2/index.html","44af58114720e94523f854cbb049242f"],["/archives/index.html","e8acd8b0d2a1a02adff67e4bb37cf0b9"],["/archives/page/10/index.html","0c307e38f0c62eaa2926360ae76501a2"],["/archives/page/11/index.html","3b18a1d1986786274fdc4c7b4e326f5e"],["/archives/page/12/index.html","694629ced87b3e147a656db487fe52fe"],["/archives/page/2/index.html","bf0b122401ae2816dd8eee7dd469dfcd"],["/archives/page/3/index.html","2901f661311d855fd0497b8498dc5093"],["/archives/page/4/index.html","e43cc15ef9b2acac08f89f32ff7ea74c"],["/archives/page/5/index.html","c5d06fefc3fec99a143eed7a6af78714"],["/archives/page/6/index.html","a1b461619504d532cbc7ec7463e098f9"],["/archives/page/7/index.html","82a24800bb80d68852db5a85ea46e8bf"],["/archives/page/8/index.html","1a9b1dd1d4b3a28d5bd9ddcc11a4bd3d"],["/archives/page/9/index.html","0487dc59a8a4fd3659607c3f2b5643fd"],["/categories/CICD/index.html","7830e48409a1a09e09ee728c6f23703a"],["/categories/Docker/index.html","c1c58d882a231941ffff11c08821355b"],["/categories/ELK/index.html","1bf9ecd900968d0be6a3b3bfeac8ed29"],["/categories/ElasticSearch/index.html","b684fa04f5327bc51bfa27d4f8dfa64a"],["/categories/JVM/index.html","3ec85a6b49b8e5649a0b6d641c68c01b"],["/categories/LeetCode/index.html","83af26081aa094bdb31284b5a2acf8c7"],["/categories/LeetCode/page/2/index.html","282b05b37fd89661ef45353c2c638d21"],["/categories/LeetCode/page/3/index.html","dc4681ce2f3049bd1194a7d47f1c9981"],["/categories/Linux/index.html","e15351ebacc1d441bc525ca9a790ad48"],["/categories/NIO/index.html","1750a401f53fbda3894a22ee9b14a873"],["/categories/Netty/index.html","6d7570b9ad1f90874dc7183e6ae2bbc2"],["/categories/Nginx/index.html","dce833020f03d48a0f3e8c9806c5f340"],["/categories/Redis/index.html","4a188b6e9bba93823df426b939e06337"],["/categories/SSM/index.html","366785addbd8a0e7afa7cc024bd02067"],["/categories/Spring-Security/index.html","fccbda522de5e65aeb0d4710e3aa918a"],["/categories/SpringCloud/index.html","639e43685db36586c60aa767970dbb36"],["/categories/Spring框架/index.html","e5d24134a8ffde90c2dcfb3203e9845f"],["/categories/Spring框架/日志/index.html","7e259fdfaafe804f266b3bce2103090e"],["/categories/Swagger/index.html","7462695bab82741b89eaed4dec84b81a"],["/categories/Vue/index.html","e2a47f89741db5aa27ae18cb611e3177"],["/categories/index.html","b5f02ab5d8f6860c2350f4666e5bdae3"],["/categories/分布式权限认证/index.html","c01df7bb1fd4b07e7120d43d91925076"],["/categories/前端/index.html","664d2893120174c14ffd07aaa2e697d3"],["/categories/博客/index.html","47326debf19d9ed1b9372fbddef680f0"],["/categories/学习路线/index.html","8a5b090fce1f2a7352df82fa30a646cd"],["/categories/工具/index.html","d47f7c8dbe8487316194d956e093c405"],["/categories/数据库/index.html","562be6639c63efab909c745861ba5d52"],["/categories/消息队列/index.html","767fe6c94b4c0003a381f256d69631d9"],["/categories/笔记/index.html","dd73c5e1f324957973ecbeafd86e69ff"],["/categories/算法/index.html","86b30d831b77886b037aa8257e8f692a"],["/categories/算法/page/2/index.html","063e8d9a01d03f8154a976acb8a06d02"],["/categories/设计模式/index.html","99c20e922c65e0a731ec339c778532c1"],["/categories/设计模式/page/2/index.html","dcca61ecdf219a85036ce36983c4ce57"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","fe240889e6268bd2b1ab26384534b10a"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","e17da13993d10979c5da8211df66e86c"],["/messageboard/index.html","4f43e5faa39ce96c3bcd2032d15f3772"],["/page/10/index.html","7aa9a182be4250f429ad675338bda7da"],["/page/11/index.html","1978917b91824003ccba251c0467d12c"],["/page/12/index.html","edca424726b23e55f2bc77de9c227135"],["/page/2/index.html","2ccbbf4363212e1ba8fb0bf2e8f8aca0"],["/page/3/index.html","2d1c8708690db4f615ee42f3f486ea01"],["/page/4/index.html","b21cad242235ed55281671726c0c6208"],["/page/5/index.html","cf79a330a261a2d46fb1c221f863abc3"],["/page/6/index.html","f908530af61ab69b38be155bf61b822a"],["/page/7/index.html","de75e5733cb0193395571ecce7ff3f49"],["/page/8/index.html","10b991b74112e86dfaee53f09fec2d7f"],["/page/9/index.html","2102b704b54afb715148f6d2942d4bc9"],["/sw-register.js","acd4d64e58c1a33482b9c5d8e7fd24c9"],["/tags/Ajax/index.html","ee3d247a2525fc1a039c946056f68c66"],["/tags/Axios/index.html","5d7a1a48628b3c3a4013e91931041229"],["/tags/CICD/index.html","c75847e982dcc182a3442fb206bb518f"],["/tags/Docker/index.html","93724ea9adbcdbce96ee78a8068b1bbc"],["/tags/ELK/index.html","d73215044b7ebda2a8a773324736d4e0"],["/tags/ElasticSearch/index.html","e7a70a62ac5b6ad4b43fac7fb70c3f90"],["/tags/H5/index.html","07d30c4c367f11ef1880344780b95d94"],["/tags/JVM/index.html","0b438a842892e10bc94476f8f953cd5c"],["/tags/JavaScript/index.html","bd8e8c373b45e951a4a34b5437e0bc0c"],["/tags/Kibana/index.html","90a24971887becfaded19ce62e0f79f0"],["/tags/LeetCode/index.html","27fed14de3cbff01dbf9fc325eba7e8a"],["/tags/LeetCode/page/2/index.html","d014c12e03210012a70f2404dfa2aca5"],["/tags/LeetCode/page/3/index.html","3410392a06de29422dfb16ed291fcead"],["/tags/Linux/index.html","962b3e22504e8f1553fc403a88e6a91d"],["/tags/Logstash/index.html","eeb31bb906ead771a82e442a90dbde9c"],["/tags/Mock/index.html","c7755d9550b953108c32867c62f38349"],["/tags/MongoDB/index.html","c6ec252b5dd9fcdf8a64202c89b301b2"],["/tags/Mybatis/index.html","573db0c73b5378cb1456c6421d3e65ce"],["/tags/MybatisPlus/index.html","8409ec3b0e8c3d8ae3879eb7d1504394"],["/tags/NIO/index.html","c92156a38d4dde19ef702a711814331f"],["/tags/Netty/index.html","f36b8486568757624b50f6f5f04a4fa6"],["/tags/Nginx/index.html","abb24e1e55426550cc25befbbe29ec0c"],["/tags/Promise/index.html","6df246c30b9f9eacaecfcb3292ca9933"],["/tags/RabbitMQ/index.html","2d45d41c6030861156d0a104907c9bd4"],["/tags/Redis/index.html","55562d9b14a962e10e60ce6037b40581"],["/tags/SSM/index.html","813d3514a2515a93d8c84b56d65171b1"],["/tags/Spring-Security/index.html","3dd15db666062c645c96429cc091baf2"],["/tags/Spring/index.html","ef2284c70daae337b7ebd1ac0b05491b"],["/tags/SpringBoot/index.html","165f05ac0586175b857b8aa6292ba8c0"],["/tags/SpringCloud/index.html","d2360d610aec4e9a3cf434f0d0ae34fe"],["/tags/SpringMVC/index.html","ef91d178c1319f6d6c57f1872e60a70c"],["/tags/Swagger/index.html","b3a2cc1c22ff4e9e1700f952879b95ec"],["/tags/git/index.html","1522c447882d4ff79fc606ba69a5d646"],["/tags/hexo/index.html","7c64082eca91038a793f4e33b685f429"],["/tags/index.html","9a91fd963f35c3c5209d66779885a758"],["/tags/jQuery/index.html","4245823326a9921638f4dfeb86339838"],["/tags/java/index.html","6944acc4f59cd2f3205a2144c8d37432"],["/tags/markdown/index.html","628a13cbea3eb6e76cbbfaf9433297cf"],["/tags/mysql-数据类型/index.html","f189009a846f0f81284f61c5166c7b43"],["/tags/mysql/index.html","399b16bc76e5cece895a5fbab108cd08"],["/tags/noSQL/index.html","97839b19f8f009ab5324ae2a9f81af61"],["/tags/typora/index.html","b6cf6d4afad121d469c708f6c502da48"],["/tags/vue/index.html","99861d42275c3c47c669eccb6b07d421"],["/tags/享元模式/index.html","105578672f0d24aa1c9953dfdbb66d3b"],["/tags/代理模式/index.html","c39badba6275486b31beb2e6de55b7f2"],["/tags/分布式/index.html","e41eb8dd9710697fb1d8cde58faf0050"],["/tags/分布式系统/index.html","adcb6d495547591f93e2f4c5483bf08c"],["/tags/前端/index.html","e479636c4087d4b493cadfc3c4ddb529"],["/tags/前端/page/2/index.html","9a1f7405deea3eec8ceeb1fd06dce725"],["/tags/博客/index.html","8c0ca7aa919b76d46443fb76d67d22e1"],["/tags/后端/index.html","98daaee08f24f20c172c5268479d25bb"],["/tags/外观模式/index.html","ecc64765085c1694dfa6b46c1089ff08"],["/tags/容器技术/index.html","b4b9436fbbb4f529cff601ac1498e9c2"],["/tags/工厂方法/index.html","5a158f7f4723e25ef2d9632d999be30f"],["/tags/微服务/index.html","afb90374a6106e6114e6a3240aa3c818"],["/tags/抽象工厂/index.html","cd24339eff06791655526ef024755b51"],["/tags/持续集成持续部署/index.html","a69922bbc2904a87eb3f37ff03e7afad"],["/tags/排序/index.html","d4c1ec16c7c3ac2e912bdc32517cc39d"],["/tags/搜索引擎/index.html","16f7b307750f5d6e6562bc8784cf466b"],["/tags/数据库/index.html","f8524cfe4bce86932a87451b64e899bd"],["/tags/日志/index.html","93de6d5c441bfd0d0c0122a6fb2c5c39"],["/tags/服务器/index.html","aa5a9a544ce51c1a8b8fdb166aa5a4ee"],["/tags/权限认证/index.html","f51066387443070ec31647e6b8bccb6a"],["/tags/查找/index.html","45677d6561895d823f686cabae1c9882"],["/tags/桥接模式/index.html","f27ccb39e3dbb95f96532b932d09546b"],["/tags/模板方法模式/index.html","19e3c57b3072a73f68ff9feed8fdc5ae"],["/tags/消息队列/index.html","f3222da7be2436fae21e3ff180301dc7"],["/tags/版本控制/index.html","cd06dd19aab8ccae596fb45bada32ddb"],["/tags/策略模式/index.html","102a57be40be68cd219b72bfbc664c02"],["/tags/简单工厂/index.html","64f05d8e1e99d579401fa10575703c81"],["/tags/算法/index.html","5c5b5463caaabadd4b39ae0a469040cb"],["/tags/算法/page/2/index.html","b9b3226aa4f12563e073689f93f439cb"],["/tags/组件化/index.html","07216ee141f92c531709205d8d7632f3"],["/tags/缓存/index.html","8131240291b63e7229e40d21b768d4e6"],["/tags/观察者模式/index.html","24127ce60f964f18bf365ee0a387ce83"],["/tags/设计模式/index.html","04cb9216893cde066aa72aaf41e10239"],["/tags/设计模式/page/2/index.html","e2036c00a975b1efb47947d20e5f0423"],["/tags/责任链模式/index.html","99136c7069794f105e179817ea279ce2"],["/tags/适配器模式/index.html","4ae03ff64618979be14e5dff6a2fff36"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
