/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","8c77f2ddbbc3746658591f7693ca5046"],["/2021/02/22/工具的使用/博客的搭建/index.html","b2be0b1b44fe9462d932a8e1e463272e"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","52e4a9ed9b9436b219d349d3b8a37cb2"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","c4dfbb12efadfc41d9bc99b540eb62e7"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","89554772af222b76efcfab8b5c40f3a5"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","01ddd10f4e94b7e564bc194f713d0dc7"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","8d7cf6b06403608234b24d2c3bbf7ce3"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","03f01b016250a0889a096885329ca8d9"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","a9ae66363d5fdd70c872bda43fcdfdac"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","d2c880a099b2f980c1fc25dcc79c16a3"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","e39116318ca0e8ccc0c16fceee2bcdf7"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","0b761421ad6c56c26c69eb43bd165e20"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","d8bbfc9b5345033ec07ccaa19e782adf"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","ea5754f81df113d1edbe0ad4043d8666"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","72acee888e7536548d2b10832f49e29f"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","2dc37bdc24eba66abf5c880c0335d3ee"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","baabc6e2480c0ced6af96000ce5d47e1"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","30f715c6a6eedbb63dd65f8ea299e166"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","574c93c23c7161d84d4cf89c7ac03d61"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","e374a655f5836eb8d0bf7f82e9305261"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","6813b5a66c41314ddce66675a4ece8ec"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","88403ea08fa7d65eecaacabb4bfa6b7d"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","8091d1962141692394593808a1747ec2"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","9427d612bcc935d7f7377646558ec037"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","a38ad9edfceca3fa3196017056ff634f"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","f6ea227b2bfbcf36e94db202b7a8b240"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","36bdf72c5af25635f43191c54daaed99"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","307c18f05288b8c497e9595a5f908404"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","c75380ec93e7b60aba2c3122c75ffd08"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","d8b29ef1ee4c9400e38ab1539c2e35b5"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","0f064f317415616a7b70087e33ff6b10"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","34e5dbe9ef9de6fc75f0bcd96bb3f15d"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","bdfa390dfa496ee708130306148fb63f"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","08ae60efd345cc0f859c645644692b8e"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","78758cb88489dce3cd1efea187a2beca"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","bc1689d8d0b5c3e13b4aabb7c297ccf3"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","ad6647be7ff4b0428c0543f83ecaa02f"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","d4e9866a1c93c3508118118be9fab4cb"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","8505cc4eeb66dae908324f2321424ef8"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","e919f77e913ae70b1031a6bcd5f1e12f"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","a9e2ffe629ce4a0121a0aac34e03877c"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","9e0914f69495ad78538c24db98fa041f"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","675cecd5485cdc32b68f3d8274d2f244"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","58925f019d27f29e05064cbea141671c"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","eaeadd5d6a2aa480017700fadebe0b4d"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","fc80360d651390331706c9b3f6e2f422"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","8afb408b20e963e6cea3db39d72baf04"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","f739894e053950cd361796d1c8154510"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","14f52f9d85a5df18f7c1adecf2aff9a7"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","f8a4d70b6b234878acfbd800c46049a2"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","61982c86b2c52e7171ded231c7c21122"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","1b35c2fa48348034944c28953d7b6ff9"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","39b8ae2e5fedbe4d5cd3e3afa2f3311a"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","3f1f00e6894b0584a3976e9c53625be7"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","82d880210651186f305e9cfe11c127d0"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","802d600aa7dabca2994c91f9f434976c"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","ba58f047e22d32ff795540ca26aacdca"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","6ccc710edc64ea3650387f9e3b884f60"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","e3c819f5597adf458c3088ec65a1f8b0"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","f719b5408b1f4dac2d45a484a2786502"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","658d01c6bda911c0b70f535ee406c738"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","f237fd96c8169adfa84b9697b8a5bbb4"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","a92e757cd39f0e9f71ba96a69e03acc1"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","2c345a0aa7d8fd76515844404875f7e5"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","f478d7ab4aa324a558da5bf3f2a258ab"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","a36b08cc70d4396b38abd5ebc07075b4"],["/2022/08/17/前端/jQuery/index.html","b6f7282fca8cc202230afee7a27ba903"],["/2022/08/19/前端/JavaScript/index.html","c5efea88e113bc4a854fc5b433413395"],["/2022/08/22/前端/Ajax/index.html","6b8e8af4696967ccbca4c2a3f4c2029d"],["/2022/08/23/前端/Promise/index.html","06fd7f8a70acd9a2b457e10efbd26940"],["/2022/08/24/前端/Axios/index.html","5934d7483e44b59f5bb919d4347f5708"],["/2022/08/25/前端/H5本地存储/index.html","718f908869b24fa9899ad1447f734d68"],["/2022/08/26/前端/mock/index.html","c131c8fece37637ce59bdc72fff0c63d"],["/2022/08/31/前端/vue/VueJs/index.html","cc8852ff82c78f937c6f9680bfc0b5fc"],["/2022/09/01/前端/vue/vue组件化/index.html","1f2afbe960fdc39ca3365f7c61488508"],["/2022/09/04/前端/vue/VueCLI/index.html","060fc102a7f488243fb9d23e7dc9aeba"],["/2022/09/07/前端/vue/vue实现动画/index.html","1ea3000c5da8394d388269bb941303db"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","0cabf9b7e861bc0332e6114aa0d8ef9f"],["/2022/09/10/前端/vue/Vue异步请求/index.html","aa589c342b3cc28bfadb1a855703f8fd"],["/2022/09/11/前端/vue/vue-Router/index.html","ad14b03e1f821ea93d274f591578c346"],["/2022/09/13/前端/vue/Vuex/index.html","3bc2355065c84a6afd76a60c2aeeb815"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","c578d778e82a97ccc1802a2aa1830c9a"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","bac4b62384b7d3d3f8cc31679da5c261"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","0df3d59399eb3ecbe81045d9d50ea5a1"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","4570ef71a51f0978b9c63aa446d8e463"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","0e419d9f481b7e09eb9a4b0d887c5113"],["/2022/09/28/DevOps/Linux/Linux/index.html","9e1a0d0c0273b236c8635885157c1f4a"],["/2022/10/02/中间件/Redis/redis基础/index.html","1ce188e5e0430b469b5d5d05ba9323df"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","b27d29212c74c5c61330279050234e07"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","a908d13723e67cf2e929dcdab718a5b1"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","4977d89d6a291215c24c463f4f7406f9"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","88eff0f5e90453e1640b438d1a6aad77"],["/2022/10/17/中间件/Redis/Redis集群/index.html","4ffbc5630fe07e53208ac6cac90da525"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","e3e0df89a1f9727bcc45439e6ecf22e0"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","4397e49e09850552cf986dfb9775dbe8"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","ebc39545e6fc221fc0df9fbfa4e8ac76"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","de846c5d9b6d335653887c3709b7f74d"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","843a6b7d90f9e30149aa8b191a5f74ca"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","7a0b741d513f22aea1d7f19dc94437db"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","4f47f77adad120c0eb9e3d2288709824"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","f5f92f157654cd01eba836d3702d8b57"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","11e17b653beef315ac3a3bd6c9e11c67"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","6b6f1b7922671a2ff2a836b71fa4b94e"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","bcd1073ba9112235556aa5911ec32208"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","0db6730059e56b6daef0da9e5a392634"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","9b1e9695b1d0c4fbff51ce7ed40315c4"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","480922b4fed0039f78153950bb342c7b"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","de93d56172b37dd257d6f5f26746c655"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","da9c0899afe34f4fa589376cfa6d7fd4"],["/2023/03/10/DevOps/CICD/CICD/index.html","75984c656238e7a18559728046a89faa"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","5ef136fca928feff6184a53bb832aefd"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","93f771b6f8700056bdf6efe8569ac6f4"],["/2023/03/13/Java/NIO/NIO/index.html","491de0062f2246832744ad7a2da21d5a"],["/2023/03/14/Java/NIO/Netty/index.html","2cae9c27edd229045261d5f6d98c0aac"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","97ec6e8599dab3a7db69da2fb42404b7"],["/2023/03/17/系统设计/分布式系统认证/index.html","11f5df32862099e570471237d40c2866"],["/2023/03/19/Java/JVM/JVM概述/index.html","70ddb612b02129b3d997681674afac07"],["/2023/03/23/Java/JVM/类的加载过程/index.html","24a7ed3644bd9ea15c76edf115e4fa3d"],["/2023/03/28/Java/JVM/对象的实例化/index.html","ab48701a1b47c6295c22f1e8fa7237f0"],["/2023/04/01/Java/JVM/运行时数据区/index.html","9f2ed6381877fe1c9e2bf814cb4baa5e"],["/2023/04/04/Java/JVM/执行引擎/index.html","98bb551def9d772fb563c4ba5c8755ef"],["/2023/04/06/Java/JVM/对象引用/index.html","60e229d47238e04bfd49e03969bea1bc"],["/2023/04/09/Java/JVM/垃圾回收/index.html","a64e8a97983675f9d246919902cd853c"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","0045a1989c4b7d5418c854e83b37629b"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","76ee4ec8cd2f3bde51c601f4f4ee7af1"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","8a6832d7cae52a6682e60ee0619aa96a"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","e3330ad079da9cd999ee5fcb41b64458"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","d5f5894181367ec14384479286e4dc9e"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","87e0212834af092554c9470772494003"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","5c2e2ebf9c588eef6a0a4115e2cfaec9"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","03d7d470924c07a97bd9cf97f87ea3b5"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","a5768aae6984160239c9cf4aef8a0c39"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","9d7ead5a7c7342f67317b72609151bea"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","991ddf56b600b1b142763d4005b956f8"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","6641fe28a0b086dd9ce51f6df3be3f06"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","e740a1860d815652a28d078e9366fac9"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","715b77683fe8ed8bddc39a147edf498c"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","2acfbd8d354a054ea623a95a76eb64f1"],["/404.html","6733d214ace4b785b8f6252ff0e09538"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","a0ee1ba26522192b79b5b9a0b4a45adb"],["/archives/2021/02/index.html","925ff36e93b10864f76f6639fb36ac6e"],["/archives/2021/03/index.html","4193ce56b1472f2c39d88b2ccd706f3a"],["/archives/2021/03/page/2/index.html","a018ab6ee02088028fbc009981710b5b"],["/archives/2021/03/page/3/index.html","600bf6dcb557b4a07427a528bfbdb72f"],["/archives/2021/04/index.html","ca2b4586b0bf62897c09d1fdfcddc3d3"],["/archives/2021/04/page/2/index.html","94fec19f0a88a27f354c312c93b9210d"],["/archives/2021/05/index.html","21b6217c5c87e0371fe412c21a19628b"],["/archives/2021/index.html","d87b803d21eaa38251446138cc1ace99"],["/archives/2021/page/2/index.html","8f368e1ef2702692e25075019f3d0a84"],["/archives/2021/page/3/index.html","9c32f3c4a2f784996e0e0d1a71344b0a"],["/archives/2021/page/4/index.html","1c8ec239f779ad81b95abb898e5dd72f"],["/archives/2021/page/5/index.html","56aae673dbab0ec1a30a699bf34e8033"],["/archives/2021/page/6/index.html","cb0c520ceb1f75df0441f74aa7a030d9"],["/archives/2021/page/7/index.html","e501de15cb7e00ab7047526248520548"],["/archives/2022/01/index.html","25ce2a3b4be367cf0b2c842d1023b52c"],["/archives/2022/04/index.html","6214ff11adcebe27a6e83de58a931cc9"],["/archives/2022/08/index.html","30c4ccacbbe04c2a3b66e1ab53bfa0fa"],["/archives/2022/09/index.html","1f76d03dec6ae751ac3afac050f99162"],["/archives/2022/09/page/2/index.html","d9b59f17adee4c490f45a1fb0cee6267"],["/archives/2022/10/index.html","e96fa38cff79f07a3134622e847d3460"],["/archives/2022/11/index.html","c32c20f6e195f8f7d85ac65d33331164"],["/archives/2022/12/index.html","328d72c5654023abafdb997199c30b88"],["/archives/2022/index.html","44d0d0dfa65cdc7e4fae1f81a1b9c4b3"],["/archives/2022/page/2/index.html","1a9347eb77a23b4480563b7f032b5574"],["/archives/2022/page/3/index.html","682735a98c6eda0247ab1acb2f18e7d3"],["/archives/2022/page/4/index.html","41ef4ad892c4d268199fbaedd1391477"],["/archives/2022/page/5/index.html","d8f28ce1382326e46e56e11f8e017f49"],["/archives/2023/01/index.html","a3e5cd44a2fabc19bce606f724d11d23"],["/archives/2023/02/index.html","0cb6ac9bc34af7043e70eaa4bfd5510e"],["/archives/2023/03/index.html","b1689dba7a563329484f5a4fc11712d9"],["/archives/2023/04/index.html","c5b88cefbf21373b78688bcfd1434ec9"],["/archives/2023/04/page/2/index.html","d3d816621f0c7634347a2c0320a400d7"],["/archives/2023/05/index.html","c3323ff037520982d9f348e9a335c158"],["/archives/2023/index.html","8abac922ee3ed1a3eb8bdc21c16cf4f6"],["/archives/2023/page/2/index.html","b9423993d2d81810dab72db3a9311809"],["/archives/2023/page/3/index.html","482f5b7a7edea79116bd557c5b4730d3"],["/archives/2023/page/4/index.html","6cfbf091c0fb9873d609f1fb4a00915e"],["/archives/index.html","6251afd4912160a2ebc63c479b8bf200"],["/archives/page/10/index.html","c7448261ae5e2011bc2c5be5f7e33559"],["/archives/page/11/index.html","7a1ed8ae84af5803b6001f0b26cd1537"],["/archives/page/12/index.html","bf89b1d8526eac76ddf477eec52a64d5"],["/archives/page/13/index.html","d2579bb2fb9ced0828ee5e1b248e525a"],["/archives/page/14/index.html","50647cbc3846f4585e2991a10bf7d3b6"],["/archives/page/2/index.html","1e9cd2ed2e19cc04140a883f2f907d02"],["/archives/page/3/index.html","ca6fc8fe753e12b9d87607927b9ba89c"],["/archives/page/4/index.html","2e0684446e4a3b40e54179734bf0049f"],["/archives/page/5/index.html","f8e68a938aab5eb6bac634907241fe5c"],["/archives/page/6/index.html","fa6aabe5000bbc3f46e98734627d3d27"],["/archives/page/7/index.html","0214ee6957b906187307529471c28123"],["/archives/page/8/index.html","9cc67157831cb87550e660f7e51603ad"],["/archives/page/9/index.html","db65e3700e73040bf92f9a68b888285f"],["/categories/Devops/CICD/index.html","363447740ebd99669592b70140b5c2b2"],["/categories/Devops/Linux/index.html","1240d90950519506467b15128d859800"],["/categories/Devops/index.html","eaa42a00c48a57b72b3f3a2769e1d9c3"],["/categories/Java/JVM/index.html","50441fc5772af4bb962425560eee5abe"],["/categories/Java/NIO/Netty/index.html","df58afc83e7a7181f4f5b19b476abff4"],["/categories/Java/NIO/index.html","a73ac201da6546d1c8929d62b1c5f6ed"],["/categories/Java/NIO/原生NIO/index.html","4d4229aaf5df4cb4fe4dfd5a508f6c9d"],["/categories/Java/index.html","57320a2a449a8446cfcb5c409e6d07de"],["/categories/Java/page/2/index.html","844a9320b6322e9c0a31f9eece4f0828"],["/categories/Java/学习路线/index.html","b85dbc21623886e93de80d9a9ee3fc57"],["/categories/Spring全家桶/Spring-Security/index.html","22c2bf88dc839e62ca4e3fe008356472"],["/categories/Spring全家桶/Spring/index.html","cdd4f23ed008ed5f77ced9277c78bb90"],["/categories/Spring全家桶/SpringBoot/index.html","07ba5f3f841253281387c962a8560e1b"],["/categories/Spring全家桶/SpringCloud/index.html","efbb664b43b2b2b43b2f843e7c438023"],["/categories/Spring全家桶/SpringMVC/index.html","d435936d1936836f9572a1bb912e1c0a"],["/categories/Spring全家桶/index.html","d21760423256c5a913579dd3aff11b56"],["/categories/Spring全家桶/page/2/index.html","6c7405a6b8547a87e6bf95c48d93e536"],["/categories/index.html","2d6e0d3cbe707a69ce4456e2762f50fb"],["/categories/中间件/ElasticSearch/index.html","c7b615b4c6a36b278c8394988e5e4e08"],["/categories/中间件/Redis/index.html","50099e204cd4aa37e1d0b00d962603f0"],["/categories/中间件/index.html","92469471d592f169ae4e31e06d02100f"],["/categories/中间件/page/2/index.html","94ffa5959949334d404123e7f494a1c5"],["/categories/中间件/消息队列/RabbitMQ/index.html","f021240542ef2b68d1d049eae658ab8a"],["/categories/中间件/消息队列/index.html","acc665f02334e660ed7c1c3dda3f46ad"],["/categories/前端/Mock/index.html","17a80030871947224f448762fb72a1bc"],["/categories/前端/Promise/index.html","028f0f5a284f7b6e32f11015fc640b4e"],["/categories/前端/Vue/index.html","24b44eaaa758983333809ef0ad2391e6"],["/categories/前端/index.html","70c242033f1bd09d990d76126c1a1b83"],["/categories/前端/jQuery/index.html","ebf203592e191b68857045244ccded0a"],["/categories/前端/page/2/index.html","9fc4189e492fa99c65a663a073c59d0a"],["/categories/前端/原生基础/index.html","5d58f146ea66f8dc5def372ffaf02123"],["/categories/前端/异步通信/index.html","bf9afc135d0382b5b67478759641ddad"],["/categories/工具使用/Git/index.html","ba7ebc10af83745c0e10f22f36b8f4dd"],["/categories/工具使用/index.html","bee9f4eb1d3fbfb378c2ddd8df645aae"],["/categories/工具使用/markdown/index.html","75a8df66deaf77d11e4606caea1b1ac8"],["/categories/工具的使用/Docker/index.html","6372765cf0bcd38a25144c6369b246f0"],["/categories/工具的使用/Nginx/index.html","ed0e30a3028ad640f9d09b58b8eafc91"],["/categories/工具的使用/Swagger/index.html","c0f88ae5f1b3407232515c234cd47acd"],["/categories/工具的使用/index.html","4e4b7e0dafb1927573b3dcd2cbd9afc4"],["/categories/工具的使用/博客搭建/index.html","26a9a7e004d323332709792e6ad167cf"],["/categories/数据库/MongoDB/index.html","9d5f93d39170a912af7f1b78b8f41952"],["/categories/数据库/MySQL/index.html","44fa21170d5a1d17ff6e9f38466abdeb"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","ffb0776ee82d8000ddd6177398bbc666"],["/categories/数据库/ORM持久层框架/index.html","ae9189bf3853fa1f3e713e78d71f9713"],["/categories/数据库/index.html","e87817c122022255b762c8532c79a5d9"],["/categories/系统设计/index.html","bf0dfa585306c3f6080856b79c84044e"],["/categories/系统设计/page/2/index.html","2166422cf779e2ae6d5789413bbb0f89"],["/categories/系统设计/分布式权限认证/index.html","d04ee0c2100bfa612b7160641b4e3d33"],["/categories/系统设计/设计模式/index.html","9dec4ef05337e2f36b8c7cd4462f764d"],["/categories/系统设计/设计模式/page/2/index.html","a3634ef47f5e39c3014dccfc1056a126"],["/categories/计算机基础/index.html","563f0a40cb9f2fa31094c4b932434d60"],["/categories/计算机基础/page/2/index.html","07b3c5fb8501407535ab11f8dc7fb8dc"],["/categories/计算机基础/page/3/index.html","debf1cedb559042dcdf533b7504aa715"],["/categories/计算机基础/page/4/index.html","d22ba86df86934e6117b12f7a0b61a66"],["/categories/计算机基础/page/5/index.html","540f9d02a904fadcca50af5e6d47d7db"],["/categories/计算机基础/page/6/index.html","764b7a380520f52796d44c12ddf3fd76"],["/categories/计算机基础/操作系统/index.html","61494ff6c21e0453aa584a247c01d239"],["/categories/计算机基础/数据结构与算法/index.html","768131ed64879e3f2675057e69ea5e03"],["/categories/计算机基础/数据结构与算法/page/2/index.html","94dea2a15b2028d12da8268ce8d148d7"],["/categories/计算机基础/数据结构与算法/page/3/index.html","3f2ec77ce8d8f1b8968da2a24bd7826e"],["/categories/计算机基础/数据结构与算法/page/4/index.html","5913414bf7bfde461e2390cc0c76466d"],["/categories/计算机基础/数据结构与算法/page/5/index.html","0115a9e04c949cf0e13925f3d946edc3"],["/categories/计算机基础/计算机网络/index.html","ee916101aac9ae4a97a9999e6be0eba8"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","fddbb55d156ee302def01bf6331a6bc7"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","cd7fb6c1c9d83c7a5fc0e15600080c5a"],["/messageboard/index.html","0ff03d50635037c01c443863037a6e66"],["/page/10/index.html","7a51f56c9de4c40000f2aa53237037a0"],["/page/11/index.html","1b34594a15d0731f13deec181dbc2e1c"],["/page/12/index.html","1b2fd792e2725290b87de2d925d2ab95"],["/page/13/index.html","c734fbb2c80708f2eba695de0dcae17b"],["/page/14/index.html","39bf35e61dcd968eb97102180006d4c2"],["/page/2/index.html","1ca9cc28bc375a5625144aa72ed04a87"],["/page/3/index.html","f23d9dec8866d978042b4041d53232ac"],["/page/4/index.html","15518dc427aa76e6bbddc45e01a13f5d"],["/page/5/index.html","f25872bd1bae6d9d48708f6fdc550edb"],["/page/6/index.html","cb0d5278af1ade8dada4108c1faa06b2"],["/page/7/index.html","8f2f6f2f3472ef14b1222f579be8f19f"],["/page/8/index.html","43eb069de5dd44e7e04bf9fe4ba15ba3"],["/page/9/index.html","0759448e272ae91af906256995cde8e8"],["/sw-register.js","96c1e291929771b2b26c56b794091e2b"],["/tags/Ajax/index.html","9dc5728c235a5309abcd8b8505b199eb"],["/tags/Axios/index.html","1c55b84e57064bb2521da8552eab22d3"],["/tags/CICD/index.html","b14136f758b92e3fe4460993b83e1520"],["/tags/Docker/index.html","ec52e66b0b57594a9c3f9c480991cec4"],["/tags/ELK/index.html","b6627aacf232f42bf00d6819e4f4df7c"],["/tags/ElasticSearch/index.html","62b554f26d6a722e9173f70870a56fdd"],["/tags/Git/index.html","22f81748864a14770d44322ac9c66590"],["/tags/H5/index.html","e07dd21937cc7e49ec8f0691da4f1e81"],["/tags/JVM/index.html","fadd020c8684b34c96e263caad9e9091"],["/tags/JVM内存模型/index.html","7b08092ebc08e3109b836feba4cca8b0"],["/tags/JVM执行引擎/index.html","23090ed35b322ca467a8c0aaf84f108a"],["/tags/JavaScript/index.html","c28104c5497574039b25fb5ea0acd4ba"],["/tags/Kibana/index.html","3fd762fa2984287d4f1c2691f09c1959"],["/tags/LeetCode/index.html","ed84f3d377f510570e2dee26e404c357"],["/tags/LeetCode/page/2/index.html","bca48904114106be552240150fa197c3"],["/tags/LeetCode/page/3/index.html","b3e7df698e6400524fb2aa7b4953e0d5"],["/tags/Linux/index.html","62b50ade51295812c360e1597840b8cb"],["/tags/Logstash/index.html","acbf7ea138491c780c018b84f553b715"],["/tags/Mock/index.html","069102fc403094c41857b7d1c1794ebb"],["/tags/MongoDB/index.html","32fc83dd36fa8ab7988299ab92572a5a"],["/tags/MySQL-数据类型/index.html","1873229824b7f8af66b3cef6057a96d6"],["/tags/MySQL/index.html","f57d0aa35ece27c9a43ea0162675e79a"],["/tags/Mybatis/index.html","e3c868a9f28276c291032752b1a7b84c"],["/tags/MybatisPlus/index.html","6f7cfd7e5b60fd929f8d54c673257de6"],["/tags/NIO/index.html","5cf2cb8939678544a2d60a8f94275950"],["/tags/Netty/index.html","0ce7bfb502547c16d7d90d4459c6f44a"],["/tags/Nginx/index.html","d440326f5a3ed41a264b2b6203f9bfdc"],["/tags/Promise/index.html","c0e9df6fafcdb88702fd7068f7fd6dc8"],["/tags/RabbitMQ/index.html","af3efb54718cdb6847d2956aaa01baf9"],["/tags/Redis/index.html","399d13b7c0bd92680fba0e201b096bd9"],["/tags/SSM/index.html","731ba60801cffed10d7dd8896fb31b04"],["/tags/Spring-Security/index.html","cf1f149a211b8926c8ec528dd0607d26"],["/tags/Spring/index.html","d2fa3ee702734c23d05ba44a7fa2932d"],["/tags/SpringBoot/index.html","758d6ff95b014f27b03e8de89949dc02"],["/tags/SpringCloud/index.html","acbb2e2f09b840486c3aed015ae33f0e"],["/tags/SpringMVC/index.html","0384726df83d89fd782e7d321e7cc5d4"],["/tags/Swagger/index.html","c205a6eea7d0858a57d0aafbb9b5b892"],["/tags/hexo/index.html","00f22c30decf1ff50502f22a7fed505e"],["/tags/index.html","06b686dc76944e6e626fa3f860ae184d"],["/tags/jQuery/index.html","7f338da119e33121e2fa73f5769a0d19"],["/tags/java/index.html","00d364567f6cf5630a56c0077528f895"],["/tags/markdown/index.html","c6eaa5c5ae8f16fc2fa8906966450da9"],["/tags/noSQL/index.html","72e64061f9e7dce2f69abc38f04f34ef"],["/tags/typora/index.html","1da2f88adf0307be5dcd076dda5bc261"],["/tags/vue/index.html","ede6533dc45af4bacd4218574badfc16"],["/tags/享元模式/index.html","33d580e1f6e75f2ae787617b0cc0a752"],["/tags/代理模式/index.html","ba6f43f2b07e2d1c3fd75d8538a76247"],["/tags/内存管理/index.html","32f794c917c0453fa0a74a3cac7d88e7"],["/tags/分布式/index.html","965450e548abc5c592b209d247bf7dbf"],["/tags/分布式系统/index.html","ecff5ac9b075e67d20b429cac6e1b3e7"],["/tags/前端/index.html","5c7361f7634af171e4dfe9587b6dc674"],["/tags/前端/page/2/index.html","3be39f0c03f7c47fa934d1d103f96184"],["/tags/博客/index.html","57c85f80221b7c6177be62b24ee20ec7"],["/tags/后端/index.html","ed496c14559176310f6b6639ab70ffe3"],["/tags/外观模式/index.html","5be0701b143ee9a40149a8900fa0a2cf"],["/tags/容器技术/index.html","bfb3c18a9baafb12ece7374efed23439"],["/tags/工厂方法/index.html","cb518d6fc215fa9ee4f9d0d7c15198f4"],["/tags/微服务/index.html","7a3c9eaa6a4f0762c7e7a864ad345bbb"],["/tags/抽象工厂/index.html","50fe18b5bd40e8d89f0c8e599cdecc25"],["/tags/持续集成持续部署/index.html","f602d47e0e884c1065a5bd0ea7569a5d"],["/tags/搜索引擎/index.html","d650f32766b6f6a760dc9b758816919f"],["/tags/操作系统/index.html","fc30f9335424f0ec58170326be15c1b9"],["/tags/数据库/index.html","68017dd81de4a77e06ccca3dfeabf568"],["/tags/数据结构与算法/index.html","572124b9c2c28f133d7f3d6cc0c2bb0e"],["/tags/数据结构与算法/page/2/index.html","40116979a05514ff3d85c8a8b5ffce4c"],["/tags/日志/index.html","e5d6ef4f9f526f9e53dec669f5117148"],["/tags/服务器/index.html","6a730e260a4bcb8ee4cc3ead230b6b9d"],["/tags/权限认证/index.html","93f58bf7c449797ab56f632243de9281"],["/tags/桥接模式/index.html","ccabddfb1b375120c4a5861abfdbeb5a"],["/tags/模板方法模式/index.html","cdcf1e07b149b536cf4b8d139e1dc628"],["/tags/死锁/index.html","3edd9f73de4a161c4cd1cb58a8d8d818"],["/tags/消息队列/index.html","7fbeed2412a33571786986b114787c4e"],["/tags/版本控制/index.html","1e5e055f086440bff8b5d4c465da79eb"],["/tags/策略模式/index.html","846af127ede4cefc5665cc3e709fe761"],["/tags/简单工厂/index.html","fbae7fdea017f9fc7d1bd7d744f0f696"],["/tags/算法/index.html","d5f3836dba57100de835e657ef6c3941"],["/tags/组件化/index.html","d661bbbb9a97651c86aa0b39dd60be6b"],["/tags/缓存/index.html","2d4ba19e0b612854eb7dae5b9a0a1ed7"],["/tags/观察者模式/index.html","18eb09b86851d60737f9f86bc74f4ba3"],["/tags/计算机网络/index.html","9cdc8950a815e379e4513c8cc55e2cf3"],["/tags/设计模式/index.html","e0152c8300f171e6c0036d2debf75504"],["/tags/设计模式/page/2/index.html","dd348ce34245815bdaff741e9b3477f0"],["/tags/进程管理/index.html","9b80d430b834f751b112ebe374c6ee8d"],["/tags/适配器模式/index.html","4b614fe70003a72b97dbf6bda19814ba"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
