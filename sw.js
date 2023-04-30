/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","ad984fb9c820a240b67d6b07232a25c6"],["/2021/02/22/工具的使用/博客的搭建/index.html","1282f0a3dcccefda6b45bd44025f7dde"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","1f9d7ea06886d9cfb56b7aa68d4e1be0"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","c2fc36e6a5cecb1b692bfb610479ef03"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","1934e4f7fcd070df125150fb63aa5eaa"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","012de3b71a3c4fd1a8ecac53e1723e5d"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","718f917b9d50b95b4bef12f29f4b7f2c"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","f1a35467e3cbb3981ac9d6c9cdb6a564"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","a2a9ba750782d07907038ae43837d275"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","192d9b7196884fe6d6d7264aa735a553"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","78b2f16b1045ab9a56b5453d48ca6916"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","60031a3b0f81f461834764229b72b85d"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","f596e20f6b5c8dfd2e941cec81b31d37"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","8d5121695ee99d57abb611a69d0ee2cd"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","42394ec4f2b397b6ae3fb4f6365fdc9e"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","25588872885ef93ed9d384cb7dfb77aa"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","0c9fec110f2907bfbf31d390e031d36d"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","c4a68fbdda41b26ecf6778bb9759fa28"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","f2456470c0b950e5946237ad8997431b"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","d6e451795662a7a2358e0914faa3f152"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","3495237b29fd120c44e69e40db754d31"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","482ad2e28709e3ffc4cb42a0992a26ed"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","172662330b97a303cc6745861c3e906f"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","b5775e4eb5c4555dd3f8917a978bfe44"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","05383e0231d1574e82eff9066b36ef94"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","0a8f04fdd66db7ce0829ca0df9a55ce6"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","e2ecffeadd634cfe6c9476b7a23846dd"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","357d045194822e0c80d37f53df371c52"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","2454c9830ec57b41cee721806e6537bb"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","da8bcb7f4f19a857caece6aabd229560"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","4f1d45054838d89cec6b50ca95a8c567"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","c1977c6ddd73dea224a1f1223792ec06"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","8c6b346903ec760482ce131806f522cd"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","0eb5d0b2b6e84e53a0b6bc67ae396e76"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","c68c5e7ad97387900f952a26243435ee"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","d8f4f16358b0faeee9d9e2b845aeafdc"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","0a6fc7655586a7effb52c794fdf21443"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","d0dbf6324061872f2c95e943e8502090"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","6f68deffa7187059abc681ef7a16ec70"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","777e04177b04af3ee47a0f005196dce2"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","9e70c81abfd7cf1567796e4760304bee"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","1e43f26dadde2aeb352e774aa6d7bdf4"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","d10af849792df83bf36d0a14742996fe"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","ced362be05b501b79b10c437b510c7f2"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","068b92c367fe02c8dfb4dc002f5ed3d9"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","393ff71007822e0c5b04b9d9387e46f9"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","6fdca1ca87f40f19c1d2b1d72e048448"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","7583efa99c910d3f1ef816e1d031cf9d"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","ad2306d14167d8c0c03316467100ff6c"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","83d17ea99a3ce2ea1efc1be77af7fa51"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","1064ecd53acf84846fbcff30c668ef9f"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","00f21736e8ab7ee0cce227bacedc2440"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","e1eaa90fb8db8956be5bd4d8bdda3d9d"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","97c3429a0c83ae4d21aacd745e0cefcb"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","37bb4d5a71114dafc1e84e00331bea53"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","8a5cbd678e0ea2f38cb4a0ceb00346d9"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","ec67d3e1d62060003db86fb34d2037d9"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","2b70f54275a7929ec8ade9f9919f1750"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","7b2aca03647aa5f31a201557505d645b"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","e48a4c26b8666bdc2d6476009118cd1a"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","0bbd2b923f4a7cd40c32524b15c9c07d"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","e914112169451ed0a1d51835a6b2a5c4"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","3cc290ff14e7a2cf1e7cf25c32a89fed"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","fa2d6933e302a5771725536eaebefcbb"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","3a6c2d4414dc1fa3b1f761d83a958628"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","86c0b5cf46e0c666d990cb77b19e79ce"],["/2022/08/17/前端/jQuery/index.html","c6656247ab8d269910461646df26645e"],["/2022/08/19/前端/JavaScript/index.html","e2a6a0a4ee4732d69b2dd6f6545bab53"],["/2022/08/22/前端/Ajax/index.html","47a2f5b91a786a7844a5374b30ce79bc"],["/2022/08/23/前端/Promise/index.html","a60a84b6c516f66e8d61297c91493498"],["/2022/08/24/前端/Axios/index.html","bfa99fa75f8dee3397052ef3d772fb71"],["/2022/08/25/前端/H5本地存储/index.html","b0e0f91d65a3540fdc88e0b62235bcc7"],["/2022/08/26/前端/mock/index.html","96453947ad7e7e99f1706ba90340489d"],["/2022/08/31/前端/vue/VueJs/index.html","05ecf7760e4cec54dbc98beaa6ea4271"],["/2022/09/01/前端/vue/vue组件化/index.html","b2583971d82d0f71f16684b47c736719"],["/2022/09/04/前端/vue/VueCLI/index.html","38524e62c0d1c8babb3d3d867f3a6118"],["/2022/09/07/前端/vue/vue实现动画/index.html","8d84c1e339347279bb7f95d8b2967f54"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","4ec2a993ee92bf320b0e9ce18b427bda"],["/2022/09/10/前端/vue/Vue异步请求/index.html","7a4503be6b58e610ee3cc4f2dbda8a33"],["/2022/09/11/前端/vue/vue-Router/index.html","ceaea1f7eed8e37da9e64934ed9c89cb"],["/2022/09/13/前端/vue/Vuex/index.html","91fa7432a1f7e4d2e4065c716cf07b54"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","7f6c432dec8b7843daf19857394202ab"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","a558f0a6f4eac1be399e6e7eee67534a"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","119d00665fa5f7d4167b6fcc1a2beadf"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","2ba0ff185ad1cbb186433e3efdf91775"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","06e417167a011148539a886f5703dc2d"],["/2022/09/28/DevOps/Linux/Linux/index.html","10d288578cf810c7e0e445e9bb18d662"],["/2022/10/02/中间件/Redis/redis基础/index.html","3a4bc353ad71374309d564acf8335ce6"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","a0168eeac4aabc1c78c64d97fff15ff7"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","3309867e9711b7b2059f3cb7a6aca4d2"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","1597ec8cf6182fc429f022399e032e18"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","2e0b000fd6fa016f48f2b60d66a67c6c"],["/2022/10/17/中间件/Redis/Redis集群/index.html","cac97f69692d3cdfc72afab0bdc552d6"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","4ad33deb292f035018553d8c6fe4d1ef"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","b2383a57b367f4c22e2a3077ff7a7b45"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","09a76423f79d3629486a4290f302ee79"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","158e34ef7c1d61ca5199e6ecfc92f8e9"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","5ff57c42d05da197c014fcfb09935a33"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","faa6834f9edc0400580530b7a65c84fb"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","9318966ba351c4eeb925ccb11995fb0b"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","fb4d7cff1dbc35bbff0d297505f2d30b"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","514ecdf1b26cb5a32f4d317ec8e6f685"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","2326238a210cfc6d0965ff1a1d36cb07"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","1055036b187c952646036a4d542e3e24"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","7801a235166da5003457f660fc37cbf0"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","7be3b3f926bbbe50fd71d7f0bef8a641"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","0a0791b2d4a1fa74494063beba4075c2"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","8d43f0ffefc7cc023f670029aaa7407e"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","b35b6e37fd5b677cd2e8008fc0a3f95f"],["/2023/03/10/DevOps/CICD/CICD/index.html","c237544079d9d1d38eacdc9652976923"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","d805c8219b92d2bb9cd1f647114a718e"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","81dfe4a694fb53409dc833f7692dcbd3"],["/2023/03/13/Java/NIO/NIO/index.html","ddce5ad9401fe03c3846e713ede2e821"],["/2023/03/14/Java/NIO/Netty/index.html","91f84f0ca6638f144daad2e6d00ff4b5"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","0c2dbbda6bb50da8df0d20a7d9bf62a1"],["/2023/03/17/系统设计/分布式系统认证/index.html","18b05b7b5722516a9a80415331a99660"],["/2023/03/19/Java/JVM/JVM概述/index.html","077ef3a60c004bdb845d9bb0b3a4116e"],["/2023/03/23/Java/JVM/类的加载过程/index.html","3bcc05d104b12da6577e439618a3bb29"],["/2023/03/28/Java/JVM/对象的实例化/index.html","cd4053d01fdc2149f69e29b72a4f15b4"],["/2023/04/01/Java/JVM/运行时数据区/index.html","2f85c37c15ba1ea5e235c493149a2a1d"],["/2023/04/04/Java/JVM/执行引擎/index.html","10bf5cfb431f5f3784ab89c491bc70cc"],["/2023/04/06/Java/JVM/对象引用/index.html","b620d103e95072b0247a500def3e6730"],["/2023/04/09/Java/JVM/垃圾回收/index.html","e19de4f289d7b14f3e2bd8420bb87e94"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","4a88bdd1c3e982b25ea019fdecb00584"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","655e6cefc68b52e4bdaa1be211b77c4e"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","93c97aff6f0c34622a4bd47373edd425"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","cd1eeaa7c7fa98027ef0516c3a792685"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","1bc969301ebeebf51fee10566afe44e0"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","be232f3e2706c01d7fff2945b51fa9c7"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","aed602ff1bbef25159723a70f93e5006"],["/2023/04/30/内存管理-三/index.html","e3b045ecfa9408c36e882e3eae5ba5ac"],["/404.html","88ba2d4f3fae92b81fd727ac906870e0"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","638c541a7a1066a686c724ce8f6f0d9e"],["/archives/2021/02/index.html","c2bc6452ea1bb1f431206981da482e35"],["/archives/2021/03/index.html","37db346d5988a58708cc1ec34568e347"],["/archives/2021/03/page/2/index.html","76d208e08212e08c7b05974d62253f4a"],["/archives/2021/03/page/3/index.html","646f91eeaadcfd0bab98fce6ad787126"],["/archives/2021/04/index.html","7e72814e1a9e92ecd878f5fa55234705"],["/archives/2021/04/page/2/index.html","e52c93275e1c654a7be3508c53d2f53b"],["/archives/2021/05/index.html","d4e36749c2a4c7496ba5cf362bcd74a3"],["/archives/2021/index.html","938219cc67b7d9001e5503e30d12e85b"],["/archives/2021/page/2/index.html","f797cf7bf9ea2cef3e9264b9dbfaa700"],["/archives/2021/page/3/index.html","d47724b8d0a1739dccd6b0d77d47495d"],["/archives/2021/page/4/index.html","cc3ca9f7ddab7bc91a6b9d733966810d"],["/archives/2021/page/5/index.html","8a0ccd897585719af6036b94a9984956"],["/archives/2021/page/6/index.html","52f396920e0fe4985d5dd5635095ca6b"],["/archives/2021/page/7/index.html","d8d47f0eeccbb67b02d0f370a91ec392"],["/archives/2022/01/index.html","538d174882bf22dae1e9bbf454ac4860"],["/archives/2022/04/index.html","c7ec81249333f480155d3cf326636ad2"],["/archives/2022/08/index.html","227bb50a8f1e0c8e489f6b68a6178131"],["/archives/2022/09/index.html","e0b40ec945b8f0a5a59c51eea46b7af2"],["/archives/2022/09/page/2/index.html","603d2639104dd466ca61657cd0760c38"],["/archives/2022/10/index.html","ffb31b4cff6f9f918f9ef6fe39d6eafb"],["/archives/2022/11/index.html","add389895e589287605af986027ba790"],["/archives/2022/12/index.html","be20c03a98281414969fabc2b91e58e9"],["/archives/2022/index.html","7f8e7988611348941ce7c72090ed37ec"],["/archives/2022/page/2/index.html","d814355c3034db1dce780ca3b654e598"],["/archives/2022/page/3/index.html","b01faac910120ba9a6c4e4af16737935"],["/archives/2022/page/4/index.html","65860c296f8be774b4dba04e572bc0b2"],["/archives/2022/page/5/index.html","304676ce44cc9a6c9aec0f5f85f51e6e"],["/archives/2023/01/index.html","02963b2500b0fc01f16a007e77e2763d"],["/archives/2023/02/index.html","ab7fc309b585b52489d904b40ab64c80"],["/archives/2023/03/index.html","f843389c8b247e727405a148c337aef9"],["/archives/2023/04/index.html","fe78f6b9669476ed1d1a6f805110cddb"],["/archives/2023/04/page/2/index.html","ad4469969148fc21c0780453f74eb597"],["/archives/2023/index.html","bf72c60341729c9502bdb01209ca0e24"],["/archives/2023/page/2/index.html","c9b1a28b52fd2d31512d329710066662"],["/archives/2023/page/3/index.html","80c971b763b1df14451e32c972becbed"],["/archives/index.html","377786b4b6d320515297bcec2e04e079"],["/archives/page/10/index.html","27a0a8f70b4d107fb833c9dfc7218f1d"],["/archives/page/11/index.html","b20c9258271b3305322ee0c2152b6d82"],["/archives/page/12/index.html","cfa65311e057826ed8d1a7dae23eb05e"],["/archives/page/13/index.html","f51b0fd55ddc5069f5a666f68c6926cd"],["/archives/page/14/index.html","c07d7b714690c914fe213061ba2dc652"],["/archives/page/2/index.html","006811bb0e6cbd473df92b2b8b1842ff"],["/archives/page/3/index.html","59934723689c249f792cb9ceb2c34af1"],["/archives/page/4/index.html","ca2945695650b7d60b49a6fb0c2aa755"],["/archives/page/5/index.html","49e6e2f5d72aa60cd178b225764dd9de"],["/archives/page/6/index.html","4dee7270486ca076828e49f43577a83a"],["/archives/page/7/index.html","6443e46045b2435abe4487bd82188633"],["/archives/page/8/index.html","1c2bf71e789256beb4b32a57e0aad7d2"],["/archives/page/9/index.html","a28bb248a6bc6bb4c19ae6a32c32a70c"],["/categories/Devops/CICD/index.html","99d634b01b6b35bf7aab0987f0bf22fd"],["/categories/Devops/Linux/index.html","1ec5cd6be382b1afab2475bb7ca16a57"],["/categories/Devops/index.html","c8c590069058f2bee647b7b232eb1f29"],["/categories/Java/JVM/index.html","6e1b82bd26aeb3390bed8ad415df80be"],["/categories/Java/NIO/Netty/index.html","a829e30adaa85832c1021d36605e4a15"],["/categories/Java/NIO/index.html","a5e4ef754dbbef8451e3252ca8d8ee17"],["/categories/Java/NIO/原生NIO/index.html","130a579b0160951866363ccf94c464d3"],["/categories/Java/index.html","a2eadfbb26458b085e540405a363d5ad"],["/categories/Java/page/2/index.html","20c064a53febaaa4cf36a82cc779d472"],["/categories/Java/学习路线/index.html","e7a5494227063d3fb053285926cb4f61"],["/categories/Spring全家桶/Spring-Security/index.html","c48b0a927ac045a3ca1cf65d7e4ca512"],["/categories/Spring全家桶/Spring/index.html","0c3f59a85190d3f069527a9711cf178d"],["/categories/Spring全家桶/SpringBoot/index.html","9d67ad4ce2897a09d1eb67f04f8b275d"],["/categories/Spring全家桶/SpringCloud/index.html","fbc9eabc71fac310f11b33239eede518"],["/categories/Spring全家桶/SpringMVC/index.html","b31cec1021f56a74bcb09a4916a188d2"],["/categories/Spring全家桶/index.html","35990280f80bdb67b0c83914039b7e6c"],["/categories/Spring全家桶/page/2/index.html","7cd98799b310778814e943ba4b378b1e"],["/categories/index.html","89cd9f5598f119c80928ab56f3d5fc83"],["/categories/中间件/ElasticSearch/index.html","ad98456e081b61f1e84e0fa4544da6b7"],["/categories/中间件/Redis/index.html","772707a4a383dfec6d13977c304c33fa"],["/categories/中间件/index.html","5d5dde6e21f625f19af0440ed5e57e05"],["/categories/中间件/page/2/index.html","f0dbea4d67cf689a04dea687f1dbc2ae"],["/categories/中间件/消息队列/RabbitMQ/index.html","ee93cc4708b5d7035dbd8b9394738374"],["/categories/中间件/消息队列/index.html","1c09169d37060a517ebc8df55c55b81c"],["/categories/前端/Mock/index.html","d3d51d70c7eee868c90b2d95a3ffce7f"],["/categories/前端/Promise/index.html","c4a74ba78e5cca26bdeb4c50db574048"],["/categories/前端/Vue/index.html","19bb698fb01c2b5f2d0f3e2d00854c28"],["/categories/前端/index.html","10ebcdfd7ab1951ef8ec4bd7fd762980"],["/categories/前端/jQuery/index.html","533212e16901af9e4eb319f161bf5010"],["/categories/前端/page/2/index.html","d802500991420c20425fd91be7f977a3"],["/categories/前端/原生基础/index.html","9fa24b28d6da2d20c77adf94dd69666f"],["/categories/前端/异步通信/index.html","e222225a15e9a2733134ebf64bf90557"],["/categories/工具使用/Git/index.html","9dc4b6813668bf77c658ad28a5231f9a"],["/categories/工具使用/index.html","13092092e4e120b3fdc4c61b435c01f1"],["/categories/工具使用/markdown/index.html","84bd0662ac412693267bb71969f9b714"],["/categories/工具的使用/Docker/index.html","1732203104b74911fac09015ea13962c"],["/categories/工具的使用/Nginx/index.html","d179dc66eb1edf037757adc8255559c0"],["/categories/工具的使用/Swagger/index.html","edbf5a9062b5eff59c3a429b1dd97c57"],["/categories/工具的使用/index.html","83f047f04c1e26b52aa697372ebf27ef"],["/categories/工具的使用/博客搭建/index.html","9b300d5c84b096b2ac830078ada3ebf1"],["/categories/数据库/MongoDB/index.html","00ceca4b8ea751fd482c4a961c0350e3"],["/categories/数据库/MySQL/index.html","29d8497a2dffc1c87a48fd6ec813584f"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","ec202fbcf75015269d56a4886af42661"],["/categories/数据库/ORM持久层框架/index.html","cf18abc9f57a8da6b0dff6d9ea099bc3"],["/categories/数据库/index.html","12134e60864f9cd686e484f292d25d9a"],["/categories/系统设计/index.html","7ebcd77400512feae0e1c50cea9a85e0"],["/categories/系统设计/page/2/index.html","de614951f658952a21f6e5d9d5b17ff1"],["/categories/系统设计/分布式权限认证/index.html","c4c666567d5001d1834da7ec8ce0294f"],["/categories/系统设计/设计模式/index.html","cb776cabe0fa3d1753170fffd73b845c"],["/categories/系统设计/设计模式/page/2/index.html","9ccfe3565fda162e2fc5a727f3ebc684"],["/categories/计算机基础/index.html","7d08697cd93b800a631c591aa65dd618"],["/categories/计算机基础/page/2/index.html","74f673aecc5440e44fd3022988561664"],["/categories/计算机基础/page/3/index.html","65c1fcf6222a9dc2da326d109a99e2bf"],["/categories/计算机基础/page/4/index.html","64f7d117ec1e1a3be787b40a40ba8f30"],["/categories/计算机基础/page/5/index.html","db590b9c735fb4dee1726fb62370c3c2"],["/categories/计算机基础/操作系统/index.html","91863ad8829b055fc20f7e84621b3c2e"],["/categories/计算机基础/数据结构与算法/index.html","c4e107154ca820b1bf79fca22fa4cfdf"],["/categories/计算机基础/数据结构与算法/page/2/index.html","c61f5a3fc410f4d7adb63643e5afd3a4"],["/categories/计算机基础/数据结构与算法/page/3/index.html","55a8168f128fe608e71380c3415ca524"],["/categories/计算机基础/数据结构与算法/page/4/index.html","f039918c5fb535184e563ebf66685759"],["/categories/计算机基础/数据结构与算法/page/5/index.html","bfdf2db96408cd82df091116dd48806d"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","881ec79c77ee7063a9c568e6ec896681"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","caef971c378f266d6f86e968a7d958e8"],["/messageboard/index.html","508b66189a5949fa5658936344b64c24"],["/page/10/index.html","7b7e5cf67152ae672ec53f13d77b1f04"],["/page/11/index.html","1b50133a77d062bacd552068dd18c64a"],["/page/12/index.html","9332bdd2671454257dff3278329294f8"],["/page/13/index.html","a9f60d77495a154b64c4e6afdbb9686e"],["/page/14/index.html","3582bc24821358089feb0ad09ac7975c"],["/page/2/index.html","177e2c420857d9026f25fe112a5e400e"],["/page/3/index.html","0504f27a7287add938ca26d9651b2c23"],["/page/4/index.html","d189589f7bf80bd2d0b479a1da8499ac"],["/page/5/index.html","d9e95b32552e3b4314666c40a67f71c1"],["/page/6/index.html","fa863bc9129054515e296cbdb52b0301"],["/page/7/index.html","bc0b3d7045ab9065038c26a9777846e7"],["/page/8/index.html","6de3032366a39245622bb6e7c094216d"],["/page/9/index.html","25cf4c36ac7f3d080f58fa0a3f864dd5"],["/sw-register.js","1b2c0a2a4cb1690727d9604bdecbc2e5"],["/tags/Ajax/index.html","a07a1f541e2e8853f412f1b0906e8a27"],["/tags/Axios/index.html","52fa0ab4d8bc72a994e3cc6fa274443c"],["/tags/CICD/index.html","2fd4d22934c06bab390f0129dcfef8fe"],["/tags/Docker/index.html","dd888522ff07d755bac38045fb5887b3"],["/tags/ELK/index.html","aff50aba8fe43ece915174e5a1a30930"],["/tags/ElasticSearch/index.html","54dc52ed7d3df397e94137374050a492"],["/tags/Git/index.html","c7a568ce6e39eefb4939e98e492c1896"],["/tags/H5/index.html","dc047ab25501b5c615b4e87a41d25369"],["/tags/JVM/index.html","ae2fdeb93781f95d49f8d3c0c3a230c7"],["/tags/JVM内存模型/index.html","c6cbd4a596fd01a23e8dab2a4e68311d"],["/tags/JVM执行引擎/index.html","0deb8ffa23a9e8ea1aa42e08f7433525"],["/tags/JavaScript/index.html","45d6ad7d0ebe3d8db55fcb4c3d99a202"],["/tags/Kibana/index.html","b366bfbbf7a4f8f2214104567d156202"],["/tags/LeetCode/index.html","af113a15785eb7178ee62797b8c566e2"],["/tags/LeetCode/page/2/index.html","9d2e34cb266a0763e5f4afa8732f3846"],["/tags/LeetCode/page/3/index.html","08d368c0024134cab3d64630165b9a9a"],["/tags/Linux/index.html","6ad331ced01a6a87e6ce1f4c9439b1a5"],["/tags/Logstash/index.html","ae000346e42fae504c5150bfad58f455"],["/tags/Mock/index.html","0b7b127b70b2634b9e0151ab8424585c"],["/tags/MongoDB/index.html","9073da70431d2e5333ded09f95162a1a"],["/tags/MySQL-数据类型/index.html","e5e0e41b83ce3a79e487c72080791bdf"],["/tags/MySQL/index.html","5b0bd4188c29ec6dcaa0e51966094e63"],["/tags/Mybatis/index.html","7d6c2e29c82d502a72912d9c4a979038"],["/tags/MybatisPlus/index.html","405d7b3fddd29b6c69fca306f457b37d"],["/tags/NIO/index.html","4e5bab325014b738ad8a5bd2accb1031"],["/tags/Netty/index.html","facfa16a741e87080f940449e596b662"],["/tags/Nginx/index.html","7bd6bbb1a7831d91a9809ace3a918fca"],["/tags/Promise/index.html","d33ed0428ad955513042f22b2254cd6a"],["/tags/RabbitMQ/index.html","a17bebef6b4ff8cebcc6d813a4e919ab"],["/tags/Redis/index.html","ca6dc75fe74ea6569166e9d008b2110d"],["/tags/SSM/index.html","9d03359321b82ae4deaa6a631f70970e"],["/tags/Spring-Security/index.html","f1ca31c3a27b11d7a270c9af3db61147"],["/tags/Spring/index.html","14c800e3e79db871e28d61d8264c598b"],["/tags/SpringBoot/index.html","754e46b62f777ac69426860118d0967b"],["/tags/SpringCloud/index.html","3eb4e6807ee03138439ef00026a0e121"],["/tags/SpringMVC/index.html","091515f238ed1bfab1e7f0d3b8a902eb"],["/tags/Swagger/index.html","c86a4e095fd577677f7234826c56be45"],["/tags/hexo/index.html","10283d98b5cd6ec2e843cba24019fdfb"],["/tags/index.html","6b160114c479d0c97df483e0545f4857"],["/tags/jQuery/index.html","77fec8a54d3fccb6fa20dd55fa1f2f51"],["/tags/java/index.html","52d28345018a1afd6367db635cb29e3c"],["/tags/markdown/index.html","3c3265652a261490aa88e2b404caead7"],["/tags/noSQL/index.html","2a6454ad353824c1b6734c938b1ec990"],["/tags/typora/index.html","ca6118e787d426bce758f2c1d5d61470"],["/tags/vue/index.html","97a2a0642a77fba895fb3bd78dea00ff"],["/tags/享元模式/index.html","dec04153cfa0855f1324a92c140be86d"],["/tags/代理模式/index.html","636a6f3309ab291690283ba211c0857c"],["/tags/内存管理/index.html","86814bb4bfb6396e84c7841f8b08208b"],["/tags/分布式/index.html","87f683701e104157f966ae6b2941f4eb"],["/tags/分布式系统/index.html","965bc75a45d4a5c4674019a7f2dec74b"],["/tags/前端/index.html","f443333bf0cc74556cfa80d67473a57a"],["/tags/前端/page/2/index.html","72d4a09617b9060ca768904173071c63"],["/tags/博客/index.html","07472639c4c62854803826562f65d31a"],["/tags/后端/index.html","e3d8daa2f83bc44a3c4af2672144796e"],["/tags/外观模式/index.html","b728a305bd828310af1e37a9340f126b"],["/tags/容器技术/index.html","62487b5b269a5ec96088fdf9bc348b23"],["/tags/工厂方法/index.html","ff617ad27423bcf3c993b346c739938c"],["/tags/微服务/index.html","d9fee740ab3e473a48d5e2b93f293653"],["/tags/抽象工厂/index.html","511d5b82fae65d4b40cd280333b63f94"],["/tags/持续集成持续部署/index.html","85450f2522c6f7ef0a98744547326737"],["/tags/搜索引擎/index.html","e45ee32f1a2d1fd93fab8f2ed9d87551"],["/tags/操作系统/index.html","e8902537cca0e335c3122b7c9501aa8b"],["/tags/数据库/index.html","9ce168ab0221e15c780fde0a67f2776e"],["/tags/数据结构与算法/index.html","8423a13356e5dec131eb7b8d0e5669c5"],["/tags/数据结构与算法/page/2/index.html","408b006463fa52bdb2e0e112ae24a27d"],["/tags/日志/index.html","6420900c8850d5a5c8967053a4b18424"],["/tags/服务器/index.html","02b27762aacfdc1f159346088e79b55b"],["/tags/权限认证/index.html","4aed506c258c0dedb29c0e5a4bfb50f0"],["/tags/桥接模式/index.html","bfe50c46141a9d12adc8b7998bfe9f1b"],["/tags/模板方法模式/index.html","c4ea138976ddc1521836986d2f19a6a0"],["/tags/消息队列/index.html","b07074a88510fec5e9dd2a929072f027"],["/tags/版本控制/index.html","29d0d6ac780d0de9565287e93a66b772"],["/tags/策略模式/index.html","b273a457fee8c930378bd383e0ba4b66"],["/tags/简单工厂/index.html","461e072a89cf625e41a0b256d0258eba"],["/tags/算法/index.html","aee051563cf9ae7282fddd5552929ff5"],["/tags/组件化/index.html","b4d67369912d596a8e8a11c99237baf9"],["/tags/缓存/index.html","7cb2ddadb8da2cf2b51eb68356cd9569"],["/tags/观察者模式/index.html","b573a3d51e557fff2d6ef418b649464c"],["/tags/设计模式/index.html","2be31b88dd4f627903445b1fdbc916bb"],["/tags/设计模式/page/2/index.html","596672d49ae6d86eee1ee8041021e3f0"],["/tags/进程管理/index.html","8987ba6c58e7531ebfd76e819daa71b4"],["/tags/适配器模式/index.html","f5bcbcbd26498125997e41793d019e9a"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
