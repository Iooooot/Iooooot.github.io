/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","3d2738e3f2aee20fc0d71d4563771a3c"],["/2021/02/22/博客的搭建/index.html","ee627014050ee17ec13f4955ec912648"],["/2021/02/23/如何使用markdown/index.html","8888b16333761c510fe0fe151ebf8b2d"],["/2021/02/24/mysql命令大全/index.html","8804dac4004d2841035e46a02abb6887"],["/2021/02/24/mysql数据类型/index.html","bf227f7845d11328809c0e8a16cf020f"],["/2021/02/25/Git的介绍与简单使用/index.html","ffe70dfd5f53aeaf1f3c2722bdcd6858"],["/2021/02/27/简单工厂模式/index.html","70dc203324c622a96f3026ddc07597eb"],["/2021/03/01/工厂方法模式/index.html","57c5927a7adab33debbd6deffd3ae8ee"],["/2021/03/02/抽象工厂模式/index.html","bd56579f95e3683f15eb22f8745f5971"],["/2021/03/03/单例模式/index.html","cf4f72fef24134c19eaa45a48d49f158"],["/2021/03/04/观察者模式/index.html","ce2f501ae5d3c882184762f705ed6a89"],["/2021/03/05/适配器模式/index.html","33931e199861e2e58bbac64342de7455"],["/2021/03/06/模板方法模式/index.html","ff824bce4dcb6256fb7ab939772b3617"],["/2021/03/09/代理模式/index.html","fba3a27943476a053633661944b1884b"],["/2021/03/11/享元模式/index.html","b2f1c8709e819bbf2c7973c9567ec8a7"],["/2021/03/12/外观模式/index.html","63986202ebb63cf74c187812582a7c15"],["/2021/03/13/策略模式/index.html","0d0aa44fa8d9a29adc94b151412519c4"],["/2021/03/14/桥接/index.html","5f3eccf050ed3c078bd918092078b649"],["/2021/03/15/LeetCode-多数元素/index.html","6c9a2a30793cbee8bb1c71003f875b3f"],["/2021/03/16/LeetCode之汉明距离/index.html","05d2b222f8196427c9d405da7eb3172a"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","160e1c0ecf4fc349e5428ef11ec528ed"],["/2021/03/18/LeetCode之两数之和/index.html","ddb0ad6e9e6c4db1a6f5b26394fd45e5"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","508c749660fe55f71e6b3c78c336257b"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","745e011a28f18a2e66a5fd79bf7e9c30"],["/2021/03/21/LeetCode之有效的括号/index.html","c4f688e89cae2410ba7e155cfc2f0d03"],["/2021/03/22/LeetCode之移动零/index.html","a6f09e701d3f6719217c64a1a0306066"],["/2021/03/23/LeetCode之爬楼梯/index.html","18cff08a78f32620828ca1bd784d884a"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","6f5a2dfd495c3c7f4ddbbbcf88b6772e"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","270db7ee32c78eb1c939c374512c7805"],["/2021/03/26/LeetCode之最大子序和/index.html","b3069ab9985b7d06d08e5fb6a5f7c951"],["/2021/03/27/LeetCode之子集/index.html","0005d7a88d29b7bae84ceb8a9cd59c3d"],["/2021/03/28/LeetCode之合并二叉树/index.html","d6087b8c93fe69f07fb056afc51baa47"],["/2021/03/29/LeetCode之翻转二叉树/index.html","f65513f60868391649479b6bac976820"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","81cd8fd4ab2d39c41a47c0e29e7383b3"],["/2021/03/31/LeetCode之翻转链表/index.html","074af8ad05859fed002abdcb6ab51115"],["/2021/04/01/LeetCode之相交链表/index.html","50727ca87afef475d570bc7227bffd2c"],["/2021/04/02/LeetCode之最小栈/index.html","a5e4cb23b151c434569ea8c919e25e6c"],["/2021/04/03/LeetCode之对称二叉树/index.html","42de2cdfd8acc36e5d44bb3c3044149e"],["/2021/04/04/LeetCode之环形链表/index.html","856c382350e63bf9a572457996cc0b3a"],["/2021/04/05/LeetCode之二叉树的直径/index.html","1fab198aa6e6bf06072d14a80c152c65"],["/2021/04/06/LeetCode之回文链表/index.html","34950d426003b34da4f18e64bc050a62"],["/2021/04/07/LeetCode之比特位计数/index.html","de0864dcd8b82cc49b649fa46ea493cb"],["/2021/04/08/LeetCode之全排列/index.html","1480f547772e7eb0144bf919a0a564b5"],["/2021/04/09/LeetCode之括号的生成/index.html","9e0295e79bca4b6ba801ccfcd990b20c"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","19cd055abcad930578fea727a8175bcf"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","6db38aa939ccbf93a2667d932fbe000d"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","73d1588e6162aa69cac3eb27aea90932"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","37ad24005e2116cb4cc568ba3127629a"],["/2021/04/14/Mybatis/index.html","861645e49aa3afd77ee3a8e2c99bbb61"],["/2021/04/15/Spring-1/index.html","399d32d20a216c68391ac75093f3a34e"],["/2021/04/25/Spring-2/index.html","1ebfdd2e4f9fe9133ffa28023c9dca43"],["/2021/04/27/SpringMVC-1/index.html","48ae116faa0ed43efe053b77874bb451"],["/2021/04/29/SpringMVC-2/index.html","b9478d7b18c6e284fb19849e7ca79355"],["/2021/05/03/冒泡排序/index.html","94c163a095a63a0d310b8591f36ceaee"],["/2021/05/08/选择排序/index.html","5796c4b453e301fc1ae359a19108966b"],["/2021/05/12/插入排序/index.html","c9871251f6e9bfb23e6133413d9afe19"],["/2021/05/15/快速排序/index.html","5fb7e90309529fc5c9c19cd6faccf177"],["/2021/05/19/基数排序/index.html","8ebc8b6694c3458c41c09530b4be5495"],["/2021/05/20/哈希排序/index.html","e47eecb30eaba50725d44460dd551c8a"],["/2021/05/21/归并排序/index.html","1726587101f3a9393b9190af93a5bd2a"],["/2021/05/22/二分查找/index.html","87495ca146374a7be0e6672b6020a12d"],["/2021/05/26/差值查找/index.html","cfd91b28b34bfdaaebb9735c81dbbfd5"],["/2022/01/12/高精度大整数计算/index.html","8241421f1bda76ee784d8dc644ce7639"],["/2022/01/22/前缀和/index.html","a7723b5d47311439391a8eb2738566cd"],["/2022/01/23/差分/index.html","e9800fbe6a68d1f36ed7e81895687bf3"],["/2022/04/04/MyBatisPlus/index.html","e853a64d332fa266febcd60751ae7c0d"],["/2022/08/17/jQuery/index.html","e4a830a741b13fc9d56744d9709c6308"],["/2022/08/19/JavaScript/index.html","bdf1ec8b4b3f674c95be322b07822cd9"],["/2022/08/22/Ajax/index.html","ffacadcfe9dd10732663ad9d64f3235f"],["/2022/08/23/Promise/index.html","b91c31e046b291600c7468142dc6fa05"],["/2022/08/24/Axios/index.html","be345f0e375a4262ef98ec61b0e24fa4"],["/2022/08/25/H5本地存储/index.html","1a97b46c1b4ced4a242426556529939c"],["/2022/08/26/mock/index.html","25c32ba56dac1be280a8b1264936ef6f"],["/2022/08/31/VueJs/index.html","56ef9518f25e9055e6069846a1b03e63"],["/2022/09/01/vue组件化/index.html","9a2a2d94ae0d995a202e3bf0187ea8ef"],["/2022/09/04/VueCLI/index.html","84803b9e3cc3c99fbf6c1b4fc69795c9"],["/2022/09/07/vue实现动画/index.html","5efd5a12c1f08f5907d502e1398bc289"],["/2022/09/09/Vue响应式方法/index.html","54ce2ce5749ac995ca2ee04f3763a2d9"],["/2022/09/10/Vue异步请求/index.html","863a05a721ef0b40d9326e671fd55b7d"],["/2022/09/11/vue-Router/index.html","b96edd58a0288301fe5784d46993d7d5"],["/2022/09/13/Vuex/index.html","3f406cc814c1238c8c713232773cb14a"],["/2022/09/15/SpringBoot/index.html","4d2e5a2f186860384d111ab35cf25966"],["/2022/09/16/SpringBoot配置FastJson/index.html","a9a074ea1d7eeb92b091e0a7526d235d"],["/2022/09/19/SpringBoot参数校验/index.html","23e9efcf47b5153048c7aaf5d3366a80"],["/2022/09/20/SpringBoot的异常处理/index.html","d9d0b6eb8199f2717af406bd357600ea"],["/2022/09/21/SpringBoot统一响应处理/index.html","c0c87aadd7109572da96b008e61575fc"],["/2022/09/28/Linux/index.html","30f124f60acf92645c5fce67cc25e825"],["/2022/10/02/redis基础/index.html","e3599833558832d0ad56a4bf91075f54"],["/2022/10/03/Redis缓存/index.html","f1e7cf50f4c11fc70cd05046ef7d2ee5"],["/2022/10/04/redis缓存穿透/index.html","75310f5130e7028b9004f629d67ecfcc"],["/2022/10/13/Redis缓存击穿/index.html","417f691cad362f6b7d001c4137bb1849"],["/2022/10/14/Redis缓存雪崩/index.html","602a92b8c7e7417744d1f72fbe228121"],["/2022/10/17/Redis集群/index.html","aab557d1c3c7fd16598453f959be64de"],["/2022/10/18/Redis哨兵模式/index.html","3c0157a165e82acdb6dd713e6ce41b15"],["/2022/10/19/Redis主从复制/index.html","9aadfb793c27f3d39234a93e00cc6fa5"],["/2022/11/03/Spring-Security/index.html","85bae1f2db14937ba4d1d7827bb12699"],["/2022/11/08/SpringBoot日志/index.html","50f2e850d8a79f367768e1deed9c8762"],["/2022/11/11/Swagger2/index.html","72dd852dfaee893504b1dfc9e8b7dd3b"],["/2022/11/21/Nginx-一/index.html","5e0e6d26683ae99c375e7f29b145a8bc"],["/2022/11/23/Nginx-二-代理服务/index.html","6ffe133a9f36d3b8053e0bbc5b014ee9"],["/2022/11/24/nginx-三-负载均衡/index.html","4ed8870dcd510cafafe9135c8ea63baf"],["/2022/11/26/nginx-四-缓存集成/index.html","9e5fb5a7f8a89f936f9e7e2aa2b9fa4a"],["/2022/11/28/nginx-五-动静分离/index.html","925c2da0cf046dc130499f56191ffbf1"],["/2022/11/29/nginx-六-制作下载站点/index.html","8fa3cb65ec75239369b1c3ec4095a124"],["/2022/12/06/docker基础/index.html","584ac6a43e310ac6abc24f32ee0cdac2"],["/2022/12/09/Docker高级/index.html","17cb745bc82b9c3d347a7d4ecb8ac041"],["/2023/01/04/MongoDB/index.html","d3de80ff330077ab4e85d2f791a82160"],["/2023/02/05/消息队列/index.html","73e6acd8145042f34d55fc06b4296f58"],["/2023/02/12/RabbitMQ集群/index.html","418f279263fb524c3b0aac94bac29bab"],["/2023/03/10/CICD/index.html","95245844066b8170e26f5ed0b0c7e969"],["/2023/03/11/ElasticSearch/index.html","2cfbd69aeaeb3dd32132fcefe1f42aaf"],["/2023/03/12/ELK日志平台搭建/index.html","15e229c1c3f70a360c04f0885087c9a6"],["/2023/03/13/NIO/index.html","2270288af187e4d0b1f77d92563afeeb"],["/2023/03/14/Netty/index.html","b59d55966336dc940fb1c8049a949c72"],["/2023/03/15/SpringCloud/index.html","639f5cc0040375a5a259844bd13497eb"],["/2023/03/17/分布式系统认证/index.html","c8c5a2abadcf3bb3f522641f09f3990e"],["/2023/03/19/JVM概述/index.html","25a233a502055e3f2b0c1eb96d758b81"],["/2023/03/23/类的加载过程/index.html","8dd1c46afbc6c15951d78a0577bb1ea2"],["/2023/03/28/对象的实例化/index.html","dde8386772d1ce73902425af8526e0de"],["/2023/04/01/运行时数据区/index.html","88af6981bc0d1e6af2048ab9d6e86f73"],["/2023/04/04/执行引擎/index.html","6cc7976c382376aa7283d94eda36d294"],["/2023/04/06/对象引用/index.html","df8fa9a82e3321b4c9e6b80a96c177d0"],["/2023/04/09/垃圾回收/index.html","6266e7490c209aff5e1e926c06ab1a89"],["/2023/04/11/垃圾回收器/index.html","e8fb5e1227aa57f390a0bc85d565604a"],["/404.html","385ae240206a534d9d91511323740b20"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","e63a7c330fb4de6acc90ad3a18f3f44a"],["/archives/2021/02/index.html","6184402fa26f7f37a8536cb0ef5755f7"],["/archives/2021/03/index.html","aa9e329cbb1bd6beb0aefe1a2914cb33"],["/archives/2021/03/page/2/index.html","89bdbc493f7b4ff507143ea9495c0e56"],["/archives/2021/03/page/3/index.html","96540c9db0391f6e2722348ad8c192f6"],["/archives/2021/04/index.html","b14fea04af90c5aef791df209f03b768"],["/archives/2021/04/page/2/index.html","4e718110026420b493bf6e50ff492bc1"],["/archives/2021/05/index.html","cb1a89a9d25a4718a5c06d44c1e74532"],["/archives/2021/index.html","eabe695b919de2623e690259b48ef528"],["/archives/2021/page/2/index.html","8f7eec00983c1afd847a989de55c17d6"],["/archives/2021/page/3/index.html","019177bed9658a7677f152c652679de7"],["/archives/2021/page/4/index.html","b8779dd738d15729f17af141dc16585d"],["/archives/2021/page/5/index.html","a7525dfc396b42e04d366d3d186d5179"],["/archives/2021/page/6/index.html","c75deff9a49b01a8a20ee85103b6dab4"],["/archives/2021/page/7/index.html","933a6d5f46a9fc26c4ffc8332c619be0"],["/archives/2022/01/index.html","f69804500b9e2a5b97fd64668fd5500a"],["/archives/2022/04/index.html","7240825bf6b28ab16d7d5ad7dea4f7a2"],["/archives/2022/08/index.html","ef6aaa9ae1ae2fd3e476a45622c72432"],["/archives/2022/09/index.html","9c67303f75b8afc19845e1e270baed95"],["/archives/2022/09/page/2/index.html","d66d20e54f1519232d87d04d319f868f"],["/archives/2022/10/index.html","24e951991b32e14ab05fee5224003bb2"],["/archives/2022/11/index.html","2e8ab08d222bdb9c2eeafe7a41d8ba4e"],["/archives/2022/12/index.html","a0de5fe64b230ad785907cc5a4a5ea29"],["/archives/2022/index.html","21d13851590f1fb89a14831cbe5b129c"],["/archives/2022/page/2/index.html","1f5444a18223c3bc132964e2bd3e7648"],["/archives/2022/page/3/index.html","91646128cf6cccd065419b3e4ee807b9"],["/archives/2022/page/4/index.html","cbef80145e484c7bdfd2e5638eb5256d"],["/archives/2022/page/5/index.html","2b85a96730f113f7adbc484c9aac7e4c"],["/archives/2023/01/index.html","909dfbb0d83578725e98a320571e663d"],["/archives/2023/02/index.html","bf9654ce1bef7b8589c31f1d5645b00c"],["/archives/2023/03/index.html","ceb4c26043e03441fda3f19c8568c9eb"],["/archives/2023/04/index.html","54d19af1995b17e128cf863a86a8159e"],["/archives/2023/index.html","2b07658fbc8ef44ccfebbae482569e9d"],["/archives/2023/page/2/index.html","c6a9c226591bff06383487897105a021"],["/archives/index.html","718998815e4a4a280583e46434c2faed"],["/archives/page/10/index.html","ac9c8aefff8afc5e88573d26215c4dcb"],["/archives/page/11/index.html","82d833fdba4f7ab6e851789f0bf84b64"],["/archives/page/12/index.html","be6df99cdf57bfbd4738804d762cd6b2"],["/archives/page/13/index.html","f1faeae3c2487f8e9ae68e157c5fdabb"],["/archives/page/2/index.html","00861c493fbf8721f3fd0253cb66a54b"],["/archives/page/3/index.html","c4164d44150e012d50289d5c4552a3de"],["/archives/page/4/index.html","27c5d733ff6a7e304b332496785f5a45"],["/archives/page/5/index.html","aca7a92c094edbac411352dfc5a54849"],["/archives/page/6/index.html","2f70ede7778ebd707fe7839f91bd3b9e"],["/archives/page/7/index.html","f184a5ab20d2244ffc4f293b6f45537f"],["/archives/page/8/index.html","76aa3446e2158cf7af23231b3ac6445d"],["/archives/page/9/index.html","ab646de1bd9c48e6eb9513b8bad8411f"],["/categories/CICD/index.html","d7cd98584c4ba6f42109041b6d5313c6"],["/categories/Docker/index.html","a64bb4b62996916102f0fc71a3aef705"],["/categories/ELK/index.html","53b520b2be2148e7cf4f3fb60c2b40f5"],["/categories/ElasticSearch/index.html","0ebbc7d477212a2dc725ae2de08bdca3"],["/categories/JVM/index.html","cc3ef537d421c091f012b6169287992f"],["/categories/LeetCode/index.html","5db8e7b029b36a066a1cd570c47855e8"],["/categories/LeetCode/page/2/index.html","bfd5375463d632b375993218074a54b9"],["/categories/LeetCode/page/3/index.html","86c12777d5b5098851b516be537ed629"],["/categories/Linux/index.html","313242cce783a3f5d71d657d0215b276"],["/categories/NIO/index.html","5e1964612473507206eabcf5757dcece"],["/categories/Netty/index.html","3922a7165dc31b9e9130a3c4fb67c175"],["/categories/Nginx/index.html","10469224bf59ed797d1071bf4c279fd4"],["/categories/Redis/index.html","abff8821884ba29253ab87703fe92392"],["/categories/SSM/index.html","b66ce32686772069c33befe8d073438a"],["/categories/Spring-Security/index.html","c358fa87b460ac40ccd313125ab530f3"],["/categories/SpringCloud/index.html","957d964ecec846fd188644dc0d732a6c"],["/categories/Spring框架/index.html","d2f198e57eb97a3aae34fca352125e4d"],["/categories/Spring框架/日志/index.html","0ad9a90b7a459b4348fdd2681942ad49"],["/categories/Swagger/index.html","d3000fdbb6e90db9324950a8aa1ffaf5"],["/categories/Vue/index.html","979b29ecd82d1b2bc4f67e5cc1c9d416"],["/categories/index.html","b3373c776f8b35090e0def50f57a3584"],["/categories/分布式权限认证/index.html","05e547431a5ba7304ce4d8ad9dc4b468"],["/categories/前端/index.html","1de742fb41693f93c97771338e0aaa38"],["/categories/博客/index.html","16e8e1f5b2bb29d0cbd2e5b261163b2e"],["/categories/学习路线/index.html","8286f9c63d240017be007eda595e366f"],["/categories/工具/index.html","3fd2fb05a2e0f099657f6504b06cd059"],["/categories/数据库/index.html","993378ed8a3a3295a8263dcfdb631801"],["/categories/消息队列/index.html","14af2239df1428be7dfa7d3452f52de1"],["/categories/笔记/index.html","da22041af2b62f592ddfb1e65d779aa7"],["/categories/算法/index.html","7a6dd2d4d16ffb6744cee21b2277c772"],["/categories/算法/page/2/index.html","b5772cb7dc5d6133da0bafad0dbf6210"],["/categories/设计模式/index.html","c8ce04ac3d80e725f024b42640b01f3f"],["/categories/设计模式/page/2/index.html","afd63808077a6efb27292d5bdc1c992a"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","aa698aae8566421b5690df1c579abf0b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","3b55feef4eb04bc17ccf1c90e5999fc8"],["/messageboard/index.html","f3b248de6833facdf4725c4b56efb526"],["/page/10/index.html","ff531bb46cb16ab95879ad19c60da2cb"],["/page/11/index.html","9afa0b9b69a90add83b303fa7664f62c"],["/page/12/index.html","2f54bb6a3e2893256f90b0bc007015bc"],["/page/13/index.html","8c09cd02131fd3b1eb7a9a636d911934"],["/page/2/index.html","f9ed3c9eeb1f55870ab7ce4ea3393d7f"],["/page/3/index.html","ce29e6ef8612d2eb52ce3f75afe4ec26"],["/page/4/index.html","055456fcb9fa7bf92a0400e882d6a306"],["/page/5/index.html","af4fe40890aa1b56d13a1fee2a8180ed"],["/page/6/index.html","dc9043abe7a879b93f88cc307475b25e"],["/page/7/index.html","afdd3ce40978354f6a26dd879799fe6e"],["/page/8/index.html","99fd35e54ab1a376dd6369900da8d11c"],["/page/9/index.html","99ff027546ab8e4ca02113530552b417"],["/sw-register.js","a18c154fc0e7dae383d690fe11849bf7"],["/tags/Ajax/index.html","2c9d6eb6f7c91edaf08237299660d259"],["/tags/Axios/index.html","c23e6f1e228a1848cdee22fe37fb7892"],["/tags/CICD/index.html","40aa11922a6f7a902d69fd5a64a02744"],["/tags/Docker/index.html","f06276df69977d7eefee1e4b617b1d7f"],["/tags/ELK/index.html","86e4fc2bdc4fcfefb0ffbce49a6f32b2"],["/tags/ElasticSearch/index.html","13b734b382b28df5a8ad2cc84f63afff"],["/tags/H5/index.html","e11194f2fca2c777a4e6ff501918f9eb"],["/tags/JVM/index.html","195d85ffee23f7e0dbc27952a0cb32e5"],["/tags/JVM内存模型/index.html","1c22deb5ba8f2fac591e7226c1cd0cea"],["/tags/JVM执行引擎/index.html","9f5719a1d5d5624c84860ab246b3f4da"],["/tags/JavaScript/index.html","a4ba93ef528ecdfb53b05534bad7809c"],["/tags/Kibana/index.html","c9e4197d1cf52a7a6fe26591f0c74bfa"],["/tags/LeetCode/index.html","32f864dc0f75a082decbf29dea83b951"],["/tags/LeetCode/page/2/index.html","353336cfab0b4e34f2e999287a21560d"],["/tags/LeetCode/page/3/index.html","0c8ad73f663faf59fc500a9ae92184cd"],["/tags/Linux/index.html","aa7eab8755d4e4bbe620c374d5d125cf"],["/tags/Logstash/index.html","a26a72a41880b18280f06a75e48254db"],["/tags/Mock/index.html","6ba5857dbf04a702b574169125f37855"],["/tags/MongoDB/index.html","8bdf13bd05191e2ae52846c47d31f2e7"],["/tags/Mybatis/index.html","846ef8273bfb4c43abb29a3192896b4a"],["/tags/MybatisPlus/index.html","fabce377ad17209aa0f08a5df5768dd9"],["/tags/NIO/index.html","10a106a5277475369ecbe0f90300298d"],["/tags/Netty/index.html","c233814728a5027225bab2469d325019"],["/tags/Nginx/index.html","84b397b2a454c680834ad269dc3ed263"],["/tags/Promise/index.html","767fde079f0d06973dde414e78b88107"],["/tags/RabbitMQ/index.html","c022171a5cb5312b302d3100ad5e711c"],["/tags/Redis/index.html","76dae1651254c946d4e7bcf6e855a2aa"],["/tags/SSM/index.html","e042ebf363c077ca9112bcfe790cb349"],["/tags/Spring-Security/index.html","a2a1507605a4897ac85540843b8bf567"],["/tags/Spring/index.html","abc4600cabfc9e843d2681a5fece692e"],["/tags/SpringBoot/index.html","2412f3bf0635c62b9bd8f808bd44556b"],["/tags/SpringCloud/index.html","128751618fb042f9d26749eb9f0ab76f"],["/tags/SpringMVC/index.html","c40bb5112c202d20b9fa84548b37840c"],["/tags/Swagger/index.html","c5ea9b55d5106535ff8fbd8560cf3b96"],["/tags/git/index.html","0c9b287cfd419b2e48a830c3a821fa6c"],["/tags/hexo/index.html","635f22024031921c49cf9fbdcfd312db"],["/tags/index.html","d74f96d4fed61f75d54fad9c7d534967"],["/tags/jQuery/index.html","c0e438d7c843e2e95adf2e33f8fc4b61"],["/tags/java/index.html","8df943ff8eada08a2a7cfb892bdc08c9"],["/tags/markdown/index.html","659bc346066dc83845a87d2ebbb963ad"],["/tags/mysql-数据类型/index.html","c4821ebb439a64fddc18b2da05ed00dd"],["/tags/mysql/index.html","15b103004c419969ed9210cc577e3a79"],["/tags/noSQL/index.html","f8607fb64fbb9780d0758a9e5babdb1b"],["/tags/typora/index.html","27c7426468b6bf07308c76c0c0c84979"],["/tags/vue/index.html","f2e758a64013ba8065b4e2243f801d66"],["/tags/享元模式/index.html","bc23f0409e1d2702d3af7b618a35eace"],["/tags/代理模式/index.html","1afbe38fd9a1c71c16b3b8bf78f2b84d"],["/tags/分布式/index.html","4bcbc5db8207a882689e7b262ef9d69e"],["/tags/分布式系统/index.html","074a53a4caa7df3872b16fcd200a8a94"],["/tags/前端/index.html","54804ae0289714382c119b337b821cf6"],["/tags/前端/page/2/index.html","930f510a210e9b9b4097130a97d79b29"],["/tags/博客/index.html","13f5759db26cf5db64e866f2674c74ff"],["/tags/后端/index.html","933b63e5c0e804ce68684b29adbf2353"],["/tags/外观模式/index.html","6c27430fed970cbd03fc6bbd9bfcb67b"],["/tags/容器技术/index.html","2b49fa98e7d9ab323586a78bb9a1f396"],["/tags/工厂方法/index.html","b0f74335f10d814091fc88859f62902c"],["/tags/微服务/index.html","fd07e8988cdc8d0f95ec92ddcdc3d725"],["/tags/抽象工厂/index.html","baf42dc94fc9e4f6fc33a2ee41ab992a"],["/tags/持续集成持续部署/index.html","7cacbf0ef54b371ec7b1fee66030eff9"],["/tags/排序/index.html","f074349fbd6e3e39baf6881ab4319ebd"],["/tags/搜索引擎/index.html","29a1273a3de84ab70ac86f45586c4c93"],["/tags/数据库/index.html","1c1f8c2e0214eb126e1efa3e3682dcb6"],["/tags/日志/index.html","f42354fce967d09120afdbbd00e8d1d7"],["/tags/服务器/index.html","3c536122e6f991a1d9fb11fab7cafeb8"],["/tags/权限认证/index.html","34a57451ebef9e9c8fd2d5f530f2a279"],["/tags/查找/index.html","4c3d2bae987c242305ffe3c93786aed6"],["/tags/桥接模式/index.html","f5985fdee62bc6d2d92e0652091237d7"],["/tags/模板方法模式/index.html","87c53d0bcbc125c036b20f379a680431"],["/tags/消息队列/index.html","c84665192bc3f7e36d66aa87316463f9"],["/tags/版本控制/index.html","148cf498c250ab0f5027a1dbc85191c4"],["/tags/策略模式/index.html","056eb9282532fa7cdd5b1cd37a2fbac5"],["/tags/简单工厂/index.html","2dd7c2a8a050d1a97c8f60e5263d58ef"],["/tags/算法/index.html","c4542f53bedf4cae8df9db795a696022"],["/tags/算法/page/2/index.html","e4b45b7bedce2699d37f8b06bb9e873d"],["/tags/组件化/index.html","85713803c1cbf7f89cabbdc96c81eda8"],["/tags/缓存/index.html","0e082a48110050e0aa7217512e752016"],["/tags/观察者模式/index.html","b70a7027c6054468b7ef4aad33229670"],["/tags/设计模式/index.html","087e91216175a4cce9c6699d65867e19"],["/tags/设计模式/page/2/index.html","75b12b98ce675301565233b8313820af"],["/tags/适配器模式/index.html","e534250377f62fa6fdd65ece5206d569"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
