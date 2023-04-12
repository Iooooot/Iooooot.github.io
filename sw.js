/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","3d2738e3f2aee20fc0d71d4563771a3c"],["/2021/02/22/博客的搭建/index.html","ee627014050ee17ec13f4955ec912648"],["/2021/02/23/如何使用markdown/index.html","8888b16333761c510fe0fe151ebf8b2d"],["/2021/02/24/mysql命令大全/index.html","8804dac4004d2841035e46a02abb6887"],["/2021/02/24/mysql数据类型/index.html","bf227f7845d11328809c0e8a16cf020f"],["/2021/02/25/Git的介绍与简单使用/index.html","ffe70dfd5f53aeaf1f3c2722bdcd6858"],["/2021/02/27/简单工厂模式/index.html","70dc203324c622a96f3026ddc07597eb"],["/2021/03/01/工厂方法模式/index.html","8727afcc6963653b332d48dd804713c9"],["/2021/03/02/抽象工厂模式/index.html","6de881aa56b64ddefe0f0dce10bde2ee"],["/2021/03/03/单例模式/index.html","cf4f72fef24134c19eaa45a48d49f158"],["/2021/03/04/观察者模式/index.html","ce2f501ae5d3c882184762f705ed6a89"],["/2021/03/05/适配器模式/index.html","70b5e4a6fc5f296bf010745583c0e7c8"],["/2021/03/06/模板方法模式/index.html","72c83c3248e3fd1e734e69fec1c89fb8"],["/2021/03/09/代理模式/index.html","8a2f5ead7eb19e365cecdf20e3014033"],["/2021/03/11/享元模式/index.html","9ef617577fc31e6ae39366f27f49146e"],["/2021/03/12/外观模式/index.html","052d57702d876020ce8a6712b9f3d491"],["/2021/03/13/策略模式/index.html","0d0aa44fa8d9a29adc94b151412519c4"],["/2021/03/14/桥接/index.html","f1f9ed95350b74606d0c1efa0d4007b6"],["/2021/03/15/LeetCode-多数元素/index.html","6b85d5724e50564b5ff7b256efea8fcf"],["/2021/03/16/LeetCode之汉明距离/index.html","b476068194cb5c6af78c67dfff09c3e3"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","3d84158a85be40d2164828197638ba30"],["/2021/03/18/LeetCode之两数之和/index.html","f5c4c9a8519703b4f842060e30833431"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","ff1d949ed9f5c645800c4cefe9d577fe"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","895ff0399d6624e72d89ab1c3f17229e"],["/2021/03/21/LeetCode之有效的括号/index.html","8d436cd726513d9c86cfcb0638571dc2"],["/2021/03/22/LeetCode之移动零/index.html","43d259e1322d900efed1ecc89e70b3b4"],["/2021/03/23/LeetCode之爬楼梯/index.html","335dcf88d5cad8394fcd876f0df71566"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","1f225cb3fe3153696411860472eaf85e"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","ec15d4ea646647467ee383637d11f63c"],["/2021/03/26/LeetCode之最大子序和/index.html","f23751be9b544e66ef3adeb9669e5b2a"],["/2021/03/27/LeetCode之子集/index.html","e7ffe95a8776f4d521035b8d5e4589a1"],["/2021/03/28/LeetCode之合并二叉树/index.html","eda7991d32ff8b9d69be4b14a16b9938"],["/2021/03/29/LeetCode之翻转二叉树/index.html","387a8329f6e3784066705dca1ba2a2e6"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","41baea0cf9364d89835391622111a8fa"],["/2021/03/31/LeetCode之翻转链表/index.html","5166936d2e2cbf089cd25c7bed5dff53"],["/2021/04/01/LeetCode之相交链表/index.html","49e91114d514c22c250d5100613bd87e"],["/2021/04/02/LeetCode之最小栈/index.html","5cf82d19b66f9b5103ea0ef3f25afd10"],["/2021/04/03/LeetCode之对称二叉树/index.html","862f0deed18aa8b636c57fb524cb9c5b"],["/2021/04/04/LeetCode之环形链表/index.html","c090e9836fdbf1799023addd64964bcf"],["/2021/04/05/LeetCode之二叉树的直径/index.html","7146e52f1e98375f4b78efc2a7617ec1"],["/2021/04/06/LeetCode之回文链表/index.html","7d5c1f380207b9a29df093d4ce1ce2b8"],["/2021/04/07/LeetCode之比特位计数/index.html","94b5df8176e103e9aca620605e0f933b"],["/2021/04/08/LeetCode之全排列/index.html","4e4642fcc5ba35a0b75401522cdf2632"],["/2021/04/09/LeetCode之括号的生成/index.html","712e58716054013d0d9691146d0bb4d7"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","6bc6be7e68ee5f419e469cac970a8360"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","c7fbba0a9119df36ae36a834aa778fb7"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","796be99a5653aa14058a915fd156679b"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","3d9ccc02b369ef879f29f1a45effaf71"],["/2021/04/14/Mybatis/index.html","861645e49aa3afd77ee3a8e2c99bbb61"],["/2021/04/15/Spring-1/index.html","e6d152d491ea559bb68691babac99680"],["/2021/04/25/Spring-2/index.html","947544dcae827c50662cc75ce0939adc"],["/2021/04/27/SpringMVC-1/index.html","48ae116faa0ed43efe053b77874bb451"],["/2021/04/29/SpringMVC-2/index.html","b9478d7b18c6e284fb19849e7ca79355"],["/2021/05/03/冒泡排序/index.html","94c163a095a63a0d310b8591f36ceaee"],["/2021/05/08/选择排序/index.html","5796c4b453e301fc1ae359a19108966b"],["/2021/05/12/插入排序/index.html","c9871251f6e9bfb23e6133413d9afe19"],["/2021/05/15/快速排序/index.html","5fb7e90309529fc5c9c19cd6faccf177"],["/2021/05/19/基数排序/index.html","8ebc8b6694c3458c41c09530b4be5495"],["/2021/05/20/哈希排序/index.html","e47eecb30eaba50725d44460dd551c8a"],["/2021/05/21/归并排序/index.html","1726587101f3a9393b9190af93a5bd2a"],["/2021/05/22/二分查找/index.html","87495ca146374a7be0e6672b6020a12d"],["/2021/05/26/差值查找/index.html","cfd91b28b34bfdaaebb9735c81dbbfd5"],["/2022/01/12/高精度大整数计算/index.html","8241421f1bda76ee784d8dc644ce7639"],["/2022/01/22/前缀和/index.html","a7723b5d47311439391a8eb2738566cd"],["/2022/01/23/差分/index.html","e9800fbe6a68d1f36ed7e81895687bf3"],["/2022/04/04/MyBatisPlus/index.html","e853a64d332fa266febcd60751ae7c0d"],["/2022/08/17/jQuery/index.html","e4a830a741b13fc9d56744d9709c6308"],["/2022/08/19/JavaScript/index.html","bdf1ec8b4b3f674c95be322b07822cd9"],["/2022/08/22/Ajax/index.html","ffacadcfe9dd10732663ad9d64f3235f"],["/2022/08/23/Promise/index.html","b91c31e046b291600c7468142dc6fa05"],["/2022/08/24/Axios/index.html","be345f0e375a4262ef98ec61b0e24fa4"],["/2022/08/25/H5本地存储/index.html","1a97b46c1b4ced4a242426556529939c"],["/2022/08/26/mock/index.html","25c32ba56dac1be280a8b1264936ef6f"],["/2022/08/31/VueJs/index.html","56ef9518f25e9055e6069846a1b03e63"],["/2022/09/01/vue组件化/index.html","9a2a2d94ae0d995a202e3bf0187ea8ef"],["/2022/09/04/VueCLI/index.html","84803b9e3cc3c99fbf6c1b4fc69795c9"],["/2022/09/07/vue实现动画/index.html","5efd5a12c1f08f5907d502e1398bc289"],["/2022/09/09/Vue响应式方法/index.html","54ce2ce5749ac995ca2ee04f3763a2d9"],["/2022/09/10/Vue异步请求/index.html","863a05a721ef0b40d9326e671fd55b7d"],["/2022/09/11/vue-Router/index.html","b96edd58a0288301fe5784d46993d7d5"],["/2022/09/13/Vuex/index.html","3f406cc814c1238c8c713232773cb14a"],["/2022/09/15/SpringBoot/index.html","e391c7d1a2137d53e6d8537fd2b83f7c"],["/2022/09/16/SpringBoot配置FastJson/index.html","e20414d25db31ddc4165b286253f1b59"],["/2022/09/19/SpringBoot参数校验/index.html","b2fc2f8f6446fa0f804d4c4665736793"],["/2022/09/20/SpringBoot的异常处理/index.html","92820d8fba2f7333e405e39d330862a6"],["/2022/09/21/SpringBoot统一响应处理/index.html","13a60a027a24280a0e58008ec823bc6b"],["/2022/09/28/Linux/index.html","30f124f60acf92645c5fce67cc25e825"],["/2022/10/02/redis基础/index.html","653ff3c3fbb54e227e97e2c65d32b9d4"],["/2022/10/03/Redis缓存/index.html","f42b3ac6dc77f3bfb21f889e88b7381a"],["/2022/10/04/redis缓存穿透/index.html","031d35e441ac2646efef2ce9d57fdb10"],["/2022/10/13/Redis缓存击穿/index.html","963c83fb8c54566b2282442cb22c9e84"],["/2022/10/14/Redis缓存雪崩/index.html","50cde005cbb72c39d105b046a61214a2"],["/2022/10/17/Redis集群/index.html","02924a39bf6373c4040565166a78200f"],["/2022/10/18/Redis哨兵模式/index.html","1971168e2f174c98dcabadec819110bb"],["/2022/10/19/Redis主从复制/index.html","f4d2a96ecaa0af09e5e5198976be236c"],["/2022/11/03/Spring-Security/index.html","ad58b02bb391f079c0d4a67ff1c20d3f"],["/2022/11/08/SpringBoot日志/index.html","6ec29665e928de19187d770031d7554d"],["/2022/11/11/Swagger2/index.html","ef1fa72fa87eb664021568c7bc3b7891"],["/2022/11/21/Nginx-一/index.html","5e0e6d26683ae99c375e7f29b145a8bc"],["/2022/11/23/Nginx-二-代理服务/index.html","6ffe133a9f36d3b8053e0bbc5b014ee9"],["/2022/11/24/nginx-三-负载均衡/index.html","4ed8870dcd510cafafe9135c8ea63baf"],["/2022/11/26/nginx-四-缓存集成/index.html","9e5fb5a7f8a89f936f9e7e2aa2b9fa4a"],["/2022/11/28/nginx-五-动静分离/index.html","925c2da0cf046dc130499f56191ffbf1"],["/2022/11/29/nginx-六-制作下载站点/index.html","8fa3cb65ec75239369b1c3ec4095a124"],["/2022/12/06/docker基础/index.html","584ac6a43e310ac6abc24f32ee0cdac2"],["/2022/12/09/Docker高级/index.html","17cb745bc82b9c3d347a7d4ecb8ac041"],["/2023/01/04/MongoDB/index.html","d3de80ff330077ab4e85d2f791a82160"],["/2023/02/05/消息队列/index.html","73e6acd8145042f34d55fc06b4296f58"],["/2023/02/12/RabbitMQ集群/index.html","418f279263fb524c3b0aac94bac29bab"],["/2023/03/10/CICD/index.html","95245844066b8170e26f5ed0b0c7e969"],["/2023/03/11/ElasticSearch/index.html","2cfbd69aeaeb3dd32132fcefe1f42aaf"],["/2023/03/12/ELK日志平台搭建/index.html","15e229c1c3f70a360c04f0885087c9a6"],["/2023/03/13/NIO/index.html","2270288af187e4d0b1f77d92563afeeb"],["/2023/03/14/Netty/index.html","b59d55966336dc940fb1c8049a949c72"],["/2023/03/15/SpringCloud/index.html","639f5cc0040375a5a259844bd13497eb"],["/2023/03/17/分布式系统认证/index.html","c8c5a2abadcf3bb3f522641f09f3990e"],["/2023/03/19/JVM概述/index.html","25a233a502055e3f2b0c1eb96d758b81"],["/2023/03/23/类的加载过程/index.html","8dd1c46afbc6c15951d78a0577bb1ea2"],["/2023/03/28/对象的实例化/index.html","dde8386772d1ce73902425af8526e0de"],["/2023/04/01/运行时数据区/index.html","88af6981bc0d1e6af2048ab9d6e86f73"],["/2023/04/04/执行引擎/index.html","6cc7976c382376aa7283d94eda36d294"],["/2023/04/06/对象引用/index.html","df8fa9a82e3321b4c9e6b80a96c177d0"],["/2023/04/09/垃圾回收/index.html","6266e7490c209aff5e1e926c06ab1a89"],["/2023/04/11/垃圾回收器/index.html","e8fb5e1227aa57f390a0bc85d565604a"],["/404.html","b226c6ba4270093b15af0a9248d7b920"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","25c58950331be3e32241142b9007ddd8"],["/archives/2021/02/index.html","b819ef70ce00065f3ebd8f37c0167738"],["/archives/2021/03/index.html","bbef3b884061cd8cb9d6b2f8b21005fe"],["/archives/2021/03/page/2/index.html","fc70c78ba5beafd66c647a675ae3e950"],["/archives/2021/03/page/3/index.html","c17c5357e3d6de60909ab68673a6ebd9"],["/archives/2021/04/index.html","2e569df514020719cc98cdedd6849c3f"],["/archives/2021/04/page/2/index.html","9397ba9600431086c420fa524995d3e9"],["/archives/2021/05/index.html","919f5cfedfce0649aabee46f4eb6c238"],["/archives/2021/index.html","14c8b66bfa94f3a3630c85b97590fdaa"],["/archives/2021/page/2/index.html","e1c2921f233623dfa80e10c22cd16fe8"],["/archives/2021/page/3/index.html","26e0be099ffdcf74792941588a6d1fb6"],["/archives/2021/page/4/index.html","da2edfbc534aa9949187c7bb09aedcb7"],["/archives/2021/page/5/index.html","6d9b13cc0013e435b39262f8989d9fdf"],["/archives/2021/page/6/index.html","b3d20f0f09a9266b29fc4ad77995fdd3"],["/archives/2021/page/7/index.html","ed8965593c2832648bce028f9ba40b12"],["/archives/2022/01/index.html","5beefa88a20757c89859ca1f7703d4a7"],["/archives/2022/04/index.html","f2bf5c58d1a7f067c510cf0a7f4bc5ea"],["/archives/2022/08/index.html","ea9cb5a7771e30087174f9596ae1cbc7"],["/archives/2022/09/index.html","dc1e238d90c78169306b037b0a55285d"],["/archives/2022/09/page/2/index.html","026d7a78113785c2aa710c67b0e5f1d4"],["/archives/2022/10/index.html","db655292dfc4706dd6cd765b5d3221fe"],["/archives/2022/11/index.html","9b7b74a84b82405c76f4882fb2eff521"],["/archives/2022/12/index.html","0d3fecc8944efb93c477b4a44f4e3f4b"],["/archives/2022/index.html","a23139b798fdeba6c50e53da381632d2"],["/archives/2022/page/2/index.html","f5dc90104045ddbe3929c2e0d4a5130e"],["/archives/2022/page/3/index.html","7ad747bd3679cb4cc6b9832ccda9c223"],["/archives/2022/page/4/index.html","0f87abccd1275f436db83856d044bc89"],["/archives/2022/page/5/index.html","1f175ebe0b7c5582a7b917df75fa2b7d"],["/archives/2023/01/index.html","0d6882179686d18205263b629c8f5408"],["/archives/2023/02/index.html","6c73713971056697c8e08fb15d93c16c"],["/archives/2023/03/index.html","df8d6a931f8dd3a27e8c35c60915e889"],["/archives/2023/04/index.html","97c67924f41cac983c4d9ebf1a0425e5"],["/archives/2023/index.html","858f570a01e42b19c60760e885557afd"],["/archives/2023/page/2/index.html","2ec7519a41ea5261b3f649bcde6290e1"],["/archives/index.html","29d084a6b7cc1f66fbc3e0df401806a1"],["/archives/page/10/index.html","d1bc41d8af5a6403985425eb058847d8"],["/archives/page/11/index.html","f67da2b2ee40861e27b14ef7212e7393"],["/archives/page/12/index.html","7ee451c3ed49c51146550865c824c223"],["/archives/page/13/index.html","cede3255b548b21a5b6da8b7a1956a61"],["/archives/page/2/index.html","942588307347ef64aab8dec22d148c8c"],["/archives/page/3/index.html","3d6c4f60f06beb098cb3a553694ab264"],["/archives/page/4/index.html","916e2fcea472dd229b5422ce2e121efd"],["/archives/page/5/index.html","9ad2bcd8a134c56047c91aeece725c5b"],["/archives/page/6/index.html","219aaa6dba1c3b53c449e0ba07263979"],["/archives/page/7/index.html","eeaa2d9c021a4869d8a3519370a752c9"],["/archives/page/8/index.html","87945a05e451176652edce45ec255a55"],["/archives/page/9/index.html","b42d9c847ec0fd5c59491dc4b2a70509"],["/categories/CICD/index.html","abe44eac75e52f18d123e873d42b41a9"],["/categories/Docker/index.html","4dc0a2b2b03aa7da4233bc05e57d8a9b"],["/categories/ELK/index.html","5f8e25eb326548f0bb3ec74353556708"],["/categories/ElasticSearch/index.html","b67accd02733ec0585523d9edb0d25b5"],["/categories/JVM/index.html","0f3353d53f4dab785a6fe824f9aa4aaa"],["/categories/LeetCode/index.html","eae8d9587c671b2cbdbf4632fabc590f"],["/categories/LeetCode/page/2/index.html","7e68a894e86e9659abc1064e9cf73613"],["/categories/LeetCode/page/3/index.html","9eab9065906cd3825a5bc4f3a9a2da64"],["/categories/Linux/index.html","1d6680d1a72b93e7cbc0b5e229578391"],["/categories/NIO/index.html","896920334cef647b3169ca5cfe58d75e"],["/categories/Netty/index.html","13927b4ff55e6e3cfbf7bbfc30647606"],["/categories/Nginx/index.html","9eded99fd4bfb1fd198544de3fd60d80"],["/categories/Redis/index.html","1a71644f12654cdbc2cf968ca0d47681"],["/categories/SSM/index.html","a7b277953bbc16e3aa29f4a0d7e235d8"],["/categories/Spring-Security/index.html","bdbc162982caf5dba3828e06a31bbbe4"],["/categories/SpringCloud/index.html","4b8e6d8ceb363ee322d01ea941080356"],["/categories/Spring框架/index.html","72aa91420e23ae09219ac6b1be82eaa0"],["/categories/Spring框架/日志/index.html","997cd7d84b41e42e83881273f4facac7"],["/categories/Swagger/index.html","c9316e8b3e5691dd1997247fef2aaab2"],["/categories/Vue/index.html","53924dbd0b7b3aedd6c9945033f96bb7"],["/categories/index.html","b954146fc049f1f569248073351d6fe4"],["/categories/分布式权限认证/index.html","a6f2060796c8934a61fd8fa99ade9d17"],["/categories/前端/index.html","982df25eff5ea2a33cd7237d6fb203a4"],["/categories/博客/index.html","636d095e7475f14ae793d35f0b6224a1"],["/categories/学习路线/index.html","76a10b3eb6208ce53145e05857881470"],["/categories/工具/index.html","44fb22d83eced6ea993ddeca3b670656"],["/categories/数据库/index.html","73045331365ca7bbe74b415394d4d1ca"],["/categories/消息队列/index.html","c6bad980b6833d6f975f0ee872093126"],["/categories/笔记/index.html","edc72d1aba87d5dec429c2695d39aaf5"],["/categories/算法/index.html","27cc166713befecca4f3834bfc3868b8"],["/categories/算法/page/2/index.html","e603fa7fcb4f625666ca0b54027ffa0d"],["/categories/设计模式/index.html","8c60ff7ffe277f9e4563d54067b975ee"],["/categories/设计模式/page/2/index.html","987e105b59f4a236a8b9efb19a2a42c2"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","9bf0826a9824c5fffd511eaeb9841278"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","fa8af9fd3079af156ab73a475420ad60"],["/messageboard/index.html","3c1581ac9cdd20a55ee77fbc1fb189e9"],["/page/10/index.html","e10917e159838199bc9915ccfa5a733b"],["/page/11/index.html","515b2bef146514e0291caf9197d5a56a"],["/page/12/index.html","c594d9337f7875f352ecb34a16a83718"],["/page/13/index.html","86a540a64813b3c1c7e245996c4239a7"],["/page/2/index.html","873b62adefb2a35828dd3fe1927ba805"],["/page/3/index.html","aac25b72c2b95ed677a07049ab2fcddf"],["/page/4/index.html","9a0cd5e9ced3c8e7c6d68abf040bf34d"],["/page/5/index.html","c30c8070df9a7929cc129f70597c675e"],["/page/6/index.html","e3774e6533434bf005f0a2dc938a28bc"],["/page/7/index.html","fbdf9ead619727beed7e78ef9637feff"],["/page/8/index.html","0c15ac1cb3beca15bea284e5a8fb9dc2"],["/page/9/index.html","3120f8483e48aebc7b5b8fe93c389332"],["/sw-register.js","d5271a06db99a97f814ff7f7df5bcae2"],["/tags/Ajax/index.html","c8af9ed69ada7eae2dc434799d3e2a2c"],["/tags/Axios/index.html","4743fe9694be932c093797e6dde53606"],["/tags/CICD/index.html","a283e9d35c36b076ecb75e4d61aebf90"],["/tags/Docker/index.html","eb7d21362c7c9fae09a9c5dd984f9699"],["/tags/ELK/index.html","cae074e30db0be65962a519d23aa1f63"],["/tags/ElasticSearch/index.html","715339cc722c27e58279be3a5a392b51"],["/tags/H5/index.html","edf215fa469cdca07f3827a8195c5b09"],["/tags/JVM/index.html","1c5e1695a3cf3eaf1f0c94d808329312"],["/tags/JVM内存模型/index.html","8bd4c92c48ac57c058988b97fe62d136"],["/tags/JVM执行引擎/index.html","66302940766d48d4e00f748527d819fa"],["/tags/JavaScript/index.html","d7df37e8160dae8c6b5b2a85606bfa09"],["/tags/Kibana/index.html","ddbbc3d2247eb378086719c3672c4d42"],["/tags/LeetCode/index.html","923eb159445c65a83684f7c0bb214765"],["/tags/LeetCode/page/2/index.html","b40719eb5ac3d480fa59a0af3d46c0d6"],["/tags/LeetCode/page/3/index.html","c1e346b4238afbca7bf0f32506b07954"],["/tags/Linux/index.html","06ee26c95dd242efc59031ef6498fc01"],["/tags/Logstash/index.html","66b04184a8bb2e93c2f5389b2d576251"],["/tags/Mock/index.html","64f73c46e3034ed6bd987992b2ab136a"],["/tags/MongoDB/index.html","a618474b73ac36eabf73491d119b0d42"],["/tags/Mybatis/index.html","0c36b48e0c739ea942f7d6951afc6bae"],["/tags/MybatisPlus/index.html","2b2bd456387b124196696ce12a0cba1e"],["/tags/NIO/index.html","1ae80b3dd6c8151633643b0154db5a82"],["/tags/Netty/index.html","3b99070b75987e18c602b37833c10761"],["/tags/Nginx/index.html","787ad4cc3a6f9de9a10bbd87e324039e"],["/tags/Promise/index.html","b8d5ca248fbfd8402fdbf35aee8022fe"],["/tags/RabbitMQ/index.html","e47ad840f70aff9c8b2b1d18976317c8"],["/tags/Redis/index.html","d379a59cd572d4132e338a1e50b1e325"],["/tags/SSM/index.html","eb55f0d3b0ce05518401d5893fef281b"],["/tags/Spring-Security/index.html","2b68c68c305c6aa2aee2d2d5d2082e62"],["/tags/Spring/index.html","562cf5ac22baad54435bbbed54579dd6"],["/tags/SpringBoot/index.html","7d8db8d7d1d134702b16a81aecc1a75e"],["/tags/SpringCloud/index.html","1b7e10791b0c54b2c085aae038bc693c"],["/tags/SpringMVC/index.html","d20011f2f57f79d3a1f6772e0166ebce"],["/tags/Swagger/index.html","ee7737f9c8e07cea8401726835c31b0f"],["/tags/git/index.html","d9704e9a5f94b3c49b99e9b3b6a41350"],["/tags/hexo/index.html","605bcde8793526a21a95b4ccfd239ab4"],["/tags/index.html","3d55b63e2d1d0517fe14b53067795514"],["/tags/jQuery/index.html","222cc575b599ae2e65eeb8061b739f4b"],["/tags/java/index.html","55d64398d3ace1a3e7d18937b29bacb5"],["/tags/markdown/index.html","5c24dc70568900da09257d9b675c91dc"],["/tags/mysql-数据类型/index.html","7fd0990cc16b7a7b5f1e4205e3f5d78c"],["/tags/mysql/index.html","0cebdfebf94de0f9dc8520b0ec128935"],["/tags/noSQL/index.html","c961cc5dba3b029768c9f7a0feb165ac"],["/tags/typora/index.html","57bed0f8a2c2aef46a3a4eb57b4d51ef"],["/tags/vue/index.html","d31c5c34bacebaeb70ad2c8e46f3e905"],["/tags/享元模式/index.html","bece6096d38607b2e180cc9072931094"],["/tags/代理模式/index.html","47617ca0bdbd527dbfa1d3e582d80b84"],["/tags/分布式/index.html","d78b0d17fc825ac908b55b5f6b648524"],["/tags/分布式系统/index.html","ac14023f4f41b700f2f03e7895512ac1"],["/tags/前端/index.html","7684e70a26805f90dfb03907f2685045"],["/tags/前端/page/2/index.html","c21fcac1b00983018d00a95616e56f10"],["/tags/博客/index.html","d739cac2318a52bfd8da8bf58090815a"],["/tags/后端/index.html","5309dbdee829ae7c225ab6767d7f1a92"],["/tags/外观模式/index.html","9549543c87e57ea457c2ed3c9cd6e7c2"],["/tags/容器技术/index.html","682288c9b0a98a3b2cf411e2799444d5"],["/tags/工厂方法/index.html","6df693de7ac72a0cac07f1012a4536c9"],["/tags/微服务/index.html","db077ea463b910567cfcce67320f96b3"],["/tags/抽象工厂/index.html","5a556741055ffeca09c1c30f23bf48f9"],["/tags/持续集成持续部署/index.html","b0c0469db3c4ba687486104229435520"],["/tags/排序/index.html","e04ec498e35f808ec88d504cd81b1561"],["/tags/搜索引擎/index.html","3eee4986f6bc759075adc50cb84f24d8"],["/tags/数据库/index.html","42e4483483073fb5a9d4efcad13e6fd3"],["/tags/日志/index.html","9f380333f744f9faf0c8656223277a23"],["/tags/服务器/index.html","e16a075899ef245484a4c23ec0ba30d1"],["/tags/权限认证/index.html","b440a96017522f5b4640c5472f9f7fed"],["/tags/查找/index.html","33159bc31c05effc4e565c766f04391c"],["/tags/桥接模式/index.html","bc7095f8700523938d7cf46fc798d706"],["/tags/模板方法模式/index.html","92fd83e3b88bce145c4d39cf0b01b8e6"],["/tags/消息队列/index.html","26b0dc5cc1e482bcd38dce6c686ebb10"],["/tags/版本控制/index.html","8e01ecdfcb930d1a503cc5af495a663c"],["/tags/策略模式/index.html","0275c4a43762fe4b06372df255248b60"],["/tags/简单工厂/index.html","42a9108dd81467fad6963a541167ff80"],["/tags/算法/index.html","a7ebb7a1654397c3e330216260a32dfb"],["/tags/算法/page/2/index.html","ecb2642854cb4ea84d94a84d34bddb6d"],["/tags/组件化/index.html","8139bd551384f34c246fc9d65ba167aa"],["/tags/缓存/index.html","c99e3df1c86a5616ba56b1924f6a7f4d"],["/tags/观察者模式/index.html","1b47f1e11f803c5cee9eb0db7c7d8449"],["/tags/设计模式/index.html","d75a02865d6ec5e83623083f6d60841a"],["/tags/设计模式/page/2/index.html","7f01319142932f6e44e422fb3e9586ca"],["/tags/适配器模式/index.html","b165720234a341ece42e4a240e25c628"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
