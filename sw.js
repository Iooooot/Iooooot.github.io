/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","25b57ea707f0130529f9265a0d35496a"],["/2021/02/22/博客的搭建/index.html","4a8c8b38cff07ac2db559886ee1073a4"],["/2021/02/23/如何使用markdown/index.html","a1789199531155d27f2b3afedc9e95da"],["/2021/02/24/mysql命令大全/index.html","6da8c65dd4cdb2ac562aaae1bd41616c"],["/2021/02/24/mysql数据类型/index.html","5bcda1675479ee0795914364159d3f41"],["/2021/02/25/Git的介绍与简单使用/index.html","3bb00130f201be4eee60a81cf2115507"],["/2021/02/27/简单工厂模式/index.html","42a3f26e08e84d2bd24781d3edd1e9ab"],["/2021/03/01/工厂方法模式/index.html","6d314c4ea6dcc41acbdb950a70c4a084"],["/2021/03/02/抽象工厂模式/index.html","37f168ef4ba6c00acd5e2f4a0d04585a"],["/2021/03/03/单例模式/index.html","7d16b61ba3e1726c9c97b5a59fbae251"],["/2021/03/04/观察者模式/index.html","1ce07638cb2c1df29f758cdb3377c4db"],["/2021/03/05/适配器模式/index.html","967d6c800dbf97743974563287f01fd0"],["/2021/03/06/模板方法模式/index.html","6e3cecdf32a4ffcc7fc7b9df0f65cd80"],["/2021/03/07/责任链模式/index.html","b16202a6151de8f9466120f03c41d778"],["/2021/03/09/代理模式/index.html","b955259869ae140a868d0ecf0646342f"],["/2021/03/11/享元模式/index.html","84d4a0a65ecfd5942ef2deea7bc4f02d"],["/2021/03/12/外观模式/index.html","a5932958a83d9c08108996575db61427"],["/2021/03/13/策略模式/index.html","b888da7ddb508d7467447b521fbd310d"],["/2021/03/14/桥接/index.html","6a8d3fdb307db6aa0eb3bbcc38b86340"],["/2021/03/15/LeetCode-多数元素/index.html","81092b423928d8348f5ab2c7ba4320df"],["/2021/03/16/LeetCode之汉明距离/index.html","d737af3930fd3cd29d4df626cf3fbc95"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","693b4d4405dc9b641358882d60c50364"],["/2021/03/18/LeetCode之两数之和/index.html","d424ddd7f733a6f653f9dbe23e77405b"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","83601235730336120e80fc39cdbbef05"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","944f1ba581d1c0cb47ea4c70a7e9cd58"],["/2021/03/21/LeetCode之有效的括号/index.html","648a56fe9ccdd21d70191fefbbec009b"],["/2021/03/22/LeetCode之移动零/index.html","1fb81f47c072b7b01646abd8544fc379"],["/2021/03/23/LeetCode之爬楼梯/index.html","a4021628dd333472ade5aba02b0c36e4"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","a2cea8baa18ca2a22a5edc5eb83d12b1"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","a008faa3a7aa29ffb5b2c68b5276b614"],["/2021/03/26/LeetCode之最大子序和/index.html","56a07a482cf9e069013668ecdd7bc4bf"],["/2021/03/27/LeetCode之子集/index.html","209f849b8462084ced57539d4019ddb8"],["/2021/03/28/LeetCode之合并二叉树/index.html","ffc12860baf747139c0f2ab118adcfd3"],["/2021/03/29/LeetCode之翻转二叉树/index.html","58cb6551c122a6879df9c37955ed816b"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","b8c7d01df348242333e7e0a2345977c1"],["/2021/03/31/LeetCode之翻转链表/index.html","d0b4b97a93e609e08c6efc7ee156c6ea"],["/2021/04/01/LeetCode之相交链表/index.html","6b775c041e64560798d34f194f5ce917"],["/2021/04/02/LeetCode之最小栈/index.html","5476b1ce992e444997ae390fa64ca818"],["/2021/04/03/LeetCode之对称二叉树/index.html","705ec8b4751e108075524da62ab44e66"],["/2021/04/04/LeetCode之环形链表/index.html","3e7b6198d58367e80eb11d666c93136f"],["/2021/04/05/LeetCode之二叉树的直径/index.html","5ea216a6c06fc4139b24e2ab43851d70"],["/2021/04/06/LeetCode之回文链表/index.html","438bcafffaf1d4c538336015ae834379"],["/2021/04/07/LeetCode之比特位计数/index.html","4f25f40f7cc4e703568d887bb9a1a318"],["/2021/04/08/LeetCode之全排列/index.html","03ed93565dd516edf2b05e8ff4db5374"],["/2021/04/09/LeetCode之括号的生成/index.html","d3c8f288462817087441b1cd624ae9a9"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","1ca7140abbf5e84b5f3e4973f7c387c3"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","9a2ec4468e1de5ef5169cd591cfaa7d6"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","694962f5578c5b38a893a0aabc0dd034"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","c0f9cf0c5afb4e3af1d2bbf4e57c68df"],["/2021/04/14/Mybatis/index.html","cbc5efb54484c42b8308004764ec1e4d"],["/2021/04/15/Spring-1/index.html","4eafab915fdfd63756fd181ac67da6a9"],["/2021/04/25/Spring-2/index.html","5a2b0b012d491dd5135eb0e7790e238c"],["/2021/04/27/SpringMVC-1/index.html","a6eda1920c5768c685ee8126ad14b4d2"],["/2021/04/29/SpringMVC-2/index.html","872dbfa01f0456410164c386bf6d0e43"],["/2021/05/03/冒泡排序/index.html","f7aa611a72fc233ff3d5aa6799b2ffab"],["/2021/05/08/选择排序/index.html","46ad3e5b6438c30ed626ea3d946fcb10"],["/2021/05/12/插入排序/index.html","cc3b15cf3156d52d73fa7f79f05da3b6"],["/2021/05/15/快速排序/index.html","3f5ec7807ea88b3ea5a8f7c0055c6e29"],["/2021/05/19/基数排序/index.html","d9d05aee0b33ceb6fff9d4d33b2d107c"],["/2021/05/20/哈希排序/index.html","169c043e3c2dc3c248643997816dd48c"],["/2021/05/21/归并排序/index.html","9a04fbb663e5343523256d1457f6c680"],["/2021/05/22/二分查找/index.html","03ec742f972967cdb533fd00b97f697e"],["/2021/05/26/差值查找/index.html","7f786ff2683b40ade5e4449f8db18099"],["/2022/01/12/高精度大整数计算/index.html","67eb661acd8f37609f5b1633601db601"],["/2022/01/22/前缀和/index.html","06d748d6e3498d95857b01ecf168dae4"],["/2022/01/23/差分/index.html","cdcdc0f5a4fe5693d0b2382746d0ddb9"],["/2022/04/04/MyBatisPlus/index.html","216e576f90a5461d6be37cff49ef2e76"],["/2022/08/17/jQuery/index.html","03531ee14e9042c5bec0398db137cff0"],["/2022/08/19/JavaScript/index.html","118c23dd90da48f0f1089a610910608c"],["/2022/08/22/Ajax/index.html","2482697b7eec54a35c62b89fa1a704c7"],["/2022/08/23/Promise/index.html","d7b1c0fd922fe3a54dc51107b748983f"],["/2022/08/24/Axios/index.html","6c92d65256bae45eff2be855f035b2cb"],["/2022/08/25/H5本地存储/index.html","b3234d8b4dfdebaee6009156e40077ed"],["/2022/08/26/mock/index.html","357146716d69527ad4ce626bbb0dc277"],["/2022/08/31/VueJs/index.html","d374562214597d493e328e9336635e61"],["/2022/09/01/vue组件化/index.html","5740f948bbb795576d4fe2fd50a3826d"],["/2022/09/04/VueCLI/index.html","47d4935bc62f38517f81863fd44d2102"],["/2022/09/07/vue实现动画/index.html","487083303ced235e0874bd348b4f4aab"],["/2022/09/09/Vue响应式方法/index.html","b7cf84fa6481ed372a16f22e46544b29"],["/2022/09/10/Vue异步请求/index.html","ddcda2ed64e8fc7bcceb213c57e0f525"],["/2022/09/11/vue-Router/index.html","7284cbf55649cfc6b9cd5cd51c4afc55"],["/2022/09/13/Vuex/index.html","54e559850da0b26913098027211f0606"],["/2022/09/15/SpringBoot/index.html","9bce1571d347a381cb890e40bb3be388"],["/2022/09/16/SpringBoot配置FastJson/index.html","3d27762d278ec6500a116be1b88169f5"],["/2022/09/19/SpringBoot参数校验/index.html","72153dd534eaea5573a2a3d2a2399c78"],["/2022/09/20/SpringBoot的异常处理/index.html","6220edb00a5590d13906c74c72d840aa"],["/2022/09/21/SpringBoot统一响应处理/index.html","a337d755c42c5bc39ef876285b73c31b"],["/2022/09/28/Linux/index.html","1e449d4e0e0087e4b3d1dac67e3eea62"],["/2022/10/02/redis基础/index.html","dd78e0103514af882c57b8b97a6c9ee0"],["/2022/10/03/Redis缓存/index.html","eee59e329edb5f73738119f91ba66880"],["/2022/10/04/redis缓存穿透/index.html","591de96bfa5fa36f1e771b5025308d59"],["/2022/10/13/Redis缓存击穿/index.html","59790a2a7631c0e4bf4a094ba1f17bcb"],["/2022/10/14/Redis缓存雪崩/index.html","8acfbfd9e8196300cf0b53d702d1eb6e"],["/2022/10/17/Redis集群/index.html","5c7bee9d032f23be64839962424db5e7"],["/2022/10/18/Redis哨兵模式/index.html","94d49eb9f7c2893b7660bd430ac1bd82"],["/2022/10/19/Redis主从复制/index.html","8be93da269e33b87ca6a8217443dc313"],["/2022/11/03/Spring-Security/index.html","867f16cf1f6d1eef99accb8b81d798ff"],["/2022/11/08/SpringBoot日志/index.html","6458381b91ff8cfed40e7658e07905ef"],["/2022/11/11/Swagger2/index.html","a2a9d847e6fb11cde366b111823368ee"],["/2022/11/21/Nginx-一/index.html","84e860b41378edc9be9997a0401b76ac"],["/2022/11/23/Nginx-二-代理服务/index.html","13975dcc9fd1745907a9545aa9ab16a8"],["/2022/11/24/nginx-三-负载均衡/index.html","895a6790d992185b7d74d812445f549c"],["/2022/11/26/nginx-四-缓存集成/index.html","dcb2a3c3a2b63b1f969c603c27a26de1"],["/2022/11/28/nginx-五-动静分离/index.html","5db417a0578390fcd54b3bac0dbf5e35"],["/2022/11/29/nginx-六-制作下载站点/index.html","3ef3c091293232a029d507b3799da2cb"],["/404.html","b8129d29395514583813a39c9b882398"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","55719522942bfc81491039fa33fc4382"],["/archives/2021/02/index.html","947e0a6a855492ae90297f11addff891"],["/archives/2021/03/index.html","c8992097f3bef287eb766b8d78630afb"],["/archives/2021/03/page/2/index.html","747b50013ca868569c29a30ba30148b7"],["/archives/2021/03/page/3/index.html","e63635d3ba3575786970ae182dee981c"],["/archives/2021/04/index.html","476b568d92727b99a60e52939cb93cfb"],["/archives/2021/04/page/2/index.html","6af92bee3a326dcb52c2952d46233f26"],["/archives/2021/05/index.html","0dc3899f5cafd30c8241f183260e342f"],["/archives/2021/index.html","50b5ece839371a64b787b46a347cdba2"],["/archives/2021/page/2/index.html","5d4ab9c19c5569d752859edf1566cafa"],["/archives/2021/page/3/index.html","647439fd017592edf2010cc12cef4b2c"],["/archives/2021/page/4/index.html","9814d1cef6de616abfebc8621cc40f19"],["/archives/2021/page/5/index.html","2683594a1fd1682a8d355448df65de3d"],["/archives/2021/page/6/index.html","e6ffb4b7f92bf4cb823e996cdefa39cf"],["/archives/2021/page/7/index.html","db1b781eb3ce1f123d9d0789211009d6"],["/archives/2022/01/index.html","760b045d815ad93da150ce467e4d46f4"],["/archives/2022/04/index.html","165b822c4fea0ff05e3b6015edba13a4"],["/archives/2022/08/index.html","85f5e4bd0f3f92d17e1fbe200bd64ee7"],["/archives/2022/09/index.html","868241c682a4208fb56e1bcc2a9cadec"],["/archives/2022/09/page/2/index.html","35467b6ae33c6435b313279c15f2b7b3"],["/archives/2022/10/index.html","4e50e17a2b5b6757b32fe00d8313e7ba"],["/archives/2022/11/index.html","26638017b82c292c7bd212cd87b14abc"],["/archives/2022/index.html","c313d265fe3b8e032969aa6725dbad36"],["/archives/2022/page/2/index.html","bd5f05d7053223f4af0bf38cde9e9e67"],["/archives/2022/page/3/index.html","120ce32665a85cc1d62c9b1c0549e59c"],["/archives/2022/page/4/index.html","830be03aac6ade282860729cdf3297e7"],["/archives/2022/page/5/index.html","cb82ad562dff9dcb247cb17fab390cbf"],["/archives/index.html","9fdec601e5dbb59f03bccfa00a172d51"],["/archives/page/10/index.html","0f248e0047018bcbfbeafe543ab4fabe"],["/archives/page/11/index.html","33f772ff04c7c5df4d767c1df2d8ea50"],["/archives/page/2/index.html","cb10a7e8d081137a40b7f9c930b79652"],["/archives/page/3/index.html","fb357253dde0323b127521dfa26e1578"],["/archives/page/4/index.html","be385b58f9fd2b41eaecbad6ec21dd20"],["/archives/page/5/index.html","2cd5ea75d4291010695c5b104c6acee7"],["/archives/page/6/index.html","829d2e335733abf01ae902fd4bd07d23"],["/archives/page/7/index.html","028de1d8809570b343a32ae27546c483"],["/archives/page/8/index.html","9c308660e400dbb0c0c510ee9bd92be2"],["/archives/page/9/index.html","485588d769a357799303183d71fa03e7"],["/categories/LeetCode/index.html","484ebbf1d3807049efadca2f0e881e0d"],["/categories/LeetCode/page/2/index.html","87d2fea3f21c1c6e40d6d3d37f1aac2a"],["/categories/LeetCode/page/3/index.html","32af809a4a6bbecd8e32727280a92860"],["/categories/Linux/index.html","81b819a628f46aec664ffb4cde08d382"],["/categories/Nginx/index.html","e4803ea8c08236180827911c1492145c"],["/categories/Redis/index.html","d2b4b3dd6872b361418bdbd370350e17"],["/categories/SSM/index.html","9b8d9745b46b713598b1157714721efa"],["/categories/Spring-Security/index.html","02ccd73f0e72799dcd500e8f29fc2a23"],["/categories/Spring框架/index.html","a765f74d39c6849b377c932954dba49b"],["/categories/Spring框架/日志/index.html","79e70619b27f86badf868cf698d0cc2b"],["/categories/Swagger/index.html","4c0fa4adee6ad3b939d01e579e9be878"],["/categories/Vue/index.html","ce1182456f02445ce342312d982ddb0c"],["/categories/index.html","13be56c4e75d94ca2c795e77561fea05"],["/categories/前端/index.html","ba56eb608cce51f571a480ad369d4bff"],["/categories/博客/index.html","254485c030a420781da348e254d9cc86"],["/categories/学习路线/index.html","190261ed3ae2cd201428a3bfc55d80fb"],["/categories/工具/index.html","1e9a02bf6aa81ccc5234524933d96bcc"],["/categories/数据库/index.html","f53f65bc70f916f41e7ec7721214f7f4"],["/categories/笔记/index.html","26ba5233d6024802c13360751610fa5e"],["/categories/算法/index.html","3c147d99c4236dfd2d1fe108a78962e1"],["/categories/算法/page/2/index.html","10df50df1f9cef125e23c7c8f28b98c6"],["/categories/设计模式/index.html","2916730dac34a1a68ba270a2bb4fc67f"],["/categories/设计模式/page/2/index.html","42b4181d4a771017230bdb1a10dd1852"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","8aa6890226344e6bf8431ec63f49ee0d"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","39201051a96efc246e559c6f108016fa"],["/messageboard/index.html","74cd28612f18111450050ddc7b7582b6"],["/page/10/index.html","cb633764c98933f3d10d2a058333c94a"],["/page/11/index.html","a6ac30308e1b69f16ac8082c2c39ff68"],["/page/2/index.html","e89988c7b54bf84cebe043c7f7a6daba"],["/page/3/index.html","b3cbc30f1225ec47ddd0641135b56060"],["/page/4/index.html","b821d11ed17681e2bc3e3c379c686fad"],["/page/5/index.html","252d0429493217cf9ccab3425e0760ed"],["/page/6/index.html","7fd1e7323b0f461fd535c3fc7252e840"],["/page/7/index.html","8bc8c834e4198ce438b7799539b86f08"],["/page/8/index.html","d402c1bd9ceec2ce2479f8ea1450fa7a"],["/page/9/index.html","248b140f2d96212598508eacae76d2e7"],["/sw-register.js","695d7e2fbbb3d2e9d1d7566e0fcf7a44"],["/tags/Ajax/index.html","88682c0d0a97dc6fb813b0f54263c610"],["/tags/Axios/index.html","346e025f6e91c5a3f992d231eb9b2e62"],["/tags/H5/index.html","cf82d4500a194f3ba3b328e5f42f350e"],["/tags/JavaScript/index.html","9218b563f1ff703d001d9be10401edc4"],["/tags/LeetCode/index.html","c840d99b19635c5f82607debc7ea76c5"],["/tags/LeetCode/page/2/index.html","91dc4cb24a7082695c8843e8dbb147ed"],["/tags/LeetCode/page/3/index.html","6cef02e3ccc2fc87e405244f1fe6aab8"],["/tags/Linux/index.html","395f90f9b59dc879911abac35d8acaaa"],["/tags/Mock/index.html","9dad850581f83494e106e1cbf2e43423"],["/tags/Mybatis/index.html","30f6f32b9b1533256f64aac87a87cd55"],["/tags/MybatisPlus/index.html","565291150ac27bc78e9cabf28507d23e"],["/tags/Nginx/index.html","377cf826a8806bd9d33705eb998a2e28"],["/tags/Promise/index.html","f4fba96a0b6111120daacb934cb01eae"],["/tags/Redis/index.html","3355a3b4364d72d9416377dfe0698812"],["/tags/SSM/index.html","1043a9a2224a8d62415f8248706a2666"],["/tags/Spring-Security/index.html","8463c4500d7c3cda038c34356532bb19"],["/tags/Spring/index.html","5bc70655162fac8a82e59a7983414daf"],["/tags/SpringBoot/index.html","543285c06580a0169adfa2cecfc14583"],["/tags/SpringMVC/index.html","c153266badf9902d98110cc6df6cb921"],["/tags/Swagger/index.html","7cf73e94b7ce10e9da5aaf5929cb8619"],["/tags/butterfly/index.html","0286ed6ab24e588d4701da3e7d517c75"],["/tags/git/index.html","3bee9bae4102a7a126c7d3db340271ca"],["/tags/hexo/index.html","2b3e3a29d4ebed846bf6343abc04e77c"],["/tags/index.html","4635f7208f2fcdd2b8c6fe12f4ccffe1"],["/tags/jQuery/index.html","92f3aa642d338fc479fb468ae33210b4"],["/tags/java/index.html","6ed7f474a110c37499f5036829131efd"],["/tags/markdown/index.html","2fb32cef7bedde1b556349efea97d6cd"],["/tags/mysql-数据类型/index.html","b3a4777bd287d0e472b377871d357a4e"],["/tags/mysql/index.html","579247818a58aa3008aa9cd655e481bf"],["/tags/typora/index.html","910a67a35815472937e3d6991efa0266"],["/tags/vue/index.html","8a757e7afb945ad62a7ed9d4e7a719e2"],["/tags/享元模式/index.html","8bd6c9a190fe0edd5dfe26a0fa4daaf7"],["/tags/代理模式/index.html","ebeae537930a54df35e9e5318441ef97"],["/tags/分布式/index.html","0d307035353801b544e41f67a4972380"],["/tags/前端/index.html","203aba89e71d6da4b1f40162202f1a08"],["/tags/前端/page/2/index.html","760ce1828437e25116c0762f354ca555"],["/tags/后端/index.html","66c67c4ab3a761cfe1dbe30a56cb07a8"],["/tags/外观模式/index.html","e1e9704631ba77d2be66ed66181fd21d"],["/tags/工厂方法/index.html","d459abdb6929a247b13e5ed08cb8ad32"],["/tags/抽象工厂/index.html","bd7c1ad822a089a242e37d15b13d7a71"],["/tags/排序/index.html","099da8a9324ac1ba5df742951109a1b7"],["/tags/数据库/index.html","94c9ae33a402b94d746fe889118108f9"],["/tags/服务器/index.html","fd5850cb4cd8f652e99dbbe2f3c76687"],["/tags/查找/index.html","be234cbcda47cac04f279afee185bf72"],["/tags/桥接模式/index.html","3f08f928da0da5addf67b3a606a9bdc2"],["/tags/模板方法模式/index.html","acf6b368e8291edb59589c2419b773f4"],["/tags/版本控制/index.html","5f2d9df76fa9808697a8161d0d7f4410"],["/tags/策略模式/index.html","a00b01354a503c0629edef3c91cdf8c6"],["/tags/简单工厂/index.html","5c3c2219f8390ce2281d409d6ac1918e"],["/tags/算法/index.html","4b9c134e3d51963ed2dc61d27b4b290b"],["/tags/算法/page/2/index.html","d75e15938b3e912220b63527a6324227"],["/tags/组件化/index.html","3c902224c0fd8734e520b26f7d1caa9c"],["/tags/缓存/index.html","57e732d6373b46ee74fec49fa054145a"],["/tags/观察者模式/index.html","364bc9779848686da2e9285097900cbb"],["/tags/设计模式/index.html","9c5dd63085030ebbdb692cb300a98a1e"],["/tags/设计模式/page/2/index.html","b66bbf8a54f24484b36aa46cf4b64b66"],["/tags/责任链模式/index.html","fdbf375ed2cc94381a2781307a5697e6"],["/tags/适配器模式/index.html","453a58f8ca5c5d7f7ff84e8d6d814bae"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
