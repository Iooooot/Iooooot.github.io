/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","77cd11e5b133881b9c27ae556851c557"],["/2021/02/22/博客的搭建/index.html","150b1b0175d1bcd70faa7e0a8eeb3f3b"],["/2021/02/23/如何使用markdown/index.html","dcd7be936c4279c13e525095718ecc3e"],["/2021/02/24/mysql命令大全/index.html","d75500b5cb509ec91a85a79cbe40baab"],["/2021/02/24/mysql数据类型/index.html","b8a71411d96b0b9ee56882bf0e109058"],["/2021/02/25/Git的介绍与简单使用/index.html","2063a467986122490de098f8d4c9df33"],["/2021/02/27/简单工厂模式/index.html","8b21e2b4b46a24884f243035c2a28698"],["/2021/03/01/工厂方法模式/index.html","968839c5b074ba6e563f9322e881c5cd"],["/2021/03/02/抽象工厂模式/index.html","7457616b45c2c71ab6da75ce88667a5a"],["/2021/03/03/单例模式/index.html","878cb884de2debefb14af6c7d37b63d2"],["/2021/03/04/观察者模式/index.html","92322f4a6e076b9097aa328c31ae7744"],["/2021/03/05/适配器模式/index.html","768823122d72495f27bfa304e407925e"],["/2021/03/06/模板方法模式/index.html","6abc97d38104a91dbd281208051a5844"],["/2021/03/07/责任链模式/index.html","7272dff47c5448abc865a594bed5e2b9"],["/2021/03/09/代理模式/index.html","a88390a15ef85a0b2e271327c7d9fba4"],["/2021/03/11/享元模式/index.html","c1ace337f5efa269a5d1da6699a477a6"],["/2021/03/12/外观模式/index.html","3b5ea72d72b9324f8ac049159f8646c2"],["/2021/03/13/策略模式/index.html","e35d27af3756ee7373a49f8fe299f3ad"],["/2021/03/14/桥接/index.html","22894af254671cbc4539dc28159569ab"],["/2021/03/15/LeetCode-多数元素/index.html","2fd3ff02ddafa607c09b2ae29c4dc51c"],["/2021/03/16/LeetCode之汉明距离/index.html","0701225e7d573939d00c7e0797ef4569"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","05fd18eadea51518d70720aeb9533028"],["/2021/03/18/LeetCode之两数之和/index.html","46e7cb10f3c40d8fdd1269d94ae93b12"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","9a9008be15a12b0718498f150a1db084"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","8e67ea3c66aa98f9edfc95fdb023bca2"],["/2021/03/21/LeetCode之有效的括号/index.html","727038a65568dd549b9e0408bdc142a9"],["/2021/03/22/LeetCode之移动零/index.html","989f38f044ea8ea431362ec90a3fdeb7"],["/2021/03/23/LeetCode之爬楼梯/index.html","a7d180829052d0ab1d670dd7f194a185"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","70995784df1f7d29c473d143306e2447"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","6107f59065d13557e91de0137bfdde30"],["/2021/03/26/LeetCode之最大子序和/index.html","2aedad02c901a6fdf807461843af8748"],["/2021/03/27/LeetCode之子集/index.html","5a57a3bb8307b8b3b33c06c9dc0c8a95"],["/2021/03/28/LeetCode之合并二叉树/index.html","67f718fdbb2de1097b7865dd69bd0850"],["/2021/03/29/LeetCode之翻转二叉树/index.html","c2c9b664eb8f04c992fd1b4db9f110d6"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","c52f1975bef97db4c21a6b8e0c5dc027"],["/2021/03/31/LeetCode之翻转链表/index.html","de5ee119c65687a6b7d9c99e27d08aab"],["/2021/04/01/LeetCode之相交链表/index.html","89dac56d6be7ba3955c05d4ef2e577f8"],["/2021/04/02/LeetCode之最小栈/index.html","210fee883ed1f34d9d3425f4328aa5f2"],["/2021/04/03/LeetCode之对称二叉树/index.html","3163b131f5ef0598aacf7ffd2f77f81c"],["/2021/04/04/LeetCode之环形链表/index.html","e7f2dac1afec9c6c731affeb338f28f2"],["/2021/04/05/LeetCode之二叉树的直径/index.html","436bdcb5bebbd9fa727101e54748052d"],["/2021/04/06/LeetCode之回文链表/index.html","85e35955ae83b5a7ebd0b62ffe301709"],["/2021/04/07/LeetCode之比特位计数/index.html","1b023fff3371dbc765fa4f4a2f45e1f2"],["/2021/04/08/LeetCode之全排列/index.html","148bb5aa5d1f8218593b23789ca31d89"],["/2021/04/09/LeetCode之括号的生成/index.html","a538df44a1b1334f32c421bf2e17221f"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","9609e011253ca47f2b2433e3407e7cc4"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","fa17cdec5acdd0541eff9dd8ee700bc4"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","6c97669a77d26633af263e0c424a8d56"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","3414c9b6cae33c69850a25511f03fb04"],["/2021/04/14/Mybatis/index.html","474d2acedf69fa38c3ad13206d9c9788"],["/2021/04/15/Spring-1/index.html","c858e74a4aa170095c9f6a275fd79711"],["/2021/04/25/Spring-2/index.html","7b8ec41796de86479e5cc78641fcc6bb"],["/2021/04/27/SpringMVC-1/index.html","b6cd51b63879140d998201e803a686b4"],["/2021/04/29/SpringMVC-2/index.html","9c6c88f920a38a6e6765706449cabd04"],["/2021/05/03/冒泡排序/index.html","0b84b7d0f46765dc9f50b09f831fcc2c"],["/2021/05/08/选择排序/index.html","0efb70a8fc73ce414707860ee98c3258"],["/2021/05/12/插入排序/index.html","69700f1d53d7c1df96b75573f5ddd672"],["/2021/05/15/快速排序/index.html","e66abf1e6110d66ff4827d5084e3239b"],["/2021/05/19/基数排序/index.html","34c98c4a50e4197cfa9cead5804e4ee6"],["/2021/05/20/哈希排序/index.html","c28ae5fb07772f7c92d20ab0eb5ca901"],["/2021/05/21/归并排序/index.html","13be629bff8a6d75e0c78a0b1df52d82"],["/2021/05/22/二分查找/index.html","85599c2c746f727bc81285fff22fb433"],["/2021/05/26/差值查找/index.html","9e9b53c614ecebc8c374d854d3ea86b9"],["/2022/01/12/高精度大整数计算/index.html","e1891666b862a2f77a2a4af2120da126"],["/2022/01/22/前缀和/index.html","79196b26d7c7c477135a42aefe3d1e4b"],["/2022/01/23/差分/index.html","4f491d4a80502e6ed51e20aebdda8759"],["/2022/04/04/MyBatisPlus/index.html","81646ab55d3a2c76559cd57fe8775795"],["/2022/08/17/jQuery/index.html","76c7d96aa0d62b8aadb807281fe4382b"],["/2022/08/19/JavaScript/index.html","0e73bf5c970fbfff5438690e53b651f1"],["/2022/08/22/Ajax/index.html","e7b0a6d1a34c0e73370c78ff2e48bfd4"],["/2022/08/23/Promise/index.html","17db88e742c9aaa0aa9c5aa8fbb19896"],["/2022/08/24/Axios/index.html","e61c2acacb24b865ce6fb77f6ba1f935"],["/2022/08/25/H5本地存储/index.html","4e567594533b337ec706503fbc90ae9d"],["/2022/08/26/mock/index.html","d9b1c1b17f883cbe5199fe33291f7058"],["/2022/08/31/VueJs/index.html","5a7bb7d871302811aab9ba3daa5979a5"],["/2022/09/01/vue组件化/index.html","476afb4fcc75f649f8a8e617250ef0ba"],["/2022/09/04/VueCLI/index.html","1743dc8e8036523e94dd85c4cfd9a7d6"],["/2022/09/07/vue实现动画/index.html","68d6bad988158edec3c6cfb484465579"],["/2022/09/09/Vue响应式方法/index.html","db5ee87081c51685b3fc2363fb6d7823"],["/2022/09/10/Vue异步请求/index.html","47ceb5599c0b654805735d11d634118d"],["/2022/09/11/vue-Router/index.html","4447be6d3c701c783d832ab6fd9f035d"],["/2022/09/13/Vuex/index.html","cde861da1b55b5c4268f09a13afda1c0"],["/2022/09/15/SpringBoot/index.html","3556830e935be87e72df0f1ccc2c25dc"],["/2022/09/16/SpringBoot配置FastJson/index.html","1c882240e455a8ada5948a654fe1ffd6"],["/2022/09/19/SpringBoot参数校验/index.html","4825be2874d98f53b9912c228806dd9e"],["/2022/09/20/SpringBoot的异常处理/index.html","d7dbc5c5c8745e37288f653969b1414d"],["/2022/09/21/SpringBoot统一响应处理/index.html","2bbf5c86e6492e1b3a283b3913e59fb2"],["/2022/09/28/Linux/index.html","a3e576b60747661e559f9c473a4ec423"],["/2022/10/02/redis基础/index.html","74be9ce4fa0b021d6238ac2178e4eac3"],["/2022/10/03/Redis缓存/index.html","eef0aba8b7a8f13b344243d0c992224b"],["/2022/10/04/redis缓存穿透/index.html","2c61e13119ce04d6b7679aec502faec0"],["/2022/10/13/Redis缓存击穿/index.html","7e298cd784cc8c29e2ae8a35a2c17743"],["/2022/10/14/Redis缓存雪崩/index.html","a685e95788fc51b03d62bedaa1425b33"],["/2022/10/17/Redis集群/index.html","4831234eb4a17e5597e7fa3ca2da8008"],["/2022/10/18/Redis哨兵模式/index.html","96585a66bc1c6ef56dda15e0fdd0da44"],["/2022/10/19/Redis主从复制/index.html","8a953c8009035440672f4a3f13ca7fa6"],["/2022/11/03/Spring-Security/index.html","10203a676703323b2de62b17edd30f2a"],["/2022/11/08/SpringBoot日志/index.html","3d27d89a1acaf33b448094030a42d59e"],["/2022/11/11/Swagger2/index.html","9b772f9c9c61ab692d94087c3b2ca400"],["/2022/11/21/Nginx-一/index.html","f71e8b46747d37a10dca29ea6babc0a0"],["/2022/11/23/Nginx-二-代理服务/index.html","cff6d920c10c850dd983b671eccc1e1d"],["/2022/11/24/nginx-三-负载均衡/index.html","b11d233c5d379e6b770cf670f48f5bc9"],["/2022/11/26/nginx-四-缓存集成/index.html","ecffc99d2e78bed5739aa7b4b86dfdbc"],["/2022/11/28/nginx-五-动静分离/index.html","8ecf19a33e547d2f3a51be9d28c0892e"],["/2022/11/29/nginx-六-制作下载站点/index.html","46d2ebf732330d7f777eb46a53adcc2a"],["/2022/12/06/docker基础/index.html","f76b4b9c75e36b90d1409f233c8af674"],["/2022/12/09/Docker高级/index.html","8f90d8e47f500b0014e56e5d7b9b68f0"],["/2023/01/04/MongoDB/index.html","fc1323b708a853e5e0a3ddde19afd86c"],["/2023/02/05/消息队列/index.html","49f980d824f6f5d5f88db3ac89d09bc8"],["/2023/02/12/RabbitMQ集群/index.html","595aa4b614fc4761e581a0010549a08b"],["/2023/03/10/CICD/index.html","cc7d4b31eeee4ca93174feedc9bcce3d"],["/2023/03/11/ElasticSearch/index.html","866fd5e203922383bfa620e2d2db085e"],["/2023/03/12/ELK日志平台搭建/index.html","94ab0e6d42ecaad64d924168996c4a88"],["/2023/03/13/NIO/index.html","adb4a264e4cf69f465a98865fa201e6f"],["/2023/03/14/Netty/index.html","6116084c8be821eda53c92ee4a0ce1c2"],["/2023/03/15/SpringCloud/index.html","7005b759963eff0e527c5eed0f6bea06"],["/404.html","192a0270c8636bc0d13d5fd87329130d"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","71313dd549dedfdca7bf808aa449fa55"],["/archives/2021/02/index.html","8e5a12af7c82788d17a9120b39e33c87"],["/archives/2021/03/index.html","108b27084f17fd76820f4dfb6c9c6ae7"],["/archives/2021/03/page/2/index.html","7bc3c1d66de8797c73a09944e3709be6"],["/archives/2021/03/page/3/index.html","3ffdb38a9c735bbbb423188c435e5832"],["/archives/2021/04/index.html","ebb39e363fff9d46460ea9a1a90f1edb"],["/archives/2021/04/page/2/index.html","afc3712de45c9f80efd6c16f6aa64d23"],["/archives/2021/05/index.html","aec4fd5a074feec58d5bef65b922e876"],["/archives/2021/index.html","115187b25a8d2aec0513171428943319"],["/archives/2021/page/2/index.html","c51b6bbdf302337b008dacf95e8dad52"],["/archives/2021/page/3/index.html","522c85624c21d2b91bddb29b69265f8b"],["/archives/2021/page/4/index.html","a8ace3673cd065933b75bc6f07175163"],["/archives/2021/page/5/index.html","d82f53a6e1a170dab3ac48dcb63ac0f5"],["/archives/2021/page/6/index.html","3f8a09752d650afe954be10bad4d4feb"],["/archives/2021/page/7/index.html","a9a49041ed1a5c58cd2b301d3613c8c1"],["/archives/2022/01/index.html","a87fc0df36206c5a66c8df187ef82a66"],["/archives/2022/04/index.html","63a101db88ba533a2c1ddc26efe033ce"],["/archives/2022/08/index.html","b655458746c86539cf7ff23249d65f7d"],["/archives/2022/09/index.html","276a01943045939df805ab3b76714424"],["/archives/2022/09/page/2/index.html","6b7df5fbdd973d6fccbdd9f048f49f15"],["/archives/2022/10/index.html","4fb2a2e294576a90712cd35cdea2dcce"],["/archives/2022/11/index.html","d5dae4dae47eaee41284386c9605825a"],["/archives/2022/12/index.html","33a5dac0cc719fe2aab129eaeecfdf8b"],["/archives/2022/index.html","24c7421c8e7dd917d701953fe2ecb5b7"],["/archives/2022/page/2/index.html","16adab589c1ee624e022f603c18cad14"],["/archives/2022/page/3/index.html","9edffb3c5df4306f347a20808f592c48"],["/archives/2022/page/4/index.html","1e86680d4f8499bd998ecd1c69d8b7f4"],["/archives/2022/page/5/index.html","9df5a67ce9355d5a67e393913e0026c7"],["/archives/2023/01/index.html","a16d8f31553aec9fe48ec2d484bf29a2"],["/archives/2023/02/index.html","5f45869c6123d4ee2647bbc47cf3bc2a"],["/archives/2023/03/index.html","f282f82b5b3dee6c3d5830408ae734b7"],["/archives/2023/index.html","51dc33ae5e520b20ce2edac160a2bdae"],["/archives/index.html","4bf516f87c4c85c45d2e75b6c415d71d"],["/archives/page/10/index.html","2e4383907edb812275d4de660798e0c8"],["/archives/page/11/index.html","0cb7f87b520e437fbc0b17601f7ff4fa"],["/archives/page/12/index.html","a191172d57c0b17b006ee2a3c1cf59b2"],["/archives/page/2/index.html","5945888a6353547aa19df42e86711024"],["/archives/page/3/index.html","2c934db4c509ec12f62df5fbc9b16489"],["/archives/page/4/index.html","87713d04d6be5335cf6014c2df73ea57"],["/archives/page/5/index.html","a76a18d92b94d240f7fb1dff1f373bdd"],["/archives/page/6/index.html","4e4bdeeb790f8a952601f93e2c0c86d4"],["/archives/page/7/index.html","059a2fb45486628cabc01ef631157f72"],["/archives/page/8/index.html","fcedac1cd87b29ad4274a33db7da19a3"],["/archives/page/9/index.html","326b0dd0d5077cf242310a34185b151a"],["/categories/CICD/index.html","01164d9652f37fd94ab53af231b8258a"],["/categories/Docker/index.html","4a1f7f3eab1924d1b2dc077449d5c39e"],["/categories/ELK/index.html","f5703cf02785f10370e0c50e4be43e92"],["/categories/ElasticSearch/index.html","f8be583ab99b3140df45414cbbc8627a"],["/categories/LeetCode/index.html","10b6fe480fdca76b26c71d0ed8c05f5c"],["/categories/LeetCode/page/2/index.html","6dafa8723f56e3ad2488384ae164a173"],["/categories/LeetCode/page/3/index.html","cfc7cba085047ba3b8fc3e89c7b0f0a8"],["/categories/Linux/index.html","40c259b9d1e3bdbbbe1f9d03e53b4819"],["/categories/NIO/index.html","4172ba38e2bf1bd0cff2a8915059ad13"],["/categories/Netty/index.html","0a490f02648c359068fd4748609aa5ff"],["/categories/Nginx/index.html","ec15b7458943b8141db97eaee049c403"],["/categories/Redis/index.html","37ae30ae0b58e465ae713ba473be5054"],["/categories/SSM/index.html","dd0ec01b7ec5c810c702a82bd5a60426"],["/categories/Spring-Security/index.html","da351fca90be115917e8439a8c022bf8"],["/categories/SpringCloud/index.html","f94431421cf872a724778cce909b6e54"],["/categories/Spring框架/index.html","e6276b7b06849fa92c95580078739cbc"],["/categories/Spring框架/日志/index.html","97187053456e5d57c9872f85085623c9"],["/categories/Swagger/index.html","0fd80d6c7f0922f5142cbb522dfbddfe"],["/categories/Vue/index.html","9c554ce118d532aec18fd52c90e9efd6"],["/categories/index.html","f189452a6e2404748b1a4ae72084937d"],["/categories/前端/index.html","0aa573730228671da4795f24e617823c"],["/categories/博客/index.html","7480de6cb4d689e89c58213a22ef6cb4"],["/categories/学习路线/index.html","546da6821cc6cbe4b6641ce79ca2e640"],["/categories/工具/index.html","49e47dd84434b1ecee60342622fac597"],["/categories/数据库/index.html","cc6a01b1f37deb6300d23aa9b02f9151"],["/categories/消息队列/index.html","97ba6d452d8adadca49980ee3d5e4f2b"],["/categories/笔记/index.html","b1a4e83eb208eb8a535a8bafed602bc1"],["/categories/算法/index.html","6856d09f4124685243e2385e22a9c73e"],["/categories/算法/page/2/index.html","39f50698c7361d35ca88444e2a32e3a0"],["/categories/设计模式/index.html","92d89f9011e9632b09d6bf4c76a9d9de"],["/categories/设计模式/page/2/index.html","0adf95498133cf217f0eb052a8c8b91b"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","851d93807761b2b694e8b54a55f0b0b8"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","0b4a2e5374430bc486484add02a5e4e3"],["/messageboard/index.html","a49e1062b07cf83be64f1db2ff0a08fe"],["/page/10/index.html","826d2def14ac690eb9f013c208e27811"],["/page/11/index.html","2267ea322397fca058b949563bdb3017"],["/page/12/index.html","7d5b58b6734e0918cfdf3aa52e064c4b"],["/page/2/index.html","d76f0fe477db1d73d4455de5c2250057"],["/page/3/index.html","f985272d341666c082c4ac0460dcec68"],["/page/4/index.html","7e2007db1fd8c229b1c8e58bb438216e"],["/page/5/index.html","03cc1247307d37861939adbc251694ab"],["/page/6/index.html","6b7c3c2a4700a2820c0811be18458ca6"],["/page/7/index.html","a710acc92d3d1e2cc166b70126ab4ff0"],["/page/8/index.html","d6f0e5557634393da1caa78080d261bb"],["/page/9/index.html","5560c2dd1647a5bd718819636e639dad"],["/sw-register.js","deb6b6243f6422c7772e4dda11a13df0"],["/tags/Ajax/index.html","32e381afb63df76defea761573112dfa"],["/tags/Axios/index.html","cd86d36290016ff9f890adcd39254337"],["/tags/CICD/index.html","41b569510713ff21666018b6af74f64d"],["/tags/Docker/index.html","cd689512d2d8782999ec6f77f7aa0833"],["/tags/ELK/index.html","52bdd7c1c3336eba71e6309f3084ef5c"],["/tags/ElasticSearch/index.html","4fb4b1314218bbb61fc307e7bbbb62f0"],["/tags/H5/index.html","1b9975272885554127ca9a4ac16c180f"],["/tags/JavaScript/index.html","069b94d6f1d23d92ddb292a7de2215ce"],["/tags/Kibana/index.html","fc98b6d554fcab8cd1ff655bb9f8ada8"],["/tags/LeetCode/index.html","9aa4fcd665cd929202e72c8e6c11d94b"],["/tags/LeetCode/page/2/index.html","06af1dbc3d43c3bcfaf290d7c2029e31"],["/tags/LeetCode/page/3/index.html","39031c895e54337e2cbfd1033e8a17c9"],["/tags/Linux/index.html","428ef966420f0f28afb52b2f4ab63105"],["/tags/Logstash/index.html","a5d1c1b2bc6570d5dac6a3a828c35ac9"],["/tags/Mock/index.html","031446824c70045af71480d14532ce6b"],["/tags/MongoDB/index.html","ae3c897d35fec85bb1e99dbe88de500a"],["/tags/Mybatis/index.html","671b7d9232e13b58aa07f5e50664684a"],["/tags/MybatisPlus/index.html","acb99d8f5b8af51b6401cd6cb4d239c8"],["/tags/NIO/index.html","2c2c6f412a48817ddb50afcd9f812a66"],["/tags/Netty/index.html","d25501d955d2ed22d5181c9ddcc15c2f"],["/tags/Nginx/index.html","88a10ff544ab846c25e696f20cd09a81"],["/tags/Promise/index.html","5fdfd031ef7a7dccbe174ddec3adf005"],["/tags/RabbitMQ/index.html","c623703d8745b37b574bc65ef414f524"],["/tags/Redis/index.html","1bc8908d340250390b72a288d873577d"],["/tags/SSM/index.html","77715b9aa7e0c45e973b6d85dbcb827f"],["/tags/Spring-Security/index.html","93a9e183ebed54b5a2a041ae22918517"],["/tags/Spring/index.html","0862518d8c8234b967b05cef074c462f"],["/tags/SpringBoot/index.html","9e2bcc816ec0bc78d7a9e896b801800f"],["/tags/SpringCloud/index.html","ebcd7a118884d617c3a86ba9a47b24d5"],["/tags/SpringMVC/index.html","7faf0b5597eefeb5658f146587f3f301"],["/tags/Swagger/index.html","51cc91317ff8e2399c58fab068bd5d79"],["/tags/butterfly/index.html","dcf0466d09493bbad4e87fa811230cc2"],["/tags/git/index.html","dfb6172b1bd15e923ddcd80553a44704"],["/tags/hexo/index.html","323294eb5383764fc033980e007768d9"],["/tags/index.html","4900865b432e17609fa1d00312bf1df7"],["/tags/jQuery/index.html","ea1fc999db1e0a4a1cfebcf152f9e177"],["/tags/java/index.html","2c3399ef62a2928463eeab0047a804bb"],["/tags/markdown/index.html","f848fc3fb9525e773f20de11da56cec0"],["/tags/mysql-数据类型/index.html","23f9605630a2577be1dc9aba8fa07723"],["/tags/mysql/index.html","97912d44848b05ed706df4e2fb076a7b"],["/tags/noSQL/index.html","c26351168ac27523af4c64a69e310062"],["/tags/typora/index.html","4fef51b6d8e36e17108eccb7b663d3cb"],["/tags/vue/index.html","f4ce1855ed03a7ce17c869fe9110b8d4"],["/tags/享元模式/index.html","e01f11220a5d4ebf3294abf3c46e0c4f"],["/tags/代理模式/index.html","61a8acbf98c7bb262cf3e74207db46ed"],["/tags/分布式/index.html","b5aecb0e8a95e0b73babfb4a3a164d33"],["/tags/前端/index.html","b2a4851e99b9546f3e2d28fd40c5a41f"],["/tags/前端/page/2/index.html","c31e8583627f721485fb13764e10d57b"],["/tags/后端/index.html","67e670b60ce616129444c15a760b92d3"],["/tags/外观模式/index.html","2aa97e1cb6adc2a4ba33c76399d542a0"],["/tags/容器技术/index.html","2eb0a02ef621a84a033191396d8c85be"],["/tags/工厂方法/index.html","b9be167f21e16f5b9f4dc14a34d7ddbc"],["/tags/微服务/index.html","3687afa545538588998dd9d0b2667675"],["/tags/抽象工厂/index.html","055fff7f64a6834a9e1b16da0a8c70af"],["/tags/持续集成持续部署/index.html","aff660f9baef9559c58d914c6d0ca986"],["/tags/排序/index.html","9c639a9bddd22cab816a40e1791bedcf"],["/tags/搜索引擎/index.html","e6cb78d990856ed5f35dcf5c98b0b674"],["/tags/数据库/index.html","91be66cf7456f710e88fabffbaf07576"],["/tags/日志/index.html","a87bceb860ecf48e286f0f934dd000f9"],["/tags/服务器/index.html","ee91fa4f60a3783759cc96029a607f43"],["/tags/查找/index.html","a7d40853091af18ef0a8940e1485695d"],["/tags/桥接模式/index.html","03de3909903225fae112ae618ee23208"],["/tags/模板方法模式/index.html","24aa7315d61bfcb74ae536e502ed3ccc"],["/tags/消息队列/index.html","ec4aeb7d9c8b133e302c866421906a2a"],["/tags/版本控制/index.html","cb0fc2f254eeed9fe1d5dd61002fcb29"],["/tags/策略模式/index.html","7fe7cc137e3518e0fd7e5d9c377c108f"],["/tags/简单工厂/index.html","1bed221b73aaf40da4e8018424593da6"],["/tags/算法/index.html","59be99cda2622030b27d5c1871f6e8f8"],["/tags/算法/page/2/index.html","e20e581ee25e2b5c329009494fb5bff4"],["/tags/组件化/index.html","cec969d9c0e9e01c7bdc7fbd95d97feb"],["/tags/缓存/index.html","e8e76b922aa45fc58baaa62f3de93cf0"],["/tags/观察者模式/index.html","0e61da63e1c01c2d1d469d7cb6105c5d"],["/tags/设计模式/index.html","6e26847a58e057a214ed6a9ad0c10926"],["/tags/设计模式/page/2/index.html","4555b6a4fa70fda1c98743ff3f41ce47"],["/tags/责任链模式/index.html","b4bc4df9f7e5d29c1249d8390f6e442c"],["/tags/适配器模式/index.html","690f2a2d5a382e69cc01362acec7ec72"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
