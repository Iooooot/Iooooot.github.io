/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","a6257d3aa8225bc5054b1d4ac2e11360"],["/2021/02/22/博客的搭建/index.html","eeec6cca455afc078d2f7db3a3fccb72"],["/2021/02/23/如何使用markdown/index.html","392026eb16d369d28fc92c1fb808d3f1"],["/2021/02/24/mysql命令大全/index.html","404fb4ff423c53fced7430940121b172"],["/2021/02/24/mysql数据类型/index.html","e94e86cfb656083a2b85b87d261aabf6"],["/2021/02/25/Git的介绍与简单使用/index.html","552e51646fd0d841f73714be3cdcd5ae"],["/2021/02/27/简单工厂模式/index.html","ba49ee969ad2c1411e1dc736867e5d06"],["/2021/03/01/工厂方法模式/index.html","618c2cf750d4d997b6f909ee82b120e5"],["/2021/03/02/抽象工厂模式/index.html","a15056f719af06f9e7a86f406d0e1b9e"],["/2021/03/03/单例模式/index.html","cef4b0397d658b01ef7ba13293db9afe"],["/2021/03/04/观察者模式/index.html","e9a43c4e570fffcc4c252cfc49d3a0dc"],["/2021/03/05/适配器模式/index.html","1418f30cfbc2fef6950ded524eed9112"],["/2021/03/06/模板方法模式/index.html","04ba8d91bd4aa2497a69dee85b614bf5"],["/2021/03/07/责任链模式/index.html","947d438aacf26ea20bfdae0483f35b4f"],["/2021/03/09/代理模式/index.html","4c129319415ff85ae16adda683f8b502"],["/2021/03/11/享元模式/index.html","f96d019d0e40ed44281e6575876e2656"],["/2021/03/12/外观模式/index.html","b81a27d6f05b2d1c2d8cee6e7860d4d8"],["/2021/03/13/策略模式/index.html","47b5577fd8e31ba93e89886eb2067c5e"],["/2021/03/14/桥接/index.html","1ea682957809f42ed1fcd1a236e8b769"],["/2021/03/15/LeetCode-多数元素/index.html","8721d55d27003e33ef4bd89369d0682d"],["/2021/03/16/LeetCode之汉明距离/index.html","e1ef30477c969d198555c51adb17bd01"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","437a3e975fd7a1dcf2bdcd959bcbafae"],["/2021/03/18/LeetCode之两数之和/index.html","0dbbdf6b34c3a6594157095959ea914f"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","a80d15c7baad58255f4b8061abc9cb98"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","64e83e92fa6d286846a58297648a8105"],["/2021/03/21/LeetCode之有效的括号/index.html","7928a50fddf8052ae49da7b20da603bd"],["/2021/03/22/LeetCode之移动零/index.html","04699c1a0cd4f4af0fbaea727f3e9abf"],["/2021/03/23/LeetCode之爬楼梯/index.html","45048bec6c2695da252baad3893a180a"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","bbea27aad3c6d5e2d56b268d1dcfd924"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","75b16c8fd5b903041181c990a2523be9"],["/2021/03/26/LeetCode之最大子序和/index.html","ed9b2c17c11ec54229feb859c0619cf8"],["/2021/03/27/LeetCode之子集/index.html","e9dc6f03bfd5167960e295f27062f3e4"],["/2021/03/28/LeetCode之合并二叉树/index.html","24777769044140141cae33608fea0929"],["/2021/03/29/LeetCode之翻转二叉树/index.html","2aedb8577d3381f1f34ce76fbde65754"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","60906050dece49e3655edf95e4212ec5"],["/2021/03/31/LeetCode之翻转链表/index.html","052526035a86d45693c022a8cff22f04"],["/2021/04/01/LeetCode之相交链表/index.html","ce9528481ba5b16850e0dee61388a7d9"],["/2021/04/02/LeetCode之最小栈/index.html","94faeacaacd580d2639e1928f0590e63"],["/2021/04/03/LeetCode之对称二叉树/index.html","a83ea61daf75be730bd2e2a6fe9b2e59"],["/2021/04/04/LeetCode之环形链表/index.html","de126ef0883ec8c42af93a590c7c9d35"],["/2021/04/05/LeetCode之二叉树的直径/index.html","275e31d0b9e344f444643e863b10b587"],["/2021/04/06/LeetCode之回文链表/index.html","c2b5f17c92eb238d12fb8db770835dcd"],["/2021/04/07/LeetCode之比特位计数/index.html","b296688179ca8cc63f49d92d08ed7203"],["/2021/04/08/LeetCode之全排列/index.html","a7909b560beb3b0b76b32d3a9557c4de"],["/2021/04/09/LeetCode之括号的生成/index.html","449315b59a735fab66ebaa6be0546fe4"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","85d8ed5086910502068fbc9ecbc975db"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","d54f89df28ee461117f2249fa8bc20f6"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","82f43214f26445f274fbf766603182bc"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","3622d42105e246f68548ffaead9c6c4f"],["/2021/04/14/Mybatis/index.html","271b96fce048d066689f158d75c697e1"],["/2021/04/15/Spring-1/index.html","e0bcf109a56290834c02f186641509a9"],["/2021/04/25/Spring-2/index.html","66092b644fda3957bcecd463c1264dc5"],["/2021/04/27/SpringMVC-1/index.html","a8478be8322c64c62315f703f3dedbee"],["/2021/04/29/SpringMVC-2/index.html","93c5a2d1d0941e18cbdf4b6771c91d98"],["/2021/05/03/冒泡排序/index.html","72e882217727de13df7929a8dd4a5ec8"],["/2021/05/08/选择排序/index.html","9e4f9adceb5aec478b33b6be4e7d4ae3"],["/2021/05/12/插入排序/index.html","c483fd46a0be3a235634a5867cef4964"],["/2021/05/15/快速排序/index.html","34a9393bba2f3bb2e4bb541e36039c00"],["/2021/05/19/基数排序/index.html","174c998e3dd86dbc3e8b4f2dd9b20c7b"],["/2021/05/20/哈希排序/index.html","abc197cffafdf19cce9d6cf8e2215385"],["/2021/05/21/归并排序/index.html","6dae15dfd89463bbe8796479a34ccf84"],["/2021/05/22/二分查找/index.html","9773cb9e0a8bf1fd0ce353721d304fbd"],["/2021/05/26/差值查找/index.html","a9ea01a1327773d21a120a1e73f23f8f"],["/2022/01/12/高精度大整数计算/index.html","4a2862bc27f19f7c36e655e7caa84485"],["/2022/01/22/前缀和/index.html","4556c431caad46ae78141cda154f3ea4"],["/2022/01/23/差分/index.html","71e5d1334849c7714d4606f9320ac68f"],["/2022/04/04/MyBatisPlus/index.html","6520a5fa0b757f7b4303f4cf0f6d3d90"],["/2022/08/17/jQuery/index.html","faa285d9bb2b33b4614a3b70ae37f2bd"],["/2022/08/19/JavaScript/index.html","a5f6f765d61b75710b539ded727711d6"],["/2022/08/22/Ajax/index.html","43a6dfc3f267e4a2735a90ec3bb8cded"],["/2022/08/23/Promise/index.html","387be22f56a0153d21794396451de5ae"],["/2022/08/24/Axios/index.html","a1080ab484bc75a8fc9d88f5e12eed64"],["/2022/08/25/H5本地存储/index.html","2b695b7fc5ca7ed1b67932a092211e74"],["/2022/08/26/mock/index.html","081957334f882106229f23dd3dbdb2a7"],["/2022/08/31/VueJs/index.html","1c782776cc65c5408565014f4cbaa800"],["/2022/09/01/vue组件化/index.html","cedcf2684cf9f51ec2ed7fdfe01eb14a"],["/2022/09/04/VueCLI/index.html","db1a1c0d1c9d876d7af655294c8fb98f"],["/2022/09/07/vue实现动画/index.html","823b9d9522265449a9bea84dd0374476"],["/2022/09/09/Vue响应式方法/index.html","cad631b7bac83186ad83928b817aa5d1"],["/2022/09/10/Vue异步请求/index.html","3ef2cb67f998b1a57b26a0c883aba98e"],["/2022/09/11/vue-Router/index.html","4ddb1810d76fa7d3f030f8726361e482"],["/2022/09/13/Vuex/index.html","b157dfd6666a6a8d4444a6f4b77c2bc0"],["/2022/09/15/SpringBoot/index.html","95206c3c80ae9c02aa5e160a0c1ec7f0"],["/2022/09/16/SpringBoot配置FastJson/index.html","a982b87af99aa4377cea3c851a9d15ca"],["/2022/09/19/SpringBoot参数校验/index.html","70ee39fd475dbc0c25b30a909101b1b0"],["/2022/09/20/SpringBoot的异常处理/index.html","405b998f2b2ac6f5816e8516ddc1bc88"],["/2022/09/21/SpringBoot统一响应处理/index.html","f8e04dc43253eb169228ef74ab5973b0"],["/2022/09/28/Linux/index.html","5122ea294f611f1ab3d2422b9ef18f27"],["/2022/10/02/redis基础/index.html","7361b31a209146790d9d041e5530abc0"],["/2022/10/03/Redis缓存/index.html","d23b7fa8e1bcebdd17d26057daafc38a"],["/2022/10/04/redis缓存穿透/index.html","bbbcd0b3c7a5cd6d47d929847c06f091"],["/2022/10/13/Redis缓存击穿/index.html","97a6c0048350e766cccdf0ef44892bd4"],["/2022/10/14/Redis缓存雪崩/index.html","76d2878900bb0fe1f9819a125b140c0e"],["/2022/10/17/Redis集群/index.html","dde95dd2c59dee7812576fd1f236ca60"],["/2022/10/18/Redis哨兵模式/index.html","1436853b42716952a03e733cafe29ccc"],["/2022/10/19/Redis主从复制/index.html","37c6582e43afb13d5d6b2e3c1345b6f9"],["/2022/11/03/Spring-Security/index.html","26601eada4c759ee47ec7ca208fefdd3"],["/2022/11/08/SpringBoot日志/index.html","278f5aa8526f6dbeefc7ecf7da86e06f"],["/404.html","49635c9075f4072c00b6ba7ebb1ff313"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","bdd7d7b5dedcf416aad225355571e675"],["/archives/2021/02/index.html","dc45e8ab7bf6dc8db9617e3ddc898db6"],["/archives/2021/03/index.html","ddd143ded87c400ce92d747ad5594878"],["/archives/2021/03/page/2/index.html","7f57ad6ab4eec7de94d68a3126d2e933"],["/archives/2021/03/page/3/index.html","fd08679f0ce6da03e3c4186e3b7db765"],["/archives/2021/04/index.html","58cfe42f18cf2bab34ebb80957cf3110"],["/archives/2021/04/page/2/index.html","5636bb989963bc093e16356b5a8f5438"],["/archives/2021/05/index.html","2bf5c25311d4b08fe1c8eb9e96d4833e"],["/archives/2021/index.html","74b9db044c3b8ca6559334b53471692b"],["/archives/2021/page/2/index.html","156320ad1949999077274a5816e3da45"],["/archives/2021/page/3/index.html","0a1253d8b55bf0761466fbdbf1eee8f4"],["/archives/2021/page/4/index.html","efaa539e4be92b341a519adf7487ac3c"],["/archives/2021/page/5/index.html","855d88ae065a612e3bb9b659f8264f82"],["/archives/2021/page/6/index.html","e89fb1dbde5ef19dfc94fd64cc698477"],["/archives/2021/page/7/index.html","8f58bb1102231c50c8320e76f838a296"],["/archives/2022/01/index.html","60d163b14325303aefcc2d0c300a6bda"],["/archives/2022/04/index.html","a09541b56d3680020899695bc9864006"],["/archives/2022/08/index.html","8ec9f7bc2c0178b5340df52ba21ad8a6"],["/archives/2022/09/index.html","da075934a84a415a712518fb6dc764d3"],["/archives/2022/09/page/2/index.html","9b220c2733fc8e4c28266a36d0fb00c7"],["/archives/2022/10/index.html","4c508fbc006e2bc3e704f82186d6e202"],["/archives/2022/11/index.html","6ad43cee304c85df0931c2009bfd54bc"],["/archives/2022/index.html","6721d7b9ca9727b5a3122b3e352af682"],["/archives/2022/page/2/index.html","49d02f6069cda9e9ce00a2835581fb0d"],["/archives/2022/page/3/index.html","a106385e5ccf54e4cae16de131253cfa"],["/archives/2022/page/4/index.html","c99986de709f1e4ea018248e1608ee34"],["/archives/index.html","6999704ab2af87d145258101445e25eb"],["/archives/page/10/index.html","e90c75ae62bf2164dd25a7c52edf7a88"],["/archives/page/2/index.html","9fe13765cbfb68d7b6d7ba08ba86e89d"],["/archives/page/3/index.html","d8a72a119cf7042bc055f69109ed16c0"],["/archives/page/4/index.html","2e591bdae858970816758b6f4fbed4e2"],["/archives/page/5/index.html","af7f8704c8ff6544cd04606af761b849"],["/archives/page/6/index.html","b653c0ff0e4ff5bc6844b5c5d4fde0ea"],["/archives/page/7/index.html","26ad608253993b22f2267571fc870a09"],["/archives/page/8/index.html","5ea9049401f994eace6dcfe760d03e18"],["/archives/page/9/index.html","4a6ed43e694d446fc6f7a6e895d9e9b2"],["/categories/LeetCode/index.html","b6ff5dcf8042ea7a9290afa4156ba158"],["/categories/LeetCode/page/2/index.html","0afbe72c9ce0d38d561b5d2d25a0d4d1"],["/categories/LeetCode/page/3/index.html","4df87d7c44a458fbfb08120870f8410a"],["/categories/Linux/index.html","6e14b973984b6f3098a4119a85b04e01"],["/categories/Redis/index.html","217b3c441d812908b2c116d495900967"],["/categories/SSM/index.html","80199bd2fbc25098db094ee00498eb51"],["/categories/Spring-Security/index.html","4fe6510357b19a34123e5cf595bc28a2"],["/categories/Spring框架/index.html","9b8c33cda9dd40e35e94910aaf988f0c"],["/categories/Spring框架/日志/index.html","35c9642ba807b3b18ba45f2864969e9c"],["/categories/Vue/index.html","6bd8023ad6700f95f0eeb0b4dd894962"],["/categories/index.html","53dac3fbb0ea7b7286c501aa06102722"],["/categories/前端/index.html","44b4c31e5e23483aa7abdd80a48896ac"],["/categories/博客/index.html","c3fc799c8e6708f19f1c036c0db04d4b"],["/categories/学习路线/index.html","d91aa76098b8a225525c0d2b66794797"],["/categories/工具/index.html","9d9318103dff60807ace22c0e4cac866"],["/categories/数据库/index.html","052ef5d73c66e1be24c2c87320354808"],["/categories/笔记/index.html","45e036cd4b4dfcf7077e50f3c64384ca"],["/categories/算法/index.html","0ca8cec0fed257f5cc94f93c52df4f28"],["/categories/算法/page/2/index.html","f4eafa66e40ecd0b9fc1e240935fac2c"],["/categories/设计模式/index.html","f52b391a1c8ac346a3be1ee19e14ee9d"],["/categories/设计模式/page/2/index.html","c5099a418c2a5a61adee1293939cc8b8"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","5134b4d0f5725e7c98e746047cc3e19b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","4114a21f0c37ae725468c0362799762f"],["/messageboard/index.html","848fcffa2def55b33b7cb3661ecdcbd3"],["/page/10/index.html","d6fc0d6f57efbfbb75f5eeebdec525e4"],["/page/2/index.html","17b51ccece4bc0c8e4d5b2f6085ed2bc"],["/page/3/index.html","4a0022c9066a35c5fd617a08d670f7f5"],["/page/4/index.html","3e3a9edccf4027eab053272803a3a66d"],["/page/5/index.html","b108f99f61fc5631909b8a62709aae3c"],["/page/6/index.html","f3fa3d7e229ec990338290fbbdb92227"],["/page/7/index.html","0a7ed6042519e9a039b62f52d1ada472"],["/page/8/index.html","37a12546337935651a32f05b5fef6223"],["/page/9/index.html","95632e5b161c59f8e8d0fef84a715d1c"],["/sw-register.js","1891c0bbd51d3df73808f6e1bacf3a89"],["/tags/Ajax/index.html","92072f4712519154173526c4183b0aa7"],["/tags/Axios/index.html","2366f65e1f7e14278d95448eaff6c183"],["/tags/H5/index.html","fa394d001aba184e95c7350bbd0feb8c"],["/tags/JavaScript/index.html","f48fe8eb06398487adf8ec3f12188e20"],["/tags/LeetCode/index.html","659fc32afd78f4bd37deb23cf2067376"],["/tags/LeetCode/page/2/index.html","86b45afad47ed766f660e40ca9968368"],["/tags/LeetCode/page/3/index.html","21cb959f228f07dbcba1561f6418c5ba"],["/tags/Linux/index.html","099d4990f685a71d0eeb4d1a2f4482ed"],["/tags/Mock/index.html","eb1686719596a252ffa62bc31f12cb1d"],["/tags/Mybatis/index.html","35de0ea31028c92a395d75445ceb83ef"],["/tags/MybatisPlus/index.html","0f620c684fe42ea093d4c0d2d17e77c8"],["/tags/Promise/index.html","cb55b64f00c65fe937873fc27f6b979a"],["/tags/Redis/index.html","ae77772161244c49482d05ea6c55fa49"],["/tags/SSM/index.html","53fa7d1c69ebaf812e35fe28b4e85309"],["/tags/Spring-Security/index.html","87640cca48639c1a4fd8c920d8489f89"],["/tags/Spring/index.html","55b596d9a6b46c362c013a78f998fdcf"],["/tags/SpringBoot/index.html","678dcd1ff9ca0eb025ad816a255847c5"],["/tags/SpringMVC/index.html","2de78728a07f9287bb229cf5179e8a87"],["/tags/butterfly/index.html","e59c9aa3a875a44bf376c5ba4897afb6"],["/tags/git/index.html","ddc5dde7bbe54d521c08ecd2bd0a9662"],["/tags/hexo/index.html","d5261976de8c998d69176010ed4ae2bd"],["/tags/index.html","c8ec96d8c1f6969d4f76c06427b0f437"],["/tags/jQuery/index.html","3229d8d3b9036f93f0e5778cf92e213f"],["/tags/java/index.html","e093a131342829f532542f4b1fcd6579"],["/tags/markdown/index.html","15e830029efddeb4b33ed262d6e471ee"],["/tags/mysql-数据类型/index.html","5bd167dd63521c83940c8e3d749aaf1e"],["/tags/mysql/index.html","af79d88977cec661bbb24e0164053a48"],["/tags/typora/index.html","fd382a5368a000dc9b95f9e8a713ddec"],["/tags/vue/index.html","1b22bd16eddd1758753be296c18e0e79"],["/tags/享元模式/index.html","2565f32bc855c67503169ac6910b31d2"],["/tags/代理模式/index.html","369a9814f52099e3f7145db2fd14046e"],["/tags/分布式/index.html","71db86930cd6154c1a64c6ad5b85aeac"],["/tags/前端/index.html","4aec0396f0ca5324953903325f020dc5"],["/tags/前端/page/2/index.html","c6c36d45af45bb125e6d97bb1c2aa47b"],["/tags/后端/index.html","7b352b9187f7ae89da8e229efbc76493"],["/tags/外观模式/index.html","56500e0a51f087f6326339c60787e082"],["/tags/工厂方法/index.html","4ee0205ae1a126bd2c0d5e9859d37a9a"],["/tags/抽象工厂/index.html","074700cd6041ea18e4cfa1c1e4318bf7"],["/tags/排序/index.html","b398cfddddabf294867abb512a9b3835"],["/tags/数据库/index.html","8b56ef570e201ad5f1fac8785c418721"],["/tags/查找/index.html","05742324826d1a2bec64db51d1c50059"],["/tags/桥接模式/index.html","c77f83f4f62af1cac4370bde8be16fe1"],["/tags/模板方法模式/index.html","83cdcca1f199110dcc621cd150c62bfb"],["/tags/版本控制/index.html","98feff3b7a9c525801836cad9053e16e"],["/tags/策略模式/index.html","8d2811c4efa37327723fbe1b9797b5d7"],["/tags/简单工厂/index.html","84c9a4f79cf62b073c6e0706294ff57e"],["/tags/算法/index.html","7690f6cd47052c3517b23962913308d9"],["/tags/算法/page/2/index.html","95d4f7a1cc4e03f2a6e779c8d1d6cf7e"],["/tags/组件化/index.html","11e4f6b82b3ddc0ac2ccd88f429b6f0d"],["/tags/缓存/index.html","2a1b654b05437a43de1f009ba24944eb"],["/tags/观察者模式/index.html","c1c456e106bf4b15f36ce6e7dde9f3ee"],["/tags/设计模式/index.html","7cedd1606cc42dedab9a641e7bd93038"],["/tags/设计模式/page/2/index.html","f70a3b2b6b7ee5e033db222d2c7bbfd0"],["/tags/责任链模式/index.html","c5a3a1e8feec8c1f04cea46483f54b95"],["/tags/适配器模式/index.html","ba21a26f8f1d2ddca7f98e4af3035513"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
