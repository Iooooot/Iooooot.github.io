/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","f4a4118919da72b91d9129ed66e66611"],["/2021/02/22/博客的搭建/index.html","8874ee3f2b60bfc636b70f088cb79b21"],["/2021/02/23/如何使用markdown/index.html","16b10c1dadb9ef63063499a05c82d93e"],["/2021/02/24/mysql命令大全/index.html","3aa0494a8028aeb999a00a6722432a56"],["/2021/02/24/mysql数据类型/index.html","b167c41f78f488299597e5180183e3e1"],["/2021/02/25/Git的介绍与简单使用/index.html","b28644b501dd6107a2ec7272a3c4e747"],["/2021/02/27/简单工厂模式/index.html","0110deb92ee2ce1dd086b3ec53e6e456"],["/2021/03/01/工厂方法模式/index.html","6e92b6eaaee9bda445ee3c5449134159"],["/2021/03/02/抽象工厂模式/index.html","82b83d52919dca5b98421bd0011a0db0"],["/2021/03/03/单例模式/index.html","16ae3951ba2de667ebfc689923d3c45c"],["/2021/03/04/观察者模式/index.html","71c1f53a79ee6dcc9f261b5dc9b8ee2f"],["/2021/03/05/适配器模式/index.html","835b285c41c817aca39693ef65a9a842"],["/2021/03/06/模板方法模式/index.html","d6d342f7433fb10636c631b2808171ba"],["/2021/03/07/责任链模式/index.html","60f6fc31d2ac759ca8533df050a9f3ed"],["/2021/03/09/代理模式/index.html","2702d046b495e8a2f765b32d4df9955f"],["/2021/03/11/享元模式/index.html","e3c27fca15adaf81ec9ce834704c4c57"],["/2021/03/12/外观模式/index.html","a71b26dc1991ee872beea5c5c478b89b"],["/2021/03/13/策略模式/index.html","4270c9ba24944c16ddf25e23aa3cd040"],["/2021/03/14/桥接/index.html","ad6bfcf3bf3f5b4741ba40fa47a5ff7c"],["/2021/03/15/LeetCode-多数元素/index.html","4118820be0cc63819f1cfe9c19c5fd05"],["/2021/03/16/LeetCode之汉明距离/index.html","ef1c4020d41fe6bd3a68bce657120d33"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","84175cd4cc2b340388b1bf09272cacae"],["/2021/03/18/LeetCode之两数之和/index.html","c0725c93a8c7016452699921f1bc1d26"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","4ae781e0e0d93e1a20078e2648cc542a"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","2db20b497eef37c234a02ead92419d36"],["/2021/03/21/LeetCode之有效的括号/index.html","a40c321c5a644266b05749b077efb234"],["/2021/03/22/LeetCode之移动零/index.html","e7aef0486cd76d2277977f78d4b355a8"],["/2021/03/23/LeetCode之爬楼梯/index.html","b3f0b34bdf4660f5e8d0e91946574821"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","da71456692a4da74e8002d6591b68fc3"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","e3f08315986b14655913db1ecdf3593f"],["/2021/03/26/LeetCode之最大子序和/index.html","58533cefeca45d48e33514d1f2ca8fc8"],["/2021/03/27/LeetCode之子集/index.html","1f81933ab1f07295a831b5d2aef9f914"],["/2021/03/28/LeetCode之合并二叉树/index.html","4aafc6736b84e6fb09db0f63c8e4be23"],["/2021/03/29/LeetCode之翻转二叉树/index.html","33423d97525a5fc1186a71ecbeccc040"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","aa7b5ffa7b5e6309368cd6ae97535ebe"],["/2021/03/31/LeetCode之翻转链表/index.html","9f7620adff55a213a8987bf9337b3a3c"],["/2021/04/01/LeetCode之相交链表/index.html","2a7092b383e8eea70abbedfa5ce056c2"],["/2021/04/02/LeetCode之最小栈/index.html","3e264c813d271b96faafb294cbd1dbbb"],["/2021/04/03/LeetCode之对称二叉树/index.html","1ee6f52cd8d8855ae301cd4191850d1c"],["/2021/04/04/LeetCode之环形链表/index.html","10c8285d59dc9f7620d3e60e7c66bf64"],["/2021/04/05/LeetCode之二叉树的直径/index.html","943d660995a3abee092f64ca397b4e1a"],["/2021/04/06/LeetCode之回文链表/index.html","fbdf7d713c91609a2a662707bb4597ca"],["/2021/04/07/LeetCode之比特位计数/index.html","7c26cdd4102d86018aa3ef67052e1164"],["/2021/04/08/LeetCode之全排列/index.html","fafac430502e7f2819af7fac6b47c3ec"],["/2021/04/09/LeetCode之括号的生成/index.html","8d042a0eb1afbb11e98df0f699272452"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","ef5bcb82b49a43916411972740e32237"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","a3b5b82bd3408e536f00af3e4e5d3d98"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","acdcf4af2f196e3ad88b956f5e373cf5"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","b13600cc351afe189b62a3ed26b17949"],["/2021/04/14/Mybatis/index.html","8bca35f36e5c38403092c6a6b1a5467c"],["/2021/04/15/Spring-1/index.html","71426e0837dd36058ea17b68778c807f"],["/2021/04/25/Spring-2/index.html","275804606b41a706dc37e154a6035933"],["/2021/04/27/SpringMVC-1/index.html","f42f591e99a90ac0429ae6bbbea96558"],["/2021/04/29/SpringMVC-2/index.html","89c4ec9702d2eb91188657b38040b425"],["/2021/05/03/冒泡排序/index.html","8c834a31013826d365b4a91d156a720e"],["/2021/05/08/选择排序/index.html","66c8faaa0bae884e1f9534c5c397d880"],["/2021/05/12/插入排序/index.html","800c527899570bb286e51cfbf95ffa52"],["/2021/05/15/快速排序/index.html","3845e847620cb2b61f48cef2f67c9c69"],["/2021/05/19/基数排序/index.html","beabf79aaadb0fc6193e6139b6e519a2"],["/2021/05/20/哈希排序/index.html","e006eb67ef3186786fdc677b5c406b37"],["/2021/05/21/归并排序/index.html","477976420a161ad3bb4dfcb57c57dd14"],["/2021/05/22/二分查找/index.html","5011fc84e42c35f0aa0a910acc4e2c2a"],["/2021/05/26/差值查找/index.html","3f99f01df51d3e0b50daab32a0862bf9"],["/2022/01/12/高精度大整数计算/index.html","641703f4cbd89e7cf778e318f5fc1c42"],["/2022/01/22/前缀和/index.html","0d58b3ff6a48c8c9e6d9bf31e0f12f29"],["/2022/01/23/差分/index.html","e9fab0b71a03f43d15448acb5cc07a93"],["/2022/04/04/MyBatisPlus/index.html","ce3ca558ff1712ddb4c0efda6c4e5c54"],["/2022/08/17/jQuery/index.html","0f7b01488c92117be2ef28ca1b2d7fba"],["/2022/08/19/JavaScript/index.html","9f85278a171c20f7d0e8f15f7303fede"],["/2022/08/22/Ajax/index.html","6335847acbca38fe3c0732f30543dad6"],["/2022/08/23/Promise/index.html","a4ff0888bafd63fd7ff0c3751d49938f"],["/2022/08/24/Axios/index.html","b3f371edaef9d1fcd9a9b936e66b9cfa"],["/2022/08/25/H5本地存储/index.html","e933f8ff2c779eaed117c20c7e962245"],["/2022/08/26/mock/index.html","b55621940593344102b9b403544286ea"],["/2022/08/31/VueJs/index.html","2d809569deb62c304e3f9c32e938085d"],["/2022/09/01/vue组件化/index.html","439a8ca309666df26d716693665dc183"],["/2022/09/04/VueCLI/index.html","661cbd81dc8d49c1675001f44803418f"],["/2022/09/07/vue实现动画/index.html","7657d57d69c07281d7d3205a4a02e30a"],["/2022/09/09/Vue响应式方法/index.html","10baaeabb54bdc16669e9386439adc71"],["/2022/09/10/Vue异步请求/index.html","57bf6fb687f29b5395745efb28a6998d"],["/2022/09/11/vue-Router/index.html","98c78d0a957b50eb295db83e3ce23ac2"],["/2022/09/13/Vuex/index.html","cdb19417127150d085b66ca65d9944c5"],["/2022/09/15/SpringBoot/index.html","9a1bf1899a8a46c831eecac07ede0006"],["/2022/09/16/SpringBoot配置FastJson/index.html","1648c3afa1d1495702388876456833df"],["/2022/09/19/SpringBoot参数校验/index.html","21c5b1fa57749797294c734cc10d0231"],["/2022/09/20/SpringBoot的异常处理/index.html","3c39f50a4b54355f3a2f2bfa94bd2de0"],["/2022/09/21/SpringBoot统一响应处理/index.html","d70e8d684ea676d0874dd72b4c30dafb"],["/2022/09/28/Linux/index.html","87f928b085facef2866492b65a5c078b"],["/2022/10/02/redis基础/index.html","59477dc6fa8c0016fe3e8d67c5259ac9"],["/2022/10/03/Redis缓存/index.html","e3876795a7021f867a1b8b4dc3235c01"],["/2022/10/04/redis缓存穿透/index.html","b1594b3ae12fbf7fefedc5d020531fae"],["/2022/10/13/Redis缓存击穿/index.html","d89c9595cb60264d6118e7e1b7da7b98"],["/2022/10/14/Redis缓存雪崩/index.html","1344fd00004164d18a8e89cca1b0b757"],["/2022/10/17/Redis集群/index.html","8744e4d218b796545d455585797fd28b"],["/2022/10/18/Redis哨兵模式/index.html","aace62ae81a676901c70bcb7463b7e5a"],["/2022/10/19/Redis主从复制/index.html","ff6cb4f4ff231bc195250aca889c7ddc"],["/2022/11/03/Spring-Security/index.html","82907afffb43b84fd31ec1f063eed87d"],["/2022/11/08/SpringBoot日志/index.html","ebc44e15c9dfcbb2a294d7dc99a2c1b4"],["/2022/11/11/Swagger2/index.html","98f424f2b57f1f2c4fc7207e1bad0fce"],["/2022/11/21/Nginx-一/index.html","11b946592e7817445e16edaa36233efa"],["/2022/11/23/Nginx-二-代理服务/index.html","bc98cbb9e68ab0468bc211546ff0c5bf"],["/2022/11/24/nginx-三-负载均衡/index.html","ba5879b4d41242ce5ac96a3588dfd4ea"],["/2022/11/26/nginx-四-缓存集成/index.html","e423a9b1356705f2c95aba33b42cca5a"],["/2022/11/28/nginx-五-动静分离/index.html","c6d11c7a48c29692192eff7f31ea89b2"],["/2022/11/29/nginx-六-制作下载站点/index.html","9cea737cb8ad555ececb1141c8002050"],["/2022/12/06/docker基础/index.html","c2938be4ead04b28932117c06c9a67d6"],["/2022/12/09/Docker高级/index.html","0e5aea063442efdf024d4798562f52a9"],["/2023/01/04/MongoDB/index.html","cabcaefa7a87c03d6c18a60045b4ad64"],["/2023/02/05/消息队列/index.html","26679aa95b20bdbd28226af3f14e1578"],["/2023/02/12/RabbitMQ集群/index.html","799b8c9ca360838128f323d27d892563"],["/2023/03/10/CICD/index.html","b180e21a446198a1760aea00ae2bdb80"],["/2023/03/11/ElasticSearch/index.html","43655ce41e3401288cb1df3135a78e4c"],["/2023/03/12/ELK日志平台搭建/index.html","9f70d6f4204c1434b13762b6fa306e7a"],["/2023/03/13/NIO/index.html","394c8724f438ad152d9dd55f270db399"],["/2023/03/14/Netty/index.html","30cd22a22a9f74f76c6aaa91e4c1d1a6"],["/2023/03/15/SpringCloud/index.html","6cdbbcba71a341e28e25e56c3e1194e5"],["/2023/03/17/分布式系统认证/index.html","fd6074fb8b76c059d2a1a0a14c2d2216"],["/2023/03/19/JVM概述/index.html","1996829a5e4391d37996ba0d7e9c7d4e"],["/2023/03/23/类的加载过程/index.html","f1240faacf0de8da94192ce9e7e0d907"],["/2023/03/28/对象的实例化/index.html","d18c9d46b817588ffcf064e4d78376cc"],["/2023/04/01/运行时数据区/index.html","49738f7e3f63b30bdf607faac173487b"],["/2023/04/04/执行引擎/index.html","b8247d31413bb79732dac13cffe6bd2e"],["/404.html","f5702a1ddd3e83ac810705673ad72dc7"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","b2a83fb230b3621e9880a3eb0520c4db"],["/archives/2021/02/index.html","2a878d2e36cf248e56190cfb23b6f701"],["/archives/2021/03/index.html","4fc0f840da5a0549c8da92a9c844cd6f"],["/archives/2021/03/page/2/index.html","5eb07c2a533e30ae79265cc34116c19d"],["/archives/2021/03/page/3/index.html","4bab12e827ff93ccb749a2fb2b92202e"],["/archives/2021/04/index.html","0aa32a5b635f9936e6343c074fbe8027"],["/archives/2021/04/page/2/index.html","7f06a3b57257ec2dfb35d0d06a11a449"],["/archives/2021/05/index.html","9074117efd6630a08d164d700afebec2"],["/archives/2021/index.html","580614da72cd9919d1afa90e644000c5"],["/archives/2021/page/2/index.html","1645e7954283e30d25f4a2a8bc90d00b"],["/archives/2021/page/3/index.html","84f3b7715d40d117ed2ab74b9faf5637"],["/archives/2021/page/4/index.html","047d775f7f6d67b002cc5b4178c0ac4f"],["/archives/2021/page/5/index.html","ace6ea0a15b39582d86ec44c6ce2bd82"],["/archives/2021/page/6/index.html","1a6d06602d3f48e7f1c1f377c0834a79"],["/archives/2021/page/7/index.html","c465d3054e149cd3a63f17f986b7573c"],["/archives/2022/01/index.html","21c43ce3173af76491c622314e40c6d9"],["/archives/2022/04/index.html","408bc41f5a92c80f23640f4ded620108"],["/archives/2022/08/index.html","a437b49b1f511d439ba58d8f32664435"],["/archives/2022/09/index.html","9f46d05a5bec692520dfc3d7d28d5cfb"],["/archives/2022/09/page/2/index.html","e72a72bd5a9068a7a1db294cce87fc4b"],["/archives/2022/10/index.html","3aae2aa501057009b6e9af841d535b4e"],["/archives/2022/11/index.html","4ad8dd1e45a080a23486d1b2f71101b6"],["/archives/2022/12/index.html","92b44c18f13311eb6cdb94e2c347de3b"],["/archives/2022/index.html","37ebc5bd091afc4f42b0a495e4ad2d89"],["/archives/2022/page/2/index.html","6921cb37b3f7977f7ec2197476b282f8"],["/archives/2022/page/3/index.html","1ca9fde4f6bd3d48ab84f56e1ebde0b7"],["/archives/2022/page/4/index.html","d214e33d21e90b4bcb5e4505216282ca"],["/archives/2022/page/5/index.html","ea4d87379ccd3463fc3f4f9a5f475f2e"],["/archives/2023/01/index.html","9b485b12b04e23a294265f6c50af5ada"],["/archives/2023/02/index.html","ffb93485c56c15ad39f0e374546f254f"],["/archives/2023/03/index.html","5aa997a86a3534ea751ad26b45efe855"],["/archives/2023/04/index.html","005bf0b92be7f72835efae1551ffa4d6"],["/archives/2023/index.html","a19fe24cd07e0d14cb96a4c553118858"],["/archives/2023/page/2/index.html","34c6ea99d54fe4e965a822316256cbb7"],["/archives/index.html","008b8e75b67c68f29c0ddf194692aba0"],["/archives/page/10/index.html","1cd643795f06d802553f52b0d0cbaf7c"],["/archives/page/11/index.html","e2c96c31dc4f62b221bc5d7247bf3269"],["/archives/page/12/index.html","6ca979f93ce16369b01d86ce7c1847c1"],["/archives/page/13/index.html","11dc4d209dac143c0d102a25831bc3ab"],["/archives/page/2/index.html","7328ce27baefd5904cc422f05de59c5d"],["/archives/page/3/index.html","68079691f6b55da0f38b01cd4efafddb"],["/archives/page/4/index.html","2d18f47f735ab700c95d8dfbc7ce9ad2"],["/archives/page/5/index.html","e4656f0bc82f87d47fe7b3dbd689f2bd"],["/archives/page/6/index.html","3df1b9a654454ea3cb94f0e588f09a2f"],["/archives/page/7/index.html","926c4b238d0ecd4783b179d00b085834"],["/archives/page/8/index.html","019406a91d580b443a5e984fb6f140ee"],["/archives/page/9/index.html","57a52761b8149f634460cb944b6d59a8"],["/categories/CICD/index.html","2aa683d132e2369c9412779d8b8d8c57"],["/categories/Docker/index.html","d6a062a240e85c87a7138662947ccfdb"],["/categories/ELK/index.html","ceb769d85a883a72cc494d47b5f58689"],["/categories/ElasticSearch/index.html","10f20f279b40ecc00a4648ffd371ab98"],["/categories/JVM/index.html","e6c5349b617d8a376914a6df6f662fe7"],["/categories/LeetCode/index.html","1f39404e6f163c352e38e1b8fc5ab29b"],["/categories/LeetCode/page/2/index.html","758daa86b8db12a6bc4b3d47e1ba2da8"],["/categories/LeetCode/page/3/index.html","b20c7982219604ebac36809654cd1601"],["/categories/Linux/index.html","5e39e439bd38d1da80e415dad0e04dbb"],["/categories/NIO/index.html","d856f372f51fb36ba1614ccf3ddbd80e"],["/categories/Netty/index.html","455a694017f866f3975b8f6d230e14c7"],["/categories/Nginx/index.html","030e69524f2a3c91802cbd6152d1ba2d"],["/categories/Redis/index.html","5fb16d14340c9269cf5a1a4af160ccea"],["/categories/SSM/index.html","bb6ede9094bdcb4a5e909f8b08a1f211"],["/categories/Spring-Security/index.html","ea046b4d867f86ee85d32a7a3586739f"],["/categories/SpringCloud/index.html","0041e95dd2b334163bb0bf55fbac00ff"],["/categories/Spring框架/index.html","8e1c120adeb981de07553a5f09b84105"],["/categories/Spring框架/日志/index.html","0f82394bca371c9ce2ce40a9c86131f8"],["/categories/Swagger/index.html","97bc59b255d1006010c8892770ef6634"],["/categories/Vue/index.html","789d6b6cbb8e1b41a39574fd7fb95c1e"],["/categories/index.html","63041a9ec8a43faa4ea90001c8b97792"],["/categories/分布式权限认证/index.html","4f1f2fa8f61882b622c85d9abff36138"],["/categories/前端/index.html","fa0f815d8a039f180dd1a9ebcddf9977"],["/categories/博客/index.html","81d81fb09f6763ed8ca36261089fa261"],["/categories/学习路线/index.html","179fcd1905e2869348ec7e0e4c8905d5"],["/categories/工具/index.html","88a8444eeda40aee8b7241d514ba8c36"],["/categories/数据库/index.html","fd5eb132b4bea10475c4ff68df120686"],["/categories/消息队列/index.html","7d02ffa071052521a6a066fcc7fe2beb"],["/categories/笔记/index.html","ab0e459ecc98f5e4cd3de7015ab0598f"],["/categories/算法/index.html","866a3afd881285d89b4d989561faa37e"],["/categories/算法/page/2/index.html","8e6415f6e0c2639ca9a891d7ae7702e8"],["/categories/设计模式/index.html","68b3a3c5b3548a6515a3d511b25cc28d"],["/categories/设计模式/page/2/index.html","9bdcf841c97e347b7cc6af99324e45e3"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","d8f3c33e29e1922f8a6c4f19a8c4c681"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","4765176feb80adb01ef6ade53dbae4eb"],["/messageboard/index.html","5ea5527f182c994362eb20d7f19cacd1"],["/page/10/index.html","eb3c19588eb2391ea846b776112a80d4"],["/page/11/index.html","9eedba255a994631b3f103ca39e6f4cc"],["/page/12/index.html","e0d148d7b1a2941c3290645b1f3d05f8"],["/page/13/index.html","4bb9403682c687ac4130a2a337127b05"],["/page/2/index.html","71b5dd2e7c62c29fe0400b16edb9c434"],["/page/3/index.html","31905af8004b91fddd05959d50cbacd7"],["/page/4/index.html","c1412dd19230f5c9f164b1e882fccb6c"],["/page/5/index.html","7a2fb5b48112ce6268c8c2f9bb6bb683"],["/page/6/index.html","ad274a8303ae65ce2b1c06f6dafc7f38"],["/page/7/index.html","3dcc7bfb81c0c3c43edb2d8e8f633ebb"],["/page/8/index.html","dcc81b31a596fc731e8d6f430ef3e9cf"],["/page/9/index.html","a5ab61a7c34eef61c7c55c7ed1392ce3"],["/sw-register.js","3ebc60588c6e0f4e85dec6ec896c9b98"],["/tags/Ajax/index.html","2ac77b86d49627cb322a341076c78f3e"],["/tags/Axios/index.html","041b14f5f04828c024ff0ddef308dc57"],["/tags/CICD/index.html","993b77d3e0f97910bef127a9f8687954"],["/tags/Docker/index.html","c19c4cbfb1b95de61150760ad1eafaaa"],["/tags/ELK/index.html","ec2ce27446b934d7501092bc397fda7a"],["/tags/ElasticSearch/index.html","84ba0a5f7fc5341efa2e1163c688afbf"],["/tags/H5/index.html","1afc8e82619a8052c665d2a2a7ae30ae"],["/tags/JVM/index.html","acc2d216239c9d041a7e54f868e9a79b"],["/tags/JVM内存模型/index.html","8e89470fc98216b019110adb86742caa"],["/tags/JVM执行引擎/index.html","3dba6374454839058ad7d123dbc54cc2"],["/tags/JavaScript/index.html","31d3431d992a5b678a12beb2017c3b38"],["/tags/Kibana/index.html","905746a98efd3ea0d03b4790ce765632"],["/tags/LeetCode/index.html","ac7a53b15562f9458e3a7a7aa9d57c31"],["/tags/LeetCode/page/2/index.html","c6450cdbc97f7f5066e227e9012e4066"],["/tags/LeetCode/page/3/index.html","77a1c14bb967a7e48fcc2d49cc0705bd"],["/tags/Linux/index.html","7f0a3e83ccb4b845c818da327a40aa0a"],["/tags/Logstash/index.html","d4cd5d9d65f302c88b3b179ae32bd00f"],["/tags/Mock/index.html","329b895dc3fc4fd477363253b3c56f49"],["/tags/MongoDB/index.html","60669f9ac5fcfcde9733167be5cdba63"],["/tags/Mybatis/index.html","4a6e24d13c50f4becf5d670778480b91"],["/tags/MybatisPlus/index.html","3c4a576cca197c5af48e22432b82bf83"],["/tags/NIO/index.html","c1f5fb847ffc529bd784a2c0b1b9e749"],["/tags/Netty/index.html","e6593ee21f3c9cf4158e3f5af3d11d75"],["/tags/Nginx/index.html","cbb843f0b2774de93412f2ab63a7e73b"],["/tags/Promise/index.html","37635fdf58126caa52ff54b0baa6cad2"],["/tags/RabbitMQ/index.html","187e0c369693942a0a93c1d16c25b8d2"],["/tags/Redis/index.html","d69cbecd55659604c146ed7f0ee3333f"],["/tags/SSM/index.html","ca0763f922f34f4167a074dd3e5706a4"],["/tags/Spring-Security/index.html","3ced2715ca87ea05215e9ce5025389de"],["/tags/Spring/index.html","369789328531e821bd9aae0a8a253376"],["/tags/SpringBoot/index.html","13631bb94d7406e6ab1f45d9c93ba25e"],["/tags/SpringCloud/index.html","afe997f07f9d9483044bdf3466d0ddd7"],["/tags/SpringMVC/index.html","428cb0e8f3a4458fb59089db571bbc14"],["/tags/Swagger/index.html","52a6831eddd20676cdc0959e4edff6ee"],["/tags/git/index.html","676a1498df63bb363d7de994d2abdd90"],["/tags/hexo/index.html","9cc3c96a852775f4aa3e6f8dcae2363f"],["/tags/index.html","4a327097f10bb5fb6ff8c7a8e65255c3"],["/tags/jQuery/index.html","c562a47c476a21b613febeb686d0874f"],["/tags/java/index.html","a8a48c337ac6303e6fecfb4948c2a4e3"],["/tags/markdown/index.html","c3e34b5f3200aa60d2533f1cb0de42ca"],["/tags/mysql-数据类型/index.html","980cc0f60224644deef698e9a8c62b84"],["/tags/mysql/index.html","435f957cba373018591ee81131acc611"],["/tags/noSQL/index.html","dc05c5011d0f70b031a955cfedd50c2a"],["/tags/typora/index.html","c0bca999cd8eceee3ca9a3160f7dbbf5"],["/tags/vue/index.html","d919c70d4ba5eee26ab0054aea7006a9"],["/tags/享元模式/index.html","4f77362edf82bc469ad85ac5e8f9bcf8"],["/tags/代理模式/index.html","9217ce3db5ee6a311bbebc38adfc64a1"],["/tags/分布式/index.html","66c896856fb0b02e35d9af1bbdccac8f"],["/tags/分布式系统/index.html","cc11ecef2550f4fcfb21301e9c06eeea"],["/tags/前端/index.html","d3bb8d3ce310e2bf57e4ae06b1be5d71"],["/tags/前端/page/2/index.html","06c2988a8354fb9c6527d0864070ca03"],["/tags/博客/index.html","481154aa1e6a0c0c8d6f7514209e5082"],["/tags/后端/index.html","87be61e47b8ddf313fb56a7d7dde91c9"],["/tags/外观模式/index.html","665fb2a3a2d614629d3ee76b47cb4e7d"],["/tags/容器技术/index.html","2e856faca1217c561d00492870feaf32"],["/tags/工厂方法/index.html","e60d5251a242a2c6cb7071c933c363c3"],["/tags/微服务/index.html","74b08bf9d6014430f864d509e6f0d6cd"],["/tags/抽象工厂/index.html","e644bc1d482c522b8321759ea2797fcc"],["/tags/持续集成持续部署/index.html","e2dfa269496213816f8d4c515957a7c7"],["/tags/排序/index.html","a757e71eefb3a223b8f52d53d87f774c"],["/tags/搜索引擎/index.html","081116c2a5ad2d0f07e69561f210e7fa"],["/tags/数据库/index.html","4ed1d34e3a3f0d6a3e3086188e532477"],["/tags/日志/index.html","6c3779cd5bb2013f184be850beb046c4"],["/tags/服务器/index.html","a539bec0741b2e4a3a5c2c9438591e39"],["/tags/权限认证/index.html","2893c328b6dfe9b50694586643b2a637"],["/tags/查找/index.html","774582caa3e5f8404ddff3ec6acd496d"],["/tags/桥接模式/index.html","8e9170fe8f14ed2eaba6517b557c9a99"],["/tags/模板方法模式/index.html","78904cea066329cc45ccc6779d568020"],["/tags/消息队列/index.html","5d381d48c9a57b66053ca23b17a5d47b"],["/tags/版本控制/index.html","9ff058a9cc9edf71587a7e285e23a8f4"],["/tags/策略模式/index.html","d558ea1f4cba93fa1519fd381b24c3cb"],["/tags/简单工厂/index.html","65097593a259c4325338a4b8eec5fe9c"],["/tags/算法/index.html","e574674d5c994b852ab3483854584d97"],["/tags/算法/page/2/index.html","af50ae15b2babb802a75c2fd1f6faca2"],["/tags/组件化/index.html","7499277b19ab848828abffafb99a5a71"],["/tags/缓存/index.html","4652657a564f3c04aa5ce996e44194e6"],["/tags/观察者模式/index.html","14391405635911096580aa361c0b391b"],["/tags/设计模式/index.html","b75d6639d5f09f15581054fb657186c0"],["/tags/设计模式/page/2/index.html","775fd9790175f66702bdec4e62cd916b"],["/tags/责任链模式/index.html","559d9094e3d86bd4e148b3940a5771c1"],["/tags/适配器模式/index.html","658158d5a89d64ead01596e5312e2c57"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
