/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","3d2738e3f2aee20fc0d71d4563771a3c"],["/2021/02/22/博客的搭建/index.html","ee627014050ee17ec13f4955ec912648"],["/2021/02/23/如何使用markdown/index.html","8888b16333761c510fe0fe151ebf8b2d"],["/2021/02/24/mysql命令大全/index.html","8804dac4004d2841035e46a02abb6887"],["/2021/02/24/mysql数据类型/index.html","bf227f7845d11328809c0e8a16cf020f"],["/2021/02/25/Git的介绍与简单使用/index.html","ffe70dfd5f53aeaf1f3c2722bdcd6858"],["/2021/02/27/简单工厂模式/index.html","70dc203324c622a96f3026ddc07597eb"],["/2021/03/01/工厂方法模式/index.html","8727afcc6963653b332d48dd804713c9"],["/2021/03/02/抽象工厂模式/index.html","b6e805a2c505ec11a3e37ff8f5fcdec9"],["/2021/03/03/单例模式/index.html","0b1c13579f48c1bd5b11ba2fb391831c"],["/2021/03/04/观察者模式/index.html","dac1eb346ca17cad4e59a2b0e133a05e"],["/2021/03/05/适配器模式/index.html","70b5e4a6fc5f296bf010745583c0e7c8"],["/2021/03/06/模板方法模式/index.html","72c83c3248e3fd1e734e69fec1c89fb8"],["/2021/03/09/代理模式/index.html","8a2f5ead7eb19e365cecdf20e3014033"],["/2021/03/11/享元模式/index.html","9ef617577fc31e6ae39366f27f49146e"],["/2021/03/12/外观模式/index.html","052d57702d876020ce8a6712b9f3d491"],["/2021/03/13/策略模式/index.html","0d0aa44fa8d9a29adc94b151412519c4"],["/2021/03/14/桥接/index.html","f1f9ed95350b74606d0c1efa0d4007b6"],["/2021/03/15/LeetCode-多数元素/index.html","6b85d5724e50564b5ff7b256efea8fcf"],["/2021/03/16/LeetCode之汉明距离/index.html","b476068194cb5c6af78c67dfff09c3e3"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","3d84158a85be40d2164828197638ba30"],["/2021/03/18/LeetCode之两数之和/index.html","f5c4c9a8519703b4f842060e30833431"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","ff1d949ed9f5c645800c4cefe9d577fe"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","895ff0399d6624e72d89ab1c3f17229e"],["/2021/03/21/LeetCode之有效的括号/index.html","8d436cd726513d9c86cfcb0638571dc2"],["/2021/03/22/LeetCode之移动零/index.html","43d259e1322d900efed1ecc89e70b3b4"],["/2021/03/23/LeetCode之爬楼梯/index.html","335dcf88d5cad8394fcd876f0df71566"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","1f225cb3fe3153696411860472eaf85e"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","ec15d4ea646647467ee383637d11f63c"],["/2021/03/26/LeetCode之最大子序和/index.html","f23751be9b544e66ef3adeb9669e5b2a"],["/2021/03/27/LeetCode之子集/index.html","e7ffe95a8776f4d521035b8d5e4589a1"],["/2021/03/28/LeetCode之合并二叉树/index.html","eda7991d32ff8b9d69be4b14a16b9938"],["/2021/03/29/LeetCode之翻转二叉树/index.html","387a8329f6e3784066705dca1ba2a2e6"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","41baea0cf9364d89835391622111a8fa"],["/2021/03/31/LeetCode之翻转链表/index.html","5166936d2e2cbf089cd25c7bed5dff53"],["/2021/04/01/LeetCode之相交链表/index.html","49e91114d514c22c250d5100613bd87e"],["/2021/04/02/LeetCode之最小栈/index.html","5cf82d19b66f9b5103ea0ef3f25afd10"],["/2021/04/03/LeetCode之对称二叉树/index.html","862f0deed18aa8b636c57fb524cb9c5b"],["/2021/04/04/LeetCode之环形链表/index.html","c090e9836fdbf1799023addd64964bcf"],["/2021/04/05/LeetCode之二叉树的直径/index.html","7146e52f1e98375f4b78efc2a7617ec1"],["/2021/04/06/LeetCode之回文链表/index.html","7d5c1f380207b9a29df093d4ce1ce2b8"],["/2021/04/07/LeetCode之比特位计数/index.html","94b5df8176e103e9aca620605e0f933b"],["/2021/04/08/LeetCode之全排列/index.html","4e4642fcc5ba35a0b75401522cdf2632"],["/2021/04/09/LeetCode之括号的生成/index.html","712e58716054013d0d9691146d0bb4d7"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","6bc6be7e68ee5f419e469cac970a8360"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","c7fbba0a9119df36ae36a834aa778fb7"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","796be99a5653aa14058a915fd156679b"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","3d9ccc02b369ef879f29f1a45effaf71"],["/2021/04/14/Mybatis/index.html","861645e49aa3afd77ee3a8e2c99bbb61"],["/2021/04/15/Spring-1/index.html","e6d152d491ea559bb68691babac99680"],["/2021/04/25/Spring-2/index.html","947544dcae827c50662cc75ce0939adc"],["/2021/04/27/SpringMVC-1/index.html","48ae116faa0ed43efe053b77874bb451"],["/2021/04/29/SpringMVC-2/index.html","b9478d7b18c6e284fb19849e7ca79355"],["/2021/05/03/冒泡排序/index.html","94c163a095a63a0d310b8591f36ceaee"],["/2021/05/08/选择排序/index.html","5796c4b453e301fc1ae359a19108966b"],["/2021/05/12/插入排序/index.html","c9871251f6e9bfb23e6133413d9afe19"],["/2021/05/15/快速排序/index.html","5fb7e90309529fc5c9c19cd6faccf177"],["/2021/05/19/基数排序/index.html","8ebc8b6694c3458c41c09530b4be5495"],["/2021/05/20/哈希排序/index.html","e47eecb30eaba50725d44460dd551c8a"],["/2021/05/21/归并排序/index.html","1726587101f3a9393b9190af93a5bd2a"],["/2021/05/22/二分查找/index.html","87495ca146374a7be0e6672b6020a12d"],["/2021/05/26/差值查找/index.html","cfd91b28b34bfdaaebb9735c81dbbfd5"],["/2022/01/12/高精度大整数计算/index.html","8241421f1bda76ee784d8dc644ce7639"],["/2022/01/22/前缀和/index.html","a7723b5d47311439391a8eb2738566cd"],["/2022/01/23/差分/index.html","e9800fbe6a68d1f36ed7e81895687bf3"],["/2022/04/04/MyBatisPlus/index.html","e853a64d332fa266febcd60751ae7c0d"],["/2022/08/17/jQuery/index.html","e4a830a741b13fc9d56744d9709c6308"],["/2022/08/19/JavaScript/index.html","bdf1ec8b4b3f674c95be322b07822cd9"],["/2022/08/22/Ajax/index.html","ffacadcfe9dd10732663ad9d64f3235f"],["/2022/08/23/Promise/index.html","b91c31e046b291600c7468142dc6fa05"],["/2022/08/24/Axios/index.html","be345f0e375a4262ef98ec61b0e24fa4"],["/2022/08/25/H5本地存储/index.html","1a97b46c1b4ced4a242426556529939c"],["/2022/08/26/mock/index.html","25c32ba56dac1be280a8b1264936ef6f"],["/2022/08/31/VueJs/index.html","abbbe9bd2fed7cf595bf69af7752aa75"],["/2022/09/01/vue组件化/index.html","383d05cf753e910e0ee48d3f760d6069"],["/2022/09/04/VueCLI/index.html","ff79ebdb30bedf175e3bd90dd814b22a"],["/2022/09/07/vue实现动画/index.html","790bef3e2f3df276beecbc76ff29c0ce"],["/2022/09/09/Vue响应式方法/index.html","54ce2ce5749ac995ca2ee04f3763a2d9"],["/2022/09/10/Vue异步请求/index.html","868523a1b13b2ab41a5fa49122393e67"],["/2022/09/11/vue-Router/index.html","b3695eee72a4a01df233d082301a1cf6"],["/2022/09/13/Vuex/index.html","3f406cc814c1238c8c713232773cb14a"],["/2022/09/15/SpringBoot/index.html","5945fd24ff07b1f96d30eb5eb24f420d"],["/2022/09/16/SpringBoot配置FastJson/index.html","fa4d505dbb27c5f2e146d3b4142c38dd"],["/2022/09/19/SpringBoot参数校验/index.html","b44913bef47344d91327483412d86a55"],["/2022/09/20/SpringBoot的异常处理/index.html","92820d8fba2f7333e405e39d330862a6"],["/2022/09/21/SpringBoot统一响应处理/index.html","13a60a027a24280a0e58008ec823bc6b"],["/2022/09/28/Linux/index.html","30f124f60acf92645c5fce67cc25e825"],["/2022/10/02/redis基础/index.html","653ff3c3fbb54e227e97e2c65d32b9d4"],["/2022/10/03/Redis缓存/index.html","f42b3ac6dc77f3bfb21f889e88b7381a"],["/2022/10/04/redis缓存穿透/index.html","031d35e441ac2646efef2ce9d57fdb10"],["/2022/10/13/Redis缓存击穿/index.html","963c83fb8c54566b2282442cb22c9e84"],["/2022/10/14/Redis缓存雪崩/index.html","50cde005cbb72c39d105b046a61214a2"],["/2022/10/17/Redis集群/index.html","02924a39bf6373c4040565166a78200f"],["/2022/10/18/Redis哨兵模式/index.html","1971168e2f174c98dcabadec819110bb"],["/2022/10/19/Redis主从复制/index.html","f4d2a96ecaa0af09e5e5198976be236c"],["/2022/11/03/Spring-Security/index.html","1bfe9e94d00a05a0693b74b3b21be5f3"],["/2022/11/08/SpringBoot日志/index.html","70656b153665fa555ffc32266f15e0ce"],["/2022/11/11/Swagger2/index.html","c7c1e6692df79f31308c46461506f60b"],["/2022/11/21/Nginx-一/index.html","5e0e6d26683ae99c375e7f29b145a8bc"],["/2022/11/23/Nginx-二-代理服务/index.html","6ffe133a9f36d3b8053e0bbc5b014ee9"],["/2022/11/24/nginx-三-负载均衡/index.html","4ed8870dcd510cafafe9135c8ea63baf"],["/2022/11/26/nginx-四-缓存集成/index.html","9e5fb5a7f8a89f936f9e7e2aa2b9fa4a"],["/2022/11/28/nginx-五-动静分离/index.html","925c2da0cf046dc130499f56191ffbf1"],["/2022/11/29/nginx-六-制作下载站点/index.html","8fa3cb65ec75239369b1c3ec4095a124"],["/2022/12/06/docker基础/index.html","584ac6a43e310ac6abc24f32ee0cdac2"],["/2022/12/09/Docker高级/index.html","17cb745bc82b9c3d347a7d4ecb8ac041"],["/2023/01/04/MongoDB/index.html","97b6a90d4abee31df3ab6e91dd4136ed"],["/2023/02/05/消息队列/index.html","73e6acd8145042f34d55fc06b4296f58"],["/2023/02/12/RabbitMQ集群/index.html","418f279263fb524c3b0aac94bac29bab"],["/2023/03/10/CICD/index.html","95245844066b8170e26f5ed0b0c7e969"],["/2023/03/11/ElasticSearch/index.html","2cfbd69aeaeb3dd32132fcefe1f42aaf"],["/2023/03/12/ELK日志平台搭建/index.html","15e229c1c3f70a360c04f0885087c9a6"],["/2023/03/13/NIO/index.html","2270288af187e4d0b1f77d92563afeeb"],["/2023/03/14/Netty/index.html","b59d55966336dc940fb1c8049a949c72"],["/2023/03/15/SpringCloud/index.html","639f5cc0040375a5a259844bd13497eb"],["/2023/03/17/分布式系统认证/index.html","c8c5a2abadcf3bb3f522641f09f3990e"],["/2023/03/19/JVM概述/index.html","25a233a502055e3f2b0c1eb96d758b81"],["/2023/03/23/类的加载过程/index.html","8dd1c46afbc6c15951d78a0577bb1ea2"],["/2023/03/28/对象的实例化/index.html","dde8386772d1ce73902425af8526e0de"],["/2023/04/01/运行时数据区/index.html","88af6981bc0d1e6af2048ab9d6e86f73"],["/2023/04/04/执行引擎/index.html","6cc7976c382376aa7283d94eda36d294"],["/2023/04/06/对象引用/index.html","df8fa9a82e3321b4c9e6b80a96c177d0"],["/2023/04/09/垃圾回收/index.html","6266e7490c209aff5e1e926c06ab1a89"],["/2023/04/11/垃圾回收器/index.html","e8fb5e1227aa57f390a0bc85d565604a"],["/404.html","fd48340bba077c685383b55a4a571512"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","2c972a4835581ad6743c96962100cdef"],["/archives/2021/02/index.html","ff46fa5a15652a242cb383e9ebf6c3dd"],["/archives/2021/03/index.html","0fd65162089a87c28306ab93e1516263"],["/archives/2021/03/page/2/index.html","90e884297647331de0c691cfd1fea99e"],["/archives/2021/03/page/3/index.html","01cbda21c3776b1c4268f6e3159f9480"],["/archives/2021/04/index.html","4dff71d195bc110a09e534229d6328d8"],["/archives/2021/04/page/2/index.html","396890ce50138f0a449d158ad38146db"],["/archives/2021/05/index.html","c41a1a3051c2126edee9cc30d10dd5d5"],["/archives/2021/index.html","c21d5c08b49be14d9b40f4efbdc86b41"],["/archives/2021/page/2/index.html","8d3c86154cb7a3b86e89c9c6d2e72809"],["/archives/2021/page/3/index.html","3cd8a8e0de29898bf5a7a74471674230"],["/archives/2021/page/4/index.html","547006bcb7eadcbeff4a065938b528c8"],["/archives/2021/page/5/index.html","836a1b657c816679bfa086fabb865e4b"],["/archives/2021/page/6/index.html","af61bdf055c18394d37f53d5082f1394"],["/archives/2021/page/7/index.html","69ebc071683cba379d348225f3e95edc"],["/archives/2022/01/index.html","666e7e8d40f3a410d54f379d783d4e60"],["/archives/2022/04/index.html","7a945d892bfb9bfe11b98065343fde3b"],["/archives/2022/08/index.html","a42215c609916b29562b55f8d6e0ed5d"],["/archives/2022/09/index.html","4b803698150e799ec417c276d272c200"],["/archives/2022/09/page/2/index.html","d50c7b28f6a463a91ef55c965b4508d6"],["/archives/2022/10/index.html","462ffcdc9907130d3211ecc676ea6b95"],["/archives/2022/11/index.html","9df4665f7a0c21d4ff4a8e6b1c365457"],["/archives/2022/12/index.html","2b1df64ebc36df16f88b733dff0937bf"],["/archives/2022/index.html","abc40645de990460a548ccecb1261ede"],["/archives/2022/page/2/index.html","64ab618a36ddc0859afa4d8e0033756c"],["/archives/2022/page/3/index.html","60606f8d7eac5beff2e98fa24b3dc43e"],["/archives/2022/page/4/index.html","a1fa4c12cfa494e1825bc03df9a8a398"],["/archives/2022/page/5/index.html","72ee786dc0e20d509cf6a3c4a3d941f5"],["/archives/2023/01/index.html","4a51b2ff776028d39368c753f5b266d4"],["/archives/2023/02/index.html","88e273243713de9fa0120e5bfc798c31"],["/archives/2023/03/index.html","1601f517a135a2773d0ef883509c0e9c"],["/archives/2023/04/index.html","9c0e7e9cb531e299228c5cdca1b30669"],["/archives/2023/index.html","8919eeb507d82f505d3f5d8819e317cb"],["/archives/2023/page/2/index.html","480c62bb621f2c2cb2adff0f6e77f910"],["/archives/index.html","125c7405efc32aa7cff73c170ff045a1"],["/archives/page/10/index.html","630bc68674129dfc338c00ab13c9d39b"],["/archives/page/11/index.html","42c57e1d5347484ab55e4708c3c81d07"],["/archives/page/12/index.html","4d219f5ffee109c3bc77ec68680b0a1e"],["/archives/page/13/index.html","1af758a15586376beb0351872c874f7d"],["/archives/page/2/index.html","42d9a78659f02cd4a138ee3d0d2c60d0"],["/archives/page/3/index.html","5990dbf65fd0cc311713ce02b30cbc72"],["/archives/page/4/index.html","8947ff15c72f7c23678f09c3dde6177a"],["/archives/page/5/index.html","2e36c695c44fcdd25ae9fbdd8c4099be"],["/archives/page/6/index.html","2fdde7816cdcff31cdfbfb437252c776"],["/archives/page/7/index.html","1abb9e754724fcae102683c290bb5acd"],["/archives/page/8/index.html","5455fda70211e4447ebdae308b0157fa"],["/archives/page/9/index.html","23b585f1a198c070f8b847e004bbd117"],["/categories/CICD/index.html","cd9e7affa67672880141988eb3535d1b"],["/categories/Docker/index.html","4131867ba132b8c4de9f7d08807a3c2a"],["/categories/ELK/index.html","aefbfd6b32d71cc4293ab69ff87ad1b2"],["/categories/ElasticSearch/index.html","9878c6b413f123e5e9ad60686b4e26cb"],["/categories/JVM/index.html","ca3f3d569e2efe2260ced1c0ff2ba499"],["/categories/LeetCode/index.html","06fe747526de8f1b7e4a5d3c759415b2"],["/categories/LeetCode/page/2/index.html","88e2d8fe1a42c760440916f66ce739b2"],["/categories/LeetCode/page/3/index.html","6ea2a81ffa29ffab47062f7138d8b36d"],["/categories/Linux/index.html","eb75a7f9fd14232eec5558d31c3c827e"],["/categories/NIO/index.html","31057da6b5e1b93fb7dbb40f73f07c7e"],["/categories/Netty/index.html","51a88508adfdbbafdbe379a61f262b66"],["/categories/Nginx/index.html","f5ba3d3c55e32c63b8cc3555c625d3f7"],["/categories/Redis/index.html","2a278404967b62074ebd4758c78fe02d"],["/categories/SSM/index.html","73e9765cad17951093bc4151448eee18"],["/categories/Spring-Security/index.html","cb07d60d4d712b5935b4df4187e948aa"],["/categories/SpringCloud/index.html","4bb982abc53482208ddf3d1be3c7aa5b"],["/categories/Spring框架/index.html","41905a11235c32fe777082c18e2f7290"],["/categories/Spring框架/日志/index.html","9dcadd080518b425e20491c122f6c330"],["/categories/Swagger/index.html","bf42570acee1f655200c760c82def1fd"],["/categories/Vue/index.html","830c626d2bb4ea60f9b4953a16c918e8"],["/categories/index.html","0c6f518f00bc57d69e2bf1e69cfab15c"],["/categories/分布式权限认证/index.html","f4340c6300defe126e3fa21988e25a9e"],["/categories/前端/index.html","2c643d10619d224d2dd588296f8632b0"],["/categories/博客/index.html","e80fa367365ad1f679c662a5c21ca33a"],["/categories/学习路线/index.html","c9db52a1778b67ce13ef3d3873a81557"],["/categories/工具/index.html","95a204e3752f8960da4e205ac65b1a55"],["/categories/数据库/index.html","ae5f6d40b77490e1d775537e90f1db52"],["/categories/消息队列/index.html","c8d45ff06d830276639daa99d8e85eeb"],["/categories/笔记/index.html","bc4eae976c74f27e654865c91f69ccf2"],["/categories/算法/index.html","2c5ab070bd757aa0ac652de29d46f682"],["/categories/算法/page/2/index.html","79f35df4468e0d39a28349a91d9cf1b6"],["/categories/设计模式/index.html","f6b7dcfeb551802ee19156c58fb5022b"],["/categories/设计模式/page/2/index.html","eaebd7eebec6f83e6cceffa83f703cfb"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","a7cdbed0b8cd87d66f4ec62350612ab6"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","d0016792aec51786238de2ae9ae29158"],["/messageboard/index.html","55e706eee9915b8294ccc7fd8ad0b4ef"],["/page/10/index.html","31ae50769d92a88e38d01fcafd4475d3"],["/page/11/index.html","28986d3355b2e65c7779dc83a0f5c5c4"],["/page/12/index.html","007be28215ddb8ea0e16a62f7de4d93f"],["/page/13/index.html","db7e5bd4ab963292437d74b9ef9b6b98"],["/page/2/index.html","25ecf12d043153d2ddd907f10b40cbd7"],["/page/3/index.html","46f9eb78b8094974a0137d1a9e2650a9"],["/page/4/index.html","311d980d6c93cf73768281d079c7d62b"],["/page/5/index.html","af39522444a152775da68806cad8dcde"],["/page/6/index.html","f812203b8696501a64d68f43cad56233"],["/page/7/index.html","05d9a04dbac241ba47bd5de3022fefbd"],["/page/8/index.html","91d12b958bd618e5a5fc0e775d519417"],["/page/9/index.html","87ca6677d48f73430911152d9f66a012"],["/sw-register.js","129c05fbb8c995fcf0ff6b0e6a5abca3"],["/tags/Ajax/index.html","0219c837c7b1485443f940b51072e1b3"],["/tags/Axios/index.html","f2bb1e76c412b5bc6e7c4d6d2db7fce3"],["/tags/CICD/index.html","384c9ba6cd9ef19525ffd06c84f8959e"],["/tags/Docker/index.html","e92062a1120d123cc5399693e34aa5c7"],["/tags/ELK/index.html","5d2e15b44522c47ef09937cb9e52cca1"],["/tags/ElasticSearch/index.html","70e2db6b5f5ff8c8ff19cb68137153bc"],["/tags/H5/index.html","94c5c0cf31c18f229b7679a826824bd1"],["/tags/JVM/index.html","3ab12debdeeeb8533b76ae750fce12f3"],["/tags/JVM内存模型/index.html","c89b290e5f2f92d152e766f2670a72f1"],["/tags/JVM执行引擎/index.html","942ea0fe2dc12d7193ea9a0b5ccd04a6"],["/tags/JavaScript/index.html","1a6316e3a1150d1263e5bfc94d9191fa"],["/tags/Kibana/index.html","a7d8329abd141b63319bb98b8d841795"],["/tags/LeetCode/index.html","53cf9128d34d34f94fb955d77b3b8504"],["/tags/LeetCode/page/2/index.html","41710debacde4bed42bad34a09d387f9"],["/tags/LeetCode/page/3/index.html","02c395394e21f1056eec665ceeb71d2c"],["/tags/Linux/index.html","1230eb0b2ed8f059c06ceec951fee61f"],["/tags/Logstash/index.html","505c4e357b10d7f6d7c27417a5fa1a90"],["/tags/Mock/index.html","c87ff47da01df1d7d3c83b3690f02843"],["/tags/MongoDB/index.html","b98cf8a69af34fbbef5ba1c58833e05f"],["/tags/Mybatis/index.html","ee8761696c918361d22b9bf703e6c60c"],["/tags/MybatisPlus/index.html","ce5cfd9d896520f977418e2bdd6e88a8"],["/tags/NIO/index.html","20e236a0aa36c7207a9ab143e67ea8fb"],["/tags/Netty/index.html","dbf57c0928d392d451e4c4e35d639b61"],["/tags/Nginx/index.html","70a48cd888e335a7fd48cf9bf58d4682"],["/tags/Promise/index.html","2a7fe2f9d7dfedf94417f241c2de1eca"],["/tags/RabbitMQ/index.html","2c2d275eb21b4d6cac8679554a5c6593"],["/tags/Redis/index.html","c3542c54678982479b72534d74686af6"],["/tags/SSM/index.html","a3f02239ad61117ad960bf0b8b7277d8"],["/tags/Spring-Security/index.html","e57b975a901744b77f207856fe4b31fa"],["/tags/Spring/index.html","0582de7b8f496e12c7d1b4f3ccbc3123"],["/tags/SpringBoot/index.html","6e0b9866a111f7e1487e2dd2fe0f0204"],["/tags/SpringCloud/index.html","0aac508244befe7a4d475fccb0ff1473"],["/tags/SpringMVC/index.html","a2a7bb190479b16044643c46b6ef3f4f"],["/tags/Swagger/index.html","6b128746dece8711e149d01de35f3b60"],["/tags/git/index.html","0e7d9a31b7a5f41f3ded2180a3ea34e6"],["/tags/hexo/index.html","434c0bba089bdbf2918d2e1c9841dbd7"],["/tags/index.html","c2da9d30608187e7071e83c42fb3cb6b"],["/tags/jQuery/index.html","df731daecd24cb7564d49450a2f9c7c8"],["/tags/java/index.html","558a38b3814fbcce2a24430a7a086807"],["/tags/markdown/index.html","88e554260660a7c35ecfaea594de8f09"],["/tags/mysql-数据类型/index.html","b2ff3557b1c53cdca0b26de739832f6f"],["/tags/mysql/index.html","a1aa4abfa6e70552195bdc17c0f38e3f"],["/tags/noSQL/index.html","8bbe245ef5f4a5e08a39b9b8dacd74c8"],["/tags/typora/index.html","c04d487427cc9c1ee6799110c75b92e0"],["/tags/vue/index.html","b28a3567d469969af7f40b0c33aa7b2c"],["/tags/享元模式/index.html","8fa81ed699433f260f98d8108578860f"],["/tags/代理模式/index.html","eac9c83ec9aa05da5e81052aebb82922"],["/tags/分布式/index.html","a4e666228c7775a30a3f49e26b87fb79"],["/tags/分布式系统/index.html","350196f02d74829fa2b5f61a370a3cde"],["/tags/前端/index.html","6cd458b7a70fe1a4adfe761c53587489"],["/tags/前端/page/2/index.html","bb63c6cd2fd498d99278edfcdcc1e698"],["/tags/博客/index.html","4aa77b16854973a386306bb379308369"],["/tags/后端/index.html","a2334ef8f7b3f48eeaea436dd891fa87"],["/tags/外观模式/index.html","218074c1eb03ea8d4feeb13b2f0f4c18"],["/tags/容器技术/index.html","a49dd51eb407dbd1f5ff7e37f2ffa5b0"],["/tags/工厂方法/index.html","23bfa49317ae94e7b57e5309824008b5"],["/tags/微服务/index.html","f06578ff12c1a2500edb4707b608d01c"],["/tags/抽象工厂/index.html","3f669d1a035228a3a914ba6fbca283d4"],["/tags/持续集成持续部署/index.html","74ffbca088cbc8b349b677d876ecc9fd"],["/tags/排序/index.html","843c25c5c766e231161f532a8e4f1775"],["/tags/搜索引擎/index.html","a2746cbeae6044c70f7a57fff625e38c"],["/tags/数据库/index.html","af2dd7f1283ba7ee6b1f20409697af4c"],["/tags/日志/index.html","5201c49907c87fb8ac8fa6ba3f88585d"],["/tags/服务器/index.html","4584be45211a79da985f596ddac99919"],["/tags/权限认证/index.html","4272072d66aa182d77ce64aa2357f7f2"],["/tags/查找/index.html","ca15cb9de03a13c68f66d8bcbffb68c6"],["/tags/桥接模式/index.html","558fda6fd0e4541c44a4ce2b5cc1619a"],["/tags/模板方法模式/index.html","6711962031759bc8836c7b7d94f06d61"],["/tags/消息队列/index.html","368a7e6f3334c43122ddabccac8ca797"],["/tags/版本控制/index.html","7f3c53ff6ecd83600274ce5df2bd2891"],["/tags/策略模式/index.html","5f644444482771c186880f97da910edb"],["/tags/简单工厂/index.html","767a4035669641a2782af05369d31e43"],["/tags/算法/index.html","7e37a78be1abb575de6584a02d2fed85"],["/tags/算法/page/2/index.html","977c4c422c36aeb4f419cb9d58d8bef9"],["/tags/组件化/index.html","ce77b901d5788cf98ebaf349a51db87f"],["/tags/缓存/index.html","2211f368dad0730f68d92701812839df"],["/tags/观察者模式/index.html","7756f5e45f073d7194999d2be8e50851"],["/tags/设计模式/index.html","519db726ea3239a4eca4db7e1bce6f6e"],["/tags/设计模式/page/2/index.html","a6442ed4c060dedbbc6d8f8fd403a5b4"],["/tags/适配器模式/index.html","11f7416d8370d8b9fbcd4c7f25441a1a"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
