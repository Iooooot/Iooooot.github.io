/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","de2626a4eae9b9d7d6bcd4911eb883a7"],["/2021/02/22/博客的搭建/index.html","b50e3e5bef23a3a99c95e171962fe40a"],["/2021/02/23/如何使用markdown/index.html","185989afb3aef5ae18c9eaaed837d120"],["/2021/02/24/mysql命令大全/index.html","66447e6e17ff9f08580ba01ef3fc5c82"],["/2021/02/24/mysql数据类型/index.html","0310c63d6884d9042dcb88046b71421d"],["/2021/02/25/Git的介绍与简单使用/index.html","390008c4f34d9d99d211dd20233d05d1"],["/2021/02/27/简单工厂模式/index.html","988cddea412a95407d3f343951f790b5"],["/2021/03/01/工厂方法模式/index.html","e0a39d2f314595975c07a1d43a0f58c7"],["/2021/03/02/抽象工厂模式/index.html","3a50168f84cab1b84731b2e74dc3a10d"],["/2021/03/03/单例模式/index.html","08d452da529c30e392b69a75252182ff"],["/2021/03/04/观察者模式/index.html","b8adea80078b059822f4271258715c8b"],["/2021/03/05/适配器模式/index.html","c9d690a7a0b0e63b1ba0968bb7e9e305"],["/2021/03/06/模板方法模式/index.html","6aeb90993472885993255154bc0bed17"],["/2021/03/09/代理模式/index.html","96b58e19897fb1f795a828f6e2cee3b6"],["/2021/03/11/享元模式/index.html","3346cd35c4e096db8ab47f7ffb565ad5"],["/2021/03/12/外观模式/index.html","753546babc0dea9b8154e100890601c1"],["/2021/03/13/策略模式/index.html","acf3101fc2aba382d62048c005f7c943"],["/2021/03/14/桥接/index.html","ad5b69a44659ae80c7bd4be7d785d45f"],["/2021/03/15/LeetCode-多数元素/index.html","bc3b21d80a486ac7ff0b4d8464b4c49f"],["/2021/03/16/LeetCode之汉明距离/index.html","2e3f7f95d8586c7e2e759b8b0de66264"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","de4a34086e71168bfc3c208d41f17cc4"],["/2021/03/18/LeetCode之两数之和/index.html","8ef70ce37c4eaae25ca626fde2e46e6a"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","3827b6609401e557a50d919586f8c425"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","1d580506563046bad82a7072b461aeb5"],["/2021/03/21/LeetCode之有效的括号/index.html","3beb8d0771fec7f73da048740a705a0a"],["/2021/03/22/LeetCode之移动零/index.html","72e55fdd06b7cfcee048ead364cbbf2b"],["/2021/03/23/LeetCode之爬楼梯/index.html","a2aed44345932b647931eaaa6b46fb65"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","177d3bf05478ffa87814c4da78d3e0c8"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","a941eddf3419dec0a58e6242ebbc64c8"],["/2021/03/26/LeetCode之最大子序和/index.html","0380ec8361d4a85b977096b39b45314f"],["/2021/03/27/LeetCode之子集/index.html","b249a63cf6931dcf4b66e4844b3fbc13"],["/2021/03/28/LeetCode之合并二叉树/index.html","7a0055b51554a151e23df281b3eaaaef"],["/2021/03/29/LeetCode之翻转二叉树/index.html","71c9fc2a1a22de4af09af03b2308de19"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","ee0ae04f609f6b7c475388a71a2fbf90"],["/2021/03/31/LeetCode之翻转链表/index.html","d2a90539a57ce260202a97852a5328ed"],["/2021/04/01/LeetCode之相交链表/index.html","3cd5ec7f71bcf63221f87782be6e071e"],["/2021/04/02/LeetCode之最小栈/index.html","8a72f28fffc91f89b405aac17afed37d"],["/2021/04/03/LeetCode之对称二叉树/index.html","b4d48d105e9a0671194455be384cf63d"],["/2021/04/04/LeetCode之环形链表/index.html","eb73772d2f5cfdc3bb6d2b7ab22a933d"],["/2021/04/05/LeetCode之二叉树的直径/index.html","e93729ab743a7deb47d191af0eb83147"],["/2021/04/06/LeetCode之回文链表/index.html","3cd6ec9a38cb913c9e9cd55152d85afc"],["/2021/04/07/LeetCode之比特位计数/index.html","455709b697ad84fdb1e144f339a1de43"],["/2021/04/08/LeetCode之全排列/index.html","ada67da715ae50ca84413604ef6f6b84"],["/2021/04/09/LeetCode之括号的生成/index.html","5684cac007d14760e7ac425923c3a13a"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","d4539ab7ede4527b2ad074013fff443d"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","52d1b51d850bac0fd73103c9e63b3dcf"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","89922f8c3c7929307af56be31ac43db7"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","7124f891bf02182a729131d934cdd08b"],["/2021/04/14/Mybatis/index.html","6e5dd6e817b0e88cf481b825396cd321"],["/2021/04/15/Spring-1/index.html","c857013634fe2641a42b34752ecd4ce9"],["/2021/04/25/Spring-2/index.html","946efca844cff278d703d55146870938"],["/2021/04/27/SpringMVC-1/index.html","2dd4ead4398d3e279cbeccdc45b19934"],["/2021/04/29/SpringMVC-2/index.html","59145cf532a79222f5718e6db77fbfa2"],["/2021/05/03/冒泡排序/index.html","248f2da68b76c8e4431ddb2995218bf8"],["/2021/05/08/选择排序/index.html","cf7f64ef7b47e8265c90fd5209f8b49a"],["/2021/05/12/插入排序/index.html","fd05d94a605312e10975f46ccc4a8eff"],["/2021/05/15/快速排序/index.html","dec738f2806f13e10eec174e350414f5"],["/2021/05/19/基数排序/index.html","ed740c589c1a79ac5af9354d97ca825e"],["/2021/05/20/哈希排序/index.html","83300946e61391cd7e7807a5162d0ddb"],["/2021/05/21/归并排序/index.html","9330b54a386a98551d37a56db1b11336"],["/2021/05/22/二分查找/index.html","ec5eac4aca4236967380eca59574daca"],["/2021/05/26/差值查找/index.html","f7e45131aa0a8a933022a44ba30c4d8b"],["/2022/01/12/高精度大整数计算/index.html","1cc951652b26a16aa32c5c5b4ba5c015"],["/2022/01/22/前缀和/index.html","496f5341b7ac64815c8dcbaf8b75ee53"],["/2022/01/23/差分/index.html","16eba9dd460ea05c3bab4454e63ae342"],["/2022/04/04/MyBatisPlus/index.html","66a116b71949873f3132dd701c05779d"],["/2022/08/17/jQuery/index.html","323e08dbe1f0233ab1cb766832068d06"],["/2022/08/19/JavaScript/index.html","5604253352b6c278e3d248e20fcca152"],["/2022/08/22/Ajax/index.html","a180b40bbcc366d87e3c43cb8a2f1774"],["/2022/08/23/Promise/index.html","b650da2cd25c08c3e6bf34930fcf1b7e"],["/2022/08/24/Axios/index.html","055e9f5e9f2725fed0716a2074cb9cb5"],["/2022/08/25/H5本地存储/index.html","5805d365f19dbe142b4cb0eb26b5c8d8"],["/2022/08/26/mock/index.html","c0f66c73e619aa630bdb205a0b58d6c9"],["/2022/08/31/VueJs/index.html","d9dd9898781f6cca845ce03906463878"],["/2022/09/01/vue组件化/index.html","41a5829de45bde5b91b5fc9a53f060f6"],["/2022/09/04/VueCLI/index.html","a1084d6173af7e11b65f79df7b78dcff"],["/2022/09/07/vue实现动画/index.html","ee748063e2ead2f6dac9f0778ee6633a"],["/2022/09/09/Vue响应式方法/index.html","68ea41b905ff80a09ccf254d46f3af3e"],["/2022/09/10/Vue异步请求/index.html","ec9920b181a06f2dfe958f44897e5e47"],["/2022/09/11/vue-Router/index.html","7398ea66c86e90207c542720e79e845f"],["/2022/09/13/Vuex/index.html","a26c3cb43fac26d483af9cf378e9c5f0"],["/2022/09/15/SpringBoot/index.html","1f4ef63ae389ac710e46d8f96dcd9397"],["/2022/09/16/SpringBoot配置FastJson/index.html","9c8252edb1506dfe32a4fccf965bd87f"],["/2022/09/19/SpringBoot参数校验/index.html","d2995c1d97b1130b4a54c322e0eb8d32"],["/2022/09/20/SpringBoot的异常处理/index.html","ce6a57b30558049ec4584bec99596df6"],["/2022/09/21/SpringBoot统一响应处理/index.html","94b73a256ceb95ee4e33d0a4d6ef20f7"],["/2022/09/28/Linux/index.html","22e2859f4322d82202acaac7c7bd217f"],["/2022/10/02/redis基础/index.html","01516550193da5cf6b2a877d73e47349"],["/2022/10/03/Redis缓存/index.html","c39ac2def00b41e377d8d98a0582abd5"],["/2022/10/04/redis缓存穿透/index.html","c757a4a724d6107c94ef41ad3af74572"],["/2022/10/13/Redis缓存击穿/index.html","5c631da9f5b36945aae9f6196fc118fd"],["/2022/10/14/Redis缓存雪崩/index.html","656a43c3e9ece917a401ea2542a4de1a"],["/2022/10/17/Redis集群/index.html","fb1c96dec4a962ce8d0dbe863c9e7d88"],["/2022/10/18/Redis哨兵模式/index.html","b6d05fd2b5803fcc98720bb07043193b"],["/2022/10/19/Redis主从复制/index.html","e494b64229847c32b0a01f35cd45b770"],["/2022/11/03/Spring-Security/index.html","6a13db4d479386e6eab4b45ae0a9b719"],["/2022/11/08/SpringBoot日志/index.html","8549d50464e40565fa0221bde9787fb1"],["/2022/11/11/Swagger2/index.html","a81133f0d2c2e918a6c89071f1112020"],["/2022/11/21/Nginx-一/index.html","d01258085477b001f3e9087496885d37"],["/2022/11/23/Nginx-二-代理服务/index.html","823856ccc1d1367154efa907adf3ba71"],["/2022/11/24/nginx-三-负载均衡/index.html","e924da795696165e32e4ef12f926f50a"],["/2022/11/26/nginx-四-缓存集成/index.html","aeb939f2ab7899a37b681ea2447180ed"],["/2022/11/28/nginx-五-动静分离/index.html","fa0a5bb82b5a65a7f8ab3953b723c75b"],["/2022/11/29/nginx-六-制作下载站点/index.html","bb995f0c0c68df1b8f1533f0143d52ac"],["/2022/12/06/docker基础/index.html","db457663e35835f2703496bc4a643a51"],["/2022/12/09/Docker高级/index.html","3694020025cc2e01987928d8e1d0d052"],["/2023/01/04/MongoDB/index.html","634cdd5fbbd8e4f1f0b8ce14e7830fb7"],["/2023/02/05/消息队列/index.html","724995631b108118c2e906f64f0831c2"],["/2023/02/12/RabbitMQ集群/index.html","678c416678567e6ffa6b20705a7b968a"],["/2023/03/10/CICD/index.html","3c85bccd260cc83bd161cf737d3aabc1"],["/2023/03/11/ElasticSearch/index.html","d45956220b9ef69120499fef6594d623"],["/2023/03/12/ELK日志平台搭建/index.html","9398eea410193c1adab455e2202dbdab"],["/2023/03/13/NIO/index.html","5f8385bed799676c4168294932e3051a"],["/2023/03/14/Netty/index.html","77d9cabcf6edc750bd8f45156d0170ca"],["/2023/03/15/SpringCloud/index.html","1da38cddc191be942bf9602a20f27380"],["/2023/03/17/分布式系统认证/index.html","1ce56a1a8d368cb267bc8f87e494ea0c"],["/2023/03/19/JVM概述/index.html","4ad4063fa4a61b244802b674de27c554"],["/2023/03/23/类的加载过程/index.html","7c025aebeefb62b6253cc2bb3b6776b0"],["/2023/03/28/对象的实例化/index.html","7463faba395dcac605592fc13405e3da"],["/2023/04/01/运行时数据区/index.html","b6d112088b52303929555713725c7e83"],["/2023/04/04/执行引擎/index.html","588e2ba9ddff3020fcf2f7244a669e4a"],["/2023/04/06/对象引用/index.html","68de5236ea416a2fcae97e6ce8c093ea"],["/404.html","37113efb16965ce400066bb47a5aae38"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","3a016702be3bd94a9be99b255a4e6421"],["/archives/2021/02/index.html","19ce752531cc746c5e201db6eea34969"],["/archives/2021/03/index.html","100b84a97ba424e610230b24b2ab93b1"],["/archives/2021/03/page/2/index.html","b6ce4aa88aa496dd704deeee6d641407"],["/archives/2021/03/page/3/index.html","0d8a31f5cecbccd3a3c99266a28f3a4c"],["/archives/2021/04/index.html","7efa5febf00c8a26944b1921472c11dc"],["/archives/2021/04/page/2/index.html","32519f0e9e6ac1f83aba993d9155a4be"],["/archives/2021/05/index.html","40ac175ddfbe8a8ef5455541ea5f8eaf"],["/archives/2021/index.html","cc4f65491a3b06e311e850f70eb8e4b7"],["/archives/2021/page/2/index.html","7a41f13838b594bf0b8c7be6c4409eb1"],["/archives/2021/page/3/index.html","a5de90d4daa2b279dac64bb8a3fed5eb"],["/archives/2021/page/4/index.html","6e57514c0bb30a831b02f8795957a29a"],["/archives/2021/page/5/index.html","db3486ee5b2bb912f6bda215ebce707f"],["/archives/2021/page/6/index.html","4a122cc317dcc2c9a04896a4a455c1db"],["/archives/2021/page/7/index.html","c9d2120d2e2e0ad4fdb927cf016b77d5"],["/archives/2022/01/index.html","29cb5c1d9080b7a8c9bd597d376ad468"],["/archives/2022/04/index.html","44d99c6ab24f66a06486425068e3b42a"],["/archives/2022/08/index.html","000f21c539b182fe4cefb249eeab334c"],["/archives/2022/09/index.html","b1906ff134c050fa886f6e5dfdc00cd9"],["/archives/2022/09/page/2/index.html","86f9f97f0d9deb945665a374a45c9ebb"],["/archives/2022/10/index.html","b94351a98765bec8b656c26275dde8d6"],["/archives/2022/11/index.html","6fd54b47977892b1af8367aea630070b"],["/archives/2022/12/index.html","af24d91556002b10c6d4567ecc5cf034"],["/archives/2022/index.html","a7e9bae760959c2b7dfba23f2288473f"],["/archives/2022/page/2/index.html","ffa89877b8c1aa25452637a04ed7031a"],["/archives/2022/page/3/index.html","9f1ca9a00c76b4fd627929774df8e5f2"],["/archives/2022/page/4/index.html","14a7887710578e1962dba21745a022e1"],["/archives/2022/page/5/index.html","27fd8d337ff798bfe4df2274ee08b466"],["/archives/2023/01/index.html","b357868c835bf3a1e1f83d1f8b781e97"],["/archives/2023/02/index.html","3fe104327b4474a9753f147793c347bf"],["/archives/2023/03/index.html","d65f8b9105ea1c2b16e1aad9ed46ce98"],["/archives/2023/04/index.html","45de9a6a62a69f96cbfa7179658298e0"],["/archives/2023/index.html","a3956fe39eae90ec042df656c57ffe9d"],["/archives/2023/page/2/index.html","371000633cdd8b7ac4f806fe20a9f4e7"],["/archives/index.html","883cc327c82d587c53c01a313a6d478e"],["/archives/page/10/index.html","2af784ac14b3151aa6673ad1a2340fc1"],["/archives/page/11/index.html","46d014a882b25475cec713655b17149d"],["/archives/page/12/index.html","36946498600c838eba9c2369ff6e98c0"],["/archives/page/13/index.html","5110a6f90862623d3c3a0ae0ca221b37"],["/archives/page/2/index.html","56ec92a29eae841e1df4c9fe5e818338"],["/archives/page/3/index.html","c79ee9f8642dcfbb34c8b718189f7f25"],["/archives/page/4/index.html","fc51ba420159453eb87c2fd4f9d4702e"],["/archives/page/5/index.html","563231c04ee2c3995ea823c1d2285eb3"],["/archives/page/6/index.html","13be4267c92c36d75b108828ff56b2f9"],["/archives/page/7/index.html","f416cc125156b2035f945c6352149f31"],["/archives/page/8/index.html","9d2a71f659d80388b52bb947c7b66078"],["/archives/page/9/index.html","44f61f9053beed66181fbbbb16ce1ef5"],["/categories/CICD/index.html","eaee2c3a618090c6abee55269e114d28"],["/categories/Docker/index.html","d249d90ccb8494aebdd93e9cf1fbafde"],["/categories/ELK/index.html","6b522cf1cb21de78a9b88f9219a3ff2b"],["/categories/ElasticSearch/index.html","f260b3c8a0b1648f41dad12c6976c77c"],["/categories/JVM/index.html","f33eea6ef457c07a6ac6f00f9ba49ce6"],["/categories/LeetCode/index.html","b81457d2fff77934cc9732cf311563a6"],["/categories/LeetCode/page/2/index.html","8719b6d6e2db18eceb9a55558311d69a"],["/categories/LeetCode/page/3/index.html","1bbef015a8b7a7808a6f7874475f4e8b"],["/categories/Linux/index.html","410dd183c90a5850d2b36d7391f5c533"],["/categories/NIO/index.html","a3700a89288eb61019257321ebc049d8"],["/categories/Netty/index.html","b69645fbfdddc4c9031854468c7f3fe0"],["/categories/Nginx/index.html","d310bf5087d77e4b784ab058f7ecc305"],["/categories/Redis/index.html","bd1d2799017fbbf7a30bac99d9cb161b"],["/categories/SSM/index.html","1ac12105de42ed71924501915c3dfa73"],["/categories/Spring-Security/index.html","9a309c24a04c4e50bcb3af534c85a21f"],["/categories/SpringCloud/index.html","5a579ad41826059dd0b51ad0c2f90b88"],["/categories/Spring框架/index.html","c705a9886823a0b733097c3f73c2f845"],["/categories/Spring框架/日志/index.html","df12c1c6bf3b9bd00d915bf95be4da0e"],["/categories/Swagger/index.html","4437525f10cd83ce4470df12bcacedf0"],["/categories/Vue/index.html","32d47f10eca44997fed59f9678ca81b3"],["/categories/index.html","18d1f6c5ce7672393b7642af233e49e7"],["/categories/分布式权限认证/index.html","3e06c6f28395dcc6450b42a786dce9b7"],["/categories/前端/index.html","af5a15fec61520fda6ec71accfb81a15"],["/categories/博客/index.html","debeede99bcbd3561f15e9aee2d0ad43"],["/categories/学习路线/index.html","3b6b8fc5478a412480ddfdb1dec826e0"],["/categories/工具/index.html","462289e928a9911ad7e3f84915cd17a0"],["/categories/数据库/index.html","658b2855b96c94921517d9b3a62d791d"],["/categories/消息队列/index.html","e646b045d077e2322c8b404fb4240a3f"],["/categories/笔记/index.html","5dfb4d18f52a4216ad5c2dcf25d53a14"],["/categories/算法/index.html","849f786852900c1db9e6d3b0358b7bc0"],["/categories/算法/page/2/index.html","50826187ab44ef4167ba92ad1bac3d5b"],["/categories/设计模式/index.html","1e8a99185a9803e396128c237f1ec94f"],["/categories/设计模式/page/2/index.html","11caf2291996fd7249599ed75a362cf0"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","edd04fcd2b390fee9662b8434865784b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","c88ad768ea6b3e8783f4dd2c233453d6"],["/messageboard/index.html","dcaa2f604ff2fe0b188d5da7ad0fd2be"],["/page/10/index.html","90e0c809528fc26c34f785410207aa8d"],["/page/11/index.html","bb9c05ac0d2dd79163aae46603eb7fb1"],["/page/12/index.html","214f38b059436dd0ffeb7d236c1bdf05"],["/page/13/index.html","e5cfdd9e8a33e1155caa49849b8fc499"],["/page/2/index.html","161e60287250da8b477095d7bbdbdf24"],["/page/3/index.html","46600b2c0ebf7daea2b18c4294a91b6f"],["/page/4/index.html","9854c8f662b475f7cb7c0022815046bf"],["/page/5/index.html","864249b1c100fd20b9bd8558c00c5f16"],["/page/6/index.html","bd970a49d889ab71aa8bccc132db3d7e"],["/page/7/index.html","fe65f7f0470d3e489f0f47254f9caff4"],["/page/8/index.html","c95af8c1dcf21f04b91784579b626c3b"],["/page/9/index.html","6986168b9aa32ba3001280f2c9e04310"],["/sw-register.js","d9416ef9955cd38cd6c82ac75361c416"],["/tags/Ajax/index.html","1dbe317b6487f53955046b8c44772a9f"],["/tags/Axios/index.html","444daa21e4233868f55aa76f968f47c0"],["/tags/CICD/index.html","1062ffa8c05ba4d99fdb656f84419f10"],["/tags/Docker/index.html","ec64e43388bd1a2ae88c396fcd8760e9"],["/tags/ELK/index.html","50d7fc1fef9be35b68bd965e0f89f3e7"],["/tags/ElasticSearch/index.html","67581a3a34f6daad429462999f397308"],["/tags/H5/index.html","be07d324197d1185cb0b20d02cf7b0f7"],["/tags/JVM/index.html","a939207116a857242606241d70515009"],["/tags/JVM内存模型/index.html","f2258bc9d70a288b299237937f0027ae"],["/tags/JVM执行引擎/index.html","efb12811436b83e4018e77e5dd8d239e"],["/tags/JavaScript/index.html","f823dc4e3f21bd8b5bc6f5944003e4ae"],["/tags/Kibana/index.html","7d7185b68be3fa6318bacbca5010c6cb"],["/tags/LeetCode/index.html","33db0e9455c2eb78bcca7ebefd638890"],["/tags/LeetCode/page/2/index.html","fa8ecd4934647a40ff931f4aa88f0dbb"],["/tags/LeetCode/page/3/index.html","269c22661934da9750322feedfb79f22"],["/tags/Linux/index.html","d58fc18e760a336357d4bace3303784e"],["/tags/Logstash/index.html","52c16489c598cd9a75148e7314af0add"],["/tags/Mock/index.html","ecfa87ebf8a52ba173fee36e2de30c05"],["/tags/MongoDB/index.html","7d6c528af471dcc9e76a7f7d60af0812"],["/tags/Mybatis/index.html","b64dfa3923ed3ed29105377cc979a41d"],["/tags/MybatisPlus/index.html","9cbbc874ad1b5a281da4d1e894055178"],["/tags/NIO/index.html","231633a06072c2bd84c7d1bdc07e0de0"],["/tags/Netty/index.html","62e7ea407a23ab520e37a4c968614fa5"],["/tags/Nginx/index.html","5c77cf2896768648efcc410de65e6f1d"],["/tags/Promise/index.html","1dc3336f179028ffe03f2120c0187957"],["/tags/RabbitMQ/index.html","acdaa4ac7d628f5485a3dad91610c2c6"],["/tags/Redis/index.html","db83371ca6f60c58a15ba6e1e2662138"],["/tags/SSM/index.html","cc4bf6535b7a8b9bd21743f4df0aa78b"],["/tags/Spring-Security/index.html","332b6499fee2c51830ea6160553f01a6"],["/tags/Spring/index.html","fc994e68239002ad26ff82a3bf7c18e4"],["/tags/SpringBoot/index.html","fa122b9bc64d2471a7472694b319b870"],["/tags/SpringCloud/index.html","386592a1cc0236e9c77bdbe1dee9641d"],["/tags/SpringMVC/index.html","5cbe8baab3624092167fce18c8ca499c"],["/tags/Swagger/index.html","86a588dc3226697f6cbdaf3a783875e7"],["/tags/git/index.html","8013a046e2d271edeb82c348c52ca753"],["/tags/hexo/index.html","949891a7151188f8516be032af1550fb"],["/tags/index.html","cd9b8a368474cd3ecd2c5dd4f6f1c59a"],["/tags/jQuery/index.html","d026df508158a5d568698d4dec295359"],["/tags/java/index.html","87621e9eac6473129f8cccea2ffe24b2"],["/tags/markdown/index.html","7780c83f15603e205285161afd9ff68c"],["/tags/mysql-数据类型/index.html","4fb2252997b8d942f501ec508b21f3be"],["/tags/mysql/index.html","7a27a327c5109205c34899114c501694"],["/tags/noSQL/index.html","740d4826603d9ba045dd085cc934c0c4"],["/tags/typora/index.html","6d240299dff7c044e1aa489f276d4c26"],["/tags/vue/index.html","d6da8833d132502070c13ac8ceb99f9b"],["/tags/享元模式/index.html","9ca83f156bb249edd87fcf5157c6153a"],["/tags/代理模式/index.html","97c6af04d0ea27616f270ef62101a064"],["/tags/分布式/index.html","c5afa0d775fadd9cd1e51834fdf4b7ad"],["/tags/分布式系统/index.html","f801d4c982c3d5dc81b7b53b777ca93b"],["/tags/前端/index.html","725faf5837a88804c72c4b319fc58aed"],["/tags/前端/page/2/index.html","b38c90b2ffb7af26445c7f6d2c9ff050"],["/tags/博客/index.html","b4943608e462bdf54c8b0c789f9a233d"],["/tags/后端/index.html","09a97325a6406745fec0432ae6e556c9"],["/tags/外观模式/index.html","a895225b5f6b06e66bd6d4c1bbf81ecd"],["/tags/容器技术/index.html","c1ef0b7d2fcfa056296982d2e739a40e"],["/tags/工厂方法/index.html","8b07af35318c3f4246e25c29ff669bb5"],["/tags/微服务/index.html","0e3242791cddf81854466fd1fa5acab8"],["/tags/抽象工厂/index.html","a5a86e53a2e523ba4ecad507c08f9e19"],["/tags/持续集成持续部署/index.html","8d24bc577acdcb1f95f9901a9746b031"],["/tags/排序/index.html","d5b86d4c747c0f4c666c1d56ae159f66"],["/tags/搜索引擎/index.html","0cdf8987d8018ac2215bfd54653faa2f"],["/tags/数据库/index.html","6504531c23a8e1b708109b8099b40878"],["/tags/日志/index.html","7dcf0536a0a952efe8c3a75dfcf068df"],["/tags/服务器/index.html","6b0e58278a19d026d8743d5eabaf0a47"],["/tags/权限认证/index.html","308ee8337c56c4fae7e19942fd32d595"],["/tags/查找/index.html","f7d29c14b2d9c32ff82a371f6f2d08cb"],["/tags/桥接模式/index.html","da570481151798c203e35de254893cbe"],["/tags/模板方法模式/index.html","39bd4bad91e25f3ba9b7606b5f3663d0"],["/tags/消息队列/index.html","2009af2aff01f095873ee6f3383da6e7"],["/tags/版本控制/index.html","17f1b7ce3184ebe3f81033b5adec8758"],["/tags/策略模式/index.html","4ce4e538fb1aaa3584d36d679a2b933f"],["/tags/简单工厂/index.html","1f7c407986455d2199173cc787451555"],["/tags/算法/index.html","331a040ea35d7c46975eaa9e9efb11c6"],["/tags/算法/page/2/index.html","69ad208c9ddd42fc31017f4843daca40"],["/tags/组件化/index.html","1d78dbaf8d404261060ae8c276714df6"],["/tags/缓存/index.html","b4465a1a2bfaa1dfaf7c7486f64a012a"],["/tags/观察者模式/index.html","e878aa9aa69f970f3ebe560e7530a002"],["/tags/设计模式/index.html","c43507129b03760e6623a56e068a21ff"],["/tags/设计模式/page/2/index.html","cf6f3cbb5ce9837f38198805b8c212a3"],["/tags/适配器模式/index.html","780de876ba2ab63be20027dafa0274ae"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
