/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","3bbd73bd4cb57295659d0d1109fd7a65"],["/2021/02/22/博客的搭建/index.html","87a0847c5fd8593c1b32c64f37d4e373"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","3428d61f2cb5d33a64f4f48930923763"],["/2021/02/24/mysql命令大全/index.html","8c628f980786c358d855ccb67456ba56"],["/2021/02/24/mysql数据类型/index.html","5efb3eab1290b9b2dc418c8f415c3d88"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","14d9de8f400a0627e9d89c5ea9032576"],["/2021/02/27/简单工厂模式/index.html","00e2f4f4f06e1e16cdfc50b287e8ddab"],["/2021/03/01/工厂方法模式/index.html","090e0127f6b23744e6cc3e2dc36eda19"],["/2021/03/02/抽象工厂模式/index.html","03a8022d1d489befe55172ffa7fad440"],["/2021/03/03/单例模式/index.html","437014d34865605709260fe183e3c655"],["/2021/03/04/观察者模式/index.html","2ec8c5151a97c833cca24edfb15df7e4"],["/2021/03/05/适配器模式/index.html","62702e823ba54a6a485addaf4c743d9e"],["/2021/03/06/模板方法模式/index.html","c9c390bf92874457382af94356b1fb66"],["/2021/03/09/代理模式/index.html","79dd832c9c73609a4cf6466b50f3957a"],["/2021/03/11/享元模式/index.html","255c5beef11ab92be843c025b842bff9"],["/2021/03/12/外观模式/index.html","caa50d14f1c0b82c42290d19eb185000"],["/2021/03/13/策略模式/index.html","7450ae269d288170df2de426e87ba73a"],["/2021/03/14/桥接/index.html","325d1b3e24dbdfe515148b7116c8d825"],["/2021/03/15/LeetCode-多数元素/index.html","2291cebfcc1c6de291d0099c83fb3169"],["/2021/03/16/LeetCode之汉明距离/index.html","ae3ee7e554f8578b193b536e96f89efb"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","960c75a11cfbfcc4fb65ffd6c3cc10e1"],["/2021/03/18/LeetCode之两数之和/index.html","05156b691973ae53a33297f1955ad327"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","1bd98402d757b33ce1a95d5b3b17450f"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","4b41c0b92c30ceb9a4b3c3e890d7d35e"],["/2021/03/21/LeetCode之有效的括号/index.html","2834055fbc716417add07986f964c7cb"],["/2021/03/22/LeetCode之移动零/index.html","45148caa7be5e4fccfc0ff50f40367cc"],["/2021/03/23/LeetCode之爬楼梯/index.html","8d5c6795e01e87b08b43d5a976a9eb14"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","e13d7e3b1750f806203e08b06c6edc1d"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","6f121a96425eaaec334f3ae2bac05267"],["/2021/03/26/LeetCode之最大子序和/index.html","82318b3c53fdf4518bc6e8edff404fc3"],["/2021/03/27/LeetCode之子集/index.html","a393fa9757d25ce141cdf52316c1e65f"],["/2021/03/28/LeetCode之合并二叉树/index.html","3fc7112aeafcdd9721fd57b9d49a544c"],["/2021/03/29/LeetCode之翻转二叉树/index.html","e36a07ef3ba8f905c9ddf8997820bb92"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","adc1f873ef8f816d9c26c4be4f417732"],["/2021/03/31/LeetCode之翻转链表/index.html","7f6d31b0e6d638d9da68f331724db1f8"],["/2021/04/01/LeetCode之相交链表/index.html","d55d2da35b8d055ab150abfa33c60d48"],["/2021/04/02/LeetCode之最小栈/index.html","40f94dd92658ac45aaf57533841caf35"],["/2021/04/03/LeetCode之对称二叉树/index.html","685c4df492af40a3b41da6f3df3c5cf9"],["/2021/04/04/LeetCode之环形链表/index.html","787723ac675ab4d1df4918bcb7a11452"],["/2021/04/05/LeetCode之二叉树的直径/index.html","cf21271c53d89797f3fe3e6da9b50f36"],["/2021/04/06/LeetCode之回文链表/index.html","76299428d9eabb68ddc04b818c210598"],["/2021/04/07/LeetCode之比特位计数/index.html","a46bf2a7e69c651c79b4111feff772d8"],["/2021/04/08/LeetCode之全排列/index.html","b5ae0ff39094dd6b4831c69b6caa72e4"],["/2021/04/09/LeetCode之括号的生成/index.html","a3b6fe2c2a2c52aa46314c49f884f4d1"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","c9d5ec88ae9db0f5bc29e39044c4b3e6"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","bb20499ae9fe2abbfa66fc25e0a7d705"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","5fe2ec6823c3ba7c7837c810053bfe70"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","f619fc7db40742a75d4403590282f815"],["/2021/04/14/Mybatis/index.html","016800c51095445bdeb932438ac63ad5"],["/2021/04/15/Spring-1/index.html","3de2ac3e434bbb2d55cb397c9adfc924"],["/2021/04/25/Spring-2/index.html","e8ed58bdd06ff92426708a8f9c6c5cd2"],["/2021/04/27/SpringMVC-1/index.html","0c99fff82399e717f20704aad6299168"],["/2021/04/29/SpringMVC-2/index.html","4c01b8088a120671dd760b4df7994552"],["/2021/05/03/冒泡排序/index.html","ba730f07728bbe42211fbc8d8bb23288"],["/2021/05/08/选择排序/index.html","531a658d2865f022eb02fefdc3cefa86"],["/2021/05/12/插入排序/index.html","da9044f7c30591dd560d5aaf5303ef40"],["/2021/05/15/快速排序/index.html","80d27c8b7ff4e1ec943313272e9b7d1f"],["/2021/05/19/基数排序/index.html","aa1804069dc8b8ca1d8a0a42751ab3b3"],["/2021/05/20/哈希排序/index.html","7a11d9a6ab6d626c64f129465bc02299"],["/2021/05/21/归并排序/index.html","76d92590065c784a2de8db3a1f6f70d7"],["/2021/05/22/二分查找/index.html","32c8a99fbc1980ce9358214281ba37f5"],["/2021/05/26/差值查找/index.html","09264e9d70aea77029a04e1ad8e15cf5"],["/2022/01/12/高精度大整数计算/index.html","a3961947e334d0061f8cbea4108857df"],["/2022/01/22/前缀和/index.html","b8198ec2f5d1be940f90661af4d07943"],["/2022/01/23/差分/index.html","12fd2a0dc33bf1f3f9ca8636f7d956cd"],["/2022/04/04/MyBatisPlus/index.html","c5162a5c2792e4edded6575830499ea0"],["/2022/08/17/jQuery/index.html","f27e0c7c8050680814045ca5ccc25d64"],["/2022/08/19/JavaScript/index.html","1220bd22cbe86f05338b851db746f942"],["/2022/08/22/Ajax/index.html","12166dbd8a2e044e67e3b6b1fcf91561"],["/2022/08/23/Promise/index.html","217394c5a3f4ac80b49a6965c9c76b8a"],["/2022/08/24/Axios/index.html","d3620da747e412b7ca21e48629d8eeb8"],["/2022/08/25/H5本地存储/index.html","ec9af16f722a47cea6dde9e4f2d3389e"],["/2022/08/26/mock/index.html","757090250106759311fe53319d95067b"],["/2022/08/31/VueJs/index.html","bbd065793d0ea14cf7411abeac72ad2f"],["/2022/09/01/vue组件化/index.html","199044c792393ee87e9f86e7f6d99b7f"],["/2022/09/04/VueCLI/index.html","316c603710e988a201b7ac19e3c68d04"],["/2022/09/07/vue实现动画/index.html","2e4f9935dc4c677b4dbef854d655c05b"],["/2022/09/09/Vue响应式方法/index.html","7e9162c9ca20086f911ef772feae3ca3"],["/2022/09/10/Vue异步请求/index.html","dbe45758b6db328f1652d771c5056fb3"],["/2022/09/11/vue-Router/index.html","12efc4849f9d1da601caa0626fb2c8ad"],["/2022/09/13/Vuex/index.html","fd9e9be1c1b0bf1209c802dffb097609"],["/2022/09/15/SpringBoot/index.html","0390d7fdbdd28839374b67a45f2f8bc6"],["/2022/09/16/SpringBoot配置FastJson/index.html","667cc9fb4c6b2b1a90a3641b990299ec"],["/2022/09/19/SpringBoot参数校验/index.html","e6cf4ea91d46252f59f48bcf06ce5274"],["/2022/09/20/SpringBoot的异常处理/index.html","0862ff23d05a8f57b21d6680cc88467a"],["/2022/09/21/SpringBoot统一响应处理/index.html","df0d1fe1ca3494324b97e1a40b1d5e22"],["/2022/09/28/Linux/index.html","5b875c56397bc6e15d5c2bccba3b91aa"],["/2022/10/02/中间件/Redis/redis基础/index.html","a29225096ce41aef14862b7fad2ccacc"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","3ccd44f9c769a559495cd415159f00ea"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","02943678158ff42831dffbeb317ee5a3"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","2ef2c936abcb294420b5139202ccddda"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","f28001500d28268d6d9046d892fa8a2f"],["/2022/10/17/中间件/Redis/Redis集群/index.html","4646f7ed67bfcc2e9e7b1091812d3e86"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","2e44dbd7c29556b6de936a4977c3df32"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","ea70ca3e96d2659c1e00a10da5bf28de"],["/2022/11/03/Spring-Security/index.html","908c285f6a2f80f327ae2ecb900ad968"],["/2022/11/08/SpringBoot日志/index.html","2b8c1b31dd8912e2b3c8fe977b91afe6"],["/2022/11/11/Swagger2/index.html","b91dc204cdae9646bdd3d767c9ac3046"],["/2022/11/21/Nginx-一/index.html","373ac2b6fb57c47e4f092b7ef4e376f2"],["/2022/11/23/Nginx-二-代理服务/index.html","f83ef4db4e00ced64f398e820fe446a7"],["/2022/11/24/nginx-三-负载均衡/index.html","5ee4fa3b806bdaf3718a9823eafd24d0"],["/2022/11/26/nginx-四-缓存集成/index.html","a23228d2ed451b26e2988557aea1fc21"],["/2022/11/28/nginx-五-动静分离/index.html","0bf357defe8884f3d48509fa78b5ec7d"],["/2022/11/29/nginx-六-制作下载站点/index.html","b706bb9d3c39fb4051e7625a7c222c66"],["/2022/12/06/docker基础/index.html","a92fb72ebb6883d09aa7cf4974a0842d"],["/2022/12/09/Docker高级/index.html","d28420afc77f3d4f16f3b7504df65f65"],["/2023/01/04/MongoDB/index.html","182468008e10f78f43f9d99a9a5eb7bd"],["/2023/02/05/消息队列/index.html","6eb66dd00df336b7ee90f72873702040"],["/2023/02/12/RabbitMQ集群/index.html","f3517330fcabccbc0d1cff144f7597e2"],["/2023/03/10/CICD/index.html","720b49cb7bdd2728ce171f12c0061589"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","dfd56d22526ad40700dc344ab85ca196"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","771fc0af392fed16f51412d61a2faf1f"],["/2023/03/13/NIO/index.html","7a5e596d3bf3d6765509ef1a4b3a76b5"],["/2023/03/14/Netty/index.html","c2350ef9c0849b652d4117817469d68e"],["/2023/03/15/SpringCloud/index.html","48650649a3a0b24616b98136a222de3c"],["/2023/03/17/分布式系统认证/index.html","efd37751244a6f212b95a4d9bf1cad02"],["/2023/03/19/JVM概述/index.html","701900524f38d56290fad3160da9cfb0"],["/2023/03/23/类的加载过程/index.html","02aecd5d965cb9d5c48dfe1b5deeff45"],["/2023/03/28/对象的实例化/index.html","88465ebf6722549b22a8a7425e19dd54"],["/2023/04/01/运行时数据区/index.html","e099479e7680e5dc625d54c0ea27091a"],["/2023/04/04/执行引擎/index.html","ded11989dc7338c313dde9e8ad394b32"],["/2023/04/06/对象引用/index.html","073eb3177806ee997f400fde289889af"],["/2023/04/09/垃圾回收/index.html","828560f7816c4045eaf62443c0568db9"],["/2023/04/11/垃圾回收器/index.html","0f682f0ef126f2b54d971ae5e1981685"],["/2023/04/14/Class字节码文件/index.html","a9946d1aeb8235f689e9422a0851cc7a"],["/2023/04/17/设计模式总结/index.html","1777d8f4cb76a065b0cbbbcf22ca9b1c"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","18174cf695fa30fc803d0ee974dfdafb"],["/404.html","9bb89ca0210deaaefacb9907579ba2b7"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","72790168197a280c25c08545897b708e"],["/archives/2021/02/index.html","a5e5c5d18edddc419622799ad630ee4e"],["/archives/2021/03/index.html","539c2712ba3d2b316f0c2e3e8489d7df"],["/archives/2021/03/page/2/index.html","38fb6d9aa3970d37e8928f6efd958884"],["/archives/2021/03/page/3/index.html","defc62d34a6fc8159cac13626fae0d25"],["/archives/2021/04/index.html","485057a676764f4700d7c844395d6831"],["/archives/2021/04/page/2/index.html","621302e72dc175b0e72e1733d47cdcb2"],["/archives/2021/05/index.html","09511c18370bc201a2d57aec68018dca"],["/archives/2021/index.html","fc8a988ac866fcd4a7d3d5d4c6ef9241"],["/archives/2021/page/2/index.html","d8eb0a4979608828d0c251ec03f2e803"],["/archives/2021/page/3/index.html","a3cb51403ba623ac59d1f71b65247d02"],["/archives/2021/page/4/index.html","700e5837e0f1eb52bf47c7bda8b93a8a"],["/archives/2021/page/5/index.html","3dec520afb1a4e9705ca079b1c5a68db"],["/archives/2021/page/6/index.html","81f0e6518075eed839dd5a3b5e511ee1"],["/archives/2021/page/7/index.html","d4b005a442ac3557b2870e1a88e8d26a"],["/archives/2022/01/index.html","38abac183c7769609450b0b52dc1894a"],["/archives/2022/04/index.html","6a0c7c375142345aa8a6372402864f3a"],["/archives/2022/08/index.html","6acebaeca1ec45dbca5640e12a136ec3"],["/archives/2022/09/index.html","247f2d7829f24073a504d88e87dd5088"],["/archives/2022/09/page/2/index.html","fd8ec636abb3756e2da4904779d2ad08"],["/archives/2022/10/index.html","78a617db5a59335ef97682d125603046"],["/archives/2022/11/index.html","2f09e06e16fb29d43000aedf63312101"],["/archives/2022/12/index.html","c81b53c3a8173e3a0a01e1079a043c5c"],["/archives/2022/index.html","2b8a61b110bd93d0b750f832701db6a7"],["/archives/2022/page/2/index.html","007ae644ef97d20402b8328352d1077d"],["/archives/2022/page/3/index.html","5fdd791cca247c4f5e5e7cc813bc3015"],["/archives/2022/page/4/index.html","62d4ac2eb2654181f0cfca417bc8834c"],["/archives/2022/page/5/index.html","ef92f66fd2979881364e0f1efe3a2249"],["/archives/2023/01/index.html","6a7aedf5dd1376321127d5237750ee78"],["/archives/2023/02/index.html","7b42fc1f09836b6bbdc83ce20c8fd507"],["/archives/2023/03/index.html","4d8d7fb6875cdb91a17b31cd3c5aaef1"],["/archives/2023/04/index.html","0f72cb490ba4124a7a76b6faebbba863"],["/archives/2023/index.html","79f9def3582532853f33d6d5af1fbdab"],["/archives/2023/page/2/index.html","9887c7fe1a238e1d7c44c5f82dc893b2"],["/archives/2023/page/3/index.html","24a9b8f10700313e8a2f978f814384a7"],["/archives/index.html","857567ec612405bbd84be64dc4e2b986"],["/archives/page/10/index.html","3a2a8323cd1ecd1b85b6a3f31987ce1a"],["/archives/page/11/index.html","f1beec2660fc1b1ece703aa9e781eccc"],["/archives/page/12/index.html","c1143bcc9c0d61d578e0e4f5ff666540"],["/archives/page/13/index.html","7a81734f46dc6ca125f44ba2a190b896"],["/archives/page/2/index.html","4349f378e02b199e3541d356163fba4a"],["/archives/page/3/index.html","c6c5158ef2b1a62ac109d83c3f74e6e8"],["/archives/page/4/index.html","98bd38138ad113e432b263fe49cac3b0"],["/archives/page/5/index.html","bb611ee17f89b971b6aa9c6b86b19a85"],["/archives/page/6/index.html","bc1c2da1c1bde078fca68c6a0cdfd3c5"],["/archives/page/7/index.html","f134de70098d12e8af5aabe7bb5a7675"],["/archives/page/8/index.html","432fb18c0e34d9c34479d1918c60a93b"],["/archives/page/9/index.html","efd9e146d3136383027faad56724d357"],["/categories/CICD/index.html","58d0160b3db5f0fe36389b2e6e11fb0f"],["/categories/Docker/index.html","f08663a23f119d842f4546a3876cfe0e"],["/categories/JVM/index.html","ff841f8c69fd5160be953f61a54328f4"],["/categories/LeetCode/index.html","35c1f6d42300faca2ad5947276de329b"],["/categories/LeetCode/page/2/index.html","432cad000ab2bfa3c20c82dacb0d64d9"],["/categories/LeetCode/page/3/index.html","6c08c44344154082778220695a803d28"],["/categories/Linux/index.html","4fcd65b1511597d60c7210230d9cbb87"],["/categories/NIO/index.html","6120e2c9ae556a23a413fce215b2978c"],["/categories/Netty/index.html","bdd9b9b1b86bdd1a29f8319f4d5b3051"],["/categories/Nginx/index.html","2cb16b23616fabbaee90d09e2ed37ee8"],["/categories/SSM/index.html","327fe3c56476b9687b4fdebe786c17be"],["/categories/Spring-Security/index.html","42aeb748e3404f78a7e833bb26ee458e"],["/categories/SpringCloud/index.html","1628ae6d9e203732b3134038f279a5e2"],["/categories/Spring框架/index.html","463ea0fe1a768eeadf82641857db68cd"],["/categories/Spring框架/日志/index.html","e44126e2b7919d0c53dee1da8b96b4f5"],["/categories/Swagger/index.html","1d918de492563511a9dcb373a26f3bb8"],["/categories/Vue/index.html","6dc9bcfc8adccf6b266803d702c77381"],["/categories/index.html","f9a455e2c0012dfa83fba340182639d7"],["/categories/中间件/ElasticSearch/index.html","8e59093dd5f9330965cf23571ad04d8b"],["/categories/中间件/Redis/index.html","a4dc2d5cd51ead39abd0b8abe7161aa4"],["/categories/中间件/index.html","3e8cfca013bf054c4ad86f102991b775"],["/categories/分布式权限认证/index.html","7c6732f81cb189ff1757470a65c1b146"],["/categories/前端/index.html","72a72e8275b83dcc1c44ab3c98964b47"],["/categories/博客/index.html","549c384b00d3869696cf9161787448aa"],["/categories/学习路线/index.html","59e72740743053df0518e054b34ed3d0"],["/categories/工具使用/Git/index.html","87d03905fa31d7273d253758d14d5c59"],["/categories/工具使用/index.html","f559d0fa14e5f0db95cfc98165f94f05"],["/categories/工具使用/markdown/index.html","dae780368ccebabb2a74ac03915b57a0"],["/categories/数据库/index.html","14e95b41b63bb28c6c2805893a08f68e"],["/categories/消息队列/index.html","f97e7a108723d2c8860f9dbedaa5ec0e"],["/categories/算法/index.html","533f64cdea29f5936cc26371d61fe1c6"],["/categories/算法/page/2/index.html","c6da1144827f8069c6de561a63dab6ae"],["/categories/计算机基础/index.html","98b00509b2ad7ec4c7ce27c499256dd2"],["/categories/计算机基础/操作系统/index.html","e6a2ccf750c587bef3a478e256552996"],["/categories/设计模式/index.html","d36be5cf6abbb0222d1eeec27802ce95"],["/categories/设计模式/page/2/index.html","6d1de69f2c08342588b6229f64ec05e5"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","56fcff1ea82b16716219138b8276871c"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","e6f0c6f2c909d0adfbc024b019dda7b5"],["/messageboard/index.html","6c0ba32db6c8743f2f9bca98a0a7083d"],["/page/10/index.html","5e7a71dccae4e6bfd5df64676f534c08"],["/page/11/index.html","88fbd6e643dee3eb3bd61a3fee809668"],["/page/12/index.html","6b3b99339570befbf598661ec6f4d4b9"],["/page/13/index.html","5b265908f811eb430ceb08004da97a53"],["/page/2/index.html","5bb4539b46da3258601ae757b171aaf2"],["/page/3/index.html","21c6cea63adf26dfa91ba86d875fb527"],["/page/4/index.html","3ad96cbf9447bef99947bb5fc86954c7"],["/page/5/index.html","b888e81e2f6ee75a2fc6e7787bdc13c0"],["/page/6/index.html","9c7e021fe443218470441dc776ea395c"],["/page/7/index.html","f30104a5ef43fcc2e97377f3142a7e48"],["/page/8/index.html","95d89c1cf62c33a2633aec6cd51fe7c5"],["/page/9/index.html","2de3d56f063290d3a3436789af623628"],["/sw-register.js","1e1d2822c64f486054ee214f74be1dfb"],["/tags/Ajax/index.html","8e4540722e1077ffc6a372347857e4ce"],["/tags/Axios/index.html","66c1535a4180762f766f1e55eb6f0178"],["/tags/CICD/index.html","89d55cb30874d9e5e7379ebb8222d6d1"],["/tags/Docker/index.html","da603cb4fcd719d681eae52adc4e5ad8"],["/tags/ELK/index.html","57156db80faec9af3f4f26dd3ae02de2"],["/tags/ElasticSearch/index.html","d5eb4a146732c0f2fe54981a2010c9f0"],["/tags/Git/index.html","624f93e99d45aafbfd7cf058e67552ba"],["/tags/H5/index.html","d72c08333fa3e1fc64fad332ebf0bdcc"],["/tags/JVM/index.html","300bbd1e4d3bddfcdd3ea19fd90c1798"],["/tags/JVM内存模型/index.html","be390baf9f690cf0444d4b996195d165"],["/tags/JVM执行引擎/index.html","fee1cfb5543888c11a5de47063765a3b"],["/tags/JavaScript/index.html","693817ee86e3298c8f918579b89106b0"],["/tags/Kibana/index.html","9ddec9a851b21abbf33c1369ddaa824f"],["/tags/LeetCode/index.html","8e5fa9bb0f9d09a9646a57c8b7e3a2f8"],["/tags/LeetCode/page/2/index.html","1eae6fa7921401c7073abfd9f44e1433"],["/tags/LeetCode/page/3/index.html","2f8d16b19e55bca05f74967416e0a005"],["/tags/Linux/index.html","f05b28ec6d880c1aa1399679fa148f3e"],["/tags/Logstash/index.html","770842c6e2d027072dc2964c18b93c25"],["/tags/Mock/index.html","bfec93ffc8a3ed7e1bfefde358d26e4e"],["/tags/MongoDB/index.html","c7fefdc04a52689585560d75e2f6f00d"],["/tags/Mybatis/index.html","1d8c8530d3423e4c4e7bf4fa57a97218"],["/tags/MybatisPlus/index.html","b18deeffefd2ae8308be4507c9e018af"],["/tags/NIO/index.html","70d88318b540079cce5df896755b0440"],["/tags/Netty/index.html","efb8f2eb83b032964a1f63cd12410c2d"],["/tags/Nginx/index.html","a52c3304ceda7cc4d221c2ad2a514421"],["/tags/Promise/index.html","35e8391999be3a671cf73f2def9bb09a"],["/tags/RabbitMQ/index.html","1fbe4176b6217d704d0a9e6ab12dcae6"],["/tags/Redis/index.html","2f5f9622791790b5c23b6e33d37c9eff"],["/tags/SSM/index.html","464ea9e0173db725603bad5a3b4adf07"],["/tags/Spring-Security/index.html","98510910aacb66ee16062d6f7c3c9c4d"],["/tags/Spring/index.html","8a9cebe4def68f57d85acb9f7972cc85"],["/tags/SpringBoot/index.html","ffdf7f2194fdf1238d45a2c757481018"],["/tags/SpringCloud/index.html","b8b74539ede15bb675083b685711292b"],["/tags/SpringMVC/index.html","ad11e3c3deb8112c7d9787804ba90211"],["/tags/Swagger/index.html","1267a6e68c461bdf8d138c50f4f00672"],["/tags/hexo/index.html","60f3528846a059fc5f3a0d9d6df653ae"],["/tags/index.html","4eef3ae3a1033ecdbd3b876e2ca8b5c4"],["/tags/jQuery/index.html","8453a392f41cce0602daefa40f094d34"],["/tags/java/index.html","c9bb54a82fd02f09d2e7a382000bbbac"],["/tags/markdown/index.html","eee04f81e7ebc42f59f9448ac2eb0bc5"],["/tags/mysql-数据类型/index.html","c81655b199e2055b1937a11a69f02335"],["/tags/mysql/index.html","06a96ab4d748bec594e0b035c3214c7d"],["/tags/noSQL/index.html","60c98a328b7a8d126306bcb54beb5c0f"],["/tags/typora/index.html","a84c6739f59389e74cc7aa9e2c91dd13"],["/tags/vue/index.html","d2c86c112bd5a53a22163406e8fc2e24"],["/tags/享元模式/index.html","a9ff402d571bf60c39a10ac92aafc188"],["/tags/代理模式/index.html","daaf06a3923987c2059641931deba957"],["/tags/分布式/index.html","accb3bc2100f4ce0a124f715abfb40a5"],["/tags/分布式系统/index.html","852026a71d684ae7c7649abed353ec64"],["/tags/前端/index.html","7c6bbbb6433508eafe1646573757a24e"],["/tags/前端/page/2/index.html","51646cf2c4bc886ca1617c74b65216fd"],["/tags/博客/index.html","8cc03ba1af4d4104f207cf13485d1c89"],["/tags/后端/index.html","91019744b52f3b253f670c4013508c44"],["/tags/外观模式/index.html","95987362a71dfecaa30ffcbcc9c8099c"],["/tags/容器技术/index.html","b14de8f9f4dd06b9da2bc012a531ba05"],["/tags/工厂方法/index.html","caced4b9e7b2b975647a744261a64c39"],["/tags/微服务/index.html","b22089349e035ee29bbca133433d7997"],["/tags/抽象工厂/index.html","50cd5f500753aef570f2a544e63e00f3"],["/tags/持续集成持续部署/index.html","f3f2ff15fb7aea40ee9f7d5d624caecc"],["/tags/排序/index.html","8c0e66101fa19b3adae82ace7febe551"],["/tags/搜索引擎/index.html","b7e3dacfe17e695eb7656cb0494a50d9"],["/tags/操作系统/index.html","310b54b28d09d6859a09d5a5e881f29a"],["/tags/数据库/index.html","1280f8557a2225647908790223e54692"],["/tags/日志/index.html","3cdff7b4efbbf5e8155526477e4a745a"],["/tags/服务器/index.html","bee4b519efffd28eabe3caeea1ee8cf2"],["/tags/权限认证/index.html","3dd19a0c4163905cc7a70d1dbd12dfed"],["/tags/查找/index.html","69843df939234ed5b5a06e0ed5938480"],["/tags/桥接模式/index.html","2430d60224ac34d36b7aaff38383a2fe"],["/tags/模板方法模式/index.html","f019b4a84f63cc47de9d98654be1d059"],["/tags/消息队列/index.html","a5fd02ee2bdca67d9ab7cc35d6b34b43"],["/tags/版本控制/index.html","943b6e75563dcd433b10d030eed4f29d"],["/tags/策略模式/index.html","d1c0aac6a96d1864d0300806854356b1"],["/tags/简单工厂/index.html","33234877bb8c47c6d1bedc25ca853a97"],["/tags/算法/index.html","64d22fbd9aca1cdb5bef802effe95079"],["/tags/算法/page/2/index.html","fda8b9011878633d99e722217be1f1ac"],["/tags/组件化/index.html","2c06aa24b6367b1d417a177251282cad"],["/tags/缓存/index.html","0455420db528d139a3c24a84cd66a996"],["/tags/观察者模式/index.html","61c286c53e94557e8ab951edc715899c"],["/tags/设计模式/index.html","dbff2b501b73c5de8f3ce42ff4cbb11c"],["/tags/设计模式/page/2/index.html","4a5e795d30aa996efe253d81be36cd82"],["/tags/进程管理/index.html","99f57e81b0b6789ee770e56454364915"],["/tags/适配器模式/index.html","94ab9edc61173d6b59b7d8e26f66f004"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
