/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","07578efc388d8097b84fe9b06931b105"],["/2021/02/22/博客的搭建/index.html","897728ab78d89f798728b0c753b3d8a6"],["/2021/02/23/如何使用markdown/index.html","a64c393c635ca26760517fadbf2f23dc"],["/2021/02/24/mysql命令大全/index.html","bbb419b4d6f72c384b2578ae55f670c2"],["/2021/02/24/mysql数据类型/index.html","9387a6e9b5e7255c4cda8cf518f06a17"],["/2021/02/25/Git的介绍与简单使用/index.html","68b3e0eccb4f737cd1412af0868e51e6"],["/2021/02/27/简单工厂模式/index.html","eaec567b41036754230fbdd166ed447e"],["/2021/03/01/工厂方法模式/index.html","099d2d664a15d604417737ca2acf3ddc"],["/2021/03/02/抽象工厂模式/index.html","707699737561121ae869582fde216729"],["/2021/03/03/单例模式/index.html","d6e85d4260cd006b1fb8d1ede1624242"],["/2021/03/04/观察者模式/index.html","06addbf6304c0ffdc5a17884d69bfafa"],["/2021/03/05/适配器模式/index.html","2437f29ec7876dc97a68545e6355d0fa"],["/2021/03/06/模板方法模式/index.html","139ed4a4abf0251f807db0feea0fdb69"],["/2021/03/07/责任链模式/index.html","17d798b1c448621a4e9e5b693d7a9378"],["/2021/03/09/代理模式/index.html","a8df3dd23135e9dca7a0464a70c45d54"],["/2021/03/11/享元模式/index.html","42407c05e798003fad42f0d49666f5fb"],["/2021/03/12/外观模式/index.html","84e3f34872ce9f424f41b8f1e0e65162"],["/2021/03/13/策略模式/index.html","295fdb7a3f05a53d85c6ff248a1832a4"],["/2021/03/14/桥接/index.html","057c813c21ed6763d39aa3f4d85dd88e"],["/2021/03/15/LeetCode-多数元素/index.html","e6502e00d6af87aec21c0fd798d85f96"],["/2021/03/16/LeetCode之汉明距离/index.html","93e41106101977a1ead4cc0e139bb904"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","4667257a36b52d2c13dd4a2ce653f531"],["/2021/03/18/LeetCode之两数之和/index.html","3603434bc838cd82045ecb395e505bd0"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","962bfc89e2eca3ecb263a8c7a3d838a8"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","3cbe1c0459a9e5beff94258a620d8df9"],["/2021/03/21/LeetCode之有效的括号/index.html","1d2a59469c5ccd868c9b6af09b1428e5"],["/2021/03/22/LeetCode之移动零/index.html","fb4ef1c7a2a7f383a81c62e939f5f4f8"],["/2021/03/23/LeetCode之爬楼梯/index.html","798a1a8d3e3b01360475c92cb5fcace0"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","74fbd3d4d06a5842951c817305715ba8"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","d0bce78687edba49582b66045df95218"],["/2021/03/26/LeetCode之最大子序和/index.html","c3b23579a17222ff3762e2f9fa41e8ab"],["/2021/03/27/LeetCode之子集/index.html","52204ecf6bff266f1676376df811aa1b"],["/2021/03/28/LeetCode之合并二叉树/index.html","76ae559c76ad4e074b60c1084567592c"],["/2021/03/29/LeetCode之翻转二叉树/index.html","8f454f7e9054b9c7d4ac95b529914803"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","ae41efac4c60fff3aa6d4872436e2154"],["/2021/03/31/LeetCode之翻转链表/index.html","3dd481898fbf8dcd1e3c62ec5e5fea5f"],["/2021/04/01/LeetCode之相交链表/index.html","709977d841a70c18b4d9ed723a0dcc75"],["/2021/04/02/LeetCode之最小栈/index.html","5732147f3f706b5565cc8ec5b0da6306"],["/2021/04/03/LeetCode之对称二叉树/index.html","542ea12865b7a8fc273ee849c12a3f78"],["/2021/04/04/LeetCode之环形链表/index.html","b5433c30d1a2227cf0b78f6abab12963"],["/2021/04/05/LeetCode之二叉树的直径/index.html","d237579e4dafddb1e075dde78fca25d1"],["/2021/04/06/LeetCode之回文链表/index.html","207ddc9e068cc37ce94fbb3ee9118a9e"],["/2021/04/07/LeetCode之比特位计数/index.html","f38751a3ca181b94ca756858d6bd05f9"],["/2021/04/08/LeetCode之全排列/index.html","60d8d2744fba30e562ebf706f500d001"],["/2021/04/09/LeetCode之括号的生成/index.html","29e7ad3fd513dfe8633fd7792c2037dd"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","0d9c9722389f6f780a23ca2c0144fc7f"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","4d0f99e2c4bd50b7d9edd1ba66dfb2d7"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","56c53b0ae40f4cc9f9de05275fb92cd4"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","ff32e2ea09c8dfc1e726aa0fd6878818"],["/2021/04/14/Mybatis/index.html","2e959b8759d9647cba526900df9e88ba"],["/2021/04/15/Spring-1/index.html","eca9f5ffeb3c49829d0e312f32495915"],["/2021/04/25/Spring-2/index.html","950f21b66e9b6b2a2066849a020b248e"],["/2021/04/27/SpringMVC-1/index.html","bb6cba3b7668757e9ff42115a8f1e249"],["/2021/04/29/SpringMVC-2/index.html","901d5710502e8587a91846176f1affd3"],["/2021/05/03/冒泡排序/index.html","36a0bc8d011d01bc7af8cdfb4d4d79bc"],["/2021/05/08/选择排序/index.html","84e8a1ebb7ca3a13b356d2a7c9f7303f"],["/2021/05/12/插入排序/index.html","d872b12da2e8897117d96cc0a77ef822"],["/2021/05/15/快速排序/index.html","bbb285b5efbec7a8929a32f825e89aa1"],["/2021/05/19/基数排序/index.html","fb78c3c96ad838e56a45ab04cab496df"],["/2021/05/20/哈希排序/index.html","58472adf150e1af98dbaf186a101ec70"],["/2021/05/21/归并排序/index.html","413972aecb5f7201e6e1615a9df8dbce"],["/2021/05/22/二分查找/index.html","1dd94f9a46e2f96584b51d1e43900949"],["/2021/05/26/差值查找/index.html","e145f9b45200f2b8c69153ee28069750"],["/2022/01/12/高精度大整数计算/index.html","d243cf49e1bc182b756303677731d263"],["/2022/01/22/前缀和/index.html","9edb592035f0333b1d35b2e8a0425211"],["/2022/01/23/差分/index.html","556a1677902a57217ac8bfef5ffa5e79"],["/2022/04/04/MyBatisPlus/index.html","e20c9b274c33a6fc59aa9554b0d2fbe5"],["/2022/08/17/jQuery/index.html","f19d4827a7084f48700b45cc15ba2ea1"],["/2022/08/19/JavaScript/index.html","3fc4fe9196fe1a0672fb3fceafef8739"],["/2022/08/22/Ajax/index.html","1ea45f1369a6753b9054d3b8f31ec58c"],["/2022/08/23/Promise/index.html","321f67bf83a973be3f492bf24977e602"],["/2022/08/24/Axios/index.html","0dedde89fd59163a7e7a8e877d8500ae"],["/2022/08/25/H5本地存储/index.html","a6a26913ed0b151272ccfa976c5eb762"],["/2022/08/26/mock/index.html","dbef73d0a7d99c0a9fb233eabe0f5705"],["/2022/08/31/VueJs/index.html","e0c282542443c3b23940931d3e716e50"],["/2022/09/01/vue组件化/index.html","66b839e451667f16ba6999ad563de761"],["/2022/09/04/VueCLI/index.html","5bcade9ef3990c199ddf45ef009137d3"],["/2022/09/07/vue实现动画/index.html","82b9d3d2ebcaf7a231ece3895b7c68fb"],["/2022/09/09/Vue响应式方法/index.html","781c0b434d4dd527d5253ae99e60e3b1"],["/2022/09/10/Vue异步请求/index.html","501ac60026292d7c1285808091bd9b62"],["/2022/09/11/vue-Router/index.html","27fc6be4de1aefa3de7af9b0e8dd99f3"],["/2022/09/13/Vuex/index.html","2400adb754d91f699c6b40fee7987865"],["/2022/09/15/SpringBoot/index.html","02447a760566ba16fc1efd2c018dac9b"],["/2022/09/16/SpringBoot配置FastJson/index.html","450138c7a2318bd2a8e5e41268b7133f"],["/2022/09/19/SpringBoot参数校验/index.html","cbecd5ce7a6155b08d041d2deffdbb0f"],["/2022/09/20/SpringBoot的异常处理/index.html","77800de8e03c48d8ead12844625f8739"],["/2022/09/21/SpringBoot统一响应处理/index.html","6aa73d754a628b69638ef585161be16a"],["/2022/09/28/Linux/index.html","73725ab564c6ba306086e19f201ee304"],["/2022/10/02/redis基础/index.html","d42cecb574595387f5777ece91bfd27d"],["/2022/10/03/Redis缓存/index.html","f5a548513056efadc7ba66274644171d"],["/2022/10/04/redis缓存穿透/index.html","c6853a35e640a0772e4793b9c345b835"],["/2022/10/13/Redis缓存击穿/index.html","776b3b8927fc2c33775a374b163a177f"],["/2022/10/14/Redis缓存雪崩/index.html","a4e3430f4ca352ee7f3e5183ce646bbf"],["/2022/10/17/Redis集群/index.html","af927897369a6a2d5466a966c52b265c"],["/2022/10/18/Redis哨兵模式/index.html","a6dac6d0a2924f9289ca55fe81425f47"],["/2022/10/19/Redis主从复制/index.html","1df055bfff07823e327aea4a448c98ae"],["/2022/11/03/Spring-Security/index.html","a08c043c7bb330c22315a5884e88ea78"],["/2022/11/08/SpringBoot日志/index.html","7ca7fc62eddf7a96adcbb4e923d9e85f"],["/2022/11/11/Swagger2/index.html","02be740498adf4948d9bc024cfde9589"],["/2022/11/21/Nginx-一/index.html","1290be51c1edc9c1a6e4cb06693eeeca"],["/2022/11/23/Nginx-二-代理服务/index.html","007a3a7e00e9c145bd53ff3c4cf8c5ed"],["/2022/11/24/nginx-三-负载均衡/index.html","09cde2d59178a2e0548cf21c2d7782a2"],["/2022/11/26/nginx-四-缓存集成/index.html","7f33596a977917733288a18bec72a67c"],["/2022/11/28/nginx-五-动静分离/index.html","d545c7a6316b518a588bcf1d3b60598f"],["/2022/11/29/nginx-六-制作下载站点/index.html","855feca0f54e72d165b01f8dc0e8eab4"],["/2022/12/06/docker基础/index.html","50abb8846667e59a5b7dc2f094062d2c"],["/2022/12/09/Docker高级/index.html","a3701797d111871f930e6754029cb29d"],["/2023/01/04/MongoDB/index.html","c47a93cb96afc2c0180f145a64e3b062"],["/2023/02/05/消息队列/index.html","0b5a2d6417ea17f6af1bf70b2295d829"],["/2023/02/12/RabbitMQ集群/index.html","8f90447bd98e5ca225ca3442cf04d291"],["/2023/03/10/CICD/index.html","9407795d90bad0765b55b62591eb32fe"],["/2023/03/11/ElasticSearch/index.html","a166c535f89d876c6125dd181719485f"],["/2023/03/12/ELK日志平台搭建/index.html","6c879cb2c8049d3bcf5902fb94823534"],["/2023/03/13/NIO/index.html","409ac5455cac75924bbab660defc105a"],["/2023/03/14/Netty/index.html","1db480845da44becd7b65b41c667cb09"],["/2023/03/15/SpringCloud/index.html","431f4d5e21b59f530f5853f6de69e5b7"],["/2023/03/17/分布式系统认证/index.html","ebfaa77e4957cc7669ca5b2f3422883a"],["/2023/03/19/JVM概述/index.html","1d4e7144bc87bdb8e5b58bcfff64ec70"],["/2023/03/23/类的加载过程/index.html","b9572b89521f7104660c50e60677b489"],["/2023/03/28/对象的实例化/index.html","c188ce194402ee363a87e399a68b9129"],["/404.html","568a136e8e54db03502f31c6320eb819"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","71a149a3d0ceb0c661451da34584bf1b"],["/archives/2021/02/index.html","3ff690e3b444697d893dec179b132e23"],["/archives/2021/03/index.html","bae8928f6053b6eafb2b1e912715e0a6"],["/archives/2021/03/page/2/index.html","60f2a1450f78b052c09a6b3ad931f60b"],["/archives/2021/03/page/3/index.html","cba147a9cbcf9e890369e7c6a234725f"],["/archives/2021/04/index.html","b63c1fd069b0491ea3842afe0fdf7a34"],["/archives/2021/04/page/2/index.html","61d9c8f9932f872031cd06ad21163084"],["/archives/2021/05/index.html","5d674349caacc2d096da5ac38f03e6ad"],["/archives/2021/index.html","b596c6afd35cba3d434ec40e3c958175"],["/archives/2021/page/2/index.html","62d84729f95b466208a93728bcae8408"],["/archives/2021/page/3/index.html","cf89439a9237f4488bf75c944c762de2"],["/archives/2021/page/4/index.html","7d98578c355b8a73cc25a5f3bd2236f2"],["/archives/2021/page/5/index.html","0754d5df6709d5a5bae38193b159c188"],["/archives/2021/page/6/index.html","13f673ccfdf67fd68f81c5aa241979db"],["/archives/2021/page/7/index.html","fdd37219f2c4e72892ef804cc0e6e44a"],["/archives/2022/01/index.html","c25c94ce6413baaaf014d658b355df52"],["/archives/2022/04/index.html","80641187c8360c7371721fb78f111956"],["/archives/2022/08/index.html","867a17e8ad1b8de81b67ec29afe7639f"],["/archives/2022/09/index.html","0b698bc912feff40d5f67cb2dbaffff2"],["/archives/2022/09/page/2/index.html","55b74110faf7a964ebd6a1b80f932230"],["/archives/2022/10/index.html","e81333580b0492613fcafc500745d86b"],["/archives/2022/11/index.html","829818d0026b2b235b7c421cc4d06583"],["/archives/2022/12/index.html","dfeb940b4f9e37e2ccd0047c0e8a94fe"],["/archives/2022/index.html","4c06ab545d8f2e972755322d02628426"],["/archives/2022/page/2/index.html","a044bc353a3e21b8ee3f7d2c45fb9d31"],["/archives/2022/page/3/index.html","6903913ccfd1d3a17f2c6563a224dcc7"],["/archives/2022/page/4/index.html","f44b1c5f4cda4bfc45bba706fab0225d"],["/archives/2022/page/5/index.html","2c6a9cd32c3667179cd337442ea97022"],["/archives/2023/01/index.html","162c372535b3b99033162b0114511ca6"],["/archives/2023/02/index.html","4c72a957f93e018ce8e5cc0fde89b5a1"],["/archives/2023/03/index.html","410684c336cbcb4d0d730b26fe9401bc"],["/archives/2023/index.html","83aac296685ce26b56649a9ca7aee1ba"],["/archives/2023/page/2/index.html","81fcc6ec311950af8d85130a55abaa2f"],["/archives/index.html","19d8113e58bb26a2a8d3d27a0932367d"],["/archives/page/10/index.html","b9664c40e557795ee54d733363eaa94f"],["/archives/page/11/index.html","f9542270a4257fbb3307a0bb3dd89c62"],["/archives/page/12/index.html","d022abb406624f189efc326e316949ce"],["/archives/page/2/index.html","5191cb821d969040318e52afd676cf84"],["/archives/page/3/index.html","b5b6144f2ea6cba5a4d16aa40ab1d6e9"],["/archives/page/4/index.html","c1779cb66b7d144d45323aba55664d01"],["/archives/page/5/index.html","c40ba94921234049076352f278bde2a7"],["/archives/page/6/index.html","78fbdcc256a063ef494d11e4454714a4"],["/archives/page/7/index.html","1c6110906d42a5cc2f8e811ad5ef53b6"],["/archives/page/8/index.html","0b9366c97e87c6ccba1f170420117104"],["/archives/page/9/index.html","6ad41a3207bcfbcc5fbdf2256a4c040e"],["/categories/CICD/index.html","899db55a0ed9981cac34c76a661af34a"],["/categories/Docker/index.html","fa0b1862258e2ade86d39b3b4d2bc951"],["/categories/ELK/index.html","1c6b3fc7a0cb851b403c08c5ba9a7feb"],["/categories/ElasticSearch/index.html","2c44ab618547c1a458b529eba19660ba"],["/categories/JVM/index.html","3134ce791dd5eefbe4fda76feb62ce37"],["/categories/LeetCode/index.html","7ce65fa240b8de93d36cc0b9895ce3af"],["/categories/LeetCode/page/2/index.html","4bd451bc1d5e23364482a35aaaa226c1"],["/categories/LeetCode/page/3/index.html","1dd27b20c00bf44c73faf0c8ab55a083"],["/categories/Linux/index.html","d362db98ceba0140097fc8a253407b3b"],["/categories/NIO/index.html","7527f75f16a0e6746cee8401e8002e34"],["/categories/Netty/index.html","786f5162eb52834fc6a4efba7127a769"],["/categories/Nginx/index.html","e613f9f5417e815447c92f7dcf373ea3"],["/categories/Redis/index.html","03aa6b99dc7c47cacc31cdf09f56e1ad"],["/categories/SSM/index.html","2c5e246c1e2dbfccca4e944467dd3867"],["/categories/Spring-Security/index.html","da7fc8348481eec602bea9774689416b"],["/categories/SpringCloud/index.html","22c7040d176feea4101338d63f026c2d"],["/categories/Spring框架/index.html","d80a436d99d9291b5ef916884f7f074b"],["/categories/Spring框架/日志/index.html","66b6452f170f1ab1a428afd521b465b9"],["/categories/Swagger/index.html","bb415b795470932e8af936a6169141fc"],["/categories/Vue/index.html","2e882820dc33f592062c753bb2014977"],["/categories/index.html","062c65b478dfa2a532ace69c6e6c40c5"],["/categories/分布式权限认证/index.html","741a751edf70f04414d09b6d005a5b02"],["/categories/前端/index.html","01729b2ce8a40b5c7a019e615372c07d"],["/categories/博客/index.html","d16b21aea30a3b91626b499b83ed607c"],["/categories/学习路线/index.html","3b501fde247f94d22dd1777ffddf1a30"],["/categories/工具/index.html","d96e97c4d16952fe5f9b9aec6f3cce87"],["/categories/数据库/index.html","0915fc8b4feaf596e5965f4cc4490ea7"],["/categories/消息队列/index.html","b48e04b4cd4dfe393e00673ec6fda2ed"],["/categories/笔记/index.html","5c9f2f16e642120b439777f85ff2ed6b"],["/categories/算法/index.html","eb801cb77bc35d747cb38320880e3ceb"],["/categories/算法/page/2/index.html","4623660de4eb91eb0208b9053ab7fac4"],["/categories/设计模式/index.html","a47a60905a9c9980be80e2da38383a3f"],["/categories/设计模式/page/2/index.html","bffca7d3aec27886fed76470e52aa7cc"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","2837121bd111a7a0ab43b24c0fe2dd20"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","b89f96efc7ad097e908a57a0bea40439"],["/messageboard/index.html","01b710382814c43d5e5cbfe0aefebe84"],["/page/10/index.html","68e3c90098e2a9a59bfc8579fc0a7efd"],["/page/11/index.html","5885f68f08bd737888dccaf89736d90c"],["/page/12/index.html","82a669edbec34b9447d0f193058d5211"],["/page/2/index.html","5b3f375b4e0d50950ff2d3cb55f6ddf8"],["/page/3/index.html","7d06f6fee61496ccc4fc373d16c4d44b"],["/page/4/index.html","e25eb0af8e164029b65c9fc0c0dcf0d4"],["/page/5/index.html","a71cd1c22b67e52a0248db6510bb7a01"],["/page/6/index.html","84ec54e5a1321dfdff3b52db7c8dae81"],["/page/7/index.html","b895313c1f2bd4ade16e348e63925c1d"],["/page/8/index.html","e36b8cc850eaca7581cdca5bf3975c5d"],["/page/9/index.html","9f54d159e4e27b97e60cdf4184277b62"],["/sw-register.js","12b3dc93014d8330e8fd978be66eef05"],["/tags/Ajax/index.html","581cf65da894cb36c93f783093719a9f"],["/tags/Axios/index.html","6fa73bfb6d406c73c7b5829501cecdb2"],["/tags/CICD/index.html","c22d7f84dc55b202143661214f6e7a7b"],["/tags/Docker/index.html","ccf07667338344ea1717108be38ab538"],["/tags/ELK/index.html","da0075745f48a12c1364c5537f6910e7"],["/tags/ElasticSearch/index.html","2a8c3a2f60bca976a5ebff106c6976aa"],["/tags/H5/index.html","cad4d459e581ce325ddfad384db28520"],["/tags/JVM/index.html","38d1eb447e90519e578fe780cd541969"],["/tags/JavaScript/index.html","4256b9177bfcea6641a712c465a6105f"],["/tags/Kibana/index.html","3ee97f193de6c13dda173f91726161c6"],["/tags/LeetCode/index.html","c512d8565de6cc9b03858c204a2092b6"],["/tags/LeetCode/page/2/index.html","41ffb3c98b5533e81a4bfd45e91ac370"],["/tags/LeetCode/page/3/index.html","af1753b54e724a05e6e6e67841e79de9"],["/tags/Linux/index.html","8c7702be591a6696b54102d2b1e8105e"],["/tags/Logstash/index.html","a20e79aa9883f10416a74c536c12ce4b"],["/tags/Mock/index.html","6202736a613acefa69337a37593bf8aa"],["/tags/MongoDB/index.html","6f814a39d9f82f8ec004f2960cff4c37"],["/tags/Mybatis/index.html","a930b0c4ddb93f9640d7809841c1a857"],["/tags/MybatisPlus/index.html","db39371a20b64dadd55851a0b459a99a"],["/tags/NIO/index.html","b576c9ae8f89f291ff8b4f0c6b377c3e"],["/tags/Netty/index.html","ee8186d4c8248d31125991dc34555afe"],["/tags/Nginx/index.html","dcc6cd12811a9977a159c01f61c995d0"],["/tags/Promise/index.html","c53293b31c7a7622f02243b11cc7f66a"],["/tags/RabbitMQ/index.html","0b9b5f290f8622c339dc0b317965345b"],["/tags/Redis/index.html","3bc51a33645744a6b398cbc838dc9883"],["/tags/SSM/index.html","05c3041e5cc7ebcfdb1e6b78d3319c65"],["/tags/Spring-Security/index.html","d66b7ba1c450ca3b7bb85afaf152dd44"],["/tags/Spring/index.html","72412751be8d30d52cf124d2c2b2474f"],["/tags/SpringBoot/index.html","0401df324b7be386f6e8aea2f1d2f1df"],["/tags/SpringCloud/index.html","67279cd630fae803fef5b3450603a47c"],["/tags/SpringMVC/index.html","f45af94f6a778719bf7747314870ef5e"],["/tags/Swagger/index.html","b8a4ed14b049fd119a43811a3cfc6448"],["/tags/git/index.html","2b0d36810fa990b060e21daae39c5c92"],["/tags/hexo/index.html","515b6ea07f0aef4722a45d414f374a9c"],["/tags/index.html","8d5a80c2521692a9d1eab3e7d8b7db2f"],["/tags/jQuery/index.html","a38f13a5306b5fc4e3c3a6ed7369c349"],["/tags/java/index.html","778674e1280a5f5d3dada33f25bfba91"],["/tags/markdown/index.html","97c8ee747d6e8329456b5c4f62f36a8e"],["/tags/mysql-数据类型/index.html","b95a349379bc036add7b440b022fec5b"],["/tags/mysql/index.html","dac605487581de5a9c845db2d0710b89"],["/tags/noSQL/index.html","ba8ed20ec85e54ab263d4e0af8ce912d"],["/tags/typora/index.html","58dcc16137ce06d8fe34d657a38d4578"],["/tags/vue/index.html","79e92673f6cadfddaad13e1ad116a348"],["/tags/享元模式/index.html","bbdc42bfe22090eabfdbab1958e9e9b6"],["/tags/代理模式/index.html","2077130b6608f7a067bf2f6cb042f669"],["/tags/分布式/index.html","92fe99e451fbcac7af99234839976f5d"],["/tags/分布式系统/index.html","e63cc0fff2297dca6e80cd5e26c3064d"],["/tags/前端/index.html","3316a44d315db587861dcc4c3c9ea28c"],["/tags/前端/page/2/index.html","88ac825619b818e92bf0843cb1a9c527"],["/tags/博客/index.html","272acfb1488f7dfa333ddb08367ebd22"],["/tags/后端/index.html","63fe506cf56e7c061aefe5ce644fec14"],["/tags/外观模式/index.html","5bb9152152a7662217c93009c85212d9"],["/tags/容器技术/index.html","18d25a2a016c6e763bee7a2489941f4f"],["/tags/工厂方法/index.html","c47f094768f3ccb403af41c734f85a13"],["/tags/微服务/index.html","281ad83deccf7cbc60165fadd38cf69a"],["/tags/抽象工厂/index.html","05991c5bb6b8c6387a6151399b4c518b"],["/tags/持续集成持续部署/index.html","08d30fdf94e59802ceb0fb40124f2d56"],["/tags/排序/index.html","23f786850362395987afdbc12ae20bfd"],["/tags/搜索引擎/index.html","fd7515398a0d83d70da282f70d681cf9"],["/tags/数据库/index.html","333286ffce9eb9018218df8a224b75a1"],["/tags/日志/index.html","cfc4977fbaf2645e5f3c5c77293911cf"],["/tags/服务器/index.html","bcbe98ceeb5486fd825930d2cb5b6e71"],["/tags/权限认证/index.html","e70634a98b4d4453cb46a99ce5062d0c"],["/tags/查找/index.html","f7765dded925f1d2c163eeff0781bbed"],["/tags/桥接模式/index.html","7fd9312b20c9c567d83d86a4ff4f3da2"],["/tags/模板方法模式/index.html","dccaad70bd3f1ca7d84ed60f5b7119a7"],["/tags/消息队列/index.html","1cce00254683e84cb78aea850b9bc38b"],["/tags/版本控制/index.html","eb982027c20318b0438374f05a4f5679"],["/tags/策略模式/index.html","a6f6a5e71d31fc1302607e6a1c37a5cc"],["/tags/简单工厂/index.html","4e02017d0dc5d118e840ba7d0621523d"],["/tags/算法/index.html","1d2b8eb3f9204e183181ce3f504089da"],["/tags/算法/page/2/index.html","f7ec534ee9c502cbef9ac46c1a7b52be"],["/tags/组件化/index.html","50168e91d21eca03ff54908f378e6a12"],["/tags/缓存/index.html","38519db1fcada53f2c7bc554db4a4517"],["/tags/观察者模式/index.html","f93e9ef570e6ba7b4940726f3ec50dc4"],["/tags/设计模式/index.html","511f2501cd1d10fe02fb922b8b62403a"],["/tags/设计模式/page/2/index.html","61ae19f2a3ca4d30275edde28d7a5189"],["/tags/责任链模式/index.html","92322b9455787b49db4220846a02fbab"],["/tags/适配器模式/index.html","5b6f58fa5ed81aa9931e0928489bbe0b"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
