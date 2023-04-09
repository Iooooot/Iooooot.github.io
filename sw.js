/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","8e520a3d1ef00506e7caaad03bf431be"],["/2021/02/22/博客的搭建/index.html","0519540f316939e788efe78904da8a27"],["/2021/02/23/如何使用markdown/index.html","83b169e9215372eeaef57e65f5a3ad18"],["/2021/02/24/mysql命令大全/index.html","0f75b2af71fdfabd708ec56a7eff416b"],["/2021/02/24/mysql数据类型/index.html","6282b37919e71f51cd2825e49b1bdf33"],["/2021/02/25/Git的介绍与简单使用/index.html","b13a13daa1ff1044e536452364168dd9"],["/2021/02/27/简单工厂模式/index.html","ba54f8bc5bff03315b01819412aa71fd"],["/2021/03/01/工厂方法模式/index.html","5fc5187dd874c5e6e4d93548ffda8418"],["/2021/03/02/抽象工厂模式/index.html","e41b188df3c692603c19234853890ebb"],["/2021/03/03/单例模式/index.html","7bec58a672e7fdbc3450feec13abc4fc"],["/2021/03/04/观察者模式/index.html","62cee37527821ac52ce43896c6359fcc"],["/2021/03/05/适配器模式/index.html","74cbb018a2a31b6a1bdd789ad947144a"],["/2021/03/06/模板方法模式/index.html","8441ca5e8086fbaa5531c0595e906527"],["/2021/03/09/代理模式/index.html","e6157dc1e1e9ea641588e2394b524649"],["/2021/03/11/享元模式/index.html","eac59c69517fcacbeeea9dbdcf3b975e"],["/2021/03/12/外观模式/index.html","972b3ad226325984381a071efd8b7201"],["/2021/03/13/策略模式/index.html","d05d171331bae9893292f54537215511"],["/2021/03/14/桥接/index.html","a1006dab0481e64d9fb76090f9d61cd6"],["/2021/03/15/LeetCode-多数元素/index.html","87c276f393d2a075ec9a66243beb8779"],["/2021/03/16/LeetCode之汉明距离/index.html","dfbf34326341bbae1ecfb423e7e2915f"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","59bc7b10cdf636b42aa6f0cae0486999"],["/2021/03/18/LeetCode之两数之和/index.html","6810b2514b10f5f2cd79b5228233d9d3"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","31ae06fc2a2954fb3728dc80f18f4f35"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","950a8cf938538397a9117e7974c0608b"],["/2021/03/21/LeetCode之有效的括号/index.html","11e6e8e01b0c3ee413c5c9564a10913e"],["/2021/03/22/LeetCode之移动零/index.html","bce493976fd59d3a438a48930de5331d"],["/2021/03/23/LeetCode之爬楼梯/index.html","0fe01eba532cf6917181dcc4a3bd0caf"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","3c46fd326bbed2b712c03095d33a6399"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","f7d26a9af2da1099a06d8943827b9318"],["/2021/03/26/LeetCode之最大子序和/index.html","73f049a6aad52e0e2cec49c04eaf4bc9"],["/2021/03/27/LeetCode之子集/index.html","9270c25a0d283856c73ef518b4f35df4"],["/2021/03/28/LeetCode之合并二叉树/index.html","1ab0f8e1195724e8d123fd5f4f67791f"],["/2021/03/29/LeetCode之翻转二叉树/index.html","3e76151be20c6077e79bbef4891ade40"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","88bdf1c384886a9024bb8c00e16ed118"],["/2021/03/31/LeetCode之翻转链表/index.html","cd3dab12fff92799cfef9f1822220f71"],["/2021/04/01/LeetCode之相交链表/index.html","dd6ae46a7ae32a6a71ebcf14bcea05a5"],["/2021/04/02/LeetCode之最小栈/index.html","639f7dc7b9152613bcfdd43d83ea5d9c"],["/2021/04/03/LeetCode之对称二叉树/index.html","9139f3c1db61d5f2b2521eaffd632c6a"],["/2021/04/04/LeetCode之环形链表/index.html","73eba9648dbf02f77ff4f1dfccdd60a6"],["/2021/04/05/LeetCode之二叉树的直径/index.html","112a6f65fc5279f6eb35099f7fe28e7b"],["/2021/04/06/LeetCode之回文链表/index.html","688752e58959e2e8f15689613384c172"],["/2021/04/07/LeetCode之比特位计数/index.html","73fb0faf40d908f10b6994d8a479656c"],["/2021/04/08/LeetCode之全排列/index.html","6a348a4ff5d3604a74fafa26f3be1334"],["/2021/04/09/LeetCode之括号的生成/index.html","557f29ff205c421c9681e9b1aa1544c4"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","e2dd1e9cda44f76b1a6c972cf631181a"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","f5be140723a67f749104d1208ab8849f"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","15bcd31b2d162a5f78e1a65a04eabf08"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","ee2fef1ada93a65bf6b9cd54d84be74b"],["/2021/04/14/Mybatis/index.html","e692eb80386430af3d67d0beee884d51"],["/2021/04/15/Spring-1/index.html","86f7b150aad767f6d50e6537b8203861"],["/2021/04/25/Spring-2/index.html","4df945fe354df0bd07b5a81dd39893c1"],["/2021/04/27/SpringMVC-1/index.html","118e5c3618466bd121542ad3fc210662"],["/2021/04/29/SpringMVC-2/index.html","5ca9f8f25da209f71e6efc8efb03de69"],["/2021/05/03/冒泡排序/index.html","1ce20dc79309beee5efd4d8d58ecf566"],["/2021/05/08/选择排序/index.html","1f7eb192a2b562889e9a198eeb99efdf"],["/2021/05/12/插入排序/index.html","fdd4a6dfe2baef188d44f0abf04d0fcd"],["/2021/05/15/快速排序/index.html","65a3ade0bc4034a4e626d206eb713b15"],["/2021/05/19/基数排序/index.html","f0f8ef11254c6bf0ccd359fc9e78714d"],["/2021/05/20/哈希排序/index.html","cb109c3dccdfbe9ed8c1b41f6c818bac"],["/2021/05/21/归并排序/index.html","d5905da792662752d2329e39c69017fc"],["/2021/05/22/二分查找/index.html","9add388e2afc1963d660403683878481"],["/2021/05/26/差值查找/index.html","f7a89c0541cca590f1416b175776fc7a"],["/2022/01/12/高精度大整数计算/index.html","be2cf4213a354b4b007863d97f2c6259"],["/2022/01/22/前缀和/index.html","9ee3f5da4ee1b0ece2144aeb463f7ec4"],["/2022/01/23/差分/index.html","45e8ea196b753e290b7585f25dbf3ac1"],["/2022/04/04/MyBatisPlus/index.html","3e6d8f561474152e63b7111dec9af4ce"],["/2022/08/17/jQuery/index.html","0497633675197f1579ebcb15c219b730"],["/2022/08/19/JavaScript/index.html","da3cd5539f58b301b6f9ce111f0e9302"],["/2022/08/22/Ajax/index.html","96e799b32834454fa7f2183097ed0317"],["/2022/08/23/Promise/index.html","7f690f925f6bb56190a8f4ca565bd26a"],["/2022/08/24/Axios/index.html","49c6341248bee563c493697dabab86eb"],["/2022/08/25/H5本地存储/index.html","648b8d1e7551a784e6c134e071fff7d4"],["/2022/08/26/mock/index.html","79af6992bfff97fb57b492b286a365e5"],["/2022/08/31/VueJs/index.html","8832d673db8c2829b61433342e07f1fb"],["/2022/09/01/vue组件化/index.html","e0e2ba0ad521243d8a4a435a073a0ee9"],["/2022/09/04/VueCLI/index.html","3a0d77b88528c8757d912dfe99fa13e5"],["/2022/09/07/vue实现动画/index.html","2347d16097e0e1581bc4c1c10d5b7e7a"],["/2022/09/09/Vue响应式方法/index.html","c4773ed2ece30cfc5466ee71ed4f620c"],["/2022/09/10/Vue异步请求/index.html","7002356ff3b3f87f25a2dab9857e22b7"],["/2022/09/11/vue-Router/index.html","2c3527b417b4657e2d7ae95b66c07d01"],["/2022/09/13/Vuex/index.html","f1e1679b8e8058bcd4b9540fe59ad1f6"],["/2022/09/15/SpringBoot/index.html","6e7f4db675a460eccb196f2c2774e5d2"],["/2022/09/16/SpringBoot配置FastJson/index.html","7ca70a76ddbba86f398cfa555c5a96ab"],["/2022/09/19/SpringBoot参数校验/index.html","d66a21bf07bc10515f984319bb257ec8"],["/2022/09/20/SpringBoot的异常处理/index.html","567c66a281d44494eca470222e7ace9b"],["/2022/09/21/SpringBoot统一响应处理/index.html","3b411bcd5328c45e2bb407e7f0bd1ecb"],["/2022/09/28/Linux/index.html","d13efe03093cec1ddd1b6b508683a3a8"],["/2022/10/02/redis基础/index.html","4d56ae09ff1de8bd310f24906db0045e"],["/2022/10/03/Redis缓存/index.html","b69f22b754e4f0ac5ec528db471d549c"],["/2022/10/04/redis缓存穿透/index.html","a5cc8cd4731418ddb52d035bf7a3a2d3"],["/2022/10/13/Redis缓存击穿/index.html","f29aa997758765344ecd51dcc654f4cc"],["/2022/10/14/Redis缓存雪崩/index.html","71e6917e7f99938216bf7cf8a23b38cc"],["/2022/10/17/Redis集群/index.html","c882a95bbc59b3f45d93550fef3d07e4"],["/2022/10/18/Redis哨兵模式/index.html","25553976f2c39e2a351bb9a8882d2213"],["/2022/10/19/Redis主从复制/index.html","0f6b0ec4612e7444c3186a94516e6d16"],["/2022/11/03/Spring-Security/index.html","465a31ad9b0d920658c5ff29a626263e"],["/2022/11/08/SpringBoot日志/index.html","a9f9dd6a84d29baeb74dee142cb0d4b7"],["/2022/11/11/Swagger2/index.html","8c4c384c7ce1da964ca674b4a42fe5f2"],["/2022/11/21/Nginx-一/index.html","5fc322f618404a8c89e7e9993c7a9670"],["/2022/11/23/Nginx-二-代理服务/index.html","9cc95fa4e0b8b3c76db3344f184987f2"],["/2022/11/24/nginx-三-负载均衡/index.html","a0fffd4d84be3368fc4a4f483f7669b3"],["/2022/11/26/nginx-四-缓存集成/index.html","040b843464b74f4a10a8300b594df728"],["/2022/11/28/nginx-五-动静分离/index.html","d6c24f2d6f422d38f6ff78127f3edac8"],["/2022/11/29/nginx-六-制作下载站点/index.html","611699a48add1ca726094cf85de4b939"],["/2022/12/06/docker基础/index.html","06a6e55bb8170f778595fd3a01d51cd6"],["/2022/12/09/Docker高级/index.html","2156d615f81c7148afe683389050be83"],["/2023/01/04/MongoDB/index.html","e42ed923405cd25dfd0852cb72c93baa"],["/2023/02/05/消息队列/index.html","554b4507903aae53726627117cf5f896"],["/2023/02/12/RabbitMQ集群/index.html","80f8be3c6b0b65507abc2ff4c851b9c0"],["/2023/03/10/CICD/index.html","4830b32063f4d6e6042f28988c9e8cb9"],["/2023/03/11/ElasticSearch/index.html","9a77437742594df85484eb9ab194ca37"],["/2023/03/12/ELK日志平台搭建/index.html","37ea97e8011c3ecdea54ef74e3dd1de2"],["/2023/03/13/NIO/index.html","8f80776309f2337d96f0df743531092c"],["/2023/03/14/Netty/index.html","4968268630fcc5b2d60596f25b81bc7d"],["/2023/03/15/SpringCloud/index.html","d6bb50bdaec39e265df5bcbce5c9c14f"],["/2023/03/17/分布式系统认证/index.html","332078e921fb4db74a2a805b6ad4fa18"],["/2023/03/19/JVM概述/index.html","61690bb3659e98aa87f45dacc515302d"],["/2023/03/23/类的加载过程/index.html","4e2288cf741429f80db0e8b946a69b79"],["/2023/03/28/对象的实例化/index.html","f88577f2250ea77574d3adb9aa401210"],["/2023/04/01/运行时数据区/index.html","b43108733d7cac9a63277a3c287e16d5"],["/2023/04/04/执行引擎/index.html","6c69c92089d3ec0fb69b2b723698575b"],["/2023/04/06/对象引用/index.html","51770f77fef92527052d061c9c4dcfcd"],["/2023/04/09/垃圾回收/index.html","850a0b280596bc7b10a46f904eeddcac"],["/404.html","5e32474b4f7d5b816dc1e6c1eb21b77e"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","09e8ef73845d7bfdc2da4ff39df8991d"],["/archives/2021/02/index.html","1af565c9861d49a8a9316bb2c67e7738"],["/archives/2021/03/index.html","74754414d4e12cf40e5900e88b8f8805"],["/archives/2021/03/page/2/index.html","bf9826be9ba78680fdbbb5881178cd17"],["/archives/2021/03/page/3/index.html","99180a9942b23c0ee60c333ff7f95e04"],["/archives/2021/04/index.html","f73dc9ceaabceb63f09af69bd4dbc1db"],["/archives/2021/04/page/2/index.html","953ced60eb868d9f23007637118cf87e"],["/archives/2021/05/index.html","e32202bb30a20764f71850c6239d71a5"],["/archives/2021/index.html","584174472cb49c1e23bd376088a80497"],["/archives/2021/page/2/index.html","477c230c6c266278dd6738c5e3122188"],["/archives/2021/page/3/index.html","751ca5809237567eee29b4bbe7179d38"],["/archives/2021/page/4/index.html","918d8138796124f3afd60bd290d4aa89"],["/archives/2021/page/5/index.html","fe0fb40eaca8168e9d3a941267ec4122"],["/archives/2021/page/6/index.html","1001243663a43be0f4e7882608e4681f"],["/archives/2021/page/7/index.html","131387e812001eab03bc4f46cbd94bf5"],["/archives/2022/01/index.html","57e86facb6220f8aaf7dd97c76941d34"],["/archives/2022/04/index.html","428c82bb473f34d2d453742cbf5713b7"],["/archives/2022/08/index.html","4aa65a607538099c6816291cbc829cb5"],["/archives/2022/09/index.html","d3a47b11abf2840dcda6d811c014b736"],["/archives/2022/09/page/2/index.html","d0a06a8fe45f7c48189988c349105cc9"],["/archives/2022/10/index.html","2dea4e971a1984900504d93f477518fe"],["/archives/2022/11/index.html","061cee2af5e6535198fa666f7ae394a3"],["/archives/2022/12/index.html","bfd1fcb9ed67ed6c770a2aa067b8f77f"],["/archives/2022/index.html","77e61bb906b2e5ac0f2f576a76e3803b"],["/archives/2022/page/2/index.html","f152295c4c9b5c1203740760e56683ea"],["/archives/2022/page/3/index.html","17373694cd1edcaa4ec3c5b2eb723a4d"],["/archives/2022/page/4/index.html","aec8928b9cb49e6e528d925357601ba3"],["/archives/2022/page/5/index.html","56c27c88aa25e3ab41866081ef0506e9"],["/archives/2023/01/index.html","c19c86403cd4863aca3f84ac7b052c6c"],["/archives/2023/02/index.html","23a8529000d3ef74a3c1eef8851bc258"],["/archives/2023/03/index.html","8a27d529acdce045bd3b42e6c509ef42"],["/archives/2023/04/index.html","870c18170574ff9ea87df15199100a22"],["/archives/2023/index.html","6bcc73028fe984e17b019e3f9720ab59"],["/archives/2023/page/2/index.html","a8661be61afb3507d8afed35a6e53ef3"],["/archives/index.html","f40fe2407d5017c3b0918e286b79b4e0"],["/archives/page/10/index.html","bfc6f037266f24554b98e284027659b8"],["/archives/page/11/index.html","ed0aa6149aad054d9b94ca996233e9b1"],["/archives/page/12/index.html","90cdf57baa81d00f8651c6681f3563bf"],["/archives/page/13/index.html","f07478d8c7edf18869f361cd21118f4a"],["/archives/page/2/index.html","3cea6d42e36859c0b8f3fc4858d643a6"],["/archives/page/3/index.html","96a053c97075b9e4a793f6ea59ab8eae"],["/archives/page/4/index.html","a26b2cd40ddba676eda5df8e3239c0b4"],["/archives/page/5/index.html","185f2e72b57f900161aff50ef921804d"],["/archives/page/6/index.html","889981b59d7ab2874ff9ada0fc20f963"],["/archives/page/7/index.html","249201d59fc2cb9bbf8f63bf712df2c7"],["/archives/page/8/index.html","90aae31f5c2eece1ee500f83461c6374"],["/archives/page/9/index.html","a163f016dac0e3fcbef269b8cf3f4537"],["/categories/CICD/index.html","850eca311adba6999c94ddbb4a97a099"],["/categories/Docker/index.html","3272fa46f102abf7b70e24dd6fb1ebdc"],["/categories/ELK/index.html","bb264f81613831b3a74dd7e87150dd97"],["/categories/ElasticSearch/index.html","e382c1ff044a92969740de6f0615079d"],["/categories/JVM/index.html","5e5013a636a30031708bb0e581a22094"],["/categories/LeetCode/index.html","002d1806f518d8914f430e9528eba1ee"],["/categories/LeetCode/page/2/index.html","aef6d890c90127665af3f2c8672dcb05"],["/categories/LeetCode/page/3/index.html","b95052cdb67b1d444ad3017d529dfa81"],["/categories/Linux/index.html","0fc5e328c3245e91fb89779712e60bf2"],["/categories/NIO/index.html","6003b47b32e899af2fc956902db00dce"],["/categories/Netty/index.html","70826629aa0b8478ddea7d64978a8e3d"],["/categories/Nginx/index.html","4355094a48f6d45a0053cf840ae4a501"],["/categories/Redis/index.html","3a7468cad976f39e2f7563b9ba1c295e"],["/categories/SSM/index.html","ded08ac3bbe038207df6fc6287368e0c"],["/categories/Spring-Security/index.html","2286be2ab099e5647408a2e58bddead4"],["/categories/SpringCloud/index.html","2ee3468ea865f45e7ccd98ddb3ed030d"],["/categories/Spring框架/index.html","fcd258114c254eed33587481553c50ed"],["/categories/Spring框架/日志/index.html","0fe14076e750de68addd99955a96122a"],["/categories/Swagger/index.html","1c186ddbb5a4e2c983a301d8168a1b40"],["/categories/Vue/index.html","7df85094de37af0c9d4e511e8d34e078"],["/categories/index.html","55e355f9f28702140b34d840deb8015b"],["/categories/分布式权限认证/index.html","c10f2a0a43b511b725d45ee1c0f1eef2"],["/categories/前端/index.html","01c35399e01b09d94fa534d60e1f5232"],["/categories/博客/index.html","8f4bef41b492ae5a92ba3746f45a9ec6"],["/categories/学习路线/index.html","d5c941b4dd1db7013078be3213351301"],["/categories/工具/index.html","80483c46f15c71376b89f0ad947f4830"],["/categories/数据库/index.html","904d61cd63c1ff72939ed0c1d4ee19e0"],["/categories/消息队列/index.html","21caf97c853835864fb7db6331c4851e"],["/categories/笔记/index.html","a1a1d149433baae1960088c97301c73d"],["/categories/算法/index.html","68f191a5007389ed6d1e20dbfe636c0e"],["/categories/算法/page/2/index.html","d1cab2da1f2566939c5dd90a8030cf2a"],["/categories/设计模式/index.html","c88267f9cac127a715546d5979424302"],["/categories/设计模式/page/2/index.html","f091806d8b7037e47137a303c076c09d"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","795473bb4741f94d476de54238378684"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","d91b1331d5f1aa04bffb03e3b648f289"],["/messageboard/index.html","d45271c2694bba883358ee1b39fe164c"],["/page/10/index.html","a7c803bb2423d887e78c6f1d34803717"],["/page/11/index.html","988be1991927845743f772db68b756f8"],["/page/12/index.html","324772ac69e5ac57c42471560d1e9517"],["/page/13/index.html","414d84c81fa072fe07e688d6b5bb40d9"],["/page/2/index.html","cf92b4a58992d9f25fd4cc669d6ab53c"],["/page/3/index.html","61f75f8d6da0e4bcefc8f5ffcc5effe5"],["/page/4/index.html","60f147a953e8c7b51f0de231a6dec994"],["/page/5/index.html","467a881ba09a7f34565cac7b9de4b2c9"],["/page/6/index.html","7b896357bed7484f98bf83d8d5a797ab"],["/page/7/index.html","1ebabb2d7628dc00e9700cf204d9879c"],["/page/8/index.html","8056b5773dbc3b7da7aa401b163b61e3"],["/page/9/index.html","8a1edd76fabccf21c85f3dca192db119"],["/sw-register.js","78271b7b06c3a85d4c736b968e8b1af5"],["/tags/Ajax/index.html","3b15856834f4de0000db00fc08b5c66b"],["/tags/Axios/index.html","ff1c2fbc6c1a0db95621a54887fd2760"],["/tags/CICD/index.html","7d79d1d899b8537dc63d97b79cfe084c"],["/tags/Docker/index.html","e5a477000881bbaa1c3d71024a5bf06d"],["/tags/ELK/index.html","08ebed754b9af3204c79d64b25f10f93"],["/tags/ElasticSearch/index.html","415088ba5eb7746da270ab5dd02cbde1"],["/tags/H5/index.html","d8168ee6a3e757388adba3692eec9e36"],["/tags/JVM/index.html","8af719be09fb2df7807147021e6a4869"],["/tags/JVM内存模型/index.html","63f871fee2f5df479fe642fadcb32660"],["/tags/JVM执行引擎/index.html","065507af7a0f9b269b64785758f604c4"],["/tags/JavaScript/index.html","7b78a2730a3fe97e52228dbbe8f3ad3c"],["/tags/Kibana/index.html","a47f033c81ebd0fa7ef0820bc0f136e7"],["/tags/LeetCode/index.html","924dc3c2bfe0d79e65884da8d4b408b0"],["/tags/LeetCode/page/2/index.html","99c160f35a59b5e0af27ca32f917dafe"],["/tags/LeetCode/page/3/index.html","a21923aaccc627a6f90587970e8813a8"],["/tags/Linux/index.html","6a30a173fe1a12d1a203b356349465a2"],["/tags/Logstash/index.html","4cbcfc897375301069a38983b561f65c"],["/tags/Mock/index.html","2b439c1a903c3bc009cec7e92606e8f3"],["/tags/MongoDB/index.html","559fc5a500bfbc7faddb0b1874ac1f09"],["/tags/Mybatis/index.html","b1721dda81d86c41e165ef96429fe222"],["/tags/MybatisPlus/index.html","7fca362f774cc6d6a07fc868e7dd2b8a"],["/tags/NIO/index.html","dabc9d878acc79f1f06253fa93bf93c3"],["/tags/Netty/index.html","8518d71bdef91787798db09b7eb9e6f3"],["/tags/Nginx/index.html","831d891e50429efd121c5d50cd71d63c"],["/tags/Promise/index.html","886734dec376f55cf4b09a6124f9e60e"],["/tags/RabbitMQ/index.html","ee4e54a7cf3b254edfa0a9b8288b6b24"],["/tags/Redis/index.html","b2dcd5d2a1adb9f16c062d919cf1b9c7"],["/tags/SSM/index.html","79cb30fb6bd98e118583dc1b39fd5a81"],["/tags/Spring-Security/index.html","a1558c8dc87272ca99eff2418ab5bf23"],["/tags/Spring/index.html","7c82c4f1b0e1d95e256c3d70a657a70e"],["/tags/SpringBoot/index.html","bd584b9dfcf8e9f848957b15f33cdf49"],["/tags/SpringCloud/index.html","6a2c42dfb744ebc04e3a9dbcd410a00a"],["/tags/SpringMVC/index.html","a792273666f893d70b2fbbc8787d304d"],["/tags/Swagger/index.html","52e706cc117d2faae1c733ba04e757ea"],["/tags/git/index.html","17c2a7da9cc0cf4661995bfa95a58368"],["/tags/hexo/index.html","7b74a17c3b214b97dffd0df5aa5562d1"],["/tags/index.html","39fcbd12ed5dd8140c1784bf400c88cb"],["/tags/jQuery/index.html","db1131b23f4091e43850e780ed2ccfba"],["/tags/java/index.html","83ad3829eeba83fd03100835f7af1d77"],["/tags/markdown/index.html","ba1d633db6bae743b9b9410c80f8eff3"],["/tags/mysql-数据类型/index.html","e3f3db3b3bf20e4673184bd0798637a0"],["/tags/mysql/index.html","5099f0ddb9a615e7912af9071af063fb"],["/tags/noSQL/index.html","66ec611b61208224051021306e57cd89"],["/tags/typora/index.html","40e8b6386cc5e12cfa27d88a6aabc1c5"],["/tags/vue/index.html","baedf6d592ec0102afd4bc182b5bfb5c"],["/tags/享元模式/index.html","b2fb487772f203173f8a9bdf31d5f860"],["/tags/代理模式/index.html","97fffbc6915147f716d58a40c28aba07"],["/tags/分布式/index.html","3a827aee9e16efca19cbf64b3fc15a75"],["/tags/分布式系统/index.html","3066fcb5a8ad58f5f1a295c92e52b1cf"],["/tags/前端/index.html","15a18a841a129944c5c677cb42af470e"],["/tags/前端/page/2/index.html","81a04abb852edb700caf44d11a563baa"],["/tags/博客/index.html","7f08365616c3c5dc03b00a6cceefefc9"],["/tags/后端/index.html","6254ea462fdff9d00bd2c2bb95f1b520"],["/tags/外观模式/index.html","e1467f9a7001a723df6781a361f40f6d"],["/tags/容器技术/index.html","53c4ca437383bd9fc199592dc6bc3d5b"],["/tags/工厂方法/index.html","ab39c5cce9d5bca6f6fdb8b8cb2be359"],["/tags/微服务/index.html","c1094e710cc801b6ec1209c480c9480b"],["/tags/抽象工厂/index.html","c2cf78b9f0e66e696afc03fcb01381a2"],["/tags/持续集成持续部署/index.html","2fe6235939e9a02e12144aacba9a24ce"],["/tags/排序/index.html","3255e9aa4522f34632bf4eefa5ab7577"],["/tags/搜索引擎/index.html","329bdb7b6b1efef29db201ee89e2447a"],["/tags/数据库/index.html","3f4fd4c410e1f516aeb93ee6e636c59b"],["/tags/日志/index.html","27d872ef73e5089f2256b79d3309b6c8"],["/tags/服务器/index.html","0e59fd4848d10df4fcad9778458125b9"],["/tags/权限认证/index.html","891734e0fd9f64acee9fb4391a40c56f"],["/tags/查找/index.html","c75e2f8d89b9d74a59e8cfe804dca498"],["/tags/桥接模式/index.html","c00e830ed80b34ba97c9c58ed1bb70a1"],["/tags/模板方法模式/index.html","1938b5c906d307b34f965b37acd0f981"],["/tags/消息队列/index.html","2626331f5213bfe977497421f72f0fc9"],["/tags/版本控制/index.html","f9fde40d442fbb971311b046008f7e47"],["/tags/策略模式/index.html","5199994af96f314c05058da58f91690c"],["/tags/简单工厂/index.html","a3d330a2e6c72c93fcd669705257af96"],["/tags/算法/index.html","bfa2582f87c19e2d3ceafd8a726e7c8d"],["/tags/算法/page/2/index.html","90ff231b384a6c938de8018f32dd6d57"],["/tags/组件化/index.html","90eb3b2948e725b65160cf86ea88525b"],["/tags/缓存/index.html","c641a12b259dd8a3effa39f1a9f26d81"],["/tags/观察者模式/index.html","0c04014a90252e9c43dce9a9f78a90f5"],["/tags/设计模式/index.html","48c2b893f70b1f3f68fe5454baf1d836"],["/tags/设计模式/page/2/index.html","6b8d7dce5b3324b69b292e2cf000435c"],["/tags/适配器模式/index.html","7851321850cb7916887381d2cefbc598"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
