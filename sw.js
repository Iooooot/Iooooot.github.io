/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","f352c2f270534eb0805d34bab20d7ef7"],["/2021/02/22/工具的使用/博客的搭建/index.html","58cd83236ac78831ef63d095aca107ab"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","192b07b4adbb2f502c26b6cdcdb6c9d3"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","d693a7fd4b0d554ddcfc6cee286f0e4d"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","256c9f874ecfc37218017e04fba23a89"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","fb4b734bd2ca92827f790d3bc06a7be2"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","a3fb11b3da56a5c8b81e8ebcc7cefae5"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","74d7b0b71a07c1001f69cfd5153d419c"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","704bea572f69f865f55a868008e2de65"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","83933e7a33977dd98fce25c11109370a"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","ecab7d67f4cac73afa2f9431e9d1b3db"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","b640d6f32ef8c3a60e599cd817ef4f0d"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","8a863651d23a767ff7c753cef5e309f1"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","cc6760fb268c8bef60f5f58da9633783"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","8dfc0facea421d639b35ec4242e91569"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","d65c3120edd795d56a9d610b96d6ad12"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","f52af107d741364451fcde31ab1328a8"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","d17846e8c4d03ae620053f4f0eaf9389"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","f919d3a8f98154ceccda5cdccf88d72f"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","d63004ec2436268fa72125187039b9ae"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","3443035df60aad0e17cdd93663495f6f"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","c5a84d69478e5590e361cfa76f5ab2c6"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","3f2352e7b8c077064b67397e320dd4b0"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","41024481ad36d280119ccfb88155d9ad"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","9cf46865f9dde307d6fec0c6b51e5bbf"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","b170329f282812aa8e5742d762dd1da0"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","cdd984591f95f12f74db88b46a41d2a3"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","73f0bb376b478e2668bf0565aade1a7b"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","22514e708b31d104f90a2b3590ae2e1a"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","3629594c9366e5ace4c94865c49cd4cc"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","dfb3a2b844b1110369590e701e401940"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","35d491d5c4679e1b800fe9d679e8c261"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","24d0d6d8cb3a6fe2fbf519d3527e53f6"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","d9d73ece1eb0adb3690f7bca36f1da3e"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","c5760df59da2a0fb5d5e83bfa81e5fdd"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","36251ab415178fb4b46e4af6ca490209"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","6b358a0387df0850818b38bb96f3dc4d"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","24c09188e4e2f96cc247aed161920a32"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","42600184c806a9d09505f57d42ac3ece"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","21a26367b71e29ba2a2b22f299c0ccad"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","618a0223a248351cf8f69c91da961b62"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","2aa1d8cf3fa51cb49abd25ba5b9605f1"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","6d36c2566922fd984e03f2d386c56aac"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","a775c469794c8bcf89567e74a4e1d7e8"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","82d98d95c430501c86083d17e4092a90"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","a395b3b6489048695a6e47fee225db8d"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","50d40d4037bcf1cff62b1ae1d00f50a5"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","28a71fe6a8a15f1618828285728bc6c2"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","ab2fd762756b1972d04d8299edf62d8b"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","cb2aa260008c3b22c9f6b56265f014fb"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","f02edf0e0530bd8e6af727e9b49a96da"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","3d64163952e10883c7deb0ab1689cd38"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","289f45362f8de5542f5ee812d8c7e8dc"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","d6a1cfe1ccfc022f0b34aebf3310e41e"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","140901f609f4b35764656d677214f20f"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","add439ef6aa9fd063be6ac72f07a3be2"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","b1cc26642b840b553ec14a7019c037e7"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","e0d2487993572e4b17b4cde11dd00af3"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","7dee988f2023bd0fd0609c16d510ad86"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","1c44a73d877c7ce78b73b24d996c3690"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","0d4efac1e55eea820cf3df46493fbfc1"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","f84bd188a3e9ce8b9927d1836b4c3e85"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","57b67c6f95a84f0e05b1143fef4034be"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","2a75e718bc00531a820b551a7f1e610b"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","e6e7787dd9374bcab8db85425d03efd3"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","e6f03493c8ae484e9520d92092dddfbd"],["/2022/08/17/前端/jQuery/index.html","3c4cbf5c695be27bc1eda4b9680d53e7"],["/2022/08/19/前端/JavaScript/index.html","b61aa872d5c7c3baa72bf803091a5d80"],["/2022/08/22/前端/Ajax/index.html","f846ffcea14f5b5e7c8e9e04f2cea260"],["/2022/08/23/前端/Promise/index.html","935bb7039883a4ff112389d4699a7f84"],["/2022/08/24/前端/Axios/index.html","353ff55d21092702d34bfe9e998a17eb"],["/2022/08/25/前端/H5本地存储/index.html","852bcaa491bb4539c866b07515cdc206"],["/2022/08/26/前端/mock/index.html","22336a5ca68a297747a3fad049c52e7a"],["/2022/08/31/前端/vue/VueJs/index.html","7121fd8df58b0b571623c7fe156872f2"],["/2022/09/01/前端/vue/vue组件化/index.html","49c4e3ad3aabda815c5f8edd8b8164c3"],["/2022/09/04/前端/vue/VueCLI/index.html","e5b81a88edd2b68effd85578578b26d4"],["/2022/09/07/前端/vue/vue实现动画/index.html","0621712ab57bba5acdde2dfa430cf850"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","034c5d89480b86c68476a1d23fb56bfb"],["/2022/09/10/前端/vue/Vue异步请求/index.html","78f98965711110a9e5c03a304fb67957"],["/2022/09/11/前端/vue/vue-Router/index.html","f21e5e1805a711f708f7fa0b7061895c"],["/2022/09/13/前端/vue/Vuex/index.html","e643cb8921fd3e2152325a6a60478e6e"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","24dfe83fa239759fe2e00c10be9a42f5"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","357e0c32ce8f32c0475f3422f7a205a0"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","381e40d01e8f035e74e173c10c2c1eb7"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","8b0d0b1e9128d89a63e5f5bdf79ede33"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","056330bd7fedb1d9dbc1067d9f1a9d79"],["/2022/09/28/Linux/index.html","318077795ed4587a1583080022289ca5"],["/2022/10/02/中间件/Redis/redis基础/index.html","fcc7bd013d15e7a802a73dbbf2923dda"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","158742126a4fe0de547d962938c5fcc0"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","b10cdb7fc271dc4f8a781775b8b1932a"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","c0dcdaeff01ebb5699ab9974d8edf45c"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","96f9e87449504a33dae12e5d6b667b15"],["/2022/10/17/中间件/Redis/Redis集群/index.html","15f2aa69233dc4cc589975e968991e33"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","ca06ff2626e603b31e2ce7641572a330"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","6f5af7993838da05c63b59ab7b55c234"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","3cff000258d4d2215f99e2e9d71e2f31"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","aacd13337c8803533053b6ea3b68bed2"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","caba077abe766b3e848fd116928d5353"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","7f2c6990cc6236222e5475cb19c41f32"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","a2957e6a63540d6686ba36d454256df8"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","1aef28183e2fac43359f8820ede6ff14"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","fefcfe3ea27a5b34d3e06051acc36201"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","bc117b6e27229bffcec4d87fb3b56e2a"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","e590a41b0b23dcd6bf4951d656cf7d24"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","717f7c412c1488bc73421e97d3349c75"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","485f039f190b6a1e6ae6f104cacf2166"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","7ae345857408cdf7ce9e5da65407c8fb"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","cd98a56fb3882a0633099958894a14fb"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","dba25ede2ce9e2aba8d4a3f8405a90f5"],["/2023/03/10/CICD/index.html","5e7f4ffdec3f9301c94d0e98610bb17c"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","2e67b6eddd4ea67caa1f0ea890fb6531"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","3d0dfbf13ab7ed712c32ec16346f5910"],["/2023/03/13/NIO/index.html","36e07b160c74b1fe239154a3c60d5eb6"],["/2023/03/14/Netty/index.html","d8f8ba4b5f588e642c1df624e07df0a4"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","19dd1cd31bf66ba4989f0cea946ec693"],["/2023/03/17/系统设计/分布式系统认证/index.html","5e5d4ce2b1c716b16ae7f299c85686c5"],["/2023/03/19/Java/JVM/JVM概述/index.html","d0302a0b87eef21d3a22285c528c06cc"],["/2023/03/23/Java/JVM/类的加载过程/index.html","1ba305c13c146e59b974123b56ec55b4"],["/2023/03/28/Java/JVM/对象的实例化/index.html","71ea977dd483f84ed1579a645f090cf5"],["/2023/04/01/Java/JVM/运行时数据区/index.html","861f8e499ccdf173e2e0ce7f94dbda01"],["/2023/04/04/Java/JVM/执行引擎/index.html","68d718d5602e11521eb7b3a2d43c0c8f"],["/2023/04/06/Java/JVM/对象引用/index.html","b77f77a7d064e8527be190c67d57e740"],["/2023/04/09/Java/JVM/垃圾回收/index.html","06e10ce5dd4397f192d68f092d852857"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","94d34788de0b05136db694c66efc1e16"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","26fd506aafe9962696c4a49be342e453"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","e5e82f84c410471cd8d3ddede40e175c"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","303151d4b30343e557d9251a01ff5131"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","1a8f8c0af787ca5cc200a68c94cc4973"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","49ebbb17220d9041fdc8683f48bffb8f"],["/404.html","3fec94eae604ac268d446abb135e99a1"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","d9f63fdecdddfa2ab1d177efe9d57367"],["/archives/2021/02/index.html","e839ddc3fce9745c70a9f214e424272b"],["/archives/2021/03/index.html","c0b50f6f1f132daf4702446442a51e46"],["/archives/2021/03/page/2/index.html","97bcc4d54e356847158075c0bc352f30"],["/archives/2021/03/page/3/index.html","232448522f6341a05b084ed62aec671e"],["/archives/2021/04/index.html","2ed0e86e6bf54f72b211eb17dd70745c"],["/archives/2021/04/page/2/index.html","ac79785edefa623bbacf43ddd27d7ddd"],["/archives/2021/05/index.html","20d29f38e283eda69ca5075087aaedb3"],["/archives/2021/index.html","0e065fb2bd5d0f8a319270c116ac24e9"],["/archives/2021/page/2/index.html","ece639e41c463af2bbd87d11eeda9c55"],["/archives/2021/page/3/index.html","2b02c43d50e98f150756c09e00133550"],["/archives/2021/page/4/index.html","af641d860b6f4628133d2858833c39b5"],["/archives/2021/page/5/index.html","95f6164906477aac7c1f31ca79aaba19"],["/archives/2021/page/6/index.html","d225482b278b76ca7416d3e0674a347e"],["/archives/2021/page/7/index.html","46f3e35296412d7c1ff05b2bf7593aca"],["/archives/2022/01/index.html","f1fdfcd717611e42fc70a752d64a06cb"],["/archives/2022/04/index.html","b2c6572dcfc650814769cd6eb68c29df"],["/archives/2022/08/index.html","cd1f1281abd0b2f2d62b696ddebc8037"],["/archives/2022/09/index.html","1a149977c312de1b9aab30cfc404f445"],["/archives/2022/09/page/2/index.html","f695accdc6951a22b4b537878e3939c9"],["/archives/2022/10/index.html","4a734b7a3b50cf4ba7628c762a956189"],["/archives/2022/11/index.html","bcc4babc0307c909e2c8affee1b94e86"],["/archives/2022/12/index.html","8e383666ff6e7a8bd45c72fb9699d288"],["/archives/2022/index.html","2ddecb95e9554ab59083dfd6e2d4cf06"],["/archives/2022/page/2/index.html","6b8ae740d16b265e0eb919c265cf9f78"],["/archives/2022/page/3/index.html","7549d8656fe07bc6938868ab4cdbabd4"],["/archives/2022/page/4/index.html","ebfdbe6286a74dd8216164561ac9e6a4"],["/archives/2022/page/5/index.html","4311c1026f8b5e5b9d8612defe9af39e"],["/archives/2023/01/index.html","cb183012f3eb5cf54e9db6b08bf6ff3d"],["/archives/2023/02/index.html","d39ddf3e114962531a28f519a56cd8ec"],["/archives/2023/03/index.html","4dbb3f039bc365833d233a80ac5f276e"],["/archives/2023/04/index.html","705bc0ce9e8d55da6d499b0d0b82285a"],["/archives/2023/index.html","c192d6011b659c79393938bb6c859ef8"],["/archives/2023/page/2/index.html","394b8ac8c477a8aee8c288f5172fd233"],["/archives/2023/page/3/index.html","d21e7c21784045e954360e08bf7f620f"],["/archives/index.html","f75c9eee2583833ea25c05aefe6e2ab0"],["/archives/page/10/index.html","0d5f7e103295b884a3f7840295908fac"],["/archives/page/11/index.html","e1347ef360904071749b685324f2d30f"],["/archives/page/12/index.html","f7818ccf6d16591279b37592c2a97203"],["/archives/page/13/index.html","1f4bed0166e1f6f76bd41118d3dda213"],["/archives/page/2/index.html","189a4181974d2c82b28b2c6a2dd2870d"],["/archives/page/3/index.html","7dd13d5663d35d2cc4e866517ceda8ed"],["/archives/page/4/index.html","4372247efee9214b859c69db96fd7ea7"],["/archives/page/5/index.html","9279e0b3aa2c1bd971d6c0a90610ffa4"],["/archives/page/6/index.html","54986dce23c13b64773cf37deb7fa95e"],["/archives/page/7/index.html","e00ffb2241b5a08ae500288c59ad57b6"],["/archives/page/8/index.html","3a53e668c7b5a0802f07ce4e875d0e68"],["/archives/page/9/index.html","7d9b544d993043de816f78fe8e203104"],["/categories/CICD/index.html","dfa045b1c2c7b9abdc649bf434ed833f"],["/categories/Java/JVM/index.html","abb9df9b35c24a1c46663ec83ee2ccdc"],["/categories/Java/index.html","daf795fea845783a15f5896a0ede2082"],["/categories/Java/学习路线/index.html","a2d632c8b72097786e6bdf9c30c4171b"],["/categories/Linux/index.html","8eb9131377b3c74d7afb0dda05574cec"],["/categories/NIO/index.html","5fcb09c9b7077f4a8bf6b67d2099fbb8"],["/categories/Netty/index.html","524d7ffffe7290e994825a765690490c"],["/categories/Spring全家桶/Spring-Security/index.html","20be8937fda7a58313faa8cd67812b7e"],["/categories/Spring全家桶/Spring/index.html","910b38d5aacd21b82d9acffe38a80308"],["/categories/Spring全家桶/SpringBoot/index.html","a26a9c905988aff5ae369c7768220504"],["/categories/Spring全家桶/SpringCloud/index.html","2a129fc6415fd2c0496f8138180299d9"],["/categories/Spring全家桶/SpringMVC/index.html","966d72266b33f6ee72dfcb21b7ac31c8"],["/categories/Spring全家桶/index.html","a17393904fad54f6a7ee3330aee98fd4"],["/categories/Spring全家桶/page/2/index.html","5b92f0d3e1dfb3b14014cbcb33b5ed54"],["/categories/index.html","14c809feadeeb4b630468e338b6709ee"],["/categories/中间件/ElasticSearch/index.html","ff2320d5c00bdb8631da8b9e6e9d647f"],["/categories/中间件/Redis/index.html","1a851d082196c1640c75b7a89515fd00"],["/categories/中间件/index.html","a53f24abe8a97adbdc6e7cf1a174932c"],["/categories/中间件/page/2/index.html","a7e9f3eed89749932c5d7356ec91b989"],["/categories/中间件/消息队列/RabbitMQ/index.html","40ce12f38388bba05bc560fac3aa9190"],["/categories/中间件/消息队列/index.html","7314d060b489dec0f97bf1f195d6bbb3"],["/categories/前端/Mock/index.html","ed04b3039c03cafbe0db0befb99eb9ef"],["/categories/前端/Promise/index.html","307dee660087c82e376390ec36c8d222"],["/categories/前端/Vue/index.html","712add19a6c5f8c3d8d7408da2b852df"],["/categories/前端/index.html","b78f9b78884475fda08a9d161767a4f5"],["/categories/前端/jQuery/index.html","7d33afb3dbef06c21be8f6ac6ab3e622"],["/categories/前端/page/2/index.html","03c604b0534292cfae0725b78925179e"],["/categories/前端/原生基础/index.html","cf58d3f2d6a5d16bec8bdddb1760c170"],["/categories/前端/异步通信/index.html","294762cdd44b18122bec05a72682b262"],["/categories/工具使用/Git/index.html","d9440ebea6654ffe54d7de02c68f934c"],["/categories/工具使用/index.html","8ae0956340af7b3d8e4ea0667f470679"],["/categories/工具使用/markdown/index.html","04d0d05b54520e4a64327d46a9ac1fb7"],["/categories/工具的使用/Docker/index.html","7fe1b06f6953e55170f92b73482d167e"],["/categories/工具的使用/Nginx/index.html","53c9e701e1b6440dd701abae8d0e4a76"],["/categories/工具的使用/Swagger/index.html","a7b5bc6d5c5fb1902295f8bfee6fc77c"],["/categories/工具的使用/index.html","c04d219fe0c0ceba38d8603482cd392a"],["/categories/工具的使用/博客搭建/index.html","1c22f699c1f25679d68e8cf477a28002"],["/categories/数据库/MongoDB/index.html","4288fce8913aeb5079a70436b8a9da8c"],["/categories/数据库/MySQL/index.html","0fed50c0f77bb45838eba44df2d392d2"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","396e5e11697cd89ec8ff83b2d922de53"],["/categories/数据库/ORM持久层框架/index.html","ecd5bfd8394abae24bcb9ea8cebef422"],["/categories/数据库/index.html","09f17dc47189ef42c34629cfa028118d"],["/categories/系统设计/index.html","db7a8533620d3ae15614004f181bd9b7"],["/categories/系统设计/page/2/index.html","9773f012d35b0d163aba85e8c58f932c"],["/categories/系统设计/分布式权限认证/index.html","d968b35f45e91e86fdae94b8ef463f66"],["/categories/系统设计/设计模式/index.html","0f5cacfed6a57fdb34840405e58d8113"],["/categories/系统设计/设计模式/page/2/index.html","d74a75aba449b1e9b7a5d46feea5f789"],["/categories/计算机基础/index.html","752c7969688a0536f8c54b7747939ddc"],["/categories/计算机基础/page/2/index.html","59679ce2b88950f5732ebb4cd63a6815"],["/categories/计算机基础/page/3/index.html","59bf616e749000b678b58a32c3baea22"],["/categories/计算机基础/page/4/index.html","09488812561cacc0298d4ef67eda53a9"],["/categories/计算机基础/page/5/index.html","5b791130448904642365b5dbbdcce30c"],["/categories/计算机基础/操作系统/index.html","8567559b7c10e6502da90fc597670e05"],["/categories/计算机基础/数据结构与算法/index.html","79298556d36cc4be863a85c7449108cc"],["/categories/计算机基础/数据结构与算法/page/2/index.html","72e5bb3ec3177663447db258a5a01f05"],["/categories/计算机基础/数据结构与算法/page/3/index.html","ddff35397e13553a6d9ba4d559a21718"],["/categories/计算机基础/数据结构与算法/page/4/index.html","5b6fa5254afea8ca67ce2e909679ac21"],["/categories/计算机基础/数据结构与算法/page/5/index.html","f56356c12047ce2e9d3b8019c3054e2b"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","1ede33320a3ca46cbaa99f3df0ff9f0b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","93918878febdeba3b2046e04a2cd89b4"],["/messageboard/index.html","c68599ded7916178f1bb100f839afe1d"],["/page/10/index.html","104207579341c8bd10761bf40334a70e"],["/page/11/index.html","4ca034141ac01be25d5aa056b3bcf2ec"],["/page/12/index.html","9aafb9a5bc29e79b982e642935dc5473"],["/page/13/index.html","c445d4fc2fca647dabb76945f39d1c87"],["/page/2/index.html","2a182dec1c38b56006e8159e822179b5"],["/page/3/index.html","7441a55ba1d8513b87868cc1db485182"],["/page/4/index.html","d79883e59c907efe6bbd50461a663fe4"],["/page/5/index.html","5ddc2052d2c9586a2c27ef4367ee1569"],["/page/6/index.html","a97843c314a16f29c97e619e2631a31f"],["/page/7/index.html","e10580688b603b046fe7c76c55dee7b2"],["/page/8/index.html","26713909959e7c88b29ae908e11f707c"],["/page/9/index.html","7e910865801bb221e19d4282635b0828"],["/sw-register.js","85da5d544edfcd8be070453c8592c1d0"],["/tags/Ajax/index.html","1abf94cb4783211b9e44d9f8788482d7"],["/tags/Axios/index.html","7c343ec21e5fafcf079f93635f8df920"],["/tags/CICD/index.html","7e5a4c646ce58f41829e53a86134e373"],["/tags/Docker/index.html","62cae70c2449f4c08dd65c20562862ed"],["/tags/ELK/index.html","6f59f9782b3d2acc9f1cdd2798eba0c8"],["/tags/ElasticSearch/index.html","a56a58e36530a6b6fb87b666b0bf6fea"],["/tags/Git/index.html","2e5629f150223b96f2b8b94a7eae740d"],["/tags/H5/index.html","d9193e1b336956b417206feaa5255b0f"],["/tags/JVM/index.html","697b982bc02bd9dd8d54f766a9ce6611"],["/tags/JVM内存模型/index.html","4c781346af00e5eefc3e324759af62c1"],["/tags/JVM执行引擎/index.html","6ccf489d3c62a5746782c98b57bea95b"],["/tags/JavaScript/index.html","ca4c5b9108987377331d9e576b672604"],["/tags/Kibana/index.html","a57c097809aa5013c88463f16b394d53"],["/tags/LeetCode/index.html","0994d09d9bb6267f42fd2794cc9c0533"],["/tags/LeetCode/page/2/index.html","08ae72ce1d86f9efcca70371be85d0fa"],["/tags/LeetCode/page/3/index.html","3a37bd8728aa1a0ccc6eb8ebe49d74d5"],["/tags/Linux/index.html","0a46c6c61e10bc41f942a01476a2c735"],["/tags/Logstash/index.html","9304017737e29fbe9d61a19c6bcefe01"],["/tags/Mock/index.html","f6321d2e4265011d3b70833817467aac"],["/tags/MongoDB/index.html","0da1e72f8428ab3f545e22707d5a8c87"],["/tags/MySQL-数据类型/index.html","48f8b765ba845ce6e77926d736bfaa34"],["/tags/MySQL/index.html","868bd28acce335b3021fcb52485f3b4a"],["/tags/Mybatis/index.html","24734885362bacbd970193a7a6280c37"],["/tags/MybatisPlus/index.html","bb376fca3adf577562e7a7872e3631be"],["/tags/NIO/index.html","2fd1b6cc523b0456102f2132c7f42eaf"],["/tags/Netty/index.html","f0e88803e7d6aca44649ac9911217467"],["/tags/Nginx/index.html","b13ecdb1aed91f9c3347fa76d97f860b"],["/tags/Promise/index.html","379076a8e16d9b5b598f6a5e0b0a8a37"],["/tags/RabbitMQ/index.html","da2f1587e304feeb097e530ca8729513"],["/tags/Redis/index.html","c44a37f7557c331835e4f58c40509ee2"],["/tags/SSM/index.html","5d867a4e9efc7626b17d426e94421dc9"],["/tags/Spring-Security/index.html","197f073f22f5377d29cc2167ab9d1c40"],["/tags/Spring/index.html","401a9c0dedd3d8473475cbb5b7de4bd1"],["/tags/SpringBoot/index.html","d2254f5a47d62cbc92c58cd0263c7fea"],["/tags/SpringCloud/index.html","83199f7db142bfe4cd15c202dbc0bf03"],["/tags/SpringMVC/index.html","a3b453da2af837f573e28f5b5999ca88"],["/tags/Swagger/index.html","af14360c95cf7eb659690c898b8f138c"],["/tags/hexo/index.html","8b3869ef8ba0724035907b82a4ddbf96"],["/tags/index.html","393b83c328551f8f0bccda7129124b7c"],["/tags/jQuery/index.html","e2bdf16bf9f154468e5dc9711aa344d0"],["/tags/java/index.html","97f851d6dc171a22caeb0ac408ada04d"],["/tags/markdown/index.html","9dcda514d6e506d7c5dd73454cf03e8f"],["/tags/noSQL/index.html","3316fc7c2af10a28871b5b5f1ecd3af1"],["/tags/typora/index.html","186e3fe89ae9fb6e9c2a06708b696852"],["/tags/vue/index.html","fa13a90bb092e44bffd04898b3e77dae"],["/tags/享元模式/index.html","ddc3ece2443b47d3c633a5278819b401"],["/tags/代理模式/index.html","6fe959d2df851ed0c477ee9e70af5669"],["/tags/内存管理/index.html","fd32d983d5e533a6e3e17c67f24fb00b"],["/tags/分布式/index.html","b0af92cf6e463d5c3c08c3718c9e2545"],["/tags/分布式系统/index.html","03d39e4352d6f5f468c1d06134208fdf"],["/tags/前端/index.html","633b0cf61c77cda30f9fe3e5c4c3c905"],["/tags/前端/page/2/index.html","d833e63011b7f10312d862a396967f3d"],["/tags/博客/index.html","b2ed48c035125e4bd3ef3706b928eed4"],["/tags/后端/index.html","0f6f8b701d36162ffde40edb4df47ee3"],["/tags/外观模式/index.html","23412d3c2af19c2ae9b08498dfba98c9"],["/tags/容器技术/index.html","0d4fddd0088ebbc4533f5c05e944e007"],["/tags/工厂方法/index.html","60b5c6de75cb993e3fe0311183333d8d"],["/tags/微服务/index.html","f1116c568206073f262c0cce538786c0"],["/tags/抽象工厂/index.html","197c21015092daa2143f752ff2016294"],["/tags/持续集成持续部署/index.html","d31ce0b6bc7c50ae9a47c92909ccefe3"],["/tags/搜索引擎/index.html","89a3d9f79f156230124502128c1bbf5a"],["/tags/操作系统/index.html","3e67800127a1e6731973faf6b14873a3"],["/tags/数据库/index.html","9f4989427505ff57f58472d8363785bc"],["/tags/数据结构与算法/index.html","2067be6ccdfdc29419081bf5ac3cc879"],["/tags/数据结构与算法/page/2/index.html","2b00ee6b3ffcf3fd3d0b88bc8ff97d7c"],["/tags/日志/index.html","243acbd711798fd577a127b11b8ddc22"],["/tags/服务器/index.html","93be0e37397ae892c267dbb4177e27ec"],["/tags/权限认证/index.html","7c7e61cdd4425fe1414a58b71b40a101"],["/tags/桥接模式/index.html","229ec9a0c0e71a55f7d1998d48d84ee0"],["/tags/模板方法模式/index.html","2bc9d53a8900523fbda12e5cf9015d48"],["/tags/消息队列/index.html","0b9c3164a677fabf5674515d1278e3d0"],["/tags/版本控制/index.html","5d1e93a8293a62201494c780aea23abb"],["/tags/策略模式/index.html","a4206edd0ccdb8db426fa64ba46e8c20"],["/tags/简单工厂/index.html","a6e955c047fa1ff62f166d2fe0667933"],["/tags/算法/index.html","c4217132f31ec22e67b06e172e91f11b"],["/tags/组件化/index.html","d521e6b6bb54a7f866a1663e225c574e"],["/tags/缓存/index.html","7d654c25e1a2663fcd2962e81a701c73"],["/tags/观察者模式/index.html","1800ef35ae43c0df842bd2b9d95073e1"],["/tags/设计模式/index.html","d048c6b4cf21c933b0a4da5245f55f59"],["/tags/设计模式/page/2/index.html","0f3f16af8b7c6dfe94ed228552b4a41e"],["/tags/进程管理/index.html","0ac12a0196645f002657014de917bb89"],["/tags/适配器模式/index.html","2061b9a2888efae0edbd584f425f3dd8"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
