/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","ecc84259a45f4e9bd0f0f01f77d2a1b5"],["/2021/02/22/博客的搭建/index.html","e62a791bc527a00d65e72f6220e5deaa"],["/2021/02/23/如何使用markdown/index.html","8d989e45c89986fcdc3cdb9161434905"],["/2021/02/24/mysql命令大全/index.html","4c86384738658a811dbf54c1b693a133"],["/2021/02/24/mysql数据类型/index.html","4e50e80d5d2178751db0bece1b26851d"],["/2021/02/25/Git的介绍与简单使用/index.html","e7dfafecd35af6a6397d2d44965a39fa"],["/2021/02/27/简单工厂模式/index.html","edacefd2971bfd0b1cee1d8c3f7bb9da"],["/2021/03/01/工厂方法模式/index.html","5b5f5d5144d63e7398e862e5e878d1d1"],["/2021/03/02/抽象工厂模式/index.html","b9b4796bd726cda52aa41dccd2986c97"],["/2021/03/03/单例模式/index.html","3623aed68616f505e488f9ee9b13a9bf"],["/2021/03/04/观察者模式/index.html","d836b90f0c927f5eedfbcfef333133a6"],["/2021/03/05/适配器模式/index.html","e30655fea206d02497c2ed0037d64045"],["/2021/03/06/模板方法模式/index.html","14ea409394919789fbfa3c80b3148b0a"],["/2021/03/07/责任链模式/index.html","7a62cb574fe1a62fe48743b05f536e13"],["/2021/03/09/代理模式/index.html","dda68d60f470263034e06be537f39479"],["/2021/03/11/享元模式/index.html","c169b8aa71111d9738ee561cc5dcc059"],["/2021/03/12/外观模式/index.html","ab57c2bcb40a18629d6fbbd21039b514"],["/2021/03/13/策略模式/index.html","ba742d138944e14bf3949f7b1f94d2c5"],["/2021/03/14/桥接/index.html","f88a6b7cd24c2456b0717536ea78568c"],["/2021/03/15/LeetCode-多数元素/index.html","61a564d7bdbc2c756f85dcd339bd0c0e"],["/2021/03/16/LeetCode之汉明距离/index.html","53e0f328d44273ad99c118c667d907b0"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","f83334ad60756be0fb14837d46f67cda"],["/2021/03/18/LeetCode之两数之和/index.html","b5c3f5f9e41d1f92f35cdb2d835e5d83"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","19b12ff6b7087c580717d34dd2605a54"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","aff59d1fbbc631d5349a9f0db14d637e"],["/2021/03/21/LeetCode之有效的括号/index.html","64efab9f00587d0b8d2abb9501573473"],["/2021/03/22/LeetCode之移动零/index.html","5fb382cbae731225cc1a8a604778a422"],["/2021/03/23/LeetCode之爬楼梯/index.html","fdc8b789ad8462a4cf24a84869ca4614"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","8836bcd6f0e7494a942d24d72f42355f"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","cefc7394e657f5f0a6f8d2a20bc58209"],["/2021/03/26/LeetCode之最大子序和/index.html","eed75ace0a71b230b9de67c62ceb99ab"],["/2021/03/27/LeetCode之子集/index.html","700173f8b8b770107f8fd59224d78c89"],["/2021/03/28/LeetCode之合并二叉树/index.html","9fb6bf41ae342509f074d6339e4b8742"],["/2021/03/29/LeetCode之翻转二叉树/index.html","e9ecccc0cd8d54fb7f7afc995465defa"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","19326e348af82d6b22573d0eb491d018"],["/2021/03/31/LeetCode之翻转链表/index.html","28d4ae3fe88c1b98622d77a835582250"],["/2021/04/01/LeetCode之相交链表/index.html","a40eec61af0148663653da2ad7f8f03d"],["/2021/04/02/LeetCode之最小栈/index.html","9791d40e85b98af459dfc8f3055a82ba"],["/2021/04/03/LeetCode之对称二叉树/index.html","2d71aafb2b690c931e9318a411376afe"],["/2021/04/04/LeetCode之环形链表/index.html","98b6751a042d9d616c806b2f11874218"],["/2021/04/05/LeetCode之二叉树的直径/index.html","bc67dd1f1965f83507668e3bd2c7d63e"],["/2021/04/06/LeetCode之回文链表/index.html","3702f69027b13b9bc3f090c23bbc0887"],["/2021/04/07/LeetCode之比特位计数/index.html","ab97575f4536143124edbe1f48a679d0"],["/2021/04/08/LeetCode之全排列/index.html","ec38a862e5e638819f29faf2abd2e8c6"],["/2021/04/09/LeetCode之括号的生成/index.html","a87c695274c1c7cb32411106f8c49df9"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","91729c7ce8ac2fdb16cd1f7d5c94f470"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","0a20a74deb541984a4ee103793dcba0a"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","8d063b36e519947cb0047732d0a08fc1"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","a7223d16f51d405960fc2ed7238919f8"],["/2021/04/14/Mybatis/index.html","4ce6f5f23579ca7583ce431cf7912e6a"],["/2021/04/15/Spring-1/index.html","8f1a0cda7090b8ea02f6c0ccfd0f39e3"],["/2021/04/25/Spring-2/index.html","a4cca8b9331ea282c6bc9ce77230ff66"],["/2021/04/27/SpringMVC-1/index.html","bd49caaec3eeffe07a592815d04cceb9"],["/2021/04/29/SpringMVC-2/index.html","61e831b205a9e75e127fc2fb52424cc9"],["/2021/05/03/冒泡排序/index.html","d776de352786f6afe371ca52ccee2870"],["/2021/05/08/选择排序/index.html","a29fe490637f7f411425bfde87d98152"],["/2021/05/12/插入排序/index.html","281629d9fdc6ef8554ecc6a2c612461f"],["/2021/05/15/快速排序/index.html","daff8fe599603e5399056ecb5f79f092"],["/2021/05/19/基数排序/index.html","9605f672d50c746c024566c54cc9cdbb"],["/2021/05/20/哈希排序/index.html","ada7ed6f7836795fd01ecbcbfba870b4"],["/2021/05/21/归并排序/index.html","dcd279236f9c51beb808446fdef7399c"],["/2021/05/22/二分查找/index.html","3bfb3caf0dd4f3f7a03b8456015bb33f"],["/2021/05/26/差值查找/index.html","926e51db24cf2df26bb88f13e881a346"],["/2022/01/12/高精度大整数计算/index.html","6ea26a219eba68b7223e2b1b93debae1"],["/2022/01/22/前缀和/index.html","ab4cff6a08d3e46883aae152d02931ce"],["/2022/01/23/差分/index.html","906074f94154880f441cc86fbb38f9a0"],["/2022/04/04/MyBatisPlus/index.html","13ffee6db6aee3c1559cebbf4e5402f1"],["/2022/08/17/jQuery/index.html","8c037270ecca6e537472d41665ab2b1f"],["/2022/08/19/JavaScript/index.html","117507f54bd2a6722e528a31ac1338bc"],["/2022/08/22/Ajax/index.html","61721bb65edeb9c40c45ed2deef4574c"],["/2022/08/23/Promise/index.html","d87c63e73dcccda216c0a6e70adbff0f"],["/2022/08/24/Axios/index.html","cdc2dd0fc6739f5d6be5b65cee3e20ff"],["/2022/08/25/H5本地存储/index.html","e6161d4111553303077435398ba2109f"],["/2022/08/26/mock/index.html","30dd17f3ae952a55c637dc8647985dee"],["/2022/08/31/VueJs/index.html","d6327c71e688f23ed8a9b5fae77c6343"],["/2022/09/01/vue组件化/index.html","d80f2167ecc9879241ae0b2f3f9c21ae"],["/2022/09/04/VueCLI/index.html","db5ff9c36d7f77092601fc1be813f37e"],["/2022/09/07/vue实现动画/index.html","292a167e0852e980ebcd07524a543d40"],["/2022/09/09/Vue响应式方法/index.html","2e5d270ad7f329459f6d1205fa2b8b6c"],["/2022/09/10/Vue异步请求/index.html","82e46298af350a3e963d659c2e0f8d13"],["/2022/09/11/vue-Router/index.html","50153a757d00c0b6b10dd98fc9747f40"],["/2022/09/13/Vuex/index.html","5cbe3be54921425b093171ceeccefe4a"],["/2022/09/15/SpringBoot/index.html","5e0e0f8a5d302fedb447cf0524e34515"],["/2022/09/16/SpringBoot配置FastJson/index.html","a5299cddd10e652f8b7e0eae63d66baf"],["/2022/09/19/SpringBoot参数校验/index.html","f61816c01bd401ce025641e292935940"],["/2022/09/20/SpringBoot的异常处理/index.html","adcbbd7879b80a0791941e540998e511"],["/2022/09/21/SpringBoot统一响应处理/index.html","1a4731d8fb101598750b2ce0adb537f9"],["/2022/09/28/Linux/index.html","59202a474a0219e438859c1843584c00"],["/2022/10/02/redis基础/index.html","65f6ff9e29a14ec5e82fa8d2774b1c96"],["/2022/10/03/Redis缓存/index.html","b5459638a3bb13c470d17911614f91f6"],["/2022/10/04/redis缓存穿透/index.html","d38ef42961e9afdb0dbb77389cab5369"],["/2022/10/13/Redis缓存击穿/index.html","88c304425dadbfeac13f997255f78631"],["/2022/10/14/Redis缓存雪崩/index.html","4210ed3869a5766a3d3c0b63a7517bc7"],["/2022/10/17/Redis集群/index.html","7d532ec62426d033f4e5e8988cfde273"],["/2022/10/18/Redis哨兵模式/index.html","78d043f78f41c0478e301dddeb8ce728"],["/2022/10/19/Redis主从复制/index.html","e958e4208ce624dccec91cf77f9b15f9"],["/2022/11/03/Spring-Security/index.html","a11d4fd63ea6b64c7e9b36daca6bb80e"],["/2022/11/08/SpringBoot日志/index.html","bd4c4efe760f8ca1e4c557ecd2c73db1"],["/2022/11/11/Swagger2/index.html","3f27cac3dd9f28dfdf9a60db70e73c4c"],["/2022/11/21/Nginx-一/index.html","0327b98b4c2c58309f6223359875b913"],["/2022/11/23/Nginx-二-代理服务/index.html","5b6602b2e99ca8342daf33286da770b1"],["/2022/11/24/nginx-三-负载均衡/index.html","0b43b2ad08a4ae7d94fd464c48f62ad5"],["/2022/11/26/nginx-四-缓存集成/index.html","023f535bc162e7d42c7afc4ac95879a7"],["/2022/11/28/nginx-五-动静分离/index.html","6cb3517fd155cae62672e5675e5fdf09"],["/2022/11/29/nginx-六-制作下载站点/index.html","6ca0c8a9971cde408edd56831eab654f"],["/2022/12/06/docker基础/index.html","58c3beba1992fa85c78b667257c02a78"],["/2022/12/09/Docker高级/index.html","680b48f216577448de4a2c5c7c98f9a4"],["/2023/01/04/MongoDB/index.html","abdc577182733eec1c47603861c6561e"],["/2023/02/05/消息队列/index.html","088a096b97bd387a9d799465b15b3915"],["/2023/02/12/RabbitMQ集群/index.html","6c359fbacc416aa707532960d8cf6003"],["/2023/03/10/CICD/index.html","d21258e379319915b78d49ac86c643e2"],["/2023/03/11/ElasticSearch/index.html","14b9e351d26001b61c1e12fe4de9fbfa"],["/404.html","c258d40f7df9b2770913e654c32ee235"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","8ea8928ac202af001617c64c3922f3f4"],["/archives/2021/02/index.html","ab4f68454adf092dce7b13f72a9a673a"],["/archives/2021/03/index.html","9d84b26394c009c6858a759c49a55a5e"],["/archives/2021/03/page/2/index.html","4f40838c80197120028b71d68ec97315"],["/archives/2021/03/page/3/index.html","0c47c6b0528b73d33c35691e95313fbd"],["/archives/2021/04/index.html","79db3f0c819f2d6da65f322f708d3b6d"],["/archives/2021/04/page/2/index.html","7a7460771419a5374f55096cd584c0e5"],["/archives/2021/05/index.html","951858f4ea2d249c2f5e9a08bcdca3aa"],["/archives/2021/index.html","9a7e3699434a10dad8fb05969cf842ea"],["/archives/2021/page/2/index.html","8df70985504ee6690a9875838f84e83a"],["/archives/2021/page/3/index.html","fc02f8d2191b9da89a320ceafaaf1ea6"],["/archives/2021/page/4/index.html","ffa7bfe9578dd3036188d073d1880ea3"],["/archives/2021/page/5/index.html","a0cd4c432731e4495f569321904160ab"],["/archives/2021/page/6/index.html","c02169972438be1adf4213322131302a"],["/archives/2021/page/7/index.html","4368c8552f7c11c7cd850783c9e40bf7"],["/archives/2022/01/index.html","10efc16f69e676a5e63df05aa5482356"],["/archives/2022/04/index.html","5d6d359853e4e8e18d45cdf50e05b4ca"],["/archives/2022/08/index.html","8c19179bcdf8cbc9cf5b957a6bb7053a"],["/archives/2022/09/index.html","7542147f1373a88c837424b0df5803ab"],["/archives/2022/09/page/2/index.html","8f0b7f5dd30b30fb5fedad11e793751c"],["/archives/2022/10/index.html","9dd088261251c7895d3f601875b5dbf2"],["/archives/2022/11/index.html","00d9981ce85f6a9ade1d13974361f8a0"],["/archives/2022/12/index.html","cc0d97939415cfcbd881c772a230e0b7"],["/archives/2022/index.html","7b79692ae6e8c90d4d367d8c76340cd8"],["/archives/2022/page/2/index.html","918a5a570691c40b5b4fa2644339ad32"],["/archives/2022/page/3/index.html","707ad8d5ed57e31e9041c1b5d647ac28"],["/archives/2022/page/4/index.html","5b6d8873e6c42afdae465e4a502eca6a"],["/archives/2022/page/5/index.html","5a64c3885b6f11704d7a7029b42c6765"],["/archives/2023/01/index.html","0fed4c9f8a4c3ea929287d9b9f81f1a8"],["/archives/2023/02/index.html","5ba33c44ac484e6549a832556e04073c"],["/archives/2023/03/index.html","072d157ecde8245eafe5192ab448a7db"],["/archives/2023/index.html","ba793f35634b72bcbe9a838bec882461"],["/archives/index.html","f5515b68a7cb0165efd15dff7c26e4d8"],["/archives/page/10/index.html","84fd1a8d8733537d8727d62bcebf5858"],["/archives/page/11/index.html","595d39d709fd7b790911382d1f89ee3f"],["/archives/page/12/index.html","958bf123ce6669832bf53c29532775fb"],["/archives/page/2/index.html","ad9c3283ab34dd87da837db38ea9a662"],["/archives/page/3/index.html","2907ce5b753011de59d34ea90e8659fa"],["/archives/page/4/index.html","2bc85dc5c36a4217d34d30f15011eba6"],["/archives/page/5/index.html","cc335cfda86b1b4a5f1e69efe82edd0a"],["/archives/page/6/index.html","830394d7a58a2a6e10c514e74a2ac05d"],["/archives/page/7/index.html","cdd665dd5428dd4bef03465764dfb4fa"],["/archives/page/8/index.html","c3f0a9df33c45a08e7d419011130dd44"],["/archives/page/9/index.html","161359f625e005fed68fb272c43cb0ce"],["/categories/CICD/index.html","6fc1f32074aa5c08641849577b4aaf63"],["/categories/Docker/index.html","0d6502c6c0bee948680bc0814512d806"],["/categories/ElasticSearch/index.html","447f4622083e4d07ca788be0322343c0"],["/categories/LeetCode/index.html","8c46fe8647ab7cc194941bb551be9c3f"],["/categories/LeetCode/page/2/index.html","fd417ae5f0b6e450603c9732813feed6"],["/categories/LeetCode/page/3/index.html","47e1da1f98b4cf5aeeb9a831b1aa36ab"],["/categories/Linux/index.html","04028e485a3fb107dabea42063883a69"],["/categories/Nginx/index.html","b13f8faf8ccb97abd566aba13b8248de"],["/categories/Redis/index.html","59cb97f312f2eadbed929f1afa4f274c"],["/categories/SSM/index.html","ec2cdac40706a44c630fdde731b434b0"],["/categories/Spring-Security/index.html","8991e579ff188387042107830aff3b62"],["/categories/Spring框架/index.html","9d7dcfa026f9310dc492398c8c2d5b9b"],["/categories/Spring框架/日志/index.html","3294c05a852fe423042de93e9cdb0365"],["/categories/Swagger/index.html","0f5b018196925b0feae397831bbdd8ec"],["/categories/Vue/index.html","846d2cadc1d6a3b7d07b8debad71c841"],["/categories/index.html","cde0318fccd381b14adb8e8ff03e3e64"],["/categories/前端/index.html","5fedf27d89d4f0c26dcab73f2d80d580"],["/categories/博客/index.html","0a22505309dbd0e2da780106f5bdcea0"],["/categories/学习路线/index.html","8872a771c822daecc1dcc1b7f7839203"],["/categories/工具/index.html","d71bae1ce770c9f4c5966f5ad258447a"],["/categories/数据库/index.html","f7d88b34492697e453b651ef464fb972"],["/categories/消息队列/index.html","14312e522c4da61d99501d8cc653d45a"],["/categories/笔记/index.html","e5fea814b8672e5fd41cb2a2773ce462"],["/categories/算法/index.html","6ffa76dd34d535f32bd2987e097b4d45"],["/categories/算法/page/2/index.html","f4a339297e556dcd946cde13bd4da909"],["/categories/设计模式/index.html","045529fd2935fc76d1868ab0675ca54a"],["/categories/设计模式/page/2/index.html","5a436b357703ea778dcda5a319bf3a2c"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","0b043e88c838bb8e20ade1436b1f5667"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","1895aa4196304b395256e8036eb1c4b7"],["/messageboard/index.html","997015e1d44a9b76e15c60340f31651a"],["/page/10/index.html","507306f781cfeb7c18a2ea49ed4fb0ac"],["/page/11/index.html","77a5f3e909d28f33c97ba425844f519c"],["/page/12/index.html","8045ac0ff8e728317acf4baac82396a6"],["/page/2/index.html","627987e2cc077789e744e725b038ea38"],["/page/3/index.html","82053ba0b89ef7709d9deaaee28b2a9d"],["/page/4/index.html","ddbd4dc47a91c4b2f917fb50ac175a69"],["/page/5/index.html","ca45cad84c2df14f77e2f613906dd058"],["/page/6/index.html","1c320e15d7e94c6ddd78913b208502f7"],["/page/7/index.html","e0e487209a02d5e86d2f034e1de087b5"],["/page/8/index.html","2fc9cb4708cafc5aeddeb9bc42690fc9"],["/page/9/index.html","26567ab2233469c63317410292545ec0"],["/sw-register.js","cd246ae797c6531002426773f1bb4099"],["/tags/Ajax/index.html","f73ad7306fca4a14bcb625ebb589dbcb"],["/tags/Axios/index.html","ae86280d83895046f03fe33b319e31c8"],["/tags/CICD/index.html","0f5e7653b8d7790f0aa1423383549f04"],["/tags/Docker/index.html","2ddfed081bff66ea7cd953d89c603f6b"],["/tags/ElasticSearch/index.html","aac5fdbaea458b1cdd69612d6c7f7180"],["/tags/H5/index.html","6b9e198dad3975b525de279c21ebf681"],["/tags/JavaScript/index.html","7f5bc1700ed3ee4e5a4dd7492ed3eb26"],["/tags/LeetCode/index.html","be3ddf4e0d793345d29faf67b8f4bdb1"],["/tags/LeetCode/page/2/index.html","5cdb16818204dc5be5467d0fa884490d"],["/tags/LeetCode/page/3/index.html","f373edc63a61801e94a63df3e1eeecf0"],["/tags/Linux/index.html","b490aa3bda8513cd20c786ab37169925"],["/tags/Mock/index.html","67b4ebdd7af30d566cedec91dc8dff79"],["/tags/MongoDB/index.html","ce53f600a49a19bf30c656e1da21ef55"],["/tags/Mybatis/index.html","a73df5d7d1d5d2266315b00b43705be9"],["/tags/MybatisPlus/index.html","2bc34d7b622769e21d7c77f73ef635cb"],["/tags/Nginx/index.html","8e62c41e09ee0b2c2760079d382d1627"],["/tags/Promise/index.html","a00247f294a01b02f74bc447efb5cb83"],["/tags/RabbitMQ/index.html","79c39e3480682326b6789c9510a4840c"],["/tags/Redis/index.html","f83faef3a2e833defc3d8edc817ad88a"],["/tags/SSM/index.html","9cad710beadac5eb6bc3a7812b5b049b"],["/tags/Spring-Security/index.html","17d1fb0e04423462364d2d9b3e40ba81"],["/tags/Spring/index.html","b2d6b07a268f817e85fc3d8876c26bd0"],["/tags/SpringBoot/index.html","88f88d64ab39823463d74a24aea2d0f3"],["/tags/SpringMVC/index.html","34e79a74e112ec8c09812efbeaf0d487"],["/tags/Swagger/index.html","966ded3e6efa318036ef6224dd2a9f42"],["/tags/butterfly/index.html","59ffadacb938b93e2957bfc8cd76643c"],["/tags/git/index.html","19e4a3f99d6dae827b37114e19a788f1"],["/tags/hexo/index.html","5553bd54a76aa2a6779309a0ce86de4d"],["/tags/index.html","8ab327908f1ce30531c9e833c142ce79"],["/tags/jQuery/index.html","e822d21671cf2923bb435573f10736db"],["/tags/java/index.html","65a6584b1c7d9cf2048e84ac038d692f"],["/tags/markdown/index.html","dcc7a868feab9161ba020b641caacab8"],["/tags/mysql-数据类型/index.html","aff895281d9d59c22945026a140299d4"],["/tags/mysql/index.html","f1732ebcccf3ec2f8f88570fcb3ab10a"],["/tags/noSQL/index.html","d9d173272ebfebd4d7fd9e3bfc92ca79"],["/tags/typora/index.html","f667dcece2e993ab0cb658e59c71d251"],["/tags/vue/index.html","dba5901de9c2724f4316ccaf7b241cd9"],["/tags/享元模式/index.html","91967bbf4ebd35f108f0f2fba07e8e7b"],["/tags/代理模式/index.html","161d43663aff34374937de43892f9145"],["/tags/分布式/index.html","d4a8947302514f4c6c9effd30fe21873"],["/tags/前端/index.html","c868680d9af19047a53a3f4ba6773493"],["/tags/前端/page/2/index.html","f1d58521cd67c9d7a9716b4246ed5721"],["/tags/后端/index.html","f9b42c49922595e8f13e5489db68183f"],["/tags/外观模式/index.html","cc280c96a511ac8ea308f46b4054e6b9"],["/tags/容器技术/index.html","2b45c9016073a4bffdd9ea5624821f92"],["/tags/工厂方法/index.html","40ecf0c27d6286e1990e328b91b8ab66"],["/tags/抽象工厂/index.html","61de247e547fb79df125f33a4971ebc8"],["/tags/持续集成持续部署/index.html","67eb74f8614c36e34b375bf9db0f8cc4"],["/tags/排序/index.html","aa8ce8699d608f8b26e01ed859971166"],["/tags/搜索引擎/index.html","321d9784621ad9cfe66f820538a0a0eb"],["/tags/数据库/index.html","e5aba33946e61c8dcabddbe975daf3b8"],["/tags/服务器/index.html","3e35765423bd99ed5a9707413bb86e63"],["/tags/查找/index.html","b579836ffa0da55c10e859437bc533cf"],["/tags/桥接模式/index.html","c0ded3ee30a4f76fe5a745c860f85e0f"],["/tags/模板方法模式/index.html","5f01e09604ec17cd3f16d12bc4c40e22"],["/tags/消息队列/index.html","6511aaa57df6f56ed1c48591e9d40a57"],["/tags/版本控制/index.html","cdd858541d4d5bf8754d7a2c7d0d0232"],["/tags/策略模式/index.html","a3abf9d0b8175762b4da8428e73b51f7"],["/tags/简单工厂/index.html","8f44ab84bd10a5fdaf8a667ed152ec40"],["/tags/算法/index.html","c892d8a69075de0007cda3544ce0fe99"],["/tags/算法/page/2/index.html","d70c53b1a17eddd6a32e95b5029ad2e0"],["/tags/组件化/index.html","a8012139d78024ac9594087fcd76a4f4"],["/tags/缓存/index.html","c232880be55d7d10e09f90183c2d0fca"],["/tags/观察者模式/index.html","b6529d7b2e486b93962386c5753a8c7f"],["/tags/设计模式/index.html","00ff31b69f3adf0b46c74498c260ff10"],["/tags/设计模式/page/2/index.html","237e0a98f3612274319b58e1e725712a"],["/tags/责任链模式/index.html","4539352b17508e498fde76f2d7c9cc39"],["/tags/适配器模式/index.html","7c3bbf0cac0c9472400d71ec56ca3add"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
