<template><div><h3 id="类加载机制" tabindex="-1"><a class="header-anchor" href="#类加载机制"><span>类加载机制</span></a></h3>
<ul>
<li>
<p>虚拟机将class文件加载到内存，并对数据进行校验、解析、转换和初始化，最终形成虚拟机可以识别的Java类型</p>
</li>
<li>
<p>过程：</p>
<ul>
<li>
<p>加载：查找并加载类的二进制文件</p>
</li>
<li>
<p>验证：确保被加载类的正确性</p>
</li>
<li>
<p>准备：为类的静态变量分配内存，并对其进行初始化为默认值</p>
</li>
<li>
<p>解析：将类的符号引用转换为直接引用</p>
</li>
<li>
<p>初始化：为类的静态变量赋予正确的初始值</p>
</li>
</ul>
<p><img src="@source/images/1.png" alt="img"></p>
<p><strong>需要注意的是：解析不一定在初始化之前，也有可能在初始化之后，为Java运行时绑定做准备</strong></p>
</li>
</ul>
<h3 id="双亲委派机制" tabindex="-1"><a class="header-anchor" href="#双亲委派机制"><span>双亲委派机制</span></a></h3>
<p><img src="@source/images/ea3f1967e6604318a07e2289c8cec2ec.png" alt="ea3f1967e6604318a07e2289c8cec2ec.png"></p>
<ul>
<li>当一个calss文件要被加载时（<strong>此处排除自定义加载器</strong>），首先看应用加载器是否加载过，此class文件，没有加载过，则向上找父类加载器，直到BootsrapClassLoader加载器之前都是在验证自己是否加载过，加载过则返回；到BootsrapClassLoader之后，才会验证自己是否能加载，可以的化则直接返回，否则让子类加载器去加载，如果到底层加载器，都无法加载，则会抛出异常（当前class不存在）。</li>
</ul>
<h3 id="jvm内存结构" tabindex="-1"><a class="header-anchor" href="#jvm内存结构"><span>JVM内存结构</span></a></h3>
<ul>
<li>线程私有的：程序计数器、虚拟机栈和本地方法栈</li>
<li>线程共享的：方法区和堆内存</li>
<li>内存结构：
<ul>
<li>程序计数器：线程私有且只读的内存区域，<strong>用于保存JVM下一条将要执行指令的地址</strong></li>
<li>Java虚拟机栈：是每个线程运行需要的内存空间，每个方法执行的同时，都会创建一个栈帧，<strong>存储局部变量表、操作数栈、动态链接和方法出口等</strong></li>
<li>本地方法栈：是一些带有native关键字的方法，用于调用本地的C或C++方法</li>
<li>堆内存：是所有线程共享的一片区域，<strong>虚拟机启动时创建</strong>，存储对象实例，通过new关键字创建的对象，都会使用堆内存</li>
<li>方法区：用于存储已被虚拟机加载的类信息、常量、静态变量和即时编译的代码</li>
</ul>
</li>
</ul>
<h3 id="判断是否可进行垃圾回收的算法" tabindex="-1"><a class="header-anchor" href="#判断是否可进行垃圾回收的算法"><span>判断是否可进行垃圾回收的算法？</span></a></h3>
<ul>
<li>引用计数器：
<ul>
<li>当对象增加引用时，计数器加一，减少引用时，计数器减一，直到计数器为0，则可回收</li>
<li>缺点是，会出现循环引用的情况，两个对象相互引用，Java虚拟机不再采用此方法</li>
</ul>
</li>
<li>可达性分析
<ul>
<li>通过GcRoots为起点进行搜索，能够到达的对象就是存活的，否则可以回收</li>
<li>可作为GCRoots的对象？
<ul>
<li>虚拟机栈中引用的对象</li>
<li>本地方法栈引用的对象</li>
<li>方法区中类静态属性或常量引用的对象</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="垃圾回收算法" tabindex="-1"><a class="header-anchor" href="#垃圾回收算法"><span>垃圾回收算法</span></a></h3>
<ul>
<li>标记清除算法：
<ul>
<li>将存活的对象进行标记，然后清理掉未被标记的对象</li>
<li>缺点是：会产生大量不连续的内存碎片，导致无法给大对象分配内存</li>
</ul>
</li>
<li>标记整理算法：
<ul>
<li>先采用标记清除确定可回收的对象，然后整理剩余对象，将可用对象移动到一起，使内存紧凑</li>
<li><strong>优点是：内存利用率高，缺点是速度慢</strong></li>
</ul>
</li>
<li>复制算法：
<ul>
<li>将内存分为两个等大小的区域<strong>from和to（to中为空）</strong>，将GcRoots引用的对象，从from移动到to，再回收from中不再引用的对象，此时交换from和to两片区域</li>
<li><strong>优点是，不会产生碎片，缺点是，只能利用一半的内存空间</strong></li>
</ul>
</li>
<li>分代收集：
<ul>
<li>根据对象的存活周期，将内存划分为几块，不同块采用不同的算法</li>
<li>一般分为新生代（年轻代）和老年代</li>
<li>新生代：每次都会有大量的对象被回收**（复制算法）**
<ul>
<li>伊甸区（Eden）：新产生的对象会在这里</li>
<li>幸存区（Survivor）：经过一次，minitor Roots之后会进入幸存区</li>
</ul>
</li>
<li>老年代：每次回收只有少量对象被回收**（标记清除或标记整理）**</li>
</ul>
</li>
</ul>
<p><img src="@source/images/f517b6146b28471b87d0c8ccfb115ee5.png" alt="f517b6146b28471b87d0c8ccfb115ee5.png"></p>
</div></template>


